import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import vx6Logo from '@/assets/logo.png';

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
  icons: {
    icon: vx6Logo.src,
    shortcut: vx6Logo.src,
    apple: vx6Logo.src,
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
        <meta
          name="google-site-verification"
          content="dDu6P9_yUBQTrftHabGrClWCyzzTO9CUf6vjErLo2g8"
        />
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CRLYW22DBF"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-CRLYW22DBF', { page_path: window.location.pathname });`}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
