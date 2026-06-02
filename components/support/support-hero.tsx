'use client'
import { Search } from 'lucide-react';
import { useState } from 'react';
import { HeartHandshake } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function SupportHero() {
  const [searchQuery, setSearchQuery] = useState('');

  const iconRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
    <div ref={containerRef} className="bg-secondary relative text-white py-20 px-6">
      <div ref={iconRef} className="hidden  absolute md:block z-0 top-8 md:-top-52 -right-48 items-center h-[500px] w-[500px] flex justify-center gap-3  bg-primary/40 rounded-full">
        <HeartHandshake className="h-12 w-12 absolute top-60 left-28  md:w-38 md:h-38 z-0 text-tertiary opacity-75   " />
      </div>
      <div className="max-w-3xl mx-auto text-center">
        <div className='relative w-fit mx-auto '>

          <h1 className=" text-primary-text relative z-10 [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-4xl md:text-5xl font-heading">Support </h1>

        </div>
        <p className="mb-10 text-secondary-text">
          Her finner du svar og får hjelp
        </p>

        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            placeholder="Hva kan vi hjelpe deg med?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 pr-12 rounded-full bg-surface text-secondary-text border border-tertiary placeholder:text-secondary-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
          <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-heading" />
        </div>
      </div>
    </div>
  );
}