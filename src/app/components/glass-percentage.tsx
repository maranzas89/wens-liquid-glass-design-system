import React from 'react';

interface GlassPercentageProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'circular' | 'semi-circular' | 'linear';
  label?: string;
  showValue?: boolean;
  className?: string;
}

export function GlassPercentage({ 
  value, 
  max = 100,
  size = 'md', 
  variant = 'circular',
  label,
  showValue = true,
  className = '' 
}: GlassPercentageProps) {
  const percentage = Math.min((value / max) * 100, 100);

  const sizes = {
    sm: { width: 80, stroke: 4, fontSize: 'text-lg' },
    md: { width: 120, stroke: 6, fontSize: 'text-2xl' },
    lg: { width: 160, stroke: 8, fontSize: 'text-4xl' },
    xl: { width: 200, stroke: 10, fontSize: 'text-5xl' }
  };

  const config = sizes[size];
  const radius = (config.width - config.stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  if (variant === 'linear') {
    return (
      <div className={`w-full ${className}`}>
        {label && (
          <div className="flex justify-between mb-2">
            <span className="text-white text-sm">{label}</span>
            {showValue && (
              <span className="text-[var(--text-tertiary)] text-sm">{percentage.toFixed(0)}%</span>
            )}
          </div>
        )}
        <div className="
          h-4 rounded-full
          backdrop-blur-md backdrop-saturate-150
          bg-[var(--glass-bg-light)]
          border border-[var(--glass-border)]
          overflow-hidden
        ">
          <div
            className="h-full bg-gradient-to-r from-[var(--brand-primary)] to-cyan-400 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }

  if (variant === 'semi-circular') {
    return (
      <div className={`inline-flex flex-col items-center ${className}`}>
        <svg width={config.width} height={config.width / 2 + 20}>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--brand-primary)" />
              <stop offset="100%" stopColor="var(--brand-accent)" />
            </linearGradient>
          </defs>

          <path
            d={`M ${config.stroke/2} ${config.width/2} A ${radius} ${radius} 0 0 1 ${config.width - config.stroke/2} ${config.width/2}`}
            fill="none"
            stroke="var(--glass-bg-light)"
            strokeWidth={config.stroke}
            strokeLinecap="round"
          />
          
          <path
            d={`M ${config.stroke/2} ${config.width/2} A ${radius} ${radius} 0 0 1 ${config.width - config.stroke/2} ${config.width/2}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth={config.stroke}
            strokeLinecap="round"
            strokeDasharray={circumference / 2}
            strokeDashoffset={circumference / 2 - (percentage / 100) * (circumference / 2)}
            className="transition-all duration-500"
          />
        </svg>
        
        <div className="text-center -mt-10">
          {showValue && (
            <p className={`${config.fontSize} text-white`}>
              {percentage.toFixed(0)}%
            </p>
          )}
          {label && (
            <p className="text-[var(--text-tertiary)] text-sm mt-1">{label}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <svg width={config.width} height={config.width}>
        <defs>
          <linearGradient id="circularGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--brand-primary)" />
            <stop offset="100%" stopColor="var(--brand-accent)" />
          </linearGradient>
        </defs>
        
        <circle
          cx={config.width / 2}
          cy={config.width / 2}
          r={radius}
          fill="none"
          stroke="var(--glass-bg-light)"
          strokeWidth={config.stroke}
        />
        
        <circle
          cx={config.width / 2}
          cy={config.width / 2}
          r={radius}
          fill="none"
          stroke="url(#circularGradient)"
          strokeWidth={config.stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${config.width / 2} ${config.width / 2})`}
          className="transition-all duration-500"
        />
        
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className={`${config.fontSize} fill-white`}
        >
          {showValue && `${percentage.toFixed(0)}%`}
        </text>
      </svg>
      
      {label && (
        <p className="text-[var(--text-tertiary)] text-sm mt-2">{label}</p>
      )}
    </div>
  );
}
