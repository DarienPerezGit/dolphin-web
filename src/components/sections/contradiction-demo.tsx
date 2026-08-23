import React from "react";
import { Container } from "../layout/container";
import { Badge } from "../ui/badge";

export function ContradictionDemo() {
  return (
    <section id="contradiction" className="py-16 md:py-24 bg-paper border-b border-border">
      <Container className="space-y-12 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="ochre">§ 06.0 / CONFLICT AUDIT</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-normal tracking-tight">
            Surfacing logical discrepancies in real time
          </h2>
          <p className="font-sans text-sm sm:text-base text-foreground-muted">
            In extended working sessions, assumptions shift without notice. Dolphin flags conflicting business logic immediately.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-[4px] border border-border bg-paper-light space-y-6">
          {/* Chronological discrepancy flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-[4px] bg-paper border border-border space-y-2">
              <div className="flex items-center justify-between font-mono text-[10px] pb-1 border-b border-border-subtle">
                <span className="text-foreground-faded font-semibold">RECORDED AT 10:14 AM</span>
                <span className="uppercase text-foreground-muted">Initial Assertion</span>
              </div>
              <p className="font-serif text-sm italic text-foreground leading-relaxed">
                &ldquo;Every purchase without exception requires manager sign-off prior to accounting dispatch.&rdquo;
              </p>
            </div>

            <div className="p-4 rounded-[4px] bg-editorial-ochre-bg border border-[#E8DEC7] space-y-2">
              <div className="flex items-center justify-between font-mono text-[10px] pb-1 border-b border-[#E8DEC7]">
                <span className="text-editorial-ochre font-semibold">RECORDED AT 10:27 AM</span>
                <span className="uppercase text-editorial-ochre">Contradictory Claim</span>
              </div>
              <p className="font-serif text-sm italic text-foreground leading-relaxed">
                &ldquo;Purchases below $500 actually go through automatically without waiting for manager sign-off.&rdquo;
              </p>
            </div>
          </div>

          {/* Dolphin Inferred Insight */}
          <div className="p-4 sm:p-5 rounded-[4px] border-l-2 border-l-editorial-ochre border border-border bg-surface space-y-2.5 font-sans">
            <div className="flex items-center justify-between font-mono text-[10px] pb-1 border-b border-border-subtle">
              <span className="text-editorial-ochre font-bold uppercase tracking-wider">
                AUDIT NOTE: UNRESOLVED RULE EXCEPTION
              </span>
              <span className="text-foreground-faded">MARGINAL QUERY</span>
            </div>

            <p className="text-xs text-foreground leading-relaxed">
              <strong>Observed conflict:</strong> The specification contains an unhandled exception path regarding the $500 threshold and automated processing bypass.
            </p>

            <div className="pt-2 border-t border-border-subtle text-xs text-foreground-muted font-serif italic">
              <strong>Suggested inquiry for the room:</strong> &ldquo;Do orders under $500 completely bypass manager approval, or do they generate an asynchronous notification?&rdquo;
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
