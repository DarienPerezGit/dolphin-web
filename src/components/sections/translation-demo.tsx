"use client";

import React, { useState } from "react";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { cn } from "@/lib/utils";

export function TranslationDemo() {
  const [activeTab, setActiveTab] = useState<"tech-to-business" | "business-to-tech">("tech-to-business");

  return (
    <Section id="translation" className="py-20 md:py-28 bg-white border-t border-zinc-100">
      <Container className="space-y-16">
        {/* Section Header with Pure Typography Hierarchy */}
        <div className="max-w-3xl space-y-4 text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block">
            Traducción contextual bidireccional
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Conectando el lenguaje de negocio con el técnico
          </h2>
          <p className="text-base text-zinc-600 font-normal leading-relaxed max-w-2xl">
            Dolphin traduce en ambas direcciones en tiempo real para que ingenieros, directivos y clientes compartan el mismo entendimiento.
          </p>
        </div>

        {/* Minimal Underline Selector */}
        <div className="flex gap-8 border-b border-zinc-100 pb-3">
          <button
            onClick={() => setActiveTab("tech-to-business")}
            className={cn(
              "text-sm font-medium transition-colors cursor-pointer pb-1 relative",
              activeTab === "tech-to-business"
                ? "text-zinc-950 font-semibold"
                : "text-zinc-400 hover:text-zinc-700"
            )}
          >
            <span>Técnico a Negocio</span>
            {activeTab === "tech-to-business" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-950" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("business-to-tech")}
            className={cn(
              "text-sm font-medium transition-colors cursor-pointer pb-1 relative",
              activeTab === "business-to-tech"
                ? "text-zinc-950 font-semibold"
                : "text-zinc-400 hover:text-zinc-700"
            )}
          >
            <span>Negocio a Técnico</span>
            {activeTab === "business-to-tech" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-950" />
            )}
          </button>
        </div>

        {/* Pure Typography Content Comparison without Outlined Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: What was spoken */}
          <div className="md:col-span-5 space-y-4 text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block">
              {activeTab === "tech-to-business" ? "Lo que dijo el arquitecto" : "Lo que dijo el cliente"}
            </span>

            <p className="text-xl sm:text-2xl font-medium text-zinc-950 leading-snug">
              {activeTab === "tech-to-business"
                ? "«Tendremos que hacer esa operación de sincronización ERP estrictamente idempotente.»"
                : "«El manager lo tiene que revisar antes de que contabilidad lo cargue al sistema.»"}
            </p>

            <p className="text-xs text-zinc-400 font-normal">
              {activeTab === "tech-to-business" ? "Alex Rivera · Lead Solutions Architect" : "Sarah Jenkins · VP Operations"}
            </p>
          </div>

          {/* Right: Dolphin Semantic Meaning */}
          <div className="md:col-span-7 space-y-6 text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block">
              Comprensión e implicancia de negocio
            </span>

            {activeTab === "tech-to-business" ? (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-base font-semibold text-zinc-950">
                    Definición en lenguaje claro
                  </h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Si la conexión a internet falla y el sistema reintenta enviar la orden varias veces, <strong>no se cobrará dos veces al cliente ni se crearán compras duplicadas</strong> en el ERP.
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-zinc-100">
                  <h4 className="text-base font-semibold text-zinc-950">
                    Impacto operativo
                  </h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Protege la integridad financiera y previene errores contables en los cierres mensuales.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-base font-semibold text-zinc-950">
                    Requerimiento de ingeniería deducido
                  </h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Requiere un flujo de estados finitos (Pendiente ➔ Aprobado ➔ Sincronizado) con control de acceso por roles (RBAC) y registro de auditoría inmutable.
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-zinc-100">
                  <h4 className="text-base font-semibold text-zinc-950">
                    Restricción de API
                  </h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    El servicio de ERP no debe procesar peticiones sin una firma criptográfica del manager correspondiente.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
