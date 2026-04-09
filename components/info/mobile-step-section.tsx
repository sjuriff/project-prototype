'use client'
import IPhoneScreen from "./iphone-step"
import AndroidSection from "./android-section"
import { useState, useEffect, useRef, useMemo } from "react"
import { WifiCog } from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
export default function MobileStepSection() {
  const [phoneType, setPhoneType] = useState<'iphone' | 'android'>('iphone');

  const indicatorRefs = useRef<
    Record<
      string,
      {
        dotOne: HTMLDivElement | null;
        dotTwo: HTMLDivElement | null;
        line: HTMLDivElement | null;
      }
    >
  >({
    iphone: { dotOne: null, dotTwo: null, line: null },
    android: { dotOne: null, dotTwo: null, line: null },
  });

  useGSAP(
    () => {
      const active = indicatorRefs.current[phoneType];
      if (!active?.dotOne || !active?.dotTwo || !active?.line) return;

      gsap.killTweensOf([active.dotOne, active.dotTwo, active.line]);

      const tl = gsap.timeline();

      tl.fromTo(
        active.dotOne,
        { opacity: 0, scaleX: 0, y: 5, transformOrigin: "left center" },
        { opacity: 1, y: 0, ease: "expo.out", duration: 0.2, scaleX: 1 }
      )
        .fromTo(
          active.dotTwo,
          { opacity: 0, scaleX: 0, transformOrigin: "left center" },
          { opacity: 1, ease: "expo.out", duration: 0.2, scaleX: 1 }
        )
        .fromTo(
          active.line,
          { opacity: 0, scaleX: 0, transformOrigin: "left center" },
          { opacity: 1, scaleX: 1, ease: "power3.out", duration: 0.2 },
          "-=0.05"
        );
    },
    { dependencies: [phoneType] }
  );

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
      <div className="relative w-fit mx-auto">

        <div className="absolute z-0 -top-8 md:-top-10 right-0 md:-right-8 items-center flex justify-center gap-3 p-4 bg-primary rounded-full">
          <WifiCog className="md:w-8 w-6 h-6 md:h-8 z-0 text-secondary-foreground" />
        </div>

        <h1 className="text-center relative z-10 [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] font-heading text-4xl md:text-5xl text-primary-text mb-12">
          Hvordan aktiverer jeg Beam eSIM
        </h1>
      </div>

      <div className="flex justify-center mb-12">
        <button
          className={`px-4 flex flex-col gap-1 items-center justify-center py-2 hover:cursor-pointer hover:scale-105 transition-transform   mr-4 `}
          onClick={() => setPhoneType('iphone')}
        >
          iPhone
          <div
            className={`flex items-center gap-1 transition-opacity duration-200 ${phoneType === "iphone" ? "opacity-100" : "opacity-0"
              }`}
          >
            <div
              ref={(el) => {
                indicatorRefs.current["iphone"].dotOne = el;
              }}
              className="w-2 h-1 rounded-l-lg bg-tertiary"
            />
            <div
              ref={(el) => {
                indicatorRefs.current["iphone"].dotTwo = el;
              }}
              className="w-2 h-1 bg-tertiary"
            />
            <div
              ref={(el) => {
                indicatorRefs.current["iphone"].line = el;
              }}
              className="w-18 h-1 bg-gradient-to-r from-tertiary via-tertiary to-transparent"
            />
          </div>
        </button>
        <button
          className={`px-4 py-2 flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:scale-105 transition-transform   `}
          onClick={() => setPhoneType('android')}
        >
          Android
          <div
            className={`flex items-center gap-1 transition-opacity duration-200 ${phoneType === "android" ? "opacity-100" : "opacity-0"
              }`}
          >
            <div
              ref={(el) => {
                indicatorRefs.current["android"].dotOne = el;
              }}
              className="w-2 h-1 rounded-l-lg bg-tertiary"
            />
            <div
              ref={(el) => {
                indicatorRefs.current["android"].dotTwo = el;
              }}
              className="w-2 h-1 bg-tertiary"
            />
            <div
              ref={(el) => {
                indicatorRefs.current["android"].line = el;
              }}
              className="w-18 h-1 bg-gradient-to-r from-tertiary via-tertiary to-transparent"
            />
          </div>
        </button>
      </div>
      {content}
    </div>

  )


}