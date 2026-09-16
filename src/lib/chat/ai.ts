import type { ChatLanguage } from "./types";

type Answer = { match: RegExp; en: string; ar: string };

const answers: Answer[] = [
  { match: /fitcoach|fitness|workout|training|fitness tech|لياقة|تمارين|فيت كوتش/i, en: "NextAura Fit focuses on fitness technology, AI fitness, workout intelligence, computer vision, personalized coaching, and FitCoach AI. FitCoach AI is NextAura Fit’s flagship product.", ar: "يركز NextAura Fit على تقنية اللياقة والذكاء الاصطناعي للتمارين وذكاء التدريب والرؤية الحاسوبية والتدريب الشخصي. FitCoach AI هو المنتج الرئيسي لـ NextAura Fit." },
  { match: /studio|mobile|game|interactive|creative|app|تطبيق|لعبة|ستوديو|تجربة تفاعلية/i, en: "NextAura Studios builds mobile applications, games, creative software, digital products, experimental software, and interactive experiences.", ar: "يبني NextAura Studios تطبيقات الموبايل والألعاب والبرمجيات الإبداعية والمنتجات الرقمية والبرمجيات التجريبية والتجارب التفاعلية." },
  { match: /website|web app|ai|automation|rag|crm|dashboard|booking|e-commerce|seo|موقع|متجر|ذكاء اصطناعي|أتمتة|حجز|لوحة تحكم/i, en: "NextAura AI works on websites, web applications, AI assistants, RAG and LLM integrations, automation, CRM, dashboards, APIs, booking systems, e-commerce, payments, SEO, analytics, and multilingual products.", ar: "يعمل NextAura AI على المواقع وتطبيقات الويب ومساعدي الذكاء الاصطناعي وأنظمة RAG وتكاملات LLM والأتمتة وCRM ولوحات التحكم وواجهات API وأنظمة الحجز والمتاجر والدفع وSEO والتحليلات والمنتجات متعددة اللغات." },
  { match: /service|what do you do|nextaura|خدمات|ماذا تعملون|شو بتعمل/i, en: "NextAura Agency is a technology group with NextAura AI, NextAura Studios, NextAura Fit, and NextAura OS. We can help you identify the right division for your project.", ar: "NextAura Agency هي مجموعة تقنية تضم NextAura AI وNextAura Studios وNextAura Fit وNextAura OS. يمكنني مساعدتك في تحديد القسم المناسب لمشروعك." },
  { match: /start|project|contact|price|budget|timeline|مشروع|تواصل|سعر|ميزانية|مدة/i, en: "You can start a project from the Start a Project page. Share what you want to build, the relevant division, budget, and timeline so the team can review it. For details not published on the site, please contact the team directly.", ar: "يمكنك بدء مشروع من صفحة Start a Project. شارك ما تريد بناءه والقسم المناسب والميزانية والمدة ليتمكن الفريق من مراجعته. للتفاصيل غير المنشورة على الموقع، تواصل مع الفريق مباشرة." },
];

export async function generateAssistantReply({ message, language }: { message: string; language: ChatLanguage }): Promise<string> {
  const answer = answers.find((item) => item.match.test(message));
  if (answer) return language === "ar" ? answer.ar : answer.en;
  return language === "ar"
    ? "يمكنني مساعدتك في معرفة خدمات NextAura وأقسامها ومنتجاتها، أو يمكنك طلب التحدث مع المدير. ما الذي تريد بناءه؟"
    : "I can help with NextAura’s services, divisions, and products, or connect you with the manager. What would you like to build?";
}
