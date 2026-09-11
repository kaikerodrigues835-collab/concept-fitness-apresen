"use client";

import { useState } from "react";
import Entrance from "@/components/sections/Entrance";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Experience from "@/components/sections/Experience";
import Editorial from "@/components/sections/Editorial";
import Modalities from "@/components/sections/Modalities";
import ConceptBox from "@/components/sections/ConceptBox";
import Community from "@/components/sections/Community";
import Results from "@/components/sections/Results";
import Differentials from "@/components/sections/Differentials";
import Conversion from "@/components/sections/Conversion";
import Location from "@/components/sections/Location";
import Outro from "@/components/sections/Outro";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function Home() {
  const [isEntranceComplete, setIsEntranceComplete] = useState(false);

  return (
    <main className="relative w-full">
      {!isEntranceComplete && (
        <Entrance onComplete={() => setIsEntranceComplete(true)} />
      )}

      {isEntranceComplete && (
        <>
          <Header />
          <section id="hero"><Hero /></section>
          <section id="espaco">
            <Philosophy />
            <Experience />
            <Editorial />
          </section>
          <section id="modalidades"><Modalities /></section>
          <section id="concept-box"><ConceptBox /></section>
          <section id="equipe"><Community /></section>
          <section id="resultados"><Results /></section>
          <section id="diferenciais"><Differentials /></section>
          <section id="conversao"><Conversion /></section>
          <section id="localizacao"><Location /></section>
          <section id="outro"><Outro /></section>
          <Footer />
        </>
      )}
    </main>
  );
}
