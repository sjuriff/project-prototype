'use client'
import type { LucideIcon } from "lucide-react";
import { useState, useId, isValidElement } from "react";
import { IconType } from "react-icons";

type PaymentDropdownProps = {
  label: string;
  icon: LucideIcon | React.ReactNode | IconType;
  children: React.ReactNode;
  defaultOpen?: boolean;
  disabled?: boolean;
  className?: string;
};

export function PaymentDropdown({
  label,
  icon: Icon,
  children,
  defaultOpen = false,
  disabled = false,
  className = "",
}: PaymentDropdownProps) {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = useId();
  const renderIcon = (icon: React.ElementType | React.ReactNode) => {
    if (isValidElement(icon)) return icon;

    const IconComp = icon as React.ElementType;

    return <IconComp className="h-4 w-4" size={16} />;
  };



  return (
    <div className={`w-full ${className}`}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={contentId}
        className={[
          "flex w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left shadow-sm transition",
          "border-transparent bg-secondary/50 hover:bg-secondary",
          "focus:outline-none focus:ring-1 focus:ring-primary focus:bg-secondary",
          disabled ? "cursor-not-allowed opacity-60 hover:bg-white" : "",
        ].join(" ")}
      >
        <span className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-zinc-200 bg-white">

            {renderIcon(Icon)}
          </span>
          <span className="text-sm font-medium text-zinc-900">{label}</span>
        </span>

        <svg
          className={`h-4 w-4 text-zinc-600 transition-transform ${open ? "rotate-180" : ""
            }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        id={contentId}
        className={[
          "overflow-hidden transition-[max-height,opacity] duration-200",
          open ? "max-h-[720px] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="mt-3 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
          {children}
        </div>
      </div>
    </div>
  );
}