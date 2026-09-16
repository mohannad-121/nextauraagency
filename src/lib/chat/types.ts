export type ConversationStatus = "ai" | "waiting_for_agent" | "human" | "closed";
export type SenderType = "visitor" | "ai" | "agent" | "system";
export type ChatLanguage = "ar" | "en";

export interface ChatMessage {
  id: string;
  conversationId: string;
  senderType: SenderType;
  senderName?: string | null;
  content: string;
  createdAt: string;
  readAt?: string | null;
}

export interface ChatConversation {
  id: string;
  status: ConversationStatus;
  language: ChatLanguage;
  assignedAgentId?: string | null;
  summary?: string | null;
  division?: string | null;
  leadData?: Record<string, string> | null;
  lastMessageAt: string;
  closedAt?: string | null;
}

export interface ChatVisitor {
  id: string;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  preferredLanguage?: ChatLanguage | null;
}
