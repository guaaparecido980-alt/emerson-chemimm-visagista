import React from "react";
import { siteConfig, hasCity } from "@/data/site";
import AnimatedContainer from "@/components/ui/AnimatedContainer";

export default function LocalSEOSection() {
  const city = siteConfig.location.city;

  return (
    <section className="relative py-12 bg-[#05070a] border-t border-[#1e293b]/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedContainer delay={0.1}>
          <div className="rounded-2xl border border-[#1e293b]/30 bg-[#0d121f]/20 p-6 md:p-8 text-center max-w-4xl mx-auto">
            {hasCity ? (
              <>
                <h3 className="text-xs uppercase tracking-widest text-[#0a84ff] font-bold mb-4">
                  Barbeiro visagista em {city}
                </h3>
                <p className="text-xs md:text-sm text-[#a7b0be] leading-relaxed max-w-3xl mx-auto">
                  Para quem busca <strong className="text-[#f4f7fb] font-semibold">corte masculino personalizado</strong>,{" "}
                  <strong className="text-[#f4f7fb] font-semibold">barba alinhada</strong> e{" "}
                  <strong className="text-[#f4f7fb] font-semibold">visagismo masculino em {city}</strong>, o atendimento de {siteConfig.name} é pensado para valorizar o formato do rosto, a rotina e a imagem que o cliente deseja transmitir.
                </p>
              </>
            ) : (
              <>
                <h3 className="text-xs uppercase tracking-widest text-[#0a84ff] font-bold mb-4">
                  Visagismo masculino com atendimento personalizado
                </h3>
                <p className="text-xs md:text-sm text-[#a7b0be] leading-relaxed max-w-3xl mx-auto">
                  Cada corte é pensado a partir do rosto, da barba, do estilo e da rotina do cliente. A proposta é sair da cadeira com um visual mais alinhado, natural e fácil de manter no dia a dia.
                </p>
              </>
            )}
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
