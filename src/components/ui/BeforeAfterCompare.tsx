"use client";

import React, { useState } from "react";
import Image from "next/image";
import { withBasePath } from "@/lib/paths";

interface BeforeAfterCompareProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  title?: string;
  subtitle?: string;
}

export default function BeforeAfterCompare({
  beforeImage,
  afterImage,
  beforeAlt = "Antes",
  afterAlt = "Depois",
  title,
  subtitle,
}: BeforeAfterCompareProps) {
  const [position, setPosition] = useState(50);
  const [imageErrorBefore, setImageErrorBefore] = useState(false);
  const [imageErrorAfter, setImageErrorAfter] = useState(false);

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-[#1e293b] bg-[#0d121f] p-4">
      {title && (
        <div className="mb-4">
          <h3 className="font-heading text-lg font-bold text-[#f4f7fb]">{title}</h3>
          {subtitle && <p className="text-xs text-[#a7b0be]">{subtitle}</p>}
        </div>
      )}

      <div className="relative h-[280px] sm:h-[400px] w-full select-none overflow-hidden rounded-xl bg-slate-900 touch-none">
        {/* DEPOIS — fundo, ocupa 100% */}
        {!imageErrorAfter ? (
          <Image
            src={withBasePath(afterImage)}
            alt={afterAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
            onError={() => setImageErrorAfter(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-tr from-[#071b33] to-[#0a84ff]/20 text-center text-sm font-semibold text-[#f4f7fb] px-4">
            Foto do resultado em atualização
          </div>
        )}
        <div className="absolute right-4 bottom-4 z-10 rounded bg-[#0a84ff] px-2 py-0.5 text-xs font-bold uppercase text-white shadow-md">
          Depois
        </div>

        {/* ANTES — recortado via clip-path, mesmo tamanho do container */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          {!imageErrorBefore ? (
            <Image
              src={withBasePath(beforeImage)}
              alt={beforeAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              onError={() => setImageErrorBefore(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-tr from-slate-950 to-slate-800 text-center text-sm text-[#a7b0be] px-4">
              Foto original em atualização
            </div>
          )}
          <div className="absolute left-4 bottom-4 z-10 rounded bg-slate-800/80 px-2 py-0.5 text-xs font-bold uppercase text-[#a7b0be] backdrop-blur-sm">
            Antes
          </div>
        </div>

        {/* Linha divisória + alça (puramente visual, segue o input) */}
        <div
          className="absolute inset-y-0 z-20 w-0.5 bg-white shadow-lg pointer-events-none"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-slate-950 text-white shadow-xl">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18-6-6 6-6" />
              <path d="m15 6 6 6-6 6" />
            </svg>
          </div>
        </div>

        {/* Input nativo — controla tudo, acessível por teclado por padrão */}
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label={`Comparar antes e depois${title ? `: ${title}` : ""}`}
          className="absolute inset-0 z-30 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
        />
      </div>
      <div className="mt-3 flex items-center justify-center gap-2 text-xs text-[#a7b0be]">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
          <path d="m9 18-6-6 6-6" />
          <path d="m15 6 6 6-6 6" />
        </svg>
        <span>Arraste para comparar</span>
      </div>
    </div>
  );
}
