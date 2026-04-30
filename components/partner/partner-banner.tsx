'use client'

import earningsIllustration from "@/public/images/test-partner.png";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function PartnerBanner(){

  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);

    useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "30% bottom",
          end: "70% bottom",
          scrub: true,
                  
          markers: false
        }
      });

      tl.from(headingRef.current, {
        y: '120%',
        ease: "linear"
        
      })
      .from(imageRef.current, {
        scale: 0,
        ease: "linear"
      }, "-=0.2")
    },
    { scope: containerRef }
  );


  return (
    <section ref={containerRef} className="relative overflow-hidden px-16 bg-tertiary py-16 sm:py-20">
      <div className="container relative">
        <div  className="flex flex-col lg:flex-row items-center gap-8  justify-around lg:gap-16">
         
          <div ref={headingRef} className="">
            <h2 className="font-heading text-5xl text-center md:text-left  leading-[1.05] text-tertiary-text tracking-tight sm:text-5xl">
              Tjen opptil{" "}
              <span className="text-primary [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]">
                40&nbsp;000&nbsp;kr
              </span>{" "}
              i måneden
            </h2>
            <p className="mt-4 max-w-lg text-center md:text-left text-base leading-relaxed text-secondary sm:text-lg">
              Sjenerøs provisjon på hvert salg, tilbakevendende inntekt på fornyelser,
              og månedlige utbetalinger uten skjulte gebyrer.
            </p>
          </div>

        
          <div ref={imageRef}  className="relative  w-fit md:p-16 bg-light-yellow rounded-full flex items-center justify-center">
            <Image
              src={earningsIllustration}
              alt="Illustrasjon av lommebok med penger"
              loading="lazy"
              width={1024}
              height={1024}
              className="   sm:w-fit object-contain    sm:h-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

