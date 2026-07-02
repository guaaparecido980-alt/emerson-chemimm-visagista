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
    title: "Caso de Sucesso 1",
    beforeImage: "/images/transformations/before-1.jpg",
    afterImage: "/images/transformations/after-1.jpg",
    transformationType: "Harmonização de Imagem",
    objective: "Projetar mais autoridade e profissionalismo",
    description: "Corte adaptado para afinar as laterais do rosto redondo e barba desenhada para alongar o queixo, criando linhas mais retas e masculinas."
  },
  {
    id: "trans-2",
    title: "Caso de Sucesso 2",
    beforeImage: "/images/transformations/before-2.jpg",
    afterImage: "/images/transformations/after-2.jpg",
    transformationType: "Adequação de Estilo",
    objective: "Visual moderno e leve para o dia a dia",
    description: "Redução do volume excessivo no topo com gradiente sutil nas laterais, acompanhado de barba aparada para realçar o maxilar."
  }
];
