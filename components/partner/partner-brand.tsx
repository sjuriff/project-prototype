import { Check, Globe, Palette, Rocket, Wifi } from "lucide-react";
import PrimaryButton  from "@/components/buttons/primary-button";
import GhostButton from "@/components/buttons/ghost-button-secondary";


interface PartnerCoBrandSectionProps {
  partnerName?: string;
  partnerLogoUrl?: string;
  onCtaClick?: () => void;
}

const benefits = [
  {
    icon: Palette,
    title: "Ditt brand, vår teknologi",
    description:
      "Selg Beam eSIM under din egen merkevare – farger, logo og tone-of-voice tilpasses din identitet.",
  },
  {
    icon: Globe,
    title: "Global dekning",
    description:
      "Tilby dine kunder data i 190+ land rett etter kjøp – ingen fysisk SIM, ingen venting.",
  },
  {
    icon: Rocket,
    title: "Rask lansering",
    description:
      "Kom i gang på dager, ikke måneder. Vi tar oss av infrastruktur, support og leveranse.",
  },
  {
    icon: Wifi,
    title: "Løpende inntekter",
    description:
      "Få en attraktiv revenue share på hvert salg og påfyll dine kunder gjør gjennom din kanal.",
  },
];

const included = [
  "White-label nettbutikk eller API-integrasjon",
  "Co-branded eSIM-profil og aktiveringsflyt",
  "Sanntidsdashboard med salg og bruk",
  "Dedikert partner manager",
];

export default function PartnerCoBrandSection({
  partnerName = "ditt brand",
  partnerLogoUrl,
  onCtaClick,
}: PartnerCoBrandSectionProps) {
  return (
    <section className="w-full bg-secondary-text py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
       
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-nowrap text-secondary font-heading sm:text-5xl">
            Selg beam eSIM under{" "}
            <span className="text-primary">{partnerName}</span>
          </h2>
          <p className="mt-4 text-pretty text-base text-tertiary-text font-body sm:text-lg">
            Gi kundene dine sømløs mobildata i hele verden – levert med din
            merkevare i front, og vår infrastruktur i ryggen.
          </p>
        </div>

    

        {/* Benefits grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="border-border bg-tertiary rounded-3xl p-6 transition-colors font-heading text-tertiary-text hover:border-primary/40"
            >
              <div className="flex h-15 w-15 items-center justify-center rounded-full bg-secondary-text text-primary">
                <b.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                {b.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-secondary font-body">
                {b.description}
              </p>
            </div>
          ))}
        </div>

        {/* What's included + CTA */}
        <div className="mt-14 grid items-center gap-8 rounded-2xl border border-border bg-tertiary p-8 sm:p-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-tertiary-text font-heading">
              Dette får du som partner
            </h3>
            <ul className="mt-5 space-y-3">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-secondary font-body"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <p className="text-sm text-secondary font-body md:text-right">
              Kom i gang med beam eSIM-partnerskap.
            </p>
            <div className="flex flex-wrap gap-3">
              <PrimaryButton>
                Bli partner
              </PrimaryButton>
              <GhostButton >
                Book demo
              </GhostButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

