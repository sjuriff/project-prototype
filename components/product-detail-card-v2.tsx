'use client'
import Image from 'next/image';
import { Wifi, Globe, Radio, Calendar, Shield, RadioTower } from 'lucide-react';
import { StaticImageData } from 'next/image';
import PrimaryButton from './buttons/primary-button';
import Link from 'next/link';
import paths from '@/paths';
import { useCart } from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { constants } from 'node:crypto';
import { usePersistedProduct } from '@/hooks/use-persisted-product';

interface ProductDetailCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
  data: string;
  validity: string;
  tiers: Tier[]
}

interface Tier {
  data: string;
  validity: string;
  price: string
  popular?: boolean
}

export default function ProductDetailV2({
  id,
  image,
  title,
  description,
  price,
  data,
  validity,
  tiers
}: ProductDetailCardProps) {


  const [tier, setTier] = useState<Tier>({
    data: data,
    validity: validity,
    price: price
  })
  const { addItem } = useCart()
  const { persistProduct } = usePersistedProduct()
  const router = useRouter()

  console.log("image", image)


  const handleTierClick = (tier: Tier) => {

    setTier(tier)
  }



  console.log("tiers", tiers)

  const handleAddToCartClick = (id: string, title: string) => {

    addItem({
      id: id,
      title: title,
      data: tier.data,
      validity: tier.validity,
      price: parseInt(tier.price),
      quantity: 1,
    })

    router.push(paths.cart)



  }

  const handleBuyClick = () => {
    persistProduct({
      id,
      imageUrl: image,
      title,
      data: tier.data,
      validity: tier.validity,
      price: tier.price,
      currency: "NOK",
      tiers: tiers,
    });

    router.push(paths.checkout(id));
  }

  return (
    <div className="h-[800px] flex items-center justify-center  ">
      <div className="max-w-6xl h-full  mx-auto">
        <div className="bg-surface h-full rounded-2xl shadow-lg overflow-hidden">
          <div className="grid  h-full md:grid-cols-16">
            {/* Left side - Polaroid Image */}
            <div className="flex h-full col-span-9  flex-col gap-8 items-center justify-center   p-8 md:p-12 bg-secondary">
              <div className="p-6  w-full h-3/4 mb-4 rounded-xl shadow-2xl" style={{
                backgroundColor: '#d6cfc3', // warm paper
                backgroundImage: "url('/images/polaroid-paper.jpg')", // repeating grain
                backgroundRepeat: 'repeat',
                backgroundBlendMode: "overlay",
                backgroundSize: 'cover',
                backgroundPosition: 'bottom right',
                boxShadow: `
      0 12px 25px rgba(0,0,0,0.20),
      0 2px 3px rgba(0,0,0,0.10),
      inset 0 0 6px rgba(0,0,0,0.10)  // thickness effect
    `
              }}
              >
                <div className="relative h-[90%] w-full overflow-hidden rounded-sm">

                  <Image
                    src={image}
                    alt="Paris, France"
                    className="w-full  rounded-sm shadow-inner h-full opacity-95
    contrast-95
    saturate-90
    mix-blend-multiply  object-cover"
                    width={2000}
                    height={2000}

                  />
                  <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.25)]" />
                </div>

              </div>

              <div className="space-y-4  w-full  flex  items-start   justify-start  h-1/4 ">
                <div className='grid grid-cols-12 content-center  gap-4'>
                  <div className="flex ml-4 col-start-4 col-span-12 items-start gap-3">
                    <div className="mt-1 p-2 rounded-lg bg-surface" >
                      <Wifi className="w-5 h-5 text-secondary-text" />
                    </div>
                    <div className=' font-body text-secondary-text'>
                      <p > High-Speed Data</p>
                      <p >4G/5G-dekning i hele {title}</p>
                    </div>
                  </div>



                  <div className="flex ml-4 col-start-4 col-span-12  items-start gap-3">
                    <div className="mt-1  bg-surface p-2 rounded-lg" >
                      <Calendar className="w-5 h-5 text-secondary-text" />
                    </div>
                    <div className='text-secondary-text font-body'>
                      <p >{tier?.validity} dagers gyldighet</p>
                      <p >
                        Aktiveres ved første tilkobling</p>
                    </div>
                  </div>

                  <div className="flex ml-4 col-start-4  col-span-12  items-start gap-3">
                    <div className="mt-1 bg-surface p-2 rounded-lg" >
                      <Shield className="w-5 h-5 text-secondary-text" />
                    </div>
                    <div className='text-secondary-text'>
                      <p>Øyeblikkelig Levering</p>
                      <p >QR-kode sendes umiddelbart via e-post</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Product Details */}
            <div className="p-8 col-span-7 md:p-12  bg-white">


              <h1 className="mb-2 text-2xl text-primary-text font-semibold  font-heading " >{title} eSIM Data Plan</h1>
              <p className="mb-6 text-secondary-text font-body" >
                Hold deg tilkoblet gjennom hele reisen din i med vårt høyhastighets eSIM-dataabonnement
              </p>

              <div className="flex font-body items-baseline gap-2 mb-8">
                <span className="text-4xl text-primary-text" >{tier?.price} kr</span>
                <span className="text-sm text-secondary-text" >engangsbetaling</span>
              </div>


              <div className='grid grid-cols-12 mb-8 shadow-md gap-y-6 gap-x-4 py-4 px-8 bg-secondary  rounded-lg'>
                {tiers.map((item) => (
                  <div onClick={() => handleTierClick(item)} key={item.data} className={`${item.price === tier.price ? 'bg-tertiary text-tertiary-text' : 'hover:bg-surface-dark hover:shadow-md transition-all duration-300 ease-in-out '} flex relative hover:cursor-pointer bg-surface col-span-6  px-4 py-2   rounded-xl items-center justify-center gap-3 `}>
                    {item.popular && <span className="absolute -top-3 -right-4 text-xs bg-primary rounded-full px-1 py-1 font-body text-primary-text " >Populær</span>}
                    <div className={`mt-1 p-2 rounded-lg ${item.price === tier.price ? 'bg-primary text-primary-text' : ' bg-primary text-primary-text '} `} >
                      <Radio className="w-5 h-5 " />

                    </div>
                    <div className={` font-body flex flex-col ${item.price === tier.price ? 'text-tertiary-text' : 'text-secondary-text'} `}>
                      <p className=' font-heading text-sm' >{item.validity}</p>
                      <p >{item.data}</p>
                    </div>




                  </div>
                ))}
              </div>

              <div className='flex p-4 border mb-8 bg-tertiary items-center justify-center gap-2 rounded-lg flex'>

                <RadioTower className="w-5 h-5 text-tertiary-text" />
                <p className='text-tertiary-text font-body text-base'>Operatørvalg:</p>
                <p className='text-tertiary-text font-body text-base'>Opratør</p>
              </div>


              <div className="flex w-full items-center flex-col gap-4">
                {/* <Link href={paths.checkout(id)}> */}
                <div className='w-full'>
                  <PrimaryButton onClick={handleBuyClick} fullWidth  >

                    Kjøp Nå
                  </PrimaryButton>
                </div>
                {/*  </Link> */}
                <button onClick={() => handleAddToCartClick(id, title)} className="w-full font-heading py-3 px-6 border-2 border-tertiary text-secondary-text hover:cursor-pointer  rounded-lg transition-transform duration-300 hover:scale-102"   >
                  Legg til handlekurv
                </button>
              </div>
              <div className="mt-6 p-4 rounded-lg shadow bg-surface " >
                <p className='text-primary-text font-body' >
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