"use client";

import React from "react";
import { Star } from "lucide-react";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import PremiumCard from "@/components/ui/PremiumCard";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site";

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="relative py-20 md:py-28 bg-[#05070a] overflow-hidden border-t border-[#1e293b]/30">
      <div className="neon-glow-1 bottom-[10%] right-[-10%]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContainer delay={0.1}>
          <SectionTitle
            badge="Depoimentos"
            title="O resultado aparece no espelho. A confiança aparece nos depoimentos."
            subtitle="Veja o que dizem alguns dos clientes que passaram pelo processo de alinhamento visual de imagem."
          />
        </AnimatedContainer>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-md md:max-w-none mx-auto">
          {testimonials.map((test, idx) => (
            <AnimatedContainer
              key={test.id}
              delay={0.1 * (idx + 1)}
              className="h-full flex"
            >
              <PremiumCard className="w-full flex flex-col justify-between p-6">
                <div>
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-sm md:text-base text-[#f4f7fb]/90 italic leading-relaxed mb-6">
                    &ldquo;{test.content}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-[#1e293b]/40 pt-4 mt-auto">
                  {/* Avatar Initials */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#071b33] border border-[#0a84ff]/30 text-xs font-bold text-[#0a84ff]">
                    {test.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#f4f7fb]">
                      {test.name}
                    </h4>
                    <p className="text-[10px] text-[#a7b0be] uppercase tracking-wider">
                      {test.role && `${test.role} • `}
                      <span className="text-[#0a84ff]/80">{test.service}</span>
                    </p>
                  </div>
                </div>
              </PremiumCard>
            </AnimatedContainer>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-[#a7b0be]">
            Depoimento real de cliente, com identidade preservada. Mais relatos em vídeo disponíveis no{" "}
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0a84ff] hover:underline"
            >
              Instagram
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
