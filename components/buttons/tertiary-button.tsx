import type { LucideIcon } from "lucide-react";

interface TertiaryButtonProps {
  children: React.ReactNode;
  Icon?: LucideIcon;
  fullWidth?: boolean;
}

export default function TertiaryButton({ children, Icon, fullWidth }: TertiaryButtonProps) {

  return (
    <button
      className={`
        group
        relative overflow-hidden
        px-6 py-3
        ${fullWidth ? "w-full" : ""}
        rounded-lg
        flex items-center gap-2 justify-center
        font-heading
        bg-tertiary
        text-tertiary-text
        hover:cursor-pointer
        hover:bg-tertiary/90
        transition-colors duration-300
        hover:bg-tertiary-hover

        /* FORWARD SWEEP – bottom bar */
        before:content-['']
        before:absolute
        before:bottom-0
        before:left-[-30%]
        before:h-[3px]              /* thickness of bottom bar */
        before:w-1/2                /* width of the moving bar */
        before:bg-[#f9f871]         /* yellow */
        before:opacity-0
        before:pointer-events-none
        before:translate-x-[-100%]
        before:transition-transform before:duration-700

        hover:before:opacity-100
        hover:before:translate-x-[300%]
      `}
    >
      {Icon ? <Icon className="h-5 w-5" /> : null}
      {children}

      {/* REVERSE SWEEP – bottom bar going back */}
      <span
        className="
          pointer-events-none
          absolute inset-0

          before:content-['']
          before:absolute
          before:bottom-0
          before:left-[-30%]
          before:h-[3px]
          before:w-1/2
          before:bg-[#f9f871]

          before:opacity-0
          before:animate-[glowBack_0.7s_ease-out_forwards]

          group-hover:before:opacity-0
          group-hover:before:animate-none
        "
      />
    </button>
  )

}