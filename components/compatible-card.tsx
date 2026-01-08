import { Smartphone } from "lucide-react";

export default function CompitableCard() {
  return (
    <section className="flex items-center justify-center py-16">
      <div className="bg-[#f8fafc] flex flex-col gap-4 p-16 shadow-md rounded-lg hover:bg-[#d6e3ff] transition-colors text-left group">
        <div className="flex gap-2 items-center ">
          <Smartphone className="w-10 h-10 text-tertiary   group-hover:scale-110 transition-transform" />

          <h3 className="font-heading text-xl">Sjekk om mobilen din støtter eSIM</h3>
        </div>

        <p className="font-body text-sm text-primary-text ">
          Tast inn *#06# (som om du skulle ringt til den koden). Da får du opp bl.a. IMEI-nummer og annet. Får du en linje som heter eID, betyr det at mobilen støtter eSIM.</p>
      </div>
    </section>
  );
}