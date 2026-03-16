import React from 'react';
import { GlassCard } from '../components/glass-card';
import { GlassLogoShowcase, GlassLogoWithText } from '../components/glass-logo-showcase';
import { CodeBlock } from '../components/code-block';
import { sectionCodeSamples } from '../utils/section-code-samples';

export function LogoSection() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl text-white font-bold mb-4 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
          Logo Design System
        </h2>
        <p className="text-white/70 text-lg">
          Complete brand identity with multiple logo variations
        </p>
      </div>

      {/* Logo with Text Variants */}
      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Logo with Text</h3>
        <div className="space-y-8">
          <div>
            <p className="text-white/60 text-sm mb-4">Large</p>
            <div className="flex justify-center">
              <GlassLogoWithText size="lg" variant="full" />
            </div>
          </div>
          
          <div>
            <p className="text-white/60 text-sm mb-4">Medium</p>
            <div className="flex justify-center">
              <GlassLogoWithText size="md" variant="full" />
            </div>
          </div>
          
          <div>
            <p className="text-white/60 text-sm mb-4">Small</p>
            <div className="flex justify-center">
              <GlassLogoWithText size="sm" variant="full" />
            </div>
          </div>

          <div>
            <p className="text-white/60 text-sm mb-4">Compact (No Subtitle)</p>
            <div className="flex justify-center gap-8">
              <GlassLogoWithText size="lg" variant="compact" />
              <GlassLogoWithText size="md" variant="compact" />
              <GlassLogoWithText size="sm" variant="compact" />
            </div>
          </div>
        </div>
      </GlassCard>

      {/* All Logo Variants */}
      <div>
        <h3 className="text-white text-2xl mb-6">Logo Variations</h3>
        <GlassLogoShowcase />
      </div>

      {/* Usage Guidelines */}
      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Usage Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="text-white font-semibold mb-2">Primary Logo</h4>
              <p className="text-white/70 text-sm">
                Use for main brand representation. Works best on dark backgrounds with glassmorphism effects.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Compact Logo</h4>
              <p className="text-white/70 text-sm">
                Ideal for navigation bars, favicons, and small UI elements where space is limited.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Gradient Variants</h4>
              <p className="text-white/70 text-sm">
                Use gradient fills for hero sections and marketing materials to add visual interest.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-white font-semibold mb-2">Color Modes</h4>
              <p className="text-white/70 text-sm">
                Choose dark or light mode variants based on background. Maintain contrast for accessibility.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Minimum Size</h4>
              <p className="text-white/70 text-sm">
                Never scale the logo below 24px × 24px to maintain legibility and visual impact.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Clear Space</h4>
              <p className="text-white/70 text-sm">
                Maintain minimum padding equal to half the logo height on all sides.
              </p>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Color Palette */}
      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Brand Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="w-full h-24 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 border border-white/20" />
            <div className="text-center">
              <p className="text-white text-sm font-medium">Primary Blue</p>
              <p className="text-white/60 text-xs">#60A5FA</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="w-full h-24 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 border border-white/20" />
            <div className="text-center">
              <p className="text-white text-sm font-medium">Primary Purple</p>
              <p className="text-white/60 text-xs">#A855F7</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="w-full h-24 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 border border-white/20" />
            <div className="text-center">
              <p className="text-white text-sm font-medium">Accent Pink</p>
              <p className="text-white/60 text-xs">#F472B6</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="w-full h-24 rounded-xl bg-gradient-to-br from-white/80 to-white/60 border border-white/30" />
            <div className="text-center">
              <p className="text-white text-sm font-medium">Glass White</p>
              <p className="text-white/60 text-xs">#FFFFFF</p>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Code Samples */}
      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Code Samples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-white font-semibold mb-2">Logo with Text (Large)</h4>
            <CodeBlock code={sectionCodeSamples.logoWithTextLarge} />
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Logo with Text (Medium)</h4>
            <CodeBlock code={sectionCodeSamples.logoWithTextMedium} />
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Logo with Text (Small)</h4>
            <CodeBlock code={sectionCodeSamples.logoWithTextSmall} />
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Logo with Text (Compact)</h4>
            <CodeBlock code={sectionCodeSamples.logoWithTextCompact} />
          </div>
        </div>
      </GlassCard>
    </div>
  );
}