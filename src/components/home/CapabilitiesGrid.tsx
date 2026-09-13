"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SERVICES } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CapabilitiesGrid() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { id: "all", label: "ALL CAPABILITIES" },
    { id: "engineering", label: "BUILD" },
    { id: "intelligence", label: "INTELLIGENCE" },
    { id: "automation", label: "AUTOMATE" },
    { id: "products", label: "PRODUCTS" },
    { id: "growth", label: "SCALE" },
  ];

  const filteredServices =
    activeTab === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.id === activeTab || activeTab === "all");

  return (
    <section className="relative overflow-hidden bg-[#080808] py-24 sm:py-32 px-6 lg:px-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="SYSTEM CAPABILITIES"
          title="FROM IDEA TO"
          serifTitle="INFRASTRUCTURE."
          description="We do not separate strategy from execution. Our capabilities span full-stack web platforms, custom AI integrations, automation pipelines, and consumer software."
        />

        {/* Category Filters */}
        <div className="mt-12 flex flex-wrap gap-2 pb-6 border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`rounded-full px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-[#C9A45C] text-black font-semibold shadow-lg shadow-[#C9A45C]/20"
                  : "border border-white/10 bg-white/5 text-[#8D8D8D] hover:border-white/20 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Capabilities Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0D0D0D] p-8 transition-all duration-300 hover:border-[#C9A45C]/40 hover:bg-[#121212] hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-4 text-xs font-mono text-[#C9A45C]">
                  <span>{service.category}</span>
                  <span className="text-[#8D8D8D]">{service.division}</span>
                </div>

                <h3 className="mt-6 text-xl font-medium text-[#F4F0E7] group-hover:text-[#E5C77A] transition-colors">
                  {service.headline}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-[#8D8D8D]">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2.5 pt-4 border-t border-white/5 text-xs text-[#F4F0E7]">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center space-x-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#C9A45C] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 text-xs font-mono text-[#C9A45C] uppercase tracking-wider hover:text-[#E5C77A]"
                >
                  <span>Inquire Solution</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
