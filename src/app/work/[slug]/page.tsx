import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import { constructMetadata } from "@/lib/seo";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

interface CaseStudyProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CaseStudyProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};

  return constructMetadata({
    title: `${project.title} — Case Study`,
    description: project.description,
  });
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <main className="relative bg-[#050505] text-[#F4F0E7] pt-32 pb-24 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/work"
            className="inline-flex items-center space-x-2 text-xs font-mono text-[#8D8D8D] uppercase hover:text-[#C9A45C]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Work</span>
          </Link>
        </div>

        {/* Case Study Hero */}
        <div className="flex flex-col space-y-6 border-b border-white/10 pb-12">
          <div className="flex items-center space-x-4 text-xs font-mono text-[#C9A45C]">
            <span>{project.division}</span>
            <span>{"//"}</span>
            <span>{project.industry}</span>
            <span>{"//"}</span>
            <span>{project.year}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white uppercase leading-[1.05]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl font-serif italic text-[#E5C77A] max-w-3xl">
            {project.subtitle}
          </p>

          <p className="text-sm sm:text-base leading-relaxed text-[#8D8D8D] max-w-4xl">
            {project.description}
          </p>
        </div>

        {/* Stats Grid if available */}
        {project.stats && (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-[#0D0D0D] p-6 text-center"
              >
                <span className="block text-3xl font-light text-[#E5C77A] font-mono">
                  {stat.value}
                </span>
                <span className="mt-1 block text-[10px] font-mono text-[#8D8D8D] uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Media Banner */}
        <div className="mt-12">
          <MediaFrame alt={project.title} type={project.divisionSlug} aspectRatio="21/9" />
        </div>

        {/* Deep Dive Content Sections */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Narrative */}
          <div className="lg:col-span-8 space-y-16">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-light text-white uppercase font-mono border-b border-white/10 pb-3">
                01 // OVERVIEW
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#8D8D8D]">
                {project.overview}
              </p>
            </div>

            {/* Challenge */}
            <div className="space-y-4">
              <h2 className="text-2xl font-light text-white uppercase font-mono border-b border-white/10 pb-3">
                02 // THE CHALLENGE
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#8D8D8D]">
                {project.challenge}
              </p>
            </div>

            {/* Approach */}
            <div className="space-y-4">
              <h2 className="text-2xl font-light text-white uppercase font-mono border-b border-white/10 pb-3">
                03 // THE APPROACH
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#8D8D8D]">
                {project.approach}
              </p>
            </div>

            {/* Solution */}
            <div className="space-y-4">
              <h2 className="text-2xl font-light text-white uppercase font-mono border-b border-white/10 pb-3">
                04 // THE SOLUTION & IMPACT
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#8D8D8D]">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Sidebar Specs */}
          <div className="lg:col-span-4 space-y-8">
            <div className="rounded-3xl border border-white/10 bg-[#0D0D0D] p-8 space-y-6">
              <div>
                <span className="text-[10px] font-mono text-[#C9A45C] uppercase block mb-1">
                  CLIENT / STATUS
                </span>
                <span className="text-sm text-white font-medium">{project.client}</span>
                <span className="block text-xs font-mono text-[#8D8D8D] mt-1">
                  STATUS: {project.status}
                </span>
              </div>

              <div className="border-t border-white/10 pt-4">
                <span className="text-[10px] font-mono text-[#C9A45C] uppercase block mb-3">
                  SERVICES DELIVERED
                </span>
                <ul className="space-y-2 text-xs text-[#F4F0E7]">
                  {project.services.map((srv) => (
                    <li key={srv} className="flex items-center space-x-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#C9A45C]" />
                      <span>{srv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/10 pt-4">
                <span className="text-[10px] font-mono text-[#C9A45C] uppercase block mb-3">
                  TECHNOLOGY STACK
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-black/60 px-2.5 py-1 text-[10px] font-mono text-[#8D8D8D]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Project Footer Bar */}
        <div className="mt-24 border-t border-white/10 pt-12 flex flex-col sm:flex-row items-center justify-between">
          <div>
            <span className="text-[10px] font-mono text-[#C9A45C] uppercase">NEXT CASE STUDY</span>
            <h4 className="text-2xl font-light text-white">{nextProject.title}</h4>
          </div>
          <div className="mt-4 sm:mt-0">
            <Button href={`/work/${nextProject.slug}`}>
              View Next Case Study
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
