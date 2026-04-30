# Technical Working

Suggested title: How VX6 Works | Discovery, DHT, Relay Paths, Hidden Services, and Current Platform Support

Suggested meta description: Learn how VX6 works today: signed identity, DHT-backed lookup, localhost forwarding, hidden services, relay paths, Linux and Windows support, and the current TCP-only transport model.

## The Core Idea

VX6 turns local services into network-reachable services without forcing them to stop being local.

That means:

- the app still runs on localhost
- VX6 handles discovery, naming, and encrypted transport
- the user connects from a local port on their own machine

## 1. Node Identity

Each node has:

- a persistent Ed25519 keypair
- a stable VX6 node ID
- signed endpoint, service, and DHT records

This gives the network a strong identity layer without needing a central account system.

## 2. First Contact, Peers, and DHT

VX6 uses a practical model:

1. a node reaches any known live VX6 node
2. it learns other peers and current records
3. it keeps syncing with live peers
4. the DHT resolves names, catalogs, and hidden descriptors when local cache is not enough

A bootstrap is not a forever-center.
It is simply the first live node you use to enter the network.

## 3. Local Registry and DHT

Each node keeps a local registry of:

- known nodes
- known public services
- cached private and hidden lookup results

The local registry is a cache, not the whole world.
The DHT stores only a bounded distributed set of records, and lookups walk toward the closest responsible nodes instead of asking everyone.

## 4. Direct Service Flow

Direct service access works like this:

1. a service owner publishes `username.service`
2. a client resolves that service
3. VX6 opens an encrypted node-to-node session
4. the remote node forwards traffic to the real local target
5. the client uses a local forwarded port

This is why VX6 feels natural for SSH, HTTP, APIs, databases, and internal dashboards.

## 5. Public, Private, and Hidden Discovery

VX6 currently uses three discovery styles:

- public services for normal named access
- private per-user catalogs for services that should not appear in public discovery
- hidden services for invite-based alias access through relays

## 6. Relay and Hidden Paths

VX6 can route traffic through relay chains.
Hidden services use:

- intro nodes
- guard nodes
- rendezvous nodes
- encrypted fixed-size onion cells
- blinded rotating hidden descriptor keys
- encrypted hidden descriptors
- invite secrets

The result is much stronger privacy than plain alias lookup, but the project does not claim to be a full Tor replacement yet.

## 7. DHT Hardening

The current DHT already includes:

- signed record validation
- multi-source lookup confirmation
- bounded replication
- replica repair under churn
- private catalogs
- blinded hidden descriptors
- anonymous relay-backed hidden descriptor store and lookup

That makes discovery much stronger than a simple first-answer-wins DHT.

## 8. Current Transport

The current release is TCP-only.

There is still a transport abstraction in the code so QUIC can be added later, but the production path today is TCP for Linux and Windows.

## 9. Linux and Windows Support

Linux is the source-of-truth release branch.
Windows support is available through the `Windows-compatible` branch with the same current protocol and feature behavior.

Important difference:

- Linux has systemd workflows and experimental eBPF/XDP controls
- Windows follows the same network protocol, but Linux-only features do not automatically carry over

## 10. eBPF

VX6 includes experimental eBPF/XDP support on Linux.

That work is useful for inspection and future fast-path work, but it should not be presented as the core reason to adopt VX6 today.
The current encrypted relay plane works without needing it.

## 11. What Can Be Built on VX6

VX6 can be the network base for:

- private engineering portals
- peer-first chat and collaboration tools
- internal APIs and dashboards
- distributed worker and scheduler systems
- service-sharing for SSH, databases, and dev tools
- hidden access for sensitive admin panels
