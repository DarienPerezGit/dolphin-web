# Domain Docs

How engineering skills should consume this repository's domain documentation.

## Before exploring, read these

- **`CONTEXT.md`** at the repository root, or
- **`CONTEXT-MAP.md`** at the repository root if it exists.
- **`docs/adr/`** — read ADRs that touch the area you are about to work in.

If these files do not exist, proceed silently. Do not suggest creating them
upfront. Domain documentation is created lazily when terms or decisions are
actually resolved.

## File structure

This is a single-context repository:

```text
/
├── CONTEXT.md
├── docs/adr/
└── src/
```

## Use the glossary vocabulary

When naming a domain concept in an issue title, proposal, hypothesis, or test,
use the term defined in `CONTEXT.md`. If the concept is not there, reconsider
the terminology or record the gap for domain modeling.

## Flag ADR conflicts

If output contradicts an existing ADR, surface it explicitly rather than
silently overriding it.
