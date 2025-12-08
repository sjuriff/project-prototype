import { Globe, Zap, Shield, Wifi } from "lucide-react";

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
        <h2
          className="text-center text-lg mb-12 font-heading text-tertiary-heading"
         
        >
          Fordeler med eSIM
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-8 transition-transform hover:-translate-y-1"
            >
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4"
                style={{ backgroundColor: 'var(--color-secondary)' }}
              >
                <benefit.icon className="w-7 h-7" style={{ color: 'var(--color-tertiary)' }} />
              </div>

              <h3
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-primary-text)'
                }}
              >
                {benefit.title}
              </h3>

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
