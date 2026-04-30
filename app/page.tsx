import type { Metadata } from 'next';
import Link from 'next/link';
import {
  HeroMeshDiagram,
  LocalhostBridgeDiagram,
  ServiceStackDiagram,
  TorVsVx6Diagram,
} from '@/components/NetworkDiagrams';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export const metadata: Metadata = {
  title: {
    absolute: 'VX6',
  },
  description:
    'VX6 is an IPv6-first peer-to-peer service network for localhost sharing, hidden aliases, relay routing, direct IPv6 access, and decentralized team infrastructure.',
  alternates: {
    canonical: '/',
  },
};

const featureCards = [
  {
    title: 'Localhost to localhost',
    body: 'Keep SSH, APIs, dashboards, databases, and internal tools on 127.0.0.1 while peers connect from their own local ports.',
  },
  {
    title: 'Direct IPv6 mode',
    body: 'If two peers already know each other, they can connect directly by IPv6 address and still use VX6 service forwarding.',
  },
  {
    title: 'Hidden aliases',
    body: 'Private services can be published by alias, routed through intro, guard, and rendezvous paths, and kept off the normal public endpoint path.',
  },
  {
    title: 'Any-node first contact',
    body: 'A bootstrap is not a forever-center. Any known live node can introduce a new peer to the rest of the mesh.',
  },
  {
    title: 'Service-first networking',
    body: 'VX6 is built for services people really use: admin panels, internal APIs, team tooling, chat, media workers, and distributed control planes.',
  },
  {
    title: 'Linux-ready operations',
    body: 'Run it interactively or through systemd, keep files in standard Linux paths, and treat the network like production infrastructure.',
  },
];

const audienceCards = [
  {
    title: 'Engineering teams',
    description:
      'Share internal APIs, SSH, databases, dashboards, and localhost tools without publishing every service as a public endpoint.',
  },
  {
    title: 'Security labs and CTF groups',
    description:
      'Keep scoreboards, challenge backends, private admin panels, and team tooling local while still making them reachable across nodes.',
  },
  {
    title: 'Builders and startups',
    description:
      'Use VX6 as the base layer for peer-first chat, review rooms, remote control panels, distributed compute, and real-time media tools.',
  },
];

const projectItems = [
  {
    name: 'VX6 Chat',
    status: 'github',
    href: 'https://github.com/ethical-buddy/VX6-chat.git',
    body: 'https://github.com/ethical-buddy/VX6-chat.git',
  },
];

const blogItems = [
  {
    title: 'Why VX6 feels so simple',
    href: 'https://medium.com/@suryanshdeshwal/why-vx6-feels-so-simple-dabbd0308e06',
    body: 'https://medium.com/@suryanshdeshwal/why-vx6-feels-so-simple-dabbd0308e06',
  },
];

const maintainerNodeEndpoint = '[2600:1f18:4d5b:dc00:a26f:655c:58fd:4a51]:4242';

const networkBoard = [
  {
    label: 'Bootstrap entry',
    value: 'Use the maintainer node as the first live VX6 entry point for the current public network.',
  },
];

