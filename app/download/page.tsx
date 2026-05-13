import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Download',
  description:
    'Build and install VX6 for Linux or Windows, initialize a node, and understand the current release paths and platform branches.',
  alternates: { canonical: '/download' },
};

const iconBaseProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
} as const;

function LinuxIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...iconBaseProps}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 9l3 3-3 3" />
      <line x1="12" y1="15" x2="17" y2="15" />
    </svg>
  );
}

function WindowsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...iconBaseProps}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="9" y1="10" x2="9" y2="20" />
    </svg>
  );
}

function MacIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...iconBaseProps}>
      <path d="M16.5 8.6c-1.3 0-2.3.7-3.2.7s-1.7-.7-3.2-.7c-1.8 0-3.5 1.1-4.3 2.8-1.7 3.4-.4 8.4 1.3 10.7.8 1.1 1.8 2.3 3.1 2.3 1.2 0 1.7-.8 3.2-.8 1.6 0 1.9.8 3.2.8 1.4 0 2.3-1.1 3.1-2.2 1-1.3 1.4-2.7 1.4-2.7-.1 0-2.7-1-2.7-3.7 0-2.2 1.8-3.4 2-3.5-1.1-1.6-2.8-1.7-3.9-1.7z" />
      <path d="M13.8 5.3c.6-.8 1-1.9.9-3-1 .1-2.1.7-2.8 1.5-.6.7-1.1 1.8-1 2.9 1.1.1 2.1-.5 2.9-1.4z" />
    </svg>
  );
}

function OpenSourceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...iconBaseProps}>
      <polyline points="8 7 3 12 8 17" />
      <polyline points="16 7 21 12 16 17" />
      <line x1="12" y1="5" x2="12" y2="19" />
    </svg>
  );
}

