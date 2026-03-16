import React from 'react';

interface GlassBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function GlassBadge({ 
  children, 
  variant = 'default', 
  size = 'md',
  className = '' 
}: GlassBadgeProps) {
  const baseStyles = `
    inline-flex items-center justify-center
    rounded-full
    backdrop-blur-md backdrop-saturate-150
    border border-[var(--glass-border)]
    transition-all duration-200
  `;
  
  const variantStyles = {
    default: 'bg-[var(--glass-bg-light)] text-white/90',
    primary: 'bg-[var(--status-info-light)] text-blue-100 border-[var(--status-info-border)]',
    success: 'bg-[var(--status-success-light)] text-green-100 border-[var(--status-success-border)]',
    warning: 'bg-[var(--status-warning-light)] text-amber-100 border-[var(--status-warning-border)]',
    danger: 'bg-[var(--status-error-light)] text-red-100 border-[var(--status-error-border)]'
  };
  
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  };
  
  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {children}
    </span>
  );
}
