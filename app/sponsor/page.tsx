import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Sponsors',
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
    body: 'HACKITISE LAB Pvt. Ltd. is sponsoring VX6 and supporting secure engineering, product delivery, and infrastructure collaboration for the project.',
  },
];

export default function SponsorPage() {
  return (
    <PageShell currentPage="sponsor">
      <main className="page-content">
        <div className="wrapper">
          <article className="article-shell">
            <p className="article-meta">Community and sponsorship</p>
            <h1>Sponsors</h1>

            <div className="sponsor-layout">
              <section className="sponsor-panel">
                <div className="panel-head">
                  <h2>Where sponsor support goes</h2>
                  <span className="panel-tag">Project funding</span>
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
                  <strong>Current sponsor note:</strong> VX6 is actively looking for infrastructure,
                  documentation, and ecosystem sponsors who want to help grow a public peer-to-peer
                  service network and the apps built on top of it.
                </div>

                <div className="note">
                  <strong>Project sponsor credit:</strong> HackitiseLabs Pvt. Ltd. and Dailker are
                  currently highlighted alongside the project in the release documentation and public
                  project material.
                </div>
              </section>

              <aside className="sponsor-panel sponsor-side">
                <div className="panel-head">
                  <h2>GitHub Sponsors</h2>
                  <a
                    className="github-button"
                    href="https://github.com/sponsors/ethical-buddy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>

                <div className="sponsor-embed-slot sponsor-iframe-wrap">
                  <iframe
                    src="https://github.com/sponsors/ethical-buddy/card"
                    title="Sponsor ethical-buddy"
                    height="225"
                    width="600"
                    style={{ border: 0, width: '100%' }}
                    loading="lazy"
                  />
                </div>

                <div className="sponsor-side-copy">
                  <strong>Current sponsors</strong>
                  <p>
                    Sponsorship can cover public nodes, relay testing, documentation, and the builder
                    ecosystem around VX6.
                  </p>
                  <p>
                    Maintainer and sponsor references currently highlight Dailker through GitHub alongside
                    the HackitiseLabs support line used across project materials.
                  </p>
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
