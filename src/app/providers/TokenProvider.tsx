import { useEffect, type ReactNode } from 'react';
import {
  glassColors,
  glassDarkColors,
  overlayColors,
  statusColors,
  brandColors,
  textColors,
} from '../../../packages/design-system/src/tokens/colors';
import { gradients } from '../../../packages/design-system/src/tokens/gradients';
import { shadows } from '../../../packages/design-system/src/tokens/shadows';
import { radius } from '../../../packages/design-system/src/tokens/radius';
import { backdrop } from '../../../packages/design-system/src/tokens/backdrop';
import { spacing } from '../../../packages/design-system/src/tokens/spacing';
import { typography } from '../../../packages/design-system/src/tokens/typography';
import { animation } from '../../../packages/design-system/src/tokens/animation';

const tokenMap: Record<string, string> = {
  // ── Brand ──
  '--brand-primary': brandColors.primary,
  '--brand-secondary': brandColors.secondary,
  '--brand-accent': brandColors.accent,

  // ── Glass surfaces (light) ──
  '--glass-bg-subtle': 'rgba(255, 255, 255, 0.05)',
  '--glass-bg-light': glassColors.bgLight,
  '--glass-bg-medium': glassColors.bgMedium,
  '--glass-bg-strong': glassColors.bgStrong,
  '--glass-border': glassColors.border,
  '--glass-border-strong': 'rgba(255, 255, 255, 0.3)',
  '--glass-shadow': glassColors.shadow,

  // ── Glass surfaces (dark) ──
  '--glass-dark-bg-light': glassDarkColors.bgLight,
  '--glass-dark-bg-medium': glassDarkColors.bgMedium,
  '--glass-dark-bg-strong': glassDarkColors.bgStrong,
  '--glass-dark-border': glassDarkColors.border,
  '--glass-dark-shadow': glassDarkColors.shadow,

  // ── Overlay ──
  '--overlay-backdrop': overlayColors.backdrop,
  '--overlay-popover': overlayColors.popover,

  // ── Status colors ──
  '--status-success': statusColors.success.base,
  '--status-success-light': statusColors.success.light,
  '--status-success-border': statusColors.success.border,
  '--status-warning': statusColors.warning.base,
  '--status-warning-light': statusColors.warning.light,
  '--status-warning-border': statusColors.warning.border,
  '--status-error': statusColors.error.base,
  '--status-error-light': statusColors.error.light,
  '--status-error-border': statusColors.error.border,
  '--status-info': statusColors.info.base,
  '--status-info-light': statusColors.info.light,
  '--status-info-border': statusColors.info.border,

  // ── Text ──
  '--text-primary': textColors.primary,
  '--text-secondary': textColors.secondary,
  '--text-tertiary': textColors.tertiary,
  '--text-muted': textColors.muted,
  '--text-placeholder': textColors.placeholder,
  '--text-disabled': textColors.disabled,

  // ── Gradients ──
  '--gradient-primary': gradients.primary,
  '--gradient-secondary': gradients.secondary,
  '--gradient-accent': gradients.accent,
  '--gradient-success': gradients.success,
  '--gradient-warning': gradients.warning,

  // ── Shadows ──
  '--shadow-glass': shadows.glass,
  '--shadow-elevated': shadows.elevated,
  '--shadow-overlay': shadows.overlay,
  '--shadow-glow': shadows.glow,
  '--shadow-btn-primary': shadows.button.primary,
  '--shadow-btn-secondary': shadows.button.secondary,
  '--shadow-btn-accent': shadows.button.accent,
  '--shadow-btn-success': shadows.button.success,
  '--shadow-btn-danger': shadows.button.danger,

  // ── Radius ──
  '--radius-sm': radius.sm,
  '--radius-md': radius.md,
  '--radius-lg': radius.lg,
  '--radius-xl': radius.xl,
  '--radius-full': radius.full,

  // ── Backdrop ──
  '--blur-sm': backdrop.blur.sm,
  '--blur-md': backdrop.blur.md,
  '--blur-lg': backdrop.blur.lg,
  '--blur-xl': backdrop.blur.xl,
  '--backdrop-saturate': backdrop.saturate,

  // ── Spacing ──
  '--space-xs': spacing.padding.xs,
  '--space-sm': spacing.padding.sm,
  '--space-md': spacing.padding.md,
  '--space-lg': spacing.padding.lg,
  '--space-xl': spacing.padding.xl,
  '--space-2xl': spacing.padding['2xl'],
  '--gap-xs': spacing.gap.xs,
  '--gap-sm': spacing.gap.sm,
  '--gap-md': spacing.gap.md,
  '--gap-lg': spacing.gap.lg,
  '--gap-xl': spacing.gap.xl,

  // ── Typography ──
  '--font-sans': typography.fontFamily.sans,
  '--font-display': typography.fontFamily.display,
  '--font-mono': typography.fontFamily.mono,
  '--font-geometric': typography.fontFamily.geometric,
  '--font-serif': typography.fontFamily.serif,
  '--font-modern': typography.fontFamily.modern,
  '--font-elegant': typography.fontFamily.elegant,
  '--font-rounded': typography.fontFamily.rounded,
  '--text-xs': typography.fontSize.xs,
  '--text-sm': typography.fontSize.sm,
  '--text-base': typography.fontSize.base,
  '--text-lg': typography.fontSize.lg,
  '--text-xl': typography.fontSize.xl,
  '--text-2xl': typography.fontSize['2xl'],
  '--text-3xl': typography.fontSize['3xl'],
  '--text-4xl': typography.fontSize['4xl'],
  '--text-5xl': typography.fontSize['5xl'],
  '--text-6xl': typography.fontSize['6xl'],
  '--text-7xl': typography.fontSize['7xl'],
  '--text-8xl': typography.fontSize['8xl'],
  '--text-9xl': typography.fontSize['9xl'],
  '--font-light': String(typography.fontWeight.light),
  '--font-normal': String(typography.fontWeight.normal),
  '--font-medium': String(typography.fontWeight.medium),
  '--font-semibold': String(typography.fontWeight.semibold),
  '--font-bold': String(typography.fontWeight.bold),
  '--font-extrabold': String(typography.fontWeight.extrabold),
  '--font-black': String(typography.fontWeight.black),
  '--leading-none': String(typography.lineHeight.none),
  '--leading-tight': String(typography.lineHeight.tight),
  '--leading-snug': String(typography.lineHeight.snug),
  '--leading-normal': String(typography.lineHeight.normal),
  '--leading-relaxed': String(typography.lineHeight.relaxed),
  '--leading-loose': String(typography.lineHeight.loose),
  '--tracking-tighter': typography.letterSpacing.tighter,
  '--tracking-tight': typography.letterSpacing.tight,
  '--tracking-normal': typography.letterSpacing.normal,
  '--tracking-wide': typography.letterSpacing.wide,
  '--tracking-wider': typography.letterSpacing.wider,
  '--tracking-widest': typography.letterSpacing.widest,

  // ── Animation ──
  '--duration-fast': animation.duration.fast,
  '--duration-normal': animation.duration.normal,
  '--duration-smooth': animation.duration.smooth,
  '--duration-slow': animation.duration.slow,
  '--ease-default': animation.easing.default,
  '--ease-out': animation.easing.out,
  '--ease-in-out': animation.easing.inOut,
};

export function TokenProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    for (const [key, value] of Object.entries(tokenMap)) {
      root.style.setProperty(key, value);
    }
  });

  return <>{children}</>;
}
