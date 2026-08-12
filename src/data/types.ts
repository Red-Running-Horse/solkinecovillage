export type EvidenceState = "source-backed" | "brief-confirmed" | "open";
export type ProjectStatus = "Developing" | "Concept under documentation";

export interface SourceReference {
  label: string;
  path: string;
  detail?: string;
}

export interface LocalizedText {
  en: string;
  es?: string;
}

export interface Project {
  slug: string;
  title: string;
  status: ProjectStatus;
  evidenceState: EvidenceState;
  summary: string;
  purpose: string;
  known: string[];
  openItems: string[];
  sourceRefs: SourceReference[];
  participation: string;
}

export interface Organization {
  slug: string;
  name: string;
  url: string;
  role: string;
  relationship: "Reference organization — relationship unconfirmed";
  sourcePath: string;
}

export interface Update {
  slug: string;
  published: string;
  title: string;
  summary: string;
  kind: "Site note" | "Project update";
}

export interface Event {
  slug: string;
  title: string;
  date: string | null;
  status: "Awaiting confirmed schedule";
  summary: string;
}
