import React from 'react';
import { X } from 'lucide-react';

interface GlassModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function GlassModal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md'
}: GlassModalProps) {
  if (!isOpen) return null;

  const sizeStyles = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[var(--overlay-backdrop)] backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className={`
        relative w-full ${sizeStyles[size]}
        backdrop-blur-xl backdrop-saturate-150
        bg-[var(--overlay-popover)]
        border border-[var(--glass-border)]
        rounded-3xl
        shadow-[var(--shadow-overlay)]
        overflow-hidden
        animate-in fade-in zoom-in-95 duration-200
      `}>
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between p-6 border-b border-[var(--glass-border)]">
            <h3 className="text-xl text-white">{title}</h3>
            <button
              onClick={onClose}
              className="
                text-white/70 hover:text-white
                transition-colors duration-200
                p-2 rounded-xl
                hover:bg-[var(--glass-bg-light)]
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
    </div>
  );
}
