import React from 'react';
import { GlassCard } from '../components/glass-card';
import { Monitor, Smartphone, Tablet, Layout, Grid, Columns, Layers } from 'lucide-react';
import { CodeBlock } from '../components/code-block';
import { sectionCodeSamples } from '../utils/section-code-samples';

export function LayoutSection() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
          Layout Components
        </h2>
        <p className="text-white/70 text-lg">
          Responsive layout patterns for web and mobile applications
        </p>
      </div>

      {/* Device Preview */}
      <div>
        <h3 className="text-white text-2xl font-bold mb-6">Device Views</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard padding="lg">
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="text-blue-400" size={32} />
              <div>
                <h4 className="text-white text-xl font-bold">Desktop</h4>
                <p className="text-white/60 text-sm">1920×1080</p>
              </div>
            </div>
            <div className="aspect-video rounded-xl bg-white/5 border border-[var(--glass-border)] p-4">
              <div className="h-full flex flex-col gap-2">
                <div className="h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded" />
                <div className="flex-1 grid grid-cols-4 gap-2">
                  <div className="col-span-1 bg-[var(--glass-bg-light)] rounded" />
                  <div className="col-span-3 space-y-2">
                    <div className="h-1/3 bg-[var(--glass-bg-light)] rounded" />
                    <div className="h-2/3 grid grid-cols-2 gap-2">
                      <div className="bg-[var(--glass-bg-light)] rounded" />
                      <div className="bg-[var(--glass-bg-light)] rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard padding="lg">
            <div className="flex items-center gap-3 mb-4">
              <Tablet className="text-purple-400" size={32} />
              <div>
                <h4 className="text-white text-xl font-bold">Tablet</h4>
                <p className="text-white/60 text-sm">768×1024</p>
              </div>
            </div>
            <div className="aspect-[3/4] max-h-80 rounded-xl bg-white/5 border border-[var(--glass-border)] p-3 mx-auto">
              <div className="h-full flex flex-col gap-2">
                <div className="h-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded" />
                <div className="flex-1 space-y-2">
                  <div className="h-1/4 bg-[var(--glass-bg-light)] rounded" />
                  <div className="h-3/4 grid grid-cols-2 gap-2">
                    <div className="bg-[var(--glass-bg-light)] rounded" />
                    <div className="bg-[var(--glass-bg-light)] rounded" />
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard padding="lg">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="text-pink-400" size={32} />
              <div>
                <h4 className="text-white text-xl font-bold">Mobile</h4>
                <p className="text-white/60 text-sm">375×812</p>
              </div>
            </div>
            <div className="aspect-[9/19.5] max-h-96 rounded-2xl bg-white/5 border border-[var(--glass-border)] p-3 mx-auto">
              <div className="h-full flex flex-col gap-2">
                <div className="h-12 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded" />
                <div className="flex-1 space-y-2">
                  <div className="h-1/5 bg-[var(--glass-bg-light)] rounded" />
                  <div className="h-1/5 bg-[var(--glass-bg-light)] rounded" />
                  <div className="h-1/5 bg-[var(--glass-bg-light)] rounded" />
                  <div className="h-1/5 bg-[var(--glass-bg-light)] rounded" />
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Layout Patterns */}
      <div>
        <h3 className="text-white text-2xl font-bold mb-6">Layout Patterns</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Layout A - Full Width */}
          <GlassCard padding="lg">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-bold">Layout A</h4>
                <span className="text-white/50 text-xs">Full Width</span>
              </div>
              <p className="text-white/60 text-sm">Single column layout</p>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-white/5 border border-[var(--glass-border)] p-3">
              <div className="h-full flex flex-col gap-2">
                <div className="h-1/4 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded" />
                <div className="h-2/4 bg-[var(--glass-bg-light)] rounded" />
                <div className="h-1/4 bg-[var(--glass-bg-light)] rounded" />
              </div>
            </div>
          </GlassCard>

          {/* Layout B - Sidebar Right */}
          <GlassCard padding="lg">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-bold">Layout B</h4>
                <span className="text-white/50 text-xs">Sidebar Right</span>
              </div>
              <p className="text-white/60 text-sm">Main content + sidebar</p>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-white/5 border border-[var(--glass-border)] p-3">
              <div className="h-full flex gap-2">
                <div className="flex-1 flex flex-col gap-2">
                  <div className="h-1/4 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded" />
                  <div className="flex-1 bg-[var(--glass-bg-light)] rounded" />
                </div>
                <div className="w-1/3 bg-[var(--glass-bg-light)] rounded" />
              </div>
            </div>
          </GlassCard>

          {/* Layout C - Grid 4 */}
          <GlassCard padding="lg">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-bold">Layout C</h4>
                <span className="text-white/50 text-xs">Grid Layout</span>
              </div>
              <p className="text-white/60 text-sm">4-column grid</p>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-white/5 border border-[var(--glass-border)] p-3">
              <div className="h-full flex flex-col gap-2">
                <div className="h-1/5 bg-gradient-to-r from-green-400/30 to-emerald-400/30 rounded" />
                <div className="flex-1 grid grid-cols-2 gap-2">
                  <div className="bg-[var(--glass-bg-light)] rounded" />
                  <div className="bg-[var(--glass-bg-light)] rounded" />
                  <div className="bg-[var(--glass-bg-light)] rounded" />
                  <div className="bg-[var(--glass-bg-light)] rounded" />
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Layout D - With Sidebar */}
          <GlassCard padding="lg">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-bold">Layout D</h4>
                <span className="text-white/50 text-xs">With Sidebar</span>
              </div>
              <p className="text-white/60 text-sm">Left sidebar + grid</p>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-white/5 border border-[var(--glass-border)] p-3">
              <div className="h-full flex gap-2">
                <div className="w-1/4 bg-[var(--glass-bg-light)] rounded" />
                <div className="flex-1 flex flex-col gap-2">
                  <div className="h-1/4 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded" />
                  <div className="flex-1 grid grid-cols-2 gap-2">
                    <div className="bg-[var(--glass-bg-light)] rounded" />
                    <div className="bg-[var(--glass-bg-light)] rounded" />
                    <div className="bg-[var(--glass-bg-light)] rounded" />
                    <div className="bg-[var(--glass-bg-light)] rounded" />
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Layout E - Stacked */}
          <GlassCard padding="lg">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-bold">Layout E</h4>
                <span className="text-white/50 text-xs">Stacked</span>
              </div>
              <p className="text-white/60 text-sm">Vertical sections</p>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-white/5 border border-[var(--glass-border)] p-3">
              <div className="h-full flex gap-2">
                <div className="w-1/3 bg-[var(--glass-bg-light)] rounded" />
                <div className="flex-1 flex flex-col gap-2">
                  <div className="h-1/5 bg-gradient-to-r from-violet-400/30 to-purple-400/30 rounded" />
                  <div className="flex-1 bg-[var(--glass-bg-light)] rounded" />
                  <div className="flex-1 bg-[var(--glass-bg-light)] rounded" />
                  <div className="flex-1 bg-[var(--glass-bg-light)] rounded" />
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Layout F - Three Column */}
          <GlassCard padding="lg">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-bold">Layout F</h4>
                <span className="text-white/50 text-xs">Three Column</span>
              </div>
              <p className="text-white/60 text-sm">Triple split layout</p>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-white/5 border border-[var(--glass-border)] p-3">
              <div className="h-full flex flex-col gap-2">
                <div className="h-1/5 bg-gradient-to-r from-teal-400/30 to-cyan-400/30 rounded" />
                <div className="flex-1 grid grid-cols-3 gap-2">
                  <div className="space-y-2">
                    <div className="h-1/2 bg-[var(--glass-bg-light)] rounded" />
                    <div className="h-1/2 bg-[var(--glass-bg-light)] rounded" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-1/2 bg-[var(--glass-bg-light)] rounded" />
                    <div className="h-1/2 bg-[var(--glass-bg-light)] rounded" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-1/2 bg-[var(--glass-bg-light)] rounded" />
                    <div className="h-1/2 bg-[var(--glass-bg-light)] rounded" />
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Layout G - Masonry */}
          <GlassCard padding="lg">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-bold">Layout G</h4>
                <span className="text-white/50 text-xs">Masonry</span>
              </div>
              <p className="text-white/60 text-sm">Pinterest-style grid</p>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-white/5 border border-[var(--glass-border)] p-3">
              <div className="h-full grid grid-cols-3 gap-2">
                <div className="space-y-2">
                  <div className="h-1/3 bg-gradient-to-br from-pink-400/30 to-rose-400/30 rounded" />
                  <div className="h-2/3 bg-[var(--glass-bg-light)] rounded" />
                </div>
                <div className="space-y-2">
                  <div className="h-2/3 bg-[var(--glass-bg-light)] rounded" />
                  <div className="h-1/3 bg-[var(--glass-bg-light)] rounded" />
                </div>
                <div className="space-y-2">
                  <div className="h-1/2 bg-[var(--glass-bg-light)] rounded" />
                  <div className="h-1/2 bg-[var(--glass-bg-light)] rounded" />
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Layout H - Hero */}
          <GlassCard padding="lg">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-bold">Layout H</h4>
                <span className="text-white/50 text-xs">Hero Section</span>
              </div>
              <p className="text-white/60 text-sm">Large header + content</p>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-white/5 border border-[var(--glass-border)] p-3">
              <div className="h-full flex flex-col gap-2">
                <div className="h-2/5 bg-gradient-to-r from-indigo-400/30 to-blue-400/30 rounded flex items-center justify-center">
                  <div className="w-1/2 h-1/3 bg-white/20 rounded" />
                </div>
                <div className="flex-1 grid grid-cols-3 gap-2">
                  <div className="bg-[var(--glass-bg-light)] rounded" />
                  <div className="bg-[var(--glass-bg-light)] rounded" />
                  <div className="bg-[var(--glass-bg-light)] rounded" />
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Layout I - Split Screen */}
          <GlassCard padding="lg">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-bold">Layout I</h4>
                <span className="text-white/50 text-xs">Split Screen</span>
              </div>
              <p className="text-white/60 text-sm">50/50 divided layout</p>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-white/5 border border-[var(--glass-border)] p-3">
              <div className="h-full flex gap-2">
                <div className="flex-1 flex flex-col gap-2">
                  <div className="h-1/4 bg-gradient-to-r from-amber-400/30 to-yellow-400/30 rounded" />
                  <div className="flex-1 bg-[var(--glass-bg-light)] rounded" />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <div className="h-1/4 bg-[var(--glass-bg-light)] rounded" />
                  <div className="flex-1 bg-[var(--glass-bg-light)] rounded" />
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Layout J - Dashboard */}
          <GlassCard padding="lg">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-bold">Layout J</h4>
                <span className="text-white/50 text-xs">Dashboard</span>
              </div>
              <p className="text-white/60 text-sm">Stats cards grid</p>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-white/5 border border-[var(--glass-border)] p-3">
              <div className="h-full flex flex-col gap-2">
                <div className="h-1/5 bg-gradient-to-r from-lime-400/30 to-green-400/30 rounded" />
                <div className="flex-1 grid grid-cols-3 gap-2">
                  <div className="bg-[var(--glass-bg-light)] rounded" />
                  <div className="bg-[var(--glass-bg-light)] rounded" />
                  <div className="bg-[var(--glass-bg-light)] rounded" />
                  <div className="col-span-3 bg-[var(--glass-bg-light)] rounded" />
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Layout K - List View */}
          <GlassCard padding="lg">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-bold">Layout K</h4>
                <span className="text-white/50 text-xs">List View</span>
              </div>
              <p className="text-white/60 text-sm">Vertical list layout</p>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-white/5 border border-[var(--glass-border)] p-3">
              <div className="h-full flex flex-col gap-2">
                <div className="h-1/6 bg-gradient-to-r from-sky-400/30 to-blue-400/30 rounded" />
                <div className="flex-1 space-y-2">
                  <div className="h-1/5 bg-[var(--glass-bg-light)] rounded" />
                  <div className="h-1/5 bg-[var(--glass-bg-light)] rounded" />
                  <div className="h-1/5 bg-[var(--glass-bg-light)] rounded" />
                  <div className="h-1/5 bg-[var(--glass-bg-light)] rounded" />
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Layout L - Cover */}
          <GlassCard padding="lg">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-bold">Layout L</h4>
                <span className="text-white/50 text-xs">Cover</span>
              </div>
              <p className="text-white/60 text-sm">Full-page cover layout</p>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-white/5 border border-[var(--glass-border)] p-3">
              <div className="h-full flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-gradient-to-br from-fuchsia-400/30 to-purple-400/30 rounded-xl flex items-center justify-center">
                  <div className="w-1/2 h-1/4 bg-white/20 rounded" />
                </div>
              </div>
            </div>
          </GlassCard>

        </div>
      </div>

      {/* Responsive Behavior */}
      <div>
        <h3 className="text-white text-2xl font-bold mb-6">Responsive Behavior</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard padding="lg">
            <div className="flex items-center gap-3 mb-4">
              <Layout className="text-cyan-400" size={32} />
              <h4 className="text-white text-xl font-bold">Adaptive Layouts</h4>
            </div>
            <p className="text-white/70 mb-4">
              Layouts automatically adapt to different screen sizes using responsive breakpoints.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-white/70 text-sm">Mobile: &lt; 768px</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-blue-400" />
                <span className="text-white/70 text-sm">Tablet: 768px - 1024px</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-purple-400" />
                <span className="text-white/70 text-sm">Desktop: &gt; 1024px</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard padding="lg">
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="text-pink-400" size={32} />
              <h4 className="text-white text-xl font-bold">Fluid Grids</h4>
            </div>
            <p className="text-white/70 mb-4">
              Grid systems use flexible columns that scale proportionally across devices.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-pink-400" />
                <span className="text-white/70 text-sm">12-column grid system</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-orange-400" />
                <span className="text-white/70 text-sm">Automatic reflow</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="text-white/70 text-sm">Mobile-first approach</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Code Samples */}
      <div>
        <h3 className="text-white text-2xl font-bold mb-6">Code Samples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard padding="lg">
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="text-blue-400" size={32} />
              <h4 className="text-white text-xl font-bold">Desktop Layout</h4>
            </div>
            <CodeBlock code={sectionCodeSamples.desktopLayout} />
          </GlassCard>

          <GlassCard padding="lg">
            <div className="flex items-center gap-3 mb-4">
              <Tablet className="text-purple-400" size={32} />
              <h4 className="text-white text-xl font-bold">Tablet Layout</h4>
            </div>
            <CodeBlock code={sectionCodeSamples.tabletLayout} />
          </GlassCard>

          <GlassCard padding="lg">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="text-pink-400" size={32} />
              <h4 className="text-white text-xl font-bold">Mobile Layout</h4>
            </div>
            <CodeBlock code={sectionCodeSamples.mobileLayout} />
          </GlassCard>

          <GlassCard padding="lg">
            <div className="flex items-center gap-3 mb-4">
              <Layout className="text-cyan-400" size={32} />
              <h4 className="text-white text-xl font-bold">Adaptive Layouts</h4>
            </div>
            <CodeBlock code={sectionCodeSamples.adaptiveLayouts} />
          </GlassCard>

          <GlassCard padding="lg">
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="text-pink-400" size={32} />
              <h4 className="text-white text-xl font-bold">Fluid Grids</h4>
            </div>
            <CodeBlock code={sectionCodeSamples.fluidGrids} />
          </GlassCard>
        </div>
      </div>
    </div>
  );
}