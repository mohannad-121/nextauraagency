import { constructMetadata } from "@/lib/seo";
import { FOUNDERS } from "@/data/founders";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata = constructMetadata({
  title: "About NextAura Agency & Leadership",
  description:
    "Learn about NextAura Agency, our founders Mohannad, Moayad, and Farah, and our philosophy on engineering intelligent digital products.",
});

export default function AboutPage() {
  return (
    <main className="relative bg-[#050505] text-[#F4F0E7] pt-32 pb-24 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="ABOUT NEXTAURA"
          title="WE ARE"
          serifTitle="NEXTAURA AGENCY."
          description="A multidisciplinary technology group, creative studio, and product lab based in Jordan, operating globally."
        />

        {/* Brand Narrative */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-[#080808] p-8 sm:p-12 space-y-6">
          <h2 className="text-3xl font-light text-white uppercase">
            Where Ideas Become Systems, Products, and Experiences.
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#8D8D8D]">
            NextAura Agency was founded on a simple principle: digital products should be built with Apple-level design restraint, high-grade engineering depth, and intentional intelligence.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-[#8D8D8D]">
            Whether building an enterprise web platform through NextAura AI, an interactive mobile application through NextAura Studios, or computer-vision fitness technology through NextAura Fit, every project adheres to strict standards of speed, utility, and visual elegance.
          </p>
        </div>

        {/* Founder Cards */}
        <div className="mt-24">
          <SectionHeading
            eyebrow="LEADERSHIP"
            title="THE FOUNDERS &"
            serifTitle="STAKEHOLDERS."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {FOUNDERS.map((founder) => (
              <div
                key={founder.name}
                className="rounded-3xl border border-white/10 bg-[#0D0D0D] p-8 space-y-4 hover:border-[#C9A45C]/40 transition-colors"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <h3 className="text-2xl font-light text-white">{founder.name}</h3>
                  <span className="text-xs font-mono text-[#C9A45C] uppercase font-semibold">
                    {founder.role}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-[#8D8D8D] pt-2">
                  {founder.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Button href="/contact" size="lg">
            Start a Conversation
          </Button>
        </div>
      </div>
    </main>
  );
}
