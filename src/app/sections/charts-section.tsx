import React from 'react';
import { GlassCard } from '../components/glass-card';
import { GlassBarChart, GlassLineChart, GlassPieChart, GlassAreaChart, GlassGaugeChart } from '../components/glass-chart';
import { GlassPercentage } from '../components/glass-percentage';
import { GlassProgress } from '../components/glass-progress';
import { CodeBlock } from '../components/code-block';
import { sectionCodeSamples } from '../utils/section-code-samples';

interface ChartsSectionProps {
  addToast: (variant: any, message: string, options?: any) => void;
}

export function ChartsSection({ addToast }: ChartsSectionProps) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--brand-accent)] bg-clip-text text-transparent">
          Charts & Visualizations
        </h2>
        <p className="text-white/70 text-lg">
          Beautiful data visualization components with glassmorphism effects
        </p>
      </div>

      {/* Bar Chart & Line Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-white text-2xl mb-4">Bar Chart</h3>
          <GlassBarChart
            data={[
              { label: 'Mon', value: 65, color: 'rgba(96, 165, 250, 0.9)' },
              { label: 'Tue', value: 78, color: 'rgba(168, 85, 247, 0.9)' },
              { label: 'Wed', value: 90, color: 'rgba(236, 72, 153, 0.9)' },
              { label: 'Thu', value: 81, color: 'rgba(34, 197, 94, 0.9)' },
              { label: 'Fri', value: 95, color: 'rgba(251, 146, 60, 0.9)' },
              { label: 'Sat', value: 72, color: 'rgba(250, 204, 21, 0.9)' },
              { label: 'Sun', value: 68, color: 'rgba(139, 92, 246, 0.9)' }
            ]}
            height={300}
            showGrid
            showValues
          />
        </div>

        <div>
          <h3 className="text-white text-2xl mb-4">Line Chart</h3>
          <GlassLineChart
            data={[
              { label: 'Jan', value: 4000 },
              { label: 'Feb', value: 3000 },
              { label: 'Mar', value: 5000 },
              { label: 'Apr', value: 4500 },
              { label: 'May', value: 6000 },
              { label: 'Jun', value: 5500 }
            ]}
            height={300}
            smooth
            showGrid
            showDots
          />
        </div>
      </div>

      {/* Donut Chart & Gauge Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-white text-2xl mb-4">Donut Chart</h3>
          <GlassCard padding="lg">
            <GlassPieChart
              data={[
                { label: 'Direct', value: 4200, color: 'rgba(103, 126, 234, 0.8)' },
                { label: 'Organic', value: 3800, color: 'rgba(118, 75, 162, 0.8)' },
                { label: 'Social', value: 2100, color: 'rgba(79, 172, 254, 0.8)' },
                { label: 'Referral', value: 1900, color: 'rgba(67, 233, 123, 0.8)' },
                { label: 'Email', value: 1500, color: 'rgba(250, 112, 154, 0.8)' }
              ]}
              size={280}
              donut
              showLegend
            />
          </GlassCard>
        </div>

        <div>
          <h3 className="text-white text-2xl mb-4">Gauge Charts</h3>
          <GlassCard padding="lg">
            <div className="grid grid-cols-2 gap-6">
              <GlassGaugeChart
                value={75}
                max={100}
                size={160}
                label="Performance"
              />
              <GlassGaugeChart
                value={82}
                max={100}
                size={160}
                label="Efficiency"
              />
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Area Chart */}
      <div>
        <h3 className="text-white text-2xl mb-4">Area Chart (Wave Chart)</h3>
        <GlassAreaChart
          data={[
            { label: 'Jan', values: { Sales: 4000, Revenue: 2400, Profit: 1400 } },
            { label: 'Feb', values: { Sales: 3000, Revenue: 1398, Profit: 900 } },
            { label: 'Mar', values: { Sales: 5000, Revenue: 3800, Profit: 2100 } },
            { label: 'Apr', values: { Sales: 4500, Revenue: 3908, Profit: 2500 } },
            { label: 'May', values: { Sales: 6000, Revenue: 4800, Profit: 3200 } },
            { label: 'Jun', values: { Sales: 5500, Revenue: 3800, Profit: 2800 } }
          ]}
          height={300}
          smooth
          stacked={false}
        />
      </div>

      {/* Percentage Indicators */}
      <div>
        <h3 className="text-white text-2xl mb-4">Percentage Indicators</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <GlassCard padding="lg" className="flex flex-col items-center">
            <GlassPercentage 
              value={85} 
              variant="circular" 
              size="md"
              label="Goal"
            />
          </GlassCard>
          <GlassCard padding="lg" className="flex flex-col items-center">
            <GlassPercentage 
              value={72} 
              variant="circular" 
              size="md"
              label="Progress"
            />
          </GlassCard>
          <GlassCard padding="lg" className="flex flex-col items-center">
            <GlassPercentage 
              value={68} 
              variant="semi-circular" 
              size="md"
              label="Performance"
            />
          </GlassCard>
          <GlassCard padding="lg" className="flex flex-col items-center">
            <GlassPercentage 
              value={91} 
              variant="semi-circular" 
              size="md"
              label="Uptime"
            />
          </GlassCard>
        </div>
      </div>

      {/* Progress Bars */}
      <div>
        <h3 className="text-white text-2xl mb-4">Progress Bars</h3>
        <GlassCard padding="lg">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white/80">Primary Progress</span>
                <span className="text-white">75%</span>
              </div>
              <GlassProgress value={75} variant="primary" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white/80">Success Progress</span>
                <span className="text-white">60%</span>
              </div>
              <GlassProgress value={60} variant="success" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white/80">Warning Progress</span>
                <span className="text-white">45%</span>
              </div>
              <GlassProgress value={45} variant="warning" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white/80">Danger Progress</span>
                <span className="text-white">30%</span>
              </div>
              <GlassProgress value={30} variant="danger" />
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Code Samples */}
      <div>
        <h3 className="text-white text-2xl mb-4">Code Samples</h3>
        <CodeBlock code={sectionCodeSamples.chartsSection} />
      </div>
    </div>
  );
}