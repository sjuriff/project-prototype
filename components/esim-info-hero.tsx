import { Smartphone, Check, BadgeQuestionMark, QrCode, Zap, Globe, CloudDownload, FileCog, Wifi } from "lucide-react"
import Link from "next/link"
import PrimaryButton from "./buttons/primary-button"
import paths from "@/paths"


export default function ESimInfoHero() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full">
        <div className="space-y-16">
          {/* Header Section */}
          <div className="space-y-8 text-center">
            <div className="inline-flex items-center gap-3 p-4 bg-primary rounded-full">
              <BadgeQuestionMark className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h1 className="text-5xl font-heading md:text-6xl tracking-tight text-primary-text">
              Hva er eSIM?
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
              eSIM sørger for at du slipper høye roamingkostnader når du er på reise. Du vet hvor mye surfingen din vil koste allerede før du reiser. Et eSIM fungerer som et fysisk SIM-kort, bare digitalt. Det er forhåndsbetalt, krever ikke et eget abonnement og du får forutsigbare kostnader. Du kan ha både en eSIM og ditt vanlige SIM-kort på telefonen samtidig. Med Beam eSIM kan du kjøpe datapakker og spare penger mens du er på reise!
            </p>
          </div>

          {/* Visual Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Traditional SIM Card */}
            <div className="p-8 bg-muted/30 rounded-2xl shadow-md border border-tertiary space-y-4">
              <div className="w-12 h-12 relative rounded-full  border border-tertiary flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-primary-text" />
              </div>
              <h3 className="text-primary-text font-heading">Din mobil må ha støtte eSIM</h3>
              <p className="text-muted-foreground">
                eSIM er et innebygd digitalt SIM-kort, som de fleste moderne smarttelefoner har
              </p>
            </div>

            {/* eSIM */}
            <div className="p-8  rounded-2xl shadow-md border border-tertiary space-y-4 relative overflow-hidden">
              <div className="absolute top-4 right-4">

              </div>
              <div className="w-12 h-12 rounded-full border border-tertiary flex items-center justify-center">
                <FileCog className="w-6 h-6 text-primary-text" />
              </div>
              <h3 className="text-foreground">Kjapp installeringsguide</h3>
              <p className="text-foreground/80">
                Se hvordan du installerer eSIM på <Link className='underline' href={'/info#iphone'}>iPhone</Link> og <Link className='underline' href={'/info#android'}>Android </Link>
              </p>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-6  w-full mx-auto items-center justify-center gap-6">
            <div className="p-6 shadow-md col-start-2 col-span-2 h-[200px] bg-card  space-y-4  rounded-xl border border-primary-text ">
              <div className="w-10 h-10 rounded-full border border-primary-text flex items-center justify-center">
                <Wifi className="w-5 h-5 text-tertiary" />
              </div>
              <h3 className="text-primary-text font-heading">Stabilt internett</h3>
              <p className="text-primary-text/90 font-body text-sm">
                Du trenger WiFi for å aktivere ditt eSIM fra Beam.
              </p>
            </div>

            <div className="p-6 shadow-md col-span-2 bg-card h-[200px] rounded-xl border border-border space-y-4 ">
              <div className="w-10 h-10 rounded-full border border-primary-text flex items-center justify-center">
                <CloudDownload className="w-5 h-5 text-tertiary" />
              </div>
              <h3 className="text-primary-text font-heading"> Installer før avreise</h3>
              <p className="text-primary-text/90 font-body text-sm">
                Du kan aktivere ditt eSIM når som helst, datapakken skrus på automatisk når du lander.
              </p>
            </div>


          </div>

        </div>
        <div className="w-full mt-12 flex items-center justify-center">
          <Link href={paths.info}>
            <PrimaryButton>
              Les mer om eSIM
            </PrimaryButton>
          </Link>
        </div>

      </div>
    </div>
  )
}