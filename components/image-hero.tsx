'use client'

import type { StaticImageData } from "next/image";
import { Plane } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import VippsIcon from "./vipps-logo";
import KlarnaIcon from "./klarna-logo";
import VippsPayIcon from "./vipps-pay-icon";

gsap.registerPlugin(useGSAP);
interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}
//Hero component, big image with big text
export default function ImageHero(props: HeroProps) {
  const popularDestinations = [
    { name: 'USA', code: 'USA', flag: '🇺🇸' },
    { name: 'Thailand', code: 'THA', flag: '🇹🇭' },
    { name: 'Japan', code: 'JPN', flag: '🇯🇵' },
    { name: 'Tyrkia', code: 'TUR', flag: '🇹🇷' },
    { name: 'Vietnam', code: 'VNM', flag: '🇻🇳' },
    { name: 'Canada', code: 'CAN', flag: '🇨🇦' },
  ]

  const textContainerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!textContainerRef.current) return
    gsap.fromTo(textContainerRef.current, { x: '-120%' }, { x: 0, duration: 0.5, ease: "back.out(1.1)" })
  }, [])
  return (
    <div className="relative 2xl:w-4/5 2xl:h-[750px] overflow-hidden w-full h-screen">
      <div className='absolute w-full h-full z-0'>
        <Image
          src={props.imgData}
          alt={props.imgAlt}
          fill
          className="-scale-x-100 object-top object-cover"
        />

      </div>




      {/* Text Card */}
      <div ref={textContainerRef} className="xl:pt-12 2xl:pt-68    flex  ml-16 z-50  -translate-x-[120%]   w-1/2 justify-center items-center">
        <div className=" z-50 flex flex-col gap-4 px-12 pt-6 shadow-md pb-8 bg-secondary  py-4 rounded-xl">
          <h1
            className="text-4xl [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] md:text-5xl lg:text-6xl xl:text-7xl font-heading text-balance text-primary-text"

          >
            Rimelig mobildata på reise
          </h1>
          <p className="text-lg md:text-xl font-body text-secondary-text">
            Dropp dyre datapakker. Aktiver eSIM på 2 minutter. Raskt, enkelt & dekning i 190+ land.
          </p>
          {/* Search Input */}
          <div className="relative rounded-xl group focus-within:ring-2 focus-within:ring-tertiary transition">

            {/* Input */}
            <input
              type="text"
              placeholder="Hvor skal du reise?"
              className="
      w-full pl-12 pr-4 py-4
      rounded-xl border-2 border-secondary-text
      bg-surface-dim shadow-sm
      text-secondary-text
      focus:text-primary-text
      focus:outline-none
      focus:border-transparent
    "
            />

            {/* Icon + sliding circle */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none overflow-hidden">
              <div className="relative flex items-center justify-center w-8 h-8">
                {/* Circle that slides in */}
                <div
                  className="
          absolute
          w-8 h-8 rounded-full
          bg-primary
          -translate-x-[200%]
          group-focus-within:translate-x-0
          transition-transform duration-300 ease-out
        "
                />
                {/* Plane stays fixed on top */}
                <Plane className="relative h-4 w-4 text-secondary-text z-10" />
              </div>
            </div>

          </div>
          <div className=" gap-4  flex  items-center justify-center w-full  ">
            {popularDestinations.map((destination) => (
              <span
                key={destination.code}
                className="  hover:cursor-pointer group flex  items-center justify-center gap-2 duration-200 text-sm"
              >
                <span className="text-xl bg-surface/80 group-hover:border-2 transition-all ease-in-out border-primary group-hover:border  h-10 w-10 flex items-center justify-center rounded-full">{destination.flag}</span> {' '} <span> {destination.name}</span>
              </span>
            ))}

          </div>
        </div>

      </div>

      <div className="absolute -bottom-32 -right-32 w-80 h-80 z-30">
        <div className="absolute top-20 left-22">
          <VippsPayIcon height={80} width={80} />
        </div>
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Circle background */}
          <circle
            cx="100"
            cy="100"
            r="100"
            className="fill-primary opacity-70"
          />

          <defs>
            {/* LEFT arc, reversed direction so text reads upright */}
            <path id="leftArc" d="M100,180 A80,80 0 0,1 100,20" />
          </defs>

          <text className="fill-primary-text">
            <textPath
              href="#leftArc"
              startOffset="78%"
              textAnchor="middle"
              className="font-heading text-[10px] tracking-wide"
            >
              Betal enkelt med Vipps
            </textPath>
          </text>
        </svg>
      </div>



    </div>
  );
}