import React from 'react';
import { Copy, Check } from 'lucide-react';
import { GlassCard } from '../components/glass-card';
import { CodeBlock } from '../components/code-block';
import { sectionCodeSamples } from '../utils/section-code-samples';

interface ColorPalette {
  name: string;
  description: string;
  colors: {
    name: string;
    hex: string;
    rgb: string;
    usage: string;
  }[];
}

export function ColorSection() {
  const [copiedColor, setCopiedColor] = React.useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const palettes: ColorPalette[] = [
    {
      name: 'Primary Colors',
      description: 'Main brand colors for primary actions and key elements',
      colors: [
        {
          name: 'Blue',
          hex: '#60A5FA',
          rgb: 'rgb(96, 165, 250)',
          usage: 'Primary buttons, links, active states'
        },
        {
          name: 'Purple',
          hex: '#A855F7',
          rgb: 'rgb(168, 85, 247)',
          usage: 'Secondary actions, highlights'
        },
        {
          name: 'Indigo',
          hex: '#6366F1',
          rgb: 'rgb(99, 102, 241)',
          usage: 'Information, data visualization'
        }
      ]
    },
    {
      name: 'Accent Colors',
      description: 'Eye-catching colors for special highlights and CTAs',
      colors: [
        {
          name: 'Pink',
          hex: '#F472B6',
          rgb: 'rgb(244, 114, 182)',
          usage: 'Highlights, special offers, notifications'
        },
        {
          name: 'Rose',
          hex: '#FB7185',
          rgb: 'rgb(251, 113, 133)',
          usage: 'Love, favorites, important items'
        },
        {
          name: 'Fuchsia',
          hex: '#E879F9',
          rgb: 'rgb(232, 121, 249)',
          usage: 'Creative elements, decorative'
        }
      ]
    },
    {
      name: 'Success & Status',
      description: 'Colors for feedback, alerts, and status indicators',
      colors: [
        {
          name: 'Green',
          hex: '#43E97B',
          rgb: 'rgb(67, 233, 123)',
          usage: 'Success messages, positive actions'
        },
        {
          name: 'Emerald',
          hex: '#10B981',
          rgb: 'rgb(16, 185, 129)',
          usage: 'Confirmed, active, available'
        },
        {
          name: 'Teal',
          hex: '#14B8A6',
          rgb: 'rgb(20, 184, 166)',
          usage: 'Secondary success, growth'
        }
      ]
    },
    {
      name: 'Warning & Alert',
      description: 'Colors for warnings, errors, and attention',
      colors: [
        {
          name: 'Yellow',
          hex: '#FBBF24',
          rgb: 'rgb(251, 191, 36)',
          usage: 'Warnings, caution, pending'
        },
        {
          name: 'Orange',
          hex: '#F97316',
          rgb: 'rgb(249, 115, 22)',
          usage: 'Important warnings, urgent'
        },
        {
          name: 'Amber',
          hex: '#FAD089',
          rgb: 'rgb(250, 208, 137)',
          usage: 'Moderate alerts, notifications'
        }
      ]
    },
    {
      name: 'Error & Danger',
      description: 'Colors for errors, destructive actions, and critical alerts',
      colors: [
        {
          name: 'Red',
          hex: '#EF4444',
          rgb: 'rgb(239, 68, 68)',
          usage: 'Errors, delete actions, critical'
        },
        {
          name: 'Crimson',
          hex: '#DC2626',
          rgb: 'rgb(220, 38, 38)',
          usage: 'Destructive actions, danger'
        }
      ]
    },
    {
      name: 'Cool Tones',
      description: 'Blues and cyans for calm, professional interfaces',
      colors: [
        {
          name: 'Cyan',
          hex: '#4FACFE',
          rgb: 'rgb(79, 172, 254)',
          usage: 'Links, information, data'
        },
        {
          name: 'Sky',
          hex: '#38BDF8',
          rgb: 'rgb(56, 189, 248)',
          usage: 'Secondary information, badges'
        },
        {
          name: 'Slate',
          hex: '#677EEA',
          rgb: 'rgb(103, 126, 234)',
          usage: 'Charts, graphs, data points'
        }
      ]
    },
    {
      name: 'Neutral Tones',
      description: 'Grays and whites for backgrounds and text',
      colors: [
        {
          name: 'White',
          hex: '#FFFFFF',
          rgb: 'rgb(255, 255, 255)',
          usage: 'Text, icons, borders'
        },
        {
          name: 'Light Gray',
          hex: '#F3F4F6',
          rgb: 'rgb(243, 244, 246)',
          usage: 'Light backgrounds, dividers'
        },
        {
          name: 'Gray',
          hex: '#9CA3AF',
          rgb: 'rgb(156, 163, 175)',
          usage: 'Secondary text, disabled states'
        },
        {
          name: 'Dark Gray',
          hex: '#4B5563',
          rgb: 'rgb(75, 85, 99)',
          usage: 'Body text, labels'
        }
      ]
    },
    {
      name: 'Gradient Combinations',
      description: 'Pre-designed gradient pairs for liquid glass effects',
      colors: [
        {
          name: 'Blue → Purple',
          hex: '#60A5FA → #A855F7',
          rgb: 'gradient',
          usage: 'Primary brand gradients'
        },
        {
          name: 'Purple → Pink',
          hex: '#A855F7 → #F472B6',
          rgb: 'gradient',
          usage: 'Accent gradients, highlights'
        },
        {
          name: 'Cyan → Blue',
          hex: '#4FACFE → #677EEA',
          rgb: 'gradient',
          usage: 'Cool tone gradients'
        },
        {
          name: 'Green → Teal',
          hex: '#43E97B → #14B8A6',
          rgb: 'gradient',
          usage: 'Success, growth gradients'
        },
        {
          name: 'Pink → Orange',
          hex: '#F472B6 → #F97316',
          rgb: 'gradient',
          usage: 'Warm accent gradients'
        },
        {
          name: 'Multi-Color',
          hex: '#F472B6 → #A855F7 → #60A5FA',
          rgb: 'gradient',
          usage: 'Rainbow effects, creative'
        }
      ]
    }
  ];

  const glassOpacities = [
    { name: 'Ultra Light', value: 'bg-white/5', usage: 'Subtle overlays' },
    { name: 'Light', value: 'bg-[var(--glass-bg-light)]', usage: 'Standard glass cards' },
    { name: 'Medium', value: 'bg-white/15', usage: 'Emphasized elements' },
    { name: 'Strong', value: 'bg-white/20', usage: 'Active states' },
    { name: 'Extra Strong', value: 'bg-white/30', usage: 'Popups, modals' }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl text-white font-bold mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
          Color System
        </h2>
        <p className="text-white/70 text-lg">
          Complete color palette for Liquid Glass design system
        </p>
      </div>

      {/* Color Palettes */}
      {palettes.map((palette, paletteIndex) => (
        <div key={paletteIndex}>
          <h3 className="text-white text-2xl font-bold mb-2">{palette.name}</h3>
          <p className="text-white/60 text-sm mb-4">{palette.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {palette.colors.map((color, colorIndex) => (
              <GlassCard key={colorIndex} padding="none" className="overflow-hidden group">
                {/* Color Preview */}
                {color.rgb === 'gradient' ? (
                  <div 
                    className="h-32 relative overflow-hidden"
                    style={{
                      background: color.hex.includes('→')
                        ? `linear-gradient(135deg, ${color.hex.split(' → ').map(c => c.trim()).join(', ')})`
                        : color.hex
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                ) : (
                  <div 
                    className="h-32 relative overflow-hidden"
                    style={{ backgroundColor: color.hex }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                )}

                {/* Color Info */}
                <div className="p-4 space-y-3">
                  <div>
                    <h4 className="text-white text-lg font-bold mb-1">{color.name}</h4>
                    <p className="text-white/60 text-xs">{color.usage}</p>
                  </div>

                  {/* Color Codes */}
                  <div className="space-y-2">
                    <button
                      onClick={() => copyToClipboard(color.hex)}
                      className="
                        w-full flex items-center justify-between
                        px-3 py-2 rounded-lg
                        bg-white/5 hover:bg-[var(--glass-bg-light)]
                        border border-white/10
                        transition-all duration-200
                        group/copy
                      "
                    >
                      <div className="flex flex-col items-start">
                        <span className="text-white/40 text-xs">HEX</span>
                        <span className="text-white text-sm font-mono">{color.hex}</span>
                      </div>
                      {copiedColor === color.hex ? (
                        <Check size={16} className="text-green-400" />
                      ) : (
                        <Copy size={16} className="text-white/40 group-hover/copy:text-white/80" />
                      )}
                    </button>

                    {color.rgb !== 'gradient' && (
                      <button
                        onClick={() => copyToClipboard(color.rgb)}
                        className="
                          w-full flex items-center justify-between
                          px-3 py-2 rounded-lg
                          bg-white/5 hover:bg-[var(--glass-bg-light)]
                          border border-white/10
                          transition-all duration-200
                          group/copy
                        "
                      >
                        <div className="flex flex-col items-start">
                          <span className="text-white/40 text-xs">RGB</span>
                          <span className="text-white text-sm font-mono">{color.rgb}</span>
                        </div>
                        {copiedColor === color.rgb ? (
                          <Check size={16} className="text-green-400" />
                        ) : (
                          <Copy size={16} className="text-white/40 group-hover/copy:text-white/80" />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      ))}

      {/* Glass Opacity Levels */}
      <div>
        <h3 className="text-white text-2xl font-bold mb-2">Glass Opacity Levels</h3>
        <p className="text-white/60 text-sm mb-4">Standard opacity values for glassmorphism effects</p>
        
        <GlassCard padding="lg">
          <div className="space-y-4">
            {glassOpacities.map((opacity, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{opacity.name}</span>
                    <span className="text-white/60 text-sm">{opacity.usage}</span>
                  </div>
                  <div className="relative h-16 rounded-xl border border-[var(--glass-border)] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                    <div 
                      className={`absolute inset-0 backdrop-blur-md ${opacity.value}`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-mono text-sm">{opacity.value}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Color Usage Guidelines */}
      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Color Usage Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-400" />
                Primary Actions
              </h4>
              <p className="text-white/70 text-sm">
                Use blue and purple for primary buttons, links, and interactive elements. These colors represent trust and reliability.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                Success States
              </h4>
              <p className="text-white/70 text-sm">
                Green shades indicate successful operations, confirmations, and positive status.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                Warnings
              </h4>
              <p className="text-white/70 text-sm">
                Yellow and orange for warnings, caution messages, and items requiring attention.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-pink-400" />
                Accents & Highlights
              </h4>
              <p className="text-white/70 text-sm">
                Pink and fuchsia for special highlights, promotions, and attention-grabbing elements.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                Errors & Danger
              </h4>
              <p className="text-white/70 text-sm">
                Red for errors, destructive actions, and critical alerts that require immediate attention.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-400" />
                Neutrals
              </h4>
              <p className="text-white/70 text-sm">
                Gray tones for text, borders, backgrounds, and secondary information.
              </p>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Accessibility Notes */}
      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-4">Accessibility</h3>
        <div className="space-y-3 text-white/70 text-sm">
          <p>
            • Ensure sufficient contrast ratios (minimum 4.5:1 for normal text, 3:1 for large text)
          </p>
          <p>
            • Don't rely on color alone to convey information - use icons and labels
          </p>
          <p>
            • Test colors with color blindness simulators
          </p>
          <p>
            • Maintain consistency in color usage across the application
          </p>
          <p>
            • Use semantic colors (success, warning, error) consistently
          </p>
        </div>
      </GlassCard>

      {/* Code Samples */}
      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-4">Code Samples</h3>
        <CodeBlock code={sectionCodeSamples.colorSection} />
      </GlassCard>
    </div>
  );
}