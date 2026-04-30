'use client'

import { LayoutDashboard } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function StepsHeader() {

  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "30% bottom",
        end: "70% bottom",
        scrub: false,
        toggleActions: "play none none reverse",
        markers: false
      }
    })

    tl.fromTo(headingRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: "power3.out", duration: 0.5 })
      .fromTo(descriptionRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: "power3.out", duration: 0.5 }, "-=0.2")
      .fromTo(iconRef.current, { opacity: 0, x: 100, scale: 0.9 }, { opacity: 1, x: 0, scale: 1, ease: "power3.out", duration: 0.5 }, "-=0.2")

  }, { scope: containerRef })
  return (
    <div ref={containerRef} className="flex  items-center justify-center bg-background px-6">
      <div className="flex flex-col max-w-3xl items-center gap-4">
        <div className="relative w-screen md:w-auto ">
          <div ref={iconRef} className="flex z-0 absolute -top-9 md:-top-9 right-10 md:-right-6  items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full mb-6 bg-primary" >
            <LayoutDashboard className="h-6 w-6 md:w-8 md:h-8 text-primary-text" />
          </div>
          <h1 ref={headingRef} className="text-4xl md:text-5xl z-10 relative text-center   [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]  font-heading tracking-tight text-secondary-text">
              Administrer hele bedriftens eSIM fra én enkel plattform
          </h1>
        </div>
        <p ref={descriptionRef} className="text-base text-secondary-text text-balance text-center font-body leading-relaxed">
        
        </p>
      </div>
    </div>

  );
}