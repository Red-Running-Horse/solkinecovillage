export const biodiversityDefinition =
  "Biodiversity is the variety of life across genes, species, and ecosystems, together with the relationships that keep living systems functioning.";

export const tgbsCriteria = [
  "Select appropriate sites",
  "Enhance protection",
  "Work with stakeholders to protect, restore, and manage biodiversity",
  "Maximize biodiversity recovery",
  "Avoid invasive species",
  "Prioritize native, threatened, and rare species",
  "Promote biodiversity and adaptive capacity",
  "Monitor, evaluate, and adapt"
] as const;

export const tgbsTiers = [
  {
    name: "Pre-certification",
    detail: "Available in the framework for projects under ten years old."
  },
  {
    name: "Standard",
    detail: "At least 5/10 overall with no negative criterion scores."
  },
  {
    name: "Advanced",
    detail: "At least 7/10 overall and 5/10 on six or more criteria."
  },
  {
    name: "Premium",
    detail: "At least 9/10 overall and 5/10 on every criterion."
  }
] as const;

export const bffDefinition =
  "A Bioregional Financing Facility is a community-owned institution that uses participatory, transparent, place-based governance to direct resources, build project portfolios for systemic change, and support a regenerative economy.";
