export interface TestimonialItem {
  id: string;
  name: string;
  role?: string;
  content: string;
  rating: number;
  service: string;
  initials: string;
}

export const testimonials: TestimonialItem[] = [
  {
    id: "depoimento-1",
    name: "Substituir por Depoimento Real",
    role: "Advogado",
    content: "Excelente atendimento. O Emerson fez uma análise visual antes de cortar que eu nunca tinha visto em outra barbearia. O corte realmente se adaptou ao formato do meu rosto e me deu mais segurança profissional.",
    rating: 5,
    service: "Corte com Visagismo",
    initials: "SR"
  },
  {
    id: "depoimento-2",
    name: "Substituir por Depoimento Real",
    role: "Empresário",
    content: "Minha barba sempre parecia desalinhada, não importava onde eu fizesse. O Emerson explicou sobre a proporção da minha mandíbula e desenhou a barba de um jeito que valorizou muito mais meu queixo. Sensacional.",
    rating: 5,
    service: "Corte + Barba Premium",
    initials: "SR"
  },
  {
    id: "depoimento-3",
    name: "Substituir por Depoimento Real",
    role: "Consultor de Vendas",
    content: "Mudança total de visual. Eu usava o mesmo corte há 10 anos e tinha medo de mudar. A consultoria me deu a certeza de qual caminho seguir. Hoje me sinto muito mais confiante e recebi muitos elogios.",
    rating: 5,
    service: "Transformação Completa",
    initials: "SR"
  }
];
