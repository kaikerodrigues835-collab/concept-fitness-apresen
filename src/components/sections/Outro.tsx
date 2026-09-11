"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Outro() {
  return (
    <section className="relative h-screen bg-obsidian-deep flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1, opacity: 0 }}
        whileInView={{ scale: 0.8, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center z-10 flex flex-col items-center"
      >
        <div className="flex items-center gap-4 mb-8">
          <Image src="/images/logo.jpg" alt="Logo" width={60} height={60} className="object-contain brightness-200" />
          <span className="text-obsidian-white text-2xl font-bold uppercase tracking-tighter">
            Concept <span className="text-[#C0FF00]">Fitness</span>
          </span>
        </div>
        <h2 className="text-obsidian-white text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-10">
          Supere Seus <br />
          <span className="text-transparent stroke-text">Limites</span>
        </h2>
        <a
          href="https://wa.me/5562982396113"
          className="px-10 py-5 bg-obsidian-white text-obsidian-deep font-bold uppercase tracking-widest hover:bg-obsidian-silver transition-all duration-300 rounded-full"
        >
          Comece Agora
        </a>
      </motion.div>

      {/* Background Visual */}
      <div className="absolute inset-0 opacity-20">
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
