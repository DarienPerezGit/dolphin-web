# Dolphin — Web

> **Understand the meeting while you're still in it.**

Marketing website for **Context Layer**, a local-first intelligence layer for work conversations.

This repository contains **only the public landing page, visual identity, product storytelling, and reusable marketing assets**.

It does **not** contain the hackathon implementation, meeting intelligence engine, QVAC integration, transcription pipeline, local inference runtime, or any other core product logic.

---

# 1. Repository Purpose

This repository exists so the team can work on:

- branding,
- product positioning,
- landing-page design,
- responsive implementation,
- product mockups,
- animations,
- messaging,
- SEO,
- public documentation links,
- hackathon presentation assets.

The goal is to have the marketing surface ready **before implementation work on the hackathon product begins**.

The actual hackathon project lives in a separate repository.

```text
contextlayer-web
│
└── Marketing website

contextlayer
│
├── Desktop application
├── QVAC integration
├── Meeting State Engine
├── Audio pipeline
├── Local inference
└── Benchmarks
```

Keeping both repositories separate is intentional.

---

# 2. Product in One Sentence

Context Layer is:

> **A local intelligence layer that helps you understand work conversations while they are happening.**

Do not describe Context Layer primarily as:

- a transcription tool,
- an AI note taker,
- a meeting recorder,
- a summarizer,
- a Granola clone,
- a chatbot.

Those capabilities may exist within the product, but they are not the core positioning.

The core product is:

> **Real-time comprehension of complex conversations.**

---

# 3. Core Product Idea

Traditional meeting assistants mainly answer:

> What was said?

Context Layer should answer:

> What does it mean?

And eventually:

> What should I understand, clarify, or ask right now?

The product listens to a work conversation and maintains a live mental model of what is happening.

It should eventually be capable of identifying:

- what is being discussed,
- what the speaker actually means,
- relevant entities,
- business processes,
- technical concepts,
- requirements,
- decisions,
- problems,
- contradictions,
- unresolved questions,
- possible solutions,
- action items,
- contextual explanations.

---

# 4. Main Use Case

The strongest initial use case is a meeting between:

- a client,
- a business owner,
- a consultant,
- an engineer,
- a technical team,
- or people with different levels of technical knowledge.

Example:

### Client says

> "When someone buys something, one of our employees checks whether we have stock, and then if everything is okay they put it into the other system."

Context Layer could interpret this as:

```text
Process detected

Incoming order
      ↓
Inventory verification
      ↓
Validation
      ↓
ERP entry

Potential requirements

- Inventory must be checked before order creation.
- Failed inventory checks require an exception path.
- ERP integration may be required.

Open questions

- What happens when there is insufficient inventory?
- Who performs the validation?
- Does the ERP expose an API?
```

The value comes from **understanding the underlying process**, not simply transcribing the sentence.

---

# 5. Product Capabilities

The landing should communicate the following capabilities.

## 5.1 Live Understanding

Context Layer follows a meeting while it happens and builds a continuously updated representation of the conversation.

Possible concepts:

```text
People
Topics
Systems
Processes
Claims
Requirements
Problems
Decisions
Open Questions
```

---

## 5.2 Business → Technical Translation

A non-technical person might say:

> "The manager looks at it before the accounting team sends it."

Context Layer might interpret:

```text
Possible technical interpretation

Approval workflow

Roles:
- Manager
- Accounting

States:
Pending
→ Approved
→ Processed

Potential requirements:
- Role-based approval
- Audit history
- Approval state
```

---

## 5.3 Technical → Human Translation

A senior engineer might say:

> "This probably needs idempotency."

Context Layer could privately explain:

```text
Idempotency

Meaning:
Running the same operation multiple times
should produce the same final result.

Why it matters here:
The same request may be received twice.

Without it:
Duplicate records could be created.
```

The explanation should always be contextual.

---

## 5.4 Contradiction Detection

Example:

### Earlier

> "Every purchase needs manager approval."

### Later

> "Purchases below $500 are processed automatically."

Context Layer could display:

```text
Possible contradiction

Earlier:
Every purchase requires approval.

Now:
Purchases below $500 are automatic.

Possible interpretation:
There may be an exception based on purchase amount.

Suggested question:
Do purchases below $500 bypass manager approval?
```