const useCases = [
  'Private engineering portals and internal admin tools',
  'Peer-first video rooms and review sessions for small teams',
  'Distributed compute control planes with worker and scheduler nodes',
  'Localhost-based frontend, backend, and database stacks across multiple machines',
];

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'VX6',
    applicationCategory: 'NetworkingApplication',
    operatingSystem: 'Linux',
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

      <section className="home-section home-hero" aria-labelledby="hero-title">
        <div className="wrapper home-hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">IPv6-first peer-to-peer service network</p>
            <h1 id="hero-title">VX6 brings localhost to the network.</h1>
            <p className="hero-subtitle">
              Share localhost across peers. Keep control at the edge.
            </p>
            <p className="hero-description">
              VX6 is a decentralized network for real services. Run SSH, APIs, dashboards, databases,
              chat backends, media workers, and internal tools on <code>127.0.0.1</code>. Publish them
              by name or alias. Connect from your own localhost without turning everything into a public
              internet endpoint, from anywhere in the world.
            </p>
            <p className="hero-description">
              More secure even before extra encryption layers, because the real service can stay on
              localhost and the public service port never has to be exposed. Security does not always
              have to be slow.
            </p>
            <p className="hero-description">
              VX6 is built as a true peer-to-peer service network. For service access, internal tools,
              and hidden routing, it is designed to feel much faster than traditional relay-heavy or
              tunnel-heavy approaches.
            </p>
            <div className="hero-cta-row" aria-label="Main actions">
              <Link href="/download" className="hero-cta hero-cta-primary">
                Download VX6
              </Link>
              <Link href="/how-to-use" className="hero-cta">
                How it works
              </Link>
              <Link href="/technical" className="hero-cta">
                Technical detail
              </Link>
            </div>

            <div className="home-mini-grid">
              <div className="mini-stat-card">
                <strong>Real service sharing</strong>
                <span>SSH, APIs, dashboards, databases, and media workers stay local but become reachable.</span>
              </div>
              <div className="mini-stat-card">
                <strong>Anywhere in the world</strong>
                <span>Direct IPv6, named services, and hidden aliases all work across public networks.</span>
              </div>
              <div className="mini-stat-card">
                <strong>Private by design</strong>
                <span>The localhost app stays local, the service stays named, and public port exposure stays low.</span>
              </div>
            </div>

            <div className="hero-localhost-diagram">
              <LocalhostBridgeDiagram />
            </div>
          </div>

          <div className="home-rail">
            <HeroMeshDiagram />

            <div className="home-rail-grid">
              <aside className="home-rail-card scroll-panel notice-board compact-board" aria-labelledby="projects-title">
                <div className="panel-head notice-board-head">
                  <h2 id="projects-title">Projects on VX6</h2>
                  <span className="panel-tag">Notice board</span>
                </div>
                <p className="notice-board-copy">
                  Current public project and writing.
                </p>
                <div className="scroll-panel-body notice-board-body">
                  {projectItems.map((item) => (
                    <article key={item.name} className="rail-item">
                      <div className="rail-item-head">
                        <a href={item.href} target="_blank" rel="noopener noreferrer">
                          {item.name}
                        </a>
                        <span>{item.status}</span>
                      </div>
                      <p>{item.body}</p>
                    </article>
                  ))}

                  <div className="panel-divider" />

                  {blogItems.map((item) => (
                    <article key={item.title} className="rail-item">
                      <div className="rail-item-head">
                        <a href={item.href} target="_blank" rel="noopener noreferrer">
                          {item.title}
                        </a>
                        <span>blog</span>
                      </div>
                      <p>{item.body}</p>
                    </article>
                  ))}
                </div>
              </aside>

              <aside className="home-rail-card notice-board compact-board" aria-labelledby="network-board-title">
                <div className="panel-head notice-board-head">
                  <h2 id="network-board-title">Network board</h2>
                  <span className="panel-tag">Maintainer notice</span>
                </div>
                <p className="notice-board-copy">
                  Current public entry information.
                </p>
                <div className="maintainer-connect-card">
                  <strong>Maintainer node IPs</strong>
                  <p>Use this node first.</p>
                  <div className="maintainer-connect-codes">
                    <code>{maintainerNodeEndpoint}</code>
                  </div>
                </div>
                <div className="board-list">
                  <div className="board-item">
                    <strong>Join the global network</strong>
                    <p>
                      Bootstrap from: <code>{maintainerNodeEndpoint}</code>.
                    </p>
                  </div>
                  {networkBoard.map((item) => (
                    <div key={item.label} className="board-item">
                      <strong>{item.label}</strong>
                      <p>{item.value}</p>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section compare-section" aria-labelledby="compare-title">
        <div className="wrapper compare-grid">
          <div className="compare-diagram">
            <TorVsVx6Diagram />
          </div>
          <div className="compare-copy">
            <p className="eyebrow">Routing model</p>
            <h2 id="compare-title" className="compare-title">
              TOR HAS BEEN REPLACED
            </h2>
            <p className="compare-summary">
              VX6 is not trying to be a browser-first anonymity layer. It is a service-first network
              for SSH, APIs, hidden admin tools, local dashboards, internal stacks, and peer-operated
              infrastructure. The result is a faster, more direct model for real applications that
              already live on localhost.
            </p>
            <p className="compare-summary">
              Even without adding a heavy onion-encryption model to every hop, VX6 can stay more secure
              than traditional exposure because the real service still sits behind localhost and the
              public application port never becomes the default public surface.
            </p>
            <p className="compare-summary">
              In practical service use, VX6 is designed to feel far faster than Tor because it is not
              optimized around browser exit routing. It is optimized around peer-to-peer service access.
            </p>
            <ul className="comparison-points">
              <li>Built around services, not only browser traffic.</li>
              <li>Direct IPv6 is a first-class path when peers already know each other.</li>
              <li>Hidden aliases still exist when private routing matters.</li>
              <li>Any known live node can introduce a new peer to the network.</li>
            </ul>
            <div className="compare-links">
              <Link href="/technical">Read technical working</Link>
              <Link href="/decentralization">Read decentralization model</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-features" aria-labelledby="feature-title">
        <div className="wrapper">
          <p className="eyebrow">Core features</p>
          <h2 id="feature-title" className="section-title">
            Service-first networking for real use
          </h2>
          <div className="feature-grid">
            {featureCards.map((card) => (
              <article key={card.title} className="feature-card">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section audience-section" aria-labelledby="audience-title">
        <div className="wrapper audience-inner">
          <p className="eyebrow">Who uses VX6</p>
          <h2 id="audience-title" className="section-title">
            Two clear paths: personal use and organizational infrastructure
          </h2>
          <p className="section-lead">
            VX6 works for one person sharing a private service with a friend, and it scales naturally to
            organizations building secure internal networks for self-hosted applications, from anywhere
            in the world.
          </p>
          <div className="audience-grid" role="list" aria-label="Audience groups">
            {audienceCards.map((card) => (
              <article className="audience-card" role="listitem" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>

          <div className="dual-case-grid">
            <article className="feature-card">
              <h3>Individual use</h3>
              <p>
                Share SSH, a dashboard, a local web app, a game service, or a private admin tool with a
                friend without making that app a public internet endpoint.
              </p>
              <Link href="/who-uses-vx6#individuals">See individual use cases</Link>
            </article>
            <article className="feature-card">
              <h3>Organizational use</h3>
              <p>
                Build secure internal networks for self-hosted services, private collaboration apps, and
                team infrastructure while keeping the data in your own hands and reducing hosting cost.
              </p>
              <Link href="/who-uses-vx6#organizations">See organizational use cases</Link>
            </article>
          </div>

          <div className="stack-section">
            <ServiceStackDiagram />
            <div className="stack-copy">
              <h3>One distributed stack, still readable</h3>
              <p>
                A frontend can stay local on one node, an API can stay local on another, and a database
                can stay local on a third. VX6 turns them into a named service network without forcing
                every component to become a public endpoint.
              </p>
              <ul className="comparison-points">
                {useCases.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section download-section" aria-labelledby="download-title">
        <div className="wrapper download-inner">
          <div className="download-copy">
            <p className="eyebrow">Quick start</p>
            <h2 id="download-title" className="section-title">
              Build, join, publish, connect
            </h2>
            <p className="section-lead">
              The fastest path is simple: build the binary, initialize a node, point it at any known
              live VX6 peer, start the runtime, and publish a local service.
            </p>
            <div className="quick-link-row">
              <Link href="/download" className="hero-cta hero-cta-primary">
                Download and install
              </Link>
              <Link href="/how-to-use" className="hero-cta">
                Full usage guide
              </Link>
            </div>
          </div>

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
            </article>

            <article className="quickstart-card">
              <h3>Share and connect</h3>
              <pre className="code-block">
                <code>{`./vx6 service add --name ssh --target 127.0.0.1:22
./vx6 reload

./vx6 connect --service alice.ssh --listen 127.0.0.1:2222
ssh -p 2222 user@127.0.0.1`}</code>
              </pre>
            </article>
          </div>
        </div>
      </section>

      <section className="home-section home-contribute">
        <div className="wrapper">
          <div className="home-rail-card contribution-card">
            <p className="eyebrow">Community</p>
            <h2 className="section-title">We are actively inviting users and contributors.</h2>
            <p className="section-lead">
              If you want to test VX6, build on it, run peers, write docs, improve the protocol, or
              help shape the public network, this is the right time to join.
            </p>
            <p className="section-lead">
              We are also building a global VX6 network. Join it from our public VX6 entry node IPs and
              keep watching this page for updated live endpoints.
            </p>
            <div className="quick-link-row">
              <Link href="/sponsor" className="hero-cta hero-cta-primary">
                Support the project
              </Link>
              <Link href="/future" className="hero-cta">
                See future scope
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
