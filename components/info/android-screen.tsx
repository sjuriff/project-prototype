import { ArrowLeft, ChevronRight, Wifi, Radio, SignalHigh,   Info, Pencil, CardSim, Check, Smartphone, User, Bluetooth, Plane, Flashlight, Sun, Volume2,
  BellOff, RotateCw, Cast } from 'lucide-react';
import Image from 'next/image';
import qrCode from '@/public/images/qr-code.png'


export function PhoneFrame({ children, step, title, description }: { children: React.ReactNode; step: number; title: string; description: string }) {

  const isQrCode = step === 1
  const isLastStep = step === 9
  return (
    <div className="flex flex-col h-full   items-center">
   

      <div className={` ${isQrCode ? "bg-transparent shadow-none" : "bg-gray-800 shadow-2xl"} rounded-[40px] p-3 `}>
        <div className={` ${isQrCode ? "shadow-none bg-transparent" : "shadow-lg bg-white"} rounded-[32px] overflow-hidden w-[270px]  md:w-[320px]`}>
          {/* Status Bar */}
          <div className={`${isQrCode ? "opacity-0" : "opacity-100"}  ${isLastStep ? "bg-black/50" : "bg-white"}   px-6 pt-3 pb-2 flex items-center justify-between`}>
            <span className="text-sm">9:41</span>
            <div className="flex items-center gap-1">
              <SignalHigh className="w-4 h-4" />
              <Wifi className="w-4 h-4" />
              <div className="text-sm">100%</div>
            </div>
          </div>

          {/* Screen Content */}
          <div className={` ${isQrCode ? "bg-transparent" : "bg-white"} h-[500px]  md:h-[600px] overflow-hidden`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Step1() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      {/* Header */}
      <div className='mb-18 relative'>
        <div className='absolute top-1/2  left-1/2 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 h-1/3 w-1/3 bg-tertiary '>
          <div className="flex flex-col  items-center justify-center">
            <h1 className={`text-3xl font-logo text-primary [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]`}>beam</h1>
            <div className="flex   items-center gap-1">
              <div className={`w-2  bg-primary rounded-l-lg h-1 `}></div>
              <div className={`w-2  bg-primary h-1  `}></div>
              <div className={`w-12 h-1 bg-gradient-to-r from-primary to-transparent `} ></div>
            </div>

          </div>
        </div>

        <Image alt="qr code" width={300} height={300} src={qrCode} />
      </div>

    </div>
  );
}



export function Step2() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="text-white px-6 py-4 flex flex-col justify-center font-bold items-center gap-4">
        <CardSim className="w-6 h-6 text-tertiary" />
        <h1 className="md:text-lg text-base text-primary-text text-center font-heading">
          Vil du legge til beam eSIM mobile?
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1  px-6 pb-6 flex flex-col">
        <p className="md:text-sm text-xs text-secondary-text text-center font-body mb-6">
          Dette kobler telefonen til beam-mobilnettet
        </p>






        {/* Navigasjonsknapper */}
        <div className="mt-auto flex justify-end pt-6">

          <button className="bg-tertiary font-heading text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Legg til
          </button>
        </div>
      </div>
    </div>
  );
}

export function Step3() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="text-white px-6 py-4 flex flex-col justify-center font-bold items-center gap-4">
        <CardSim className="w-6 h-6 text-tertiary" />
        <h1 className="md:text-lg text-base text-primary-text text-center font-heading">
          Legger til beam mobile-eSIM...
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 gap-34  px-6 pb-6 flex flex-col">
        <p className="md:text-sm text-xs text-secondary-text text-center font-body mb-6">
          Dette kan ta noen minutter
        </p>

        <div className="flex items-center flex-col gap-2">
          <div className="h-2 w-full flex rounded-full bg-gray-200">
            <span className="w-3/4 h-full rounded-full bg-tertiary"></span>
          </div>
          <p className="md:text-sm text-xs text-secondary-text text-center font-body">75%</p>
        </div>



        {/* Navigasjonsknapper */}
        <div className="mt-auto flex justify-end pt-6">


        </div>
      </div>
    </div>
  );
}

