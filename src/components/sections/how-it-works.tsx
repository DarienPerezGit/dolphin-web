import React from "react";
import { Container } from "../layout/container";
import { Badge } from "../ui/badge";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Listen",
      subtitle: "Audio Ingestion",
      desc: "Captures the local microphone stream in RAM with low latency. Zero packets leave the local interface.",
    },
    {
      num: "02",
      title: "Understand",
      subtitle: "Semantic Parsing",
      desc: "Dissects technical entities, actors, and implicit intentions rather than treating audio as literal tokens.",
    },
    {
      num: "03",
      title: "Structure",
      subtitle: "Schema Mapping",
      desc: "Organizes unstructured spoken dialogue into verifiable step diagrams, data entities, and system prerequisites.",
    },
    {
      num: "04",
      title: "Connect",
      subtitle: "Knowledge Graph",
      desc: "Cross-references new assertions against statements made earlier in the transcript buffer.",
    },
    {
      num: "05",
      title: "Intervene",
      subtitle: "Quiet Marginalia",
      desc: "Surfaces concise queries and identifies logic conflicts before participants adjourn.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-paper border-b border-border">
      <Container className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="neutral">§ 04.0 / THE COGNITIVE CYCLE</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-normal tracking-tight">
            The five-stage on-device reasoning loop
          </h2>
          <p className="font-sans text-sm sm:text-base text-foreground-muted">
            Continuous local inference: from raw microphone vibration to active semantic structure.
          </p>
        </div>

        {/* Steps Grid as Editorial Sequential Plates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-5 rounded-[4px] border border-border bg-paper-light space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-border-subtle font-mono text-[10px]">
                  <span className="text-foreground-faded font-semibold">STAGE {step.num}</span>
                  <span className="uppercase tracking-wider text-foreground-muted">{step.subtitle}</span>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-foreground">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-foreground-muted leading-relaxed mt-1.5">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
