import React from 'react';
import { X } from 'lucide-react';

interface GlassChipProps {
  label: string;
  onDelete?: () => void;
  icon?: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  className?: string;
}

export function GlassChip({ 
  label, 
  onDelete, 
  icon, 
  variant = 'default',
  className = '' 
}: GlassChipProps) {
  const variantStyles = {
    default: 'bg-[var(--glass-bg-light)] text-white/90 border-[var(--glass-border)]',
    primary: 'bg-[var(--status-info-light)] text-blue-100 border-[var(--status-info-border)]',
    success: 'bg-[var(--status-success-light)] text-green-100 border-[var(--status-success-border)]',
    warning: 'bg-[var(--status-warning-light)] text-amber-100 border-[var(--status-warning-border)]',
    danger: 'bg-[var(--status-error-light)] text-red-100 border-[var(--status-error-border)]'
  };
  
  return (
    <div className={`
      inline-flex items-center gap-2
      px-3 py-1.5
      rounded-full
      backdrop-blur-md backdrop-saturate-150
      border
      ${variantStyles[variant]}
      transition-all duration-200
      ${className}
    `}>
      {icon && <span>{icon}</span>}
      <span className="text-sm">{label}</span>
      {onDelete && (
        <button
          onClick={onDelete}
          className="
            hover:bg-[var(--glass-bg-light)] rounded-full p-0.5
            transition-colors duration-200
          "
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
