"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Entrance({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1); // Trigger completion after animation
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] bg-obsidian-deep flex items-center justify-center overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-[1px] bg-obsidian-white mb-6"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-obsidian-white text-4xl md:text-6xl font-bold tracking-tighter uppercase"
        >
          Concept Fitness
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-obsidian-silver text-xs tracking-[0.3em] uppercase mt-4"
        >
          Nerópolis — GO
        </motion.p>
      </div>
    </motion.div>
  );
}
