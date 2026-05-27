import { ArrowLeft, ChevronRight, Wifi, Radio, SignalHigh, QrCode, Info, Pencil, CardSim, Check, Smartphone, User } from 'lucide-react';


export function PhoneFrame({ children, step, title, description }: { children: React.ReactNode; step: number; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center">
      {/* Step Label and Description */}
      {/*   <div className="mb-6 text-center max-w-[320px]">
        <div className="inline-block px-4 py-2 bg-primary text-primary-text rounded-full mb-3">
          {step}
        </div>
        <h3 className="mb-2 font-heading text-lg text-primary-text">{title}</h3>
        <p className="text-sm text-secondary-text font-body">{description}</p>
      </div> */}

      <div className="bg-gray-800 rounded-[40px] p-3 shadow-2xl">
        <div className="bg-white rounded-[32px] overflow-hidden shadow-lg w-[320px]">
          {/* Status Bar */}
          <div className="bg-white px-6 pt-3 pb-2 flex items-center justify-between">
            <span className="text-sm">9:41</span>
            <div className="flex items-center gap-1">
              <SignalHigh className="w-4 h-4" />
              <Wifi className="w-4 h-4" />
              <div className="text-sm">100%</div>
            </div>
          </div>

          {/* Screen Content */}
          <div className="bg-white h-[600px] overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Step1() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-tertiary text-tertiary-text font-heading px-6 py-4">
        <h1 className="text-lg">Innstillinger</h1>
      </div>

      {/* Settings List */}
      <div className="flex-1 bg-gray-50">
        <div className="bg-white mt-2">
          <SettingItem
            icon={<Wifi className="w-5 h-5 text-secondary-text" />}
            title="Nettverk og internett"
            subtitle="Wi-Fi, mobil, databruk, hotspot"
            highlighted
          />
        </div>

        <div className="bg-white mt-2">
          <SettingItem
            icon={<div className="w-5 h-5 rounded-full bg-primary" />}
            title="Tilkoblede enheter"
            subtitle="Bluetooth, paring"
          />
          <div className="h-px bg-gray-200 ml-16" />
          <SettingItem
            icon={<div className="w-5 h-5 rounded-full bg-secondary" />}
            title="Apper"
            subtitle="Tillatelser, standardapper"
          />
          <div className="h-px bg-gray-200 ml-16" />
          <SettingItem
            icon={<div className="w-5 h-5 rounded-full bg-tertiary" />}
            title="Varsler"
            subtitle="Varselhistorikk, samtaler"
          />
        </div>
      </div>
    </div>
  );
}

export function Step2() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-tertiary font-heading text-white px-6 py-4 flex items-center gap-4">
        <button className="p-1 hover:bg-blue-700 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-heading">Nettverk og internett</h1>
      </div>

      {/* Network Settings */}
      <div className="flex-1 bg-gray-50">
        <div className="bg-white mt-2">
          <SettingItem
            icon={<Radio className="w-5 h-5 text-secondary-text" />}
            title="SIM-kort"
            subtitle="2 SIM-kort"
            highlighted
          />
        </div>

        <div className="bg-white mt-2">
          <SettingItem
            icon={<Wifi className="w-5 h-5 text-secondary-text" />}
            title="Internett"
            subtitle="MittWiFi"
          />
          <div className="h-px bg-gray-200 ml-16" />
          <SettingItem
            icon={<div className="w-5 h-5 rounded bg-gray-400" />}
            title="Anrop og SMS"
            subtitle="Standard for anrop og SMS"
          />
          <div className="h-px bg-gray-200 ml-16" />
          <SettingItem
            icon={<div className="w-5 h-5 rounded bg-gray-400" />}
            title="Databruk"
            subtitle="3,2 GB brukt denne måneden"
          />
        </div>
      </div>
    </div>
  );
}

