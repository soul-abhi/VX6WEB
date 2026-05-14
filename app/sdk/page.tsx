import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'SDK and App Builder Guide',
  description:
    'Practical guide to build apps and software on VX6 using the shared backend contract, platform UI layers, and contribution workflow.',
  alternates: {
    canonical: '/sdk',
  },
};

export default function SDKGuidePage() {
  return (
    <PageShell currentPage="sdk">
      <main className="page-content">
        <div className="wrapper">
          <article className="article-shell">
            <p className="article-meta">Builder guide</p>
            <h1>SDK and App Builder Guide</h1>
            <p className="article-intro">
              This page is the single start point for developers who want to build apps on VX6.
              Backend maintainers keep VX6 runtime behavior stable. UI teams build platform-specific
              experiences on top of that backend.
            </p>

            <div className="doc-main content-stack">
              <section>
                <h2>1. Core idea</h2>
                <ul>
                  <li>Do not reimplement protocol logic in each UI.</li>
                  <li>Use shared backend (`vx6d`) as your app-facing runtime contract.</li>
                  <li>Build platform UI separately: Tauri, Android, iOS, Web.</li>
                </ul>
              </section>

              <section>
                <h2>2. Start the shared backend</h2>
                <pre className="code-block">
                  <code>{`go build -o vx6d ./apps/vx6backend/cmd/vx6d
./vx6d --listen 127.0.0.1:4866
curl -fsS http://127.0.0.1:4866/health`}</code>
                </pre>
                <p>
                  Once `vx6d` is running, your UI calls local endpoints instead of shelling raw commands.
                </p>
              </section>

              <section>
                <h2>3. API actions your UI should map</h2>
                <ul>
                  <li>Node lifecycle: init, start, stop, status.</li>
                  <li>General command bridge: peer/service/list/DHT operations.</li>
                  <li>Chat send endpoint for message workflow integration.</li>
                </ul>
                <p>
                  Contract reference: <code>apps/vx6backend/API.md</code>
                </p>
              </section>

              <section>
                <h2>4. Platform folders and responsibilities</h2>
                <div className="feature-grid">
                  <article className="feature-card">
                    <h3>Tauri (Desktop)</h3>
                    <p>Focus on UX, session controls, chat/service actions, and runtime logs panel.</p>
                  </article>
                  <article className="feature-card">
                    <h3>Android</h3>
                    <p>Build mobile UI and bridge actions to same backend behavior and message flow.</p>
                  </article>
                  <article className="feature-card">
                    <h3>iOS</h3>
                    <p>Mirror Android functional behavior while keeping iOS-native UX and permissions.</p>
                  </article>
                  <article className="feature-card">
                    <h3>Web/Other Desktop UI</h3>
                    <p>Consume local backend contract and keep protocol logic out of frontend code.</p>
                  </article>
                </div>
              </section>

              <section>
                <h2>5. Suggested developer workflow</h2>
                <ol className="doc-steps">
                  <li>
                    <div>
                      <h3>Pick one scope</h3>
                      <p>Backend endpoint, one UI feature, or one platform integration issue.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>Implement with backend-first contract</h3>
                      <p>Keep behavior aligned with `vx6d` and update API docs if contract changes.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>Validate and submit</h3>
                      <p>Share test/build evidence and screenshots for UI contributions.</p>
                    </div>
                  </li>
                </ol>
              </section>

              <section className="note">
                <strong>Quick links:</strong> {' '}
                <Link href="/docs">Documentation Overview</Link> ·{' '}
                <Link href="/how-to-use">How to Use VX6</Link> ·{' '}
                <Link href="/contributing">Contributing</Link>
              </section>
            </div>
          </article>
        </div>
      </main>
    </PageShell>
  );
}
