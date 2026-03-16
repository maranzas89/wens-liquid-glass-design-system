import React from 'react';
import { X } from 'lucide-react';

interface GlassDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  position?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg';
}

export function GlassDrawer({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  position = 'right',
  size = 'md' 
}: GlassDrawerProps) {
  if (!isOpen) return null;

  const positionStyles = {
    left: 'left-0 top-0 bottom-0',
    right: 'right-0 top-0 bottom-0',
    top: 'top-0 left-0 right-0',
    bottom: 'bottom-0 left-0 right-0'
  };

  const sizeStyles = {
    left: { sm: 'w-64', md: 'w-96', lg: 'w-[32rem]' },
    right: { sm: 'w-64', md: 'w-96', lg: 'w-[32rem]' },
    top: { sm: 'h-64', md: 'h-96', lg: 'h-[32rem]' },
    bottom: { sm: 'h-64', md: 'h-96', lg: 'h-[32rem]' }
  };

  const slideAnimation = {
    left: 'animate-in slide-in-from-left',
    right: 'animate-in slide-in-from-right',
    top: 'animate-in slide-in-from-top',
    bottom: 'animate-in slide-in-from-bottom'
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`
        fixed z-50
        ${positionStyles[position]}
        ${sizeStyles[position][size]}
        backdrop-blur-xl backdrop-saturate-150
        bg-black/85
        border border-white/20
        shadow-[0_16px_48px_0_rgba(0,0,0,0.3)]
        ${slideAnimation[position]} duration-300
        ${(position === 'left' || position === 'right') ? 'overflow-y-auto' : 'overflow-x-auto'}
      `}>
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between p-6 border-b border-white/20">
            <h3 className="text-xl text-white">{title}</h3>
            <button
              onClick={onClose}
              className="
                text-white/70 hover:text-white
                transition-colors duration-200
                p-2 rounded-xl
                hover:bg-white/10
              "
            >
              <X size={20} />
            </button>
          </div>
        )}
        
        {/* Content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </>
  );
}