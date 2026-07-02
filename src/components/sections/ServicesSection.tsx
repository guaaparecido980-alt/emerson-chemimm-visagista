"use client";

import React from "react";
import { Clock, Check, ArrowRight } from "lucide-react";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import PremiumCard from "@/components/ui/PremiumCard";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export default function ServicesSection() {
  const whatsappUrl = siteConfig.whatsapp === "[INSERIR_WHATSAPP]"
    ? "https://wa.me/"
    : `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`;

  return (
    <section id="servicos" className="relative py-20 md:py-28 bg-[#05070a] overflow-hidden border-t border-[#1e293b]/30">
      <div className="neon-glow-2 top-[10%] left-[-10%]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContainer delay={0.1}>
          <SectionTitle
            badge="Tabela de Serviços"
            title="Serviços para alinhar cabelo, barba e imagem."
            subtitle="Atendimentos focados em alta precisão técnica e consultoria estética para elevar o padrão da sua imagem visual."
          />
        </AnimatedContainer>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <AnimatedContainer
              key={service.id}
              delay={0.1 * (idx + 1)}
              className="h-full flex"
            >
              <PremiumCard
                className={`w-full flex flex-col justify-between border ${
                  service.highlight
                    ? "border-[#0a84ff]/50 shadow-[0_0_20px_rgba(10,132,255,0.1)] bg-[#071b33]/40"
                    : "border-[#1e293b]/50"
                }`}
                glow={service.highlight}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="font-heading text-xl font-bold text-[#f4f7fb]">
                      {service.name}
                    </h3>
                    {service.highlight && (
                      <span className="rounded-full bg-[#0a84ff] px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                        Recomendado
                      </span>
                    )}
                  </div>

                  {service.duration && (
                    <div className="flex items-center gap-1.5 text-xs text-[#0a84ff] font-semibold mb-4">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{service.duration}</span>
                    </div>
                  )}

                  <p className="text-sm text-[#a7b0be] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="border-t border-[#1e293b]/50 pt-4 mb-6">
                    <p className="text-xs uppercase tracking-wider text-[#a7b0be] font-bold mb-2">
                      Indicado para:
                    </p>
                    <p className="text-xs text-[#f4f7fb]/90 leading-relaxed italic">
                      &ldquo;{service.targetAudience}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="mt-auto">
                  <a
                    href={`${whatsappUrl}?text=Olá,%20gostaria%20de%20agendar%20o%20serviço:%20${encodeURIComponent(
                      service.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-extrabold transition-all duration-300 w-full ${
                      service.highlight
                        ? "bg-[#0a84ff] text-white hover:bg-[#007bff] shadow-lg shadow-[#0a84ff]/20"
                        : "bg-[#0d121f] border border-[#1e293b] text-[#f4f7fb] hover:bg-slate-800"
                    }`}
                  >
                    Agendar este serviço
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </PremiumCard>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
