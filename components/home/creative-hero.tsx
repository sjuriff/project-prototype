import Image from 'next/image';
import { Globe, Smartphone, Zap } from 'lucide-react';
import heroImg from '@/public/images/beam-green.jpg';
import heroMobileImage from '@/public/images/beam-family.jpg';
import PrimaryButton from '@/components/buttons/primary-button';

export function CreativeHero() {
  return (
    <section className="relative flex flex-col md:flex-row  md:justify-start md:items-start min-h-screen w-full  xl:rounded-none 2xl:rounded-3xl  2xl:min-h-[50vh] " style={{ backgroundColor: 'var(--color-secondary)' }}>
      {/* Mobile image */}
     {/*  <div className="lg:hidden mt-4   px-6">
        <div className="rounded-3xl overflow-hidden">
          <Image
            src={heroMobileImage}
            alt="Mobile phone connectivity"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div> */}
      <div className="container  relative mx-auto px-6 py-20 md:py-20  z-10 relative">
        <div className="lg:grid   lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="md:space-y-8 space-y-12 flex flex-col items-center justify-center   ">
            {/* Heading */}
            <div className="space-y-8 md:space-y-4">
              <h1 className="text-5xl font-heading text-balance md:text-pretty   lg:text-7xl " style={{ color: 'var(--color-primary-text)' }}>
                Utforsk verden.{' '}
                <span className='text-primary text-pretty [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]' >Vi sørger for at du er online</span>
              </h1>
              <p className="text-xl text-balance " style={{ color: 'var(--color-secondary-text)' }}>
                Velg en datapakke som passer reisen din og bytt land med et klikk. Du har alltid kontroll over din mobildata – uansett hvor du reiser.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex w-full  gap-1 md:gap-3">
              {[
                { icon: Zap, label: 'Umiddelbar aktivering' },
                { icon: Globe, label: '190+ land' },
                { icon: Smartphone, label: 'Behold ditt telefonnummer' },
              ].map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-2 md:px-4 py-3 "

                >
                  <feature.icon className="w-10 h-10" style={{ color: 'var(--color-tertiary)' }} />
                  <span className='text-sm md:text-base' style={{ color: 'var(--color-primary-text)' }}>{feature.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className=' flex items-center  md:ml-8  w-full'>
              <div className='w-96'>
                <PrimaryButton
                  fullWidth


                >
                  Start Nå
                </PrimaryButton>
              </div>
            </div>
          </div>

          {/* Right side - empty on mobile, image comes from absolute positioning */}
          <div className="hidden lg:block" />
        </div>
      </div>



      {/* Image with diagonal clip-path splitting from middle */}
      <div
        className="absolute border border-black top-0 right-0 w-1/2 h-full overflow-hidden hidden lg:block"
        style={{
          clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
        }}
      >
        <Image
          src={heroImg}
          alt="Mobile phone connectivity"
          className="w-full h-full object-cover"
        />
      </div>


    </section>
  );
}