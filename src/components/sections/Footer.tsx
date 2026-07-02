"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, MapPin, Clock, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappUrl = siteConfig.whatsapp === "[INSERIR_WHATSAPP]"
    ? "https://wa.me/"
    : `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`;

  return (
    <footer className="bg-[#05070a] border-t border-[#1e293b]/40 text-[#a7b0be] pt-16 pb-8 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#1e293b]/40">
          
          {/* Logo & Description */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex flex-col mb-4">
              <span className="font-heading text-xl font-extrabold uppercase tracking-widest text-[#f4f7fb]">
                {siteConfig.name}
              </span>
              <span className="text-xs tracking-wider text-[#0a84ff] uppercase font-semibold">
                {siteConfig.role}
              </span>
            </Link>
            <p className="text-xs md:text-sm leading-relaxed max-w-sm mb-6">
              Gestão de imagem masculina e visagismo avançado. Cabelo, barba e estilo desenhados sob medida de acordo com as proporções do seu rosto.
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Oficial"
                className="rounded-full bg-[#0d121f] border border-[#1e293b] p-2.5 text-[#f4f7fb] hover:text-[#0a84ff] hover:border-[#0a84ff]/50 transition-colors duration-200"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar via WhatsApp"
                className="rounded-full bg-[#0d121f] border border-[#1e293b] p-2.5 text-[#f4f7fb] hover:text-[#0a84ff] hover:border-[#0a84ff]/50 transition-colors duration-200"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h4 className="font-heading text-sm font-bold text-[#f4f7fb] uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-3 text-xs md:text-sm">
              <li>
                <Link href="/#inicio" className="hover:text-[#0a84ff] transition-colors duration-200">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/#visagismo" className="hover:text-[#0a84ff] transition-colors duration-200">
                  Visagismo
                </Link>
              </li>
              <li>
                <Link href="/#transformacoes" className="hover:text-[#0a84ff] transition-colors duration-200">
                  Transformações
                </Link>
              </li>
              <li>
                <Link href="/#servicos" className="hover:text-[#0a84ff] transition-colors duration-200">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="hover:text-[#0a84ff] transition-colors duration-200">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>

          {/* Horários */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h4 className="font-heading text-sm font-bold text-[#f4f7fb] uppercase tracking-wider mb-4">
              Horários
            </h4>
            <ul className="space-y-3 text-xs md:text-sm">
              {siteConfig.openingHours.map((oh, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Clock className="h-4.5 w-4.5 text-[#0a84ff] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#f4f7fb]">{oh.days}</p>
                    <p className="text-[11px] text-[#a7b0be]">{oh.hours}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato & Localização */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h4 className="font-heading text-sm font-bold text-[#f4f7fb] uppercase tracking-wider mb-4">
              Contato
            </h4>
            <ul className="space-y-3 text-xs md:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-[#0a84ff] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {siteConfig.location.address !== "[INSERIR_ENDERECO]" ? siteConfig.location.address : "Endereço Físico"}
                  {siteConfig.location.neighborhood !== "[INSERIR_BAIRRO]" && `, ${siteConfig.location.neighborhood}`}
                  {siteConfig.location.city !== "[INSERIR_CIDADE]" && ` - ${siteConfig.location.city}`}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4.5 w-4.5 text-[#0a84ff] shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0a84ff] transition-colors duration-200"
                >
                  {siteConfig.whatsapp !== "[INSERIR_WHATSAPP]" ? siteConfig.whatsapp : "WhatsApp Pendente"}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-xs gap-4 text-[#a7b0be]/60">
          <p>
            &copy; {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/politica-de-privacidade" className="hover:text-white transition-colors duration-200">
              Política de Privacidade
            </Link>
            <span>
              Site desenvolvido por <a href="https://gustavodigital.dev" target="_blank" rel="noopener noreferrer" className="hover:text-[#0a84ff] font-semibold text-[#a7b0be]/80">Gustavo Digital</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
