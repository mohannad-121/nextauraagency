"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  icon = true,
  type = "button",
  disabled = false,
  target,
  rel,
}: ButtonProps) {
  const sizeStyles = {
    sm: "px-4 py-2 text-xs tracking-wider",
    md: "px-6 py-3 text-xs tracking-[0.15em]",
    lg: "px-8 py-4 text-sm tracking-[0.2em]",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#8A6A32] via-[#E0C176] to-[#A98342] text-black font-semibold shadow-lg shadow-[#C9A45C]/15 hover:shadow-[#C9A45C]/30 hover:scale-[1.02]",
    secondary:
      "border border-white/10 bg-white/5 text-[#F4F0E7] backdrop-blur-md hover:border-[#C9A45C]/40 hover:bg-white/10 hover:text-[#E5C77A]",
    outline:
      "border border-[#C9A45C]/40 bg-transparent text-[#E5C77A] hover:border-[#E5C77A] hover:bg-[#C9A45C]/10",
    text: "p-0 text-[#C9A45C] hover:text-[#E5C77A] font-normal underline-offset-4 hover:underline",
  };

  const baseStyles =
    "group inline-flex items-center justify-center space-x-2 rounded-full uppercase transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none";

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http://") || href.startsWith("https://") || target === "_blank";
    return (
      <Link
        href={href}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
    >
      {content}
    </button>
  );
}
