import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Download',
  description:
    'Build and install VX6 for Linux or Windows, initialize a node, and understand the current release paths and platform branches.',
  alternates: {
    canonical: '/download',
  },
};

export default function DownloadPage() {
  const activityBars = [32, 58, 46, 72, 54, 80, 92, 64, 70, 50, 84, 60];

  return (
    <PageShell currentPage="download">
      <main className="page-content download-page-content">
        <section className="download-hero">
          <div className="wrapper">
            <div className="download-hero-grid">
              <div className="download-copy">
                <p className="download-eyebrow">VX6 Desktop</p>
                <h1 className="download-title">Download the VX6 desktop app for a faster, private experience.</h1>
                <p className="download-lede">
                  Fast and minimal. Work without distractions while your node stays synced across the VX6 network.
                </p>
                <div className="download-actions">
                  <a
                    className="download-primary"
                    href="https://github.com/ethical-buddy/VX6/releases/latest"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download for Linux
                  </a>
                  <Link className="download-secondary" href="/how-to-use">
                    Install guide
                  </Link>
                </div>
                <div className="download-platforms">
                  <span className="download-chip">Linux</span>
                  <span className="download-chip">Windows</span>
                  <span className="download-chip">Open source</span>
                </div>
                <div className="download-meta-grid">
                  <div className="download-meta-card">
                    <span className="download-meta-label">Release channel</span>
                    <span className="download-meta-value">Stable</span>
                  </div>
                  <div className="download-meta-card">
                    <span className="download-meta-label">Checksum</span>
                    <span className="download-meta-value">Checksums available</span>
                  </div>
                  <div className="download-meta-card">
                    <span className="download-meta-label">Footprint</span>
                    <span className="download-meta-value">Compact install</span>
                  </div>
                </div>
              </div>
              <div className="download-card">
                <div className="download-card-header">
                  <div className="download-card-dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="download-card-title">
                    <span>VX6 Control Center</span>
                    <span className="download-card-tag">Encrypted</span>
                  </div>
                </div>
                <div className="download-card-body">
                  <div className="download-card-row">
                    <div>
                      <p className="download-card-label">Node status</p>
                      <p className="download-card-value">Operational</p>
                    </div>
                    <span className="download-status">Online</span>
                  </div>
                  <div className="download-card-row download-card-row-split">
                    <div className="download-stat">
                      <span className="download-card-label">Peers</span>
                      <span className="download-card-value">1,428</span>
                    </div>
                    <div className="download-stat">
                      <span className="download-card-label">Latency</span>
                      <span className="download-card-value">24ms</span>
                    </div>
                    <div className="download-stat">
                      <span className="download-card-label">Bandwidth</span>
                      <span className="download-card-value">1.2GB</span>
                    </div>
                  </div>
                  <div className="download-card-chart">
                    <span className="download-card-label">Weekly sync</span>
                    <div className="download-bars" aria-hidden="true">
                      {activityBars.map((value, index) => (
                        <span
                          key={`bar-${index.toString()}`}
                          className="download-bar"
                          style={{ height: `${value}%`, animationDelay: `${index * 0.05}s` }}
                        />
                      ))}
                    </div>
                  </div>
                  <ul className="download-card-list">
                    <li>
                      <span className="download-bullet" aria-hidden="true" />
                      Update controls
                    </li>
                    <li>
                      <span className="download-bullet" aria-hidden="true" />
                      Circuit overview
                    </li>
                    <li>
                      <span className="download-bullet" aria-hidden="true" />
                      Local settings
                    </li>
                  </ul>
                </div>
                <div className="download-card-footer">
                  <span className="download-footnote">Preview panel</span>
                  <span className="download-pill">Live view</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="download-docs">
          <div className="wrapper">
            <article className="article-shell">
              <p className="article-meta">Install &amp; Setup</p>
              <h2>Build and run VX6</h2>
              <div className="doc-layout">
                <aside className="page-side">
                  <div className="page-side-box">
                    <h3>Requirements</h3>
                    <div className="table-scroll">
                      <table className="spec">
                        <tbody>
                          <tr>
                            <td>OS</td>
                            <td>Linux, Windows, and macOS build targets</td>
                          </tr>
                          <tr>
                            <td>Network</td>
                            <td>IPv6 reachability</td>
                          </tr>
                          <tr>
                            <td>Build</td>
                            <td>Go toolchain or release binary</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </aside>

                <div className="doc-main">
                  <section>
                    <h2>Choose your branch</h2>
                    <ul>
                      <li>
                        <strong>main</strong>: Linux-first branch
                      </li>
                      <li>
                        <strong>Windows-compatible</strong>: Windows build branch with aligned protocol behavior
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2>Clone and install</h2>
                    <pre className="code-block">
                      <code>{`git clone https://github.com/ethical-buddy/VX6
cd VX6
sudo make install`}</code>
                    </pre>
                    <p>
                      <code>make install</code> builds the binary and installs the user systemd unit so the node can be
                      started cleanly in the background.
                    </p>
                  </section>

                  <section>
                    <h2>Windows build</h2>
                    <pre className="code-block">
                      <code>{`go build -o vx6.exe ./cmd/vx6
go build -o vx6-gui.exe ./cmd/vx6-gui`}</code>
                    </pre>
                    <p>
                      Build Windows binaries from the <code>Windows-compatible</code> branch. That branch is intended to
                      stay aligned with the current VX6 protocol and feature set.
                    </p>
                  </section>

                  <section>
                    <h2>macOS build</h2>
                    <pre className="code-block">
                      <code>{`GOOS=darwin GOARCH=amd64 go build -o vx6-darwin ./cmd/vx6`}</code>
                    </pre>
                    <p>
                      macOS build targets are validated as part of cross-platform release gating while Linux
                      remains the source protocol branch.
                    </p>
                  </section>

                  <section>
                    <h2>Initialize your node</h2>
                    <pre className="code-block">
                      <code>{`./vx6 init \\
  --name alice \\
  --listen '[::]:4242' \\
  --advertise '[2001:db8::10]:4242' \\
  --bootstrap '[2001:db8::1]:4242'`}</code>
                    </pre>
                    <p>
                      The <code>--bootstrap</code> address is simply a known live VX6 peer. It can be a public entry node,
                      a mirror, or another machine that already sees the network.
                    </p>
                  </section>

                  <section>
                    <h2>Start the runtime</h2>
                    <pre className="code-block">
                      <code>{`vx6 node
# or run it as a service
systemctl --user enable --now vx6`}</code>
                    </pre>
                  </section>

                  <section>
                    <h2>Run with systemd</h2>
                    <pre className="code-block">
                      <code>{`systemctl --user enable --now vx6
systemctl --user status vx6
systemctl --user reload vx6`}</code>
                    </pre>
                    <p>
                      This keeps the node in the background and makes reloads easy when services or config change.
                    </p>
                  </section>

                  <section>
                    <h2>Join the global VX6 network</h2>
                    <pre className="code-block">
                      <code>{`vx6 init \\
  --name alice \\
  --listen '[::]:4242' \\
  --advertise '[your-ipv6]:4242' \\
  --bootstrap '[YOUR_PUBLIC_VX6_NODE_1]:4242'`}</code>
                    </pre>
                    <p>
                      We are also building a global VX6 network. Join it through one of the public VX6 entry nodes.
                      Keep this section updated with your current live node IPs and mirrors.
                    </p>
                  </section>

                  <section>
                    <h2>What you get after setup</h2>
                    <ul>
                      <li>A persistent node identity.</li>
                      <li>A local registry of peers, services, and aliases.</li>
                      <li>A service network that can grow from any known live node.</li>
                      <li>Direct, relay, hidden, and raw IPv6 access modes.</li>
                    </ul>
                  </section>

                  <section>
                    <h2>App layer status</h2>
                    <p>
                      Protocol/runtime is production-focused. On top of it, VX6 MeshChat is under active
                      development as a decentralized communication product for communities and teams.
                    </p>
                  </section>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
