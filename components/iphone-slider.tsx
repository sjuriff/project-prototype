import { useState } from 'react'
import IPhoneScreen from "../components/info/iphone-step"
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react'
import SpeechBubble from './info/speech-buble'
import SpeechBubbleMobile from './info/speech-bubble-mobile'


export default function IPhoneSlider() {
  const steps = [{ step: 1, title: " Scan QR-koden", subtitle: "Scan QR-koden du har motatt på mail med kamera på telefonen din" },
  { step: 2, title: "Start aktivering", subtitle: "En pop-up skal dukke opp, velg 'Start aktivering'" },
  { step: 3, title: 'Aktiver eSIM', subtitle: "Aktiveringen av din eSIM starter, trykk forsett for neste steg" },
  { step: 4, title: 'Hvor skal eSIM brukes', subtitle: "Velg om du skal bruke eSIM i utlandet eller i Norge" },
  { step: 5, title: 'Abonnomentsvalg', subtitle: "Velg 'bare data' som din plan" },
  { step: 6, title: 'Aktivering er fullført', subtitle: "Aktivering er fullført og eSIM er klar til bruk" },
  { step: 7, title: 'Oversikt', subtitle: "Inne på Innstillinger -> Mobilnett har du oversikt over din primære SIM og din nye beam eSIM, samt hvilken sim som bruker for data, og hvilken som brukes for tale og meldinger " },
  { step: 8, title: 'beam eSIM', subtitle: "Hvis du trykker inn på ditt beam eSIM, vil du se en oversikt over din eSIM. DU kan skru av og på linjen" },
  { step: 9, title: 'Kontrollsenter', subtitle: "Hvis du drar ned kontrollsenteret på din iphone vil du nå se ditt beam eSIM sammen med ditt primære SIM-kort øverst i venstre hjørnet" }

  ]

  const [activeIndex, setActiveIndex] = useState(0)




  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? steps.length - 1 : current - 1
    )
  }

  const goToNext = () => {
    setActiveIndex((current) =>
      current === steps.length - 1 ? 0 : current + 1
    )
  }

  return (
    <div className="w-full bg-tertiary overflow-hidden h-screen   rounded-3xl  md:h-full flex">



      <div className="relative hidden  md:flex py-16    overflow-l-hidden items-start  justify-end md:w-1/2 px-4">
        <Zap className='text-primary absolute z-10 left-4 bottom-6  w-16 h-16' />
        <div className='h-68  absolute -bottom-34 z-0 -left-34 w-68 bg-primary/20 rounded-full'>
        </div>
        <div className='absolute z-10 pl-16 top-24 right-4'>
          <SpeechBubble title={steps[activeIndex].title} description={steps[activeIndex].subtitle} />
        </div>
      </div>

      <div className='md:w-1/2 w-full  relative flex items-end md:items-center md:justify-center'>
        <div className='absolute z-10 visible md:invisible top-0 left-0'>
          <SpeechBubbleMobile step={steps[activeIndex].step} title={steps[activeIndex].title} description={steps[activeIndex].subtitle} />
        </div>
        <div className='h-68 hidden md:block  absolute -top-34 z-0 -right-32 w-68 bg-primary/20 rounded-full'></div>
        <div className='absolute hidden md:block top-8 right-12 z-10 text-primary font-body font-semibold text-4xl'>{steps[activeIndex].step}</div>
        <div className=' w-full md:w-[420px]  md:mr-18'>


          <div className="relative z-0 overflow-hidden">
            <div
              className="flex   transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {steps.map((step) => (
                <div key={step.step} className="min-w-full h-full  py-4 flex items-center justify-center px-4">

                  <IPhoneScreen step={step.step} />
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-3 md:left-0 top-1/2 -translate-y-1/2 rounded-full bg-secondary shadow-md p-2 hover:scale-105 transition"
              aria-label="Forrige steg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="absolute right-3 md:right-0 top-1/2 -translate-y-1/2 rounded-full bg-secondary shadow-md p-2 hover:scale-105 transition"
              aria-label="Neste steg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mb-6 mt-2">
            {steps.map((step, index) => (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${activeIndex === index
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-secondary hover:bg-gray-400'
                  }`}
                aria-label={`Gå til steg ${step.step}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}