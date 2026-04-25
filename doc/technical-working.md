# Technical Working

Suggested title: How VX6 Works | Technical Architecture for Discovery, Relay Paths, Hidden Services, and eBPF

Suggested meta description: Learn how VX6 works: node identity, bootstrap sync, DHT records, localhost-to-localhost forwarding, hidden services, relay paths, and eBPF.

## The Core Idea

VX6 turns local services into network-reachable services without forcing them to stop being local.

That means:

- the app still runs on localhost
- VX6 handles discovery, naming, and transport
- the user connects from a local port on their own machine

## 1. Node Identity

Each node has:

- a persistent Ed25519 keypair
- a stable VX6 node ID
- signed node and service records

This gives the network a strong identity layer without needing a central account system.

## 2. First Contact, Peers, and DHT

VX6 uses a practical model:

1. a node reaches any known live VX6 node
2. it learns other peers and service records
3. it keeps syncing with live peers
4. DHT keys help resolve names and aliases

This keeps first contact simple while allowing the network to keep moving peer to peer after that.

In other words, a bootstrap is not a forever-center.  
It is simply the first live node you use to enter the network.

## 3. Local Registry

Each node keeps a local registry of:

- known nodes
- known services
- hidden aliases

That local registry is important because it gives VX6 fast local knowledge for later lookups, relay planning, and service access.

## 4. Direct Service Flow

Direct service access works like this:

1. a service owner publishes `username.service`
2. a client resolves that service
3. VX6 opens a node-to-node session
4. the remote node forwards traffic to the real local target
5. the client uses a local forwarded port

This is why VX6 feels natural for SSH, HTTP, APIs, databases, and internal dashboards.

## 5. Direct IPv6 Mode

VX6 can also skip discovery completely.

If two people already know the target IPv6 address, the client can connect directly by address and still use VX6 for service forwarding.  
That is a simple and very practical use of real IPv6 reachability.

## 6. Proxy Path

VX6 can route traffic through a multi-hop relay chain.

The direct proxy path:

- picks relay nodes from the local registry
- builds a 5-hop route
- reaches the target through that path

This is useful when the user wants a relay route instead of a straight direct path.

## 7. Hidden Services in Detail

Hidden services are resolved by alias instead of `username.service`.

The hidden-service flow uses:

- 3 active intro nodes
- 2 standby intro nodes
- 2 guard nodes
- 3 rendezvous candidates

Profiles:

- `fast`: `3 + X + 3`
- `balanced`: `5 + X + 5`

The path works like this:

1. the hidden service publishes an alias descriptor
2. the descriptor lists active intro nodes and standby intro nodes
3. the client resolves the alias
4. the client picks an intro path and rendezvous candidate
5. the intro side passes the request inward
6. guard nodes help carry owner-side signaling
7. the owner builds its own path toward the rendezvous point
8. the client and owner meet at the rendezvous node
9. the service stream is carried through the relay topology

Why this matters:

- the service is reached by alias
- the direct service endpoint is not the public entry point
- routing can use multiple peers instead of one obvious path

The result is a private service model that fits apps, tools, admin panels, and internal systems.

## 8. Dynamic IP Updates

VX6 is built for changing public addresses.

When a node comes back with a new IPv6 address:

- it republishes a fresh signed node record
- reachable peers learn the new address
- the local registry updates the node to the new endpoint
- DHT-backed discovery follows the new record

This keeps the network alive even when addresses move over time.

## 9. eBPF

VX6 uses eBPF as a kernel-side performance layer on Linux.

The role of eBPF in VX6 is to:

- classify VX6 traffic early
- keep relay handling lightweight
- support fast networking decisions close to the kernel
- reduce overhead on busy relay nodes

In practice, eBPF helps VX6 push hot network work closer to the kernel while keeping the control plane readable and manageable.

## 10. Why VX6 Feels Fast

VX6 is built around service access, not around browser-era traffic patterns.

That matters because:

- services stay close to localhost
- direct IPv6 paths are available
- peer routing avoids unnecessary central middle layers
- the system is built for apps, tools, and operator workflows

## 11. What Can Be Built on VX6

VX6 can be the network base for:

- peer-to-peer video sharing
- private meeting rooms
- team chat
- collaborative editors
- remote control panels
- distributed compute control planes
- edge and robotics coordination
- internal service meshes

For example, a VX6-based video app can use peer-first paths so media moves more directly between participants instead of always depending on a heavy central route.  
For small teams and direct topologies, that can feel faster and more responsive than meeting stacks built around more centralized traffic flow.
