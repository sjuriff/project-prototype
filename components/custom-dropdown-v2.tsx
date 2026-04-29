import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Check, ChevronDown, Plane } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePortal from "@/hooks/use-portal";

gsap.registerPlugin(useGSAP);

const options = [
  "7 dager",
  "8-10 dager",
  "11-14 dager",
  "15-28 dager",
  "1 måned +",
];

interface DurationDropdownProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}



export default function DurationDropdown({
  value,
  onChange,
  placeholder = "Velg varighet",
}: DurationDropdownProps) {
  const [open, setOpen] = useState(false);
  const [render, setRender] = useState(false);
  const [selected, setSelected] = useState<string | undefined>(value);

  const ref = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const planeRef = useRef<SVGSVGElement>(null);
  const chevronRef = useRef<SVGSVGElement>(null);

  

  // Click outside (fungerer med portal)
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;

      const clickedTrigger = ref.current?.contains(target);
      const clickedList = listRef.current?.contains(target);

      if (!clickedTrigger && !clickedList) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Oppdater posisjon ved open + scroll/resize


  // Chevron + close animation
  useGSAP(() => {
    if (chevronRef.current) {
      gsap.to(chevronRef.current, {
        rotation: open ? 180 : 0,
        duration: 0.3,
        ease: "power2.out",
        transformOrigin: "center",
      });
    }

    if (open) {
      setRender(true);
    } else if (listRef.current) {
      const items = listRef.current.querySelectorAll("li");

      gsap.to(items, {
        opacity: 0,
        y: -6,
        duration: 0.15,
        stagger: 0.02,
        ease: "power2.in",
      });

      gsap.to(listRef.current, {
        opacity: 0,
        y: -8,
        scale: 0.97,
        duration: 0.18,
        ease: "power2.in",
        onComplete: () => setRender(false),
      });
    }
  }, [open]);

  // Animate inn liste
  useLayoutEffect(() => {
    if (render && listRef.current) {
      const items = listRef.current.querySelectorAll("li");

      gsap.fromTo(
        listRef.current,
        { opacity: 0, y: -8, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.22, ease: "power3.out" }
      );

      gsap.fromTo(
        items,
        { opacity: 0, y: -8 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.04,
          ease: "power3.out",
        }
      );
    }
  }, [render]);

  const handleSelect = (option: string) => {
    setSelected(option);
    onChange?.(option);
    setOpen(false);

    if (planeRef.current) {
      gsap
        .timeline()
        .to(planeRef.current, {
          x: 30,
          y: -20,
          rotation: -25,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        })
        .set(planeRef.current, { x: -30, y: 20, rotation: -25 })
        .to(planeRef.current, {
          x: 0,
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        });
    }
  };

  const handleHoverPlane = () => {
    if (planeRef.current) {
      gsap.to(planeRef.current, {
        x: 2,
        y: -2,
        rotation: -10,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleLeavePlane = () => {
    if (planeRef.current) {
      gsap.to(planeRef.current, {
        x: 0,
        y: 0,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <div ref={ref} className="relative w-72">
      <button
        type="button"
        onClick={() => { 
          setOpen((o) => !o);
        }}
        onMouseEnter={handleHoverPlane}
        onMouseLeave={handleLeavePlane}
        className={`flex w-full items-center justify-between gap-2 rounded-lg border border-tertiary bg-card px-4 py-3 text-left text-sm font-medium text-secondary-text shadow-sm transition-all
        hover:border-primary/40 hover:shadow-md
        ${open && "border-primary-text ring-2 ring-primary/20"}`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          <Plane ref={planeRef} className="h-4 w-4 text-tertiary" />
          <span className={`${!selected && "text-muted-foreground"}`}>
            {selected ?? placeholder}
          </span>
        </span>
        <ChevronDown ref={chevronRef} className="h-4 w-4 text-tertiary" />
      </button>

      {render &&
        
          <ul
            ref={listRef}
            role="listbox"
            
            className="z-[9999] absolute top-full w-full mt-2 overflow-hidden rounded-lg border border-tertiary bg-surface-blue p-1 shadow-lg"
          >
            {options.map((option) => {
              const isSelected = option === selected;

              return (
                <li key={option}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(option)}
                    className={`
                      flex w-full font-body items-center justify-between rounded-md px-3 py-2 text-sm transition-colors
                      hover:bg-secondary hover:text-tertiary
                      ${
                        isSelected &&
                        "bg-accent/60 text-accent-foreground font-medium"
                      }
                    `}
                  >
                    <span>{option}</span>
                    {isSelected && (
                      <Check className="h-4 w-4 text-primary" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        }
    </div>
  );
}