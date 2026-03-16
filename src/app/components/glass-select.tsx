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
          bg-[var(--glass-bg-light)]
          border border-[var(--glass-border)]
          px-4 py-3
          text-white text-left
          outline-none
          focus:bg-[var(--glass-bg-medium)] focus:border-[var(--glass-border-strong)]
          transition-all duration-300
          flex items-center justify-between
        "
      >
        <span className={selectedOption ? 'text-white' : 'text-[var(--text-placeholder)]'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown 
          size={20} 
          className={`text-[var(--text-muted)] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
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
            bg-[var(--overlay-popover)]
            border border-[var(--glass-border)]
            rounded-2xl
            overflow-hidden
            shadow-[var(--shadow-overlay)]
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
                    ? 'bg-[var(--glass-bg-medium)] text-white'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--glass-bg-light)] hover:text-white'
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