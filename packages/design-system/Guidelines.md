# Liquid Glass Design System — Guidelines

## Package overview

```
packages/design-system/
├── package.json                  # @wens-project/liquid-glass
├── Guidelines.md                 # this file
└── src/
    ├── index.ts                  # main barrel export
    ├── lib/
    │   └── cn.ts                 # class-name merge utility
    ├── tokens/
    │   ├── index.ts              # token barrel
    │   ├── colors.ts             # glass, overlay, status, brand, text
    │   ├── gradients.ts          # CSS gradient strings + TW class pairs
    │   ├── spacing.ts            # padding & gap scale
    │   ├── radius.ts             # sm → full border-radius scale
    │   ├── typography.ts         # font families, sizes, weights, line-height, letter-spacing
    │   ├── shadows.ts            # glass, elevated, overlay, glow, button
    │   ├── backdrop.ts           # blur levels & saturation
    │   ├── animation.ts          # duration & easing presets
    │   └── glass-tw.ts           # reusable Tailwind class fragments
    ├── components/
    │   └── ui/
    │       ├── index.ts          # component barrel
    │       ├── GlassButton.tsx   # button — 6 variants, 3 sizes
    │       ├── GlassInput.tsx    # input — icon slot, 3 sizes
    │       ├── GlassTextarea.tsx # textarea
    │       ├── GlassCard.tsx     # card — default / gradient / hover
    │       ├── GlassBadge.tsx    # badge — 5 variants, 3 sizes
    │       ├── GlassSidebar.tsx  # sidebar — collapsible, sub-menus
    │       └── GlassToast.tsx    # toast + container + useToast hook
    └── styles/
        ├── tokens.css            # CSS custom properties (--lg-*)
        ├── theme.css             # glass scrollbar, cursor rules
        └── fonts.css             # Google Font imports + font variables
```

---

## How to install in an app (e.g. Linora)

### 1. Workspace link

```yaml
# ~/Desktop/projects/linora/pnpm-workspace.yaml
packages:
  - 'packages/*'
  - 'apps/*'
```

```jsonc
// apps/linora/package.json
{
  "dependencies": {
    "@wens-project/liquid-glass": "workspace:*"
  }
}
```

### 2. Import styles (once, in your root CSS)

```css
/* apps/linora/src/styles/index.css */
@import '@wens-project/liquid-glass/styles/fonts.css';
@import '@wens-project/liquid-glass/styles/theme.css';
```

### 3. Configure Tailwind to scan the package

```css
/* apps/linora/src/styles/tailwind.css  (Tailwind v4) */
@import 'tailwindcss' source(none);
@source '../**/*.{ts,tsx}';
@source '../../packages/**/*.{ts,tsx}';
```

### 4. Use components

```tsx
import {
  GlassButton,
  GlassCard,
  GlassInput,
  GlassSidebar,
  useToast,
  colors,
  glassTw,
} from '@wens-project/liquid-glass';

function Page() {
  const { toasts, addToast, removeToast } = useToast();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900">
      <GlassCard variant="gradient" padding="lg">
        <GlassInput placeholder="Search..." />
        <GlassButton variant="primary" onClick={() => addToast('success', 'Done!')}>
          Submit
        </GlassButton>
      </GlassCard>
    </div>
  );
}
```

---

## Design token conventions

| Token module    | CSS prefix     | TS import               | Example value                        |
|-----------------|----------------|-------------------------|--------------------------------------|
| colors          | `--lg-glass-*` | `colors.glass.bgLight`  | `rgba(255, 255, 255, 0.1)`          |
| gradients       | `--lg-gradient-*` | `gradients.primary`  | `linear-gradient(135deg, ...)`       |
| spacing         | `--lg-space-*` | `spacing.padding.md`    | `1rem`                               |
| radius          | `--lg-radius-*`| `radius.lg`             | `1rem`                               |
| typography      | `--lg-font-*`  | `typography.fontFamily.sans` | `'Inter', ...`                  |
| shadows         | `--lg-shadow-*`| `shadows.glass`         | `0 8px 32px 0 rgba(0,0,0,0.1)`     |
| backdrop        | `--lg-blur-*`  | `backdrop.blur.lg`      | `16px`                               |
| animation       | `--lg-duration-*`| `animation.duration.smooth` | `300ms`                        |
| glassTw         | —              | `glassTw.surface`       | Tailwind class string                |

**Every CSS custom property is namespaced with `--lg-`** to avoid collisions with the consuming app's own variables.

---

## Component API rules

1. **All components accept `className`** — always merged last so consumers can override.
2. **All components use `React.forwardRef`** (except hook-based ones) so refs work.
3. **No external icon dependency** — components that need icons (Toast, Sidebar chevrons) embed inline SVGs. The consuming app passes icons via `icon` prop slots.
4. **No runtime CSS-in-JS** — all styling is Tailwind utility classes.
5. **Props use union types** for variants/sizes, not enums, so tree-shaking works.

---

## Adding a new component

1. Create `src/components/ui/GlassMyComponent.tsx`.
2. Import `cn` from `../../lib/cn` and tokens from `../../tokens/*`.
3. Export the component, its props interface, and any variant/size types.
4. Add the export to `src/components/ui/index.ts`.
5. Add the export to `src/index.ts`.
6. Run `pnpm build` in the package (if build step exists).

---

## Adding a new token

1. Add the value to the relevant file in `src/tokens/`.
2. Add a corresponding CSS custom property to `src/styles/tokens.css`.
3. If the token affects dark mode, add the override in the `.dark` block.

---

## Background requirement

Liquid Glass components are designed for **dark gradient backgrounds**. Consuming apps should wrap their content in something like:

```tsx
<div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900">
  {/* app content */}
</div>
```

---

## What belongs here vs. in the app

| Belongs in this package          | Belongs in the app                          |
|----------------------------------|---------------------------------------------|
| GlassButton, GlassCard, etc.    | Page layouts, sections, routing             |
| Design tokens (colors, spacing) | Business logic, data fetching               |
| `cn` utility                    | Demo/showcase sections                      |
| Theme CSS, font imports         | App-specific nav sidebar, dashboard shell   |
| Reusable Toast hook              | App-specific toast wiring & context         |

---

## Future additions

Components from the original showcase that can be promoted to the design system when needed:

- `GlassModal` — overlay dialog
- `GlassDrawer` — slide-out panel
- `GlassSelect` — dropdown select
- `GlassCheckbox` / `GlassRadio` — form controls
- `GlassToggle` — switch
- `GlassTable` — data table
- `GlassTabs` — tab navigation
- `GlassProgress` / `GlassSkeleton` / `GlassSpinner` — loading states

To promote: copy the source from the showcase's `src/app/components/`, refactor to use `cn` + token imports, remove any app-specific logic, and add to the barrel exports.
