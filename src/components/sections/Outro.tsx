"use client";

import { motion } from "framer-motion";

export default function Outro() {
  return (
    <section className="relative h-screen bg-obsidian-deep flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1, opacity: 0 }}
        whileInView={{ scale: 0.8, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center z-10"
      >
        <h2 className="text-obsidian-white text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-10">
          Mantenha a <br />
          <span className="text-transparent stroke-text">Fome</span>
        </h2>
        <a
          href="https://wa.me/5562982396113"
          className="px-10 py-5 bg-obsidian-white text-obsidian-deep font-bold uppercase tracking-widest hover:bg-obsidian-silver transition-all duration-300"
        >
          Comece Agora
        </a>
      </motion.div>

      {/* Background Visual */}
      <div className="absolute inset-0 opacity-20 grayscale">
        <img src="/outro-bg.jpg" alt="background" className="w-full h-full object-cover" />
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px white;
        }
      `}</style>
    </section>
  );
}
