import React from "react";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { Badge } from "../ui/badge";
import { MessageSquareX, Sparkles, ArrowRight } from "lucide-react";

export function Problem() {
  return (
    <Section id="problem" hasBackground>
      <Container className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="neutral">El Problema</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            La brecha entre lo que se dijo y lo que significa
          </h2>
          <p className="text-base text-foreground-muted">
            Los asistentes de reuniones tradicionales transcriben palabras. Dolphin construye un modelo mental estructurado en tiempo real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Asistentes tradicionales */}
          <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface-raised space-y-4">
            <div className="p-2.5 rounded-xl bg-zinc-100 w-fit text-zinc-600">
              <MessageSquareX className="w-5 h-5" />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-foreground">
                Asistentes de notas tradicionales
              </h3>
              <p className="text-xs font-mono text-zinc-500 uppercase">
                ¿Qué palabras exactas se dijeron?
              </p>
            </div>

            <ul className="space-y-2.5 text-sm text-foreground-muted">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Muros de texto planos y transcripciones kilométricas sin estructurar.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Resúmenes genéricos que se leen horas después de terminada la reunión.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Audio enviado a servidores cloud de terceros sin control de privacidad.</span>
              </li>
            </ul>
          </div>

          {/* Enfoque Dolphin */}
          <div className="p-6 sm:p-8 rounded-2xl border-2 border-foreground/80 bg-surface-raised space-y-4 shadow-sm">
            <div className="p-2.5 rounded-xl bg-foreground text-background w-fit">
              <Sparkles className="w-5 h-5" />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-foreground flex items-center justify-between">
                <span>Dolphin Intelligence</span>
                <span className="text-xs font-normal text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  En tiempo real
                </span>
              </h3>
              <p className="text-xs font-mono text-zinc-700 uppercase">
                ¿Qué significa y qué debemos aclarar ya?
              </p>
            </div>

            <ul className="space-y-2.5 text-sm text-foreground/90">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Extracción inmediata de flujos de procesos, requerimientos y dependencias.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Detección de contradicciones y preguntas sugeridas durante la llamada.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>100% on-device: inferencia local con cero fuga de audio a la nube.</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
