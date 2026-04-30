import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { externalInterfaceSections } from '@/lib/docs-content';

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'External interface documentation for VX6 web interactions and outputs.',
  alternates: {
    canonical: '/docs',
  },
};

export default function DocumentationPage() {
  return (
    <PageShell currentPage="docs">
      <main className="page-content">
        <div className="wrapper">
          <article className="article-shell">
            <p className="article-meta">External interfaces</p>
            <h1>Documentation</h1>

            <div className="doc-layout">
              <aside className="page-side">
                <div className="page-side-box toc">
                  <div className="toc-title">Contents</div>
                  <ol>
                    {externalInterfaceSections.map((section) => (
                      <li key={section.id}>
                        <a href={`#${section.id}`}>{section.title}</a>
                      </li>
                    ))}
                  </ol>
                </div>
              </aside>

              <div className="doc-main">
                {externalInterfaceSections.map((section) => (
                  <section id={section.id} key={section.id}>
                    <h2>{section.title}</h2>
                    <p>{section.description}</p>
                    <div className="doc-card-grid" role="list">
                      {section.items.map((item) => (
                        <article key={item.title} className="feature-card" role="listitem">
                          <h3>{item.title}</h3>
                          <p>{item.body}</p>
                        </article>
                      ))}
                    </div>
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
