# Dolphin Landing v1 — Visual & Accessibility Acceptance Gate

This document defines the strict, observable acceptance criteria required to merge, validate, and release the Dolphin landing page v1. Every pull request and release candidate must satisfy these requirements before being marked complete.

---

## 1. Viewport & Responsive Evidence

The landing page must render with zero horizontal overflow across all standard device viewports.

| Target Viewport | Device Archetype | Observable Requirement |
| :--- | :--- | :--- |
| **360px** | Small Android | Single-column layout; mockups collapse cleanly; no truncated cards or horizontal scrolling. |
| **390px** | Standard iPhone | Navigation menu collapses into a compact mobile drawer/toggle; touch targets $\ge 44 \times 44\text{px}$. |
| **768px** | Tablet Portrait | Grid transitions smoothly; balanced padding; typography scales without overlap. |
| **1024px** | Tablet Landscape / Small Laptop | Multi-column sections expand; side-by-side product comparison activates. |
| **1280px** | Standard Desktop | Maximum content container ($\approx 1200\text{--}1280\text{px}$) centered with balanced margins. |
| **1440px+** | Large Desktop / Ultrawide | Background cleanly bounds content; no stretched or distorted mockups. |

### Verification Check
- [ ] Run browser inspection at 360px, 390px, 768px, 1024px, 1280px, 1440px.
- [ ] Ensure `document.documentElement.scrollWidth === document.documentElement.clientWidth` across all viewports.

---

## 2. Accessibility & Keyboard Navigation (WCAG 2.1 AA)

All visitors must be able to navigate, understand, and interact with the landing page without relying on mouse input or vision alone.

### A. Semantic Structure & Headings
- Exactly one `<h1>` per page matching the approved hero headline: *"Understand the meeting while you're still in it."*
- Strictly hierarchical heading order (`<h1>` $\to$ `<h2>` $\to$ `<h3>`) without skipping levels.
- Real semantic elements: `<button>` for actions, `<a>` with valid `href` for navigation.

### B. Keyboard Navigation & Focus
- Every interactive control is reachable via the `Tab` key.
- Visible, high-contrast focus indicator (e.g., `ring-2 ring-offset-2 ring-accent`) on all active elements.
- Logical tab order matching visual flow from top to bottom.
- Modals, drawers, and mobile menus support `Escape` key dismissal and focus trapping.

### C. Screen Reader & ARIA
- Meaningful `alt` text for all illustrative images; decorative elements marked with `aria-hidden="true"`.
- Live regions (`aria-live="polite"`) for dynamic interactive mockups updating content in real time.
- State is never communicated by color alone (e.g., contradiction alerts must include descriptive text/badges, not just red borders).

---

## 3. Contrast, Theme Tokens & Visual Integrity

The visual identity must adhere to the white-first, calm, information-dense specification in `docs/DESIGN.md`.

### A. Color & Contrast Ratios
- **Normal text:** Minimum contrast ratio of **4.5:1** against its background.
- **Large text ($\ge 18\text{pt}$ / $24\text{px}$ bold):** Minimum contrast ratio of **3.0:1**.
- **Interactive UI components & borders:** Minimum contrast ratio of **3.0:1**.

### B. Design Token Compliance
- All colors must resolve via semantic CSS variables:
  `--background`, `--surface`, `--surface-raised`, `--foreground`, `--foreground-muted`, `--border`, `--border-strong`, `--accent`, `--accent-muted`, `--success`, `--warning`, `--danger`.
- No arbitrary, hardcoded hex values scattered in individual component styles.
- Primary typeface is **Geist**; **Geist Mono** is reserved exclusively for technical labels, timestamps, and structured metadata.
- **Prohibited visual styles:** Dark-first dominance, neon glows, cyberpunk aesthetics, floating 3D spheres, WebGL particle clouds, or generic chatbot styling.

---

## 4. Motion & Reduced Motion Gate

Animation serves exclusively to clarify the mental model (Conversation vs. Understanding); it is never purely decorative.

- [ ] Every animation must be dismissible or optional.
- [ ] **Native Reduced Motion:** When `prefers-reduced-motion: reduce` is enabled in OS settings, all `translate`, `scale`, and opacity transitions must immediately resolve to their final static state (`transition: none !important; animation: none !important;`).
- [ ] No scroll hijacking, parallax drift, or autoplaying video above the fold.

---

## 5. Performance Targets & Web Vitals

The landing page must maintain optimal load performance and responsiveness.

| Metric | Target | Verification Method |
| :--- | :--- | :--- |
| **LCP (Largest Contentful Paint)** | $< 2.5\text{s}$ | Google Lighthouse / PageSpeed Insights |
| **CLS (Cumulative Layout Shift)** | $< 0.1$ | Layout stability check during mockup animations |
| **INP (Interaction to Next Paint)** | $< 200\text{ms}$ | Responsive input response on interactive demos |
| **Client Bundle Size** | Minimal | Server Components by default; `"use client"` only where needed |

---

## 6. Product Positioning & Copy Gate

The landing copy must strictly align with `docs/PRODUCT.md`.

- [ ] Product is positioned as a **real-time conversation comprehension layer**, not merely a transcription tool, summarizer, or chatbot.
- [ ] Canonical name is strictly **Dolphin** (prose) or `dolphin` (code). Prohibited: *Dolphin AI, DolphinWeb, Context Layer*.
- [ ] Illustrative scenarios use the **canonical SMB purchasing workflow** (Client, Engineer, Manager, Accounting; ERP integration, idempotency, $\$500$ contradiction).
- [ ] **No unsupported claims:** Uses phrasing like *"Designed to detect..."* instead of claiming verified real-time backend execution.
- [ ] No fake testimonials, fake user counts, fake benchmark metrics, or third-party cloud AI secrets.

---

## 7. Build, Quality & Vercel Preview Readiness

Prior to merging into `main`, the build pipeline must succeed with zero errors and provide a working deployment preview.

```bash
# Required quality baseline
pnpm lint        # Zero ESLint warnings or errors
pnpm typecheck   # Strict TypeScript pass (no implicit any)
pnpm build       # Production Next.js App Router build success
```

### Vercel Preview Gate
- Clean deployment on Vercel Preview URL.
- Zero client-side console warnings, hydration errors, or unhandled exceptions.
- OpenGraph metadata (`title`, `description`, `og:image`, `favicon`) verified.
