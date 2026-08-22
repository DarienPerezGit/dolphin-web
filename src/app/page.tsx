import { Hero } from "@/components/sections/hero";
import { IntelligenceShowcase } from "@/components/sections/intelligence-showcase";
import { PrivacyAndCta } from "@/components/sections/privacy-cta";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Screen 1: Hero + Live Interactive Video Meeting Intelligence */}
      <Hero />

      {/* Screen 2: Real-time Intelligence Showcase (Contradiction, Technical Translation & Suggested Questions) */}
      <IntelligenceShowcase />

      {/* Screen 3: Privacy by Design (Local QVAC On-Device vs Cloud) + Final Action Banner */}
      <PrivacyAndCta />
    </div>
  );
}
