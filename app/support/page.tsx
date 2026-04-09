import SupportHero from '@/components/support/support-hero';
import FAQSection from '@/components/support/faq-section';
import TroubleShootingSection from '@/components/support/trouble-shooting-section';
import ContactSection from '@/components/support/contact-section';
import QuickLinksSection from '@/components/support/quick-line-section';
import CompitableCard from '@/components/support/compatible-card';
import BackButton from '@/components/buttons/back-button';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden relative bg-white">
      <div className='absolute left-4 top-4'><BackButton /></div>
      <SupportHero />
      <QuickLinksSection />
      <FAQSection />

      <CompitableCard />
      <TroubleShootingSection />
      <ContactSection />
    </div>
  );
}