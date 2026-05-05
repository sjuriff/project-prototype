'use client'

import { Users, Package, Activity, BarChart3 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function BusinessSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const steps = [
    {
      number: 1,
      title: "Tildel dataplaner",
      description: "Start med å legge til medlemmer og tildele planer.",
      icon: Users,
      color: "primary"
    },
    {
      number: 2,
      title: "Følg forbruk og fyll på data i sanntid",
      description: "Velg land, regional eller globale planer og kjøp med en gang",
      icon: Activity,
      color: "primary"
    },
    {
      number: 3,
      title: "Full oversikt og forutsigbare kostnader",
      description: "Når en bruker har aktivert en eSIM, kan du monitorere brukt data.",
      icon: BarChart3,
      color: "primary"
    }
  ];

  useGSAP(
    () => {
      const cards = containerRef.current?.querySelectorAll(".step-card");

      if (!cards) return;

      gsap.fromTo(
        cards,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "30% bottom",
            end: "70% bottom",
            scrub: false,
            toggleActions: "play none none reverse",
            markers: false
          }
        }
      );
    },
    { scope: containerRef }
  );
  return (
    <div ref={containerRef} className=" w-full   md:w-1/3 relative  z-10 flex flex-col gap-8 mb-16">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const bgColor = step.color === 'primary' ? 'var(--color-primary)' :
          step.color === 'secondary' ? 'var(--color-secondary)' :
            'var(--color-tertiary)';
        const textColor = step.color === 'tertiary' ? 'var(--color-tertiary-text)' : 'var(--color-primary-text)';

        return (
          <div key={step.number} className="step-card    w-full relative">


            <div className="relative overflow-hidden   bg-tertiary rounded-2xl p-8 shadow-b-md transition-shadow h-full">

              {/* Step Icon */}

              <div className="absolute  -left-8 -top-6   w-20 h-20 rounded-full " style={{
                backgroundColor: bgColor
              }}>
                <Icon className="w-7 h-7 absolute top-9  right-4 transform  " style={{ color: textColor }} />
              </div>

              {/* Step Number */}
              <div className="absolute top-1/2 transform -translate-y-1/2 -right-6 w-12 h-12 rounded-full flex items-center justify-center bg-secondary font-heading text-secondary-text">
                <p className="absolute [text-shadow:0px_0px_8px_rgba(249,248,113,0.6),2px_2px_6px_rgba(249,248,113,0.4)] font-semibold left-3">
                  {step.number}
                </p>
              </div>
              {/* Step Number Badge and Title */}
              <div className="flex mb-4  items-center gap-2">




                {/* Content */}
                <h3 className=" ml-6 text-tertiary-text" style={{
                  fontFamily: 'var(--font-heading)',

                }}>
                  {step.title}
                </h3>
              </div>
              <p className='text-balance ml-6 text-tertiary-text'>
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>

  )
}