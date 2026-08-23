"use client";

import React from "react";
import { Container } from "../layout/container";
import { PRODUCT_INFO } from "@/content/mock-data";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-12 pb-12 md:pt-16 md:pb-14 bg-[#FBF9F5]">
      <Container className="space-y-6 text-center max-w-4xl">
        {/* Folio Tag Stamp */}
        <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground-muted px-3 py-1 border border-[#D8D2C5] bg-[#F5F2EB] rounded-[3px]">
          <span className="w-1.5 h-1.5 rounded-full bg-editorial-sage" />
          <span>CAPA COGNITIVA LOCAL · INFERENCIA EN DISPOSITIVO</span>
        </div>

        {/* Hero Headlines */}
        <div className="space-y-3">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-[1.08]">
            Entiende la reunión <br className="hidden sm:inline" />
            <span className="italic text-foreground-muted">mientras está pasando.</span>
          </h1>

          <p className="font-sans text-base sm:text-lg md:text-xl text-foreground-muted max-w-xl mx-auto leading-relaxed font-normal">
            Dolphin mantiene un modelo mental activo y privado de tus conversaciones en tiempo real.
          </p>
        </div>

        {/* Essential Invocations */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-1 font-mono text-xs">
          <a
            href="#demo"
            className="inline-flex items-center justify-center px-4 py-2 font-mono uppercase tracking-wider text-background bg-foreground rounded-[3px] hover:bg-[#292524] transition-colors"
          >
            Ver Simulación ↓
          </a>

          <a
            href={PRODUCT_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 font-mono uppercase tracking-wider text-foreground bg-[#FBF9F5] border border-[#D8D2C5] rounded-[3px] hover:border-foreground transition-colors"
          >
            <span>Código Fuente</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </Container>
    </section>
  );
}
