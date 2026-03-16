import React from 'react';
import { X } from 'lucide-react';

interface GlassTagInputProps {
  tags: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
  className?: string;
}

export function GlassTagInput({ 
  tags, 
  onChange, 
  placeholder = 'Add tag...',
  className = '' 
}: GlassTagInputProps) {
  const [input, setInput] = React.useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      e.preventDefault();
      if (!tags.includes(input.trim())) {
        onChange([...tags, input.trim()]);
      }
      setInput('');
    } else if (e.key === 'Backspace' && !input && tags.length > 0) {
      onChange(tags.slice(0, -1));
    }
  };

  const removeTag = (index: number) => {
    onChange(tags.filter((_, i) => i !== index));
  };

  return (
    <div className={`
      backdrop-blur-md backdrop-saturate-150
      bg-[var(--glass-bg-light)]
      border border-[var(--glass-border)]
      rounded-2xl
      px-3 py-2
      flex flex-wrap gap-2
      focus-within:bg-[var(--glass-bg-medium)] focus-within:border-[var(--glass-border-strong)]
      transition-all duration-300
      ${className}
    `}>
      {tags.map((tag, index) => (
        <div
          key={index}
          className="
            flex items-center gap-2
            px-3 py-1
            rounded-full
            backdrop-blur-md backdrop-saturate-150
            bg-[var(--status-info-light)]
            border border-[var(--status-info-border)]
            text-[var(--text-secondary)] text-sm
          "
        >
          <span>{tag}</span>
          <button
            onClick={() => removeTag(index)}
            className="hover:text-white transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      ))}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={tags.length === 0 ? placeholder : ''}
        className="
          flex-1 min-w-[120px]
          bg-transparent
          text-white placeholder:text-white/50
          outline-none
          py-1
        "
      />
    </div>
  );
}
