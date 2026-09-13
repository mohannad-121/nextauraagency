import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Privacy Policy",
  description: "Privacy policy and data governance practices of NextAura Agency.",
});

export default function PrivacyPage() {
  return (
    <main className="relative bg-[#050505] text-[#F4F0E7] pt-32 pb-24 px-6 lg:px-12">
      <div className="mx-auto max-w-4xl space-y-8">
        <h1 className="text-4xl font-light text-white uppercase">Privacy Policy</h1>
        <p className="text-xs font-mono text-[#C9A45C]">LAST UPDATED: SEPTEMBER 2026</p>
        <div className="space-y-4 text-sm text-[#8D8D8D] leading-relaxed">
          <p>
            At NextAura Agency (&quot;NextAura&quot;, &quot;we&quot;, &quot;us&quot;), protecting client confidentiality and personal telemetry data is foundational. This Privacy Policy details how information is collected, processed, and secured across our digital ecosystem (including NextAura AI, NextAura Studios, and NextAura Fit).
          </p>
          <h2 className="text-xl font-medium text-white pt-4">Data Collection & Use</h2>
          <p>
            We collect project inquiry information, contact details, and technical usage telemetry strictly to evaluate prospective projects, optimize performance, and deliver personalized platform features.
          </p>
          <h2 className="text-xl font-medium text-white pt-4">Fitness & Computer Vision Privacy</h2>
          <p>
            All camera feed processing conducted within FitCoach AI occurs via on-device MediaPipe/TensorFlow computer vision pipelines. Video feeds are never stored or transmitted to remote servers without explicit user permission.
          </p>
          <h2 className="text-xl font-medium text-white pt-4">Security Standards</h2>
          <p>
            NextAura implements TLS 1.3 encryption for data in transit and AES-256 encryption for database archives. We do not sell or monetize client or user data under any circumstance.
          </p>
        </div>
      </div>
    </main>
  );
}
