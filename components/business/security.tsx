import { ShieldCheck, Server, BadgeCheck, Cpu } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Sikker eSIM-aktivering, levert av verdensledende teknologi",
    body: "beam mobile er bygget på IDEMIAs plattform — industristandarden for fjernprovisjonering av eSIM. Operatører og bedrifter får pålitelige aktiveringsprosesser uten kompromisser på sikkerhet.",
  },
  {
    icon: Server,
    title: "Full datakontroll — alt hostet i Europa",
    body: "Sikkerhet og aktivering kjøres utelukkende på europeisk infrastruktur med multi-region arkitektur. Du bestemmer hvor dataene dine lagres — og du kan stole på at de blir der.",
  },
  {
    icon: BadgeCheck,
    title: "Ferdig compliant — ingen ekstraarbeid",
    body: "Løsningen er utviklet for å møte EUs regulatoriske krav og operatørenes sikkerhetsstandarder fra dag én. Ingen kompliserte integrasjoner. Ingen manuell compliance-håndtering.",
  },
  {
    icon: Cpu,
    title: "Fremtidssikret fra dag én",
    body: "Med AI-basert svindeldeteksjon, DDoS-beskyttelse og post-kvantum-kryptografi er beam mobile bygget for det som kommer — ikke bare det som eksisterer i dag. IDEMIA-partnerskapet plasserer beam i premiumsegmentet av eSIM-industrien.",
  },
];

export default function SecuritySection() {
  return (
    <section className="relative overflow-hidden bg-background py-5 sm:py-32">
  
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
         
          <h2 className="mt-5 [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-balance text-4xl text-secondary-text  font-heading tracking-tight text-foreground sm:text-5xl">
            Sikkerhet i verdensklasse — bygget for bedrifter
          </h2>
          <p className="mt-4 text-balance text-base leading-relaxed text-secondary-text font-body ">
            Vår business portal er forankret i IDEMIAs eSIM-plattform, europeisk
            infrastruktur og fremtidsrettet kryptografi — slik at du kan
            aktivere, skalere og stole på løsningen fra dag én.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl  bg-tertiary p-7 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
             
              <div className="flex h-11 w-11 items-center justify-center rounded-full  bg-secondary text-tertiary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold font-heading text-tertiary-text tracking-tight text-card-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed font-body text-secondary">
                {body}
              </p>
            </article>
          ))}
        </div>

       
      </div>
    </section>
  );
}


