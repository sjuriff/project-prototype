'use client'
import { Globe2, ShieldCheck, Mountain, Sparkle } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: Globe2,
    title: "Dekning i 190+ land",
    description:
      "Én eSIM som fungerer der kundene dine reiser — fra weekendtur til jordomseiling.",

  },
  {
    icon: ShieldCheck,
    title: "Et trygt merke",
    description:
      "Etablert leverandør med kryptert betaling, pålitelig nettverk og support du kan stole på.",

  },
  {
    icon: Mountain,
    title: "Skandinavisk og nær",
    description:
      "Bygget i Skandinavia med nordisk kvalitet, ærlig prising og lokalt partner-team som forstår markedet ditt.",

  },
]

export default function WhyBeamEsim() {

  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

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

  }, { scope: containerRef })
  return (
    <section ref={containerRef} className="relative overflow-hidden  w-full bg-surface-dim flex items-center justify-center  py-24 sm:py-32">
      {/* Soft decorative blobs */}


      <div className=" relative">
        <div className="text-center flex flex-col items-center">
          <div className=" w-fit relative">
            <div ref={iconRef} className="flex z-0 absolute -top-9 md:-top-9 -right-6  items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full mb-6 bg-primary" >
              <Sparkle className="h-6 w-6 md:w-8 md:h-8 text-primary-text" />
            </div>
            <h2 ref={headingRef} className="font-heading relative z-10 text-5xl leading-[1.05] [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] tracking-tight text-beam-ink sm:text-5xl md:text-6xl">
              Hvorfor velge <span className="font-logo ">beam</span> eSIM?
            </h2>
          </div>
          <p ref={descriptionRef} className="mt-6 font-body text-lg leading-relaxed ">
            Vi har bygget partnerprogrammet vi selv ville ønsket — sjenerøse rater,
            ærlige tall og et produkt reisende faktisk elsker å bruke.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }) => {

            return (
              <article
                key={title}
                className="step-card group relative flex flex-col rounded-3xl bg-secondary bg-background/80 p-7 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary transition-transform duration-300 group-hover:scale-110 `}
                >
                  <Icon className="h-7 w-7" strokeWidth={2} />
                </div>
                <h3 className="font-heading text-2xl text-secondary-text">
                  {title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-primary-text/80">
                  {description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

