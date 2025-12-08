import { ArrowLeft, ChevronRight, Wifi, Radio, SignalHigh, QrCode, Info } from 'lucide-react';


export function PhoneFrame({ children, step, title, description }: { children: React.ReactNode; step: number; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center">
      {/* Step Label and Description */}
      <div className="mb-6 text-center max-w-[320px]">
        <div className="inline-block px-4 py-2 bg-primary text-primary-text rounded-full mb-3">
          {step}
        </div>
        <h3 className="mb-2 font-heading text-lg text-tertiary-heading">{title}</h3>
        <p className="text-sm text-secondary-text font-body">{description}</p>
      </div>
      
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
            icon={<Wifi className="w-5 h-5 text-secondary" />}
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
      className={`w-full px-6 py-4 flex items-center gap-4 transition-colors text-left ${
        highlighted ? 'bg-secondary border-l-4 border-blue-600' : 'hover:bg-gray-50'
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