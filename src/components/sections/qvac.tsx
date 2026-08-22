import React from "react";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { Badge } from "../ui/badge";
import { Cpu, Zap, Shield, Sparkles } from "lucide-react";

export function QvacSection() {
  return (
    <Section id="qvac" hasBackground>
      <Container className="space-y-12">
        <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl border border-border bg-surface-raised space-y-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/80">
            <div className="space-y-1.5">
              <Badge variant="neutral" className="bg-zinc-100 text-zinc-800">
                Sponsor & Infraestructura
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Potenciado localmente por QVAC
              </h2>
            </div>

            <span className="text-xs font-mono text-zinc-600 px-3 py-1.5 rounded-lg bg-zinc-100 border border-zinc-200 w-fit">
              By Tether
            </span>
          </div>

          <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
            Dolphin está diseñado para utilizar <strong>QVAC by Tether</strong> como su capa de inferencia de IA local, permitiendo que la transcripción acústica, el razonamiento contextual, la generación de embeddings y la recuperación semántica se ejecuten en tu propio hardware sin dependencias en la nube.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 border border-border space-y-2">
              <div className="p-2 rounded-lg bg-white border border-border w-fit text-foreground">
                <Cpu className="w-4 h-4 text-emerald-600" />
              </div>
              <h4 className="text-sm font-semibold text-foreground">Inferencia On-Device</h4>
              <p className="text-xs text-foreground-muted leading-relaxed">
                Modelos optimizados para hardware local con mínimo consumo de memoria y CPU/GPU.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 border border-border space-y-2">
              <div className="p-2 rounded-lg bg-white border border-border w-fit text-foreground">
                <Zap className="w-4 h-4 text-amber-600" />
              </div>
              <h4 className="text-sm font-semibold text-foreground">Ultra Baja Latencia</h4>
              <p className="text-xs text-foreground-muted leading-relaxed">
                Procesamiento de audio continuo en milisegundos para detectar contradicciones al instante.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 border border-border space-y-2">
              <div className="p-2 rounded-lg bg-white border border-border w-fit text-foreground">
                <Shield className="w-4 h-4 text-blue-600" />
              </div>
              <h4 className="text-sm font-semibold text-foreground">Soberanía de Datos</h4>
              <p className="text-xs text-foreground-muted leading-relaxed">
                Cumplimiento normativo estricto sin necesidad de acuerdos de procesamiento de datos en la nube.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
