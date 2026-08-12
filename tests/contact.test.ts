import { describe, expect, it } from "vitest";
import { createInterestMailto } from "../src/lib/contact";

const message = {
  name: "Field Steward",
  email: "steward@example.org",
  interest: "Primary evidence",
  message: "I can share an approved monitoring record."
};

describe("static interest workflow", () => {
  it("does not create a submission target without a configured recipient", () => {
    expect(createInterestMailto(undefined, message)).toBeNull();
    expect(createInterestMailto("   ", message)).toBeNull();
  });

  it("creates an encoded mailto handoff when a recipient is configured", () => {
    const mailto = createInterestMailto("hello@example.org", message);

    expect(mailto).toContain("mailto:hello@example.org");
    expect(mailto).toContain("Sol%20Kin%20interest%3A%20Primary%20evidence");
    expect(mailto).toContain("Field%20Steward");
  });
});
