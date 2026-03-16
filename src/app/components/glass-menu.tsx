import React from 'react';

interface MenuItem {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  divider?: boolean;
  disabled?: boolean;
}

interface GlassMenuProps {
  items: MenuItem[];
  trigger: React.ReactNode;
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  className?: string;
}

export function GlassMenu({ 
  items, 
  trigger, 
  position = 'bottom-left',
  className = '' 
}: GlassMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const positionStyles = {
    'bottom-left': 'top-full left-0 mt-2',
    'bottom-right': 'top-full right-0 mt-2',
    'top-left': 'bottom-full left-0 mb-2',
    'top-right': 'bottom-full right-0 mb-2'
  };
  
  return (
    <div className={`relative ${className}`}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-[100]" 
            onClick={() => setIsOpen(false)}
          />
          <div className={`
            absolute z-[101] ${positionStyles[position]}
            min-w-[200px]
            backdrop-blur-xl backdrop-saturate-150
            bg-black/85
            border border-white/20
            rounded-2xl
            overflow-hidden
            shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]
            animate-in fade-in slide-in-from-top-2 duration-200
          `}>
            {items.map((item, index) => (
              <div key={index}>
                {item.divider ? (
                  <div className="h-px bg-white/20 my-2" />
                ) : (
                  <button
                    onClick={() => {
                      if (!item.disabled) {
                        item.onClick?.();
                        setIsOpen(false);
                      }
                    }}
                    disabled={item.disabled}
                    className={`
                      w-full px-4 py-3 text-left
                      flex items-center gap-3
                      transition-colors duration-150
                      ${item.disabled
                        ? 'text-white/40 cursor-not-allowed'
                        : 'text-white/90 hover:bg-white/10 hover:text-white'
                      }
                    `}
                  >
                    {item.icon && <span>{item.icon}</span>}
                    <span>{item.label}</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}