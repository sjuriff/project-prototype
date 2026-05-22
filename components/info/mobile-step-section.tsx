'use client'
import IPhoneScreen from "./iphone-step"
import IPhoneSlider from "../iphone-slider"
import AndroidSection from "./android-section"
import AndroidSlider from "../android-slider"
import { useState, useEffect, useRef, useMemo } from "react"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
export default function MobileStepSection() {
  const [phoneType, setPhoneType] = useState<'iphone' | 'android'>('iphone');

  const buttonsRef = useRef<Record<string, HTMLButtonElement | null>>({
    iphone: null,
    android: null,
  })

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

      const buttons = Object.values(buttonsRef.current).filter(Boolean);
      const activeButton = buttonsRef.current[phoneType];
      if (!activeButton) return;

      // Kill old tweens BEFORE resetting
      gsap.killTweensOf([
        ...buttons,
        active.dotOne,
        active.dotTwo,
        active.line,
      ]);

      // Reset all buttons after killing tweens
      gsap.set(buttons, {
        backgroundColor: "transparent",
        color: "#1f2937",
        boxShadow: "none",
      });

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
        )
        .fromTo(
          activeButton,
          { backgroundColor: "transparent", color: "#1f2937", },
          { backgroundColor: '#d6e9fb', color: "#243a5e", ease: "power3.out", duration: 0.5 },
        )
    },
    { dependencies: [phoneType] }
  );

  useEffect(() => {
    if (typeof window === "undefined") return

    const applyFromHash = () => {
      const hash = window.location.hash
      if (!hash) return // 

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
        <div className="flex items-center justify-center w-full">
          <IPhoneSlider />
        </div>
      )
    }
    return <AndroidSlider />
  }, [phoneType])

  return (
    <div id="mobile-steps" className="max-w-7xl pb-24 pt-16   mx-auto">
      <div className="relative w-fit mx-auto">

        {/*  <div className="absolute z-0 -top-8 md:-top-10 right-0 md:-right-8 items-center flex justify-center gap-3 p-4 bg-primary rounded-full">
          <WifiCog className="md:w-8 w-6 h-6 md:h-8 z-0 text-secondary-foreground" />
        </div> */}

        <h1 className="text-center relative z-10 [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] font-heading text-4xl md:text-5xl text-primary-text mb-12">
          Hvordan aktiverer jeg <span className="font-logo">beam</span> eSIM
        </h1>
      </div>

      <div className="flex   justify-center mb-12">
        <div className="w-fit  flex  bg-surface-dim  rounded-lg shadow-md ">
          <button
            ref={(el) => { buttonsRef.current["iphone"] = el }}
            disabled={phoneType === "iphone"}
            className={` flex h-full  md:text-lg rounded-l-lg px-6 py-4   flex-col gap-1 items-center justify-center   ${phoneType !== "iphone" ? "hover:scale-105 hover:cursor-pointer" : ""}  transition-transform   mr-4 `}
            onClick={() => setPhoneType('iphone')}
          >
            <div className=" px-2 rounded-lg">
              iPhone
            </div>
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
            ref={(el) => { buttonsRef.current["android"] = el }}
            disabled={phoneType === "android"}
            className={`px-6 py-4 gap-1 flex md:text-lg text-default rounded-r-lg flex-col items-center justify-center  ${phoneType !== "android" ? "hover:scale-105 hover:cursor-pointer" : ""} gap-1 transition-transform   `}
            onClick={() => setPhoneType('android')}
          >
            <div className=" px-2 rounded-lg">
              Android
            </div>
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
      </div>
      <div className="">
        {content}
      </div>
    </div>

  )


}