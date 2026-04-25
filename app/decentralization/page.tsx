import type { Metadata } from 'next';
import { HeroMeshDiagram } from '@/components/NetworkDiagrams';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Decentralization',
  description:
    'How VX6 decentralization works through any-node first contact, equal-capability roles, local registries, signed records, and peer-to-peer service access.',
  alternates: {
    canonical: '/decentralization',
  },
};

export default function DecentralizationPage() {
  return (
    <PageShell currentPage="decentralization">
      <main className="page-content">
        <div className="wrapper">
          <article className="article-shell">
            <p className="article-meta">Network model</p>
            <h1>Decentralization</h1>

            <div className="doc-layout">
              <aside className="page-side">
                <div className="page-side-box toc">
                  <div className="toc-title">Contents</div>
                  <ol>
                    <li>
                      <a href="#meaning">What it means in VX6</a>
                    </li>
                    <li>
                      <a href="#entry">Any-node first contact</a>
                    </li>
                    <li>
                      <a href="#roles">Equal-capability nodes</a>
                    </li>
                    <li>
                      <a href="#services">Service-centric decentralization</a>
                    </li>
                  </ol>
                </div>
              </aside>

              <div className="doc-main">
                <section id="meaning">
                  <h2>What decentralization means in VX6</h2>
                  <p>
                    In VX6, decentralization means the useful parts of the network live at the edge:
                    service ownership, node identity, discovery, and access all stay distributed across
                    peers.
                  </p>
                  <p>
                    That is different from systems where discovery sounds distributed but operation still
                    depends on one permanent controller. VX6 uses a practical model instead: enter
                    through any known live node, learn more peers, keep syncing, and keep the service
                    graph moving through the mesh.
                  </p>
                </section>

                <HeroMeshDiagram />

                <section id="entry">
                  <h2>Any-node first contact</h2>
                  <p>
                    A bootstrap in VX6 is just a first reachable peer. It can be a public mirror, a
                    teammate, a relay node, or any other live VX6 node that already sees the network.
                  </p>
                  <ol className="doc-steps">
                    <li>
                      <div>
                        <h3>Join through a live peer</h3>
                        <p>The first node introduces the new peer to known records and peers.</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3>Sync through more peers</h3>
                        <p>The node then keeps learning from all other reachable peers it discovers.</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3>Keep going even when one peer disappears</h3>
                        <p>
                          Once the node has learned other peers, the network continues through them. That
                          is why first contact does not have to remain the center forever.
                        </p>
                      </div>
                    </li>
                  </ol>
                </section>

                <section id="roles">
                  <h2>Equal-capability nodes</h2>
                  <table className="wikitable">
                    <thead>
                      <tr>
                        <th>Role</th>
                        <th>What the node can do</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Service host</td>
                        <td>Publishes and serves local applications.</td>
                      </tr>
                      <tr>
                        <td>Relay node</td>
                        <td>Forwards proxied or hidden traffic.</td>
                      </tr>
                      <tr>
                        <td>Intro node</td>
                        <td>Participates in hidden-service negotiation.</td>
                      </tr>
                      <tr>
                        <td>Rendezvous node</td>
                        <td>Acts as the meeting point for hidden routes.</td>
                      </tr>
                      <tr>
                        <td>Normal peer</td>
                        <td>Shares records, learns peers, and keeps the mesh healthy.</td>
                      </tr>
                    </tbody>
                  </table>
                </section>

                <section id="services">
                  <h2>Service-centric decentralization</h2>
                  <p>
                    VX6 is especially useful because it decentralizes services, not only messages. That
                    means SSH can be shared peer to peer, APIs can stay local while becoming reachable,
                    and databases can remain bound to localhost while still joining a distributed stack.
                  </p>

                  <div className="note">
                    <strong>Practical result:</strong> the network is not only decentralized in theory.
                    It is decentralized in day-to-day operation because the useful endpoints stay at the
                    edge and peers keep learning from peers.
                  </div>
                </section>
              </div>
            </div>
          </article>
        </div>
      </main>
    </PageShell>
  );
}
