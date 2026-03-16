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
    bg-white/10
    border border-white/20
    shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]
    transition-all duration-300
  `;
  
  const variantStyles = {
    default: '',
    gradient: `
      before:absolute before:inset-0 before:bg-gradient-to-br 
      before:from-white/20 before:via-transparent before:to-transparent
      before:pointer-events-none
    `,
    hover: `
      hover:scale-[1.02] hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.15)]
      hover:bg-white/15 cursor-pointer
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
