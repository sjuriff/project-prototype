'use client'
import Link from "next/link";
import Image from "next/image";
import beamLogo from '../public/images/logo.png'
import { useScroll } from "@/hooks/use-scroll";
import HeaderShoppingCart from "./shopping-cart-header";
import LanguageSelector from "./flag-dropdown";
import PrimaryButton from "./buttons/primary-button";
import { User } from "lucide-react";
import DropInMenu from "./drop-in-menu";



export default function Header() {
  const { scrollDirection, scrollTop } = useScroll();

  //${scrollDirection === 'down' ? '-translate-y-[80px]' : 'translate-y-0'}

  return (
    <header
      id="header"
      className={`absolute bg-primary-text     ${scrollDirection === 'down' ? '-top-20' : 'top-0'}   sticky left-0  z-50 flex h-20 w-full items-center justify-between  px-4 py-4 font-roboto transition-all duration-300 ease-in-out lg:h-20  `}
    >
      <Link
        href={'/'}
        className="ml-2 flex items-center lg:ml-12"
      >

        <Image
          id="sim-logo"
          src={beamLogo}
          alt="anteambulo logo "
          className={`max-h-12 w-auto transition-all duration-300 hover:scale-110 lg:max-h-14 2xl:max-h-14 ${scrollTop > 50 ? 'opacity-0' : 'opacity-100'}`}
        />

      </Link>
      <div className={"flex items-center gap-4"}>
        <div className="flex gap-2">
         {/*  <PrimaryButton Icon={User}>Logg inn</PrimaryButton> */}
          <button className={`border-2 flex items-center  border-[#ffffff]  text-tertiary-text px-8 py-3 rounded-lg  hover:cursor-pointer hover:scale-101 transition-transform`}>
            <User className="mr-2" /> Logg inn
          </button>
          <button className={`border-2  border-[#ffffff]  text-tertiary-text px-8 py-3 rounded-lg  hover:cursor-pointer hover:scale-101 transition-transform`}>
            Registrer deg
          </button>

        </div>
        <LanguageSelector scrollTop={scrollTop} scrollDirection={scrollDirection} />
        <HeaderShoppingCart scrollDirection={scrollDirection} scrollTop={scrollTop} />
        <div className="ml-8">
          <DropInMenu scrollDirection={scrollDirection} scrollTop={scrollTop} />
        </div>



      </div>
    </header>
  )
}