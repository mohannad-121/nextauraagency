"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GoldText } from "@/components/ui/GoldText";
import { ArrowDown } from "lucide-react";

export function HomeHero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#050505] pt-32 pb-16 px-6 lg:px-12">
      {/* Background Video with Increased Brightness */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover brightness-[1.45] contrast-[1.1] opacity-70 transition-opacity duration-1000 scale-105"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Gradient Vignette & Dark Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-[#050505]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/60" />
      </div>

      {/* Volumetric Radial Illumination */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-full max-w-6xl rounded-full bg-radial from-[#C9A45C]/20 via-[#C9A45C]/5 to-transparent blur-3xl opacity-70 z-0" />

      {/* Architectural Background Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Top Eyebrow Tag */}
      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-3 rounded-full border border-[#C9A45C]/20 bg-[#0D0D0D]/80 px-4 py-1.5 backdrop-blur-md shadow-lg"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#E5C77A] animate-pulse" />
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#E5C77A] uppercase">
            NEXTAURA AGENCY — DIGITAL HEADQUARTERS
          </span>
        </motion.div>
      </div>

      {/* Main Headline */}
      <div className="relative z-10 mx-auto max-w-7xl w-full my-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl"
        >
          <h1 className="text-5xl font-light tracking-tight text-[#F4F0E7] sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] uppercase">
            BUILDING <br />
            <GoldText serif>WHAT COMES</GoldText> <br />
            NEXT.
          </h1>

          <p className="mt-8 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-[#8D8D8D]">
            NextAura is a technology ecosystem building intelligent systems, digital products, custom applications, creative experiences, and fitness technology.
          </p>

          {/* Micro Category Matrix */}
          <div className="mt-6 flex flex-wrap gap-2 text-[10px] font-mono text-[#C9A45C] uppercase tracking-widest">
            <span className="rounded-md border border-[#C9A45C]/20 bg-[#C9A45C]/5 px-2.5 py-1">
              AI ASSISTANTS
            </span>
            <span className="rounded-md border border-[#C9A45C]/20 bg-[#C9A45C]/5 px-2.5 py-1">
              WEB PLATFORMS
            </span>
            <span className="rounded-md border border-[#C9A45C]/20 bg-[#C9A45C]/5 px-2.5 py-1">
              SOFTWARE
            </span>
            <span className="rounded-md border border-[#C9A45C]/20 bg-[#C9A45C]/5 px-2.5 py-1">
              FITNESS TECH
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button href="/divisions" size="lg">
              Explore The Ecosystem
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Start A Project
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 mx-auto max-w-7xl w-full flex items-center justify-between border-t border-white/5 pt-6">
        <div className="flex items-center space-x-6 text-xs text-[#8D8D8D] font-mono">
          <span>01 / 03 NEXTAURA AI</span>
          <span>02 / 03 STUDIOS</span>
          <span>03 / 03 FIT</span>
        </div>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex items-center space-x-2 text-xs text-[#C9A45C] font-mono uppercase tracking-widest"
        >
          <span>SCROLL</span>
          <ArrowDown className="h-3.5 w-3.5" />
        </motion.div>
      </div>
    </section>
  );
}
