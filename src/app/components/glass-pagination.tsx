import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GlassPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisible?: number;
  className?: string;
}

export function GlassPagination({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  maxVisible = 5,
  className = '' 
}: GlassPaginationProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const halfVisible = Math.floor(maxVisible / 2);
    
    let start = Math.max(1, currentPage - halfVisible);
    let end = Math.min(totalPages, start + maxVisible - 1);
    
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    
    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push('...');
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    if (end < totalPages) {
      if (end < totalPages - 1) pages.push('...');
      pages.push(totalPages);
    }
    
    return pages;
  };
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="
          p-2 rounded-xl
          backdrop-blur-md backdrop-saturate-150
          bg-[var(--glass-bg-light)]
          border border-[var(--glass-border)]
          text-white
          disabled:opacity-50 disabled:cursor-not-allowed
          hover:bg-[var(--glass-bg-medium)]
          transition-all duration-200
        "
      >
        <ChevronLeft size={20} />
      </button>
      
      {getPageNumbers().map((page, index) => (
        <div key={index}>
          {page === '...' ? (
            <span className="text-[var(--text-muted)] px-2">...</span>
          ) : (
            <button
              onClick={() => onPageChange(page as number)}
              className={`
                px-4 py-2 rounded-xl
                backdrop-blur-md backdrop-saturate-150
                border border-[var(--glass-border)]
                transition-all duration-200
                ${currentPage === page
                  ? 'bg-[var(--glass-bg-medium)] text-white'
                  : 'bg-[var(--glass-bg-light)] text-[var(--text-secondary)] hover:bg-[var(--glass-bg-medium)] hover:text-white'
                }
              `}
            >
              {page}
            </button>
          )}
        </div>
      ))}
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="
          p-2 rounded-xl
          backdrop-blur-md backdrop-saturate-150
          bg-[var(--glass-bg-light)]
          border border-[var(--glass-border)]
          text-white
          disabled:opacity-50 disabled:cursor-not-allowed
          hover:bg-[var(--glass-bg-medium)]
          transition-all duration-200
        "
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}