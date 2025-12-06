import Image from 'next/image';
import { Globe, Signal, Smartphone } from 'lucide-react';
import heroImg from '@/public/images/beam-family.jpg';
import PrimaryButton from './buttons/primary-button';

export function TravelHero() {
  return (
    <div className="bg-tertiary 2xl:shadow-lg xl:min-h-screen 2xl:min-h-[50vh] flex items-center  2xl:rounded-3xl text-tertiary-text w-full">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-balance md:text-5xl lg:text-6xl">
              Alltid tilgang til rask mobildata når du er på reise
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Reis uten å bekymre deg for dyre datapakker. Med <span className='text-primary'>Beam</span> eSIM får du ingen uventede kostnader og alltid tilgang til mobildata i over 190 land.
            </p>

            <div className="flex font-heading flex-wrap gap-4 pt-4">
              <PrimaryButton >
                Kom i gang
              </PrimaryButton>
              <button className="border-2 border-[#ffffff] text-[#ffffff] px-8 py-3 rounded-lg  hover:cursor-pointer hover:scale-101 transition-transform">
                Lær mer
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="flex flex-col items-center text-center">
                <Globe className="w-10 h-10 mb-2" />
                <p className="text-sm [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]">190+ land</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Smartphone className="w-10 h-10 mb-2" />
                <p className="text-sm [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]">Enkel installering</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Signal className="w-10 h-10 mb-2" />
                <p className="text-sm [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]">Umiddelbar aktivering</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute top-20 -right-16 w-28 h-28 bg-primary rounded-full opacity-70 z-30"></div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={heroImg}
                alt="Travel connectivity with smartphone"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}