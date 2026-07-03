"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems, GalleryItem } from "@/data/gallery";
import { withBasePath } from "@/lib/paths";

export default function LightboxGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("todos");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = [
    { id: "todos", name: "Todos" },
    { id: "cortes", name: "Cortes" },
    { id: "barbas", name: "Barbas" },
    { id: "transformacoes", name: "Transformações" },
  ];

  // Filtragem dos itens
  const filteredItems = activeCategory === "todos"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (item: GalleryItem) => {
    // Acha o index no array filtrado
    const idx = filteredItems.findIndex(x => x.id === item.id);
    setSelectedImageIndex(idx !== -1 ? idx : null);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="w-full">
      {/* Botões de Categoria */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`rounded-full px-5 py-2 text-xs md:text-sm font-medium transition-all duration-300 ${
              activeCategory === cat.id
                ? "bg-[#0a84ff] text-white shadow-lg shadow-[#0a84ff]/20"
                : "bg-[#0d121f] text-[#a7b0be] border border-[#1e293b] hover:bg-slate-800 hover:text-white"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Grid do Portfólio */}
      <motion.div 
        layout
        className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-xl border border-[#1e293b] bg-slate-900 shadow-md"
            >
              {/* Fallback de cor se falhar */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#05070a] to-[#071b33] flex items-center justify-center text-xs text-[#a7b0be]/30 select-none">
                Foto Instagram
              </div>
              
              <Image
                src={withBasePath(item.imageUrl)}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay de hover */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
                <ZoomIn className="absolute top-4 right-4 h-5 w-5 text-white/70" />
                {item.title && (
                  <p className="font-heading text-sm font-bold text-white">{item.title}</p>
                )}
                <p className="text-[10px] text-[#a7b0be] uppercase tracking-wider">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 md:p-8 backdrop-blur-md"
          >
            {/* Botão Fechar */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-55 rounded-full bg-slate-900/80 p-2 text-white/80 hover:bg-slate-800 hover:text-white"
              aria-label="Fechar galeria"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navegação Anterior */}
            <button
              onClick={showPrev}
              className="absolute left-4 md:left-8 z-55 rounded-full bg-slate-900/80 p-3 text-white/80 hover:bg-slate-800 hover:text-white"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Imagem Central */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[80vh] max-w-[90vw] aspect-[4/5] h-full w-full overflow-hidden rounded-xl border border-slate-800 shadow-2xl"
            >
              <Image
                src={withBasePath(filteredItems[selectedImageIndex].imageUrl)}
                alt={filteredItems[selectedImageIndex].alt}
                fill
                className="object-contain"
                unoptimized
              />
              <div className="absolute bottom-4 left-4 right-4 z-10 rounded-lg bg-slate-900/80 p-3 text-center backdrop-blur-sm">
                {filteredItems[selectedImageIndex].title && (
                  <p className="font-heading text-sm font-bold text-white">{filteredItems[selectedImageIndex].title}</p>
                )}
                <p className="text-xs text-[#a7b0be]">{filteredItems[selectedImageIndex].alt}</p>
              </div>
            </motion.div>

            {/* Navegação Próxima */}
            <button
              onClick={showNext}
              className="absolute right-4 md:right-8 z-55 rounded-full bg-slate-900/80 p-3 text-white/80 hover:bg-slate-800 hover:text-white"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
