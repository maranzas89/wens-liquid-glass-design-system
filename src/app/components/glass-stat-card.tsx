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
    default: 'from-white/10 to-white/5',
    primary: 'from-blue-500/20 to-purple-500/10',
    success: 'from-green-500/20 to-teal-500/10',
    warning: 'from-amber-500/20 to-orange-500/10'
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
        <p className="text-white/70 text-sm">{title}</p>
        {icon && (
          <div className="p-2 rounded-xl bg-white/10">
            {icon}
          </div>
        )}
      </div>
      
      <div className="flex items-end justify-between">
        <h3 className="text-3xl text-white">{value}</h3>
        
        {change !== undefined && (
          <div className={`
            flex items-center gap-1 text-sm
            ${change >= 0 ? 'text-green-300' : 'text-red-300'}
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
