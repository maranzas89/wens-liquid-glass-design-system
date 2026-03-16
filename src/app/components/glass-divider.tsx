import React from 'react';

interface GlassDividerProps {
  orientation?: 'horizontal' | 'vertical';
  label?: string;
  className?: string;
}

export function GlassDivider({ orientation = 'horizontal', label, className = '' }: GlassDividerProps) {
  if (orientation === 'vertical') {
    return (
      <div className={`w-px h-full bg-white/20 ${className}`} />
    );
  }
  
  if (label) {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <div className="flex-1 h-px bg-white/20" />
        <span className="text-white/60 text-sm">{label}</span>
        <div className="flex-1 h-px bg-white/20" />
      </div>
    );
  }
  
  return <div className={`h-px bg-white/20 ${className}`} />;
}
