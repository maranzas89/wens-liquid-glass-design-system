import React from 'react';
import { GlassCard } from '../components/glass-card';
import { GlassButton } from '../components/glass-button';
import { GlassModal } from '../components/glass-modal';
import { GlassInput } from '../components/glass-input';
import { Info, AlertTriangle, CheckCircle, XCircle, Heart, Star, Settings } from 'lucide-react';
import { CodeBlock } from '../components/code-block';
import { sectionCodeSamples } from '../utils/section-code-samples';

export function ModalSection() {
  const [isBasicModalOpen, setIsBasicModalOpen] = React.useState(false);
  const [isLargeModalOpen, setIsLargeModalOpen] = React.useState(false);
  const [isSmallModalOpen, setIsSmallModalOpen] = React.useState(false);

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--brand-primary)] bg-clip-text text-transparent">
          Modal & Drawer
        </h2>
        <p className="text-white/70 text-lg">
          Overlay components for dialogs and side panels
        </p>
      </div>

      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-2">Modal Sizes</h3>
        <p className="text-white/60 text-sm mb-6">🖱️ Click the buttons below to open modals in different sizes</p>
        <div className="flex flex-wrap gap-4">
          <GlassButton variant="primary" onClick={() => setIsSmallModalOpen(true)}>
            Small Modal
          </GlassButton>
          <GlassButton variant="primary" onClick={() => setIsBasicModalOpen(true)}>
            Medium Modal
          </GlassButton>
          <GlassButton variant="primary" onClick={() => setIsLargeModalOpen(true)}>
            Large Modal
          </GlassButton>
        </div>
      </GlassCard>

      {/* Small Modal */}
      <GlassModal
        isOpen={isSmallModalOpen}
        onClose={() => setIsSmallModalOpen(false)}
        title="Small Modal"
        size="sm"
      >
        <p className="text-white/90 mb-4">
          This is a small modal with limited width.
        </p>
        <GlassButton variant="primary" onClick={() => setIsSmallModalOpen(false)}>
          Close
        </GlassButton>
      </GlassModal>

      {/* Basic Modal */}
      <GlassModal
        isOpen={isBasicModalOpen}
        onClose={() => setIsBasicModalOpen(false)}
        title="Welcome to Liquid Glass"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-white/90">
            This is a medium-sized modal component with glassmorphism effects.
          </p>
          <ul className="space-y-2 text-white/70">
            <li className="flex items-center gap-2">
              <Heart size={16} className="text-pink-400" />
              <span>Elegant glassmorphism effects</span>
            </li>
            <li className="flex items-center gap-2">
              <Settings size={16} className="text-blue-400" />
              <span>Smooth animation transitions</span>
            </li>
          </ul>
          <div className="flex gap-3 pt-4">
            <GlassButton variant="primary" onClick={() => setIsBasicModalOpen(false)}>
              Confirm
            </GlassButton>
            <GlassButton variant="ghost" onClick={() => setIsBasicModalOpen(false)}>
              Cancel
            </GlassButton>
          </div>
        </div>
      </GlassModal>

      {/* Large Modal with Form */}
      <GlassModal
        isOpen={isLargeModalOpen}
        onClose={() => setIsLargeModalOpen(false)}
        title="Contact Form"
        size="lg"
      >
        <div className="space-y-4">
          <p className="text-white/70 mb-4">
            Fill out this form to get in touch with us.
          </p>
          <GlassInput placeholder="Your name" />
          <GlassInput type="email" placeholder="Your email" />
          <GlassInput placeholder="Subject" />
          <textarea
            className="
              w-full px-4 py-3 rounded-xl
              backdrop-blur-md backdrop-saturate-150
              bg-[var(--glass-bg-light)]
              border border-[var(--glass-border)]
              text-white placeholder-white/50
              focus:outline-none focus:ring-2 focus:ring-white/30
              transition-all duration-200
            "
            rows={4}
            placeholder="Your message..."
          />
          <div className="flex gap-3 pt-4">
            <GlassButton variant="primary">
              Send Message
            </GlassButton>
            <GlassButton variant="ghost" onClick={() => setIsLargeModalOpen(false)}>
              Cancel
            </GlassButton>
          </div>
        </div>
      </GlassModal>

      {/* Code Samples */}
      <CodeBlock
        title="Modal Sizes"
        code={sectionCodeSamples.modalSizes}
      />
      <CodeBlock
        title="Small Modal"
        code={sectionCodeSamples.smallModal}
      />
      <CodeBlock
        title="Basic Modal"
        code={sectionCodeSamples.basicModal}
      />
      <CodeBlock
        title="Large Modal with Form"
        code={sectionCodeSamples.largeModalWithForm}
      />
    </div>
  );
}