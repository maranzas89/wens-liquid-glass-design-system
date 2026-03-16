import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface GlassBreadcrumbProps {
  items: BreadcrumbItem[];
  showHome?: boolean;
  className?: string;
}

export function GlassBreadcrumb({ items, showHome = true, className = '' }: GlassBreadcrumbProps) {
  return (
    <nav className={`flex items-center gap-2 ${className}`}>
      {showHome && (
        <>
          <a
            href="/"
            className="
              text-[var(--text-tertiary)] hover:text-white
              transition-colors duration-200
              p-2 rounded-lg
              hover:bg-[var(--glass-bg-light)]
            "
          >
            <Home size={16} />
          </a>
          <ChevronRight size={16} className="text-[var(--text-disabled)]" />
        </>
      )}
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index === items.length - 1 ? (
            <span className="text-white px-2 py-1">
              {item.label}
            </span>
          ) : (
            <>
              <a
                href={item.href}
                onClick={item.onClick}
                className="
                  text-[var(--text-tertiary)] hover:text-white
                  transition-colors duration-200
                  px-2 py-1 rounded-lg
                  hover:bg-[var(--glass-bg-light)]
                "
              >
                {item.label}
              </a>
              <ChevronRight size={16} className="text-[var(--text-disabled)]" />
            </>
          )}
        </div>
      ))}
    </nav>
  );
}