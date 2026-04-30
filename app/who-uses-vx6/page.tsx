import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Who uses VX6',
  description:
    'VX6 serves individual operators, engineering teams, CTF groups, self-hosted organizations, and builders who want direct service access without central bottlenecks.',
  alternates: {
    canonical: '/who-uses-vx6',
  },
};

const individualUseCases = [
  {
    title: 'Friend-to-friend SSH and admin access',
    body: 'Keep the real SSH daemon or admin panel on localhost and let the other side connect through a local forwarded port instead of a public service port.',
  },
  {
    title: 'Private review links for local web apps',
    body: 'Run a dashboard, staging tool, or local web build on your machine and share it by VX6 name or hidden alias for testing and support.',
  },
  {
    title: 'Personal services with cleaner exposure',
    body: 'Use VX6 for private APIs, media tools, personal chat backends, or a game-related helper service without publishing the raw endpoint.',
  },
];

const organizationUseCases = [
  {
    title: 'Internal dashboards and private portals',
    body: 'Each dashboard can stay on its own node, remain private, and still be reachable by the team from anywhere in the world.',
  },
  {
    title: 'Self-hosted collaboration systems',
    body: 'Run chat, review rooms, admin tools, and internal control panels without handing message flow or service ownership to a central third party.',
  },
  {
    title: 'Distributed app stacks',
    body: 'A frontend, API, database, and worker nodes can all stay local to their own machines while VX6 turns them into one readable service network.',
  },
];

const expandedGroups = [
  {
    title: 'Engineering, DevOps, and platform teams',
    points: [
      'Internal tools stay local while still being reachable by name.',
      'Direct service access feels faster and cleaner than tunnel-heavy workflows.',
      'Fewer public endpoints means lower exposure for dashboards, SSH, and admin tools.',
    ],
  },
  {
    title: 'CTF teams and security labs',
    points: [
      'Challenge hosts, scoreboards, and backends can live on separate nodes but feel like one environment.',
      'Operators can share private tools without pushing them onto normal public endpoints.',
      'Hidden aliases fit protected services such as admin consoles or sensitive challenge backends.',
    ],
  },
  {
    title: 'Builders creating apps on VX6',
    points: [
      'Peer-first chat, private video rooms, whiteboards, and control planes map naturally onto the network.',
      'VX6 handles naming, peer discovery, and service reachability so the app stays focused on product logic.',
      'Localhost-native development patterns do not need to be thrown away to become distributed.',
    ],
  },
];

export default function WhoUsesVx6Page() {
  return (
    <PageShell currentPage="who-uses-vx6">
      <main className="page-content">
        <div className="wrapper">
          <article className="article-shell">
            <p className="article-meta">Use cases and audience fit</p>
            <h1>Who Uses VX6</h1>

            <div className="doc-main content-stack">
              <section>
                <p className="article-intro">
                  VX6 is for people who run real services and want direct access without central
                  bottlenecks. The strongest two paths are individual localhost sharing and
                  organizational self-hosted infrastructure, but the network also fits builders, CTF
                  groups, real-time collaboration tools, and distributed systems.
                </p>
              </section>

              <section className="note">
                <strong>Short answer:</strong> if your apps already work on localhost and you want them
                reachable by trusted peers, teams, or service names without defaulting to public app
                ports, VX6 is built for that exact operating model.
              </section>

              <section className="feature-grid use-case-overview-grid">
                <article className="feature-card">
                  <h2>Individuals</h2>
                  <p>
                    Share SSH, personal tools, dashboards, localhost web apps, and private admin panels
                    with another person while the real service stays on your machine.
                  </p>
                </article>
                <article className="feature-card">
                  <h2>Organizations</h2>
                  <p>
                    Build secure internal networks for self-hosted services, internal dashboards, team
                    tooling, review rooms, and distributed stacks across multiple nodes.
                  </p>
                </article>
                <article className="feature-card">
                  <h2>Builders and special operators</h2>
                  <p>
                    CTF teams, security labs, real-time collaboration products, and distributed compute
                    systems can all use VX6 as the network layer for service-first applications.
                  </p>
                </article>
              </section>

              <section id="individuals" className="content-stack">
                <h2>Individuals first: the cleanest VX6 use case</h2>
                <p>
                  The most immediate benefit for one person is localhost-to-localhost sharing. Your real
                  service can stay on <code>127.0.0.1</code>. The other person still connects from a
                  normal local port on their own machine. That keeps the app unchanged and avoids making
                  the real application port the default public surface.
                </p>
                <div className="dual-case-grid">
                  <article className="feature-card">
                    <h3>Why use it as an individual</h3>
                    <ul>
                      <li>Keep the real service local instead of publishing the raw app port.</li>
                      <li>Share by service name, hidden alias, or direct IPv6 when peers already know each other.</li>
                      <li>Use the result like a normal local app instead of a special hosted workflow.</li>
                    </ul>
                  </article>
                  <article className="feature-card">
                    <h3>Main practical benefits</h3>
                    <ul>
                      <li>Less exposure than opening a dashboard, SSH, or admin tool directly to the internet.</li>
                      <li>Fewer tunnel-style workarounds and less dependence on centralized relay products.</li>
                      <li>Faster-feeling access paths for real tools that already live on localhost.</li>
                    </ul>
                  </article>
                </div>
                <div className="feature-grid use-case-detail-grid">
                  {individualUseCases.map((useCase) => (
                    <article key={useCase.title} className="feature-card">
                      <h3>{useCase.title}</h3>
                      <p>{useCase.body}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section id="organizations" className="content-stack">
                <h2>Organizations: private infrastructure on the public internet</h2>
                <p>
                  Organizations can use VX6 to keep infrastructure in their own hands while still making
                  internal systems reachable to the team from anywhere in the world. The fit is strongest
                  when the team already runs self-hosted apps and wants direct access, clearer naming,
                  and fewer public service endpoints.
                </p>
                <div className="dual-case-grid">
                  <article className="feature-card">
                    <h3>Why organizations use it</h3>
                    <ul>
                      <li>Data stays in the organization&apos;s own infrastructure and operating model.</li>
                      <li>Hosting cost can stay lower because everything does not have to move behind one app-centralized service layer.</li>
                      <li>Teams can reach private systems by VX6 names, local ports, or hidden aliases.</li>
                    </ul>
                  </article>
                  <article className="feature-card">
                    <h3>Best-fit environments</h3>
                    <ul>
                      <li>Self-hosted chat, dashboards, admin panels, and internal portals.</li>
                      <li>Remote teams that need secure service access without exposing every app.</li>
                      <li>Stacks spread across multiple offices, homes, labs, or edge nodes.</li>
                    </ul>
                  </article>
                </div>
                <div className="feature-grid use-case-detail-grid">
                  {organizationUseCases.map((useCase) => (
                    <article key={useCase.title} className="feature-card">
                      <h3>{useCase.title}</h3>
                      <p>{useCase.body}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="content-stack">
                <h2>More detailed use cases</h2>
                <div className="feature-grid use-case-detail-grid">
                  {expandedGroups.map((group) => (
                    <article key={group.title} className="feature-card">
                      <h3>{group.title}</h3>
                      <ul>
                        {group.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>

              <section className="note">
                <strong>Biggest practical reason to use VX6:</strong> it lets existing localhost-based
                services become reachable to the people you choose without forcing a rewrite into a
                public-endpoint-first architecture.
              </section>
            </div>
          </article>
        </div>
      </main>
    </PageShell>
  );
}