---

## 5.5 Suggested Questions

The product can surface missing context.

Example:

```text
Open question

The approval flow was explained,
but no rejection flow has been mentioned.

Suggested question:

"What happens after the manager rejects a purchase?"
```

---

## 5.6 Problem → Possible Solution

Example:

```text
Problem

Invoices are manually copied into the ERP.

Possible approach

Invoice
 ↓
Extraction
 ↓
Validation
 ↓
Exception handling
 ↓
Human approval
 ↓
ERP
```

These should always be presented as **possible approaches**, never as authoritative decisions.

---

# 6. Privacy Narrative

Privacy is one of the strongest parts of the Context Layer story.

Work meetings can contain:

- customer data,
- financial information,
- product strategy,
- company processes,
- infrastructure details,
- internal problems,
- confidential decisions.

Context Layer is being designed around local AI.

The messaging should emphasize:

> **Your conversations should not need to leave your computer in order to be understood.**

Good phrases:

```text
Private by design.

Your meetings. Your machine.

Understand conversations without sending them away.

Local intelligence for private conversations.
```

Avoid exaggerated claims such as:

```text
100% secure
Impossible to hack
Zero privacy risk
Military-grade AI
```

---

# 7. Primary Positioning

The preferred positioning is:

> **A local intelligence layer for conversations at work.**

Secondary explanation:

> Context Layer understands meetings while they happen, helping people detect requirements, contradictions, technical concepts, missing information, and actionable insights in near real time.

---

# 8. Hero

## Primary headline

```text
Understand the meeting
while you're still in it.
```

Preferred line break:

```text
Understand the meeting
while you're still in it.
```

Do not replace this headline casually.

It is currently the main product statement.

---

## Supporting copy

Recommended direction:

```text
Context Layer understands work conversations in real time,
turning messy discussions into requirements, explanations,
contradictions, questions, and actionable context.
```

Alternative shorter version:

```text
A private intelligence layer that helps you understand
complex work conversations as they happen.
```

---

## Primary CTA

For the hackathon version:

```text
See how it works
```

or:

```text
Watch the demo
```

Do not use:

```text
Start for free
Buy now
Choose plan
Get started
```

unless an actual product flow exists.

---

## Secondary CTA

```text
View on GitHub
```

Once the hackathon repository is public.

Before that exists, hide the button rather than linking to a placeholder.

---

# 9. Landing Information Architecture

Preferred page order:

```text
Navbar

Hero

Live Product Demonstration

Problem

Core Capabilities

Business ↔ Technical Translation

Contradiction Detection

Meeting State

Local / Private AI

How It Works

Use Cases

Built with QVAC

Hackathon / Team

Footer
```

Do not add sections simply to make the landing longer.

Every section must communicate something new.

---

# 10. Navbar

Desktop:

```text
Context Layer

Product
How it works
Privacy
Use cases

GitHub
```

Potential CTA:

```text
Watch demo
```

Mobile:

Use a compact menu.

Avoid a complex mega-menu.

The landing is a single-product website.

---

# 11. Hero Visual

The hero visual should immediately demonstrate that Context Layer is **not just a transcript**.

Recommended composition:

```text
┌──────────────────────────────────────────────────────┐
│ Meeting                                      14:32   │
│                                                      │
│ Client                                               │
│ "Usually the manager checks the purchase..."         │
│                                                      │
│ Engineer                                             │
│ "And after approval it goes into the ERP?"           │
│                                                      │
├──────────────────────────────────────────────────────┤
│ Context                                              │
│                                                      │
│ CURRENT PROCESS                                      │
│ Purchase → Approval → ERP                            │
│                                                      │
│ REQUIREMENT                                          │
│ Manager approval required before ERP entry           │
│                                                      │
│ OPEN QUESTION                                        │
│ Are there approval exceptions?                       │
└──────────────────────────────────────────────────────┘
```

The product UI should feel:

- calm,
- intelligent,
- contextual,
- professional,
- information-dense without being cluttered.

Avoid making it look like a generic chatbot.

---

# 12. Product UI Mental Model

Visual mockups should generally distinguish between:

