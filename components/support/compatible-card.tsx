import { Smartphone } from "lucide-react";

export default function CompitableCard() {
  return (
    <section className="flex items-center justify-center px-4 md:px-0 py-16">
      <div className="bg-tertiary flex flex-col gap-4 p-16 shadow-md rounded-3xl   text-left group">
        <div className="flex gap-2 items-center ">
          <Smartphone className="w-10 h-10 text-primary   group-hover:scale-110 transition-transform" />

          <h3 className="font-heading text-tertiary-text text-xl">Sjekk om mobilen din støtter eSIM</h3>
        </div>

        <p className="font-body text-sm text-secondary ">
          Tast inn *#06# (som om du skulle ringt til den koden). Da får du opp bl.a. IMEI-nummer og annet. Får du en linje som heter eID, betyr det at mobilen støtter eSIM.</p>
      </div>
    </section>
  );
}