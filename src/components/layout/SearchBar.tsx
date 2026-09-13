"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ArrowRight, Sparkles, FolderGit2, Cpu, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS } from "@/data/products";
import { PROJECTS } from "@/data/projects";
import { SERVICES } from "@/data/services";

interface SearchResultItem {
  title: string;
  subtitle: string;
  category: "Division" | "Product" | "Project" | "Service" | "Page";
  href: string;
  badge?: string;
}

const STATIC_PAGES: SearchResultItem[] = [
  { title: "Agency Manifesto", subtitle: "Our core vision, principles & architecture", category: "Page", href: "/agency" },
  { title: "Selected Work", subtitle: "Portfolio of custom platforms & engineering", category: "Page", href: "/work" },
  { title: "Proprietary Products", subtitle: "Owned technological innovations & apps", category: "Page", href: "/products" },
  { title: "Founders & Philosophy", subtitle: "Leadership, story & ecosystem model", category: "Page", href: "/about" },
  { title: "Contact / Start a Project", subtitle: "Initiate collaboration or project brief", category: "Page", href: "/contact" },
  { title: "NextAura AI Division", subtitle: "Intelligent web apps & RAG systems", category: "Division", href: "/divisions/ai", badge: "AI" },
  { title: "NextAura Studios Division", subtitle: "Mobile apps & experimental software", category: "Division", href: "/divisions/studios", badge: "STUDIOS" },
  { title: "NextAura Fit Division", subtitle: "Biomechanics & fitness AI", category: "Division", href: "/divisions/fit", badge: "FIT" },
  { title: "NextAura OS Division", subtitle: "Cloud OS & workspace architecture", category: "Division", href: "/divisions/os", badge: "OS" },
];

export function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Toggle on keyboard shortcut (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Aggregate search index
  const allResults: SearchResultItem[] = [
    ...STATIC_PAGES,
    ...PRODUCTS.map((p) => ({
      title: p.name,
      subtitle: p.tagline,
      category: "Product" as const,
      href: `/products/${p.slug}`,
      badge: p.badge,
    })),
    ...PROJECTS.map((pj) => ({
      title: pj.title,
      subtitle: pj.subtitle,
      category: "Project" as const,
      href: `/work/${pj.slug}`,
      badge: pj.division,
    })),
    ...SERVICES.map((s) => ({
      title: s.category,
      subtitle: s.headline,
      category: "Service" as const,
      href: `/agency`,
      badge: s.division,
    })),
  ];

  const filteredResults = query.trim() === ""
    ? allResults.slice(0, 6)
    : allResults.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <>
      {/* Trigger Button in Navbar */}
      <button
        onClick={() => setIsOpen(true)}
        className="group relative flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-[#8D8D8D] transition-all hover:border-[#C9A45C]/50 hover:bg-white/10 hover:text-[#F4F0E7]"
        aria-label="Search Ecosystem"
      >
        <div className="relative h-4 w-4 shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={16}
            height={16}
            className="h-full w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
          />
        </div>
        <Search className="h-3.5 w-3.5 text-[#C9A45C]" />
        <span className="hidden sm:inline-block font-mono text-[11px]">Search...</span>
        <kbd className="hidden lg:inline-flex items-center gap-0.5 rounded border border-white/10 bg-black/40 px-1.5 font-mono text-[9px] text-[#8D8D8D]">
          ⌘K
        </kbd>
      </button>

      {/* Search Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#050505]/80 backdrop-blur-md"
            />

            {/* Dialog Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-[#0D0D0D] p-0 shadow-2xl shadow-[#C9A45C]/10 ring-1 ring-white/10 z-10"
            >
              {/* Search Bar Input Container featuring the Logo */}
              <div className="relative flex items-center border-b border-white/10 px-4 py-3.5 bg-[#080808]">
                {/* Brand Logo inside search input */}
                <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#C9A45C]/20 to-transparent p-1 border border-[#C9A45C]/30 mr-3">
                  <Image
                    src="/logo.png"
                    alt="NextAura Logo"
                    width={24}
                    height={24}
                    className="h-full w-full object-contain"
                  />
                </div>

                <Search className="h-4 w-4 text-[#C9A45C] mr-2 shrink-0" />

                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search NextAura products, divisions, work & services..."
                  className="w-full bg-transparent text-sm text-[#F4F0E7] placeholder-[#8D8D8D] outline-none"
                />

                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="p-1 text-[#8D8D8D] hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}

                <button
                  onClick={() => setIsOpen(false)}
                  className="ml-2 rounded-md border border-white/10 px-2 py-1 font-mono text-[10px] text-[#8D8D8D] hover:bg-white/5"
                >
                  ESC
                </button>
              </div>

              {/* Search Results List */}
              <div className="max-h-96 overflow-y-auto p-3 space-y-1">
                <div className="px-3 py-1.5 flex items-center justify-between text-[10px] font-mono tracking-widest text-[#8D8D8D] uppercase">
                  <span>{query ? "Search Results" : "Quick Links & Suggested"}</span>
                  <span>{filteredResults.length} Items</span>
                </div>

                {filteredResults.length === 0 ? (
                  <div className="py-12 text-center text-sm text-[#8D8D8D]">
                    No results found for &quot;{query}&quot;
                  </div>
                ) : (
                  filteredResults.map((item, index) => (
                    <Link
                      key={`${item.href}-${index}`}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between rounded-xl p-3 transition-colors hover:bg-white/5"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-[#C9A45C] group-hover:bg-[#C9A45C]/10 transition-colors">
                          {item.category === "Product" && <Sparkles className="h-4 w-4" />}
                          {item.category === "Project" && <FolderGit2 className="h-4 w-4" />}
                          {item.category === "Division" && <Cpu className="h-4 w-4" />}
                          {(item.category === "Service" || item.category === "Page") && (
                            <Layers className="h-4 w-4" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-[#F4F0E7] group-hover:text-[#E5C77A]">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="rounded bg-[#C9A45C]/15 px-1.5 py-0.5 font-mono text-[9px] text-[#E5C77A]">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#8D8D8D] line-clamp-1">{item.subtitle}</p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-[#8D8D8D] opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-[#C9A45C]" />
                    </Link>
                  ))
                )}
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between border-t border-white/10 bg-[#080808] px-4 py-2.5 text-[11px] text-[#8D8D8D]">
                <div className="flex items-center space-x-2">
                  <div className="relative h-3.5 w-3.5">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={14}
                      height={14}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span>NextAura Ecosystem Search</span>
                </div>
                <span className="font-mono text-[10px]">Use ↑ ↓ to navigate</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
