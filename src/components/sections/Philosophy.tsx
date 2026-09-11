"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Philosophy() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Text color shifts from Graphite (#1A1A1A) to White (#FFFFFF)
  const textColor = useTransform(
    scrollYProgress,
    [0.3, 0.5],
    ["#1A1A1A", "#FFFFFF"]
  );

  return (
    <section
      ref={targetRef}
      className="h-[150vh] bg-obsidian-deep flex items-center justify-center px-4 relative"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          style={{ color: textColor }}
          className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none"
        >
          Nós não construímos corpos. <br />
          <span className="block mt-4">Nós forjamos legados.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-obsidian-silver text-sm md:text-lg tracking-widest uppercase mt-12 font-light"
        >
          Performance não é meta. É padrão.
        </motion.p>
      </div>
    </section>
  );
}
