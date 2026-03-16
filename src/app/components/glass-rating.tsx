import React from 'react';
import { Star } from 'lucide-react';

interface GlassRatingProps {
  value: number;
  onChange?: (value: number) => void;
  max?: number;
  readonly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function GlassRating({ 
  value, 
  onChange, 
  max = 5, 
  readonly = false,
  size = 'md',
  className = '' 
}: GlassRatingProps) {
  const [hoverValue, setHoverValue] = React.useState(0);
  
  const sizeStyles = {
    sm: 16,
    md: 24,
    lg: 32
  };
  
  const iconSize = sizeStyles[size];
  
  return (
    <div className={`flex gap-1 ${className}`}>
      {Array.from({ length: max }, (_, i) => i + 1).map((star) => {
        const filled = readonly ? star <= value : star <= (hoverValue || value);
        
        return (
          <button
            key={star}
            onClick={() => !readonly && onChange?.(star)}
            onMouseEnter={() => !readonly && setHoverValue(star)}
            onMouseLeave={() => !readonly && setHoverValue(0)}
            disabled={readonly}
            className={`
              transition-all duration-200
              ${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'}
            `}
          >
            <Star
              size={iconSize}
              className={`
                transition-colors duration-200
                ${filled
                  ? 'fill-[var(--status-warning)] text-[var(--status-warning)]'
                  : 'text-white/30'
                }
              `}
            />
          </button>
        );
      })}
    </div>
  );
}
