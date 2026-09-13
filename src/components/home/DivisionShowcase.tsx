"use client";

import { motion } from "framer-motion";
import { DIVISIONS } from "@/data/divisions";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ExternalLink } from "lucide-react";

export function DivisionShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-24 sm:py-32 px-6 lg:px-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl space-y-32">
        {DIVISIONS.map((div, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={div.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Media Preview Frame */}
              <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <MediaFrame
                  alt={div.name}
                  type={div.id as "ai" | "studios" | "fit"}
                  aspectRatio="16/9"
                  badge={div.badge}
                  className="shadow-2xl shadow-black/80"
                />
              </div>

              {/* Text Description */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <div className="flex items-center space-x-3 text-xs font-mono text-[#C9A45C]">
                  <span className="h-[1px] w-6 bg-[#C9A45C]" />
                  <span>0{idx + 1} {"//"} DIVISION</span>
                </div>

                <h3 className="text-4xl sm:text-5xl font-light tracking-tight text-[#F4F0E7]">
                  {div.name}
                </h3>

                <p className="text-lg font-serif italic text-[#E5C77A]">
                  {div.tagline}
                </p>

                <p className="text-sm sm:text-base leading-relaxed text-[#8D8D8D]">
                  {div.description}
                </p>

                {/* Capabilities Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {div.capabilities.map((cap) => (
                    <div key={cap} className="flex items-center space-x-2 text-xs text-[#F4F0E7]">
                      <CheckCircle2 className="h-4 w-4 text-[#C9A45C] shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex flex-wrap items-center gap-4">
                  {div.externalUrl ? (
                    <a
                      href={div.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 rounded-full border border-[#C9A45C]/40 bg-[#C9A45C]/10 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#E5C77A] hover:border-[#E5C77A] hover:bg-[#C9A45C] hover:text-[#050505] transition-all shadow-lg"
                    >
                      <span>Visit {div.name} Domain</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    <Button href={`/divisions/${div.slug}`} variant="outline">
                      Explore {div.name}
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
