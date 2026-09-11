"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Experience() {
  return (
    <section className="py-32 bg-obsidian-deep px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Facade / Exterior */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h3 className="text-obsidian-silver text-xs tracking-[0.4em] uppercase mb-4">A Primeira Impressão</h3>
            <h2 className="text-obsidian-white text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-8">
              Arquitetura de <br />
              <span className="text-transparent stroke-text">Performance</span>
            </h2>
            <p className="text-obsidian-silver text-lg font-light leading-relaxed mb-6">
              Um espaço projetado para inspirar. Nossa fachada reflete a modernidade, a força e a exclusividade que você encontrará em cada detalhe da Concept Fitness.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 relative aspect-[4/3] group overflow-hidden border border-obsidian-carbon"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Image
                src="/images/exterior.png"
                alt="Fachada Concept Fitness"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep/60 to-transparent opacity-40" />
          </motion.div>
        </div>

        {/* Reception */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/3] group overflow-hidden border border-obsidian-carbon"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="w-full h-full"
            >
              <Image
                src="/images/recepcao.png"
                alt="Recepção Concept Fitness"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep/60 to-transparent opacity-40" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-obsidian-silver text-xs tracking-[0.4em] uppercase mb-4">O Acolhimento</h3>
            <h2 className="text-obsidian-white text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-8">
              Sua Experiência <br />
              <span className="text-transparent stroke-text">Começa Aqui</span>
            </h2>
            <p className="text-obsidian-silver text-lg font-light leading-relaxed mb-6">
              A recepção da Concept Fitness não é apenas um ponto de entrada, mas o início da sua jornada de evolução. Um ambiente sofisticado, acolhedor e preparado para oferecer o suporte que você merece.
            </p>
          </motion.div>
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