export function Step4() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="text-white px-6 py-4 flex justify-center font-bold items-center gap-4">
        <h1 className="md:text-lg text-base text-primary-text text-center font-heading">
          Prioriter SIM for samtaler
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gray-50 px-6 py-6 flex flex-col">
        <p className="md:text-sm text-xs text-secondary-text text-center font-body mb-6">
          Velg et standard-SIM-kort for nye samtaler.
        </p>

        {/* Primær SIM - valgt */}
        <div className="w-full rounded-full p-4 mb-4 flex items-center gap-4 bg-white border-2 border-tertiary shadow-sm">

          <div className="flex-1 flex items-center justify-between">
            <div className="text-left">
              <span className="block text-primary-text font-body text-sm font-medium md:text-base">
                Primær SIM
              </span>
            </div>
            <div className="w-6 h-6 rounded-full bg-tertiary flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Beam eSIM - ikke valgt */}
        <div className="w-full rounded-full p-4 flex items-center gap-4 bg-gray-100 border-2 border-transparent">

          <div className="flex-1 flex items-center justify-between">
            <div className="text-left">
              <span className="block text-primary-text text-sm md:text-base font-body font-medium">
                beam eSIM
              </span>
            </div>
          </div>
        </div>

        {/* Navigasjonsknapper */}
        <div className="mt-auto flex justify-between pt-6">
          <button className="flex items-center gap-2 px-4 py-3 text-sm md:text-base text-secondary-text font-body hover:text-primary-text transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Forrige
          </button>
          <button className="bg-tertiary font-heading text-sm md:text-base text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Neste
          </button>
        </div>
      </div>
    </div>
  );
}







export function Step7() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className=" text-white px-6 py-4 flex justify-center font-bold items-center gap-4">

        <h1 className="md:text-lg text-base text-primary-text text-center font-heading">Rediger navn og ikoner for SIM</h1>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gray-50 px-6 py-6 flex flex-col">
        <p className="md:text-sm text-xs text-secondary-text text-center font-body mb-6">
          Tilpass navn og ikoner på SIM-kortene så du enkelt kan skille dem fra hverandre.
        </p>

        {/* Primær SIM */}
        <div className="bg-white rounded-4xl p-4 shadow-sm mb-4">

          <div className="flex items-center gap-4">
            <button className="md:w-12 w-10 h-10  md:h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
              <CardSim className="md:w-6 w-5 h-5 md:h-6 text-tertiary" />
            </button>
            <div className="flex-1 flex items-center justify-between border-b border-gray-200 pb-2">
              <span className="text-primary-text md:text-base text-sm  font-body">Telenor</span>
              <Pencil className="w-4 h-4 text-secondary-text" />
            </div>
          </div>
        </div>

        {/* Beam eSIM */}
        <div className="bg-white rounded-4xl p-4 shadow-sm">

          <div className="flex items-center gap-4">
            <button className="md:w-12 w-10 h-10 md:h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <CardSim className="md:w-6 md:h-6 w-5 h-5 text-primary-text" />
            </button>
            <div className="flex-1 flex items-center justify-between border-b border-gray-200 pb-2">
              <span className="text-primary-text md:text-base text-sm font-body">beam eSIM</span>
              <Pencil className="w-4 h-4 text-secondary-text" />
            </div>
          </div>
        </div>

       
        <div className="mt-auto flex justify-end pt-6">
          <button className="bg-tertiary md:text-base text-sm font-heading text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Neste
          </button>
        </div>
      </div>
    </div>
  );
}


export function Step5() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="text-white px-6 py-4 flex justify-center font-bold items-center gap-4">
        <h1 className="md:text-lg text-base text-primary-text text-center font-heading">
          Prioriter SIM for meldinger
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gray-50 px-6 py-6 flex flex-col">
        <p className="md:text-sm text-xs text-secondary-text text-center font-body mb-6">
          Velg et standard-SIM-kort for nye tekstkonversasjoner. Du kan alltid
          veksle mellom SIM-kort før du sender melding
        </p>

        {/* Primær SIM - valgt */}
        <div className="w-full rounded-full p-4 mb-4 flex items-center gap-4 bg-white border-2 border-tertiary shadow-sm">

          <div className="flex-1 flex items-center justify-between">
            <div className="text-left">
              <span className="block text-primary-text md:text-base text-sm font-body font-medium">
                Primær SIM
              </span>
            </div>
            <div className="w-6 h-6 rounded-full bg-tertiary flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Beam eSIM - ikke valgt */}
        <div className="w-full rounded-full p-4 flex items-center gap-4 bg-gray-100 border-2 border-transparent">

          <div className="flex-1 flex items-center justify-between">
            <div className="text-left">
              <span className="block text-primary-text md:text-base text-sm font-body font-medium">
                beam eSIM
              </span>
            </div>
          </div>
        </div>

        {/* Navigasjonsknapper */}
        <div className="mt-auto flex justify-between pt-6">
          <button className="flex items-center text-sm md:text-base gap-2 px-4 py-3 text-secondary-text font-body hover:text-primary-text transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Forrige
          </button>
          <button className="bg-tertiary md:text-base text-sm font-heading text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Neste
          </button>
        </div>
      </div>
    </div>
  );
}





