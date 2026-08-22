"use client";

import React, { useState } from "react";
import { Container } from "../layout/container";
import { Badge } from "../ui/badge";
import { 
  Sparkles, 
  AlertTriangle, 
  Code2, 
  HelpCircle, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Radio
} from "lucide-react";
import { cn } from "@/lib/utils";

export function IntelligenceShowcase() {
  const [activeFeature, setActiveFeature] = useState<"contradiction" | "translation" | "questions">("contradiction");

  return (
    <section id="intelligence" className="py-16 md:py-24 bg-surface border-t border-b border-border/80 relative overflow-hidden">
      <Container className="space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="neutral" className="gap-1.5 px-3 py-1 bg-white border-zinc-300 shadow-2xs font-mono text-zinc-700">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Capacidades en Tiempo Real</span>
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">
            No solo escucha palabras. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-600 to-emerald-600">
              Entiende el significado y los riesgos.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 font-normal">
            Dolphin construye un modelo mental continuo de la llamada mientras ocurre.
          </p>
        </div>

        {/* Interactive Feature Selector Buttons (All 100% functional) */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-xl bg-zinc-200/70 border border-zinc-300 gap-1.5 flex-wrap justify-center">
            <button
              onClick={() => setActiveFeature("contradiction")}
              className={cn(
                "px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer",
                activeFeature === "contradiction"
                  ? "bg-white text-zinc-900 shadow-sm border border-zinc-200"
                  : "text-zinc-600 hover:text-zinc-900 hover:bg-white/50"
              )}
            >
              <AlertTriangle className={cn("w-4 h-4", activeFeature === "contradiction" ? "text-rose-600" : "text-zinc-500")} />
              <span>Detección de Contradicciones</span>
            </button>

            <button
              onClick={() => setActiveFeature("translation")}
              className={cn(
                "px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer",
                activeFeature === "translation"
                  ? "bg-white text-zinc-900 shadow-sm border border-zinc-200"
                  : "text-zinc-600 hover:text-zinc-900 hover:bg-white/50"
              )}
            >
              <Code2 className={cn("w-4 h-4", activeFeature === "translation" ? "text-blue-600" : "text-zinc-500")} />
              <span>Traducción Técnico ↔ Negocio</span>
            </button>

            <button
              onClick={() => setActiveFeature("questions")}
              className={cn(
                "px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer",
                activeFeature === "questions"
                  ? "bg-white text-zinc-900 shadow-sm border border-zinc-200"
                  : "text-zinc-600 hover:text-zinc-900 hover:bg-white/50"
              )}
            >
              <HelpCircle className={cn("w-4 h-4", activeFeature === "questions" ? "text-amber-600" : "text-zinc-500")} />
              <span>Preguntas Sugeridas</span>
            </button>
          </div>
        </div>

        {/* Feature Display Window with Real Professional Imagery */}
        <div className="max-w-5xl mx-auto rounded-2xl border border-zinc-300/80 bg-white shadow-xl overflow-hidden">
          {/* Top simulated meeting context */}
          <div className="bg-zinc-900 text-white px-6 py-3.5 flex items-center justify-between border-b border-zinc-800">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-semibold text-zinc-200">
                {activeFeature === "contradiction" && "AUDITORÍA EN VIVO · CONFLICTO DETECTADO (14:35)"}
                {activeFeature === "translation" && "ASISTENCIA TÉCNICA · EXPLICACIÓN DE ARQUITECTURA (14:32)"}
                {activeFeature === "questions" && "INTELIGENCIA PROACTIVA · VACÍO DE INFORMACIÓN (14:38)"}
              </span>
            </div>
            <span className="text-[11px] font-mono text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700">
              QVAC Local Ingest
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px]">
            {/* Left: Real person speaking in meeting with photo */}
            <div className="md:col-span-5 p-6 bg-zinc-50/80 border-b md:border-b-0 md:border-r border-zinc-200 flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={
                      activeFeature === "contradiction"
                        ? "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80"
                        : activeFeature === "translation"
                        ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80"
                        : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80"
                    }
                    alt="Speaker"
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md ring-2 ring-zinc-300"
                  />
                  <div>
                    <div className="text-sm font-bold text-zinc-900">
                      {activeFeature === "contradiction" && "Sarah Jenkins (Cliente)"}
                      {activeFeature === "translation" && "Alex Rivera (Arquitecto)"}
                      {activeFeature === "questions" && "David Kim (Tech Lead)"}
                    </div>
                    <div className="text-xs text-zinc-500 font-mono">
                      {activeFeature === "contradiction" && "VP de Operaciones"}
                      {activeFeature === "translation" && "Tech Lead ERP"}
                      {activeFeature === "questions" && "Líder de Integraciones"}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-2xs space-y-2">
                  <div className="text-[11px] font-mono font-bold uppercase text-zinc-400">
                    Palabras pronunciadas
                  </div>
                  <p className="text-sm text-zinc-800 italic leading-relaxed">
                    {activeFeature === "contradiction" &&
                      "«...y las compras menores a $500 se procesan directamente sin pasar por el manager.»"}
                    {activeFeature === "translation" &&
                      "«Necesitamos asegurarnos de que la sincronización con el ERP sea estrictamente idempotente.»"}
                    {activeFeature === "questions" &&
                      "«Definimos el camino de aprobación exitosa, pero no aclaramos qué sucede si el manager rechaza la orden.»"}
                  </p>
                </div>
              </div>

              <div className="text-[11px] text-zinc-400 font-mono flex items-center gap-2">
                <Radio className="w-3 h-3 text-emerald-500 animate-pulse" />
                <span>Audio stream analizado localmente</span>
              </div>
            </div>

            {/* Right: Dolphin Intelligence Output */}
            <div className="md:col-span-7 p-6 bg-white flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">
                  Comprensión Inmediata de Dolphin
                </div>

                {activeFeature === "contradiction" && (
                  <div className="space-y-3 animate-in fade-in duration-300">
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 space-y-2">
                      <div className="flex items-center gap-2 text-rose-800 font-bold text-xs">
                        <AlertTriangle className="w-4 h-4 text-rose-600" />
                        <span>POSIBLE CONTRADICCIÓN DETECTADA</span>
                      </div>
                      <div className="text-xs text-rose-950 space-y-1 pl-6">
                        <div><strong>Minuto 14:30:</strong> Se afirmó que <em>todas</em> las compras requieren firma del manager.</div>
                        <div><strong>Minuto 14:35:</strong> Se indica que compras &lt;$500 se procesan automáticamente.</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                      <div className="text-[11px] font-mono font-bold text-zinc-500 uppercase">Pregunta Aclaratoria Sugerida</div>
                      <div className="text-sm font-semibold text-zinc-900 mt-1">
                        «¿Las compras menores a $500 omiten la aprobación o requieren notificación asíncrona?»
                      </div>
                    </div>
                  </div>
                )}

                {activeFeature === "translation" && (
                  <div className="space-y-3 animate-in fade-in duration-300">
                    <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 space-y-2">
                      <div className="flex items-center gap-2 text-indigo-800 font-bold text-xs">
                        <Code2 className="w-4 h-4 text-indigo-600" />
                        <span>TRADUCCIÓN TÉCNICA A LENGUAJE CLARO: IDEMPOTENCIA</span>
                      </div>
                      <p className="text-xs text-indigo-950 leading-relaxed pl-6">
                        Significa que si la red falla y la orden se envía 2 o más veces, el sistema <strong>no duplicará cobros ni creará registros repetidos</strong>.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                      <div className="text-[11px] font-mono font-bold text-zinc-500 uppercase">Impacto de Negocio</div>
                      <div className="text-sm text-zinc-900 mt-1">
                        Protege contra errores de doble facturación al cliente si se pierde la conexión Wi-Fi durante el envío.
                      </div>
                    </div>
                  </div>
                )}

                {activeFeature === "questions" && (
                  <div className="space-y-3 animate-in fade-in duration-300">
                    <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
                      <div className="flex items-center gap-2 text-amber-800 font-bold text-xs">
                        <HelpCircle className="w-4 h-4 text-amber-600" />
                        <span>VACÍO DE PROCESO IDENTIFICADO</span>
                      </div>
                      <p className="text-xs text-amber-950 leading-relaxed pl-6">
                        El flujo de aprobación fue descrito detalladamente, pero no se ha definido ninguna regla de excepción para rechazos.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                      <div className="text-[11px] font-mono font-bold text-zinc-500 uppercase">Pregunta para Desbloquear</div>
                      <div className="text-sm font-semibold text-zinc-900 mt-1">
                        «¿Qué notificación recibe el solicitante y qué pasos siguen si el manager rechaza la compra?»
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
                <span>Inferencia local en menos de 100ms</span>
                <span className="text-indigo-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Contextualizado
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
