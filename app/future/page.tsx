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
                      <span className="stat-val">IPv6-first + peer mesh</span>
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
                      <span className="stat-val">TCP + QUIC</span>
                      <span className="stat-desc">Transport modes</span>
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
                    VX6 now includes a shared backend contract (`vx6d`) so platform teams can build
                    Tauri, Android, iOS, and Web UIs over one stable runtime API.
                  </p>
                </div>
              </div>

              <div className="roadmap-item">
                <div className="roadmap-phase">Phase 3</div>
                <div className="roadmap-body">
                  <span className="status-badge">Planned</span>
                  <h3>Enterprise and SD-WAN layer</h3>
                  <p>
                    Policy routing, observability, branch failover controls, and deployment automation
                    are the main roadmap areas for enterprise-grade VX6 overlays.
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
                  <h3>VX6 Comms app (active development)</h3>
                  <p>
                    A decentralized chat + file + call product built on VX6 with local data ownership,
                    desktop progress and active Android/iOS integration direction.
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