export function Step6() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="text-white px-6 py-4 flex justify-center font-bold items-center gap-4">
        <h1 className="md:text-lg text-base text-primary-text text-center font-heading">
          Prioriter SIM for mobildata
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gray-50 px-6 py-6 flex flex-col">
        <p className="md:text-sm text-xs text-secondary-text text-center font-body mb-6">
          Velg hvilket SIM-kort som skal brukes for å koble til internett. Du kan også slå på dataveksling for å la det andre SIM-kortet brukes for mobildata dersom det prioriterte SIM-kortet ikke kan koble ti
        </p>

        {/* Primær SIM - valgt */}
        <div className="w-full rounded-full p-4 mb-4 border-2 border-transparent flex items-center gap-4 bg-gray-100 ">

          <div className="flex-1 flex items-center  justify-between">
            <div className="text-left">
              <span className="block text-primary-text text-sm md:text-base font-body font-medium">
                Primær SIM
              </span>
            </div>

          </div>
        </div>

        {/* Beam eSIM - ikke valgt */}
        <div className="w-full rounded-full p-4 mb-4 flex items-center gap-4 bg-white  border-2 border-tertiary shadow-sm">

          <div className="flex-1 flex items-center justify-between">
            <div className="text-left">
              <span className="block text-primary-text md:text-base text-sm font-body font-medium">
                beam eSIM
              </span>
            </div>
            <div className="w-6 h-6 rounded-full bg-tertiary flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        <div className="w-full rounded-full p-4 mb-4 border-2 border-transparent flex items-center gap-4 bg-gray-100 ">

          <div className="flex-1 flex items-center  justify-between">
            <div className="text-left">
              <span className="block text-primary-text text-sm md:text-base text-primary-text font-body font-medium">
                Av
              </span>
            </div>

          </div>
        </div>

        {/* Navigasjonsknapper */}
        <div className="mt-auto flex justify-between pt-6">
          <button className="flex items-center gap-2 px-4 py-3 md:text-base text-sm text-secondary-text font-body  transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Forrige
          </button>
          <button className="bg-tertiary font-heading text-white md:text-base text-sm px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Ferdig
          </button>
        </div>
      </div>
    </div>
  );
}

export function Step8() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="text-white px-6 py-4 flex justify-center font-bold items-center gap-4">
        <h1 className="md:text-lg text-base text-primary-text text-center font-heading">
          SIM-håndtering
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gray-50 px-6 py-6 flex flex-col gap-6 overflow-y-hidden">
        {/* SIM-kort */}
        <section>
          <h2 className="md:text-xs text-[10px] uppercase tracking-wide text-secondary-text font-heading mb-2 px-2">
            SIM-kort
          </h2>
          <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-100">
            <div className="flex items-center gap-4 p-4">
              <div className="md:w-10 w-8 h-8 md:h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <User className="md:w-5 h-4 w-4 md:h-5 text-secondary-text" />
              </div>
              <div className="flex-1 text-left">
                <span className="block text-primary-text md:text-base text-xs font-body font-medium">
                  Primær SIM
                </span>
                <span className="block text-[10px] md:text-xs text-secondary-text font-body">
                  Telenor
                </span>
                <span className="block md:text-xs text-[10px] text-secondary-text font-body">
                  +47 412 34 567
                </span>
              </div>
              <Toggle on />
            </div>
          </div>
        </section>

        {/* eSIM-kort */}
        <section>
          <h2 className="md:text-xs text-[10px] uppercase tracking-wide text-secondary-text font-heading mb-2 px-2">
            eSIM-kort
          </h2>
          <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-100">
            <div className="flex items-center gap-4 p-4">
              <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-tertiary" />
              </div>
              <div className="flex-1 text-left">
                <span className="block text-primary-text md:text-base text-xs font-body font-medium">
                  beam eSIM
                </span>
                <span className="block text-[10px] md:text-xs text-secondary-text font-body">
                  beam Mobile
                </span>
                <span className="block text-[10px] md:text-xs text-secondary-text font-body">
                  Ukjent nummer
                </span>
              </div>
              <Toggle on />
            </div>
          </div>
        </section>

        {/* Prioriterte SIM-kort */}
        <section>
          <h2 className="md:text-xs text-[10px] uppercase tracking-wide text-secondary-text font-heading mb-2 px-2">
            Prioriterte SIM-kort
          </h2>
          <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-100">
            <PriorityRow label="Samtaler" value="Primær SIM" />
            <PriorityRow label="Meldinger" value="Primær SIM" />
            <PriorityRow label="Mobildata" value="beam eSIM" />
          </div>
        </section>
      </div>
    </div>
  );
}

