import React from 'react';
import { GlassCard } from '../components/glass-card';
import { GlassButton } from '../components/glass-button';
import { Heart, Download, Share2, Settings, Trash2, Plus, Edit } from 'lucide-react';
import { CodeBlock } from '../components/code-block';
import { sectionCodeSamples } from '../utils/section-code-samples';

interface ButtonSectionProps {
  addToast: (variant: any, message: string, options?: any) => void;
}

export function ButtonSection({ addToast }: ButtonSectionProps) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--brand-primary)] bg-clip-text text-transparent">
          Button Components
        </h2>
        <p className="text-white/70 text-lg">
          Beautiful glass buttons in various styles and sizes
        </p>
      </div>

      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Button Variants</h3>
        <div className="flex flex-wrap gap-4">
          <GlassButton variant="primary">Primary</GlassButton>
          <GlassButton variant="secondary">Secondary</GlassButton>
          <GlassButton variant="accent">Accent</GlassButton>
          <GlassButton variant="success">Success</GlassButton>
          <GlassButton variant="ghost">Ghost</GlassButton>
          <GlassButton variant="danger">Danger</GlassButton>
        </div>
      </GlassCard>

      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Button Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          <GlassButton variant="primary" size="sm">Small</GlassButton>
          <GlassButton variant="primary" size="md">Medium</GlassButton>
          <GlassButton variant="primary" size="lg">Large</GlassButton>
        </div>
      </GlassCard>

      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Buttons with Icons</h3>
        <div className="flex flex-wrap gap-4">
          <GlassButton variant="primary">
            <Heart size={20} className="mr-2" />
            Like
          </GlassButton>
          <GlassButton variant="secondary">
            <Download size={20} className="mr-2" />
            Download
          </GlassButton>
          <GlassButton variant="accent">
            <Share2 size={20} className="mr-2" />
            Share
          </GlassButton>
          <GlassButton variant="success">
            <Plus size={20} className="mr-2" />
            Add New
          </GlassButton>
        </div>
      </GlassCard>

      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Icon-Only Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <GlassButton variant="ghost" size="sm">
            <Edit size={18} />
          </GlassButton>
          <GlassButton variant="ghost" size="sm">
            <Settings size={18} />
          </GlassButton>
          <GlassButton variant="ghost" size="sm">
            <Trash2 size={18} />
          </GlassButton>
          <GlassButton variant="ghost" size="sm">
            <Share2 size={18} />
          </GlassButton>
        </div>
      </GlassCard>

      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Disabled State</h3>
        <div className="flex flex-wrap gap-4">
          <GlassButton variant="primary" disabled>Disabled Primary</GlassButton>
          <GlassButton variant="secondary" disabled>Disabled Secondary</GlassButton>
          <GlassButton variant="success" disabled>Disabled Success</GlassButton>
        </div>
      </GlassCard>

      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Interactive Examples</h3>
        <div className="flex flex-wrap gap-4">
          <GlassButton 
            variant="primary"
            onClick={() => addToast('success', 'Button clicked!')}
          >
            Click Me
          </GlassButton>
          <GlassButton 
            variant="success"
            onClick={() => addToast('success', 'Action completed!')}
          >
            Submit
          </GlassButton>
          <GlassButton 
            variant="danger"
            onClick={() => addToast('error', 'Delete action triggered')}
          >
            Delete
          </GlassButton>
        </div>
      </GlassCard>

      <CodeBlock code={sectionCodeSamples.buttonSection} />
    </div>
  );
}