'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Plane, Smartphone, Megaphone, Tag, Sparkle } from "lucide-react";
import PartnerCard from "./partner-card";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);



const cards = [
  {
    icon: Plane,
    title: "Reise og opplevelser",
    description:
      "Selg beam tilsammens med ditt produkt, hjelp dine kunder med en trygg og stabil oppkobling under reise.",
  },
  {
    icon: Smartphone,
    title: "Digitale tjenester",
    description:
      "Neobank, fintech og andre abonnementtjenester. Inkludere beam i ditt abonnement.",
  },
  {
    icon: Megaphone,
    title: "Affiliater",
    description:
      "Influencers som ønsker å promotere beam og få opp til 20%.",
  },
  {
    icon: Tag,
    title: "Whitelabel",
    description: "Skap inntektstrømmer under ditt eget brand.",
  },
];

export default function PartnerCardWrapper() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {

      
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      });

          gsap.fromTo(iconRef.current, { opacity: 0, x: 100, scale: 0.9 }, { opacity: 1, x: 0, scale: 1, ease: "power3.out", duration: 0.5, scrollTrigger: { trigger: iconRef.current, start: "top 85%", } },)

      gsap.from(subtitleRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      });

      const cardEls = gridRef.current?.querySelectorAll<HTMLElement>("[data-card]");
      if (cardEls) {
        gsap.fromTo(cardEls, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",

        }, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-[600px] bg-surface-dim py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <header className="mb-12  flex flex-col items-center text-center">
          <div className=" w-fit text-center relative">
             <div ref={iconRef} className="flex z-0 absolute -top-9 md:-top-9 right-4 md:-right-6  items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full mb-6 bg-primary" >
              <Sparkle className="h-6 w-6 md:w-8 md:h-8 text-primary-text" />
            </div>
            <h1
              ref={titleRef}
              className="text-4xl [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] md:text-5xl font-heading tracking-tight text-foreground"
            >
              Partnerskap med <span className="font-logo">beam</span>
            </h1>
          </div>
          <p
            ref={subtitleRef}
            className="mt-4 text-lg font-body max-w-2xl mx-auto"
          >
            Velg den modellen som passer din virksomhet best.
          </p>
        </header>

        <section
          ref={gridRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((card, i) => (
            <PartnerCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </section>
      </div>
    </div>
  )
}