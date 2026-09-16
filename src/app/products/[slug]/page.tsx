import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/seo";
import { PRODUCTS } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { CheckCircle2 } from "lucide-react";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((item) => item.slug === slug);

  if (!product) {
    return constructMetadata({ title: "Product Not Found", noIndex: true });
  }

  return constructMetadata({
    title: `${product.name} — ${product.tagline}`,
    description: product.description,
    canonical: `/products/${product.slug}`,
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="relative bg-[#050505] px-6 pb-24 pt-32 text-[#F4F0E7] lg:px-12">
      <div className="mx-auto max-w-7xl">
        <section className="grid grid-cols-1 items-center gap-12 border-b border-white/10 pb-16 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#C9A45C]">
              <span>{product.division}</span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] uppercase text-[#F4F0E7]">
                {product.badge}
              </span>
              <span
                className="rounded-full border px-3 py-1 text-[10px] uppercase"
                style={{ borderColor: `${product.accentColor}66`, color: product.accentColor }}
              >
                {product.status}
              </span>
            </div>

            <h1 className="text-4xl font-light uppercase leading-tight sm:text-6xl">
              {product.name}
            </h1>

            <p className="text-xl font-serif italic" style={{ color: product.accentColor }}>
              {product.tagline}
            </p>

            <p className="max-w-2xl text-base leading-relaxed text-[#8D8D8D] sm:text-lg">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button href="/contact">Discuss This Product</Button>
              <Button href={`/divisions/${product.divisionSlug}`} variant="secondary">
                Visit {product.division}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <MediaFrame
              alt={product.name}
              type={product.divisionSlug}
              aspectRatio="4/3"
              badge={product.status}
            />
          </div>
        </section>

        <section className="mt-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C9A45C]">
            Product Capabilities
          </span>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {product.features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-[#0D0D0D] p-8 transition-colors hover:border-[#C9A45C]/40"
              >
                <CheckCircle2 className="h-5 w-5" style={{ color: product.accentColor }} />
                <h2 className="mt-5 text-xl font-medium text-white">{feature.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#8D8D8D]">{feature.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-3xl border border-white/10 bg-[#0D0D0D] px-8 py-12 text-center sm:px-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C9A45C]">NextAura Product Lab</p>
          <h2 className="mt-4 text-3xl font-light uppercase text-white sm:text-4xl">
            Interested in this product?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#8D8D8D]">
            Talk with the NextAura team about product strategy, integrations, and implementation.
          </p>
          <Button href="/contact" size="lg" className="mt-8">
            Start a Conversation
          </Button>
        </section>
      </div>
    </main>
  );
}
