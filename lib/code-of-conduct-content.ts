export type ConductSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export const conductSections: ConductSection[] = [
  {
    id: 'pledge',
    title: 'Our pledge',
    paragraphs: [
      'We pledge to make participation in our community a harassment-free experience for everyone.',
      'We welcome contributors from all backgrounds and identities and expect respectful collaboration.',
    ],
  },
  {
    id: 'standards',
    title: 'Our standards',
    paragraphs: [
      'Be respectful, inclusive, and considerate in communication and feedback.',
      'Assume positive intent and focus on constructive solutions.',
      'Respect differences in experience, perspective, and identity.',
    ],
  },
  {
    id: 'responsibilities',
    title: 'Our responsibilities',
    paragraphs: [
      'Project maintainers are responsible for clarifying expectations and taking action when needed.',
      'Maintainers will address reported issues and ensure a welcoming environment.',
    ],
  },
  {
    id: 'scope',
    title: 'Scope',
    paragraphs: [
      'This code of conduct applies within project spaces and in public spaces when representing the project.',
    ],
  },
  {
    id: 'enforcement',
    title: 'Enforcement',
    paragraphs: [
      'Report concerns to the maintainers listed in the project contact channels.',
      'All reports will be reviewed and responded to in a timely manner.',
    ],
  },
];
