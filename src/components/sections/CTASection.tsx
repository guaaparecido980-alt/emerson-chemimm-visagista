"use client";

import React from "react";
import { MessageSquare, ArrowRight } from "lucide-react";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import { siteConfig, getWhatsappUrl } from "@/data/site";

export default function CTASection() {
  const whatsappUrl = getWhatsappUrl();

  return (
    <section className="relative py-24 md:py-32 bg-[#05070a] overflow-hidden border-t border-[#1e293b]/30">
      {/* Lights background */}
      <div className="neon-glow-2 top-[10%] right-[-10%]" />
      <div className="neon-glow-1 bottom-[-10%] left-[-10%]" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <AnimatedContainer delay={0.1}>
          <span className="mb-4 inline-block rounded-full bg-[#071b33] border border-[#0a84ff]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0a84ff]">
            Próximo Passo
          </span>
        </AnimatedContainer>

        <AnimatedContainer delay={0.2} className="mt-2">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#f4f7fb] sm:text-4xl md:text-5xl max-w-3xl mx-auto leading-tight">
            Quer descobrir qual corte combina <span className="text-gradient-neon">melhor com você?</span>
          </h2>
        </AnimatedContainer>

        <AnimatedContainer delay={0.3} className="mt-6">
          <p className="max-w-2xl mx-auto text-base md:text-lg text-[#a7b0be] leading-relaxed">
            Agende um horário e receba uma análise personalizada de visagismo para sair com um visual mais alinhado ao seu rosto, estilo e momento de vida.
          </p>
        </AnimatedContainer>

        <AnimatedContainer delay={0.4} className="mt-10 flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0a84ff] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#0a84ff]/20 hover:bg-[#007bff] hover:shadow-xl hover:shadow-[#0a84ff]/30 active:scale-95 transition-all duration-200"
          >
            <MessageSquare className="h-5 w-5" />
            Agendar pelo WhatsApp
          </a>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0d121f] border border-[#1e293b] hover:border-slate-700 px-8 py-4 text-base font-bold text-[#f4f7fb] hover:bg-slate-900 active:scale-95 transition-all duration-200"
          >
            Ver Instagram
            <ArrowRight className="h-5 w-5" />
          </a>
        </AnimatedContainer>
      </div>
    </section>
  );
}
