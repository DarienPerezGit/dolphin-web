"use client";

import React from "react";
import { Container } from "../layout/container";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { MeetingWindow } from "../product/meeting-window";
import { PRODUCT_INFO } from "@/content/mock-data";
import { ArrowRight, ShieldCheck, Sparkles, Github } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Background subtle radial gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100/80 via-background to-background" />

      <Container className="space-y-10 text-center">
        {/* Badge & Pill */}
        <div className="inline-flex items-center gap-2">
          <Badge variant="neutral" className="py-1 px-3 gap-2 bg-white/90 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-zinc-700 font-medium">Local-First Meeting Intelligence</span>
          </Badge>
        </div>

        {/* Hero Headlines */}
        <div className="max-w-4xl mx-auto space-y-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
            Understand the meeting <br className="hidden sm:inline" />
            <span className="text-foreground/85">while you&apos;re still in it.</span>
          </h1>

          <p className="text-lg sm:text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed font-normal">
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
            className="gap-2 shadow-md hover:shadow-lg transition-all"
          >
            <span>See how it works</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          <a
            href={PRODUCT_INFO.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex"
          >
            <Button variant="outline" size="lg" className="gap-2">
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
            </Button>
          </a>
        </div>

        {/* Value badges bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-medium text-foreground-muted">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Private by design · On-Device</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Semantics beyond transcription</span>
          </span>
        </div>

        {/* Interactive Live Demo Window */}
        <div id="demo" className="pt-6 max-w-5xl mx-auto scroll-mt-24">
          <MeetingWindow />
        </div>
      </Container>
    </section>
  );
}
