export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  targetAudience: string;
  duration?: string;
  price?: string; // Opcional
  highlight?: boolean;
}

export const services: ServiceItem[] = [
  {
    id: "corte-visagismo",
    name: "Corte Masculino com Visagismo",
    description: "Análise prévia do formato do rosto e feições para definição do corte ideal. Inclui lavagem premium, corte técnico e estilização final personalizada.",
    targetAudience: "Homens que buscam um corte sob medida para valorizar seus traços naturais e estilo de vida.",
    duration: "45 min",
    highlight: true
  },
  {
    id: "barba-personalizada",
    name: "Barba Personalizada",
    description: "Alinhamento e desenho da barba respeitando as proporções do rosto (visagismo de barba). Feito com toalha quente, óleos essenciais e acabamento na navalha.",
    targetAudience: "Homens com barba que desejam alinhar a simetria facial e manter os fios saudáveis e desenhados.",
    duration: "30 min"
  },
  {
    id: "corte-barba",
    name: "Corte + Barba Premium",
    description: "A experiência completa de transformação e manutenção. Alinhamento integrado de cabelo e barba com técnicas avançadas de visagismo.",
    targetAudience: "Homens que querem uma renovação total e harmonia completa em sua imagem pessoal.",
    duration: "1h 15min",
    highlight: true
  },
  {
    id: "consultoria-imagem",
    name: "Consultoria de Imagem Masculina",
    description: "Análise profunda de proporção facial, psicologia das formas e estilo de vida. Definição do plano de imagem e recomendação de corte, barba e cuidados.",
    targetAudience: "Profissionais, empresários e homens em transição de carreira que precisam projetar autoridade e confiança.",
    duration: "1h"
  },
  {
    id: "transformacao-completa",
    name: "Transformação Completa",
    description: "Sessão de consultoria + execução imediata do novo corte de cabelo e design de barba recomendados. Inclui fotos profissionais de antes e depois.",
    targetAudience: "Quem deseja uma mudança de visual significativa e orientada por um especialista.",
    duration: "2h"
  },
  {
    id: "manutencao-estilo",
    name: "Manutenção de Estilo",
    description: "Serviço rápido focado no acabamento do corte (laterais, pezinho) ou contorno da barba, mantendo o visual alinhado entre os cortes completos.",
    targetAudience: "Clientes frequentes que gostam de manter o visual sempre impecável.",
    duration: "20 min"
  }
];
