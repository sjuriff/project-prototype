/* import BusinessHero from "@/components/business/business-hero" */
import BusinessSteps from "@/components/business/business-steps"
import StepsHeader from "@/components/business/steps-header"
import WhyBeam from "@/components/business/why-beam"
import BusinessHero from "@/components/business/business-hero-v2"
import PlanCardWrapper from "@/components/business/plan-card-wrapper"
import DashboatdPhone from "@/components/business/dashboard-phone"
import PrimaryButton from "@/components/buttons/primary-button"
import { ArrowRight } from "lucide-react"


export default function BusinessPage() {
  return (
    <main className="min-h-screen overflow-x-hidden relative bg-secondary">
      <section className="relative  w-full">
        <BusinessHero />
      </section>
      <section className=" py-16 md:py-24">
        <PlanCardWrapper />
      </section>
      <section className="min-h-[700px] md:py-0 relative px-4  md:px-16 gap-4 flex flex-col items-center justify-center" >

        <StepsHeader />
        <div className="flex flex-col mt-0 md:mt-6   md:flex-row justify-around w-full">
          <BusinessSteps />
          <DashboatdPhone />
        </div>
       
      </section>

      <section className="min-h-screen pt-16 bg-secondary">
        <WhyBeam />
      </section>
    </main>
  )
}