"use client";

import React from "react";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import BeforeAfterCompare from "@/components/ui/BeforeAfterCompare";
import { transformations } from "@/data/transformations";

export default function TransformationsGallery() {
  return (
    <section id="transformacoes" className="relative py-24 md:py-32 bg-[#05070a] overflow-hidden border-t border-[#1e293b]/30">
      <div className="neon-glow-1 top-[30%] right-[-10%]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContainer delay={0.1}>
          <SectionTitle
            badge="Transformações"
            title="Transformações reais. Homens reais. Resultado visível."
            subtitle="Veja abaixo os exemplos práticos de como o visagismo masculino realinha a imagem pessoal. Cada cliente teve uma análise específica focada em seu objetivo pessoal."
          />
        </AnimatedContainer>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {transformations.map((trans, idx) => (
            <AnimatedContainer
              key={trans.id}
              delay={0.2 * (idx + 1)}
              yOffset={30}
              className="flex flex-col h-full"
            >
              <BeforeAfterCompare
                beforeImage={trans.beforeImage}
                afterImage={trans.afterImage}
                beforeAlt={`Antes: ${trans.title}`}
                afterAlt={`Depois: ${trans.title}`}
                title={trans.title}
                subtitle={`${trans.transformationType} • ${trans.objective}`}
              />
              <div className="mt-4 px-2">
                <p className="text-sm font-semibold text-[#0a84ff] uppercase tracking-wider mb-1">
                  Objetivo: {trans.objective}
                </p>
                <p className="text-sm text-[#a7b0be] leading-relaxed">
                  {trans.description}
                </p>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
