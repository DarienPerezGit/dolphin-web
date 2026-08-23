import { Hero } from "@/components/sections/hero";
import { HeroCarousel } from "@/components/sections/hero-carousel";
import { EditorialInfographies } from "@/components/sections/editorial-infographies";
import { DemoSection } from "@/components/sections/demo-section";
import { Privacy } from "@/components/sections/privacy";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#FAF8F5]">
      {/* 1. Hero & Live Notepad Preview */}
      <Hero />

      {/* 2. Continuous Marquee Showcase with Interactive Background Boxes */}
      <HeroCarousel />

      {/* 3. Central Cognitive Map Infography */}
      <EditorialInfographies />

      {/* 4. Live Interactive Meeting Simulation */}
      <DemoSection />

      {/* 5. Privacy by Design & On-Device Comparison */}
      <Privacy />
    </div>
  );
}
