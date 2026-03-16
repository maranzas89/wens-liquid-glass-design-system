import React from 'react';

interface GlassTypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'overline';
  children: React.ReactNode;
  className?: string;
  fontFamily?: string;
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  align?: 'left' | 'center' | 'right';
}

export function GlassTypography({ 
  variant = 'body', 
  children, 
  className = '',
  fontFamily,
  weight = 'normal',
  align = 'left'
}: GlassTypographyProps) {
  const variants = {
    h1: 'text-6xl md:text-7xl lg:text-8xl',
    h2: 'text-5xl md:text-6xl',
    h3: 'text-4xl md:text-5xl',
    h4: 'text-3xl md:text-4xl',
    h5: 'text-2xl md:text-3xl',
    h6: 'text-xl md:text-2xl',
    body: 'text-base',
    caption: 'text-sm',
    overline: 'text-xs uppercase tracking-wider'
  };

  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black'
  };

  const aligns = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const Tag = variant.startsWith('h') ? variant : 'p';

  return React.createElement(
    Tag,
    {
      className: `${variants[variant]} ${weights[weight]} ${aligns[align]} text-white ${className}`,
      style: fontFamily ? { fontFamily } : undefined
    },
    children
  );
}

interface GlassTextGradientProps {
  children: React.ReactNode;
  gradient?: string;
  className?: string;
}

export function GlassTextGradient({ 
  children, 
  gradient = 'from-blue-400 via-purple-400 to-pink-400',
  className = '' 
}: GlassTextGradientProps) {
  return (
    <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}

interface GlassTextEffectProps {
  children: React.ReactNode;
  effect?: 'glow' | 'shadow' | 'outline' | 'blur';
  className?: string;
}

export function GlassTextEffect({ 
  children, 
  effect = 'glow',
  className = '' 
}: GlassTextEffectProps) {
  const effects = {
    glow: 'drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]',
    shadow: 'drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]',
    outline: 'text-stroke-white',
    blur: 'blur-[0.5px]'
  };

  return (
    <span className={`text-white ${effects[effect]} ${className}`}>
      {children}
    </span>
  );
}
