import HeroSection from "@/components/info-hero-section";
import BenefitsSection from "@/components/benefits-section";
import HowItWorksSection from "@/components/how-it-works";
import CompatibilitySection from "@/components/compatibility-section";
import CTASection from "@/components/cta-section";
import IPhoneScreen from "@/components/iphone-step";

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
      <div className="max-w-7xl pb-24 pt-16   mx-auto">
        <h1 className="text-center font-heading text-lg mb-12" style={{ color: 'var(--color-tertiary-heading)' }}>
          Hvordan aktiverer jeg Beam eSIM
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <IPhoneScreen step={1} />
          <IPhoneScreen step={2} />
          <IPhoneScreen step={3} />
        </div>
      </div>
      <CTASection />


    </div>
  );
}