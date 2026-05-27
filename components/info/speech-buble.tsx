

interface SpeechBubbleProps {
  title: string;
  description: string;
  className?: string;
}


export default function SpeechBubble({ title, description, className }: SpeechBubbleProps) {
  return (
    <div className="relative inline-block min-w-[500px] drop-shadow-xl">
      <div
        className="
      relative
      bg-secondary text-primary-foreground
      px-6 py-8
      rounded-2xl rounded-br-none
    "
      >
        <h3 className="text-xl font-semibold font-heading leading-tight">{title}</h3>

        <p className="mt-1 text-base font-body leading-snug text-primary-foreground/90">
          {description}
        </p>

        <span
          aria-hidden="true"
          className="
        absolute bottom-0 right-0
        translate-x-[calc(100%-1px)]
        h-0 w-0
        border-t-[16px] border-l-[20px]
        border-t-transparent
        border-l-secondary
      "
        />
      </div>
    </div>
  );
}


