import React from 'react';

interface GlassButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function GlassButton({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick,
  className = '',
  disabled = false 
}: GlassButtonProps) {
  const baseStyles = `
    relative overflow-hidden rounded-2xl
    backdrop-blur-md backdrop-saturate-150
    border border-[var(--glass-border)]
    transition-all duration-300
    hover:scale-105 hover:shadow-lg
    active:scale-95
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
  `;
  
  const variantStyles = {
    primary: `
      bg-[var(--glass-bg-light)] hover:bg-[var(--glass-bg-medium)]
      text-white shadow-[var(--shadow-btn-primary)]
      before:absolute before:inset-0 before:bg-gradient-to-br before:from-[var(--brand-primary)]/20 before:to-[var(--brand-secondary)]/20
    `,
    secondary: `
      bg-[var(--glass-bg-light)] hover:bg-[var(--glass-bg-medium)]
      text-white shadow-[var(--shadow-btn-secondary)]
      before:absolute before:inset-0 before:bg-gradient-to-br before:from-[var(--brand-secondary)]/20 before:to-[var(--status-error)]/20
    `,
    accent: `
      bg-[var(--glass-bg-light)] hover:bg-[var(--glass-bg-medium)]
      text-white shadow-[var(--shadow-btn-accent)]
      before:absolute before:inset-0 before:bg-gradient-to-br before:from-[var(--brand-accent)]/20 before:to-[var(--brand-primary)]/20
    `,
    success: `
      bg-[var(--glass-bg-light)] hover:bg-[var(--glass-bg-medium)]
      text-white shadow-[var(--shadow-btn-success)]
      before:absolute before:inset-0 before:bg-gradient-to-br before:from-[var(--status-success)]/20 before:to-[var(--status-success)]/20
    `,
    ghost: `
      bg-[var(--glass-bg-subtle)] hover:bg-[var(--glass-bg-light)]
      text-white/90 shadow-[var(--shadow-glass)]
    `
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center">{children}</span>
    </button>
  );
}