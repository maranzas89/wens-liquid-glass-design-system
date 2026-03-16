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
    border border-white/20
    transition-all duration-200
  `;
  
  const variantStyles = {
    default: 'bg-white/10 text-white/90',
    primary: 'bg-blue-500/20 text-blue-100 border-blue-400/30',
    success: 'bg-green-500/20 text-green-100 border-green-400/30',
    warning: 'bg-amber-500/20 text-amber-100 border-amber-400/30',
    danger: 'bg-red-500/20 text-red-100 border-red-400/30'
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
