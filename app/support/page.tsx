import SupportHero from '@/components/support-hero';
import FAQSection from '@/components/faq-section';
import TroubleShootingSection from '@/components/trouble-shooting-section';
import ContactSection from '@/components/contact-section';
import QuickLinksSection from '@/components/quick-line-section';
import CompitableCard from '@/components/compatible-card';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <SupportHero />
      <QuickLinksSection />
      <FAQSection />

      <CompitableCard />
      <TroubleShootingSection />
      <ContactSection />
    </div>
  );
}