"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GoldTextProps {
  children: ReactNode;
  className?: string;
  serif?: boolean;
}

export function GoldText({ children, className, serif = false }: GoldTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-[#F4F0E7] via-[#E5C77A] to-[#C9A45C] bg-clip-text text-transparent font-medium",
        serif && "font-serif italic tracking-normal",
        className
      )}
    >
      {children}
    </span>
  );
}
