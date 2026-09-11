"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const MODALITIES = [
  { id: "01", name: "MUSCULAÇÃO", desc: "Treinamento de força com precisão e técnica.", img: "/mod-1.jpg" },
  { id: "02", name: "FUNCIONAL", desc: "Movimento, agilidade e performance real.", img: "/mod-2.jpg" },
  { id: "03", name: "CONCEPTBOX", desc: "A experiência máxima de intensidade.", img: "/mod-3.jpg" },
  { id: "04", name: "AERÓBICA", desc: "Resistência e saúde em alto nível.", img: "/mod-4.jpg" },
];

export default function Modalities() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-32 bg-obsidian-deep px-4 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h3 className="text-obsidian-silver text-xs tracking-[0.4em] uppercase mb-4">02 / The Method</h3>
          <h2 className="text-obsidian-white text-5xl md:text-7xl font-bold uppercase tracking-tighter">
            Our <br />
            <span className="text-transparent stroke-text">Modalities</span>
          </h2>
        </div>

        <div className="relative flex flex-col gap-4">
          {MODALITIES.map((mod) => (
            <motion.div
              key={mod.id}
              onMouseEnter={() => setHovered(mod.id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative flex items-center justify-between py-8 border-b border-obsidian-carbon cursor-pointer transition-colors duration-300 hover:pl-4"
            >
              <div className="flex items-baseline gap-6">
                <span className="text-obsidian-silver font-mono text-sm">{mod.id}</span>
                <h4 className="text-obsidian-white text-3xl md:text-6xl font-black uppercase tracking-tighter group-hover:text-white transition-colors">
                  {mod.name}
                </h4>
              </div>

              <div className="hidden md:block text-obsidian-silver text-right max-w-xs">
                <p className="text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {mod.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hover Preview Image */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-0 transition-opacity duration-500 w-full h-full flex items-center justify-center">
          {hovered && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              className="w-1/2 h-1/2 relative overflow-hidden grayscale"
            >
              <img
                src={MODALITIES.find(m => m.id === hovered)?.img}
                alt="preview"
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px white;
        }
      `}</style>
    </section>
  );
}
