"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const IMAGES = [
  { src: "/images/editorial-1.png", title: "A Arena", desc: "Onde a força encontra a disciplina." },
  { src: "/images/editorial-2.jpg", title: "Precisão", desc: "Equipamentos projetados para a performance máxima." },
  { src: "/images/editorial-3.png", title: "Comunidade", desc: "Uma irmandade em constante evolução." },
  { src: "/images/editorial-4.png", title: "Atmosfera", desc: "A energia que impulsiona resultados." },
];

export default function Editorial() {
  return (
    <section className="py-32 bg-obsidian-deep px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h3 className="text-obsidian-silver text-xs tracking-[0.4em] uppercase mb-4">01 / O Espaço</h3>
          <h2 className="text-obsidian-white text-5xl md:text-7xl font-bold uppercase tracking-tighter">
            Projetado para <br />
            <span className="text-transparent stroke-text">Performance</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Large Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 relative group overflow-hidden aspect-video"
          >
            <Image
              src={IMAGES[0].src}
              alt={IMAGES[0].title}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <p className="text-xs tracking-widest uppercase mb-2 opacity-60">{IMAGES[0].title}</p>
              <p className="text-xl font-light">{IMAGES[0].desc}</p>
            </div>
          </motion.div>

          {/* Side Small Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-4 relative group overflow-hidden aspect-square"
          >
            <Image
              src={IMAGES[1].src}
              alt={IMAGES[1].title}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-obsidian-deep/40 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-xs tracking-widest uppercase opacity-60">{IMAGES[1].title}</p>
            </div>
          </motion.div>

          {/* Bottom Image Row */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-4 relative group overflow-hidden aspect-square"
          >
            <Image
              src={IMAGES[2].src}
              alt={IMAGES[2].title}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-xs tracking-widest uppercase opacity-60">{IMAGES[2].title}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="md:col-span-8 relative group overflow-hidden aspect-video"
          >
            <Image
              src={IMAGES[3].src}
              alt={IMAGES[3].title}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <p className="text-xs tracking-widest uppercase mb-2 opacity-60">{IMAGES[3].title}</p>
              <p className="text-xl font-light">{IMAGES[3].desc}</p>
            </div>
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
