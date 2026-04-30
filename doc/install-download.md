# Install or Download

Suggested title: Download VX6 | Build for Linux or Windows and Start a Node

Suggested meta description: Download or build VX6 for Linux or Windows, initialize a node, and start sharing localhost services over the current VX6 peer-to-peer network.

## Choose Your Branch

- `main` for the Linux-first release branch
- `Windows-compatible` for Windows builds with the same current protocol and feature set

## Linux Fast Path

```bash
make build
sudo make install
```

Or build directly:

```bash
go build -o ./vx6 ./cmd/vx6
go build -o ./vx6-gui ./cmd/vx6-gui
```

## Windows Fast Path

```powershell
go build -o vx6.exe ./cmd/vx6
go build -o vx6-gui.exe ./cmd/vx6-gui
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

## Background Runtime on Linux

```bash
systemctl --user enable --now vx6
systemctl --user status vx6
systemctl --user reload vx6
```

## Default Paths

Linux defaults:

```text
~/.config/vx6/config.json
~/.config/vx6/identity.json
~/.config/vx6/node.pid
~/.local/share/vx6
~/Downloads
```

Windows uses its normal user config and cache directories.

## What You Need

- Linux or Windows
- IPv6 reachability
- Go toolchain if building from source

## Download Page Copy

VX6 is made for people who want direct service access with a cleaner network model.
Install it, start a node, publish a service, and use it from another machine in minutes.

The current release is TCP-only, includes the local `vx6-gui` web front-end, and keeps the broader browser-wrapper idea as upcoming work.
