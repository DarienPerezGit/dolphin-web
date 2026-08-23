import React from "react";
import { Container } from "../layout/container";
import { Badge } from "../ui/badge";
import { CANONICAL_USE_CASES } from "@/content/mock-data";

export function UseCases() {
  return (
    <section id="use-cases" className="py-16 md:py-24 bg-background border-b border-border">
      <Container className="space-y-12 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="neutral">§ 09.0 / PRACTICAL APPLICATIONS</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-normal tracking-tight">
            Targeted domains of deployment
          </h2>
          <p className="font-sans text-sm sm:text-base text-foreground-muted">
            Engineered specifically for cross-functional sessions where misunderstanding carries compounding technical debt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CANONICAL_USE_CASES.map((uc, idx) => (
            <div
              key={uc.id}
              className="p-6 rounded-[4px] border border-border bg-paper-light space-y-4 hover:border-border-strong transition-all flex flex-col justify-between"
            >
              <div className="space-y-3 font-sans">
                <div className="flex items-center justify-between pb-2 border-b border-border-subtle font-mono text-[10px]">
                  <span className="text-foreground-faded font-semibold">CASE STUDY 0{idx + 1}</span>
                  <span className="text-foreground-muted uppercase tracking-widest bg-paper px-2 py-0.5 rounded-[2px] border border-border">
                    {uc.targetRole}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-medium text-foreground">
                    {uc.title}
                  </h3>
                  <p className="text-xs text-foreground font-medium">
                    {uc.valueProposition}
                  </p>
                </div>

                <p className="text-xs text-foreground-muted leading-relaxed font-serif italic border-l border-border-strong pl-3">
                  &ldquo;{uc.scenarioSnippet}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
