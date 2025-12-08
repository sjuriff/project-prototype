import { PhoneFrame, Step1, Step2, Step3, SettingItem } from "./android-screen";


export default function AndroidSection() {
  return (
    <div className="gap-8 lg:gap-12">
      <div className="flex gap-12 flex-wrap justify-center max-w-7xl">
        {/* Phone 1 */}
        <PhoneFrame
          step={1}
          title="Åpne innstillinger"
          description="Gå til Innstillinger på telefonen din og velg 'Nettverk og internett'"
        >
          <Step1 />
        </PhoneFrame>

        {/* Phone 2 */}
        <PhoneFrame
          step={2}
          title="Velg SIM-kort"
          description="Trykk på 'SIM-kort' for å administrere dine mobile abonnement"
        >
          <Step2 />
        </PhoneFrame>

        {/* Phone 3 */}
        <PhoneFrame
          step={3}
          title="Aktiver eSIM"
          description="Skann QR-koden fra operatøren din for å aktivere eSIM"
        >
          <Step3 />
        </PhoneFrame>
      </div>
    </div>
  );
} 