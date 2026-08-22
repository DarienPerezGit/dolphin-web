# Canonical Mock-Data Contract & Domain Specifications

This document defines the canonical mock-data contract for the Dolphin marketing and visual-identity landing page v1. It ensures all UI components, demonstrations, and narrative sections share a single source of truth grounded in the canonical SMB purchasing scenario without implying unverified backend or product functionality.

---

## 1. Design & Positioning Principles

1. **Single Source of Truth**: All UI components consume structured mock data from `@/content/mock-data` typed by `@/types/landing`.
2. **Canonical SMB Purchasing Scenario**: Every demo illustrates the same purchasing workflow:
   - Client describes the purchasing flow and approval rules.
   - Engineer introduces technical architecture requirements (ERP idempotency).
   - Client introduces a business rule exception (purchases < $500 auto-approved), triggering contradiction detection.
3. **Conceptual UI Boundary**: Clearly frames all mock data as simulated and conceptual. Does not claim live transcription, cloud inference, or verified benchmark capabilities.
4. **Localization & Language Consistency**: Uses clear, polished English and Spanish terminology matching the approved narrative spine.

---

## 2. Core TypeScript Contracts (`src/types/landing.ts`)

### A. Speaker Roles & Transcripts
```typescript
export type SpeakerRole = "Client" | "Engineer" | "Manager" | "Accounting";

export interface TranscriptEntry {
  id: string;
  timestamp: string;
  speaker: string;
  role: SpeakerRole;
  text: string;
  highlightedInSteps?: number[];
}
```

### B. Structured Understanding & Insights
```typescript
export type InsightType = 
  | "process" 
  | "requirement" 
  | "explanation" 
  | "contradiction" 
  | "question";

export interface InsightItem {
  id: string;
  stepId: number;
  type: InsightType;
  title: string;
  summary: string;
  details?: string[];
  processFlow?: string[];
  contextNote?: string;
  relatedTranscriptId?: string;
}
```

### C. Interactive Demo Sequencing
```typescript
export interface DemoStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  timestamp: string;
  transcriptIds: string[];
  activeInsightIds: string[];
}
```

### D. Capabilities, Use Cases & Privacy
```typescript
export interface CapabilityItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
}

export interface UseCaseItem {
  id: string;
  title: string;
  targetRole: string;
  valueProposition: string;
  scenarioSnippet: string;
}

export interface PrivacyComparisonItem {
  feature: string;
  dolphinOnDevice: string;
  traditionalCloud: string;
}
```

---

## 3. Canonical Dataset Reference

### Scenario Steps & Chronology

| Step | Time | Spoken Input | Dolphin Structured Understanding |
| :--- | :--- | :--- | :--- |
| **01** | `14:30` | *"When a purchase comes in, someone reviews it and then the manager approves it before accounting loads it into the ERP."* | **Process**: `Compra recibida → Revisión → Manager → ERP`<br>**Requirement**: Manager sign-off required before ERP sync. |
| **02** | `14:32` | *"We'll need to make that ERP sync operation idempotent to prevent duplicate order generation."* | **Technical Explanation**: *Idempotency* — prevents duplicate orders/charges when network calls retry. |
| **03** | `14:35` | *"Purchases below $500 actually go through automatically without waiting for manager sign-off."* | **Contradiction Alert**: 14:30 (all purchases need manager) vs 14:35 (<$500 auto-approved).<br>**Suggested Question**: Clarify if auto-approved purchases require async audit notice. |

---

## 4. Verification & Validation Rules

- All mock data must be immutable and deterministic.
- UI components must gracefully render missing optional fields (`details`, `processFlow`, `contextNote`).
- Mock timestamps must follow a logical sequential order (`14:30`, `14:32`, `14:35`).
- Cross-references between `relatedTranscriptId` and `TranscriptEntry.id` must be valid.
