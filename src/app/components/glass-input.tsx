import React from 'react';

interface GlassInputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  icon?: React.ReactNode;
}

export function GlassInput({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  className = '',
  icon 
}: GlassInputProps) {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none">
          {icon}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={type === 'date' ? { colorScheme: 'dark' } : undefined}
        className={`
          w-full rounded-2xl
          backdrop-blur-md backdrop-saturate-150
          bg-white/10
          border border-white/20
          px-4 py-3 ${icon ? 'pl-12' : ''}
          text-white placeholder:text-white/50
          outline-none
          focus:bg-white/15 focus:border-white/30
          focus:shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]
          transition-all duration-300
          ${className}
        `}
      />
    </div>
  );
}

interface GlassTextareaProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  rows?: number;
}

export function GlassTextarea({ 
  placeholder, 
  value, 
  onChange, 
  className = '',
  rows = 4 
}: GlassTextareaProps) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      className={`
        w-full rounded-2xl
        backdrop-blur-md backdrop-saturate-150
        bg-white/10
        border border-white/20
        px-4 py-3
        text-white placeholder:text-white/50
        outline-none
        focus:bg-white/15 focus:border-white/30
        focus:shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]
        transition-all duration-300
        resize-none
        ${className}
      `}
    />
  );
}