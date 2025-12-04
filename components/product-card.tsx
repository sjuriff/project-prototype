import Image from 'next/image';
import { Globe, Zap } from 'lucide-react';
import { StaticImageData } from 'next/image';
import primaryLine from '@/public/images/primary-line.png';

interface ProductCardProps {
  imageUrl: StaticImageData;
  title: string;
  data: string;
  validity: string;
  price: string;
  currency?: string;
}

export function ProductCard({
  imageUrl,
  title,
  data,
  validity,
  price,
  currency = "NOK"
}: ProductCardProps) {
  return (
    <div className="w-[320px] xl:col-span-4 2xl:col-span-3 bg-tertiary rounded-2xl overflow-hidden shadow-lg">
      {/* Product Image Section */}
      <div className="p-6 pb-2 ">
        <div className="bg-white rounded-xl overflow-hidden aspect-[4/3] mb-4">
          <Image
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-tertiary-text font-heading mb-1">{title}</h3>
      </div>

      {/* Separator with dots and line */}
      <div className="flex px-5 items-center gap-2">
        <div className="w-5 rounded-l-lg h-[10px] bg-primary"></div>
        <div className="w-5 h-[10px] bg-primary"></div>
        <div className="flex-1 h-[10px] bg-gradient-to-r from-primary via-primary to-transparent"></div>
      </div>

      {/* Product Details Section */}
      <div className="p-6  pt-6">
        <div className="flex font-body  items-center justify-around mb-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-tertiary-text text-sm">Data</span>
            </div>
            <p className="text-tertiary-text">{data}</p>
          </div>

          <div className="flex flex-col font-body items-center">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-tertiary-text text-sm">Gyldig i</span>
            </div>
            <p className="text-tertiary-text">{validity}</p>
          </div>
        </div>

        <div className="pt-4 border-t font-body border-tertiary-text/20">
          <div className="flex items-end justify-between">
            <span className="text-tertiary-text/80 text-sm">Pris</span>
            <div className="flex items-baseline gap-1">
              <span className="text-tertiary-text text-2xl"><span className='text-xl'>{currency}</span> {price}</span>
         
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <button className="w-full font-heading mt-4 bg-primary hover:bg-primary/90 hover:cursor-pointer text-primary-text py-3 px-4 rounded-lg transition-colors">
            Kjøp Nå
          </button>
          <button className="w-full font-heading mt-4 bg-transparent border-primary border hover:scale-102 hover:cursor-pointer  text-tertiary-text py-3 px-4 rounded-lg transition-all ease-in-out">
            Les mer
          </button>
        </div>
      </div>
    </div>
  );
}