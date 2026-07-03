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

      <div className="grid grid-cols-2 gap-2">
        {/* ANTES */}
        <div className="relative h-[220px] sm:h-[320px] w-full overflow-hidden rounded-xl bg-slate-900">
          {!imageErrorBefore ? (
            <Image
              src={withBasePath(beforeImage)}
              alt={beforeAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
              loading="lazy"
              onError={() => setImageErrorBefore(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-tr from-slate-950 to-slate-800 text-center text-xs text-[#a7b0be] px-3">
              Foto original em atualização
            </div>
          )}
          <div className="absolute left-3 bottom-3 z-10 rounded bg-slate-800/80 px-2 py-0.5 text-xs font-bold uppercase text-[#a7b0be] backdrop-blur-sm">
            Antes
          </div>
        </div>

        {/* DEPOIS */}
        <div className="relative h-[220px] sm:h-[320px] w-full overflow-hidden rounded-xl bg-slate-900">
          {!imageErrorAfter ? (
            <Image
              src={withBasePath(afterImage)}
              alt={afterAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
              loading="lazy"
              onError={() => setImageErrorAfter(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-tr from-[#071b33] to-[#0a84ff]/20 text-center text-xs font-semibold text-[#f4f7fb] px-3">
              Foto do resultado em atualização
            </div>
          )}
          <div className="absolute right-3 bottom-3 z-10 rounded bg-[#0a84ff] px-2 py-0.5 text-xs font-bold uppercase text-white shadow-md">
            Depois
          </div>
        </div>
      </div>
    </div>
  );
}
