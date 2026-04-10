import { Users, Package, Activity } from "lucide-react";

export default function BusinessSteps(){
    const steps = [
    {
      number: 1,
      title: "Legg ti medlemmer",
      description: "Start med å legge til medlemmer og tildele planer.",
      icon: Users,
      color: "primary"
    },
    {
      number: 2,
      title: "Kjøp planer enkelt",
      description: "Velg land, regional eller globale planer og kjøp med en gang",
      icon: Package,
      color: "primary"
    },
    {
      number: 3,
      title: "Monitorer databruk",
      description: "Når en bruker har aktivert en eSIM, kan du monitorere brukt data.",
      icon: Activity,
      color: "primary"
    }
  ];
  return(
    <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const bgColor = step.color === 'primary' ? 'var(--color-primary)' :
              step.color === 'secondary' ? 'var(--color-secondary)' :
                'var(--color-tertiary)';
            const textColor = step.color === 'tertiary' ? 'var(--color-tertiary-text)' : 'var(--color-primary-text)';

            return (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gray-300" />
                )}

                <div className="relative bg-surface-dim rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                  {/* Step Number Badge */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6" style={{
                    backgroundColor: bgColor
                  }}>
                    <Icon className="w-7 h-7" style={{ color: textColor }} />
                  </div>

                  {/* Step Number */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-secondary font-heading text-secondary-text">
                    {step.number}
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-primary-text" style={{
                    fontFamily: 'var(--font-heading)',

                  }}>
                    {step.title}
                  </h3>
                  <p className='text-balance' style={{
                    color: 'var(--color-primary-text)'
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

  )
}