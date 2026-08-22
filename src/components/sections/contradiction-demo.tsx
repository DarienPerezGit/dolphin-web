"use client";

import React, { useState } from "react";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { cn } from "@/lib/utils";

export function ContradictionDemo() {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  const scenarios = [
    {
      id: "approval-rules",
      title: "Flujo de Aprobación vs. Excepción de Monto",
      timeEarly: "10:14 AM (Minuto 14)",
      speakerEarly: "Sarah Jenkins · VP Operaciones",
      quoteEarly: "«Toda compra sin excepción necesita la aprobación del manager antes de enviarse al ERP.»",
      timeLate: "10:27 AM (Minuto 27)",
      speakerLate: "Sarah Jenkins · VP Operaciones",
      quoteLate: "«Las compras menores a $500 en realidad se procesan de forma automática sin esperar sign-off.»",
      contradictionSummary: "Discrepancia temporal en las reglas de autorización del flujo de compras.",
      suggestedQuestion: "¿Las compras menores a $500 omiten la aprobación del manager o requieren una notificación asíncrona posterior para auditoría?",
    },
    {
      id: "inventory-sync",
      title: "Sincronización Inmediata vs. Proceso Batch Nocturno",
      timeEarly: "10:08 AM (Minuto 8)",
      speakerEarly: "David Kim · ERP Integration Lead",
      quoteEarly: "«El inventario debe sincronizarse en tiempo real con cada orden entrante.»",
      timeLate: "10:35 AM (Minuto 35)",
      speakerLate: "Alex Rivera · Lead Solutions Architect",
      quoteLate: "«Para no saturar el servidor central, ejecutaremos la actualización de stock en un proceso batch a medianoche.»",
      contradictionSummary: "Conflicto entre requerimiento de consistencia inmediata vs. rendimiento de base de datos.",
      suggestedQuestion: "¿Qué nivel de tolerancia a la consistencia eventual tiene el inventario durante picos de venta?",
    }
  ];

  const current = scenarios[selectedCase];

  return (
    <Section id="contradiction" className="py-20 md:py-28 bg-white border-t border-zinc-100">
      <Container className="space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block">
            Detección de contradicciones en vivo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Detecta inconsistencias antes de que sea tarde
          </h2>
          <p className="text-base text-zinc-600 font-normal leading-relaxed max-w-2xl">
            En reuniones extensas, las reglas acordadas cambian o se contradicen inadvertidamente. Dolphin vincula afirmaciones entre minutos distantes.
          </p>
        </div>

        {/* Minimal Underline Case Switcher */}
        <div className="flex gap-8 border-b border-zinc-100 pb-3">
          {scenarios.map((sc, idx) => (
            <button
              key={sc.id}
              onClick={() => setSelectedCase(idx)}
              className={cn(
                "text-sm font-medium transition-colors cursor-pointer pb-1 relative",
                selectedCase === idx
                  ? "text-zinc-950 font-semibold"
                  : "text-zinc-400 hover:text-zinc-700"
              )}
            >
              <span>{sc.title}</span>
              {selectedCase === idx && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-950" />
              )}
            </button>
          ))}
        </div>

        {/* Pure Typography Diff Layout without Outlined Containers */}
        <div className="space-y-12 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Early rule */}
            <div className="space-y-3">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Regla inicial acordada
                </span>
                <span className="text-xs text-zinc-400">
                  {current.timeEarly}
                </span>
              </div>

              <p className="text-lg sm:text-xl font-medium text-zinc-950 leading-snug">
                {current.quoteEarly}
              </p>

              <p className="text-xs text-zinc-500 font-normal">
                {current.speakerEarly}
              </p>
            </div>

            {/* Later statement */}
            <div className="space-y-3">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Afirmación posterior
                </span>
                <span className="text-xs text-zinc-400">
                  {current.timeLate}
                </span>
              </div>

              <p className="text-lg sm:text-xl font-medium text-zinc-950 leading-snug">
                {current.quoteLate}
              </p>

              <p className="text-xs text-zinc-500 font-normal">
                {current.speakerLate}
              </p>
            </div>
          </div>

          {/* Dolphin Inferred Insight separated by whitespace */}
          <div className="pt-8 border-t border-zinc-100 space-y-4 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-700 block">
              Inconsistencia detectada por Dolphin
            </span>

            <p className="text-base text-zinc-900 leading-relaxed font-medium">
              {current.contradictionSummary}
            </p>

            <div className="space-y-1 pt-2">
              <span className="text-xs text-zinc-400 font-medium block">
                Pregunta sugerida para aclarar en la reunión:
              </span>
              <p className="text-sm font-semibold text-zinc-950 italic">
                &ldquo;{current.suggestedQuestion}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
