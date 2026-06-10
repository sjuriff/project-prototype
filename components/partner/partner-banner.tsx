'use client'

import earningsIllustration from "@/public/images/test-partner.png";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { FaGlobeEurope, FaGlobeAmericas } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function PartnerBanner() {

  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const iconRef = useRef(null);
  const iconRef2 = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "40% bottom",
          end: "80% bottom",
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
        }, "")
        .fromTo(iconRef.current, {
          x: '0',
          scale: 1,
          ease: "linear"

        }, {
          scale: 1.8,
          x: '100%',
          ease: "linear",
          delay: 0.5
         
        })
        .fromTo(iconRef2.current, {
          x: '-165%',
          ease: "linear",
          scale: 1.8
        }, {
          x: '0',
          ease: "linear",
          scale: 1,
          duration: 1

        }, "-=1")
    },
    { scope: containerRef }
  );


  return (
    <section ref={containerRef} className="relative overflow-hidden pb-16  px-16 bg-secondary-text md:py-16 sm:py-20">
      <div className="container relative">
        <div className="flex flex-col lg:flex-row items-center gap-8  justify-around lg:gap-16">

          <div ref={headingRef} className="">
            <h2 className="font-heading text-4xl flex flex-col text-center md:text-left leading-[1.05] text-secondary tracking-tight sm:text-5xl">
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


          <div ref={imageRef} className="relative overflow-hidden w-62 h-62  bg-primary rounded-full flex items-center justify-center">
            < div ref={iconRef} className=" ">
              <FaGlobeEurope className="w-68 h-68  z-0   text-light-yellow" />
            </div>
            <div ref={iconRef2} className="absolute z-10" >
              <FaGlobeAmericas className="w-68 h-68    text-light-yellow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

