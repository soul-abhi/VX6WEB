export type ContributionStep = {
  title: string;
  body: string;
};

export const contributionSteps: ContributionStep[] = [
  {
    title: 'Choose your contribution lane',
    body: 'Backend contributors should work in apps/vx6backend. UI contributors should work in platform folders (tauri/android/ios/web) and consume the shared backend contract.',
  },
  {
    title: 'Fork and create a focused branch',
    body: 'Create a feature branch from main and keep each PR focused on one backend or one platform UI concern.',
  },
  {
    title: 'Use backend-first integration',
    body: 'Connect UI actions to vx6d API endpoints first, then add presentation and interaction improvements on top.',
  },
  {
    title: 'Verify and open a PR',
    body: 'Share build/test results, describe touched endpoints or pages, and include screenshots for UI changes.',
  },
];

export const codingStandards: string[] = [
  'Keep backend contract changes explicit in API docs so all platform teams can follow them.',
  'Use clear naming and avoid hidden behavior in transport, routing, or security-sensitive code.',
  'For UI work, keep non-technical wording readable and avoid unexplained networking jargon.',
  'Update diagrams when architecture behavior changes (DHT, hidden, relay, transports, SDK flow).',
];

export const prProcess: string[] = [
  'Summarize backend, protocol, or UI scope clearly in the PR description.',
  'State whether change affects Linux/Windows/macOS and any Android/iOS integration assumptions.',
  'Include endpoint changes, command examples, and screenshots for UI updates.',
  'Confirm project build and relevant tests pass before requesting review.',
];

export const issueReportTemplate: string[] = [
  'Title: concise description of the issue',
  'Context: page or feature area affected',
  'Steps to reproduce: numbered list',
  'Expected result: what should happen',
  'Actual result: what happens now',
  'Screenshots or logs: optional but helpful',
];
