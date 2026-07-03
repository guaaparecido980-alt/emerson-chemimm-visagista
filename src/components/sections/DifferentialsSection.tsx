import React from "react";
import { Sliders, Shield, Ruler, Sparkles, Award, Coffee, RefreshCw, CheckCircle2 } from "lucide-react";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import PremiumCard from "@/components/ui/PremiumCard";

export default function DifferentialsSection() {
  const diffs = [
    {
      icon: Sliders,
      title: "Análise Personalizada",
      description: "Nenhum corte começa sem antes conversarmos sobre o seu estilo de vida, profissão e preferências pessoais.",
    },
    {
      icon: Shield,
      title: "Técnica de Visagismo",
      description: "Aplicação da teoria visagista para encontrar a harmonia perfeita que valoriza sua expressão facial.",
    },
    {
      icon: Ruler,
      title: "Atenção à Proporção",
      description: "Medição e equilíbrio métrico entre a estrutura de cabelo, o desenho da barba e o formato do maxilar.",
    },
    {
      icon: RefreshCw,
      title: "Pensado para a sua Rotina",
      description: "Desenvolvimento de um visual fácil de manter no dia a dia, respeitando o caimento natural do seu fio.",
    },
    {
      icon: Award,
      title: "Acabamento Cuidadoso",
      description: "Ferramentas profissionais e atenção aos detalhes do início ao fim do atendimento.",
    },
    {
      icon: Sparkles,
      title: "Orientação para Estilizar",
      description: "Você sai sabendo exatamente qual produto usar e como pentear para recriar o visual em casa.",
    },
    {
      icon: Coffee,
      title: "Atendimento com Calma",
      description: "Cada sessão tem tempo reservado para conversa e diagnóstico, sem pressa entre um cliente e outro.",
    },
    {
      icon: CheckCircle2,
      title: "Continuidade entre Sessões",
      description: "Seu histórico de corte fica registrado, então cada retorno mantém a mesma referência e o mesmo padrão.",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#05070a] overflow-hidden border-t border-[#1e293b]/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContainer delay={0.1}>
          <SectionTitle
            badge="Diferenciais"
            title="Por que não é só mais um corte?"
            subtitle="Oferecemos uma experiência completa de cuidado e alinhamento de imagem masculina que vai muito além das barbearias tradicionais."
          />
        </AnimatedContainer>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {diffs.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <AnimatedContainer
                key={diff.title}
                delay={0.08 * (idx + 1)}
                className="h-full flex"
              >
                <PremiumCard className="w-full flex flex-col items-start p-6">
                  <div className="rounded-lg bg-[#071b33] p-3 text-[#0a84ff] mb-5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-[#f4f7fb] mb-2">
                    {diff.title}
                  </h3>
                  <p className="text-xs text-[#a7b0be] leading-relaxed">
                    {diff.description}
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
