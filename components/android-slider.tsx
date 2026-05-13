'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
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
    <div className="w-full max-w-md mx-auto">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {androidSteps.map((item) => (
            <div
              key={item.step}
              className="min-w-full flex justify-center px-4"
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
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {androidSteps.map((item, index) => (
          <button
            key={item.step}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all ${
              activeIndex === index
                ? 'w-8 bg-tertiary'
                : 'w-2 bg-secondary'
            }`}
            aria-label={`Gå til steg ${item.step}`}
          />
        ))}
      </div>
    </div>
  )
}