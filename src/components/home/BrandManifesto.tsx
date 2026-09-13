"use client";

import { motion } from "framer-motion";
import { GoldText } from "@/components/ui/GoldText";
import { fadeInUp } from "@/lib/motion";

export function BrandManifesto() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-24 sm:py-32 px-6 lg:px-12 border-y border-white/5">
      {/* Background Subtle Shimmer */}
      <div className="pointer-events-none absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-[#C9A45C]/5 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-8"
        >
          <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.3em] text-[#C9A45C] uppercase">
            <span className="h-[1px] w-8 bg-[#C9A45C]" />
            <span>AGENCY MANIFESTO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#F4F0E7] leading-[1.1] uppercase">
            WE DON&apos;T JUST <br />
            BUILD WEBSITES. <br />
            WE BUILD <GoldText serif>WHAT BUSINESSES RUN ON.</GoldText>
          </h2>

          <p className="max-w-3xl text-base sm:text-lg lg:text-xl leading-relaxed text-[#8D8D8D]">
            And when the idea goes beyond traditional business, we engineer the digital product, mobile experience, and movement intelligence around it. We treat design and engineering as a single, unified discipline.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/10 text-xs text-[#8D8D8D]">
            <div>
              <span className="block font-mono text-[#C9A45C] mb-1">01 / INTELLIGENCE</span>
              <p>AI belongs inside the product when it makes the product faster, clearer, and more profitable.</p>
            </div>
            <div>
              <span className="block font-mono text-[#C9A45C] mb-1">02 / SYSTEMS</span>
              <p>We build long-term scalable foundations, not fragile one-off templates.</p>
            </div>
            <div>
              <span className="block font-mono text-[#C9A45C] mb-1">03 / EXPERIENCES</span>
              <p>Aesthetics and technical depth coexist at every touchpoint.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
