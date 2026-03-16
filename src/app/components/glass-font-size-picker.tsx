import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface GlassFontSizePickerProps {
  value: number;
  onChange: (size: number) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

export function GlassFontSizePicker({ 
  value, 
  onChange, 
  min = 8,
  max = 128,
  step = 1,
  className = '' 
}: GlassFontSizePickerProps) {
  const presetSizes = [12, 14, 16, 18, 20, 24, 32, 48, 64, 96];

  const handleIncrement = () => {
    if (value < max) {
      onChange(Math.min(value + step, max));
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      onChange(Math.max(value - step, min));
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Current Size Display */}
      <div className="
        backdrop-blur-md backdrop-saturate-150
        bg-white/10
        border border-white/20
        rounded-2xl
        p-6
        text-center
      ">
        <p className="text-white/60 text-sm mb-2">Current Size</p>
        <p className="text-white text-6xl font-bold">{value}</p>
        <p className="text-white/40 text-sm mt-1">pixels</p>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleDecrement}
          disabled={value <= min}
          className="
            p-3 rounded-xl
            backdrop-blur-md backdrop-saturate-150
            bg-white/10
            border border-white/20
            text-white
            disabled:opacity-50 disabled:cursor-not-allowed
            hover:bg-white/20
            transition-all duration-200
          "
        >
          <Minus size={20} />
        </button>
        
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1"
        />
        
        <button
          onClick={handleIncrement}
          disabled={value >= max}
          className="
            p-3 rounded-xl
            backdrop-blur-md backdrop-saturate-150
            bg-white/10
            border border-white/20
            text-white
            disabled:opacity-50 disabled:cursor-not-allowed
            hover:bg-white/20
            transition-all duration-200
          "
        >
          <Plus size={20} />
        </button>
      </div>

      {/* Preset Sizes */}
      <div className="grid grid-cols-5 gap-2">
        {presetSizes.map((size) => (
          <button
            key={size}
            onClick={() => onChange(size)}
            className={`
              py-2 px-3 rounded-xl
              backdrop-blur-md backdrop-saturate-150
              border-2 transition-all duration-200
              ${value === size
                ? 'bg-white/20 border-blue-400/50 text-white'
                : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/15'
              }
            `}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
