import React from 'react';
import { Search, X } from 'lucide-react';

interface GlassSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onSearch?: (value: string) => void;
  suggestions?: string[];
  className?: string;
}

export function GlassSearch({ 
  value, 
  onChange, 
  placeholder = 'Search...', 
  onSearch,
  suggestions = [],
  className = '' 
}: GlassSearchProps) {
  const [isFocused, setIsFocused] = React.useState(false);
  const [showSuggestions, setShowSuggestions] = React.useState(false);

  const filteredSuggestions = suggestions.filter(s => 
    s.toLowerCase().includes(value.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(value);
    setShowSuggestions(false);
  };

  const handleClear = () => {
    onChange('');
    setShowSuggestions(false);
  };

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSubmit}>
        <div className={`
          relative
          backdrop-blur-md backdrop-saturate-150
          bg-white/10
          border border-white/20
          rounded-2xl
          transition-all duration-300
          ${isFocused ? 'bg-white/15 border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]' : ''}
        `}>
          <Search 
            size={20} 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none"
          />
          <input
            type="text"
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => {
              setIsFocused(true);
              setShowSuggestions(true);
            }}
            onBlur={() => {
              setIsFocused(false);
              setTimeout(() => setShowSuggestions(false), 200);
            }}
            placeholder={placeholder}
            className="
              w-full px-12 py-3
              bg-transparent
              text-white placeholder:text-white/50
              outline-none
            "
          />
          {value && (
            <button
              type="button"
              onClick={handleClear}
              className="
                absolute right-4 top-1/2 -translate-y-1/2
                text-white/60 hover:text-white
                transition-colors duration-200
              "
            >
              <X size={20} />
            </button>
          )}
        </div>
      </form>

      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="
          absolute top-full left-0 right-0 mt-2 z-20
          backdrop-blur-xl backdrop-saturate-150
          bg-black/85
          border border-white/20
          rounded-2xl
          overflow-hidden
          shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]
          max-h-60 overflow-y-auto
        ">
          {filteredSuggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => {
                onChange(suggestion);
                setShowSuggestions(false);
                onSearch?.(suggestion);
              }}
              className="
                w-full px-4 py-3 text-left
                text-white/90
                hover:bg-white/10
                transition-colors duration-150
              "
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}