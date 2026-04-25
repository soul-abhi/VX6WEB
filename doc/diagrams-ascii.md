# ASCII Diagrams

Use these as source diagrams for website graphics.

## 1. Localhost to Localhost

```text
  Bob's Machine                             Alice's Machine
  ------------------                        ------------------
  sshd -> 127.0.0.1:22                      ssh -p 2222 user@127.0.0.1
        |                                           ^
        v                                           |
      [ VX6 ] <========== peer network =========> [ VX6 ]
```

## 2. Direct Service by Name

```text
  Service Owner                               Client
  -------------                               ------
  bob.web -> 127.0.0.1:8080                   vx6 connect --service bob.web
        |                                              |
        v                                              v
    signed service record  --->  registry / DHT  ---> resolve
        |                                              |
        +---------------- VX6 session -----------------+
```

## 3. Direct Service by Raw IPv6

```text
  Host knows service target locally
  Friend knows host IPv6

  [ Host VX6 ] <=======================> [ Friend VX6 ]
      |                                        |
      v                                        v
  127.0.0.1:22                           127.0.0.1:2222
```

## 4. First Known Node to Peer Mesh

```text
               first contact

            [ any known node ]
                 /   |   \
                /    |    \
               v     v     v
           [NodeA][NodeB][NodeC]
              \      |      /
               \     |     /
                \    |    /
                 \   |   /
                  [ peer mesh ]
```

## 5. Peer Sync and Record Spread

```text
  Node A publishes new address / service

     [Node A]
      / |  \
     v  v   v
  [B] [C] [D]
    \  |   /
     \ v  /
      [E]

  signed records spread through reachable peers
```

## 6. Dynamic IP Change

```text
  old record:  alice -> [2001:db8::10]:4242
  new record:  alice -> [2001:db8::55]:4242

  [Alice restarts] ---> [live peer]
         |                   |
         v                   v
   publish fresh record --> registry update --> DHT update --> peers learn new path
```

## 7. Equal-Capability Node System

```text
  Any node can be:

      [ service host ]
      [ relay node   ]
      [ intro node   ]
      [ rendezvous   ]
      [ normal peer  ]

  same runtime, different roles
```

## 8. 5-Hop Proxy Path

```text
  Client -> R1 -> R2 -> R3 -> R4 -> R5 -> Target Node -> Local Service
```

## 9. Hidden Service Path

```text
                  active intros
              [I1] [I2] [I3]
                  \   |   /
                   \  |  /
                    \ | /
                [ hidden alias ]

             standby intros: [S1] [S2]

  client side path                     owner side path

  Client -> A -> B -> C -> X <- D <- E <- F <- Hidden Owner

  X = rendezvous node
```

## 10. Hidden Service with Guards

```text
  Client
    |
    v
  Intro Node ---> Guard 1 / Guard 2 ---> Hidden Owner
                    |
                    v
             owner-side routing signal
```

## 11. Frontend + Backend + Database Team Stack

```text
   Users
    |
    v
 [Frontend Node]
       |
       v
   [API Node]
       |
       v
   [DB Node]

  Each service can stay local on its own machine.
  VX6 connects the whole stack.
```

## 12. Team Architecture with Local Services

```text
  Frontend: 127.0.0.1:3000
  Backend:  127.0.0.1:8080
  DB:       127.0.0.1:5432

  [Front VX6] <----> [API VX6] <----> [DB VX6]
```

## 13. CTF Team of 10

```text
       [Scoreboard]
        /   |   \
       /    |    \
 [Challenge1][Challenge2][Challenge3]
       \      |       /
        \     |      /
         [Admin Tools]
              |
         [10 Team Members]

  every challenge and admin tool can stay local to its own node
```

## 14. Distributed Compute

```text
           [ Controller ]
            /   |   \
           /    |    \
          v     v     v
      [Worker][Worker][Worker]
          \      |      /
           \     |     /
            \    |    /
             [ Metrics ]
```

## 15. Collaborative Workspace

```text
    [Chat]   [Notes]   [Dashboard]   [Admin Panel]
       \        |          |             /
        \       |          |            /
         \      |          |           /
              [ VX6 team network ]
```

## 16. Decentralization View

```text
   not one center

      [A]----[B]----[C]
       |\      \      |
       | \      \     |
       |  \      \    |
      [D]--[E]---[F]--[G]

   many peers
   many paths
   no single app center
```

## 17. Why VX6 Feels Faster for Direct Services

```text
  Traditional idea:
  user -> extra layers -> proxy assumptions -> app

  VX6 idea:
  user localhost -> VX6 -> peer -> target localhost
```

## 18. eBPF Fast Path

```text
  NIC
   |
   v
 [eBPF / XDP]
   |
   +--> classify VX6 traffic
   +--> fast relay decisions
   +--> keep hot path lightweight
   |
   v
 [ VX6 runtime ]
```

## 19. Service Discovery

```text
  node start
     |
     v
  any known live node
     |
     v
  local registry update
     |
     v
  DHT-backed lookup
     |
     v
  connect to service
```

## 20. The Main VX6 Story

```text
  local app -> VX6 -> peer network -> VX6 -> local app

  build on localhost
  share by peer
  stay direct
```

## 21. Build a Video App on VX6

```text
  [User A Camera/Mic] -> [VX6 media app] -> [VX6] ==== peer path ==== [VX6] -> [VX6 media app] -> [User B Screen/Speakers]

  direct media path
  lighter middle layer
  good fit for small-group real-time apps
```

## 22. VX6 as Base Layer / SDK Story

```text
      your app
        |
        +--> UI
        +--> state
        +--> media
        +--> collaboration
        |
        v
       VX6
        |
        +--> naming
        +--> localhost sharing
        +--> relay paths
        +--> hidden aliases
        +--> peer discovery
```
