import React from "react";
import {
  siteConfig,
  hasAddress,
  hasCity,
  hasZipCode,
  hasCoordinates,
  hasWhatsapp,
  hasGoogleBusinessProfile,
} from "@/data/site";
import { services } from "@/data/services";
import { faqs } from "@/data/faqs";
import { siteUrl as websiteUrl } from "@/data/seo";

export default function SEOJsonLd() {
  // Schema: WebSite
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${websiteUrl}/#website`,
    name: siteConfig.name,
    url: websiteUrl,
    inLanguage: "pt-BR",
  };

  // Schema: Person (Emerson Chemimm)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${websiteUrl}/#emerson`,
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: websiteUrl,
    sameAs: [siteConfig.instagram],
  };

  // Schema: Service (lista de serviços)
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Serviços de ${siteConfig.name}`,
    description: "Serviços de corte de cabelo masculino, design de barba e visagismo.",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
          "@type": "Person",
          name: siteConfig.name,
        },
      },
    })),
  };

  // Schema: FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // Schema: HairSalon — só é montado com dados que existem de verdade.
  // Sem endereço confirmado, não publicamos LocalBusiness (evita dado falso no Google).
  const sameAs = [siteConfig.instagram];
  if (hasGoogleBusinessProfile) sameAs.push(siteConfig.googleBusinessProfile);

  const hairSalonSchema = hasAddress || hasCity
    ? {
        "@context": "https://schema.org",
        "@type": "HairSalon",
        "@id": `${websiteUrl}/#barbearia`,
        name: siteConfig.name,
        image: `${websiteUrl}/images/og-image.jpg`,
        url: websiteUrl,
        ...(hasWhatsapp ? { telephone: siteConfig.whatsapp } : {}),
        address: {
          "@type": "PostalAddress",
          ...(hasAddress ? { streetAddress: siteConfig.location.address } : {}),
          ...(hasCity ? { addressLocality: siteConfig.location.city } : {}),
          ...(hasZipCode ? { postalCode: siteConfig.location.zipCode } : {}),
          addressCountry: "BR",
        },
        ...(hasCoordinates
          ? {
              geo: {
                "@type": "GeoCoordinates",
                latitude: siteConfig.location.latitude,
                longitude: siteConfig.location.longitude,
              },
            }
          : {}),
        openingHoursSpecification: siteConfig.openingHours.map((oh) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: oh.days.includes("Sábado")
            ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: oh.days.includes("Sábado") && oh.hours.includes("17:00") ? "17:00" : "20:00",
        })),
        sameAs,
        priceRange: "$$",
      }
    : null;

  const schemas = [websiteSchema, personSchema, servicesSchema, faqSchema, hairSalonSchema].filter(Boolean);

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
