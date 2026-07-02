# CONTENT_MODEL.md — Modelo de Conteúdo

Este documento especifica a estrutura dos arquivos de dados estáticos localizados em `src/data/`, facilitando a edição sem a necessidade de tocar no código de interface do React.

## 1. `src/data/site.ts`
Contém as configurações globais de marca, contato e localização física.

```typescript
export const siteConfig = {
  name: "Emerson Chemimm",
  role: "Barbeiro Visagista",
  instagram: "https://www.instagram.com/emersonchemimm/",
  whatsapp: "[INSERIR_WHATSAPP]", // Ex: "5541999999999"
  googleBusinessProfile: "[INSERIR_LINK]",
  googleMaps: "[INSERIR_LINK]",
  
  // Localização
  location: {
    city: "[INSERIR_CIDADE]", // Ex: "Curitiba"
    neighborhood: "[INSERIR_BAIRRO]", // Ex: "Batel"
    address: "[INSERIR_ENDERECO]", // Ex: "Alameda Dom Pedro II, 123"
    zipCode: "[INSERIR_CEP]",
    latitude: 0,
    longitude: 0
  },
  
  // Horários
  openingHours: [
    { days: "Segunda a Sexta", hours: "09:00 às 20:00" },
    { days: "Sábado", hours: "09:00 às 17:00" }
  ]
};
```

## 2. `src/data/services.ts`
Lista de serviços oferecidos pelo Emerson Chemimm.

```typescript
export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  targetAudience: string;
  duration?: string;
  price?: string; // Mantido como opcional
  highlight?: boolean;
}
```

## 3. `src/data/testimonials.ts`
Depoimentos de clientes satisfeitos (placeholders com dados elegantes prontos para substituição).

```typescript
export interface TestimonialItem {
  id: string;
  name: string;
  role?: string;
  content: string;
  rating: number;
  service: string;
  avatarUrl?: string; // Opcional, ou iniciais
}
```

## 4. `src/data/transformations.ts`
Contém os dados para a seção de sliders interativos de antes/depois.

```typescript
export interface TransformationItem {
  id: string;
  title: string;
  subtitle: string;
  beforeImage: string;
  afterImage: string;
  transformationType: string;
  objective: string;
  description: string;
}
```

## 5. `src/data/gallery.ts`
Grade de portfólio de imagens reais retiradas do Instagram ou capturadas em estúdio.

```typescript
export interface GalleryItem {
  id: string;
  imageUrl: string;
  alt: string;
  category: 'cortes' | 'barbas' | 'antes-depois' | 'transformacoes';
  title?: string;
}
```

## 6. `src/data/faqs.ts`
Lista de perguntas e respostas focadas em resolver objeções de clientes e indexação de SEO.

```typescript
export interface FAQItem {
  question: string;
  answer: string;
}
```
