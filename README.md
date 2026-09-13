# NEXTAURA AGENCY — Digital Ecosystem Headquarters

> **"Building What Comes Next."**  
> *Intelligence. Products. Experiences.*

NextAura Agency is a futuristic technology group, creative studio, product lab, and human performance innovation company. This repository houses the unified digital headquarters and web application built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

---

## 🏛️ Ecosystem Architecture

NextAura Agency serves as the parent ecosystem powering three specialized divisions:

1. **NEXTAURA AI** (`/divisions/ai`) — Intelligent systems, custom RAG pipelines, AI assistants, web applications, CRM platforms, and operations automation.
2. **NEXTAURA STUDIOS** (`/divisions/studios`) — Mobile applications (iOS/Android), consumer software, games, WebGL creative technology, and experimental products.
3. **NEXTAURA FIT** (`/divisions/fit`) — Fitness technology, movement intelligence, and flagship computer-vision athletic platform **FITCOACH AI** (`/products/fitcoach-ai`).

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS + Custom Dark Gold Design System Tokens (`src/app/globals.css`)
- **Animations**: `framer-motion` for spring reveals & cursor physics
- **Icons**: `lucide-react`
- **SEO & Structured Data**: Schema.org JSON-LD (Organization & WebSite), OpenGraph, Twitter cards, dynamic XML sitemap, and robots config

---

## 📁 Directory Architecture

```
src/
  app/
    agency/page.tsx             # Agency Manifesto & Philosophy
    divisions/                  # Ecosystem Divisions Hub
      ai/page.tsx               # NextAura AI Division Portal
      studios/page.tsx          # NextAura Studios Division Portal
      fit/page.tsx              # NextAura Fit Division Portal
      os/page.tsx               # NextAura OS Division Portal
    work/                       # Portfolio Showcase
      [slug]/page.tsx           # Dynamic Case Study Engine
    products/                   # Proprietary Products
      fitcoach-ai/page.tsx      # Standalone FitCoach AI Launch Page
    about/page.tsx              # Brand Story & Leadership (Mohannad, Moayad)
    contact/page.tsx            # Multi-Division Inquiry Form
    privacy/page.tsx            # Privacy Policy
    terms/page.tsx              # Terms of Service
    not-found.tsx               # Custom Luxury 404
    sitemap.ts                  # Dynamic Sitemap Generator
    robots.ts                   # Search Crawler Directives

  components/
    layout/                     # Navbar, Footer, CustomCursor, GrainOverlay, Preloader
    home/                       # HomeHero, BrandManifesto, EcosystemOrbit, DivisionShowcase, etc.
    ui/                         # Button, SectionHeading, MediaFrame, DeviceMockup, GoldText

  data/
    divisions.ts                # Ecosystem division definitions
    projects.ts                 # Case studies & portfolio data
    products.ts                 # Proprietary products dataset
    services.ts                 # Capabilities matrix
    founders.ts                 # Leadership team dataset
    navigation.ts               # Sitemaps & header links

  lib/
    utils.ts                    # Class name utilities
    motion.ts                   # Framer Motion animation variants
    seo.ts                      # Metadata & Schema.org generators
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v20.0.0` or higher
- npm `v10.0.0` or higher

### Installation & Execution
```bash
# Clone repository
git clone https://github.com/nextaura/agency.git
cd agency

# Install dependencies
npm install

# Run local development server
npm run dev

# Production build & verification
npm run build
npm run start
```

---

## 🎨 How to Customize Brand Tokens & Media

### 1. Brand Colors
Design tokens are centralized in `src/app/globals.css`:
```css
:root {
  --background: #050505;
  --gold: #C9A45C;
  --gold-bright: #E5C77A;
  --gold-muted: #B99A5D;
  --gold-deep: #71552A;
}
```

### 2. Replacing Media & Video
The application utilizes `<MediaFrame />` components with dynamic procedural SVG canvas fallbacks. To supply real production media:
Place images/videos inside `/public/projects/` or `/public/fitcoach/` and update the `src` property in `src/data/projects.ts` or `src/data/products.ts`.

### 3. Adding a New Case Study
Open `src/data/projects.ts` and append a new `Project` object. The dynamic route `/work/[slug]` will automatically generate the case study page and include it in `sitemap.xml`.

---

## 📄 License & Attribution

© {new Date().getFullYear()} NextAura Agency. All rights reserved.
