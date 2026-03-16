import React from 'react';
import { GlassCard } from './glass-card';

interface FontShowcaseItem {
  name: string;
  cssVar: string;
  weights: number[];
}

export function GlassFontShowcase() {
  const fonts: FontShowcaseItem[] = [
    { name: 'Inter', cssVar: '--font-sans', weights: [300, 400, 500, 600, 700, 800, 900] },
    { name: 'Poppins', cssVar: '--font-display', weights: [300, 400, 500, 600, 700, 800, 900] },
    { name: 'Space Grotesk', cssVar: '--font-geometric', weights: [300, 400, 500, 600, 700] },
    { name: 'JetBrains Mono', cssVar: '--font-mono', weights: [300, 400, 500, 600, 700] },
    { name: 'Playfair Display', cssVar: '--font-serif', weights: [400, 500, 600, 700, 800, 900] },
    { name: 'Montserrat', cssVar: '--font-modern', weights: [300, 400, 500, 600, 700, 800, 900] },
    { name: 'Raleway', cssVar: '--font-elegant', weights: [300, 400, 500, 600, 700, 800, 900] },
    { name: 'Outfit', cssVar: '--font-rounded', weights: [300, 400, 500, 600, 700, 800, 900] }
  ];

  const weightNames: { [key: number]: string } = {
    300: 'Light',
    400: 'Regular',
    500: 'Medium',
    600: 'SemiBold',
    700: 'Bold',
    800: 'ExtraBold',
    900: 'Black'
  };

  return (
    <div className="space-y-6">
      {fonts.map((font) => (
        <GlassCard key={font.name} padding="lg">
          <h3 className="text-white text-2xl mb-6">{font.name}</h3>
          <div className="space-y-4">
            {font.weights.map((weight) => (
              <div key={weight} className="flex items-baseline gap-4">
                <span className="text-white/60 text-sm w-24">
                  {weightNames[weight]}
                </span>
                <p
                  className="text-white text-2xl flex-1"
                  style={{ 
                    fontFamily: `var(${font.cssVar})`,
                    fontWeight: weight 
                  }}
                >
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
            ))}
          </div>
        </GlassCard>
      ))}
    </div>
  );
}
