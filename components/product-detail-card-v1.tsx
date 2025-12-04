import { Check, Globe, Zap, Wifi } from "lucide-react";
import Image from "next/image";
import parisImage from '@/public/images/paris.jpg';


export default function ProductDetail() {
  const features = [
    "Instant aktivering",
    "Ingen fysisk SIM nødvendig",
    "Behold ditt orginale nummer",
  ];

  return (
    <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Left side - Plane window framed image */}
        <div className=" p-12 flex items-center justify-center bg-[rgb(10,28,64)]">
          <div className="relative">
            {/* Plane window frame */}
            <div className="relative w-96 h-96 bg-gray-100 rounded-[40%] shadow-2xl border-[16px] border-gray-200 overflow-hidden">
              {/* Inner window shade effect */}
              <div className="absolute inset-0 rounded-[40%] overflow-hidden">
                <Image
                  src={parisImage}
                  alt="Destination view"
                  className="w-full h-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div>

              {/* Window shade pulled down from top */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-gray-300 via-gray-200 to-gray-100 z-10">
                {/* Shade pull tab */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-gray-400/60 rounded-b-md shadow-sm"></div>
              </div>
            </div>

            {/* Window screws */}
            <div className="absolute top-4 left-4 w-3 h-3 bg-gray-400 rounded-full shadow-inner"></div>
            <div className="absolute top-4 right-4 w-3 h-3 bg-gray-400 rounded-full shadow-inner"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-gray-400 rounded-full shadow-inner"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 bg-gray-400 rounded-full shadow-inner"></div>
          </div>
        </div>

        {/* Right side - Product details */}
        <div className="p-12 flex flex-col justify-center bg-[rgba(244,247,250,0)]">
          <div className="mb-2">
            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              Populær
            </span>
          </div>

          <h1 className="mb-4">Europe Travel eSIM</h1>

          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-4xl text-[rgb(10,28,64)] text-[36px]">100</span>
            <span className="text-gray-500">kr</span>
          </div>

          {/* Product specs */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-[rgb(255,199,0)] rounded-full flex items-center justify-center">
                <Wifi className="w-5 h-5 text-[rgb(10,28,64)]" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Data Grense</div>
                <div>10 GB High-Speed Data</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-[rgb(255,199,0)] rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5 text-[rgb(10,28,64)]" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Dekning</div>
                <div>40 Europeiske Land</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-[rgb(255,199,0)] rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-[rgb(10,28,64)]" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Aktivering</div>
                <div>Instant Aktivering</div>
              </div>
            </div>
          </div>

          {/* Features list */}
          <div className="mb-8">
            <h3 className="mb-3">Hva følger med:</h3>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <button className="w-full bg-[rgb(255,199,0)]
             hover:scale-105
             hover:cursor-pointer
             text-white py-4 rounded-lg
             transition-all ease-in-out duration-300">
            Kjøp nå
          </button>

          <p className="text-sm text-gray-500 text-center mt-4">
            QR kode levert på email med en gang.
          </p>
        </div>
      </div>
    </div>
  );
}