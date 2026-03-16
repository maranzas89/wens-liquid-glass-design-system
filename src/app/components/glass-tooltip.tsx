import React from 'react';

interface GlassTooltipProps {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export function GlassTooltip({ children, content, position = 'top' }: GlassTooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  
  const positionStyles = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2'
  };
  
  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`
          absolute z-50 ${positionStyles[position]}
          px-3 py-2 rounded-xl
          backdrop-blur-xl backdrop-saturate-150
          bg-black/85
          border border-white/20
          shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]
          text-white text-sm whitespace-nowrap
          animate-in fade-in zoom-in-95 duration-200
          pointer-events-none
        `}>
          {content}
        </div>
      )}
    </div>
  );
}