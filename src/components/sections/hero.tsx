"use client";

import React from "react";
import { Container } from "../layout/container";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { MeetingWindow } from "../product/meeting-window";
import { PRODUCT_INFO } from "@/content/mock-data";
import { ArrowRight, ShieldCheck, Sparkles, Github, Zap, Lock, Cpu } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background subtle radial gradient & ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/50 via-emerald-50/20 to-transparent blur-3xl pointer-events-none" />

      <Container className="space-y-10 text-center relative">
        {/* Badge & Pill */}
        <div className="inline-flex items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-zinc-200 shadow-xs hover:border-zinc-300 transition-colors backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-zinc-800 tracking-tight font-mono">
              Live Intelligence Layer
            </span>
            <span className="text-zinc-300">|</span>
            <span className="text-xs text-zinc-500 font-medium flex items-center gap-1">
              <Cpu className="w-3 h-3 text-blue-600" />
              Powered by QVAC Local AI
            </span>
          </div>
        </div>

        {/* Hero Headlines */}
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-900 leading-[1.08]">
            Understand the meeting <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-600">
              while you&apos;re still in it.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed font-normal">
            {PRODUCT_INFO.subHeadline}
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <Button
            size="lg"
            onClick={() => {
              document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="gap-2.5 shadow-lg bg-zinc-900 hover:bg-black text-white px-6 py-3.5 text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Probar la Demostración</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </Button>

          <a
            href={PRODUCT_INFO.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex"
          >
            <Button variant="outline" size="lg" className="gap-2 bg-white/80 backdrop-blur-xs border-zinc-300 hover:bg-zinc-100/80 text-zinc-800 font-medium">
              <Github className="w-4 h-4" />
              <span>Ver en GitHub</span>
            </Button>
          </a>
        </div>

        {/* Value Badges Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-medium text-zinc-600">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50/80 border border-emerald-200/80 text-emerald-800">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% On-Device · Privacidad Absoluta</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200/80 text-blue-800">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Semántica en Tiempo Real</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50/80 border border-amber-200/80 text-amber-800">
            <Zap className="w-3.5 h-3.5 text-amber-600" />
            <span>Detección de Contradicciones</span>
          </span>
        </div>

        {/* Interactive Live Demo Window with subtle floating badge */}
        <div id="demo" className="pt-8 max-w-5xl mx-auto scroll-mt-20">
          <MeetingWindow />
        </div>
      </Container>
    </section>
  );
}
