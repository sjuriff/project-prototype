'use client'
import { Signal, Wifi, BatteryFull, Plane, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import PrimaryButton from "../buttons/primary-button";

gsap.registerPlugin(useGSAP);

export default function DashboatdPhone() {
  const containerRef = useRef<HTMLDivElement>(null);


  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", }, scrollTrigger: { trigger: containerRef.current, start: "30% bottom", end: "30% bottom", scrub: false, toggleActions: "play none none none", markers: false } });

      // Phone entry
      tl.from(
        ".bh-phone",
        { x: 60, opacity: 0, scale: 0.95, duration: 1, ease: "power3.out" },

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
        tl.fromTo(
          ring,
          { strokeDashoffset: length, opacity: 0 },
          {
            opacity: 1,
            strokeDashoffset: length * (1 - 0.42),
            duration: 1.6,
            ease: "power2.out",
            delay: 0,
          }, "-=0.4"
        );
      }

      // Bars grow
      tl.from(".bh-bar", {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 0.7,
        stagger: 0.06,
        ease: "power2.out",
        delay: 0,
      }, "-=0.4");

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
    <div ref={containerRef} className="relative flex flex-col gap-6 items-center justify-center z-0">
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
      <PrimaryButton>
        Registrer deg
        <ArrowRight className="ml-2 h-4 w-4 transition-transform  group-hover:translate-x-0.5" />
      </PrimaryButton>
    </div>
  )
}