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
        backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
        border border-white/20
        rounded-3xl
        overflow-hidden
        shadow-2xl
      ">
        <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
              <div className="w-3 h-3 rounded-full bg-green-400/60" />
            </div>
            <span className="text-white/70 text-sm font-medium">{language}</span>
          </div>
          <div className="
            px-3 py-1.5 rounded-lg
            bg-white/10
            border border-white/20
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