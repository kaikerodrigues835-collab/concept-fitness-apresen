"use client";

import { motion } from "framer-motion";

const DIFFS = [
  { title: "Infrastructure", desc: "State-of-the-art equipment and climate control." },
  { title: "Methodology", desc: "Science-based training for maximum performance." },
  { title: "Environment", desc: "A space designed for focus and strength." },
  { title: "Exclusivity", desc: "A community of those who demand more." },
];

export default function Differentials() {
  return (
    <section className="py-32 bg-obsidian-deep px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h3 className="text-obsidian-silver text-xs tracking-[0.4em] uppercase mb-4">05 / The Edge</h3>
          <h2 className="text-obsidian-white text-5xl md:text-7xl font-bold uppercase tracking-tighter">
            Why <br />
            <span className="text-transparent stroke-text">Concept?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-obsidian-carbon border border-obsidian-carbon">
          {DIFFS.map((diff, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="p-12 bg-obsidian-deep hover:bg-obsidian-carbon transition-colors duration-500 group"
            >
              <span className="text-obsidian-silver font-mono text-xs mb-4 block">0{idx+1}</span>
              <h4 className="text-obsidian-white text-3xl font-bold uppercase tracking-tighter mb-4 group-hover:translate-x-2 transition-transform duration-300">
                {diff.title}
              </h4>
              <p className="text-obsidian-silver font-light leading-relaxed">
                {diff.desc}
              </p>
            </motion.div>
          ))}
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