export function Step3() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-tertiary text-white px-6 py-4 flex items-center gap-4">
        <button className="p-1 hover:bg-blue-700 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-heading">Legg til eSIM</h1>
      </div>

      {/* eSIM Activation */}
      <div className="flex-1 bg-gray-50 px-6 py-6 flex flex-col">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex justify-center mb-6">
            <div className="w-40 h-40 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
              <QrCode className="w-16 h-16 text-secondary-text" />
            </div>
          </div>

          <h2 className="text-center text-primary-text font-heading mb-2">Skann QR-kode</h2>
          <p className="text-center text-secondary-text font-body text-sm mb-6">
            Bruk QR-koden fra operatøren din for å aktivere eSIM
          </p>

          <div className="space-y-3">
            <button className="w-full bg-tertiary font-heading text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Skann QR-kode
            </button>
            <button className="w-full border border-tertiary font-heading text-secondary-text py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Skriv inn kode manuelt
            </button>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-gray-700">
              Kontakt operatøren din for å få en QR-kode eller aktiveringskode for eSIM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


export function Step4() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className=" text-white px-6 py-4 flex justify-center font-bold items-center gap-4">

        <h1 className="text-lg text-primary-text text-center font-heading">Rediger navn og ikoner for SIM</h1>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gray-50 px-6 py-6 flex flex-col">
        <p className="text-sm text-secondary-text text-center font-body mb-6">
          Tilpass navn og ikoner på SIM-kortene så du enkelt kan skille dem fra hverandre.
        </p>

        {/* Primær SIM */}
        <div className="bg-white rounded-4xl p-4 shadow-sm mb-4">

          <div className="flex items-center gap-4">
            <button className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
              <CardSim className="w-6 h-6 text-tertiary" />
            </button>
            <div className="flex-1 flex items-center justify-between border-b border-gray-200 pb-2">
              <span className="text-primary-text font-body">Telenor</span>
              <Pencil className="w-4 h-4 text-secondary-text" />
            </div>
          </div>
        </div>

        {/* Beam eSIM */}
        <div className="bg-white rounded-4xl p-4 shadow-sm">

          <div className="flex items-center gap-4">
            <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <CardSim className="w-6 h-6 text-primary-text" />
            </button>
            <div className="flex-1 flex items-center justify-between border-b border-gray-200 pb-2">
              <span className="text-primary-text font-body">Beam eSIM</span>
              <Pencil className="w-4 h-4 text-secondary-text" />
            </div>
          </div>
        </div>

        {/* Neste-knapp */}
        <div className="mt-auto flex justify-end pt-6">
          <button className="bg-tertiary font-heading text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
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
        <h1 className="text-lg text-primary-text text-center font-heading">
          Prioriter SIM for meldinger
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gray-50 px-6 py-6 flex flex-col">
        <p className="text-sm text-secondary-text text-center font-body mb-6">
          Velg et standard-SIM-kort for nye tekstkonversasjoner. Du kan alltid
          veksle mellom SIM-kort før du sender melding
        </p>

        {/* Primær SIM - valgt */}
        <div className="w-full rounded-full p-4 mb-4 flex items-center gap-4 bg-white border-2 border-tertiary shadow-sm">

          <div className="flex-1 flex items-center justify-between">
            <div className="text-left">
              <span className="block text-primary-text font-body font-medium">
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
              <span className="block text-primary-text font-body font-medium">
                Beam eSIM
              </span>
            </div>
          </div>
        </div>

        {/* Navigasjonsknapper */}
        <div className="mt-auto flex justify-between pt-6">
          <button className="flex items-center gap-2 px-4 py-3 text-secondary-text font-body hover:text-primary-text transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Forrige
          </button>
          <button className="bg-tertiary font-heading text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
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
      <div className="text-white px-6 py-4 flex flex-col justify-center font-bold items-center gap-4">
        <CardSim className="w-6 h-6 text-tertiary" />
        <h1 className="text-lg text-primary-text text-center font-heading">
          Vil du legge til beam eSIM mobile?
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1  px-6 pb-6 flex flex-col">
        <p className="text-sm text-secondary-text text-center font-body mb-6">
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

