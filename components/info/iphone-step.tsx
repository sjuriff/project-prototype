import type { ReactNode } from 'react';
import Image from 'next/image';
import qrCode from '@/public/images/qr-code.png'
import {
  Battery,
  Check,
  ChevronLeft,
  ChevronRight,
  Globe,
  QrCode,
  Radio,
  Signal,
  Smartphone,
  User,
  Wifi,
  Bell,
  Volume2,
  Sun,
  Plane,
  Bluetooth
} from 'lucide-react';

interface IPhoneScreenProps {
  step: number;
}

export default function IPhoneScreen({ step }: IPhoneScreenProps) {
  const isQrCode = step === 1
  return (
    <div className="flex h-[520px]  md:h-[650px] flex-row">
      <div className="relative mx-auto w-full max-w-[320px]">
        <div className={`relative rounded-[3rem] ${isQrCode ? "bg-transparent" : "bg-black"}  p-2.5`}>
          <div className={` ${isQrCode ? "hidden" : "absolute"} top-5 left-1/2 z-20 h-6 w-20 -translate-x-1/2 rounded-full bg-black`} />

          <div
            className={` ${isQrCode ? "bg-transparent" : "bg-white "}relative overflow-hidden h-[550px] w-[270px] md:h-[620px] md:w-full rounded-[2.5rem] `}
            style={{ aspectRatio: '9/19.5' }}
          >
            <div className={`${isQrCode ? "hidden" : "absolute"} top-0 left-0 right-0 z-30 flex h-11 items-center justify-between px-7 text-[11px]`}>
              <span style={{ color: 'var(--color-primary-text)' }}>9:41</span>
              <div className="flex items-center gap-1">
                <Signal className="h-3.5 w-3.5" style={{ color: 'var(--color-primary-text)' }} />
                <Wifi className="h-3.5 w-3.5" style={{ color: 'var(--color-primary-text)' }} />
                <Battery className="h-3.5 w-6" style={{ color: 'var(--color-primary-text)' }} />
              </div>
            </div>

            {getStepContent(step)}
          </div>
        </div>
      </div>
    </div>
  );
}



function MobilnettScreen() {
  return (
    <div className="flex h-full flex-col pt-11">
      <div className="px-2 pb-2">
        <div className="flex h-10 items-center justify-between">
          <button
            className=" flex items-center gap-0.5 text-sm"
            style={{ color: 'var(--color-tertiary)' }}
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Innstillinger</span>
          </button>
          <h2
            className="absolute top-9 left-1/2 -translate-x-1/2 text-[15px]"
            style={{ color: 'var(--color-primary-text)' }}
          >
            Mobilnett
          </h2>
        </div>
      </div>

      <div className="relative flex-1 overflow-hidden pt-3" style={{ backgroundColor: '#f2f2f7' }}>
        <SettingsGroup>
          <SettingsItem label="Mobildata" toggle />
          <SettingsItem label="Mobildatavalg" value="Roaming på" showChevron />
        </SettingsGroup>
        <SettingsGroup title="Nettverk">
          <SettingsItem label="Nettverksvalg" value="AT&T" showChevron />
        </SettingsGroup>
        <SettingsGroup>
          <SettingsItem label="Mitt nummer" value="+47 123 45 67" showChevron />
          <SettingsItem label="Mobildatanettverk" showChevron />
        </SettingsGroup>
        <SettingsGroup>
          <SettingsItem label="Legg til eSIM" showChevron highlighted />
        </SettingsGroup>
      </div>
    </div>
  );
}


