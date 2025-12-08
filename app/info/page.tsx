import HeroSection from "@/components/info-hero-section";
import BenefitsSection from "@/components/benefits-section";
import HowItWorksSection from "@/components/how-it-works";
import CompatibilitySection from "@/components/compatibility-section";
import CTASection from "@/components/cta-section";
import IPhoneScreen from "@/components/iphone-step";
import MobileStepSection from "@/components/mobile-step-section";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: 'var(--font-body)',
        backgroundColor: '#ffffff'
      }}
    >
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <CompatibilitySection />

      <MobileStepSection />
     
      <CTASection />


    </div>
  );
}