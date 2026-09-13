"use client";

import { Button } from "@/components/ui/Button";
import { GoldText } from "@/components/ui/GoldText";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-32 px-6 lg:px-12 border-t border-white/10 text-center">
      {/* Background Cinematic Radial Illumination */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-full max-w-6xl rounded-full bg-radial from-[#C9A45C]/20 via-[#C9A45C]/5 to-transparent blur-3xl opacity-60" />

      <div className="relative z-10 mx-auto max-w-4xl space-y-8">
        <div className="inline-flex items-center space-x-2 rounded-full border border-[#C9A45C]/30 bg-[#C9A45C]/10 px-4 py-1.5 text-[10px] font-mono tracking-[0.25em] text-[#E5C77A] uppercase shadow-lg">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E5C77A] animate-pulse" />
          <span>START YOUR INQUIRY</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#F4F0E7] uppercase leading-[1.05]">
          WHAT SHOULD WE <br />
          <GoldText serif>BUILD NEXT?</GoldText>
        </h2>

        <p className="mx-auto max-w-xl text-sm sm:text-base leading-relaxed text-[#8D8D8D]">
          Bring us the ambitious idea. We will help shape the product, system, and digital experience around it.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" size="lg">
            Start a Project
          </Button>
          <Button href="/work" variant="secondary" size="lg">
            Explore Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