### Conversation

What people literally said.

### Understanding

What Context Layer inferred.

Example:

```text
Conversation

Client
"We manually check every invoice."


Understanding

Problem
Manual invoice validation

Possible opportunity
Automated extraction + validation

Missing context
Monthly invoice volume
```

This visual separation is important.

---

# 13. Core Capability Cards

Recommended initial cards:

### Understand

```text
Know what the conversation is actually about,
not just what words were spoken.
```

### Translate

```text
Move between business language and technical language
without losing context.
```

### Connect

```text
Relate what is being said now to decisions,
claims, and requirements mentioned earlier.
```

### Detect

```text
Surface contradictions, ambiguity,
missing information, and unresolved questions.
```

### Remember

```text
Maintain a structured mental model
of the conversation as it evolves.
```

### Clarify

```text
Know what question could unlock
the missing information.
```

---

# 14. Signature Interaction

The landing should strongly communicate this loop:

```text
Listen
  ↓
Understand
  ↓
Structure
  ↓
Connect
  ↓
Intervene
```

This is one of the core conceptual representations of Context Layer.

It can be used as an animated section.

---

# 15. "What They Said / What It Means"

This should be one of the strongest visual sections.

Example:

## What they said

```text
"When the invoice arrives someone reviews it,
and once it's okay they load it manually."
```

## What Context Layer understands

```text
Workflow

Invoice received
→ Manual validation
→ Approval
→ ERP entry

Pain point
Manual data entry

Potential requirement
Approval must occur before ERP synchronization.

Missing information
ERP API availability.
```

This demonstrates the product better than generic marketing copy.

---

# 16. Contradiction Demo

Recommended interaction:

Show one statement.

Then another statement appears several seconds later.

```text
10:14

"Every purchase needs approval."
```

Then:

```text
10:27

"Small purchases go through automatically."
```

Context Layer then surfaces:

```text
Possible contradiction detected

Does purchase amount determine
whether approval is required?
```

This can be animated.

Do not make the animation depend on heavy 3D/WebGL.

---

# 17. Technical Translation Demo

Use both directions.

### Technical → Human

```text
Senior Engineer

"We'll need idempotency here."

Context Layer

Running this operation twice should not
create two different results.

Why it matters:
Duplicate events may be delivered.
```

### Business → Technical

```text
Client

"Someone has to check it before it goes through."

Context Layer

Possible technical interpretation:

Human approval workflow
+
role-based authorization.
```

---

# 18. Privacy Section

Recommended heading:

```text
Your meetings stay yours.
```

Possible supporting copy:

```text
Context Layer is designed around local inference.

Sensitive conversations should not need to be continuously
streamed to third-party AI providers just to become useful.
```

Recommended visual:

```text
Meeting
   ↓
Your Device
   ↓
Local AI
   ↓
Insights
```

Contrast with:

```text
Meeting
   ↓
External Cloud
```

Do not attack specific competitors by name.

---

# 19. QVAC Section

QVAC should appear as enabling infrastructure, not as the product itself.

Suggested heading:

```text
Powered locally by QVAC.
```

Suggested explanation:

```text
Context Layer uses QVAC by Tether as its local AI inference layer,
allowing transcription, reasoning, embeddings, retrieval,
and other intelligence tasks to run on-device.
```

Avoid presenting unsupported capabilities as completed if they are not implemented yet.

During pre-hackathon development, use wording like:

```text
Designed to run locally with QVAC.
```

After implementation is verified, wording can become:

```text
Runs locally with QVAC.
```

Never claim a feature works until it actually works in the hackathon repository.

---

# 20. Use Cases

Keep the list narrow.

Recommended:

## Client discovery

```text
Turn informal business explanations into
structured processes and requirements.
```

## Engineering meetings

```text
Understand unfamiliar technical concepts
without interrupting the conversation.
```

## Consulting

```text
Track processes, pain points,
contradictions, and unanswered questions.
```

## Product & operations

```text
Maintain a shared understanding of decisions,
dependencies, and business rules.
```

Do not expand this into twenty industries.

---

# 21. Target Audience

Initial users:

```text
Software engineers
Junior engineers
Consultants
Product managers
Business analysts
Technical sales teams
Founders
Implementation teams
```

