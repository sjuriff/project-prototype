import Image from 'next/image';
import { Globe, Smartphone, Zap } from 'lucide-react';
import heroImg from '@/public/images/beam-backpack.jpg';

export function CreativeHero() {
  return (
    <section className="relative flex items-center min-h-screen w-full rounded-3xl 2xl:min-h-[50vh] overflow-hidden" style={{ backgroundColor: 'var(--color-secondary)' }}>
      <div className="container relative mx-auto px-6 py-20  z-10 relative">
        <div className="grid  lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8  flex flex-col items-start justify-center   ">
            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl font-heading text-pretty   lg:text-7xl " style={{ color: 'var(--color-primary-text)' }}>
                Utforsk verden.{' '}
                <span className='text-primary text-pretty [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]' >Vi sørger for at du er online</span>
              </h1>
              <p className="text-xl text-balance" style={{ color: 'var(--color-secondary-text)' }}>
                Velg en datapakke som passer reisen din og bytt land med et klikk. Du har alltid kontroll over din mobildata – uansett hvor du reiser.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex  gap-3">
              {[
                { icon: Zap, label: 'Umiddelbar aktivering' },
                { icon: Globe, label: '190+ land' },
                { icon: Smartphone, label: 'Behold ditt telefonnummer' },
              ].map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-2 px-4 py-3 "

                >
                  <feature.icon className="w-5 h-5" style={{ color: 'var(--color-tertiary)' }} />
                  <span style={{ color: 'var(--color-primary-text)' }}>{feature.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className=' flex items-center  ml-8  w-full'>
              <button
                className="px-8 hover:cursor-pointer w-1/2 py-4 bg-primary font-heading text-primary-text rounded-xl transition-all hover:shadow-lg"

              >
                Start Nå
              </button>
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

      {/* Mobile image */}
      <div className="lg:hidden mt-12 px-6">
        <div className="rounded-3xl overflow-hidden">
          <Image
            src={heroImg}
            alt="Mobile phone connectivity"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}