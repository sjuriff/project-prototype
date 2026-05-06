'use client'
import { QrCode, CheckCircle2, CardSim, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import paths from '@/paths';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';


import PrimaryButton from '@/components/buttons/primary-button';
gsap.registerPlugin(useGSAP);

export default function EsimStepHero() {
  const iconRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const steps = [
    {
      number: 1,
      title: "Kjøp eSIM",
      description: "Velg landet du skal reise til og kjøp datapakken som passer deg. Når du har betalt får du umiddelbart en QR-kode.",
      icon: ShoppingCart,
      color: "primary"
    },
    {
      number: 2,
      title: "Legg til eSIM",
      description: "Gå til telefonens innstilinger og velg «Mobilnett» eller «Tilkoblinger», velg «Legg til eSIM» & bruk «QR-kode».",
      icon: QrCode,
      color: "primary"
    },
    {
      number: 3,
      title: "Aktiver & surf i vei ",
      description: "Aktiver eSIM, gi abonnementet et navn og velg dette som hovedlinje for mobildata. Da er alt klart, når du lander er du umiddelbart på nett.",
      icon: CheckCircle2,
      color: "primary"
    }
  ];

  useGSAP(() => {

    if (!iconRef.current) return
    gsap.fromTo(iconRef.current, {
      opacity: 0,
      x: '100%',
      duration: 0.8,
    },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power4.out",
      })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="min-h-[50vh] relative  bg-secondary font-body  py-16 px-4 sm:px-6 lg:px-8" >
      <div ref={iconRef} className="hidden opacity-0  absolute md:block z-0 top-8 md:-top-52 -right-48 items-center h-[500px] w-[500px] flex justify-center gap-3  bg-primary/40 rounded-full" >
        <CardSim className="h-12 w-12 absolute top-60 left-24  md:w-38 md:h-38 z-0 text-tertiary opacity-75    " />
      </div>
      <div className="max-w-6xl  mx-auto">
        {/* Hero Header */}
        <div className="text-center   mx-auto  rounded-2xl p-8 mb-16">
          <div className='relative  w-fit mx-auto'>

            <h1 className="mb-4 relative z-10 text-4xl text-nowrap md:text-5xl [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] font-heading text-secondary-text " >
              Slik fungerer eSIM
            </h1>
          </div>
          <p className="max-w-2xl text-primary-text text-balance mx-auto" >
            På noen få tastetrykk er du klar til å surfe. Ikke bekymre deg – du kan fortsatt ringe og sende meldinger med ditt vanlige nummer. Telefonen din har eSIM innebygd, så du slipper å bytte nummer eller fjerne SIM-kortet.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const bgColor = step.color === 'primary' ? 'var(--color-primary)' :
              step.color === 'secondary' ? 'var(--color-secondary)' :
                'var(--color-tertiary)';
            const textColor = step.color === 'tertiary' ? 'var(--color-tertiary-text)' : 'var(--color-primary-text)';

            return (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-primary" />
                )}

                <div className="relative bg-surface-dim rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                  {/* Step Number Badge */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6" style={{
                    backgroundColor: bgColor
                  }}>
                    <Icon className="w-7 h-7" style={{ color: textColor }} />
                  </div>

                  {/* Step Number */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-secondary font-heading text-secondary-text">
                    {step.number}
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-primary-text" style={{
                    fontFamily: 'var(--font-heading)',

                  }}>
                    {step.title}
                  </h3>
                  <p className='text-balance' style={{
                    color: 'var(--color-primary-text)'
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}


        {/* CTA */}

        {/* <button className="px-8 py-4 rounded-xl hover:cursor-pointer transition-all hover:scale-105" style={{
            backgroundColor: 'var(--color-tertiary)',
            color: 'var(--color-tertiary-text)',
            fontFamily: 'var(--font-heading)'
          }}>
            Kjøp eSIM nå
          </button> */}
        <div className="flex justify-center mt-12">
          <Link href={paths.produkter}>
            <PrimaryButton>
              Kjøp eSIM nå
            </PrimaryButton>
          </Link>


        </div>
      </div>
    </div>
  );
}
