import React from 'react';
import { Copy, Check } from 'lucide-react';

interface GlassCodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
}

export function GlassCodeBlock({ 
  code, 
  language = 'tsx', 
  className = '',
  showLineNumbers = true 
}: GlassCodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className={`
      backdrop-blur-md backdrop-saturate-150
      bg-[var(--glass-bg-light)]
      border border-[var(--glass-border)]
      rounded-2xl
      overflow-hidden
      ${className}
    `}>
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--glass-border)]">
        <span className="text-white/70 text-sm">{language}</span>
        <button
          onClick={copyToClipboard}
          className="
            flex items-center gap-2
            px-3 py-1.5 rounded-lg
            backdrop-blur-md backdrop-saturate-150
            bg-[var(--glass-bg-light)]
            border border-[var(--glass-border)]
            text-white/80
            hover:text-white hover:bg-[var(--glass-bg-medium)]
            transition-all duration-200
          "
        >
          {copied ? (
            <>
              <Check size={16} />
              <span className="text-sm">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span className="text-sm">Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="overflow-x-auto">
        <pre className="p-4">
          <code className="text-sm text-white/90 font-mono">
            {showLineNumbers ? (
              <table>
                <tbody>
                  {lines.map((line, index) => (
                    <tr key={index}>
                      <td className="text-white/40 pr-4 text-right select-none">
                        {index + 1}
                      </td>
                      <td>{line}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              code
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}
