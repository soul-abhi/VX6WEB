import type { Metadata } from 'next';
import { HeroMeshDiagram } from '@/components/NetworkDiagrams';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Description',
  description:
    'A plain-language description of VX6 for people who want to understand IPv6, localhost sharing, service naming, and peer discovery without heavy networking jargon.',
  alternates: {
    canonical: '/description',
  },
};

export default function DescriptionPage() {
  return (
    <PageShell currentPage="description">
      <main className="page-content">
        <div className="wrapper">
          <article className="article-shell">
            <p className="article-meta">Beginner guide</p>
            <h1>Description</h1>

            <div className="doc-layout">
              <aside className="page-side" aria-label="Page summary">
                <div className="page-side-box toc">
                  <div className="toc-title">On this page</div>
                  <ol>
                    <li>
                      <a href="#one-minute">VX6 in one minute</a>
                    </li>
                    <li>
                      <a href="#ipv6">Why IPv6 matters</a>
                    </li>
                    <li>
                      <a href="#localhost">What localhost to localhost means</a>
                    </li>
                    <li>
                      <a href="#entry">How a node enters the network</a>
                    </li>
                    <li>
                      <a href="#why">Why people like it</a>
                    </li>
                  </ol>
                </div>

                <div className="page-side-box">
                  <h3>Short answer</h3>
                  <p>
                    VX6 lets one machine share a local service with another machine without exposing
                    that service as a normal public internet endpoint.
                  </p>
                </div>
              </aside>

              <div className="doc-main">
                <section id="one-minute">
                  <h2>VX6 in one minute</h2>
                  <p>
                    Think of VX6 as a network layer for real local services. A service can keep running
                    on <code>127.0.0.1</code>. VX6 publishes it by name or alias, moves the traffic
                    across peers, and makes it appear locally again on the client side.
                  </p>
                  <p>
                    That is why VX6 feels different from most networking tools. It is not only about
                    connecting machines. It is about connecting the services on those machines in a way
                    that still feels local and readable.
                  </p>
                </section>

                <HeroMeshDiagram />

                <section id="ipv6">
                  <h2>Why IPv6 matters here</h2>
                  <p>
                    IPv6 makes direct addressing easier and gives peer-to-peer networking a cleaner base
                    than old IPv4-only assumptions. VX6 uses that to support direct node reachability,
                    named service access, and a simpler way to connect one real machine to another.
                  </p>
                  <div className="note">
                    <strong>Important:</strong> In VX6, a bootstrap is just the first live node you
                    know. It is not the permanent center of the network.
                  </div>
                </section>

                <section id="localhost">
                  <h2>What localhost to localhost means</h2>
                  <p>
                    Many useful services already live on localhost: SSH, dashboards, databases, admin
                    tools, API backends, and development panels. VX6 keeps that model intact.
                  </p>
                  <pre className="code-block">
                    <code>{`bob shares: 127.0.0.1:22 as bob.ssh
alice connects: vx6 connect --service bob.ssh --listen 127.0.0.1:2222
alice uses it: ssh -p 2222 user@127.0.0.1`}</code>
                  </pre>
                  <p>
                    The real service never had to stop being local. The user on the other side still
                    gets a local port. VX6 carries the service in between.
                  </p>
                </section>

                <section id="entry">
                  <h2>How a node enters the network</h2>
                  <ol className="doc-steps">
                    <li>
                      <div>
                        <h3>Start from any known live node</h3>
                        <p>
                          This can be a public mirror, a teammate&apos;s node, a relay, or any reachable
                          peer that already knows part of the network.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3>Learn peers and service records</h3>
                        <p>
                          The new node syncs signed node records, service names, and hidden aliases from
                          peers and DHT-backed lookups.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3>Keep operating peer to peer</h3>
                        <p>
                          After first contact, the node can continue through the peers it has already
                          learned. That is what makes the network feel distributed in practice.
                        </p>
                      </div>
                    </li>
                  </ol>
                </section>

                <section id="why">
                  <h2>Why people actually use this</h2>
                  <table className="wikitable">
                    <thead>
                      <tr>
                        <th>Problem</th>
                        <th>VX6 answer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Too many services on localhost</td>
                        <td>Publish them by name and connect from another local port.</td>
                      </tr>
                      <tr>
                        <td>Need direct access between real peers</td>
                        <td>Use IPv6 directly when peers already know each other.</td>
                      </tr>
                      <tr>
                        <td>Need private routing</td>
                        <td>Use relay paths or hidden aliases instead of normal public endpoints.</td>
                      </tr>
                      <tr>
                        <td>Need a network without one fixed center</td>
                        <td>Enter from any live peer and keep learning the mesh through other peers.</td>
                      </tr>
                    </tbody>
                  </table>

                  <p>
                    The result is simple to explain: localhost stays local, services stay named, and
                    the network stays peer based.
                  </p>
                </section>
              </div>
            </div>
          </article>
        </div>
      </main>
    </PageShell>
  );
}