export function Step9() {
  return (
    <div className="flex flex-col h-full bg-black/50 text-white p-4 gap-3">
      {/* SIM-status øverst */}
      <div className="flex flex-row gap-2 items-center justify-start">
        <span className="text-xs">Telenor</span>
        <span className="h-1 w-1 bg-white rounded-full" />
        <span className="text-xs text-white">beam</span>
      </div>

      {/* Avlange pills: kun WiFi + Bluetooth */}
      <div className="grid grid-cols-2 gap-2">
        <WidePill icon={<Wifi className="md:w-4 w-3 h-3 md:h-4" />} label="WiFi"  active />
        <WidePill icon={<Bluetooth className="md:w-4 w-3 h-3 md:h-4" />} label="Bluetooth"  active />
      </div>

      {/* Runde ikon-knapper i felles boks */}
      <div className="bg-white/10 rounded-3xl px-4 py-3 flex items-center justify-between">
        <RoundIcon icon={<Plane className="w-4 h-4" />} />
        <RoundIcon icon={<Flashlight className="w-4 h-4" />}  />
        <RoundIcon icon={<BellOff className="w-4 h-4" />} />
        <RoundIcon icon={<RotateCw className="w-4 h-4" />} />
        <RoundIcon icon={<Cast className="w-4 h-4" />} />
      </div>

      {/* Lysstyrke */}
      <div className="bg-white/10 rounded-3xl px-4 py-3 flex items-center gap-3">
        <Sun className="w-4 h-4" />
        <div className="flex-1 h-2 bg-white/15 rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-white rounded-full" />
        </div>
      </div>

      {/* Volum */}
      <div className="bg-white/10 rounded-3xl px-4 py-3 flex items-center gap-3">
        <Volume2 className="w-4 h-4" />
        <div className="flex-1 h-2 bg-white/15 rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-white rounded-full" />
        </div>
      </div>
    </div>
  );
}

function WidePill({
  icon, label, sub, active,
}: { icon: React.ReactNode; label: string; sub?: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-full px-4 py-3 ${
        active ? 'bg-white text-black' : 'bg-white/10 text-white'
      }`}
    >
      <div
        className={`flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full ${
          active ? 'bg-black/10' : 'bg-white/10'
        }`}
      >
        {icon}
      </div>
      <div className="flex flex-col leading-tight">
        <span className="md:text-xs text-[10px] font-medium">{label}</span>
        {sub && (
          <span className={`text-[10px] ${active ? 'text-black/60' : 'text-white/60'}`}>
            {sub}
          </span>
        )}
      </div>
    </div>
  );
}

function RoundIcon({ icon, active }: { icon: React.ReactNode; active?: boolean }) {
  return (
    <div
      className={`flex items-center justify-center w-10 h-10 rounded-full ${
        active ? 'bg-white text-black' : 'bg-white/10 text-white'
      }`}
    >
      {icon}
    </div>
  );
}



function PriorityRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between p-4">
      <span className="text-primary-text md:text-base text-xs font-body">{label}</span>
      <span className="md:text-sm text-[10px] text-secondary-text font-body">{value}</span>
    </div>
  );
}

function Toggle({ on }: { on?: boolean }) {
  return (
    <div
      className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-colors ${on ? "bg-tertiary justify-end" : "bg-gray-300 justify-start"
        }`}
    >
      <div className="w-5 h-5 rounded-full bg-white shadow" />
    </div>
  );
}


export function SettingItem({
  icon,
  title,
  subtitle,
  highlighted,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  highlighted?: boolean;
}) {
  return (
    <button
      className={`w-full px-6 py-4 flex items-center gap-4 transition-colors text-left ${highlighted ? 'bg-secondary border-l-4 border-blue-600' : 'hover:bg-gray-50'
        }`}
    >
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <div className="text-primary-text font-heading">{title}</div>
        {subtitle && <div className="text-sm text-secondary-text font-body">{subtitle}</div>}
      </div>
      <ChevronRight className="w-5 h-5 text-secondary-text flex-shrink-0" />
    </button>
  );
}