import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Terms of Service",
  description: "Terms of service and legal agreement governing NextAura Agency websites and platforms.",
});

export default function TermsPage() {
  return (
    <main className="relative bg-[#050505] text-[#F4F0E7] pt-32 pb-24 px-6 lg:px-12">
      <div className="mx-auto max-w-4xl space-y-8">
        <h1 className="text-4xl font-light text-white uppercase">Terms of Service</h1>
        <p className="text-xs font-mono text-[#C9A45C]">LAST UPDATED: SEPTEMBER 2026</p>
        <div className="space-y-4 text-sm text-[#8D8D8D] leading-relaxed">
          <p>
            By accessing or interacting with NextAura Agency (&quot;NextAura&quot;), its specialized divisions (NextAura AI, NextAura Studios, NextAura Fit), or its proprietary products (FitCoach AI), you agree to be bound by these Terms of Service.
          </p>
          <h2 className="text-xl font-medium text-white pt-4">Intellectual Property</h2>
          <p>
            All custom designs, software codebases, brand assets, WebGL shaders, and machine learning architectures contained within NextAura platforms are protected by international intellectual property laws.
          </p>
          <h2 className="text-xl font-medium text-white pt-4">Fitness Tech Disclaimer</h2>
          <p>
            FitCoach AI provides movement feedback and dynamic workout recommendations for informational and athletic conditioning purposes. FitCoach AI is not a medical diagnostic service. Users should consult healthcare professionals before beginning any intense athletic program.
          </p>
        </div>
      </div>
    </main>
  );
}
