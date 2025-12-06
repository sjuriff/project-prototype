import type { LucideIcon } from "lucide-react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  Icon?: LucideIcon
  fullWidth?: boolean
}

export default function PrimaryButton({ children, Icon, fullWidth }: PrimaryButtonProps) {
  return (
    <button
      className={`
    group
    relative overflow-hidden
    px-6 py-3 
    ${fullWidth ? "w-full" : ""}
    rounded-lg 
    flex items-center gap-2
    justify-center
    bg-primary 
    text-primary-text 
    font-heading
    hover:cursor-pointer
    transition-colors duration-300
    hover:bg-primary-heading

    before:content-['']
    before:absolute
    before:inset-y-0
    before:left-[-40%]
    before:w-1/3
    before:bg-gradient-to-r
    before:from-transparent
    before:via-[#f9f871]
    before:to-transparent
    before:translate-x-[-100%]
    before:opacity-0
    before:pointer-events-none
    before:transition-transform before:duration-700

    hover:before:opacity-100
    hover:before:translate-x-[450%]
  `}
    >
      {Icon ? <Icon className="h-5 w-5" /> : null}

      {children}

      {/* Reverse glow sweep */}
      <span
        className="
      pointer-events-none
      absolute inset-0

      before:content-['']
      before:absolute before:inset-y-0
      before:left-[-40%]
      before:w-1/3
      before:bg-gradient-to-r
      before:from-transparent
      before:via-[#f9f871]
      before:to-transparent

      before:opacity-0
      before:animate-[glowBack_0.7s_ease-out_forwards]

      group-hover:before:opacity-0
      group-hover:before:animate-none
    "
      />
    </button>
  )
}