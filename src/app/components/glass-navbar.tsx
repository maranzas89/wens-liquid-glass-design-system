import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface GlassNavbarProps {
  logo?: React.ReactNode;
  items: NavItem[];
  actions?: React.ReactNode;
}

export function GlassNavbar({ logo, items, actions }: GlassNavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4 sm:mx-6 md:mx-8">
        <div className="
          backdrop-blur-lg backdrop-saturate-150
          bg-white/10
          border border-white/20
          rounded-3xl
          shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]
          px-6 py-4
        ">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              {logo}
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={item.onClick}
                  className="
                    text-white/90 hover:text-white
                    transition-colors duration-200
                    relative
                    after:absolute after:bottom-0 after:left-0 after:right-0
                    after:h-0.5 after:bg-white/50
                    after:scale-x-0 hover:after:scale-x-100
                    after:transition-transform after:duration-300
                    pb-1
                  "
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            {/* Actions */}
            <div className="hidden md:flex items-center gap-4">
              {actions}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/20">
              <div className="flex flex-col gap-4">
                {items.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={item.onClick}
                    className="text-white/90 hover:text-white transition-colors py-2"
                  >
                    {item.label}
                  </a>
                ))}
                {actions && (
                  <div className="pt-4 border-t border-white/20">
                    {actions}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
