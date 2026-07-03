"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Compass, GraduationCap } from "lucide-react";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import PremiumCard from "@/components/ui/PremiumCard";
import { siteConfig, hasAddress, hasCity, hasNeighborhood } from "@/data/site";
import { withBasePath } from "@/lib/paths";

export default function AboutSection() {
  const [imageError, setImageError] = useState(false);
  const hasLocationInfo = hasAddress || hasCity;

  return (
    <section id="sobre" className="relative py-20 md:py-28 bg-[#05070a] overflow-hidden border-t border-[#1e293b]/30">
      <div className="neon-glow-2 top-[20%] right-[-10%]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* IMAGE SIDE */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:order-2">
            <AnimatedContainer delay={0.2} yOffset={30} className="w-full max-w-[400px]">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-[#1e293b] shadow-2xl bg-gradient-to-tr from-[#05070a] to-[#071b33]">
                {!imageError ? (
                  <Image
                    src={withBasePath("/images/emerson-about.jpg")}
                    alt={`Retrato de ${siteConfig.name}, ${siteConfig.role}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    loading="lazy"
                    className="object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <span className="text-xs uppercase tracking-widest text-[#0a84ff] font-semibold mb-2">Sobre</span>
                    <span className="text-2xl font-bold font-heading text-[#f4f7fb] mb-1">{siteConfig.name}</span>
                    <span className="text-xs text-[#a7b0be]">Imagem em atualização</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent pointer-events-none" />
              </div>
            </AnimatedContainer>
          </div>

          {/* CONTENT SIDE */}
          <div className="lg:col-span-7 flex flex-col items-start text-left lg:order-1">
            <AnimatedContainer delay={0.1}>
              <SectionTitle
                badge="O Especialista"
                title="Por trás do corte, existe leitura de imagem, técnica e experiência."
                align="left"
              />
            </AnimatedContainer>

            <AnimatedContainer delay={0.3} className="space-y-6 text-base text-[#a7b0be] leading-relaxed max-w-xl">
              <p>
                Eu sou o <strong className="text-[#f4f7fb] font-semibold">{siteConfig.name}</strong>, especialista em visagismo masculino personalizado. Acredito que o cabelo e a barba de um homem não devem seguir modismos passageiros, mas sim contar a sua história e valorizar a sua essência.
              </p>
              <p>
                Meu foco é realizar um atendimento cuidadoso, individual e focado no detalhe. Na minha cadeira, você não recebe apenas um corte comum, mas sim uma consultoria estética completa que busca alinhar a proporção do seu rosto com seus objetivos pessoais e profissionais.
              </p>
            </AnimatedContainer>

            <AnimatedContainer delay={0.4} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
              <PremiumCard className="p-4 flex items-start gap-4" glow={false}>
                <div className="rounded bg-[#071b33] p-2.5 text-[#0a84ff]">
                  <Compass className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#f4f7fb] mb-1">Método Personalizado</h4>
                  <p className="text-xs text-[#a7b0be]">Cada recomendação parte do formato do seu rosto, da sua rotina e do que você quer transmitir.</p>
                </div>
              </PremiumCard>

              <PremiumCard className="p-4 flex items-start gap-4" glow={false}>
                <div className="rounded bg-[#071b33] p-2.5 text-[#0a84ff]">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#f4f7fb] mb-1">Corte e Barba Integrados</h4>
                  <p className="text-xs text-[#a7b0be]">Cabelo e barba pensados juntos, para o visual final fazer sentido como um todo.</p>
                </div>
              </PremiumCard>
            </AnimatedContainer>

            {/* Informações Físicas / Contato */}
            <AnimatedContainer delay={0.5} className="mt-8 border-t border-[#1e293b]/50 pt-6 w-full max-w-2xl flex flex-col sm:flex-row gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#0a84ff] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#a7b0be] mb-1">Localização</h4>
                  <p className="text-sm text-[#f4f7fb] font-medium leading-normal">
                    {hasLocationInfo ? (
                      <>
                        {siteConfig.location.address}
                        {hasNeighborhood && `, ${siteConfig.location.neighborhood}`}
                        {hasCity && ` - ${siteConfig.location.city}`}
                      </>
                    ) : (
                      "Local de atendimento informado no agendamento"
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-[#0a84ff] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#a7b0be] mb-1">Horário de Atendimento</h4>
                  {siteConfig.openingHours.map((oh, i) => (
                    <p key={i} className="text-sm text-[#f4f7fb] font-medium leading-normal">
                      {oh.days}: {oh.hours}
                    </p>
                  ))}
                </div>
              </div>
            </AnimatedContainer>
          </div>

        </div>
      </div>
    </section>
  );
}
