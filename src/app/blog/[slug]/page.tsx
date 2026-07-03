import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, MessageSquare } from "lucide-react";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import PremiumCard from "@/components/ui/PremiumCard";
import { blogPosts } from "@/data/posts";
import { getWhatsappUrl } from "@/data/site";
import { siteUrl } from "@/data/seo";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Artigo Não Encontrado",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const whatsappUrl = getWhatsappUrl();

  return (
    <>
      <Header />
      <article className="bg-[#05070a] pt-32 pb-24 min-h-screen">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          
          {/* Voltar ao Blog */}
          <AnimatedContainer delay={0.1}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-[#a7b0be] hover:text-[#0a84ff] mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para o blog
            </Link>
          </AnimatedContainer>

          {/* Cabeçalho do Post */}
          <AnimatedContainer delay={0.15}>
            <div className="mb-8">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#f4f7fb] leading-tight mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-xs md:text-sm text-[#a7b0be] border-b border-[#1e293b]/40 pb-6">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </AnimatedContainer>

          {/* Placeholder de Imagem Destacada */}
          <AnimatedContainer delay={0.2}>
            <div className="relative aspect-[21/9] w-full rounded-2xl bg-gradient-to-tr from-[#071b33] to-[#0a84ff]/20 overflow-hidden mb-10 flex items-center justify-center border border-[#1e293b]/50">
              <span className="text-xs uppercase tracking-widest text-[#0a84ff] font-extrabold">Ilustração do Artigo</span>
            </div>
          </AnimatedContainer>

          {/* Conteúdo do Artigo */}
          <AnimatedContainer delay={0.25}>
            <div 
              className="prose prose-invert max-w-none text-sm md:text-base text-[#a7b0be] space-y-6 leading-relaxed mb-16
                prose-headings:font-heading prose-headings:font-bold prose-headings:text-[#f4f7fb]
                prose-h3:text-xl prose-h3:pt-4
                prose-h4:text-lg prose-h4:pt-2
                prose-strong:text-[#f4f7fb] prose-strong:font-bold
                prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </AnimatedContainer>

          {/* FAQs do Artigo */}
          {post.faqs.length > 0 && (
            <AnimatedContainer delay={0.3} className="border-t border-[#1e293b]/40 pt-10 mb-16">
              <h2 className="font-heading text-xl md:text-2xl font-bold text-[#f4f7fb] mb-6">
                Perguntas Frequentes sobre o Tema
              </h2>
              <div className="space-y-4">
                {post.faqs.map((faq, i) => (
                  <PremiumCard key={i} className="p-5" glow={false}>
                    <h3 className="font-heading text-sm md:text-base font-extrabold text-[#f4f7fb] mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-xs md:text-sm text-[#a7b0be] leading-relaxed">
                      {faq.answer}
                    </p>
                  </PremiumCard>
                ))}
              </div>
            </AnimatedContainer>
          )}

          {/* CTA do Artigo */}
          <AnimatedContainer delay={0.35}>
            <PremiumCard className="p-8 text-center border border-[#0a84ff]/30 bg-[#071b33]/20" glow={true}>
              <h3 className="font-heading text-xl md:text-2xl font-extrabold text-[#f4f7fb] mb-4">
                Quer aplicar essas técnicas no seu visual?
              </h3>
              <p className="text-xs md:text-sm text-[#a7b0be] leading-relaxed mb-8 max-w-xl mx-auto">
                Agende um horário para uma análise de visagismo completa e saia com o corte e barba ideais para o seu rosto.
              </p>
              <a
                href={`${whatsappUrl}?text=Olá,%20li%20o%20artigo%20sobre%20${encodeURIComponent(post.title)}%20e%20gostaria%20de%20agendar%20um%20horário.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl bg-[#0a84ff] px-8 py-3.5 text-sm md:text-base font-bold text-white hover:bg-[#007bff] transition-colors duration-200"
              >
                <MessageSquare className="h-5 w-5" />
                Agendar com Emerson
              </a>
            </PremiumCard>
          </AnimatedContainer>

        </div>
      </article>
      <Footer />
    </>
  );
}
