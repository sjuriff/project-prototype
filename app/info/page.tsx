import HeroSection from "@/components/info/info-hero-section";
import BenefitsSection from "@/components/info/benefits-section";
import CompatibilitySection from "@/components/info/compatibility-section";
import CTASection from "@/components/info/cta-section";
import MobileStepSection from "@/components/info/mobile-step-section";
import EsimStepHero from "@/components/info/esim-step-hero";
import BackButton from "@/components/buttons/back-button";

export default function InfoPage() {
  return (
    <div
      className="min-h-screen overflow-x-hidden bg-surface"
    >
      {/*       <HeroSection /> */}
      <section className="relative">
        <div className="absolute left-4 md:left-8 top-4 md:top-8"><BackButton /></div>
        <EsimStepHero />
      </section>
      <MobileStepSection />
      <BenefitsSection />

      {/*    <HowItWorksSection /> */}

      <HeroSection />

      <CompatibilitySection />

      <CTASection />


    </div>
  );
}