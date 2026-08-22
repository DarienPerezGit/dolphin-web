import React from "react";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { Badge } from "../ui/badge";
import { CANONICAL_CAPABILITIES } from "@/content/mock-data";
import { 
  BrainCircuit, 
  ArrowLeftRight, 
  GitMerge, 
  ShieldAlert, 
  Layers, 
  HelpCircle 
} from "lucide-react";

export function Capabilities() {
  const iconMap: Record<string, React.ReactNode> = {
    BrainCircuit: <BrainCircuit className="w-5 h-5 text-blue-600" />,
    ArrowLeftRight: <ArrowLeftRight className="w-5 h-5 text-purple-600" />,
    GitMerge: <GitMerge className="w-5 h-5 text-emerald-600" />,
    ShieldAlert: <ShieldAlert className="w-5 h-5 text-amber-600" />,
    Layers: <Layers className="w-5 h-5 text-indigo-600" />,
    HelpCircle: <HelpCircle className="w-5 h-5 text-rose-600" />,
  };

  return (
    <Section id="capabilities">
      <Container className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="neutral">Capacidades</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Seis pilares de comprensión en tiempo real
          </h2>
          <p className="text-base text-foreground-muted">
            Diseñado para seguir conversaciones complejas donde el lenguaje técnico y el de negocio colisionan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CANONICAL_CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              className="p-6 rounded-2xl border border-border bg-surface-raised hover:border-foreground/30 hover:shadow-sm transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-zinc-100/80 w-fit border border-border">
                  {iconMap[cap.iconName]}
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-foreground">
                    {cap.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-500">
                    {cap.shortDescription}
                  </p>
                </div>

                <p className="text-sm text-foreground/80 leading-relaxed">
                  {cap.detailedDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
