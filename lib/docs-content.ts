export type DocItem = {
  title: string;
  body: string;
};

export type DocSection = {
  id: string;
  title: string;
  description: string;
  items: DocItem[];
};

export const externalInterfaceSections: DocSection[] = [
  {
    id: 'protocol',
    title: 'Protocol Core',
    description:
      'VX6 protocol/runtime components that power identity, discovery, service routing, and encrypted peer transport.',
    items: [
      {
        title: 'Identity and signed records',
        body: 'Each node holds a persistent cryptographic identity and publishes signed endpoint/service records.',
      },
      {
        title: 'DHT + registry discovery',
        body: 'Name and service lookups use DHT-backed keys plus local registry sync for fast repeated access.',
      },
      {
        title: 'Direct, relay, hidden, and localhost bridge flows',
        body: 'Connections can run direct peer-to-peer, through multi-hop relay paths, hidden alias routing, and localhost-to-localhost service bridging.',
      },
      {
        title: 'TCP + QUIC transport modes',
        body: 'VX6 supports transport selection via abstraction so operators can run either TCP or QUIC depending on environment and policy.',
      },
    ],
  },
  {
    id: 'sdk',
    title: 'SDK and App Layer',
    description:
      'How product teams build apps on top of VX6 without coupling protocol internals to frontend code.',
    items: [
      {
        title: 'Shared backend contract (`vx6d`)',
        body: 'A local backend service contract lets every UI team (desktop/mobile/web) call the same VX6 runtime API.',
      },
      {
        title: 'Desktop + mobile tracks',
        body: 'Tauri desktop is active and Android/iOS integrations are in progress over the same backend behavior.',
      },
      {
        title: 'Comms app architecture',
        body: 'VX6 Comms uses peer-first messaging/file/call workflows where local data ownership stays with users.',
      },
      {
        title: 'Independent UI contribution model',
        body: 'Frontend contributors can build by platform while backend maintainers keep protocol/runtime compatibility stable.',
      },
    ],
  },
  {
    id: 'operations',
    title: 'Operations and Enterprise',
    description:
      'Operational controls needed for production usage, including release gating, policy routing, observability, and governance.',
    items: [
      {
        title: 'Stable release branch',
        body: 'A dedicated stable branch is intended for only validated merges with cross-platform and conformance gates.',
      },
      {
        title: 'SD-WAN adoption direction',
        body: 'VX6 can evolve into identity-driven branch overlay networking with policy routing and failover controls.',
      },
      {
        title: 'Observability and diagnostics',
        body: 'Operational posture includes runtime status, DHT visibility, relay health checks, and deployment guides for teams.',
      },
      {
        title: 'Cross-platform runtime management',
        body: 'Linux, Windows, and macOS operators can run aligned protocol behavior while mobile app layers continue to mature.',
      },
    ],
  },
];
