import React from 'react';
import { GlassCard } from '../components/glass-card';
import { GlassButton } from '../components/glass-button';
import { GlassSpinner } from '../components/glass-spinner';
import { GlassSkeleton } from '../components/glass-skeleton';
import { GlassProgress } from '../components/glass-progress';
import { CodeBlock } from '../components/code-block';
import { sectionCodeSamples } from '../utils/section-code-samples';

export function LoadingSection() {
  const [showOverlay, setShowOverlay] = React.useState(false);

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl text-white font-bold mb-4 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
          Loading States
        </h2>
        <p className="text-white/70 text-lg">
          Spinners, skeleton loaders and loading overlays
        </p>
      </div>

      {/* Spinners */}
      <div>
        <h3 className="text-white text-2xl mb-6">Spinner Sizes</h3>
        <GlassCard padding="lg">
          <div className="flex items-center justify-around flex-wrap gap-8">
            <div className="text-center">
              <GlassSpinner size="sm" />
              <p className="text-white/60 text-sm mt-2">Small</p>
            </div>
            <div className="text-center">
              <GlassSpinner size="md" />
              <p className="text-white/60 text-sm mt-2">Medium</p>
            </div>
            <div className="text-center">
              <GlassSpinner size="lg" />
              <p className="text-white/60 text-sm mt-2">Large</p>
            </div>
            <div className="text-center">
              <GlassSpinner size="xl" />
              <p className="text-white/60 text-sm mt-2">Extra Large</p>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Spinner Variants */}
      <div>
        <h3 className="text-white text-2xl mb-6">Spinner Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard padding="lg">
            <div className="flex flex-col items-center gap-4">
              <GlassSpinner size="lg" variant="primary" />
              <p className="text-white">Primary Spinner</p>
            </div>
          </GlassCard>

          <GlassCard padding="lg">
            <div className="flex flex-col items-center gap-4">
              <GlassSpinner size="lg" variant="success" />
              <p className="text-white">Success Spinner</p>
            </div>
          </GlassCard>

          <GlassCard padding="lg">
            <div className="flex flex-col items-center gap-4">
              <GlassSpinner size="lg" variant="warning" />
              <p className="text-white">Warning Spinner</p>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Loading Overlay */}
      <div>
        <h3 className="text-white text-2xl mb-6">Loading Overlay</h3>
        <GlassCard padding="lg">
          <p className="text-white/80 mb-4">
            Click the button to show a full-page loading overlay. Click anywhere on the overlay to close it.
          </p>
          <GlassButton 
            variant="primary" 
            onClick={() => {
              setShowOverlay(true);
              setTimeout(() => setShowOverlay(false), 3000);
            }}
          >
            Show Loading Overlay
          </GlassButton>
        </GlassCard>
      </div>

      {/* Skeleton Loading */}
      <div>
        <h3 className="text-white text-2xl mb-6">Skeleton Loading</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GlassCard padding="lg">
            <h4 className="text-white text-xl mb-4">Basic Skeletons</h4>
            <div className="space-y-3">
              <GlassSkeleton width="100%" height="20px" />
              <GlassSkeleton width="80%" height="20px" />
              <GlassSkeleton width="60%" height="20px" />
              <GlassSkeleton width="90%" height="20px" />
            </div>
          </GlassCard>

          <GlassCard padding="lg">
            <h4 className="text-white text-xl mb-4">Different Sizes</h4>
            <div className="space-y-3">
              <GlassSkeleton width="100%" height="40px" />
              <GlassSkeleton width="100%" height="30px" />
              <GlassSkeleton width="100%" height="20px" />
              <GlassSkeleton width="100%" height="15px" />
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Skeleton Card */}
      <div>
        <h3 className="text-white text-2xl mb-6">Skeleton Card</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassSkeletonCard />
          <GlassSkeletonCard />
          <GlassSkeletonCard />
        </div>
      </div>

      {/* Combined Example */}
      <div>
        <h3 className="text-white text-2xl mb-6">Content Loading Example</h3>
        <GlassCard padding="lg">
          <div className="flex items-center gap-4 mb-6">
            <GlassSkeleton width="60px" height="60px" className="rounded-full" />
            <div className="flex-1 space-y-2">
              <GlassSkeleton width="40%" height="20px" />
              <GlassSkeleton width="60%" height="16px" />
            </div>
          </div>
          <div className="space-y-3">
            <GlassSkeleton width="100%" height="16px" />
            <GlassSkeleton width="95%" height="16px" />
            <GlassSkeleton width="88%" height="16px" />
          </div>
        </GlassCard>
      </div>

      {showOverlay && (
        <GlassLoadingOverlay 
          message="Loading..." 
          onClose={() => setShowOverlay(false)}
        />
      )}

      {/* Code Samples */}
      <div className="space-y-4">
        <h3 className="text-white text-3xl mb-6 text-center">Code Samples</h3>
        <CodeBlock
          code={sectionCodeSamples.loadingSection}
          language="tsx"
        />
      </div>
    </div>
  );
}

// Skeleton Card Component
function GlassSkeletonCard() {
  return (
    <GlassCard padding="lg">
      <div className="flex items-center gap-4 mb-4">
        <GlassSkeleton width="48px" height="48px" className="rounded-full" />
        <div className="flex-1">
          <GlassSkeleton width="60%" height="16px" className="mb-2" />
          <GlassSkeleton width="40%" height="12px" />
        </div>
      </div>
      <div className="space-y-2">
        <GlassSkeleton width="100%" height="12px" />
        <GlassSkeleton width="90%" height="12px" />
        <GlassSkeleton width="95%" height="12px" />
      </div>
    </GlassCard>
  );
}

// Loading Overlay Component
function GlassLoadingOverlay({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex flex-col items-center gap-4">
        <GlassSpinner size="xl" />
        <p className="text-white text-xl font-medium">{message}</p>
      </div>
    </div>
  );
}