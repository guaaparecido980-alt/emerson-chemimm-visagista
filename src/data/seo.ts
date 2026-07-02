import { siteConfig } from "./site";

export const seoConfig = {
  defaultTitle: `${siteConfig.name} | ${siteConfig.role}`,
  titleTemplate: `%s | ${siteConfig.name}`,
  description: `Corte masculino, barba e visagismo personalizados para homens que querem uma imagem mais alinhada, confiante e profissional. Agende seu horário com ${siteConfig.name}.`,
  keywords: [
    "barbeiro visagista",
    "visagismo masculino",
    "corte de cabelo masculino personalizado",
    "barba personalizada",
    "consultoria de imagem masculina",
    "barbearia premium",
    "visagista cabelo masculino"
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://emersonchemimm.com.br", // URL final (placeholder)
    siteName: siteConfig.name,
    images: [
      {
        url: "https://emersonchemimm.com.br/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Barbeiro Visagista`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: `Corte masculino, barba e visagismo personalizados para homens que querem uma imagem mais alinhada, confiante e profissional.`,
    images: ["https://emersonchemimm.com.br/images/og-image.jpg"]
  }
};
