import { Check, X, Smartphone, CreditCard, WifiSync, Zap } from 'lucide-react';

export default function CompareCard() {
  const esimBenefits = [
    'Umiddelbar aktivering',
    'Bytt operatør digitalt',
    'Flere numre på én enhet',
    'Ingen fysisk skade eller tap',
    'Perfect for reisen din',
    'Miljøvennlig',
  ];

  const simLimitations = [
    'Fysisk kort kreves',
    'Kan gå tapt eller bli skadet',
    'Krever manuell innsetting',
    'Kun ett nummer per SIM-spor',
    'Ofte behov for butikkbesøk',
    'Plastavfall',
  ];

  return (
    <div className="min-h-screen bg-surface-dim w-full flex items-center justify-center p-6 md:p-12 lg:p-16">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-2 mb-16 md:mb-20">
          <span className='bg-primary w-16 h-16 flex items-center justify-center rounded-full  '>
            <Zap className="w-8 h-8 text-primary-text"  />
          </span>
          <h1 className="mb-4  text-3xl font-heading text-tertiary-heading">Fremtiden for mobil tilkobling</h1>
          <p className="text-[#717182] max-w-xl mx-auto">
           Oppdag hvorfor eSIM-teknologi revolusjonerer tilkobling.
          </p>
        </div>

        {/* Comparison Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* eSIM Column */}
            <div className="p-10 md:p-12 lg:p-14">
              <div className="mb-10 flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-[#008093]" strokeWidth={2} />
                <div>
                  <h2 className="text-[#008093] mb-1">eSIM</h2>
                  <p className="text-sm text-[#717182]">Digital SIM</p>
                </div>
              </div>

              <div className="space-y-5">
                {esimBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-[#f9f871] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#008093]" strokeWidth={2.5} />
                    </div>
                    <p className="text-[#030213]">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Traditional SIM Column */}
            <div className="p-10 md:p-12 lg:p-14 bg-[#f7f9fc] border-t md:border-t-0 md:border-l border-gray-100">
              <div className="mb-10 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-[#717182]" strokeWidth={2} />
                <div>
                  <h2 className="text-[#717182] mb-1">Tradisjonell SIM</h2>
                  <p className="text-sm text-[#717182]">Fysisk kort</p>
                </div>
              </div>

              <div className="space-y-5">
                {simLimitations.map((limitation, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-[#717182]" strokeWidth={2.5} />
                    </div>
                    <p className="text-[#717182]">{limitation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Footer */}
          <div className="bg-[#d6e3ff] px-10 py-12 md:px-12 md:py-14 lg:px-14 text-center border-t border-[#d6e3ff]">
            <h3 className="text-[#008093] mb-3">Klar for å bytte?</h3>
            <p className="text-[#030213]/60 mb-8 max-w-md mx-auto">
              Bli en del av millionene som har gått over til eSIM.
            </p>
            <button className="px-10 py-4 bg-[#008093] text-white rounded-full hover:bg-[#008093]/90 transition-all">
              Kjøp eSIM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
