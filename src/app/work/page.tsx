"use client";

import { useState } from "react";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ArrowUpRight } from "lucide-react";

export default function WorkPage() {
  const [filter, setFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "ALL WORK" },
    { id: "ai", label: "NEXTAURA AI" },
    { id: "studios", label: "NEXTAURA STUDIOS" },
    { id: "fit", label: "NEXTAURA FIT" },
  ];

  const filteredProjects =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.divisionSlug === filter);

  return (
    <main className="relative bg-[#050505] text-[#F4F0E7] pt-32 pb-24 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="SELECTED PORTFOLIO"
          title="SELECTED WORK."
          serifTitle="SYSTEMS & PRODUCTS."
          description="Explore case studies across intelligent web applications, B2B platforms, consumer software, and movement technology."
        />

        {/* Category Filters */}
        <div className="mt-12 flex flex-wrap gap-3 pb-6 border-b border-white/10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`rounded-full px-5 py-2.5 text-xs font-mono tracking-widest uppercase transition-all duration-300 ${
                filter === tab.id
                  ? "bg-[#C9A45C] text-black font-semibold shadow-lg shadow-[#C9A45C]/20"
                  : "border border-white/10 bg-white/5 text-[#8D8D8D] hover:border-white/20 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0D0D0D] p-6 sm:p-8 transition-all duration-500 hover:border-[#C9A45C]/40 hover:shadow-2xl"
              data-cursor="VIEW"
            >
              <Link href={`/work/${project.slug}`} className="block">
                <MediaFrame
                  alt={project.title}
                  type={project.divisionSlug}
                  aspectRatio="16/9"
                  badge={project.status}
                  className="mb-6 shadow-xl"
                />

                <div className="flex items-center justify-between text-xs font-mono text-[#8D8D8D] mb-3">
                  <span className="text-[#C9A45C]">{project.division}</span>
                  <span>{project.year}</span>
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-light text-[#F4F0E7] group-hover:text-[#E5C77A] transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#8D8D8D] line-clamp-2">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="rounded-full border border-white/10 p-3 text-[#8D8D8D] group-hover:border-[#C9A45C] group-hover:text-[#C9A45C] transition-all">
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.services.map((srv) => (
                    <span
                      key={srv}
                      className="rounded-full border border-white/5 bg-black/40 px-3 py-1 text-[10px] text-[#8D8D8D] font-mono"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
