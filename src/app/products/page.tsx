import { constructMetadata } from "@/lib/seo";
import { PRODUCTS } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";

export const metadata = constructMetadata({
  title: "NextAura Proprietary Products",
  description:
    "Explore proprietary products built and owned by NextAura Agency, including FitCoach AI, AuraWallet, and NextAura Flow.",
});

export default function ProductsPage() {
  return (
    <main className="relative bg-[#050505] text-[#F4F0E7] pt-32 pb-24 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="PROPRIETARY TECHNOLOGY"
          title="PROPRIETARY PRODUCTS."
          serifTitle="OWNED INNOVATIONS."
          description="Beyond custom client platforms, NextAura builds and incubates original software, mobile applications, and fitness technology."
        />

        <div className="mt-16 space-y-12">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.slug}
              className={`rounded-3xl border p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                prod.isFlagship
                  ? "border-[#C9A45C] bg-[#0D0D0D] ring-1 ring-[#C9A45C]/30 shadow-2xl shadow-[#C9A45C]/10"
                  : "border-white/10 bg-[#0D0D0D]"
              }`}
            >
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-3 text-xs font-mono text-[#C9A45C]">
                  <span>{prod.division}</span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] text-[#F4F0E7] uppercase">
                    {prod.badge}
                  </span>
                </div>

                <h2 className="text-4xl font-light text-white uppercase">{prod.name}</h2>
                <p className="text-base font-serif italic text-[#E5C77A]">{prod.tagline}</p>
                <p className="text-sm leading-relaxed text-[#8D8D8D]">{prod.description}</p>

                <div className="space-y-3 pt-2">
                  {prod.features.map((f) => (
                    <div key={f.title} className="text-xs">
                      <span className="font-semibold text-white">{f.title}: </span>
                      <span className="text-[#8D8D8D]">{f.desc}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button href={`/products/${prod.slug}`}>
                    View {prod.name} Product Page
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <MediaFrame
                  alt={prod.name}
                  type={prod.divisionSlug}
                  aspectRatio="4/3"
                  badge={prod.status}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
