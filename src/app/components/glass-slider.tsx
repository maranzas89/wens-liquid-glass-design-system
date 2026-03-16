import React from 'react';

interface GlassSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  showValue?: boolean;
}

export function GlassSlider({ 
  value, 
  onChange, 
  min = 0, 
  max = 100, 
  step = 1,
  label,
  showValue = true 
}: GlassSliderProps) {
  const percentage = ((value - min) / (max - min)) * 100;
  
  return (
    <div className="w-full">
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className="text-white/90 text-sm">{label}</span>}
          {showValue && <span className="text-[var(--text-tertiary)] text-sm">{value}</span>}
        </div>
      )}
      <div className="relative">
        <div className="
          h-2 rounded-full
          backdrop-blur-md backdrop-saturate-150
          bg-[var(--glass-bg-light)]
          border border-[var(--glass-border)]
          overflow-hidden
        ">
          <div
            className="h-full bg-gradient-to-r from-[var(--brand-primary)] to-cyan-400 transition-all duration-150"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="
            absolute inset-0 w-full h-2
            opacity-0 cursor-pointer
          "
        />
        <div
          className="
            absolute top-1/2 -translate-y-1/2
            w-4 h-4 rounded-full
            bg-white shadow-lg
            pointer-events-none
            transition-all duration-150
          "
          style={{ left: `calc(${percentage}% - 8px)` }}
        />
      </div>
    </div>
  );
}
