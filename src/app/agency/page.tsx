import { constructMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata = constructMetadata({
  title: "The Ecosystem Architecture",
  description:
    "NextAura Agency is a technology ecosystem building businesses, software, intelligence, products, and fitness technology.",
});

export default function AgencyPage() {
  const principles = [
    {
      title: "Design + Engineering as One System",
      desc: "We do not treat visual creative work and backend engineering as separate departments. Both disciplines start on day one.",
    },
    {
      title: "AI With Real Purpose",
      desc: "We do not add artificial intelligence because it is trendy. We embed AI where it measurably speeds up execution or unlocks new capabilities.",
    },
    {
      title: "Custom Infrastructure",
      desc: "No fragile off-the-shelf templates. Every platform is architected around your specific business model and operational needs.",
    },
    {
      title: "Long-Term Thinking",
      desc: "We engineer digital foundations that scale gracefully over years, not months.",
    },
  ];

  return (
    <main className="relative bg-[#050505] text-[#F4F0E7] pt-32 pb-24 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="AGENCY ARCHITECTURE"
          title="TECHNOLOGY BUILT AROUND"
          serifTitle="AMBITION."
          description="NextAura Agency is not simply an agency that builds websites. We are a technology ecosystem building businesses, software, intelligence, products, and human performance technology."
        />

        {/* Philosophy Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((p, idx) => (
            <div
              key={p.title}
              className="rounded-3xl border border-white/10 bg-[#0D0D0D] p-8 space-y-4 hover:border-[#C9A45C]/40 transition-colors"
            >
              <div className="flex items-center space-x-2 text-xs font-mono text-[#C9A45C]">
                <span>PRINCIPLE // 0{idx + 1}</span>
              </div>
              <h3 className="text-2xl font-light text-[#F4F0E7]">{p.title}</h3>
              <p className="text-sm leading-relaxed text-[#8D8D8D]">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Ecosystem Structure Overview */}
        <div className="mt-24 rounded-3xl border border-white/10 bg-[#080808] p-8 sm:p-12 space-y-8">
          <h3 className="text-3xl font-light text-[#F4F0E7]">
            One Umbrella. Three Specialized Divisions.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-[#0D0D0D] p-6 space-y-3">
              <span className="text-xs font-mono text-[#C9A45C]">NEXTAURA AI</span>
              <h4 className="text-lg font-medium text-white">Intelligent Systems & Web</h4>
              <p className="text-xs text-[#8D8D8D]">
                Web applications, business platforms, AI assistants, RAG pipelines, CRM systems, and workflow automation.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0D0D0D] p-6 space-y-3">
              <span className="text-xs font-mono text-[#E5C77A]">NEXTAURA STUDIOS</span>
              <h4 className="text-lg font-medium text-white">Apps & Creative Tech</h4>
              <p className="text-xs text-[#8D8D8D]">
                Mobile apps, original consumer products, interactive WebGL software, digital games, and creative labs.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0D0D0D] p-6 space-y-3">
              <span className="text-xs font-mono text-[#B99A5D]">NEXTAURA FIT</span>
              <h4 className="text-lg font-medium text-white">Human Performance</h4>
              <p className="text-xs text-[#8D8D8D]">
                AI-powered athletic technology, computer vision pose tracking, biometric coaching, and FitCoach AI.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-20 text-center">
          <Button href="/contact" size="lg">
            Start a Conversation
          </Button>
        </div>
      </div>
    </main>
  );
}
