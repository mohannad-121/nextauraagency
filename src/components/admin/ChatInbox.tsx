"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { createBrowserSupabaseClient } from "@/lib/supabase/browser";

type Status = "ai" | "waiting_for_agent" | "human" | "closed";
type Conversation = { id: string; status: Status; language: string; summary?: string | null; chat_visitors?: { name?: string | null; email?: string | null; phone?: string | null } | null };
type Message = { id: string; sender_type: "visitor" | "ai" | "agent" | "system"; content: string; metadata?: { agent_name?: string } };
const filters: (Status | "all")[] = ["waiting_for_agent", "human", "ai", "closed", "all"];

export function ChatInbox({ initialConversations }: { initialConversations: Conversation[] }) {
  const [conversations, setConversations] = useState(initialConversations);
  const [selectedId, setSelectedId] = useState(initialConversations[0]?.id ?? "");
  const [filter, setFilter] = useState<Status | "all">("waiting_for_agent");
  const [messages, setMessages] = useState<Message[]>([]);
  const [draft, setDraft] = useState("");
  const selected = conversations.find((item) => item.id === selectedId);
  const shown = useMemo(() => conversations.filter((item) => filter === "all" || item.status === filter), [conversations, filter]);

  const refreshConversations = async () => {
    const response = await fetch("/api/admin/chat");
    if (!response.ok) return;
    const data = await response.json() as { conversations: Conversation[] };
    setConversations(data.conversations);
  };

  useEffect(() => {
    try {
      const supabase = createBrowserSupabaseClient();
      const channel = supabase.channel("admin-chat-inbox")
        .on("postgres_changes", { event: "*", schema: "public", table: "chat_conversations" }, () => { void refreshConversations(); })
        .on("postgres_changes", { event: "INSERT", schema: "public", table: "chat_messages" }, () => { void refreshConversations(); })
        .subscribe();
      return () => { void supabase.removeChannel(channel); };
    } catch { return; }
  }, []);

  useEffect(() => {
    if (!selectedId) return;
    const loadMessages = async () => {
      const response = await fetch(`/api/admin/chat?conversationId=${selectedId}`);
      if (!response.ok) return;
      const data = await response.json() as { messages: Message[] };
      setMessages(data.messages);
    };
    void loadMessages();
  }, [selectedId]);

  const action = async (actionName: "accept" | "return_to_ai" | "close" | "send", content?: string) => {
    if (!selected) return;
    const response = await fetch("/api/admin/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: actionName, conversationId: selected.id, content }) });
    if (!response.ok) return;
    if (actionName === "send") setDraft("");
    await refreshConversations();
    const messagesResponse = await fetch(`/api/admin/chat?conversationId=${selected.id}`);
    if (messagesResponse.ok) setMessages((await messagesResponse.json() as { messages: Message[] }).messages);
  };

  const submit = (event: FormEvent) => { event.preventDefault(); if (draft.trim()) void action("send", draft); };

  return <main className="min-h-screen bg-[#050505] px-4 pb-8 pt-28 text-[#F4F0E7] lg:px-8"><div className="mx-auto max-w-7xl"><header className="mb-6"><p className="text-xs font-mono uppercase tracking-widest text-[#C9A45C]">NextAura Internal</p><h1 className="mt-2 text-3xl font-light uppercase">Live Chat Inbox</h1></header><div className="grid min-h-[650px] overflow-hidden rounded-3xl border border-white/10 bg-[#0D0D0D] lg:grid-cols-[290px_1fr_270px]"><aside className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r"><div className="mb-4 flex flex-wrap gap-2">{filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-full px-2 py-1 text-[10px] uppercase ${filter === item ? "bg-[#C9A45C] text-black" : "bg-white/5 text-[#8D8D8D]"}`}>{item.replaceAll("_", " ")}</button>)}</div><div className="space-y-2">{shown.length === 0 && <p className="p-4 text-sm text-[#8D8D8D]">No visitors are waiting right now.</p>}{shown.map((item) => <button key={item.id} onClick={() => setSelectedId(item.id)} className={`w-full rounded-xl border p-3 text-left ${selectedId === item.id ? "border-[#C9A45C]/60 bg-[#C9A45C]/10" : "border-white/10 bg-black/20"}`}><p className="text-sm text-white">{item.chat_visitors?.name || "Visitor"}</p><p className="mt-1 text-[10px] uppercase text-[#C9A45C]">{item.status.replaceAll("_", " ")} · {item.language}</p><p className="mt-2 line-clamp-2 text-xs text-[#8D8D8D]">{item.summary || "No summary yet"}</p></button>)}</div></aside><section className="flex min-h-[440px] flex-col border-b border-white/10 lg:border-b-0 lg:border-r">{selected ? <><div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 p-5"><div><p className="text-lg">{selected.chat_visitors?.name || "Visitor"}</p><p className="text-xs text-[#8D8D8D]">{selected.status.replaceAll("_", " ")}</p></div><div className="flex gap-2">{selected.status === "waiting_for_agent" && <button onClick={() => void action("accept")} className="rounded-lg bg-[#C9A45C] px-3 py-2 text-xs text-black">Accept Chat</button>}{selected.status === "human" && <button onClick={() => void action("return_to_ai")} className="rounded-lg border border-white/15 px-3 py-2 text-xs">Return to AI</button>}<button onClick={() => void action("close")} className="rounded-lg border border-red-300/30 px-3 py-2 text-xs text-red-200">Close</button></div></div><div className="flex-1 space-y-3 overflow-y-auto p-5">{messages.length === 0 ? <p className="text-sm text-[#8D8D8D]">No messages yet.</p> : messages.map((message) => <div key={message.id} className={message.sender_type === "system" ? "text-center text-xs text-[#8D8D8D]" : message.sender_type === "agent" ? "ml-auto max-w-[80%] rounded-2xl bg-[#C9A45C] px-3 py-2 text-sm text-black" : "max-w-[80%] rounded-2xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-[#F4F0E7]"}><span className="mb-1 block text-[9px] uppercase opacity-60">{message.sender_type === "agent" ? message.metadata?.agent_name || "NextAura" : message.sender_type}</span>{message.content}</div>)}</div><form onSubmit={submit} className="flex gap-2 border-t border-white/10 p-3"><input value={draft} onChange={(event) => setDraft(event.target.value)} disabled={selected.status !== "human"} placeholder={selected.status === "human" ? "Reply as NextAura" : "Accept chat to reply"} className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/20 px-3 text-sm outline-none disabled:opacity-50"/><button disabled={selected.status !== "human"} className="rounded-xl bg-[#C9A45C] px-4 text-xs text-black disabled:opacity-40">Send</button></form></> : <div className="m-auto text-[#8D8D8D]">Select a conversation.</div>}</section><aside className="p-5"><p className="text-xs font-mono uppercase tracking-widest text-[#C9A45C]">Visitor profile</p>{selected ? <div className="mt-5 space-y-4 text-sm"><p><span className="block text-[10px] uppercase text-[#8D8D8D]">Email</span>{selected.chat_visitors?.email || "—"}</p><p><span className="block text-[10px] uppercase text-[#8D8D8D]">Phone</span>{selected.chat_visitors?.phone || "—"}</p><p><span className="block text-[10px] uppercase text-[#8D8D8D]">Lead summary</span>{selected.summary || "—"}</p></div> : <p className="mt-5 text-sm text-[#8D8D8D]">No conversation selected.</p>}</aside></div></div></main>;
}
