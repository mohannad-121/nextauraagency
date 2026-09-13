import { constructMetadata } from "@/lib/seo";
import { HomeHero } from "@/components/home/HomeHero";
import { BrandManifesto } from "@/components/home/BrandManifesto";
import { EcosystemOrbit } from "@/components/home/EcosystemOrbit";
import { DivisionShowcase } from "@/components/home/DivisionShowcase";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { FitCoachSpotlight } from "@/components/home/FitCoachSpotlight";
import { CapabilitiesGrid } from "@/components/home/CapabilitiesGrid";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ProofSection } from "@/components/home/ProofSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = constructMetadata({
  title: "NextAura Agency — AI, Software, Products & Digital Experiences",
  description:
    "NextAura Agency is a futuristic technology ecosystem building intelligent websites, AI systems, automation, software applications, and fitness technology.",
});

export default function HomePage() {
  return (
    <main className="relative bg-[#050505] text-[#F4F0E7]">
      <HomeHero />
      <BrandManifesto />
      <EcosystemOrbit />
      <DivisionShowcase />
      <FeaturedWork />
      <FitCoachSpotlight />
      <CapabilitiesGrid />
      <ProcessSection />
      <ProofSection />
      <FinalCTA />
    </main>
  );
}
