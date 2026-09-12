"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function LogoScroll() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.8]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="fixed top-6 left-6 z-50 pointer-events-none"
    >
      <div className="w-24 h-24 relative rounded-full overflow-hidden">
        <Image
          src="/images/logo.jpg"
          alt="Concept Fitness Logo"
          fill
          className="object-contain"
        />
      </div>
    </motion.div>
  );
}
