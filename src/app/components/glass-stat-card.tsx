import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface GlassStatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning';
  className?: string;
}

export function GlassStatCard({ 
  title, 
  value, 
  change, 
  icon, 
  variant = 'default',
  className = '' 
}: GlassStatCardProps) {
  const variantGradients = {
    default: 'from-[var(--glass-bg-light)] to-[var(--glass-bg-subtle)]',
    primary: 'from-[var(--status-info-light)] to-[var(--brand-secondary)]/10',
    success: 'from-[var(--status-success-light)] to-[var(--status-success)]/10',
    warning: 'from-[var(--status-warning-light)] to-[var(--status-warning)]/10'
  };
  
  return (
    <div className={`
      backdrop-blur-md backdrop-saturate-150
      bg-gradient-to-br ${variantGradients[variant]}
      border border-[var(--glass-border)]
      rounded-3xl
      p-6
      ${className}
    `}>
      <div className="flex items-start justify-between mb-4">
        <p className="text-white/70 text-sm">{title}</p>
        {icon && (
          <div className="p-2 rounded-xl bg-[var(--glass-bg-light)]">
            {icon}
          </div>
        )}
      </div>
      
      <div className="flex items-end justify-between">
        <h3 className="text-3xl text-white">{value}</h3>
        
        {change !== undefined && (
          <div className={`
            flex items-center gap-1 text-sm
            ${change >= 0 ? 'text-[var(--status-success)]' : 'text-[var(--status-error)]'}
          `}>
            {change >= 0 ? (
              <TrendingUp size={16} />
            ) : (
              <TrendingDown size={16} />
            )}
            <span>{Math.abs(change)}%</span>
          </div>
        )}
      </div>
    </div>
  );
}
