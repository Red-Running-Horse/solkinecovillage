import type { Event, Update } from "./types";

export const updates: Update[] = [
  {
    slug: "evidence-ledger-opened",
    published: "2026-08-11",
    title: "The evidence ledger is open",
    summary:
      "The first public site release separates source-backed history, brief-confirmed initiatives, and open documentation needs.",
    kind: "Site note"
  }
];

export const events: Event[] = [
  {
    slug: "next-public-event",
    title: "Next public event",
    date: null,
    status: "Awaiting confirmed schedule",
    summary:
      "No verified event date, venue, or registration path is present in the current source library."
  }
];
