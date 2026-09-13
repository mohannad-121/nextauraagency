export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  division: "NextAura AI" | "NextAura Studios" | "NextAura Fit" | "NextAura OS";
  divisionSlug: "ai" | "studios" | "fit" | "os";
  year: string;
  industry: string;
  description: string;
  services: string[];
  featured: boolean;
  status: "LIVE" | "IN DEVELOPMENT" | "EXPERIMENTAL" | "INTERNAL" | "COMING SOON";
  client: string;
  url?: string;
  accentColor: string;
  stats?: { label: string; value: string }[];
  overview: string;
  challenge: string;
  approach: string;
  solution: string;
  techStack: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "fitcoach-ai",
    title: "FitCoach AI",
    subtitle: "Computer vision & real-time movement intelligence platform",
    division: "NextAura Fit",
    divisionSlug: "fit",
    year: "2026",
    industry: "Fitness Technology",
    description:
      "A flagship computer-vision athletic platform that provides real-time movement tracking, AI posture corrections, and personalized workout scheduling.",
    services: [
      "Computer Vision",
      "Pose Estimation",
      "AI Workout Engine",
      "Mobile Architecture",
      "UI/UX Design",
    ],
    featured: true,
    status: "IN DEVELOPMENT",
    client: "NextAura Fit Original Product",
    accentColor: "#E5C77A",
    stats: [
      { label: "Frame Analysis Speed", value: "60 FPS" },
      { label: "Pose Keypoints Tracked", value: "33 Joints" },
      { label: "Plan Adaptation Rate", value: "Real-Time" },
    ],
    overview:
      "FitCoach AI represents the pinnacle of NextAura Fit's engineering. Designed as an intelligent personal coach, it uses on-device computer vision to evaluate athletic form, calculate kinematic angles, and adapt training difficulty dynamically during every set.",
    challenge:
      "Standard fitness apps rely on static video playback without understanding human anatomy. The challenge was building an intelligent camera pipeline capable of parsing 33 biomechanical joints at 60 FPS without high latency or remote server roundtrips.",
    approach:
      "NextAura Fit designed a lightweight WebGL & tensor-based pipeline combined with edge AI processing. We built custom visual overlays, movement quality meters, and an adaptive workout recommendation engine that adjusts weight, reps, and rests based on real-time fatigue.",
    solution:
      "FitCoach AI delivers zero-latency movement guidance, visual skeleton feedback, dynamic posture alerts, and personalized progression curves directly to the user's mobile screen.",
    techStack: [
      "Computer Vision",
      "MediaPipe",
      "TensorFlow.js",
      "React Native",
      "TypeScript",
      "WebGL Shaders",
    ],
  },
  {
    slug: "al-kamal-restaurant",
    title: "Al Kamal Restaurant",
    subtitle: "Luxury bilingual hospitality platform & automated ordering ecosystem",
    division: "NextAura AI",
    divisionSlug: "ai",
    year: "2025",
    industry: "Luxury Hospitality & Dining",
    description:
      "An upscale bilingual digital dining destination featuring full interactive menus, table reservation engines, administrative inventory management, and automated workflow integrations.",
    services: [
      "Luxury Web Design",
      "Bilingual Architecture (Arabic/English)",
      "Admin Dashboard",
      "Inventory Systems",
      "Reservation Automation",
    ],
    featured: true,
    status: "LIVE",
    client: "Al Kamal Culinary Group",
    accentColor: "#C9A45C",
    stats: [
      { label: "Language Support", value: "Bilingual (AR/EN)" },
      { label: "Page Load Time", value: "0.4s" },
      { label: "Reservation Conversion", value: "+42%" },
    ],
    overview:
      "Al Kamal Restaurant required a digital flagship worthy of its high-end dining reputation. NextAura AI crafted a sophisticated web application that seamlessly handles high-volume table reservations, bilingual menu localization, and real-time back-of-house kitchen workflows.",
    challenge:
      "Modern luxury dining demands immediate digital elegance paired with heavy operational infrastructure. The platform needed to support instant Arabic & English switching, inventory sync, and direct WhatsApp / kitchen order alerts.",
    approach:
      "We engineered a sleek dark-gold aesthetic paired with high-performance Next.js server components, custom CSS animation routines, dynamic RTL layout logic, and automated SMS/email reservation confirmations.",
    solution:
      "A fast, elegant platform that reduced phone inquiry volume while boosting digital table bookings by 42% within the first month of release.",
    techStack: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "PostgreSQL",
      "Twilio / WhatsApp API",
    ],
  },
  {
    slug: "arzana",
    title: "Arzana Industrial Catalog",
    subtitle: "Enterprise B2B product catalog & quote request ecosystem",
    division: "NextAura AI",
    divisionSlug: "ai",
    year: "2025",
    industry: "Industrial & Manufacturing",
    description:
      "An industrial product catalog platform engineered with dynamic filtering, automated RFQ quote builders, and custom enterprise admin workflow management.",
    services: [
      "Enterprise Platform",
      "RFQ Quote Engine",
      "Catalog Search",
      "Admin Workflow",
      "Data Analytics",
    ],
    featured: true,
    status: "LIVE",
    client: "Arzana Industrial Systems",
    accentColor: "#B99A5D",
    stats: [
      { label: "Catalog SKUs Managed", value: "10,000+" },
      { label: "Search Response Time", value: "< 20ms" },
      { label: "Inquiry Velocity", value: "3.5x Fast" },
    ],
    overview:
      "Arzana is a leading supplier of complex industrial equipment. NextAura AI digitized their massive 10,000+ SKU inventory into an intuitive multi-faceted search interface with instant specification downloads.",
    challenge:
      "Industrial buyers require exact technical specs, dimension sheets, and custom quote builders without wading through slow, bloated PDF catalogs.",
    approach:
      "NextAura AI implemented indexed full-text vector search, multi-attribute filter arrays, automated quote document generation, and a streamlined administrative portal for sales teams.",
    solution:
      "An industrial platform that accelerated buyer quotes by 3.5x and established Arzana as a digital market leader in heavy equipment procurement.",
    techStack: [
      "React",
      "TypeScript",
      "Algolia / Meilisearch",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],
  },
  {
    slug: "aurawallet",
    title: "AuraWallet",
    subtitle: "Next-generation financial app & digital asset suite concept",
    division: "NextAura Studios",
    divisionSlug: "studios",
    year: "2026",
    industry: "Fintech & Mobile Software",
    description:
      "A minimalist, ultra-secure mobile finance application concept designed for seamless cross-border transfers, intuitive portfolio visualizers, and biometrically protected transactions.",
    services: [
      "Mobile App UI/UX",
      "Interactive Motion",
      "Fintech Design System",
      "Prototyping",
    ],
    featured: false,
    status: "EXPERIMENTAL",
    client: "NextAura Studios Original Concept",
    accentColor: "#71552A",
    stats: [
      { label: "Security Architecture", value: "Biometric Zero-Trust" },
      { label: "Transaction Latency", value: "Instant" },
    ],
    overview:
      "AuraWallet is an original NextAura Studios product exploration focusing on hyper-minimal finance tools for modern global creators.",
    challenge:
      "Traditional banking apps suffer from visual clutter and confusing navigation. AuraWallet aimed to reduce financial management to pure essential touchpoints.",
    approach:
      "We crafted smooth spring physics, micro-haptic interactions, custom WebGL canvas charts, and dark metallic visual themes.",
    solution:
      "A frictionless mobile finance concept setting new standards for micro-interaction design and visual luxury in money apps.",
    techStack: ["React Native", "TypeScript", "Framer Motion", "Skia Graphics"],
  },
  {
    slug: "letsbake",
    title: "Let'sBake Digital",
    subtitle: "Interactive culinary product platform & mobile order experience",
    division: "NextAura Studios",
    divisionSlug: "studios",
    year: "2025",
    industry: "Consumer Products & Food",
    description:
      "A vibrant consumer application experience connecting artisanal bakeries with instant customized order tracking, interactive flavor customization, and social gifting.",
    services: [
      "Consumer Product Design",
      "Mobile First Web",
      "Customization Engine",
      "Payment Gateway",
    ],
    featured: false,
    status: "LIVE",
    client: "Let'sBake Artisanal Bakery",
    accentColor: "#E0C176",
    overview:
      "Let'sBake brought artisanal pastries into the digital era with a custom order builder allowing buyers to configure ingredient layers and schedule precise pickup times.",
    challenge:
      "Capturing the sensory warmth of artisanal baking within a modern mobile screen while maintaining fast checkout speeds.",
    approach:
      "NextAura Studios crafted high-frame-rate visual animations, interactive 3D product previews, and dynamic SMS notification pipelines.",
    solution:
      "An engaging ordering platform resulting in 85% mobile checkout adoption and enthusiastic customer reviews.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API"],
  },
  {
    slug: "nextaura-ops",
    title: "NextAura Internal Platform",
    subtitle: "Enterprise agency operations, CRM, & project intelligence engine",
    division: "NextAura AI",
    divisionSlug: "ai",
    year: "2026",
    industry: "Internal Business Systems",
    description:
      "The custom internal operating platform built by NextAura to orchestrate project timelines, client communications, financial telemetry, and AI proposal generators.",
    services: [
      "Enterprise CRM",
      "Operations Dashboard",
      "AI Proposal Engine",
      "Resource Telemetry",
    ],
    featured: false,
    status: "INTERNAL",
    client: "NextAura Agency Infrastructure",
    accentColor: "#C9A45C",
    overview:
      "Built specifically for NextAura Agency, this internal dashboard integrates financial metrics, client milestones, and custom LLM tools for rapid automated scope estimation.",
    challenge:
      "Off-the-shelf CRM systems are rigid and disconnected from custom AI automation pipelines.",
    approach:
      "NextAura AI engineered a unified dashboard leveraging internal RAG pipelines over client briefs, automated status generation, and real-time financial tracking.",
    solution:
      "An all-in-one operations system that keeps NextAura running at peak performance.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "LangChain / OpenAI"],
  },
];
