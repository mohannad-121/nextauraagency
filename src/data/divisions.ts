export interface Division {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  headline: string;
  description: string;
  focus: string[];
  color: string;
  goldAccent: string;
  badge: string;
  capabilities: string[];
  externalUrl?: string;
  logoSrc: string;
  featuredProduct?: {
    name: string;
    description: string;
    slug: string;
  };
}

export const DIVISIONS: Division[] = [
  {
    id: "ai",
    slug: "ai",
    name: "NEXTAURA AI",
    tagline: "Intelligence Built Into Business",
    headline: "INTELLIGENCE THAT BECOMES INFRASTRUCTURE.",
    description:
      "NextAura AI engineers intelligent websites, custom AI assistants, workflow automation, RAG knowledge systems, and enterprise digital platforms. We transform complex workflows into high-margin digital products.",
    focus: [
      "Intelligent Websites & Web Apps",
      "AI Assistants & RAG Systems",
      "Custom LLM Integrations",
      "Business & Operations Automation",
      "CRM & Internal Dashboards",
      "E-commerce & Payment Systems",
      "Analytics & Multilingual SEO",
    ],
    color: "#050505",
    goldAccent: "#C9A45C",
    badge: "Specialized Division",
    capabilities: [
      "Web Architecture",
      "AI Agents",
      "LLM Pipeline Design",
      "Process Automation",
      "Data Analytics",
      "Custom API Engineering",
    ],
    externalUrl: "https://www.next-aura-ai.com",
    logoSrc: "/logos/nextaura-ai.png",
  },
  {
    id: "studios",
    slug: "studios",
    name: "NEXTAURA STUDIOS",
    tagline: "Products Made to Move, Play, and Live",
    headline: "IDEAS INTO INTERACTIVE PRODUCTS.",
    description:
      "NextAura Studios is our experimental creative technology lab. We build mobile-first applications, consumer software, interactive products, original digital games, and internal technology experiments.",
    focus: [
      "Mobile Applications (iOS / Android)",
      "Consumer Digital Products",
      "Interactive Software & WebGL",
      "Creative Technology",
      "Entertainment Software & Games",
      "Original Internal Products",
    ],
    color: "#080808",
    goldAccent: "#E5C77A",
    badge: "Creative Lab",
    capabilities: [
      "Mobile Engineering",
      "Game Design & UI",
      "Interactive Prototyping",
      "Motion Design",
      "Product Experimentation",
    ],
    externalUrl: "https://nextaura-studios.onrender.com",
    logoSrc: "/logos/nextaura-studios.png",
  },
  {
    id: "fit",
    slug: "fit",
    name: "NEXTAURA FIT",
    tagline: "Technology for Human Performance",
    headline: "THE FUTURE OF PERSONAL PERFORMANCE.",
    description:
      "NextAura Fit merges computer vision, biometric feedback, and artificial intelligence into human movement technology. Empowering athletes and individuals with real-time pose tracking, personalized coaching, and intelligent movement science.",
    focus: [
      "FitCoach AI Flagship Platform",
      "Computer Vision Pose Tracking",
      "Personalized Workout Intelligence",
      "Live Movement Feedback",
      "Smart Performance Dashboards",
      "Biometric Wellness Software",
    ],
    color: "#070707",
    goldAccent: "#B99A5D",
    badge: "Flagship Health Tech",
    capabilities: [
      "Pose Estimation (Computer Vision)",
      "Adaptive AI Workout Engines",
      "Real-time Kinetic Feedback",
      "Biometric Data Visualizations",
    ],
    externalUrl: "https://aifitcoach.dev/",
    logoSrc: "/logos/nextaura-fit.jpg",
    featuredProduct: {
      name: "FITCOACH AI",
      slug: "fitcoach-ai",
      description:
        "Your personal AI athletic coach analyzing movement, feedback, and scheduling in real time.",
    },
  },
  {
    id: "os",
    slug: "os",
    name: "NEXTAURA OS",
    tagline: "The Cloud Operating System & Workspace Architecture",
    headline: "REDEFINING SYSTEM COMPUTING FOR THE WEB.",
    description:
      "NextAura OS engineers intelligent cloud operating layers, developer environments, high-performance web desktop interfaces, and modular digital workspaces built for the modern web.",
    focus: [
      "Cloud OS & Web Desktop Environments",
      "Modular Workspace Architecture",
      "High-Performance System Interfaces",
      "Developer Tools & Virtual Terminals",
      "Distributed File Systems & Storage",
      "Real-time Collaboration & Window Management",
    ],
    color: "#060606",
    goldAccent: "#C9A45C",
    badge: "System Architecture",
    capabilities: [
      "Cloud OS Architecture",
      "Virtual File Systems",
      "WebAssembly & Sandboxing",
      "Real-time Windowing Systems",
      "Terminal & Developer Tools",
    ],
    externalUrl: "https://nextauraos.tech/",
    logoSrc: "/logos/nextaura-os.png",
  },
];
