# Dolphin product brief

Dolphin is a **local intelligence layer for conversations at work**. Its job is to help people understand complex conversations while they are happening—not merely record, transcribe, summarize, or chat about them afterward.

## Product frame

| Topic | Decision |
| --- | --- |
| Canonical name | **Dolphin** in prose; `dolphin` for code/package identifiers |
| Landing repository | `dolphin-web` (this repository) |
| Product repository | `dolphin` (separate) |
| Stage | Hackathon prototype; the marketing surface is prepared before product implementation begins |
| Core loop | Listen → Understand → Structure → Connect → Intervene |
| Primary principle | Local-first meeting intelligence |
| Sponsor technology | QVAC by Tether |

Avoid stale variants such as `DolphinWeb`, `Dolphin-Web`, `Dolphin AI`, and `DolphinAI`.

## Positioning

### The one-sentence product statement

> **A local intelligence layer that helps you understand work conversations while they are happening.**

The core promise is **real-time comprehension of complex conversations**. Dolphin should not primarily be described as a transcription tool, AI note taker, meeting recorder, summarizer, Granola clone, or chatbot. Those may be supporting capabilities; they are not the product's point.

Traditional meeting assistants ask, “What was said?” Dolphin is designed to ask, “What does it mean?” and eventually, “What should I understand, clarify, or ask right now?” It maintains a live mental model of a work conversation: topics, entities, processes, claims, requirements, decisions, problems, contradictions, unresolved questions, possible solutions, action items, and contextual explanations.

### North star and success test

> **Dolphin helps you understand the meeting while you're still in it.**

Within roughly five seconds, a visitor should understand:

1. It is a live intelligence layer for work conversations.
2. It understands meaning and context rather than just transcription.
3. It is designed to identify requirements, contradictions, technical concepts, missing information, and useful questions during a meeting.
4. Its local-first approach keeps sensitive conversations on the user's device.

If a section, design, copy choice, or animation does not clarify that idea, it likely does not belong.

## Problem and primary scenario

The strongest initial scenario is a meeting involving a client, business owner, consultant, engineer, technical team, or people with different technical knowledge. A person might say:

> “When someone buys something, one of our employees checks whether we have stock, and then if everything is okay they put it into the other system.”

The intended understanding is more useful than a literal transcript:

```text
Process detected
Incoming order → Inventory verification → Validation → ERP entry

Potential requirements
- Inventory must be checked before order creation.
- Failed inventory checks require an exception path.
- ERP integration may be required.

Open questions
- What happens when inventory is insufficient?
- Who performs validation?
- Does the ERP expose an API?
```

The value is understanding the underlying process, not repeating the sentence.

## Intended capabilities

These are product and landing-story capabilities. Until verified in the product repository, frame them as intended or conceptual rather than operational claims.

### Live understanding

Follow a meeting as it happens and continuously update a structured representation of people, topics, systems, processes, claims, requirements, problems, decisions, and open questions.

### Business → technical translation

A statement such as “The manager looks at it before the accounting team sends it” may be interpreted as an approval workflow with manager and accounting roles, pending/approved/processed states, role-based approval, audit history, and approval state.

### Technical → human translation

If an engineer says “This probably needs idempotency,” Dolphin may privately explain that repeating the same operation should produce the same final result, why duplicate requests matter here, and that duplicate records could result without it. Explanations must be contextual.

### Contradiction detection

When “Every purchase needs manager approval” is followed by “Purchases below $500 are processed automatically,” surface a **possible** contradiction and a clarifying question: “Do purchases below $500 bypass manager approval?”

### Suggested questions

If the approval flow is explained but rejection is absent, surface the missing context and ask: “What happens after the manager rejects a purchase?”

### Problem → possible approach

For manual invoice entry, illustrate a possible path—extraction, validation, exception handling, human approval, then ERP—not an authoritative implementation decision.

## Audience and use cases

Initial users include software and junior engineers, consultants, product managers, business analysts, technical sales teams, founders, and implementation teams. The early wedge is **people in conversations where technical and business language collide**.

Keep use cases narrow:

| Use case | Intended value |
| --- | --- |
| Client discovery | Turn informal business explanations into structured processes and requirements. |
| Engineering meetings | Understand unfamiliar technical concepts without interrupting the conversation. |
| Consulting | Track processes, pain points, contradictions, and unanswered questions. |
| Product and operations | Maintain shared understanding of decisions, dependencies, and business rules. |

Do not expand this into a long industry list.

## Approved messaging and claims

### Hero

Primary headline, including the preferred break:

```text
Understand the meeting
while you're still in it.
```

Do not casually replace it. Supporting copy may use either direction:

```text
Dolphin understands work conversations in real time,
turning messy discussions into requirements, explanations,
contradictions, questions, and actionable context.
```

