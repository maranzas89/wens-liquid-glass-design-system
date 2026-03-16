import React from 'react';

interface GlassToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'success' | 'warning' | 'danger';
  disabled?: boolean;
  className?: string;
}

export function GlassToggle({
  checked,
  onChange,
  size = 'md',
  variant = 'primary',
  disabled = false,
  className = ''
}: GlassToggleProps) {
  const sizes = {
    sm: { container: 'w-10 h-6', thumb: 'w-4 h-4', translate: 'translate-x-4' },
    md: { container: 'w-14 h-7', thumb: 'w-5 h-5', translate: 'translate-x-7' },
    lg: { container: 'w-16 h-8', thumb: 'w-6 h-6', translate: 'translate-x-8' }
  };

  const variants = {
    primary: 'from-[var(--brand-primary)] to-[var(--brand-primary)]',
    success: 'from-[var(--status-success)] to-[var(--status-success)]',
    warning: 'from-[var(--status-warning)] to-[var(--status-warning)]',
    danger: 'from-[var(--status-error)] to-[var(--status-error)]'
  };

  const s = sizes[size];
  const variantClass = variants[variant];

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`
        ${s.container}
        relative inline-flex items-center
        rounded-full
        transition-all duration-300
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${checked
          ? `bg-gradient-to-r ${variantClass} shadow-lg shadow-${variant === 'primary' ? 'blue' : variant === 'success' ? 'green' : variant === 'warning' ? 'yellow' : 'red'}-500/50`
          : 'bg-[var(--glass-bg-light)] border border-[var(--glass-border)]'
        }
        ${!disabled && 'hover:scale-105'}
        backdrop-blur-md
        ${className}
      `}
    >
      <span
        className={`
          ${s.thumb}
          inline-block
          rounded-full
          bg-white
          shadow-lg
          transform transition-transform duration-300
          ${checked ? s.translate : 'translate-x-1'}
        `}
      />
    </button>
  );
}
