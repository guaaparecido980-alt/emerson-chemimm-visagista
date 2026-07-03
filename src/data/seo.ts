import { siteConfig, hasCity } from "./site";

export const siteUrl = "https://guaaparecido980-alt.github.io/emerson-chemimm-visagista";

const titleBase = hasCity
  ? `${siteConfig.name} | ${siteConfig.role} em ${siteConfig.location.city}`
  : `${siteConfig.name} | ${siteConfig.role}`;

export const seoConfig = {
  defaultTitle: titleBase,
  titleTemplate: `%s | ${siteConfig.name}`,
  description: `Corte masculino, barba e visagismo com atendimento personalizado para homens que querem uma imagem mais alinhada, natural e profissional. Agende com ${siteConfig.name}.`,
  keywords: [
    "barbeiro visagista",
    "visagismo masculino",
    "corte de cabelo masculino personalizado",
    "barba personalizada",
    "consultoria de imagem masculina",
    ...(hasCity ? [`barbeiro visagista em ${siteConfig.location.city}`] : []),
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.role}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: titleBase,
    description: `Corte masculino, barba e visagismo com atendimento personalizado para homens que querem uma imagem mais alinhada, natural e profissional.`,
    images: [`${siteUrl}/images/og-image.jpg`]
  }
};
