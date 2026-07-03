import React from "react";
import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import LightboxGallery from "@/components/ui/LightboxGallery";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import { siteUrl } from "@/data/seo";

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Veja fotos de cortes de cabelo, barba e transformações reais realizadas pelo barbeiro visagista Emerson Chemimm.",
  alternates: {
    canonical: `${siteUrl}/portfolio`,
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <div className="bg-[#05070a] pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContainer delay={0.1}>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="mb-4 inline-block rounded-full bg-[#071b33] border border-[#0a84ff]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0a84ff]">
                Portfólio
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-[#f4f7fb] mb-6">
                Galeria de Trabalhos Recentes
              </h1>
              <p className="text-base sm:text-lg text-[#a7b0be] leading-relaxed">
                Resultados reais de cabelo, barba e alinhamentos faciais executados com rigor técnico.
              </p>
            </div>
          </AnimatedContainer>
          
          <AnimatedContainer delay={0.2}>
            <LightboxGallery />
          </AnimatedContainer>
        </div>
      </div>
      <CTASection />
      <Footer />
    </>
  );
}
