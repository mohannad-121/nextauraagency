"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "UNDERSTAND",
      desc: "We dissect the problem, operational constraints, and technical goals before touching any interface or writing code.",
    },
    {
      number: "02",
      title: "ARCHITECT",
      desc: "We define the technical stack, database schemas, user experience flows, and AI integration points.",
    },
    {
      number: "03",
      title: "BUILD",
      desc: "Designers and engineers move together. High-performance Next.js code is written alongside luxury UI components.",
    },
    {
      number: "04",
      title: "INTELLIGENCE",
      desc: "Where useful, custom AI models, autonomous agents, RAG knowledge stores, or computer vision pipelines are integrated.",
    },
    {
      number: "05",
      title: "REFINE",
      desc: "Lighthouse core web vitals, WCAG accessibility, fluid motion physics, and user conversion paths are tuned.",
    },
    {
      number: "06",
      title: "RELEASE",
      desc: "We deploy to production cloud infrastructure, observe real-world performance metrics, and evolve.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 sm:py-32 px-6 lg:px-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="EXECUTION METRICS"
          title="HOW WE BUILD."
          serifTitle="INTENTIONAL & INTUITIVE."
          description="A disciplined 6-stage engineering process designed to take complex ideas into deployed production systems."
        />

        {/* Timeline Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative rounded-3xl border border-white/10 bg-[#0D0D0D] p-8 flex flex-col justify-between group hover:border-[#C9A45C]/40 transition-all duration-300"
            >
              <div>
                <span className="text-3xl font-mono text-[#C9A45C] font-semibold block mb-4">
                  {step.number}
                </span>

                <h3 className="text-xl font-medium tracking-wider text-[#F4F0E7] group-hover:text-[#E5C77A] transition-colors">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-[#8D8D8D]">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#8D8D8D]">
                <span>STAGE // {step.number}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#C9A45C]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
