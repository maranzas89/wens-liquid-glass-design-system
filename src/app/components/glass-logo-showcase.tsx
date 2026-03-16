import React from 'react';

interface LogoVariant {
  name: string;
  description: string;
  component: React.ReactNode;
}

// Abstract geometric logo shape - interconnected circles forming a fluid pattern
const AbstractLogoShape = ({ className = '', gradient = false, glowColor = '#60A5FA' }: { className?: string; gradient?: boolean; glowColor?: string }) => (
  <svg viewBox="0 0 80 80" className={className} fill="none">
    <defs>
      {gradient && (
        <>
          <linearGradient id="abstract-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#60A5FA', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#A855F7', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="abstract-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#F472B6', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#A855F7', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#60A5FA', stopOpacity: 1 }} />
          </linearGradient>
        </>
      )}
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Main abstract shape - flowing connected circles */}
    <circle cx="25" cy="40" r="15" fill={gradient ? 'url(#abstract-gradient-1)' : 'white'} opacity="0.9" />
    <circle cx="55" cy="40" r="15" fill={gradient ? 'url(#abstract-gradient-1)' : 'white'} opacity="0.9" />
    <circle cx="40" cy="25" r="12" fill={gradient ? 'url(#abstract-gradient-2)' : 'white'} opacity="0.95" />
    <circle cx="40" cy="55" r="12" fill={gradient ? 'url(#abstract-gradient-2)' : 'white'} opacity="0.95" />
    
    {/* Center connecting element */}
    <circle cx="40" cy="40" r="8" fill={gradient ? 'url(#abstract-gradient-1)' : 'white'} />
    
    {/* Accent dots */}
    <circle cx="40" cy="40" r="3" fill="white" opacity="1" />
  </svg>
);

// Outlined version of abstract logo
const AbstractLogoOutline = ({ className = '', strokeColor = 'white', strokeWidth = 2.5 }: { className?: string; strokeColor?: string; strokeWidth?: number }) => (
  <svg viewBox="0 0 80 80" className={className} fill="none">
    <circle cx="25" cy="40" r="15" stroke={strokeColor} strokeWidth={strokeWidth} opacity="0.9" />
    <circle cx="55" cy="40" r="15" stroke={strokeColor} strokeWidth={strokeWidth} opacity="0.9" />
    <circle cx="40" cy="25" r="12" stroke={strokeColor} strokeWidth={strokeWidth} opacity="0.95" />
    <circle cx="40" cy="55" r="12" stroke={strokeColor} strokeWidth={strokeWidth} opacity="0.95" />
    <circle cx="40" cy="40" r="8" stroke={strokeColor} strokeWidth={strokeWidth} />
    <circle cx="40" cy="40" r="3" fill={strokeColor} />
  </svg>
);

