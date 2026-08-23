/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";

interface MediaItem {
  src: string;
  alt: string;
  caption: string;
}

const CAROUSEL_ITEMS: MediaItem[] = [
  {
    src: "/images/carrusel/item-1.jpg",
    alt: "Sesión colaborativa de arquitectura y sincronización",
    caption: "Sesión de arquitectura y sincronización de requerimientos",
  },
  {
    src: "/images/carrusel/item-2.jpg",
    alt: "Alineación de ingeniería en restricciones de sistema",
    caption: "Definición de restricciones y flujos entre equipos",
  },
  {
    src: "/images/carrusel/item-3.jpg",
    alt: "Revisión estructurada de acuerdos en tiempo real",
    caption: "Síntesis en tiempo real e inferencia en dispositivo",
  },
  {
    src: "/images/carrusel/item-4.jpg",
    alt: "Identificación de inconsistencias operativas",
    caption: "Detección inmediata de contradicciones y clarificaciones",
  },
];

export function HeroCarousel({ className }: { className?: string }) {
  const duplicatedItems = [...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS];

  return (
    <section className={cn("relative w-full overflow-hidden bg-[#FAF8F5] py-24 sm:py-32 select-none font-sans flex flex-col justify-center min-h-[460px]", className)}>
      
      {/* 1. Full-Section Interactive Background Boxes Grid (Directly behind the carousel) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-auto z-0">
        <Boxes />
        {/* Soft center ambient radial mask */}
        <div className="absolute inset-0 w-full h-full bg-[#FAF8F5]/40 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      </div>

      {/* 2. Lateral Soft Edge Fade Masks */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-16 sm:w-44 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/90 to-transparent z-20 pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute right-0 top-0 bottom-0 w-16 sm:w-44 bg-gradient-to-l from-[#FAF8F5] via-[#FAF8F5]/90 to-transparent z-20 pointer-events-none"
        aria-hidden="true" 
      />

      {/* 3. Continuous Marquee Track (Floating above the interactive boxes grid) */}
      <div className="marquee-track flex gap-6 sm:gap-8 pl-4 relative z-10">
        {duplicatedItems.map((item, index) => (
          <motion.figure
            key={`${item.src}-${index}`}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex-shrink-0 w-[280px] sm:w-[420px] md:w-[540px] flex flex-col space-y-3.5 cursor-pointer"
          >
            {/* Visual Card Container */}
            <div className="relative h-[200px] sm:h-[300px] md:h-[360px] w-full overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-xl shadow-stone-900/5">
              <img
                src={item.src}
                alt={item.alt}
                width={540}
                height={360}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale-[0.03] contrast-[0.98] brightness-[0.99] transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* High-Contrast Clean Caption & Index */}
            <figcaption className="font-sans text-xs sm:text-[13px] text-stone-700 font-medium flex items-center justify-between px-1">
              <span className="truncate">{item.caption}</span>
              <span className="shrink-0 text-stone-400 font-medium ml-2">
                0{String((index % CAROUSEL_ITEMS.length) + 1)}
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
