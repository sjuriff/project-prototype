import { Download, Scan, CheckCircle, QrCode } from "lucide-react";

const steps = [
  {
    icon: Download,
    number: "01",
    title: "Kjøp eSIM",
    description: "Velg land og kjøp datapakke. Etter betaling får du en QR-kode."
  },
  {
    icon: QrCode,
    number: "02",
    title: "Legg til eSIM",
    description: "Gå til mobilinnstillinger, velg «Legg til eSIM» og skann QR-koden."
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Aktiver og surf i vei",
    description: "Aktiver eSIM og velg det som hovedlinje for mobildata. Du er på nett med en gang du lander!"
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 shadow-md px-6 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-center font-heading text-5xl font-heading mb-4"
         
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
          Det tar kun 2 minutter å komme i gang med eSIM
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div
                className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <step.icon className="w-10 h-10 text-primary-text" />
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
