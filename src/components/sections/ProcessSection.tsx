import React from "react";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import PremiumCard from "@/components/ui/PremiumCard";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico Visual",
      description: "Começamos sentados conversando. Analiso as linhas do seu rosto, a textura e redemoinhos do cabelo, o crescimento da barba e pergunto sobre sua rotina profissional e estilo.",
    },
    {
      number: "02",
      title: "Direção de Estilo",
      description: "Antes de iniciar qualquer corte, apresento a proposta de visagismo ideal explicada tecnicamente. Alinhamos juntos o comprimento ideal, acabamentos de fade ou linhas clássicas.",
    },
    {
      number: "03",
      title: "Execução Técnica",
      description: "Corte, barba e contornos executados com atenção à simetria facial, ao caimento do fio e ao acabamento na navalha.",
    },
    {
      number: "04",
      title: "Orientação Final",
      description: "Ensino as técnicas corretas e produtos recomendados (pomada, óleo de barba, etc.) para que você consiga estilizar seu cabelo sozinho em casa em menos de 2 minutos.",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#05070a] overflow-hidden border-t border-[#1e293b]/30">
      <div className="neon-glow-2 bottom-[-10%] right-[-10%]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContainer delay={0.1}>
          <SectionTitle
            badge="Como Funciona"
            title="Um atendimento pensado antes da tesoura encostar."
            subtitle="Minha metodologia de atendimento garante que cada etapa seja realizada com transparência, conforto e técnica, do diagnóstico ao acabamento."
          />
        </AnimatedContainer>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Linha conectora no desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#0a84ff]/5 via-[#0a84ff]/30 to-[#0a84ff]/5 z-0" />

          {steps.map((step, idx) => (
            <AnimatedContainer
              key={step.number}
              delay={0.15 * (idx + 1)}
              className="relative z-10"
            >
              <PremiumCard className="h-full flex flex-col pt-16! items-start relative">
                {/* Badge de Número */}
                <div className="absolute top-[-25px] left-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071b33] border border-[#0a84ff]/40 text-lg font-black text-[#0a84ff] shadow-lg shadow-[#0a84ff]/10">
                  {step.number}
                </div>

                <h3 className="font-heading text-lg font-extrabold text-[#f4f7fb] mt-6 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#a7b0be] leading-relaxed">
                  {step.description}
                </p>
              </PremiumCard>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