The strongest early wedge is:

> **People participating in conversations where technical and business language collide.**

---

# 22. Tone of Voice

Context Layer should sound:

- intelligent,
- concise,
- calm,
- technical when necessary,
- confident without exaggeration,
- privacy-conscious,
- modern,
- professional.

Avoid AI cliché language.

Do not use:

```text
Revolutionary
Game-changing
Next-generation
Supercharge
Unlock the power of
AI-powered synergy
Transform your workflow forever
The future of meetings
10x your productivity
```

Prefer concrete language.

Bad:

```text
Revolutionize your meetings with next-generation AI.
```

Good:

```text
Understand what people mean while they're still talking.
```

---

# 23. Naming Rules

Canonical product name:

```text
Context Layer
```

Preferred repository:

```text
contextlayer-web
```

Code/package identifiers:

```text
contextlayer
```

Avoid inconsistent variations:

```text
ContextLayer
Contextlayer
Context-Layer
Context AI
ContextLayer AI
```

In prose always use:

```text
Context Layer
```

---

# 24. Visual Direction

The product should feel like a **serious intelligence tool**, not a consumer AI toy.

References conceptually:

```text
Linear
Granola
Raycast
Arc
Notion
Vercel
modern developer tooling
high-quality enterprise AI products
```

Do not clone any of them.

Desired characteristics:

- dark-first experience,
- strong typography,
- subtle depth,
- restrained borders,
- low-noise gradients,
- high information clarity,
- smooth transitions,
- crisp product mockups,
- minimal decorative elements.

Avoid:

- excessive neon,
- crypto aesthetics,
- random glowing spheres,
- giant gradients everywhere,
- AI brain imagery,
- robots,
- floating 3D blobs,
- excessive glassmorphism,
- cyberpunk visuals.

---

# 25. Color System

Until branding is finalized, keep the palette intentionally neutral.

Suggested semantic tokens:

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

Do not scatter arbitrary hex codes throughout components.

All colors should resolve through theme tokens.

---

# 26. Typography

Prefer a modern sans-serif suitable for technical products.

Requirements:

- excellent readability,
- strong lowercase,
- good numbers,
- usable at UI sizes,
- accessible weights.

Use at most:

```text
1 primary font
+
1 optional monospace font
```

Monospace should be reserved for:

- timestamps,
- structured data,
- technical labels,
- small UI metadata.

Do not make the entire site look like a terminal.

---

# 27. Layout

Use a consistent maximum content width.

Recommended conceptual structure:

```text
Page
└── Section
    └── Container
        └── Content
```

Every page section should use the same main container abstraction.

Avoid arbitrary independent widths.

Recommended desktop width:

```text
~1200–1280px
```

Do not hardcode layout values repeatedly.

---

# 28. Responsive Requirements

The landing must work at minimum on:

```text
360px
390px
768px
1024px
1280px
1440px+
```

No section may depend on horizontal scrolling.

Product mockups must degrade gracefully.

On mobile:

```text
2-column → 1-column

complex product UI → simplified representation

large animations → reduced version
```

Do not simply scale desktop mockups until they become unreadable.

---

# 29. Accessibility

Minimum requirements:

- semantic HTML,
- logical heading order,
- keyboard-accessible navigation,
- visible focus states,
- meaningful `alt` attributes,
- adequate contrast,
- buttons must actually be buttons,
- links must actually be links,
- support `prefers-reduced-motion`,
- do not communicate state through color alone.

Target:

```text
WCAG 2.1 AA where practical.
```

---

# 30. Motion

Animation should explain the product.

Good uses:

- transcript appearing,
- insight being generated,
- contradiction being connected,
- meeting state updating,
- subtle section reveals.

Bad uses:

- endless decorative motion,
- large parallax effects,
- scroll hijacking,
- animations that delay interaction.

Preferred rule:

> If removing an animation does not reduce understanding, it is optional.

---

# 31. Performance

Landing performance is important.

Targets:

```text
LCP < 2.5s
CLS < 0.1
INP < 200ms
```

Guidelines:

