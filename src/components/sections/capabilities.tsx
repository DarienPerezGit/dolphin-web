import React from "react";
import { Container } from "../layout/container";
import { Badge } from "../ui/badge";
import { CANONICAL_CAPABILITIES } from "@/content/mock-data";

export function Capabilities() {
  return (
    <section id="capabilities" className="py-16 md:py-24 bg-background border-b border-border">
      <Container className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="neutral">§ 03.0 / CORE INSTRUMENTS</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-normal tracking-tight">
            Six instruments of real-time comprehension
          </h2>
          <p className="font-sans text-sm sm:text-base text-foreground-muted">
            Engineered for meetings where technical architecture, business constraints, and product requirements collide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CANONICAL_CAPABILITIES.map((cap, index) => (
            <div
              key={cap.id}
              className="p-6 rounded-[4px] border border-border bg-paper-light hover:border-border-strong hover:shadow-card transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-[10px] text-foreground-faded pb-2 border-b border-border-subtle">
                  <span>NO. 0{index + 1}</span>
                  <span className="uppercase tracking-widest">{cap.shortDescription}</span>
                </div>

                <h3 className="font-serif text-lg font-medium text-foreground tracking-tight">
                  {cap.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-foreground-muted leading-relaxed">
                  {cap.detailedDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
