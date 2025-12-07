import { CheckCircle } from 'lucide-react';

const troubleshootingGuides = [
  {
    title: 'eSIM aktiveres ikke',
    steps: [
      'Sørg for at du har en stabil internettforbindelse (Wi-Fi anbefales)',
      'Bekreft at enheten din er ulåst og støtter eSIM',
      'Start enheten på nytt og prøv å skanne QR-koden igjen',
      'Sjekk at du ikke allerede har installert denne eSIM-profilen',
    ],
  },
  {
    title: 'Ingen nettverkstilkobling',
    steps: [
      'Slå Flymodus av og på igjen',
      'Forsikre deg om at mobildata er aktivert for eSIM-linjen din',
      'Sjekk at du er i et område med dekning',
      'Bekreft at planen din er aktiv og har tilgjengelig data',
    ],
  },
  {
    title: 'Treg datatilkobling',
    steps: [
      'Sjekk hvor mye data du har igjen',
      'Prøv å flytte deg til et sted med bedre signal',
      'Start enheten på nytt for å oppdatere tilkoblingen',
      'Sørg for at du er tilkoblet 4G/5G og ikke 3G',
    ],
  },
];


export default function TroubleShootingSection() {
  return (
    <div className="bg-[#f8fafc] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-lg mb-12 text-tertiary-heading">Feilsøking</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {troubleshootingGuides.map((guide, index) => (
            <div key={index} className="bg-white p-8 rounded-lg border border-[#e5e7eb]">
              <h3 className="mb-6 text-[#1d1d1d]">{guide.title}</h3>
              <ul className="space-y-4">
                {guide.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#008093] flex-shrink-0 mt-0.5" />
                    <span className="text-[#4a4a4a] leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}