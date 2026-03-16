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
    default: 'bg-white/10 text-white/90 border-white/20',
    primary: 'bg-blue-500/20 text-blue-100 border-blue-400/30',
    success: 'bg-green-500/20 text-green-100 border-green-400/30',
    warning: 'bg-amber-500/20 text-amber-100 border-amber-400/30',
    danger: 'bg-red-500/20 text-red-100 border-red-400/30'
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
            hover:bg-white/10 rounded-full p-0.5
            transition-colors duration-200
          "
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
