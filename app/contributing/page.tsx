import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import {
  codingStandards,
  contributionSteps,
  issueReportTemplate,
  prProcess,
} from '@/lib/contributing-content';

export const metadata: Metadata = {
  title: 'Contributing',
  description: 'Contribution guidelines for the VX6 website and documentation.',
  alternates: {
    canonical: '/contributing',
  },
};

export default function ContributingPage() {
  return (
    <PageShell currentPage="contributing">
      <main className="page-content">
        <div className="wrapper">
          <article className="article-shell">
            <p className="article-meta">Guidelines</p>
            <h1>Contribution Guidelines</h1>

            <div className="doc-layout">
              <aside className="page-side">
                <div className="page-side-box toc">
                  <div className="toc-title">Contents</div>
                  <ol>
                    <li>
                      <a href="#steps">How to contribute</a>
                    </li>
                    <li>
                      <a href="#standards">Coding standards</a>
                    </li>
                    <li>
                      <a href="#pr-process">PR process</a>
                    </li>
                    <li>
                      <a href="#issues">Issue reporting</a>
                    </li>
                  </ol>
                </div>
              </aside>

              <div className="doc-main">
                <section id="steps">
                  <h2>How to contribute</h2>
                  <ol className="doc-steps">
                    {contributionSteps.map((step) => (
                      <li key={step.title}>
                        <div>
                          <h3>{step.title}</h3>
                          <p>{step.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>

                <section id="standards">
                  <h2>Coding standards</h2>
                  <ul>
                    {codingStandards.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section id="pr-process">
                  <h2>PR process</h2>
                  <ul>
                    {prProcess.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section id="issues">
                  <h2>Issue reporting format</h2>
                  <p>Use this structure so reports are easier to triage:</p>
                  <ul>
                    {issueReportTemplate.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
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
