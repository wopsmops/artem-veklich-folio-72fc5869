export type ExperienceEntry = {
  id: string;
  type: 'work' | 'education' | 'extra';
  role: string;
  organisation: string;
  location: string;
  period: string;
  concurrent?: boolean;
  bullets: string[];
};

export const entries: ExperienceEntry[] = [
  // WORK
  {
    id: 'atkins-placement',
    type: 'work',
    role: 'Rail Systems Advisory · Telecoms & Cyber – Engineering Placement',
    organisation: 'AtkinsRéalis',
    location: 'London, UK',
    period: '08/2024 – 07/2025',
    concurrent: false,
    bullets: [
      'Returned for a full-year placement following a successful summer placement.',
      'Built a Python and Excel VBA pipeline to audit 20,000+ telecoms assets across 5+ years of records, automating data validation and identifying data corruption and gaps in telecom network documentation.',
      'Produced network and systems architecture diagrams integrating communications networks and infrastructure using MS Visio.',
      'Led the GTR Labelling Standardisation Project, delivering standardised documentation across 200+ Electrostar vehicles to support fleet-wide design changes.',
    ],
  },
  {
    id: 'usu',
    type: 'work',
    role: 'Admin IT & Data Manager',
    organisation: 'Ukrainian Students Union',
    location: 'London, UK',
    period: '09/2023 – 08/2024',
    concurrent: true,
    bullets: [
      'Managed website, Telegram infrastructure & authentication for 400+ Ukrainian students across the UK.',
      'Built registration and data management systems using Webflow to facilitate career outreach, connecting students to 10+ USU-exclusive internship opportunities.',
    ],
  },
  {
    id: 'atkins-summer',
    type: 'work',
    role: 'Rail Systems & Infrastructure – Summer Placement',
    organisation: 'AtkinsRéalis',
    location: 'London, UK',
    period: '07/2023 – 09/2023',
    concurrent: true,
    bullets: [
      'Collaborated with engineers and project managers on RAMS and cybersecurity documentation for rail telecoms infrastructure, ensuring compliance with TfL and Network Rail standards.',
      'Contributed to Smart Stations, HS2 Business & Ops, and Heathrow T5 infrastructure projects, supporting technical research and engineering documentation.',
    ],
  },
  {
    id: 'hurtwood',
    type: 'work',
    role: 'BMS Electronics Engineer',
    organisation: 'Hurtwood Limited',
    location: 'Calne, UK',
    period: '11/2022 – 05/2024',
    concurrent: true,
    bullets: [
      'Developed structured PCB testing procedures and designed test rigs to validate hardware and firmware behaviour, reducing testing time by 30%.',
      'Calibrated, diagnosed and resolved faults in manufactured BMS boards deployed into live operational environments including hospitals and airports.',
      'Installed firmware onto PIC microcontrollers using MPLAB, performed component-level fault diagnosis, and carried out final assembly and soldering of electronic components.',
    ],
  },
  {
    id: 'ttm',
    type: 'work',
    role: 'Technical Lead',
    organisation: 'To The Moon Designs',
    location: 'Prague, Czech Republic',
    period: '07/2022 – 08/2023',
    concurrent: true,
    bullets: [
      'Built the company website and integrated payment systems enabling €800+ in online sales.',
      "Engineered electronics prototypes and designed circuitry for LED-backlit display products, leading hardware development for the company's future product line.",
    ],
  },
  // EDUCATION
  {
    id: 'bath',
    type: 'education',
    role: 'MEng Electronic and Electrical Engineering – Expected 1st',
    organisation: 'University of Bath',
    location: 'Bath, UK',
    period: '2022 – 2027',
    bullets: [
      'Fields of Study: Digital Communications, RF Electronics & Wireless Systems, Electric Machines, Control Systems, Power Engineering.',
      'Activities: Bath Electrical and Mechanical Engineering Society, Inter-departmental Football, Bath Hackathon 2024, Ukrainian Society, Hall Representative.',
    ],
  },
  {
    id: 'isb',
    type: 'education',
    role: 'IB Middle Years Programme, High School & IB Diploma',
    organisation: 'International School of Belgrade',
    location: 'Belgrade, Serbia',
    period: '2018 – 2022',
    bullets: [
      '6.46/7 average grade. Higher Level: Mathematics Analysis & Approaches, Physics, French B. Standard Level: English A, Economics, Visual Arts.',
      'Activities: Knowledge Bowl Team 3rd place winner, Math Counts, Football Team Captain, Grade 12 Student Representative.',
    ],
  },
  // EXTRA
  {
    id: 'amj',
    type: 'extra',
    role: 'Co-Founder · Design & Engineering Lead',
    organisation: 'AMJ Group – Clear One Speaker',
    location: 'Bath, UK / Cardiff, UK',
    period: '2024 – 2025',
    bullets: [
      'Co-founded a startup developing a wireless speaker product, leading all hardware engineering decisions from prototype to fulfilment of £5,000+ in Kickstarter pre-orders.',
      'Designed and prototyped the enclosure using Autodesk Fusion 360, conducting iterative acoustic testing and optimisation to validate performance against design targets.',
    ],
  },
  {
    id: 'ukrsoc',
    type: 'extra',
    role: 'Social Events Executive',
    organisation: 'Ukrainian Society – University of Bath',
    location: 'Bath, UK',
    period: '2025 – present',
    bullets: [
      'Planned and hosted society events across the semester, leading logistics, budgeting, venue coordination and promotion to engage 200+ unique attendees.',
    ],
  },
  {
    id: 'volunteer',
    type: 'extra',
    role: 'Volunteer',
    organisation: 'Humanitarian Aid Ukraine',
    location: 'UK-Wide',
    period: '2022 – present',
    bullets: [
      'Collaborated with the Ukrainian community in Bath to organise fundraising initiatives supporting humanitarian and military aid in Ukraine.',
      'Assisted with public fundraising campaigns including the Trafalgar Square Vigil organised by the US and Ukrainian Embassies in London.',
    ],
  },
];
