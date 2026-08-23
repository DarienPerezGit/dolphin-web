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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-24 px-6 text-center font-sans">
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
        {/* 2. Kled-Style Dark Glassmorphic Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[960px] rounded-[24px] bg-slate-900/35 px-6 py-14 sm:px-12 sm:py-16 text-center backdrop-blur-lg border border-white/10 shadow-2xl shadow-black/50"
        >
          {/* Hero Title (max-w 920px, clamp(40px, 4.5vw, 64px), Weight 450, Leading 1.08, Tracking -0.025em) */}
          <h1 className="max-w-[920px] mx-auto text-[clamp(40px,4.5vw,64px)] font-[450] leading-[1.08] tracking-[-0.025em] text-white">
            Entiende la reunión <br className="hidden sm:inline" />
            <span className="text-white/70">mientras está pasando.</span>
          </h1>

          {/* Hero Subtitle (max-w 820px, margin-top 32px, text 18px, leading 1.4, weight 400, tracking -0.01em) */}
          <p className="max-w-[820px] mx-auto mt-8 text-[18px] font-normal leading-[1.4] tracking-[-0.01em] text-white/85">
            Dolphin sintetiza acuerdos, detecta inconsistencias inadvertidas y traduce jerga técnica a lenguaje de negocio en tiempo real, 100% en tu propio ordenador.
          </p>

          {/* 3. Action Buttons (min-h 56px, px 32px, radius 10px, text 14px, font-medium, gap 20px, mt 56px) */}
          <div className="mt-[56px] flex flex-wrap items-center justify-center gap-5">
            {/* Botón 1: Cristal Oscuro (Explorar Simulación) */}
            <button
              type="button"
              onClick={() => {
                document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex min-h-[56px] items-center justify-center rounded-[10px] bg-black/40 px-8 text-[14px] font-medium leading-none text-white border border-white/20 shadow-sm transition-all hover:bg-black/60 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <span>Explorar Simulación</span>
            </button>

            {/* Botón 2: Blanco Sólido Destacado (Ver Código en GitHub) */}
            <a
              href={PRODUCT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[56px] items-center justify-center rounded-[10px] bg-white px-8 text-[14px] font-medium leading-none text-slate-900 shadow-xl transition-all hover:bg-slate-100 hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>Ver Código en GitHub</span>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
