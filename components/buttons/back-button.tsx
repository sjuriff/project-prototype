"use client"

import { CircleArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

interface BackButtonProps {
  onBack?: () => void
}

export default function BackButton({ onBack }: BackButtonProps) {
  const router = useRouter()

  const handleClick = () => {
    if (onBack) {
      onBack()
    }
    router.back()
  }

  return (
    <button
      onClick={handleClick}
      className="flex group font-heading items-center hover:cursor-pointer hover:text-gray-900"
    >
      <CircleArrowLeft className="mr-2 group-hover:translate-x-[-2px] transition-transform text-tertiary" />
      Tilbake
    </button>
  )
}