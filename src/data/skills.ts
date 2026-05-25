export type Skill = {
  name: string;
  projectTag?: string;
};

export type SkillSection = {
  label: string;
  skills: Skill[];
};

export const skillSections: SkillSection[] = [
  {
    label: 'code',
    skills: [
      { name: 'Python', projectTag: 'python' },
      { name: 'C' },
      { name: 'JavaScript' },
      { name: 'SQL' },
      { name: 'MATLAB' },
      { name: 'Bash' },
      { name: 'C++' },
      { name: 'VBA' },
    ],
  },
  {
    label: 'frameworks',
    skills: [
      { name: 'FastAPI' },
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Node.js' },
    ],
  },
  {
    label: 'hardware & embedded',
    skills: [
      { name: 'PIC Microcontrollers', projectTag: 'hardware' },
      { name: 'ESP32', projectTag: 'hardware' },
      { name: 'MPLAB', projectTag: 'hardware' },
      { name: 'Allegro PCB Editor', projectTag: 'hardware' },
      { name: 'KiCad', projectTag: 'hardware' },
      { name: 'Cadence CAD', projectTag: 'hardware' },
      { name: 'Fusion 360', projectTag: 'hardware' },
      { name: 'AWR Microwave Office', projectTag: 'hardware' },
      { name: 'Ansys HFSS', projectTag: 'hardware' },
      { name: 'Soldering', projectTag: 'hardware' },
    ],
  },
  {
    label: 'infrastructure',
    skills: [
      { name: 'Docker', projectTag: 'homelab' },
      { name: 'Linux', projectTag: 'homelab' },
      { name: 'Git' },
      { name: 'Proxmox', projectTag: 'homelab' },
      { name: 'TrueNAS', projectTag: 'homelab' },
      { name: 'Nginx', projectTag: 'homelab' },
      { name: 'Grafana', projectTag: 'homelab' },
      { name: 'InfluxDB', projectTag: 'homelab' },
      { name: 'Cloudflare', projectTag: 'homelab' },
      { name: 'AWS' },
      { name: 'Wireshark', projectTag: 'homelab' },
      { name: 'iptables', projectTag: 'homelab' },
      { name: 'SQLite', projectTag: 'python' },
      { name: 'MySQL' },
      { name: 'MS Visio', projectTag: 'work' },
    ],
  },
  {
    label: 'rail & standards',
    skills: [
      { name: 'GSM-R', projectTag: 'rail' },
      { name: 'CBTC', projectTag: 'rail' },
      { name: 'RAMS', projectTag: 'rail' },
      { name: 'ERTMS/ETCS', projectTag: 'rail' },
    ],
  },
  {
    label: 'networking',
    skills: [
      { name: 'TCP/IP', projectTag: 'homelab' },
      { name: 'REST APIs', projectTag: 'homelab' },
      { name: 'VLAN', projectTag: 'homelab' },
      { name: 'VPN / WireGuard', projectTag: 'homelab' },
      { name: 'IPv4/IPv6', projectTag: 'homelab' },
      { name: 'DNS', projectTag: 'homelab' },
    ],
  },
];
