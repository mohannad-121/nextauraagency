"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-[#F4F0E7] pt-24 pb-12">
      {/* Radial Background Illumination */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-full max-w-7xl bg-radial from-[#C9A45C]/10 via-transparent to-transparent blur-3xl opacity-40" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand Philosophy */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex items-center space-x-3 group">
                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 p-1 border border-white/10 group-hover:border-[#C9A45C]/50 transition-all duration-300">
                  <Image
                    src="/logo.png"
                    alt="NextAura Logo"
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-2xl font-light tracking-[0.25em] text-[#F4F0E7] group-hover:text-[#E5C77A] transition-colors">
                    NEXT<span className="font-semibold text-[#C9A45C]">AURA</span>
                  </span>
                  <span className="block text-[9px] tracking-[0.3em] text-[#8D8D8D] uppercase font-mono">
                    AGENCY
                  </span>
                </div>
              </Link>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-[#8D8D8D]">
                A technology ecosystem, creative studio, and product lab building intelligent websites, AI systems, applications, and human performance technology.
              </p>
            </div>

            <div className="mt-8 flex items-center space-x-3 text-xs text-[#8D8D8D]">
              <span className="inline-block h-2 w-2 rounded-full bg-[#C9A45C] animate-pulse" />
              <span>Operating Globally from Jordan</span>
            </div>
          </div>

          {/* Sitemaps */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {/* Ecosystem Divisions */}
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#C9A45C] uppercase">
                Divisions
              </span>
              <ul className="mt-4 space-y-3 text-xs tracking-wider">
                <li>
                  <Link href="/divisions/ai" className="text-[#8D8D8D] transition-colors hover:text-[#E5C77A]">
                    NextAura AI
                  </Link>
                </li>
                <li>
                  <Link href="/divisions/studios" className="text-[#8D8D8D] transition-colors hover:text-[#E5C77A]">
                    NextAura Studios
                  </Link>
                </li>
                <li>
                  <Link href="/divisions/fit" className="text-[#8D8D8D] transition-colors hover:text-[#E5C77A]">
                    NextAura Fit
                  </Link>
                </li>
                <li>
                  <Link href="/divisions/os" className="text-[#8D8D8D] transition-colors hover:text-[#E5C77A]">
                    NextAura OS
                  </Link>
                </li>
                <li>
                  <Link href="/products/fitcoach-ai" className="text-[#8D8D8D] transition-colors hover:text-[#E5C77A]">
                    FitCoach AI
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sitemap Navigation */}
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#C9A45C] uppercase">
                Ecosystem
              </span>
              <ul className="mt-4 space-y-3 text-xs tracking-wider">
                <li>
                  <Link href="/agency" className="text-[#8D8D8D] transition-colors hover:text-[#E5C77A]">
                    Agency Manifesto
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="text-[#8D8D8D] transition-colors hover:text-[#E5C77A]">
                    Selected Work
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-[#8D8D8D] transition-colors hover:text-[#E5C77A]">
                    Proprietary Products
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-[#8D8D8D] transition-colors hover:text-[#E5C77A]">
                    Founders & Philosophy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[#8D8D8D] transition-colors hover:text-[#E5C77A]">
                    Start a Project
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social & Legal */}
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#C9A45C] uppercase">
                Connect & Legal
              </span>
              <ul className="mt-4 space-y-3 text-xs tracking-wider">
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-[#8D8D8D] transition-colors hover:text-[#E5C77A]"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-[#8D8D8D] transition-colors hover:text-[#E5C77A]"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-[#8D8D8D] transition-colors hover:text-[#E5C77A]"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <Link href="/privacy" className="text-[#8D8D8D] transition-colors hover:text-[#E5C77A]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-[#8D8D8D] transition-colors hover:text-[#E5C77A]">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Oversized Typography Banner */}
        <div className="relative mt-20 overflow-hidden border-t border-white/5 pt-12 pb-6">
          <h2 className="text-center font-light tracking-[0.15em] text-white/[0.04] text-7xl sm:text-9xl lg:text-[14rem] select-none pointer-events-none uppercase">
            NEXT<span className="text-[#C9A45C]/[0.06]">AURA</span>
          </h2>
        </div>

        {/* Bottom Metadata */}
        <div className="flex flex-col items-center justify-between border-t border-white/5 pt-8 text-xs text-[#8D8D8D] sm:flex-row">
          <p>© {currentYear} NextAura Agency. All rights reserved.</p>
          <p className="mt-2 font-mono text-[10px] text-[#C9A45C] sm:mt-0">
            INTELLIGENCE. PRODUCTS. EXPERIENCES.
          </p>
        </div>
      </div>
    </footer>
  );
}
