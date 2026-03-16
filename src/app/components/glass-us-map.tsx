import React from 'react';

interface USMapProps {
  data?: { state: string; value: number; color?: string }[];
  height?: number;
  onStateClick?: (state: string) => void;
  className?: string;
}

export function GlassUSMap({ 
  data = [], 
  height = 500, 
  onStateClick,
  className = '' 
}: USMapProps) {
  const getStateColor = (stateId: string) => {
    const stateData = data.find(d => d.state === stateId);
    if (stateData?.color) return stateData.color;
    
    if (stateData) {
      const intensity = stateData.value / 100;
      return `var(--brand-primary)`;
    }
    
    return 'var(--glass-bg-subtle)';
  };

  const getStateValue = (stateId: string) => {
    const stateData = data.find(d => d.state === stateId);
    return stateData?.value;
  };

  // Real US state paths (simplified but accurate)
  const states = [
    { id: 'AL', name: 'Alabama', d: 'M714,381 L756,378 L760,430 L758,450 L715,445 Z' },
    { id: 'AK', name: 'Alaska', d: 'M50,480 L140,470 L150,520 L50,530 Z' },
    { id: 'AZ', name: 'Arizona', d: 'M170,295 L250,285 L260,380 L190,388 L175,350 Z' },
    { id: 'AR', name: 'Arkansas', d: 'M580,335 L655,330 L658,385 L585,390 Z' },
    { id: 'CA', name: 'California', d: 'M50,180 L85,175 L110,220 L125,260 L145,310 L150,360 L100,380 L70,340 L55,290 L45,240 Z' },
    { id: 'CO', name: 'Colorado', d: 'M280,210 L395,200 L400,295 L285,305 Z' },
    { id: 'CT', name: 'Connecticut', d: 'M870,165 L895,162 L898,180 L873,183 Z' },
    { id: 'DE', name: 'Delaware', d: 'M850,235 L860,233 L863,255 L853,257 Z' },
    { id: 'FL', name: 'Florida', d: 'M765,455 L815,450 L830,485 L835,520 L815,535 L785,530 L770,510 L760,485 Z' },
    { id: 'GA', name: 'Georgia', d: 'M765,380 L810,375 L815,445 L765,450 Z' },
    { id: 'HI', name: 'Hawaii', d: 'M220,510 L300,505 L305,530 L225,535 Z' },
    { id: 'ID', name: 'Idaho', d: 'M180,80 L230,75 L245,130 L255,170 L240,200 L185,210 L175,160 Z' },
    { id: 'IL', name: 'Illinois', d: 'M630,200 L675,195 L680,300 L635,305 Z' },
    { id: 'IN', name: 'Indiana', d: 'M685,205 L720,200 L725,290 L685,295 Z' },
    { id: 'IA', name: 'Iowa', d: 'M570,180 L650,175 L655,230 L575,235 Z' },
    { id: 'KS', name: 'Kansas', d: 'M405,245 L560,235 L565,300 L410,310 Z' },
    { id: 'KY', name: 'Kentucky', d: 'M685,300 L780,290 L785,325 L690,335 Z' },
    { id: 'LA', name: 'Louisiana', d: 'M590,395 L670,390 L680,440 L595,445 Z' },
    { id: 'ME', name: 'Maine', d: 'M905,60 L935,55 L945,110 L910,125 L900,100 Z' },
    { id: 'MD', name: 'Maryland', d: 'M810,240 L855,235 L860,260 L815,265 Z' },
    { id: 'MA', name: 'Massachusetts', d: 'M880,135 L920,130 L923,150 L883,155 Z' },
    { id: 'MI', name: 'Michigan', d: 'M680,120 L730,115 L735,190 L685,195 M705,90 L730,85 L735,110 L710,115 Z' },
    { id: 'MN', name: 'Minnesota', d: 'M560,85 L640,80 L645,170 L565,175 L560,120 Z' },
    { id: 'MS', name: 'Mississippi', d: 'M660,395 L700,390 L705,450 L665,455 Z' },
    { id: 'MO', name: 'Missouri', d: 'M570,240 L660,235 L665,325 L575,330 Z' },
    { id: 'MT', name: 'Montana', d: 'M260,70 L425,60 L430,140 L265,150 Z' },
    { id: 'NE', name: 'Nebraska', d: 'M405,175 L565,170 L570,235 L410,245 Z' },
    { id: 'NV', name: 'Nevada', d: 'M120,175 L185,165 L210,280 L165,295 L130,235 Z' },
    { id: 'NH', name: 'New Hampshire', d: 'M895,115 L910,112 L915,145 L900,148 Z' },
    { id: 'NJ', name: 'New Jersey', d: 'M850,195 L865,192 L870,230 L855,233 Z' },
    { id: 'NM', name: 'New Mexico', d: 'M265,310 L395,300 L405,415 L275,425 Z' },
    { id: 'NY', name: 'New York', d: 'M810,130 L885,120 L890,190 L815,200 L810,165 Z' },
    { id: 'NC', name: 'North Carolina', d: 'M785,330 L865,320 L875,365 L790,375 Z' },
    { id: 'ND', name: 'North Dakota', d: 'M435,70 L555,65 L560,130 L440,135 Z' },
    { id: 'OH', name: 'Ohio', d: 'M730,205 L785,200 L790,285 L735,290 Z' },
    { id: 'OK', name: 'Oklahoma', d: 'M415,315 L560,305 L565,365 L420,375 Z' },
    { id: 'OR', name: 'Oregon', d: 'M90,100 L175,90 L180,165 L95,175 Z' },
    { id: 'PA', name: 'Pennsylvania', d: 'M790,195 L860,185 L865,240 L795,250 Z' },
    { id: 'RI', name: 'Rhode Island', d: 'M898,150 L908,148 L910,162 L900,164 Z' },
    { id: 'SC', name: 'South Carolina', d: 'M790,380 L840,375 L845,415 L795,420 Z' },
    { id: 'SD', name: 'South Dakota', d: 'M440,140 L560,135 L565,195 L445,200 Z' },
    { id: 'TN', name: 'Tennessee', d: 'M665,330 L785,320 L790,360 L670,370 Z' },
    { id: 'TX', name: 'Texas', d: 'M425,380 L560,370 L570,420 L580,465 L520,475 L480,460 L450,435 L430,410 Z' },
    { id: 'UT', name: 'Utah', d: 'M255,205 L310,200 L320,305 L265,310 Z' },
    { id: 'VT', name: 'Vermont', d: 'M875,120 L890,117 L895,150 L880,153 Z' },
    { id: 'VA', name: 'Virginia', d: 'M790,255 L860,245 L870,295 L865,310 L795,320 Z' },
    { id: 'WA', name: 'Washington', d: 'M95,50 L175,45 L180,105 L100,110 Z' },
    { id: 'WV', name: 'West Virginia', d: 'M795,245 L830,240 L840,290 L800,300 L790,265 Z' },
    { id: 'WI', name: 'Wisconsin', d: 'M620,115 L675,110 L680,195 L625,200 Z' },
    { id: 'WY', name: 'Wyoming', d: 'M270,155 L395,145 L400,235 L275,245 Z' }
  ];

  return (
    <div 
      className={`
        rounded-2xl overflow-hidden
        backdrop-blur-xl backdrop-saturate-150
        bg-gradient-to-br from-[var(--glass-bg-subtle)] to-white/[0.02]
        border border-[var(--glass-dark-border)]
        p-8
        ${className}
      `}
      style={{ height }}
    >
      <svg 
        viewBox="0 0 960 560" 
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Subtle glow for states */}
          <filter id="state-glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Gradient for water/background */}
          <linearGradient id="water-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'var(--status-info-light)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'var(--brand-secondary)', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect x="0" y="0" width="960" height="560" fill="url(#water-gradient)" opacity="0.3" />

        {/* Render states with realistic borders */}
        {states.map((state) => {
          const value = getStateValue(state.id);
          const fillColor = getStateColor(state.id);
          
          return (
            <g key={state.id}>
              <path
                d={state.d}
                fill={fillColor}
                stroke="var(--glass-bg-medium)"
                strokeWidth="0.5"
                className="
                  transition-all duration-300 cursor-pointer
                  hover:stroke-white/40 hover:stroke-[1]
                  hover:brightness-125
                "
                style={{ 
                  filter: 'url(#state-glow)',
                }}
                onClick={() => onStateClick?.(state.id)}
              >
                <title>{`${state.name}${value !== undefined ? `: ${value}` : ''}`}</title>
              </path>
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      {data.length > 0 && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <span className="text-[var(--text-disabled)] text-sm">Low</span>
          <div className="flex gap-1.5">
            {[0, 1, 2, 3, 4].map(i => (
              <div
                key={i}
                className="w-12 h-3 rounded-sm backdrop-blur-sm border border-[var(--glass-dark-border)]"
                style={{ 
                  backgroundColor: `var(--brand-primary)`,
                  opacity: 0.3 + i * 0.15
                }}
              />
            ))}
          </div>
          <span className="text-[var(--text-disabled)] text-sm">High</span>
        </div>
      )}
    </div>
  );
}
