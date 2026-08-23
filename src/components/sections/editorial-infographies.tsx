/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";

export function EditorialInfographies() {
  return (
    <section id="infografias" className="w-full bg-[#FBF9F5] py-14 sm:py-20 md:py-28 border-b border-[#D8D2C5]">
      {/* 1. First Panoramic Infography (Full Viewport Presence, Zero Border Frame) */}
      <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-6 md:px-10 space-y-6">
        {/* Minimal Folio Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-[#D8D2C5]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-editorial-sage font-bold uppercase tracking-widest">
              FIGURA 01
            </span>
            <span className="text-[#D8D2C5]">|</span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground font-normal tracking-tight">
              Mapeo Cognitivo y Topología Semántica de la Conversación
            </h2>
          </div>
          <span className="font-mono text-[10px] text-foreground-faded uppercase tracking-widest">
            Semántica en Tiempo Real
          </span>
        </div>

        {/* Full-Bleed Frameless Infography Canvas with Deep Optical Defocus & Alpha Background Blend */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full flex items-center justify-center overflow-hidden py-8 [mask-image:radial-gradient(ellipse_82%_76%_at_50%_50%,black_18%,rgba(0,0,0,0.7)_45%,rgba(0,0,0,0.2)_70%,transparent_90%)] [-webkit-mask-image:radial-gradient(ellipse_82%_76%_at_50%_50%,black_18%,rgba(0,0,0,0.7)_45%,rgba(0,0,0,0.2)_70%,transparent_90%)]"
        >
          {/* Deep perimeter gradient blends */}
          <div className="absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-[#FBF9F5] via-[#FBF9F5]/70 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#FBF9F5] via-[#FBF9F5]/70 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-20 sm:w-44 md:w-64 bg-gradient-to-r from-[#FBF9F5] via-[#FBF9F5]/70 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 sm:w-44 md:w-64 bg-gradient-to-l from-[#FBF9F5] via-[#FBF9F5]/70 to-transparent z-10 pointer-events-none" />

          <img
            src="/images/infography/figura-01-cognitive-map.png"
            alt="Mapeo cognitivo y topología semántica de la conversación en tiempo real"
            className="w-full h-auto max-h-[88vh] object-contain mx-auto mix-blend-multiply"
            loading="lazy"
          />
        </motion.div>

        {/* Minimal Bottom Caption */}
        <p className="font-serif italic text-xs sm:text-sm text-foreground-muted text-center max-w-4xl mx-auto pt-2">
          Dolphin estructura el diálogo oral desestructurado en entidades de negocio, requerimientos técnicos y detección de inconsistencias al vuelo.
        </p>
      </div>

      {/* 2. Second Panoramic Infography (Full Viewport Presence, Zero Border Frame) */}
      <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-6 md:px-10 space-y-6 pt-20 md:pt-28">
        {/* Minimal Folio Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-[#D8D2C5]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-editorial-sage font-bold uppercase tracking-widest">
              FIGURA 02
            </span>
            <span className="text-[#D8D2C5]">|</span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground font-normal tracking-tight">
              Arquitectura de Inferencia On-Device y Soberanía de Datos
            </h2>
          </div>
          <span className="font-mono text-[10px] text-foreground-faded uppercase tracking-widest">
            Motor QVAC · 100% Local
          </span>
        </div>

        {/* Full-Bleed Frameless Infography Canvas with Deep Optical Defocus & Alpha Background Blend */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full flex items-center justify-center overflow-hidden py-8 [mask-image:radial-gradient(ellipse_82%_76%_at_50%_50%,black_18%,rgba(0,0,0,0.7)_45%,rgba(0,0,0,0.2)_70%,transparent_90%)] [-webkit-mask-image:radial-gradient(ellipse_82%_76%_at_50%_50%,black_18%,rgba(0,0,0,0.7)_45%,rgba(0,0,0,0.2)_70%,transparent_90%)]"
        >
          {/* Deep perimeter gradient blends */}
          <div className="absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-[#FBF9F5] via-[#FBF9F5]/70 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#FBF9F5] via-[#FBF9F5]/70 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-20 sm:w-44 md:w-64 bg-gradient-to-r from-[#FBF9F5] via-[#FBF9F5]/70 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 sm:w-44 md:w-64 bg-gradient-to-l from-[#FBF9F5] via-[#FBF9F5]/70 to-transparent z-10 pointer-events-none" />

          <img
            src="/images/infography/figura-02-architecture-flow.png"
            alt="Arquitectura de inferencia local y flujo de memoria on-device"
            className="w-full h-auto max-h-[88vh] object-contain mx-auto mix-blend-multiply"
            loading="lazy"
          />
        </motion.div>

        {/* Minimal Bottom Caption */}
        <p className="font-serif italic text-xs sm:text-sm text-foreground-muted text-center max-w-4xl mx-auto pt-2">
          El audio se procesa exclusivamente en la memoria RAM del equipo con latencia de ~12ms. Cero almacenamiento externo y total confidencialidad.
        </p>
      </div>
    </section>
  );
}
