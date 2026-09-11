"use client";

import { motion } from "framer-motion";

export default function Conversion() {
  return (
    <section className="py-32 bg-obsidian-white text-obsidian-deep flex items-center justify-center px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-10">
            Ready for <br />
            Evolution?
          </h2>
          <p className="text-obsidian-carbon text-lg md:text-xl uppercase tracking-widest mb-12 font-medium">
            Join the most exclusive fitness experience in Nerópolis.
          </p>
          <a
            href="https://wa.me/5562982396113"
            className="px-12 py-6 bg-obsidian-deep text-obsidian-white font-black uppercase tracking-widest hover:bg-obsidian-carbon transition-all duration-300 inline-block transform hover:scale-105"
          >
            Book Your Visit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
