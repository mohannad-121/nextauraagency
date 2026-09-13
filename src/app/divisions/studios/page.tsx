import { constructMetadata } from "@/lib/seo";
import { DIVISIONS } from "@/data/divisions";
import { PROJECTS } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Smartphone, Sparkles, Gamepad2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "NextAura Studios — Interactive Products & Creative Tech",
  description:
    "NextAura Studios builds mobile applications, consumer software, games, interactive WebGL products, and experimental creative software.",
});

export default function NextAuraStudiosPage() {
  const division = DIVISIONS.find((d) => d.id === "studios")!;
  const studioProjects = PROJECTS.filter((p) => p.divisionSlug === "studios");

  const pillars = [
    {
      icon: Smartphone,
      title: "Mobile Apps & Consumer Software",
      desc: "iOS & Android mobile products built with spring-physics motion, micro-haptics, and responsive layout scaling.",
    },
    {
      icon: Gamepad2,
      title: "Games & Interactive Software",
      desc: "Original internal gaming experiments, interactive storytelling, and high-frame-rate canvas experiences.",
    },
    {
      icon: Sparkles,
      title: "Creative Technology Labs",
      desc: "Custom WebGL visual shaders, interactive physical interfaces, and experimental technology prototypes.",
    },
  ];

  return (
    <main className="relative bg-[#050505] text-[#F4F0E7] pt-32 pb-24 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Division Hero */}
        <div className="flex flex-col space-y-6 border-b border-white/10 pb-16">
          <div className="inline-flex items-center space-x-2 rounded-full border border-[#E5C77A]/30 bg-[#E5C77A]/10 px-4 py-1.5 text-[10px] font-mono text-[#E5C77A] uppercase w-fit">
            <Smartphone className="h-3.5 w-3.5" />
            <span>CREATIVE TECHNOLOGY LAB</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight uppercase leading-[1.05]">
            IDEAS INTO <br />
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#F4F0E7] via-[#E5C77A] to-[#C9A45C]">
              INTERACTIVE PRODUCTS.
            </span>
          </h1>

          <p className="max-w-3xl text-base sm:text-lg text-[#8D8D8D] leading-relaxed">
            {division.description}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="https://nextaura-studios.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 rounded-full border border-[#E5C77A]/40 bg-[#E5C77A]/10 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#E5C77A] hover:border-[#E5C77A] hover:bg-[#E5C77A] hover:text-[#050505] transition-all shadow-lg"
            >
              <span>Launch NextAura Studios</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <Button href="/contact" variant="secondary">
              Collaborate With Studios
            </Button>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="mt-20">
          <SectionHeading
            eyebrow="STUDIO LAB PILLARS"
            title="PRODUCTS MADE TO"
            serifTitle="MOVE, PLAY & LIVE."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-3xl border border-white/10 bg-[#0D0D0D] p-8 space-y-4 hover:border-[#E5C77A]/40 transition-colors"
                >
                  <div className="rounded-2xl border border-[#E5C77A]/30 bg-[#E5C77A]/10 p-3 text-[#E5C77A] w-fit">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-medium text-white">{pillar.title}</h3>
                  <p className="text-xs leading-relaxed text-[#8D8D8D]">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Studio Projects */}
        <div className="mt-24">
          <SectionHeading
            eyebrow="STUDIO PROJECTS"
            title="CREATIVE TECH"
            serifTitle="SHOWCASE."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {studioProjects.map((project) => (
              <div
                key={project.slug}
                className="rounded-3xl border border-white/10 bg-[#0D0D0D] p-6 space-y-4 hover:border-[#E5C77A]/40 transition-colors"
              >
                <MediaFrame alt={project.title} type="studios" aspectRatio="16/9" />
                <div className="flex items-center justify-between text-xs font-mono text-[#8D8D8D]">
                  <span className="text-[#E5C77A]">{project.industry}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-2xl font-light text-white">{project.title}</h3>
                <p className="text-xs text-[#8D8D8D] line-clamp-2">{project.subtitle}</p>
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center space-x-1 text-xs font-mono text-[#E5C77A] uppercase pt-2 hover:underline"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
