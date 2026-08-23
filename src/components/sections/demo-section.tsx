"use client";

import React from "react";
import { Container } from "../layout/container";
import { MeetingWindow } from "../product/meeting-window";
import { motion } from "framer-motion";

export function DemoSection() {
  return (
    <section id="demo" className="py-16 md:py-24 bg-[#F7F5F0] border-b border-[#D8D2C5] scroll-mt-14 relative">
      <Container className="max-w-[1360px] space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-[3px] bg-[#E8F3EB] border border-[#D1E0D6] text-editorial-sage text-xs font-semibold font-mono">
            <span>§ 04.0 / SIMULACIÓN INTERACTIVA EN VIVO</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-foreground tracking-tight">
            Acta de Sesión y Razonamiento en Directo
          </h2>
          <p className="font-sans text-sm sm:text-base text-foreground-muted leading-relaxed max-w-2xl mx-auto">
            Explora cómo Dolphin transforma la voz en esquemas de procesos, aclaraciones léxicas y detección de contradicciones en tiempo real.
          </p>
        </div>

        {/* Interactive Folio Window */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <MeetingWindow />
        </motion.div>
      </Container>
    </section>
  );
}
