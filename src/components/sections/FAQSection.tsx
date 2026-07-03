"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import { faqs } from "@/data/faqs";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 md:py-28 bg-[#05070a] overflow-hidden border-t border-[#1e293b]/30">
      <div className="neon-glow-1 top-[10%] left-[-15%]" />
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContainer delay={0.1}>
          <SectionTitle
            badge="Dúvidas Frequentes"
            title="Perguntas Frequentes"
            subtitle="Tire suas dúvidas sobre o funcionamento do visagismo masculino, agendamento de horários e a dinâmica de atendimento."
          />
        </AnimatedContainer>

        <div className="mt-8 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-question-${idx}`;
            const panelId = `faq-answer-${idx}`;

            return (
              <AnimatedContainer
                key={idx}
                delay={0.05 * (idx + 1)}
                className="w-full"
              >
                <div className="overflow-hidden rounded-xl border border-[#1e293b] bg-[#0d121f]/50 backdrop-blur-sm transition-all duration-300">
                  <h3>
                    <button
                      id={buttonId}
                      onClick={() => toggleAccordion(idx)}
                      className="flex w-full items-center justify-between p-5 text-left font-heading text-base font-bold text-[#f4f7fb] hover:bg-[#071b33]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0a84ff] transition-colors duration-200"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span>{faq.question}</span>
                      <span className="ml-4 shrink-0 rounded-full border border-slate-700 p-1 text-[#0a84ff]">
                        {isOpen ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="border-t border-[#1e293b]/40 p-5 text-sm md:text-base text-[#a7b0be] leading-relaxed bg-[#0d121f]/20">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
