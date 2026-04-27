import { Check, Globe } from "lucide-react";
import PrimaryButton from "../buttons/primary-button";


interface PlanCardProps {
  title: string;
  price: string;
  currency?: string;
  period?: string;
  subtext?: string;
  features: string[];

}

const PlanCard = ({
  title,
  price,
  currency = "NOK",
  period = "måned",
  subtext,
  features,
 
}: PlanCardProps) => {
  return (
    <div
      className={`plan-card relative opacity-1 shadow-lg  text-tertiary-text flex flex-col col-span-4 md:col-span-2 w-full rounded-2xl bg-tertiary p-8 transition-all duration-300 hover:-translate-y-1 `}
      
    >
      <div className="mb-6 flex items-center gap-3">
        <div
          className={`flex h-11 w-11 items-center bg-secondary justify-center rounded-full `}
        >
          <Globe className="h-5 text-secondary-text w-5" />
        </div>
        <h3 className="text-xl font-heading text-tertiary-text tracking-tight">{title}</h3>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-body text-tertiary-text tracking-tight">{price}</span>
          <span className={`text-sm  font-body text-tertiary-text font-medium `}>
            {currency}
          </span>
        </div>
        <p className={`mt-1 text-sm `}>
          per {period}
        </p>
        {subtext && (
          <p className={`mt-2 text-xs `}>
            {subtext}
          </p>
        )}
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <Check
              className={`mt-0.5 h-4 w-4 text-primary shrink-0 `}
            />
            <span className={``}>{feature}</span>
          </li>
        ))}
      </ul>

      <PrimaryButton

      >
        Kjøp
      </PrimaryButton>
    </div>
  );
};

export default PlanCard;
