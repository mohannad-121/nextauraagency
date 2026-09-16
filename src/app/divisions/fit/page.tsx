import { constructMetadata } from "@/lib/seo";
import { DIVISIONS } from "@/data/divisions";
import { Button } from "@/components/ui/Button";
import { DeviceMockup } from "@/components/ui/DeviceMockup";
import { Activity, Camera, Zap, ShieldCheck } from "lucide-react";

export const metadata = constructMetadata({
  title: "NextAura Fit — Fitness Technology & Movement Intelligence",
  description:
    "NextAura Fit integrates computer vision, biometric feedback, and artificial intelligence into athletic human performance and movement technology.",
});

export default function NextAuraFitPage() {
  const division = DIVISIONS.find((d) => d.id === "fit")!;

  return (
    <main className="relative bg-[#050505] text-[#F4F0E7] pt-32 pb-24 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Division Hero */}
        <div className="flex flex-col space-y-6 border-b border-white/10 pb-16">
          <div className="inline-flex items-center space-x-2 rounded-full border border-[#B99A5D]/30 bg-[#B99A5D]/10 px-4 py-1.5 text-[10px] font-mono text-[#E5C77A] uppercase w-fit">
            <Activity className="h-3.5 w-3.5" />
            <span>HUMAN PERFORMANCE TECH</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight uppercase leading-[1.05]">
            THE FUTURE OF <br />
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#F4F0E7] via-[#E5C77A] to-[#C9A45C]">
              PERSONAL PERFORMANCE.
            </span>
          </h1>

          <p className="max-w-3xl text-base sm:text-lg text-[#8D8D8D] leading-relaxed">
            {division.description}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="https://aifitcoach.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 rounded-full border border-[#C9A45C]/40 bg-[#C9A45C]/10 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#E5C77A] hover:border-[#E5C77A] hover:bg-[#C9A45C] hover:text-[#050505] transition-all shadow-lg"
            >
              <span>Visit NextAura Fit</span>
              <Activity className="h-4 w-4" />
            </a>

            <Button href="/products/fitcoach-ai" variant="secondary">
              Explore FitCoach AI Product Page
            </Button>
          </div>
        </div>

        {/* Flagship Product Showcase */}
        <div className="mt-20 rounded-3xl border border-[#C9A45C]/30 bg-[#0D0D0D] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono text-[#C9A45C] uppercase">
                FLAGSHIP INNOVATION // FITCOACH AI
              </span>
              <h2 className="text-3xl sm:text-5xl font-light text-white uppercase">
                Your Training. Understood by Intelligence.
              </h2>
              <p className="text-sm text-[#8D8D8D] leading-relaxed">
                FitCoach AI uses smartphone camera computer vision to parse 33 anatomical joints at 60 FPS, evaluating depth, spinal curve, and velocity loss without requiring wearable hardware.
              </p>

              <ul className="space-y-2 text-xs text-[#F4F0E7]">
                <li className="flex items-center space-x-2">
                  <Camera className="h-4 w-4 text-[#C9A45C]" />
                  <span>On-Device Camera 33-Keypoint Skeleton Analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-[#C9A45C]" />
                  <span>Real-time Kinematic Voice & Visual Cues</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ShieldCheck className="h-4 w-4 text-[#C9A45C]" />
                  <span>Dynamic Set Recalculation Based on Muscular Fatigue</span>
                </li>
              </ul>

              <div className="pt-4">
                <Button href="/products/fitcoach-ai">
                  Discover FitCoach AI Page
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <DeviceMockup type="mobile">
                <div className="p-4 text-center text-xs space-y-4">
                  <div className="rounded-xl border border-[#C9A45C]/40 bg-[#C9A45C]/10 p-3 font-mono text-[#E5C77A]">
                    FITCOACH AI LIVE ENGINE
                  </div>
                  <p className="text-[#8D8D8D]">
                    Real-time movement guidance, skeleton landmark feedback, set counts, and load recommendations.
                  </p>
                </div>
              </DeviceMockup>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
