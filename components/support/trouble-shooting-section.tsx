'use client'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CheckCircle, SearchX } from 'lucide-react';
import { useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);



const troubleshootingGuides = [
  {
    title: 'eSIM aktiveres ikke',
    steps: [
      'Sørg for at du har en stabil internettforbindelse (Wi-Fi anbefales)',
      'Bekreft at enheten din er ulåst og støtter eSIM',
      'Start enheten på nytt og prøv å skanne QR-koden igjen',
      'Sjekk at du ikke allerede har installert denne eSIM-profilen',
    ],
  },
  {
    title: 'Ingen nettverkstilkobling',
    steps: [
      'Slå Flymodus av og på igjen',
      'Forsikre deg om at mobildata er aktivert for eSIM-linjen din',
      'Sjekk at du er i et område med dekning',
      'Bekreft at planen din er aktiv og har tilgjengelig data',
    ],
  },
  {
    title: 'Treg datatilkobling',
    steps: [
      'Sjekk hvor mye data du har igjen',
      'Prøv å flytte deg til et sted med bedre signal',
      'Start enheten på nytt for å oppdatere tilkoblingen',
      'Sørg for at du er tilkoblet 4G/5G og ikke 3G',
    ],
  },
];


export default function TroubleShootingSection() {
  const containerRef = useRef(null);
  const iconRef = useRef(null);
    useGSAP(
    () => {
      if (!iconRef.current || !containerRef.current) return

      gsap.fromTo(
        iconRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, ease: "expo.out", scrollTrigger: { trigger: containerRef.current, start: "top 80%", end: "50% 80%", scrub: true, markers: false } }
      );
    },
    { scope: containerRef }
  )
  return (
    <div ref={containerRef} className="bg-surface relative py-16 px-6 overflow-hidden">
      <div ref={iconRef} className="hidden   absolute md:block z-0 top-8 md:-top-52 -left-48 items-center h-[450px] w-[450px] flex justify-center gap-3  bg-primary/40 rounded-full" >
        <SearchX className="h-12 w-12 absolute top-60 right-24  md:w-30 md:h-30 z-0 text-tertiary opacity-75    " />
      </div>
      <div className="max-w-6xl mx-auto">
        <div className='relative mx-auto w-fit mb-12'>

          <h2 className="text-center relative z-10 text-4xl md:text-5xl font-heading [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]   text-primary-text">Feilsøking</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {troubleshootingGuides.map((guide, index) => (
            <div key={index} className="bg-white relative z-10 p-8 rounded-lg border border-[#e5e7eb]">
              <h3 className="mb-6 text-primary-text">{guide.title}</h3>
              <ul className="space-y-4">
                {guide.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-text leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}