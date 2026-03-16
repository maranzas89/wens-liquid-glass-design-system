import React from 'react';
import { Check } from 'lucide-react';

interface FontOption {
  name: string;
  value: string;
  preview: string;
}

interface GlassFontPickerProps {
  value: string;
  onChange: (font: string) => void;
  className?: string;
}

export function GlassFontPicker({ value, onChange, className = '' }: GlassFontPickerProps) {
  const fonts: FontOption[] = [
    { name: 'Inter', value: 'var(--font-sans)', preview: 'The quick brown fox jumps' },
    { name: 'Poppins', value: 'var(--font-display)', preview: 'Modern & Clean Design' },
    { name: 'Space Grotesk', value: 'var(--font-geometric)', preview: 'Geometric Sans Serif' },
    { name: 'JetBrains Mono', value: 'var(--font-mono)', preview: 'Code & Terminal Font' },
    { name: 'Playfair Display', value: 'var(--font-serif)', preview: 'Elegant Serif Style' },
    { name: 'Montserrat', value: 'var(--font-modern)', preview: 'Contemporary Design' },
    { name: 'Raleway', value: 'var(--font-elegant)', preview: 'Sophisticated Look' },
    { name: 'Outfit', value: 'var(--font-rounded)', preview: 'Friendly Rounded Font' }
  ];

  return (
    <div className={`space-y-3 ${className}`}>
      {fonts.map((font) => (
        <button
          key={font.value}
          onClick={() => onChange(font.value)}
          className={`
            w-full p-4 rounded-2xl
            backdrop-blur-md backdrop-saturate-150
            border-2 transition-all duration-300
            text-left
            ${value === font.value
              ? 'bg-white/20 border-blue-400/50 scale-[1.02]'
              : 'bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30'
            }
          `}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-white">{font.name}</h4>
                {value === font.value && (
                  <Check size={16} className="text-blue-300" />
                )}
              </div>
              <p 
                className="text-white/70 text-lg"
                style={{ fontFamily: font.value }}
              >
                {font.preview}
              </p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
