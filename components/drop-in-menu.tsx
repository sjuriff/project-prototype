'use client'
import { BriefcaseBusiness, ChevronDown, Handshake, LucideIcon, Menu, User, UserPlus } from "lucide-react"
import { useState, useRef, useCallback, useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import usePortal from "@/hooks/use-portal"
import Link from "next/link"
import { usePathname } from "next/navigation"
import paths from "@/paths"
import { text } from "stream/consumers"

gsap.registerPlugin(useGSAP)

interface MenuItem {
  title: string
  href: string
  icon: LucideIcon
}

interface DropInMenuProps {
  menuOpen: (isOpen: boolean) => void
  menuItems: MenuItem[]
  open?: boolean
  bgColor: string
  textColor: string
}

export default function DropInMenu({ menuOpen, menuItems, open, bgColor, textColor }: DropInMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const arrowRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const renderPortal = usePortal();





  useEffect(() => {
    menuOpen(isOpen)
  }, [isOpen])


  useEffect(() => {
    if (!open) {
      setIsOpen(false)

    }
  }, [open])

  const handleMenuClick = useCallback(() => {
    setIsOpen(prev => !prev)

  }, [isOpen]);

  useGSAP(
    () => {
      if (!menuRef.current || !backdropRef.current || !arrowRef.current) return


      const items = menuRef.current.querySelectorAll("[data-menu-item]")
      const tl = gsap.timeline()

      if (isOpen) {
        tl.to(menuRef.current, {
          x: 0,
          duration: 0.3,
          ease: "power4.out",
          pointerEvents: "auto",
        })

          .to(backdropRef.current, {
            autoAlpha: 1,
            duration: 0.3,
            ease: "power4.out",
            pointerEvents: "auto",
          }, 0)

          .to(arrowRef.current, {
            rotate: 180,
            duration: 0.3,
          }, 0)
          .fromTo(
            items,
            {
              autoAlpha: 0,
              x: 100,
              scale: 0.95,
            },
            {
              autoAlpha: 1,
              x: 0,
              scale: 1,
              duration: 0.38,
              ease: "power3.out",
              stagger: 0.05,
            },
            0.1
          )
      } else {
        gsap.to(menuRef.current, {
          x: "100%",
          duration: 0.3,
          ease: "power3.out",
          pointerEvents: "none",
        })

        gsap.to(backdropRef.current, {
          autoAlpha: 0,
          duration: 0.3,
          ease: "power3.out",
          pointerEvents: "none",
        })

        gsap.to(arrowRef.current, {
          rotate: 0,
          duration: 0.3,
        })
      }
    },
    { dependencies: [isOpen] }
  )


  return (
    <div className="">
      <button onClick={handleMenuClick} className={`flex group gap-1 text-${textColor}  hover:cursor-pointer items-center justify-center`}>
        <Menu className="h-6 w-6 " />
        <div ref={arrowRef}>
          <ChevronDown className="h-4 w-4 group-hover:-translate-y-[-2px] transition-transform " />
        </div>
      </button>

      {/** 👉 backdrop */}
      {renderPortal(
        <>
          <div
            ref={backdropRef}
            onClick={() => setIsOpen(false)}
            className={`fixed inset-x-0 top-[0] bottom-[-2px] z-40 opacity-0 pointer-events-none bg-black/10 backdrop-blur-xs`}
          />



          <div ref={menuRef} className={`absolute mt-8 md:mt-0 md:fixed w-screen bg-${bgColor}  top-0  right-0 h-screen md:w-80 translate-x-[100%] pointer-events-none z-40 md:z-40 flex flex-col items-start justify-center pb-24  `}>
            <Link data-menu-item href={'#'} className={` text-${textColor} px-4 md:hidden  group py-2 flex text-lg gap-2 items-center justify-center `}><User className={`h-5 text-${textColor}  w-5 group-hover:translate-y-[-2px] group-hover:-translate-x-1 group-hover:scale-110 group-hover:text-primary transition-transform `} /> Logg inn </Link>
            <Link data-menu-item href={'#'} className={`px-4 md:hidden text-${textColor}  group py-2 flex text-lg gap-2 items-center justify-center `}><UserPlus className={`h-5 w-5 group-hover:translate-y-[-2px] group-hover:-translate-x-1 group-hover:scale-110 group-hover:text-primary text-${textColor}  transition-transform `} /> Registrer deg </Link>
            
            {menuItems.map((item, index) => (
              <Link onClick={() => setIsOpen(false)} data-menu-item key={index} href={item.href} className={`px-4  group py-2 flex text-lg gap-2 items-center justify-center  text-${textColor}`}>{<item.icon className={`h-5 w-5 group-hover:translate-y-[-2px] group-hover:-translate-x-1 group-hover:scale-110 transition-transform  text-${textColor}`} />} {item.title} </Link>
            ))}



          </div>


        </>

      )}


    </div>
  )
}