import { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';

interface FilterOption {
  value: string;
  label: string;
}

interface FilterDropdownProps {
  label: string;
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
}

export default function FilterDropdown({ label, options, value, onChange }: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<SVGSVGElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen]);

  // Animate open/close
  useGSAP(() => {
    if (!dropdownRef.current) return;

    if (isOpen) {
      gsap.set(dropdownRef.current, { display: 'block' });
      gsap.fromTo(dropdownRef.current,
        { opacity: 0, y: 4, scale: 0.98 },
        { opacity: 1, y: 6, scale: 1, duration: 0.15, ease: 'circ.out' }
      );
    } else {
      gsap.to(dropdownRef.current, {
        opacity: 0, y: 4, scale: 0.98, duration: 0.1, ease: 'circ.in',
        onComplete: () => {
          gsap.set(dropdownRef.current, { display: 'none' });
        }
      
      });
    }
  }, { dependencies: [isOpen], scope: containerRef });

  // Chevron rotation
  useGSAP(() => {
    if (!chevronRef.current) return;
    gsap.to(chevronRef.current, { rotation: isOpen ? 180 : 0, duration: 0.15, ease: 'circ.out' });
  }, { dependencies: [isOpen] });

  const activeLabel = options.find(o => o.value === value)?.label ?? label;

  return (
    <div ref={containerRef} className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-2 h-9 px-3 text-[13px] font-medium border-secondary-text hover:cursor-pointer rounded-full hover:bg-surface-blue border hover:shadow-md transition-colors duration-150
          ${value
            ? 'bg-accent/10 border-primary text-secondary-text hover:bg-accent/20'
            : ' bg-surface'
          }
        `}
      >
        <span className="truncate max-w-[120px]">{activeLabel}</span>
        <ChevronDown ref={chevronRef} size={14} />
      </button>

      <div
        ref={dropdownRef}
        style={{ display: 'none' }}
        className="absolute top-full left-0   min-w-[180px] bg-surface-blue shadow-lg  rounded-xl  overflow-hidden"
      >
        <div className="p-1 space-y-1">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value === value ? '' : option.value);
                setIsOpen(false);
              }}
              className={`
                w-full text-left  px-3 py-2 text-[13px] rounded-full transition-colors
                ${option.value === value
                  ? 'bg-light-yellow text-primary-text font-semibold'
                  : 'text-primary-text hover:bg-surface font-normal'
                }
              `}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}