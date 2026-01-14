'use client'
import Link from "next/link";
import { useScroll } from "@/hooks/use-scroll";
import HeaderShoppingCart from "./shopping-cart-header";
import LanguageSelector from "./flag-dropdown";
import { User, Briefcase, BriefcaseBusiness } from "lucide-react";
import DropInMenu from "./drop-in-menu";
import BeamLogo from "./beam-logo";


export default function Header() {
  const { scrollDirection, scrollTop } = useScroll();

  return (
    <header
      id="header"
      className={`absolute bg-tertiary ${scrollDirection === 'down' ? '-top-20' : 'top-0'}   sticky left-0  z-50 flex h-20 w-full items-center justify-between  px-4 py-4 font-roboto transition-all duration-300 ease-in-out lg:h-20  `}
    >
      <Link
        href={'/'}
        className="ml-2 flex items-center lg:ml-12"
      >
        <BeamLogo scrollDirection={scrollDirection} />
      </Link>
      <div className={"flex items-center gap-4"}>
        <div className="flex gap-2 mr-4">
          {/*  <PrimaryButton Icon={User}>Logg inn</PrimaryButton> */}
          <button className={` flex text-sm items-center group  border-[#ffffff]  text-primary px-4 py-3 rounded-lg  hover:cursor-pointer  transition-transform`}>
            <BriefcaseBusiness className="mr-2 group-hover:translate-y-[-2px] transition-transform" /> Business
          </button>
          <button className={` flex text-sm items-center group  border-[#ffffff]  text-primary px-4 py-3 rounded-lg  hover:cursor-pointer  transition-transform`}>
            <User className="mr-2 group-hover:translate-y-[-2px] transition-transform" /> Logg inn
          </button>
          <button className={` text-sm text-primary px-4 py-3 rounded-lg  hover:cursor-pointer hover:scale-105 transition-transform`}>
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