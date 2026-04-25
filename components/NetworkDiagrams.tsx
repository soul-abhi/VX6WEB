import type { ReactNode } from 'react';

type DiagramProps = {
  title: string;
  caption: string;
  children: ReactNode;
};

function DiagramFrame({ title, caption, children }: DiagramProps) {
  return (
    <figure className="diagram-shell">
      <div className="diagram-title-row">
        <strong>{title}</strong>
      </div>
      {children}
      <figcaption className="diagram-caption">{caption}</figcaption>
    </figure>
  );
}

export function HeroMeshDiagram() {
  return (
    <DiagramFrame
      title="Network view"
      caption="DHT means Distributed Hash Table. In VX6, a new peer can join through any known live node, learn the mesh, and then keep discovering more peers and services through signed sync and DHT-backed lookups."
    >
      <svg viewBox="0 0 760 490" role="img" aria-label="VX6 peer network overview">
        <defs>
          <marker
            id="mesh-arrow"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="5"
            orient="auto-start-reverse"
          >
            <path d="M0 0L10 5L0 10Z" fill="var(--diagram-line)" />
          </marker>
        </defs>

        <circle cx="378" cy="118" r="52" className="diagram-node diagram-node-accent" />
        <text x="378" y="108" className="diagram-label" textAnchor="middle">DHT</text>
        <text x="378" y="136" className="diagram-text" textAnchor="middle">Distributed Hash Table</text>

        <circle cx="172" cy="64" r="24" className="diagram-node" />
        <circle cx="244" cy="154" r="24" className="diagram-node" />
        <circle cx="320" cy="42" r="24" className="diagram-node" />
        <circle cx="438" cy="44" r="24" className="diagram-node" />
        <circle cx="510" cy="154" r="24" className="diagram-node" />
        <circle cx="586" cy="68" r="24" className="diagram-node" />

        <path d="M190 72L332 108" className="diagram-path-soft" />
        <path d="M246 146L340 124" className="diagram-path-soft" />
        <path d="M334 50L356 76" className="diagram-path-soft" />
        <path d="M422 76L402 76" className="diagram-path-soft" />
        <path d="M490 146L414 124" className="diagram-path-soft" />
        <path d="M566 76L424 108" className="diagram-path-soft" />
        <path d="M196 74L248 146" className="diagram-path-soft" />
        <path d="M436 48L512 146" className="diagram-path-soft" />
        <path d="M510 154L586 72" className="diagram-path-soft" />

        <text x="172" y="108" className="diagram-text-center">peer</text>
        <text x="244" y="196" className="diagram-text-center">peer</text>
        <text x="320" y="14" className="diagram-text-center">peer</text>
        <text x="438" y="16" className="diagram-text-center">peer</text>
        <text x="510" y="196" className="diagram-text-center">peer</text>
        <text x="586" y="112" className="diagram-text-center">peer</text>

        <rect x="36" y="236" width="176" height="104" rx="16" className="diagram-panel" />
        <text x="58" y="268" className="diagram-label">New peer joins</text>
        <text x="58" y="296" className="diagram-text">Uses a friend as first contact.</text>
        <text x="58" y="320" className="diagram-text">That friend acts as bootstrap.</text>

        <rect x="292" y="236" width="176" height="104" rx="16" className="diagram-panel diagram-panel-accent" />
        <text x="318" y="268" className="diagram-label">Learns the mesh</text>
        <text x="318" y="296" className="diagram-text">Pulls node and service records.</text>
        <text x="318" y="320" className="diagram-text">Caches peers for later sync.</text>

        <rect x="548" y="236" width="176" height="104" rx="16" className="diagram-panel" />
        <text x="574" y="268" className="diagram-label">Shares a service</text>
        <text x="574" y="296" className="diagram-text">Publishes a localhost app</text>
        <text x="574" y="320" className="diagram-text">that peers resolve by name.</text>

        <path d="M212 288H284" className="diagram-path" markerEnd="url(#mesh-arrow)" />
        <path d="M468 288H540" className="diagram-path" markerEnd="url(#mesh-arrow)" />

        <rect x="130" y="388" width="500" height="56" rx="12" className="diagram-chip" />
        <text x="380" y="422" className="diagram-chip-text" textAnchor="middle">
          One node brings you in. The rest of the network keeps itself moving.
        </text>
      </svg>
    </DiagramFrame>
  );
}

