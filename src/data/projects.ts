import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "mayan-learning-center",
    title: "Mayan Learning Center",
    status: "Developing",
    evidenceState: "brief-confirmed",
    summary:
      "A current Sol Kin initiative named in the project brief. Its public program, place, team, and schedule are still being documented.",
    purpose:
      "Create a future-facing space for learning connected to local biodiversity and community knowledge, once its scope and stewardship are confirmed.",
    known: [
      "The initiative name and current-project status are confirmed by the Sol Kin project brief.",
      "No program description, location, calendar, contact, or outcome data is present in the source library."
    ],
    openItems: [
      "Confirm the initiative's community stewards and preferred public description.",
      "Document learning activities, access, schedule, and participant safeguards.",
      "Add approved photography and source-backed progress evidence."
    ],
    sourceRefs: [],
    participation:
      "Register interest in learning or contributing once a public contact channel is confirmed."
  },
  {
    slug: "mayan-bee-sanctuary",
    title: "Mayan Bee Sanctuary",
    status: "Developing",
    evidenceState: "brief-confirmed",
    summary:
      "A current Sol Kin initiative named in the project brief. Sanctuary operations, species, site, and stewardship details await primary documentation.",
    purpose:
      "Develop a responsibly documented pollinator initiative without claiming species, conservation outcomes, or Indigenous practice that the current sources do not establish.",
    known: [
      "The initiative name and current-project status are confirmed by the Sol Kin project brief.",
      "The X-Hazil history records six beekeepers establishing a 20-hive apiary in 1946 with cooperative credit.",
      "The historical apiary record does not establish this named sanctuary or identify bee species."
    ],
    openItems: [
      "Confirm site, species, ecological baseline, stewardship, and community authorization.",
      "Define monitoring and animal-welfare practices.",
      "Separate historical context from present-day project evidence."
    ],
    sourceRefs: [
      {
        label: "Historia del Ejido X-Hazil Sur",
        path:
          "Project References/project_support_materials/historia-ejido-x-hazil-sur_compress.txt",
        detail: "Lines 38–41 document the 1946 apiary."
      }
    ],
    participation:
      "Share verified local pollinator knowledge or express future volunteer interest."
  },
  {
    slug: "x-hazil-eco-retreat",
    title: "X-Hazil eco-touristic retreat",
    status: "Concept under documentation",
    evidenceState: "brief-confirmed",
    summary:
      "A visitor-facing retreat concept informed by the documented forestry and chicle history of Ejido X-Hazil y Anexos. Operational details and community approvals are not yet in the source library.",
    purpose:
      "Explore a future retreat model that can foreground place, cooperative history, and biodiversity while requiring confirmed local governance before public claims or bookings.",
    known: [
      "Ejido X-Hazil y Anexos is a documented Maya community forestry territory bordering the Sian Ka'an Biosphere Reserve.",
      "Its historical record describes forestry, chicle extraction, apiculture, community institutions, and a 2005 forest-management certificate.",
      "The source does not document a tourism cooperative, active retreat, booking offer, or current visitor program."
    ],
    openItems: [
      "Confirm the project's name, governance, location, community consent, and operating entity.",
      "Document visitor capacity, ecological safeguards, benefits, and access.",
      "Do not accept bookings or payments until those details are verified and configured."
    ],
    sourceRefs: [
      {
        label: "Historia del Ejido X-Hazil Sur",
        path:
          "Project References/project_support_materials/historia-ejido-x-hazil-sur_compress.txt",
        detail: "Spanish cooperative and forestry history; 358 lines."
      }
    ],
    participation:
      "Follow the documentation process or contribute relevant primary-source material."
  }
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
