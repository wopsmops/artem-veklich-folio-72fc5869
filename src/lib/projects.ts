// Re-exports from the canonical data source with a `desc` alias for
// backwards compatibility with components that still read `project.desc`.
import { projects as rawProjects, type Project as RawProject } from "@/data/projects";

export type Project = RawProject & { desc: string; body?: string };

export const CONTEXT_TAGS = new Set([
  "uni",
  "work",
  "personal",
  "homelab",
  "hackathon",
]);

export const projects: Project[] = rawProjects.map((p) => ({
  ...p,
  desc: p.description,
  body: p.sections[0]?.body,
}));

export const ALL_FILTERS = [
  "all",
  "aerospace",
  "hardware",
  "python",
  "rail",
  "homelab",
  "uni",
  "work",
  "personal",
  "hackathon",
];
