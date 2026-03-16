import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'hover';
  padding?: 'sm' | 'md' | 'lg';
}

export function GlassCard({ 
  children, 
  className = '', 
  variant = 'default',
  padding = 'md' 
}: GlassCardProps) {
  const baseStyles = `
    relative overflow-hidden rounded-3xl
    backdrop-blur-lg backdrop-saturate-150
    bg-[var(--glass-bg-light)]
    border border-[var(--glass-border)]
    shadow-[var(--shadow-glass)]
    transition-all duration-300
  `;
  
  const variantStyles = {
    default: '',
    gradient: `
      before:absolute before:inset-0 before:bg-gradient-to-br 
      before:from-[var(--glass-bg-medium)] before:via-transparent before:to-transparent
      before:pointer-events-none
    `,
    hover: `
      hover:scale-[1.02] hover:shadow-[var(--shadow-elevated)]
      hover:bg-[var(--glass-bg-medium)] cursor-pointer
    `
  };
  
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}>
      {children}
    </div>
  );
}
