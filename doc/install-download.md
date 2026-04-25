# Install or Download

Suggested title: Download VX6 | Install on Linux and Start a Peer-to-Peer Node

Suggested meta description: Download or build VX6, install it on Linux, run it as a background service, and start sharing services over an IPv6 peer-to-peer network.

## Fast Path

Build VX6:

```bash
go build -o ./vx6 ./cmd/vx6
```

## Initialize

```bash
./vx6 init \
  --name alice \
  --listen '[::]:4242' \
  --advertise '[2001:db8::10]:4242' \
  --bootstrap '[2001:db8::1]:4242'
```

## Start

```bash
./vx6 node
```

## Run in Background

```bash
systemctl --user enable --now vx6
systemctl --user status vx6
```

Reload after service or config changes:

```bash
systemctl --user reload vx6
```

## Default Paths

```text
~/.config/vx6/config.json
~/.config/vx6/identity.json
~/.config/vx6/node.pid
~/.local/share/vx6
~/Downloads
```

## What You Need

- Linux
- IPv6 reachability
- Go toolchain if building from source

## Download Page Copy

VX6 is made for people who want direct service access with a cleaner network model.  
Install it, start a node, publish a service, and use it from another machine in minutes.

You can start from your own node, a team node, or any known live VX6 node that already sees the network.
