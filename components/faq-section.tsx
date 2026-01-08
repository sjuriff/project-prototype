'use client'
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Hva er eSIM?',
    answer: 'En eSIM (innebygd SIM) er et digitalt SIM-kort som er innebygd direkte i enheten din, som en smarttelefon eller smartklokke. I stedet for et fysisk, flyttbart plastkort, fungerer en eSIM digitalt, og du kan aktivere et mobilabonnement ved å laste ned en profil fra din mobiloperatør',
  },
  {
    question: 'Fungerer eSIM på min telefon?',
    answer: 'For at eSIM skal fungere må telefonen din støtte eSIM-teknologi. De fleste nyere smarttelefoner fra Apple, Samsung og Google har støtte. Du kan vanligvis se dette i telefonens innstillinger eller på produsentens nettside. Kontakt også mobiloperatøren din for å sikre at de tilbyr eSIM til din modell.',
  },
  {
    question: 'Hvordan installerer jeg Beam eSIM på iOS?',
    answer: 'Åpne e-posten du fikk fra Beam og trykk på aktiveringslenken. Velg Installer eSIM, og bekreft med Face ID eller passkode. Når installasjonen er ferdig, sjekker du at eSIM er aktivert i Innstillinger → Mobilnett. Da er alt klart!',
  },
  {
    question: 'Hvordan installerer jeg Beam eSIM på Android?',
    answer: 'Åpne e-posten du fikk fra Beam og trykk på aktiveringslenken. Velg Legg til eSIM når Android spør, og følg instruksjonene på skjermen. Når installasjonen er fullført, sjekker du at eSIM er aktivert under Innstillinger → Nettverk og Internett → SIM-kort. Da er du klar!',
  },
  {
    question: 'Kan jeg fortsatt ringe og sende SMS med mitt vanlige telefonnummer?',
    answer: 'Ja, Beam eSIM påvirker ikke ditt eksisterende telefonnummer. Du kan fortsatt ringe og sende SMS som vanlig, samtidig som du bruker data fra Beam.',
  },
  {
    question: 'Hvordan aktiverer jeg Beam eSIM?',
    answer: 'Åpne aktiveringslenken du fikk fra Beam, og installer eSIM-en på telefonen. Når installasjonen er fullført, sørger du for at Beam er valgt som aktiv datatilkobling i mobilinnstillingene. Etter noen sekunder skal mobildata være i gang',
  },
  {
    question: 'Hvordan fungerer eSIM?',
    answer: 'Et eSIM er et digitalt SIM-kort som ligger inne i telefonen. I stedet for å sette inn et fysisk SIM, aktiverer du abonnementet ditt direkte i mobilinnstillingene. Telefonen kobler seg deretter til mobilnettet på samme måte som med et vanlig SIM-kort',
  },

];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-center mb-12 text-3xl font-heading text-primary-text">Frequently Asked Questions</h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-[#e5e7eb] rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#f8fafc] transition-colors"
            >
              <span className="pr-4 text-[#1d1d1d]">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-[#4a4a4a] flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''
                  }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-6 py-5 bg-[#f8fafc] border-t border-[#e5e7eb]">
                <p className="text-[#4a4a4a] leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}