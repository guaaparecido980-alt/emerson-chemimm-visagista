import React from "react";
import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import AnimatedContainer from "@/components/ui/AnimatedContainer";

export const metadata: Metadata = {
  title: "Depoimentos de Clientes",
  description: "Leia o feedback de clientes sobre o atendimento, consultoria de visagismo e serviços de barba e cabelo com Emerson Chemimm.",
  alternates: {
    canonical: "/depoimentos",
  },
};

export default function DepoimentosPage() {
  return (
    <>
      <Header />
      <div className="bg-[#05070a] pt-32 pb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContainer delay={0.1}>
            <div className="text-center max-w-3xl mx-auto mb-4">
              <span className="mb-4 inline-block rounded-full bg-[#071b33] border border-[#0a84ff]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0a84ff]">
                Experiências Reais
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-[#f4f7fb] mb-6">
                O que dizem os clientes de Emerson Chemimm
              </h1>
              <p className="text-base sm:text-lg text-[#a7b0be] leading-relaxed">
                Relatos de quem já passou por uma consultoria de visagismo e viveu a transformação de imagem na prática.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </div>
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}
