# Hashtrade Design System Governance

## Core Principle (Non-Negotiable)

**The `@workspace/ui` package is the single source of truth.**
No UI, styling, or visual logic is allowed outside it unless explicitly whitelisted.

---

## 1. Content Governance (The Startup Tone)

### Rules
- **No Fabricated Metrics:** Do NOT use claims like "8,000+ Active Nodes", "2.4M TEU/yr", or false global scale.
- **Honest Framing:** We are an early-stage startup founded by three people from Imphal and New Delhi. Write accordingly.
- **No Sci-Fi / AI Claims:** Do NOT invent "AI Agents", "Proprietary Quantum Routing", or non-existent tech. Do NOT use cyberpunk/terminal language ("Initiate Node", "SysAdmin Routing", "Market Telemetry", "UPLINK: ACTIVE").
- **No Inflated Jargon:** Avoid "systemic hardware dependencies", "asymmetric market landscapes", "atomic structures of electronic development". Write plainly.
- **Reference:** Always refer to `docs/contents` for the canonical tone and text.

---

## 2. Component Governance (Hard Block)

### Rules
- **ONLY allowed import source:** `@workspace/ui/components/*`
- **Forbidden:**
  - Direct `radix-ui` usage in `apps/*`
  - Local component creation inside `apps/*`
  - Copy-pasted shadcn components
  - Third-party UI libraries (MUI, Chakra, Ant, etc.)
  - Inline `<button>` elements — always use `<Button>` component
  - Raw `<a>` for internal links — always use the router `LinkComponent` pattern

---

## 3. Nordic Brutalist Aesthetic (OKLCH)

We use a perceptually uniform OKLCH token system, tailored for a premium, accessible, and calm minimalist interface with brutalist geometry.

### Geometry (Non-Negotiable)
- `--radius: 0rem` — **Absolute zero curvature.** No `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-full` anywhere. Every corner is perfectly sharp.
- The ONLY exception: external platform elements (e.g., avatar images from third parties).

### Spacing & Layout
- **Baseline Grid**: Absolute adherence to the 8px baseline grid. Margins and paddings must be multiples of 8px. Internal component padding may use 4px increments.
- **Spacing Tokens**: Use defined spacing tokens (`--space-1` through `--space-16`) rather than arbitrary values.
- **Whitespace**: Provide substantial negative space (`gap-6`, `gap-8`). Never cluster structural UI components.

### Spacing Token Scale
| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Micro: icon padding, inline gaps |
| `--space-2` | 8px | Compact: badge padding, tight groups |
| `--space-3` | 12px | Small: list item padding |
| `--space-4` | 16px | Base: card padding, form field gaps |
| `--space-6` | 24px | Medium: section sub-gaps |
| `--space-8` | 32px | Large: section padding |
| `--space-10` | 40px | XL: major section dividers |
| `--space-12` | 48px | 2XL: page-level spacing |
| `--space-16` | 64px | 3XL: hero section padding |
| `--space-20` | 80px | 4XL: between major page sections |
| `--space-24` | 96px | 5XL: premium whitespace blocks |

### UI Tokens & Styling Elements
- **Borders**: Hairlines only (`1px`, low opacity) or distinct separating grids. All corners sharp.
- **Shadows & Elevation**: Extensive reliance on frosted glass (`backdrop-blur-md`, `bg-background/60`) and soft, large-radius box shadows. Avoid heavy flat drop-shadows.

### Surface Hierarchy
| Token | Purpose | Example |
|-------|---------|---------|
| `--surface-1` | Primary surface (base cards) | Main content cards |
| `--surface-2` | Elevated surface (overlays, modals) | Dialogs, popovers |
| `--surface-3` | Highest elevation (floating elements) | Tooltips, dropdowns |

### Status Colors
| Token | Purpose |
|-------|---------|
| `--success` / `--success-foreground` | Positive states, confirmations |
| `--warning` / `--warning-foreground` | Caution states, pending actions |
| `--info` / `--info-foreground` | Informational notes, neutral alerts |

---

