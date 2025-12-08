'use client'
import { ChevronDown, SquareMenu } from "lucide-react"
import { useState, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

export default function DropInMenu({ scrollDirection, scrollTop }: { scrollDirection: string, scrollTop: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const arrowRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleMenuClick = () => {
    setIsOpen(prev => !prev)
  }

  useGSAP(() => {
    if (!arrowRef.current || !menuRef.current) return

    if (isOpen) {
      gsap.to(arrowRef.current, { rotate: 180, duration: 0.3, ease: "power3.inOut" })
      gsap.to(menuRef.current, { x: 0, duration: 0.3, ease: "power3.inOut" })
    } else {
      gsap.to(arrowRef.current, { rotate: 0, duration: 0.3, ease: "power3.inOut" })
      gsap.to(menuRef.current, { x: '100%', duration: 0.3, ease: "power3.inOut" })
    }
  }, [isOpen])


  return (
    <div className="">
      <button onClick={handleMenuClick} className={`flex group gap-1 text-tertiary-text  hover:cursor-pointer items-center justify-center`}>
        <SquareMenu className="h-6 w-6 " />
        <div ref={arrowRef}>
          <ChevronDown className="h-4 w-4 group-hover:-translate-y-[-2px] transition-transform " />
        </div>
      </button>

       {/** 👉 backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0  ${scrollDirection === 'up' || scrollTop < 50  ? 'top-20' : 'top-0'} overflow-hidden transition-all  bg-black/10 backdrop-blur-xs  z-10`}
        />
      )}


      <div ref={menuRef} className={`absolute translate-x-[200%] top-20 z-20 right-0  w-100 h-screen bg-primary-text  shadow-lg`}>
        <ul className="py-2 text-tertiary-text font-heading">
          <li className="px-4 py-2 text-base text-tertiary-text">Item 1</li>
          <li className="px-4 py-2 text-base text-tertiary-text">Item 2</li>
          <li className="px-4 py-2 text-base text-tertiary-text">Item 3</li>
        </ul>
      </div>


    </div>
  )
}