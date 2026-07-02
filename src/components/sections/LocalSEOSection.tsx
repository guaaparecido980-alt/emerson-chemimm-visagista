import React from "react";
import { siteConfig } from "@/data/site";
import AnimatedContainer from "@/components/ui/AnimatedContainer";

export default function LocalSEOSection() {
  const city = siteConfig.location.city !== "[INSERIR_CIDADE]" ? siteConfig.location.city : "sua região";
  const neighborhood = siteConfig.location.neighborhood !== "[INSERIR_BAIRRO]" ? siteConfig.location.neighborhood : "";

  return (
    <section className="relative py-12 bg-[#05070a] border-t border-[#1e293b]/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedContainer delay={0.1}>
          <div className="rounded-2xl border border-[#1e293b]/30 bg-[#0d121f]/20 p-6 md:p-8 text-center max-w-4xl mx-auto">
            <h3 className="text-xs uppercase tracking-widest text-[#0a84ff] font-bold mb-4">
              Referência em Visagismo em {city}
            </h3>
            <p className="text-xs md:text-sm text-[#a7b0be] leading-relaxed max-w-3xl mx-auto">
              Se você está procurando um especialista em{" "}
              <strong className="text-[#f4f7fb] font-semibold">barbeiro visagista em {city}</strong> para renovar seu visual, atendemos clientes de toda a cidade, incluindo o bairro {neighborhood}. Oferecemos serviços especializados de{" "}
              <strong className="text-[#f4f7fb] font-semibold">visagismo masculino em {city}</strong>, além de{" "}
              <strong className="text-[#f4f7fb] font-semibold">corte masculino personalizado em {city}</strong> e design de{" "}
              <strong className="text-[#f4f7fb] font-semibold">barba e cabelo masculino em {city}</strong>. Agende sua sessão e experimente uma{" "}
              <strong className="text-[#f4f7fb] font-semibold">consultoria de imagem masculina em {city}</strong> de alto padrão técnico, projetada exclusivamente para harmonizar seus traços e comunicar profissionalismo.
            </p>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
