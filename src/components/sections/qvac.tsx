import React from "react";
import { Container } from "../layout/container";
import { Badge } from "../ui/badge";

export function QvacSection() {
  return (
    <section id="qvac" className="py-16 md:py-24 bg-paper border-b border-border">
      <Container className="space-y-12 max-w-5xl">
        <div className="p-8 sm:p-10 rounded-[4px] border border-border bg-paper-light space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border-subtle">
            <div className="space-y-1">
              <Badge variant="neutral">§ 08.0 / TECHNICAL MONOGRAPH</Badge>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal tracking-tight">
                Powered on-device by QVAC
              </h2>
            </div>

            <span className="font-mono text-[10px] text-foreground-muted px-2.5 py-1 rounded-[2px] bg-paper border border-border w-fit uppercase tracking-widest">
              By Tether
            </span>
          </div>

          <p className="font-sans text-xs sm:text-sm text-foreground-muted leading-relaxed">
            Dolphin leverages <strong>QVAC by Tether</strong> as its on-device cognitive substrate—enabling neural acoustic transcription, contextual graph reasoning, and semantic lookup to execute directly on consumer silicon with zero cloud dependencies.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-sans">
            <div className="p-4 rounded-[4px] bg-paper border border-border space-y-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-editorial-sage font-semibold block">
                01. Hardware Efficiency
              </span>
              <h4 className="font-serif text-sm font-semibold text-foreground">Compact Quantization</h4>
              <p className="text-xs text-foreground-muted leading-relaxed">
                Optimized footprint running comfortably on standard desktop RAM and low-power hardware.
              </p>
            </div>

            <div className="p-4 rounded-[4px] bg-paper border border-border space-y-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-editorial-ochre font-semibold block">
                02. Pipeline Speed
              </span>
              <h4 className="font-serif text-sm font-semibold text-foreground">Sub-Second Turnaround</h4>
              <p className="text-xs text-foreground-muted leading-relaxed">
                Continuous acoustic parsing in milliseconds to surface queries before discussion topics shift.
              </p>
            </div>

            <div className="p-4 rounded-[4px] bg-paper border border-border space-y-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-editorial-lavender font-semibold block">
                03. Data Sovereignty
              </span>
              <h4 className="font-serif text-sm font-semibold text-foreground">Zero External Exposure</h4>
              <p className="text-xs text-foreground-muted leading-relaxed">
                Native compliance for air-gapped workstations, defense, medical, and legal negotiations.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
