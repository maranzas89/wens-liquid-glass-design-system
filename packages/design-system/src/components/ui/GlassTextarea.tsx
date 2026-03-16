import React from 'react';
import { cn } from '../../lib/cn';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface GlassTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Number of visible text rows. Defaults to 4. */
  rows?: number;
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const textareaBase = [
  'w-full rounded-2xl',
  'backdrop-blur-md backdrop-saturate-150',
  'bg-white/10',
  'border border-white/20',
  'px-4 py-3',
  'text-white placeholder:text-white/50',
  'outline-none',
  'focus:bg-white/15 focus:border-white/30',
  'focus:shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]',
  'transition-all duration-300',
  'resize-none',
].join(' ');

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export const GlassTextarea = React.forwardRef<
  HTMLTextAreaElement,
  GlassTextareaProps
>(({ className, rows = 4, ...rest }, ref) => (
  <textarea
    ref={ref}
    rows={rows}
    className={cn(textareaBase, className)}
    {...rest}
  />
));

GlassTextarea.displayName = 'GlassTextarea';
