import { describe, expect, it } from "vitest";
import { organizations } from "../src/data/organizations";
import { projects } from "../src/data/projects";
import { tgbsCriteria, tgbsTiers } from "../src/data/standards";
import { events, updates } from "../src/data/updates";

describe("public content data", () => {
  it("keeps project routes unique and publication status explicit", () => {
    const slugs = projects.map((project) => project.slug);

    expect(new Set(slugs).size).toBe(slugs.length);
    expect(projects).toHaveLength(3);

    for (const project of projects) {
      expect(project.title).toBeTruthy();
      expect(project.summary).toBeTruthy();
      expect(project.known.length).toBeGreaterThan(0);
      expect(project.openItems.length).toBeGreaterThan(0);
      expect(["brief-confirmed", "source-backed", "open"]).toContain(
        project.evidenceState
      );
    }
  });

  it("never labels research references as confirmed partners", () => {
    expect(organizations).toHaveLength(5);
    expect(
      organizations.every(
        (organization) =>
          organization.relationship ===
          "Reference organization — relationship unconfirmed"
      )
    ).toBe(true);
  });

  it("matches the source-backed TGBS structure", () => {
    expect(tgbsCriteria).toHaveLength(8);
    expect(tgbsTiers.map((tier) => tier.name)).toEqual([
      "Pre-certification",
      "Standard",
      "Advanced",
      "Premium"
    ]);
  });

  it("does not fabricate an event schedule", () => {
    expect(events.every((event) => event.date === null)).toBe(true);
    expect(updates.every((update) => /^\d{4}-\d{2}-\d{2}$/.test(update.published))).toBe(
      true
    );
  });
});
