import React from 'react';
import { MoreVertical, TrendingUp, TrendingDown } from 'lucide-react';

interface GlassDashletProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    label?: string;
  };
  actions?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  className?: string;
}

export function GlassDashlet({ 
  title, 
  value, 
  subtitle,
  icon,
  trend,
  actions,
  footer,
  variant = 'default',
  className = '' 
}: GlassDashletProps) {
  const variantGradients = {
    default: 'from-[var(--glass-bg-light)] to-[var(--glass-bg-subtle)]',
    primary: 'from-[var(--brand-primary)]/20 to-[var(--brand-secondary)]/10',
    success: 'from-[var(--status-success-light)] to-[var(--status-success)]/10',
    warning: 'from-[var(--status-warning-light)] to-[var(--status-warning)]/10',
    danger: 'from-[var(--status-error-light)] to-[var(--status-error)]/10'
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
        <div className="flex-1">
          <p className="text-[var(--text-tertiary)] text-sm mb-1">{title}</p>
          <div className="flex items-baseline gap-3">
            <h3 className="text-4xl text-white">{value}</h3>
            {trend && (
              <div className={`
                flex items-center gap-1 text-sm
                ${trend.value >= 0 ? 'text-[var(--status-success)]' : 'text-[var(--status-error)]'}
              `}>
                {trend.value >= 0 ? (
                  <TrendingUp size={16} />
                ) : (
                  <TrendingDown size={16} />
                )}
                <span>{Math.abs(trend.value)}%</span>
                {trend.label && (
                  <span className="text-[var(--text-muted)] ml-1">{trend.label}</span>
                )}
              </div>
            )}
          </div>
          {subtitle && (
            <p className="text-[var(--text-muted)] text-sm mt-2">{subtitle}</p>
          )}
        </div>
        
        {(icon || actions) && (
          <div className="flex items-center gap-2">
            {icon && (
              <div className="p-3 rounded-2xl bg-[var(--glass-bg-light)]">
                {icon}
              </div>
            )}
            {actions}
          </div>
        )}
      </div>

      {footer && (
        <div className="pt-4 border-t border-[var(--glass-dark-border)]">
          {footer}
        </div>
      )}
    </div>
  );
}
