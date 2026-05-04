import { Globe, Zap, Shield, Wifi, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Umiddelbar tilkobling",
    description: "Aktiver planen din på få minutter uten å vente på et fysisk SIM-kort."
  },
  {
    icon: Zap,
    title: "Flere planer",
    description: "Lagre flere eSIM-profiler på enheten og bytt mellom dem enkelt."
  },
  {
    icon: Shield,
    title: "Mer sikkert",
    description: "Kan ikke fjernes fysisk, noe som gjør enheten din mer beskyttet mot tyveri."
  },
  {
    icon: Wifi,
    title: "Perfekt for reise",
    description: "Legg til lokale dataplaner når du reiser uten å bytte fysisk SIM-kort."
  }
];

export default function BenefitsSection() {
  return (
    <section
      className="py-16 px-6 bg-surface"

    >
      <div className="max-w-6xl mx-auto">
        <div className="relative  w-fit mb-12 mx-auto">
          {/* <div className="absolute z-0 -top-9 md:-top-11 -right-8 items-center flex justify-center gap-3 p-4 bg-primary rounded-full">
            <Sparkles className="md:w-8 w-6 h-6 md:h-8 z-0 text-secondary-foreground" />
          </div> */}
          <h2
            className="text-center relative z-10 [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-4xl md:text-5xl font-heading text-primary-text"

          >
            Fordeler med eSIM
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-8 transition-transform hover:-translate-y-1"

            >
              <div className="flex items-center gap-4">

                <div
                  className="inline-flex bg-primary items-center justify-center w-14 h-14 rounded-full mb-4"

                >
                  <benefit.icon className="w-7 h-7 text-primary-text" />
                </div>

                <h3
                  className="mb-3 text-xl"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-primary-text)'
                  }}
                >
                  {benefit.title}
                </h3>
              </div>

              <p
                className="text-sm"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--color-secondary-text)'
                }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
