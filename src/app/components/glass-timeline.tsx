import React from 'react';

interface TimelineItem {
  title: string;
  description: string;
  time?: string;
  icon?: React.ReactNode;
}

interface GlassTimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function GlassTimeline({ items, className = '' }: GlassTimelineProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="flex gap-4">
          {/* Timeline line and dot */}
          <div className="flex flex-col items-center">
            <div className="
              w-10 h-10 rounded-full
              backdrop-blur-md backdrop-saturate-150
              bg-[var(--glass-bg-light)]
              border border-[var(--glass-border)]
              flex items-center justify-center
              text-[var(--text-secondary)]
            ">
              {item.icon || (
                <div className="w-2 h-2 rounded-full bg-white" />
              )}
            </div>
            {index < items.length - 1 && (
              <div className="w-px flex-1 bg-[var(--glass-border)] mt-2" />
            )}
          </div>
          
          {/* Content */}
          <div className="flex-1 pb-8">
            <div className="
              backdrop-blur-md backdrop-saturate-150
              bg-[var(--glass-bg-light)]
              border border-[var(--glass-border)]
              rounded-2xl
              p-4
            ">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h4 className="text-white">{item.title}</h4>
                {item.time && (
                  <span className="text-[var(--text-muted)] text-sm whitespace-nowrap">
                    {item.time}
                  </span>
                )}
              </div>
              <p className="text-[var(--text-secondary)] text-sm">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
