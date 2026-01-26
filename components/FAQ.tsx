'use client'

import { CardSim, TabletSmartphone, BadgeQuestionMark, HeartHandshake, ChevronRight, ChevronDown, Smartphone } from "lucide-react";
import Image from "next/image";
import img from '@/public/images/beam-suitcase.jpg'
import PrimaryButton from "./buttons/primary-button";
import { useState } from "react";
import Link from "next/link";
import paths from "@/paths";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);


const FaqCard = ({ question, index }: { question: string, index: number }) => {
  return (
    <div className={`flex pl-4 border-b rounded-l-2xl hover:border-b-transparent shadow-md hover:cursor-pointer bg-[#eff2f6]  hover:cursor-pointer group hover:scale-y-105 ${index % 2 === 0 ? "hover:bg-secondary/50" : "hover:bg-primary/50"} ${index % 2 === 0 ? "hover:-translate-x-2" : "hover:translate-x-2"} transition-all pr-4   rounded-r-full py-4 lg:w-full 2xl:w-1/2  items-center justify-between  gap-4`}>
      <h2 className="text-xl font-heading text-primary-text">{question}</h2>
      <ChevronRight className="w-6 h-6" />
    </div>
  )
}


export default function Faq() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [

    {
      question: 'Hvordan installerer jeg Beam eSIM på iOS?',
      answer: 'Åpne e-posten du fikk fra Beam og trykk på aktiveringslenken. Velg Installer eSIM, og bekreft med Face ID eller passkode. Når installasjonen er ferdig, sjekker du at eSIM er aktivert i Innstillinger → Mobilnett. Da er alt klart!',
    },
    {
      question: 'Hvordan installerer jeg Beam eSIM på Android?',
      answer: 'Åpne e-posten du fikk fra Beam og trykk på aktiveringslenken. Velg Legg til eSIM når Android spør, og følg instruksjonene på skjermen. Når installasjonen er fullført, sjekker du at eSIM er aktivert under Innstillinger → Nettverk og Internett → SIM-kort. Da er du klar!',
    },
    {
      question: 'Kan jeg fortsatt ringe og sende SMS med mitt vanlige telefonnummer?',
      answer: 'Ja, Beam eSIM påvirker ikke ditt eksisterende telefonnummer. Du kan fortsatt ringe og sende SMS som vanlig, samtidig som du bruker data fra Beam.',
    },
    {
      question: 'Hvordan aktiverer jeg Beam eSIM?',
      answer: 'Åpne aktiveringslenken du fikk fra Beam, og installer eSIM-en på telefonen. Når installasjonen er fullført, sørger du for at Beam er valgt som aktiv datatilkobling i mobilinnstillingene. Etter noen sekunder skal mobildata være i gang',
    },
    {
      question: 'Hvordan fungerer eSIM?',
      answer: 'Et eSIM er et digitalt SIM-kort som ligger inne i telefonen. I stedet for å sette inn et fysisk SIM, aktiverer du abonnementet ditt direkte i mobilinnstillingene. Telefonen kobler seg deretter til mobilnettet på samme måte som med et vanlig SIM-kort',
    },

  ];

  useGSAP(() => {
    gsap.from("#card-left", {
      scrollTrigger: {
        trigger: "#card-left",
        start: "-50% center",
        end: "bottom center",
        scrub: true,
      },
      x: '-110%',
      y: -100,
    
      
    })
    gsap.from("#card-right", {
      scrollTrigger: {
        trigger: "#card-right",
        start: "-50% center",
        end: "bottom center",
        scrub: true,
        markers: true
      },
      x: '110%',
      y: -100,
      
    })
  }, [])

  return (
    <div className=" z-10 relative min-h-[50vh]  w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex mb-8 flex-col gap-4 items-center">
        <span className="h-16 w-16 bg-primary flex items-center justify-center rounded-full">
          <BadgeQuestionMark className="w-8 h-8" />
        </span>

        <h1 className="text-5xl text-center font-heading text-primary-text">Frequently Asked Questions</h1>
      </div>
      <div className="flex lg:gap-8 2xl:gap-0 h-full">
        <div id="card-left" className="w-1/2 flex h-85 2xl:h-90  items-center justify-center   text-secondary-text">
          <div className="w-full z-10 shadow-lg h-full flex flex-col gap-4 rounded-2xl p-8 bg-secondary 2xl:w-1/2">
            <CardSim className=" w-10 h-10" />
            <h1 className="text-4xl font-heading ">Hva er eSIM?</h1>
            <p className="font-body text-balance leading-relaxed">En eSIM (innebygd SIM) er et digitalt SIM-kort som er innebygd direkte i enheten din, som en smarttelefon eller smartklokke. I stedet for et fysisk, flyttbart plastkort, fungerer en eSIM digitalt, og du kan aktivere et mobilabonnement ved å laste ned en profil fra din mobiloperatør.</p>
          </div>
        </div>
        <div id="card-right" className="w-1/2  h-85 2xl:h-90 flex  items-center justify-center ">
          <div className="w-full z-10 shadow-lg flex h-full flex-col gap-4 rounded-2xl p-8 bg-primary 2xl:w-1/2">
            <TabletSmartphone className=" w-10 h-10" />
            <h1 className="text-4xl font-heading text-primary-text">Fungerer eSIM på min telefon?</h1>
            <p className="font-body text-balance leading-relaxed">For at eSIM skal fungere må telefonen din støtte eSIM-teknologi. De fleste nyere smarttelefoner fra Apple, Samsung og Google har støtte. Du kan vanligvis se dette i telefonens innstillinger eller på produsentens nettside. Kontakt også mobiloperatøren din for å sikre at de tilbyr eSIM til din modell.</p>
            <p className="font-body text-balance leading-relaxed text-xs">Tast inn *#06# (som om du skulle ringt til den koden). Da får du opp bl.a. IMEI-nummer og annet. Får du en linje som heter eID, betyr det at mobilen støtter eSIM</p>
          </div>
        </div>
      </div>
      <div className="flex   mt-16 flex-col gap-4 items-center">
        <div className="space-y-3 2xl:w-1/2 w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-[#e5e7eb] rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#f8fafc] transition-colors"
              >
                <span className="pr-4 text-[#1d1d1d]">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#4a4a4a] flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-5 bg-[#f8fafc] border-t border-[#e5e7eb]">
                  <p className="text-[#4a4a4a] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-16 flex items-center justify-center">
        <Link href={paths.support}>
          <PrimaryButton Icon={HeartHandshake} >
            Gå til support
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
}