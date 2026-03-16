import React from 'react';

interface Tab {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface GlassTabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (value: string) => void;
}

export function GlassTabs({ tabs, activeTab, onChange }: GlassTabsProps) {
  return (
    <div className="
      inline-flex
      backdrop-blur-md backdrop-saturate-150
      bg-white/10
      border border-white/20
      rounded-2xl
      p-1
      gap-1
    ">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={`
            relative px-4 py-2 rounded-xl
            transition-all duration-300
            flex items-center gap-2
            ${activeTab === tab.value
              ? 'bg-white/20 text-white shadow-lg'
              : 'text-white/70 hover:text-white hover:bg-white/10'
            }
          `}
        >
          {tab.icon && <span className="text-current">{tab.icon}</span>}
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
