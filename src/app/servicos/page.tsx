import React from "react";
import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import { siteUrl } from "@/data/seo";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Conheça os serviços oferecidos por Emerson Chemimm, incluindo corte com visagismo, barba alinhada ao rosto e transformação de visual.",
  alternates: {
    canonical: `${siteUrl}/servicos`,
  },
};

export default function ServicosPage() {
  return (
    <>
      <Header />
      <div className="bg-[#05070a] pt-32 pb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContainer delay={0.1}>
            <div className="text-center max-w-3xl mx-auto mb-4">
              <span className="mb-4 inline-block rounded-full bg-[#071b33] border border-[#0a84ff]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0a84ff]">
                Atendimentos
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-[#f4f7fb] mb-6">
                Serviços de Corte, Barba e Visagismo
              </h1>
              <p className="text-base sm:text-lg text-[#a7b0be] leading-relaxed">
                Conheça os atendimentos personalizados de {" "}
                <span className="text-[#0a84ff]">Emerson Chemimm</span>, focados em harmonizar sua imagem com técnica e precisão.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </div>
      <ServicesSection />
      <CTASection />
      <Footer />
    </>
  );
}
