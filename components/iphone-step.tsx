import { ChevronRight, Wifi, ChevronLeft, Signal, Battery, Globe, Lock, Bell, User, QrCode, Smartphone } from 'lucide-react';

interface IPhoneScreenProps {
  step: number;
}

export default function IPhoneScreen({ step }: IPhoneScreenProps) {
  const getStepContent = () => {
    switch (step) {
      case 1:
        return {
          title: 'Steg 1: Åpne Instillinger',
          header: 'Innstillinger',
          content: (
            <>
              <SettingsGroup>
                <SettingsItem
                  icon={<div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#34c759' }}>
                    <User className="w-4 h-4 text-white" />
                  </div>}
                  label="Apple konto, iCloud og annet"
                  showChevron
                />
              </SettingsGroup>

              <SettingsGroup>
                <SettingsItem
                  icon={<div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--color-tertiary)' }}>
                    <Wifi className="w-4 h-4" style={{ color: 'var(--color-tertiary-text)' }} />
                  </div>}
                  label="Mobilnett"
                  showChevron
                  highlighted
                />
                <SettingsItem
                  icon={<div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#007aff' }}>
                    <Wifi className="w-4 h-4 text-white" />
                  </div>}
                  label="Wi-Fi"
                  value="Home Network"
                  showChevron
                />
                <SettingsItem
                  icon={<div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#5856d6' }}>
                    <Globe className="w-4 h-4 text-white" />
                  </div>}
                  label="VPN"
                  showChevron
                />
              </SettingsGroup>

              <SettingsGroup>
                <SettingsItem
                  icon={<div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#ff3b30' }}>
                    <Bell className="w-4 h-4 text-white" />
                  </div>}
                  label="Varslinger"
                  showChevron
                />
                <SettingsItem
                  icon={<div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#007aff' }}>
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                    </svg>
                  </div>}
                  label="Personvern og sikkerhet"
                  showChevron
                />
              </SettingsGroup>
            </>
          )
        };
      case 2:
        return {
          title: 'Steg 2: Gå til mobilnett',
          header: 'Mobilnett',
          backButton: true,
          content: (
            <>
              <SettingsGroup>
                <SettingsItem
                  label="Mobildata"
                  value=""
                  toggle
                />
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
                <SettingsItem
                  label="Legg til eSIM"
                  showChevron
                  highlighted
                />
              </SettingsGroup>


            </>
          )
        };
      case 3:
        return {
          title: 'Steg 3: Legg til eSIM',
          header: 'Konfigurer mobildata',
          backButton: false,
          content: (
            <div className="flex flex-col h-full">
              <div className="flex-1 flex flex-col items-center justify-center  pb-4">

                <SettingsGroup>
                  <SettingsItem
                    icon={<div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--color-tertiary)' }}>
                      <Smartphone className="w-4 h-4" style={{ color: 'var(--color-tertiary-text)' }} />
                    </div>}
                    label="Overfør fra iPhone i nærheten"
                    showChevron

                  />
                  <SettingsItem
                    icon={<div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#007aff' }}>
                      <QrCode className="w-4 h-4 text-white" />
                    </div>}
                    label="Bruk QR-kode"
                    value=""
                    showChevron
                    highlighted
                  />
                </SettingsGroup>
                <div className='px-2'>
                  <p className="text-center text-[13px] leading-relaxed" style={{ color: '#86868b' }}>
                    Velg 'Bruk QR-kode', og scan QR-koden med din telefon.
                  </p>
                </div>
              </div>
            </div>
          )
        };
      default:
        return { title: '', header: '', content: null };
    }
  };

  const stepContent = getStepContent();

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }}>
          <span className="text-sm" style={{ color: 'var(--color-primary-text)' }}>{step}</span>
        </div>
      </div>
      <h3 className="mb-6 text-center" style={{ color: 'var(--color-tertiary-heading)' }}>
        {stepContent.title}
      </h3>

      {/* iPhone Mockup */}
      <div className="relative w-full max-w-[320px] mx-auto">
        {/* iPhone Frame */}
        <div className="relative bg-black rounded-[3rem] p-2.5 shadow-2xl">
          {/* Dynamic Island */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10"></div>

          {/* Screen */}
          <div className="relative bg-white rounded-[2.5rem] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-11 px-7 flex items-center justify-between z-10 text-[11px]">
              <span style={{ color: 'var(--color-primary-text)' }}>9:41</span>
              <div className="flex items-center gap-1">
                <Signal className="w-3.5 h-3.5" style={{ color: 'var(--color-primary-text)' }} />
                <Wifi className="w-3.5 h-3.5" style={{ color: 'var(--color-primary-text)' }} />
                <Battery className="w-6 h-3.5" style={{ color: 'var(--color-primary-text)' }} />
              </div>
            </div>

            {/* Screen Header */}
            <div className="pt-11 px-4 pb-2">
              <div className="flex items-center justify-between h-10">
                {stepContent.backButton && (
                  <button className="flex items-center gap-0.5 mr-2 text-sm" style={{ color: 'var(--color-tertiary)' }}>
                    <ChevronLeft className="w-4 h-4" />
                    <span>Innstillinger</span>
                  </button>
                )}
                {!stepContent.backButton && <div></div>}
                <h2 className="absolute left-1/2 -translate-x-1/2 text-[15px]" style={{ color: 'var(--color-primary-text)' }}>
                  {stepContent.header}
                </h2>
              </div>
            </div>

            {/* Content Area */}
            <div className="overflow-y-auto pt-3" style={{ height: 'calc(100% - 6.5rem)', backgroundColor: '#f2f2f7' }}>
              {stepContent.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SettingsGroupProps {
  title?: string;
  children: React.ReactNode;
}

function SettingsGroup({ title, children }: SettingsGroupProps) {
  return (
    <div className="mb-6 first:mt-0">
      {title && (
        <div className="px-5 mb-2">
          <span className="text-[11px] uppercase tracking-wide" style={{ color: '#6d6d72' }}>
            {title}
          </span>
        </div>
      )}
      <div className="bg-white rounded-xl mx-4 overflow-hidden">
        {children}
      </div>
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
}

function SettingsItem({ icon, label, value, showChevron, highlighted, toggle }: SettingsItemProps) {
  return (
    <div
      className="flex items-center px-4 py-2.5 border-b last:border-b-0"
      style={{
        borderColor: '#c6c6c8',
        backgroundColor: highlighted ? 'var(--color-secondary)' : 'transparent'
      }}
    >
      {icon && <div className="mr-3 flex-shrink-0">{icon}</div>}
      <span className="text-[15px]" style={{ color: 'var(--color-primary-text)' }}>{label}</span>
      <div className="ml-auto flex items-center gap-2">
        {value && <span className="text-[15px]" style={{ color: '#86868b' }}>{value}</span>}
        {showChevron && <ChevronRight className="w-5 h-5" style={{ color: '#c6c6c8' }} />}
        {toggle && (
          <div className="relative w-12 h-8 rounded-full transition-colors" style={{ backgroundColor: '#34c759' }}>
            <div className="absolute top-0.5 right-0.5 w-7 h-7 bg-white rounded-full shadow-sm"></div>
          </div>
        )}
      </div>
    </div>
  );
}