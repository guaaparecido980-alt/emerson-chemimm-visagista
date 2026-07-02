import React from "react";
import { Frame, Layers, Compass, Target, Scissors } from "lucide-react";
import PremiumCard from "@/components/ui/PremiumCard";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedContainer from "@/components/ui/AnimatedContainer";

export default function VisagismoSection() {
  const pillars = [
    {
      icon: Frame,
      title: "Análise do formato do rosto",
      description: "Medição de proporções e identificação de linhas dominantes (quadrado, oval, redondo, retangular ou triangular) para criar contornos favoráveis.",
    },
    {
      icon: Layers,
      title: "Proporção facial integrada",
      description: "Equilíbrio entre cabelo, barba e sobrancelha. Nada é visto de forma isolada, mas sim como um conjunto que forma a sua moldura facial.",
    },
    {
      icon: Compass,
      title: "Personalidade e estilo de vida",
      description: "Seu visual precisa refletir quem você é por dentro e ser prático. O corte deve funcionar perfeitamente com sua rotina de cuidados diários.",
    },
    {
      icon: Target,
      title: "Objetivo de imagem",
      description: "Seu desejo visual: quer parecer mais sério e confiável? Mais acessível e jovem? Mais moderno e criativo? Ajustamos o corte com essa intenção estratégica.",
    },
    {
      icon: Scissors,
      title: "Escolha técnica refinada",
      description: "Uso de técnicas de texturização, angulação de fade e marcações geométricas para que o cabelo tenha caimento perfeito e cresça com boa forma.",
    },
  ];

  return (
    <section id="visagismo" className="relative py-20 md:py-28 bg-[#05070a] overflow-hidden border-t border-[#1e293b]/30">
      <div className="neon-glow-1 top-[20%] left-[-15%]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContainer delay={0.1}>
          <SectionTitle
            badge="Conceito"
            title="Visagismo é quando o corte deixa de ser padrão e passa a ser estratégia de imagem."
            subtitle="Diferente do atendimento comum que repete o mesmo padrão de fade em todo mundo, o visagismo busca extrair a melhor versão da sua imagem facial de acordo com regras estéticas e psicológicas."
          />
        </AnimatedContainer>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <AnimatedContainer
                key={pillar.title}
                delay={0.1 * (idx + 1)}
                className={idx === 4 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <PremiumCard className="h-full flex flex-col items-start border-l-2 border-l-[#0a84ff]">
                  <div className="rounded-lg bg-[#071b33] p-3 text-[#0a84ff] mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#f4f7fb] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#a7b0be] leading-relaxed">
                    {pillar.description}
                  </p>
                </PremiumCard>
              </AnimatedContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
