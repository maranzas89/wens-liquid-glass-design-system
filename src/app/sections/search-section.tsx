import React from 'react';
import { GlassCard } from '../components/glass-card';
import { GlassSearch } from '../components/glass-search';
import { Search } from 'lucide-react';
import { CodeBlock } from '../components/code-block';
import { sectionCodeSamples } from '../utils/section-code-samples';

interface SearchSectionProps {
  addToast: (variant: any, message: string, options?: any) => void;
}

export function SearchSection({ addToast }: SearchSectionProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [basicSearch, setBasicSearch] = React.useState('');

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
          Search Components
        </h2>
        <p className="text-white/70 text-lg">
          Search inputs with glass morphism effects
        </p>
      </div>

      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Glass Search Component</h3>
        <GlassSearch
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search components, docs, examples..."
          onSearch={(query) => addToast('info', `Searching for: ${query}`)}
        />
      </GlassCard>

      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Search Input Variants</h3>
        <div className="space-y-4">
          {/* Inline Search Input 1 */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
            <input
              type="text"
              placeholder="Search files..."
              value={basicSearch}
              onChange={(e) => setBasicSearch(e.target.value)}
              className="
                w-full pl-12 pr-4 py-3
                bg-[var(--glass-bg-light)]
                border border-[var(--glass-border)]
                rounded-xl
                text-white placeholder-white/40
                focus:outline-none focus:border-blue-400/50
                transition-colors
              "
            />
          </div>

          {/* Inline Search Input 2 */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
            <input
              type="text"
              placeholder="Search users..."
              className="
                w-full pl-12 pr-4 py-3
                bg-[var(--glass-bg-light)]
                border border-[var(--glass-border)]
                rounded-xl
                text-white placeholder-white/40
                focus:outline-none focus:border-green-400/50
                transition-colors
              "
            />
          </div>

          {/* Inline Search Input 3 */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              className="
                w-full pl-12 pr-4 py-3
                bg-[var(--glass-bg-light)]
                border border-[var(--glass-border)]
                rounded-xl
                text-white placeholder-white/40
                focus:outline-none focus:border-purple-400/50
                transition-colors
              "
            />
          </div>
        </div>
      </GlassCard>

      <CodeBlock code={sectionCodeSamples.searchSection} />
    </div>
  );
}