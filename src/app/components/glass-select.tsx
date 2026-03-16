import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectOption {
  label: string;
  value: string;
}

interface GlassSelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function GlassSelect({ 
  options, 
  value, 
  onChange, 
  placeholder = 'Select an option',
  className = '' 
}: GlassSelectProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const selectedOption = options.find(opt => opt.value === value);
  
  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full rounded-2xl
          backdrop-blur-md backdrop-saturate-150
          bg-white/10
          border border-white/20
          px-4 py-3
          text-white text-left
          outline-none
          focus:bg-white/15 focus:border-white/30
          transition-all duration-300
          flex items-center justify-between
        "
      >
        <span className={selectedOption ? 'text-white' : 'text-white/50'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown 
          size={20} 
          className={`text-white/60 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="
            absolute top-full left-0 right-0 mt-2 z-20
            backdrop-blur-xl backdrop-saturate-150
            bg-black/85
            border border-white/15
            rounded-2xl
            overflow-hidden
            shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]
            animate-in fade-in slide-in-from-top-2 duration-200
          ">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`
                  w-full px-4 py-3 text-left
                  transition-colors duration-150
                  ${value === option.value
                    ? 'bg-white/20 text-white'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }
                `}
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}