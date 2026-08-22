import React from "react";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { Badge } from "../ui/badge";
import { Mic, Brain, Network, GitBranch, MessageSquarePlus, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Listen",
      desc: "Captura el flujo de audio localmente con baja latencia sin transmitir datos fuera del equipo.",
      icon: <Mic className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "02",
      title: "Understand",
      desc: "Infiere intenciones, entidades y procesos detrás de las oraciones en lugar de solo palabras.",
      icon: <Brain className="w-5 h-5 text-purple-600" />,
    },
    {
      num: "03",
      title: "Structure",
      desc: "Convierte diálogo desordenado en flujos secuenciales, requerimientos y dependencias claras.",
      icon: <Network className="w-5 h-5 text-emerald-600" />,
    },
    {
      num: "04",
      title: "Connect",
      desc: "Relaciona acuerdos nuevos con premisas y reglas mencionadas al inicio de la conversación.",
      icon: <GitBranch className="w-5 h-5 text-amber-600" />,
    },
    {
      num: "05",
      title: "Intervene",
      desc: "Sugiere preguntas oportunas y alertas de contradicción antes de que termine la llamada.",
      icon: <MessageSquarePlus className="w-5 h-5 text-rose-600" />,
    },
  ];

  return (
    <Section id="how-it-works" hasBackground>
      <Container className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="neutral">Arquitectura Cognitiva</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            El ciclo de inteligencia en vivo
          </h2>
          <p className="text-base text-foreground-muted">
            Cómo Dolphin procesa la conversación en una cadena de inferencias continuas en tu dispositivo.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="p-5 rounded-2xl border border-border bg-surface-raised space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="p-2 rounded-lg bg-zinc-100 border border-border">
                    {step.icon}
                  </span>
                  <span className="text-xs font-mono font-bold text-zinc-400">
                    {step.num}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-xs text-foreground-muted leading-relaxed mt-1">
                    {step.desc}
                  </p>
                </div>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:flex justify-end pt-2 text-zinc-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
