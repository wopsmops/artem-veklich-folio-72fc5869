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
  status: 'complete' | 'in-progress';
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
    status: 'complete',
    tools: ['MATLAB', 'Ansys HFSS', 'AWR Microwave Office', 'Python', 'Fusion 360', 'ESP32', 'Linux', 'Soldering'],
    sections: [
      {
        heading: 'Overview',
        body: '[PLACEHOLDER] A vertical takeoff and landing surveillance platform developed as an MEng capstone project. Integrates a custom RF communications stack with a commercial autopilot, designed for low-altitude ISR operations.'
      },
      {
        heading: 'Technical Detail',
        body: '[PLACEHOLDER] RF subsystem designed using link budget analysis across 900 MHz C2 and 2.4 GHz tracking bands. Antenna simulation carried out in Ansys HFSS. Propulsion sizing modelled in MATLAB. Enclosure designed in Fusion 360.'
      },
      {
        heading: 'Outcomes',
        body: '[PLACEHOLDER] Full system design report submitted as MEng capstone. RF link budget validated through bench testing.'
      }
    ],
    gallery: [],
    links: { github: 'https://github.com', report: 'https://example.com' }
  },
  {
    slug: 'platenations',
    title: 'Platenations',
    description: 'Licence plate OCR sighting tracker with map visualisation',
    tags: ['python', 'homelab'],
    featured: true,
    status: 'complete',
    tools: ['Python', 'FastAPI', 'PostgreSQL', 'SQLite', 'Docker', 'Linux', 'React', 'Node.js', 'Nginx', 'Cloudflare'],
    sections: [
      {
        heading: 'Overview',
        body: '[PLACEHOLDER] A self-hosted application that logs licence plate sightings from an OCR feed, stores them in a database, and visualises sighting locations on a map.'
      },
      {
        heading: 'Technical Detail',
        body: '[PLACEHOLDER] FastAPI backend with PostgreSQL for persistence. Containerised with Docker, reverse proxied through Nginx, running on the homelab Proxmox stack.'
      },
      {
        heading: 'Outcomes',
        body: '[PLACEHOLDER] Running in production. Captures sightings passively and surfaces trends over time.'
      }
    ],
    gallery: [],
    links: { github: 'https://github.com' }
  },
  {
    slug: 'portfolio',
    title: 'Portfolio Site',
    description: 'Personal portfolio built with Vite, React and Tailwind — the site you are on',
    tags: ['personal'],
    featured: false,
    status: 'complete',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Git'],
    sections: [
      {
        heading: 'Overview',
        body: '[PLACEHOLDER] Designed and built from scratch using Vite and React, with Tailwind CSS for styling, i18next for multilingual support, and a dark/light theme system.'
      },
      {
        heading: 'Technical Detail',
        body: '[PLACEHOLDER] Prototyped in Lovable, then migrated to a self-hosted Docker container served via Nginx. Structured content in TypeScript data files for easy updates.'
      },
      {
        heading: 'Outcomes',
        body: '[PLACEHOLDER] Live at this URL. Supports English, Ukrainian, and French. Deployed on home server via Proxmox.'
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
    status: 'complete',
    tools: ['VBA', 'Excel', 'RAMS'],
    sections: [
      {
        heading: 'Overview',
        body: '[PLACEHOLDER] A standardisation project at AtkinsRéalis to unify telecoms asset labelling across 200+ Electrostar vehicles for GTR, reducing documentation inconsistency across fleet-wide design changes.'
      },
      {
        heading: 'Technical Detail',
        body: '[PLACEHOLDER] Built a VBA and Excel pipeline to audit 20,000+ telecoms asset records across 5+ years of historical data. Applied RAMS documentation standards throughout.'
      },
      {
        heading: 'Outcomes',
        body: '[PLACEHOLDER] Standardised documentation delivered across the full fleet, supporting GTR design change processes.'
      }
    ],
    gallery: [],
    links: {}
  },
  {
    slug: 'rf-drone-tracking',
    title: 'RF Drone Tracking System',
    description: 'SDR-based passive drone detection and tracking using RF emissions',
    tags: ['uni'],
    featured: false,
    status: 'complete',
    tools: ['MATLAB', 'Ansys HFSS', 'AWR Microwave Office'],
    sections: [
      {
        heading: 'Overview',
        body: '[PLACEHOLDER] A passive RF-based system for detecting and tracking drones by analysing their radio emissions, developed as part of university coursework.'
      },
      {
        heading: 'Technical Detail',
        body: '[PLACEHOLDER] Signal processing and analysis in MATLAB. RF front-end design and simulation using Ansys HFSS and AWR Microwave Office.'
      },
      {
        heading: 'Outcomes',
        body: '[PLACEHOLDER] Working system demonstrated in lab conditions. Full report submitted.'
      }
    ],
    gallery: [],
    links: { report: 'https://example.com' }
  },
  {
    slug: 'homelab',
    title: 'Homelab',
    description: 'Self-hosted infrastructure on a Proxmox backbone with full networking, monitoring, and automation',
    tags: ['homelab', 'personal'],
    featured: false,
    status: 'complete',
    tools: ['Docker', 'Proxmox', 'TrueNAS', 'Linux', 'Nginx', 'Grafana', 'InfluxDB', 'Cloudflare', 'VPN/WireGuard', 'iptables', 'DNS', 'REST APIs', 'Home Assistant', 'Bash'],
    sections: [
      {
        heading: 'Overview',
        body: '[PLACEHOLDER] A self-hosted infrastructure stack running on a Proxmox hypervisor at home, hosting web apps, databases, observability tooling, and home automation.'
      },
      {
        heading: 'Technical Detail',
        body: '[PLACEHOLDER] Services containerised via Docker, reverse proxied through Nginx, with public-facing access via Cloudflare Tunnel and DDNS. VLAN segmentation and iptables firewall rules. Monitoring via Grafana and InfluxDB. Home Assistant for automation.'
      },
      {
        heading: 'Outcomes',
        body: '[PLACEHOLDER] Continuously running. Self-hosts several live applications including this portfolio.'
      }
    ],
    gallery: [],
    links: { github: 'https://github.com' }
  },
  {
    slug: 'bus-tracker',
    title: 'Bus Tracker',
    description: 'Real-time bus and rail arrival display with physical hardware interface',
    tags: ['python', 'personal', 'hardware'],
    featured: false,
    status: 'complete',
    tools: ['Python', 'REST APIs', 'JavaScript', 'ESP32', 'C', 'Soldering'],
    sections: [
      {
        heading: 'Overview',
        body: '[PLACEHOLDER] A live arrivals display pulling real-time bus and rail data, presented on a physical hardware interface built around an ESP32.'
      },
      {
        heading: 'Technical Detail',
        body: '[PLACEHOLDER] Python backend consumes REST APIs from public transport data feeds. C firmware on the ESP32 drives the display. JavaScript frontend for browser-based view.'
      },
      {
        heading: 'Outcomes',
        body: '[PLACEHOLDER] Running as a live display at home.'
      }
    ],
    gallery: [],
    links: { github: 'https://github.com' }
  },
  {
    slug: 'smart-air-cooler',
    title: 'Smart Air Cooler',
    description: 'ESP32-driven air cooler with automated climate control and sensor feedback',
    tags: ['hardware', 'personal'],
    featured: false,
    status: 'complete',
    tools: ['ESP32', 'C', 'Soldering'],
    sections: [
      {
        heading: 'Overview',
        body: '[PLACEHOLDER] A DIY smart air cooler with automated climate control driven by an ESP32 microcontroller, using sensor feedback to regulate cooling.'
      },
      {
        heading: 'Technical Detail',
        body: '[PLACEHOLDER] C firmware on the ESP32 reads temperature and humidity sensors, controls fan speed via PWM, and exposes a simple status interface.'
      },
      {
        heading: 'Outcomes',
        body: '[PLACEHOLDER] Working unit used in practice. Integrated into homelab monitoring.'
      }
    ],
    gallery: [],
    links: { github: 'https://github.com' }
  },
  {
    slug: 'imc-prosperity',
    title: 'IMC Prosperity Trading Challenge',
    description: 'Algorithmic trading bot built for the IMC Prosperity competition',
    tags: ['hackathon', 'python'],
    featured: false,
    status: 'in-progress',
    tools: ['Python', 'NumPy', 'Pandas'],
    sections: [
      {
        heading: 'Overview',
        body: '[PLACEHOLDER] An algorithmic trading system built for the IMC Prosperity competition, implementing market-making and arbitrage strategies across simulated financial instruments.'
      },
      {
        heading: 'Technical Detail',
        body: '[PLACEHOLDER] Written in Python using NumPy and Pandas for signal processing and position management. Strategy logic handles multiple trading rounds with different market conditions.'
      },
      {
        heading: 'Outcomes',
        body: '[IN PROGRESS]'
      }
    ],
    gallery: [],
    links: { github: 'https://github.com' }
  },
  {
    slug: 'fullhouse-poker',
    title: 'Fullhouse Poker Hackathon',
    description: 'Poker AI agent built at a hackathon',
    tags: ['hackathon'],
    featured: false,
    status: 'in-progress',
    tools: ['Python'],
    sections: [
      {
        heading: 'Overview',
        body: '[PLACEHOLDER] A poker-playing AI agent built during a hackathon, implementing game-theoretic decision making for Texas Hold\'em.'
      },
      {
        heading: 'Technical Detail',
        body: '[PLACEHOLDER] Built in Python. Strategy logic handles hand evaluation, pot odds, and opponent modelling.'
      },
      {
        heading: 'Outcomes',
        body: '[IN PROGRESS]'
      }
    ],
    gallery: [],
    links: { github: 'https://github.com' }
  },
  {
    slug: 'clear-one-speaker',
    title: 'Clear One Speaker',
    description: 'Wireless speaker designed and manufactured from prototype to Kickstarter fulfilment',
    tags: ['hardware', 'personal'],
    featured: false,
    status: 'complete',
    tools: ['Fusion 360', 'Soldering', 'Adobe Photoshop', 'Adobe Premiere Pro'],
    sections: [
      {
        heading: 'Overview',
        body: '[PLACEHOLDER] Co-founded a startup developing a wireless speaker product. Led all hardware engineering from first prototype through to fulfilment of £5,000+ in Kickstarter pre-orders.'
      },
      {
        heading: 'Technical Detail',
        body: '[PLACEHOLDER] Enclosure designed and iterated in Fusion 360. Acoustic testing and optimisation validated performance against design targets. Campaign materials produced using Adobe Creative Suite.'
      },
      {
        heading: 'Outcomes',
        body: '[PLACEHOLDER] Kickstarter campaign successfully funded. Pre-orders fulfilled.'
      }
    ],
    gallery: [],
    links: {}
  }
];
