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
    default: 'from-white/10 to-white/5',
    primary: 'from-blue-500/20 to-purple-500/10',
    success: 'from-green-500/20 to-teal-500/10',
    warning: 'from-amber-500/20 to-orange-500/10',
    danger: 'from-red-500/20 to-pink-500/10'
  };

  return (
    <div className={`
      backdrop-blur-md backdrop-saturate-150
      bg-gradient-to-br ${variantGradients[variant]}
      border border-white/20
      rounded-3xl
      p-6
      ${className}
    `}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-white/70 text-sm mb-1">{title}</p>
          <div className="flex items-baseline gap-3">
            <h3 className="text-4xl text-white">{value}</h3>
            {trend && (
              <div className={`
                flex items-center gap-1 text-sm
                ${trend.value >= 0 ? 'text-green-300' : 'text-red-300'}
              `}>
                {trend.value >= 0 ? (
                  <TrendingUp size={16} />
                ) : (
                  <TrendingDown size={16} />
                )}
                <span>{Math.abs(trend.value)}%</span>
                {trend.label && (
                  <span className="text-white/60 ml-1">{trend.label}</span>
                )}
              </div>
            )}
          </div>
          {subtitle && (
            <p className="text-white/60 text-sm mt-2">{subtitle}</p>
          )}
        </div>
        
        {(icon || actions) && (
          <div className="flex items-center gap-2">
            {icon && (
              <div className="p-3 rounded-2xl bg-white/10">
                {icon}
              </div>
            )}
            {actions}
          </div>
        )}
      </div>

      {footer && (
        <div className="pt-4 border-t border-white/10">
          {footer}
        </div>
      )}
    </div>
  );
}
