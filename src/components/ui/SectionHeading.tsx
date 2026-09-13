"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  serifTitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  serifTitle,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn("flex flex-col max-w-3xl", alignStyles[align], className)}
    >
      {eyebrow && (
        <div className="mb-4 flex items-center space-x-2">
          <span className="h-[1px] w-6 bg-[#C9A45C]" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#C9A45C] uppercase">
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className="text-3xl font-light tracking-tight text-[#F4F0E7] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
        {title}{" "}
        {serifTitle && (
          <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#F4F0E7] via-[#E5C77A] to-[#C9A45C]">
            {serifTitle}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-6 text-sm sm:text-base leading-relaxed text-[#8D8D8D]">
          {description}
        </p>
      )}
    </motion.div>
  );
}
