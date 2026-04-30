# Progress

Suggested title: VX6 Progress | Current Features, Platform Support, and Honest Status

Suggested meta description: See what VX6 already does today: signed discovery, DHT-backed lookup, hidden services, private catalogs, relay routing, file transfer, GUI access, and current Linux and Windows support.

## Current Status

VX6 is already a working network runtime for direct services, public and private discovery, hidden access, relay routing, and peer-first applications.

## Live Capabilities

- signed node identity
- encrypted node-to-node sessions
- public service lookup
- private per-user service catalogs
- hidden services with encrypted descriptors
- blinded hidden descriptor keys
- relay-backed hidden descriptor store and lookup
- DHT-backed record lookup with bounded replication
- file transfer between nodes
- localhost-to-localhost service sharing
- local runtime control and status
- local web GUI through `vx6-gui`
- Linux and Windows support available now

## Practical Outcome

You can already use VX6 to:

- reach SSH over a local forwarded port
- expose internal web tools
- share databases without opening them publicly
- move files between peers
- build private team networks
- run invite-based hidden services
- build peer-to-peer apps on top of the network

## What Is Still In Progress

- seamless hidden mid-stream failover after relay loss
- stronger anti-Sybil DHT store admission
- real QUIC transport
- a proven active eBPF/XDP fast path for the current encrypted relay plane
- polished packaging and service lifecycle work beyond Linux
- the broader browser-wrapper experience

## Why This Matters

VX6 is no longer just a protocol idea.
It already works as a real service-sharing network, and most of the remaining work is hardening, failover, and release polish.
