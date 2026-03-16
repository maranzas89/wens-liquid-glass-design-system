import React from 'react';
import { Home, LayoutDashboard, FileText, Users, Settings, ChevronRight, ChevronDown, BarChart3, Mail, Calendar, ShoppingCart, Heart, Star, Hexagon } from 'lucide-react';

interface NavItem {
  label: string;
  icon?: React.ReactNode;
  href?: string;
  badge?: number;
  active?: boolean;
  children?: Omit<NavItem, 'children'>[];
}

interface GlassSideNavigationProps {
  items?: NavItem[];
  collapsed?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function GlassSideNavigation({
  items = [
    {
      label: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
      href: '#dashboard',
      active: true
    },
    {
      label: 'Projects',
      icon: <FileText size={20} />,
      badge: 3,
      children: [
        { label: 'All Projects', icon: <FileText size={16} />, href: '#all' },
        { label: 'Active', icon: <Star size={16} />, href: '#active', badge: 2 },
        { label: 'Archived', icon: <Heart size={16} />, href: '#archived' }
      ]
    },
    {
      label: 'Analytics',
      icon: <BarChart3 size={20} />,
      href: '#analytics'
    },
    {
      label: 'Team',
      icon: <Users size={20} />,
      badge: 12,
      children: [
        { label: 'Members', icon: <Users size={16} />, href: '#members' },
        { label: 'Roles', icon: <Settings size={16} />, href: '#roles' }
      ]
    },
    {
      label: 'Calendar',
      icon: <Calendar size={20} />,
      href: '#calendar'
    },
    {
      label: 'Messages',
      icon: <Mail size={20} />,
      href: '#messages',
      badge: 5
    },
    {
      label: 'Shop',
      icon: <ShoppingCart size={20} />,
      href: '#shop'
    },
    {
      label: 'Settings',
      icon: <Settings size={20} />,
      href: '#settings'
    }
  ],
  collapsed = false,
  onToggle,
  className = ''
}: GlassSideNavigationProps) {
  const [expandedItems, setExpandedItems] = React.useState<string[]>(['Projects']);
  const [activeItem, setActiveItem] = React.useState('Dashboard');

  const toggleExpand = (label: string) => {
    if (expandedItems.includes(label)) {
      setExpandedItems(expandedItems.filter(item => item !== label));
    } else {
      setExpandedItems([...expandedItems, label]);
    }
  };

  return (
    <aside className={`
      ${collapsed ? 'w-20' : 'w-64'}
      backdrop-blur-xl backdrop-saturate-150
      bg-gradient-to-b from-white/10 to-white/5
      border-r border-white/20
      transition-all duration-300
      flex flex-col
      ${className}
    `}>
      {/* Logo Section */}
      <div className={`
        p-6 border-b border-white/10
        ${collapsed ? 'px-4' : ''}
      `}>
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'}`}>
          <div className="
            w-10 h-10 
            rounded-xl
            bg-gradient-to-br from-blue-400/20 to-purple-500/20
            backdrop-blur-md
            border border-white/20
            flex items-center justify-center
            relative overflow-hidden
            flex-shrink-0
          ">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
            <Hexagon size={22} className="relative z-10 text-white" />
          </div>
          
          {!collapsed && (
            <div>
              <h1 className="text-white text-xl font-bold">Wen's Project</h1>
              <p className="text-white/50 text-xs">Design System</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {items.map((item, index) => (
          <div key={index}>
            {/* Main Item */}
            <button
              onClick={() => {
                if (item.children) {
                  toggleExpand(item.label);
                } else {
                  setActiveItem(item.label);
                }
              }}
              className={`
                w-full flex items-center justify-between
                px-3 py-2.5 rounded-lg
                transition-all duration-300
                group
                ${activeItem === item.label || item.active
                  ? 'bg-white/15 border border-white/30'
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }
                ${collapsed ? 'justify-center' : ''}
              `}
              title={collapsed ? item.label : undefined}
            >
              <div className={`flex items-center ${collapsed ? '' : 'gap-3'} flex-1`}>
                <span className={`
                  text-white/80 group-hover:text-white transition-colors
                  ${collapsed ? '' : 'flex-shrink-0'}
                `}>
                  {item.icon}
                </span>
                {!collapsed && (
                  <span className="text-white text-sm font-medium flex-1 text-left">
                    {item.label}
                  </span>
                )}
              </div>

              {!collapsed && (
                <div className="flex items-center gap-2">
                  {item.badge && (
                    <span className="
                      px-2 py-0.5 rounded-full
                      bg-gradient-to-r from-pink-500/80 to-purple-500/80
                      text-white text-xs font-bold
                      min-w-[20px] text-center
                    ">
                      {item.badge}
                    </span>
                  )}
                  {item.children && (
                    <span className="text-white/60">
                      {expandedItems.includes(item.label) 
                        ? <ChevronDown size={16} />
                        : <ChevronRight size={16} />
                      }
                    </span>
                  )}
                </div>
              )}
            </button>

            {/* Submenu */}
            {item.children && expandedItems.includes(item.label) && !collapsed && (
              <div className="ml-6 mt-1 space-y-1 border-l border-white/10 pl-3">
                {item.children.map((child, childIndex) => (
                  <button
                    key={childIndex}
                    onClick={() => setActiveItem(child.label)}
                    className={`
                      w-full flex items-center justify-between
                      px-3 py-2 rounded-lg
                      transition-all duration-300
                      ${activeItem === child.label
                        ? 'bg-white/10 border border-white/20'
                        : 'hover:bg-white/5'
                      }
                    `}
                  >
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-white/60">{child.icon}</span>
                      <span className="text-white/80 text-sm">{child.label}</span>
                    </div>
                    {child.badge && (
                      <span className="
                        px-2 py-0.5 rounded-full
                        bg-gradient-to-r from-pink-500/60 to-purple-500/60
                        text-white text-xs font-bold
                      ">
                        {child.badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="p-4 border-t border-white/10">
          <div className="
            p-4 rounded-xl
            backdrop-blur-md bg-gradient-to-br from-blue-500/10 to-purple-500/10
            border border-white/20
          ">
            <div className="flex items-center gap-3 mb-2">
              <div className="
                w-8 h-8 rounded-full
                bg-gradient-to-br from-blue-400 to-purple-500
                flex items-center justify-center
              ">
                <User size={16} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">John Doe</p>
                <p className="text-white/60 text-xs">Admin</p>
              </div>
            </div>
            <button className="
              w-full px-3 py-1.5 rounded-lg
              bg-white/10 hover:bg-white/15
              border border-white/20
              text-white/80 text-xs
              transition-all duration-200
            ">
              View Profile
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}

function User({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}