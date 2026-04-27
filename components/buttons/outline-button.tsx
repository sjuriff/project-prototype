"use client";

import type { ButtonHTMLAttributes } from "react";

type OutlineButtonVariant = "surface" | "primary" | "secondary" | "tertiary";

type OutlineButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: OutlineButtonVariant;
};

export function OutlineButton({
  variant = "surface",
  className = "",
  ...props
}: OutlineButtonProps) {
  const base =
    "py-3 px-6 text-base font-heading rounded-lg border bg-transparent transition-colors";

  const variants: Record<OutlineButtonVariant, string> = {
    surface: "border-tertiary text-tertiary hover:bg-tertiary/10",
    primary: "border-primary-text text-primary-text hover:bg-primary-text/10",
    secondary: "border-secondary-text text-secondary-text hover:bg-secondary-text/10",
    tertiary: "border-tertiary-text text-tertiary-text hover:bg-tertiary-text/10",
  };

  return (
    <button
      className={`${base} hover:cursor-pointer ${variants[variant]} ${className}`}
      {...props}
    />
  );
}