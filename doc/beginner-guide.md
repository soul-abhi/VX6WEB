# Beginner Guide

Suggested title: What Is VX6? A Simple Beginner Guide to Peer-to-Peer Networking on IPv6

Suggested meta description: Learn VX6 in plain English. Understand IPv6, localhost sharing, peer-to-peer access, and why VX6 is useful for real services.

## VX6 in One Minute

VX6 lets one computer share a local app with another computer.  
That app can stay on `127.0.0.1`, and VX6 carries access across the network.  
So instead of opening your database, admin panel, or SSH service directly to the world, you share it through VX6.  
On the other side, the user gets a local port on their own machine and uses it like normal.

You also do not need one forever-central server to make that work.  
If you know any live VX6 node in the network, you can start there, learn the rest of the network, and continue peer to peer.

## What Is IPv6?

IPv6 is the modern version of internet addressing.  
It gives devices globally unique addresses without the old scarcity of IPv4.  
That makes direct device-to-device communication much more natural.  
VX6 takes that idea and turns it into a usable peer-to-peer service network.

## What Does "Localhost to Localhost" Mean?

Many important apps only listen on localhost:

- SSH
- databases
- admin panels
- dashboards
- internal APIs

Normally, localhost means "only this machine can reach it."  
VX6 keeps the app local, but lets a remote peer access it from their own localhost.  
That is one of the most useful parts of the system.

## Why This Feels Simpler

With VX6:

- the service owner keeps the app local
- the user connects from a local port
- the app itself does not need to change

That means less friction, less exposure, and a cleaner way to share real services.

## Do You Need A Bootstrap Server?

Not in the old centralized sense.

In VX6, a bootstrap is simply the first live node you know.  
That can be your own VPS, a friend's node, a team node, or any trusted node already in the network.  
Once connected, VX6 learns other peers and keeps building its local view from there.

## Basic Example

Bob shares SSH:

```bash
vx6 service add --name ssh --target 127.0.0.1:22
```

Alice connects:

```bash
vx6 connect --service bob.ssh --listen 127.0.0.1:2222
ssh -p 2222 user@127.0.0.1
```

Alice still uses SSH exactly the way she already knows.  
VX6 is the network layer in between.

## Why People Like It

- simple mental model
- real app support
- private by default
- no need to redesign services
- works well for teams, tools, and internal infrastructure
- any known live node can be your starting point
