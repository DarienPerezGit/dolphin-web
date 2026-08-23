import React from "react";
import { Container } from "../layout/container";
import { PRIVACY_COMPARISON } from "@/content/mock-data";
import { ShieldCheck, CloudOff, CheckCircle2, XCircle } from "lucide-react";

export function Privacy() {
  return (
    <section id="privacy" className="py-20 md:py-28 bg-[#FAF8F5] scroll-mt-14 font-sans">
      <Container className="max-w-5xl space-y-12">
        
        {/* Section Header (Anti-Boxed, Pure Typography) */}
        <div className="space-y-3 max-w-3xl text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-stone-950 tracking-[-0.03em] leading-tight">
            Privacidad por diseño <br className="hidden sm:inline" />
            <span className="text-stone-500 italic font-serif">y soberanía total.</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            Las conversaciones estratégicas, negociaciones y compromisos no deben abandonar el perímetro de tu máquina.
          </p>
        </div>

        {/* Comparison Cards (Granola / Folk Warm Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* Card 1: Dolphin Local QVAC */}
          <div className="rounded-2xl border border-emerald-200 bg-white p-6 sm:p-8 space-y-5 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-800 font-medium text-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Dolphin (Arquitectura On-Device)</span>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs sm:text-sm text-emerald-950">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Audio en memoria volátil:</strong> El micrófono se procesa en RAM local sin transferir paquetes a servidores externos.</span>
              </div>
              <div className="flex items-start gap-2 pt-2 border-t border-emerald-100/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Inferencia local QVAC:</strong> Modelos optimizados ejecutándose directamente en tu procesador.</span>
              </div>
            </div>

            <p className="text-xs text-stone-500 leading-relaxed">
              Total soberanía de datos y cumplimiento con protocolos confidenciales empresariales.
            </p>
          </div>

          {/* Card 2: Cloud Assistants */}
          <div className="rounded-2xl border border-stone-200 bg-white/70 p-6 sm:p-8 space-y-5 shadow-xs">
            <div className="flex items-center gap-2 text-stone-700 font-medium text-sm">
              <CloudOff className="w-5 h-5 text-rose-500" />
              <span>Asistentes Cloud Tradicionales</span>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-stone-50 border border-stone-200/80 text-xs sm:text-sm text-stone-700">
              <div className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span><strong>Tránsito por internet:</strong> El flujo de audio completo viaja a través de la nube a servidores de terceros.</span>
              </div>
              <div className="flex items-start gap-2 pt-2 border-t border-stone-200/60">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span><strong>Riesgo de retención:</strong> Información corporativa sujeta a políticas de almacenamiento remoto.</span>
              </div>
            </div>

            <p className="text-xs text-stone-500 leading-relaxed">
              Dependencia de conexión constante y exposición de datos confidenciales.
            </p>
          </div>

        </div>

        {/* Feature Comparison Ledger Table */}
        <div className="border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-700 text-xs font-semibold">
                <tr>
                  <th className="py-3 px-4 sm:px-6">Criterio de Privacidad</th>
                  <th className="py-3 px-4 sm:px-6 text-emerald-800 bg-emerald-50/50">Dolphin (On-Device)</th>
                  <th className="py-3 px-4 sm:px-6 text-stone-500">Asistentes Cloud</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-800">
                {PRIVACY_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/50">
                    <td className="py-3 px-4 sm:px-6 font-medium text-stone-900">
                      {row.feature}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-emerald-800 bg-emerald-50/20 font-medium">
                      {row.dolphinOnDevice}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-stone-500">
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
