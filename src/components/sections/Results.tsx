"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Results() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, x)));
  };

  return (
    <section className="py-32 bg-obsidian-carbon px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h3 className="text-obsidian-silver text-xs tracking-[0.4em] uppercase mb-4">04 / Evolução</h3>
          <h2 className="text-obsidian-white text-5xl md:text-7xl font-bold uppercase tracking-tighter">
            Resultados <br />
            <span className="text-transparent stroke-text">Reais</span>
          </h2>
        </div>

        <div className="relative w-full max-w-4xl mx-auto aspect-video overflow-hidden cursor-ew-resize"
             onMouseMove={handleMove}>

          {/* After Image */}
          <div className="absolute inset-0">
            <img
              src="/images/result-transformation.jpg"
              alt="After"
              className="w-[200%] h-full object-cover object-right"
            />
          </div>

          {/* Before Image (Clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img
              src="/images/result-transformation.jpg"
              alt="Before"
              className="w-[200%] h-full object-cover object-left"
            />
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-obsidian-white z-10"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-obsidian-white text-obsidian-deep rounded-full flex items-center justify-center font-bold text-xs">
              ↔
            </div>
          </div>
        </div>

        <p className="text-center text-obsidian-silver mt-10 text-sm uppercase tracking-widest italic">
          Deslize para testemunhar a transformação
        </p>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px white;
        }
      `}</style>
    </section>
  );
}
