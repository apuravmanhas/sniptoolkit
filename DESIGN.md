# SnipTools Design System

## Brand Identity
- **Name**: SnipTools
- **Tagline**: "Fast, Free Developer & Utility Tools"
- **Domain**: sniptools.tools
- **Personality**: Premium, fast, trustworthy, developer-focused

## Design Philosophy
Inspired by Vercel's design language: clean, minimal, dark-mode-first, with subtle depth and motion. Every pixel should feel intentional. The site should feel like a premium SaaS product, not a free tool directory.

## Color System

### Dark Mode (Default)
```css
--bg-primary: #0a0a0a;         /* Near-black background */
--bg-secondary: #141414;        /* Card/panel background */
--bg-tertiary: #1a1a1a;         /* Elevated surfaces */
--bg-hover: #1f1f1f;            /* Hover states */
--bg-active: #262626;           /* Active/pressed states */

--border-primary: #262626;      /* Default borders */
--border-secondary: #333333;    /* Emphasized borders */
--border-hover: #404040;        /* Hover borders */

--text-primary: #ededed;        /* Primary text */
--text-secondary: #a1a1a1;      /* Secondary text */
--text-tertiary: #737373;       /* Muted text */
--text-link: #3b82f6;           /* Link text */

--accent-blue: #3b82f6;         /* Primary accent */
--accent-blue-hover: #2563eb;   /* Accent hover */
--accent-blue-subtle: rgba(59, 130, 246, 0.1);  /* Accent bg */
--accent-green: #22c55e;        /* Success */
--accent-green-subtle: rgba(34, 197, 94, 0.1);
--accent-red: #ef4444;          /* Error/danger */
--accent-red-subtle: rgba(239, 68, 68, 0.1);
--accent-amber: #f59e0b;        /* Warning */
--accent-amber-subtle: rgba(245, 158, 11, 0.1);
--accent-purple: #a855f7;       /* Special/highlight */
--accent-purple-subtle: rgba(168, 85, 247, 0.1);
```

### Light Mode
```css
--bg-primary: #ffffff;
--bg-secondary: #fafafa;
--bg-tertiary: #f5f5f5;
--bg-hover: #f0f0f0;
--bg-active: #e5e5e5;

--border-primary: #e5e5e5;
--border-secondary: #d4d4d4;
--border-hover: #a3a3a3;

--text-primary: #171717;
--text-secondary: #525252;
--text-tertiary: #a3a3a3;
--text-link: #2563eb;
```

## Typography
- **Font Family**: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif`
- **Mono Font**: `'JetBrains Mono', 'SF Mono', 'Fira Code', 'Cascadia Code', monospace`
- **Scale**:
  - Hero: 2.5rem (40px), weight 800, tracking -0.04em
  - H1: 2rem (32px), weight 700, tracking -0.03em
  - H2: 1.5rem (24px), weight 700, tracking -0.02em
  - H3: 1.125rem (18px), weight 600
  - Body: 0.9375rem (15px), weight 400, line-height 1.6
  - Small: 0.8125rem (13px), weight 400
  - Tiny: 0.75rem (12px), weight 500

## Spacing
- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128

## Border Radius
- Small: 6px (buttons, inputs)
- Medium: 8px (cards, panels)
- Large: 12px (modals, large cards)
- XL: 16px (hero sections)
- Full: 9999px (pills, avatars)

## Shadows (Dark Mode)
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
--shadow-glow-blue: 0 0 20px rgba(59, 130, 246, 0.15);
--shadow-glow-green: 0 0 20px rgba(34, 197, 94, 0.15);
```

## Components

### Navigation
- Sticky top bar with glassmorphism (backdrop-blur)
- Logo left, tool categories center, theme toggle + command palette right
- Mobile: hamburger menu with slide-in panel
- Active page indicator with accent underline

### Command Palette (Ctrl+K)
- Full-screen overlay with centered search modal
- Fuzzy search across all tools
- Keyboard navigable (up/down arrows, enter to select)
- Shows tool icon, name, and category
- Animated entrance with scale + fade

### Tool Cards (Homepage)
- Grid layout: 3 columns desktop, 2 tablet, 1 mobile
- Each card: icon, name, short description, category tag
- Hover: subtle lift (translateY -2px), border glow
- Click: smooth page transition

### Tool Pages
- Clean workspace layout
- Input area on left/top, output on right/bottom
- Action buttons with loading states
- Copy-to-clipboard with success animation
- Tool-specific controls (dropdowns, toggles)
- "How to use" collapsible section
- Related tools grid at bottom
- FAQ accordion with schema markup

### Buttons
- Primary: Accent blue, white text, subtle shadow
- Secondary: Transparent, border, hover fill
- Ghost: No border, hover background
- All: 200ms cubic-bezier transition, scale on active

### Inputs/Textareas
- Dark bg-secondary background
- Border on focus with accent glow ring
- Monospace font for code inputs
- Line numbers for multi-line inputs
- Placeholder text in text-tertiary

### Notifications/Toasts
- Bottom-right positioning
- Slide-in from right animation
- Auto-dismiss after 3s
- Types: success (green), error (red), info (blue)

## Animations
```css
/* Page transitions */
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes slideUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
@keyframes slideDown { from { opacity: 0; transform: translateY(-12px); } to { opacity: 1; transform: translateY(0); } }
@keyframes scaleIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }

/* Interaction */
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes shimmer { from { background-position: -200% 0; } to { background-position: 200% 0; } }
```

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Wide: > 1280px

## SEO Requirements Per Page
- Unique title tag: "[Tool Name] - Free Online [Tool Type] | SnipTools"
- Meta description: Action-oriented, includes primary keyword, under 160 chars
- OG and Twitter card meta tags
- Canonical URL
- SoftwareApplication structured data
- FAQ structured data where applicable
- Semantic HTML (main, article, section, aside, nav)
- Single H1 per page
- Proper heading hierarchy

## Accessibility
- Color contrast ratio: minimum 4.5:1
- All interactive elements focusable
- Keyboard navigation support
- ARIA labels on icon-only buttons
- Skip-to-content link
- Reduced motion media query support

## Performance Targets
- Lighthouse Performance: 95+
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 95+
- Lighthouse SEO: 100
- First Contentful Paint: < 1.0s
- Largest Contentful Paint: < 2.0s
- Total Blocking Time: < 100ms
- Cumulative Layout Shift: < 0.1
