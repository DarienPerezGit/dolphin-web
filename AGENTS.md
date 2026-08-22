# Contributor and agent instructions

## Read first

1. [README.md](README.md) for repository scope and current scaffold status.
2. [docs/PRODUCT.md](docs/PRODUCT.md) for positioning, approved claims, privacy language, and the hackathon boundary.
3. [docs/DESIGN.md](docs/DESIGN.md) for visual, responsive, accessibility, and motion requirements.
4. [docs/ENGINEERING.md](docs/ENGINEERING.md) for architecture, quality, security, and collaboration rules.
5. Once it exists, inspect `package.json`, global styles, and nearby component patterns before changing implementation.

## Decision hierarchy

When requirements compete, prioritize:

1. Correct product positioning
2. Existing repository conventions
3. Simplicity
4. Performance
5. Accessibility
6. Visual polish
7. Cleverness

Never sacrifice the first five for an impressive animation.

## Must

- Preserve the canonical name **Dolphin** and the hero positioning.
- Treat this repository as the marketing and visual-identity surface only.
- Use existing tokens, primitives, patterns, and strict TypeScript once the app exists.
- Keep changes scoped; inspect existing components before creating duplicates.
- Keep the landing responsive, accessible, and performance-aware.
- Distinguish conceptual mockups or designed behavior from verified product functionality.
- Centralize repeated copy and use one consistent icon system when implementation begins.
- Run focused available checks and manually inspect affected visual work at mobile and desktop widths.

## Must not

- Redesign the site, design system, product positioning, or hero statement without explicit direction.
- Invent capabilities, benchmark numbers, users, customers, testimonials, logos, certifications, or operational claims.
- Add cloud AI services, secrets, analytics, third-party scripts, unnecessary dependencies, or backend infrastructure without explicit approval.
- Implement QVAC inference, transcription, meeting intelligence, RAG/embedding/audio pipelines, benchmarks, or any hackathon backend here.
- Add an application scaffold, package dependencies, or implementation commands unless the task explicitly authorizes it.
- Modify `.gitignore`, Git configuration, skill files, or unrelated tracked/untracked files.

## Validation

The current repository has no application scaffold, so implementation commands are unavailable. When a scaffold later provides them, run the focused commands it defines; the expected baseline is:

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm test # when configured
```

A visual feature also needs responsive checks, no horizontal overflow, accessible interaction semantics, visible focus, adequate contrast, and reduced-motion support where applicable.

## Scope boundary

The real Dolphin product lives in the separate `dolphin` repository. This repository may use realistic mock data and simulate the intended experience visually, but it must not claim unverified functionality works.

## Skill routing

Load the applicable skill before work and follow the exact path supplied by the task orchestrator; do not infer a registry fallback.

| Work area | Skill routing | Use it for |
| --- | --- | --- |
| Engineering | `vercel-react-best-practices`, `vercel-composition-patterns` | React/Next.js implementation, component boundaries, and composition decisions |
| Design | `frontend-design` | Visual direction, responsive UI, and accessibility decisions |
| Motion | `animate`, `review-animations` | Meaningful motion and animation review |
| Validation | `web-design-guidelines`, `agent-browser` | UI guidance and browser-based visual checks |
| Final polish | `impeccable` | Final visual and interaction refinement |
| Review | Available review/code-review skill | Focused implementation review |
| Documentation | Cognitive documentation design guidance, when available | Concise, reviewable documentation changes |

Use only skills that are available and relevant to the task. This table routes work; [Product](docs/PRODUCT.md), [Design](docs/DESIGN.md), and [Engineering](docs/ENGINEERING.md) remain the source of truth for requirements.
