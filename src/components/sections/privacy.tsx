import React from "react";
import { Container } from "../layout/container";
import { Badge } from "../ui/badge";
import { PRIVACY_COMPARISON } from "@/content/mock-data";

export function Privacy() {
  return (
    <section id="privacy" className="py-16 md:py-24 bg-background border-b border-border">
      <Container className="space-y-12 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="sage">§ 07.0 / THE LOCAL CONSTITUTION</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-normal tracking-tight">
            Conversational data resides solely on your machine
          </h2>
          <p className="font-sans text-sm sm:text-base text-foreground-muted">
            Executive strategy, client commitments, and internal negotiations should not be transmitted across external network perimeters.
          </p>
        </div>

        {/* Architecture Flow Comparison Plates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* On-device architecture */}
          <div className="p-6 sm:p-8 rounded-[4px] border border-editorial-sage bg-paper-light space-y-5 shadow-card">
            <div className="flex items-center justify-between pb-2 border-b border-border-subtle font-mono text-[10px]">
              <span className="text-editorial-sage font-semibold uppercase tracking-wider">
                EXHIBIT 7A — LOCAL ARCHITECTURE
              </span>
              <span className="text-editorial-sage bg-editorial-sage-bg px-1.5 py-0.2 rounded-[2px] border border-[#D1E0D6]">
                Zero Cloud Leakage
              </span>
            </div>

            {/* Simple Clean Schematic */}
            <div className="p-4 rounded-[4px] bg-paper border border-border space-y-2.5 font-mono text-[11px] text-center">
              <div className="p-2 bg-paper-light border border-border text-foreground font-medium rounded-[2px]">
                Microphone / Audio Buffer
              </div>
              <div className="text-foreground-faded text-[10px]">↓ (Direct OS Pipe to RAM)</div>
              <div className="p-2 bg-editorial-sage-bg border border-[#D1E0D6] text-editorial-sage font-medium rounded-[2px]">
                Local Inference (QVAC On-Device Engine)
              </div>
              <div className="text-foreground-faded text-[10px]">↓ (Zero Network IO)</div>
              <div className="p-2 bg-paper-light border border-border text-foreground font-medium rounded-[2px]">
                Structured Marginalia on Display
              </div>
            </div>

            <p className="font-sans text-xs text-foreground-muted leading-relaxed">
              Audio vectors exist solely within local volatile memory. Zero telemetry of conversation content and full compliance with sovereign privacy protocols.
            </p>
          </div>

          {/* Cloud traditional architecture */}
          <div className="p-6 sm:p-8 rounded-[4px] border border-border bg-paper space-y-5">
            <div className="flex items-center justify-between pb-2 border-b border-border-subtle font-mono text-[10px]">
              <span className="text-foreground-faded font-semibold uppercase tracking-wider">
                EXHIBIT 7B — CLOUD RECORDERS
              </span>
              <span className="text-foreground-faded bg-surface px-1.5 py-0.2 rounded-[2px] border border-border">
                Third-Party Transit
              </span>
            </div>

            {/* Simple Box Diagram */}
            <div className="p-4 rounded-[4px] bg-paper-light border border-border space-y-2.5 font-mono text-[11px] text-center">
              <div className="p-2 bg-paper border border-border text-foreground font-medium rounded-[2px]">
                Microphone / Audio Buffer
              </div>
              <div className="text-editorial-terracotta text-[10px]">↓ (Encrypted Internet Transit)</div>
              <div className="p-2 bg-editorial-terracotta-bg border border-[#ECC9C2] text-editorial-terracotta font-medium rounded-[2px]">
                Third-Party Cloud Servers & Storage
              </div>
              <div className="text-foreground-faded text-[10px]">↓ (Round-trip Latency)</div>
              <div className="p-2 bg-paper border border-border text-foreground font-medium rounded-[2px]">
                Summary Returned Hours Later
              </div>
            </div>

            <p className="font-sans text-xs text-foreground-muted leading-relaxed">
              Subject to third-party data retention policies, multi-tenant risk, sub-processor changes, and perpetual cloud exposure.
            </p>
          </div>
        </div>

        {/* Feature Comparison Ledger Table */}
        <div className="border border-border rounded-[4px] overflow-hidden bg-paper-light">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-surface border-b border-border font-mono text-[10px] uppercase tracking-wider text-foreground">
                <tr>
                  <th className="py-2.5 px-4 sm:px-6">Attribute</th>
                  <th className="py-2.5 px-4 sm:px-6 text-editorial-sage bg-editorial-sage-bg/40">Dolphin (On-Device)</th>
                  <th className="py-2.5 px-4 sm:px-6 text-foreground-muted">Cloud SaaS Assistants</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {PRIVACY_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-paper/50">
                    <td className="py-2.5 px-4 sm:px-6 font-medium text-foreground">
                      {row.feature}
                    </td>
                    <td className="py-2.5 px-4 sm:px-6 text-editorial-sage font-mono text-[11px] bg-editorial-sage-bg/15">
                      {row.dolphinOnDevice}
                    </td>
                    <td className="py-2.5 px-4 sm:px-6 text-foreground-muted font-mono text-[11px]">
                      {row.traditionalCloud}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}
