import { constructMetadata } from "@/lib/seo";
import { FOUNDERS } from "@/data/founders";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { LeaderCard } from "@/components/about/LeaderCard";

export const metadata = constructMetadata({
  title: "About NextAura Agency & Leadership",
  description:
    "Learn about NextAura Agency, our founders Mohannad and Moayad, and our philosophy on engineering intelligent digital products.",
});

export default function AboutPage() {
  return (
    <main className="relative bg-[#050505] text-[#F4F0E7] pt-32 pb-24 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="LEADERSHIP"
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
            serifTitle="LEADERSHIP."
            description="Engineering the future of digital architecture, intelligent systems, and interactive creative technology."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto justify-items-center">
            {FOUNDERS.map((founder) => (
              <LeaderCard key={founder.name} founder={founder} />
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
