export type DocItem = {
  title: string;
  body: string;
};

export type DocSection = {
  id: string;
  title: string;
  description: string;
  items: DocItem[];
};

export const externalInterfaceSections: DocSection[] = [
  {
    id: 'inputs',
    title: 'Inputs',
    description: 'Every interaction or request that enters the web experience.',
    items: [
      {
        title: 'Navigation actions',
        body: 'Primary nav links, top-right resource links, and call-to-action buttons.',
      },
      {
        title: 'Form submissions',
        body: 'Contact or interest forms that collect user-provided details and send them to handlers.',
      },
      {
        title: 'External requests',
        body: 'Outbound requests made to fetch assets, content, or integrations configured by the team.',
      },
      {
        title: 'Theme preferences',
        body: 'Theme toggles and saved theme choices that influence UI rendering.',
      },
    ],
  },
  {
    id: 'outputs',
    title: 'Outputs',
    description: 'What the interface returns or changes once inputs are handled.',
    items: [
      {
        title: 'UI state changes',
        body: 'Visual updates such as navigation highlights, theme adjustments, and feedback messages.',
      },
      {
        title: 'Navigation responses',
        body: 'Client-side route transitions and updated content panels for each page.',
      },
      {
        title: 'Form responses',
        body: 'Success states, disabled buttons, or reset states for submissions.',
      },
      {
        title: 'Data visibility',
        body: 'Rendered content cards, documentation sections, and summary lists derived from data arrays.',
      },
    ],
  },
];
