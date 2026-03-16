import React from 'react';

interface GlassEmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export function GlassEmptyState({ 
  icon, 
  title, 
  description, 
  action,
  className = '' 
}: GlassEmptyStateProps) {
  return (
    <div className={`
      backdrop-blur-md backdrop-saturate-150
      bg-white/10
      border border-white/20
      rounded-3xl
      p-12
      text-center
      ${className}
    `}>
      {icon && (
        <div className="flex justify-center mb-6 text-white/40">
          {icon}
        </div>
      )}
      <h3 className="text-white text-xl mb-2">{title}</h3>
      {description && (
        <p className="text-white/70 mb-6 max-w-md mx-auto">
          {description}
        </p>
      )}
      {action && (
        <div className="flex justify-center">
          {action}
        </div>
      )}
    </div>
  );
}
