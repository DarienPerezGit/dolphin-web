"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "../layout/container";
import { PRODUCT_INFO } from "@/content/mock-data";

export function Hero() {
  // Superhuman-style seamless keyboard shortcuts listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.code === "Space") {
        e.preventDefault();
        document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        window.open(PRODUCT_INFO.githubUrl, "_blank", "noopener,noreferrer");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="relative overflow-hidden bg-stone-50 py-24 sm:py-32">
      {/* Kled-style airy ambient light wash (Borderless, purely diffuse) */}
      <div 
        className="pointer-events-none absolute -top-48 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-stone-200/40 via-stone-100/20 to-transparent blur-3xl"
        aria-hidden="true" 
      />

      <Container className="max-w-6xl">
        <div className="flex flex-col items-center text-center">
          
          {/* 1. Strict Hero Title (Anti-Boxed, Pure Sans-serif, High Impact) */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(48px,5.2vw,72px)] font-normal leading-[1.02] tracking-[-0.03em] text-stone-950 font-sans"
          >
            Entiende la reunión <br className="hidden sm:inline" />
            <span className="text-stone-500 font-normal">mientras está pasando.</span>
          </motion.h1>

          {/* 2. Hero Subtitle (Folk Warmth, Generous Width, Strict Sans-serif) */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-3xl text-xl sm:text-2xl font-normal leading-[1.3] text-stone-600 font-sans"
          >
            Dolphin sintetiza acuerdos, detecta inconsistencias inadvertidas y traduce jerga técnica a lenguaje de negocio en tiempo real, 100% en tu propio ordenador.
          </motion.p>

          {/* 3. Action Invocations (Folk Geometry + Integrated Mimetized Shortcuts) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            {/* Primary Action Button */}
            <button
              type="button"
              onClick={() => {
                document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex h-14 items-center justify-center rounded-[14px] bg-stone-900 px-8 text-base font-medium text-white shadow-lg shadow-stone-900/10 transition-all hover:bg-stone-800 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <span>Explorar Simulación</span>
            </button>

            {/* Secondary Action Button */}
            <a
              href={PRODUCT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-[14px] border border-stone-200/90 bg-white/80 px-8 text-base font-medium text-stone-800 shadow-2xs transition-all hover:bg-white hover:border-stone-300 hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>Ver Código en GitHub</span>
            </a>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
