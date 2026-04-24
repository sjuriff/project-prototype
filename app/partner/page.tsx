import PartnerHero from "@/components/partner/partner-hero"
import WhyBeamEsim from "@/components/partner/why-beam"
import PartnerBanner from "@/components/partner/partner-banner"
import HowToStart from "@/components/partner/partner-start"

export default function PartnerPage(){

  return(
    <main className="bg-surface">
      <section>
        <PartnerHero />
      </section>
      <section className="flex items-center justify-center">
        <WhyBeamEsim />
      </section>
      <section>
        <PartnerBanner />
      </section>
      <section className="relative overflow-hidden border py-24 sm:py-32">
        <HowToStart />

      </section>
      
    </main>
  )

}