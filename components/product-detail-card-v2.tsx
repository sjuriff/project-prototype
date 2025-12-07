'use client'
import Image from 'next/image';
import { Wifi, Globe, Calendar, Shield } from 'lucide-react';
import { StaticImageData } from 'next/image';
import PrimaryButton from './buttons/primary-button';
import Link from 'next/link';
import paths from '@/paths';
import { useCart } from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';

interface ProductDetailCardProps {
  id: string;
  image: StaticImageData;
  title: string;
  description: string;
  price: string;
  data: string;
  validity: string;
}

export default function ProductDetailV2({
  id,
  image,
  title,
  description,
  price,
  data,
  validity,
}: ProductDetailCardProps) {

  const {addItem} = useCart()
  const router = useRouter()

  const handleAddToCartClick = (id: string, title: string, price: string, data: string, vadility: string) =>{

    addItem({
      id: id,
      title: title,
      data: data,
      validity: vadility,
      price: parseInt(price),
      quantity: 1,
    })

    router.push(paths.cart)



  }
  return (
    <div className="min-h-screen flex items-center justify-center  py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-surface rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left side - Polaroid Image */}
            <div className="flex  justify-center items-center p-8 md:p-12 bg-secondary">
              <div className="p-6 border rounded-xl shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-300" style={{
                backgroundColor: '#d6cfc3', // warm paper
                backgroundImage: "url('/images/polaroid-texture.avif')", // repeating grain
                backgroundRepeat: 'repeat',
                backgroundBlendMode: "overlay",
                backgroundSize: '200px 200px',
                border: '1px solid #e6e1d4',
                boxShadow: `
      0 12px 25px rgba(0,0,0,0.20),
      0 2px 3px rgba(0,0,0,0.10),
      inset 0 0 6px rgba(0,0,0,0.10)  // thickness effect
    `
              }}
              >
                <Image
                  src={image}
                  alt="Paris, France"
                  className="w-full rounded-xl h-80 object-cover"

                />
                <div className="mt-4 text-center font-heading text-primary-text">
                  {title}
                </div>
              </div>
            </div>

            {/* Right side - Product Details */}
            <div className="p-8 md:p-12 bg-surface">
              <div className="inline-block px-3 py-1 text-primary-text font-heading   bg-primary rounded-full mb-4" >
                Populær
              </div>

              <h1 className="mb-2 text-2xl text-tertiary  font-heading " >{title} eSIM Data Plan</h1>
              <p className="mb-6 text-secondary-text font-body" >
                Hold deg tilkoblet gjennom hele reisen din i med vårt høyhastighets eSIM-dataabonnement
              </p>

              <div className="flex font-body items-baseline gap-2 mb-8">
                <span className="text-4xl text-primary-text" >{price} kr</span>
                <span className="text-sm text-secondary-text" >engangsbetaling</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 rounded-lg bg-tertiary" >
                    <Wifi className="w-5 h-5 text-tertiary-text" />
                  </div>
                  <div className=' font-body text-secondary-text'>
                    <p >{data} GB High-Speed Data</p>
                    <p >4G/5G-dekning i hele {title}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 rounded-lg bg-primary" >
                    <Globe className="w-5 h-5 text-primary-text" />
                  </div>
                  <div className='text-secondary-text font-body'>
                    <p >{title} dekning</p>
                    <p >
                      Fungerer i alle større byer og regioner</p>
                  </div>
                </div>

                <div className="flex  items-start gap-3">
                  <div className="mt-1 bg-secondary p-2 rounded-lg" >
                    <Calendar className="w-5 h-5 text-secondary-text" />
                  </div>
                  <div className='text-secondary-text font-body'>
                    <p >{validity} dagers gyldighet</p>
                    <p >
                      Aktiveres ved første tilkobling</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-tertiary p-2 rounded-lg" >
                    <Shield className="w-5 h-5 text-tertiary-text" />
                  </div>
                  <div className='text-secondary-text'>
                    <p>Øyeblikkelig Levering</p>
                    <p >QR-kode sendes umiddelbart via e-post</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link href={paths.checkout(id)}>
                  <PrimaryButton fullWidth  >

                    Kjøp Nå
                  </PrimaryButton>
                </Link>
                <button onClick={() =>handleAddToCartClick(id, title, price, validity, data)} className="w-full font-heading py-3 px-6 border-2 border-tertiary text-secondary-text hover:cursor-pointer  rounded-lg transition-transform duration-300 hover:scale-102"   >
                  Legg til handlekurv
                </button>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-[#005A66] " >
                <p className='text-tertiary-text font-body' >
                  ✓ Ingen kontrakter eller abonnementer<br />
                  ✓ Behold ditt orginale nummer<br />
                  ✓ Kompatibel med alle eSIM-enheter
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}