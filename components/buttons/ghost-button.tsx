import { type ButtonHTMLAttributes } from "react";

interface GhostButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function GhostButton({ className = "", type = "button", children, ...props }: GhostButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center font-heading rounded-lg px-6 py-3  text-base text-primary-text hover:text-primary-text bg-transparent hover:cursor-pointer transition-color duration-300 ease-out hover:bg-tertiary/20 hover:text-accent-foreground hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}