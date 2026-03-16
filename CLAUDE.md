# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

## Commands

```bash
npm run dev      # Start Vite dev server at localhost:5173 (preview/showcase app)
npm run build    # Vite production build
```

No test suite is configured. Verify changes by running `npm run build`.

## Repository Structure

This is a monorepo-style project with two concerns:

```
/
  src/                    # Showcase/preview app (runs on :5173)
    app/                  # App routes and pages
    styles/
      theme.css           # Preview app theme (defines unprefixed CSS vars like --glass-border)
  packages/
    design-system/        # The actual published design system package
      src/
        components/ui/    # Glass components (GlassButton, GlassCard, GlassBadge, etc.)
        tokens/           # TypeScript token exports (colors, shadows, spacing, etc.)
        styles/
          tokens.css      # CSS custom properties (--lg-* prefixed)
          theme.css       # Base theme + scrollbar styles
          fonts.css       # Font imports
        lib/
          cn.ts           # clsx + tailwind-merge utility
        index.ts          # Main package entry point
```

**Source of truth** for the design system is `packages/design-system/src/`.

The top-level `src/` is just a preview app that imports from `packages/design-system/`.

## Package Exports

The package name is `wens-liquid-glass-design-system`. It exports:

| Path | What |
|------|------|
| `.` | All components + tokens from `index.ts` |
| `./styles/tokens.css` | CSS custom properties |
| `./styles/theme.css` | Base theme (imports tokens.css) |
| `./styles/fonts.css` | Font definitions |
| `./tokens` | TypeScript token objects only |
| `./components/ui` | UI components only |

## Component Conventions

### `"use client"` Requirement

Any component that uses React hooks (`useState`, `useEffect`, `useCallback`, etc.) **must** have `"use client"` as the first line. This is required for Next.js consumers that import from this package in server components.

Currently affected:
- `GlassSidebar.tsx` — uses `useState`
- `GlassToast.tsx` — uses `useState`, `useCallback`, `useEffect`

When adding a new component with hooks, always add `"use client"` at the top.

### Component Structure

Each component follows this pattern:

```tsx
"use client";  // Only if hooks are used

import React from 'react';
import { cn } from '../../lib/cn';

// Types
export interface GlassComponentProps { ... }

// Styles (Tailwind classes referencing CSS custom properties)
const base = '...';
const variantMap = { ... };

// Component
export const GlassComponent = React.forwardRef<HTMLElement, GlassComponentProps>(
  ({ variant = 'default', className, ...rest }, ref) => (
    <element ref={ref} className={cn(base, variantMap[variant], className)} {...rest} />
  ),
);
GlassComponent.displayName = 'GlassComponent';
```

### Styling Pattern

Components use Tailwind classes with CSS custom properties for theming:

```tsx
// Component references unprefixed vars
'bg-[var(--glass-bg-light)]'
'border-[var(--glass-border)]'
'bg-[var(--status-success-light)]'
```

## Token Naming (Known Issue)

There is a **prefix mismatch** between two layers:

| Layer | Variable name | Example |
|-------|--------------|---------|
| `packages/design-system/src/styles/tokens.css` | `--lg-*` prefixed | `--lg-glass-border` |
| Components (Tailwind classes) | Unprefixed | `var(--glass-border)` |
| Preview app `src/styles/theme.css` | Unprefixed | `--glass-border` |

**Impact**: Consumers importing `tokens.css` must create aliases mapping `--lg-*` to unprefixed vars. The preview app's `theme.css` defines its own unprefixed vars directly.

**Long-term fix**: Unify `tokens.css` to use the same unprefixed names that components expect.

## Tailwind / Source Scanning

This package uses Tailwind v4 (`@tailwindcss/vite`). Consumer projects using Tailwind v4 must add a `@source` directive in their CSS pointing to this package's `src/` directory, otherwise Tailwind won't generate classes used by the components.

Example in consumer's `globals.css`:
```css
@source "../../../wens-ds-link/packages/design-system/src";
```

## Local Linkage to Linora

The Linora project (`:3001`) consumes this design system locally:

- Linora's `package.json`: `"wens-liquid-glass-design-system": "file:../wens-ds-link/packages/design-system"`
- `wens-ds-link` is a symlink: `wens-ds-link -> Wen's Project Liquid Glass Design System`
- Changes to `packages/design-system/src/` are immediately visible in Linora's dev server

Full documentation: `../linora/LOCAL_DS_LINKING.md`
