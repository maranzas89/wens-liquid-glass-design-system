import React, { useState } from 'react';
import { GlassCard } from '../components/glass-card';
import * as Icons from 'lucide-react';
import { CodeBlock } from '../components/code-block';
import { sectionCodeSamples } from '../utils/section-code-samples';

interface IconsSectionProps {
  addToast: (variant: any, message: string, options?: any) => void;
}

export function IconsSection({ addToast }: IconsSectionProps) {
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const iconCategories = [
    {
      name: 'UI & Interface',
      color: 'from-blue-400 to-cyan-400',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
      icons: [
        { Icon: Icons.Home, name: 'Home' },
        { Icon: Icons.Settings, name: 'Settings' },
        { Icon: Icons.User, name: 'User' },
        { Icon: Icons.Bell, name: 'Bell' },
        { Icon: Icons.Mail, name: 'Mail' },
        { Icon: Icons.Calendar, name: 'Calendar' },
        { Icon: Icons.Search, name: 'Search' },
        { Icon: Icons.Menu, name: 'Menu' }
      ]
    },
    {
      name: 'Actions',
      color: 'from-purple-400 to-pink-400',
      bgColor: 'from-purple-500/10 to-pink-500/10',
      icons: [
        { Icon: Icons.Plus, name: 'Plus' },
        { Icon: Icons.Minus, name: 'Minus' },
        { Icon: Icons.Edit, name: 'Edit' },
        { Icon: Icons.Trash2, name: 'Trash2' },
        { Icon: Icons.Download, name: 'Download' },
        { Icon: Icons.Upload, name: 'Upload' },
        { Icon: Icons.Copy, name: 'Copy' },
        { Icon: Icons.Check, name: 'Check' }
      ]
    },
    {
      name: 'Media',
      color: 'from-green-400 to-emerald-400',
      bgColor: 'from-green-500/10 to-emerald-500/10',
      icons: [
        { Icon: Icons.Play, name: 'Play' },
        { Icon: Icons.Pause, name: 'Pause' },
        { Icon: Icons.Volume2, name: 'Volume2' },
        { Icon: Icons.VolumeX, name: 'VolumeX' },
        { Icon: Icons.Image, name: 'Image' },
        { Icon: Icons.Video, name: 'Video' },
        { Icon: Icons.Music, name: 'Music' },
        { Icon: Icons.Camera, name: 'Camera' }
      ]
    },
    {
      name: 'Communication',
      color: 'from-orange-400 to-red-400',
      bgColor: 'from-orange-500/10 to-red-500/10',
      icons: [
        { Icon: Icons.MessageSquare, name: 'MessageSquare' },
        { Icon: Icons.Send, name: 'Send' },
        { Icon: Icons.Phone, name: 'Phone' },
        { Icon: Icons.PhoneCall, name: 'PhoneCall' },
        { Icon: Icons.Video, name: 'Video' },
        { Icon: Icons.Mic, name: 'Mic' },
        { Icon: Icons.MicOff, name: 'MicOff' },
        { Icon: Icons.AtSign, name: 'AtSign' }
      ]
    }
  ];

  const handleCopyIcon = (iconName: string) => {
    const code = `<${iconName} size={24} />`;
    navigator.clipboard.writeText(code);
    setCopiedIcon(iconName);
    addToast('success', `Copied ${iconName} code!`);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl text-white font-bold mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
          Icon Library
        </h2>
        <p className="text-white/70 text-lg">
          300+ beautiful icons from Lucide React
        </p>
      </div>

      {/* Icon Categories */}
      {iconCategories.map((category) => (
        <div key={category.name}>
          <h3 className={`text-white text-2xl mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
            {category.name}
          </h3>
          <GlassCard padding="lg">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
              {category.icons.map(({ Icon, name }) => (
                <button
                  key={name}
                  onClick={() => handleCopyIcon(name)}
                  className={`
                    relative group
                    flex flex-col items-center justify-center gap-2
                    p-4 rounded-xl
                    bg-gradient-to-br ${category.bgColor}
                    backdrop-blur-md
                    border border-white/10
                    hover:border-white/30
                    transition-all duration-300
                    hover:scale-105
                    cursor-pointer
                  `}
                >
                  <Icon 
                    size={32} 
                    className={`text-white group-hover:bg-gradient-to-r ${category.color} group-hover:bg-clip-text group-hover:text-transparent transition-all`}
                  />
                  <span className="text-white/70 text-xs text-center group-hover:text-white transition-colors">
                    {name}
                  </span>
                  {copiedIcon === name && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-xl">
                      <Icons.Check className="text-green-400" size={24} />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </GlassCard>
        </div>
      ))}

      {/* Usage Example */}
      <div>
        <h3 className="text-white text-2xl mb-6">Usage Example</h3>
        <GlassCard padding="lg">
          <p className="text-white/70 mb-4">
            Click any icon above to copy its code. Here's how to use icons in your components:
          </p>
          <div className="flex items-center gap-4 p-6 rounded-lg bg-white/5 border border-white/10">
            <Icons.Star className="text-yellow-400" size={32} />
            <Icons.Heart className="text-red-400" size={32} />
            <Icons.ThumbsUp className="text-green-400" size={32} />
            <Icons.Zap className="text-purple-400" size={32} />
          </div>
        </GlassCard>
      </div>

      {/* Code Samples */}
      <div className="space-y-4">
        <h3 className="text-white text-3xl mb-6 text-center">Code Samples</h3>
        <CodeBlock
          code={sectionCodeSamples.iconsSection}
          language="tsx"
        />
      </div>
    </div>
  );
}