/**
 * Bridge file — re-exports the design system public API from the
 * canonical package at /packages/design-system/.
 *
 * Within this Figma Make project the app still uses direct imports
 * (e.g. '../components/glass-button') to avoid circular deps.
 * This file exists for reference and testing only.
 *
 * When moved to the Linora monorepo, use:
 *   import { ... } from '@wens-project/liquid-glass';
 */
export * from '../../packages/design-system/src/index';
