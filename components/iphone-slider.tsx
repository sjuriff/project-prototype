import { useState } from 'react'
import IPhoneScreen from "../components/info/iphone-step"
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function IPhoneSlider() {
  const steps = [1, 2, 3, 4, 5]
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
    <div className="w-full max-w-md mx-auto">
      <div className="relative overflow-hidden">
        <div
          className="flex   transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {steps.map((step) => (
            <div key={step} className="min-w-full flex items-center justify-center px-4">
              <IPhoneScreen step={step} />
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

      <div className="flex justify-center gap-2 mt-6">
        {steps.map((step, index) => (
          <button
            key={step}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all ${
              activeIndex === index
                ? 'w-8 bg-tertiary'
                : 'w-2 bg-secondary hover:bg-gray-400'
            }`}
            aria-label={`Gå til steg ${step}`}
          />
        ))}
      </div>
    </div>
  )
}