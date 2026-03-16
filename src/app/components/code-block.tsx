import React from 'react';
import { Lock } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'tsx' }: CodeBlockProps) {
  return (
    <div className="mt-12">
      <div className="
        backdrop-blur-xl bg-gradient-to-br from-[var(--glass-bg-light)] to-[var(--glass-bg-subtle)]
        border border-[var(--glass-border)]
        rounded-3xl
        overflow-hidden
        shadow-2xl
      ">
        <div className="p-4 border-b border-[var(--glass-dark-border)] bg-[var(--glass-bg-subtle)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--status-error)]/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
              <div className="w-3 h-3 rounded-full bg-[var(--status-success)]/60" />
            </div>
            <span className="text-[var(--text-tertiary)] text-sm font-medium">{language}</span>
          </div>
          <div className="
            px-3 py-1.5 rounded-lg
            bg-[var(--glass-bg-light)]
            border border-[var(--glass-border)]
            text-white/50 text-sm
            flex items-center gap-2
            cursor-default select-none
          ">
            <Lock size={16} />
            <span>Copy Code</span>
          </div>
        </div>
        <div className="relative">
          <pre
            className="
              w-full h-96 p-6
              bg-black/20
              text-white/90 text-sm font-mono
              overflow-auto
              leading-relaxed
              select-none
              whitespace-pre-wrap break-words
            "
            onCopy={(e) => e.preventDefault()}
          >{code}</pre>
        </div>
      </div>
    </div>
  );
}