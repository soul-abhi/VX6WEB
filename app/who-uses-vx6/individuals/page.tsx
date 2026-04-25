import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Individuals use VX6',
  description:
    'How individuals can use VX6 for peer-to-peer localhost sharing, direct IPv6 access, private admin tools, and friend-to-friend service access.',
  alternates: {
    canonical: '/who-uses-vx6/individuals',
  },
};

export default function IndividualUsePage() {
  return (
    <PageShell currentPage="who-uses-vx6">
      <main className="page-content">
        <div className="wrapper">
          <article className="article-shell">
            <p className="article-meta">Individual use cases</p>
            <h1>VX6 for Individuals</h1>

            <div className="doc-main content-stack">
              <section>
                <p className="article-intro">
                  VX6 is a clean way for one person to share a local service with another person over a
                  true peer-to-peer path. The local service can stay on localhost. The other side gets a
                  normal local port and uses it as if the app were nearby.
                </p>
              </section>

              <section>
                <h2>What that looks like</h2>
                <ul>
                  <li>Share SSH with a friend without opening the real SSH service to the public internet.</li>
                  <li>Share a localhost web app for testing, review, or support.</li>
                  <li>Expose a private admin panel by hidden alias instead of by public endpoint.</li>
                  <li>Run a personal chat or collaboration app on your own node.</li>
                </ul>
              </section>

              <section>
                <h2>Why it feels better than old tunnel workflows</h2>
                <p>
                  Traditional methods often mean manual forwarding, public app ports, or routing
                  everything through a more centralized service. VX6 keeps the path peer to peer and
                  keeps the real application local.
                </p>
                <div className="note">
                  <strong>Main benefit:</strong> your friend connects to a local port on their own
                  machine while your real app keeps running on localhost on yours.
                </div>
              </section>
            </div>
          </article>
        </div>
      </main>
    </PageShell>
  );
}
