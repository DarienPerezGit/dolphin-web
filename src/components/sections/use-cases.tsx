import React from "react";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { Badge } from "../ui/badge";
import { CANONICAL_USE_CASES } from "@/content/mock-data";
import { Briefcase, Code, Compass, LayoutList } from "lucide-react";

export function UseCases() {
  const icons = [
    <Briefcase key="1" className="w-5 h-5 text-blue-600" />,
    <Code key="2" className="w-5 h-5 text-purple-600" />,
    <Compass key="3" className="w-5 h-5 text-emerald-600" />,
    <LayoutList key="4" className="w-5 h-5 text-amber-600" />,
  ];

  return (
    <Section id="use-cases">
      <Container className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="neutral">Casos de Uso</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Diseñado para la intersección técnica y de negocio
          </h2>
          <p className="text-base text-foreground-muted">
            Enfoques clave donde Dolphin maximiza la claridad y ahorra horas de retrabajo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {CANONICAL_USE_CASES.map((uc, idx) => (
            <div
              key={uc.id}
              className="p-6 rounded-2xl border border-border bg-surface-raised space-y-4 hover:border-foreground/30 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-zinc-100 border border-border">
                    {icons[idx]}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded border">
                    {uc.targetRole}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-foreground">
                    {uc.title}
                  </h3>
                  <p className="text-sm text-foreground/90 font-medium">
                    {uc.valueProposition}
                  </p>
                </div>

                <p className="text-xs text-foreground-muted leading-relaxed">
                  {uc.scenarioSnippet}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
