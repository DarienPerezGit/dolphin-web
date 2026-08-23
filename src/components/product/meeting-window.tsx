/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { 
  DEMO_STEPS, 
  CANONICAL_TRANSCRIPT, 
  CANONICAL_INSIGHTS 
} from "@/content/mock-data";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mic, 
  Video, 
  PhoneOff, 
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

const STEP_DURATION_MS = 8000;

export function MeetingWindow() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const currentStep = DEMO_STEPS[currentStepIndex];

  // Auto progression
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentStepIndex((prev) => (prev + 1) % DEMO_STEPS.length);
    }, STEP_DURATION_MS);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleStepSelect = useCallback((index: number) => {
    setCurrentStepIndex(index);
    setIsPlaying(false);
  }, []);

  const activeTranscript = CANONICAL_TRANSCRIPT[currentStepIndex] || CANONICAL_TRANSCRIPT[0];

  return (
    <div className="relative w-full max-w-5xl mx-auto py-6 font-sans">
      
      {/* 1. Accent Block (#3B82F6 Solid/Vibrant Ocean Blue behind the main panel) */}
      <div 
        className="absolute top-3 -bottom-3 -right-2 sm:-right-5 w-4/5 sm:w-2/3 bg-[#3B82F6] rounded-3xl -z-10 shadow-2xl shadow-blue-500/20 transform rotate-1 transition-transform duration-500" 
        aria-hidden="true" 
      />

      {/* 2. Main Warm Editorial Notepad Panel (Anti-Boxed, Pure Typography & Open Structure) */}
      <div className="relative z-10 w-full rounded-3xl bg-[#FDFCF7] border border-stone-200/80 shadow-2xl shadow-stone-900/10 p-6 sm:p-10 text-left space-y-8 backdrop-blur-xl">
        
        {/* Top Header: Seamless Step Selector & Meeting Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-stone-100">
          
          {/* Underline Tabs */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-medium">
            {DEMO_STEPS.map((step, idx) => (
              <button
                key={step.stepNumber}
                type="button"
                onClick={() => handleStepSelect(idx)}
                className={cn(
                  "pb-1 transition-colors cursor-pointer relative",
                  currentStepIndex === idx
                    ? "text-stone-950 font-semibold"
                    : "text-stone-400 hover:text-stone-700"
                )}
              >
                <span>{step.title}</span>
                {currentStepIndex === idx && (
                  <motion.div
                    layoutId="activeDemoTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-950 rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Metadata */}
          <div className="flex items-center gap-2 text-xs font-medium text-stone-500">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-stone-200/80 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>En directo · 14:30</span>
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-stone-200/80 shadow-2xs">
              <span>4 participantes</span>
            </span>
          </div>

        </div>

        {/* Note Body Area (Bespoke Split Stream) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Natural Spoken Dialogue with Real Speaker Avatar */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Speaker Header */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={
                    activeTranscript.role === "Client"
                      ? "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80"
                      : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                  }
                  alt={activeTranscript.speaker}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-stone-100"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
              </div>

              <div>
                <div className="text-sm font-semibold text-stone-900 flex items-center gap-2">
                  <span>{activeTranscript.speaker}</span>
                  <span className="text-xs font-normal text-stone-400">
                    · {activeTranscript.role === "Client" ? "VP Operaciones (Cliente)" : "Lead Solutions Architect"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-stone-500 font-normal">
                  <span className="flex items-center gap-0.5">
                    <span className="w-0.5 h-2.5 bg-emerald-600 animate-pulse" />
                    <span className="w-0.5 h-3.5 bg-emerald-600 animate-pulse delay-75" />
                    <span className="w-0.5 h-2 bg-emerald-600 animate-pulse delay-150" />
                  </span>
                  <span>Hablando en directo · {activeTranscript.timestamp}</span>
                </div>
              </div>
            </div>

            {/* Spoken Quote */}
            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block">
                Declaración oral capturada
              </span>
              
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentStepIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="font-serif italic text-xl sm:text-2xl text-stone-900 leading-snug"
                >
                  &ldquo;{activeTranscript.text}&rdquo;
                </motion.p>
              </AnimatePresence>

              <p className="text-xs text-stone-400 font-normal pt-1">
                Audio procesado en RAM volátil local · Cero llamadas cloud
              </p>
            </div>

          </div>

          {/* Right Column: Custom High-End Intelligence Presentations (Bespoke per step) */}
          <div className="lg:col-span-6 space-y-4 pt-2 lg:pt-0 lg:border-l lg:border-stone-100 lg:pl-8">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block">
              Razonamiento cognitivo de Dolphin
            </span>

            <AnimatePresence mode="wait">
              
              {/* STEP 1: Bespoke Linear Workflow Pipeline */}
              {currentStepIndex === 0 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5 text-left"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <h4 className="text-sm font-semibold text-stone-950">
                        Flujo de Proceso RBAC Deducido
                      </h4>
                    </div>
                    <p className="text-xs text-stone-500 pl-4">
                      Secuencia obligatoria de autorización antes de la sincronización:
                    </p>
                  </div>

                  {/* Elegant Stepper Chain (No generic pills) */}
                  <div className="pl-4 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="flex flex-col items-center">
                        <span className="w-5 h-5 rounded-full bg-stone-900 text-white font-mono text-[10px] flex items-center justify-center font-semibold">1</span>
                        <span className="w-0.5 h-4 bg-stone-200" />
                      </div>
                      <div className="pb-3">
                        <span className="font-medium text-stone-900">Compra recibida</span>
                        <span className="text-[11px] text-stone-400 ml-2">Evento inicial</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <div className="flex flex-col items-center">
                        <span className="w-5 h-5 rounded-full bg-stone-900 text-white font-mono text-[10px] flex items-center justify-center font-semibold">2</span>
                        <span className="w-0.5 h-4 bg-stone-200" />
                      </div>
                      <div className="pb-3">
                        <span className="font-medium text-stone-900">Revisión preliminar</span>
                        <span className="text-[11px] text-stone-400 ml-2">Validación de stock</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <div className="flex flex-col items-center">
                        <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-mono text-[10px] flex items-center justify-center font-semibold ring-4 ring-emerald-100">3</span>
                        <span className="w-0.5 h-4 bg-stone-200" />
                      </div>
                      <div className="pb-3">
                        <span className="font-semibold text-emerald-950">Aprobación Manager</span>
                        <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 ml-2">Sign-off mandatorio</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <div className="flex flex-col items-center">
                        <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-700 font-mono text-[10px] flex items-center justify-center font-semibold">4</span>
                        <span className="w-0.5 h-4 bg-stone-200" />
                      </div>
                      <div className="pb-3">
                        <span className="font-medium text-stone-800">Contabilidad</span>
                        <span className="text-[11px] text-stone-400 ml-2">Imputación de costos</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <div className="flex flex-col items-center">
                        <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-700 font-mono text-[10px] flex items-center justify-center font-semibold">5</span>
                      </div>
                      <div>
                        <span className="font-medium text-stone-800">Carga ERP</span>
                        <span className="text-[11px] text-stone-400 ml-2">Despacho final</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Bespoke Architectural Translation & Impact Card */}
              {currentStepIndex === 1 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 text-left"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <h4 className="text-sm font-semibold text-stone-950">
                      Traducción de Arquitectura: Idempotencia
                    </h4>
                  </div>

                  <div className="space-y-3 pl-4">
                    <div className="space-y-1">
                      <span className="text-xs font-semibold text-stone-900 block">
                        Definición técnica clara
                      </span>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                        Garantiza que si la red falla y se reenvía la petición 2 o más veces, <strong>el ERP solo procesará la compra una única vez</strong>.
                      </p>
                    </div>

                    <div className="pt-2 space-y-1 border-t border-stone-100">
                      <span className="text-xs font-semibold text-stone-900 block">
                        Impacto para el Negocio & Finanzas
                      </span>
                      <div className="flex items-start gap-2 text-xs text-stone-700">
                        <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>Previene doble facturación automática y desajustes en el balance mensual de compras.</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Bespoke Discrepancy & Clarifying Question Callout */}
              {currentStepIndex === 2 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 text-left"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <h4 className="text-sm font-semibold text-stone-950">
                      Inconsistencia Detectada en Vivo
                    </h4>
                  </div>

                  <div className="space-y-3 pl-4">
                    <div className="space-y-2 text-xs text-stone-700">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-semibold text-stone-900">14:30 (Sarah Jenkins):</span>
                        <span className="text-stone-400">Regla inicial</span>
                      </div>
                      <p className="italic text-stone-600 pl-2 border-l border-stone-200">
                        «Toda compra sin excepción necesita la aprobación del manager.»
                      </p>

                      <div className="flex items-baseline justify-between gap-2 pt-2">
                        <span className="font-semibold text-amber-900">14:35 (Sarah Jenkins):</span>
                        <span className="text-amber-600 font-medium">Excepción no documentada</span>
                      </div>
                      <p className="italic text-stone-900 font-medium pl-2 border-l border-amber-400">
                        «Las compras menores a $500 se procesan de forma automática.»
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-100 space-y-1">
                      <span className="text-xs text-stone-400 font-medium block">
                        Pregunta recomendada para intervenir en la llamada:
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-stone-950 italic">
                        &ldquo;¿Las compras &lt;$500 omiten la aprobación del manager o requieren una notificación asíncrona para auditoría?&rdquo;
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>

        {/* Footer Technical Status Bar */}
        <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3 text-[11px] font-sans text-stone-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium text-stone-600">Buffer Local Activo</span>
          </div>
          <span>Inferencia QVAC On-Device (~12ms) · 0 bytes a servidores externos</span>
        </div>

      </div>

      {/* 3. Floating Picture-in-Picture Video Call Widget */}
      <div className="hidden sm:block absolute -bottom-6 -right-3 md:-bottom-8 md:-right-6 z-30 w-56 sm:w-60 rounded-2xl border border-stone-800 bg-stone-950/95 shadow-2xl p-2.5 space-y-2 text-white backdrop-blur-xl">
        
        {/* Stream 1: Sarah Jenkins */}
        <div className="relative h-18 rounded-xl overflow-hidden bg-stone-900 border border-stone-800">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80"
            alt="Sarah Jenkins"
            className="w-full h-full object-cover grayscale-[0.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-2">
            <span className="text-[11px] font-medium text-stone-200 truncate">Sarah J. (Cliente)</span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
          </div>
        </div>

        {/* Stream 2: Alex Rivera */}
        <div className="relative h-18 rounded-xl overflow-hidden bg-stone-900 border border-stone-800">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80"
            alt="Alex Rivera"
            className="w-full h-full object-cover grayscale-[0.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-2">
            <span className="text-[11px] font-medium text-stone-200 truncate">Alex R. (Arquitecto)</span>
            <Mic className="w-3 h-3 text-stone-400" />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 pt-1 border-t border-stone-800/80">
          <button type="button" className="p-1.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors">
            <Mic className="w-3.5 h-3.5" />
          </button>
          <button type="button" className="p-1.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors">
            <Video className="w-3.5 h-3.5" />
          </button>
          <button type="button" className="p-1.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white transition-colors">
            <PhoneOff className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
}
