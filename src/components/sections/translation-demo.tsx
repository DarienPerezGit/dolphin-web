import React from "react";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { Badge } from "../ui/badge";
import { ArrowLeftRight, Code2, Users, Check } from "lucide-react";

export function TranslationDemo() {
  return (
    <Section id="translation">
      <Container className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="neutral">Traducción Bidireccional</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Conectando el lenguaje de negocio con el técnico
          </h2>
          <p className="text-base text-foreground-muted">
            Dolphin traduce en ambas direcciones para que nadie se quede atrás en la conversación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Técnico -> Humano */}
          <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface-raised space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-purple-50 text-purple-700 border border-purple-200">
                  <Code2 className="w-4 h-4" />
                </span>
                <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                  Técnico ➔ Humano
                </span>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-border space-y-1">
                <p className="text-xs font-mono text-zinc-500">Alex Rivera (Lead Engineer):</p>
                <p className="text-sm font-medium text-foreground">
                  &ldquo;Tendremos que hacer esa operación idempotente.&rdquo;
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Traducción contextual de Dolphin:
                </p>
                <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-200 text-sm space-y-2">
                  <p className="font-semibold text-purple-950">
                    Idempotencia:
                  </p>
                  <p className="text-xs text-purple-900 leading-relaxed">
                    Ejecutar la misma acción varias veces debe producir el mismo resultado final. Si la red falla y se reintenta la sincronización con el ERP, no se generarán cobros ni órdenes duplicadas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Negocio -> Técnico */}
          <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface-raised space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-200">
                  <Users className="w-4 h-4" />
                </span>
                <span className="text-xs font-mono font-bold text-blue-700 uppercase">
                  Negocio ➔ Técnico
                </span>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-border space-y-1">
                <p className="text-xs font-mono text-zinc-500">Sarah Jenkins (Client / Operations):</p>
                <p className="text-sm font-medium text-foreground">
                  &ldquo;El manager lo revisa antes de que contabilidad lo envíe.&rdquo;
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Interpretación técnica de Dolphin:
                </p>
                <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 text-sm space-y-2">
                  <p className="font-semibold text-blue-950">
                    Flujo de Aprobación RBAC:
                  </p>
                  <p className="text-xs text-blue-900 leading-relaxed">
                    Requiere un workflow con estados (`Pending` ➔ `Approved` ➔ `Processed`), permisos de rol (*Role-Based Access Control*) y registro de auditoría (*Audit Trail*) antes del despacho.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
