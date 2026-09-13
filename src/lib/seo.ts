import { Metadata } from "next";

export const siteConfig = {
  name: "NextAura Agency",
  tagline: "Building What Comes Next.",
  description:
    "NextAura Agency is a futuristic technology ecosystem, creative studio, and product lab building intelligent websites, AI systems, automation, software, and fitness technology.",
  url: "https://www.next-aura-ai.com",
  ogImage: "https://www.next-aura-ai.com/og.jpg",
  keywords: [
    "NextAura Agency",
    "NextAura AI",
    "NextAura Studios",
    "NextAura Fit",
    "NextAura OS",
    "FitCoach AI",
    "Artificial Intelligence Agency",
    "Custom AI Solutions",
    "Web Application Development",
    "Cloud Operating System",
    "Automation Systems",
    "Fitness Technology",
    "Computer Vision Fitness",
    "Luxury Digital Agency",
  ],
};

export function constructMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  canonical = "/",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const fullTitle = title
    ? `${title} | NextAura Agency`
    : `${siteConfig.name} — ${siteConfig.tagline}`;

  return {
    title: fullTitle,
    description,
    keywords: siteConfig.keywords,
    authors: [{ name: "NextAura Agency" }],
    creator: "NextAura Agency",
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title} | NextAura Agency`,
      description,
      url: canonical,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | NextAura Agency`,
      description,
      images: [image],
      creator: "@nextaura",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    sameAs: [
      "https://linkedin.com/company/nextaura",
      "https://instagram.com/nextaura",
      "https://github.com/nextaura",
    ],
    department: [
      {
        "@type": "Organization",
        name: "NextAura AI",
        description: "Intelligent systems, web apps, automation, and AI platforms.",
      },
      {
        "@type": "Organization",
        name: "NextAura Studios",
        description: "Mobile applications, games, and experimental products.",
      },
      {
        "@type": "Organization",
        name: "NextAura Fit",
        description: "Fitness technology and FitCoach AI.",
      },
      {
        "@type": "Organization",
        name: "NextAura OS",
        description: "Cloud operating system and modular workspace architecture.",
      },
    ],
  };
}
