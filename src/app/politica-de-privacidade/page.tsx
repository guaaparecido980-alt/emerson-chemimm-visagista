import React from "react";
import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import AnimatedContainer from "@/components/ui/AnimatedContainer";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade do site de Emerson Chemimm - Barbeiro Visagista.",
  alternates: {
    canonical: "/politica-de-privacidade",
  },
};

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <Header />
      <div className="bg-[#05070a] pt-32 pb-24 min-h-[85vh]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimatedContainer delay={0.1}>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#f4f7fb] mb-8">
              Política de Privacidade
            </h1>
            
            <div className="prose prose-invert max-w-none text-sm md:text-base text-[#a7b0be] space-y-6 leading-relaxed">
              <p>
                A sua privacidade é de extrema importância para nós. É política do site de <strong className="text-[#f4f7fb] font-semibold">Emerson Chemimm</strong> respeitar a sua privacidade em relação a qualquer informação que possamos coletar neste site.
              </p>
              
              <h2 className="font-heading text-xl font-bold text-[#f4f7fb] pt-4">1. Coleta de Informações</h2>
              <p>
                Solicitamos informações pessoais (como nome, telefone ou e-mail) apenas quando realmente precisamos delas para lhe fornecer um serviço, como o agendamento de horários ou contato. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.
              </p>
              
              <h2 className="font-heading text-xl font-bold text-[#f4f7fb] pt-4">2. Uso de Dados</h2>
              <p>
                Os dados fornecidos no formulário de contato ou links de redirecionamento de mensagens são usados estritamente para viabilizar o seu atendimento, agendamento de horários na barbearia e envio de informações pertinentes à sua reserva.
              </p>
              
              <h2 className="font-heading text-xl font-bold text-[#f4f7fb] pt-4">3. Retenção e Segurança</h2>
              <p>
                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemo-los dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
              </p>
              
              <h2 className="font-heading text-xl font-bold text-[#f4f7fb] pt-4">4. Links para Terceiros</h2>
              <p>
                O nosso site pode conter links para aplicativos externos que não são operados por nós, como o WhatsApp e Instagram. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
              </p>
              
              <h2 className="font-heading text-xl font-bold text-[#f4f7fb] pt-4">5. Compromisso do Usuário</h2>
              <p>
                O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o site oferece e a não fornecer dados falsos ou incorretos durante o preenchimento de solicitações.
              </p>
              
              <p className="pt-6 text-xs text-[#a7b0be]/60">
                Esta política é efetiva a partir de Julho de 2026.
              </p>
            </div>
          </AnimatedContainer>
        </div>
      </div>
      <Footer />
    </>
  );
}