export function Step7() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="text-white px-6 py-4 flex flex-col justify-center font-bold items-center gap-4">
        <CardSim className="w-6 h-6 text-tertiary" />
        <h1 className="text-lg text-primary-text text-center font-heading">
          Legger til beam mobile-eSIM...
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 gap-34  px-6 pb-6 flex flex-col">
        <p className="text-sm text-secondary-text text-center font-body mb-6">
          Dette kan ta noen minutter
        </p>

        <div className="flex items-center flex-col gap-2">
          <div className="h-2 w-full flex rounded-full bg-gray-200">
            <span className="w-3/4 h-full rounded-full bg-tertiary"></span>
          </div>
          <p className="text-sm text-secondary-text text-center font-body">75%</p>
        </div>



        {/* Navigasjonsknapper */}
        <div className="mt-auto flex justify-end pt-6">


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
        <h1 className="text-lg text-primary-text text-center font-heading">
          Prioriter SIM for mobildata
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gray-50 px-6 py-6 flex flex-col">
        <p className="text-sm text-secondary-text text-center font-body mb-6">
          Velg hvilket SIM-kort som skal brukes for å koble til internett. Du kan også slå på dataveksling for å la det andre SIM-kortet brukes for mobildata dersom det prioriterte SIM-kortet ikke kan koble ti
        </p>

        {/* Primær SIM - valgt */}
        <div className="w-full rounded-full p-4 mb-4 border-2 border-transparent flex items-center gap-4 bg-gray-100 ">

          <div className="flex-1 flex items-center  justify-between">
            <div className="text-left">
              <span className="block text-primary-text font-body font-medium">
                Primær SIM
              </span>
            </div>

          </div>
        </div>

        {/* Beam eSIM - ikke valgt */}
        <div className="w-full rounded-full p-4 mb-4 flex items-center gap-4 bg-white  border-2 border-tertiary shadow-sm">

          <div className="flex-1 flex items-center justify-between">
            <div className="text-left">
              <span className="block text-primary-text font-body font-medium">
                Beam eSIM
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
              <span className="block text-primary-text font-body font-medium">
                Av
              </span>
            </div>

          </div>
        </div>

        {/* Navigasjonsknapper */}
        <div className="mt-auto flex justify-between pt-6">
          <button className="flex items-center gap-2 px-4 py-3 text-secondary-text font-body hover:text-primary-text transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Forrige
          </button>
          <button className="bg-tertiary font-heading text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Ferdig
          </button>
        </div>
      </div>
    </div>
  );
}

export function Step9() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="text-white px-6 py-4 flex justify-center font-bold items-center gap-4">
        <h1 className="text-lg text-primary-text text-center font-heading">
          SIM-håndtering
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gray-50 px-6 py-6 flex flex-col gap-6 overflow-y-auto">
        {/* SIM-kort */}
        <section>
          <h2 className="text-xs uppercase tracking-wide text-secondary-text font-heading mb-2 px-2">
            SIM-kort
          </h2>
          <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-100">
            <div className="flex items-center gap-4 p-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <User className="w-5 h-5 text-secondary-text" />
              </div>
              <div className="flex-1 text-left">
                <span className="block text-primary-text font-body font-medium">
                  Primær SIM
                </span>
                <span className="block text-xs text-secondary-text font-body">
                  Telenor 
                </span>
                <span className="block text-xs text-secondary-text font-body">
                   +47 412 34 567
                </span>
              </div>
              <Toggle on />
            </div>
          </div>
        </section>

        {/* eSIM-kort */}
        <section>
          <h2 className="text-xs uppercase tracking-wide text-secondary-text font-heading mb-2 px-2">
            eSIM-kort
          </h2>
          <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-100">
            <div className="flex items-center gap-4 p-4">
              <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-tertiary" />
              </div>
              <div className="flex-1 text-left">
                <span className="block text-primary-text font-body font-medium">
                  beam eSIM
                </span>
                <span className="block text-xs text-secondary-text font-body">
                  beam Mobile
                </span>
                  <span className="block text-xs text-secondary-text font-body">
                  Ukjent nummer
                </span>
              </div>
              <Toggle on />
            </div>
          </div>
        </section>

        {/* Prioriterte SIM-kort */}
        <section>
          <h2 className="text-xs uppercase tracking-wide text-secondary-text font-heading mb-2 px-2">
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

function PriorityRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between p-4">
      <span className="text-primary-text font-body">{label}</span>
      <span className="text-sm text-secondary-text font-body">{value}</span>
    </div>
  );
}

function Toggle({ on }: { on?: boolean }) {
  return (
    <div
      className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-colors ${
        on ? "bg-tertiary justify-end" : "bg-gray-300 justify-start"
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