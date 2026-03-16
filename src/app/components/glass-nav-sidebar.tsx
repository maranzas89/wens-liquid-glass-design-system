import React from 'react';
import { 
  BarChart3, 
  Type, 
  FormInput, 
  Layout, 
  Bell,
  Navigation2,
  MapPin,
  Database,
  Palette,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
  X
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface GlassNavSidebarProps {
  items: NavItem[];
  activeSection: string;
  onNavigate: (id: string) => void;
  onCollapseChange?: (isCollapsed: boolean) => void;
}

export function GlassNavSidebar({ items, activeSection, onNavigate, onCollapseChange }: GlassNavSidebarProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = React.useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const [searchQuery, setSearchQuery] = React.useState('');
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  const filteredItems = React.useMemo(() => {
    if (!searchQuery.trim()) return items;
    const query = searchQuery.toLowerCase().trim();
    return items.filter(item => 
      item.label.toLowerCase().includes(query) || 
      item.id.toLowerCase().includes(query)
    );
  }, [items, searchQuery]);

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && filteredItems.length > 0) {
      onNavigate(filteredItems[0].id);
      setSearchQuery('');
      searchInputRef.current?.blur();
    }
    if (e.key === 'Escape') {
      setSearchQuery('');
      searchInputRef.current?.blur();
    }
  };

  const handleToggle = () => {
    const newCollapsedState = !isCollapsed;
    setIsCollapsed(newCollapsedState);
    onCollapseChange?.(newCollapsedState);
  };

  const handleMouseEnter = (e: React.MouseEvent, itemId: string) => {
    if (!isCollapsed) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setTooltipPos({ top: rect.top + rect.height / 2, left: rect.right + 12 });
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      {/* Main Sidebar */}
      <div 
        className={`
          fixed left-0 top-0 bottom-0
          backdrop-blur-xl backdrop-saturate-150
          bg-gradient-to-b from-white/10 to-white/5
          z-50
          flex flex-col
          h-screen
          overflow-y-auto
          transition-all duration-300
          ${isCollapsed ? 'w-20' : 'w-80'}
          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]
        `}
      >
        {/* Search Box */}
        {!isCollapsed && (
          <div className="p-4 pb-2 flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchKeyDown}
                  placeholder="Search components..."
                  className="
                    w-full pl-9 pr-8 py-2.5 rounded-xl
                    bg-white/8 border border-white/15
                    text-white text-sm placeholder-white/35
                    backdrop-blur-md
                    focus:outline-none focus:border-white/30 focus:bg-white/12
                    transition-all duration-200
                  "
                />
                {searchQuery && (
                  <button
                    onClick={() => { setSearchQuery(''); searchInputRef.current?.focus(); }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
              <button
                onClick={handleToggle}
                className="
                  w-10 h-10 rounded-lg flex-shrink-0
                  hover:bg-white/20
                  transition-all duration-300
                  flex items-center justify-center
                  text-white/60 hover:text-white
                "
                title="Collapse Navigation"
              >
                <ChevronsLeft size={20} />
              </button>
            </div>
            {searchQuery && (
              <p className="text-white/40 text-xs mt-2 px-1">
                {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''} found
              </p>
            )}
          </div>
        )}

        {/* Expand button when collapsed (replaces search icon) */}
        {isCollapsed && (
          <div className="p-4 pb-2 flex-shrink-0 flex justify-center">
            <button
              onClick={handleToggle}
              className="
                w-12 h-12 rounded-xl
                flex items-center justify-center
                text-white/60 hover:text-white hover:bg-white/10
                transition-all duration-200
              "
              title="Expand Navigation"
            >
              <ChevronsRight size={20} />
            </button>
          </div>
        )}

        {/* Navigation Items */}
        <div className="p-4 space-y-1 flex-1">
          {filteredItems.map((item) => {
            const isActive = activeSection === item.id;
            
            return (
              <div key={item.id} className="relative group/nav">
                <button
                  onClick={() => onNavigate(item.id)}
                  onMouseEnter={(e) => handleMouseEnter(e, item.id)}
                  onMouseLeave={handleMouseLeave}
                  className={`
                    ${isCollapsed 
                      ? 'w-12 h-12 mx-auto justify-center' 
                      : 'w-full'
                    }
                    flex items-center gap-3
                    px-4 py-3 rounded-xl
                    transition-all duration-200
                    ${isActive
                      ? 'bg-white/20 text-white border border-white/30' 
                      : 'text-white/70 hover:bg-white/10 hover:text-white border border-transparent'
                    }
                  `}
                >
                  <span className={`
                    flex-shrink-0
                    ${isActive ? 'text-blue-300' : 'text-white/60 group-hover/nav:text-white/80'}
                  `}>
                    {item.icon}
                  </span>
                  {!isCollapsed && (
                    <>
                      <span className="flex-1 text-left font-medium">
                        {item.label}
                      </span>
                      {isActive && (
                        <ChevronRight size={16} className="text-blue-300" />
                      )}
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer - Fixed at bottom */}
        {!isCollapsed && (
          <div className="
            flex-shrink-0
            p-4
            border-t border-white/20
            backdrop-blur-md
          ">
            <div className="
              p-3 rounded-xl
              bg-white/5
              text-center
            ">
              <p className="text-white/60 text-xs">
                50+ Components
              </p>
              <p className="text-white text-sm font-semibold">
                v1.0.0
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Toggle Button - Only shown when expanded, for collapsing */}
      {/* removed - now inside sidebar */}

      {/* Fixed-position Tooltip */}
      {isCollapsed && hoveredItem && (() => {
        const item = items.find(i => i.id === hoveredItem);
        if (!item) return null;
        return (
          <div
            className="
              fixed
              px-3 py-2 rounded-xl
              backdrop-blur-xl backdrop-saturate-150
              bg-white/10
              border border-white/20
              shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]
              text-white text-sm whitespace-nowrap
              pointer-events-none
              z-[9999]
            "
            style={{
              top: tooltipPos.top,
              left: tooltipPos.left,
              transform: 'translateY(-50%)',
            }}
          >
            {item.label}
          </div>
        );
      })()}
    </>
  );
}

// Hook for scroll detection
export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeSection, setActiveSection] = React.useState(sectionIds[0]);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // If user is at/near the bottom of the page, activate the last section
      const atBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 50);
      if (atBottom) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}

// Smooth scroll function
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.offsetTop - offset;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}