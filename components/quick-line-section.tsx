import { Smartphone, Download, Settings, CreditCard } from 'lucide-react';

const quickLinks = [
  {
    icon: Download,
    title: 'Installering av eSIM',
    description: 'Steg for steg installerings guide',
  },
  {
    icon: Smartphone,
    title: 'Støtte for enheter',
    description: 'Sjekk om din enhet støtter eSIM',
  },
  {
    icon: Settings,
    title: 'Administrer planer',
    description: 'Aktiver eller bytt dataplaner',
  },
  {
    icon: CreditCard,
    title: 'Fakturering',
    description: 'Se alternativer for fakturering og betaling',
  },
];

export default function QuickLinksSection() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickLinks.map((link, index) => (
          <button
            key={index}
            className="bg-[#f8fafc] p-8 rounded-lg hover:bg-[#d6e3ff] transition-colors text-left group"
          >
            <link.icon className="w-10 h-10 text-tertiary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="mb-2 text-[#1d1d1d]">{link.title}</h3>
            <p className="text-[#4a4a4a]">{link.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}