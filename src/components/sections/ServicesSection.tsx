"use client";

import React from "react";
import { ArrowRight, Scissors, Ruler, Layers, Sparkles, RefreshCw } from "lucide-react";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import PremiumCard from "@/components/ui/PremiumCard";
import { services, ServiceIcon } from "@/data/services";
import { getWhatsappUrl } from "@/data/site";

const iconMap: Record<ServiceIcon, typeof Scissors> = {
  scissors: Scissors,
  razor: Ruler,
  combo: Layers,
  sparkles: Sparkles,
  repeat: RefreshCw,
};

export default function ServicesSection() {
  const whatsappUrl = getWhatsappUrl();

  return (
    <section id="servicos" className="relative py-24 md:py-32 bg-[#05070a] overflow-hidden border-t border-[#1e293b]/30">
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
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon];
            return (
            <AnimatedContainer
              key={service.id}
              delay={0.1 * (idx + 1)}
              className={`h-full flex ${idx === 3 ? "lg:col-start-2" : ""}`}
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
                    <div className="rounded-lg bg-[#071b33] p-2.5 text-[#0a84ff]">
                      <Icon className="h-5 w-5" />
                    </div>
                    {service.highlight && (
                      <span className="rounded-full bg-[#0a84ff] px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                        Recomendado
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#f4f7fb] mb-3">
                    {service.name}
                  </h3>

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
            );
          })}
        </div>
      </div>
    </section>
  );
}
