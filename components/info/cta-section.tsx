'use client'

import { ArrowRight, Globe2, Zap } from "lucide-react";
import PrimaryButton from "../buttons/primary-button";
import Link from "next/link";
import paths from "@/paths";

export default function CTASection() {
  return (
    <section className="py-16 px-6 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div
          className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
          style={{ backgroundColor: 'var(--color-tertiary)' }}
        >
          {/* Decorative elements */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
            style={{ backgroundColor: 'var(--color-primary)' }}
          />


          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div
                className="flex items-center justify-center w-20 h-20 rounded-full flex-shrink-0"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <Globe2 className="w-10 h-10" style={{ color: 'var(--color-tertiary)' }} />
              </div>

              <div className="text-center md:text-left flex-1">
                <h2
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-tertiary-text)'
                  }}
                >
                  Kjøp eSIM og kom i gang
                </h2>
                <p
                  className="max-w-2xl"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-tertiary-text)',
                    opacity: 0.9
                  }}
                >
                  Den enkleste måten å bruke mobildata når du reiser
                </p>
              </div>
            </div>

            <div className=" px-48">
              <Link className=" h-none flex items-center justify-center" href={paths.produkter}>

                <PrimaryButton Icon={ArrowRight} iconRight fullWidth >
                  Se alle destinasjoner
                </PrimaryButton>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
