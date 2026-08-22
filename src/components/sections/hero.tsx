"use client";

import React from "react";
import { Container } from "../layout/container";
import { Button } from "../ui/button";
import { MeetingWindow } from "../product/meeting-window";
import { PRODUCT_INFO } from "@/content/mock-data";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-[84px] pb-[72px] px-6 text-center bg-white overflow-hidden">
      <Container className="relative">
        {/* Main Headline */}
        <h1 className="max-w-[920px] mx-auto text-[clamp(44px,5.2vw,72px)] font-[450] text-zinc-950 leading-[1.02] tracking-[-0.035em]">
          Understand the meeting <br className="hidden sm:inline" />
          while you&apos;re still in it.
        </h1>

        {/* Subtitle */}
        <p className="max-w-[820px] mx-auto mt-8 text-[20px] sm:text-[23px] text-zinc-600 font-normal leading-[1.25] tracking-[-0.015em]">
          {PRODUCT_INFO.subHeadline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-5 mt-[56px]">
          <Button
            onClick={() => {
              document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="min-h-[56px] px-8 rounded-[13px] text-base font-medium bg-zinc-950 text-white hover:bg-zinc-800 transition-colors gap-2 cursor-pointer shadow-xs"
          >
            <span>Ver demostración interactiva</span>
            <ArrowRight className="w-4 h-4 text-zinc-400" />
          </Button>

          <a
            href={PRODUCT_INFO.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex"
          >
            <Button 
              variant="outline"
              className="min-h-[56px] px-8 rounded-[13px] text-base font-medium text-zinc-800 border-zinc-200 hover:bg-zinc-50 transition-colors bg-white cursor-pointer"
            >
              <span>Explorar en GitHub</span>
            </Button>
          </a>
        </div>

        {/* Social Proof / On-Device Trust Line */}
        <div className="mt-[84px] text-xs font-normal text-zinc-400 flex items-center justify-center gap-6">
          <span>Inferencia local on-device</span>
          <span>·</span>
          <span>100% privado y sin servidores externos</span>
          <span>·</span>
          <span>Cero latencia cloud</span>
        </div>

        {/* Interactive Live Demo Area */}
        <div id="demo" className="mt-16 max-w-5xl mx-auto scroll-mt-24">
          <MeetingWindow />
        </div>
      </Container>
    </section>
  );
}
