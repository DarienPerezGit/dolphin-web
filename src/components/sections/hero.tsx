"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../layout/container";
import { PRODUCT_INFO } from "@/content/mock-data";
import { Sparkles, AlertTriangle, Code2, Check, ArrowRight, Volume2 } from "lucide-react";

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
    <section className="relative min-h-screen overflow-hidden pt-32 pb-24 sm:pt-36 sm:pb-28 px-4 sm:px-6 font-sans text-center flex flex-col items-center justify-center">
      {/* 1. Granola-Style Warm Dark Canvas with Ocean Video Blend */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-35 filter brightness-[0.75] contrast-[1.1]"
        >
          <source src="/videos/water.mp4" type="video/mp4" />
        </video>
        
        {/* Warm Ambient Vignette & Overhead Golden-Ivory Diffusion */}
        <div className="absolute inset-0 bg-[#12110F]/80 mix-blend-multiply" />
        <div className="absolute top-0 inset-x-0 h-96 bg-[radial-gradient(ellipse_at_top,rgba(245,241,232,0.12)_0%,rgba(18,17,15,0.85)_70%,transparent_100%)]" />
      </div>

      <Container className="max-w-5xl relative z-10 flex flex-col items-center">
        
        {/* Top Granola Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#221F1B]/90 px-4 py-1.5 text-xs font-medium text-[#DDD6CA] shadow-lg backdrop-blur-md mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span>Motor QVAC Local</span>
          <span className="text-[#6D675E]">·</span>
          <span className="text-[#A8A196]">Inferencia en tu dispositivo</span>
        </motion.div>

        {/* Granola Headline (Warm, Human, Elegant) */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(44px,5.4vw,74px)] font-normal text-[#FAF6EE] leading-[1.04] tracking-[-0.03em] max-w-4xl"
        >
          Entiende la reunión <br className="hidden sm:inline" />
          <span className="text-[#A8A196] italic font-serif">mientras está pasando.</span>
        </motion.h1>

        {/* Granola Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-[#A8A196] leading-relaxed font-normal"
        >
          Dolphin escucha directamente en tu ordenador, mapea acuerdos, detecta contradicciones inadvertidas y traduce jerga técnica a negocio en tiempo real.
        </motion.p>

        {/* Granola Signature Pill Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={() => {
              document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#F5F1E8] px-7 text-sm font-medium text-[#151311] shadow-xl shadow-black/40 transition-all hover:bg-white hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Explorar Demostración</span>
          </button>

          <a
            href={PRODUCT_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#24211D]/85 px-7 text-sm font-medium text-[#EDE8DF] border border-white/10 shadow-sm transition-all hover:bg-[#2E2A25] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Ver en GitHub</span>
          </a>
        </motion.div>

        {/* 3. Granola Signature Tactile Notepad Card (Live Meeting Intelligence Preview) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 w-full max-w-4xl rounded-2xl border border-white/10 bg-[#191714]/90 p-5 sm:p-7 text-left shadow-2xl shadow-black/80 backdrop-blur-xl"
        >
          {/* Card Topbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
              <span className="font-medium text-[#FAF6EE]">Reunión de Sincronización ERP</span>
              <span className="text-[#595349]">/</span>
              <span className="text-[#A8A196]">Minuto 14:32</span>
            </div>

            {/* Granola Mode Switcher */}
            <div className="flex items-center gap-1.5 p-1 bg-[#12110F] rounded-full border border-white/10">
              <button
                onClick={() => setActiveTab("contradiction")}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  activeTab === "contradiction"
                    ? "bg-[#2C2823] text-[#FAF6EE]"
                    : "text-[#8E867B] hover:text-[#DDD6CA]"
                }`}
              >
                Inconsistencia
              </button>
              <button
                onClick={() => setActiveTab("translation")}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  activeTab === "translation"
                    ? "bg-[#2C2823] text-[#FAF6EE]"
                    : "text-[#8E867B] hover:text-[#DDD6CA]"
                }`}
              >
                Traducción
              </button>
            </div>
          </div>

          {/* Granola Split View: Left (Human Transcript Notes) | Right (AI Marginalia) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-5 items-start">
            
            {/* Left: Spoken Dialogue & Notes */}
            <div className="md:col-span-6 space-y-3.5">
              <div className="text-[11px] font-medium uppercase tracking-wider text-[#8E867B] flex items-center gap-1.5">
                <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Audio en directo (Sarah Jenkins · VP Operaciones)</span>
              </div>
              
              <div className="p-4 rounded-xl bg-[#12110F]/90 border border-white/5 space-y-2">
                <p className="text-sm sm:text-base text-[#EDE8DF] font-serif italic leading-relaxed">
                  {activeTab === "contradiction"
                    ? "«...las compras menores a $500 en realidad se procesan de forma automática sin esperar aprobación.»"
                    : "«Necesitamos que la integración con el ERP sea estrictamente idempotente para evitar errores.»"}
                </p>
                <div className="flex items-center justify-between pt-2 text-[11px] text-[#7C756B]">
                  <span>Transcripción local Whisper (~12ms)</span>
                  <span className="text-emerald-400 font-medium">Sincronizado</span>
                </div>
              </div>
            </div>

            {/* Right: Dolphin AI Cognitive Margin */}
            <div className="md:col-span-6 space-y-3.5">
              <div className="text-[11px] font-medium uppercase tracking-wider text-[#8E867B] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Razonamiento Activo Dolphin</span>
              </div>

              <AnimatePresence mode="wait">
                {activeTab === "contradiction" ? (
                  <motion.div
                    key="contradiction"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="p-4 rounded-xl bg-[#221C16] border border-amber-500/20 space-y-2.5"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-300">
                      <AlertTriangle className="w-4 h-4 text-amber-400" />
                      <span>Discrepancia con acuerdo previo (Min 14:30)</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#DDD4C5] leading-relaxed">
                      Hace 5 minutos se acordó que <em>todas</em> las compras sin excepción requerían firma del manager.
                    </p>
                    <div className="pt-2 border-t border-white/10 text-xs text-[#FAF6EE] font-medium">
                      <strong>Pregunta sugerida:</strong> &ldquo;¿Las compras &lt;$500 omiten firma o llevan notificación asíncrona?&rdquo;
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="translation"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="p-4 rounded-xl bg-[#191F26] border border-sky-500/20 space-y-2.5"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-300">
                      <Code2 className="w-4 h-4 text-sky-400" />
                      <span>Traducción a Negocio: Idempotencia</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#DDD4C5] leading-relaxed">
                      Si la conexión Wi-Fi falla y el sistema reintenta la orden, no se duplicará el cobro ni se generará una doble compra en el ERP.
                    </p>
                    <div className="pt-2 border-t border-white/10 text-xs text-emerald-300 font-medium flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      <span>Protección de integridad contable</span>
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
