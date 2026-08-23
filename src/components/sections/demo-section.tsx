"use client";

import React from "react";
import { Container } from "../layout/container";
import { MeetingWindow } from "../product/meeting-window";
import { Boxes } from "../ui/background-boxes";

export function DemoSection() {
  return (
    <section id="demo" className="relative py-24 sm:py-32 bg-[#FAF8F5] scroll-mt-14 font-sans overflow-hidden select-none">
      
      {/* 1. Interactive Background Boxes Grid (Matching Carousel & Infographies) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-auto z-0">
        <Boxes />
        <div className="absolute inset-0 w-full h-full bg-[#FAF8F5]/50 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      </div>

      <Container className="max-w-6xl space-y-12 text-left relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-stone-950 tracking-[-0.03em] leading-tight">
            Acta de reunión y razonamiento <br className="hidden sm:inline" />
            <span className="text-stone-500 italic font-serif">en directo.</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            Observa el flujo de una conversación real, la transcripción instantánea y cómo Dolphin detecta discrepancias de reglas y clarificaciones técnicas al vuelo.
          </p>
        </div>

        {/* Interactive Folio Window with Blue Accent Block and PiP Video */}
        <div className="w-full">
          <MeetingWindow />
        </div>
      </Container>
    </section>
  );
}
