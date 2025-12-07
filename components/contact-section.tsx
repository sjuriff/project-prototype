import { Mail, MessageCircle, Phone } from 'lucide-react';

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'Live chat',
    description: 'Chat med vårt supportteam',
    info: 'Gjennomsnittlig svartid: 2 minutter',
    action: 'Start chat',
  },
  {
    icon: Mail,
    title: 'E-postsupport',
    description: 'Send oss en detaljert melding',
    info: 'support@esimapp.com',
    action: 'Send e-post',
  },
  {
    icon: Phone,
    title: 'Telefonsupport',
    description: 'Snakk med en kundebehandler',
    info: '+1 (800) 123-4567',
    action: 'Ring nå',
  },
];

export default function ContactSection() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="mb-3 text-[#1d1d1d]">Kontakt oss</h2>
        <p className="text-[#4a4a4a]">
          Vårt team er tilgjengelig 24/7 for hjelp. Vennligst kontakt oss via e-post, telefon eller live chat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactMethods.map((method, index) => (
          <div key={index} className="bg-white p-8 rounded-lg border border-[#e5e7eb] text-center hover:border-[#008093] transition-colors">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-[#f9f871] rounded-full flex items-center justify-center">
                <method.icon className="w-6 h-6 text-[#1d1d1d]" />
              </div>
            </div>
            <h3 className="mb-2 text-[#1d1d1d]">{method.title}</h3>
            <p className="text-[#4a4a4a] mb-2">{method.description}</p>
            <p className="text-[#4a4a4a] mb-6">{method.info}</p>
            <button className="w-full bg-[#008093] text-white py-3 px-6 rounded-lg hover:bg-[#006977] transition-colors">
              {method.action}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-[#d6e3ff] rounded-lg p-8 text-center max-w-2xl mx-auto">
        <h3 className="mb-3 text-[#1d1d1d]">Support tider</h3>
        <p className="text-[#4a4a4a] leading-relaxed">
          Teamet vårt er tilgjengelig 24/7 for å hjelpe deg med spørsmål eller problemer.
          Live chat og e-postsupport overvåkes døgnet rundt.
        </p>
      </div>
    </div>
  );
}