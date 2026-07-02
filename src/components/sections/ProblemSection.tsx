import React from "react";
import { UserMinus, Sparkles, Briefcase, HelpCircle, AlertTriangle } from "lucide-react";
import PremiumCard from "@/components/ui/PremiumCard";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedContainer from "@/components/ui/AnimatedContainer";

export default function ProblemSection() {
  const problems = [
    {
      icon: UserMinus,
      title: "Corte que não valoriza o rosto",
      description: "Linhas redondas que não marcam suas feições ou proporções que deixam o formato da cabeça estranho. O corte deve alongar, angular ou suavizar seu rosto estrategicamente.",
    },
    {
      icon: AlertTriangle,
      title: "Barba sem proporção",
      description: "Uma barba desalinhada com a mandíbula pode criar papadas visuais, achatar seu rosto ou deixar o queixo sem a força masculina que ele deveria ter.",
    },
    {
      icon: Briefcase,
      title: "Visual desalinhado com a profissão",
      description: "Seu cabelo e barba comunicam antes de você abrir a boca. Um visual muito juvenil ou muito desleixado pode comprometer sua autoridade em reuniões de negócios.",
    },
    {
      icon: HelpCircle,
      title: "Dificuldade de explicar o que quer",
      description: "Você senta na cadeira e diz 'só um pouquinho nas laterais' porque não sabe o que combina com você e não consegue se comunicar com o barbeiro comum.",
    },
    {
      icon: Sparkles,
      title: "Medo de mudar e ficar ruim",
      description: "O medo de arriscar um visual novo e se arrepender faz você usar o mesmo corte de cabelo genérico há 5, 10 ou 15 anos, mesmo insatisfeito.",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-[#05070a] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContainer delay={0.1}>
          <SectionTitle
            badge="Identificação"
            title="Talvez o problema não seja seu cabelo. Seja o corte errado para o seu rosto."
            subtitle="Muitos homens cortam o cabelo sempre do mesmo jeito ou seguem tendências que viram na internet, sem entender que cada rosto possui um formato, uma estrutura óssea e uma intenção de imagem diferente."
          />
        </AnimatedContainer>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <AnimatedContainer
                key={prob.title}
                delay={0.1 * (idx + 1)}
                className={idx === 4 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <PremiumCard className="h-full flex flex-col items-start">
                  <div className="rounded-lg bg-[#071b33] border border-[#0a84ff]/20 p-3 text-[#0a84ff] mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#f4f7fb] mb-3">
                    {prob.title}
                  </h3>
                  <p className="text-sm text-[#a7b0be] leading-relaxed">
                    {prob.description}
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
