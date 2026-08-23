import React from "react";
import { Container } from "../layout/container";
import { Badge } from "../ui/badge";

export function Problem() {
  return (
    <section id="problem" className="py-16 md:py-24 bg-paper border-b border-border">
      <Container className="space-y-12 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="neutral">§ 02.0 / THE EDITORIAL GAP</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-normal tracking-tight">
            The disparity between verbatim audio and cognitive meaning
          </h2>
          <p className="font-sans text-sm sm:text-base text-foreground-muted leading-relaxed">
            Conventional assistants ask, <em>“What words were spoken?”</em> Dolphin builds an active, structured mental model to ask, <em>“What does this mean for our system?”</em>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {/* Traditional transcription column */}
          <div className="p-6 sm:p-8 rounded-[4px] border border-border bg-paper-light space-y-5">
            <div className="space-y-1 pb-4 border-b border-border-subtle">
              <span className="font-mono text-[10px] uppercase tracking-widest text-foreground-faded">
                EXHIBIT A — CONVENTIONAL RECORDERS
              </span>
              <h3 className="font-serif text-xl text-foreground font-medium">
                Passive Transcripts & Delayed Summaries
              </h3>
            </div>

            <ul className="space-y-3 font-sans text-xs text-foreground-muted leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-editorial-terracotta text-[11px]">—</span>
                <span>Produces dense, unstructured walls of verbatim text that require extensive manual reading afterward.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-editorial-terracotta text-[11px]">—</span>
                <span>Generates broad summaries hours after the meeting concludes, when questions can no longer be asked directly.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-editorial-terracotta text-[11px]">—</span>
                <span>Routes sensitive audio streams to third-party cloud infrastructure without verifiable local boundaries.</span>
              </li>
            </ul>
          </div>

          {/* Dolphin cognitive approach */}
          <div className="p-6 sm:p-8 rounded-[4px] border border-foreground bg-surface space-y-5 shadow-paper">
            <div className="space-y-1 pb-4 border-b border-border">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-editorial-sage font-semibold">
                  EXHIBIT B — DOLPHIN COGNITIVE LAYER
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.2 rounded-[2px] bg-editorial-sage-bg text-editorial-sage border border-[#D1E0D6]">
                  Real-time
                </span>
              </div>
              <h3 className="font-serif text-xl text-foreground font-medium">
                Active Reasoning & Real-Time Marginalia
              </h3>
            </div>

            <ul className="space-y-3 font-sans text-xs text-foreground leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-editorial-sage text-[11px] font-bold">✓</span>
                <span>Extracts sequential process workflows, system dependencies, and technical definitions concurrently as words are spoken.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-editorial-sage text-[11px] font-bold">✓</span>
                <span>Surfaces logical contradictions and suggests clarifying queries while all stakeholders remain in the room.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-editorial-sage text-[11px] font-bold">✓</span>
                <span>100% on-device execution: zero voice bytes leave local RAM, preserving complete operational confidentiality.</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
