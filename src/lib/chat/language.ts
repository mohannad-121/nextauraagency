import type { ChatLanguage } from "./types";

const arabicPattern = /[\u0600-\u06FF]/g;

export function detectLanguage(text: string, fallback: ChatLanguage = "en"): ChatLanguage {
  const arabicCharacters = text.match(arabicPattern)?.length ?? 0;
  const latinCharacters = text.match(/[A-Za-z]/g)?.length ?? 0;

  if (arabicCharacters === 0 && latinCharacters === 0) return fallback;
  return arabicCharacters >= latinCharacters ? "ar" : "en";
}

export function isArabic(text: string): boolean {
  return detectLanguage(text) === "ar";
}
