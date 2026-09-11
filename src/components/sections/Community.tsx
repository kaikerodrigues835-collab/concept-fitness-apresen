"use client";

import { motion } from "framer-motion";

const PEOPLE = [
  { name: "Marcos Silva", role: "Elite Athlete", img: "/person-1.jpg" },
  { name: "Ana Costa", role: "Performance Coach", img: "/person-2.jpg" },
  { name: "Juliana Lima", role: "Dedicated Member", img: "/person-3.jpg" },
  { name: "Roberto Dias", role: "Strength Specialist", img: "/person-4.jpg" },
];

export default function Community() {
  return (
    <section className="py-32 bg-obsidian-deep px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h3 className="text-obsidian-silver text-xs tracking-[0.4em] uppercase mb-4">03 / The Tribe</h3>
          <h2 className="text-obsidian-white text-5xl md:text-7xl font-bold uppercase tracking-tighter">
            Authentic <br />
            <span className="text-transparent stroke-text">Connection</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PEOPLE.map((person, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative aspect-[3/4] overflow-hidden group"
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="text-obsidian-white font-bold uppercase tracking-tighter">{person.name}</p>
                <p className="text-obsidian-silver text-xs uppercase tracking-widest">{person.role}</p>
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
