"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover scale-105"
          poster="/hero-poster.jpg" // Should be a low-res frame of the video
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Sophisticated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deep/60 via-obsidian-deep/20 to-obsidian-deep" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="text-obsidian-white text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none mb-6">
            Concept <br />
            <span className="text-[#C0FF00]">Fitness</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-obsidian-silver text-lg md:text-xl tracking-widest uppercase mb-10 max-w-2xl mx-auto font-light"
          >
            Além do Treino. Uma Experiência de Estilo de Vida de Alta Performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a
              href="https://wa.me/5562982396113?text=Olá!%20Vim%20pelo%20site%20da%20Concept%20Fitness%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental."
              className="px-8 py-4 bg-obsidian-white text-obsidian-deep font-bold uppercase tracking-widest hover:bg-obsidian-silver transition-colors duration-300 inline-block rounded-full"
            >
              Comece Sua Evolução
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-obsidian-silver text-[10px] uppercase tracking-widest">Role para Explorar</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-obsidian-white to-transparent" />
      </motion.div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px white;
        }
      `}</style>
    </section>
  );
}
