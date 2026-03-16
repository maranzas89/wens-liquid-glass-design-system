import React from 'react';

interface GlassKbdProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassKbd({ children, className = '' }: GlassKbdProps) {
  return (
    <kbd className={`
      inline-flex items-center justify-center
      px-2 py-1 min-w-[2rem]
      rounded-lg
      backdrop-blur-md backdrop-saturate-150
      bg-white/10
      border border-white/20
      text-white text-sm
      font-mono
      shadow-sm
      ${className}
    `}>
      {children}
    </kbd>
  );
}
