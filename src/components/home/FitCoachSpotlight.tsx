"use client";

import { DeviceMockup } from "@/components/ui/DeviceMockup";
import { Button } from "@/components/ui/Button";
import { GoldText } from "@/components/ui/GoldText";
import { Activity, Camera, Zap, RefreshCw, BarChart2 } from "lucide-react";

export function FitCoachSpotlight() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 sm:py-32 px-6 lg:px-12 border-y border-white/10">
      {/* Background Volumetric Lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-full max-w-7xl bg-radial from-[#E5C77A]/15 via-[#C9A45C]/5 to-transparent blur-3xl opacity-50" />

      <div className="mx-auto max-w-7xl">
        {/* Section Badge */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center space-x-2 rounded-full border border-[#E5C77A]/30 bg-[#E5C77A]/10 px-4 py-1.5 text-[10px] font-mono tracking-[0.25em] text-[#E5C77A] uppercase shadow-lg mb-4">
            <Activity className="h-3.5 w-3.5" />
            <span>NEXTAURA FIT FLAGSHIP PRODUCT</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#F4F0E7] uppercase leading-[1.05]">
            FITCOACH AI <br />
            <GoldText serif>TRAINING, UNDERSTOOD.</GoldText>
          </h2>

          <p className="mt-4 max-w-2xl text-sm sm:text-base text-[#8D8D8D]">
            An intelligent computer-vision athletic platform that evaluates joint posture at 60 FPS, provides real-time biomechanical feedback, and recalculates workouts set by set.
          </p>
        </div>

        {/* Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Interactive Phone Shell Mockup with Computer Vision Overlay */}
          <div className="lg:col-span-6 flex justify-center">
            <DeviceMockup type="mobile" className="shadow-2xl shadow-[#C9A45C]/20">
              <div className="relative h-full w-full p-4 flex flex-col justify-between text-[#F4F0E7] font-sans">
                {/* HUD Camera Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-[10px] font-mono text-[#E5C77A]">
                  <div className="flex items-center space-x-2">
                    <Camera className="h-3.5 w-3.5" />
                    <span>VISION RUNNING (60 FPS)</span>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 text-emerald-400 px-2 py-0.5 text-[9px] font-semibold">
                    FORM: EXCELLENT (96%)
                  </span>
                </div>

                {/* Computer Vision Pose Estimation Skeleton Canvas Simulator */}
                <div className="relative my-6 aspect-3/4 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#080808] p-4 flex flex-col justify-between">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                  {/* SVG Biomechanical Pose Nodes Visualizer */}
                  <svg className="absolute inset-0 h-full w-full opacity-80" viewBox="0 0 200 300">
                    {/* Skeleton Connection Lines */}
                    <line x1="100" y1="50" x2="100" y2="110" stroke="#C9A45C" strokeWidth="2" strokeDasharray="3,3" />
                    <line x1="100" y1="70" x2="70" y2="120" stroke="#E5C77A" strokeWidth="2" />
                    <line x1="100" y1="70" x2="130" y2="120" stroke="#E5C77A" strokeWidth="2" />
                    <line x1="70" y1="120" x2="60" y2="170" stroke="#E5C77A" strokeWidth="2" />
                    <line x1="130" y1="120" x2="140" y2="170" stroke="#E5C77A" strokeWidth="2" />
                    <line x1="100" y1="110" x2="80" y2="190" stroke="#C9A45C" strokeWidth="2" />
                    <line x1="100" y1="110" x2="120" y2="190" stroke="#C9A45C" strokeWidth="2" />
                    <line x1="80" y1="190" x2="75" y2="260" stroke="#E5C77A" strokeWidth="2" />
                    <line x1="120" y1="190" x2="125" y2="260" stroke="#E5C77A" strokeWidth="2" />

                    {/* Joint Keypoint Landmarks */}
                    <circle cx="100" cy="40" r="8" fill="#E5C77A" />
                    <circle cx="100" cy="70" r="5" fill="#C9A45C" />
                    <circle cx="70" cy="120" r="4" fill="#E5C77A" />
                    <circle cx="130" cy="120" r="4" fill="#E5C77A" />
                    <circle cx="60" cy="170" r="4" fill="#E5C77A" />
                    <circle cx="140" cy="170" r="4" fill="#E5C77A" />
                    <circle cx="100" cy="110" r="5" fill="#C9A45C" />
                    <circle cx="80" cy="190" r="4.5" fill="#E5C77A" />
                    <circle cx="120" cy="190" r="4.5" fill="#E5C77A" />
                    <circle cx="75" cy="260" r="4" fill="#E5C77A" />
                    <circle cx="125" cy="260" r="4" fill="#E5C77A" />
                  </svg>

                  {/* HUD Realtime Overlay Stats */}
                  <div className="relative z-20 flex justify-between items-start text-[9px] font-mono text-[#E5C77A]">
                    <div className="rounded-lg bg-black/70 p-2 backdrop-blur-md border border-white/10">
                      <div>HIP ANGLE: 94.2°</div>
                      <div>KNEE DEPTH: PARALLEL</div>
                    </div>
                    <div className="rounded-lg bg-black/70 p-2 backdrop-blur-md border border-[#C9A45C]/30 text-right">
                      <div>SET 3 / 4</div>
                      <div className="text-white font-bold">12 REPS (TARGET 12)</div>
                    </div>
                  </div>

                  <div className="relative z-20 mt-auto rounded-xl bg-black/80 p-3 backdrop-blur-md border border-[#E5C77A]/40 text-center">
                    <span className="text-[10px] font-semibold text-[#E5C77A] uppercase tracking-wider block">
                      LIVE COACH ALERT
                    </span>
                    <span className="text-[11px] text-white">
                      &quot;Drive through heels. Excellent hip hinge speed.&quot;
                    </span>
                  </div>
                </div>

                {/* Mobile Bottom Telemetry Bar */}
                <div className="rounded-xl border border-white/10 bg-[#121212] p-3 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[9px] font-mono text-[#8D8D8D] uppercase block">
                      NEXT RECOMMENDATION
                    </span>
                    <span className="font-medium text-[#F4F0E7]">Increase +2.5kg for Set 4</span>
                  </div>
                  <Zap className="h-5 w-5 text-[#E5C77A]" />
                </div>
              </div>
            </DeviceMockup>
          </div>

          {/* Product Feature Pillars */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-light tracking-tight text-[#F4F0E7]">
                Intelligent Athletic Performance Built Around You.
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#8D8D8D]">
                FitCoach AI turns any camera into a high-precision kinetic tracking station. No wearable hardware required.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-[#0D0D0D] p-5 flex items-start space-x-4">
                <div className="rounded-xl border border-[#C9A45C]/30 bg-[#C9A45C]/10 p-3 text-[#E5C77A] shrink-0">
                  <Camera className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#F4F0E7]">
                    33-Joint Biomechanical Camera Tracking
                  </h4>
                  <p className="mt-1 text-xs text-[#8D8D8D]">
                    Real-time pose estimation tracking spinal alignment, hip depth, knee displacement, and bar velocity at 60 FPS.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0D0D0D] p-5 flex items-start space-x-4">
                <div className="rounded-xl border border-[#C9A45C]/30 bg-[#C9A45C]/10 p-3 text-[#E5C77A] shrink-0">
                  <RefreshCw className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#F4F0E7]">
                    Adaptive Set-by-Set Workout Engine
                  </h4>
                  <p className="mt-1 text-xs text-[#8D8D8D]">
                    Dynamic neural algorithms adjusting weight loads, rep targets, and rest intervals based on live muscular fatigue indices.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0D0D0D] p-5 flex items-start space-x-4">
                <div className="rounded-xl border border-[#C9A45C]/30 bg-[#C9A45C]/10 p-3 text-[#E5C77A] shrink-0">
                  <BarChart2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#F4F0E7]">
                    Long-Term Capacity & Load Analytics
                  </h4>
                  <p className="mt-1 text-xs text-[#8D8D8D]">
                    Comprehensive telemetry tracking total volume output, recovery curves, posture balance, and progressive overload trajectory.
                  </p>
                </div>
              </div>
            </div>

            {/* Launch CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button href="/products/fitcoach-ai" size="lg">
                Discover FitCoach AI
              </Button>
              <Button href="/divisions/fit" variant="secondary" size="lg">
                Explore NextAura Fit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