export default function DownloadPage() {
  const nodes = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: 20 + Math.random() * 60,
    y: 15 + Math.random() * 70,
    size: 3 + Math.random() * 4,
    delay: i * 0.3,
  }));

  const connections = [
    [0, 3], [1, 5], [2, 7], [3, 8], [4, 9], [5, 10],
    [6, 11], [7, 12], [8, 13], [9, 14], [10, 15], [11, 16],
    [1, 8], [3, 12], [5, 14], [7, 16], [2, 9], [4, 11],
  ];

  return (
    <PageShell currentPage="download">
      <main className="page-content dl-page">
        {/* Hero */}
        <section className="dl-hero">
          <div className="wrapper dl-hero-inner">
            <div className="dl-hero-content">
              <span className="dl-badge">
                <span className="dl-badge-dot" />
                Open Source &middot; Decentralized
              </span>
              <h1 className="dl-headline">
                Download <span className="dl-gradient-text">VX6</span> and join the mesh
              </h1>
              <p className="dl-subtitle">
                A lightweight, encrypted peer-to-peer runtime. Run your own node, connect to the global VX6 network, and communicate without centralized infrastructure.
              </p>
              <div className="dl-cta-row">
                <a
                  className="uiverse-dl-btn"
                  href="https://github.com/ethical-buddy/VX6/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span><strong>DOWNLOAD</strong></span>
                </a>
                <a
                  className="dl-btn dl-btn--secondary"
                  href="https://github.com/ethical-buddy/VX6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
                <Link className="dl-btn dl-btn--ghost" href="/how-to-use">
                  Install Guide →
                </Link>
              </div>
              <div className="dl-platform-tags">
                <span className="dl-tag">
                  <LinuxIcon className="dl-tag-icon" />
                  Linux
                </span>
                <span className="dl-tag">
                  <WindowsIcon className="dl-tag-icon" />
                  Windows
                </span>
                <span className="dl-tag">
                  <MacIcon className="dl-tag-icon" />
                  macOS
                </span>
                <span className="dl-tag">
                  <OpenSourceIcon className="dl-tag-icon" />
                  Open Source
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Network Visualization */}
        <section className="dl-network-section">
          <div className="wrapper">
            <div className="dl-network-header">
              <h2>Live Network Topology</h2>
              <p>VX6 nodes form a self-healing mesh. Each peer discovers and connects to others without central coordination.</p>
            </div>
            <div className="dl-network-canvas">
              <svg className="dl-network-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                {connections.map(([from, to], i) => (
                  <line
                    key={`conn-${i}`}
                    className="dl-net-line"
                    x1={`${nodes[from].x}`}
                    y1={`${nodes[from].y}`}
                    x2={`${nodes[to].x}`}
                    y2={`${nodes[to].y}`}
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
                {nodes.map((node) => (
                  <g key={`node-${node.id}`}>
                    <circle
                      className="dl-net-pulse"
                      cx={node.x}
                      cy={node.y}
                      r={node.size + 2}
                      style={{ animationDelay: `${node.delay}s` }}
                    />
                    <circle
                      className="dl-net-node"
                      cx={node.x}
                      cy={node.y}
                      r={node.size}
                      style={{ animationDelay: `${node.delay}s` }}
                    />
                  </g>
                ))}
              </svg>
              <div className="dl-network-stats">
                <div className="dl-net-stat">
                  <span className="dl-net-stat-num">1,428</span>
                  <span className="dl-net-stat-label">Active Peers</span>
                </div>
                <div className="dl-net-stat">
                  <span className="dl-net-stat-num">24ms</span>
                  <span className="dl-net-stat-label">Avg Latency</span>
                </div>
                <div className="dl-net-stat">
                  <span className="dl-net-stat-num">99.7%</span>
                  <span className="dl-net-stat-label">Uptime</span>
                </div>
                <div className="dl-net-stat">
                  <span className="dl-net-stat-num">IPv6</span>
                  <span className="dl-net-stat-label">Native Protocol</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="dl-features">
          <div className="wrapper">
            <div className="dl-features-grid">
              <div className="dl-feature-card">
                <div className="dl-feature-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" />
                    <line x1="6" y1="18" x2="6.01" y2="18" />
                  </svg>
                </div>
                <h3>Zero Infrastructure</h3>
                <p>No servers, no cloud. Your node is your infrastructure. Connect directly to peers over encrypted IPv6 tunnels.</p>
              </div>
              <div className="dl-feature-card">
                <div className="dl-feature-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>End-to-End Encrypted</h3>
                <p>Every connection is encrypted by default. Identity-based routing ensures only intended recipients can read your data.</p>
              </div>
              <div className="dl-feature-card">
                <div className="dl-feature-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <h3>Lightweight Runtime</h3>
                <p>Single binary, minimal footprint. Runs as a systemd service or standalone process with near-zero resource overhead.</p>
              </div>
              <div className="dl-feature-card">
                <div className="dl-feature-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3>Global Mesh</h3>
                <p>Join the worldwide VX6 network through any public entry node. Self-healing topology adapts as peers join and leave.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="dl-quickstart">
          <div className="wrapper">
            <div className="dl-qs-header">
              <h2>Quick Start</h2>
              <p>Get your node running in under 2 minutes</p>
            </div>
            <div className="dl-qs-steps">
              <div className="dl-qs-step">
                <div className="dl-qs-num">1</div>
                <div className="dl-qs-body">
                  <h3>Clone &amp; Build</h3>
                  <pre className="dl-code"><code>{`git clone https://github.com/ethical-buddy/VX6
cd VX6 && sudo make install`}</code></pre>
                </div>
              </div>
              <div className="dl-qs-step">
                <div className="dl-qs-num">2</div>
                <div className="dl-qs-body">
                  <h3>Initialize Node</h3>
                  <pre className="dl-code"><code>{`vx6 init --name alice \\
  --listen '[::]:4242' \\
  --advertise '[your-ipv6]:4242' \\
  --bootstrap '[entry-node]:4242'`}</code></pre>
                </div>
              </div>
              <div className="dl-qs-step">
                <div className="dl-qs-num">3</div>
                <div className="dl-qs-body">
                  <h3>Start &amp; Connect</h3>
                  <pre className="dl-code"><code>{`systemctl --user enable --now vx6
vx6 status`}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Builds */}
        <section className="dl-platforms">
          <div className="wrapper">
            <h2>Platform Builds</h2>
            <div className="dl-platform-grid">
              <div className="dl-platform-card">
                <div className="dl-platform-icon">
                  <LinuxIcon />
                </div>
                <h3>Linux</h3>
                <p>Primary branch. Native systemd integration, IPv6-first networking.</p>
                <pre className="dl-code dl-code--sm"><code>{`sudo make install
systemctl --user enable --now vx6`}</code></pre>
                <span className="dl-platform-badge">Recommended</span>
              </div>
              <div className="dl-platform-card">
                <div className="dl-platform-icon">
                  <WindowsIcon />
                </div>
                <h3>Windows</h3>
                <p>Windows-compatible branch with aligned protocol behavior.</p>
                <pre className="dl-code dl-code--sm"><code>{`go build -o vx6.exe ./cmd/vx6
go build -o vx6-gui.exe ./cmd/vx6-gui`}</code></pre>
              </div>
              <div className="dl-platform-card">
                <div className="dl-platform-icon">
                  <MacIcon />
                </div>
                <h3>macOS</h3>
                <p>Cross-platform build target validated in release gating.</p>
                <pre className="dl-code dl-code--sm"><code>{`GOOS=darwin GOARCH=amd64 \\
  go build -o vx6-darwin ./cmd/vx6`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="dl-info">
          <div className="wrapper">
            <div className="dl-info-grid">
              <div className="dl-info-card">
                <h3>What You Get</h3>
                <ul className="dl-info-list">
                  <li>A persistent node identity</li>
                  <li>Local registry of peers, services, and aliases</li>
                  <li>A service network that grows from any live node</li>
                  <li>Direct, relay, hidden, and raw IPv6 access modes</li>
                  <li>Encrypted communication by default</li>
                </ul>
              </div>
              <div className="dl-info-card">
                <h3>Requirements</h3>
                <ul className="dl-info-list">
                  <li>IPv6 reachability</li>
                  <li>Go toolchain (for building from source)</li>
                  <li>Linux, Windows, or macOS</li>
                  <li>~20MB disk space</li>
                  <li>Minimal RAM footprint</li>
                </ul>
              </div>
              <div className="dl-info-card">
                <h3>App Layer</h3>
                <p className="dl-info-text">
                  Protocol and runtime are production-focused. On top of it, <strong>VX6 MeshChat</strong> is under active development as a decentralized communication product for communities and teams.
                </p>
                <Link href="/future" className="dl-info-link">See the roadmap →</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
