import React from "react";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { Badge } from "../ui/badge";
import { PRIVACY_COMPARISON } from "@/content/mock-data";
import { ShieldCheck, HardDrive, Lock, ShieldAlert } from "lucide-react";

export function Privacy() {
  return (
    <Section id="privacy">
      <Container className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="neutral">Privacidad Absoluta</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tus reuniones se quedan en tu equipo
          </h2>
          <p className="text-base text-foreground-muted">
            Tus conversaciones contienen estrategias, contratos y datos sensibles. No deberían enviarse a servidores de terceros para ser comprendidas.
          </p>
        </div>

        {/* Architecture Flow Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* On-device architecture */}
          <div className="p-6 sm:p-8 rounded-2xl border-2 border-emerald-500/80 bg-surface-raised space-y-6 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Arquitectura Dolphin (Local-First)</span>
              </span>
            </div>

            {/* Simple Box Diagram */}
            <div className="p-4 rounded-xl bg-zinc-50 border border-border space-y-3 font-mono text-xs text-center">
              <div className="p-2.5 rounded-lg bg-white border border-border text-foreground font-semibold">
                Micrófono / Audio de Reunión
              </div>
              <div className="text-zinc-400 font-bold">↓ (Directo en tu SO)</div>
              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 font-semibold flex items-center justify-center gap-2">
                <HardDrive className="w-4 h-4 text-emerald-700" />
                <span>Inferencia Local (QVAC Engine)</span>
              </div>
              <div className="text-zinc-400 font-bold">↓</div>
              <div className="p-2.5 rounded-lg bg-white border border-border text-foreground font-semibold">
                Comprensión e Insights en tu Pantalla
              </div>
            </div>

            <p className="text-xs text-zinc-600 leading-relaxed">
              El audio nunca sale de la memoria de tu dispositivo. Cero telemetría de contenido y 100% de cumplimiento con políticas de seguridad corporativas.
            </p>
          </div>

          {/* Cloud traditional architecture */}
          <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface-raised space-y-6 opacity-85">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-zinc-600 bg-zinc-100 px-2.5 py-1 rounded-full border border-zinc-200">
                <ShieldAlert className="w-4 h-4 text-zinc-500" />
                <span>Asistentes Cloud Tradicionales</span>
              </span>
            </div>

            {/* Simple Box Diagram */}
            <div className="p-4 rounded-xl bg-zinc-50 border border-border space-y-3 font-mono text-xs text-center">
              <div className="p-2.5 rounded-lg bg-white border border-border text-foreground font-semibold">
                Micrófono / Audio de Reunión
              </div>
              <div className="text-rose-400 font-bold">↓ (Streaming a través de Internet)</div>
              <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-900 font-semibold">
                Servidores Cloud de Terceros
              </div>
              <div className="text-zinc-400 font-bold">↓</div>
              <div className="p-2.5 rounded-lg bg-white border border-border text-foreground font-semibold">
                Respuesta enviada de vuelta
              </div>
            </div>

            <p className="text-xs text-zinc-500 leading-relaxed">
              Vulnerabilidad a intercepciones de red, exposición a términos de uso de terceros y retención de datos en centros de datos externos.
            </p>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="max-w-4xl mx-auto border border-border rounded-2xl overflow-hidden bg-surface-raised">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-zinc-100/70 border-b border-border text-foreground font-semibold">
                <tr>
                  <th className="py-3 px-4 sm:px-6">Característica</th>
                  <th className="py-3 px-4 sm:px-6 text-emerald-800 bg-emerald-50/50">Dolphin (On-Device)</th>
                  <th className="py-3 px-4 sm:px-6 text-zinc-600">Asistentes en la Nube</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {PRIVACY_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50/50">
                    <td className="py-3 px-4 sm:px-6 font-medium text-foreground">
                      {row.feature}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-emerald-700 font-medium bg-emerald-50/20">
                      {row.dolphinOnDevice}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-zinc-500">
                      {row.traditionalCloud}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </Section>
  );
}
