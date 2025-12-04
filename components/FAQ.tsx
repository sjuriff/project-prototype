import { CardSim, TabletSmartphone, BadgeQuestionMark } from "lucide-react";
import Image from "next/image";
import img from '@/public/images/beam-suitcase.jpg'


export default function Faq() {
  return (
    <div className=" z-10 relative min-h-[50vh]  w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex mb-8 flex-col gap-4 items-center">
        <span className="h-16 w-16 bg-primary flex items-center justify-center rounded-full">
          <BadgeQuestionMark className="w-8 h-8" />
        </span>

        <h1 className="text-4xl text-center font-heading text-tertiary-heading">Frequently Asked Questions</h1>
      </div>
      <div className="flex lg:gap-8 2xl:gap-0 h-full">
        <div className="w-1/2 flex h-80  items-center justify-center   text-secondary-text">
          <div className="w-full z-10 shadow-lg h-full flex flex-col gap-4 rounded-2xl p-8 bg-secondary 2xl:w-1/2">
            <CardSim className=" w-10 h-10" />
            <h1 className="text-4xl font-heading ">Hva er eSIM?</h1>
            <p className="font-body text-balance leading-relaxed">En eSIM (innebygd SIM) er et digitalt SIM-kort som er innebygd direkte i enheten din, som en smarttelefon eller smartklokke. I stedet for et fysisk, flyttbart plastkort, fungerer en eSIM digitalt, og du kan aktivere et mobilabonnement ved å laste ned en profil fra din mobiloperatør.</p>
          </div>
        </div>
        <div className="w-1/2  h-80 flex  items-center justify-center ">
          <div className="w-full z-10 shadow-lg flex h-full flex-col gap-4 rounded-2xl p-8 bg-primary 2xl:w-1/2">
            <TabletSmartphone className=" w-10 h-10" />
            <h1 className="text-4xl font-heading text-primary-text">Fungerer eSIM på min telefon?</h1>
            <p className="font-body text-balance leading-relaxed">For at eSIM skal fungere må telefonen din støtte eSIM-teknologi. De fleste nyere smarttelefoner fra Apple, Samsung og Google har støtte. Du kan vanligvis se dette i telefonens innstillinger eller på produsentens nettside. Kontakt også mobiloperatøren din for å sikre at de tilbyr eSIM til din modell.</p>
          </div>
        </div>
      </div>
    </div>
  );
}