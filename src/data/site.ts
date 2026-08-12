export const site = {
  name: "Sol Kin Ecovillage",
  shortName: "Sol Kin",
  description:
    "A public field atlas for biodiversity projects, communities, cooperative history, and participation pathways in the Yucatan Peninsula.",
  region: "Yucatan Peninsula",
  language: "en",
  sourceLanguage: "es"
} as const;

export const navigation = [
  { href: "/projects/", label: "Projects" },
  { href: "/communities/", label: "Communities" },
  { href: "/learn/biodiversity-economy/", label: "Learn" },
  { href: "/cooperative/", label: "Cooperative story" },
  { href: "/updates/", label: "Updates" },
  { href: "/support/", label: "Participate" }
] as const;
