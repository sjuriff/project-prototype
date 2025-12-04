'use client'
import Link from "next/link";
import Image from "next/image";
import beamLogo from '../public/images/logo.png'
import { useScroll } from "@/hooks/use-scroll";


export default function Header() {
    const { scrollDirection, scrollTop } = useScroll();



  return (
    <header
      id="header"
      className={`absolute  sticky left-0 top-0 z-50 flex h-20 w-full items-center justify-between  px-4 py-4 font-roboto transition duration-300 ease-in-out lg:h-20  `}
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
      <div className="flex items-center gap-4">
        
      </div>
    </header>
  )
}