## 4. Typography

### Rules
- **Fonts:** Plus Jakarta Sans (Headings) + Inter (Body). No monospaced typefaces for structural headers or body text. Monospace is only for literal code or data readouts.
- **Fluid Scaling:** Use `clamp()` for responsive type. No fixed font sizes.

### Type Scale

| Class | Font | Weight | Tracking | Sizes (clamp) |
|-------|------|--------|----------|---------------|
| `.heading-display` | Plus Jakarta Sans | 600–700 | `-0.02em` | `clamp(2.25rem, 5vw, 4.5rem)` |
| `.heading-section` | Plus Jakarta Sans | 500–600 | `-0.01em` | `clamp(1.5rem, 3vw, 2.5rem)` |
| `.heading-sub` | Plus Jakarta Sans | 500 | `-0.01em` | `clamp(1.125rem, 2vw, 1.5rem)` |
| `.body-text` | Inter | 400 | `0` | `clamp(0.875rem, 1.5vw, 1.125rem)` |
| `.body-large` | Inter | 400 | `0` | `clamp(1rem, 1.8vw, 1.25rem)` |
| `.label-nav` | Inter | 500 | `0.01em` | `0.875rem` (fixed) |
| `.label-badge` | Inter | 500 | `0.02em` | `0.75rem` (fixed) |

### Case Rules
- **Sentence case** for everything: headings, buttons, navigation, labels.
- **No ALL CAPS**: NEVER use ALL CAPS for navigation, buttons, headings, or large swaths of text.
- Subtle uppercase is ONLY allowed for `.label-badge` class at very small sizes (0.75rem or below).

---

## 5. Composition Patterns

### Component Architecture
- **Raw Layouts**: Utilize Flex and CSS Grid. No messy structural compositions.
- **Buttons**: Must be sharp-edged (`rounded-none`), sentence-case, with high accessibility contrast.

### High-Level Pages & Components
- `<PageLayout>`: Standard full-page wrapper. Does NOT render `<main>` — pages own their `<main>` element.
- `<IndexCard>`: Frosted glass panel with 1px hairline border, sharp edges.
- `<FeatureGrid>`: Responsive grid layout for IndexCards.

### Hero System Architecture
The Hero section establishes first impression and must be balanced:
- **Layout**: 2-column grid on desktop (`grid-cols-1 lg:grid-cols-2`).
- **Lottie / Visualization Rules**: Visual layers MUST be visible above the fold with explicit boundary boxes.
- No vertical stacking for desktop heroes; they must sit horizontally parallel.

---

## 6. Animation System (Framer Motion)

### Overview
A single animation layer using **Framer Motion**:
- Component-level transitions, micro-interactions, layout animations, and viewport-triggered reveals.
- Scroll-based storytelling via `useInView` with intersection observer patterns.

### Rules
- Micro-interactions must use soft, sub-300ms easing transitions.
- All animations MUST respect `prefers-reduced-motion` — disable or reduce when the user has requested reduced motion.
- No perpetual/infinite animations (e.g., logo rotation) unless gated by reduced-motion check.
- No animations that block user interaction or delay content rendering.

---

## 7. Accessibility (Mandatory)

- **Skip-to-content link**: Must be the first focusable element in the DOM.
- **Reduced motion**: `@media (prefers-reduced-motion: reduce)` must disable all non-essential animations.
- **ARIA labels**: All decorative SVGs must have `role="img"` and `aria-label`. Purely decorative elements should use `aria-hidden="true"`.
- **Contrast**: All text must meet WCAG AA (4.5:1) minimum. Muted text must still maintain 3:1.
- **Focus rings**: All interactive elements must have visible focus indicators.
- **Semantic HTML**: Use appropriate `<main>`, `<nav>`, `<header>`, `<footer>`, `<section>` elements.

---

## 8. Monorepo Discipline
Packages must expose explicit APIs via `package.json` `"exports"`. Deep imports (e.g. `import { Button } from "@workspace/ui/src/components/button"`) are banned. Use `@workspace/ui/components/*`.
