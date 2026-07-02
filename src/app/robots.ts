import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://emersonchemimm.com.br"; // URL final do site (placeholder)

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // Exemplo
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