- prefer CSS over JS animation where possible,
- dynamically import expensive components,
- optimize images,
- avoid autoplay video above the fold,
- do not ship large libraries for trivial effects,
- avoid WebGL unless it provides clear product value,
- minimize client components,
- prefer Server Components when interaction is unnecessary.

---

# 32. Technical Stack

Preferred stack:

```text
Next.js
TypeScript
React
Tailwind CSS
Motion
```

Package manager:

```text
pnpm
```

Deployment:

```text
Vercel
```

Linting / formatting:

```text
ESLint
Prettier
```

Icons:

Use one consistent icon library.

Recommended:

```text
Lucide
```

Do not mix multiple icon systems.

---

# 33. Next.js Rules

Use:

```text
App Router
```

Default to Server Components.

Add `"use client"` only when required for:

- state,
- effects,
- browser APIs,
- interactive animation.

Do not turn entire pages into Client Components unnecessarily.

---

# 34. TypeScript Rules

Use strict TypeScript.

Avoid:

```ts
any
```

unless there is a documented reason.

Prefer explicit component props.

Example:

```ts
interface FeatureCardProps {
  title: string
  description: string
  icon?: React.ReactNode
}
```

Do not create unnecessary abstractions for components used once.

---

# 35. Styling Rules

Use Tailwind consistently.

Avoid:

```text
inline style objects
CSS modules
styled-components
Tailwind
```

all mixed together.

If custom global CSS is required, keep it inside the global styling layer.

Use semantic reusable classes/components where repetition becomes meaningful.

---

# 36. Component Architecture

Recommended:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── container.tsx
│   │   └── section.tsx
│   │
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── product-demo.tsx
│   │   ├── problem.tsx
│   │   ├── capabilities.tsx
│   │   ├── translation-demo.tsx
│   │   ├── contradiction-demo.tsx
│   │   ├── privacy.tsx
│   │   ├── how-it-works.tsx
│   │   ├── use-cases.tsx
│   │   └── qvac.tsx
│   │
│   ├── product/
│   │   ├── meeting-window.tsx
│   │   ├── transcript.tsx
│   │   ├── insight-card.tsx
│   │   ├── contradiction-card.tsx
│   │   ├── requirement-card.tsx
│   │   └── technical-explanation.tsx
│   │
│   └── ui/
│       ├── button.tsx
│       ├── badge.tsx
│       └── ...
│
├── lib/
│   ├── constants.ts
│   └── utils.ts
│
├── content/
│   └── landing.ts
│
└── public/
```

Do not create deeply nested directories without a reason.

---

# 37. Content Architecture

Marketing text should not be duplicated across components.

Whenever practical, centralize reusable copy.

Example:

```ts
export const product = {
  name: "Context Layer",
  tagline: "Understand the meeting while you're still in it."
}
```

For repeated cards:

```ts
export const capabilities = [
  {
    title: "Understand",
    description: "..."
  }
]
```

This makes copy changes easier across multiple contributors.

---

# 38. Product Mockup Components

Product mockups should be implemented as reusable components rather than screenshots whenever practical.

Examples:

```text
<MeetingWindow />
<TranscriptMessage />
<InsightCard />
<RequirementCard />
<ContradictionCard />
<ExplanationCard />
```

This gives us:

- responsive behavior,
- animated demos,
- easy copy changes,
- reusable hackathon visuals.

Screenshots should only be used once the real product exists.

---

# 39. No Fake Product Claims

This is critical.

Marketing may illustrate the intended product behavior, but contributors must clearly distinguish between:

```text
conceptual UI
```

and:

```text
implemented functionality
```

Before the hackathon implementation exists, do not write:

```text
Context Layer detects contradictions in real time.
```

Prefer:

```text
Context Layer is designed to detect contradictions
while conversations are happening.
```

After the capability works reliably, copy can be strengthened.

No fake:

- user counts,
- testimonials,
- customer logos,
- benchmark results,
- latency numbers,
- security certifications,
- enterprise customers.

---

# 40. Hackathon Boundary

This repository must not accidentally become the implementation repository.

Before the official hackathon build begins, contributors should NOT implement here:

```text
QVAC inference
real meeting transcription
Meeting State Engine
contradiction inference
RAG pipeline
embedding pipeline
audio processing backend
production local runtime
real benchmark suite
```

Mock data is allowed for visual development.

Example:

```ts
const mockInsights = [
  {
    type: "requirement",
    text: "Manager approval required before ERP entry"
  }
]
```

The landing may simulate the experience visually.

The real implementation belongs in:

```text
contextlayer
```

---

# 41. Mock Data

Mock meeting data should feel realistic.

Use one consistent fictional scenario across the landing.

Recommended scenario:

```text
Company:
fictional SMB

