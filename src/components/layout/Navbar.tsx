"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, DIVISION_NAV } from "@/data/navigation";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { SearchBar } from "@/components/layout/SearchBar";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [divisionsDropdown, setDivisionsDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-[#050505]/80 py-4 backdrop-blur-xl border-b border-white/5 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Brand Logo */}
        <Link href="/" className="group relative flex items-center space-x-3">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 p-1 border border-white/10 group-hover:border-[#C9A45C]/50 transition-all duration-300 group-hover:scale-105 shadow-md">
            <Image
              src="/logo.png"
              alt="NextAura Logo"
              width={40}
              height={40}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-light tracking-[0.25em] text-[#F4F0E7] transition-colors group-hover:text-[#E5C77A]">
              NEXT<span className="font-semibold text-[#C9A45C]">AURA</span>
            </span>
            <span className="text-[9px] tracking-[0.3em] text-[#8D8D8D] uppercase font-mono">
              AGENCY
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;

            if (item.href === "/divisions") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setDivisionsDropdown(true)}
                  onMouseLeave={() => setDivisionsDropdown(false)}
                >
                  <Link
                    href="/divisions"
                    className={`flex items-center space-x-1 text-xs tracking-[0.15em] uppercase transition-colors hover:text-[#E5C77A] ${
                      pathname.startsWith("/divisions")
                        ? "text-[#C9A45C] font-semibold"
                        : "text-[#8D8D8D]"
                    }`}
                  >
                    <span>Divisions</span>
                    <ChevronDown className="h-3 w-3 opacity-60" />
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {divisionsDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full -left-4 mt-2 w-64 rounded-xl border border-white/10 bg-[#0D0D0D]/95 p-3 shadow-2xl backdrop-blur-2xl"
                      >
                        {DIVISION_NAV.map((div) => (
                          <Link
                            key={div.href}
                            href={div.href}
                            className="group flex flex-col rounded-lg p-2.5 transition-colors hover:bg-white/5"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold tracking-wider text-[#F4F0E7] group-hover:text-[#E5C77A]">
                                {div.label}
                              </span>
                              <span className="text-[9px] text-[#C9A45C] font-mono">
                                {div.badge}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-xs tracking-[0.15em] uppercase transition-colors hover:text-[#E5C77A] ${
                  isActive ? "text-[#C9A45C] font-semibold" : "text-[#8D8D8D]"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#C9A45C]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Search & CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <SearchBar />
          <Link
            href="/contact"
            className="group relative inline-flex items-center space-x-2 overflow-hidden rounded-full border border-[#C9A45C]/40 bg-[#C9A45C]/10 px-5 py-2.5 text-xs font-medium tracking-[0.15em] text-[#E5C77A] uppercase transition-all duration-300 hover:border-[#E5C77A] hover:bg-[#C9A45C] hover:text-[#050505] shadow-lg shadow-[#C9A45C]/5"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex items-center space-x-3 md:hidden">
          <SearchBar />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-white/10 p-2 text-[#F4F0E7] focus:outline-hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-0 left-0 right-0 z-30 flex flex-col justify-between bg-[#050505]/98 px-6 pt-24 pb-12 backdrop-blur-3xl md:hidden"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-[10px] tracking-[0.3em] text-[#8D8D8D] uppercase font-mono border-b border-white/10 pb-3">
                Ecosystem Sitemap
              </span>
              {NAV_ITEMS.map((item, idx) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-baseline justify-between border-b border-white/5 pb-4 text-2xl font-light tracking-widest text-[#F4F0E7] transition-colors hover:text-[#E5C77A]"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono text-[#C9A45C]">0{idx + 1}</span>
                </Link>
              ))}

              <div className="pt-4">
                <span className="text-[10px] tracking-[0.3em] text-[#8D8D8D] uppercase font-mono">
                  Divisions
                </span>
                <div className="mt-3 grid grid-cols-1 gap-2">
                  {DIVISION_NAV.map((div) => (
                    <Link
                      key={div.href}
                      href={div.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 p-3 text-sm text-[#F4F0E7]"
                    >
                      <span>{div.label}</span>
                      <span className="text-[9px] text-[#C9A45C] font-mono">{div.badge}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4 pt-6">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-[#8A6A32] via-[#E0C176] to-[#A98342] py-4 text-center text-sm font-semibold tracking-wider text-black uppercase"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <div className="flex items-center justify-between text-xs text-[#8D8D8D]">
                <span>NextAura Agency © {new Date().getFullYear()}</span>
                <span>Jordan / Global</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
