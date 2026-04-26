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
      caption="Setup and traffic are separate. The client resolves the alias, chooses one intro, signals through the owner-side guards, and then both sides build full relay legs toward the same rendezvous point before traffic reaches the owner’s localhost service."
    >
      <svg viewBox="0 0 1340 760" role="img" aria-label="VX6 hidden service flow">
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

        <text x="74" y="48" className="diagram-note">Setup path</text>
        <line x1="150" y1="44" x2="270" y2="44" className="diagram-path-soft" />
        <text x="332" y="48" className="diagram-note">Live data path</text>
        <line x1="430" y1="44" x2="552" y2="44" className="diagram-path" />

        <rect x="38" y="88" width="238" height="132" rx="16" className="diagram-panel" />
        <text x="70" y="126" className="diagram-label">Client</text>
        <text x="70" y="158" className="diagram-text">Resolves hidden alias</text>
        <text x="70" y="184" className="diagram-text">Chooses one intro and one rendezvous X</text>
        <text x="70" y="210" className="diagram-text">Builds setup and traffic legs separately</text>

        <rect x="318" y="88" width="706" height="72" rx="16" className="diagram-panel diagram-panel-accent" />
        <text x="671" y="126" className="diagram-label" textAnchor="middle">Hidden alias descriptor</text>
        <text x="671" y="150" className="diagram-text" textAnchor="middle">
          3 active intros | 2 standby intros | 2 guards | 3 rendezvous candidates
        </text>

        <rect x="318" y="194" width="286" height="118" rx="16" className="diagram-chip" />
        <text x="461" y="224" className="diagram-chip-text" textAnchor="middle">3 active intros</text>
        <circle cx="390" cy="270" r="20" className="diagram-node" />
        <circle cx="462" cy="270" r="20" className="diagram-node diagram-node-accent" />
        <circle cx="534" cy="270" r="20" className="diagram-node" />
        <text x="390" y="300" className="diagram-text-center">i1</text>
        <text x="462" y="300" className="diagram-text-center">chosen i2</text>
        <text x="534" y="300" className="diagram-text-center">i3</text>

        <rect x="318" y="330" width="286" height="80" rx="16" className="diagram-chip diagram-chip-soft" />
        <text x="461" y="360" className="diagram-chip-text" textAnchor="middle">2 standby intros</text>
        <text x="461" y="388" className="diagram-text" textAnchor="middle">Failover only, not used in the normal path</text>

        <rect x="706" y="204" width="212" height="106" rx="16" className="diagram-chip" />
        <text x="812" y="234" className="diagram-chip-text" textAnchor="middle">2 guard nodes</text>
        <circle cx="772" cy="278" r="18" className="diagram-node" />
        <circle cx="852" cy="278" r="18" className="diagram-node" />
        <text x="772" y="304" className="diagram-text-center">g1</text>
        <text x="852" y="304" className="diagram-text-center">g2</text>

        <rect x="988" y="194" width="298" height="122" rx="16" className="diagram-panel" />
        <text x="1020" y="232" className="diagram-label">Hidden service owner</text>
        <text x="1020" y="264" className="diagram-text">Receives setup through guards</text>
        <text x="1020" y="290" className="diagram-text">Builds its own relay leg toward X</text>

        <path d="M276 154H310" className="diagram-path-soft" markerEnd="url(#hidden-arrow)" />
        <path d="M482 270H696" className="diagram-path-soft" markerEnd="url(#hidden-arrow)" />
        <path d="M918 278H978" className="diagram-path-soft" markerEnd="url(#hidden-arrow)" />

        <rect x="38" y="500" width="288" height="182" rx="16" className="diagram-chip diagram-chip-soft" />
        <text x="182" y="532" className="diagram-chip-text" textAnchor="middle">Client relay leg</text>
        <text x="182" y="558" className="diagram-text" textAnchor="middle">3 hops in fast mode</text>
        <text x="182" y="582" className="diagram-text" textAnchor="middle">5 hops in balanced mode</text>
        <circle cx="92" cy="632" r="20" className="diagram-node" />
        <circle cx="182" cy="632" r="20" className="diagram-node" />
        <circle cx="272" cy="632" r="20" className="diagram-node" />
        <text x="92" y="662" className="diagram-text-center">r1</text>
        <text x="182" y="662" className="diagram-text-center">r2</text>
        <text x="272" y="662" className="diagram-text-center">r3</text>

        <circle cx="670" cy="620" r="44" className="diagram-node diagram-node-accent" />
        <text x="670" y="674" className="diagram-text-center">rendezvous X</text>

        <rect x="910" y="500" width="288" height="182" rx="16" className="diagram-chip diagram-chip-soft" />
        <text x="1054" y="532" className="diagram-chip-text" textAnchor="middle">Owner relay leg</text>
        <text x="1054" y="558" className="diagram-text" textAnchor="middle">Separate path from owner to X</text>
        <text x="1054" y="582" className="diagram-text" textAnchor="middle">Chosen after setup completes</text>
        <circle cx="964" cy="632" r="20" className="diagram-node" />
        <circle cx="1054" cy="632" r="20" className="diagram-node" />
        <circle cx="1144" cy="632" r="20" className="diagram-node" />
        <text x="964" y="662" className="diagram-text-center">r4</text>
        <text x="1054" y="662" className="diagram-text-center">r5</text>
        <text x="1144" y="662" className="diagram-text-center">r6</text>

        <rect x="1216" y="548" width="96" height="142" rx="16" className="diagram-service" />
        <text x="1264" y="586" className="diagram-chip-text" textAnchor="middle">Localhost</text>
        <text x="1264" y="612" className="diagram-chip-text" textAnchor="middle">service</text>
        <text x="1264" y="638" className="diagram-text" textAnchor="middle">127.0.0.1</text>
        <text x="1264" y="662" className="diagram-text" textAnchor="middle">SSH API</text>

        <path d="M276 632H500" className="diagram-path" markerEnd="url(#hidden-arrow)" />
        <path d="M714 620H900" className="diagram-path" markerEnd="url(#hidden-arrow)" />
        <path d="M1164 632H1210" className="diagram-path" markerEnd="url(#hidden-arrow)" />

        <path d="M92 612C92 556 120 520 160 504" className="diagram-path-soft" />
        <path d="M182 612V500" className="diagram-path-soft" />
        <path d="M272 612C272 556 244 520 204 504" className="diagram-path-soft" />
        <path d="M964 612C964 556 992 520 1032 504" className="diagram-path-soft" />
        <path d="M1054 612V500" className="diagram-path-soft" />
        <path d="M1144 612C1144 556 1116 520 1076 504" className="diagram-path-soft" />

        <rect x="392" y="706" width="556" height="34" rx="12" className="diagram-chip" />
        <text x="670" y="728" className="diagram-chip-text" textAnchor="middle">
          One intro is for setup only. Traffic later moves through 3 client relays, X, 3 owner relays, then the real localhost target.
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
