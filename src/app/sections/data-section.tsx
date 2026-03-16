import React from 'react';
import { GlassCard } from '../components/glass-card';
import { GlassTable } from '../components/glass-table';
import { GlassBadge } from '../components/glass-badge';
import { GlassAvatar, GlassAvatarGroup } from '../components/glass-avatar';
import { GlassChip } from '../components/glass-chip';
import { Palette, Code } from 'lucide-react';
import { CodeBlock } from '../components/code-block';
import { sectionCodeSamples } from '../utils/section-code-samples';

export function DataSection() {
  const tableColumns = [
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email', sortable: true },
    { key: 'role', header: 'Role', sortable: true },
    { 
      key: 'status', 
      header: 'Status',
      render: (value: string) => (
        <GlassBadge variant={value === 'Active' ? 'success' : 'warning'}>
          {value}
        </GlassBadge>
      )
    }
  ];

  const tableData = [
    { name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Inactive' },
    { name: 'Alice Williams', email: 'alice@example.com', role: 'User', status: 'Active' }
  ];

  const avatars = [
    { fallback: 'AB' },
    { fallback: 'CD' },
    { fallback: 'EF' },
    { fallback: 'GH' },
    { fallback: 'IJ' }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--status-success)] bg-clip-text text-transparent">
          Data Display
        </h2>
        <p className="text-white/70 text-lg">
          Tables, badges, avatars and chips
        </p>
      </div>

      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Data Table</h3>
        <GlassTable
          columns={tableColumns}
          data={tableData}
          striped
          hoverable
        />
      </GlassCard>

      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Badges</h3>
        <div className="flex flex-wrap gap-3">
          <GlassBadge variant="primary">Primary</GlassBadge>
          <GlassBadge variant="success">Success</GlassBadge>
          <GlassBadge variant="warning">Warning</GlassBadge>
          <GlassBadge variant="danger">Danger</GlassBadge>
          <GlassBadge variant="info">Info</GlassBadge>
        </div>
      </GlassCard>

      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Avatars</h3>
        <div className="flex items-center gap-6 flex-wrap">
          <GlassAvatar fallback="JD" size="sm" />
          <GlassAvatar fallback="JD" size="md" />
          <GlassAvatar fallback="JD" size="lg" />
          <GlassAvatar fallback="JD" size="xl" />
          <GlassAvatarGroup avatars={avatars} max={3} size="md" />
        </div>
      </GlassCard>

      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Chips</h3>
        <div className="flex flex-wrap gap-3">
          <GlassChip label="Design" variant="primary" icon={<Palette size={14} />} />
          <GlassChip label="Development" variant="success" icon={<Code size={14} />} />
          <GlassChip label="Marketing" variant="warning" />
          <GlassChip label="Removable" variant="danger" onDelete={() => {}} />
        </div>
      </GlassCard>

      <CodeBlock code={sectionCodeSamples.dataSection} />
    </div>
  );
}