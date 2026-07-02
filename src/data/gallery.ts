export interface GalleryItem {
  id: string;
  imageUrl: string;
  alt: string;
  category: "cortes" | "barbas" | "antes-depois" | "transformacoes";
  title?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g-1",
    imageUrl: "/images/gallery/corte-1.jpg",
    alt: "Corte de cabelo masculino clássico com risca lateral bem definida",
    category: "cortes",
    title: "Clássico Alinhado"
  },
  {
    id: "g-2",
    imageUrl: "/images/gallery/corte-2.jpg",
    alt: "Corte social masculino com volume texturizado para visual executivo",
    category: "cortes",
    title: "Social Executivo"
  },
  {
    id: "g-3",
    imageUrl: "/images/gallery/corte-3.jpg",
    alt: "Corte moderno com textura natural e topo desconectado das laterais",
    category: "cortes",
    title: "Textura Moderna"
  },
  {
    id: "g-4",
    imageUrl: "/images/gallery/corte-4.jpg",
    alt: "Corte masculino curto e alinhado finalizado na barbearia",
    category: "cortes",
    title: "Curto Alinhado"
  },
  {
    id: "g-5",
    imageUrl: "/images/gallery/barba-1.jpg",
    alt: "Barba curta desenhada com linhas limpas e proporção facial",
    category: "barbas",
    title: "Beard Design Slim"
  },
  {
    id: "g-6",
    imageUrl: "/images/gallery/barba-2.jpg",
    alt: "Barba cheia grisalha aparada e alinhada com técnica de proporção",
    category: "barbas",
    title: "Barba Cheia Alinhada"
  },
  {
    id: "g-7",
    imageUrl: "/images/gallery/barba-3.jpg",
    alt: "Barba cheia bem aparada com acabamento uniforme",
    category: "barbas",
    title: "Barba Cheia Uniforme"
  },
  {
    id: "g-8",
    imageUrl: "/images/gallery/barba-4.jpg",
    alt: "Bastidor do atendimento de barba com toalha quente na barbearia",
    category: "barbas",
    title: "Ritual da Toalha Quente"
  },
  {
    id: "g-9",
    imageUrl: "/images/transformations/after-1.jpg",
    alt: "Resultado de transformação de visagismo masculino, corte e barba desenhada",
    category: "transformacoes",
    title: "Transformação Completa"
  },
  {
    id: "g-10",
    imageUrl: "/images/transformations/after-2.jpg",
    alt: "Resultado de corte e barba finalizados com visagismo aplicado",
    category: "transformacoes",
    title: "Alinhamento Casual"
  }
];
