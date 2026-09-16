import { NextResponse } from "next/server";
import { requireVisitor } from "@/lib/chat/access";
import { generateAssistantReply } from "@/lib/chat/ai";
import { isHandoffRequest, handoffMessage } from "@/lib/chat/handoff";
import { detectLanguage } from "@/lib/chat/language";
import { extractLeadData, mergeLeadData } from "@/lib/chat/lead";
import { allowChatRequest } from "@/lib/chat/rate-limit";

const MAX_MESSAGE_LENGTH = 2_000;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { message?: string; conversationId?: string };
    const content = body.message?.trim();
    if (!content || content.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json({ error: "Message must be between 1 and 2000 characters." }, { status: 400 });
    }

    const { visitor, client } = await requireVisitor(request);
    if (!allowChatRequest(visitor.id)) return NextResponse.json({ error: "Please wait a moment before sending another message." }, { status: 429 });

    let conversation = null;
    if (body.conversationId) {
      const { data } = await client.from("chat_conversations").select("*").eq("id", body.conversationId).eq("visitor_id", visitor.id).maybeSingle();
      conversation = data;
    }
    if (!conversation) {
      const language = detectLanguage(content, visitor.preferred_language === "ar" ? "ar" : "en");
      const { data, error } = await client.from("chat_conversations")
        .insert({ visitor_id: visitor.id, status: "ai", language, last_message_at: new Date().toISOString() })
        .select("*").single();
      if (error) throw error;
      conversation = data;
    }
    if (conversation.status === "closed") return NextResponse.json({ error: "This conversation has ended. Start a new conversation to continue." }, { status: 409 });

    const language = detectLanguage(content, conversation.language);
    const leadData = mergeLeadData(conversation.lead_data, extractLeadData(content));
    const { data: visitorMessage, error: visitorMessageError } = await client.from("chat_messages")
      .insert({ conversation_id: conversation.id, sender_type: "visitor", content, metadata: { language } })
      .select("*").single();
    if (visitorMessageError) throw visitorMessageError;
    await client.from("chat_conversations").update({ language, lead_data: leadData, last_message_at: new Date().toISOString() }).eq("id", conversation.id);

    if (conversation.status === "human" || conversation.status === "waiting_for_agent") {
      return NextResponse.json({ conversation: { ...conversation, language, lead_data: leadData }, messages: [visitorMessage] });
    }

    if (isHandoffRequest(content)) {
      const systemContent = handoffMessage(language);
      const { data: systemMessage, error } = await client.from("chat_messages")
        .insert({ conversation_id: conversation.id, sender_type: "system", content: systemContent })
        .select("*").single();
      if (error) throw error;
      const { data: waitingConversation, error: waitingError } = await client.from("chat_conversations")
        .update({ status: "waiting_for_agent", language, summary: `Visitor requested human support. Latest message: ${content}`, last_message_at: new Date().toISOString() })
        .eq("id", conversation.id).select("*").single();
      if (waitingError) throw waitingError;
      return NextResponse.json({ conversation: waitingConversation, messages: [visitorMessage, systemMessage] });
    }

    const assistantContent = await generateAssistantReply({
      message: content,
      language,
    });
    const { data: assistantMessage, error: assistantError } = await client.from("chat_messages")
      .insert({ conversation_id: conversation.id, sender_type: "ai", content: assistantContent })
      .select("*").single();
    if (assistantError) throw assistantError;
    const { data: updatedConversation } = await client.from("chat_conversations").select("*").eq("id", conversation.id).single();
    return NextResponse.json({ conversation: updatedConversation, messages: [visitorMessage, assistantMessage] });
  } catch (error) {
    console.error("Chat message failed", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Unable to send your message. Please retry or request the NextAura team." }, { status: 500 });
  }
}
