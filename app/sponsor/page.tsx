import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Sponsor',
  description:
    'Support VX6 through GitHub Sponsors, infrastructure support, ecosystem partnerships, and technical collaboration.',
  alternates: {
    canonical: '/sponsor',
  },
};

const sponsorCompanies = [
  {
    name: 'HACKITISE LAB Pvt. Ltd.',
    website: 'https://hackitiselabs.in/',
    email: 'connect@hackitiselabs.in',
    body: 'Technology partner supporting secure engineering, product delivery, and infrastructure collaboration for modern decentralized platforms.',
  },
];

export default function SponsorPage() {
  return (
    <PageShell currentPage="sponsor">
      <main className="page-content">
        <div className="wrapper">
          <article className="article-shell">
            <p className="article-meta">Community and sponsorship</p>
            <h1>Sponsor VX6</h1>

            <div className="sponsor-layout">
              <section className="sponsor-panel">
                <div className="panel-head">
                  <h2>Where support goes</h2>
                  <span className="panel-tag">Minimal page</span>
                </div>
                <div className="feature-grid sponsor-grid">
                  <article className="feature-card">
                    <h3>Relay and hidden-path testing</h3>
                    <p>Long-running distributed tests, route validation, and public network checks.</p>
                  </article>
                  <article className="feature-card">
                    <h3>Documentation and onboarding</h3>
                    <p>Readable guides, diagrams, setup paths, use-case docs, and builder references.</p>
                  </article>
                  <article className="feature-card">
                    <h3>Builder ecosystem</h3>
                    <p>Reference apps, peer-first SDK examples, and public service patterns on top of VX6.</p>
                  </article>
                </div>

                <div className="note">
                  <strong>Good use for the left-side space:</strong> show relay-region coverage, funding
                  goals, public testnet health, or a simple timeline of what recent sponsorship unlocked.
                </div>
              </section>

              <aside className="sponsor-panel sponsor-side">
                <div className="panel-head">
                  <h2>Support VX6</h2>
                  <a
                    className="github-button"
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>

                <div className="sponsor-embed-slot">
                  <strong>GitHub Sponsors button slot</strong>
                  <p>Paste your GitHub sponsor button or embed code into this block.</p>
                </div>

                <div className="sponsor-company-list">
                  {sponsorCompanies.map((company) => (
                    <article key={company.name} className="sponsor-company-card">
                      <div className="sponsor-logo-slot">{company.name.slice(0, 2).toUpperCase()}</div>
                      <div>
                        <h3>{company.name}</h3>
                        <p>{company.body}</p>
                        <div className="company-links">
                          <a href={company.website} target="_blank" rel="noopener noreferrer">
                            {company.website}
                          </a>
                          <a href={`mailto:${company.email}`}>{company.email}</a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </aside>
            </div>
          </article>
        </div>
      </main>
    </PageShell>
  );
}
