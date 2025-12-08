import { ArrowRight, Globe2, Zap } from "lucide-react";

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                className="px-8 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <span
                className="font-heading text-primary-text"
    
                >
                  Se planer
                </span>
                <ArrowRight
                  className="w-5 h-5 text-primary-text transition-transform group-hover:translate-x-1"
                />
              </button>

              <button
                className="px-8 py-4 border-primary text-tertiary-text rounded-xl border-2 transition-all hover:scale-105 flex items-center justify-center gap-2"
               
              >
                <Zap className="w-5 h-5 text-primary" />
                <span style={{ fontFamily: 'var(--font-heading)' }}>
                  Hurtigoppsett
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
