import React from "react";
import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import VisagismoSection from "@/components/sections/VisagismoSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import AnimatedContainer from "@/components/ui/AnimatedContainer";

export const metadata: Metadata = {
  title: "Visagismo Masculino",
  description: "Entenda o conceito de visagismo masculino e como ele ajuda na escolha do corte de cabelo e barba ideal para o seu rosto.",
  alternates: {
    canonical: "/visagismo",
  },
};

export default function VisagismoPage() {
  return (
    <>
      <Header />
      <div className="bg-[#05070a] pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContainer delay={0.1}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="mb-4 inline-block rounded-full bg-[#071b33] border border-[#0a84ff]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0a84ff]">
                Consultoria de Imagem
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-[#f4f7fb] mb-6">
                O Poder do Visagismo Masculino
              </h1>
              <p className="text-base sm:text-lg text-[#a7b0be] leading-relaxed">
                Mais do que apenas aparar fios, o visagismo constrói uma identidade visual que reflete sua personalidade e objetivos.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </div>
      <VisagismoSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </>
  );
}
