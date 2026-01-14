'use client'

import { Check, Smartphone, Zap, Star } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);


export default function CompareCard() {
  const esimBenefits = [
    'Ingen høye roamingutgifter',
    'Mulig med flere profiler',
    'Betal kun for det du trenger',
    'Enkel installering',
    'Umiddelbar aktivering',
    'Ikke et fysisk SIM-kort',
  ];

  const cointainerRef = useRef<HTMLDivElement>(null)

  const dotOneRef = useRef<HTMLDivElement>(null)
  const dotTwoRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({scrollTrigger: {
      trigger: cointainerRef.current,
      start: "-20% top",
      end: "top top",
      scrub: false,
      toggleActions: "play none none reverse",
      markers: false
    }})

    const tl2 = gsap.timeline({scrollTrigger: {
      trigger: cointainerRef.current,
      start: "top top",
      end: "20% top",
      scrub: false,
      toggleActions: "play none none reverse",
      markers: false
    }})

    for (let i = 0; i < esimBenefits.length; i++) {
      tl.fromTo(`#benefit-${i}`, { opacity: 0, x: -50 }, { opacity: 1, x: 0, ease: "expo.out", duration: 0.2, delay: 0.1 })
    }


    tl.fromTo(dotOneRef.current, { opacity: 0, scaleX: 0, y: 5, transformOrigin: "left center" }, { opacity: 1, y: 0, ease: "expo.out", delay: 0.3, duration: 0.3, scaleX: 1, })
    tl.fromTo(dotTwoRef.current, { opacity: 0, scaleX: 0, transformOrigin: "left center" }, { opacity: 1, ease: "expo.out", duration: 0.3, scaleX: 1, })
    tl.fromTo(lineRef.current, { opacity: 0, scaleX: 0, transformOrigin: "left center" }, { opacity: 1, scaleX: 1,  ease: "linear", duration: 0.5, })

  }, )



  return (
    <div ref={cointainerRef} className="min-h-screen bg-surface-dim w-full flex items-center justify-center  md:py-12 lg:py-16">
      <div className="w-full ">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-2 mb-8 md:mb-20">
          <span className='bg-primary w-16 h-16 flex items-center justify-center rounded-full  '>
            <Star className="w-8 h-8 text-primary-text" />
          </span>
          <h1 className="mb-4  text-5xl font-heading text-primary-text">Fordeler med eSIM</h1>
          <p className="text-primary-text max-w-xl mx-auto">
            Null stress, med eSIM kan du kjøpe og aktivere lokale datapakker før du reiser, slik at du er online når du lander.
          </p>
        </div>

        {/* Comparison Card */}
        <div className="w-full  rounded-3xl bg-white overflow-hidden">
          <div className="flex flex-col gap-0 items-center ">
            {/* eSIM Column */}
            <div className="p-10  md:p-12 lg:p-10">

              <div className="flex items-center  gap-8 ">
                {esimBenefits.map((benefit, index) => (
                  <div id={`benefit-${index}`} key={index} className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 rounded-full p-1 bg-[#f9f871] flex items-center justify-center  mt-0.5">
                      <Check className="w-3.5 h-3.5 text-tertiary" strokeWidth={2.5} />
                    </div>
                    <p className="text-primary-text text-sm">{benefit}</p>
                  </div>
                ))}
              </div>

            </div>
            <div className="flex  w-full mb-8 pl-12 items-center gap-2">
              <div ref={dotOneRef} className="w-5 opacity-0 h-[10px] rounded-l-lg bg-primary"></div>
              <div ref={dotTwoRef} className="w-5 opacity-0  h-[10px] bg-primary"></div>
              <div ref={lineRef} className="w-full opacity-0 h-[10px] bg-gradient-to-l from-transparent via-primary to-primary"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
