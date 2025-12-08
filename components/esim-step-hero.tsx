import { Smartphone, QrCode, CheckCircle2, Wifi } from 'lucide-react';
import Link from 'next/link';
import TertiaryButton from './buttons/tertiary-button';

export default function EsimStepHero() {
  const steps = [
    {
      number: 1,
      title: "Kjøp eSIM",
      description: "Velg landet du skal reise til og kjøp datapakken som passer deg. Når du har betalt får du umiddelbart en QR-kode.",
      icon: Smartphone,
      color: "primary"
    },
    {
      number: 2,
      title: "Legg til eSIM",
      description: "Gå til telefonens innstilinger og velg «Mobilnett» eller «Tilkoblinger», velg «Legg til eSIM» & bruk «QR-kode».",
      icon: QrCode,
      color: "primary"
    },
    {
      number: 3,
      title: "Aktiver & surf i vei ",
      description: "Aktiver eSIM, gi abonnementet et navn og velg dette som hovedlinje for mobildata. Da er alt klart, når du lander er du umiddelbart på nett.",
      icon: CheckCircle2,
      color: "primary"
    }
  ];

  return (
    <div className="min-h-[50vh] mt-16 py-16 px-4 sm:px-6 lg:px-8" style={{
      backgroundColor: 'var(--color-surface)',
      fontFamily: 'var(--font-body)'
    }}>
      <div className="max-w-6xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{
            backgroundColor: 'var(--color-primary)'
          }}>
            <Wifi className="w-8 h-8" style={{ color: 'var(--color-primary-text)' }} />
          </div>
          <h1 className="mb-4 text-3xl font-heading text-tertiary-heading " >
            Slik fungerer eSIM
          </h1>
          <p className="max-w-2xl text-balance mx-auto" style={{
            color: 'var(--color-secondary-text)'
          }}>
            På noen få tastetrykk er du klar til å surfe. Ikke bekymre deg – du kan fortsatt ringe og sende meldinger med ditt vanlige nummer. Telefonen din har eSIM innebygd, så du slipper å bytte nummer eller fjerne SIM-kortet.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const bgColor = step.color === 'primary' ? 'var(--color-primary)' :
              step.color === 'secondary' ? 'var(--color-secondary)' :
                'var(--color-tertiary)';
            const textColor = step.color === 'tertiary' ? 'var(--color-tertiary-text)' : 'var(--color-primary-text)';

            return (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gray-300" />
                )}

                <div className="relative bg-primary-text rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                  {/* Step Number Badge */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6" style={{
                    backgroundColor: bgColor
                  }}>
                    <Icon className="w-7 h-7" style={{ color: textColor }} />
                  </div>

                  {/* Step Number */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center" style={{
                    backgroundColor: 'var(--color-surface)',
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-secondary-text)'
                  }}>
                    {step.number}
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-tertiary-text" style={{
                    fontFamily: 'var(--font-heading)',

                  }}>
                    {step.title}
                  </h3>
                  <p className='text-balance' style={{
                    color: 'var(--color-tertiary-text)'
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        

        {/* CTA */}

        {/* <button className="px-8 py-4 rounded-xl hover:cursor-pointer transition-all hover:scale-105" style={{
            backgroundColor: 'var(--color-tertiary)',
            color: 'var(--color-tertiary-text)',
            fontFamily: 'var(--font-heading)'
          }}>
            Kjøp eSIM nå
          </button> */}
        <div className="flex justify-center mt-12">
          <TertiaryButton>
            Kjøp eSIM nå
          </TertiaryButton>


        </div>
      </div>
    </div>
  );
}