Problem:
manual purchasing process

Actors:
Client
Engineer
Manager
Accounting

Systems:
Internal purchasing system
ERP

Process:
Purchase
→ Review
→ Manager approval
→ ERP
```

This allows several sections to refer to the same conversation.

Do not create random unrelated examples for every section.

---

# 42. Suggested Demo Script

Use this canonical mock conversation.

### Statement 1

```text
Client

"When a purchase comes in, someone reviews it
and then the manager approves it before accounting
loads it into the ERP."
```

Context Layer:

```text
Process detected

Purchase
→ Review
→ Manager approval
→ Accounting
→ ERP
```

---

### Statement 2

```text
Client

"Purchases below $500 actually go through automatically."
```

Context Layer:

```text
Possible contradiction

Earlier:
Manager approval is required.

Now:
Some purchases are automatic.

Suggested question:
Do purchases below $500 bypass manager approval?
```

---

### Statement 3

```text
Engineer

"We'll need to make that operation idempotent."
```

Context Layer:

```text
Idempotency

Running the same operation more than once
should not create duplicate results.

Why it matters:
The ERP request could potentially be sent twice.
```

This scenario should be reused throughout mockups.

---

# 43. SEO

Initial metadata:

```text
Title:
Context Layer — Understand the meeting while you're still in it

