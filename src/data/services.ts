export type ServiceIcon = "scissors" | "razor" | "combo" | "sparkles" | "repeat";

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  targetAudience: string;
  icon: ServiceIcon;
  highlight?: boolean;
}

export const services: ServiceItem[] = [
  {
    id: "corte-visagismo",
    name: "Corte Masculino com Visagismo",
    description: "Antes de cortar, observo o formato do rosto, o caimento do cabelo e a rotina do cliente para definir o corte que faz mais sentido.",
    targetAudience: "Homens que buscam um corte sob medida para valorizar seus traços naturais e estilo de vida.",
    icon: "scissors",
    highlight: true
  },
  {
    id: "barba-personalizada",
    name: "Barba Alinhada ao Rosto",
    description: "Alinhamento e desenho da barba respeitando as proporções do rosto, com acabamento na navalha.",
    targetAudience: "Homens com barba que desejam mais simetria e um contorno bem definido.",
    icon: "razor",
  },
  {
    id: "corte-barba",
    name: "Corte + Barba",
    description: "Cabelo e barba alinhados na mesma sessão, pensados como um visual único.",
    targetAudience: "Quem quer renovar cabelo e barba de uma vez, com resultado coeso.",
    icon: "combo",
    highlight: true
  },
  {
    id: "transformacao-completa",
    name: "Transformação de Visual",
    description: "Sessão de diagnóstico seguida da execução do novo corte e barba recomendados.",
    targetAudience: "Quem deseja uma mudança de visual mais significativa, orientada por um especialista.",
    icon: "sparkles",
  },
  {
    id: "manutencao-estilo",
    name: "Manutenção de Corte e Barba",
    description: "Acabamento rápido nas laterais, pezinho ou contorno da barba, mantendo o visual alinhado entre os cortes completos.",
    targetAudience: "Clientes frequentes que gostam de manter o visual sempre em dia.",
    icon: "repeat",
  }
];
