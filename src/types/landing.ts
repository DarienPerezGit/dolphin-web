export type SpeakerRole = "Client" | "Engineer" | "Manager" | "Accounting";

export interface TranscriptEntry {
  id: string;
  timestamp: string;
  speaker: string;
  role: SpeakerRole;
  text: string;
  highlightedInSteps?: number[];
}

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

export interface DemoStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  timestamp: string;
  transcriptIds: string[];
  activeInsightIds: string[];
}

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
