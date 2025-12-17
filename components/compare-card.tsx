import { Check, Smartphone, Zap, Star } from 'lucide-react';
import TertiaryButton from './buttons/tertiary-button';

export default function CompareCard() {
  const esimBenefits = [
    'Ingen høye roamingutgifter',
    'Mulig med flere profiler',
    'Betal kun for det du trenger',
    'Enkel installering',
    'Umiddelbar aktivering',
    'Ikke et fysisk SIM-kort',
  ];



  return (
    <div className="min-h-screen bg-surface-dim w-full flex items-center justify-center p-6 md:p-12 lg:p-16">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-2 mb-16 md:mb-20">
          <span className='bg-primary w-16 h-16 flex items-center justify-center rounded-full  '>
            <Star className="w-8 h-8 text-primary-text" />
          </span>
          <h1 className="mb-4  text-5xl font-heading text-tertiary">Fordeler med eSIM</h1>
          <p className="text-primary-text max-w-xl mx-auto">
            Null stress, med eSIM kan du kjøpe og aktivere lokale datapakker før du reiser, slik at du er online når du lander.
          </p>
        </div>

        {/* Comparison Card */}
        <div className="bg-white  rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex flex-col items-center ">
            {/* eSIM Column */}
            <div className="p-10  md:p-12 lg:p-14">
              <div className="mb-10 flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-tertiary" strokeWidth={2} />
                <div>
                  <h2 className="text-tertiary text-xl font-heading mb-1">eSIM</h2>
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
            <div className="flex  w-full mb-8 pl-12 items-center gap-2">
              <div className="w-5 h-[10px] rounded-l-lg bg-primary"></div>
              <div className="w-5  h-[10px] bg-primary"></div>

              <div className="flex-1 h-[10px] bg-gradient-to-l from-transparent via-primary to-primary"></div>

            </div>


          </div>

          {/* CTA Footer */}
          <div className="bg-[#d6e3ff] border px-10 py-12 md:px-12 md:py-14 lg:px-0 text-center border-t border-[#d6e3ff]">
            {/*   <h3 className="text-[#008093] mb-3">Klar for å bytte?</h3>
            <p className="text-[#030213]/60 mb-8 max-w-md mx-auto">
              Bli en del av millionene som har gått over til eSIM.
            </p> */}
            <div className='flex justify-center'>
              <TertiaryButton >
                Kjøp eSIM nå
              </TertiaryButton>
            </div>
            {/* <div className="flex  w-full mt-8 pl-12 items-center gap-2">
              <div className="w-5 h-[10px] rounded-l-lg bg-primary"></div>
              <div className="w-5  h-[10px] bg-primary"></div>

              <div className="flex-1 h-[10px] bg-gradient-to-l from-transparent via-primary to-primary"></div>

            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
