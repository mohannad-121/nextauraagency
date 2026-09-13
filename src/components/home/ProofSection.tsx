"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProofSection() {
  const proofs = [
    {
      stat: "3",
      label: "SPECIALIZED DIVISIONS",
      detail: "NextAura AI, NextAura Studios, and NextAura Fit.",
    },
    {
      stat: "BILINGUAL",
      label: "GLOBAL ARCHITECTURE",
      detail: "Full Arabic & English digital product localization.",
    },
    {
      stat: "60 FPS",
      label: "MOVEMENT INTELLIGENCE",
      detail: "Real-time pose estimation algorithms in FitCoach AI.",
    },
    {
      stat: "END-TO-END",
      label: "PRODUCT DISCIPLINE",
      detail: "From strategy and design to production deployment.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#080808] py-24 sm:py-32 px-6 lg:px-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="VERIFIED FOUNDATIONS"
          title="ENGINEERED WITH"
          serifTitle="RIGOR & PROOF."
          description="We let our architecture, system benchmarks, and code speak for themselves."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {proofs.map((p, idx) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl border border-white/10 bg-[#0D0D0D] p-8 flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-[#F4F0E7] via-[#E5C77A] to-[#C9A45C] font-mono block mb-2">
                  {p.stat}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#C9A45C] uppercase block mb-3">
                  {p.label}
                </span>
                <p className="text-xs leading-relaxed text-[#8D8D8D]">
                  {p.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