export function LocalhostBridgeDiagram() {
  return (
    <DiagramFrame
      title="Localhost to localhost"
      caption="A service can stay on localhost port 2000 on one machine and appear on any localhost port on another machine. No public service port has to be forwarded to the internet."
    >
      <svg viewBox="0 0 880 360" role="img" aria-label="Localhost to localhost service sharing">
        <defs>
          <marker
            id="bridge-arrow"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="5"
            orient="auto-start-reverse"
          >
            <path d="M0 0L10 5L0 10Z" fill="var(--diagram-line)" />
          </marker>
        </defs>

        <rect x="34" y="64" width="228" height="182" rx="18" className="diagram-panel" />
        <text x="62" y="100" className="diagram-label">Host machine</text>
        <rect x="68" y="128" width="160" height="58" rx="12" className="diagram-service" />
        <text x="92" y="162" className="diagram-chip-text">localhost:2000</text>
        <text x="148" y="214" className="diagram-text" textAnchor="middle">Service stays private on the host.</text>

        <rect x="326" y="96" width="228" height="118" rx="18" className="diagram-panel diagram-panel-accent" />
        <text x="356" y="130" className="diagram-label">VX6 peer path</text>
        <text x="356" y="160" className="diagram-text">Named service lookup</text>
        <text x="356" y="184" className="diagram-text">Peer-to-peer session</text>

        <rect x="618" y="64" width="228" height="182" rx="18" className="diagram-panel" />
        <text x="646" y="100" className="diagram-label">Client machine</text>
        <rect x="652" y="128" width="160" height="58" rx="12" className="diagram-service" />
        <text x="676" y="162" className="diagram-chip-text">localhost:any-port</text>
        <text x="732" y="214" className="diagram-text" textAnchor="middle">App opens a normal local port.</text>

        <path d="M228 157H318" className="diagram-path" markerEnd="url(#bridge-arrow)" />
        <path d="M554 157H610" className="diagram-path" markerEnd="url(#bridge-arrow)" />

        <rect x="120" y="270" width="640" height="60" rx="12" className="diagram-chip diagram-chip-soft" />
        <text x="440" y="294" className="diagram-chip-text" textAnchor="middle">
          Service in: localhost:2000. Service out: localhost on the client.
        </text>
        <text x="440" y="316" className="diagram-chip-text" textAnchor="middle">
          No public app port forwarding required.
        </text>
      </svg>
    </DiagramFrame>
  );
}

