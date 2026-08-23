import { Hero } from "@/components/sections/hero";
import { HeroCarousel } from "@/components/sections/hero-carousel";
import { EditorialInfographies } from "@/components/sections/editorial-infographies";
import { DemoSection } from "@/components/sections/demo-section";
import { Privacy } from "@/components/sections/privacy";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#FBF9F5]">
      {/* 1. Encabezado / Hero Masthead */}
      <Hero />

      {/* 2. Carrusel Continuo de Gran Formato */}
      <HeroCarousel />

      {/* 3. Infografías Panorámicas Centrales (Sin marcos, ocupando el ancho visual completo) */}
      <EditorialInfographies />

      {/* 4. Simulación Interactiva en Vivo (Proceedings Folio con Videollamada de acompañamiento) */}
      <DemoSection />

      {/* 5. Constitución de Privacidad Soberana On-Device */}
      <Privacy />
    </div>
  );
}
