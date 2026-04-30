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
    <div ref={containerRef} className="grid  md:w-1/3 relative  z-10 md:grid-cols-1 gap-8 mb-16">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const bgColor = step.color === 'primary' ? 'var(--color-primary)' :
          step.color === 'secondary' ? 'var(--color-secondary)' :
            'var(--color-tertiary)';
        const textColor = step.color === 'tertiary' ? 'var(--color-tertiary-text)' : 'var(--color-primary-text)';

        return (
          <div key={step.number} className="step-card  w-full relative">
         

            <div className="relative bg-tertiary rounded-2xl p-8 shadow-md hover:shadow-md transition-shadow h-full">
              {/* Step Number Badge */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6" style={{
                backgroundColor: bgColor
              }}>
                <Icon className="w-7 h-7" style={{ color: textColor }} />
              </div>

              {/* Step Number */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-secondary font-heading text-secondary-text">
                {step.number}
              </div>

              {/* Content */}
              <h3 className="mb-3 text-tertiary-text" style={{
                fontFamily: 'var(--font-heading)',

              }}>
                {step.title}
              </h3>
            {/*   <p className='text-balance text-tertiary-text'>
                {step.description}
              </p> */}
            </div>
          </div>
        );
      })}
    </div>

  )
}