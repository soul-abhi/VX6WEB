import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { conductSections } from '@/lib/code-of-conduct-content';

export const metadata: Metadata = {
  title: 'Code of Conduct',
  description: 'Community expectations for contributing to VX6.',
  alternates: {
    canonical: '/code-of-conduct',
  },
};

export default function CodeOfConductPage() {
  return (
    <PageShell currentPage="code-of-conduct">
      <main className="page-content">
        <div className="wrapper">
          <article className="article-shell">
            <p className="article-meta">Community standards</p>
            <h1>Code of Conduct</h1>

            <div className="doc-layout">
              <aside className="page-side">
                <div className="page-side-box toc">
                  <div className="toc-title">Contents</div>
                  <ol>
                    {conductSections.map((section) => (
                      <li key={section.id}>
                        <a href={`#${section.id}`}>{section.title}</a>
                      </li>
                    ))}
                  </ol>
                </div>
              </aside>

              <div className="doc-main">
                {conductSections.map((section) => (
                  <section id={section.id} key={section.id}>
                    <h2>{section.title}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </section>
                ))}
              </div>
            </div>
          </article>
        </div>
      </main>
    </PageShell>
  );
}
