import React from 'react';
import { GlassCard } from '../components/glass-card';
import { GlassButton } from '../components/glass-button';
import { GlassTooltip } from '../components/glass-tooltip';
import { GlassMenu } from '../components/glass-menu';
import { Info, HelpCircle, User, Settings, Heart, Star, Bell, Mail, Edit, Share2, Download, Trash2, MoreVertical } from 'lucide-react';
import { CodeBlock } from '../components/code-block';
import { sectionCodeSamples } from '../utils/section-code-samples';

interface TooltipSectionProps {
  addToast: (variant: any, message: string, options?: any) => void;
}

export function TooltipSection({ addToast }: TooltipSectionProps) {
  const menuItems = [
    { label: 'Edit', icon: <Edit size={16} />, onClick: () => addToast('info', 'Edit clicked') },
    { label: 'Share', icon: <Share2 size={16} />, onClick: () => addToast('info', 'Share clicked') },
    { label: 'Download', icon: <Download size={16} />, onClick: () => addToast('success', 'Download started') },
    { divider: true },
    { label: 'Delete', icon: <Trash2 size={16} />, onClick: () => addToast('error', 'Item deleted') }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl text-white font-bold mb-4 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
          Popover & Tooltip
        </h2>
        <p className="text-white/70 text-lg">
          Tooltips and contextual popover menus
        </p>
      </div>

      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-2">Tooltip Positions</h3>
        <p className="text-white/60 text-sm mb-6">🖱️ Hover over the buttons below to see tooltips</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
          <div className="flex justify-center">
            <GlassTooltip content="Tooltip on top" position="top">
              <GlassButton variant="primary">Top</GlassButton>
            </GlassTooltip>
          </div>
          <div className="flex justify-center">
            <GlassTooltip content="Tooltip on right" position="right">
              <GlassButton variant="primary">Right</GlassButton>
            </GlassTooltip>
          </div>
          <div className="flex justify-center">
            <GlassTooltip content="Tooltip on bottom" position="bottom">
              <GlassButton variant="primary">Bottom</GlassButton>
            </GlassTooltip>
          </div>
          <div className="flex justify-center">
            <GlassTooltip content="Tooltip on left" position="left">
              <GlassButton variant="primary">Left</GlassButton>
            </GlassTooltip>
          </div>
        </div>
      </GlassCard>

      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Tooltip Examples</h3>
        <div className="flex flex-wrap gap-4">
          <GlassTooltip content="Save your changes">
            <GlassButton variant="success">Save</GlassButton>
          </GlassTooltip>
          <GlassTooltip content="Cancel current operation">
            <GlassButton variant="ghost">Cancel</GlassButton>
          </GlassTooltip>
          <GlassTooltip content="Delete this item permanently">
            <GlassButton variant="danger">Delete</GlassButton>
          </GlassTooltip>
          <GlassTooltip content="Download as PDF">
            <GlassButton variant="secondary">
              <Download size={20} />
            </GlassButton>
          </GlassTooltip>
        </div>
      </GlassCard>

      <GlassCard padding="lg" className="relative z-0 pb-[253px]">
        <h3 className="text-white text-2xl mb-2">Popover Menu</h3>
        <p className="text-white/60 text-sm mb-6">🖱️ Click the buttons below to open popover menus</p>
        <div className="flex gap-4 relative z-auto">
          <GlassMenu
            trigger={
              <GlassButton variant="primary">
                Actions Menu
              </GlassButton>
            }
            items={menuItems}
          />
          
          <GlassMenu
            trigger={
              <GlassButton variant="ghost">
                <MoreVertical size={20} />
              </GlassButton>
            }
            items={menuItems}
          />
        </div>
      </GlassCard>

      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Tooltip with Long Text</h3>
        <GlassTooltip content="This is a longer tooltip message that provides more detailed information about the action that will be performed when you click this button.">
          <GlassButton variant="accent">Hover for Long Tooltip</GlassButton>
        </GlassTooltip>
      </GlassCard>

      <CodeBlock code={sectionCodeSamples.tooltipSection} />
    </div>
  );
}