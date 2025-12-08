import { Smartphone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-16 px-6 bg-secondary md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="inline-flex bg-primary items-center justify-center w-20 h-20 rounded-full mb-8"
        >
          <Smartphone className="w-10 h-10 text-primary-text"  />
        </div>

        <h1
          className="mb-6 font-heading text-lg text-primary-text "

        >
          Hva er eSIM?
        </h1>

        <p
          className="max-w-2xl text-secondary-text text-pretty font-body mx-auto leading-relaxed"
         
        >
          En eSIM (innebygd SIM) er et digitalt SIM-kort som er innebygd direkte i enheten din, som en smarttelefon eller smartklokke. I stedet for et fysisk, flyttbart plastkort, fungerer en eSIM digitalt, og du kan aktivere et mobilabonnement ved å laste ned en profil fra din mobiloperatør.
        </p>
      </div>
    </section>
  );
}
