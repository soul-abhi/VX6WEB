import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Who uses VX6',
  description:
    'VX6 serves two main paths: individual service sharing and organizational self-hosted infrastructure across the public internet.',
  alternates: {
    canonical: '/who-uses-vx6',
  },
};

export default function WhoUsesVx6Page() {
  return (
    <PageShell currentPage="who-uses-vx6">
      <main className="page-content">
        <div className="wrapper">
          <article className="article-shell">
            <p className="article-meta">Use-case entry page</p>
            <h1>Who Uses VX6</h1>

            <div className="doc-main content-stack">
              <section>
                <p className="article-intro">
                  VX6 has two very strong use cases. One is individual peer-to-peer service sharing.
                  The other is organizational infrastructure: secure internal networks for self-hosted
                  apps, private tools, collaboration systems, and service stacks that can operate from
                  anywhere in the world.
                </p>
              </section>

              <section className="dual-case-grid">
                <article className="feature-card">
                  <h2>For individuals</h2>
                  <p>
                    Share a localhost web app, SSH service, admin panel, or personal tool with a friend
                    without forwarding the application port to the public internet.
                  </p>
                  <p>
                    This is the cleanest use of real IPv6: your local service stays local, the other
                    person gets a local port, and the network in between stays peer to peer.
                  </p>
                  <Link href="/who-uses-vx6/individuals">Open individual use cases</Link>
                </article>

                <article className="feature-card">
                  <h2>For organizations</h2>
                  <p>
                    Build secure internal networks for self-hosted services, private chat, internal
                    dashboards, review rooms, and distributed stacks while keeping the data in your own
                    hands.
                  </p>
                  <p>
                    It can reduce hosting cost, keep infrastructure private on the public internet, and
                    still make services reachable to teams from anywhere in the world.
                  </p>
                  <Link href="/who-uses-vx6/organizations">Open organizational use cases</Link>
                </article>
              </section>
            </div>
          </article>
        </div>
      </main>
    </PageShell>
  );
}
