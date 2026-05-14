import type { Metadata } from 'next';
import Link from 'next/link';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export const metadata: Metadata = {
  title: { absolute: 'VX6' },
  description:
    'VX6 is a decentralized service and communication fabric for localhost-native apps, private service meshes, and enterprise-ready peer routing.',
  alternates: { canonical: '/' },
};

const products = [
  {
    title: 'Localhost Service Sharing',
    body: 'Keep apps private on localhost (example: 127.0.0.1:2000) and open them as another local port on a remote peer (example: 127.0.0.1:1000).',
  },
  {
    title: 'Enterprise Overlay / SD-WAN Direction',
    body: 'Use VX6 identities, DHT discovery, and relay fallback to connect branches and remote teams with less manual network setup.',
  },
  {
    title: 'VX6 Comms + Browser Layer',
    body: 'Build decentralized chat/file/call apps and browser-style local control surfaces on top of the same VX6 core backend.',
  },
];

const benefits = [
  'Your real service stays on localhost, not exposed as a public internet port.',
  'People connect to service names and identities, not fragile static IP mappings.',
  'DHT + peer registry gives decentralized discovery without a central app gateway.',
  'Can reduce dependence on always-on central ingress and expensive middleboxes.',
];

const currentWork = [
  'VX6 Comms app hardening (desktop now, Android/iOS active development)',
  'Shared backend contract (`vx6d`) so every platform UI can plug into one runtime',
  'SD-WAN architecture track: policy routing, observability, and branch failover',
  'Cross-platform packaging and operator-grade deployment docs',
];

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'VX6',
    applicationCategory: 'NetworkingApplication',
    operatingSystem: 'Linux, Windows, macOS',
    description:
      'VX6 is a decentralized network runtime for localhost-native services, secure peer connectivity, and app-layer communication products.',
    url: 'https://vx6.tech',
  };

  return (
    <main className="landing-home landing-product">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader currentPage="home" />

      <section className="home-section home-hero" aria-labelledby="hero-title">
        <div className="wrapper home-hero-grid">
          <div className="hero-copy">
            <p className="article-meta">Decentralized Network Runtime</p>
            <h1 id="hero-title">Build private internet-scale systems without central lock-in.</h1>
            <p className="hero-subtitle">
              VX6 lets you keep services private on localhost and still share them across peers by name.
              Example: one machine hosts on localhost:2000, another machine uses localhost:1000 to access
              it through VX6. Users work with local ports, not raw public IP exposure.
            </p>
            <div className="hero-cta-row">
              <Link href="/download" className="hero-cta hero-cta-primary">Get VX6</Link>
              <Link href="/technical" className="hero-cta">Technical Overview</Link>
              <a href="https://github.com/ethical-buddy/VX6" target="_blank" rel="noopener noreferrer" className="hero-cta">
                Source Code
              </a>
            </div>
          </div>
          <div className="home-rail-card">
            <h3>Where VX6 works today</h3>
            <ul>
              <li>Linux CLI/runtime with service sharing, DHT, hidden services, relay paths</li>
              <li>Windows and macOS build flows, plus ongoing iOS/Android app integration tracks</li>
              <li>QUIC transport implemented alongside TCP transport selection</li>
              <li>Desktop app layer and shared backend for cross-platform UI teams</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="home-section home-features" aria-labelledby="products-title">
        <div className="wrapper">
          <h2 id="products-title" className="section-title">What You Can Build With VX6</h2>
          <div className="feature-grid">
            {products.map((item) => (
              <article key={item.title} className="feature-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section compare-section" aria-labelledby="benefits-title">
        <div className="wrapper compare-grid">
          <div className="home-rail-card">
            <h2 id="benefits-title" className="section-title">Why Teams Evaluate VX6</h2>
            <ul>
              {benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div className="home-rail-card">
            <h2 className="section-title">Current Engineering Focus</h2>
            <ul>
              {currentWork.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="home-section home-contribute" aria-labelledby="mission-title">
        <div className="wrapper">
          <div className="home-rail-card contribution-card">
            <h2 id="mission-title" className="section-title">Mission: Reduce centralized cloud dependency</h2>
            <p className="section-lead">
              VX6 aims to make private service routing, decentralized communication, and branch networking
              practical for real teams without forcing every workflow through centralized cloud gateways.
            </p>
            <div className="quick-link-row">
              <Link href="/sponsor" className="hero-cta hero-cta-primary">Donate / Sponsor</Link>
              <Link href="/docs" className="hero-cta">Builder Docs</Link>
            </div>
            <p className="section-lead">
              For corporate and business usage, contact the maintainer through the footer email.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
