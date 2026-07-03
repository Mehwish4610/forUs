# Aurora Design System (ADS)

**Project:** forUs  
**Version:** 0.1.0  
**Status:** Draft  
**Last Updated:** 29 June 2026  
**Owner:** Mehwish 
**Maintained By:** Mehwish

---

# Purpose

The Aurora Design System (ADS) defines the visual language of **forUs**. It ensures consistency across the application by standardizing colors, typography, spacing, components, animations, and interaction patterns.

Every UI element within forUs must follow this design system.

---

# Design Philosophy

Aurora is built around five core principles:

- Calm over flashy
- Simplicity over complexity
- Consistency over novelty
- Accessibility by default
- Motion with purpose

The interface should feel modern, lightweight, elegant, and comfortable for long conversations.

---

# Color System

## Primary Colors

| Token | Value | Purpose |
|--------|--------|---------|
| `--color-primary` | `#10B981` | Primary actions |
| `--color-primary-hover` | `#059669` | Hover state |
| `--color-primary-light` | `#34D399` | Highlights |

---

## Secondary Colors

| Token | Value | Purpose |
|--------|--------|---------|
| `--color-secondary` | `#06B6D4` | Secondary actions |
| `--color-secondary-hover` | `#0891B2` | Hover state |
| `--color-secondary-light` | `#67E8F9` | Highlights |

---

## Accent Color

| Token | Value | Purpose |
|--------|--------|---------|
| `--color-accent` | `#14B8A6` | Accent elements |

---

## Background Colors

| Token | Value | Purpose |
|--------|--------|---------|
| `--bg-primary` | `#0B1120` | Main background |
| `--bg-secondary` | `#111827` | Secondary background |
| `--bg-tertiary` | `#1F2937` | Elevated sections |

---

## Surface Colors

| Token | Value | Purpose |
|--------|--------|---------|
| `--surface-primary` | `rgba(255,255,255,0.06)` | Glass cards |
| `--surface-secondary` | `rgba(255,255,255,0.10)` | Elevated glass surfaces |

---

## Border Colors

| Token | Value | Purpose |
|--------|--------|---------|
| `--border-primary` | `rgba(255,255,255,0.08)` | Default borders |
| `--border-hover` | `rgba(16,185,129,0.30)` | Hover borders |

---

## Text Colors

| Token | Value | Purpose |
|--------|--------|---------|
| `--text-primary` | `#F8FAFC` | Main text |
| `--text-secondary` | `#CBD5E1` | Secondary text |
| `--text-muted` | `#94A3B8` | Muted text |

---

## Semantic Colors

| Purpose | Value |
|----------|--------|
| Success | `#22C55E` |
| Warning | `#F59E0B` |
| Error | `#EF4444` |
| Information | `#3B82F6` |

---

# Aurora Gradient

Primary Aurora Gradient

```css
linear-gradient(
135deg,
#10B981 0%,
#14B8A6 50%,
#06B6D4 100%
);
```

This gradient is the official visual identity of forUs.

It should be used for:

- Hero backgrounds
- Primary buttons
- Active highlights
- Decorative accents
- Selected UI elements

It should **not** be overused. Most surfaces should remain dark to preserve readability and maintain the calm aesthetic.

---

# Design Goal

The Aurora Design System should make users feel:

- Calm
- Comfortable
- Focused
- Secure
- Connected

Every design decision should support these emotions.

---

# Typography

Typography plays a major role in making forUs feel calm, modern, and readable.

The interface should prioritize clarity over decoration. Font sizes should remain consistent across the application.

---

## Primary Font

**Inter**

Fallbacks:

```css
Inter, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
```

---

## Font Weights

| Weight | Usage |
|---------|-------|
| 400 | Body text |
| 500 | Labels |
| 600 | Buttons |
| 700 | Headings |

---

## Typography Scale

| Token | Size | Weight | Usage |
|--------|------|--------|-------|
| Display | 56px | 700 | Landing Hero |
| H1 | 40px | 700 | Page Titles |
| H2 | 32px | 700 | Section Titles |
| H3 | 24px | 600 | Card Titles |
| H4 | 20px | 600 | Small Headings |
| Body Large | 18px | 400 | Important text |
| Body | 16px | 400 | Default text |
| Small | 14px | 400 | Secondary text |
| Caption | 12px | 400 | Metadata |

---

## Line Heights

| Text Type | Line Height |
|------------|-------------|
| Headings | 120% |
| Body | 160% |
| Caption | 150% |

---

## Letter Spacing

| Usage | Value |
|--------|-------|
| Headings | -0.02em |
| Body | Normal |
| Buttons | 0.01em |

---

## Text Guidelines

- Never use more than two font weights within the same component.
- Avoid fully capitalized paragraphs.
- Maintain high contrast between text and background.
- Use muted text only for supporting information.
- Headings should always be concise and descriptive.

---

# Typography Goal

Typography should feel effortless to read during long conversations while maintaining a clean, premium appearance.


---

# Spacing & Layout System

Aurora follows an **8-point grid system**.

