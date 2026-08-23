"use client";

import React from "react";
import { Container } from "../layout/container";
import { MeetingWindow } from "../product/meeting-window";

export function DemoSection() {
  return (
    <section id="demo" className="py-16 md:py-24 bg-[#F7F5F0] border-b border-[#D8D2C5] scroll-mt-14">
      <Container className="max-w-[1340px] space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-[#D8D2C5]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-editorial-sage font-bold uppercase tracking-widest">
              SIMULACIÓN EN VIVO
            </span>
            <span className="text-[#D8D2C5]">|</span>
            <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal tracking-tight">
              Acta de Sesión y Razonamiento en Directo
            </h2>
          </div>
          <span className="font-mono text-[10px] text-foreground-faded uppercase tracking-widest">
            Buffer Local de Memoria
          </span>
        </div>

        {/* Interactive Folio Window */}
        <div className="w-full">
          <MeetingWindow />
        </div>
      </Container>
    </section>
  );
}
