import { Smartphone, QrCode, CheckCircle2, Wifi } from 'lucide-react';

export default function EsimStepHero() {
  const steps = [
    {
      number: 1,
      title: "Kjøpt ditt eSIM",
      description: "Velg dataplan og fullfør kjøpet. Du får tilsendt en QR-kode på e-post med en gang.",
      icon: Smartphone,
      color: "primary"
    },
    {
      number: 2,
      title: "Scan QR Kode",
      description: "Gå til telefonens instillinger, velg 'Legg til eSIM' eller 'Legg til mobilabonnement', og skan  QR-koden du har mottatt.",
      icon: QrCode,
      color: "primary"
    },
    {
      number: 3,
      title: "Aktiver & koble til ",
      description: "Gi det nye abonnementet et navn, slå på dataroaming, og du er klar! Du kobles til umiddelbart når du lander.",
      icon: CheckCircle2,
      color: "primary"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8" style={{
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
            Hvordan eSIM fungerer
          </h1>
          <p className="max-w-2xl text-balance mx-auto" style={{
            color: 'var(--color-secondary-text)'
          }}>
            Bli tilkoblet på få minutter med vår enkle aktiveringsprosess i 3 steg. Ingen fysisk SIM-kort nødvendig!
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
                  <h3 className="mb-3" style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-tertiary-text)'
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
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-center" style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-primary-text)'
            }}>
              Alt du trenger å vite
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{
                  backgroundColor: 'var(--color-primary)'
                }}>
                  <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--color-primary-text)' }} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary-text)' }}>
                    Enhet som støtter eSIM
                  </h4>
                  <p style={{ color: 'var(--color-secondary-text)' }}>
                    Pass på at telefonen din støtter eSIM.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{
                  backgroundColor: 'var(--color-primary)'
                }}>
                  <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--color-primary-text)' }} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary-text)' }}>
                    Stabilt internett
                  </h4>
                  <p style={{ color: 'var(--color-secondary-text)' }}>
                    Wi-Fi kreves under aktiveringsprosessen
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{
                  backgroundColor: 'var(--color-primary)'
                }}>
                  <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--color-primary-text)' }} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary-text)' }}>
                    Telefon uten operatørlås
                  </h4>
                  <p style={{ color: 'var(--color-secondary-text)' }}>
                    Your device must not be locked to a carrier
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{
                  backgroundColor: 'var(--color-primary)'
                }}>
                  <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--color-primary-text)' }} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary-text)' }}>
                        Installer før du reiser
                  </h4>
                  <p style={{ color: 'var(--color-secondary-text)' }}>
                      Aktiver når som helst, men abonnomentet starter når du ankommer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 rounded-xl transition-all hover:scale-105" style={{
            backgroundColor: 'var(--color-tertiary)',
            color: 'var(--color-tertiary-text)',
            fontFamily: 'var(--font-heading)'
          }}>
            Get Your eSIM Now
          </button>
        </div>
      </div>
    </div>
  );
}
