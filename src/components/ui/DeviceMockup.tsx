"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DeviceMockupProps {
  type?: "mobile" | "browser";
  children: ReactNode;
  title?: string;
  className?: string;
}

export function DeviceMockup({
  type = "mobile",
  children,
  title = "NEXTAURA INTERFACE",
  className,
}: DeviceMockupProps) {
  if (type === "mobile") {
    return (
      <div
        className={cn(
          "relative mx-auto w-full max-w-[320px] rounded-[42px] border-[6px] border-[#1D1D1D] bg-[#050505] p-3 shadow-2xl shadow-[#C9A45C]/10 ring-1 ring-white/10",
          className
        )}
      >
        {/* Dynamic Island / Speaker Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 h-4 w-24 rounded-full bg-[#121212] flex items-center justify-center space-x-2">
          <div className="h-1.5 w-1.5 rounded-full bg-[#C9A45C]/60" />
          <div className="h-1 w-8 rounded-full bg-white/10" />
        </div>

        {/* Inner Screen */}
        <div className="relative min-h-[580px] w-full overflow-hidden rounded-[32px] bg-[#0A0A0A] pt-8">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] shadow-2xl",
        className
      )}
    >
      {/* Browser Bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#121212] px-4 py-3 text-xs text-[#8D8D8D]">
        <div className="flex items-center space-x-2">
          <span className="h-3 w-3 rounded-full bg-[#FF5F56]/80" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E]/80" />
          <span className="h-3 w-3 rounded-full bg-[#27C93F]/80" />
        </div>
        <div className="rounded-md border border-white/5 bg-black/40 px-6 py-1 font-mono text-[10px] text-[#C9A45C]">
          {title}
        </div>
        <div className="h-2 w-2 rounded-full bg-[#C9A45C]" />
      </div>

      {/* Screen Body */}
      <div className="p-4 sm:p-6">{children}</div>
    </div>
  );
}
