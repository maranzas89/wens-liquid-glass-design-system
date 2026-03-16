import React from 'react';

interface GlassRadioProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export function GlassRadio({
  checked,
  onChange,
  label,
  description,
  name,
  size = 'md',
  disabled = false,
  className = ''
}: GlassRadioProps) {
  const sizes = {
    sm: { outer: 'w-4 h-4', inner: 'w-2 h-2', text: 'text-sm', description: 'text-xs' },
    md: { outer: 'w-5 h-5', inner: 'w-2.5 h-2.5', text: 'text-base', description: 'text-sm' },
    lg: { outer: 'w-6 h-6', inner: 'w-3 h-3', text: 'text-lg', description: 'text-base' }
  };

  const s = sizes[size];

  return (
    <label
      className={`
        flex items-start gap-3
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      <div className="relative flex items-center justify-center pt-0.5">
        <input
          type="radio"
          name={name}
          checked={checked}
          onChange={(e) => !disabled && onChange(e.target.checked)}
          disabled={disabled}
          className="sr-only"
        />
        <div
          className={`
            ${s.outer}
            rounded-full
            backdrop-blur-md
            border-2
            transition-all duration-300
            flex items-center justify-center
            ${checked
              ? 'bg-gradient-to-br from-purple-400/20 to-purple-600/20 border-purple-400/50 shadow-lg shadow-purple-500/50'
              : 'bg-white/10 border-white/30 hover:border-white/50'
            }
            ${!disabled && 'hover:scale-110'}
          `}
        >
          {checked && (
            <div
              className={`
                ${s.inner}
                rounded-full
                bg-gradient-to-br from-purple-400 to-purple-600
                shadow-lg
              `}
            />
          )}
        </div>
      </div>
      
      {(label || description) && (
        <div className="flex-1">
          {label && (
            <div className={`text-white font-medium ${s.text}`}>
              {label}
            </div>
          )}
          {description && (
            <div className={`text-white/60 ${s.description} mt-1`}>
              {description}
            </div>
          )}
        </div>
      )}
    </label>
  );
}

interface RadioOption {
  label: string;
  value: string;
  description?: string;
}

interface GlassRadioGroupProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export function GlassRadioGroup({
  options,
  value,
  onChange,
  name,
  size = 'md',
  disabled = false,
  className = ''
}: GlassRadioGroupProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {options.map((option) => (
        <GlassRadio
          key={option.value}
          checked={value === option.value}
          onChange={() => onChange(option.value)}
          label={option.label}
          description={option.description}
          name={name}
          size={size}
          disabled={disabled}
        />
      ))}
    </div>
  );
}