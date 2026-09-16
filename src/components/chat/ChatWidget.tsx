"use client";

import { FormEvent, KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";
import { Bot, MessageCircle, Minus, Send } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase/browser";
import type { ChatConversation, ChatLanguage, ChatMessage, ConversationStatus, SenderType } from "@/lib/chat/types";

type RawMessage = { id: string; conversation_id: string; sender_type: SenderType; content: string; created_at: string; read_at?: string | null };
type RawConversation = { id: string; status: ConversationStatus; language: ChatLanguage; assigned_agent_id?: string | null; summary?: string | null; division?: string | null; lead_data?: Record<string, string> | null; last_message_at: string; closed_at?: string | null };

const quickActions = ["Our Services", "NextAura AI", "NextAura Studios", "NextAura Fit", "FitCoach AI", "Start a Project", "Talk to the Manager"];

function toMessage(message: RawMessage): ChatMessage {
  return { id: message.id, conversationId: message.conversation_id, senderType: message.sender_type, content: message.content, createdAt: message.created_at, readAt: message.read_at };
}

function toConversation(conversation: RawConversation): ChatConversation {
  return { id: conversation.id, status: conversation.status, language: conversation.language, assignedAgentId: conversation.assigned_agent_id, summary: conversation.summary, division: conversation.division, leadData: conversation.lead_data, lastMessageAt: conversation.last_message_at, closedAt: conversation.closed_at };
}

function statusLabel(status: ConversationStatus | undefined, language: ChatLanguage) {
  const arabic = language === "ar";
  if (status === "human") return arabic ? "المدير متصل" : "Manager online";
  if (status === "waiting_for_agent") return arabic ? "بانتظار المدير" : "Waiting for manager";
  if (status === "closed") return arabic ? "تم إنهاء المحادثة" : "Conversation closed";
  return arabic ? "مساعد بالذكاء الاصطناعي" : "AI Assistant";
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [draft, setDraft] = useState("");
  const [conversation, setConversation] = useState<ChatConversation | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [language, setLanguage] = useState<ChatLanguage>("en");
  const supabaseRef = useRef<ReturnType<typeof createBrowserSupabaseClient> | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);

  const welcome = useMemo<ChatMessage>(() => ({
    id: "welcome", conversationId: "", senderType: "ai",
    content: language === "ar" ? "أهلاً 👋 أنا مساعد NextAura. أستطيع مساعدتك في استكشاف خدماتنا ومنتجاتنا أو توصيلك بالفريق المناسب." : "Hi 👋 I’m the NextAura Assistant. I can help you explore our services, products, projects, or connect you with the right team.",
    createdAt: new Date().toISOString(),
  }), [language]);
  const visibleMessages = messages.length ? messages : [welcome];
  const conversationId = conversation?.id;

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visibleMessages.length, open]);

  useEffect(() => {
    const initialize = async () => {
      try {
        const supabase = createBrowserSupabaseClient();
        supabaseRef.current = supabase;
        const { data: userData } = await supabase.auth.getUser();
        if (!userData.user) await supabase.auth.signInAnonymously();
        const detected = navigator.language.startsWith("ar") ? "ar" : "en";
        setLanguage(detected);
        const { data: sessionData } = await supabase.auth.getSession();
        const response = await fetch("/api/chat/session", {
          method: "POST",
          headers: { "Content-Type": "application/json", ...(sessionData.session ? { Authorization: `Bearer ${sessionData.session.access_token}` } : {}) },
          body: JSON.stringify({ language: detected }),
        });
        if (!response.ok) return;
        const data = await response.json() as { conversation: RawConversation | null; messages: RawMessage[]; language: ChatLanguage };
        setLanguage(data.language);
        if (data.conversation) setConversation(toConversation(data.conversation));
        setMessages(data.messages.map(toMessage));
      } catch {
        // The widget remains usable only after Supabase has been configured.
      }
    };
    void initialize();
  }, []);

  useEffect(() => {
    if (!conversationId || !supabaseRef.current) return;
    const channel = supabaseRef.current.channel(`chat:${conversationId}`)
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "chat_messages", filter: `conversation_id=eq.${conversationId}` }, (payload) => {
        const incoming = toMessage(payload.new as RawMessage);
        setMessages((current) => current.some((message) => message.id === incoming.id) ? current : [...current, incoming]);
      })
      .on("postgres_changes", { event: "UPDATE", schema: "public", table: "chat_conversations", filter: `id=eq.${conversationId}` }, (payload) => setConversation(toConversation(payload.new as RawConversation)))
      .subscribe();
    return () => { void supabaseRef.current?.removeChannel(channel); };
  }, [conversationId]);

  const sendMessage = async (content = draft) => {
    const text = content.trim();
    if (!text || sending || conversation?.status === "closed") return;
    setSending(true);
    try {
      const { data: sessionData } = await supabaseRef.current?.auth.getSession() ?? { data: { session: null } };
      const response = await fetch("/api/chat/message", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...(sessionData.session ? { Authorization: `Bearer ${sessionData.session.access_token}` } : {}) },
        body: JSON.stringify({ message: text, conversationId: conversation?.id }),
      });
      const data = await response.json() as { error?: string; conversation?: RawConversation; messages?: RawMessage[] };
      if (!response.ok) throw new Error(data.error);
      if (data.conversation) setConversation(toConversation(data.conversation));
      if (data.messages) setMessages((current) => {
        const additions = data.messages!.map(toMessage);
        return [...current, ...additions.filter((message) => !current.some((existing) => existing.id === message.id))];
      });
      setDraft("");
    } catch (error) {
      setMessages((current) => [...current, { id: crypto.randomUUID(), conversationId: conversation?.id ?? "", senderType: "system", content: error instanceof Error ? error.message : "Unable to send. Retry.", createdAt: new Date().toISOString() }]);
    } finally {
      setSending(false);
    }
  };

  const onSubmit = (event: FormEvent) => { event.preventDefault(); void sendMessage(); };
  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); void sendMessage(); } };

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7">
      {open && (
        <section aria-label="NextAura live chat" className="mb-4 flex h-[min(680px,calc(100dvh-7rem))] w-[calc(100vw-2.5rem)] max-w-[400px] flex-col overflow-hidden rounded-3xl border border-[#C9A45C]/35 bg-[#0A0A0A]/95 shadow-2xl shadow-black backdrop-blur-xl sm:w-[400px]">
          <header className="flex items-center justify-between border-b border-white/10 bg-[#11100D] px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-xl border border-[#C9A45C]/40 bg-[#C9A45C]/10"><Bot className="size-4 text-[#E5C77A]" /></span>
              <div><h2 className="text-sm font-medium text-[#F4F0E7]">NextAura Assistant</h2><p className="text-[10px] font-mono uppercase tracking-wider text-[#C9A45C]">{statusLabel(conversation?.status, language)}</p></div>
            </div>
            <button type="button" aria-label="Minimize chat" onClick={() => setOpen(false)} className="rounded-lg p-2 text-[#8D8D8D] transition hover:bg-white/10 hover:text-white"><Minus className="size-4" /></button>
          </header>
          <div className="flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite">
            {visibleMessages.map((message) => {
              const mine = message.senderType === "visitor";
              const system = message.senderType === "system";
              return <div key={message.id} dir={/[\u0600-\u06FF]/.test(message.content) ? "rtl" : "ltr"} className={system ? "text-center text-xs text-[#8D8D8D]" : mine ? "ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[#C9A45C] px-3.5 py-2.5 text-sm text-[#080808]" : "max-w-[85%] rounded-2xl rounded-bl-sm border border-white/10 bg-[#151515] px-3.5 py-2.5 text-sm leading-relaxed text-[#F4F0E7]"}>{message.content}</div>;
            })}
            <div ref={endRef} />
          </div>
          {!conversation && <div className="flex flex-wrap gap-2 px-4 pb-3">{quickActions.map((action) => <button key={action} type="button" onClick={() => void sendMessage(action)} className="rounded-full border border-[#C9A45C]/30 px-3 py-1.5 text-[10px] text-[#E5C77A] transition hover:bg-[#C9A45C]/10">{action}</button>)}</div>}
          {conversation?.status === "closed" ? <div className="border-t border-white/10 p-4"><button type="button" onClick={() => { setConversation(null); setMessages([]); }} className="w-full rounded-xl border border-[#C9A45C]/40 py-3 text-xs font-mono uppercase tracking-wider text-[#E5C77A]">Start New Conversation</button></div> : <form onSubmit={onSubmit} className="border-t border-white/10 p-3"><div className="flex items-end gap-2 rounded-2xl border border-white/10 bg-black/30 p-2"><textarea aria-label="Message NextAura" value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={onKeyDown} placeholder={language === "ar" ? "اكتب رسالتك..." : "Write a message..."} rows={1} className="max-h-28 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-[#8D8D8D]" /><button disabled={!draft.trim() || sending} aria-label="Send message" className="rounded-xl bg-[#C9A45C] p-2.5 text-black transition hover:bg-[#E5C77A] disabled:cursor-not-allowed disabled:opacity-40"><Send className="size-4" /></button></div><p className="mt-2 text-center text-[9px] text-[#8D8D8D]">AI Assistant • Responses may occasionally be inaccurate.</p></form>}
        </section>
      )}
      <button type="button" aria-label={open ? "Close chat" : "Open chat"} onClick={() => setOpen((value) => !value)} className="flex size-14 items-center justify-center rounded-2xl border border-[#E5C77A]/60 bg-[#12100B] text-[#E5C77A] shadow-lg shadow-[#C9A45C]/20 transition hover:scale-105 hover:bg-[#C9A45C] hover:text-black"><MessageCircle className="size-6" /></button>
    </div>
  );
}
