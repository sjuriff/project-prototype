'use client'
import PrimaryButton from "../buttons/primary-button";
import { ArrowRight, Signal, Wifi, BatteryFull, Plane, Globe2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { OutlineButton } from "../buttons/outline-button";
import Image from "next/image";
import heroImage from '@/public/images/beam-window.jpg'

gsap.registerPlugin(useGSAP);


export default function BusinessHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Headline words stagger
      tl.from(".bh-headline > *", {
        x: -40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
      })
        .from(
          ".bh-paragraph",
          { x: -20, opacity: 0, duration: 0.7, stagger: 0.1 },
          "-=0.5"
        )
        .from(".bh-cta", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        // Background half-circle
        .from(
          ".bh-halfcircle",
          { scale: 0.6, opacity: 0, duration: 1.2, ease: "power2.out" },
          "-=1.2"
        )
    },
    { scope: containerRef }
  );


  // 
  return (
    <div
      ref={containerRef}
      className="h-[800px] xl:h-[calc(100dvh-5rem)]  flex flex-col lg:flex-row items-center  xl:min-h-[700px] xl:max-h-[950px] bg-tertiary z-10 overflow-hidden"
    >
     
        {/* Left: copy */}
        <div className=" md:order-1 order-2 md:h-full w-full h-1/2 xl:pl-8 text-center  md:text-left md:pb-32 md:pt-16 lg:pt-16 md:w-1/2 ">
          <h1 className="bh-headline mt-8 font-heading  [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]  text-4xl text-secondary leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="inline-block"><span className="text-primary">Smart</span> mobildata</span>{" "}
            <span className="inline-block">for bedrifter</span>{" "}
            <span className="inline-block">på reise.</span>
          </h1>

          <div className="md:mt-10 mt-4 max-w-xl space-y-4 md:space-y-5 font-body text-[15px] leading-relaxed text-tertiary-text">
            <p className="bh-paragraph text-balance">
              Rimelig, sikkert og forutsigbart for ansatte på tjenestereise.
              Kutt kostnader på mobildata utenfor Europa og gi ansatte trygg,
              forutsigbar tilgang — med samme mobiloperatør som i dag.
            </p>
            <p className="bh-paragraph text-balance">
              Med eSIM kan bedrifter kraftig redusere roamingkostnader globalt,
              uten å bytte eksisterende operatør for tale og SMS.
            </p>
          </div>

          <div className="bh-cta mt-4 md:mt-12 flex flex-row md:flex-row items-center justify-center md:justify-start gap-4">
            <PrimaryButton>
              Kontakt oss
              <ArrowRight className="ml-2 h-4 w-4 transition-transform  group-hover:translate-x-0.5" />
            </PrimaryButton>
            <OutlineButton variant="tertiary"  >Registrer deg</OutlineButton>
          </div>
        </div>

        {/* Right: phone mockup with data dashboard */}
        <div className="relative w-full h-1/2 order-1 md:order-2  md:h-full md:w-1/2   overflow-hidden  ">
          <Image height={1000} width={1000} className="z-10 absolute inset-0 h-full w-full  object-cover"  alt=" " src={heroImage}/>
        </div>
   
    </div>
  );
}
