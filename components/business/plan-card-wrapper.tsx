'use client'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";


import PlanCard from "./plan-card";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function PlanCardWrapper() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const features = [
    "Virker i xx land utenfor EU/EØS",
    "5GB fornyes hver måned",
    "Integity VPN inkludert",
  ];

    const featuresTen = [
    "Virker i xx land utenfor EU/EØS",
    "10GB fornyes hver måned",
    "Integity VPN inkludert",
  ];

  useGSAP(() => {
    gsap.fromTo(".plan-card", {
      y: 60,
      opacity: 0,
    
      duration: 0.8,
      ease: "power3.out",

    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "linear",
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "30% bottom",
        end: "70% bottom",
        scrub: true,
        toggleActions: "play none none reverse",
        markers: false
      }
    });
  }, { scope: wrapperRef });
  return (
    <div ref={wrapperRef} className="plan-card-wrapper grid grid-cols-4 place-items-center w-full px-4 gap-4 md:px-24">

      <PlanCard title="Global beam 5GB " subtext="12 mnd abonnement 4788,-" features={features} price="399" currency="NOK" period="måned" />
      <PlanCard title="Global beam 10GB" subtext="12 mnd abonnement 7188,-" features={featuresTen} price="599" currency="NOK" period="måned" />


    </div>
  );
}

