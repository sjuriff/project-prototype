'use client'
import PrimaryButton from "../buttons/primary-button";
import { ArrowRight, Signal, Wifi, BatteryFull, Plane, Globe2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { OutlineButton } from "../buttons/outline-button";

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
        // Phone entry
        .from(
          ".bh-phone",
          { x: 60, opacity: 0, scale: 0.95, duration: 1, ease: "power3.out" },
          "-=0.9"
        )  

        // Phone inner content
        .from(
          ".bh-phone-status, .bh-phone-header, .bh-phone-ring, .bh-phone-bars, .bh-phone-list > *",
          { y: 15, opacity: 0, duration: 0.5, stagger: 0.08 },
          "-=0.4"
        );

      // Animate the gold ring stroke
      const ring = containerRef.current?.querySelector(
        ".bh-ring-progress"
      ) as SVGCircleElement | null;
      if (ring) {
        const length = 2 * Math.PI * 52;
        gsap.fromTo(
          ring,
          { strokeDashoffset: length },
          {
            strokeDashoffset: length * (1 - 0.42),
            duration: 1.6,
            ease: "power2.out",
            delay: 1.2,
          }
        );
      }

      // Bars grow
      gsap.from(".bh-bar", {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 0.7,
        stagger: 0.06,
        ease: "power2.out",
        delay: 1.4,
      });

      // Floating phone loop
      gsap.to(".bh-phone", {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.6,
      });

      // Pulsing half circle
      gsap.to(".bh-halfcircle", {
        scale: 1.05,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative xl:h-[calc(100dvh-5rem)] xl:min-h-[700px] xl:max-h-[950px] bg-tertiary z-10 xl:px-16 px-8 w-screen pb-32 pt-16 lg:pt-16 overflow-hidden"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
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

          <div className="bh-cta mt-12 flex flex-wrap items-center gap-4">
            <PrimaryButton>
              Kontakt oss
              <ArrowRight className="ml-2 h-4 w-4 transition-transform  group-hover:translate-x-0.5" />
            </PrimaryButton>
            <OutlineButton variant="tertiary"  >Registrer deg</OutlineButton>
          </div>
        </div>

        {/* Right: phone mockup with data dashboard */}
        <div className="relative flex justify-center items-center lg:col-span-5 lg:justify-center">
          {/* Half gold circle behind phone */}
          <div
            className="bh-halfcircle pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full"
            style={{
              background:
                "radial-gradient(circle at center, hsl(var(--primary) / 0.55) 0%, hsl(var(--primary) / 0.25) 40%, transparent 70%)",
              clipPath: "inset(0 0 0 50%)",
              filter: "blur(2px)",
            }}
            aria-hidden
          />

          <div className="relative">
            <div className="bh-phone relative h-[600px] w-[300px] rounded-[3rem] border-2 shadow-md border-primary-text bg-gradient-to-b from-secondary to-tertiary p-3">
              <div className="absolute -left-[3px] top-24 h-10 w-[3px] rounded-l bg-border" />
              <div className="absolute -left-[3px] top-40 h-16 w-[3px] rounded-l bg-border" />
              <div className="absolute -right-[3px] top-32 h-20 w-[3px] rounded-r bg-border" />

              <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-midnight">
                <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-background" />

                <div className="bh-phone-status relative z-10 flex items-center justify-between px-6 pt-3 font-sans-pro text-[10px] text-foreground">
                  <span className="font-medium">09:41</span>
                  <div className="flex items-center gap-1.5">
                    <Signal className="h-3 w-3" />
                    <Wifi className="h-3 w-3" />
                    <BatteryFull className="h-3.5 w-3.5" />
                  </div>
                </div>

                <div className="px-5 pt-8">
                  <div className="bh-phone-header flex items-center justify-between">
                    <div>
                      <p className="font-heading text-[9px] tracking-[0.25em] text-primary-text">
                        <span className="font-logo">beam</span> business
                      </p>
                      <h4 className="mt-1 font-display text-lg font-light">Databruk</h4>
                    </div>
                    <span className="flex h-7 items-center gap-1 rounded-full bg-primary border border-primary/40 px-2 font-sans-pro text-[9px] uppercase tracking-wider text-primary-text">
                      <Plane className="h-2.5 w-2.5" /> Tokyo
                    </span>
                  </div>

                  <div className="bh-phone-ring mt-6 flex items-center justify-center">
                    <div className="relative h-40 w-40">
                      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                        <circle cx="60" cy="60" r="52" stroke="hsl(var(--border))" strokeWidth="6" fill="none" />
                        <circle
                          className="bh-ring-progress"
                          cx="60"
                          cy="60"
                          r="52"
                          stroke="#f9f871"
                          strokeWidth="6"
                          strokeLinecap="round"
                          fill="none"
                          strokeDasharray={2 * Math.PI * 52}
                          strokeDashoffset={2 * Math.PI * 52 * (1 - 0.42)}
                        />
                        <defs>
                          <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="hsl(var(--gold-deep))" />
                            <stop offset="100%" stopColor="hsl(var(--gold-bright))" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <p className="font-body text-3xl font-light text-gold">8,4</p>
                        <p className="font-heading text-[9px] uppercase tracking-widest text-muted-foreground">av 20 GB</p>
                        <p className="mt-1 font-heading text-[8px] uppercase tracking-widest text-muted-foreground">denne mnd</p>
                      </div>
                    </div>
                  </div>

                  <div className="bh-phone-bars mt-6">
                    <div className="flex h-14 items-end justify-between gap-1.5">
                      {[40, 65, 30, 80, 55, 90, 70].map((h, i) => (
                        <div
                          key={i}
                          className="bh-bar flex-1 rounded-sm bg-gradient-to-t from-light-yellow to-primary"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <div className="mt-2 flex justify-between font-sans-pro text-[8px] uppercase tracking-wider text-muted-foreground">
                      {["M", "T", "O", "T", "F", "L", "S"].map((d, i) => (
                        <span key={i} className="flex-1 text-center">{d}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bh-phone-list mt-5 space-y-2">
                    {[
                      { flag: "🇯🇵", name: "Japan", usage: "4,2 GB" },
                      { flag: "🇸🇬", name: "Singapore", usage: "2,8 GB" },
                      { flag: "🇺🇸", name: "USA", usage: "1,4 GB" },
                    ].map((c) => (
                      <div key={c.name} className="flex items-center justify-between border-b border-border/40 pb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-base">{c.flag}</span>
                          <span className="font-sans-pro text-[11px] text-foreground">{c.name}</span>
                        </div>
                        <span className="font-sans-pro text-[11px] text-gold">{c.usage}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-foreground/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
