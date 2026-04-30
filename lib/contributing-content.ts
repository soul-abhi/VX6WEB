export type ContributionStep = {
  title: string;
  body: string;
};

export const contributionSteps: ContributionStep[] = [
  {
    title: 'Fork and clone the repository',
    body: 'Create a feature branch from the main branch and keep it focused on one change set.',
  },
  {
    title: 'Install dependencies and run checks',
    body: 'Use the project scripts to validate linting and builds before opening a PR.',
  },
  {
    title: 'Make changes in small commits',
    body: 'Keep changes scoped and documented so reviewers can follow the intent.',
  },
  {
    title: 'Open a pull request',
    body: 'Describe the change, link any related issues, and note any follow-up work.',
  },
];

export const codingStandards: string[] = [
  'Use clear, readable naming and avoid single-letter identifiers unless required by scope.',
  'Prefer small, reusable components and keep data in clearly named arrays or helpers.',
  'Keep styling adjustments minimal and consistent with existing theme variables.',
  'Document non-obvious behavior with short, focused comments.',
];

export const prProcess: string[] = [
  'Summarize the goal of the change in the PR description.',
  'List any new pages, components, or assets that were added.',
  'Call out UI changes and include screenshots when applicable.',
  'Confirm builds and lint checks pass before requesting review.',
];

export const issueReportTemplate: string[] = [
  'Title: concise description of the issue',
  'Context: page or feature area affected',
  'Steps to reproduce: numbered list',
  'Expected result: what should happen',
  'Actual result: what happens now',
  'Screenshots or logs: optional but helpful',
];
