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
          <h3 className="text-obsidian-silver text-xs tracking-[0.4em] uppercase mb-4">06 / Find Us</h3>
          <h2 className="text-obsidian-white text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8">
            The <br />
            <span className="text-transparent stroke-text">Location</span>
          </h2>
          <div className="space-y-6 text-obsidian-silver font-light">
            <p className="text-2xl">Rua Saturnino José Araújo, nº 250<br />Botafogo, Nerópolis — GO</p>
            <a
              href="https://maps.app.goo.gl/DfmyN67nhYSzbTUz8"
              target="_blank"
              className="inline-block px-6 py-3 border border-obsidian-silver text-obsidian-white uppercase text-xs tracking-widest hover:bg-obsidian-white hover:text-obsidian-deep transition-all duration-300"
            >
              Get Directions
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-square grayscale"
        >
          {/* Static map fallback/placeholder - In a real app, this would be a styled Google Map */}
          <div className="absolute inset-0 bg-obsidian-carbon flex items-center justify-center border border-obsidian-silver">
            <span className="text-obsidian-silver uppercase tracking-widest font-mono text-xs">Map Integrated via Google Maps API</span>
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-obsidian-deep border border-obsidian-silver p-4 z-10">
            <p className="text-obsidian-white text-[10px] uppercase tracking-tighter font-bold">Nerópolis, GO</p>
            <p className="text-obsidian-silver text-[8px] uppercase">Botanical Sector</p>
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
