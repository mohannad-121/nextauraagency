"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FeaturedWork() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 sm:py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <SectionHeading
            eyebrow="Selected Portfolio"
            title="SELECTED WORK."
            serifTitle="ENGINEERED TO LAST."
            description="A curated selection of intelligent web systems, enterprise platforms, and digital product launches."
          />
          <div className="mt-6 md:mt-0">
            <Button href="/work" variant="outline">
              View All Projects
            </Button>
          </div>
        </div>

        {/* Campaign Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0D0D0D] p-6 sm:p-8 transition-all duration-500 hover:border-[#C9A45C]/40 hover:shadow-2xl hover:shadow-[#C9A45C]/10"
              data-cursor="VIEW"
            >
              <Link href={`/work/${project.slug}`} className="block">
                {/* Media Preview Frame */}
                <MediaFrame
                  alt={project.title}
                  type={project.divisionSlug}
                  aspectRatio="16/9"
                  badge={project.status}
                  className="mb-6 shadow-xl"
                />

                {/* Project Metadata Header */}
                <div className="flex items-center justify-between text-xs font-mono text-[#8D8D8D] mb-3">
                  <span className="text-[#C9A45C]">{project.division}</span>
                  <span>{project.year}</span>
                </div>

                {/* Title & Subtitle */}
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

                {/* Service Tags */}
                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.services.slice(0, 3).map((srv) => (
                    <span
                      key={srv}
                      className="rounded-full border border-white/5 bg-black/40 px-3 py-1 text-[10px] text-[#8D8D8D] font-mono"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
