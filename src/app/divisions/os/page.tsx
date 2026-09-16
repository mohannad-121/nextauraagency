import { constructMetadata } from "@/lib/seo";
import { DIVISIONS } from "@/data/divisions";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Terminal, Cpu, HardDrive, ShieldCheck, ArrowUpRight, ExternalLink } from "lucide-react";

export const metadata = constructMetadata({
  title: "NextAura OS — Cloud Operating System & Workspace Architecture",
  description:
    "NextAura OS engineers intelligent cloud operating layers, developer environments, high-performance web desktop interfaces, and modular digital workspaces.",
});

export default function NextAuraOSPage() {
  const division = DIVISIONS.find((d) => d.id === "os")!;

  const pillars = [
    {
      icon: Terminal,
      title: "Cloud OS & Web Desktop",
      desc: "Zero-latency virtual desktop environment running entirely within the modern web browser with native multi-window tiling.",
    },
    {
      icon: HardDrive,
      title: "Distributed File Architecture",
      desc: "Decentralized, encrypted cloud storage interfaces with instant drag-and-drop syncing and version-controlled workspaces.",
    },
    {
      icon: Cpu,
      title: "High-Performance Developer Tools",
      desc: "Integrated browser-based terminal emulators, code execution containers, and high-throughput real-time APIs.",
    },
    {
      icon: ShieldCheck,
      title: "Sandboxed System Security",
      desc: "Military-grade cryptographic session control, isolated memory namespaces, and secure enterprise user identity.",
    },
  ];

  return (
    <main className="relative bg-[#050505] text-[#F4F0E7] pt-32 pb-24 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Division Hero */}
        <div className="flex flex-col space-y-6 border-b border-white/10 pb-16">
          <div className="inline-flex items-center space-x-2 rounded-full border border-[#C9A45C]/30 bg-[#C9A45C]/10 px-4 py-1.5 text-[10px] font-mono text-[#E5C77A] uppercase w-fit">
            <Terminal className="h-3.5 w-3.5" />
            <span>SYSTEM ARCHITECTURE & CLOUD OS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight uppercase leading-[1.05]">
            SEAMLESS <br />
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#F4F0E7] via-[#E5C77A] to-[#C9A45C]">
              COMPUTING ARCHITECTURE.
            </span>
          </h1>

          <p className="max-w-3xl text-base sm:text-lg text-[#8D8D8D] leading-relaxed">
            {division.description}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="https://nextauraos.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 rounded-full border border-[#C9A45C]/40 bg-[#C9A45C]/10 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#E5C77A] hover:border-[#E5C77A] hover:bg-[#C9A45C] hover:text-[#050505] transition-all shadow-lg shadow-[#C9A45C]/10"
            >
              <span>Visit NextAura OS</span>
              <ExternalLink className="h-4 w-4" />
            </a>

            <Button href="/contact" variant="secondary">
              Enterprise Deployment
            </Button>
          </div>
        </div>

        {/* Live Interface Preview */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-[#0D0D0D] p-8 sm:p-12 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono text-[#C9A45C] uppercase">
                SYSTEM INTERFACE PREVIEW
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-white uppercase">
                Your Workspace. <br />Everywhere, Anytime.
              </h2>
              <p className="text-sm text-[#8D8D8D] leading-relaxed">
                NextAura OS transforms any screen into a personal, lightning-fast computing station. No heavy installations, no latency, and complete security compliance.
              </p>

              <div className="space-y-3 pt-2">
                {division.focus.map((item) => (
                  <div key={item} className="flex items-center space-x-2.5 text-xs text-[#F4F0E7]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C9A45C]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="https://nextauraos.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-mono text-[#E5C77A] hover:text-white transition-colors"
                >
                  <span>Visit NextAura OS</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <MediaFrame
                alt="NextAura OS Platform"
                type="os"
                aspectRatio="16/9"
                badge="NEXTAURA OS KERNEL"
              />
            </div>
          </div>
        </div>

        {/* System Architecture Pillars */}
        <div className="mt-20">
          <SectionHeading
            eyebrow="ARCHITECTURE PILLARS"
            title="ENGINEERED FOR"
            serifTitle="PERFORMANCE & SCALE."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-3xl border border-white/10 bg-[#0D0D0D] p-8 space-y-4 hover:border-[#C9A45C]/40 transition-colors"
                >
                  <div className="rounded-2xl border border-[#C9A45C]/30 bg-[#C9A45C]/10 p-3 text-[#E5C77A] w-fit">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-white">{pillar.title}</h3>
                  <p className="text-xs leading-relaxed text-[#8D8D8D]">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
