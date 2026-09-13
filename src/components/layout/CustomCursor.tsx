"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest("[data-cursor]")?.getAttribute("data-cursor");

      if (cursorAttr) {
        setCursorText(cursorAttr);
        setCursorVariant("hover");
      } else if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role='button']")
      ) {
        setCursorText("");
        setCursorVariant("pointer");
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      height: 12,
      width: 12,
      backgroundColor: "#C9A45C",
      mixBlendMode: "difference" as const,
      transition: { type: "spring" as const, stiffness: 500, damping: 28, mass: 0.1 },
    },
    pointer: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(201, 164, 92, 0.2)",
      borderColor: "#E5C77A",
      borderWidth: "1px",
      transition: { type: "spring" as const, stiffness: 400, damping: 25 },
    },
    hover: {
      x: mousePosition.x - 36,
      y: mousePosition.y - 36,
      height: 72,
      width: 72,
      backgroundColor: "#C9A45C",
      color: "#050505",
      transition: { type: "spring" as const, stiffness: 350, damping: 22 },
    },
  };

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-50 hidden rounded-full lg:flex items-center justify-center text-[10px] font-semibold tracking-widest text-black uppercase shadow-lg backdrop-blur-xs"
      variants={variants}
      animate={cursorVariant}
    >
      {cursorText && <span className="px-1 text-center font-mono">{cursorText}</span>}
    </motion.div>
  );
}
