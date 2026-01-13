import Image from "next/image";
import { Globe, Smartphone, Zap, Signal } from 'lucide-react';
import heroImg from '@/public/images/beam-terminal.jpg';
import PrimaryButton from './buttons/primary-button';
import paths from '@/paths';
import Link from 'next/link';

export default function ReversedHero() {
  return (
    <section
      className="relative bg-tertiary flex items-center min-h-screen w-full xl:rounded-none 2xl:rounded-3xl 2xl:min-h-[50vh] overflow-hidden"

    >
      <div className="container relative mx-auto px-6 py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side - empty on desktop, image is absolutely positioned */}
          <div className="hidden lg:block" />

          {/* Right Content */}
          <div className="space-y-8 flex flex-col items-start justify-center">
            {/* Heading */}
            <div className="space-y-4">
              <h1
                className="text-5xl text-tertiary-text font-heading text-pretty lg:text-7xl"

              >
                Smarthack mobilregningen din
                {/* <span className="text-primary text-pretty [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]">
                  Vi sørger for at du er online
                </span> */}
              </h1>
              <p
                className="text-xl font-body text-tertiary-text text-balance"

              >
                Det kan fort bli dyrt med mobildata utenfor Europa. Med Beam eSIM har du alltid kontroll
              </p>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-3  -translate-x-8 text-tertiary-text gap-6 pt-8">
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

            {/* CTA Button */}
            <div className="flex items-center  ml-20 w-full">
              <div className="flex font-heading items-center flex-wrap gap-4 pt-4">
                <PrimaryButton >
                  Kom i gang
                </PrimaryButton>
                <Link href={paths.info}>
                  <button className="border-2 border-[#ffffff] text-[#ffffff] px-8 py-3 rounded-lg  hover:cursor-pointer hover:scale-101 transition-transform">
                    Lær mer
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop image now on LEFT */}
      <div
        className="absolute top-0 left-0 w-[53%] h-full overflow-hidden hidden lg:block"
        style={{
          // mirrored from your original
          clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%)",
        }}
      >
        <Image
          src={heroImg}
          alt="Mobile phone connectivity"
          className="w-full h-full  object-[75%_50%] object-cover"
        />
      </div>

      {/* Mobile image (unchanged) */}
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