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
    title: 'Decentralized Internal Services',
    body: 'Run internal tools, admin portals, and APIs without central ingress bottlenecks.',
  },
  {
    title: 'SD-WAN Overlay Foundations',
    body: 'Identity-based peer routing with relay fallback and policy-driven path selection.',
  },
  {
    title: 'VX6 MeshChat (In Progress)',
    body: 'Peer-first chat, file sharing, and call transport with local data ownership.',
  },
];

const benefits = [
  'No fixed central controller required for day-to-day peer reachability.',
  'Localhost-first service model keeps real app surfaces private.',
  'Faster branch/peer onboarding through identity and service naming.',
  'Cost reduction potential by reducing centralized cloud/network dependency.',
];

const currentWork = [
  'Cross-platform desktop messaging and calls via VX6 MeshChat',
  'Adaptive media transport, TURN hardening, and device diagnostics',
  'Stable-release branch policy, conformance vectors, and fuzz testing',
  'Android and Tauri frontend tracks over the same core SDK',
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
              VX6 turns localhost-native services into globally reachable, policy-controlled, peer-driven
              products for teams, enterprises, and communities.
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
              <li>Linux CLI runtime and service mesh workflows</li>
              <li>Windows-compatible build path with aligned protocol behavior</li>
              <li>Desktop app layer: VX6 MeshChat under active implementation</li>
              <li>Website/docs and SDK tracks for app builders</li>
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
              VX6 aims to cut avoidable infrastructure cost and operational lock-in by making decentralized
              service and communication products practical for real teams.
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