export function TorVsVx6Diagram() {
  return (
    <DiagramFrame
      title="Routing comparison"
      caption="VX6 is built for service routing, not for browser-style exit traffic. It keeps the focus on local services, hidden aliases, and peer-operated infrastructure that feels much faster for direct operational use."
    >
      <svg viewBox="0 0 980 520" role="img" aria-label="Tor and VX6 hidden service comparison">
        <defs>
          <marker
            id="compare-arrow"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="5"
            orient="auto-start-reverse"
          >
            <path d="M0 0L10 5L0 10Z" fill="var(--diagram-line)" />
          </marker>
        </defs>

        <rect x="22" y="24" width="436" height="468" rx="18" className="diagram-panel" />
        <text x="48" y="58" className="diagram-label">Tor-style web route</text>
        <text x="48" y="86" className="diagram-text">Strong for browser anonymity.</text>
        <text x="48" y="110" className="diagram-text">Not built around localhost</text>
        <text x="48" y="134" className="diagram-text">service sharing.</text>

        <circle cx="86" cy="194" r="26" className="diagram-node" />
        <circle cx="182" cy="194" r="26" className="diagram-node" />
        <circle cx="278" cy="194" r="26" className="diagram-node" />
        <circle cx="374" cy="194" r="26" className="diagram-node" />
        <rect x="354" y="286" width="76" height="40" rx="10" className="diagram-chip diagram-chip-warn" />
        <text x="364" y="311" className="diagram-chip-text">Exit sees</text>
        <text x="368" y="326" className="diagram-chip-text">destination</text>
        <text x="86" y="236" className="diagram-text-center">Client</text>
        <text x="182" y="236" className="diagram-text-center">Entry</text>
        <text x="278" y="236" className="diagram-text-center">Middle</text>
        <text x="374" y="236" className="diagram-text-center">Exit</text>
        <path d="M112 194H156" className="diagram-path" markerEnd="url(#compare-arrow)" />
        <path d="M208 194H252" className="diagram-path" markerEnd="url(#compare-arrow)" />
        <path d="M304 194H348" className="diagram-path" markerEnd="url(#compare-arrow)" />
        <path d="M400 194H438" className="diagram-path" markerEnd="url(#compare-arrow)" />
        <rect x="400" y="174" width="34" height="42" rx="8" className="diagram-service" />
        <text x="354" y="122" className="diagram-note">Web exit node is part of the path.</text>
        <path d="M388 128L388 162" className="diagram-path-soft" />

        <rect x="522" y="24" width="436" height="468" rx="18" className="diagram-panel diagram-panel-accent" />
        <text x="548" y="58" className="diagram-label">VX6 hidden service</text>
        <text x="548" y="86" className="diagram-text">Built for aliases, local services,</text>
        <text x="548" y="110" className="diagram-text">direct team tooling, and</text>
        <text x="548" y="134" className="diagram-text">service-first routing.</text>
        <circle cx="568" cy="224" r="22" className="diagram-node" />
        <text x="568" y="266" className="diagram-text-center">client</text>

        <circle cx="628" cy="164" r="18" className="diagram-node" />
        <circle cx="628" cy="224" r="18" className="diagram-node" />
        <circle cx="628" cy="284" r="18" className="diagram-node" />
        <text x="628" y="146" className="diagram-text-center">r1</text>
        <text x="628" y="228" className="diagram-text-center">r2</text>
        <text x="628" y="306" className="diagram-text-center">r3</text>

        <circle cx="700" cy="112" r="18" className="diagram-node" />
        <circle cx="700" cy="164" r="18" className="diagram-node" />
        <circle cx="700" cy="216" r="18" className="diagram-node" />
        <text x="700" y="94" className="diagram-text-center">i1</text>
        <text x="700" y="146" className="diagram-text-center">i2</text>
        <text x="700" y="198" className="diagram-text-center">i3</text>

        <circle cx="700" cy="286" r="18" className="diagram-node" />
        <circle cx="700" cy="338" r="18" className="diagram-node" />
        <text x="700" y="308" className="diagram-text-center">g1</text>
        <text x="700" y="360" className="diagram-text-center">g2</text>

        <circle cx="778" cy="224" r="22" className="diagram-node diagram-node-accent" />
        <text x="778" y="266" className="diagram-text-center">X</text>

        <circle cx="846" cy="164" r="18" className="diagram-node" />
        <circle cx="846" cy="224" r="18" className="diagram-node" />
        <circle cx="846" cy="284" r="18" className="diagram-node" />
        <text x="846" y="146" className="diagram-text-center">r4</text>
        <text x="846" y="228" className="diagram-text-center">r5</text>
        <text x="846" y="306" className="diagram-text-center">r6</text>

        <rect x="880" y="198" width="58" height="52" rx="10" className="diagram-service" />
        <text x="909" y="272" className="diagram-text-center">alias</text>
        <text x="909" y="290" className="diagram-text-center">service</text>

        <path d="M590 224H606" className="diagram-path" markerEnd="url(#compare-arrow)" />
        <path d="M646 224H682" className="diagram-path" markerEnd="url(#compare-arrow)" />
        <path d="M718 224H748" className="diagram-path" markerEnd="url(#compare-arrow)" />
        <path d="M800 224H824" className="diagram-path" markerEnd="url(#compare-arrow)" />
        <path d="M864 224H876" className="diagram-path" markerEnd="url(#compare-arrow)" />
        <path d="M700 130C744 144 742 182 760 204" className="diagram-path-soft" />
        <path d="M700 182C744 184 742 196 760 210" className="diagram-path-soft" />
        <path d="M700 234C742 228 742 220 760 220" className="diagram-path-soft" />
        <path d="M700 286C742 268 742 242 760 232" className="diagram-path-soft" />
        <path d="M700 338C740 306 742 262 760 240" className="diagram-path-soft" />

        <rect x="546" y="392" width="386" height="72" rx="12" className="diagram-chip" />
        <text x="739" y="418" className="diagram-chip-text" textAnchor="middle">
          13 visible nodes: client, 3 relay nodes,
        </text>
        <text x="739" y="440" className="diagram-chip-text" textAnchor="middle">
          3 intro nodes, 2 guards, X, and 3 owner-side relays.
        </text>
      </svg>
    </DiagramFrame>
  );
}

