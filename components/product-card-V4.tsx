import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { Globe, Calendar } from 'lucide-react';

interface ProductCardProps {
  imageUrl: StaticImageData;
  title: string;
  region: string;
  data: string;
  validity: string;
  price: string;
  currency?: string;
}

export function ProductCardFour({
  imageUrl,
  title,
  region,
  data,
  validity,
  price,
  currency = "USD"
}: ProductCardProps) {
  return (
    <div className="w-[380px] xl:col-span-4 2xl:col-span-3 relative bg-tertiary rounded-2xl overflow-hidden shadow-lg">
      {/* Destination Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute z-0 flex flex-col items-center justify-center opacity-80 bg-primary left-1/2 transform -translate-x-1/2 h-32 w-32 rounded-full -bottom-12 to-transparent">
        <h3 className="text-primary-text mt-4 font-heading z-10 opacity-100 mb-1">{title}</h3>
          <p className="text-secondary-text font-body mb-12 z-10 opacity-100 text-sm">{region}</p>
        </div>
        <div className="absolute top-4 right-4 bg-primary px-3 py-1.5 rounded-lg">
          <span className="text-primary-text text-xs tracking-wide">eSIM</span>
        </div>
      </div>

      <div className="p-8">
        
        <div className="flex items-center gap-2 mb-6">
          
            <div className="w-5 rounded-l-lg h-[10px] bg-primary"></div>
            <div className="w-5 h-[10px] bg-primary"></div>
            <div className="flex-1 h-[10px] bg-gradient-to-r from-primary via-primary to-transparent"></div>
          
        </div>

        {/* Specifications */}
        <div className="flex gap-6 mb-8">
          <div className="flex items-start gap-3 flex-1">
            <div className="w-9 h-9 rounded-full border border-tertiary bg-surface-dim flex items-center justify-center flex-shrink-0">
              <Globe className="w-4 h-4 text-tertiary" />
            </div>
            <div className='font-body'>
              <div className="text-tertiary-text text-xs mb-0.5">Data</div>
              <div className="text-tertiary-text">{data}</div>
            </div>
          </div>

          <div className="flex items-start gap-3 flex-1">
            <div className="w-9 h-9 rounded-full border border-tertiary bg-surface flex items-center justify-center flex-shrink-0">
              <Calendar className="w-4 h-4 text-tertiary" />
            </div>
            <div className='font-body'>
              <div className="text-tertiary-text text-xs mb-0.5">Validity</div>
              <div className="text-tertiary-text">{validity}</div>
            </div>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div className='font-body'>
            <div className="text-tertiary-text text-xs mb-1">Total price</div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-tertiary-text text-3xl">{price}</span>
              <span className="text-tertiary-text">{currency}</span>
            </div>
          </div>

          <button className="bg-primary font-heading hover:bg-tertiary/90 text-primary-text px-7 py-3 rounded-xl transition-colors">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}
