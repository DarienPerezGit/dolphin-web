import React from "react";
import { Container } from "../layout/container";
import { PRIVACY_COMPARISON } from "@/content/mock-data";

export function Privacy() {
  return (
    <section id="privacidad" className="py-20 md:py-28 bg-[#FBF9F5] border-t border-[#D8D2C5]">
      <Container className="space-y-12 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-[3px] bg-[#EEF4F0] border border-[#D1E0D6] text-editorial-sage text-xs font-semibold font-mono">
            <span>§ 05.0 / CONSTITUCIÓN DE PRIVACIDAD SOBERANA</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-foreground tracking-tight">
            Tus conversaciones nunca salen de tu equipo
          </h2>
          <p className="font-sans text-sm sm:text-base text-foreground-muted leading-relaxed">
            Dolphin fue concebido para operar con 0 bytes de almacenamiento en la nube, cero telemetría externa y total soberanía sobre tus datos.
          </p>
        </div>

        {/* Feature Comparison Ledger Table */}
        <div className="border border-[#D8D2C5] rounded-[4px] overflow-hidden bg-paper-light">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-[#F5F2EB] border-b border-[#D8D2C5] font-mono text-[10px] uppercase tracking-wider text-foreground">
                <tr>
                  <th className="py-3 px-6">Regla de Seguridad & Atributo</th>
                  <th className="py-3 px-6 text-editorial-sage bg-[#EEF4F0]/60">Dolphin (IA Local On-Device)</th>
                  <th className="py-3 px-6 text-foreground-muted">Asistentes en la Nube</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EBE6DC] font-medium text-foreground">
                {PRIVACY_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-paper/50 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-foreground">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-6 text-editorial-sage bg-[#EEF4F0]/20 font-mono text-xs">
                      {row.dolphinOnDevice}
                    </td>
                    <td className="py-3.5 px-6 text-foreground-muted font-mono text-xs">
                      {row.traditionalCloud}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}
