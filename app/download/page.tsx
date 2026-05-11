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
    <PageShell currentPage="download" showFooter={false}>
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
      </main>
    </PageShell>
  );
}
