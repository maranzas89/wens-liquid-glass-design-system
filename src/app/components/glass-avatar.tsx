import React from 'react';
import { User } from 'lucide-react';

interface GlassAvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string;
  className?: string;
}

export function GlassAvatar({ src, alt, size = 'md', fallback, className = '' }: GlassAvatarProps) {
  const [imageError, setImageError] = React.useState(false);
  
  const sizeStyles = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
    xl: 'w-24 h-24 text-xl'
  };
  
  return (
    <div className={`
      ${sizeStyles[size]} rounded-full
      backdrop-blur-md backdrop-saturate-150
      bg-white/10
      border border-white/20
      overflow-hidden
      flex items-center justify-center
      ${className}
    `}>
      {src && !imageError ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : fallback ? (
        <span className="text-white uppercase">
          {fallback.slice(0, 2)}
        </span>
      ) : (
        <User className="text-white/60" size={size === 'sm' ? 16 : size === 'md' ? 20 : size === 'lg' ? 24 : 32} />
      )}
    </div>
  );
}

interface GlassAvatarGroupProps {
  avatars: Array<{ src?: string; alt?: string; fallback?: string }>;
  max?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function GlassAvatarGroup({ avatars, max = 5, size = 'md' }: GlassAvatarGroupProps) {
  const displayAvatars = avatars.slice(0, max);
  const remaining = avatars.length - max;
  
  return (
    <div className="flex -space-x-3">
      {displayAvatars.map((avatar, index) => (
        <GlassAvatar
          key={index}
          {...avatar}
          size={size}
          className="ring-2 ring-white/10"
        />
      ))}
      {remaining > 0 && (
        <div className={`
          ${size === 'sm' ? 'w-8 h-8 text-xs' : size === 'md' ? 'w-12 h-12 text-sm' : size === 'lg' ? 'w-16 h-16 text-base' : 'w-24 h-24 text-xl'}
          rounded-full
          backdrop-blur-md backdrop-saturate-150
          bg-white/20
          border border-white/20
          ring-2 ring-white/10
          flex items-center justify-center
          text-white
        `}>
          +{remaining}
        </div>
      )}
    </div>
  );
}
