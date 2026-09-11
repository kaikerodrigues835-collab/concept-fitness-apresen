"use client";

import { motion } from "framer-motion";

export default function ConceptBox() {
  return (
    <section className="relative py-32 bg-white text-obsidian-deep overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-obsidian-carbon/5 -skew-x-12 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-obsidian-deep text-xs tracking-[0.4em] uppercase mb-4 font-bold">The Peak Experience</h3>
            <h2 className="text-obsidian-deep text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
              CONCEPT<br />BOX
            </h2>
            <p className="text-obsidian-carbon text-lg md:text-xl font-light leading-relaxed mb-10">
              Onde a intensidade encontra a técnica. O ConceptBox é o nosso ecossistema de treinamento de elite, projetado para quem não aceita a mediocridade.
              <br /><br />
              Movimento constante, energia máxima e resultados exponenciais.
            </p>
            <a
              href="https://wa.me/5562982396113"
              className="px-8 py-4 bg-obsidian-deep text-obsidian-white font-bold uppercase tracking-widest hover:bg-obsidian-carbon transition-colors duration-300 inline-block"
            >
              Join the Box
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square group"
          >
            <div className="absolute inset-0 bg-obsidian-deep rotate-3 group-hover:rotate-0 transition-transform duration-500" />
            <img
              src="/concept-box.jpg"
              alt="Concept Box"
              className="relative z-10 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-6 -left-6 bg-obsidian-deep text-obsidian-white p-6 z-20">
              <p className="text-xs tracking-widest uppercase font-bold">High Intensity</p>
              <p className="text-2xl font-black">MAX PERFORMANCE</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
