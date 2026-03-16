import React from 'react';
import { GlassCard } from '../components/glass-card';
import { GlassAlert } from '../components/glass-alert';
import { GlassButton } from '../components/glass-button';
import { CodeBlock } from '../components/code-block';
import { Info, CheckCircle, AlertTriangle, XCircle, X } from 'lucide-react';
import { sectionCodeSamples } from '../utils/section-code-samples';

interface MessageSectionProps {
  addToast: (variant: any, message: string, options?: any) => void;
}

export function MessageSection({ addToast }: MessageSectionProps) {
  const [showAlert1, setShowAlert1] = React.useState(true);
  const [showAlert2, setShowAlert2] = React.useState(true);

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--status-warning)] to-[var(--status-error)] bg-clip-text text-transparent">
          Messages & Alerts
        </h2>
        <p className="text-white/70 text-lg">
          Alert messages and toast notifications
        </p>
      </div>

      <div>
        <h3 className="text-white text-2xl mb-6">Alert Variants</h3>
        <div className="space-y-4">
          <GlassAlert
            variant="info"
            title="Information"
            message="This is an informational alert with glass effect."
          />
          <GlassAlert
            variant="success"
            title="Success"
            message="Your changes have been saved successfully!"
          />
          <GlassAlert
            variant="warning"
            title="Warning"
            message="Please review your settings before continuing."
          />
          <GlassAlert
            variant="error"
            title="Error"
            message="An error occurred while processing your request."
          />
        </div>
      </div>

      <div>
        <h3 className="text-white text-2xl mb-6">Inline Alerts</h3>
        <div className="space-y-4">
          {/* Inline Info Alert */}
          <div className="
            backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10
            border border-blue-400/30
            rounded-xl p-4
            flex items-start gap-3
          ">
            <Info className="text-blue-300 flex-shrink-0 mt-0.5" size={20} />
            <div className="flex-1">
              <p className="text-white">Simple info message without title.</p>
            </div>
          </div>

          {/* Inline Success Alert */}
          <div className="
            backdrop-blur-xl bg-gradient-to-br from-green-500/20 to-green-600/10
            border border-green-400/30
            rounded-xl p-4
            flex items-start gap-3
          ">
            <CheckCircle className="text-green-300 flex-shrink-0 mt-0.5" size={20} />
            <div className="flex-1">
              <p className="text-white">Operation completed successfully!</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-white text-2xl mb-6">Dismissible Alerts</h3>
        <div className="space-y-4">
          {showAlert1 && (
            <div className="
              backdrop-blur-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/10
              border border-yellow-400/30
              rounded-xl p-4
              flex items-start gap-3
            ">
              <AlertTriangle className="text-yellow-300 flex-shrink-0 mt-0.5" size={20} />
              <div className="flex-1">
                <p className="text-white">This alert can be dismissed.</p>
              </div>
              <button
                onClick={() => setShowAlert1(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          )}

          {showAlert2 && (
            <div className="
              backdrop-blur-xl bg-gradient-to-br from-red-500/20 to-red-600/10
              border border-red-400/30
              rounded-xl p-4
              flex items-start gap-3
            ">
              <XCircle className="text-red-300 flex-shrink-0 mt-0.5" size={20} />
              <div className="flex-1">
                <h4 className="text-white font-bold mb-1">Closable Error</h4>
                <p className="text-white/80">Click the X to close this alert.</p>
              </div>
              <button
                onClick={() => setShowAlert2(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          )}
        </div>
      </div>

      <GlassCard padding="lg">
        <h3 className="text-white text-2xl mb-6">Toast Notifications</h3>
        <p className="text-white/70 mb-6">Click the buttons to trigger different toast notifications</p>
        <div className="flex flex-wrap gap-3">
          <GlassButton 
            variant="success"
            onClick={() => addToast('success', 'Operation completed successfully!', {
              title: 'Success',
              duration: 5000
            })}
          >
            Success Toast
          </GlassButton>
          <GlassButton 
            variant="secondary"
            onClick={() => addToast('error', 'Something went wrong. Please try again.', {
              title: 'Error',
              duration: 5000
            })}
          >
            Error Toast
          </GlassButton>
          <GlassButton 
            variant="accent"
            onClick={() => addToast('warning', 'Please review your changes before proceeding.', {
              title: 'Warning',
              duration: 5000
            })}
          >
            Warning Toast
          </GlassButton>
          <GlassButton 
            variant="primary"
            onClick={() => addToast('info', 'New updates are available for your account.', {
              title: 'Information',
              duration: 5000
            })}
          >
            Info Toast
          </GlassButton>
        </div>
      </GlassCard>

      <GlassCard padding="lg" variant="gradient">
        <h3 className="text-white text-2xl mb-4">Message Best Practices</h3>
        <ul className="space-y-3 text-white/80">
          <li className="flex items-start gap-2">
            <span className="text-green-300 mt-1">✓</span>
            <span>Use <strong>success</strong> alerts for positive confirmations</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-300 mt-1">ℹ</span>
            <span>Use <strong>info</strong> alerts for neutral information</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-300 mt-1">⚠</span>
            <span>Use <strong>warning</strong> alerts for important notices</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-300 mt-1">✕</span>
            <span>Use <strong>error</strong> alerts for critical issues</span>
          </li>
        </ul>
      </GlassCard>

      <CodeBlock code={sectionCodeSamples.messageSection} />
    </div>
  );
}