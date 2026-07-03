import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://guaaparecido980-alt.github.io/emerson-chemimm-visagista";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // Exemplo
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
