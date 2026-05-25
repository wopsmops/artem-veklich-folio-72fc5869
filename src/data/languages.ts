export type Language = {
  flag: string;
  name: string;
  level: string;
  fill: number;
};

export const languages: Language[] = [
  { flag: '🇬🇧', name: 'English', level: 'Fluent', fill: 92 },
  { flag: '🇺🇦', name: 'Ukrainian', level: 'Native', fill: 100 },
  { flag: '🏳️', name: 'Russian', level: 'Native', fill: 100 },
  { flag: '🇫🇷', name: 'French', level: 'B2', fill: 65 },
  { flag: '🇵🇱', name: 'Polish', level: 'B2', fill: 65 },
  { flag: '🇮🇹', name: 'Italian', level: 'B1', fill: 50 },
  { flag: '🇷🇸', name: 'Serbian', level: 'B1', fill: 50 },
  { flag: '🇪🇸', name: 'Spanish', level: 'A2', fill: 30 },
];
