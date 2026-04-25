import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Download',
  description:
    'Build and install VX6, initialize a node, run it with systemd, and understand the default file locations on Linux.',
  alternates: {
    canonical: '/download',
  },
};

export default function DownloadPage() {
  return (
    <PageShell currentPage="download">
      <main className="page-content">
        <div className="wrapper">
          <article className="article-shell">
            <p className="article-meta">Install and setup</p>
            <h1>Download and Setup</h1>

            <div className="doc-layout">
              <aside className="page-side">
                <div className="page-side-box">
                  <h3>Requirements</h3>
                  <table className="spec">
                    <tbody>
                      <tr>
                        <td>OS</td>
                        <td>Linux</td>
                      </tr>
                      <tr>
                        <td>Network</td>
                        <td>IPv6 reachability</td>
                      </tr>
                      <tr>
                        <td>Build</td>
                        <td>Go toolchain</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="page-side-box">
                  <h3>Default paths</h3>
                  <pre className="code-block">
                    <code>{`~/.config/vx6/config.json
~/.config/vx6/identity.json
~/.config/vx6/node.pid
~/.local/share/vx6
~/Downloads`}</code>
                  </pre>
                </div>
              </aside>

              <div className="doc-main">
                <section>
                  <h2>Build from source</h2>
                  <pre className="code-block">
                    <code>go build -o ./vx6 ./cmd/vx6</code>
                  </pre>
                </section>

                <section>
                  <h2>Initialize your node</h2>
                  <pre className="code-block">
                    <code>{`./vx6 init \\
  --name alice \\
  --listen '[::]:4242' \\
  --advertise '[2001:db8::10]:4242' \\
  --bootstrap '[2001:db8::1]:4242'`}</code>
                  </pre>
                  <p>
                    The <code>--bootstrap</code> address is simply a known live VX6 peer. It can be a
                    public entry node, a mirror, or another machine that already sees the network.
                  </p>
                </section>

                <section>
                  <h2>Start the runtime</h2>
                  <pre className="code-block">
                    <code>./vx6 node</code>
                  </pre>
                </section>

                <section>
                  <h2>Run with systemd</h2>
                  <pre className="code-block">
                    <code>{`systemctl --user enable --now vx6
systemctl --user status vx6
systemctl --user reload vx6`}</code>
                  </pre>
                  <p>
                    This keeps the node in the background and makes reloads easy when services or config
                    change.
                  </p>
                </section>

                <section>
                  <h2>What you get after setup</h2>
                  <ul>
                    <li>A persistent node identity.</li>
                    <li>A local registry of peers, services, and aliases.</li>
                    <li>A service network that can grow from any known live node.</li>
                    <li>Direct, relay, hidden, and raw IPv6 access modes.</li>
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
