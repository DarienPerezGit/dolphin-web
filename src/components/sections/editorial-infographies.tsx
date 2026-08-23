/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Container } from "../layout/container";

export function EditorialInfographies() {
  return (
    <section id="infografias" className="py-16 md:py-24 bg-[#FBF9F5] space-y-20 border-b border-[#D8D2C5] scroll-mt-14">
      {/* Plate 01: Full-Screen Central Showcase */}
      <Container className="max-w-[1340px] space-y-6">
        {/* Minimal Folio Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-[#D8D2C5]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-editorial-sage font-bold uppercase tracking-widest">
              FIGURA 01
            </span>
            <span className="text-[#D8D2C5]">|</span>
            <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal tracking-tight">
              Mapeo Cognitivo de Conversación
            </h2>
          </div>
          <span className="font-mono text-[10px] text-foreground-faded uppercase tracking-widest">
            Semántica & Grafos en Tiempo Real
          </span>
        </div>

        {/* Grand Central Infography Canvas (Nearly Full Screen) */}
        <div className="w-full rounded-2xl border border-[#D8D2C5] bg-[#F7F5F0] p-3 sm:p-6 md:p-8 overflow-hidden">
          <img
            src="/images/infography/figura-01-cognitive-map.png"
            alt="Mapeo cognitivo de la conversación en tiempo real"
            className="w-full h-auto object-contain mx-auto rounded-xl"
            loading="lazy"
          />
        </div>

        {/* Minimal Bottom Caption */}
        <p className="font-serif italic text-xs sm:text-sm text-foreground-muted text-center max-w-3xl mx-auto">
          Dolphin convierte el diálogo oral desestructurado en entidades de negocio, requerimientos técnicos y detección de inconsistencias al vuelo.
        </p>
      </Container>

      {/* Plate 02: Full-Screen Central Showcase */}
      <Container className="max-w-[1340px] space-y-6 pt-6">
        {/* Minimal Folio Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-[#D8D2C5]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-editorial-sage font-bold uppercase tracking-widest">
              FIGURA 02
            </span>
            <span className="text-[#D8D2C5]">|</span>
            <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal tracking-tight">
              Arquitectura de Inferencia On-Device
            </h2>
          </div>
          <span className="font-mono text-[10px] text-foreground-faded uppercase tracking-widest">
            Motor QVAC · 100% Local
          </span>
        </div>

        {/* Grand Central Infography Canvas (Nearly Full Screen) */}
        <div className="w-full rounded-2xl border border-[#D8D2C5] bg-[#F7F5F0] p-3 sm:p-6 md:p-8 overflow-hidden">
          <img
            src="/images/infography/figura-02-architecture-flow.png"
            alt="Arquitectura de inferencia local y flujo de memoria on-device"
            className="w-full h-auto object-contain mx-auto rounded-xl"
            loading="lazy"
          />
        </div>

        {/* Minimal Bottom Caption */}
        <p className="font-serif italic text-xs sm:text-sm text-foreground-muted text-center max-w-3xl mx-auto">
          El audio se procesa en memoria volátil con latencia ~12ms. Cero almacenamiento externo y total soberanía de datos.
        </p>
      </Container>
    </section>
  );
}
