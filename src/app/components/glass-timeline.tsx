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
              bg-white/10
              border border-white/20
              flex items-center justify-center
              text-white/80
            ">
              {item.icon || (
                <div className="w-2 h-2 rounded-full bg-white" />
              )}
            </div>
            {index < items.length - 1 && (
              <div className="w-px flex-1 bg-white/20 mt-2" />
            )}
          </div>
          
          {/* Content */}
          <div className="flex-1 pb-8">
            <div className="
              backdrop-blur-md backdrop-saturate-150
              bg-white/10
              border border-white/20
              rounded-2xl
              p-4
            ">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h4 className="text-white">{item.title}</h4>
                {item.time && (
                  <span className="text-white/60 text-sm whitespace-nowrap">
                    {item.time}
                  </span>
                )}
              </div>
              <p className="text-white/80 text-sm">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
