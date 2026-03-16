import React from 'react';
import { GlassCard } from '../components/glass-card';
import { GlassBreadcrumb } from '../components/glass-breadcrumb';
import { GlassTopNavbar } from '../components/glass-top-navbar';
import { GlassTabs } from '../components/glass-tabs';
import { GlassPagination } from '../components/glass-pagination';
import { GlassStepper } from '../components/glass-stepper';
import { GlassSideNavigation } from '../components/glass-side-navigation';
import { Code, Palette, Zap } from 'lucide-react';
import { CodeBlock } from '../components/code-block';
import { sectionCodeSamples } from '../utils/section-code-samples';

export function NavigationSection() {
  const [activeTab, setActiveTab] = React.useState('components');
  const [currentPage, setCurrentPage] = React.useState(1);
  const [currentStep, setCurrentStep] = React.useState(2);
  const [sideNavCollapsed, setSideNavCollapsed] = React.useState(false);

  const tabs = [
    { label: 'Components', value: 'components', icon: <Code size={16} /> },
    { label: 'Styles', value: 'styles', icon: <Palette size={16} /> },
    { label: 'Interactions', value: 'interactions', icon: <Zap size={16} /> }
  ];

  const steps = [
    { label: 'Select', description: 'Choose your plan' },
    { label: 'Configure', description: 'Set preferences' },
    { label: 'Review', description: 'Check details' },
    { label: 'Complete', description: 'Finalize setup' }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--brand-accent)] bg-clip-text text-transparent">
          Navigation Components
        </h2>
        <p className="text-white/70 text-lg">
          Navigation bars, tabs, breadcrumbs, pagination and steppers
        </p>
      </div>

      {/* Top Navbar */}
      <div>
        <h3 className="text-white text-2xl mb-4">Top Navigation Bar</h3>
        <GlassCard padding="none">
          <GlassTopNavbar />
        </GlassCard>
      </div>

      {/* Side Navigation */}
      <div>
        <h3 className="text-white text-2xl mb-4">Side Navigation</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Expanded */}
          <div>
            <p className="text-white/60 text-sm mb-3">Expanded</p>
            <GlassCard padding="none" className="overflow-hidden">
              <div className="h-[600px]">
                <GlassSideNavigation collapsed={false} />
              </div>
            </GlassCard>
          </div>

          {/* Collapsed */}
          <div>
            <p className="text-white/60 text-sm mb-3">Collapsed</p>
            <GlassCard padding="none" className="overflow-hidden">
              <div className="h-[600px]">
                <GlassSideNavigation collapsed={true} />
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Tabs</h3>
        <GlassTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      </GlassCard>

      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Breadcrumb</h3>
        <GlassBreadcrumb
          items={[
            { label: 'Home', href: '#home' },
            { label: 'Components', href: '#components' },
            { label: 'Navigation' }
          ]}
        />
      </GlassCard>

      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Pagination</h3>
        <div className="flex justify-center">
          <GlassPagination
            currentPage={currentPage}
            totalPages={10}
            onPageChange={setCurrentPage}
            maxVisible={5}
          />
        </div>
      </GlassCard>

      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Stepper</h3>
        <GlassStepper steps={steps} currentStep={currentStep} />
      </GlassCard>

      <CodeBlock code={sectionCodeSamples.navigationSection} />
    </div>
  );
}