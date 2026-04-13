"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ChevronDown } from "lucide-react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

gsap.registerPlugin(useGSAP)

const flags = [
  { code: "no", label: "Norsk" },
  { code: "se", label: "Svenska" },
  { code: "dk", label: "Dansk" },
  { code: "uk", label: "English" }
]

export default function LanguageSelector({ scrollDirection, scrollTop }: { scrollDirection: string, scrollTop: number }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState("no")

  const dropdownRef = useRef<HTMLDivElement>(null)
  const arrowRef = useRef<HTMLDivElement>(null)

  // load from storage
  useEffect(() => {
    const saved = localStorage.getItem("lang")
    if (saved) setSelected(saved)
  }, [])

  useGSAP(() => {
    if (!dropdownRef.current || !arrowRef.current) return

    if (open) {
      gsap.to(dropdownRef.current, { x: 0, duration: 0.3, ease: "power3.inOut" })
      gsap.to(arrowRef.current, { rotate: 180, duration: 0.3, ease: "power3.inOut" })
    } else {
      gsap.to(dropdownRef.current, { x: '250%', duration: 0.3, ease: "power3.inOut" })
      gsap.to(arrowRef.current, { rotate: 0, duration: 0.3, ease: "power3.inOut" })
    }
  }, [open])

  // save on change
  const handleSelect = (code: string) => {
    setSelected(code)
    localStorage.setItem("lang", code)
    setOpen(false)
  }

  const current = flags.find(x => x.code === selected)!

      const currentFlagImageUrl: string = 'https://borderly.dev/flag/circle/' + current.code + '.svg'



  return (
    <div className="relative z-50">
      <button
        className="flex items-center gap-2 px-2 hover:cursor-pointer py-1 rounded group"
        onClick={() => setOpen(!open)}
      >
        <div className=" w-8 h-8 relative">
          <Image
            src={currentFlagImageUrl}
            fill
            className="rounded-full border border-primary"
            alt={current.label}
          />
        </div>

        <div ref={arrowRef}>
          <ChevronDown className={`w-4 group-hover:-translate-y-[-2px] transition-transform h-4 text-tertiary-text`} />
        </div>
      </button>


      <div ref={dropdownRef}
        className="absolute translate-x-[250%] z-50   -right-6 mt-8 bg-tertiary  rounded shadow-lg w-32"
      >
           
        {flags.map(f => {
             const flagImageUrl: string = 'https://borderly.dev/flag/circle/' + f.code + '.svg'
          return(
          <button
            key={f.code}
            className="flex items-center z-50 gap-2 w-full px-2 py-1 group text-left"
            onClick={() => handleSelect(f.code)}
          >
            <div className="relative h-6 w-6">
              <Image
                src={flagImageUrl}
                fill
                className="rounded-full shadow-lg border group-hover:border-primary"
                alt={f.label}
              />
            </div>
            <span className="text-sm group-hover:text-primary font-heading text-tertiary-text">{f.label}</span>
          </button>
          )
        })}
      </div>

    </div>
  )
}