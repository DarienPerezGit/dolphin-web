/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../layout/container";
import { Boxes } from "../ui/background-boxes";
import { 
  GitCommit, 
  AlertTriangle, 
  Code2, 
  CheckCircle2, 
  HelpCircle,
  Cpu,
  ArrowUpRight
} from "lucide-react";

export function EditorialInfographies() {
  return (
    <section id="infografias" className="relative py-24 sm:py-32 bg-[#FAF8F5] scroll-mt-14 font-sans overflow-hidden select-none">
      
      {/* 1. Interactive Background Boxes Grid (Same as Carousel) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-auto z-0">
        <Boxes />
        <div className="absolute inset-0 w-full h-full bg-[#FAF8F5]/50 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      </div>

      <Container className="max-w-6xl space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-stone-950 tracking-[-0.03em] leading-tight">
            Mapeo cognitivo de la conversación <br className="hidden sm:inline" />
            <span className="text-stone-500 italic font-serif">en tiempo real.</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            Dolphin convierte el flujo oral en un grafo estructurado de entidades, decisiones operativas y requerimientos técnicos sin enviar audio a servidores externos.
          </p>
        </div>

        {/* 2. Bespoke Dolphin Cognitive Graph Canvas (Clean, Matching Real Logo & Aesthetic) */}
        <div className="w-full rounded-3xl border border-stone-200/90 bg-white/95 p-6 sm:p-10 md:p-12 shadow-2xl shadow-stone-900/5 backdrop-blur-xl space-y-8">
          
          {/* Canvas Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-100 text-xs">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Dolphin"
                className="w-7 h-7 object-contain"
              />
              <span className="font-serif text-lg font-semibold tracking-wide text-stone-900">
                Dolphin Semantic Engine
              </span>
              <span className="text-stone-300">/</span>
              <span className="text-stone-500 font-medium">Grafo de Entidades en Memoria</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Inferencia QVAC On-Device (~12ms)</span>
            </div>
          </div>

          {/* Cognitive Graph Network Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative items-center">
            
            {/* Left Column: Input Nodes (Orígenes de Diálogo) */}
            <div className="md:col-span-4 space-y-4">
              
              {/* Node 1 */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-2xl bg-[#FDFCF7] border border-stone-200/90 shadow-sm space-y-2 text-left"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">Entidad de Diálogo</span>
                  <span className="text-stone-400">14:30</span>
                </div>
                <div className="text-sm font-semibold text-stone-900">
                  Regla de Aprobación de Compras
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  «Toda compra sin excepción necesita aprobación del manager antes de enviarse al ERP.»
                </p>
                <div className="pt-1 flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Capturado y consolidado</span>
                </div>
              </motion.div>

              {/* Node 2 */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-2xl bg-[#FDFCF7] border border-stone-200/90 shadow-sm space-y-2 text-left"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">Entidad de Diálogo</span>
                  <span className="text-stone-400">14:32</span>
                </div>
                <div className="text-sm font-semibold text-stone-900">
                  Restricción de Arquitectura ERP
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  «Tendremos que hacer esa operación de sincronización ERP estrictamente idempotente.»
                </p>
                <div className="pt-1 flex items-center gap-1.5 text-[11px] text-sky-700 font-medium">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Requerimiento técnico</span>
                </div>
              </motion.div>

            </div>

            {/* Center: Core Dolphin Neural Synthesis Node */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 text-center relative my-4 md:my-0">
              
              {/* Central Glowing Core */}
              <div className="relative flex items-center justify-center">
                <div className="absolute w-32 h-32 rounded-full bg-[#66A4F1]/20 animate-pulse blur-xl" />
                <div className="relative w-20 h-20 rounded-2xl bg-stone-950 p-4 flex items-center justify-center shadow-2xl border border-stone-800">
                  <img
                    src="/images/logo.png"
                    alt="Dolphin Core"
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>

              <div className="mt-4 space-y-1">
                <div className="text-sm font-semibold text-stone-900">
                  Motor Cognitivo Dolphin
                </div>
                <p className="text-xs text-stone-500 max-w-[200px]">
                  Vinculación semántica y auditoría temporal continua
                </p>
              </div>

              {/* Connector Tags */}
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-medium border border-stone-200">
                <Cpu className="w-3.5 h-3.5 text-blue-600" />
                <span>Zero Latencia Cloud</span>
              </div>

            </div>

            {/* Right Column: Inferred Insights & Conflict Alerts */}
            <div className="md:col-span-4 space-y-4">
              
              {/* Inferred Node 1 (Conflict) */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/90 shadow-sm space-y-2 text-left"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[11px] font-semibold text-amber-900 uppercase tracking-wider flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                    <span>Inconsistencia Detectada</span>
                  </span>
                  <span className="text-amber-700 font-mono text-[11px]">14:35</span>
                </div>
                <div className="text-sm font-semibold text-stone-900">
                  Excepción no contemplada en compras &lt;$500
                </div>
                <p className="text-xs text-amber-950 leading-relaxed font-normal">
                  Choca con la regla inicial de las 14:30. Se generó pregunta de clarificación recomendada.
                </p>
              </motion.div>

              {/* Inferred Node 2 (Technical Translation) */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200/90 shadow-sm space-y-2 text-left"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[11px] font-semibold text-sky-900 uppercase tracking-wider flex items-center gap-1">
                    <GitCommit className="w-3.5 h-3.5 text-sky-600" />
                    <span>Traducción a Negocio</span>
                  </span>
                  <span className="text-sky-700 font-mono text-[11px]">14:32</span>
                </div>
                <div className="text-sm font-semibold text-stone-900">
                  Garantía Anti-Doble Facturación
                </div>
                <p className="text-xs text-sky-950 leading-relaxed font-normal">
                  Protege al cliente contra cobros duplicados si se produce una reconexión Wi-Fi durante la orden.
                </p>
              </motion.div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
