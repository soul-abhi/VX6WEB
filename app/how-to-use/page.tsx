import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'How to use',
  description:
    'Step-by-step VX6 guide covering node setup, service publishing, file transfer, hidden aliases, direct IPv6 access, and systemd usage.',
  alternates: {
    canonical: '/how-to-use',
  },
};

export default function HowToUsePage() {
  return (
    <PageShell currentPage="how-to-use">
      <main className="page-content">
        <div className="wrapper">
          <article className="article-shell">
            <p className="article-meta">Usage guide</p>
            <h1>How to Use VX6</h1>

            <div className="doc-layout">
              <aside className="page-side">
                <div className="page-side-box toc">
                  <div className="toc-title">Steps</div>
                  <ol>
                    <li>
                      <a href="#endpoint">Use the right endpoint format</a>
                    </li>
                    <li>
                      <a href="#setup">Initialize and start</a>
                    </li>
                    <li>
                      <a href="#services">Publish and connect services</a>
                    </li>
                    <li>
                      <a href="#hidden">Use hidden aliases</a>
                    </li>
                    <li>
                      <a href="#background">Run in the background</a>
                    </li>
                  </ol>
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
                <section id="endpoint">
                  <h2>1. Use the right IPv6 endpoint format</h2>
                  <p>VX6 expects IPv6 endpoints in bracket form:</p>
                  <pre className="code-block">
                    <code>{`'[ipv6]:port'
'[2401:db8::10]:4242'`}</code>
                  </pre>
                  <div className="note">
                    <strong>Rule:</strong> always include square brackets around IPv6 addresses when a
                    port is present.
                  </div>
                </section>

                <section id="setup">
                  <h2>2. Initialize and start a node</h2>
                  <ol className="doc-steps">
                    <li>
                      <div>
                        <h3>Initialize identity and network settings</h3>
                        <pre className="code-block">
                          <code>{`./vx6 init \\
  --name alice \\
  --listen '[::]:4242' \\
  --advertise '[2001:db8::10]:4242' \\
  --bootstrap '[2001:db8::1]:4242'`}</code>
                        </pre>
                        <p>
                          The bootstrap can be any known live VX6 node. It is just the first contact,
                          not a permanent central controller.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3>Start the runtime</h3>
                        <pre className="code-block">
                          <code>./vx6 node</code>
                        </pre>
                      </div>
                    </li>
                  </ol>
                </section>

                <section id="services">
                  <h2>3. Publish and connect services</h2>
                  <h3>Share SSH</h3>
                  <pre className="code-block">
                    <code>{`./vx6 service add --name ssh --target 127.0.0.1:22
./vx6 reload`}</code>
                  </pre>

                  <h3>Connect from another node</h3>
                  <pre className="code-block">
                    <code>{`./vx6 connect --service alice.ssh --listen 127.0.0.1:2222
ssh -p 2222 user@127.0.0.1`}</code>
                  </pre>

                  <h3>Share a web app</h3>
                  <pre className="code-block">
                    <code>{`./vx6 service add --name web --target 127.0.0.1:8080
./vx6 reload

./vx6 connect --service alice.web --listen 127.0.0.1:9000
curl http://127.0.0.1:9000`}</code>
                  </pre>
                </section>

                <section id="hidden">
                  <h2>4. Use direct IPv6, file transfer, and hidden aliases</h2>
                  <h3>Direct IPv6 when you already know the peer</h3>
                  <pre className="code-block">
                    <code>{"./vx6 connect --service ssh --addr '[2001:db8::10]:4242' --listen 127.0.0.1:2222"}</code>
                  </pre>

                  <h3>Send a file</h3>
                  <pre className="code-block">
                    <code>./vx6 send --file ./backup.tar --to alice</code>
                  </pre>
                  <p>Received files are stored in <code>~/Downloads</code>.</p>

                  <h3>Publish a hidden alias</h3>
                  <pre className="code-block">
                    <code>{`./vx6 service add \\
  --name admin \\
  --target 127.0.0.1:22 \\
  --hidden \\
  --alias hs-admin \\
  --profile fast
./vx6 reload

./vx6 connect --service hs-admin --listen 127.0.0.1:2222`}</code>
                  </pre>
                  <p>
                    In the background, VX6 resolves the alias, selects intro and relay paths, and joins
                    the route through a rendezvous point before it exposes a normal local port to the
                    client.
                  </p>
                </section>

                <section id="background">
                  <h2>5. Run it in the background</h2>
                  <pre className="code-block">
                    <code>{`systemctl --user enable --now vx6
systemctl --user status vx6
systemctl --user reload vx6`}</code>
                  </pre>

                  <h3>Useful commands</h3>
                  <pre className="code-block">
                    <code>{`./vx6 help
./vx6 status
./vx6 list
./vx6 identity
./vx6 debug registry
./vx6 debug dht-get --service alice.ssh`}</code>
                  </pre>

                  <div className="warning">
                    <strong>Tip:</strong> if proxy or hidden mode says the relay path cannot be built,
                    keep the node running longer so it can learn more peers from the network.
                  </div>
                </section>
              </div>
            </div>
          </article>
        </div>
      </main>
    </PageShell>
  );
}
