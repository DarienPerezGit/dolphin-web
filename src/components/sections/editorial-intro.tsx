import React from "react";
import { Container } from "../layout/container";
import { Badge } from "../ui/badge";

export function EditorialIntro() {
  return (
    <section className="py-16 md:py-24 bg-[#FBF9F5] border-b border-[#D8D2C5]">
      <Container className="max-w-4xl space-y-10">
        {/* Section Stamp */}
        <div className="flex items-center justify-between pb-3 border-b border-[#D8D2C5] font-mono text-[10px] uppercase tracking-[0.2em] text-foreground-muted">
          <span>§ 02.0 / OBSERVACIONES PRELIMINARES</span>
          <span>DISCURSO HUMANO & MODELADO MENTAL</span>
        </div>

        {/* Editorial Lead Paragraph */}
        <div className="space-y-6">
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground font-normal leading-[1.3] tracking-tight">
            La comprensión real de una reunión técnica no reside en la acumulación de palabras grabadas, sino en la capacidad de estructurar dependencias, premisas y contradicciones en el instante preciso en que se pronuncian.
          </p>
        </div>

        {/* Two-Column Editorial Essay Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 text-xs sm:text-sm font-sans text-foreground-muted leading-relaxed border-t border-[#EBE6DC]">
          <div className="space-y-4">
            <h3 className="font-serif text-base text-foreground font-semibold">
              El límite del transcriptor pasivo
            </h3>
            <p>
              Cuando equipos multidisciplinarios discuten arquitectura de software, compras o logística, el lenguaje coloquial se confunde con reglas de negocio. Un transcriptor ordinario se limita a acumular cadenas de texto que nadie lee con detenimiento tras finalizar la llamada.
            </p>
            <p>
              El valor cognitivo radica en interpretar el significado implícito: si un cliente dice <em>&ldquo;lo revisamos antes de facturar&rdquo;</em>, el sistema debe inferir un estado de aprobación auditable con roles definidos.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-base text-foreground font-semibold">
              Intervención discreta y soberanía local
            </h3>
            <p>
              Dolphin opera como una anotación al margen en un manuscrito de trabajo. No interrumpe la conversación con interfaces ruidosas ni almacena fragmentos de voz en servidores remotos. 
            </p>
            <p>
              Mediante inferencia local optimizada por el motor QVAC, el audio se procesa en memoria volátil en milisegundos, manteniendo intacta la soberanía de los datos empresariales más confidenciales.
            </p>
          </div>
        </div>

        {/* Editorial Pull-Quote / Marginalia highlight */}
        <div className="pt-6 border-t border-[#EBE6DC]">
          <blockquote className="pl-4 border-l-2 border-editorial-sage font-serif italic text-sm sm:text-base text-foreground">
            &ldquo;La herramienta intelectual no reemplaza al participante; le provee un cuaderno marginal activo que detecta vacíos lógicos antes de que la reunión concluya.&rdquo;
          </blockquote>
        </div>
      </Container>
    </section>
  );
}
