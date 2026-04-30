import type { Metadata } from 'next';
import { permanentRedirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Organizations use VX6',
  description:
    'How organizations can use VX6 for secure internal networks, self-hosted services, low-latency collaboration, and private infrastructure on the public internet.',
  alternates: {
    canonical: '/who-uses-vx6/organizations',
  },
};

export default function OrganizationUsePage() {
  permanentRedirect('/who-uses-vx6#organizations');
}
