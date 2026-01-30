'use client'
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface Tier {
  data: string;
  validity: string;
  price: string;
}

interface CustomDropdownProps {
  options: Tier[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function CustomDropdown({
  options,
  value,
  onChange,
  placeholder = 'Select an option...',
  className = '',
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.data === value);

  // Chevron rotation animation with GSAP
  useGSAP(() => {
    if (chevronRef.current) {
      gsap.to(chevronRef.current, {
        rotation: isOpen ? 180 : 0,
        duration: 0.3,
        ease: 'power2.inOut',
      });
    }
  }, [isOpen]);

  // Dropdown menu animation with GSAP
  useGSAP(() => {
    if (menuRef.current) {
      if (isOpen) {
        gsap.fromTo(
          menuRef.current,
          {
            opacity: 0,
            y: -10,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.2,
            ease: 'power2.out',
          }
        );
      }
    }
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={`relative w-full ${className}`}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-28 group  flex items-center justify-center rounded-xl  transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-primary shadow-sm hover:shadow-md"
      >
        <span className={selectedOption ? 'text-secondary-text font-body' : 'text-secondary-text font-body'}>
          {selectedOption ? selectedOption.data : placeholder}
        </span>
        <div ref={chevronRef} className="ml-3">
          <ChevronDown className="size-5 group-hover:scale-105 text-secondary-text" strokeWidth={2.5} />
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute z-50 w-full mt-3 bg-white border-2 border-gray-200 rounded-xl shadow-xl overflow-hidden"
        >
          <div className="py-2 max-h-50 overflow-y-auto">
            {options.map((option) => (
              <button
                key={option.data}
                onClick={() => handleSelect(option.data)}
                className="w-full px-5 py-3 flex items-center justify-between hover:bg-indigo-50 transition-colors text-left group"
              >
                <span
                  className={
                    option.data === value
                      ? 'text-indigo-600'
                      : 'text-gray-700 group-hover:text-gray-900'
                  }
                >
                  {option.data}
                </span>
                {option.data === value && (
                  <div>
                    <Check className="size-5 text-indigo-600" strokeWidth={2.5} />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
