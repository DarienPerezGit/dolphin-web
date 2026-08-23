import React from "react";
import { Container } from "../layout/container";
import { Badge } from "../ui/badge";

export function TranslationDemo() {
  return (
    <section id="translation" className="py-16 md:py-24 bg-background border-b border-border">
      <Container className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="neutral">§ 05.0 / BIDIRECTIONAL TRANSLATION</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-normal tracking-tight">
            Bridging technical jargon and business semantics
          </h2>
          <p className="font-sans text-sm sm:text-base text-foreground-muted">
            Dolphin translates symmetrically across domains so every participant retains complete comprehension.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Technical -> Human */}
          <div className="p-6 sm:p-8 rounded-[4px] border border-border bg-paper-light space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-border-subtle font-mono text-[10px]">
                <span className="text-editorial-lavender font-semibold">FIG. 5A — TECHNICAL ➔ HUMAN</span>
                <span className="text-foreground-faded uppercase tracking-wider">Contextual Lexicon</span>
              </div>

              <div className="p-3.5 rounded-[4px] bg-paper border border-border space-y-1">
                <span className="font-mono text-[10px] text-foreground-faded block">Alex Rivera (Lead Engineer):</span>
                <p className="font-serif text-sm italic text-foreground">
                  &ldquo;We will need to make that ERP sync operation idempotent.&rdquo;
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-foreground-faded block">
                  Dolphin Marginal Note:
                </span>
                <div className="p-3.5 rounded-[4px] bg-editorial-lavender-bg border border-[#D2D6E4] text-xs space-y-1.5 font-sans">
                  <p className="font-serif text-sm font-semibold text-editorial-lavender">
                    Idempotence
                  </p>
                  <p className="text-foreground-muted leading-relaxed">
                    Executing the exact same operation multiple times produces the identical final state. If the network drops and the sync is retried, no duplicate ledger charges or double shipments will occur.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business -> Technical */}
          <div className="p-6 sm:p-8 rounded-[4px] border border-border bg-paper-light space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-border-subtle font-mono text-[10px]">
                <span className="text-editorial-sage font-semibold">FIG. 5B — BUSINESS ➔ TECHNICAL</span>
                <span className="text-foreground-faded uppercase tracking-wider">Architecture Spec</span>
              </div>

              <div className="p-3.5 rounded-[4px] bg-paper border border-border space-y-1">
                <span className="font-mono text-[10px] text-foreground-faded block">Sarah Jenkins (Operations):</span>
                <p className="font-serif text-sm italic text-foreground">
                  &ldquo;The manager looks at it before the accounting team sends it.&rdquo;
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-foreground-faded block">
                  Dolphin Architectural Spec:
                </span>
                <div className="p-3.5 rounded-[4px] bg-editorial-sage-bg border border-[#D1E0D6] text-xs space-y-1.5 font-sans">
                  <p className="font-serif text-sm font-semibold text-editorial-sage">
                    RBAC Approval State Machine
                  </p>
                  <p className="text-foreground-muted leading-relaxed">
                    Requires a stateful approval workflow (<code className="font-mono text-[11px] bg-paper px-1 py-0.5 rounded border border-border">Pending_Review</code> → <code className="font-mono text-[11px] bg-paper px-1 py-0.5 rounded border border-border">Approved</code> → <code className="font-mono text-[11px] bg-paper px-1 py-0.5 rounded border border-border">Dispatched</code>), role-based permissions, and an immutable audit log.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
