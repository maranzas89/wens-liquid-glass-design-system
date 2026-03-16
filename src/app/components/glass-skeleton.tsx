import React from 'react';

interface GlassSkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string;
  height?: string;
  className?: string;
}

export function GlassSkeleton({ 
  variant = 'text', 
  width, 
  height, 
  className = '' 
}: GlassSkeletonProps) {
  const baseStyles = `
    backdrop-blur-md backdrop-saturate-150
    bg-white/10
    border border-white/10
    animate-pulse
  `;
  
  const variantStyles = {
    text: 'h-4 rounded-lg',
    circular: 'rounded-full',
    rectangular: 'rounded-2xl'
  };
  
  const style: React.CSSProperties = {};
  if (width) style.width = width;
  if (height) style.height = height;
  
  return (
    <div 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={style}
    />
  );
}

export function GlassSkeletonCard() {
  return (
    <div className="
      backdrop-blur-md backdrop-saturate-150
      bg-white/10
      border border-white/20
      rounded-3xl
      p-6
      space-y-4
    ">
      <GlassSkeleton variant="rectangular" height="12rem" />
      <GlassSkeleton width="60%" />
      <GlassSkeleton width="80%" />
      <GlassSkeleton width="40%" />
    </div>
  );
}
