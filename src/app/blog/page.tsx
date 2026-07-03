import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import PremiumCard from "@/components/ui/PremiumCard";
import { blogPosts } from "@/data/posts";
import { siteUrl } from "@/data/seo";

export const metadata: Metadata = {
  title: "Blog - Dicas de Visagismo Masculino",
  description: "Aprenda sobre visagismo masculino, como escolher o corte de cabelo ideal para o seu formato de rosto, cuidados com a barba e muito mais.",
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <div className="bg-[#05070a] pt-32 pb-24 min-h-[85vh]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <AnimatedContainer delay={0.1}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="mb-4 inline-block rounded-full bg-[#071b33] border border-[#0a84ff]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0a84ff]">
                Conteúdo & Conhecimento
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-[#f4f7fb] mb-6">
                Blog do Emerson Chemimm
              </h1>
              <p className="text-base sm:text-lg text-[#a7b0be] leading-relaxed">
                Artigos técnicos, dicas práticas de estilização e guias completos sobre visagismo e imagem masculina.
              </p>
            </div>
          </AnimatedContainer>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <AnimatedContainer
                key={post.slug}
                delay={0.15 * (idx + 1)}
                className="flex h-full"
              >
                <PremiumCard className="w-full flex flex-col justify-between p-6 border border-[#1e293b]/50">
                  <div>
                    {/* Visual Placeholder for Blog Thumbnail */}
                    <div className="relative aspect-[16/9] w-full rounded-lg bg-gradient-to-tr from-[#071b33] to-[#0a84ff]/20 overflow-hidden mb-6 flex items-center justify-center">
                      <span className="text-xs uppercase tracking-widest text-[#0a84ff] font-semibold">Artigo Técnico</span>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-[#a7b0be] mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-heading text-lg font-bold text-[#f4f7fb] mb-3 line-clamp-2 hover:text-[#0a84ff] transition-colors duration-200">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-xs md:text-sm text-[#a7b0be] leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs md:text-sm font-extrabold text-[#0a84ff] hover:text-white transition-colors duration-200"
                  >
                    Ler artigo completo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </PremiumCard>
              </AnimatedContainer>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
