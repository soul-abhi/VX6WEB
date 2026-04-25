# How To Use VX6

Suggested title: How to Use VX6 | Quick Start for Service Sharing, File Transfer, and Hidden Services

Suggested meta description: Learn how to use VX6 in a few short steps: start a node, publish a service, connect by name, send files, and use hidden aliases.

## Rule One

IPv6 endpoints must look like this:

```text
'[ipv6]:port'
```

Example:

```text
'[2401:db8::10]:4242'
```

## 1. Initialize a Node

```bash
vx6 init \
  --name alice \
  --listen '[::]:4242' \
  --advertise '[2001:db8::10]:4242' \
  --bootstrap '[2001:db8::1]:4242'
```

`--bootstrap` means a known live VX6 node.  
It does not need to be a permanent central server. It can be any reachable node that already sees the network.

## 2. Start the Node

```bash
vx6 node
```

## 3. Share a Local Service

Example for SSH:

```bash
vx6 service add --name ssh --target 127.0.0.1:22
vx6 reload
```

## 4. Connect From Another Node

```bash
vx6 connect --service alice.ssh --listen 127.0.0.1:2222
ssh -p 2222 user@127.0.0.1
```

## 5. Share a Web App

```bash
vx6 service add --name web --target 127.0.0.1:8080
vx6 reload
```

Client:

```bash
vx6 connect --service alice.web --listen 127.0.0.1:9000
curl http://127.0.0.1:9000
```

## 6. Send a File

```bash
vx6 send --file ./backup.tar --to alice
```

Received files go to:

```text
~/Downloads
```

## 7. Connect Directly By IPv6

If you already know the host IPv6:

```bash
vx6 connect --service ssh --addr '[2001:db8::10]:4242' --listen 127.0.0.1:2222
```

## 8. Use a Hidden Alias

Host:

```bash
vx6 service add \
  --name admin \
  --target 127.0.0.1:22 \
  --hidden \
  --alias hs-admin \
  --profile fast
vx6 reload
```

Client:

```bash
vx6 connect --service hs-admin --listen 127.0.0.1:2222
```

What happens in the background:

- VX6 resolves the hidden alias
- it chooses intro nodes and relay paths
- it selects a rendezvous route
- the client reaches the service without needing the direct service endpoint

## 9. Run It in the Background

```bash
systemctl --user enable --now vx6
systemctl --user reload vx6
systemctl --user status vx6
```

## 10. Useful Commands

```bash
vx6 help
vx6 status
vx6 list
vx6 identity
vx6 debug registry
vx6 debug dht-get --service alice.ssh
```
