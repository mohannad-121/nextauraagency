import { detectLanguage } from "./language";
import type { ChatLanguage } from "./types";

const handoffPatterns = [
  /\b(manager|human|agent|real person|live support|talk to (someone|a manager)|speak to (someone|a manager))\b/i,
  /(مدير|موظف|شخص حقيقي|إنسان|اتواصل معكم|احكي مع حدا|بدي شخص|بدي المدير|بدي موظف|تواصل مباشر)/,
];

export function isHandoffRequest(message: string): boolean {
  return handoffPatterns.some((pattern) => pattern.test(message));
}

export function handoffMessage(language: ChatLanguage = "en"): string {
  return language === "ar"
    ? "تم إرسال طلبك لفريق NextAura. يمكنك الاستمرار بإرسال رسائل هنا وسنرد عليك من نفس المحادثة."
    : "Your request has been sent to the NextAura team. You can continue sending messages here and we'll reply in this same conversation.";
}

export function handoffLanguage(message: string, fallback: ChatLanguage): ChatLanguage {
  return detectLanguage(message, fallback);
}
