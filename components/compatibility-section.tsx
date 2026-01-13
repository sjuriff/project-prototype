import { Smartphone, Tablet, Watch, Laptop } from "lucide-react";

const deviceTypes = [
  {
    icon: Smartphone,
    name: "Smarttelefoner",
    examples: "iPhone XR og nyere, Samsung Galaxy S20+, Google Pixel 3+"
  },
  {
    icon: Tablet,
    name: "Nettbrett",
    examples: "iPad Pro (2018+), iPad Air (2019+), iPad (2019+), iPad mini (2019+)"
  },
  {
    icon: Watch,
    name: "Smartklokker",
    examples: "Apple Watch Series 3+, Samsung Galaxy Watch 4+"
  },
  {
    icon: Laptop,
    name: "Laptoper",
    examples: "Surface Pro X, Surface Go 2+, utvalgte modeller fra Lenovo og HP"
  }
];

export default function CompatibilitySection() {
  return (
    <section
      className="py-16 px-6"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-center mb-4 font-heading text-3xl text-primary-text"

        >
          Støttede enheter
        </h2>

        <p
          className="text-center max-w-2xl mx-auto mb-12"
          style={{
            fontFamily: 'var(--font-body)',
            color: 'var(--color-secondary-text)'
          }}
        >
          eSIM-teknologi støttes på et bredt utvalg av moderne enheter
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deviceTypes.map((device, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden relative shadow-md rounded-2xl p-6 text-center"
            >

              <span className="bg-primary flex  items-center justify-center z-0  h-16 w-16 rounded-full absolute -top-4  -left-4">
                 <device.icon className="w-8 absolute top-5 left-5   h-8" style={{ color: 'var(--color-tertiary)' }} />

              </span>

                
               {/*    <device.icon className="w-8 absolute top-2 left-4  h-8" style={{ color: 'var(--color-tertiary)' }} /> */}
              
               

            
               

                <h3
                  className=" text-base z-10 font-heading "
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-primary-text)'
                  }}
                >
                  {device.name}
                </h3>
             

              <p
                className="leading-relaxed z-10 text-xs"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--color-secondary-text)',
                }}
              >
                {device.examples}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-8 p-6 rounded-xl text-center shadow-md bg-white"

        >
          <p className="font-body text-primary-text ">

            Sjekk enhetsinnstillingene under Mobilnett for å bekrefte om enheten støtter eSIM
          </p>
        </div>
      </div>
    </section>
  );
}
