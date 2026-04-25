import type { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://vx6.tech'),
  title: {
    default: 'VX6 | IPv6 peer-to-peer service network',
    template: '%s | VX6',
  },
  description:
    'VX6 is an IPv6-first peer-to-peer service network for localhost sharing, direct IPv6 access, hidden aliases, relay routing, and decentralized team infrastructure.',
  applicationName: 'VX6',
  keywords: [
    'VX6',
    'IPv6 peer to peer',
    'localhost sharing',
    'peer to peer service network',
    'hidden services',
    'relay routing',
    'decentralized networking',
    'IPv6 direct connectivity',
    'systemd service networking',
    'eBPF networking',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'VX6 | IPv6 peer-to-peer service network',
    description:
      'Run services on localhost, publish them by name or alias, and connect peers without turning every tool into a public internet endpoint.',
    url: 'https://vx6.tech',
    siteName: 'VX6',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VX6 | IPv6 peer-to-peer service network',
    description:
      'Localhost to localhost service sharing, hidden aliases, direct IPv6 access, and decentralized peer discovery.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const storedTheme = localStorage.getItem('vx6-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = storedTheme === 'dark' || storedTheme === 'light'
      ? storedTheme
      : (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (_) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();`,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
