"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { DIVISIONS, Division } from "@/data/divisions";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight, Cpu, Smartphone, Activity, ExternalLink, Terminal } from "lucide-react";

export function EcosystemOrbit() {
  const [activeDivision, setActiveDivision] = useState<Division>(DIVISIONS[0]);

  const getIcon = (id: string) => {
    switch (id) {
      case "ai":
        return <Cpu className="h-6 w-6 text-[#C9A45C]" />;
      case "studios":
        return <Smartphone className="h-6 w-6 text-[#E5C77A]" />;
      case "fit":
        return <Activity className="h-6 w-6 text-[#B99A5D]" />;
      case "os":
        return <Terminal className="h-6 w-6 text-[#C9A45C]" />;
      default:
        return <Cpu className="h-6 w-6 text-[#C9A45C]" />;
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 sm:py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Ecosystem Architecture"
          title="ONE ECOSYSTEM."
          serifTitle="MULTIPLE FUTURES."
          description="NextAura Agency orchestrates four specialized divisions, each built around a dedicated domain of digital product creation."
        />

        {/* Ecosystem Matrix Layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Navigation Matrix */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {DIVISIONS.map((div) => {
              const isSelected = activeDivision.id === div.id;
              return (
                <div
                  key={div.id}
                  onClick={() => setActiveDivision(div)}
                  onMouseEnter={() => setActiveDivision(div)}
                  className={`group relative flex items-start justify-between rounded-2xl border p-6 text-left transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "border-[#C9A45C] bg-[#0D0D0D] shadow-xl shadow-[#C9A45C]/10 ring-1 ring-[#C9A45C]/30"
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="rounded-xl border border-white/10 bg-black/60 p-3 shadow-md">
                      {getIcon(div.id)}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-[10px] font-mono tracking-widest text-[#C9A45C] uppercase">
                          {div.badge}
                        </span>
                        {div.externalUrl && (
                          <span className="rounded bg-[#C9A45C]/20 px-1.5 py-0.5 text-[9px] font-mono text-[#E5C77A] lowercase">
                            {div.externalUrl.replace("https://", "")}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-medium tracking-tight text-[#F4F0E7] group-hover:text-[#E5C77A] transition-colors">
                        {div.name}
                      </h3>
                      <p className="mt-1 text-xs text-[#8D8D8D] line-clamp-1">
                        {div.tagline}
                      </p>
                    </div>
                  </div>

                  {div.externalUrl ? (
                    <a
                      href={div.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      title={`Visit ${div.name} domain`}
                      className="p-1 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 text-[#C9A45C] transition-transform group-hover:scale-110" />
                    </a>
                  ) : (
                    <ArrowUpRight
                      className={`h-5 w-5 transition-all duration-300 ${
                        isSelected
                          ? "text-[#C9A45C] translate-x-0.5 -translate-y-0.5"
                          : "text-[#8D8D8D] opacity-40 group-hover:opacity-100"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Detailed Division Canvas */}
          <div className="lg:col-span-7 relative overflow-hidden rounded-3xl border border-white/10 bg-[#0D0D0D] p-8 sm:p-12 flex flex-col justify-between shadow-2xl">
            {/* Ambient Background Illumination */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#C9A45C]/15 blur-3xl opacity-60" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeDivision.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 space-y-6"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-mono text-[#C9A45C] uppercase tracking-widest">
                    {activeDivision.badge}
                  </span>
                  <span className="text-xs text-[#8D8D8D] font-mono">
                    DIVISION // 0{DIVISIONS.findIndex((d) => d.id === activeDivision.id) + 1}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-light tracking-tight text-[#F4F0E7]">
                  {activeDivision.headline}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-[#8D8D8D]">
                  {activeDivision.description}
                </p>

                {/* Focus Areas Pill Cloud */}
                <div>
                  <span className="text-[10px] font-mono text-[#8D8D8D] uppercase tracking-widest block mb-3">
                    CORE SPECIALIZATIONS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeDivision.focus.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/10 bg-black/50 px-3 py-1.5 text-xs text-[#F4F0E7]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {activeDivision.featuredProduct && (
                  <div className="rounded-xl border border-[#C9A45C]/30 bg-[#C9A45C]/5 p-4 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-mono text-[#C9A45C] uppercase block">
                        FLAGSHIP INNOVATION
                      </span>
                      <span className="text-sm font-semibold text-[#F4F0E7]">
                        {activeDivision.featuredProduct.name}
                      </span>
                    </div>
                    <Link
                      href={`/products/${activeDivision.featuredProduct.slug}`}
                      className="text-xs text-[#E5C77A] underline underline-offset-4 font-mono uppercase hover:text-white"
                    >
                      EXPLORE PRODUCT
                    </Link>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="relative z-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              {activeDivision.externalUrl ? (
                <a
                  href={activeDivision.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-2 rounded-full border border-[#C9A45C]/40 bg-[#C9A45C]/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#E5C77A] hover:border-[#E5C77A] hover:bg-[#C9A45C] hover:text-[#050505] transition-all shadow-lg shadow-[#C9A45C]/10"
                >
                  <span>Visit {activeDivision.name} ({activeDivision.externalUrl.replace("https://", "")})</span>
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : (
                <Link
                  href={`/divisions/${activeDivision.slug}`}
                  className="group inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#C9A45C] hover:text-[#E5C77A] transition-colors"
                >
                  <span>Discover {activeDivision.name}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              )}

              <Link
                href={`/divisions/${activeDivision.slug}`}
                className="text-xs font-mono text-[#8D8D8D] hover:text-white transition-colors flex items-center space-x-1"
              >
                <span>View Internal Overview</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
