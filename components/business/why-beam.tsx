'use client'
import {  useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Calendar, Gauge, MousePointerClick, Globe2, FileText, Headphones, ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import PrimaryButton from "../buttons/primary-button";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: Calendar,
    title: "12 mnd fastpris-abonnement",
    desc: "Forutsigbar pris hver eneste måned — ingen overraskelser.",
  },
  {
    icon: Gauge,
    title: "Full kontroll på kostnader",
    desc: "Følg dataforbruk og kostnader i sanntid, alltid.",
  },
  {
    icon: MousePointerClick,
    title: "Enkelt å bruke",
    desc: "Designet for mennesker — ikke IT-avdelingen.",
  },
  {
    icon: Globe2,
    title: "Globale & regionale avtaler",
    desc: "Dekning der bedriften din opererer — verden rundt.",
  },
  {
    icon: FileText,
    title: "Norsk faktura",
    desc: "Lokal fakturering, MVA og bokføring — uten styr.",
  },
  {
    icon: Headphones,
    title: "Norsk supportteam",
    desc: "Snakk med ekte mennesker, på norsk, når du trenger det.",
  },
];

export default function WhyBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Eyebrow + heading entrance
      gsap.from(eyebrowRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
      });

      // Split heading words for stagger
      const words = headingRef.current?.querySelectorAll(".word");
      if (words) {
        gsap.from(words, {
          opacity: 0,
          y: 40,
        
          duration: 0.8,
          stagger: 0.08,
          ease: "power4.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 80%" },
        });
      }

      // Cards stagger
      const cards = cardsRef.current?.querySelectorAll(".reason-card");
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 60,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
        });
      }

      // Subtle breathing on half-circle
      gsap.to(orbRef.current, {
        scale: 1.04,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

   
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const headingWords = ["Hvorfor", "velger", "bedrifter", "beam", "business?"];

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden flex items-center flex-col gap-15 justify-center border w-full bg-tertiary py-24 md:py-36"
    >
      {/* Half-circle entering from the right */}
      <div
        ref={orbRef}
        className="pointer-events-none absolute right-0 top-24 z-0 translate-x-1/2"
        aria-hidden
      >
        <div className="relative h-[250px] w-[250px] md:h-[620px] md:w-[620px]">
          {/* Concentric ring outline */}
   
          
          {/* Solid beam circle */}
          <div className="absolute inset-0 flex items-center justify-center rounded-full bg-surface-blue md:bg-light-yellow" >
            </div>
        </div>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            ref={headingRef}
            className="mt-6  text-4xl font-heading text-secondary  leading-[1.05] text-foreground md:text-6xl lg:text-7xl"
           
          >
            {headingWords.map((word, i) => (
              <span key={i} className="word inline-block pr-3">
                {word === "beam" ? <span className="font-logo  [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]  text-primary">{word}</span> : word}
              </span>
            ))}
          </h2>
        </div>

        {/* Cards grid */}
        <div
          ref={cardsRef}
          className="mt-20 grid gap-6 px-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={i}
              className="reason-card  group relative overflow-hidden rounded-2xl bg-secondary p-8 shadow-md transition-colors hover:border-beam/40 hover:bg-surface-elevated"
            >
              {/* Icon */}
              <div className="reason-icon inline-flex h-14 w-14 items-center justify-center rounded-full bg-tertiary text-tertiary-text">
                <Icon className="h-7 w-7" strokeWidth={2.25} />
              </div>

              <h3 className="mt-6 font-heading text-xl  text-secondary-text">
                {title}
              </h3>
              <p className="mt-2 text-sm font-body leading-relaxed text-primary-text">
                {desc}
              </p>

              {/* Hover accent line */}
              <div className="absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
      <PrimaryButton>Kontakt oss
          <ArrowRight className="ml-2 h-4 w-4 transition-transform  group-hover:translate-x-0.5" />
      </PrimaryButton>
    </section>
  );
};


