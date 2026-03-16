import React from 'react';
import { GlassCard } from '../components/glass-card';
import { GlassFontShowcase } from '../components/glass-font-showcase';
import { GlassFontPicker } from '../components/glass-font-picker';
import { GlassFontSizePicker } from '../components/glass-font-size-picker';
import { GlassTextEditor } from '../components/glass-text-editor';
import { CodeBlock } from '../components/code-block';
import { sectionCodeSamples } from '../utils/section-code-samples';

export function FontsSection() {
  const [selectedFont, setSelectedFont] = React.useState('var(--font-sans)');
  const [fontSize, setFontSize] = React.useState(24);
  const [editorText, setEditorText] = React.useState('Welcome to Liquid Glass Design System!');

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl text-white font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
          Typography & Fonts
        </h2>
        <p className="text-white/70 text-lg">
          8 beautiful fonts with complete typography system
        </p>
      </div>

      {/* Font Picker & Size Picker */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard padding="lg">
          <h3 className="text-white text-2xl mb-6">Font Family Picker</h3>
          <GlassFontPicker
            value={selectedFont}
            onChange={setSelectedFont}
          />
        </GlassCard>

        <GlassCard padding="lg">
          <h3 className="text-white text-2xl mb-6">Font Size Picker</h3>
          <GlassFontSizePicker
            value={fontSize}
            onChange={setFontSize}
            min={12}
            max={96}
            step={2}
          />
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-white/60 text-sm mb-3">Preview:</p>
            <p 
              className="text-white leading-relaxed"
              style={{ 
                fontSize: `${fontSize}px`,
                fontFamily: selectedFont 
              }}
            >
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
        </GlassCard>
      </div>

      {/* Text Editor */}
      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Text Editor</h3>
        <GlassTextEditor
          value={editorText}
          onChange={setEditorText}
        />
      </GlassCard>

      {/* Font Showcase */}
      <div>
        <h3 className="text-white text-3xl mb-6 text-center">Complete Font Collection</h3>
        <GlassFontShowcase />
      </div>

      {/* Code Samples */}
      <div className="space-y-4">
        <h3 className="text-white text-3xl mb-6 text-center">Code Samples</h3>
        <CodeBlock
          code={sectionCodeSamples.fontsSection}
          language="tsx"
        />
      </div>
    </div>
  );
}