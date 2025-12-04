import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { Globe, Zap } from 'lucide-react';

interface ProductCardProps {
  imageUrl: StaticImageData;
  title: string;
  region: string;
  data: string;
  validity: string;
  price: string;
  currency?: string;
}

export function ProductCardTwo({
  imageUrl,
  title,
  region,
  data,
  validity,
  price,
  currency = "USD"
}: ProductCardProps) {
  return (
    <div className="w-[340px] xl:col-span-4 2xl:col-span-3  bg-secondary rounded-3xl overflow-hidden shadow-lg">
      {/* Product Image Section */}
      <div className="p-8 pb-0">
        <div className="bg-secondary  rounded-2xl overflow-hidden aspect-[16/10] relative">
          <Image
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover mix-blend-multiply opacity-80"
          />
          <div className="absolute top-4 right-4 bg-primary px-3 py-1.5 rounded-full shadow-sm">
            <span className="text-primary-text font-body text-xs">eSIM</span>
          </div>
        </div>
      </div>

      {/* Separator with creative dot pattern */}
      <div className="px-8 py-6">
        <div className="flex items-center gap-2">
          <div className="w-5 rounded-l-lg h-[10px] bg-primary"></div>
          <div className="w-5 h-[10px] bg-primary"></div>
          <div className="flex-1 h-[10px] bg-gradient-to-r from-primary via-primary to-transparent"></div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="px-8 pb-8">
        <div className="font-body mb-6">
          <h3 className="text-primary-text font-heading mb-1">{title}</h3>
          <p className="text-secondary-text text-sm">{region}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className='font-body'>
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-tertiary" />
              <div className="text-tertiary font-body text-xs uppercase tracking-wide">Data</div>
            </div>
            <p className="text-primary-text ml-6">{data}</p>
          </div>
          
          <div className='font-body'>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-tertiary" />
              <div className="text-tertiary text-xs uppercase tracking-wide">Gyldig i</div>
            </div>
            <p className="text-primary-text ml-6">{validity}</p>
          </div>
        </div>

        <div className="flex items-end justify-between pt-6 border-t border-primary-text/10">
          <div className='font-body'>
            <div className="text-secondary-text text-xs uppercase tracking-wide mb-1">Price</div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-tertiary text-3xl">{price}</span>
              <span className="text-secondary-text text-sm">{currency}</span>
            </div>
          </div>
          
          <button className="bg-primary font-heading hover:bg-primary/90 text-primary-text px-6 py-3 rounded-full transition-colors shadow-sm">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}