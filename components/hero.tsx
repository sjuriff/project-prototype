import Image from 'next/image';
import { Plane } from 'lucide-react';
import heroImg from '@/public/images/beam-green-two.jpg';
import VippsIcon from './vipps-logo';
import KlarnaIcon from './klarna-logo';

export default function Hero() {
  const popularDestinations = [
    { name: 'USA', code: 'USA', flag: '🇺🇸' },
    { name: 'Thailand', code: 'THA', flag: '🇹🇭' },
    { name: 'Japan', code: 'JPN', flag: '🇯🇵' },
    { name: 'Tyrkia', code: 'TUR', flag: '🇹🇷' },
    { name: 'Vietnam', code: 'VNM', flag: '🇻🇳' },
    { name: 'Canada', code: 'CAN', flag: '🇨🇦' },
  ]
  return (
    <div className=" w-full" >
      <div className="bg-secondary px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1
                className="text-4xl [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] md:text-5xl lg:text-6xl font-heading text-balance text-primary-text"

              >
                Rimelig mobildata på reise
              </h1>
              <p className="text-lg md:text-xl font-body text-secondary-text">
                Dropp dyre datapakker. Aktiver eSIM på 2 minutter. Raskt, enkelt & dekning i 190+ land.
              </p>
              {/* Search Input */}
              <div className="relative rounded-xl group focus-within:ring-2 focus-within:ring-tertiary transition">

                {/* Input */}
                <input
                  type="text"
                  placeholder="Hvor skal du reise?"
                  className="
      w-full pl-12 pr-4 py-4
      rounded-xl border-2 border-secondary-text
      bg-surface-dim shadow-sm
      text-secondary-text
      focus:text-primary-text
      focus:outline-none
      focus:border-transparent
    "
                />

                {/* Icon + sliding circle */}
                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none overflow-hidden">
                  <div className="relative flex items-center justify-center w-8 h-8">
                    {/* Circle that slides in */}
                    <div
                      className="
          absolute
          w-8 h-8 rounded-full
          bg-primary
          -translate-x-[200%]
          group-focus-within:translate-x-0
          transition-transform duration-300 ease-out
        "
                    />
                    {/* Plane stays fixed on top */}
                    <Plane className="relative h-4 w-4 text-secondary-text z-10" />
                  </div>
                </div>

              </div>

              <div className="flex font-body text-secondary-text flex-wrap gap-3 pt-2">
                {popularDestinations.map((destination) => (
                  <span
                    key={destination.code}
                    className="px-4 py-2 hover:scale-105 hover:cursor-pointer transition-transform duration-200 ease-in-out bg-white rounded-full text-sm"
                  >
                    {destination.flag} {' '} {destination.name}
                  </span>
                ))}
              </div>
              <div className='flex items-center gap-2 justify-start  '>
                <p className='font-heading text-secondary-text'>Betal enkelt med</p>
                <div className=' h-8 flex items-center justify-center'>
                  <VippsIcon height={70} width={70} />
                </div>
                <p className='font-heading text-secondary-text'>eller</p>
                <div className=' mb-1 h-8 flex items-center justify-center'>
                  <KlarnaIcon height={70} width={70} />
                </div>

              </div>
            </div>

            {/* Image */}
            <div className="relative h-[500px] md:h-[600px]">


              {/* Main image */}
              <div className="relative z-10 h-full">
                <div
                  className="absolute inset-0 rounded-[40px] overflow-hidden"
                  style={{ backgroundColor: '#fff' }}
                >
                  <Image
                    src={heroImg}
                    alt="People traveling adventure"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* circle */}
                <div className="absolute top-20 -left-16 w-28 h-28 bg-primary rounded-full opacity-70 z-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
