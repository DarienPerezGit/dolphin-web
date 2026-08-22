# Dolphin engineering guide

This document defines the intended engineering direction for the Dolphin marketing site. The app scaffold is not present yet, so these are requirements for future implementation—not evidence of installed packages, runnable scripts, or completed functionality.

## Intended stack

| Concern | Intended choice |
| --- | --- |
| Framework | Next.js with App Router |
| UI | React |
| Language | Strict TypeScript |
| Styling | Tailwind CSS |
| Motion | Motion |
| Icons | Lucide; use one consistent icon system |
| Fonts | Geist (primary); Geist Mono (optional monospace) |
| Package manager | pnpm |
| Lint/format | ESLint and Prettier |
| Deployment | Vercel |

Do not mix icon systems or add dependencies without a documented need. Geist is the primary UI font; use Geist Mono only when monospace improves timestamps, structured data, technical labels, or small metadata.

## Initial scope prohibitions

These are intended rules for future implementation, not evidence of installed tooling or existing application capabilities. Initially, do not add a backend, database, CMS, WebGL, Three.js, GSAP, or unnecessary dependencies. Preserve the marketing-site boundary unless a task explicitly authorizes a change.

## Next.js, React, and TypeScript rules

Use the App Router. Default to Server Components; add `"use client"` only for state, effects, browser APIs, or interactive animation. Never turn whole pages into Client Components without a need.

Use strict TypeScript and avoid `any` except for a documented reason. Prefer explicit component props:

```ts
interface FeatureCardProps {
  title: string
  description: string
  icon?: React.ReactNode
}
```

Do not create abstractions for components used once. Inspect existing patterns before introducing new components or architecture.

## Styling and composition

Use Tailwind consistently. Do not mix inline style objects, CSS modules, styled-components, and Tailwind indiscriminately. Keep any necessary custom global CSS in the global styling layer. Extract semantic reusable classes or components only when repetition is meaningful.

### Source and content structure

The following is the proposed structure after the scaffold exists:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── container.tsx
│   │   └── section.tsx
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
│   ├── product/
│   │   ├── meeting-window.tsx
│   │   ├── transcript.tsx
│   │   ├── insight-card.tsx
│   │   ├── contradiction-card.tsx
│   │   ├── requirement-card.tsx
│   │   └── technical-explanation.tsx
│   └── ui/
│       ├── button.tsx
│       ├── badge.tsx
│       └── ...
├── lib/
│   ├── constants.ts
│   └── utils.ts
├── content/
│   └── landing.ts
└── public/
```

Do not introduce deeply nested directories without a reason. Reuse layout primitives such as a shared container and section. Implement product mockups as reusable components rather than screenshots whenever possible.

Centralize reusable marketing copy instead of duplicating it across components. For example, a product object can contain the canonical name and tagline, and repeated capabilities should come from structured data. This makes copy changes safer for multiple contributors.

## Performance and client boundaries

Targets are LCP under 2.5 seconds, CLS below 0.1, and INP below 200 milliseconds. Prefer Server Components where no interaction is needed; minimize client components. Prefer CSS animation, dynamically import expensive components, optimize images, avoid autoplay video above the fold, avoid large libraries for trivial effects, and avoid WebGL unless it produces clear product value.

## Scripts and validation

The current repository has no application scaffold, so no project commands are currently available. Once the scaffold defines them, the minimum merge checks are:

```bash
pnpm lint
pnpm typecheck
pnpm build
# If tests exist:
pnpm test
```

Manually review every major visual section at mobile and desktop widths. A landing feature is complete only when it:

- matches Dolphin positioning;
- works on desktop and mobile without horizontal overflow;
- follows typography and token conventions;
- makes no unsupported product claim;
- provides accessible interactions and reduced-motion behavior where applicable;
- passes the available lint, typecheck, build, and test commands;
- introduces no unnecessary dependency; and
- keeps backend and hackathon product implementation out of this repository.

## Dependencies, environment, and security

Before adding a package, ask whether the existing intended stack can do the work. A mature animation primitive that avoids significant custom implementation can be justified; a package merely to create a gradient is not. Avoid dependency inflation.

The landing should ideally require no secrets. Do not add OpenAI keys, Anthropic keys, QVAC secrets, database credentials, or other credentials. If analytics are later proposed, document them separately and obtain explicit approval; an `.env.example` may contain only safe placeholders.

This is public marketing infrastructure. Do not expose secrets, add unnecessary server endpoints, commit `.env`, inject arbitrary HTML, or add third-party scripts without review.

## Collaboration and delivery

Use `main`, `dev`, `feature/*`, and `fix/*` branches; do not work directly on `main`. Examples include `feature/hero`, `feature/product-demo`, `feature/privacy-section`, and `fix/mobile-navbar`.

Divide work by bounded surfaces. A four-person split may assign hero/navbar/global shell; product mockups/live demo; capabilities/translation/contradictions; and privacy/QVAC/responsive QA/deployment. Change shared foundations carefully.

Keep commits small and meaningful, for example:

```text
feat: add hero meeting intelligence demo
feat: implement contradiction card
feat: add responsive navigation
refactor: extract shared section container
fix: prevent product mockup overflow on mobile
docs: update landing implementation guidelines
```

Avoid vague messages such as `update`, `changes`, `fix stuff`, `wip final`, or `final-final`.

Every pull request should state what changed and why, affected sections/components, mobile status, visual regressions, dependency additions, and changes to shared tokens/components. Screenshots are strongly encouraged for visual work.

## Recommended implementation order

1. **Foundation** — Next.js project, TypeScript, Tailwind, fonts, theme tokens, container/section abstractions, navbar, and footer.
2. **Product story** — hero, problem, and product mockup.
3. **Core intelligence story** — business-to-technical translation, technical-to-human translation, contradiction detection, and suggested questions.
4. **Architecture story** — Listen → Understand → Structure → Connect → Intervene; local AI/privacy; QVAC.
5. **Polish** — animations, responsive refinement, accessibility, SEO/metadata/OpenGraph, and performance.

Keep the initial landing focused. Do not add authentication, dashboards, pricing, CMSs, user accounts, databases, admin panels, newsletter infrastructure, complex analytics, or internationalization unless explicitly requested.
