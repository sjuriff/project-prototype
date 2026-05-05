'use client'
import { ArrowRight } from "lucide-react";
import PrimaryButton from "../buttons/primary-button";
import illustration from "@/public/images/partner-arms.png";
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
          { x: 60, opacity: 0, scale: 0.8, duration: 0.6, ease: "power3.out" },
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
      <div className="lg:col-span-6 order-2 lg:order-1 col-span-1 flex flex-col px-8 pt-4 lg:pt-0 lg:px-0 justify-center items-start lg:pl-16 bg-tertiary  h-full w-full  space-y-8">


        <h1 className="partner-heading font-heading text-secondary text-center lg:text-left text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-balance">
          <span className="inline-block">Bli partner</span>
          <span className=" [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] inline-block text-primary">med <span className="font-logo">beam</span></span>
        </h1>

        <p className="partner-subheading text-center lg:text-left text-lg font-body text-tertiary-text max-w-xl leading-relaxed text-pretty">
          En aktiv partnerfokusert aktør med fokus på scandinaviske markedet, Vi er
          en ivrig og nysgjerrig partner som altid er åpen for nye ideer.
          Vi ønsker å utfodre det etablerte operatørene på en gammeldags og
          utdatert opplevelse rundt mobiltelefoni og databruk utenfor Europa
        </p>

        <div className="flex w-full  items-center lg:justify-start justify-center flex-wrap mb-16  gap-3 ">
          <div className="partner-cta ">
            <PrimaryButton

            >

              Kontakt oss
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform ml-1" />
            </PrimaryButton>
          </div>
         
        </div>


      </div>

      {/* Image */}
      <div className="lg:col-span-6 order-1 lg:order-2 col-span-1 h-full w-full bg-surface-dark relative">
        <div className=" aspect-square w-full">
          <Image
            src={illustration}
            alt="To partnere håndhilser med en flyrute som forbinder dem globalt"
            width={1024}
            height={1024}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>


  );
};

