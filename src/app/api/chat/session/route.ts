import { NextResponse } from "next/server";
import { detectLanguage } from "@/lib/chat/language";
import { requireVisitor } from "@/lib/chat/access";

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as { language?: string };
    const { visitor, client } = await requireVisitor(request);
    const language = body.language === "ar" ? "ar" : "en";
    await client.from("chat_visitors").update({ preferred_language: language, last_seen_at: new Date().toISOString() }).eq("id", visitor.id);

    const { data: conversation, error } = await client
      .from("chat_conversations")
      .select("*")
      .eq("visitor_id", visitor.id)
      .in("status", ["ai", "waiting_for_agent", "human"])
      .order("last_message_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    if (error) throw error;

    if (!conversation) return NextResponse.json({ visitor, conversation: null, messages: [], language: detectLanguage("", language) });
    const { data: messages, error: messageError } = await client
      .from("chat_messages")
      .select("*")
      .eq("conversation_id", conversation.id)
      .order("created_at", { ascending: true });
    if (messageError) throw messageError;
    return NextResponse.json({ visitor, conversation, messages: messages ?? [], language: conversation.language });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to initialize chat." }, { status: 401 });
  }
}
