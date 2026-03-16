import React from 'react';

interface GlassColorPickerProps {
  value: string;
  onChange: (color: string) => void;
  presets?: string[];
  className?: string;
}

export function GlassColorPicker({ 
  value, 
  onChange, 
  presets = [
    '#667eea', '#764ba2', '#f093fb', '#f5576c',
    '#4facfe', '#00f2fe', '#43e97b', '#38f9d7',
    '#fa709a', '#fee140', '#a8edea', '#fed6e3'
  ],
  className = '' 
}: GlassColorPickerProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex gap-3 items-center">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            w-12 h-12 rounded-xl cursor-pointer
            backdrop-blur-md backdrop-saturate-150
            bg-white/10
            border border-white/20
          "
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            flex-1 rounded-xl
            backdrop-blur-md backdrop-saturate-150
            bg-white/10
            border border-white/20
            px-4 py-2
            text-white
            outline-none
            focus:bg-white/15 focus:border-white/30
            transition-all duration-300
          "
        />
      </div>
      <div className="grid grid-cols-6 gap-2">
        {presets.map((color, index) => (
          <button
            key={index}
            onClick={() => onChange(color)}
            className="
              w-full aspect-square rounded-lg
              border-2 transition-all duration-200
              hover:scale-110
            "
            style={{ 
              backgroundColor: color,
              borderColor: value === color ? 'white' : 'transparent'
            }}
          />
        ))}
      </div>
    </div>
  );
}
