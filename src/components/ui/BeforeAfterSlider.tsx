"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
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

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  // Fallback visual se a imagem falhar ao carregar ou não existir
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
      
      <div
        ref={containerRef}
        className="relative h-[250px] sm:h-[350px] w-full select-none overflow-hidden rounded-xl bg-slate-900 cursor-ew-resize"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* AFTER IMAGE (Background) */}
        {!imageErrorAfter ? (
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            onError={() => setImageErrorAfter(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-tr from-[#071b33] to-[#0a84ff]/20 text-[#f4f7fb] font-semibold">
            DEPOIS (Foto Real)
          </div>
        )}
        <div className="absolute right-4 bottom-4 z-10 rounded bg-[#0a84ff] px-2 py-0.5 text-xs font-bold uppercase text-white shadow-md">
          Depois
        </div>

        {/* BEFORE IMAGE (Clipped overlay) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute inset-y-0 left-0 h-[250px] sm:h-[350px] w-[calc(100vw-32px)] sm:w-[480px] md:w-[600px]">
            {!imageErrorBefore ? (
              <Image
                src={beforeImage}
                alt={beforeAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                onError={() => setImageErrorBefore(true)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-tr from-slate-950 to-slate-800 text-[#a7b0be]">
                ANTES (Foto Real)
              </div>
            )}
          </div>
          <div className="absolute left-4 bottom-4 z-10 rounded bg-slate-800/80 px-2 py-0.5 text-xs font-bold uppercase text-[#a7b0be] backdrop-blur-sm">
            Antes
          </div>
        </div>

        {/* SLIDER HANDLE AND DIVIDER */}
        <div
          className="absolute inset-y-0 z-20 w-0.5 bg-white shadow-lg pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div
            className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-slate-950 text-white shadow-xl transition-transform duration-200 slider-handle ${
              isDragging ? "scale-110 bg-[#0a84ff]" : ""
            }`}
          >
            <MoveLeftRightIcon className="h-4 w-4" />
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-center gap-2 text-xs text-[#a7b0be]">
        <MoveLeftRightIcon className="h-3 w-3 animate-pulse" />
        <span>Arraste o slider para comparar</span>
      </div>
    </div>
  );
}
