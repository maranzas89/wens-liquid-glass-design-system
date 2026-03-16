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
    primary: 'border-white/20 border-t-white',
    success: 'border-green-500/20 border-t-green-400',
    warning: 'border-yellow-500/20 border-t-yellow-400'
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
      className="fixed inset-0 z-50 backdrop-blur-sm bg-black/40 flex flex-col items-center justify-center gap-4"
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
