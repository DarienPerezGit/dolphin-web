import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Capabilities } from "@/components/sections/capabilities";
import { HowItWorks } from "@/components/sections/how-it-works";
import { TranslationDemo } from "@/components/sections/translation-demo";
import { ContradictionDemo } from "@/components/sections/contradiction-demo";
import { Privacy } from "@/components/sections/privacy";
import { QvacSection } from "@/components/sections/qvac";
import { UseCases } from "@/components/sections/use-cases";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Problem />
      <Capabilities />
      <HowItWorks />
      <TranslationDemo />
      <ContradictionDemo />
      <Privacy />
      <QvacSection />
      <UseCases />
    </div>
  );
}
