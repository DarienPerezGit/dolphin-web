import { Hero } from "@/components/sections/hero";
import { HeroCarousel } from "@/components/sections/hero-carousel";
import { EditorialInfographies } from "@/components/sections/editorial-infographies";
import { DemoSection } from "@/components/sections/demo-section";
import { Privacy } from "@/components/sections/privacy";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#FBF9F5]">
      {/* 1. Encabezado / Hero */}
      <Hero />

      {/* 2. Carrusel Continuo de Gran Formato (Alto impacto visual inmediato) */}
      <HeroCarousel />

      {/* 3. Infografías Editoriales Centrales (Casi toda la pantalla, legibles a simple vista) */}
      <EditorialInfographies />

      {/* 4. Simulación Interactiva en Vivo */}
      <DemoSection />

      {/* 5. Constitución de Privacidad & Soberanía Local */}
      <Privacy />
    </div>
  );
}
