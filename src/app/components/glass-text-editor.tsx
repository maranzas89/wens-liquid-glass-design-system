import React from 'react';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Type } from 'lucide-react';

interface GlassTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function GlassTextEditor({ value, onChange, className = '' }: GlassTextEditorProps) {
  const [selectedFont, setSelectedFont] = React.useState('var(--font-sans)');
  const [fontSize, setFontSize] = React.useState(16);
  const [isBold, setIsBold] = React.useState(false);
  const [isItalic, setIsItalic] = React.useState(false);
  const [isUnderline, setIsUnderline] = React.useState(false);
  const [alignment, setAlignment] = React.useState<'left' | 'center' | 'right'>('left');

  const fonts = [
    { name: 'Inter', value: 'var(--font-sans)' },
    { name: 'Poppins', value: 'var(--font-display)' },
    { name: 'Space Grotesk', value: 'var(--font-geometric)' },
    { name: 'JetBrains Mono', value: 'var(--font-mono)' }
  ];

  const textStyle: React.CSSProperties = {
    fontFamily: selectedFont,
    fontSize: `${fontSize}px`,
    fontWeight: isBold ? 700 : 400,
    fontStyle: isItalic ? 'italic' : 'normal',
    textDecoration: isUnderline ? 'underline' : 'none',
    textAlign: alignment
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Toolbar */}
      <div className="
        backdrop-blur-md backdrop-saturate-150
        bg-[var(--glass-bg-light)]
        border border-[var(--glass-border)]
        rounded-2xl
        p-4
        flex flex-wrap gap-4 items-center
      ">
        {/* Font Family */}
        <select
          value={selectedFont}
          onChange={(e) => setSelectedFont(e.target.value)}
          className="
            px-4 py-2 rounded-xl
            backdrop-blur-md backdrop-saturate-150
            bg-[var(--glass-bg-light)]
            border border-[var(--glass-border)]
            text-white
            outline-none
            cursor-pointer
          "
        >
          {fonts.map((font) => (
            <option key={font.value} value={font.value} className="bg-gray-800">
              {font.name}
            </option>
          ))}
        </select>

        {/* Font Size */}
        <div className="flex items-center gap-2">
          <Type size={16} className="text-[var(--text-muted)]" />
          <input
            type="number"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            min={8}
            max={72}
            className="
              w-16 px-2 py-2 rounded-xl
              backdrop-blur-md backdrop-saturate-150
              bg-[var(--glass-bg-light)]
              border border-[var(--glass-border)]
              text-white text-center
              outline-none
            "
          />
        </div>

        <div className="h-6 w-px bg-[var(--glass-border)]" />

        {/* Text Style */}
        <button
          onClick={() => setIsBold(!isBold)}
          className={`
            p-2 rounded-xl transition-all duration-200
            ${isBold ? 'bg-[var(--glass-bg-medium)] text-white' : 'bg-[var(--glass-bg-light)] text-[var(--text-muted)] hover:bg-[var(--glass-bg-medium)]'}
          `}
        >
          <Bold size={20} />
        </button>
        <button
          onClick={() => setIsItalic(!isItalic)}
          className={`
            p-2 rounded-xl transition-all duration-200
            ${isItalic ? 'bg-[var(--glass-bg-medium)] text-white' : 'bg-[var(--glass-bg-light)] text-[var(--text-muted)] hover:bg-[var(--glass-bg-medium)]'}
          `}
        >
          <Italic size={20} />
        </button>
        <button
          onClick={() => setIsUnderline(!isUnderline)}
          className={`
            p-2 rounded-xl transition-all duration-200
            ${isUnderline ? 'bg-[var(--glass-bg-medium)] text-white' : 'bg-[var(--glass-bg-light)] text-[var(--text-muted)] hover:bg-[var(--glass-bg-medium)]'}
          `}
        >
          <Underline size={20} />
        </button>

        <div className="h-6 w-px bg-[var(--glass-border)]" />

        {/* Alignment */}
        <button
          onClick={() => setAlignment('left')}
          className={`
            p-2 rounded-xl transition-all duration-200
            ${alignment === 'left' ? 'bg-[var(--glass-bg-medium)] text-white' : 'bg-[var(--glass-bg-light)] text-[var(--text-muted)] hover:bg-[var(--glass-bg-medium)]'}
          `}
        >
          <AlignLeft size={20} />
        </button>
        <button
          onClick={() => setAlignment('center')}
          className={`
            p-2 rounded-xl transition-all duration-200
            ${alignment === 'center' ? 'bg-[var(--glass-bg-medium)] text-white' : 'bg-[var(--glass-bg-light)] text-[var(--text-muted)] hover:bg-[var(--glass-bg-medium)]'}
          `}
        >
          <AlignCenter size={20} />
        </button>
        <button
          onClick={() => setAlignment('right')}
          className={`
            p-2 rounded-xl transition-all duration-200
            ${alignment === 'right' ? 'bg-[var(--glass-bg-medium)] text-white' : 'bg-[var(--glass-bg-light)] text-[var(--text-muted)] hover:bg-[var(--glass-bg-medium)]'}
          `}
        >
          <AlignRight size={20} />
        </button>
      </div>

      {/* Editor Area */}
      <div className="
        backdrop-blur-md backdrop-saturate-150
        bg-[var(--glass-bg-light)]
        border border-[var(--glass-border)]
        rounded-2xl
        p-6
        min-h-[300px]
      ">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Start typing..."
          className="
            w-full h-full min-h-[250px]
            bg-transparent
            text-white
            placeholder:text-white/50
            outline-none
            resize-none
          "
          style={textStyle}
        />
      </div>
    </div>
  );
}
