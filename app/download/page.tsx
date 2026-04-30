import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Download',
  description:
    'Build and install VX6 for Linux or Windows, initialize a node, and understand the current release paths and platform branches.',
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
                        <td>Linux and Windows</td>
                      </tr>
                      <tr>
                        <td>Network</td>
                        <td>IPv6 reachability</td>
                      </tr>
                      <tr>
                        <td>Build</td>
                        <td>Go toolchain or release binary</td>
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
                  <p>Linux uses the paths above. Windows uses its normal user config and cache directories.</p>
                </div>
              </aside>

              <div className="doc-main">
                <section>
                  <h2>Choose your branch</h2>
                  <ul>
                    <li><strong>main</strong>: Linux-first branch</li>
                    <li><strong>Windows-compatible</strong>: Windows build branch with the same current VX6 protocol and feature behavior</li>
                  </ul>
                </section>

                <section>
                  <h2>Clone and install</h2>
                  <pre className="code-block">
                    <code>{`git clone https://github.com/ethical-buddy/VX6
cd VX6
sudo make install`}</code>
                  </pre>
                  <p>
                    <code>make install</code> builds the binary and installs the user systemd unit so the
                    node can be started cleanly in the background.
                  </p>
                </section>

                <section>
                  <h2>Windows build</h2>
                  <pre className="code-block">
                    <code>{`go build -o vx6.exe ./cmd/vx6
go build -o vx6-gui.exe ./cmd/vx6-gui`}</code>
                  </pre>
                  <p>
                    Build Windows binaries from the <code>Windows-compatible</code> branch. That branch is
                    intended to stay aligned with the current VX6 protocol and feature set.
                  </p>
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
                    <code>{`vx6 node
# or run it as a service
systemctl --user enable --now vx6`}</code>
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
                  <h2>Join the global VX6 network</h2>
                  <pre className="code-block">
                    <code>{`vx6 init \\
  --name alice \\
  --listen '[::]:4242' \\
  --advertise '[your-ipv6]:4242' \\
  --bootstrap '[YOUR_PUBLIC_VX6_NODE_1]:4242'`}</code>
                  </pre>
                  <p>
                    We are also building a global VX6 network. Join it through one of the public VX6
                    entry nodes. Keep this section updated with your current live node IPs and mirrors.
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

                <section>
                  <h2>Browser wrapper</h2>
                  <p>
                    The current release already includes <code>vx6-gui</code> as a local web front-end.
                    A broader browser-wrapper experience is coming soon.
                  </p>
                </section>
              </div>
            </div>
          </article>
        </div>
      </main>
    </PageShell>
  );
}
