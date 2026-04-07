import { Minus, Plus, X, Globe } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  id: string;
  title: string;
  data: string;
  countryCode: string;
  validity: string;
  price: number;
  quantity: number;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export const REGION_CODES = [
  "EU", // Europa
  "AS", // Asia
  "AF", // Afrika
  "NA", // Nord-Amerika
  "SA", // Sør-Amerika
  "OC", // Oseania
  "ME", // Midtøsten (valgfri, men veldig vanlig i eSIM)
  "WW"  // Worldwide / Global (valgfri)
]

export function isRegion(code: string) {
  return REGION_CODES.includes(code);
}

export function CartItem({
  id,
  data,
  title,
  validity,
  price,
  quantity,
  countryCode,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {

  console.log('countryCode', countryCode)

  const flagImageUrl = 'https://borderly.dev/flag/circle/' + countryCode.toLowerCase() + '.svg'
  return (
    <div className="flex  bg-gradient-to-r from-primary/50 to-primary shadow  py-4 px-2 rounded-xl relative items-start gap-4 ">
      <button
        onClick={() => onRemove(id)}
        className="p-0 absolute top-1 right-1 hover:scale-105  hover:cursor-pointer  rounded-full transition-transfomr"
        aria-label="Remove item"
      >
        <X className="w-5 h-5 text-primary-text"  />
      </button>
      <div className="flex   items-center justify-center   rounded-lg ">
        {isRegion(countryCode) ? (
          <Globe className="w-8 h-8 text-primary-text" />
        ) : (
          <div className="w-12 h-12 flex items-center justify-center">

            <Image src={flagImageUrl} width={100} height={100} alt={countryCode} className="object-contain w-full" />
          </div>
        )
        }
      </div>
      <div className="flex-1">
        <h3 className="mb-1" style={{ color: 'var(--color-primary-text)' }}>
          {title}
        </h3>
        <div className="flex gap-3  font-body text-sm mb-2">
          <span className="inline-flex items-center  py-0.5 rounded-md text-sm">
            {data}
          </span>
          <span className="inline-flex items-center  py-0.5 rounded-md" >
            {validity}
          </span>
        </div>
        <p style={{ color: 'var(--color-primary-text)', fontSize: '1.125rem' }}>
          {price.toFixed(0)} kr
        </p>
      </div>

      <div className="flex flex-col my-auto  h-full justify-center  items-center gap-3">

        <div className="flex items-center gap-2 border border-primary-text/50 rounded-full px-1 py-1" >
          <button
            onClick={() => onUpdateQuantity(id, Math.max(1, quantity - 1))}
            className="p-1.5  hover:cursor-pointer hover:scale-105 rounded transition-transform"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4 text-secondary-text" />
          </button>
          <span className="w-8 text-center text-primary-text" >
            {quantity}
          </span>
          <button
            onClick={() => onUpdateQuantity(id, quantity + 1)}
            className="p-1.5  hover:cursor-pointer hover:scale-105 rounded transition-transform"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4 text-secondary-text"  />
          </button>
        </div>


      </div>
    </div>
  );
}
