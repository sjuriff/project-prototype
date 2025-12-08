import { Download, Scan, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Download,
    number: "01",
    title: "Kjøp en plan",
    description: "Velg en eSIM-plan som passer dine behov fra din operatør eller leverandør."
  },
  {
    icon: Scan,
    number: "02",
    title: "Skann QR-kode",
    description: "Motta en QR-kode og skann den med enheten for å laste ned eSIM-profilen."
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Ta i bruk",
    description: "Aktiver din nye eSIM og du er klar til å koble deg på med én gang."
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 shadow-md px-6 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-center text-lg mb-4"
          style={{
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-tertiary-heading)'
          }}
        >
          Slik fungerer det
        </h2>

        <p
          className="text-center max-w-2xl mx-auto mb-16"
          style={{
            fontFamily: 'var(--font-body)',
            color: 'var(--color-secondary-text)'
          }}
        >
          Å komme i gang med eSIM er enkelt og tar bare noen minutter.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div
                className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <step.icon className="w-10 h-10 text-primary-text"  />
              </div>

              <div
                className="mb-3  font-heading text-secondary-text"
              >
                {step.number}
              </div>

              <h3
                className="mb-3 text-lg"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-primary-text)'
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--color-secondary-text)'
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
