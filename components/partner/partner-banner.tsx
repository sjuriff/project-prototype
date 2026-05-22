'use client'

import earningsIllustration from "@/public/images/test-partner.png";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { FaGlobeEurope } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function PartnerBanner() {

  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const iconRef = useRef(null);

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
        .from(iconRef.current, {
          scale: 0.5,
          x: '-185%',
          ease: "linear"

        })
    },
    { scope: containerRef }
  );


  return (
    <section ref={containerRef} className="relative overflow-hidden px-16 bg-secondary-text py-16 sm:py-20">
      <div className="container relative">
        <div className="flex flex-col lg:flex-row items-center gap-8  justify-around lg:gap-16">

          <div ref={headingRef} className="">
            <h2 className="font-heading text-5xl flex flex-col text-center md:text-left leading-[1.05] text-secondary tracking-tight sm:text-5xl">
              Gi kundene dine{" "}
              <span className="text-primary [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]">
                mobildekning over hele verden
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-center md:text-left text-base leading-relaxed text-secondary sm:text-lg">
              Sjenerøs provisjon på hvert salg, tilbakevendende inntekt på fornyelser,
              og månedlige utbetalinger uten skjulte gebyrer.
            </p>
          </div>


          <div ref={imageRef} className="relative w-60 h-60  bg-primary rounded-full flex items-center justify-center">

            <FaGlobeEurope className="w-68 h-68  z-0 absolute  text-light-yellow" />
            <div ref={iconRef}>
              <FaPaperPlane className="w-24 z-10 h-24 text-secondary-text" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

