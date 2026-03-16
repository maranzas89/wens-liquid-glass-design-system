import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SidebarItem {
  label: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  badge?: string | number;
  children?: SidebarItem[];
}

interface GlassSidebarProps {
  items: SidebarItem[];
  logo?: React.ReactNode;
  footer?: React.ReactNode;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  className?: string;
}

export function GlassSidebar({ 
  items, 
  logo, 
  footer,
  collapsible = true,
  defaultCollapsed = false,
  className = '' 
}: GlassSidebarProps) {
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed);
  const [openItems, setOpenItems] = React.useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className={`
      ${collapsed ? 'w-20' : 'w-64'}
      h-screen
      backdrop-blur-xl backdrop-saturate-150
      bg-[var(--glass-bg-light)]
      border-r border-[var(--glass-border)]
      transition-all duration-300
      flex flex-col
      ${className}
    `}>
      {/* Logo */}
      {logo && (
        <div className="p-6 border-b border-[var(--glass-border)]">
          {collapsed ? (
            <div className="flex justify-center">
              {logo}
            </div>
          ) : (
            logo
          )}
        </div>
      )}

      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {items.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => {
                if (item.children) {
                  toggleItem(index);
                } else {
                  item.onClick?.();
                }
              }}
              className={`
                w-full flex items-center gap-3
                px-4 py-3 rounded-2xl
                text-white/80
                hover:bg-[var(--glass-bg-light)] hover:text-white
                transition-all duration-200
                ${collapsed ? 'justify-center' : ''}
              `}
            >
              {item.icon && (
                <span className="flex-shrink-0">
                  {item.icon}
                </span>
              )}
              {!collapsed && (
                <>
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge && (
                    <span className="
                      px-2 py-0.5 rounded-full
                      bg-[var(--status-info-light)] text-blue-100
                      text-xs
                    ">
                      {item.badge}
                    </span>
                  )}
                  {item.children && (
                    <ChevronRight 
                      size={16}
                      className={`transition-transform ${openItems.includes(index) ? 'rotate-90' : ''}`}
                    />
                  )}
                </>
              )}
            </button>

            {/* Submenu */}
            {item.children && !collapsed && openItems.includes(index) && (
              <div className="ml-4 mt-2 space-y-1">
                {item.children.map((child, childIndex) => (
                  <button
                    key={childIndex}
                    onClick={child.onClick}
                    className="
                      w-full flex items-center gap-3
                      px-4 py-2 rounded-xl
                      text-white/70
                      hover:bg-[var(--glass-bg-subtle)] hover:text-white
                      transition-all duration-200
                    "
                  >
                    {child.icon && <span>{child.icon}</span>}
                    <span className="flex-1 text-left text-sm">{child.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      {footer && !collapsed && (
        <div className="p-4 border-t border-[var(--glass-border)]">
          {footer}
        </div>
      )}

      {/* Collapse Toggle */}
      {collapsible && (
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="
            m-4 p-3 rounded-2xl
            backdrop-blur-md backdrop-saturate-150
            bg-[var(--glass-bg-light)]
            border border-[var(--glass-border)]
            text-white
            hover:bg-[var(--glass-bg-medium)]
            transition-all duration-200
            flex items-center justify-center
          "
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      )}
    </div>
  );
}
