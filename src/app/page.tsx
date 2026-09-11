"use client";

import { useState } from "react";
import Entrance from "@/components/sections/Entrance";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
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

export default function Home() {
  const [isEntranceComplete, setIsEntranceComplete] = useState(false);

  return (
    <main className="relative w-full">
      {!isEntranceComplete && (
        <Entrance onComplete={() => setIsEntranceComplete(true)} />
      )}

      {isEntranceComplete && (
        <>
          <Hero />
          <Philosophy />
          <Editorial />
          <Modalities />
          <ConceptBox />
          <Community />
          <Results />
          <Differentials />
          <Conversion />
          <Location />
          <Outro />
          <Footer />
        </>
      )}
    </main>
  );
}
