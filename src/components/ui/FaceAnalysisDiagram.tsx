"use client";

import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

interface Pillar {
  title: string;
  description: string;
}

interface Node {
  x: number;
  y: number;
  side: "left" | "right" | "top" | "bottom";
  labelX: number;
  labelY: number;
}

const NODES: Node[] = [
  { x: 250, y: 96, side: "top", labelX: 250, labelY: 34 },
  { x: 146, y: 292, side: "left", labelX: 40, labelY: 292 },
  { x: 354, y: 210, side: "right", labelX: 460, labelY: 170 },
  { x: 336, y: 430, side: "right", labelX: 460, labelY: 452 },
  { x: 250, y: 566, side: "bottom", labelX: 250, labelY: 616 },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const drawVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

const groupVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const popVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.35 } },
};

const fadeVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function FaceAnalysisDiagram({ pillars }: { pillars: Pillar[] }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full">
      {/* Diagrama — visível em telas médias e grandes */}
      <div className="hidden md:block relative mx-auto max-w-4xl">
        <motion.svg
          viewBox="-170 -20 840 710"
          className="w-full h-auto"
          role="img"
          aria-label="Diagrama ilustrativo de análise facial usada no visagismo"
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          <defs>
            <filter id="faceGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Anel rotativo de fundo */}
          <motion.circle
            cx="250"
            cy="325"
            r="270"
            fill="none"
            stroke="#0a84ff"
            strokeOpacity="0.08"
            strokeWidth="1"
            strokeDasharray="2 10"
            animate={shouldReduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "250px 325px" }}
          />

          {/* Linhas-guia de proporção (regra dos terços) */}
          {[190, 325, 460].map((y) => (
            <motion.line
              key={y}
              x1="70"
              y1={y}
              x2="430"
              y2={y}
              stroke="#0a84ff"
              strokeOpacity="0.15"
              strokeWidth="1"
              strokeDasharray="4 6"
              variants={drawVariants}
            />
          ))}
          <motion.line
            x1="250"
            y1="60"
            x2="250"
            y2="600"
            stroke="#0a84ff"
            strokeOpacity="0.15"
            strokeWidth="1"
            strokeDasharray="4 6"
            variants={drawVariants}
          />

          {/* Contorno do rosto */}
          <motion.path
            d="M250,80 C336,80 372,158 372,258 C372,336 362,398 342,438 C322,478 290,520 250,540 C210,520 178,478 158,438 C138,398 128,336 128,258 C128,158 164,80 250,80 Z"
            fill="none"
            stroke="#f4f7fb"
            strokeWidth="1.5"
            strokeOpacity="0.7"
            variants={drawVariants}
          />

          {/* Linha do cabelo */}
          <motion.path
            d="M172,132 C200,96 300,96 328,132"
            fill="none"
            stroke="#f4f7fb"
            strokeWidth="1.5"
            strokeOpacity="0.7"
            variants={drawVariants}
          />

          {/* Sobrancelhas */}
          <motion.path
            d="M186,258 C202,246 226,246 240,257"
            fill="none"
            stroke="#f4f7fb"
            strokeWidth="1.5"
            strokeOpacity="0.7"
            variants={drawVariants}
          />
          <motion.path
            d="M260,257 C274,246 298,246 314,258"
            fill="none"
            stroke="#f4f7fb"
            strokeWidth="1.5"
            strokeOpacity="0.7"
            variants={drawVariants}
          />

          {/* Olhos */}
          <motion.ellipse
            cx="208" cy="284" rx="16" ry="7"
            fill="none" stroke="#f4f7fb" strokeWidth="1.5" strokeOpacity="0.7"
            variants={drawVariants}
          />
          <motion.ellipse
            cx="292" cy="284" rx="16" ry="7"
            fill="none" stroke="#f4f7fb" strokeWidth="1.5" strokeOpacity="0.7"
            variants={drawVariants}
          />

          {/* Nariz */}
          <motion.path
            d="M250,272 L244,362 C244,372 256,372 256,362"
            fill="none"
            stroke="#f4f7fb"
            strokeWidth="1.5"
            strokeOpacity="0.7"
            variants={drawVariants}
          />

          {/* Boca */}
          <motion.path
            d="M214,402 Q250,416 286,402 M214,402 Q250,428 286,402"
            fill="none"
            stroke="#f4f7fb"
            strokeWidth="1.5"
            strokeOpacity="0.7"
            variants={drawVariants}
          />

          {/* Nós de medição + linhas de chamada + labels */}
          {NODES.map((node, i) => {
            const midX = (node.x + node.labelX) / 2;
            return (
              <motion.g key={i} variants={groupVariants}>
                <motion.line
                  x1={node.x}
                  y1={node.y}
                  x2={node.labelX + (node.side === "left" ? 22 : node.side === "right" ? -22 : 0)}
                  y2={node.labelY}
                  stroke="#0a84ff"
                  strokeWidth="1"
                  strokeOpacity="0.5"
                  variants={drawVariants}
                />
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="5"
                  fill="#05070a"
                  stroke="#0a84ff"
                  strokeWidth="1.5"
                  filter="url(#faceGlow)"
                  variants={popVariants}
                />
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="5"
                  fill="#0a84ff"
                  variants={popVariants}
                  animate={shouldReduceMotion ? undefined : {
                    opacity: [1, 0.3, 1],
                  }}
                  transition={shouldReduceMotion ? undefined : {
                    duration: 2,
                    repeat: Infinity,
                    delay: 1 + 0.15 * i,
                  }}
                />
                <motion.foreignObject
                  x={node.side === "left" ? node.labelX - 190 : node.side === "right" ? node.labelX : midX - 90}
                  y={node.side === "bottom" ? node.labelY - 6 : node.labelY - 30}
                  width={node.side === "top" || node.side === "bottom" ? 180 : 190}
                  height="80"
                  variants={fadeVariants}
                >
                  <div
                    className={`text-xs leading-snug ${
                      node.side === "left" ? "text-right" : node.side === "right" ? "text-left" : "text-center"
                    }`}
                  >
                    <p className="font-heading font-bold text-[#f4f7fb] mb-1">{pillars[i].title}</p>
                    <p className="text-[#a7b0be]">{pillars[i].description}</p>
                  </div>
                </motion.foreignObject>
              </motion.g>
            );
          })}
        </motion.svg>
      </div>

      {/* Versão mobile — lista limpa, sem cards */}
      <div className="md:hidden space-y-6 divide-y divide-[#1e293b]/40">
        {pillars.map((pillar, i) => (
          <div key={pillar.title} className={i === 0 ? "" : "pt-6"}>
            <div className="flex items-center gap-3 mb-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#0a84ff]/50 text-[10px] font-bold text-[#0a84ff]">
                {i + 1}
              </span>
              <h3 className="font-heading text-base font-bold text-[#f4f7fb]">{pillar.title}</h3>
            </div>
            <p className="text-sm text-[#a7b0be] leading-relaxed pl-9">{pillar.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
