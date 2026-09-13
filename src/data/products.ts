export interface Product {
  slug: string;
  name: string;
  tagline: string;
  division: "NextAura Fit" | "NextAura Studios" | "NextAura AI" | "NextAura OS";
  divisionSlug: "fit" | "studios" | "ai" | "os";
  badge: string;
  status: "LIVE" | "IN DEVELOPMENT" | "EXPERIMENTAL" | "INTERNAL" | "COMING SOON";
  description: string;
  features: { title: string; desc: string }[];
  accentColor: string;
  mediaPath?: string;
  isFlagship?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    slug: "fitcoach-ai",
    name: "FitCoach AI",
    tagline: "Your Training. Understood by Intelligence.",
    division: "NextAura Fit",
    divisionSlug: "fit",
    badge: "Flagship Health Tech",
    status: "IN DEVELOPMENT",
    isFlagship: true,
    accentColor: "#E5C77A",
    description:
      "FitCoach AI is NextAura Fit's signature movement intelligence system. Utilizing on-device computer vision, FitCoach AI evaluates posture, measures joint kinematics, tracks sets, and dynamically optimizes workout difficulty in real time.",
    features: [
      {
        title: "Computer Vision Form Tracking",
        desc: "33-point biomechanical skeleton analysis tracking joint angles at 60 FPS directly from your smartphone camera.",
      },
      {
        title: "Real-Time Motion Feedback",
        desc: "Instant audio & visual visual cues alerting you to joint fatigue, improper hip alignment, or incomplete range of motion.",
      },
      {
        title: "Adaptive AI Workout Engine",
        desc: "Neural workout planning that recalculates weight, reps, and resting intervals dynamically set by set.",
      },
      {
        title: "Biometric Progress Telemetry",
        desc: "Comprehensive analytics tracking total load capacity, velocity loss, fatigue indices, and long-term athletic output.",
      },
    ],
  },
  {
    slug: "aurawallet",
    name: "AuraWallet",
    tagline: "Precision Micro-Finance for Modern Creators",
    division: "NextAura Studios",
    divisionSlug: "studios",
    badge: "Mobile Software",
    status: "EXPERIMENTAL",
    accentColor: "#71552A",
    description:
      "A minimalist, ultra-secure mobile finance suite designed to streamline global cross-border payments, multi-currency balances, and liquid asset visualization.",
    features: [
      {
        title: "Biometric Security Core",
        desc: "Zero-knowledge encryption layer protecting credentials and micro-transactions.",
      },
      {
        title: "Instant Global Settlement",
        desc: "Sub-second cross-border liquidity routing with dynamic currency conversion.",
      },
      {
        title: "Tactile Motion Interface",
        desc: "Spring-physics gesture system designed for effortless one-handed control.",
      },
    ],
  },
  {
    slug: "nextaura-flow",
    name: "NextAura Flow Engine",
    tagline: "Automated Enterprise Workflow Pipeline",
    division: "NextAura AI",
    divisionSlug: "ai",
    badge: "Enterprise SaaS",
    status: "INTERNAL",
    accentColor: "#C9A45C",
    description:
      "An internal RAG and agentic execution workflow engine built to streamline business lead ingestion, document classification, dynamic scope building, and instant response dispatch.",
    features: [
      {
        title: "RAG Document Intelligence",
        desc: "Instant contextual querying over legacy business databases and PDF archives.",
      },
      {
        title: "Agentic API Connectors",
        desc: "Automated orchestration linking CRM, accounting, and communication channels.",
      },
    ],
  },
];
