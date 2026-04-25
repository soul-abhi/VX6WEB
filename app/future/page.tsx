import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Future',
  description:
    'VX6 progress, live capabilities, builder direction, and the kinds of applications that can be built on top of the network.',
  alternates: {
    canonical: '/future',
  },
};

export default function FuturePage() {
  return (
    <PageShell currentPage="future">
      <main className="page-content">
        <div className="wrapper">
          <article className="article-shell">
            <p className="article-meta">Progress and roadmap</p>
            <h1>Future Prospectus</h1>

            <div className="stats-bar" aria-label="Project status">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <span className="stat-val">IPv6-first</span>
                      <span className="stat-desc">Core transport model</span>
                    </td>
                    <td>
                      <span className="stat-val">Localhost sharing</span>
                      <span className="stat-desc">Real service access</span>
                    </td>
                    <td>
                      <span className="stat-val">Hidden aliases</span>
                      <span className="stat-desc">Private routing mode</span>
                    </td>
                    <td>
                      <span className="stat-val">systemd</span>
                      <span className="stat-desc">Background operation</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <section className="content-stack">
              <h2>Current progress</h2>
              <p>
                VX6 is already a working network runtime with peer discovery, direct service access,
                relay paths, hidden aliases, file transfer, background operation, and a growing
                documentation set.
              </p>

              <div className="roadmap-item">
                <div className="roadmap-phase">Phase 1</div>
                <div className="roadmap-body">
                  <span className="status-badge done">Live</span>
                  <h3>Stable service-sharing base</h3>
                  <p>
                    Localhost workflows, peer discovery, named services, direct IPv6 access, and hidden
                    alias foundations are in place.
                  </p>
                </div>
              </div>

              <div className="roadmap-item">
                <div className="roadmap-phase">Phase 2</div>
                <div className="roadmap-body">
                  <span className="status-badge active">Growing</span>
                  <h3>Builder and SDK direction</h3>
                  <p>
                    VX6 is becoming a base layer for apps that want peer-first reachability, service
                    naming, hidden access, and local-worker architectures.
                  </p>
                </div>
              </div>

              <div className="roadmap-item">
                <div className="roadmap-phase">Phase 3</div>
                <div className="roadmap-body">
                  <span className="status-badge">Planned</span>
                  <h3>Broader ecosystem</h3>
                  <p>
                    More reference applications, public builders, deployment patterns, and region-aware
                    network examples can grow on top of the current runtime.
                  </p>
                </div>
              </div>

              <h2>What can be built on top of VX6</h2>
              <div className="feature-grid">
                <article className="feature-card">
                  <h3>Peer-first video and review rooms</h3>
                  <p>
                    Direct paths plus local media workers make VX6 a strong base for small-group calls,
                    live reviews, and creator workflows.
                  </p>
                </article>
                <article className="feature-card">
                  <h3>Collaboration tools</h3>
                  <p>
                    Team chat, whiteboards, control rooms, and shared dashboards can use VX6 as the
                    network layer while the product focuses on state and interface.
                  </p>
                </article>
                <article className="feature-card">
                  <h3>Distributed systems</h3>
                  <p>
                    Worker meshes, schedulers, admin APIs, edge control planes, and robotics systems fit
                    well when services need to stay local but reachable.
                  </p>
                </article>
                <article className="feature-card">
                  <h3>Browser wrapper</h3>
                  <p>
                    A browser-based wrapper can make VX6 services feel even more immediate by exposing a
                    cleaner GUI for discovery, service access, hidden aliases, and peer-managed apps.
                  </p>
                </article>
              </div>
            </section>
          </article>
        </div>
      </main>
    </PageShell>
  );
}
