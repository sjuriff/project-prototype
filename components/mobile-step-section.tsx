'use client'
import IPhoneScreen from "./iphone-step"
import AndroidSection from "./android-section"
import { useState } from "react"
export default function MobileStepSection() {
  const [phoneType, setPhoneType] = useState<'iphone' | 'android'>('iphone');

  let content;
  if (phoneType === 'iphone') {
    content = <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
      <IPhoneScreen step={1} />
      <IPhoneScreen step={2} />
      <IPhoneScreen step={3} />
    </div>
  } else if (phoneType === 'android') {
    content = <AndroidSection />;
  }

  return (
    <div className="max-w-7xl pb-24 pt-16   mx-auto">
      <h1 className="text-center font-heading text-3xl text-primary-text mb-12">
        Hvordan aktiverer jeg Beam eSIM
      </h1>

      <div className="flex justify-center mb-12">
        <button
          className={`px-4 py-2 hover:cursor-pointer hover:scale-105 transition-transform   mr-4 ${phoneType === 'iphone' ? 'border-b-2 border-tertiary' : ''}`}
          onClick={() => setPhoneType('iphone')}
        >
          iPhone
        </button>
        <button
          className={`px-4 py-2 hover:cursor-pointer hover:scale-105 transition-transform   ${phoneType === 'android' ? 'border-b-2 border-tertiary' : ' '}`}
          onClick={() => setPhoneType('android')}
        >
          Android
        </button>

      </div>

      {content}
    </div>

  )


}