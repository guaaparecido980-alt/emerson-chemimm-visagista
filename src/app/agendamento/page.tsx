import React from "react";
import type { Metadata } from "next";
import { MessageSquare, Calendar, Compass, ShieldCheck } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import PremiumCard from "@/components/ui/PremiumCard";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Agendamento de Horário",
  description: "Reserve sua sessão de corte, barba ou consultoria de imagem com o barbeiro visagista Emerson Chemimm via WhatsApp.",
  alternates: {
    canonical: "/agendamento",
  },
};

export default function AgendamentoPage() {
  const whatsappUrl = siteConfig.whatsapp === "[INSERIR_WHATSAPP]"
    ? "https://wa.me/"
    : `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`;

  return (
    <>
      <Header />
      <div className="bg-[#05070a] pt-32 pb-24 min-h-[85vh] flex flex-col justify-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full">
          <AnimatedContainer delay={0.1}>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="mb-4 inline-block rounded-full bg-[#071b33] border border-[#0a84ff]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0a84ff]">
                Reserva Online
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-[#f4f7fb] mb-6">
                Agende Seu Horário
              </h1>
              <p className="text-base sm:text-lg text-[#a7b0be] leading-relaxed">
                Escolha o melhor canal de agendamento para realizar sua análise de visagismo e renovação de visual.
              </p>
            </div>
          </AnimatedContainer>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* WhatsApp Card */}
            <AnimatedContainer delay={0.2} className="flex h-full">
              <PremiumCard className="w-full flex flex-col justify-between p-8 border border-[#0a84ff]/30 bg-[#071b33]/20" glow={true}>
                <div>
                  <div className="rounded-xl bg-[#0a84ff]/10 border border-[#0a84ff]/30 p-4 text-[#0a84ff] w-14 h-14 flex items-center justify-center mb-6">
                    <MessageSquare className="h-7 w-7" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-[#f4f7fb] mb-4">
                    Agendar via WhatsApp
                  </h2>
                  <p className="text-sm text-[#a7b0be] leading-relaxed mb-6">
                    Fale diretamente conosco. Nossa equipe ajudará a encontrar o melhor horário e tirará suas dúvidas sobre qual serviço escolher.
                  </p>
                </div>
                <a
                  href={`${whatsappUrl}?text=Olá,%20gostaria%20de%20agendar%20um%20horário%20para%20avaliação%20de%20visagismo.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center rounded-xl bg-[#0a84ff] py-4 text-base font-bold text-white hover:bg-[#007bff] transition-colors duration-200"
                >
                  Enviar Mensagem
                </a>
              </PremiumCard>
            </AnimatedContainer>

            {/* Informações Úteis Card */}
            <AnimatedContainer delay={0.3} className="flex h-full">
              <PremiumCard className="w-full flex flex-col justify-between p-8 border border-[#1e293b]/50">
                <div>
                  <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 text-slate-400 w-14 h-14 flex items-center justify-center mb-6">
                    <Calendar className="h-7 w-7" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-[#f4f7fb] mb-4">
                    Informações Importantes
                  </h2>
                  <ul className="space-y-4 text-xs md:text-sm text-[#a7b0be]">
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="h-4.5 w-4.5 text-[#0a84ff] shrink-0 mt-0.5" />
                      <span>Chegue com 5-10 minutos de antecedência para desfrutar da recepção sem pressa.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Compass className="h-4.5 w-4.5 text-[#0a84ff] shrink-0 mt-0.5" />
                      <span>Se tiver fotos de referência do que deseja, salve-as no celular para o diagnóstico inicial.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 border-t border-[#1e293b]/40 pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#a7b0be] mb-2">Horários de atendimento:</h4>
                  {siteConfig.openingHours.map((oh, i) => (
                    <p key={i} className="text-xs text-[#f4f7fb] leading-normal font-semibold">
                      {oh.days}: {oh.hours}
                    </p>
                  ))}
                </div>
              </PremiumCard>
            </AnimatedContainer>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
