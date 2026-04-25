import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VX6',
    short_name: 'VX6',
    description:
      'VX6 is an IPv6-first peer-to-peer service network for localhost sharing, hidden aliases, direct IPv6 access, and decentralized infrastructure.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f141a',
    theme_color: '#0f141a',
  };
}
