"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Cpu, Activity, Smartphone, Sparkles, Terminal } from "lucide-react";

interface MediaFrameProps {
  src?: string;
  alt: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "9/16" | "21/9";
  className?: string;
  type?: "ai" | "studios" | "fit" | "os" | "generic";
  badge?: string;
}

export function MediaFrame({
  src,
  alt,
  aspectRatio = "16/9",
  className,
  type = "generic",
  badge,
}: MediaFrameProps) {
  const [imageError, setImageError] = useState(!src);

  const aspectStyles = {
    "16/9": "aspect-video",
    "4/3": "aspect-4/3",
    "1/1": "aspect-square",
    "9/16": "aspect-9/16",
    "21/9": "aspect-21/9",
  };

  const getIcon = () => {
    switch (type) {
      case "ai":
        return <Cpu className="h-10 w-10 text-[#C9A45C]" />;
      case "fit":
        return <Activity className="h-10 w-10 text-[#E5C77A]" />;
      case "studios":
        return <Smartphone className="h-10 w-10 text-[#B99A5D]" />;
      case "os":
        return <Terminal className="h-10 w-10 text-[#C9A45C]" />;
      default:
        return <Sparkles className="h-10 w-10 text-[#C9A45C]" />;
    }
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-[#0D0D0D] shadow-2xl group",
        aspectStyles[aspectRatio],
        className
      )}
    >
      {!imageError && src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          onError={() => setImageError(true)}
          className="object-contain p-10 transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        /* Procedural Luxury Architectural Visual Fallback */
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#0D0D0D] via-[#080808] to-[#050505] p-6 flex flex-col justify-between">
          {/* Subtle Grid Pattern */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `linear-gradient(rgba(201,164,92,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(201,164,92,0.2) 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />

          {/* Radial Ambient Glow */}
          <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-[#C9A45C]/10 blur-3xl" />

          {/* Top Badge */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[9px] font-mono tracking-[0.25em] text-[#C9A45C] uppercase bg-black/40 px-3 py-1 rounded-full border border-[#C9A45C]/20 backdrop-blur-md">
              {badge || type.toUpperCase() + " SYSTEM"}
            </span>
            <div className="flex space-x-1.5">
              <span className="h-2 w-2 rounded-full bg-[#C9A45C]/40" />
              <span className="h-2 w-2 rounded-full bg-[#C9A45C]/70 animate-pulse" />
            </div>
          </div>

          {/* Center Graphic */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto">
            <div className="mb-4 rounded-2xl border border-[#C9A45C]/30 bg-black/60 p-4 shadow-xl backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
              {getIcon()}
            </div>
            <h4 className="text-sm font-medium tracking-wider text-[#F4F0E7] max-w-xs">
              {alt}
            </h4>
            <p className="mt-1 text-[10px] text-[#8D8D8D] font-mono tracking-widest uppercase">
              NEXTAURA VISUAL ENGINE
            </p>
          </div>

        </div>
      )}

      {/* Gold Border Highlight on Hover */}
      <div className="absolute inset-0 rounded-2xl border border-transparent transition-colors duration-500 group-hover:border-[#C9A45C]/40 pointer-events-none" />
    </div>
  );
}
