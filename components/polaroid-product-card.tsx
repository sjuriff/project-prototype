import Image from "next/image";
import { StaticImageData } from "next/image";
import { Wifi, Calendar } from "lucide-react";

interface EsimPolaroidCardProps {
  country: string;
  region: string;
  gb: string;
  validity: string;
  price: string;
  imageUrl: StaticImageData;
}

export function EsimPolaroidCard({
  country,
  region,
  gb,
  validity,
  price,
  imageUrl,
}: EsimPolaroidCardProps) {
  return (
    <div className="flex xl:col-span-4 2xl:col-span-3 justify-center items-center p-8">
      <div
        className="transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-1"
        style={{
          backgroundColor: "#d6cfc3",
          backgroundImage: "url('/images/polaroid-texture.avif')",
          backgroundRepeat: "repeat",
          backgroundSize: "180px 165px",
          backgroundBlendMode: "overlay",
          border: "1px solid #e8e4d8",
          borderRadius: "4px",
          padding: "16px 16px 20px 16px",
          width: "400px",
          boxShadow: `
            0 8px 20px rgba(0,0,0,0.15),
            0 2px 4px rgba(0,0,0,0.1),
            inset 0 0 8px rgba(0,0,0,0.08),
            inset 0 1px 0 rgba(255,255,255,0.3)
          `,
        }}
      >
        {/* Polaroid Image */}
        <div className="relative mb-6">
          <Image
            src={imageUrl}
            alt={`${region}, ${country}`}
            className="w-full rounded-lg object-cover"
            style={{ 
              border: "1px solid #d8d4c8",
              height: "300px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
            }}
          />
          {/* Price Badge */}
          <div
            className="absolute top-3 right-3 px-3 py-1.5 rounded-full shadow-lg"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-primary-text)",
            }}
          >
            <span className="font-semibold">{price}</span>
          </div>
        </div>

        {/* Polaroid Caption Area - More spacious like real polaroid */}
        <div className="px-2 space-y-2">
          {/* Destination Name - handwritten style placement */}
          <div>
            <h3
              className="font-heading text-xl"
              style={{ color: "var(--color-primary-text)" }}
            >
              {region}, {country}
            </h3>
          </div>

          {/* eSIM Details - condensed */}
          <div className="flex flex-wrap gap-x-4 gap-y-1" style={{ color: "var(--color-secondary-text)" }}>
            <div className="flex items-center gap-1.5">
              <Wifi className="w-3.5 h-3.5" style={{ color: "var(--color-tertiary)" }} />
              <span className="text-sm">{gb}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" style={{ color: "var(--color-tertiary)" }} />
              <span className="text-sm">{validity}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}