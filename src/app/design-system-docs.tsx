/**
 * LIQUID GLASS DESIGN SYSTEM DOCUMENTATION
 * 
 * A complete glassmorphism UI component library for React
 * Fully responsive, works on web and mobile
 * 
 * Author: Liquid Glass Design System
 * Last Updated: 2026
 */

import React from 'react';

// ===== COMPONENT IMPORTS =====
// You can copy any component from below and use it in your project

/**
 * GLASS BUTTON COMPONENT
 * Usage:
 * <GlassButton variant="primary" size="md" onClick={() => {}}>
 *   Click Me
 * </GlassButton>
 */
export function GlassButton({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick,
  className = '',
  disabled = false 
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}) {
  const baseStyles = `
    relative overflow-hidden rounded-2xl
    backdrop-blur-md backdrop-saturate-150
    border border-white/20
    transition-all duration-300
    hover:scale-105 hover:shadow-lg
    active:scale-95
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
  `;
  
  const variantStyles = {
    primary: `bg-white/10 hover:bg-white/20 text-white shadow-[0_8px_32px_0_rgba(103,126,234,0.37)]
      before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-400/20 before:to-blue-500/20`,
    secondary: `bg-white/10 hover:bg-white/20 text-white shadow-[0_8px_32px_0_rgba(240,147,251,0.37)]
      before:absolute before:inset-0 before:bg-gradient-to-br before:from-pink-400/20 before:to-rose-500/20`,
    accent: `bg-white/10 hover:bg-white/20 text-white shadow-[0_8px_32px_0_rgba(79,172,254,0.37)]
      before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-400/20 before:to-blue-400/20`,
    success: `bg-white/10 hover:bg-white/20 text-white shadow-[0_8px_32px_0_rgba(67,233,123,0.37)]
      before:absolute before:inset-0 before:bg-gradient-to-br before:from-green-400/20 before:to-teal-400/20`,
    ghost: `bg-white/5 hover:bg-white/10 text-white/90 shadow-[0_4px_16px_0_rgba(0,0,0,0.1)]`
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}

/**
 * GLASS CARD COMPONENT
 * Usage:
 * <GlassCard variant="gradient" padding="lg">
 *   Card content here
 * </GlassCard>
 */
export function GlassCard({ 
  children, 
  className = '', 
  variant = 'default',
  padding = 'md' 
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'hover';
  padding?: 'sm' | 'md' | 'lg';
}) {
  const baseStyles = `
    relative overflow-hidden rounded-3xl
    backdrop-blur-lg backdrop-saturate-150
    bg-white/10
    border border-white/20
    shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]
    transition-all duration-300
  `;
  
  const variantStyles = {
    default: '',
    gradient: `before:absolute before:inset-0 before:bg-gradient-to-br 
      before:from-white/20 before:via-transparent before:to-transparent before:pointer-events-none`,
    hover: `hover:scale-[1.02] hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.15)] hover:bg-white/15 cursor-pointer`
  };
  
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}>
      {children}
    </div>
  );
}

