"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../layout/container";
import { PRODUCT_INFO } from "@/content/mock-data";
import { cn } from "@/lib/utils";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeTab, setActiveTab] = useState<"contradiction" | "translation">("contradiction");

  // Guarantee video playback
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-24 sm:pt-36 sm:pb-28 px-4 sm:px-6 font-sans text-center flex flex-col items-center justify-center bg-[#FAF8F5]">
      {/* 1. Subtle Ocean Video Background with Light Warm Blend */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-20 filter brightness-[1.1] contrast-[0.9]"
        >
          <source src="/videos/water.mp4" type="video/mp4" />
        </video>
        
        {/* Warm Ambient Diffusion */}
        <div className="absolute inset-0 bg-[#FAF8F5]/85 mix-blend-screen" />
        <div className="absolute top-0 inset-x-0 h-96 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.85)_0%,rgba(250,248,245,0.5)_60%,transparent_100%)]" />
      </div>

      <Container className="max-w-5xl relative z-10 flex flex-col items-center">
        
        {/* Granola Headline (Warm Light Aesthetic, Clean Ink Typography) */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(44px,5.4vw,74px)] font-normal text-stone-950 leading-[1.04] tracking-[-0.03em] max-w-4xl"
        >
          Entiende la reunión <br className="hidden sm:inline" />
          <span className="text-stone-500 italic font-serif">mientras está pasando.</span>
        </motion.h1>

        {/* Granola Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-stone-600 leading-relaxed font-normal"
        >
          Dolphin escucha directamente en tu ordenador, mapea acuerdos, detecta contradicciones inadvertidas y traduce jerga técnica a negocio en tiempo real.
        </motion.p>

        {/* Granola Signature Pill Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={() => {
              document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex h-12 items-center justify-center rounded-full bg-stone-950 px-7 text-sm font-medium text-white shadow-md transition-all hover:bg-stone-800 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Explorar Demostración</span>
          </button>

          <a
            href={PRODUCT_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-medium text-stone-800 border border-stone-200/90 shadow-sm transition-all hover:bg-stone-50 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Ver en GitHub</span>
          </a>
        </motion.div>

        {/* 3. Bespoke Editorial Live Intelligence Canvas (Anti-Boxed, High-End Typography & Marginalia) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 w-full max-w-4xl rounded-3xl border border-stone-200/80 bg-white/95 p-6 sm:p-10 text-left shadow-2xl shadow-stone-900/5 backdrop-blur-xl space-y-8"
        >
          {/* Header Bar: Speaker Presence & Minimal Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-100">
            {/* Active Speaker with Live Voice Waveform */}
            <div className="flex items-center gap-3">
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={
                    activeTab === "contradiction"
                      ? "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80"
                      : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                  }
                  alt="Speaker"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-stone-100"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
              </div>

              <div>
                <div className="text-sm font-semibold text-stone-900 flex items-center gap-2">
                  <span>{activeTab === "contradiction" ? "Sarah Jenkins" : "Alex Rivera"}</span>
                  <span className="text-xs font-normal text-stone-400">
                    {activeTab === "contradiction" ? "· VP Operaciones" : "· Solutions Architect"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-stone-500 font-normal">
                  <span className="flex items-center gap-0.5">
                    <span className="w-0.5 h-2.5 bg-emerald-600 animate-pulse" />
                    <span className="w-0.5 h-3.5 bg-emerald-600 animate-pulse delay-75" />
                    <span className="w-0.5 h-2 bg-emerald-600 animate-pulse delay-150" />
                  </span>
                  <span>Hablando en directo · 14:32</span>
                </div>
              </div>
            </div>

            {/* Seamless Underline Switcher */}
            <div className="flex items-center gap-6 text-xs font-medium">
              <button
                type="button"
                onClick={() => setActiveTab("contradiction")}
                className={cn(
                  "pb-1 transition-colors cursor-pointer relative",
                  activeTab === "contradiction"
                    ? "text-stone-950 font-semibold"
                    : "text-stone-400 hover:text-stone-700"
                )}
              >
                <span>Detección de Contradicción</span>
                {activeTab === "contradiction" && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-950 rounded-full"
                  />
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("translation")}
                className={cn(
                  "pb-1 transition-colors cursor-pointer relative",
                  activeTab === "translation"
                    ? "text-stone-950 font-semibold"
                    : "text-stone-400 hover:text-stone-700"
                )}
              >
                <span>Traducción a Negocio</span>
                {activeTab === "translation" && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-950 rounded-full"
                  />
                )}
              </button>
            </div>
          </div>

          {/* Pure Typography Split Stream (Anti-Boxed) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Natural Spoken Dialogue (Rich Typography) */}
            <div className="lg:col-span-6 space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block">
                Transcripción oral en tiempo real
              </span>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTab}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="font-serif italic text-xl sm:text-2xl text-stone-900 leading-snug"
                >
                  {activeTab === "contradiction"
                    ? "«...las compras menores a $500 en realidad se procesan de forma automática sin esperar sign-off.»"
                    : "«Tendremos que hacer esa operación de sincronización con el ERP estrictamente idempotente.»"}
                </motion.p>
              </AnimatePresence>

              <div className="text-xs text-stone-400 pt-1 font-normal">
                Audio procesado en RAM volátil · Cero paquetes a la nube
              </div>
            </div>

            {/* Right Column: Dolphin Active Marginalia (Intentional Editorial Annotation) */}
            <div className="lg:col-span-6 space-y-4 pt-1 lg:pt-0 lg:border-l lg:border-stone-100 lg:pl-8">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block">
                Razonamiento cognitivo de Dolphin
              </span>

              <AnimatePresence mode="wait">
                {activeTab === "contradiction" ? (
                  <motion.div
                    key="contradiction"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="space-y-3"
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-1" />
                      <h4 className="text-sm font-semibold text-stone-950">
                        Discrepancia con regla acordada a las 14:30
                      </h4>
                    </div>

                    <p className="text-sm text-stone-600 leading-relaxed font-normal pl-4">
                      Hace dos minutos se definió que <em>todas</em> las compras requieren aprobación del manager antes de enviarse.
                    </p>

                    <div className="pl-4 pt-2 space-y-1">
                      <span className="text-xs text-stone-400 font-medium block">
                        Pregunta recomendada para intervenir:
                      </span>
                      <p className="text-sm font-medium text-stone-900 italic">
                        &ldquo;¿Las órdenes &lt;$500 omiten la aprobación o requieren notificación asíncrona para auditoría?&rdquo;
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="translation"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="space-y-3"
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1" />
                      <h4 className="text-sm font-semibold text-stone-950">
                        Concepto de Arquitectura: Idempotencia
                      </h4>
                    </div>

                    <p className="text-sm text-stone-600 leading-relaxed font-normal pl-4">
                      Significa que si la red falla y la orden se envía dos o más veces, el sistema <strong>no duplicará cobros ni creará registros repetidos en el ERP</strong>.
                    </p>

                    <div className="pl-4 pt-2 space-y-1">
                      <span className="text-xs text-stone-400 font-medium block">
                        Impacto para el negocio:
                      </span>
                      <p className="text-sm font-medium text-stone-900">
                        Protege contra errores de doble facturación ante micro-cortes de conexión Wi-Fi.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </motion.div>

      </Container>
    </section>
  );
}
