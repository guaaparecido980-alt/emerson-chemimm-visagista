"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { getWhatsappUrl } from "@/data/site";

export default function WhatsAppFloatingButton() {
  const whatsappUrl = getWhatsappUrl();

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar atendimento pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#05070a]"
    >
      <MessageSquare className="h-7 w-7 fill-white" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
        <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500"></span>
      </span>
    </a>
  );
}
