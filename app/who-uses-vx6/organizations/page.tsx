import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Organizations use VX6',
  description:
    'How organizations can use VX6 for secure internal networks, self-hosted services, low-latency collaboration, and private infrastructure on the public internet.',
  alternates: {
    canonical: '/who-uses-vx6/organizations',
  },
};

export default function OrganizationUsePage() {
  return (
    <PageShell currentPage="who-uses-vx6">
      <main className="page-content">
        <div className="wrapper">
          <article className="article-shell">
            <p className="article-meta">Organizational use cases</p>
            <h1>VX6 for Organizations</h1>

            <div className="doc-main content-stack">
              <section>
                <p className="article-intro">
                  Organizations can use VX6 to build secure internal networks for self-hosted services,
                  team tools, collaboration apps, and operational stacks. Data stays in their hands.
                  Services can stay private on the public internet and still be reachable by teams from
                  anywhere in the world.
                </p>
              </section>

              <section>
                <h2>What organizations can run on it</h2>
                <table className="wikitable">
                  <thead>
                    <tr>
                      <th>System</th>
                      <th>How VX6 helps</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Internal chat and team messaging</td>
                      <td>Self-hosted collaboration with direct service access and low-latency peer paths.</td>
                    </tr>
                    <tr>
                      <td>Slack-like internal apps</td>
                      <td>Private team communication without handing message flow and retention to a third party.</td>
                    </tr>
                    <tr>
                      <td>Dashboards and internal portals</td>
                      <td>Keep dashboards local to their nodes while making them reachable to the team.</td>
                    </tr>
                    <tr>
                      <td>Frontend, backend, and database stacks</td>
                      <td>Split services across nodes while preserving localhost deployment patterns.</td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <section>
                <h2>Why this matters</h2>
                <ul>
                  <li>Data stays in the organization’s hands.</li>
                  <li>Hosting cost can stay lower because the network does not need to be app-centralized first.</li>
                  <li>Service access can stay fast because the system is built around peer-to-peer paths.</li>
                  <li>Secure internal tooling can still work over the public internet without making every app a public endpoint.</li>
                </ul>
              </section>

              <section>
                <div className="note">
                  <strong>Good fit:</strong> companies running self-hosted chat, internal portals,
                  admin tools, review rooms, or distributed stacks that want privacy, direct reach, and
                  simpler infrastructure ownership.
                </div>
              </section>
            </div>
          </article>
        </div>
      </main>
    </PageShell>
  );
}
