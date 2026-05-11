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
        title: 'Direct, relay, and hidden flows',
        body: 'Connections can run direct peer-to-peer, through multi-hop relay paths, or hidden alias routing.',
      },
      {
        title: 'Versioned wire envelopes',
        body: 'Wire payloads include explicit versioning for compatibility and staged migration between releases.',
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
        title: 'Stable interfaces',
        body: 'Transport, signaling, discovery, and session-crypto interfaces are separated to allow implementation swaps.',
      },
      {
        title: 'Desktop and mobile tracks',
        body: 'Tauri desktop and Android-native app tracks are kept in separate directories over the same core.',
      },
      {
        title: 'Conformance and fuzz quality',
        body: 'Conformance vectors and fuzz testing are used to harden parsers, envelopes, and signaling paths.',
      },
      {
        title: 'Independent frontend evolution',
        body: 'UI can evolve in JS/desktop stacks while core protocol behavior remains stable and test-gated.',
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
        title: 'Policy and SLA routing direction',
        body: 'VX6 roadmap includes path quality scoring, failover thresholds, and application-aware route steering.',
      },
      {
        title: 'TURN and media hardening',
        body: 'Call stack includes adaptive transport behavior, TURN fallback, and credential rotation controls.',
      },
      {
        title: 'Support and compliance readiness',
        body: 'Auditability, diagnostics, and controlled release lifecycle are required for enterprise deployment.',
      },
    ],
  },
];

