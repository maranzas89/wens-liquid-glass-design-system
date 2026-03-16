import React from 'react';

interface GlassPopoverProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export function GlassPopover({ 
  trigger, 
  children, 
  position = 'bottom',
  className = '' 
}: GlassPopoverProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const positionStyles = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2'
  };

  return (
    <div className={`relative ${className}`}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className={`
            absolute z-20 ${positionStyles[position]}
            min-w-[200px]
            backdrop-blur-xl backdrop-saturate-150
            bg-[var(--overlay-popover)]
            border border-[var(--glass-border)]
            rounded-2xl
            p-4
            shadow-[var(--shadow-overlay)]
            animate-in fade-in slide-in-from-top-2 duration-200
          `}>
            {children}
          </div>
        </>
      )}
    </div>
  );
}