export function GlassLogoShowcase() {
  const logoVariants: LogoVariant[] = [
    {
      name: 'Primary Logo',
      description: 'Main brand logo with gradient glass effect',
      component: (
        <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-400/20 to-purple-500/20 backdrop-blur-md border border-white/20 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
          <AbstractLogoShape className="w-20 h-20 relative z-10" />
        </div>
      )
    },
    {
      name: 'Compact Logo',
      description: 'Smaller version for navigation',
      component: (
        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-500/20 backdrop-blur-md border border-white/20 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
          <AbstractLogoShape className="w-12 h-12 relative z-10" />
        </div>
      )
    },
    {
      name: 'Gradient Fill',
      description: 'Logo with colorful gradient fill',
      component: (
        <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center relative overflow-hidden">
          <AbstractLogoShape className="w-20 h-20" gradient={true} />
        </div>
      )
    },
    {
      name: 'Neon Glow',
      description: 'Logo with neon glow effect',
      component: (
        <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center relative overflow-hidden">
          <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none">
            <defs>
              <filter id="neon-glow-logo">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <circle cx="25" cy="40" r="15" fill="#60A5FA" filter="url(#neon-glow-logo)" opacity="0.9" />
            <circle cx="55" cy="40" r="15" fill="#60A5FA" filter="url(#neon-glow-logo)" opacity="0.9" />
            <circle cx="40" cy="25" r="12" fill="#A855F7" filter="url(#neon-glow-logo)" opacity="0.95" />
            <circle cx="40" cy="55" r="12" fill="#A855F7" filter="url(#neon-glow-logo)" opacity="0.95" />
            <circle cx="40" cy="40" r="8" fill="#EC4899" filter="url(#neon-glow-logo)" />
            <circle cx="40" cy="40" r="3" fill="white" />
          </svg>
        </div>
      )
    },
    {
      name: 'Outlined',
      description: 'Minimalist outlined version',
      component: (
        <div className="w-32 h-32 rounded-2xl bg-white/5 backdrop-blur-md border-2 border-white/30 flex items-center justify-center">
          <AbstractLogoOutline className="w-20 h-20" />
        </div>
      )
    },
    {
      name: 'Solid Fill',
      description: 'Bold solid color version',
      component: (
        <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-purple-500/50">
          <AbstractLogoShape className="w-20 h-20" />
        </div>
      )
    },
    {
      name: 'Multi-color',
      description: 'Vibrant multi-color gradient',
      component: (
        <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center relative overflow-hidden">
          <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none">
            <defs>
              <linearGradient id="multi-color-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#F472B6', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#A855F7', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="multi-color-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#60A5FA', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#34D399', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="multi-color-3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FBBF24', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#F59E0B', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <circle cx="25" cy="40" r="15" fill="url(#multi-color-1)" opacity="0.9" />
            <circle cx="55" cy="40" r="15" fill="url(#multi-color-2)" opacity="0.9" />
            <circle cx="40" cy="25" r="12" fill="url(#multi-color-3)" opacity="0.95" />
            <circle cx="40" cy="55" r="12" fill="url(#multi-color-1)" opacity="0.95" />
            <circle cx="40" cy="40" r="8" fill="url(#multi-color-2)" />
            <circle cx="40" cy="40" r="3" fill="white" />
          </svg>
        </div>
      )
    },
    {
      name: 'Glass Morphism',
      description: 'Enhanced glass effect with layers',
      component: (
        <div className="w-32 h-32 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-500/30 backdrop-blur-xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
          <div className="absolute inset-0 border border-white/40 rounded-2xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <AbstractLogoShape className="w-20 h-20 relative z-10" />
          </div>
        </div>
      )
    },
    {
      name: 'Monochrome',
      description: 'Clean monochrome design',
      component: (
        <div className="w-32 h-32 rounded-2xl bg-white/10 backdrop-blur-md border border-white/40 flex items-center justify-center">
          <AbstractLogoShape className="w-20 h-20" />
        </div>
      )
    },
    {
      name: 'Animated Gradient',
      description: 'Logo with animated background',
      component: (
        <div className="w-32 h-32 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20 backdrop-blur-md animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
          <div className="absolute inset-0 border border-white/30 rounded-2xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <AbstractLogoShape className="w-20 h-20 relative z-10" />
          </div>
        </div>
      )
    },
    {
      name: 'Dark Mode',
      description: 'Optimized for dark backgrounds',
      component: (
        <div className="w-32 h-32 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center">
          <AbstractLogoShape className="w-20 h-20" />
        </div>
      )
    },
    {
      name: 'Light Mode',
      description: 'Optimized for light backgrounds',
      component: (
        <div className="w-32 h-32 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200 flex items-center justify-center">
          <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none">
            <circle cx="25" cy="40" r="15" fill="#6366F1" opacity="0.9" />
            <circle cx="55" cy="40" r="15" fill="#6366F1" opacity="0.9" />
            <circle cx="40" cy="25" r="12" fill="#A855F7" opacity="0.95" />
            <circle cx="40" cy="55" r="12" fill="#A855F7" opacity="0.95" />
            <circle cx="40" cy="40" r="8" fill="#EC4899" />
            <circle cx="40" cy="40" r="3" fill="white" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {logoVariants.map((variant, index) => (
        <div
          key={index}
          className="
            backdrop-blur-md backdrop-saturate-150
            bg-white/5
            border border-white/10
            rounded-2xl
            p-6
            hover:bg-white/10
            hover:border-white/20
            transition-all duration-300
            group
          "
        >
          <div className="flex flex-col items-center gap-4">
            <div className="transform group-hover:scale-110 transition-transform duration-300">
              {variant.component}
            </div>
            <div className="text-center">
              <h4 className="text-white text-lg font-semibold mb-1">
                {variant.name}
              </h4>
              <p className="text-white/60 text-sm">
                {variant.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Logo with text component - using abstract shape instead of L
export function GlassLogoWithText({ 
  size = 'md',
  variant = 'primary',
  className = '' 
}: { 
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'compact' | 'full';
  className?: string;
}) {
  const sizes = {
    sm: { container: 'w-8 h-8', icon: 'w-6 h-6', text: 'text-base', subtext: 'text-[8px]' },
    md: { container: 'w-12 h-12', icon: 'w-9 h-9', text: 'text-2xl', subtext: 'text-xs' },
    lg: { container: 'w-16 h-16', icon: 'w-12 h-12', text: 'text-3xl', subtext: 'text-sm' }
  };

  const s = sizes[size];

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className={`
          ${s.container}
          rounded-xl
          bg-gradient-to-br from-blue-400/20 to-purple-500/20
          backdrop-blur-md
          border border-white/20
          flex items-center justify-center
          relative overflow-hidden
        `}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
          <AbstractLogoShape className={`${s.icon} relative z-10`} />
        </div>
        <span className={`text-white font-bold ${s.text}`}>LIQUID GLASS</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`
        ${s.container}
        rounded-xl
        bg-gradient-to-br from-blue-400/20 to-purple-500/20
        backdrop-blur-md
        border border-white/20
        flex items-center justify-center
        relative overflow-hidden
      `}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
        <AbstractLogoShape className={`${s.icon} relative z-10`} />
      </div>
      <div>
        <h1 className={`text-white font-bold tracking-wide ${s.text}`}>LIQUID GLASS</h1>
        <p className={`text-white/50 tracking-wider ${s.subtext}`}>DESIGN SYSTEM</p>
      </div>
    </div>
  );
}
