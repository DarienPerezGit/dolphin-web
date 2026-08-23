"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../layout/container";
import { PRODUCT_INFO } from "@/content/mock-data";

export function Hero() {
  return (
    <section className="relative flex items-center justify-center py-20 md:py-28 px-4 sm:px-6">
      <Container className="max-w-5xl flex justify-center">
        
        {/* Dark Glassmorphic Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[960px] rounded-[24px] bg-slate-950/45 px-6 py-16 sm:px-12 sm:py-20 text-center backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40"
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

          {/* Actions (Botones estilizados) */}
          <div className="mt-12 sm:mt-14 flex flex-wrap items-center justify-center gap-5">
            {/* Primary Solid Button */}
            <button
              type="button"
              onClick={() => {
                document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex h-14 items-center justify-center rounded-[14px] bg-white px-8 text-base font-medium text-slate-900 shadow-md transition-all hover:bg-zinc-100 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <span>Explorar Simulación</span>
            </button>

            {/* Secondary Glass Button */}
            <a
              href={PRODUCT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-[14px] bg-black/35 px-8 text-base font-medium text-white border border-white/15 shadow-sm transition-all hover:bg-black/55 hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>Ver Código en GitHub</span>
            </a>
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
