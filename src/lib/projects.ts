export type Project = {
  slug: string;
  title: string;
  desc: string;
  tags: string[];
  body?: string;
  repo?: string;
  demo?: string;
};

export const CONTEXT_TAGS = new Set([
  "uni",
  "work",
  "personal",
  "homelab",
  "hackathon",
]);

export const projects: Project[] = [
  {
    slug: "goldeneye-uav",
    title: "GoldenEye UAV",
    desc: "VTOL surveillance platform with custom RF and propulsion design",
    tags: ["aerospace", "hardware", "uni"],
    body: "A vertical takeoff and landing surveillance platform developed during my MEng. Includes custom RF link budget design, propulsion sizing, and an autopilot integration stack.",
    repo: "https://github.com",
  },
  {
    slug: "platenations",
    title: "Platenations",
    desc: "Licence plate OCR sighting tracker with map visualisation",
    tags: ["python", "fastapi", "homelab"],
    body: "A self-hosted OCR pipeline that logs licence plate sightings and visualises them geospatially on an interactive map.",
    repo: "https://github.com",
    demo: "https://example.com",
  },
  {
    slug: "rail-labels",
    title: "Rail label standardisation",
    desc: "Asset tagging system for UK rail infrastructure",
    tags: ["rail", "work"],
    body: "A standardised tagging schema and tooling pipeline for managing identifiers across legacy UK rail asset databases.",
  },
  {
    slug: "homelab-mesh",
    title: "Homelab mesh network",
    desc: "Wireguard-based overlay connecting heterogeneous nodes",
    tags: ["python", "homelab", "personal"],
    body: "A self-managed mesh overlay tying together a handful of edge nodes and a central NAS via Wireguard.",
  },
  {
    slug: "rf-sounder",
    title: "RF channel sounder",
    desc: "Sub-GHz channel sounding rig built on SDR hardware",
    tags: ["hardware", "aerospace", "uni"],
    body: "Custom hardware + signal processing chain for characterising sub-GHz channels in cluttered environments.",
  },
  {
    slug: "transit-dash",
    title: "Transit dashboard",
    desc: "Live realtime board for local rail and bus arrivals",
    tags: ["rail", "python", "hackathon"],
    body: "A weekend build aggregating multiple realtime feeds into a single station-style departure board.",
  },
];

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
