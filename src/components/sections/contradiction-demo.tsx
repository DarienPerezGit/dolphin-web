import React from "react";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { Badge } from "../ui/badge";
import { AlertTriangle, HelpCircle, Clock, CheckCircle2 } from "lucide-react";

export function ContradictionDemo() {
  return (
    <Section id="contradiction" hasBackground>
      <Container className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="warning">Detección de Contradicciones</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Detecta inconsistencias antes de que sea tarde
          </h2>
          <p className="text-base text-foreground-muted">
            En llamadas largas, los acuerdos cambian o se contradicen sin que los participantes lo noten.
          </p>
        </div>

        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl border border-amber-200 bg-surface-raised space-y-8 shadow-xs">
          {/* Chronological discrepancy flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-zinc-50 border border-border space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500 font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>10:14 AM · Minuto 14</span>
                </span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-zinc-200 text-zinc-700">
                  Regla inicial
                </span>
              </div>
              <p className="text-sm font-medium text-foreground">
                &ldquo;Toda compra sin excepción necesita la aprobación del manager antes de enviarse.&rdquo;
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 border border-border space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500 font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>10:27 AM · Minuto 27</span>
                </span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                  Nueva afirmación
                </span>
              </div>
              <p className="text-sm font-medium text-foreground">
                &ldquo;Las compras menores a $500 en realidad se procesan de forma automática.&rdquo;
              </p>
            </div>
          </div>

          {/* Dolphin Inferred Insight */}
          <div className="p-5 rounded-xl border border-l-4 border-l-amber-500 border-amber-200 bg-amber-50/40 space-y-3">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-md bg-amber-100 text-amber-800">
                <AlertTriangle className="w-4 h-4" />
              </span>
              <span className="text-xs font-bold font-mono uppercase text-amber-900 tracking-wider">
                Inconsistencia Detectada en Vivo
              </span>
            </div>

            <p className="text-sm text-amber-950 font-medium leading-relaxed">
              Existe una aparente excepción a la regla de aprobación que no fue clarificada para el equipo de desarrollo.
            </p>

            <div className="pt-2 border-t border-amber-200/80 flex items-start gap-2 text-xs text-amber-900">
              <HelpCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                <strong>Pregunta recomendada por Dolphin:</strong> &ldquo;¿Las compras menores a $500 omiten la aprobación del manager o requieren una notificación asíncrona?&rdquo;
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
