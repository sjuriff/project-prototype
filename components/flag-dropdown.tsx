"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ChevronDown } from "lucide-react"

import { useState, useEffect, useRef } from "react"

gsap.registerPlugin(useGSAP)

const flags = [
  { code: "no", label: "Norsk", flag: "🇳🇴" },
  { code: "se", label: "Svenska", flag: "🇸🇪" },
  { code: "dk", label: "Dansk", flag: "🇩🇰" },
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

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 px-2 hover:cursor-pointer py-1 rounded group"
        onClick={() => setOpen(!open)}
      >
        <span>{current.flag}</span>
        <span className={`text-sm font-heading text-tertiary-text `}>{current.label}</span>
        <div ref={arrowRef}>
          <ChevronDown className={`w-4 group-hover:-translate-y-[-2px] transition-transform h-4 text-tertiary-text`} />
        </div>
      </button>


      <div ref={dropdownRef}
        className="absolute translate-x-[250%] -z-10 right-0 mt-8 bg-surface-dim  rounded shadow-lg w-32"
      >
        {flags.map(f => (
          <button
            key={f.code}
            className="flex items-center gap-2 w-full px-2 py-1 hover:bg-gray-100 text-left"
            onClick={() => handleSelect(f.code)}
          >
            <span>{f.flag}</span>
            <span className="text-sm font-heading text-primary-text">{f.label}</span>
          </button>
        ))}
      </div>

    </div>
  )
}