import type { Metadata } from 'next';
import Link from 'next/link';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export const metadata: Metadata = {
  title: {
    absolute: 'VX6',
  },
  description:
    'VX6 is an IPv6-first peer-to-peer service network for localhost sharing, hidden aliases, relay routing, direct IPv6 access, and decentralized team infrastructure across Linux and Windows.',
  alternates: {
    canonical: '/',
  },
};

const pillarCards = [
  {
    title: 'Private by design',
    body: 'The app stays on your machine. Only the connection travels.',
  },
  {
    title: 'No port forwarding',
    body: 'You never have to open your router or configure firewall rules.',
  },
  {
    title: 'Works anywhere',
    body: 'As long as both machines are online, it works across the world.',
  },
];

const audienceCards = [
  {
    title: 'Developers',
    description:
      'Share a dev server with a teammate without deploying anything.',
  },
  {
    title: 'Security researchers',
    description:
      'Keep challenge backends and scoreboards local but reachable.',
  },
  {
    title: 'Self-hosters',
    description:
      'Run your stack at home and access it from anywhere.',
  },
];

const comparisonRows = [
  {
    thing: "SSH to a friend's server",
    oldWay: 'Expose port 22 to internet',
    vx6Way: 'vx6 connect, done',
  },
  {
    thing: 'Share a local API',
    oldWay: 'Deploy to cloud just to test',
    vx6Way: 'Publish by name instantly',
  },
  {
    thing: 'Team internal tools',
    oldWay: 'VPN + firewall config',
    vx6Way: 'Named service, peer connects',
  },
  {
    thing: 'Private admin panel',
    oldWay: 'Hope nobody finds the port',
    vx6Way: 'Hidden alias, never exposed',
  },
];

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'VX6',
    applicationCategory: 'NetworkingApplication',
    operatingSystem: 'Linux, Windows',
    description:
      'VX6 is an IPv6-first peer-to-peer service network for localhost sharing, hidden aliases, direct IPv6 access, and decentralized team infrastructure.',
    url: 'https://vx6.tech',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <main className="landing-home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader currentPage="home" />

      {/* // SECTION 1 — HERO */}
      <section className="home-section home-hero" aria-labelledby="hero-title">
        <div className="wrapper home-hero-grid">
          <div className="hero-copy">
            <h1 id="hero-title">Your localhost. Anyone&apos;s machine. No ports exposed.</h1>
            <div className="hero-subtitle">
              VX6 lets you share a running app on your computer with anyone, privately, without putting
              it on the internet.
            </div>
            <div className="hero-cta-row" aria-label="Main actions">
              <Link href="/download" className="hero-cta hero-cta-primary">
                Download
              </Link>
              <Link href="/how-to-use" className="hero-cta">
                How it works
              </Link>
              <a
                href="https://github.com/ethical-buddy/VX6"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta"
              >
                GitHub
              </a>
            </div>
          </div>
          <figure className="diagram-shell" aria-labelledby="hero-diagram-caption">
            <svg viewBox="0 0 600 180" role="img" aria-label="VX6 localhost bridge">
              <defs>
                <marker id="vx6-arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                  <path d="M0 0 L12 6 L0 12 Z" className="diagram-panel-accent" />
                </marker>
              </defs>
              <rect x="36" y="42" width="214" height="96" rx="16" className="diagram-panel" />
              <rect x="350" y="42" width="214" height="96" rx="16" className="diagram-panel diagram-panel-accent" />
              <path d="M260 90 H340" className="diagram-path" markerEnd="url(#vx6-arrow)" />
              <text x="143" y="78" className="diagram-chip-text" textAnchor="middle">
                Your machine
              </text>
              <text x="143" y="104" className="diagram-text-center">
                localhost:3000
              </text>
              <text x="457" y="78" className="diagram-chip-text" textAnchor="middle">
                Their machine
              </text>
              <text x="457" y="104" className="diagram-text-center">
                localhost:any
              </text>
              <text x="300" y="78" className="diagram-chip-text" textAnchor="middle">
                VX6
              </text>
            </svg>
            <figcaption id="hero-diagram-caption" className="diagram-caption">
              localhost to localhost, privately.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* // SECTION 2 — THREE PILLARS */}
      <section className="home-section home-features" aria-labelledby="pillars-title">
        <div className="wrapper">
          <h2 id="pillars-title" className="section-title">
            Three pillars
          </h2>
          <div className="feature-grid" role="list" aria-label="VX6 pillars">
            {pillarCards.map((card) => (
              <article key={card.title} className="feature-card" role="listitem">
                <svg viewBox="0 0 40 40" width="28" height="28" aria-hidden="true">
                  <circle cx="20" cy="20" r="13" className="diagram-node" />
                  <circle cx="20" cy="20" r="8" className="diagram-node diagram-node-accent" />
                </svg>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* // SECTION 3 — WHAT IT REPLACES */}
      <section className="home-section compare-section" aria-labelledby="compare-title">
        <div className="wrapper compare-grid">
          <figure className="diagram-shell" aria-labelledby="compare-diagram-caption">
            <svg viewBox="0 0 700 160" role="img" aria-label="VX6 three-node route">
              <rect x="36" y="36" width="196" height="88" rx="16" className="diagram-panel" />
              <circle cx="350" cy="80" r="36" className="diagram-node diagram-node-accent" />
              <rect x="468" y="36" width="196" height="88" rx="16" className="diagram-panel diagram-panel-accent" />
              <path d="M232 80 H308" className="diagram-path-soft" />
              <path d="M392 80 H468" className="diagram-path-soft" />
              <text x="134" y="75" className="diagram-chip-text" textAnchor="middle">
                your machine
              </text>
              <text x="134" y="99" className="diagram-text-center">
                localhost
              </text>
              <text x="350" y="86" className="diagram-chip-text" textAnchor="middle">
                vx6 mesh
              </text>
              <text x="566" y="75" className="diagram-chip-text" textAnchor="middle">
                their machine
              </text>
              <text x="566" y="99" className="diagram-text-center">
                localhost
              </text>
            </svg>
            <figcaption id="compare-diagram-caption" className="diagram-caption">
              your machine to vx6 mesh to their machine.
            </figcaption>
          </figure>
          <div className="compare-copy">
            <h2 id="compare-title" className="section-title">
              Better than a tunnel. Simpler than a VPN.
            </h2>
            <div className="home-rail-card" role="list" aria-label="Old way versus VX6">
              {comparisonRows.map((row, index) => (
                <article
                  key={row.thing}
                  className="feature-grid"
                  role="listitem"
                  style={{
                    padding: '0.95rem 0',
                    borderTop: index === 0 ? '1px solid var(--line)' : undefined,
                    borderBottom: '1px solid var(--line)',
                  }}
                >
                  <div>
                    <strong>{row.thing}</strong>
                  </div>
                  <div style={{ color: 'var(--text-soft)' }}>{row.oldWay}</div>
                  <div>
                    <code>{row.vx6Way}</code>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* // SECTION 4 — QUICK START */}
      <section className="home-section download-section" aria-labelledby="quickstart-title">
        <div className="wrapper">
          <h2 id="quickstart-title" className="section-title">
            Up and running in 4 commands
          </h2>
          <div className="quickstart-grid">
            <article className="quickstart-card">
              <h3>Start a node</h3>
              <pre className="code-block">
                <code>{`go build -o ./vx6 ./cmd/vx6
./vx6 init \\
  --name alice \\
  --listen '[::]:4242' \\
  --advertise '[2001:db8::10]:4242' \\
  --bootstrap '[2001:db8::1]:4242'
./vx6 node`}</code>
              </pre>
              <p>Initialize your node config and bring your peer online.</p>
            </article>

            <article className="quickstart-card">
              <h3>Share and connect</h3>
              <pre className="code-block">
                <code>{`./vx6 service add --name ssh --target 127.0.0.1:22
./vx6 reload

./vx6 connect --service alice.ssh --listen 127.0.0.1:2222
ssh -p 2222 user@127.0.0.1`}</code>
              </pre>
              <p>Publish a local service, then connect from another localhost port.</p>
            </article>
          </div>
        </div>
      </section>

      {/* // SECTION 5 — WHO IT'S FOR */}
      <section className="home-section audience-section" aria-labelledby="audience-title">
        <div className="wrapper">
          <h2 id="audience-title" className="section-title">
            Built for people who run their own stuff
          </h2>
          <div className="audience-grid" role="list" aria-label="Audience groups">
            {audienceCards.map((card) => (
              <article className="audience-card" role="listitem" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* // SECTION 6 — BOTTOM CTA */}
      <section className="home-section home-contribute" aria-labelledby="join-title">
        <div className="wrapper">
          <div className="home-rail-card contribution-card">
            <h2 id="join-title" className="section-title">
              Join the network
            </h2>
            <p className="section-lead">
              VX6 is open source and active.
            </p>
            <p className="section-lead">
              Download the binary, bootstrap from the public entry node, and share your first service in
              minutes.
            </p>
            <div className="quick-link-row">
              <Link href="/download" className="hero-cta hero-cta-primary">
                Download VX6
              </Link>
              <Link href="/docs" className="hero-cta">
                Read the docs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
