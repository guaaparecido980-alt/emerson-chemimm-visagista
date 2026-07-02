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
    alt: "Corte de cabelo masculino texturizado com degradê sutil",
    category: "cortes",
    title: "Texturizado Moderno"
  },
  {
    id: "g-2",
    imageUrl: "/images/gallery/corte-2.jpg",
    alt: "Corte clássico masculino social bem alinhado",
    category: "cortes",
    title: "Clássico Executivo"
  },
  {
    id: "g-3",
    imageUrl: "/images/gallery/barba-1.jpg",
    alt: "Barba masculina desenhada com linhas limpas na navalha",
    category: "barbas",
    title: "Beard Design Slim"
  },
  {
    id: "g-4",
    imageUrl: "/images/gallery/barba-2.jpg",
    alt: "Barba cheia e aparada com técnica de proporção facial",
    category: "barbas",
    title: "Barba Cheia Alinhada"
  },
  {
    id: "g-5",
    imageUrl: "/images/transformations/after-1.jpg",
    alt: "Antes e depois de transformação de visagismo masculino",
    category: "transformacoes",
    title: "Transformação Corporativa"
  },
  {
    id: "g-6",
    imageUrl: "/images/transformations/after-2.jpg",
    alt: "Mudança de estilo com visagismo de cabelo e barba",
    category: "transformacoes",
    title: "Alinhamento Casual"
  }
];
