import React from 'react';
import { cn } from '../../lib/cn';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type GlassCardVariant = 'default' | 'gradient' | 'hover';
export type GlassCardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual variant. */
  variant?: GlassCardVariant;
  /** Padding preset. */
  padding?: GlassCardPadding;
  children: React.ReactNode;
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const base = [
  'relative overflow-hidden rounded-3xl',
  'backdrop-blur-lg backdrop-saturate-150',
  'bg-white/10',
  'border border-white/20',
  'shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]',
  'transition-all duration-300',
].join(' ');

const variantMap: Record<GlassCardVariant, string> = {
  default: '',
  gradient: [
    'before:absolute before:inset-0 before:bg-gradient-to-br',
    'before:from-white/20 before:via-transparent before:to-transparent',
    'before:pointer-events-none',
  ].join(' '),
  hover: [
    'hover:scale-[1.02] hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.15)]',
    'hover:bg-white/15 cursor-pointer',
  ].join(' '),
};

const paddingMap: Record<GlassCardPadding, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  (
    { variant = 'default', padding = 'md', className, children, ...rest },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(base, variantMap[variant], paddingMap[padding], className)}
      {...rest}
    >
      {children}
    </div>
  ),
);

GlassCard.displayName = 'GlassCard';
