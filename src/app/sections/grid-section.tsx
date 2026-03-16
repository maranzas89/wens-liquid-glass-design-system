import React from 'react';
import { GlassCard } from '../components/glass-card';
import { CodeBlock } from '../components/code-block';
import { sectionCodeSamples } from '../utils/section-code-samples';

export function GridSection() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--status-success)] to-[var(--brand-primary)] bg-clip-text text-transparent">
          Grid Layout
        </h2>
        <p className="text-white/70 text-lg">
          Responsive grid system for layouts
        </p>
      </div>

      <div>
        <h3 className="text-white text-2xl mb-6">2 Column Grid</h3>
        <div className="grid grid-cols-2 gap-6">
          <GlassCard padding="lg">
            <h4 className="text-white text-xl mb-2">Column 1</h4>
            <p className="text-white/70">Content in first column</p>
          </GlassCard>
          <GlassCard padding="lg">
            <h4 className="text-white text-xl mb-2">Column 2</h4>
            <p className="text-white/70">Content in second column</p>
          </GlassCard>
        </div>
      </div>

      <div>
        <h3 className="text-white text-2xl mb-6">3 Column Grid</h3>
        <div className="grid grid-cols-3 gap-6">
          <GlassCard padding="lg">
            <h4 className="text-white text-xl mb-2">Column 1</h4>
            <p className="text-white/70">First column content</p>
          </GlassCard>
          <GlassCard padding="lg">
            <h4 className="text-white text-xl mb-2">Column 2</h4>
            <p className="text-white/70">Second column content</p>
          </GlassCard>
          <GlassCard padding="lg">
            <h4 className="text-white text-xl mb-2">Column 3</h4>
            <p className="text-white/70">Third column content</p>
          </GlassCard>
        </div>
      </div>

      <div>
        <h3 className="text-white text-2xl mb-6">4 Column Grid</h3>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <GlassCard key={num} padding="md">
              <h4 className="text-white text-lg text-center">{num}</h4>
            </GlassCard>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-white text-2xl mb-6">Responsive Grid (Auto-fit)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <GlassCard key={num} padding="lg" variant="gradient">
              <div className="text-center">
                <div className="text-white text-3xl font-bold mb-2">{num}</div>
                <p className="text-white/70">Responsive Card</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-white text-2xl mb-6">Code Samples</h3>
        <CodeBlock code={sectionCodeSamples.gridSection} />
      </div>
    </div>
  );
}