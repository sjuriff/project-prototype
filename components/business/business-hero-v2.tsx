'use client'
import PrimaryButton from "../buttons/primary-button";
import { ArrowRight, Signal, Wifi, BatteryFull, Plane, Globe2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { OutlineButton } from "../buttons/outline-button";
import Image from "next/image";
import heroImage from '@/public/images/beam-suitcase.jpg'

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

  return (
    <div
      ref={containerRef}
      className="relative xl:h-[calc(100dvh-5rem)] xl:min-h-[700px] xl:max-h-[950px] bg-tertiary z-10 xl:px-16 px-8 w-screen pb-32 pt-16 lg:pt-16 overflow-hidden"
    >
      <div className="grid grid-cols-1 h-full w-full   gap-16 lg:grid-cols-12 lg:gap-12">
        {/* Left: copy */}
        <div className="lg:col-span-7">
          <h1 className="bh-headline mt-8 font-heading  [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]  text-5xl text-secondary leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="inline-block"><span className="text-primary">Smart</span> mobildata</span>{" "}
            <span className="inline-block">for bedrifter</span>{" "}
            <span className="inline-block">på reise.</span>
          </h1>

          <div className="mt-10 max-w-xl space-y-5 font-body text-[15px] leading-relaxed text-tertiary-text">
            <p className="bh-paragraph">
              Rimelig, sikkert og forutsigbart for ansatte på tjenestereise.
              Kutt kostnader på mobildata utenfor Europa og gi ansatte trygg,
              forutsigbar tilgang — med samme mobiloperatør som i dag.
            </p>
            <p className="bh-paragraph">
              Med eSIM kan bedrifter kraftig redusere roamingkostnader globalt,
              uten å bytte eksisterende operatør for tale og SMS.
            </p>
          </div>

          <div className="bh-cta mt-12 flex flex-col md:flex-row items-center gap-4">
            <PrimaryButton>
              Kontakt oss
              <ArrowRight className="ml-2 h-4 w-4 transition-transform  group-hover:translate-x-0.5" />
            </PrimaryButton>
            <OutlineButton variant="tertiary"  >Registrer deg</OutlineButton>
          </div>
        </div>

        {/* Right: phone mockup with data dashboard */}
        <div className="relative flex h-full w-full  rounded-3xl overflow-hidden justify-center items-center  lg:col-span-5 lg:justify-center">
          <Image height={1000} width={1000}  alt=" z-10 object-cover h-full w-full" src={heroImage}/>

          

          
        </div>
      </div>
    </div>
  );
}
