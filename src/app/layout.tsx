import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/shared/SmoothScroll";

export const metadata: Metadata = {
  title: "Concept Fitness | Academia em Nerópolis - GO",
  description: "Experiência Digital de Alto Padrão. Força, Performance e Sofisticação.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col relative">
        <div className="grain-overlay" />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
