"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Eye, ShieldCheck } from "lucide-react";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import { siteConfig, getWhatsappUrl } from "@/data/site";
import { withBasePath } from "@/lib/paths";

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);

  const whatsappUrl = getWhatsappUrl("Olá, gostaria de agendar uma avaliação.");

  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center pt-28 pb-16 md:min-h-[90vh] overflow-hidden bg-[#05070a]"
    >
      {/* Background glow effects */}
      <div className="neon-glow-2 top-[-10%] right-[-10%]" />
      <div className="neon-glow-1 bottom-[10%] left-[-10%]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT SIDE: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <AnimatedContainer delay={0.1}>
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-[#071b33] border border-[#0a84ff]/30 px-3.5 py-1 text-xs md:text-sm font-semibold text-[#0a84ff] uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                Especialista em Visagismo Masculino
              </span>
            </AnimatedContainer>

            <AnimatedContainer delay={0.2} className="mt-2">
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#f4f7fb] leading-[1.05] max-w-2xl">
                Um corte pensado para o <span className="text-gradient-blue">seu rosto</span>, não copiado de outra pessoa.
              </h1>
            </AnimatedContainer>

            <AnimatedContainer delay={0.3} className="mt-6">
              <p className="text-base sm:text-lg md:text-xl text-[#a7b0be] max-w-xl leading-relaxed">
                Emerson Chemimm trabalha com visagismo masculino para alinhar corte, barba e imagem de forma natural, respeitando seu rosto, sua rotina e o estilo que você quer transmitir.
              </p>
            </AnimatedContainer>

            {/* CTAs */}
            <AnimatedContainer delay={0.4} className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0a84ff] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#0a84ff]/20 hover:bg-[#007bff] hover:shadow-xl hover:shadow-[#0a84ff]/30 active:scale-95 transition-all duration-200 w-full sm:w-auto"
              >
                Agendar pelo WhatsApp
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#transformacoes"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0d121f] border border-[#1e293b] hover:border-slate-700 px-8 py-4 text-base font-bold text-[#f4f7fb] hover:bg-slate-900 active:scale-95 transition-all duration-200 w-full sm:w-auto"
              >
                Ver antes e depois
                <Eye className="h-5 w-5" />
              </a>
            </AnimatedContainer>

            {/* Quick Proof Points */}
            <AnimatedContainer delay={0.5} className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full border-t border-[#1e293b]/50 pt-8">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-[#0a84ff] shrink-0" />
                <span className="text-sm font-medium text-[#f4f7fb]">Análise do rosto</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-[#0a84ff] shrink-0" />
                <span className="text-sm font-medium text-[#f4f7fb]">Corte e barba sob medida</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-[#0a84ff] shrink-0" />
                <span className="text-sm font-medium text-[#f4f7fb]">Resultado natural</span>
              </div>
            </AnimatedContainer>
          </div>

          {/* RIGHT SIDE: Photo of Emerson or premium haircut */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <AnimatedContainer delay={0.3} yOffset={40} className="w-full max-w-[400px]">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-[#1e293b] shadow-2xl bg-gradient-to-tr from-[#05070a] to-[#071b33]">
                {!imageError ? (
                  <Image
                    src={withBasePath("/images/emerson-hero.webp")}
                    alt={`${siteConfig.name}, ${siteConfig.role}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <span className="text-xs uppercase tracking-widest text-[#0a84ff] font-semibold mb-2">{siteConfig.role}</span>
                    <span className="text-2xl font-bold font-heading text-[#f4f7fb] mb-1">{siteConfig.name}</span>
                    <span className="text-xs text-[#a7b0be]">Imagem em atualização</span>
                  </div>
                )}
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent pointer-events-none" />
              </div>
            </AnimatedContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
