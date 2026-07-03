import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import FaceAnalysisDiagram from "@/components/ui/FaceAnalysisDiagram";

export default function VisagismoSection() {
  const pillars = [
    {
      title: "Análise do formato do rosto",
      description: "Identificação das linhas dominantes do rosto para criar contornos favoráveis.",
    },
    {
      title: "Proporção facial integrada",
      description: "Cabelo, barba e sobrancelha vistos como um conjunto, não isoladamente.",
    },
    {
      title: "Escolha técnica refinada",
      description: "Texturização, angulação de fade e marcações geométricas com caimento natural.",
    },
    {
      title: "Personalidade e estilo de vida",
      description: "O corte precisa funcionar com sua rotina, não só parecer bom por um dia.",
    },
    {
      title: "Objetivo de imagem",
      description: "Mais sério, mais moderno, mais acessível — o corte segue essa intenção.",
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
            subtitle="Diferente do atendimento comum que repete o mesmo padrão de fade em todo mundo, o visagismo lê o rosto antes de decidir o corte."
          />
        </AnimatedContainer>

        <div className="mt-12">
          <FaceAnalysisDiagram pillars={pillars} />
        </div>
      </div>
    </section>
  );
}