function MobilnettScreenEnd() {
  return (
    <div className=" h-full pt-11 border flex-col ">
      <div className="px-2 pb-2">
        <div className="flex h-10 items-center justify-between">
          <button
            className="mr-0 flex items-center gap-0.5 text-sm"
            style={{ color: 'var(--color-tertiary)' }}
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Innstillinger</span>
          </button>
          <h2
            className="absolute top-9 left-1/2 -translate-x-1/2 text-[15px]"
            style={{ color: 'var(--color-primary-text)' }}
          >
            Mobilnett
          </h2>
        </div>
      </div>

      <div className="relative flex-1 h-full overflow-hidden pt-3" style={{ backgroundColor: '#f2f2f7' }}>
        <SettingsGroup>
          <SettingsItem label="Mobildata" value="Primær" showChevron />
          <SettingsItem label="Mobildatavalg" value="Roaming på" showChevron />
        </SettingsGroup>
        <SettingsGroup  >
          <SettingsItem label="Standard tale" value="Primær" showChevron />
        </SettingsGroup>
        <SettingsGroup title='Simkort'>
          <SettingsItem label="Primær" value="På" showChevron />
          <SettingsItem label="beam eSIM" value="Av" highlighted showChevron />
          <SettingsItem label="Legg til eSIM" />


        </SettingsGroup>

      </div>
    </div>
  );
}

//Steps

