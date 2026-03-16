import React from 'react';
import { GlassCard } from '../components/glass-card';
import { GlassCalendar } from '../components/glass-calendar';
import { CodeBlock } from '../components/code-block';
import { sectionCodeSamples } from '../utils/section-code-samples';

interface CalendarSectionProps {
  addToast: (variant: any, message: string, options?: any) => void;
}

export function CalendarSection({ addToast }: CalendarSectionProps) {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl text-white font-bold mb-4 bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
          Calendar Component
        </h2>
        <p className="text-white/70 text-lg">
          Beautiful glass calendar for date selection
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard padding="lg">
          <h3 className="text-white text-2xl mb-2">Interactive Calendar</h3>
          <p className="text-white/60 text-sm mb-6">🖱️ Click on a date to select it</p>
          <GlassCalendar
            value={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              addToast('success', `Selected: ${date.toLocaleDateString()}`);
            }}
          />
        </GlassCard>

        <GlassCard padding="lg">
          <h3 className="text-white text-2xl mb-6">Selected Date</h3>
          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white/60 text-sm mb-2">Selected Date:</p>
              <p className="text-white text-2xl font-bold">
                {selectedDate.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white/60 text-sm mb-2">Day of Week:</p>
              <p className="text-white text-xl">
                {selectedDate.toLocaleDateString('en-US', { weekday: 'long' })}
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white/60 text-sm mb-2">Month:</p>
              <p className="text-white text-xl">
                {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>
            </div>
          </div>
        </GlassCard>
      </div>

      <div className="mt-12">
        <CodeBlock code={sectionCodeSamples.calendarSection} />
      </div>
    </div>
  );
}