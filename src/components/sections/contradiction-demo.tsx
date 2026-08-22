"use client";

import React, { useState } from "react";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { Badge } from "../ui/badge";
import { AlertTriangle, HelpCircle, Clock, CheckCircle2, Sparkles, ArrowRight, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContradictionDemo() {
  const [selectedDiscrepancy, setSelectedDiscrepancy] = useState<number>(0);

  const scenarios = [
    {
      id: "approval-rules",
      title: "Regla de Aprobación vs. Excepción de Monto",
      timeEarly: "10:14 AM (Minuto 14)",
      speakerEarly: "Sarah Jenkins (VP Operaciones)",
      quoteEarly: "«Toda compra sin excepción necesita la aprobación del manager antes de enviarse al ERP.»",
      timeLate: "10:27 AM (Minuto 27)",
      speakerLate: "Sarah Jenkins (VP Operaciones)",
      quoteLate: "«Las compras menores a $500 en realidad se procesan de forma automática sin esperar sign-off.»",
      contradictionSummary: "Discrepancia temporal en las reglas de autorización del flujo de compras.",
      suggestedQuestion: "¿Las compras menores a $500 omiten la aprobación del manager o requieren una notificación asíncrona posterior para auditoría?",
      impactLevel: "Alto impacto en arquitectura de base de datos y workflow",
    },
    {
      id: "inventory-sync",
      title: "Sincronización en Tiempo Real vs. Batch Nocturno",
      timeEarly: "10:08 AM (Minuto 8)",
      speakerEarly: "David Kim (ERP Lead)",
      quoteEarly: "«El inventario debe sincronizarse en tiempo real con cada orden entrante.»",
      timeLate: "10:35 AM (Minuto 35)",
      speakerLate: "Alex Rivera (Arquitecto)",
      quoteLate: "«Para no saturar el servidor central, ejecutaremos la actualización de stock en un proceso batch a medianoche.»",
      contradictionSummary: "Conflicto entre requerimiento de consistencia inmediata vs. rendimiento de base de datos.",
      suggestedQuestion: "¿Qué nivel de tolerancia a la consistencia eventual tiene el inventario durante picos de venta?",
      impactLevel: "Decisión crítica de diseño de infraestructura",
    }
  ];

  const current = scenarios[selectedDiscrepancy];

  return (
    <Section id="contradiction" className="border-t border-zinc-200/80 bg-white">
      <Container className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="warning" className="gap-1.5 px-3 py-1 bg-amber-50 border-amber-300 font-mono text-amber-900 shadow-2xs">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-700" />
            <span>Auditoría Semántica en Tiempo Real</span>
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Detecta inconsistencias antes de que sea tarde
          </h2>
          <p className="text-base text-zinc-600 font-normal">
            En reuniones extensas, los acuerdos y reglas cambian inadvertidamente. Dolphin detecta contradicciones entre minutos distantes.
          </p>
        </div>

        {/* Superhuman Scenario Switcher */}
        <div className="flex justify-center">
          <div className="inline-flex p-1 rounded-xl bg-zinc-100 border border-zinc-300 gap-1">
            {scenarios.map((sc, idx) => (
              <button
                key={sc.id}
                onClick={() => setSelectedDiscrepancy(idx)}
                className={cn(
                  "px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2",
                  selectedDiscrepancy === idx
                    ? "bg-white text-zinc-900 shadow-sm border border-zinc-200"
                    : "text-zinc-600 hover:text-zinc-900"
                )}
              >
                <AlertTriangle className={cn("w-3.5 h-3.5", selectedDiscrepancy === idx ? "text-amber-600" : "text-zinc-400")} />
                <span>Caso 0{idx + 1}: {sc.id === "approval-rules" ? "Reglas de Compra" : "Sync de Inventario"}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Superhuman Chronological Diff Card */}
        <div className="max-w-5xl mx-auto rounded-2xl border border-zinc-300 bg-white shadow-xl overflow-hidden">
          <div className="bg-zinc-950 text-white px-6 py-3 border-b border-zinc-800 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="font-semibold text-zinc-100">{current.title}</span>
            </div>
            <span className="text-amber-400 bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-800/80 font-bold">
              Conflicto Temporal Detectado
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Timeline comparison columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Early rule */}
              <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2.5 relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500 font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{current.timeEarly}</span>
                  </span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-zinc-200 text-zinc-700 font-bold">
                    Regla Inicial
                  </span>
                </div>
                <div className="text-xs text-zinc-500 font-mono">{current.speakerEarly}</div>
                <p className="text-sm font-semibold text-zinc-900 italic leading-relaxed">
                  {current.quoteEarly}
                </p>
              </div>

              {/* Later statement */}
              <div className="p-5 rounded-xl bg-amber-50/50 border border-amber-200 space-y-2.5 relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-800 font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>{current.timeLate}</span>
                  </span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-200 text-amber-900 font-bold">
                    Nueva Afirmación
                  </span>
                </div>
                <div className="text-xs text-amber-700 font-mono">{current.speakerLate}</div>
                <p className="text-sm font-semibold text-zinc-900 italic leading-relaxed">
                  {current.quoteLate}
                </p>
              </div>
            </div>

            {/* Inferred Contradiction Alert Card */}
            <div className="p-5 rounded-xl border border-l-4 border-l-rose-500 border-rose-200 bg-rose-50/40 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-md bg-rose-100 text-rose-800">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                  </span>
                  <span className="text-xs font-bold font-mono uppercase text-rose-900 tracking-wider">
                    Análisis de Dolphin
                  </span>
                </div>
                <span className="text-[11px] font-mono text-rose-800 bg-rose-100 px-2 py-0.5 rounded border border-rose-200">
                  {current.impactLevel}
                </span>
              </div>

              <p className="text-sm text-zinc-800 font-medium leading-relaxed">
                {current.contradictionSummary}
              </p>

              {/* Actionable Question */}
              <div className="pt-3 border-t border-rose-200/80 flex items-start gap-2.5 text-xs text-rose-950 bg-white/70 p-3 rounded-lg border border-rose-200/60">
                <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-900 font-bold block mb-0.5">Pregunta Aclaratoria Recomendada para la Reunión:</strong>
                  <span className="text-zinc-700 italic">&ldquo;{current.suggestedQuestion}&rdquo;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
