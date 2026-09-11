"use client";

import { motion } from "framer-motion";

export default function Location() {
  return (
    <section className="py-32 bg-obsidian-deep px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-obsidian-silver text-xs tracking-[0.4em] uppercase mb-4">06 / Localização</h3>
          <h2 className="text-obsidian-white text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8">
            O <br />
            <span className="text-transparent stroke-text">Endereço</span>
          </h2>
          <div className="space-y-6 text-obsidian-silver font-light">
            <p className="text-2xl">Rua Saturnino José Araújo, nº 250<br />Botafogo, Nerópolis — GO</p>
        <div className="flex flex-wrap gap-4">
              <a
                href="https://maps.app.goo.gl/aDxsevwjgn4xu71y7"
                target="_blank"
                className="flex items-center gap-3 px-6 py-4 border border-obsidian-silver text-obsidian-white uppercase text-xs tracking-widest hover:bg-obsidian-white hover:text-obsidian-deep transition-all duration-300 group"
              >
                <span className="opacity-60 group-hover:opacity-100 transition-opacity">Google Maps</span>
                <span className="text-lg">→</span>
              </a>
              <a
                href="https://waze.com/ul?q=Rua%20Saturnino%20José%20Araújo%20250%20Botafogo%20Nerópolis%20GO"
                target="_blank"
                className="flex items-center gap-3 px-6 py-4 border border-obsidian-silver text-obsidian-white uppercase text-xs tracking-widest hover:bg-obsidian-white hover:text-obsidian-deep transition-all duration-300 group"
              >
                <span className="opacity-60 group-hover:opacity-100 transition-opacity">Waze</span>
                <span className="text-lg">→</span>
              </a>
              <a
                href="http://maps.apple.com/?q=Rua%20Saturnino%20José%20Araújo%20250%20Botafogo%20Nerópolis%20GO"
                target="_blank"
                className="flex items-center gap-3 px-6 py-4 border border-obsidian-silver text-obsidian-white uppercase text-xs tracking-widest hover:bg-obsidian-white hover:text-obsidian-deep transition-all duration-300 group"
              >
                <span className="opacity-60 group-hover:opacity-100 transition-opacity">Apple Maps</span>
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-square grayscale"
        >
          {/* Sophisticated Map Placeholder */}
          <div className="absolute inset-0 bg-obsidian-carbon flex items-center justify-center border border-obsidian-silver overflow-hidden group">
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 bg-[url('/images/map-pattern.webp')] bg-cover" />
            <span className="relative z-10 text-obsidian-silver uppercase tracking-widest font-mono text-xs text-center px-10">
              Localização Precisamente <br />
              <span className="opacity-50">Mapeada via Google Maps</span>
            </span>
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-obsidian-deep border border-obsidian-silver p-4 z-10 shadow-2xl">
            <p className="text-obsidian-white text-[10px] uppercase tracking-tighter font-bold">Nerópolis, GO</p>
            <p className="text-obsidian-silver text-[8px] uppercase">Setor Botânico</p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px white;
        }
      `}</style>
    </section>
  );
}
