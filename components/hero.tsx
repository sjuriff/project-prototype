import Image from 'next/image';
import { Plane } from 'lucide-react';
import heroImg from '@/public/images/beam-phone.jpg';

export default function Hero() {
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
                Reis fritt. Nettet følger deg
              </h1>
              <p className="text-lg md:text-xl font-body text-secondary-text">
                Dropp fysiske SIM-kort og dyre datapakker. Velg et lokalt eSIM, aktiver på få sekunder og surf trygt så snart du lander.
              </p>

              {/* Search Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Plane className="h-5 w-5 text-secondary-text" />
                </div>
                <input
                  type="text"
                  placeholder="Hvor skal du reise?"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-secondary-text bg-surface-dim shadow-sm text-secondary-text focus:text-primary-text focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-transparent"
                />
              </div>

              <div className="flex font-body text-secondary-text flex-wrap gap-3 pt-2">
                <span className="px-4 py-2 bg-surface rounded-full text-sm">🇺🇸 USA</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm">🇬🇧 England</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm">🇯🇵 Japan</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm">🇫🇷 Frankrike</span>
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
