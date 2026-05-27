import { useState } from 'react'
import IPhoneScreen from "../components/info/iphone-step"
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react'
import SpeechBubble from './info/speech-buble'


export default function IPhoneSlider() {
  const steps = [{ step: 1, title: " Åpne innstillinger", subtitle: "Gå til Innstillinger på telefonen din og velg 'Mobilnett'" },
  { step: 2, title: "Gå til mobilnett", subtitle: "Inne på mobilnett velger du 'Legg til eSIM'" },
  { step: 3, title: 'Legg til eSIM', subtitle: "Velg Bruk 'QR-kode', og scan QR-koden med din telefon" },
  { step: 4, title: 'Aktiver eSIM', subtitle: "Velg aktiver for å starte aktiveringen av din eSIM" },
  { step: 5, title: 'Aktiver eSIM', subtitle: "Trykk forsett for neste steg" },
  { step: 6, title: 'Hvor skal eSIM brukes', subtitle: "Velg om du skal bruke eSIM i utlandet eller i Norge" },
  { step: 7, title: 'Velg plan', subtitle: "Velg 'bare data' som din plan" },
  { step: 8, title: 'eSIM er nå klar til bruk', subtitle: "Aktivering er fullført og eSIM er klar til bruk" },
  { step: 9, title: 'eSIM er nå klar til bruk', subtitle: "Du kan nå se din eSIM fra beam sammen med ditt primære sin for tale og sms" },
  { step: 10, title: 'eSIM er nå klar til bruk', subtitle: "Du kan>NN se din eSIM fra beam sammen med ditt primære sin for tale og sms" },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')


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
    <div className="w-full bg-tertiary overflow-hidden   rounded-3xl  h-full flex">



      <div className="relative flex py-16    overflow-l-hidden items-start  justify-end w-1/2 px-4">
        <Zap className='text-primary absolute z-10 left-4 bottom-6  w-16 h-16' />
        <div className='h-68  absolute -bottom-34 z-0 -left-34 w-68 bg-primary/20 rounded-full'>
        </div>
        <div className='absolute z-10 pl-16 top-24 right-4'>
          <SpeechBubble title={steps[activeIndex].title} description={steps[activeIndex].subtitle} />
        </div>
      </div>

      <div className='w-1/2  relative flex items-center justify-center'>
        <div className='h-68  absolute -top-34 z-0 -right-32 w-68 bg-primary/20 rounded-full'></div>
        <div className='absolute top-8 right-12 z-10 text-primary font-body font-semibold text-4xl'>{steps[activeIndex].step}</div>
        <div className=' w-[420px]  mr-18'>


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
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-secondary shadow-md p-2 hover:scale-105 transition"
              aria-label="Forrige steg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-secondary shadow-md p-2 hover:scale-105 transition"
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