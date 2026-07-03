import React from "react";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { faqs } from "@/data/faqs";

export default function SEOJsonLd() {
  const websiteUrl = "https://guaaparecido980-alt.github.io/emerson-chemimm-visagista";

  // Schema 1: LocalBusiness / HairSalon
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": `${websiteUrl}/#barbearia`,
    "name": siteConfig.name,
    "image": `${websiteUrl}/images/og-image.jpg`,
    "telephone": siteConfig.whatsapp !== "[INSERIR_WHATSAPP]" ? siteConfig.whatsapp : undefined,
    "url": websiteUrl,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.location.address !== "[INSERIR_ENDERECO]" ? siteConfig.location.address : "Endereço Pendente",
      "addressLocality": siteConfig.location.city !== "[INSERIR_CIDADE]" ? siteConfig.location.city : "Cidade Pendente",
      "addressRegion": "PR", // Exemplo padrão
      "postalCode": siteConfig.location.zipCode !== "[INSERIR_CEP]" ? siteConfig.location.zipCode : "CEP Pendente",
      "addressCountry": "BR"
    },
    "geo": siteConfig.location.latitude !== 0 ? {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.location.latitude,
      "longitude": siteConfig.location.longitude
    } : undefined,
    "openingHoursSpecification": siteConfig.openingHours.map(oh => {
      // Simplificado para schema markup
      return {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": oh.days.includes("Sábado") ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": oh.days.includes("Sábado") && oh.hours.includes("17:00") ? "17:00" : "20:00"
      };
    }),
    "sameAs": [
      siteConfig.instagram
    ],
    "priceRange": "$$"
  };

  // Schema 2: Person (Emerson Chemimm)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${websiteUrl}/#emerson`,
    "name": siteConfig.name,
    "jobTitle": siteConfig.role,
    "worksFor": {
      "@type": "HairSalon",
      "name": siteConfig.name
    },
    "sameAs": [
      siteConfig.instagram
    ]
  };

  // Schema 3: Services
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Serviços de ${siteConfig.name}`,
    "description": "Serviços de corte de cabelo masculino, design de barba e visagismo.",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        "provider": {
          "@type": "HairSalon",
          "name": siteConfig.name
        }
      }
    }))
  };

  // Schema 4: FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Combined scripts
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
