'use client'
import { ArrowRight } from "lucide-react";
import PrimaryButton from "../buttons/primary-button";
import illustration from "@/public/images/partner-illustration.png";
import Image from "next/image";
import GhostButton from "../buttons/ghost-button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

//pt-12 md:pt-20 pb-20 

export default function PartnerHero() {

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Headline words stagger
      tl.from(".partner-heading > *", {
        x: -40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
      })
        .from(
          ".partner-phone",
          { x: 60,  opacity: 0, scale: 0.8, duration: 0.6, ease: "power3.out" },
          "-=0.6"
        )
        .from(
          ".partner-subheading",
          { x: -20, opacity: 0, duration: 0.7, stagger: 0.1 },
          "-=0.4"
        )
        .from(".partner-cta", { y: 20, opacity: 0, duration: 0.6, stagger: 0.08, }, "-=0.4")
        .from(".ghost-button", { y: 20, opacity: 0, duration: 0.6, stagger: 0.08, }, "-=0.4")

      // Phone entry

    },
    { scope: containerRef }
  );
  return (

    <div ref={containerRef} className="flex-1 w-full mx-auto overflow-hidden  xl:min-h-[700px]    xl:h-[calc(100dvh-5rem)] xl:max-h-[950px]    grid lg:grid-cols-12  items-center">
      <div className="lg:col-span-6 flex flex-col justify-center items-start pl-16 bg-secondary  h-full w-full  space-y-8">


        <h1 className="partner-heading font-heading text-secondary-text text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-balance">
          <span className="inline-block">Tjen på reisen,</span>
          <span className=" [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] inline-block text-primary">uten å reise selv.</span>
        </h1>

        <p className="partner-subheading text-lg font-body text-secondary-text max-w-xl leading-relaxed text-pretty">
          Anbefal <span className="font-logo [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] ">beam</span> eSIM til ditt publikum og motta opptil
          <span className="text-foreground"> 25 % provisjon</span> på hver eSIM
          som aktiveres. Skreddersydd for influencere, reisebyråer og
          innholdsskapere.
        </p>

        <div className="flex flex-wrap mb-16  gap-3 ">
          <div className="partner-cta ">
            <PrimaryButton

            >

              Bli partner
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform ml-1" />
            </PrimaryButton>
          </div>
          <div className="ghost-button">
            <GhostButton
            >
              Slik fungerer det
            </GhostButton>
          </div>
        </div>


      </div>

      {/* Image */}
      <div className="lg:col-span-6 h-full w-full bg-surface-light relative">
        <div className="partner-phone aspect-square w-full">
          <Image
            src={illustration}
            alt="To partnere håndhilser med en flyrute som forbinder dem globalt"
            width={1024}
            height={1024}
            className="w-full h-full object-contain"
          />
        </div>

        {/*     <div className="object-cover">
        <video autoPlay muted loop playsInline>
          <source src="/videos/vinge-fly.mp4" type="video/mp4" />
        </video>
      </div> */}
      </div>
    </div>


  );
};

