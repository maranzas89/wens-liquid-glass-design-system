import React from 'react';
import { GlassCard } from '../components/glass-card';
import { GlassInput } from '../components/glass-input';
import { GlassSelect } from '../components/glass-select';
import { GlassButton } from '../components/glass-button';
import { GlassDatePicker } from '../components/glass-date-picker';
import { User, Mail, Lock, Phone, Calendar, Globe, Search } from 'lucide-react';
import { CodeBlock } from '../components/code-block';
import { sectionCodeSamples } from '../utils/section-code-samples';

interface FormsSectionProps {
  addToast: (variant: any, message: string, options?: any) => void;
}

export function FormsSection({ addToast }: FormsSectionProps) {
  const [message, setMessage] = React.useState('');

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)] bg-clip-text text-transparent">
          Forms & Inputs
        </h2>
        <p className="text-white/70 text-lg">
          Beautiful form components with glass effects
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard padding="lg">
          <h3 className="text-white text-2xl mb-6">Text Inputs</h3>
          <div className="space-y-4">
            <GlassInput
              placeholder="Search..."
              icon={<Search size={20} />}
            />
            <GlassInput
              type="email"
              placeholder="Enter email"
              icon={<Mail size={20} />}
            />
            {/* Inline Textarea */}
            <textarea
              placeholder="Enter your message..."
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="
                w-full px-4 py-3
                bg-[var(--glass-bg-light)]
                border border-[var(--glass-border)]
                rounded-xl
                text-white placeholder-white/40
                focus:outline-none focus:border-blue-400/50
                resize-none
                transition-colors
              "
            />
          </div>
        </GlassCard>

        <GlassCard padding="lg">
          <h3 className="text-white text-2xl mb-6">Other Inputs</h3>
          <div className="space-y-4">
            <GlassSelect
              options={[
                { label: 'Option 1', value: 'option1' },
                { label: 'Option 2', value: 'option2' },
                { label: 'Option 3', value: 'option3' }
              ]}
              placeholder="Select an option"
            />
            <GlassDatePicker
              placeholder="Select a date"
            />
            <GlassInput
              type="tel"
              placeholder="Phone number"
              icon={<Phone size={20} />}
            />
          </div>
        </GlassCard>
      </div>

      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Contact Form Example</h3>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); addToast('success', 'Form submitted!'); }}>
          <GlassInput
            placeholder="Full Name"
            icon={<User size={20} />}
          />
          <GlassInput
            type="email"
            placeholder="Email Address"
            icon={<Mail size={20} />}
          />
          <GlassInput
            placeholder="Website"
            icon={<Globe size={20} />}
          />
          <textarea
            placeholder="Your message..."
            rows={6}
            className="
              w-full px-4 py-3
              bg-[var(--glass-bg-light)]
              border border-[var(--glass-border)]
              rounded-xl
              text-white placeholder-white/40
              focus:outline-none focus:border-blue-400/50
              resize-none
              transition-colors
            "
          />
          <div className="flex justify-end gap-4">
            <GlassButton variant="ghost" type="button">
              Cancel
            </GlassButton>
            <GlassButton variant="primary" type="submit">
              Submit
            </GlassButton>
          </div>
        </form>
      </GlassCard>

      <CodeBlock code={sectionCodeSamples.formsSection} />
    </div>
  );
}