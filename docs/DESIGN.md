# Dolphin design direction

The landing should make Dolphin's meaning immediately understandable: a serious, local-first intelligence tool for work conversations. It should feel calm, intelligent, contextual, professional, and information-dense without becoming cluttered.

## Visual direction

Use a white-first experience with strong typography, subtle depth, restrained borders, low-noise gradients, crisp product mockups, smooth transitions, and minimal decoration. Dark surfaces may provide secondary contrast for focused product areas, but must not define the experience. Conceptual references include Linear, Granola, Raycast, Arc, Notion, Vercel, modern developer tooling, and high-quality enterprise AI products. Learn from them; do not clone them.

Do not use excessive neon, crypto aesthetics, random glowing spheres, giant gradients everywhere, AI-brain imagery, robots, floating 3D blobs, excessive glassmorphism, or cyberpunk visuals. Dolphin must not look like a generic chatbot or consumer AI toy.

## Tokens and typography

Keep the unfinished brand palette neutral and semantic. Colors resolve through theme tokens rather than arbitrary component-level hex values.

```css
--background
--surface
--surface-raised

--foreground
--foreground-muted

--border
--border-strong

--accent
--accent-muted

--success
--warning
--danger
```

Use Geist as the primary sans-serif: it should provide excellent readability, strong lowercase forms, good numerals, useful UI-size rendering, and accessible weights. Geist Mono is the optional monospace font. Use at most one primary font plus this optional monospace font. Reserve Geist Mono for timestamps, structured data, technical labels, and small metadata; never make the whole page feel like a terminal.

## Layout and responsive behavior

Use a consistent container abstraction:

```text
Page → Section → Container → Content
```

All sections should share the main container. Avoid arbitrary independent widths and repeated hard-coded layout values. The desktop content width is conceptually about 1200–1280px.

The landing must work at 360px, 390px, 768px, 1024px, 1280px, and 1440px+. No section may require horizontal scrolling. On mobile, collapse two columns to one, replace complex product UI with a simplified representation, and reduce large animations. Do not merely shrink desktop mockups until they are unreadable.

## Product visual language

### Hero visual

The hero must establish that Dolphin is not just a transcript. Use a meeting window that separates literal conversation from contextual understanding:

```text
Meeting                                                     14:32
Client: “Usually the manager checks the purchase...”
Engineer: “And after approval it goes into the ERP?”

Context
CURRENT PROCESS: Purchase → Approval → ERP
REQUIREMENT: Manager approval required before ERP entry
OPEN QUESTION: Are there approval exceptions?
```

### Mental model: conversation versus understanding

Visual mockups must distinguish between what people said and what Dolphin inferred.

```text
Conversation
Client: “We manually check every invoice.”

Understanding
Problem: Manual invoice validation
Possible opportunity: Automated extraction + validation
Missing context: Monthly invoice volume
```

Build mockups from reusable UI components whenever practical so they remain responsive, can animate, and can share copy. Proposed primitives include `MeetingWindow`, `TranscriptMessage`, `InsightCard`, `RequirementCard`, `ContradictionCard`, and `ExplanationCard`. Use screenshots only after the real product exists.

### Strong explanatory sections

**What they said / What it means** should show an invoice arriving, manual validation, approval, and ERP entry; it can identify manual data entry, the potential requirement that approval precede ERP synchronization, and missing ERP API availability.

**Contradiction demo** should show “Every purchase needs approval” at 10:14, then “Small purchases go through automatically” at 10:27, then a possible contradiction: “Does purchase amount determine whether approval is required?”

**Technical translation demo** should show both directions: explain idempotency in human terms and interpret “Someone has to check it before it goes through” as a possible human approval workflow with role-based authorization.

**Privacy visual** may show Meeting → Your Device → Local AI → Insights, contrasted with Meeting → External Cloud. Do not attack named competitors.

## Accessibility

Meet WCAG 2.1 AA where practical. Provide semantic HTML, logical heading order, keyboard-accessible navigation, visible focus states, meaningful `alt` attributes, adequate contrast, correct button/link semantics, and state that is not communicated through color alone. Respect `prefers-reduced-motion`.

## Motion

Animation explains the product; it is not decoration. Good uses include a transcript appearing, an insight generating, a contradiction connecting, a meeting state updating, and subtle section reveals. Avoid endless decorative motion, large parallax, scroll hijacking, and animations that delay interaction.

> If removing an animation does not reduce understanding, it is optional.

Do not use heavy 3D or WebGL for the contradiction interaction unless it offers clear product value.

## Performance-facing design constraints

Design within landing performance targets:

```text
LCP < 2.5s
CLS < 0.1
INP < 200ms
```

Prefer CSS to JavaScript animation when practical. Design images and mockups for optimization, avoid autoplay video above the fold, and avoid visual treatments that require large libraries. Expensive elements should be optional or dynamically loaded; preserve a clear experience without them.

## Visual review checklist

- [ ] The hero explains comprehension, not transcription.
- [ ] Conversation and understanding are visibly distinct.
- [ ] All colors use semantic tokens.
- [ ] Desktop and required mobile widths remain readable without horizontal overflow.
- [ ] Interactive elements, contrast, headings, and reduced motion meet accessibility expectations.
- [ ] Animation clarifies meaning and remains optional.
- [ ] No forbidden AI, crypto, neon, or generic-chatbot styling appears.
- [ ] Mock data stays within the canonical fictional purchasing scenario.