export function HiddenFlowDiagram() {
  return (
    <DiagramFrame
      title="Hidden service flow"
      caption="Setup path and data path are different. One chosen intro helps set up the connection. The actual service traffic later moves through the client relay leg, rendezvous X, owner relay leg, and finally into the owner’s localhost service."
    >
      <svg viewBox="0 0 980 560" role="img" aria-label="VX6 hidden service flow">
        <defs>
          <marker
            id="hidden-arrow"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="5"
            orient="auto-start-reverse"
          >
            <path d="M0 0L10 5L0 10Z" fill="var(--diagram-line)" />
          </marker>
        </defs>

        <text x="120" y="34" className="diagram-note">Setup path</text>
        <line x1="198" y1="30" x2="292" y2="30" className="diagram-path-soft" />
        <text x="534" y="34" className="diagram-note">Live data path</text>
        <line x1="628" y1="30" x2="726" y2="30" className="diagram-path" />

        <rect x="26" y="62" width="180" height="112" rx="16" className="diagram-panel" />
        <text x="54" y="94" className="diagram-label">Client</text>
        <text x="54" y="122" className="diagram-text">Resolves hidden alias</text>
        <text x="54" y="146" className="diagram-text">Chooses one intro and one X</text>

        <rect x="270" y="44" width="420" height="60" rx="16" className="diagram-panel diagram-panel-accent" />
        <text x="480" y="72" className="diagram-label" textAnchor="middle">Hidden alias descriptor</text>
        <text x="480" y="94" className="diagram-text" textAnchor="middle">
          3 active intros | 2 standby intros | 2 guards | 3 rendezvous candidates
        </text>

        <rect x="254" y="134" width="230" height="88" rx="16" className="diagram-chip" />
        <text x="370" y="158" className="diagram-chip-text" textAnchor="middle">3 active intros</text>
        <circle cx="320" cy="190" r="18" className="diagram-node" />
        <circle cx="370" cy="190" r="18" className="diagram-node diagram-node-accent" />
        <circle cx="420" cy="190" r="18" className="diagram-node" />
        <text x="320" y="214" className="diagram-text-center">i1</text>
        <text x="370" y="214" className="diagram-text-center">chosen</text>
        <text x="420" y="214" className="diagram-text-center">i3</text>

        <rect x="254" y="238" width="230" height="64" rx="16" className="diagram-chip diagram-chip-soft" />
        <text x="370" y="265" className="diagram-chip-text" textAnchor="middle">2 standby intros</text>
        <text x="370" y="287" className="diagram-text" textAnchor="middle">Failover only, not used in the normal path</text>

        <rect x="540" y="146" width="160" height="80" rx="16" className="diagram-chip" />
        <text x="620" y="170" className="diagram-chip-text" textAnchor="middle">2 guards</text>
        <circle cx="590" cy="198" r="16" className="diagram-node" />
        <circle cx="650" cy="198" r="16" className="diagram-node" />
        <text x="590" y="220" className="diagram-text-center">g1</text>
        <text x="650" y="220" className="diagram-text-center">g2</text>

        <rect x="748" y="118" width="200" height="112" rx="16" className="diagram-panel" />
        <text x="776" y="150" className="diagram-label">Hidden service owner</text>
        <text x="776" y="178" className="diagram-text">Receives setup through guards</text>
        <text x="776" y="202" className="diagram-text">Builds its own relay leg to X</text>

        <path d="M206 128H246" className="diagram-path-soft" markerEnd="url(#hidden-arrow)" />
        <path d="M388 190H532" className="diagram-path-soft" markerEnd="url(#hidden-arrow)" />
        <path d="M700 186H740" className="diagram-path-soft" markerEnd="url(#hidden-arrow)" />

        <rect x="40" y="372" width="220" height="78" rx="16" className="diagram-chip diagram-chip-soft" />
        <text x="150" y="398" className="diagram-chip-text" textAnchor="middle">Client relay leg</text>
        <text x="150" y="422" className="diagram-text" textAnchor="middle">3 hops in fast mode</text>
        <text x="150" y="442" className="diagram-text" textAnchor="middle">5 hops in balanced mode</text>

        <circle cx="490" cy="410" r="32" className="diagram-node diagram-node-accent" />
        <text x="490" y="454" className="diagram-text-center">rendezvous X</text>

        <rect x="574" y="372" width="220" height="78" rx="16" className="diagram-chip diagram-chip-soft" />
        <text x="684" y="398" className="diagram-chip-text" textAnchor="middle">Owner relay leg</text>
        <text x="684" y="422" className="diagram-text" textAnchor="middle">Separate path from owner to X</text>
        <text x="684" y="442" className="diagram-text" textAnchor="middle">Chosen after setup completes</text>

        <rect x="812" y="372" width="136" height="78" rx="16" className="diagram-service" />
        <text x="880" y="398" className="diagram-chip-text" textAnchor="middle">Localhost service</text>
        <text x="880" y="422" className="diagram-text" textAnchor="middle">127.0.0.1 target</text>
        <text x="880" y="442" className="diagram-text" textAnchor="middle">SSH, API, web, DB</text>

        <path d="M260 410H450" className="diagram-path" markerEnd="url(#hidden-arrow)" />
        <path d="M522 410H566" className="diagram-path" markerEnd="url(#hidden-arrow)" />
        <path d="M794 410H804" className="diagram-path" markerEnd="url(#hidden-arrow)" />

        <rect x="178" y="492" width="620" height="42" rx="12" className="diagram-chip" />
        <text x="488" y="518" className="diagram-chip-text" textAnchor="middle">
          Intro handles setup. X joins the stream. The owner finally forwards into the real localhost service.
        </text>
      </svg>
    </DiagramFrame>
  );
}

