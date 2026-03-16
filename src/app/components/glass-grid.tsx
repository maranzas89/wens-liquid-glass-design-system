import React from 'react';

interface GlassGridProps {
  children: React.ReactNode;
  cols?: number | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  gap?: number | string;
  className?: string;
}

export function GlassGrid({ 
  children, 
  cols = 12, 
  gap = 6,
  className = '' 
}: GlassGridProps) {
  const getGridCols = () => {
    if (typeof cols === 'number') {
      return `grid-cols-${cols}`;
    }
    
    const classes = [];
    if (cols.xs) classes.push(`grid-cols-${cols.xs}`);
    if (cols.sm) classes.push(`sm:grid-cols-${cols.sm}`);
    if (cols.md) classes.push(`md:grid-cols-${cols.md}`);
    if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`);
    if (cols.xl) classes.push(`xl:grid-cols-${cols.xl}`);
    
    return classes.join(' ');
  };

  return (
    <div className={`grid ${getGridCols()} gap-${gap} ${className}`}>
      {children}
    </div>
  );
}

interface GlassColProps {
  children: React.ReactNode;
  span?: number | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  className?: string;
}

export function GlassCol({ children, span = 1, className = '' }: GlassColProps) {
  const getColSpan = () => {
    if (typeof span === 'number') {
      return `col-span-${span}`;
    }
    
    const classes = [];
    if (span.xs) classes.push(`col-span-${span.xs}`);
    if (span.sm) classes.push(`sm:col-span-${span.sm}`);
    if (span.md) classes.push(`md:col-span-${span.md}`);
    if (span.lg) classes.push(`lg:col-span-${span.lg}`);
    if (span.xl) classes.push(`xl:col-span-${span.xl}`);
    
    return classes.join(' ');
  };

  return (
    <div className={`${getColSpan()} ${className}`}>
      {children}
    </div>
  );
}

interface GlassContainerProps {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: boolean;
  className?: string;
}

export function GlassContainer({ 
  children, 
  maxWidth = 'xl', 
  padding = true,
  className = '' 
}: GlassContainerProps) {
  const maxWidths = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full'
  };

  return (
    <div className={`
      mx-auto ${maxWidths[maxWidth]}
      ${padding ? 'px-4 sm:px-6 lg:px-8' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
}
