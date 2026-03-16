import React from 'react';
import { Menu, Search, Bell, User, Settings, ChevronDown, Home, LayoutDashboard, FileText, Users, Hexagon } from 'lucide-react';

interface NavItem {
  label: string;
  icon?: React.ReactNode;
  href?: string;
  badge?: number;
  submenu?: { label: string; href: string }[];
}

interface GlassTopNavbarProps {
  items?: NavItem[];
  logo?: React.ReactNode;
  onMenuClick?: () => void;
  onSearch?: (query: string) => void;
  showSearch?: boolean;
  showNotifications?: boolean;
  showUserMenu?: boolean;
  notificationCount?: number;
  className?: string;
}

export function GlassTopNavbar({
  items = [
    { label: 'Home', icon: <Home size={18} />, href: '#home' },
    { label: 'Dashboard', icon: <LayoutDashboard size={18} />, href: '#dashboard' },
    { label: 'Projects', icon: <FileText size={18} />, href: '#projects', badge: 3 },
    { label: 'Team', icon: <Users size={18} />, href: '#team' }
  ],
  logo,
  onMenuClick,
  onSearch,
  showSearch = true,
  showNotifications = true,
  showUserMenu = true,
  notificationCount = 5,
  className = ''
}: GlassTopNavbarProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeItem, setActiveItem] = React.useState('Home');
  const [showUserDropdown, setShowUserDropdown] = React.useState(false);

  return (
    <nav className={`
      backdrop-blur-xl bg-black/85
      border-b border-white/20
      ${className}
    `}>
      <div className="px-6 h-16 flex items-center justify-between gap-6">
        {/* Left Section - Logo & Menu */}
        <div className="flex items-center gap-4">
          {onMenuClick && (
            <button
              onClick={onMenuClick}
              className="
                p-2 rounded-lg
                backdrop-blur-md bg-white/5
                border border-white/10
                hover:bg-white/10
                transition-all duration-300
                lg:hidden
              "
            >
              <Menu size={20} className="text-white" />
            </button>
          )}

          {/* Logo */}
          <div className="flex items-center gap-3">
            {logo || (
              <div className="
                w-9 h-9 
                rounded-lg
                bg-gradient-to-br from-blue-400/20 to-purple-500/20
                backdrop-blur-md
                border border-white/20
                flex items-center justify-center
                relative overflow-hidden
              ">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                <Hexagon size={20} className="relative z-10 text-white" />
              </div>
            )}
            <span className="text-white font-bold text-lg hidden sm:block">Wen's Project</span>
          </div>
        </div>

        {/* Center Section - Navigation Items */}
        <div className="hidden lg:flex items-center gap-2 flex-1 max-w-2xl">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveItem(item.label)}
              className={`
                relative px-4 py-2 rounded-lg
                flex items-center gap-2
                backdrop-blur-md
                border border-white/10
                transition-all duration-300
                ${activeItem === item.label
                  ? 'bg-white/15 border-white/30'
                  : 'bg-white/5 hover:bg-white/10'
                }
              `}
            >
              {item.icon && <span className="text-white/80">{item.icon}</span>}
              <span className="text-white text-sm font-medium">{item.label}</span>
              {item.badge && (
                <span className="
                  px-1.5 py-0.5 rounded-full
                  bg-gradient-to-r from-pink-500/80 to-purple-500/80
                  text-white text-xs font-bold
                  min-w-[20px] text-center
                ">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Right Section - Search, Notifications, User */}
        <div className="flex items-center gap-3">
          {/* Search */}
          {showSearch && (
            <div className="
              hidden md:flex items-center gap-2
              px-4 py-2 rounded-lg
              backdrop-blur-md bg-white/5
              border border-white/10
              focus-within:border-white/30
              transition-all duration-300
              min-w-[200px]
            ">
              <Search size={16} className="text-white/40" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  onSearch?.(e.target.value);
                }}
                className="
                  bg-transparent border-none outline-none
                  text-white placeholder-white/40
                  text-sm flex-1
                "
              />
            </div>
          )}

          {/* Notifications */}
          {showNotifications && (
            <button className="
              relative p-2 rounded-lg
              backdrop-blur-md bg-white/5
              border border-white/10
              hover:bg-white/10
              transition-all duration-300
            ">
              <Bell size={20} className="text-white" />
              {notificationCount > 0 && (
                <span className="
                  absolute -top-1 -right-1
                  w-5 h-5 rounded-full
                  bg-gradient-to-r from-pink-500 to-purple-500
                  text-white text-xs
                  flex items-center justify-center
                  font-bold
                  animate-pulse
                ">
                  {notificationCount > 9 ? '9+' : notificationCount}
                </span>
              )}
            </button>
          )}

          {/* User Menu */}
          {showUserMenu && (
            <div className="relative">
              <button
                onClick={() => setShowUserDropdown(!showUserDropdown)}
                className="
                  flex items-center gap-2 px-3 py-2 rounded-lg
                  backdrop-blur-md bg-white/5
                  border border-white/10
                  hover:bg-white/10
                  transition-all duration-300
                "
              >
                <div className="
                  w-7 h-7 rounded-full
                  bg-gradient-to-br from-blue-400 to-purple-500
                  flex items-center justify-center
                ">
                  <User size={16} className="text-white" />
                </div>
                <ChevronDown size={16} className="text-white/60 hidden sm:block" />
              </button>

              {/* Dropdown */}
              {showUserDropdown && (
                <div className="
                  absolute right-0 top-full mt-2
                  w-48 rounded-xl
                  backdrop-blur-xl bg-black/85
                  border border-white/20
                  shadow-2xl
                  overflow-hidden
                  z-50
                ">
                  <div className="p-3 border-b border-white/10">
                    <p className="text-white text-sm font-medium">John Doe</p>
                    <p className="text-white/60 text-xs">john@example.com</p>
                  </div>
                  <div className="p-2">
                    <button className="
                      w-full px-3 py-2 rounded-lg
                      text-left text-white/80 text-sm
                      hover:bg-white/10
                      transition-all duration-200
                      flex items-center gap-2
                    ">
                      <User size={16} />
                      Profile
                    </button>
                    <button className="
                      w-full px-3 py-2 rounded-lg
                      text-left text-white/80 text-sm
                      hover:bg-white/10
                      transition-all duration-200
                      flex items-center gap-2
                    ">
                      <Settings size={16} />
                      Settings
                    </button>
                  </div>
                  <div className="p-2 border-t border-white/10">
                    <button className="
                      w-full px-3 py-2 rounded-lg
                      text-left text-pink-300 text-sm
                      hover:bg-white/10
                      transition-all duration-200
                    ">
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}