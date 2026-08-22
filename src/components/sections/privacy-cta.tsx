"use client";

import React, { useState } from "react";
import { Container } from "../layout/container";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { PRODUCT_INFO } from "@/content/mock-data";
import { 
  ShieldCheck, 
  Lock, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Github, 
  Terminal, 
  Users,
  HardDrive
} from "lucide-react";
import { cn } from "@/lib/utils";

export function PrivacyAndCta() {
  const [activeTab, setActiveTab] = useState<"ondevice" | "cloud">("ondevice");

  return (
    <section id="privacy" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <Container className="space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="neutral" className="gap-1.5 px-3 py-1 bg-emerald-50 border-emerald-200 text-emerald-800 font-mono">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>Privacidad por Diseño</span>
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">
            Tus reuniones no deberían salir <br />
            <span className="text-emerald-600">de tu ordenador.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 font-normal">
            Dolphin ejecuta la transcripción, razonamiento y búsqueda semántica localmente con tecnología QVAC.
          </p>
        </div>

        {/* Interactive Privacy Architecture Comparison */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Image of Real Team Meeting Confidentially */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-xl border border-zinc-200 aspect-4/3 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
              alt="Team in confidential meeting"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[11px] font-mono font-bold w-fit mb-2">
                <HardDrive className="w-3 h-3" />
                <span>LOCAL ON-DEVICE ENGINE</span>
              </div>
              <div className="font-bold text-lg">Reuniones de Negocios y Finanzas</div>
              <div className="text-xs text-zinc-200">Estrategia, código y finanzas protegidos sin fuga de datos.</div>
            </div>
          </div>

          {/* Comparison Cards with Interactive Tabs */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex gap-2 p-1 bg-zinc-100 rounded-xl border border-zinc-200">
              <button
                onClick={() => setActiveTab("ondevice")}
                className={cn(
                  "flex-1 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer",
                  activeTab === "ondevice"
                    ? "bg-white text-emerald-800 shadow-xs border border-emerald-200"
                    : "text-zinc-600 hover:text-zinc-900"
                )}
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Dolphin (Local QVAC)</span>
              </button>

              <button
                onClick={() => setActiveTab("cloud")}
                className={cn(
                  "flex-1 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer",
                  activeTab === "cloud"
                    ? "bg-white text-rose-800 shadow-xs border border-rose-200"
                    : "text-zinc-600 hover:text-zinc-900"
                )}
              >
                <XCircle className="w-4 h-4 text-rose-600" />
                <span>Asistentes Cloud Tradicionales</span>
              </button>
            </div>

            {activeTab === "ondevice" ? (
              <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-4">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Procesamiento 100% en tu Dispositivo</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-950">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <strong>Audio y Transcripción:</strong> El micrófono se procesa en memoria local sin enviar bytes a la nube.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <strong>Inferencia y Razonamiento:</strong> Modelos locales acelerados por hardware en tu CPU/GPU.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <strong>Funcionamiento Offline:</strong> No requiere conexión a internet para entender la llamada.
                  </li>
                </ul>
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-200/80 space-y-4">
                <div className="flex items-center gap-2 text-rose-800 font-bold text-sm">
                  <XCircle className="w-5 h-5 text-rose-600" />
                  <span>Riesgos de Asistentes en la Nube</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-rose-950">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <strong>Audio Transmitido:</strong> Todo lo que hablas viaja a servidores externos de terceros.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <strong>Retención de Datos:</strong> Información confidencial puede ser almacenada para re-entrenar modelos.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <strong>Dependencia Total:</strong> Si se cae internet, pierdes la asistencia en la reunión.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Final CTA Banner (Fully working interactive buttons) */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-zinc-900 text-white p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Entiende la reunión mientras aún estás en ella.
            </h3>
            <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
              Prueba la simulación interactiva ahora mismo o explora el código fuente del proyecto.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              size="lg"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-7 py-3.5 gap-2 shadow-lg"
            >
              <span>Subir a la Demostración</span>
              <ArrowRight className="w-4 h-4" />
            </Button>

            <a
              href={PRODUCT_INFO.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex"
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-zinc-800 border-zinc-700 text-zinc-200 hover:bg-zinc-700 hover:text-white gap-2 font-medium"
              >
                <Github className="w-4 h-4" />
                <span>Explorar Repositorio</span>
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
