/* import BusinessHero from "@/components/business/business-hero" */
import BusinessSteps from "@/components/business/business-steps"
import StepsHeader from "@/components/business/steps-header"
import WhyBeam from "@/components/business/why-beam"
import BusinessHero from "@/components/business/business-hero-v2"


export default function BusinessPage() {
  return (
    <main className="min-h-screen overflow-x-hidden relative bg-secondary">
      <section className="relative  w-full">
        <BusinessHero />
      </section>
      <section className="min-h-[600px] max-h-screen px-16 gap-4 flex flex-col items-center justify-center" >
        <StepsHeader />
        <BusinessSteps />
      </section>
      <section className="min-h-screen bg-secondary">
        <WhyBeam />
      </section>
    </main>
  )
}