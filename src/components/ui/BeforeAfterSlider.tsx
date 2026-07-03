"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { withBasePath } from "@/lib/paths";

const MoveLeftRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="m9 18-6-6 6-6" />
    <path d="m15 6 6 6-6 6" />
  </svg>
);

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  title?: string;
  subtitle?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Antes",
  afterAlt = "Depois",
  title,
  subtitle,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageErrorBefore, setImageErrorBefore] = useState(false);
  const [imageErrorAfter, setImageErrorAfter] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, ratio)));
  }, []);

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      updateFromClientX(e.clientX);
    },
    [updateFromClientX]
  );

  const stopDragging = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    if (!isDragging) return;
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", stopDragging);
    window.addEventListener("pointercancel", stopDragging);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", stopDragging);
      window.removeEventListener("pointercancel", stopDragging);
    };
  }, [isDragging, handlePointerMove, stopDragging]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    updateFromClientX(e.clientX);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSliderPosition((p) => Math.max(0, p - 5));
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setSliderPosition((p) => Math.min(100, p + 5));
    }
    if (e.key === "Home") {
      e.preventDefault();
      setSliderPosition(0);
    }
    if (e.key === "End") {
      e.preventDefault();
      setSliderPosition(100);
    }
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-[#1e293b] bg-[#0d121f] p-4">
      {title && (
        <div className="mb-4">
          <h3 className="font-heading text-lg font-bold text-[#f4f7fb]">{title}</h3>
          {subtitle && <p className="text-xs text-[#a7b0be]">{subtitle}</p>}
        </div>
      )}

      <div
        ref={containerRef}
        className="relative h-[250px] sm:h-[350px] w-full select-none overflow-hidden rounded-xl bg-slate-900 cursor-ew-resize"
        style={{ touchAction: isDragging ? "none" : "pan-y" }}
        onPointerDown={handlePointerDown}
      >
        {/* AFTER IMAGE (fundo, sempre 100% do container) */}
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

        {/* BEFORE IMAGE (mesmo tamanho do container, recortado por clip-path) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
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

        {/* SLIDER HANDLE AND DIVIDER */}
        <div
          className="absolute inset-y-0 z-20 w-0.5 bg-white shadow-lg pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <button
            type="button"
            role="slider"
            aria-label={`Comparar antes e depois${title ? `: ${title}` : ""}`}
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuetext={`${Math.round(sliderPosition)}% revelado`}
            onKeyDown={handleKeyDown}
            className={`pointer-events-auto absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-slate-950 text-white shadow-xl transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a84ff] slider-handle ${
              isDragging ? "scale-110 bg-[#0a84ff]" : ""
            }`}
          >
            <MoveLeftRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-center gap-2 text-xs text-[#a7b0be]">
        <MoveLeftRightIcon className="h-3 w-3 animate-pulse" />
        <span>Arraste o slider para comparar</span>
      </div>
    </div>
  );
}
