import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Preloader } from "@/components/layout/Preloader";
import { GrainOverlay } from "@/components/layout/GrainOverlay";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { generateOrganizationSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextAura Agency — AI, Software, Products & Digital Experiences",
  description:
    "NextAura Agency is a futuristic technology ecosystem building intelligent websites, AI systems, automation, software applications, and fitness technology.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateOrganizationSchema();

  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`} data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#050505] text-[#F4F0E7] antialiased selection:bg-[#C9A45C]/30 selection:text-[#E5C77A]">
        <Preloader />
        <GrainOverlay />
        <CustomCursor />
        <Navbar />
        <div className="relative z-10 flex min-h-screen flex-col justify-between">
          <div className="grow">{children}</div>
          <Footer />
        </div>
        <ChatWidget />
      </body>
    </html>
  );
}
