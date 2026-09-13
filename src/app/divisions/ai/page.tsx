import { constructMetadata } from "@/lib/seo";
import { DIVISIONS } from "@/data/divisions";
import { PROJECTS } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ArrowUpRight, Cpu, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "NextAura AI — Intelligent Systems & Web Platforms",
  description:
    "NextAura AI designs and builds intelligent websites, AI assistants, automation systems, business platforms, and custom digital experiences for ambitious brands.",
});

export default function NextAuraAIPage() {
  const division = DIVISIONS.find((d) => d.id === "ai")!;
  const aiProjects = PROJECTS.filter((p) => p.divisionSlug === "ai");

  const serviceGroups = [
    {
      title: "BUILD",
      items: ["Websites & Portals", "Web Applications", "Enterprise Business Platforms", "E-commerce & Payments"],
    },
    {
      title: "INTELLIGENCE",
      items: ["AI Assistants", "RAG Knowledge Systems", "Custom LLM Integrations", "Predictive Analytics"],
    },
    {
      title: "AUTOMATE",
      items: ["Workflow Automation", "CRM & ERP Sync", "Booking & Reservation Engines", "API Engineering"],
    },
    {
      title: "SCALE",
      items: ["Multilingual SEO (AR/EN)", "Performance Tuning", "Conversion Rate Optimization", "Cloud Infrastructure"],
    },
  ];

  return (
    <main className="relative bg-[#050505] text-[#F4F0E7] pt-32 pb-24 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Division Hero */}
        <div className="flex flex-col space-y-6 border-b border-white/10 pb-16">
          <div className="inline-flex items-center space-x-2 rounded-full border border-[#C9A45C]/30 bg-[#C9A45C]/10 px-4 py-1.5 text-[10px] font-mono text-[#E5C77A] uppercase w-fit">
            <Cpu className="h-3.5 w-3.5" />
            <span>SPECIALIZED DIVISION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight uppercase leading-[1.05]">
            INTELLIGENCE THAT <br />
            BECOMES <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#F4F0E7] via-[#E5C77A] to-[#C9A45C]">INFRASTRUCTURE.</span>
          </h1>

          <p className="max-w-3xl text-base sm:text-lg text-[#8D8D8D] leading-relaxed">
            {division.description}
          </p>

          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <Button href="/contact">
              Start an AI / Web Project
            </Button>

            <a
              href="https://www.next-aura-ai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#8D8D8D] hover:text-[#C9A45C] transition-colors"
            >
              <span>Existing NextAura AI Website</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Grouped Capabilities Matrix */}
        <div className="mt-20">
          <SectionHeading
            eyebrow="CAPABILITIES MATRIX"
            title="SYSTEMS &"
            serifTitle="INTELLIGENCE."
            description="We group our capabilities around business outcomes, converting complex operational challenges into high-margin software."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-3xl border border-white/10 bg-[#0D0D0D] p-6 space-y-4 hover:border-[#C9A45C]/40 transition-colors"
              >
                <span className="text-xs font-mono text-[#C9A45C] block">
                  {group.title}
                </span>
                <ul className="space-y-3 pt-2 text-xs text-[#F4F0E7]">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center space-x-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#C9A45C] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Division Selected Projects */}
        <div className="mt-24">
          <SectionHeading
            eyebrow="SELECTED DIVISION WORK"
            title="AI & WEB"
            serifTitle="PORTFOLIO."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiProjects.map((project) => (
              <div
                key={project.slug}
                className="rounded-3xl border border-white/10 bg-[#0D0D0D] p-6 space-y-4 hover:border-[#C9A45C]/40 transition-colors"
              >
                <MediaFrame alt={project.title} type="ai" aspectRatio="16/9" />
                <div className="flex items-center justify-between text-xs font-mono text-[#8D8D8D]">
                  <span className="text-[#C9A45C]">{project.industry}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-2xl font-light text-white">{project.title}</h3>
                <p className="text-xs text-[#8D8D8D] line-clamp-2">{project.subtitle}</p>
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center space-x-1 text-xs font-mono text-[#C9A45C] uppercase pt-2 hover:underline"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Division Final Call to Action */}
        <div className="mt-24 text-center border-t border-white/10 pt-16">
          <h3 className="text-3xl font-light text-white mb-6 uppercase">
            Ready to Build Your Intelligent Web Platform?
          </h3>
          <Button href="/contact" size="lg">
            Inquire NextAura AI
          </Button>
        </div>
      </div>
    </main>
  );
}
