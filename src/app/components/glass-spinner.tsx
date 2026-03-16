import React from 'react';

interface GlassSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'success' | 'warning';
  className?: string;
}

export function GlassSpinner({ size = 'md', variant = 'primary', className = '' }: GlassSpinnerProps) {
  const sizeStyles = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
    xl: 'w-16 h-16 border-4'
  };

  const variantStyles = {
    primary: 'border-[var(--glass-border)] border-t-white',
    success: 'border-[var(--status-success-light)] border-t-[var(--status-success)]',
    warning: 'border-[var(--status-warning-light)] border-t-[var(--status-warning)]'
  };
  
  return (
    <div
      className={`
        ${sizeStyles[size]}
        rounded-full
        ${variantStyles[variant]}
        animate-spin
        ${className}
      `}
    />
  );
}

export function GlassLoadingOverlay({ message, onClose }: { message?: string; onClose?: () => void }) {
  return (
    <div 
      className="fixed inset-0 z-50 backdrop-blur-sm bg-[var(--overlay-backdrop)] flex flex-col items-center justify-center gap-4"
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <GlassSpinner size="lg" />
      </div>
      {message && (
        <p className="text-white text-lg">{message}</p>
      )}
    </div>
  );
}
