"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, getWhatsappUrl } from "@/data/site";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/#inicio" },
    { name: "Visagismo", href: "/#visagismo" },
    { name: "Transformações", href: "/#transformacoes" },
    { name: "Serviços", href: "/#servicos" },
    { name: "Sobre", href: "/#sobre" },
    { name: "FAQ", href: "/#faq" },
  ];

  const whatsappUrl = getWhatsappUrl();

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#05070a]/80 backdrop-blur-md border-b border-[#1e293b]/50 py-4 shadow-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="flex flex-col">
              <span className="font-heading text-lg md:text-xl font-extrabold uppercase tracking-widest text-[#f4f7fb]">
                {siteConfig.name}
              </span>
              <span className="text-[10px] md:text-xs tracking-wider text-[#0a84ff] uppercase font-semibold">
                {siteConfig.role}
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[#a7b0be] hover:text-[#0a84ff] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* DESKTOP CTA */}
            <div className="hidden md:block">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0a84ff] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#0a84ff]/20 hover:bg-[#007bff] hover:shadow-xl hover:shadow-[#0a84ff]/30 active:scale-95 transition-all duration-200"
              >
                Agendar horário
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden rounded-lg p-2 text-[#f4f7fb] hover:bg-slate-900 focus:outline-none"
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-30 bg-[#05070a] pt-24 px-6 md:hidden flex flex-col justify-between pb-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-heading text-2xl font-semibold text-[#f4f7fb] hover:text-[#0a84ff] active:text-[#0a84ff]"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#0a84ff] py-4 text-center text-base font-bold text-white shadow-lg"
              >
                Agendar Horário
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-center text-sm text-[#a7b0be] hover:text-white"
              >
                Acompanhar no Instagram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