function getStepContent(step: number): ReactNode {
  switch (step) {
    case 1:
      return (
        <div className="flex  items-center justify-center h-full">
          <div className='mb-1 relative'>
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

    case 2:
      return (
        <div className="relative h-full">
          <MobilnettScreen />
          <div className="absolute inset-0 z-10 bg-black/40" />
          <div className="absolute inset-0 z-20 flex items-center justify-center px-8">
            <div
              className="w-full max-w-[260px] overflow-hidden rounded-[14px]"
              style={{ backgroundColor: 'rgba(242, 242, 247, 0.92)', backdropFilter: 'blur(20px)' }}
            >
              <div className="px-4 pt-4 pb-3 text-center">
                <h3
                  className="text-[16px] font-semibold"
                  style={{ color: 'var(--color-primary-text)' }}
                >
                  Aktiver din eSIM
                </h3>
                <p className="mt-1 text-[12px]" style={{ color: 'var(--color-primary-text)' }}>
                  Vil du aktivere ditt nye eSIM nå?
                </p>
              </div>
              <div
                className="grid grid-cols-2 border-t"
                style={{ borderColor: 'rgba(60,60,67,0.36)' }}
              >
                <button
                  className="border-r py-2.5 text-[15px]"
                  style={{
                    borderColor: 'rgba(60,60,67,0.36)',
                    color: 'var(--color-tertiary)',
                  }}
                >
                  Avbryt
                </button>
                <button
                  className="py-2.5 text-[15px] font-semibold"
                  style={{ color: 'var(--color-tertiary)' }}
                >
                  Aktiver
                </button>
              </div>
            </div>
          </div>
        </div>
      );

    case 3:
      return (
        <div className="relative h-full">
          <MobilnettScreen />
          <div className="absolute inset-0 bg-black/15" />

          <BottomSheet heightPct={92} showHeader={false}>
            <div className="flex h-full flex-col items-center px-6 pt-8 pb-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl" style={{ backgroundColor: 'var(--color-tertiary)' }}>
                <Radio className="h-8 w-8" style={{ color: 'var(--color-tertiary-text)' }} />
              </div>
              <h2
                className="mt-6 text-[18px] md:text-[24px] font-bold"
                style={{ color: 'var(--color-primary-text)' }}
              >
                Aktiver eSIM
              </h2>
              <p className="mt-3 text-[13px] md:text-[15px]" style={{ color: '#6d6d72' }}>
                Ditt nye eSIM fra beam mobile er klar for å aktiveres.
              </p>

              <div className="mt-auto w-full">
                <button
                  className="w-full rounded-full py-3.5 text-[16px] font-semibold"
                  style={{
                    backgroundColor: 'var(--color-tertiary)',
                    color: 'var(--color-tertiary-text)',
                  }}
                >
                  Fortsett
                </button>
              </div>
            </div>
          </BottomSheet>
        </div>
      );

    case 4:
      return (
        <div className="relative h-full">
          <MobilnettScreen />
          <div className="absolute inset-0 bg-black/15" />

          <BottomSheet heightPct={92} showHeader={false}>
            <div className="flex h-full flex-col px-6 pt-8 pb-8">
              <h2
                className=" text-[18px] md:text-[22px] font-bold leading-tight"
                style={{ color: 'var(--color-primary-text)' }}
              >
                Hvor vil du bruke denne eSIMen?
              </h2>
              <p className="mt-2 text-[13px] md:text-[14px]" style={{ color: '#6d6d72' }}>
                Velg hvor du planlegger å bruke eSIMen.
              </p>

              <div className="mt-6 space-y-3">
                <LocationOption label="Hjem" selected={false} />
                <LocationOption label="I utlandet" selected={true} />
              </div>

              <div className="mt-auto w-full">
                <button
                  className="w-full rounded-full py-3.5 text-[16px] font-semibold"
                  style={{
                    backgroundColor: 'var(--color-tertiary)',
                    color: 'var(--color-tertiary-text)',
                  }}
                >
                  Fortsett
                </button>
              </div>
            </div>
          </BottomSheet>
        </div>
      );

    case 5:
      return (
        <div className="relative h-full">
          <MobilnettScreen />
          <div className="absolute inset-0 bg-black/15" />

          <BottomSheet heightPct={92} showHeader={false}>
            <div className="flex h-full flex-col items-center px-6 pt-8 pb-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl" style={{ backgroundColor: 'var(--color-tertiary)' }}>
                <Radio className="h-8 w-8" style={{ color: 'var(--color-tertiary-text)' }} />
              </div>
              <h2
                className="mt-6 text-[18px] md:text-[24px] font-bold"
                style={{ color: 'var(--color-primary-text)' }}
              >
                Hvilken type plan har du?
              </h2>
              <p className="mt-3 text-[13px] md:text-[15px]" style={{ color: '#6d6d72' }}>
                Velg hvilken type dataplan du har får ditt reise-eSIM
              </p>

              <div className="mt-6 w-full space-y-3">
                <LocationOption label="Bare data" selected={true} />
                <LocationOption label="Stemme og data" selected={false} />
              </div>

              <div className="mt-auto w-full">
                <button
                  className="w-full rounded-full py-3.5 text-[16px] font-semibold"
                  style={{
                    backgroundColor: 'var(--color-tertiary)',
                    color: 'var(--color-tertiary-text)',
                  }}
                >
                  Fortsett
                </button>
              </div>
            </div>
          </BottomSheet>
        </div>
      );

    case 6:
      return (
        <div className="relative h-full">
          <MobilnettScreen />
          <div className="absolute inset-0 bg-black/15" />

          <BottomSheet heightPct={92} showHeader={false}>
            <div className="flex h-full flex-col items-center px-6 pt-8 pb-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl" style={{ backgroundColor: 'var(--color-tertiary)' }}>
                <Radio className="h-8 w-8" style={{ color: 'var(--color-tertiary-text)' }} />
              </div>
              <h2
                className="mt-6 text-[18px] md:text-[24px] font-bold"
                style={{ color: 'var(--color-primary-text)' }}
              >
                Reise eSIM oppsett er fullført
              </h2>
              <p className="mt-3 text-[13px] md:text-[15px]" style={{ color: '#6d6d72' }}>
                beam mobile eSIM er klar for bruk. iPhonen vil oppdage når du er utenlands og påminne deg om å skru på planen hvis det ikke allerede er gjort
              </p>

              <div className="mt-auto w-full">
                <button
                  className="w-full rounded-full py-3.5 text-[16px] font-semibold"
                  style={{
                    backgroundColor: 'var(--color-tertiary)',
                    color: 'var(--color-tertiary-text)',
                  }}
                >
                  Ferdig
                </button>
              </div>
            </div>
          </BottomSheet>
        </div>
      );

    case 7:
      return (

        <MobilnettScreenEnd />

      );

    case 8:
      return (
        <div className="flex h-full flex-col pt-11">
          <div className="px-4 pb-2">
            <div className="flex h-10 items-center justify-between">
              <button
                className="mr-2 flex items-center gap-0.5 text-sm"
                style={{ color: 'var(--color-tertiary)' }}
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Mobilnett</span>
              </button>
              <h2
                className="absolute top-9 left-1/2 -translate-x-1/2 text-[15px]"
                style={{ color: 'var(--color-primary-text)' }}
              >
                beam eSIM
              </h2>
            </div>

          </div>

          <div className="flex-1 overflow-y-auto pt-3" style={{ backgroundColor: '#f2f2f7' }}>
            <SettingsGroup>
              <SettingsItem

                label="Mobilabonnement"
                value="beam eSIM"
                showChevron
              />
              <SettingsItem
                label='Slå på denne linjen'
                toggle
              />
            </SettingsGroup>



            <div className="mt-auto px-1 w-full">
              <button
                className="w-full text-red-600 bg-white rounded-full py-3.5 text-[16px] font-semibold"

              >
                Slett eSIM
              </button>
            </div>
          </div>
        </div>
      );

    case 9:
      return (
        <div className=" bg-black/20  border overflow-hidden h-full rounded-xl p-4 flex flex-col gap-3 overflow-hidden">
          {/* eSIM status øverst */}
          <div className="flex flex-col items-start mt-4 justify-start  text-white text-[11px] font-medium px-1">
            <div className="flex items-center justify-center gap-1 ">
               <Signal className="w-3 h-3 mb-0.5" />
              <span>Primær sim</span>
             
            </div>
            <div className="flex items-center  justify-center gap-1">
               <Signal className="w-3 h-3 mb-0.5" />
              <span>beam eSIM</span>
             
            </div>
          </div>

          {/* Rad 1: Connectivity + Music */}
          <div className="flex gap-3">
            {/* Connectivity tile */}
            <div className="flex-1 bg-white/15 rounded-2xl p-3 grid grid-cols-2 gap-3">
              <ControlIcon active={false} icon={<Plane className="w-5 h-5" />} />
              <ControlIcon active={true} icon={<Radio className="w-5 h-5" />} />
              <ControlIcon active={true} icon={<Wifi className="w-5 h-5" />} />
              <ControlIcon active={true} icon={<Bluetooth className="w-5 h-5" />} />
            </div>

            {/* Music tile */}
            <div className="flex-1 bg-white/15 rounded-2xl p-3 flex flex-col justify-between">
              <div className="text-white text-[10px]">Spilles ikke</div>
              <div className="text-white/60 text-[9px]">AirPods</div>
            </div>
          </div>

          {/* Rad 2: Brightness + Volume */}
          <div className="flex gap-3 flex-1">
            <ControlSlider icon={<Volume2 className="w-5 h-5" />} />
            <ControlSlider icon={<Sun className="w-5 h-5" />} />
          </div>

          {/* Rad 3: quick toggles */}
          <div className="grid grid-cols-4 gap-3">
            <ControlIcon icon={<Bell className="w-5 h-5" />} active={false} round />
            <ControlIcon icon={<Smartphone className="w-5 h-5" />} active={false} round />
            <ControlIcon icon={<QrCode className="w-5 h-5" />} active={false} round />
            <ControlIcon icon={<User className="w-5 h-5" />} active={false} round />
          </div>
        </div>
      );

    default:
      return null;
  }
}

function LocationOption({ label, selected }: { label: string; selected: boolean }) {
  return (
    <div
      className="flex items-center justify-between rounded-2xl border bg-white px-4 py-4"
      style={{
        borderColor: selected ? 'var(--color-tertiary)' : '#d1d1d6',
        borderWidth: selected ? 2 : 1,
      }}
    >
      <span className="text-[16px] font-medium" style={{ color: 'var(--color-primary-text)' }}>
        {label}
      </span>
      <div
        className="flex h-6 w-6 items-center justify-center rounded-full border-2"
        style={{
          borderColor: selected ? 'var(--color-tertiary)' : '#c6c6c8',
          backgroundColor: selected ? 'var(--color-tertiary)' : 'transparent',
        }}
      >
        {selected && <Check className="h-3.5 w-3.5" style={{ color: 'var(--color-tertiary-text)' }} />}
      </div>
    </div>
  );
}

function BottomSheet({
  title,
  leftAction = 'Avbryt',
  rightAction = 'Ferdig',
  heightPct = 70,
  showHeader = true,
  children,
}: {
  title?: string;
  leftAction?: string;
  rightAction?: string;
  heightPct?: number;
  showHeader?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className="absolute inset-x-0  bottom-0 z-20 flex flex-col overflow-hidden rounded-t-[18px] shadow-2xl"
      style={{ height: `${heightPct}%`, backgroundColor: '#f2f2f7' }}
    >
      <div className="flex justify-center pt-2 pb-1">
        <div className="h-[5px] w-9 rounded-full" style={{ backgroundColor: '#c6c6c8' }} />
      </div>

      {showHeader && (
        <div
          className="relative flex h-11 items-center justify-between border-b px-4"
          style={{ borderColor: '#d1d1d6' }}
        >
          <span className="text-[15px]" style={{ color: 'var(--color-tertiary)' }}>
            {leftAction}
          </span>
          <h2
            className="absolute left-1/2 -translate-x-1/2 text-[15px] font-semibold"
            style={{ color: 'var(--color-primary-text)' }}
          >
            {title}
          </h2>
          <span className="text-[15px] font-semibold" style={{ color: 'var(--color-tertiary)' }}>
            {rightAction}
          </span>
        </div>
      )}

      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}

//Mindre componenter/atoms

function IconBadge({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div
      className="w-7 h-7 rounded-lg flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );
}

interface SettingsGroupProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

function SettingsGroup({ title, subtitle, children }: SettingsGroupProps) {
  return (
    <div className="mb-6 first:mt-0">
      {(title || subtitle) && (
        <div className="px-5 mb-2">
          {title && (
            <span
              className="text-[11px] uppercase tracking-wide"
              style={{ color: '#6d6d72' }}
            >
              {title}
            </span>
          )}
          {subtitle && (
            <span className="text-[11px] ml-2" style={{ color: '#6d6d72' }}>
              {subtitle}
            </span>
          )}
        </div>
      )}
      <div className="bg-white rounded-xl mx-4 overflow-hidden">{children}</div>
    </div>
  );
}

interface SettingsItemProps {
  icon?: React.ReactNode;
  label: string;
  value?: string;
  showChevron?: boolean;
  highlighted?: boolean;
  toggle?: boolean;
  selected?: boolean;
}

function SettingsItem({
  icon,
  label,
  value,
  showChevron,
  highlighted,
  toggle,
  selected,
}: SettingsItemProps) {
  return (
    <div
      className="flex items-center px-4 py-2.5 gap-2 border-b last:border-b-0"
      style={{
        borderColor: '#c6c6c8',
        backgroundColor: highlighted ? 'var(--color-secondary)' : 'transparent',
      }}
    >
      {icon && <div className="mr-3 flex-shrink-0">{icon}</div>}
      <span className="text-[14px] md:text-[15px]" style={{ color: 'var(--color-primary-text)' }}>
        {label}
      </span>
      <div className="ml-auto flex items-center gap-2 md:gap-2">
        {value && (
          <span className=" text-xs md:text-sm text-nowrap" style={{ color: '#86868b' }}>
            {value}
          </span>
        )}
        {selected && <Check className="h-4 w-4" style={{ color: 'var(--color-tertiary)' }} />}
        {showChevron && <ChevronRight className="w-5 h-5" style={{ color: '#c6c6c8' }} />}
        {toggle && (
          <div
            className="relative w-12 h-8 rounded-full transition-colors"
            style={{ backgroundColor: '#34c759' }}
          >
            <div className="absolute top-0.5 right-0.5 w-7 h-7 bg-white rounded-full shadow-sm" />
          </div>
        )}
      </div>
    </div>
  );
}

function ControlIcon({
  icon,
  active,
  round,
}: { icon: ReactNode; active?: boolean; round?: boolean }) {
  return (
    <div
      className={`${round ? 'w-11 h-11' : 'w-9 h-9'} rounded-full flex items-center justify-center ${active ? 'bg-white text-black' : 'bg-white/20 text-white'
        }`}
    >
      {icon}
    </div>
  );
}

function ControlSlider({ icon }: { icon: ReactNode }) {
  return (
    <div className="flex-1 bg-white/15 rounded-4xl flex flex-col items-center justify-end p-2 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-white/80 rounded-b-2xl" />
      <div className="relative z-10 text-lg mb-1">{icon}</div>
    </div>
  );
}