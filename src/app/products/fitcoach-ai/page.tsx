import { constructMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { DeviceMockup } from "@/components/ui/DeviceMockup";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { GoldText } from "@/components/ui/GoldText";
import { Activity, Camera, Zap, RefreshCw, BarChart2 } from "lucide-react";

export const metadata = constructMetadata({
  title: "FitCoach AI — Movement Intelligence Platform",
  description:
    "FitCoach AI is NextAura Fit's signature computer-vision athletic platform that evaluates joint posture at 60 FPS and dynamically optimizes workouts.",
});

export default function FitCoachAIPage() {
  const features = [
    {
      icon: Camera,
      title: "Computer Vision Form Tracking",
      desc: "On-device 33-keypoint skeleton analysis tracking joint angles at 60 FPS using standard smartphone cameras.",
    },
    {
      icon: Zap,
      title: "Real-Time Kinetic Feedback",
      desc: "Audio and visual visual cues alerting you to hip displacement, spinal curvature, or incomplete range of motion.",
    },
    {
      icon: RefreshCw,
      title: "Set-by-Set Dynamic Progression",
      desc: "Neural workout algorithms recalculating weight loads, reps, and resting intervals dynamically set by set.",
    },
    {
      icon: BarChart2,
      title: "Muscular Telemetry & Fatigue Curves",
      desc: "Deep athletic reporting measuring overall work capacity, bar velocity loss, and progressive overload trajectory.",
    },
  ];

  return (
    <main className="relative bg-[#050505] text-[#F4F0E7] pt-32 pb-24 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Product Hero */}
        <div className="text-center space-y-6 border-b border-white/10 pb-16">
          <div className="inline-flex items-center space-x-2 rounded-full border border-[#E5C77A]/30 bg-[#E5C77A]/10 px-4 py-1.5 text-[10px] font-mono text-[#E5C77A] uppercase shadow-lg mx-auto">
            <Activity className="h-3.5 w-3.5" />
            <span>FITCOACH AI BY NEXTAURA FIT</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight uppercase leading-[0.95]">
            TRAINING, <br />
            <GoldText serif>UNDERSTOOD.</GoldText>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#8D8D8D]">
            An athletic human movement platform that turns your smartphone camera into an intelligent real-time coach.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact">
              Inquire Early Access
            </Button>
            <Button href="/divisions/fit" variant="secondary">
              NextAura Fit Division
            </Button>
          </div>
        </div>

        {/* Central Device Demo */}
        <div className="mt-16 flex justify-center">
          <DeviceMockup type="mobile" className="shadow-2xl shadow-[#C9A45C]/20">
            <div className="p-4 text-center text-xs space-y-4 text-white">
              <div className="rounded-xl border border-[#E5C77A]/40 bg-[#E5C77A]/10 p-3 font-mono text-[#E5C77A]">
                60 FPS KINETIC SKELETON TRACKING
              </div>

              <div className="relative aspect-3/4 rounded-2xl bg-[#080808] border border-white/10 p-3 flex flex-col justify-between text-left font-mono text-[9px] text-[#E5C77A]">
                <div>
                  <span className="block text-white font-bold">EXERCISE: BARBELL SQUAT</span>
                  <span>DEPTH: 98% (PARALLEL)</span>
                </div>
                <div className="rounded-lg bg-black/80 p-2 border border-white/10 text-center text-white">
                  &quot;Form 96%. Drive through heels.&quot;
                </div>
              </div>

              <div className="rounded-xl bg-[#121212] p-3 text-[#8D8D8D]">
                Dynamic Weight Adjustments & Real-time Fatigue Recalculation
              </div>
            </div>
          </DeviceMockup>
        </div>

        {/* Feature Grid */}
        <div className="mt-24">
          <SectionHeading
            eyebrow="SYSTEM ARCHITECTURE"
            title="ENGINEERED FOR"
            serifTitle="PEAK OUTPUT."
            description="Built at the intersection of computer vision, kinetic movement science, and adaptive neural programming."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="rounded-3xl border border-white/10 bg-[#0D0D0D] p-8 space-y-4 hover:border-[#E5C77A]/40 transition-colors"
                >
                  <div className="rounded-2xl border border-[#E5C77A]/30 bg-[#E5C77A]/10 p-3 text-[#E5C77A] w-fit">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-medium text-white">{feat.title}</h3>
                  <p className="text-xs leading-relaxed text-[#8D8D8D]">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Media Showcase Slot */}
        <div className="mt-24">
          <SectionHeading
            eyebrow="MEDIA SHOWCASE"
            title="CINEMATIC PRODUCT"
            serifTitle="DEMONSTRATIONS."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <MediaFrame alt="FitCoach AI Motion Tracking" type="fit" aspectRatio="16/9" badge="POSE VISION" />
            <MediaFrame alt="FitCoach AI Analytics Dashboard" type="fit" aspectRatio="16/9" badge="TELEMETRY" />
          </div>
        </div>
      </div>
    </main>
  );
}
