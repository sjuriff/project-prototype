import SupportHero from '@/components/support-hero';
import FAQSection from '@/components/faq-section';
import TroubleShootingSection from '@/components/trouble-shooting-section';
import ContactSection from '@/components/contact-section';
import QuickLinksSection from '@/components/quick-line-section';
import CompitableCard from '@/components/compatible-card';
import BackButton from '@/components/buttons/back-button';

export default function App() {
  return (
    <div className="min-h-screen relative bg-white">
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