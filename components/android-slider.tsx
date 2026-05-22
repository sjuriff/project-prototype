'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react'
import { PhoneFrame, Step1, Step2, Step3, Step4, Step5, SettingItem } from "@/components/info/android-screen";

const androidSteps = [
  {
    step: 1,
    title: 'Åpne innstillinger',
    description:
      "Gå til Innstillinger på telefonen din og velg 'Nettverk og internett'",
    component: <Step1 />,
  },
  {
    step: 2,
    title: 'Velg SIM-kort',
    description:
      "Trykk på 'SIM-kort' for å administrere dine mobile abonnement",
    component: <Step2 />,
  },
  {
    step: 3,
    title: 'Aktiver eSIM',
    description:
      'Skann QR-koden fra operatøren din for å aktivere eSIM',
    component: <Step3 />,
  },

  { step: 4, title: 'Velg hovedlinje', description: 'Velg det som hovedlinje for mobildata', component: <Step4 /> },
  { step: 5, title: 'Aktiver eSIM', description: 'Aktiver eSIM', component: <Step5 /> },
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
    <div className="w-full bg-tertiary rounded-3xl  h-full flex">

      <div className="relative overflow-hidden rounded-l-3xl flex flex-col items-end justify-start  w-1/2 px-4">
        <div className='text-primary absolute z-10 left-12 bottom-12  text-5xl font-bold font-heading' >
          {androidSteps[activeIndex].step}
          </div>
        <div className='h-68  absolute -bottom-24 z-0 -left-24 w-68 bg-primary/20 rounded-full'>





        </div>
        {/* Bubble */}
        <div className="relative mr-8 bg-secondary mt-32 min-w-[350px] min-h-[200px] border-2 border-secondary rounded-3xl px-8 py-8 shadow-md flex flex-col items-center justify-center">

          {/* Border layer for pointer */}
          <div
            className="
        absolute
        top-1/2
        -right-[18px]
        -translate-y-1/2
        w-0 h-0
        border-t-[18px]
        border-b-[18px]
        border-l-[18px]
        border-t-transparent
        border-b-transparent
        border-l-secondary
      "
          />

          {/* Inner white layer for pointer */}
          <div
            className="
        absolute
        top-1/2
        -right-[15px]
        -translate-y-1/2
        w-0 h-0
        border-t-[15px]
        border-b-[15px]
        border-l-[15px]
        border-t-transparent
        border-b-transparent
        border-l-secondary
      "
          />

          {/* Step Circle */}
          {/*   <div className="mb-4">
      <div
        className="flex absolute left-2 top-2  items-center justify-center w-10 h-10 rounded-full"
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        <span
          className="text-sm font-semibold"
          style={{ color: 'var(--color-primary-text)' }}
        >
          {steps[activeIndex].step}
        </span>
      </div>
    </div> */}

          {/* Content */}
          <div className="flex flex-col  justify-center items-center gap-2 text-center">
            <h3 className="font-heading text-xl text-primary-text">
              {androidSteps[activeIndex].title}
            </h3>

            <p className="font-body text-base text-secondary-text">
              {androidSteps[activeIndex].description}
            </p>
          </div>
        </div>
      </div>

      <div className="relative  w-1/2 flex flex-col overflow-hidden">
        <div className='w-3/4 relative overflow-hidden  my-4'>

          <div
            className="flex w-full  transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {androidSteps.map((item) => (
              <div
                key={item.step}
                className="min-w-full  flex justify-center px-4"
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
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-secondary shadow-md p-2 hover:scale-105 transition"
            aria-label="Forrige steg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-secondary shadow-md p-2 hover:scale-105 transition"
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