```text
A private intelligence layer that helps you understand
complex work conversations as they happen.
```

For the hackathon landing, use “See how it works” or “Watch the demo.” Do not use “Start for free,” “Buy now,” “Choose plan,” or “Get started” without a real product flow. Show “View on GitHub” only after the hackathon repository is public; otherwise hide it rather than linking to a placeholder.

### Capability card copy

- **Understand** — Know what the conversation is actually about, not just what words were spoken.
- **Translate** — Move between business language and technical language without losing context.
- **Connect** — Relate what is being said now to decisions, claims, and requirements mentioned earlier.
- **Detect** — Surface contradictions, ambiguity, missing information, and unresolved questions.
- **Remember** — Maintain a structured mental model of the conversation as it evolves.
- **Clarify** — Know what question could unlock missing information.

### Tone

Sound intelligent, concise, calm, technical when necessary, confident without exaggeration, privacy-conscious, modern, and professional. Prefer concrete language such as “Understand what people mean while they're still talking.” Avoid AI clichés: “Revolutionary,” “Game-changing,” “Next-generation,” “Supercharge,” “Unlock the power of,” “AI-powered synergy,” “Transform your workflow forever,” “The future of meetings,” and “10x your productivity.”

### No unsupported claims

Before functionality is verified, say “Dolphin is designed to detect contradictions while conversations are happening,” not “Dolphin detects contradictions in real time.” Never invent user counts, testimonials, customer logos, benchmark results, latency numbers, security certifications, or enterprise customers.

## Privacy and local AI narrative

Work meetings can contain customer data, financial information, strategy, processes, infrastructure details, internal problems, and confidential decisions. The product is designed around local AI:

> **Your conversations should not need to leave your computer in order to be understood.**

Approved directions include “Private by design,” “Your meetings. Your machine,” “Understand conversations without sending them away,” and “Local intelligence for private conversations.” Do not claim “100% secure,” “Impossible to hack,” “Zero privacy risk,” or “Military-grade AI.”

For the QVAC story, QVAC is enabling infrastructure, not the product. Before verified implementation, say “Designed to run locally with QVAC.” After it is verified, “Runs locally with QVAC” is appropriate. The intended description is that QVAC by Tether enables local transcription, reasoning, embeddings, retrieval, and related intelligence tasks on-device; do not claim these are completed here.

## Landing narrative and information architecture

Use this sequence only when each section adds distinct information:

```text
Navbar → Hero → Live Product Demonstration → Problem → Core Capabilities
→ Business ↔ Technical Translation → Contradiction Detection → Meeting State
→ Local / Private AI → How It Works → Use Cases → Built with QVAC
→ Hackathon / Team → Footer
```

Desktop navigation: Dolphin, Product, How it works, Privacy, Use cases, and GitHub, with an optional “Watch demo” CTA. Mobile uses a compact menu, never a complex mega-menu.

The signature interaction is:

```text
Listen → Understand → Structure → Connect → Intervene
```

It may be animated as an explanatory section.

## Canonical demo scenario

Use a consistent fictional SMB purchasing scenario across the landing: Client, Engineer, Manager, and Accounting; an internal purchasing system and ERP; purchase → review → manager approval → ERP. Do not invent unrelated examples for each section.

### Statement 1

```text
Client
“When a purchase comes in, someone reviews it and then the manager
approves it before accounting loads it into the ERP.”

Dolphin
Process detected: Purchase → Review → Manager approval → Accounting → ERP
```

### Statement 2

```text
Client
“Purchases below $500 actually go through automatically.”

Dolphin
Possible contradiction
Earlier: manager approval is required.
Now: some purchases are automatic.
Suggested question: Do purchases below $500 bypass manager approval?
```

### Statement 3

```text
Engineer
“We'll need to make that operation idempotent.”

Dolphin
Running an operation more than once should not create duplicate results.
Why it matters: the ERP request could be sent twice.
```

## SEO and public metadata

Initial metadata direction:

```text
Title: Dolphin — Understand the meeting while you're still in it
Description: A local intelligence layer for understanding complex work conversations in near real time.
```

Eventually provide a favicon, `og:image`, title, description, and canonical URL. Do not keyword-stuff.

## Hackathon and repository boundary

This is the marketing repository, `dolphin-web`. It may use mock data and visually simulate the experience, but it must not become the implementation repository. Do not implement QVAC inference, real meeting transcription, a Meeting State Engine, contradiction inference, RAG or embedding pipelines, audio processing backend, production local runtime, or a real benchmark suite here. The real product belongs in `dolphin`.

Do not overbuild the first landing with authentication, dashboard, pricing, blog CMS, documentation platform, user accounts, database, admin panel, newsletter infrastructure, complex analytics, or internationalization unless explicitly requested.
