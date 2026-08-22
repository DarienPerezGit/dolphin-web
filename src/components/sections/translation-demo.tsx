"use client";

import React, { useState } from "react";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { Badge } from "../ui/badge";
import { ArrowLeftRight, Code2, Users, Check, Sparkles, ArrowRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function TranslationDemo() {
  const [activeTab, setActiveTab] = useState<"tech-to-business" | "business-to-tech">("tech-to-business");

  return (
    <Section id="translation" className="border-t border-zinc-200/80 bg-zinc-50/50">
      <Container className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="neutral" className="gap-1.5 px-3 py-1 bg-white border-zinc-300 font-mono text-zinc-700 shadow-2xs">
            <ArrowLeftRight className="w-3.5 h-3.5 text-indigo-600" />
            <span>Traducción Contextual Bidireccional</span>
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Conectando el lenguaje de negocio con el técnico
          </h2>
          <p className="text-base text-zinc-600 font-normal">
            Dolphin traduce en ambas direcciones en tiempo real para que ingenieros y directivos hablen exactamente el mismo idioma.
          </p>
        </div>

        {/* Interactive Mode Switcher */}
        <div className="flex justify-center">
          <div className="inline-flex p-1 rounded-xl bg-zinc-200/80 border border-zinc-300 gap-1">
            <button
              onClick={() => setActiveTab("tech-to-business")}
              className={cn(
                "px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer",
                activeTab === "tech-to-business"
                  ? "bg-white text-zinc-900 shadow-sm border border-zinc-200"
                  : "text-zinc-600 hover:text-zinc-900"
              )}
            >
              <Code2 className="w-4 h-4 text-indigo-600" />
              <span>Técnico ➔ Negocio</span>
            </button>

            <button
              onClick={() => setActiveTab("business-to-tech")}
              className={cn(
                "px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer",
                activeTab === "business-to-tech"
                  ? "bg-white text-zinc-900 shadow-sm border border-zinc-200"
                  : "text-zinc-600 hover:text-zinc-900"
              )}
            >
              <Users className="w-4 h-4 text-blue-600" />
              <span>Negocio ➔ Técnico</span>
            </button>
          </div>
        </div>

        {/* Superhuman Side-by-Side Comparison Card */}
        <div className="max-w-5xl mx-auto rounded-2xl border border-zinc-300 bg-white shadow-xl overflow-hidden">
          <div className="bg-zinc-950 text-white px-6 py-3 border-b border-zinc-800 flex items-center justify-between font-mono text-xs">
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Dolphin Semantic Translation Engine</span>
            </span>
            <span className="text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
              Zero Distraction Mode
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[320px]">
            {/* Left: What was spoken */}
            <div className="md:col-span-5 p-6 sm:p-8 bg-zinc-50 border-b md:border-b-0 md:border-r border-zinc-200 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-xs font-bold font-mono uppercase tracking-wider text-zinc-500">
                  {activeTab === "tech-to-business" ? "Ingeniero en la llamada" : "Cliente / Negocio en la llamada"}
                </span>

                <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-2xs space-y-1">
                  <p className="text-xs font-mono text-zinc-400">
                    {activeTab === "tech-to-business" ? "Alex Rivera (Lead Architect)" : "Sarah Jenkins (VP Operations)"}
                  </p>
                  <p className="text-base font-semibold text-zinc-900 italic">
                    {activeTab === "tech-to-business"
                      ? "«Tendremos que hacer esa operación de sincronización ERP estrictamente idempotente.»"
                      : "«El manager lo tiene que revisar antes de que contabilidad lo cargue al sistema.»"}
                  </p>
                </div>
              </div>

              <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>Audio stream interpretado en tiempo real</span>
              </div>
            </div>

            {/* Right: Dolphin Semantic Translation */}
            <div className="md:col-span-7 p-6 sm:p-8 bg-white flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <span className="text-xs font-bold font-mono uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded border border-indigo-200 inline-flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Traducción Contextual para el Equipo</span>
                </span>

                {activeTab === "tech-to-business" ? (
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-200/80 space-y-1.5">
                      <h4 className="text-sm font-bold text-indigo-950">
                        Concepto: Idempotencia en lenguaje de Negocio
                      </h4>
                      <p className="text-xs sm:text-sm text-indigo-900 leading-relaxed">
                        Significa que si la conexión a internet falla y el sistema reintenta enviar la orden varias veces, <strong>no se cobrará dos veces al cliente ni se crearán compras duplicadas</strong> en el ERP.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                      <span className="text-[11px] font-mono font-bold text-zinc-500 uppercase">Impacto Operativo</span>
                      <p className="text-xs text-zinc-800 mt-0.5">
                        Protege la integridad financiera y previene disputas con proveedores por doble facturación.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80 space-y-1.5">
                      <h4 className="text-sm font-bold text-blue-950">
                        Especificación Técnica: Workflow RBAC con Auditoría
                      </h4>
                      <p className="text-xs sm:text-sm text-blue-900 leading-relaxed">
                        Requiere un pipeline de estados finitos (<code className="bg-blue-100 px-1 py-0.5 rounded text-blue-800 font-mono text-xs">Pending</code> ➔ <code className="bg-blue-100 px-1 py-0.5 rounded text-blue-800 font-mono text-xs">Approved</code> ➔ <code className="bg-blue-100 px-1 py-0.5 rounded text-blue-800 font-mono text-xs">Synced</code>) con control de acceso por roles (*Role-Based Access Control*) y log de auditoría inmutable.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                      <span className="text-[11px] font-mono font-bold text-zinc-500 uppercase">Requerimiento de Arquitectura</span>
                      <p className="text-xs text-zinc-800 mt-0.5">
                        El endpoint del ERP no debe permitir invocaciones directas sin un JWT con el scope de autorización correspondiente.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>Inferencia local en ~14ms</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  Sincronizado
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
