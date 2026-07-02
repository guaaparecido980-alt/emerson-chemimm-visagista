import { MetadataRoute } from "next";
import { blogPosts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://emersonchemimm.com.br"; // URL final do site (placeholder)

  // Rotas estáticas básicas
  const staticRoutes = [
    "",
    "/visagismo",
    "/portfolio",
    "/depoimentos",
    "/servicos",
    "/agendamento",
    "/blog",
    "/politica-de-privacidade",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Rotas dinâmicas do blog
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