Description:
A local intelligence layer for understanding complex work conversations in near real time.
```

OpenGraph assets should eventually exist.

Required:

```text
favicon
og:image
title
description
canonical URL
```

Do not keyword-stuff the page.

---

# 44. Git Workflow

Recommended branches:

```text
main
dev
feature/*
fix/*
```

Examples:

```text
feature/hero
feature/product-demo
feature/privacy-section
fix/mobile-navbar
```

Do not work directly on `main`.

---

# 45. Ownership

With four contributors, divide by bounded surfaces rather than everyone touching the same files.

Example:

```text
Person A
Hero + Navbar + global shell

Person B
Product mockups + live demo

Person C
Capabilities + translation + contradictions

Person D
Privacy + QVAC + responsive QA + deployment
```

Shared foundational files should be changed carefully.

---

# 46. Pull Requests

Every PR should answer:

```text
What changed?

Why?

What sections/components are affected?

Does mobile still work?

Are there visual regressions?

Did this add a dependency?

Does this modify shared tokens/components?
```

For visual work, screenshots are strongly encouraged.

---

# 47. Commit Style

Prefer small meaningful commits.

Examples:

```text
feat: add hero meeting intelligence demo

feat: implement contradiction card

feat: add responsive navigation

refactor: extract shared section container

fix: prevent product mockup overflow on mobile

docs: update landing implementation guidelines
```

Avoid:

```text
update
changes
fix stuff
wip final
final-final
```

---

# 48. Agent Rules

Any AI coding agent working in this repository must follow these rules.

## Before coding

Read:

```text
README.md
package.json
existing component patterns
global styles
```

Do not immediately rewrite project architecture.

---

## Agents MUST

- preserve the Context Layer positioning,
- use existing design tokens,
- reuse existing primitives,
- maintain responsive behavior,
- preserve strict TypeScript,
- follow established directory conventions,
- keep changes scoped,
- test their work,
- inspect existing components before creating duplicates.

---

## Agents MUST NOT

- redesign the entire site without instruction,
- invent product capabilities,
- invent benchmark numbers,
- invent users or customers,
- add cloud AI services,
- implement the actual hackathon backend,
- introduce Kubernetes or backend infrastructure,
- add unnecessary dependencies,
- replace the design system,
- change the canonical product name,
- change the hero positioning casually,
- create fake testimonials,
- create fake logos,
- claim unfinished functionality is operational.

---

# 49. Agent Decision Hierarchy

When uncertain, use this priority:

```text
1. Correct product positioning
2. Existing repository conventions
3. Simplicity
4. Performance
5. Accessibility
6. Visual polish
7. Cleverness
```

Never sacrifice the first five for an impressive animation.

---

# 50. Dependency Policy

Before adding a package, ask:

```text
Can this be done with the existing stack?
```

Good reason:

```text
We need a mature animation primitive that would otherwise
require significant custom implementation.
```

Bad reason:

```text
The package makes a gradient.
```

Avoid dependency inflation.

---

# 51. Environment Variables

The landing should ideally require **no secrets**.

Do not include:

```text
OpenAI keys
Anthropic keys
QVAC secrets
database credentials
```

If analytics are later added, document them separately.

`.env.example` must contain only safe placeholders.

---

# 52. Security

The landing is static/public marketing infrastructure.

Do not:

- expose secrets,
- add unnecessary server endpoints,
- commit `.env`,
- inject arbitrary HTML,
- add third-party scripts without review.

Any analytics provider must be explicitly approved.

---

# 53. Testing

Minimum before merging:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

If tests exist:

```bash
pnpm test
```

Every major visual section should also be manually checked at mobile and desktop widths.

---

# 54. Definition of Done

A landing feature is done when:

- [ ] It matches Context Layer's positioning.
- [ ] It works on desktop.
- [ ] It works on mobile.
- [ ] It has no horizontal overflow.
- [ ] Typography follows the design system.
- [ ] It uses existing tokens.
- [ ] It does not invent product claims.
- [ ] It has accessible interactive elements.
- [ ] It respects reduced motion where applicable.
- [ ] `pnpm lint` passes.
- [ ] `pnpm typecheck` passes.
- [ ] `pnpm build` passes.
- [ ] No unnecessary dependency was introduced.
- [ ] No backend/hackathon implementation leaked into this repo.

---

# 55. Initial Implementation Order

Recommended order:

## Phase 1 — Foundation

```text
Next.js project
TypeScript
Tailwind
Fonts
Theme tokens
Container
Section abstraction
Navbar
Footer
```

---

## Phase 2 — Product Story

```text
Hero
Problem
Product mockup
```

---

## Phase 3 — Core Intelligence

```text
Business → Technical
Technical → Human
Contradiction detection
Suggested questions
```

---

## Phase 4 — Architecture Story

```text
Listen
→ Understand
→ Structure
→ Connect
→ Intervene

Local AI / privacy
QVAC
```

---

## Phase 5 — Polish

```text
Animations
Responsive refinement
Accessibility
SEO
Metadata
OpenGraph
Performance
```

---

# 56. Do Not Overbuild

The landing exists to make the product immediately understandable.

Do not add for the initial version:

```text
Authentication
Dashboard
Pricing
Blog CMS
Documentation platform
User accounts
Database
Admin panel
Newsletter infrastructure
Complex analytics
Internationalization
```

unless explicitly requested later.

---

# 57. Success Criteria

A visitor should understand within approximately five seconds:

### What is it?

```text
A live intelligence layer for work conversations.
```

### What does it do differently?

```text
It understands meaning and context,
not just transcription.
```

### Why is it interesting?

```text
It can identify requirements, contradictions,
technical concepts, missing information,
and useful questions during the meeting.
```

### Why local?

```text
Sensitive conversations remain on the user's device.
```

---

# 58. North Star

Every design, copy, animation, and implementation decision should reinforce one idea:

> **Context Layer helps you understand the meeting while you're still in it.**

If a section does not make that idea clearer, it probably does not belong on the page.

---

# 59. Current Project Status

```text
Product: Context Layer

Stage:
Hackathon prototype

Landing repository:
contextlayer-web

Core implementation repository:
contextlayer

Primary sponsor technology:
QVAC by Tether

Primary principle:
Local-first meeting intelligence

Core loop:
Listen → Understand → Structure → Connect → Intervene
```

---

# 60. Final Rule for Contributors and Agents

When making a decision, do not ask:

> "How do we make this look more like an AI startup?"

Ask:

> **"Does this make it easier to understand what Context Layer actually does?"**

Clarity wins.
