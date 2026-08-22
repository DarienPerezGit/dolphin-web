# Dolphin — Web

> **Understand the meeting while you're still in it.**

This repository is the future public landing page and visual identity for **Dolphin**: a local intelligence layer designed to help people understand work conversations while they happen.

## What this repository contains

- Product positioning and marketing copy
- Landing-page design direction and responsive requirements
- Product mockups, visual demos, animation guidance, and public assets
- Engineering conventions for the eventual marketing site
- Hackathon presentation and public-documentation material

It does **not** contain the Dolphin product implementation: the meeting intelligence engine, QVAC integration, transcription or audio pipelines, local inference runtime, retrieval/embedding work, benchmarks, or backend services. Those belong in the separate `dolphin` repository.

## Documentation map

Read these documents before changing the site:

| Document | Purpose |
| --- | --- |
| [Product brief](docs/PRODUCT.md) | Positioning, audience, approved claims, capabilities, scenarios, demo script, and hackathon boundary |
| [Design system](docs/DESIGN.md) | Visual direction, tokens, layout, mockups, accessibility, motion, and visual constraints |
| [Mock-data contract](docs/MOCK_DATA.md) | Canonical typed mock-data schema and SMB purchasing scenario specification |
| [Acceptance gate](docs/ACCEPTANCE.md) | Observable evidence for responsive, accessibility, contrast, performance, and Vercel preview release |
| [Engineering guide](docs/ENGINEERING.md) | Intended stack, architecture, performance, scripts, quality, security, and collaboration rules |
| [Agent instructions](AGENTS.md) | Operational reading order, decision hierarchy, scope rules, validation, and skill routing |

These documents preserve the repository's product, design, and engineering source of truth. Do not casually alter positioning, claims, or scope boundaries.

## Current status

The application scaffold does not exist yet. In particular, this repository currently has no `package.json`, source tree, or configured application commands. The stack below is **intended**, not installed or verified.

| Area | Intended choice |
| --- | --- |
| Framework | Next.js with App Router |
| Language and UI | Strict TypeScript and React |
| Styling and motion | Tailwind CSS and Motion |
| Icons and fonts | Lucide, Geist (primary), and optional Geist Mono |
| Tooling | pnpm, ESLint, and Prettier |
| Deployment | Vercel |

## How to run it

There is no runnable app yet. After an approved application scaffold exists, use the scripts defined by that scaffold. The expected quality commands are:

```bash
pnpm lint
pnpm typecheck
pnpm build
# Run this when the scaffold provides tests:
pnpm test
```

Do not infer additional commands or install dependencies from this README.

## Intended structure

The eventual site is expected to follow this high-level structure:

```text
src/
  app/          # App Router entry points and global styles
  components/   # layout, landing sections, product mockups, and UI primitives
  content/      # centralized marketing copy
  lib/          # constants and utilities
public/         # static assets
docs/           # product, design, and engineering source of truth
```

See [Engineering](docs/ENGINEERING.md#source-and-content-structure) for the full proposed composition.

## Quick contributor checklist

Before submitting a landing change:

- Read [AGENTS.md](AGENTS.md), then the relevant product, design, and engineering guidance.
- Keep Dolphin positioned as real-time comprehension, not merely transcription or a chatbot.
- Present conceptual behavior as designed or illustrative until it is verified in the implementation repository.
- Preserve responsive, accessible, performant behavior.
- Do not add backend or hackathon product implementation here.
- Run available focused checks; once scaffolding exists, run the quality commands above.

## Product story at a glance

The landing should demonstrate a distinction between **conversation** (what participants literally said) and **understanding** (the processes, requirements, contradictions, questions, and explanations inferred from it). The intended story progresses through:

```text
Listen → Understand → Structure → Connect → Intervene
```

Use realistic, consistent mock data for visual demonstrations. Until functionality is verified in the separate product repository, present these examples as conceptual or designed behavior, never as completed product claims.

## Contributor boundaries

This repository is intentionally narrow. It supports the public marketing surface, including landing-page implementation once authorized, product mockups, visual demos, SEO, animations, responsive behavior, and hackathon presentation assets.

It must not absorb the real product work:

- QVAC inference or any local AI runtime
- Meeting transcription, audio processing, or a Meeting State Engine
- Contradiction inference, retrieval, embeddings, or benchmark suites
- Backend infrastructure, cloud AI services, secrets, databases, or server endpoints

Mock data is permitted for visual development. The actual product implementation belongs in `dolphin`.

## Documentation workflow

Use progressive disclosure rather than duplicating decisions across files:

1. Start here for scope, status, and the documentation map.
2. Consult [Product](docs/PRODUCT.md) before changing copy, claims, scenarios, privacy language, or information architecture.
3. Consult [Design](docs/DESIGN.md) before changing visual direction, tokens, layout, mockups, motion, or accessibility.
4. Consult [Engineering](docs/ENGINEERING.md) before adding implementation, dependencies, scripts, or deployment work.
5. Follow [AGENTS.md](AGENTS.md) for operational contributor rules and validation expectations.

## Current implementation constraints

Do not add a package, tool, or service simply to make an effect easier. Any future dependency needs a clear implementation justification and must fit the intended stack. The marketing site should ideally require no secrets; analytics or third-party scripts require explicit approval.

Once an app exists, default to a lightweight, accessible, responsive implementation. Prefer reusable mockup components and centralized copy over screenshots or duplicated strings. Use the quality commands supplied by the scaffold, then manually verify major visual sections at mobile and desktop widths.

## Landing guardrails

The initial page is a single-product story, not a platform. Keep the navigation compact and make every section communicate something new. Do not add sections simply to make the landing longer.

Avoid premature product surfaces such as:

- Authentication, accounts, dashboards, or an admin panel
- Pricing, checkout, or subscription flows
- A blog CMS or documentation platform
- Newsletter infrastructure, complex analytics, or internationalization

The visual direction is white-first, calm, and information-clear. Dark surfaces may provide secondary contrast, but must not define the experience. Avoid neon, cyberpunk, crypto, excessive glassmorphism, robots, AI-brain imagery, and generic chatbot styling. Use Geist as the primary font and Geist Mono only for optional technical metadata. See [Design](docs/DESIGN.md) for the complete visual and interaction constraints.

## Before implementation begins

An approved scaffold should establish the intended toolchain and source conventions before feature work starts. Build the foundation first: global tokens, fonts, shared container and section primitives, navigation, and footer. Then establish the product story and mockups before polishing animation, SEO, OpenGraph metadata, and performance.

Until that scaffold is approved, this repository is documentation-only. Do not treat the intended stack, directory sketch, or example commands as present infrastructure.

## Maintainer check

Before starting application work, confirm that the task explicitly authorizes a scaffold, dependencies, and implementation files. Otherwise, keep the change within the documentation surfaces described above.

## North star

Every decision should make one idea clearer:

> **Dolphin helps you understand the meeting while you're still in it.**
