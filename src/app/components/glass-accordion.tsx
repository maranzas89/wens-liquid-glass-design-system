import React from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface GlassAccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export function GlassAccordion({ items, allowMultiple = false, className = '' }: GlassAccordionProps) {
  const [openItems, setOpenItems] = React.useState<number[]>([]);
  
  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenItems(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenItems(prev =>
        prev.includes(index) ? [] : [index]
      );
    }
  };
  
  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openItems.includes(index);
        
        return (
          <div
            key={index}
            className="
              backdrop-blur-md backdrop-saturate-150
              bg-[var(--glass-bg-light)]
              border border-[var(--glass-border)]
              rounded-2xl
              overflow-hidden
              transition-all duration-300
            "
          >
            <button
              onClick={() => toggleItem(index)}
              className="
                w-full px-6 py-4
                flex items-center justify-between
                text-white
                hover:bg-[var(--glass-bg-subtle)]
                transition-colors duration-200
              "
            >
              <span>{item.title}</span>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`
                overflow-hidden transition-all duration-300
                ${isOpen ? 'max-h-96' : 'max-h-0'}
              `}
            >
              <div className="px-6 py-4 border-t border-[var(--glass-dark-border)] text-white/80">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
