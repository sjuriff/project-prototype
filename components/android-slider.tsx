'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react'
import { PhoneFrame, Step1, Step4, Step5, Step2, Step3, Step6, Step7, Step8, Step9 } from "@/components/info/android-screen";
import SpeechBubble from "./info/speech-buble";
import SpeechBubbleMobile from "./info/speech-bubble-mobile";

const androidSteps = [
  {
    step: 1,
    title: 'Scan QR-koden',
    description:
      "Scan QR-koden du har motatt på mail med kamera på telefonen din'",
    component: <Step1 />,
  },
  {
    step: 2,
    title: 'Åpne innstillinger',
    description:
      "Gå til Innstillinger på telefonen din og velg 'Nettverk og internett'",
    component: <Step2 />,
  },
  {
    step: 3,
    title: 'Velg SIM-kort',
    description:
      "Trykk på 'SIM-kort' for å administrere dine mobile abonnement",
    component: <Step3 />,
  },
  {
    step: 4,
    title: 'Aktiver eSIM',
    description:
      'Skann QR-koden fra operatøren din for å aktivere eSIM',
    component: <Step4 />,
  },

  { step: 5, title: 'Velg hovedlinje', description: 'Velg det som hovedlinje for mobildata', component: <Step5 /> },
  { step: 6, title: 'Aktiver eSIM', description: 'Aktiver eSIM', component: <Step6 /> },
  { step: 7, title: 'Aktiver eSIM', description: 'Aktiver eSIM', component: <Step7 /> },
  { step: 8, title: 'Velg hovedlinje', description: 'Velg det som hovedlinje for mobildata', component: <Step8 /> },
  { step: 9, title: 'Velg hovedlinje', description: 'Velg det som hovedlinje for mobildata', component: <Step9 /> },
]

export default function AndroidSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  const previous = () => {
    setActiveIndex((index) =>
      index === 0 ? androidSteps.length - 1 : index - 1
    )
  }

  const next = () => {
    setActiveIndex((index) =>
      index === androidSteps.length - 1 ? 0 : index + 1
    )
  }

  return (
    <div className="w-full bg-tertiary  rounded-3xl h-[750px]  md:h-full flex">

      <div className="relative overflow-hidden rounded-l-3xl flex flex-col items-end justify-start hidden md:flex  w-1/2 px-4">
        <Zap className='text-primary absolute z-10 left-4 bottom-6  w-16 h-16' />
        <div className='h-68  absolute -bottom-34 z-0 -left-34 w-68 bg-primary/20 rounded-full'>
        </div>

        <div className='absolute z-10 pl-16 top-24 right-4'>
          <SpeechBubble title={androidSteps[activeIndex].title} description={androidSteps[activeIndex].description} />
        </div>


      </div>

      <div className="relative w-full  md:w-1/2 flex flex-col items-center justify-end overflow-hidden">
        <div className='absolute z-10 visible md:invisible top-0 left-0'>
          <SpeechBubbleMobile step={androidSteps[activeIndex].step} title={androidSteps[activeIndex].title} description={androidSteps[activeIndex].description} />
        </div>
        <div className='absolute hidden md:flex top-8 right-12 z-10 text-primary font-body font-semibold text-4xl' >
          {androidSteps[activeIndex].step}
        </div>
        <div className='h-68 hidden md:flex  absolute -top-34 z-0 -right-34 w-68 bg-primary/20 rounded-full'>





        </div>
        <div className='w-3/4   relative flex flex-col items-center md:overflow-hidden justify-center   my-4'>

          <div
            className="flex  md:w-full  transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {androidSteps.map((item) => (
              <div
                key={item.step}
                className="min-w-full   flex justify-center px-4"
              >
                <PhoneFrame
                  step={item.step}
                  title={item.title}
                  description={item.description}
                >
                  {item.component}
                </PhoneFrame>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={previous}
            className="absolute -left-10 md:left-0 top-1/2 -translate-y-1/2 rounded-full bg-secondary shadow-md p-2 hover:scale-105 transition"
            aria-label="Forrige steg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={next}
            className="absolute -right-10 md:right-0 top-1/2 -translate-y-1/2 rounded-full bg-secondary shadow-md p-2 hover:scale-105 transition"
            aria-label="Neste steg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="flex justify-center gap-2 mt-6">
            {androidSteps.map((item, index) => (
              <button
                key={item.step}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${activeIndex === index
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-secondary'
                  }`}
                aria-label={`Gå til steg ${item.step}`}
              />
            ))}
          </div>
        </div>
      </div>


    </div >
  )
}