export type ProjectSection = {
  heading: string;
  body: string;
};

export type ProjectGalleryItem = {
  src: string;
  caption: string;
};

export type ProjectLinks = {
  github?: string;
  demo?: string;
  video?: string;
  report?: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  featured: boolean;
  heroImage?: string;
  tools: string[];
  sections: ProjectSection[];
  gallery: ProjectGalleryItem[];
  links: ProjectLinks;
};

export const projects: Project[] = [
  {
    slug: 'goldeneye-uav',
    title: 'GoldenEye UAV',
    description: 'VTOL surveillance platform with custom RF and propulsion design',
    tags: ['hardware', 'uni'],
    featured: true,
    tools: ['MATLAB', 'Ansys HFSS', 'AWR Microwave Office', 'C', 'MAVLink', 'Python'],
    sections: [
      {
        heading: 'Overview',
        body: '[PLACEHOLDER] A vertical takeoff and landing surveillance platform developed as an MEng capstone project. The system integrates a custom RF communications stack with a commercial autopilot, designed for low-altitude ISR operations.'
      },
      {
        heading: 'Technical Detail',
        body: '[PLACEHOLDER] The RF subsystem was designed using link budget analysis across 900 MHz C2 and 2.4 GHz tracking bands. Antenna simulation carried out in Ansys HFSS. Propulsion sizing used thrust-to-weight modelling in MATLAB.'
      },
      {
        heading: 'Outcomes',
        body: '[PLACEHOLDER] Full system design report submitted as MEng capstone. RF link budget validated through bench testing.'
      }
    ],
    gallery: [],
    links: { github: 'https://github.com' }
  },
  {
    slug: 'platenations',
    title: 'Platenations',
    description: 'Licence plate OCR sighting tracker with map visualisation',
    tags: ['python', 'fastapi', 'homelab'],
    featured: true,
    tools: ['Python', 'FastAPI', 'SQLite', 'Docker'],
    sections: [
      {
        heading: 'Overview',
        body: '[PLACEHOLDER] A self-hosted application that logs licence plate sightings from an OCR feed, stores them in a database, and visualises sighting locations on a map.'
      },
      {
        heading: 'Technical Detail',
        body: '[PLACEHOLDER] Built with FastAPI for the backend API and SQLite for persistence. Containerised with Docker and running on the homelab Proxmox stack.'
      },
      {
        heading: 'Outcomes',
        body: '[PLACEHOLDER] Running in production on the homelab. Captures sightings passively and surfaces trends over time.'
      }
    ],
    gallery: [],
    links: { github: 'https://github.com' }
  },
  {
    slug: 'rail-labels',
    title: 'Rail Label Standardisation',
    description: 'Asset tagging system for UK rail infrastructure',
    tags: ['rail', 'work'],
    featured: true,
    tools: ['Python', 'VBA', 'MS Visio', 'Excel'],
    sections: [
      {
        heading: 'Overview',
        body: '[PLACEHOLDER] A standardisation project at AtkinsRéalis to unify telecoms asset labelling across 200+ Electrostar vehicles for GTR.'
      },
      {
        heading: 'Technical Detail',
        body: '[PLACEHOLDER] Built a Python and Excel VBA pipeline to audit 20,000+ telecoms asset records. MS Visio used to produce network architecture diagrams integrating the standardised labelling scheme.'
      },
      {
        heading: 'Outcomes',
        body: '[PLACEHOLDER] Standardised documentation delivered across the full fleet, supporting design change processes across GTR.'
      }
    ],
    gallery: [],
    links: {}
  },
  {
    slug: 'homelab-mesh',
    title: 'Homelab Mesh Network',
    description: 'WireGuard-based overlay connecting heterogeneous nodes',
    tags: ['python', 'homelab', 'personal'],
    featured: false,
    tools: ['Docker', 'WireGuard', 'Nginx', 'iptables', 'Cloudflare', 'Proxmox'],
    sections: [
      {
        heading: 'Overview',
        body: '[PLACEHOLDER] A self-hosted infrastructure project running on a Proxmox backbone, connecting heterogeneous nodes via a WireGuard mesh overlay with public-facing access via Cloudflare Tunnel.'
      },
      {
        heading: 'Technical Detail',
        body: '[PLACEHOLDER] Services containerised via Docker, reverse proxied through Nginx. VLAN segmentation and iptables firewall rules for network isolation. Automated alerting via Grafana and InfluxDB.'
      },
      {
        heading: 'Outcomes',
        body: '[PLACEHOLDER] Continuously running. Hosts web applications, databases, observability stacks, and home automation.'
      }
    ],
    gallery: [],
    links: {}
  },
  {
    slug: 'rf-sounder',
    title: 'RF Channel Sounder',
    description: 'Sub-GHz channel sounding rig built on SDR hardware',
    tags: ['hardware', 'uni'],
    featured: false,
    tools: ['MATLAB', 'AWR Microwave Office', 'Python'],
    sections: [
      {
        heading: 'Overview',
        body: '[PLACEHOLDER] A sub-GHz channel sounding rig built on software-defined radio hardware, developed as part of RF systems coursework at Bath.'
      },
      {
        heading: 'Technical Detail',
        body: '[PLACEHOLDER] Signal processing and analysis in MATLAB. RF front-end characterised using AWR Microwave Office.'
      },
      {
        heading: 'Outcomes',
        body: '[PLACEHOLDER] Working rig used to measure channel characteristics in indoor environments.'
      }
    ],
    gallery: [],
    links: {}
  },
  {
    slug: 'transit-dash',
    title: 'Transit Dashboard',
    description: 'Live realtime board for local rail and bus arrivals',
    tags: ['rail', 'python', 'hackathon'],
    featured: false,
    tools: ['Python', 'REST APIs'],
    sections: [
      {
        heading: 'Overview',
        body: '[PLACEHOLDER] A live arrivals board built at Bath Hackathon 2024, pulling real-time rail and bus data for local stops.'
      },
      {
        heading: 'Technical Detail',
        body: '[PLACEHOLDER] REST API integration with National Rail and bus open data feeds. Built in Python with a minimal frontend.'
      },
      {
        heading: 'Outcomes',
        body: '[PLACEHOLDER] Functional prototype delivered within the hackathon timeframe.'
      }
    ],
    gallery: [],
    links: {}
  }
];