Every spacing value, margin, padding, gap, and layout dimension should be based on multiples of **8 pixels** wherever practical.

This creates visual consistency and improves readability across all devices.

---

## Spacing Scale

| Token | Value | Usage |
|--------|---------|----------------|
| XS | 4px | Tiny gaps |
| SM | 8px | Small spacing |
| MD | 16px | Default spacing |
| LG | 24px | Between sections |
| XL | 32px | Large spacing |
| XXL | 48px | Page sections |
| XXXL | 64px | Hero spacing |
| HUGE | 96px | Major layout spacing |

---

## Container Widths

| Screen | Width |
|----------|---------|
| Mobile | 100% |
| Tablet | 720px |
| Laptop | 1024px |
| Desktop | 1280px |
| Large Desktop | 1440px |

Content should remain centered.

Avoid stretching content across the entire screen.

---

## Grid System

Desktop:

12-column grid

Tablet:

8-column grid

Mobile:

4-column grid

---

## Page Padding

| Device | Horizontal Padding |
|----------|--------------------|
| Mobile | 20px |
| Tablet | 32px |
| Desktop | 48px |

---

## Card Padding

Default:

24px

Compact:

16px

Large:

32px

---

## Border Radius

| Token | Value |
|---------|--------|
| Small | 8px |
| Medium | 12px |
| Large | 16px |
| XL | 20px |
| XXL | 24px |
| Full | 999px |

---

## Icon Sizes

| Size | Value |
|--------|--------|
| Small | 16px |
| Default | 20px |
| Large | 24px |
| Extra Large | 32px |

---

## Avatar Sizes

| Size | Value |
|--------|--------|
| Small | 28px |
| Medium | 40px |
| Large | 56px |
| Extra Large | 72px |

---

## Sidebar Width

Desktop

280px

Collapsed

72px

Mobile

Hidden by default

---

## Chat Width

Messages should never stretch edge-to-edge.

Maximum message width:

70%

This improves readability.

---

## Layout Principles

- Maintain generous whitespace.
- Avoid crowded layouts.
- Cards should breathe.
- Consistent spacing improves usability.
- Content should remain aligned to the grid.

---

# Layout Goal

The layout should feel spacious, balanced, and comfortable during long conversations without wasting screen space.


---

# Elevation & Shadows

Shadows should be soft and subtle.

The goal is to create depth without making components appear heavy.

## Shadow Tokens

| Token | Usage |
|---------|---------|
| Shadow XS | Small buttons |
| Shadow SM | Cards |
| Shadow MD | Dropdowns |
| Shadow LG | Modals |
| Shadow XL | Floating panels |

Shadows should use low opacity and large blur rather than harsh dark edges.

---

# Glassmorphism

Aurora uses glassmorphism sparingly.

Glass surfaces should remain readable at all times.

## Glass Properties

Blur:
16px–24px

Opacity:
6%–12%

Border:
1px solid translucent white

Glass should only be used for:

- Sidebar
- Navbar
- Modals
- Floating cards
- Command Palette

Large content areas such as chat history should prioritize readability over glass effects.

---

# Motion System

Animations should communicate state changes.

Animations should never distract users.

## Motion Durations

| Speed | Duration |
|---------|----------|
| Fast | 150ms |
| Normal | 250ms |
| Slow | 400ms |

---

## Motion Principles

Use motion to:

- Explain transitions
- Show hierarchy
- Confirm actions
- Reduce abrupt changes

Avoid unnecessary movement.

---

# Responsive Design

Aurora is mobile-first.

## Breakpoints

| Device | Width |
|----------|---------|
| Mobile | <640px |
| Small Tablet | 640px |
| Tablet | 768px |
| Laptop | 1024px |
| Desktop | 1280px |
| Wide Screen | 1536px |

Layouts should adapt gracefully without changing the user's mental model.

---

# Accessibility

Aurora follows accessibility-first design.

## Requirements

- Keyboard navigation
- Visible focus states
- High color contrast
- Large tap targets
- Screen-reader friendly labels
- No color-only indicators
- Reduced-motion support

Accessibility is considered a core feature, not an enhancement.

---

# Component Principles

Every component should be:

- Reusable
- Responsive
- Accessible
- Consistent
- Well documented

Every component should have:

- Default state
- Hover state
- Active state
- Disabled state
- Loading state
- Error state (where applicable)

---

# Iconography

Icons should use a consistent outline style.

Recommended size:

20px

Icons should support both light and dark themes.

---

# Design Checklist

Before approving any new screen, verify:

- Uses Aurora color tokens
- Uses typography scale
- Uses spacing scale
- Responsive
- Accessible
- Mobile friendly
- Keyboard friendly
- Consistent with Aurora UI
- Matches Product Charter

---

# Summary

Aurora is designed to create an interface that feels:

- Calm
- Modern
- Lightweight
- Elegant
- Trustworthy
- Comfortable
- Fast

Every design decision should reinforce these qualities.

The Aurora Design System serves as the single source of truth for all UI and UX decisions across the forUs platform.
