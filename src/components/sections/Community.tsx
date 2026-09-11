"use client";

import { motion } from "framer-motion";

const SPACES = [
  { name: "Recepção", role: "Acolhimento", img: "/images/recepcao.png" },
  { name: "Parte Externa", role: "Arquitetura", img: "/images/exterior.png" },
  { name: "Área Interna", role: "Performance", img: "/images/interna.png" },
  { name: "Vista Interna", role: "Experiência", img: "/images/vista-interna.png" },
];

export default function Community() {
  return (
    <section className="py-32 bg-obsidian-deep px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h3 className="text-obsidian-silver text-xs tracking-[0.4em] uppercase mb-4">03 / A Estrutura</h3>
          <h2 className="text-obsidian-white text-5xl md:text-7xl font-bold uppercase tracking-tighter">
            Conexão <br />
            <span className="text-transparent stroke-text">Autêntica</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SPACES.map((space, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                className="w-full h-full"
              >
                <img
                  src={space.img}
                  alt={space.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="text-obsidian-white font-bold uppercase tracking-tighter">{space.name}</p>
                <p className="text-obsidian-silver text-xs uppercase tracking-widest">{space.role}</p>
              </div>
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
