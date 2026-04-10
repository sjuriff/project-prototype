import BusinessHero from "@/components/business/business-hero"
import BusinessSteps from "@/components/business/business-steps"
import StepsHeader from "@/components/business/steps-header"


export default function BusinessPage() {
  return (
    <main className="min-h-screen overflow-x-hidden relative bg-surface">
      <section>
        <BusinessHero />
      </section>
      <section className="min-h-[600px] max-h-screen px-16 gap-4 flex flex-col items-center justify-center" >
        <StepsHeader />
        <BusinessSteps />
      </section>
    </main>
  )
}