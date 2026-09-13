"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-[#F4F0E7]"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 p-2 border border-[#C9A45C]/30 shadow-xl shadow-[#C9A45C]/10"
          >
            <Image
              src="/logo.png"
              alt="NextAura Logo"
              width={56}
              height={56}
              className="h-full w-full object-contain"
              priority
            />
          </motion.div>

          <div className="relative overflow-hidden px-4 py-1">
            <motion.span
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-2xl font-light tracking-[0.3em] uppercase text-[#F4F0E7]"
            >
              NEXT<span className="text-[#C9A45C] font-normal">AURA</span>
            </motion.span>
          </div>

          <div className="relative mt-4 h-[1px] w-48 overflow-hidden bg-white/10">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-r from-transparent via-[#E5C77A] to-transparent"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-4 text-[10px] tracking-[0.25em] text-[#8D8D8D] uppercase font-mono"
          >
            Building What Comes Next
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
