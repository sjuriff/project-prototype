import { CardSim, TabletSmartphone, BadgeQuestionMark, HeartHandshake, ChevronRight, Smartphone } from "lucide-react";
import Image from "next/image";
import img from '@/public/images/beam-suitcase.jpg'
import PrimaryButton from "./buttons/primary-button";


const FaqCard = ({ question, index }: { question: string, index: number }) => {
  return (
    <div className={`flex pl-4 border-b rounded-l-2xl hover:border-b-transparent shadow-md hover:cursor-pointer bg-[#eff2f6]  hover:cursor-pointer group hover:scale-y-105 ${index % 2 === 0 ? "hover:bg-secondary/50" : "hover:bg-primary/50"} ${index % 2 === 0 ? "hover:-translate-x-2" : "hover:translate-x-2"} transition-all pr-4   rounded-r-full py-4 lg:w-full 2xl:w-1/2  items-center justify-between  gap-4`}>
      <h2 className="text-xl font-heading text-primary-text">{question}</h2>
      <ChevronRight className="w-6 h-6" />
    </div>
  )
}


export default function Faq() {

  const faqs = [
    'Hvordan installerer jeg Beam eSIM på iOS?',
    'Hvordan installerer jeg Beam eSIM på Android?',
    'Kan jeg fortsatt ringe og sende SMS med mitt vanlige telefonnummer?',
    'Hvordan aktiverer jeg Beam eSIM?',
    'Hvordan fungerer eSIM?'
  ]

  return (
    <div className=" z-10 relative min-h-[50vh]  w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex mb-8 flex-col gap-4 items-center">
        <span className="h-16 w-16 bg-primary flex items-center justify-center rounded-full">
          <BadgeQuestionMark className="w-8 h-8" />
        </span>

        <h1 className="text-4xl text-center font-heading text-tertiary-heading">Frequently Asked Questions</h1>
      </div>
      <div className="flex lg:gap-8 2xl:gap-0 h-full">
        <div className="w-1/2 flex h-80 2xl:h-90  items-center justify-center   text-secondary-text">
          <div className="w-full z-10 shadow-lg h-full flex flex-col gap-4 rounded-2xl p-8 bg-secondary 2xl:w-1/2">
            <CardSim className=" w-10 h-10" />
            <h1 className="text-4xl font-heading ">Hva er eSIM?</h1>
            <p className="font-body text-balance leading-relaxed">En eSIM (innebygd SIM) er et digitalt SIM-kort som er innebygd direkte i enheten din, som en smarttelefon eller smartklokke. I stedet for et fysisk, flyttbart plastkort, fungerer en eSIM digitalt, og du kan aktivere et mobilabonnement ved å laste ned en profil fra din mobiloperatør.</p>
          </div>
        </div>
        <div className="w-1/2  h-80 2xl:h-90 flex  items-center justify-center ">
          <div className="w-full z-10 shadow-lg flex h-full flex-col gap-4 rounded-2xl p-8 bg-primary 2xl:w-1/2">
            <TabletSmartphone className=" w-10 h-10" />
            <h1 className="text-4xl font-heading text-primary-text">Fungerer eSIM på min telefon?</h1>
            <p className="font-body text-balance leading-relaxed">For at eSIM skal fungere må telefonen din støtte eSIM-teknologi. De fleste nyere smarttelefoner fra Apple, Samsung og Google har støtte. Du kan vanligvis se dette i telefonens innstillinger eller på produsentens nettside. Kontakt også mobiloperatøren din for å sikre at de tilbyr eSIM til din modell.</p>
          </div>
        </div>
      </div>
      <div className="flex   mt-16 flex-col gap-4 items-center">
        {faqs.map((faq, index) => (
          <FaqCard key={index} index={index} question={faq} />
        ))}
      </div>
      <div className="w-full mt-16 flex items-center justify-center">
        <PrimaryButton Icon={HeartHandshake} >
          Gå til support
        </PrimaryButton>
      </div>
    </div>
  );
}