'use client'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

interface BeamLogoProps {
  scrollDirection: string
}

export default function BeamLogo({ scrollDirection }: BeamLogoProps) {
  const dotOneRef = useRef<HTMLDivElement>(null)
  const dotTwoRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)




  useGSAP(() => {
    const tl = gsap.timeline()

    if (scrollDirection === 'down') return

    tl.fromTo(dotOneRef.current, { opacity: 0, scaleX: 0, y: 5, transformOrigin: "left center" }, { opacity: 1, y: 0, ease: "expo.out", delay: 0.3, duration: 0.3, scaleX: 1, })
    tl.fromTo(dotTwoRef.current, { opacity: 0,  scaleX: 0, transformOrigin: "left center" }, { opacity: 1,  ease: "expo.out", duration: 0.3, scaleX: 1, })
    tl.fromTo(lineRef.current, { opacity: 0, scaleX: 0, transformOrigin: "left center" }, { opacity: 1, scaleX: 1, delay: 0.1, ease: "power3.out", duration: 0.3, })

  }, [scrollDirection])
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-logo text-primary [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]">beam</h1>
      <div className="flex  items-center gap-1">
        <div ref={dotOneRef} className="w-2 opacity-0 rounded-l-lg h-1 bg-primary"></div>
        <div ref={dotTwoRef} className="w-2 opacity-0 h-1 bg-primary"></div>
        <div ref={lineRef} className="w-18 opacity-0 h-1 bg-gradient-to-r from-primary via-primary to-transparent"></div>
      </div>

    </div>
  );

}