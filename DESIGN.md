---
name: Executive Minimalist
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0b1c30'
  on-tertiary-container: '#75859d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 24px
  section-gap: 120px
  element-gap: 32px
---

## Brand & Style
The design system is engineered for a high-trust personal portfolio that balances authority with modern technical proficiency. It targets recruiters and executive stakeholders in high-stakes industries, evoking an emotional response of reliability, intelligence, and meticulous attention to detail.

The aesthetic follows a **Modern Corporate** approach with **Minimalist** restraint. It prioritizes clarity through generous white space and a "quality over quantity" content strategy. The interface feels premium through disciplined alignment and the juxtaposition of traditional editorial typography with contemporary interface elements.

## Colors
The palette is anchored by a deep navy (`#0F172A`), providing a sophisticated, high-contrast foundation for text and structural elements. An emerald green (`#10B981`) serves as the high-energy accent for calls to action, progress indicators, and interactive states, signaling growth and precision. 

Charcoal and slate greys facilitate a tiered visual hierarchy for secondary information. The background uses a slightly off-white neutral to reduce eye strain while maintaining a crisp, paper-like editorial feel.

## Typography
This design system utilizes a classic serif-on-sans pairing to establish a hierarchy of "The Thinker" (Headlines) and "The Doer" (Body). 

**Playfair Display** is reserved for large display titles and section headings, communicating elegance and historical authority. **Inter** is used for all functional text, ensuring maximum legibility across different device resolutions. For labels and small metadata, a tracked-out uppercase Inter provides a systematic, modern contrast to the flowing serifs of the headlines.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop to maintain the integrity of the editorial compositions. A 12-column grid is used with generous gutters to allow content to breathe.

- **Desktop (1440px+):** 1200px max-width container, centered.
- **Tablet (768px - 1024px):** 8-column fluid layout with 40px side margins.
- **Mobile (<768px):** Single-column stack with 24px side margins.

Vertical rhythm is driven by a `section-gap` of 120px, creating distinct "chapters" in the portfolio. Elements within a group are separated by increments of 8px, typically using 32px (`element-gap`) for logical blocks.

## Elevation & Depth
To maintain a sophisticated and flat professional look, the design system avoids heavy drop shadows. Depth is achieved through **Tonal Layers** and **Subtle Ambient Shadows**.

- **Surface 0 (Background):** The neutral base layer.
- **Surface 1 (Cards/Navigation):** White background with a 1px slate-200 border or a very soft, high-diffusion shadow (0px 4px 20px rgba(15, 23, 42, 0.05)).
- **Interactions:** On hover, elements may lift slightly using a more pronounced but still desaturated shadow to signal interactivity without breaking the minimalist aesthetic.

## Shapes
The shape language is disciplined and geometric. A "Soft" roundedness (`0.25rem`) is applied to standard components like input fields and buttons to take the edge off the brutalism while remaining professional. Larger containers like cards use `rounded-lg` (`0.5rem`) for a slightly friendlier feel. Avoid full circles (pills) except for small status indicators or "tags" to maintain the architectural structure of the layout.

## Components
- **Buttons:** Primary buttons use the accent color (`#10B981`) with white text, no icons, and bold weight. Secondary buttons use a "ghost" style with a 1px navy border.
- **Cards:** Portfolio project cards use a "Full Bleed" image top, followed by a padded section with a `headline-md` title and `body-md` description.
- **Inputs:** Underlined or fully boxed with a light grey border (`#E2E8F0`). On focus, the border transitions to the primary navy, not the accent color, to keep the professional tone.
- **Chips/Tags:** Used for skills or categories. Small text, `label-md` style, with a light grey background and no border.
- **Lists:** Experience lists should use a vertical timeline thread in `#E2E8F0` with the accent color used only for the current position marker.
- **Navigation:** A sticky top header with a blur effect (`backdrop-filter: blur(10px)`) over a semi-transparent neutral background to maintain context while scrolling.