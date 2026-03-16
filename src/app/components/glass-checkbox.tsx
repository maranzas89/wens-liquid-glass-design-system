import React from 'react';
import { Check } from 'lucide-react';

interface GlassCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export function GlassCheckbox({
  checked,
  onChange,
  label,
  description,
  size = 'md',
  disabled = false,
  className = ''
}: GlassCheckboxProps) {
  const sizes = {
    sm: { box: 'w-4 h-4', icon: 14, text: 'text-sm', description: 'text-xs' },
    md: { box: 'w-5 h-5', icon: 16, text: 'text-base', description: 'text-sm' },
    lg: { box: 'w-6 h-6', icon: 18, text: 'text-lg', description: 'text-base' }
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
          type="checkbox"
          checked={checked}
          onChange={(e) => !disabled && onChange(e.target.checked)}
          disabled={disabled}
          className="sr-only"
        />
        <div
          className={`
            ${s.box}
            rounded-md
            backdrop-blur-md
            border-2
            transition-all duration-300
            flex items-center justify-center
            ${checked
              ? 'bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary)] border-[var(--status-info-border)] shadow-lg'
              : 'bg-[var(--glass-bg-light)] border-[var(--glass-border-strong)] hover:border-white/50'
            }
            ${!disabled && 'hover:scale-110'}
          `}
        >
          {checked && (
            <Check
              size={s.icon}
              className="text-white"
              strokeWidth={3}
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