/**
 * COMPLETE COMPONENT LIST:
 * 
 * FORM COMPONENTS:
 * - GlassButton: Stylish buttons with multiple variants
 * - GlassInput: Text input with icon support
 * - GlassTextarea: Multi-line text input
 * - GlassSelect: Dropdown select with custom styling
 * - GlassCheckbox: Checkbox with glass effect
 * - GlassRadioGroup: Radio button group
 * - GlassToggle: Toggle switch
 * - GlassSlider: Range slider
 * - GlassColorPicker: Color picker with presets
 * - GlassTagInput: Tag input with keyboard support
 * - GlassFileUpload: Drag & drop file upload
 * - GlassSearch: Search input with suggestions
 * 
 * LAYOUT COMPONENTS:
 * - GlassCard: Container with glass effect
 * - GlassNavbar: Responsive navigation bar
 * - GlassModal: Modal dialog
 * - GlassDrawer: Slide-out drawer
 * - GlassDivider: Horizontal/vertical divider
 * 
 * DATA DISPLAY:
 * - GlassTable: Sortable data table
 * - GlassList: List with optional icons
 * - GlassTimeline: Timeline component
 * - GlassBadge: Status badge
 * - GlassChip: Removable chip/tag
 * - GlassAvatar: User avatar
 * - GlassAvatarGroup: Multiple avatars
 * - GlassStatCard: Statistics card
 * - GlassCodeBlock: Code display with copy
 * - GlassKbd: Keyboard shortcut display
 * 
 * FEEDBACK:
 * - GlassAlert: Alert messages
 * - GlassToast: Toast notifications
 * - GlassSpinner: Loading spinner
 * - GlassLoadingOverlay: Full page loader
 * - GlassSkeleton: Skeleton loader
 * - GlassProgress: Progress bar
 * - GlassEmptyState: Empty state display
 * 
 * NAVIGATION:
 * - GlassTabs: Tab navigation
 * - GlassBreadcrumb: Breadcrumb navigation
 * - GlassPagination: Page navigation
 * - GlassStepper: Step indicator
 * - GlassMenu: Dropdown menu
 * 
 * INTERACTIVE:
 * - GlassAccordion: Collapsible content
 * - GlassTooltip: Hover tooltip
 * - GlassRating: Star rating
 * - GlassCalendar: Date picker calendar
 * 
 * INSTALLATION:
 * 
 * 1. Copy the component code you need
 * 2. Install dependencies: lucide-react
 * 3. Add Tailwind CSS v4 to your project
 * 4. Copy the theme.css variables
 * 
 * THEME VARIABLES (add to your CSS):
 * 
 * :root {
 *   --glass-bg-light: rgba(255, 255, 255, 0.1);
 *   --glass-bg-medium: rgba(255, 255, 255, 0.2);
 *   --glass-bg-strong: rgba(255, 255, 255, 0.3);
 *   --glass-border: rgba(255, 255, 255, 0.18);
 *   --glass-shadow: rgba(0, 0, 0, 0.05);
 *   --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
 *   --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
 *   --gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
 *   --gradient-success: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
 * }
 * 
 * USAGE EXAMPLES:
 */

export const ComponentExamples = () => {
  return (
    <div className="space-y-8 p-8">
      {/* Button Examples */}
      <section>
        <h2 className="text-white text-2xl mb-4">Buttons</h2>
        <div className="flex gap-4 flex-wrap">
          <GlassButton variant="primary">Primary</GlassButton>
          <GlassButton variant="secondary">Secondary</GlassButton>
          <GlassButton variant="accent">Accent</GlassButton>
          <GlassButton variant="success">Success</GlassButton>
          <GlassButton variant="ghost">Ghost</GlassButton>
        </div>
      </section>

      {/* Card Example */}
      <section>
        <h2 className="text-white text-2xl mb-4">Cards</h2>
        <GlassCard variant="gradient">
          <h3 className="text-white mb-2">Card Title</h3>
          <p className="text-white/70">This is a beautiful glass card with gradient overlay.</p>
        </GlassCard>
      </section>

      {/* Code Example */}
      <section>
        <h2 className="text-white text-2xl mb-4">Usage Example</h2>
        <GlassCard>
          <pre className="text-white/90 overflow-x-auto">
            <code>{`import { GlassButton, GlassCard } from './components';

function App() {
  return (
    <GlassCard variant="gradient" padding="lg">
      <h1>Hello World</h1>
      <GlassButton variant="primary" onClick={() => alert('Clicked!')}>
        Click Me
      </GlassButton>
    </GlassCard>
  );
}`}</code>
          </pre>
        </GlassCard>
      </section>
    </div>
  );
};

/**
 * DESIGN PRINCIPLES:
 * 
 * 1. Glassmorphism: Semi-transparent backgrounds with blur effects
 * 2. Consistency: All components follow the same design language
 * 3. Accessibility: Proper contrast ratios and keyboard navigation
 * 4. Responsiveness: Works on all screen sizes
 * 5. Performance: Optimized animations and transitions
 * 6. Customization: Easy to customize colors and styles
 * 
 * TIPS:
 * 
 * - Use on gradient backgrounds for best effect
 * - Combine multiple components for complex UIs
 * - Adjust opacity values for different glass effects
 * - Use Motion library for advanced animations
 * - Test on both light and dark backgrounds
 */

export default ComponentExamples;
