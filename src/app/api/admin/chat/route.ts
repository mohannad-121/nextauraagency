import { NextResponse } from "next/server";
import { requireAgent } from "@/lib/chat/access";

const validActions = ["accept", "return_to_ai", "close", "send"] as const;
type Action = typeof validActions[number];

export async function GET(request: Request) {
  try {
    const { client } = await requireAgent();
    const conversationId = new URL(request.url).searchParams.get("conversationId");
    if (conversationId) {
      const { data, error } = await client.from("chat_messages").select("*").eq("conversation_id", conversationId).order("created_at", { ascending: true });
      if (error) throw error;
      return NextResponse.json({ messages: data ?? [] });
    }
    const { data, error } = await client.from("chat_conversations")
      .select("*, chat_visitors(name, email, phone, preferred_language)")
      .order("last_message_at", { ascending: false });
    if (error) throw error;
    return NextResponse.json({ conversations: data ?? [] });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unauthorized" }, { status: 401 });
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { action?: Action; conversationId?: string; content?: string };
    if (!body.action || !validActions.includes(body.action) || !body.conversationId) return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    const { agent, client } = await requireAgent();
    const now = new Date().toISOString();

    if (body.action === "accept") {
      const { data, error } = await client.from("chat_conversations")
        .update({ status: "human", assigned_agent_id: agent.id, updated_at: now })
        .eq("id", body.conversationId).eq("status", "waiting_for_agent").select("*").maybeSingle();
      if (error) throw error;
      if (!data) return NextResponse.json({ error: "This conversation was accepted by another agent." }, { status: 409 });
      await client.from("chat_messages").insert({ conversation_id: body.conversationId, sender_type: "system", content: `${agent.name} from NextAura joined the conversation.` });
      return NextResponse.json({ conversation: data });
    }

    if (body.action === "send") {
      const content = body.content?.trim();
      if (!content || content.length > 2_000) return NextResponse.json({ error: "Message must be between 1 and 2000 characters." }, { status: 400 });
      const { data: conversation, error: conversationError } = await client.from("chat_conversations").select("status").eq("id", body.conversationId).single();
      if (conversationError) throw conversationError;
      if (conversation.status !== "human") return NextResponse.json({ error: "Accept the conversation before replying." }, { status: 409 });
      const { data, error } = await client.from("chat_messages")
        .insert({ conversation_id: body.conversationId, sender_type: "agent", sender_id: agent.id, content, metadata: { agent_name: agent.name } })
        .select("*").single();
      if (error) throw error;
      await client.from("chat_conversations").update({ last_message_at: now }).eq("id", body.conversationId);
      return NextResponse.json({ message: data });
    }

    const update = body.action === "return_to_ai"
      ? { status: "ai", assigned_agent_id: null, updated_at: now, closed_at: null }
      : { status: "closed", closed_at: now, updated_at: now };
    const { data, error } = await client.from("chat_conversations").update(update).eq("id", body.conversationId).select("*").single();
    if (error) throw error;
    await client.from("chat_messages").insert({ conversation_id: body.conversationId, sender_type: "system", content: body.action === "return_to_ai" ? "The conversation has been returned to the NextAura Assistant." : "This conversation has ended." });
    return NextResponse.json({ conversation: data });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to update conversation." }, { status: 500 });
  }
}
