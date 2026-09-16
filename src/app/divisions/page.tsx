import { constructMetadata } from "@/lib/seo";
import { DIVISIONS } from "@/data/divisions";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

export const metadata = constructMetadata({
  title: "Ecosystem Divisions",
  description:
    "Explore NextAura AI, NextAura Studios, NextAura Fit, and NextAura OS — four specialized divisions operating under NextAura Agency.",
});

export default function DivisionsPage() {
  return (
    <main className="relative bg-[#050505] text-[#F4F0E7] pt-32 pb-24 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="ECOSYSTEM DIVISIONS"
          title="FOUR DIVISIONS."
          serifTitle="ONE VISION."
          description="Each NextAura division operates with specialized engineering discipline while sharing a single standards-driven design system."
        />

        <div className="mt-16 space-y-16">
          {DIVISIONS.map((div, idx) => (
            <div
              key={div.id}
              className="rounded-3xl border border-white/10 bg-[#0D0D0D] p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-[#C9A45C]/40 transition-colors"
            >
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center space-x-3 text-xs font-mono text-[#C9A45C]">
                  <span>0{idx + 1} {"//"} DIVISION</span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] uppercase text-[#F4F0E7]">
                    {div.badge}
                  </span>
                </div>

                <a
                  href={div.externalUrl || `/divisions/${div.slug}`}
                  target={div.externalUrl ? "_blank" : undefined}
                  rel={div.externalUrl ? "noopener noreferrer" : undefined}
                  className="group/title inline-block"
                >
                  <h2 className="text-3xl sm:text-4xl font-light text-[#F4F0E7] group-hover/title:text-[#E5C77A] transition-colors flex items-center gap-3">
                    <span>{div.name}</span>
                    {div.externalUrl && (
                      <ArrowUpRight className="h-6 w-6 text-[#C9A45C] opacity-60 group-hover/title:opacity-100 group-hover/title:translate-x-1 group-hover/title:-translate-y-1 transition-all duration-300" />
                    )}
                  </h2>
                </a>

                <p className="text-base font-serif italic text-[#E5C77A]">{div.tagline}</p>
                <p className="text-sm leading-relaxed text-[#8D8D8D]">{div.description}</p>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  {div.externalUrl ? (
                    <Button
                      href={div.externalUrl}
                      target="_blank"
                    >
                      Visit {div.name}
                    </Button>
                  ) : (
                    <Button href={`/divisions/${div.slug}`}>
                      Explore {div.name}
                    </Button>
                  )}

                  <Button
                    href={`/divisions/${div.slug}`}
                    variant="secondary"
                  >
                    Division Overview
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-6">
                {div.externalUrl ? (
                  <a
                    href={div.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group/media relative"
                    title={`Open ${div.name}`}
                  >
                    <MediaFrame
                      src={div.logoSrc}
                      alt={div.name}
                      type={div.id as "ai" | "studios" | "fit" | "os"}
                      aspectRatio="16/9"
                      badge={div.badge}
                    />
                    <div className="absolute top-4 right-4 z-20 flex items-center space-x-1.5 rounded-full bg-black/80 px-3 py-1 border border-[#C9A45C]/40 text-[10px] font-mono text-[#E5C77A] backdrop-blur-md transition-all shadow-lg group-hover/media:border-[#E5C77A]">
                      <span>Visit {div.name}</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </div>
                  </a>
                ) : (
                  <MediaFrame
                    src={div.logoSrc}
                    alt={div.name}
                    type={div.id as "ai" | "studios" | "fit" | "os"}
                    aspectRatio="16/9"
                    badge={div.badge}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
