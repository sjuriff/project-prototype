import { useState } from 'react'
import IPhoneScreen from "../components/info/iphone-step"
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react'


export default function IPhoneSlider() {
  const steps = [{ step: 1, title: " Åpne innstillinger", subtitle: "Gå til Innstillinger på telefonen din og velg 'Mobilnett'" },
  { step: 2, title: "Gå til mobilnett", subtitle: "Inne på mobilnett velger du 'Legg til eSIM'" },
  { step: 3, title: 'Legg til eSIM', subtitle: "Velg Bruk 'QR-kode', og scan QR-koden med din telefon" },
  { step: 4, title: 'Velg eSIM for data', subtitle: "Velg beam eSIM som standard for mobildata" },
  { step: 5, title: 'Bruk SIM for samtaler og SMS', subtitle: "Velg ditt vanlige SIM-kort som standard for samtaler og meldinger" }]
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



      <div className="relative flex py-16  overflow-l-hidden items-start  justify-end w-1/2 px-4">
       <Zap className='text-primary absolute z-10 left-8 bottom-10  w-16 h-16' />
        <div className='h-68  absolute -bottom-24 z-0 -left-24 w-68 bg-primary/20 rounded-full'>

         



        </div>
        {/* Bubble */}
        <div className="absolute z-10 -right-16 bg-secondary mt-8 w-3/4 min-w-[500px]   border-2 border-secondary rounded-4xl px-16 py-16 shadow-md flex flex-col items-center justify-center">

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
          <div className="flex flex-col justify-center items-center gap-2 text-center">
            <h3 className="font-heading text-xl text-primary-text">
              {steps[activeIndex].title}
            </h3>

            <p className="font-body italic text-base text-secondary-text">
              {steps[activeIndex].subtitle}
            </p>
          </div>
        </div>
      </div>


      <div className=' w-1/2 mr-18'>


        <div className="relative z-0 overflow-hidden">
          <div
            className="flex   transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {steps.map((step) => (
              <div key={step.step} className="min-w-full py-4 flex items-center justify-center px-4">

                <IPhoneScreen step={step.step} />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-28 top-1/2 -translate-y-1/2 rounded-full bg-secondary shadow-md p-2 hover:scale-105 transition"
            aria-label="Forrige steg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={goToNext}
            className="absolute right-28 top-1/2 -translate-y-1/2 rounded-full bg-secondary shadow-md p-2 hover:scale-105 transition"
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
  )
}