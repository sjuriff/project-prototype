
import type { LucideIcon } from "lucide-react";

interface PartnerCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  
  cardRef?: React.RefObject<HTMLDivElement>;
}

export default function PartnerCard ({ icon: Icon, title, description, cardRef }: PartnerCardProps)  {
    return (
      <div
        ref={cardRef}
        data-card
        className="group relative overflow-hidden bg-secondary rounded-xl p-6 text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
      >
        <div className="flex mb-4 justify-start ">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-text transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <h3 className="mb-2 text-xl font-heading leading-none tracking-tight">
          {title}
        </h3>
        <p className="leading-relaxed font.body text-secondary-text">{description}</p>
      </div>
    );
  }




