export interface TransformationItem {
  id: string;
  title: string;
  beforeImage: string; // Ex: "/images/before-1.jpg"
  afterImage: string; // Ex: "/images/after-1.jpg"
  transformationType: string;
  objective: string;
  description: string;
}

export const transformations: TransformationItem[] = [
  {
    id: "trans-1",
    title: "Barba Cheia Redesenhada",
    beforeImage: "/images/transformations/before-1.jpg",
    afterImage: "/images/transformations/after-1.jpg",
    transformationType: "Redesenho de Barba",
    objective: "Alinhar as linhas da barba à estrutura do rosto",
    description: "Barba volumosa sem contorno definido foi aparada e desenhada com navalha, criando linhas mais retas no maxilar e destacando os traços do rosto."
  },
  {
    id: "trans-2",
    title: "Renovação de Corte e Barba",
    beforeImage: "/images/transformations/before-2.jpg",
    afterImage: "/images/transformations/after-2.jpg",
    transformationType: "Corte + Barba",
    objective: "Visual mais leve e cuidado no dia a dia",
    description: "Cabelo e barba sem manutenção foram reestruturados na mesma sessão, trazendo mais leveza ao visual e um acabamento muito mais cuidado."
  },
  {
    id: "trans-3",
    title: "Renovação Completa de Visual",
    beforeImage: "/images/transformations/before-3.jpg",
    afterImage: "/images/transformations/after-3.jpg",
    transformationType: "Corte + Barba",
    objective: "Visual mais moderno e alinhado ao rosto",
    description: "Cabelo e barba renovados por completo, trazendo um contorno mais definido e um visual mais atual."
  }
];
