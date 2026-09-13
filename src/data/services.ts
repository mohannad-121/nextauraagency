export interface ServiceCategory {
  id: string;
  category: string;
  headline: string;
  description: string;
  items: string[];
  division: "NextAura AI" | "NextAura Studios" | "NextAura Fit" | "NextAura OS" | "Ecosystem";
}

export const SERVICES: ServiceCategory[] = [
  {
    id: "strategy",
    category: "STRATEGY",
    headline: "Architecting what comes next.",
    description:
      "Before writing code or designing interfaces, we dissect business models, operational bottlenecks, and product opportunities.",
    items: [
      "Product Strategy & Roadmap",
      "Digital Ecosystem Architecture",
      "AI Opportunity Mapping",
      "Technical Feasibility Audits",
      "User Experience Strategy",
    ],
    division: "Ecosystem",
  },
  {
    id: "design",
    category: "DESIGN",
    headline: "Luxury editorial aesthetics meet modern UI.",
    description:
      "Crafting digital interfaces that command attention through tight typography, dark glass aesthetics, metallic gold highlights, and intuitive UX.",
    items: [
      "UX/UI System Design",
      "Interactive Motion & Micro-animations",
      "Design System Development",
      "Creative Direction & Branding",
      "Design Systems & Token Architecture",
    ],
    division: "Ecosystem",
  },
  {
    id: "engineering",
    category: "ENGINEERING",
    headline: "Production-grade, high-performance code.",
    description:
      "Building resilient web apps, scalable APIs, and responsive digital products with Next.js, React, TypeScript, and modern cloud infrastructure.",
    items: [
      "Full-Stack Web Applications",
      "Next.js App Router Platforms",
      "TypeScript Enterprise Systems",
      "Custom API & Backend Architecture",
      "High-Performance Cloud Deployment",
    ],
    division: "NextAura AI",
  },
  {
    id: "intelligence",
    category: "ARTIFICIAL INTELLIGENCE",
    headline: "Embedding intelligence where it solves real problems.",
    description:
      "Integrating custom LLM pipelines, RAG knowledge systems, autonomous agents, and computer vision models into live business workflows.",
    items: [
      "Custom RAG (Retrieval-Augmented Generation)",
      "Tailored AI Assistants & Chatbots",
      "LLM Integration & Prompt Engineering",
      "Computer Vision & Pose Estimation",
      "Predictive Data Analytics",
    ],
    division: "NextAura AI",
  },
  {
    id: "automation",
    category: "AUTOMATION",
    headline: "Good automation disappears into the business.",
    description:
      "Eliminating manual task overhead by connecting disparate enterprise APIs, CRM databases, and operational alert systems.",
    items: [
      "Business Workflow Automation",
      "CRM & ERP Custom Integrations",
      "Automated Booking & Scheduling",
      "Inventory & Order Management",
      "WhatsApp & Telephony Automation",
    ],
    division: "NextAura AI",
  },
  {
    id: "products",
    category: "PRODUCTS",
    headline: "Mobile apps, consumer software, and creative tech.",
    description:
      "Engineering mobile applications, experimental software, interactive media, and proprietary products through NextAura Studios and NextAura Fit.",
    items: [
      "Mobile iOS & Android Apps",
      "Interactive WebGL Experiences",
      "Fitness Technology Platforms",
      "Consumer Apps & Digital Games",
      "Original Internal SaaS Solutions",
    ],
    division: "NextAura Studios",
  },
  {
    id: "growth",
    category: "GROWTH & SCALE",
    headline: "Optimized for search velocity and performance.",
    description:
      "Ensuring your digital ecosystem reaches its audience with sub-second page load times, strict WCAG accessibility, and technical SEO excellence.",
    items: [
      "Technical & Programmatic SEO",
      "Lighthouse Core Web Vitals Optimization",
      "Conversion Rate Optimization (CRO)",
      "Analytics & Performance Dashboards",
      "Multilingual Global Localization",
    ],
    division: "Ecosystem",
  },
];
