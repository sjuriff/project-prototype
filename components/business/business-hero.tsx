'use client'
import { Globe, Wifi, TrendingUp, ArrowRight } from "lucide-react"; ''
import heroGlobe from '@/public/images/hero-globe.jpeg'
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import PrimaryButton from "../buttons/primary-button";
import Image from "next/image";
import { OutlineButton } from "../buttons/outline-button";
const stats = [
  { icon: Globe, label: "Land", value: "190+" },
  { icon: Wifi, label: "Nettverk", value: "700+" },
  { icon: TrendingUp, label: "Partner Revenue", value: "30%" },
];
export default function BusinessHero() {

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero-badge", { opacity: 0, y: 20, duration: 0.5 })
      .from(".hero-heading", { opacity: 0, y: 30, duration: 0.7 }, "-=0.2")
      .from(".hero-desc", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
      .from(".hero-buttons", { opacity: 0, x: -20, duration: 0.5 }, "-=0.2")
      .from(".hero-stat", { opacity: 0, x: -20, duration: 0.5, stagger: 0.1 }, "-=0.2")
     /*  .from(".hero-globe", { opacity: 0, scale: 0.9, duration: 0.8 }, "-=0.8") */
      .from(".hero-card", { opacity: 0, x: (i) => (i === 0 ? -20 : 20), duration: 0.6, stagger: 0.15 }, "-=0.3");
  }, { scope: containerRef });

  return (
 


      <div ref={containerRef} className=" relative  bg-tertiary z-10 mx-auto flex  h-[600px] xl:min-h-[700px]   xl:h-[calc(100dvh-5rem)] xl:max-h-[950px] w-full  flex-col lg:flex-row items-center gap-12 py-24  lg:py-0">
        {/* Left content */}
        <div className="flex-1 max-w-2xl">


          <h1 className="hero-heading ml-16 font-heading text-4xl sm:text-5xl lg:text-6xl  tracking-tight text-secondary leading-[1.1] mb-6">
            Selg eSIM på{" "}
            <span className="text-primary [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]">din platform</span>{" "}
            <span className="text-muted-foreground"></span>
          </h1>

          <p className="hero-desc ml-16 font-body text-lg text-tertiary-text max-w-lg mb-10 leading-relaxed">
            Integrer vår eSIM-markedsplass i din reiseside, app eller bookingplattform.
            Tjen penger på hver aktivering — null lager, null risiko
          </p>

          <div className="hero-buttons flex items-center ml-16   gap-4 mb-14">
            <PrimaryButton Icon={ArrowRight} >
              Les mer
            </PrimaryButton>
            <OutlineButton variant="secondary" >
              Kontakt oss
            </OutlineButton>
          </div>

          {/* Stats */}
          <div className="flex items-center ml-16   gap-20">
            {stats.map((stat) => (
              <div key={stat.label} className="hero-stat text-center  w-28 flex items-center justify-center flex-col">
                <div className=" h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-tertiary " />
                </div>
                <span className="text-2xl font-bold text-center text-foreground">{stat.value}</span>
                <span className="text-xs text-center text-secondary-text">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="hero-globe h-full  w-1/2 flex justify-center items-center">
          <div className="relative w-full h-full">
            <Image
              src={heroGlobe}
              alt="Global eSIM connectivity network"
              fill
              className=" object-cover"
            />

          </div>
        </div>
      </div>
  );

}