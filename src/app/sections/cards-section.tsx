import React from 'react';
import { GlassCard } from '../components/glass-card';
import { GlassButton } from '../components/glass-button';
import { GlassBadge } from '../components/glass-badge';
import { GlassStatCard } from '../components/glass-stat-card';
import { Heart, Share2, Bookmark, Users, DollarSign, Activity, Rocket } from 'lucide-react';
import { CodeBlock } from '../components/code-block';
import { sectionCodeSamples } from '../utils/section-code-samples';

export function CardsSection() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl text-white font-bold mb-4 bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent">
          Card Components
        </h2>
        <p className="text-white/70 text-lg">
          Various card styles and layouts
        </p>
      </div>

      <div>
        <h3 className="text-white text-2xl mb-6">Card Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard variant="default" padding="lg">
            <h4 className="text-white text-xl mb-2">Default Card</h4>
            <p className="text-white/70">Simple glass card with default styling</p>
          </GlassCard>

          <GlassCard variant="gradient" padding="lg">
            <h4 className="text-white text-xl mb-2">Gradient Card</h4>
            <p className="text-white/70">Card with beautiful gradient background</p>
          </GlassCard>

          <GlassCard variant="border" padding="lg">
            <h4 className="text-white text-xl mb-2">Border Card</h4>
            <p className="text-white/70">Card with emphasized border</p>
          </GlassCard>
        </div>
      </div>

      <div>
        <h3 className="text-white text-2xl mb-6">Stat Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <GlassStatCard
            title="Total Users"
            value="12,345"
            change={12.5}
            icon={<Users className="text-blue-300" size={24} />}
            variant="primary"
          />
          <GlassStatCard
            title="Revenue"
            value="$45,678"
            change={8.2}
            icon={<DollarSign className="text-green-300" size={24} />}
            variant="success"
          />
          <GlassStatCard
            title="Activity"
            value="89%"
            change={-3.1}
            icon={<Activity className="text-amber-300" size={24} />}
            variant="warning"
          />
          <GlassStatCard
            title="Projects"
            value="156"
            change={15.3}
            icon={<Rocket className="text-purple-300" size={24} />}
          />
        </div>
      </div>

      <div>
        <h3 className="text-white text-2xl mb-6">Content Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard padding="lg">
            <div className="aspect-video bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl mb-4" />
            <div className="flex items-center gap-2 mb-3">
              <GlassBadge variant="primary">Technology</GlassBadge>
              <GlassBadge variant="success">New</GlassBadge>
            </div>
            <h4 className="text-white text-xl mb-2">Liquid Glass Design</h4>
            <p className="text-white/70 mb-4">
              A modern design system featuring glassmorphism effects and beautiful UI components.
            </p>
            <div className="flex items-center gap-2">
              <GlassButton variant="ghost" size="sm">
                <Heart size={16} />
              </GlassButton>
              <GlassButton variant="ghost" size="sm">
                <Share2 size={16} />
              </GlassButton>
              <GlassButton variant="ghost" size="sm">
                <Bookmark size={16} />
              </GlassButton>
            </div>
          </GlassCard>

          <GlassCard padding="lg" variant="gradient">
            <div className="aspect-video bg-gradient-to-br from-pink-500/30 to-orange-500/30 rounded-xl mb-4" />
            <div className="flex items-center gap-2 mb-3">
              <GlassBadge variant="warning">Design</GlassBadge>
            </div>
            <h4 className="text-white text-xl mb-2">Beautiful Components</h4>
            <p className="text-white/70 mb-4">
              50+ carefully crafted components for your next project.
            </p>
            <GlassButton variant="primary" className="w-full">
              Learn More
            </GlassButton>
          </GlassCard>

          <GlassCard padding="lg">
            <div className="aspect-video bg-gradient-to-br from-teal-500/30 to-green-500/30 rounded-xl mb-4" />
            <div className="flex items-center gap-2 mb-3">
              <GlassBadge variant="success">Featured</GlassBadge>
              <GlassBadge variant="info">Popular</GlassBadge>
            </div>
            <h4 className="text-white text-xl mb-2">Premium Quality</h4>
            <p className="text-white/70 mb-4">
              Production-ready components with TypeScript support.
            </p>
            <GlassButton variant="success" className="w-full">
              Get Started
            </GlassButton>
          </GlassCard>
        </div>
      </div>

      <div>
        <h3 className="text-white text-2xl mb-6">Card Padding Sizes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard padding="sm">
            <h4 className="text-white text-lg">Small Padding</h4>
            <p className="text-white/70 text-sm">Compact card design</p>
          </GlassCard>

          <GlassCard padding="md">
            <h4 className="text-white text-lg">Medium Padding</h4>
            <p className="text-white/70 text-sm">Default card spacing</p>
          </GlassCard>

          <GlassCard padding="lg">
            <h4 className="text-white text-lg">Large Padding</h4>
            <p className="text-white/70 text-sm">Spacious card layout</p>
          </GlassCard>
        </div>
      </div>

      <CodeBlock code={sectionCodeSamples.cardsSection} />
    </div>
  );
}