import React from 'react';

interface GlassProgressProps {
  value: number;
  max?: number;
  variant?: 'primary' | 'success' | 'warning' | 'danger';
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function GlassProgress({ 
  value, 
  max = 100, 
  variant = 'primary',
  showLabel = true,
  size = 'md' 
}: GlassProgressProps) {
  const percentage = Math.min((value / max) * 100, 100);
  
  const variantStyles = {
    primary: 'bg-[var(--status-info)]',
    success: 'bg-[var(--status-success)]',
    warning: 'bg-[var(--status-warning)]',
    danger: 'bg-[var(--status-error)]'
  };
  
  const sizeStyles = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };
  
  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-white/90 text-sm">Progress</span>
          <span className="text-white/70 text-sm">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={`
        ${sizeStyles[size]} rounded-full
        backdrop-blur-md backdrop-saturate-150
        bg-[var(--glass-bg-light)]
        border border-[var(--glass-border)]
        overflow-hidden
      `}>
        <div
          className={`h-full ${variantStyles[variant]} transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
