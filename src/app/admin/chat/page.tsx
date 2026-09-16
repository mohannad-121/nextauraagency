import { redirect } from "next/navigation";
import { requireAgent } from "@/lib/chat/access";
import { ChatInbox } from "@/components/admin/ChatInbox";

export const dynamic = "force-dynamic";

async function loadConversations() {
  try {
    const { client } = await requireAgent();
    const { data } = await client.from("chat_conversations").select("*, chat_visitors(name, email, phone)").order("last_message_at", { ascending: false });
    return data ?? [];
  } catch {
    redirect("/admin/login");
  }
}

export default async function AdminChatPage() {
  const conversations = await loadConversations();
  return <ChatInbox initialConversations={conversations} />;
}
