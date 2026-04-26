import type { Metadata } from 'next';
import { permanentRedirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Individuals use VX6',
  description:
    'How individuals can use VX6 for peer-to-peer localhost sharing, direct IPv6 access, private admin tools, and friend-to-friend service access.',
  alternates: {
    canonical: '/who-uses-vx6/individuals',
  },
};

export default function IndividualUsePage() {
  permanentRedirect('/who-uses-vx6#individuals');
}
