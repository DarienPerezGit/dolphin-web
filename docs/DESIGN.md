# Dolphin Design Direction & Aesthetic System

The landing communicates Dolphin's purpose with immediate clarity: a serious, local-first intelligence tool for work conversations. It is calm, intelligent, contextual, and information-dense without visual clutter.

---

## 1. Strict White-First Minimalist Aesthetic

The experience is strictly white-first, airy, and high-precision. 

### Core Visual Principles
- **No Monospace Typography**: Monospace fonts are completely avoided across headings, body, and metadata. Pure, high-legibility geometric sans-serif (`Geist Sans` / `Inter`) is used universally.
- **No Badges or Chips**: Artificial pill badges, rounded-full outline chips, and container tags are eliminated. Labels are rendered as clean, subtle text elements with thoughtful case and tonal contrast.
- **No Boxed UI / Outlined Cards**: Container borders (`border-zinc-200`, heavy card boxes, ring wrappers) are avoided. Element separation is achieved purely through **whitespace, line breaks, and typographic hierarchy**.
- **Generous Whitespace & Spacing**: Abundant negative space allows content to breathe and gives full prominence to the real-time cognitive distinction between *conversation* and *understanding*.

---

## 2. Universal Typography Scale & Sizing Specifications

### Font Family
- **Primary Sans-Serif**: `Geist` / `Inter` with optical kerning, tabular figures, and weights `[300, 400, 450, 500, 600, 700]`.

### Hero Exact Dimensions & Geometry
- **Navbar**: `80–88px` height (`h-[84px]`), clean text navigation without heavy borders or badges.
- **Hero Section Padding**: `padding: 84px 24px 72px` (`pt-[84px] pb-[72px] px-6 text-center`).
- **Headline**:
  - Max Width: `850–950px` (`max-w-[920px] mx-auto`).
  - Font Size: `clamp(44px, 5.2vw, 72px)` (`64–72px` on desktop).
  - Font Weight: `font-[450]` (medium-light sobrio).
  - Line Height: `1.02` (`0.98–1.05`).
  - Letter Spacing: `-0.035em` (`tracking-[-0.035em]`).
- **Headline $\to$ Subtitle Spacing**: `32px` (`mt-8`).
- **Subtitle**:
  - Max Width: `800–900px` (`max-w-[820px] mx-auto`).
  - Font Size: `20px` to `23px` (`text-[20px] sm:text-[23px]`).
  - Line Height: `1.25` (`~1.2–1.3`).
  - Letter Spacing: `-0.015em` (`tracking-[-0.015em]`).
  - Color: `text-zinc-600 font-normal`.
- **Subtitle $\to$ Action Buttons Spacing**: `56px` (`mt-[56px]`).
- **Action Buttons Geometry**:
  - Height: `min-h-[56px]`.
  - Horizontal Padding: `px-8` (`32px`).
  - Border Radius: `rounded-[13px]`.
  - Gap between buttons: `gap-[20px]`.
  - Typography: `text-base font-medium`.
- **Buttons $\to$ Social Proof / Trust Line Spacing**: `84px` (`mt-[84px]`).

---

## 3. Mental Model: Conversation versus Understanding

Mockups and sections distinguish what people said from what Dolphin inferred without boxed cards:

```text
Conversación literal (14:30)
Sarah Jenkins · Client · VP Operations
“When a purchase comes in, someone reviews it and then the manager approves it before ERP sync.”

Comprensión estructurada (Dolphin Engine)
PROCESO DETECTADO
Compra recibida ➔ Revisión inicial ➔ Aprobación Manager ➔ ERP
```

---

## 4. Explanatory Sections

- **Traducción Bidireccional (`<TranslationDemo />`)**: Shows technical concepts (e.g. Idempotency) translated into plain business terms, and business workflows into RBAC requirements.
- **Detección de Contradicciones (`<ContradictionDemo />`)**: Chronological discrepancy diff between statements at minute 14 and minute 27, suggesting the exact question to unblock the meeting.
- **Privacidad On-Device (`<Privacy />`)**: Zero bytes sent to cloud, powered by local inference with QVAC.

---

## 5. Accessibility & Motion Guidelines

- Respect `prefers-reduced-motion`.
- Maintain high-contrast ratio (WCAG 2.1 AA) across text and interactions.
- Full keyboard navigation supported (`1, 2, 3` for demo steps, `Space` for pause/play).
