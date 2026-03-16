import React from 'react';
import { cn } from '../../lib/cn';
import { shadows } from '../../tokens/shadows';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type GlassButtonVariant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'danger'
  | 'ghost';

export type GlassButtonSize = 'sm' | 'md' | 'lg';

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant. */
  variant?: GlassButtonVariant;
  /** Size preset — controls padding and font-size. */
  size?: GlassButtonSize;
  children: React.ReactNode;
}

// ---------------------------------------------------------------------------
// Style maps (token-aligned)
// ---------------------------------------------------------------------------

const base = [
  'relative overflow-hidden rounded-2xl',
  'backdrop-blur-md backdrop-saturate-150',
  'border border-white/20',
  'transition-all duration-300',
  'hover:scale-105 hover:shadow-lg',
  'active:scale-95',
  'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
].join(' ');

const variantMap: Record<GlassButtonVariant, string> = {
  primary: [
    'bg-white/10 hover:bg-white/20 text-white',
    `shadow-[${shadows.button.primary.replace(/ /g, '_')}]`.replace(
      /shadow-\[.*\]/,
      'shadow-[0_8px_32px_0_rgba(103,126,234,0.37)]',
    ),
    'before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-400/20 before:to-blue-500/20',
  ].join(' '),

  secondary: [
    'bg-white/10 hover:bg-white/20 text-white',
    'shadow-[0_8px_32px_0_rgba(240,147,251,0.37)]',
    'before:absolute before:inset-0 before:bg-gradient-to-br before:from-pink-400/20 before:to-rose-500/20',
  ].join(' '),

  accent: [
    'bg-white/10 hover:bg-white/20 text-white',
    'shadow-[0_8px_32px_0_rgba(79,172,254,0.37)]',
    'before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-400/20 before:to-blue-400/20',
  ].join(' '),

  success: [
    'bg-white/10 hover:bg-white/20 text-white',
    'shadow-[0_8px_32px_0_rgba(67,233,123,0.37)]',
    'before:absolute before:inset-0 before:bg-gradient-to-br before:from-green-400/20 before:to-teal-400/20',
  ].join(' '),

  danger: [
    'bg-white/10 hover:bg-white/20 text-white',
    'shadow-[0_8px_32px_0_rgba(245,87,108,0.37)]',
    'before:absolute before:inset-0 before:bg-gradient-to-br before:from-red-400/20 before:to-pink-500/20',
  ].join(' '),

  ghost: [
    'bg-white/5 hover:bg-white/10',
    'text-white/90 shadow-[0_4px_16px_0_rgba(0,0,0,0.1)]',
  ].join(' '),
};

const sizeMap: Record<GlassButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  (
    { variant = 'primary', size = 'md', className, children, ...rest },
    ref,
  ) => (
    <button
      ref={ref}
      className={cn(base, variantMap[variant], sizeMap[size], className)}
      {...rest}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  ),
);

GlassButton.displayName = 'GlassButton';
