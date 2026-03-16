import React from 'react';

interface ListItem {
  id: string | number;
  content: React.ReactNode;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
}

interface GlassListProps {
  items: ListItem[];
  className?: string;
  variant?: 'default' | 'bordered' | 'divided';
}

export function GlassList({ items, className = '', variant = 'default' }: GlassListProps) {
  const variantStyles = {
    default: '',
    bordered: 'border border-[var(--glass-border)] rounded-2xl overflow-hidden',
    divided: ''
  };

  return (
    <div className={`
      backdrop-blur-md backdrop-saturate-150
      bg-[var(--glass-bg-light)]
      ${variantStyles[variant]}
      ${className}
    `}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`
            flex items-center gap-4 px-6 py-4
            ${variant === 'divided' && index < items.length - 1 ? 'border-b border-[var(--glass-border)]' : ''}
            ${variant === 'default' ? 'hover:bg-[var(--glass-bg-light)] rounded-2xl' : 'hover:bg-[var(--glass-bg-light)]'}
            transition-colors duration-200
          `}
        >
          {item.icon && (
            <div className="text-[var(--text-muted)]">
              {item.icon}
            </div>
          )}
          <div className="flex-1 text-white">
            {item.content}
          </div>
          {item.actions && (
            <div>
              {item.actions}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
