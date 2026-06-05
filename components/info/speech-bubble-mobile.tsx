interface SpeechBubbleProps {
  title: string;
  description: string;
  step:number
  className?: string;
}

export default function SpeechBubbleMobile({
  title,
  description,
  step,
  className,
}: SpeechBubbleProps) {
  return (
    <div className="relative inline-block w-full min-w-screen min-h-[200px]  drop-shadow-xl">
   
      <div
        className="
          relative
          bg-secondary text-primary-foreground
          px-6 py-4
          rounded-t-2xl
          h-full
          max-h-full
        "
      >
           <span  className="absolute top-2 font-body font-semibold right-4 text-base text-tertiary">{step}</span>
        <h3 className="md:text-xl text-lg font-semibold font-heading leading-tight">
          {title}
        </h3>

        <p className="mt-1 md:text-base text-sm font-body leading-snug text-primary-foreground/90">
          {description}
        </p>

        {/* Tail */}
        <span
          aria-hidden="true"
          className="
            absolute
            left-[65%] bottom-0
            -translate-x-1/2 translate-y-[calc(100%-1px)]
            h-0 w-0
            border-l-[16px] border-r-[16px] border-t-[20px]
            border-l-transparent
            border-r-transparent
            border-t-secondary
          "
        />
      </div>
    </div>
  );
}