export function ServiceStackDiagram() {
  return (
    <DiagramFrame
      title="Distributed application stack"
      caption="A frontend, API, and database can all stay local to their own machines while VX6 turns them into one readable service network."
    >
      <svg viewBox="0 0 860 390" role="img" aria-label="Frontend API database stack on VX6">
        <defs>
          <marker
            id="stack-arrow"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="5"
            orient="auto-start-reverse"
          >
            <path d="M0 0L10 5L0 10Z" fill="var(--diagram-line)" />
          </marker>
        </defs>

        <rect x="40" y="144" width="120" height="62" rx="12" className="diagram-chip" />
        <text x="74" y="180" className="diagram-chip-text">Users</text>

        <rect x="232" y="42" width="170" height="100" rx="16" className="diagram-panel" />
        <text x="258" y="74" className="diagram-label">Frontend node</text>
        <text x="258" y="102" className="diagram-text">team.frontend</text>
        <text x="258" y="126" className="diagram-text">127.0.0.1:3000</text>

        <rect x="232" y="228" width="170" height="100" rx="16" className="diagram-panel" />
        <text x="258" y="260" className="diagram-label">API node</text>
        <text x="258" y="288" className="diagram-text">team.api</text>
        <text x="258" y="312" className="diagram-text">127.0.0.1:8080</text>

        <rect x="470" y="136" width="170" height="100" rx="16" className="diagram-panel diagram-panel-accent" />
        <text x="496" y="168" className="diagram-label">VX6 network</text>
        <text x="496" y="196" className="diagram-text">Names, peers, relay paths</text>
        <text x="496" y="220" className="diagram-text">and direct or hidden access</text>

        <rect x="688" y="136" width="132" height="100" rx="16" className="diagram-panel" />
        <text x="714" y="168" className="diagram-label">DB node</text>
        <text x="714" y="196" className="diagram-text">team.db</text>
        <text x="714" y="220" className="diagram-text">127.0.0.1:5432</text>

        <path d="M160 176H224" className="diagram-path" markerEnd="url(#stack-arrow)" />
        <path d="M402 92C448 92 436 136 462 164" className="diagram-path" markerEnd="url(#stack-arrow)" />
        <path d="M402 278C448 278 438 226 462 204" className="diagram-path" markerEnd="url(#stack-arrow)" />
        <path d="M640 186H680" className="diagram-path" markerEnd="url(#stack-arrow)" />

        <rect x="40" y="250" width="120" height="54" rx="12" className="diagram-chip diagram-chip-soft" />
        <text x="66" y="283" className="diagram-chip-text">Local clients</text>
      </svg>
    </DiagramFrame>
  );
}
