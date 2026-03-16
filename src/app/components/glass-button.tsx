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
    border border-white/20
    transition-all duration-300
    hover:scale-105 hover:shadow-lg
    active:scale-95
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
  `;
  
  const variantStyles = {
    primary: `
      bg-white/10 hover:bg-white/20
      text-white shadow-[0_8px_32px_0_rgba(103,126,234,0.37)]
      before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-400/20 before:to-blue-500/20
    `,
    secondary: `
      bg-white/10 hover:bg-white/20
      text-white shadow-[0_8px_32px_0_rgba(240,147,251,0.37)]
      before:absolute before:inset-0 before:bg-gradient-to-br before:from-pink-400/20 before:to-rose-500/20
    `,
    accent: `
      bg-white/10 hover:bg-white/20
      text-white shadow-[0_8px_32px_0_rgba(79,172,254,0.37)]
      before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-400/20 before:to-blue-400/20
    `,
    success: `
      bg-white/10 hover:bg-white/20
      text-white shadow-[0_8px_32px_0_rgba(67,233,123,0.37)]
      before:absolute before:inset-0 before:bg-gradient-to-br before:from-green-400/20 before:to-teal-400/20
    `,
    ghost: `
      bg-white/5 hover:bg-white/10
      text-white/90 shadow-[0_4px_16px_0_rgba(0,0,0,0.1)]
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