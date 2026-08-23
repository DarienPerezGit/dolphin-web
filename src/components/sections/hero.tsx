"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Container } from "../layout/container";
import { PRODUCT_INFO } from "@/content/mock-data";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Guarantee video autoplay on all browsers
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Fallback or ignore if autoplay restricted
      });
    }
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-24 px-4 sm:px-6">
      {/* 1. Fullscreen Looping Video Background starting from the absolute top (behind Navbar) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/videos/water.mp4" type="video/mp4" />
        </video>
        
        {/* Subtle Darkening Overlay for Immersive Contrast */}
        <div className="absolute inset-0 bg-black/35 mix-blend-multiply" />
      </div>

      <Container className="max-w-5xl flex justify-center relative z-10">
        {/* 2. Real Dark Glassmorphism Card (Translucent, deep blur, micro-border) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[960px] rounded-[24px] bg-slate-900/30 px-6 py-16 sm:px-12 sm:py-20 text-center backdrop-blur-lg border border-white/10 shadow-2xl shadow-black/50"
        >
          {/* Hero Title */}
          <h1 className="font-sans text-[clamp(40px,5vw,68px)] font-medium leading-[1.05] tracking-[-0.02em] text-white">
            Entiende la reunión <br className="hidden sm:inline" />
            <span className="text-white/70">mientras está pasando.</span>
          </h1>

          {/* Hero Subtitle */}
          <p className="mx-auto mt-8 max-w-[760px] font-sans text-[clamp(18px,2vw,24px)] font-normal leading-[1.4] text-white/85">
            Dolphin sintetiza acuerdos, detecta inconsistencias inadvertidas y traduce jerga técnica a lenguaje de negocio en tiempo real, 100% en tu propio ordenador.
          </p>

          {/* 3. Inverted Buttons (Botón 1: Dark Glass | Botón 2: Solid White Standout) */}
          <div className="mt-12 sm:mt-14 flex flex-wrap items-center justify-center gap-5">
            {/* Botón 1: Cristal Oscuro (Explorar Simulación) */}
            <button
              type="button"
              onClick={() => {
                document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex h-14 items-center justify-center rounded-[14px] bg-black/40 px-8 text-base font-medium text-white border border-white/20 shadow-sm transition-all hover:bg-black/60 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <span>Explorar Simulación</span>
            </button>

            {/* Botón 2: Blanco Sólido Destacado (Ver Código en GitHub) */}
            <a
              href={PRODUCT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-[14px] bg-white px-8 text-base font-medium text-slate-900 shadow-xl transition-all hover:bg-slate-100 hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>Ver Código en GitHub</span>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
