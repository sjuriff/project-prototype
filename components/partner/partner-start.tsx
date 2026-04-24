'use client'
import { UserPlus, Share2, Banknote, ListOrdered, ArrowRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PrimaryButton from "../buttons/primary-button";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Registrer deg",
    description:
      "Fyll ut skjemaet med din e-post og litt om deg. Det tar under to minutter, og vi godkjenner de fleste søknader samme dag.",
  },
  {
    number: "02",
    icon: Share2,
    title: "Del din lenke",
    description:
      "Få din unike partnerlenke og del den på blogg, sosiale medier eller reiseguider. Vi gir deg tips og materiale som fungerer.",

  },
  {
    number: "03",
    icon: Banknote,
    title: "Tjen penger",
    description:
      "Få provisjon for hvert salg og tilbakevendende inntekt på fornyelser. Vi betaler ut månedlig — rett til kontoen din.",
  },
]






export default function HowToStart() {

  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = containerRef.current?.querySelectorAll(".step-card");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "30% bottom",
        end: "70% bottom",
        scrub: false,
        toggleActions: "play none none reverse",
        markers: false
      }
    })

    tl.fromTo(headingRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: "power3.out", duration: 0.5 })
      .fromTo(descriptionRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: "power3.out", duration: 0.5 }, "-=0.2")
      .fromTo(iconRef.current, { opacity: 0, x: 100, scale: 0.9 }, { opacity: 1, x: 0, scale: 1, ease: "power3.out", duration: 0.5 }, "-=0.2")
      .fromTo(
        cards!,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.2,
          ease: "power3.out",
          stagger: 0.2,
        }, "-=0.5")
        .fromTo(buttonRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: "power3.out", duration: 0.5 }, )
        

  }, { scope: containerRef })
  return (

    <div ref={containerRef} className="  relative">
      <div className="mx-auto flex flex-col items-center max-w-2xl text-center">
        <div className="relative  w-fit">
          <div ref={iconRef} className="flex z-0 absolute -top-9 md:-top-10 -right-6  items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full mb-6 bg-primary" >
            <ListOrdered className="h-6 w-6 md:w-8 md:h-8 text-primary-text" />
          </div>
          <h2 ref={headingRef} className="font-heading relative z-10 text-4xl  [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]  leading-[1.05] tracking-tight  sm:text-5xl md:text-6xl">
            Hvordan starter man?
          </h2>
        </div>
        <p ref={descriptionRef} className="mt-6 text-lg leading-relaxed text-beam-ink-soft">
          Tre enkle steg fra registrering til første utbetaling.
        </p>
      </div>

      <div className="mt-16 grid px-16  grid-cols-6 w-full gap-8 lg:gap-16 ">
        {steps.map(({ number, icon: Icon, title, description }) => {

          return (
            <article
              key={number}
              className="step-card group relative col-span-6  lg:col-span-2 flex flex-col rounded-3xl bg-secondary shadow-md p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex  justify-between items-center gap-3 mb-5">

                <div
                  className={`flex h-14 w-14 items-center bg-primary justify-center rounded-full`}
                >
                  <Icon className="text-xl" />
                </div>
                <span
                  className={`inline-flex h-10 w-10 items-center bg-surface rounded-full justify-center  font-display text-sm font-700 `}
                >
                  {number}
                </span>
              </div>
              <h3 className="font-heading text-2xl f text-secondary-text">
                {title}
              </h3>
              <p className="mt-3  text-base font-body leading-relaxed text-primary-text/80">
                {description}
              </p>
            </article>
          );
        })}
      </div>
      <div ref={buttonRef} className="w-full flex  justify-center mt-12 items-center">
        <PrimaryButton>
          Kom i gang
           <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform ml-1" />
        </PrimaryButton>
      </div>
    </div>

  )
}