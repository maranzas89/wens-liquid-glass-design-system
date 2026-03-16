import React from 'react';
import { GlassSidebar } from './glass-sidebar';
import { GlassNavbar } from './glass-navbar';

interface GlassDashboardProps {
  children: React.ReactNode;
  sidebarItems: any[];
  navbarItems?: any[];
  logo?: React.ReactNode;
  user?: {
    name: string;
    avatar?: string;
  };
  className?: string;
}

export function GlassDashboard({ 
  children, 
  sidebarItems, 
  navbarItems = [],
  logo,
  user,
  className = '' 
}: GlassDashboardProps) {
  return (
    <div className={`flex h-screen overflow-hidden ${className}`}>
      {/* Sidebar */}
      <GlassSidebar
        items={sidebarItems}
        logo={logo}
        footer={
          user && (
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-[var(--glass-bg-subtle)]">
              {user.avatar ? (
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-[var(--glass-bg-medium)] flex items-center justify-center text-white">
                  {user.name.charAt(0)}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm truncate">{user.name}</p>
                <p className="text-[var(--text-muted)] text-xs">View profile</p>
              </div>
            </div>
          )
        }
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar (optional) */}
        {navbarItems.length > 0 && (
          <div className="shrink-0">
            <GlassNavbar
              items={navbarItems}
              logo={logo}
            />
          </div>
        )}

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
