'use client'
import IPhoneScreen from "./iphone-step"
import AndroidSection from "./android-section"
import { useState } from "react"
import { useMemo } from "react"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
export default function MobileStepSection() {
  const [phoneType, setPhoneType] = useState<'iphone' | 'android'>('iphone');

  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === "undefined") return

    const applyFromHash = () => {
      const hash = window.location.hash
      if (!hash) return // ⬅️ VIKTIG: ingen hash → ikke scroll

      const value = hash.replace("#", "")
      if (value === "android") setPhoneType("android")
      if (value === "iphone") setPhoneType("iphone")

      const el = document.getElementById("mobile-steps")
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }

    applyFromHash()
    window.addEventListener("hashchange", applyFromHash)
    return () => window.removeEventListener("hashchange", applyFromHash)
  }, [])

  const content = useMemo(() => {
    if (phoneType === "iphone") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <IPhoneScreen step={1} />
          <IPhoneScreen step={2} />
          <IPhoneScreen step={3} />
        </div>
      )
    }
    return <AndroidSection />
  }, [phoneType])

  return (
    <div id="mobile-steps" className="max-w-7xl pb-24 pt-16   mx-auto">
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