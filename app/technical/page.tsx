import type { Metadata } from 'next';
import { HiddenFlowDiagram, ServiceStackDiagram } from '@/components/NetworkDiagrams';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Technical',
  description:
    'Technical working of VX6: identity, DHT-backed discovery, local registry, direct service flow, hidden aliases, relay paths, and Linux/Windows runtime behavior.',
  alternates: {
    canonical: '/technical',
  },
};

export default function TechnicalPage() {
  return (
    <PageShell currentPage="technical">
      <main className="page-content">
        <div className="wrapper">
          <article className="article-shell">
            <p className="article-meta">Technical architecture</p>
            <h1>Technical Overview</h1>

            <div className="doc-layout">
              <aside className="page-side">
                <div className="page-side-box toc">
                  <div className="toc-title">Contents</div>
                  <ol>
                    <li>
                      <a href="#core">Core model</a>
                    </li>
                    <li>
                      <a href="#identity">Identity and discovery</a>
                    </li>
                    <li>
                      <a href="#flows">Service flow modes</a>
                    </li>
                    <li>
                      <a href="#hidden">Hidden services in detail</a>
                    </li>
                    <li>
                      <a href="#ebpf">eBPF and performance</a>
                    </li>
                    <li>
                      <a href="#platforms">Platforms</a>
                    </li>
                    <li>
                      <a href="#sdwan">SD-WAN direction</a>
                    </li>
                  </ol>
                </div>

                <div className="page-side-box">
                  <h3>Profiles</h3>
                  <div className="table-scroll">
                    <table className="spec">
                      <tbody>
                        <tr>
                          <td>fast</td>
                          <td>3 + X + 3</td>
                        </tr>
                        <tr>
                          <td>balanced</td>
                          <td>5 + X + 5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </aside>

              <div className="doc-main">
                <section id="core">
                  <h2>Core model</h2>
                  <p>
                    VX6 turns local services into network-reachable services without forcing them to stop
                    being local. The app stays on localhost. VX6 handles discovery, naming, sessions,
                    routing, and transport between peers.
                  </p>
                  <div className="table-scroll">
                    <table className="spec">
                      <tbody>
                        <tr>
                          <td>Service target</td>
                          <td>localhost addresses such as 127.0.0.1:22, :8080, or :5432</td>
                        </tr>
                        <tr>
                          <td>Client view</td>
                          <td>a new local forwarded port on the client side</td>
                        </tr>
                        <tr>
                          <td>Naming</td>
                          <td>username.service or hidden alias</td>
                        </tr>
                        <tr>
                          <td>Discovery</td>
                          <td>peer sync plus DHT-backed lookups</td>
                        </tr>
                        <tr>
                          <td>Transport</td>
                          <td>TCP and QUIC modes via transport abstraction</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="identity">
                  <h2>Identity, discovery, and the local registry</h2>
                  <ul>
                    <li>Each node keeps a persistent Ed25519 identity and a stable VX6 node ID.</li>
                    <li>Node and service records are signed before they are published.</li>
                    <li>A node can enter through any known live peer, not only one fixed bootstrap.</li>
                    <li>
                      Every node keeps a local registry of known peers, services, and hidden aliases for
                      fast future lookups.
                    </li>
                  </ul>

                  <div className="note">
                    <strong>Dynamic IP changes:</strong> when a node comes back with a new IPv6
                    address, it republishes a fresh signed record and reachable peers update to the new
                    endpoint.
                  </div>
                </section>

                <section id="flows">
                  <h2>Service flow modes</h2>
                  <h3>Named direct mode</h3>
                  <pre className="code-block">
                    <code>{`service owner publishes username.service
client resolves the name
VX6 opens a node-to-node session
target node forwards traffic to the real localhost target`}</code>
                  </pre>

                  <h3>Direct IPv6 mode</h3>
                  <p>
                    If the client already knows the peer IPv6 address, it can skip discovery and still
                    use VX6 service forwarding directly by address.
                  </p>

                  <h3>Relay proxy mode</h3>
                  <p>
                    VX6 can build a multi-hop relay path when the user prefers a routed path instead of a
                    straight direct connection. Relay selection uses health, RTT, diversity, and
                    duplicate avoidance.
                  </p>
                </section>

                <section id="hidden">
                  <h2>Hidden services in detail</h2>
                  <p>
                    Hidden services are reached by alias instead of by a normal public service endpoint.
                    The owner publishes routing metadata, not a standard service address, and the network
                    builds the path in the background.
                  </p>

                  <HiddenFlowDiagram />

                  <div className="table-scroll">
                    <table className="wikitable">
                      <thead>
                        <tr>
                          <th>Component</th>
                          <th>Count</th>
                          <th>Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Active intros</td>
                          <td>3</td>
                          <td>Primary hidden-service entry points.</td>
                        </tr>
                        <tr>
                          <td>Standby intros</td>
                          <td>2</td>
                          <td>Backup entry points for resilience.</td>
                        </tr>
                        <tr>
                          <td>Guard nodes</td>
                          <td>2</td>
                          <td>Owner-side signaling and route protection role.</td>
                        </tr>
                        <tr>
                          <td>Rendezvous candidates</td>
                          <td>3</td>
                          <td>Candidate meeting points where streams can be joined.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <ol className="doc-steps">
                    <li>
                      <div>
                        <h3>The owner publishes the alias</h3>
                        <p>
                          The alias carries intro and routing metadata instead of a normal public service
                          endpoint.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3>The client resolves the alias</h3>
                        <p>
                          VX6 chooses an intro path, guard path, and rendezvous candidate based on live
                          peers in the local registry.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3>Both sides build toward X</h3>
                        <p>
                          The client and owner each build relay legs toward the same rendezvous point,
                          where the streams are joined before the owner forwards into the localhost
                          target.
                        </p>
                      </div>
                    </li>
                  </ol>

                  <h3>Why this is stronger for private service hosting</h3>
                  <ul>
                    <li>Owner application remains localhost-only; no direct public app port exposure.</li>
                    <li>Descriptor validation requires signature, freshness, and multi-source agreement.</li>
                    <li>Setup path and data path are separated, reducing simple tracing opportunities.</li>
                    <li>Dual-leg rendezvous means both sides build independently toward the same meeting point.</li>
                    <li>Hidden control flow includes anti-replay protections for setup signaling.</li>
                  </ul>

                  <h3>Benchmark reporting approach (without hardcoded numbers)</h3>
                  <p>
                    VX6 benchmark reports are presented by method categories instead of marketing claims:
                    descriptor resolve latency, rendezvous setup time, data throughput, and churn recovery
                    success under relay/node changes.
                  </p>
                </section>

                <section id="ebpf">
                  <h2>eBPF and performance</h2>
                  <p>
                    On Linux, VX6 includes experimental eBPF/XDP work for traffic classification and
                    relay-side networking decisions. That lets the control plane stay readable in Go while
                    hot networking work can move closer to the kernel.
                  </p>
                  <ul>
                    <li>VX6 traffic can be identified early.</li>
                    <li>Busy relay nodes can keep their hot path lightweight.</li>
                    <li>Kernel-side logic reduces extra work on the relay path.</li>
                    <li>The current release still treats this path as experimental rather than a proven production fast path.</li>
                  </ul>

                  <ServiceStackDiagram />
                </section>

                <section id="platforms">
                  <h2>Platform support and app layers</h2>
                  <p>
                    VX6 protocol/runtime is Linux-first with Windows-compatible coverage and macOS
                    buildability targets. Application layers (desktop/mobile) are being built as separate
                    products on top of the same core SDK and protocol contracts.
                  </p>
                  <ul>
                    <li>Linux is the main branch for protocol and release work.</li>
                    <li>Windows support is available and kept behaviorally aligned.</li>
                    <li>macOS builds are supported for CLI and app tracks.</li>
                    <li>Desktop app track: VX6 MeshChat (calls/files/chat) on top of VX6 core.</li>
                    <li>Transport layer supports TCP and QUIC.</li>
                    <li>Android and iOS app tracks are in active integration planning.</li>
                    <li>Linux-only features such as systemd and eBPF management do not become native Windows features automatically.</li>
                  </ul>
                </section>

                <section id="sdwan">
                  <h2>How VX6 can evolve into SD-WAN style deployments</h2>
                  <p>
                    VX6 already has identity-based peers, decentralized discovery, relay fallback, and
                    localhost service routing. For SD-WAN style use, the next layer is policy and
                    operations: route preferences, branch failover rules, and richer observability.
                  </p>
                  <ul>
                    <li>Keep branch apps local while sharing by name over VX6 overlay.</li>
                    <li>Select direct vs relay paths based on policy and health.</li>
                    <li>Add operator controls for SLA thresholds and route enforcement.</li>
                    <li>Use common backend contracts so desktop/mobile admin tools stay aligned.</li>
                  </ul>
                </section>
              </div>
            </div>
          </article>
        </div>
      </main>
    </PageShell>
  );
}
