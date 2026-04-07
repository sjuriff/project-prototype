import { Minus, Plus, X, Globe } from "lucide-react";
import Image from "next/image";

interface CartItemHeaderProps {
  id: string;
  title: string;
  data: string;
  countryCode: string;
  validity: string;
  price: number;
  quantity: number;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string, data: string) => void;
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

export function CartItemHeader({
  id,
  title,
  data,
  countryCode,
  validity,
  price,
  quantity,
  onUpdateQuantity,
  onRemove,
}: CartItemHeaderProps) {
  const flagImage = 'https://borderly.dev/flag/circle/' + countryCode.toLowerCase() + '.svg'
  return (
    <div className="flex border border-secondary w-full shadow py-4 px-2 rounded-lg relative items-start gap-4  border-b border-[#e5e7eb]">
      <button
        onClick={() => onRemove(id, data)}
        className="p-0 absolute top-1 right-1 hover:scale-105 text-tertiary-text hover:text-primary-text hover:bg-primary rounded-full transition-colors"
        aria-label="Remove item"
      >
        <X className="w-5 h-5 " />
      </button>
      <div className="flex   items-center justify-center   rounded-lg ">
        {isRegion(countryCode) ? (
          <Globe className="w-8 h-8 text-primary-text" />
        ) : (
          <div className="w-12 h-12 flex items-center justify-center">
            <Image
              src={flagImage}
              alt={countryCode}
              width={40}
              height={40}
            />
          </div>
        )}
      </div>

      <div className="flex flex-col w-full gap-2">
        <h3 className="text-tertiary-text font-heading">{title}</h3>
        <div className="flex my-1 gap-3 ">
          <p className="text-tertiary-text font-body text-sm">{data}</p>
          <p className="text-tertiary-text text-nowrap font-body text-sm">{validity}</p>
        </div>
        <div className="flex items-center justify-between  w-full ">
          <p className="text-tertiary-text font-body text-sm">{price} kr</p>
          <div className="flex items-center gap-1 border rounded-full h-fit   px-1 py-1" style={{ borderColor: '#e5e7eb' }}>
            <button
              onClick={() => onUpdateQuantity(id, Math.max(1, quantity - 1))}
              className="p-1.5 text-tertiary-text hover:text-primary  hover:cursor-pointer hover:scale-110 rounded transition-all"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3 " />
            </button>
            <span className="w-8 text-center text-sm text-tertiary-text" >
              {quantity}
            </span>
            <button
              onClick={() => onUpdateQuantity(id, quantity + 1)}
              className="p-1.5 text-tertiary-text  hover:text-primary  hover:cursor-pointer hover:scale-110 rounded transition-all"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3 " />
            </button>
          </div>
        </div>
      </div>


    </div>
  );
}