'use client'

import { LayoutDashboard } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function StepsHeader() {

  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "top bottom",
        scrub: false,
        toggleActions: "play none none reverse",
        markers: true
      }
    })

    tl.fromTo(headingRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: "power3.out", duration: 0.5 })
      .fromTo(descriptionRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: "power3.out", duration: 0.5 }, "-=0.2")
      .fromTo(iconRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, ease: "power3.out", duration: 0.5 }, "-=0.2")

  }, [])
  return (
    <div ref={containerRef} className="flex  items-center justify-center bg-background px-6">
      <div className="flex flex-col max-w-3xl items-center gap-4">
        <div className="relative ">
          <div ref={iconRef} className="flex z-0 absolute -top-9 md:-top-10 -right-8  items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full mb-6 bg-primary" >
              <LayoutDashboard className="h-6 w-6 md:w-8 md:h-8 text-primary-text" />
            </div>
          <h1 ref={headingRef} className="text-5xl z-10 relative text-center  font-heading tracking-tight text-primary-text">
            Kom i gang med beam business
          </h1>
        </div>
        <p ref={descriptionRef} className="text-base text-secondary-text text-balance text-center font-body leading-relaxed">
          Med beam business får bedriften din full kontroll over teamtilkobling, fra å legge til teammedlemmer til å tildele og administrere eSIM-er på tvers av arbeidsstyrken
        </p>
      </div>
    </div>

  );
}