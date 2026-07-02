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
    name: "Cliente Verificado",
    content: "Faço meu cabelo aqui e não é fácil achar uma barbearia boa assim. É muito top, você corta do jeito que quiser. Além de tudo, o Emerson e toda a equipe aqui são muito bons. Barbearia muito boa, recomendo para todo mundo.",
    rating: 5,
    service: "Barbearia Clube",
    initials: "CV"
  }
];
