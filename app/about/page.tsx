import Image from "next/image";
import founderImage from '@/public/images/fredrick.png';
import { Lightbulb } from "lucide-react";
export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-surface text-primary-text">
      {/* Hero banner */}
      <div className="bg-secondary px-6 pt-24 pb-40">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-secondary-text font-heading mb-4">
            Om Beam
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-primary-text font-heading leading-tight">
            Rimelig og trygg mobildata på reise
          </h1>
        </div>
      </div>

      {/* Content pulls up into the hero */}
      <div className=" flex flex-col items-center 2xl:px-20 fhd:px-68   -mt-24  space-y-0">
        {/* Section 1: About Beam */}

        <section className="relative overflow-hidden max-w-6xl z-10 rounded-t-2xl bg-white shadow-xl p-8 sm:p-12 space-y-6">
          <div className="h-20 w-20 md:h-34 md:w-34 -top-4 -right-6 absolute md:-top-10 z-0 md:-right-10 bg-primary rounded-full">
            <Lightbulb className="absolute left-4 md:left-10 w-8 h-8 top-8 md:top-1/2 " />
          </div>
          <div className="space-y-4 text-pretty z-10 relative text-base sm:text-lg leading-relaxed text-primary-text font-body">
            <p>
              Beam er bygget på én enkel idé: å gjøre mobildata på reise billigere, tryggere og mer forutsigbar.
            </p>
            <p className="text-pretty">
              Ideen oppstod etter en familietur til Japan. Turen var fantastisk – mobilregningen etterpå var det ikke. Roaming var fortsatt dyrt, komplisert og vanskelig å forstå. Det ble startskuddet for Beam.
            </p>
            <p className="text-pretty">
              Med Beam eSIM kan reisende komme på nett i løpet av få minutter – uten fysisk SIM-kort, ingen skjulte kostnader eller uforutsigbare roamingregninger. Målet vårt er enkelt: å gi reisende et bedre produkt til en langt bedre pris.
            </p>
            <p className="text-pretty">
              Beam retter seg både mot enkeltpersoner som reiser (B2C) og bedrifter (B2B), som ønsker å tilby eSIM til sine kunder gjennom partnerskap.
            </p>
          </div>
        </section>

        {/* Section 2: About the Founder – overlaps section 1 */}
        <section className="relative z-20 2xl:rounded-t-3xl fhd:rounded-3xl fhd:w-3/4   overflow-hidden w-full bg-secondary   ">
          <div className="flex flex-col px-8 py-16  items-center sm:flex-row sm:items-start gap-8">
            <div className="absolute md:p-16 -top-8 -left-8 rounded-full flex items-center justify-center h-42 w-42  md:w-58 md:h-58 bg-primary">
              <Image
                src={founderImage}
                alt="Fredrick Øksne, grunnlegger av Beam"
                fill
                className=" rounded-full object-cover p-4 md:p-6  shadow-xl "
              />
            </div>
            <div className="space-y-4  md:ml-48 ">
              <h2 className="text-2xl ml-28 md:ml-0 sm:text-3xl lg:text-4xl  tracking-tight text-primary-text font-heading">
                Om grunnleggeren
              </h2>
              <div className="space-y-4 mt-12 md:mt-0 md:pr-28 text-base sm:text-base  leading-relaxed text-pretty text-primary-text font-body">
                <p>
                  Beam er startet av Fredrick Øksne, som har mer enn 20 års erfaring fra telecom-bransjen og over 6 år fra SaaS (Software as a Service – nettbaserte abonnementstjenester). Gjennom karrieren har han jobbet med teknologi og tjenester brukt av millioner av kunder, og har opparbeidet solid erfaring med å skalere og forbedre digitale produkter.
                </p>
                <p className="text-pretty">
                  I 2026 bestemte han seg for å starte noe nytt, og bruke erfaringen fra mobilbransjen og utvikling av nettbaserte tjenester til å lage et mer brukervennlig produkt for reisende. Resultatet er Beam: en enklere og mer moderne måte å bruke mobildata på når du reiser.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};