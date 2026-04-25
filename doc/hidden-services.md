# Hidden Services

Suggested title: VX6 Hidden Services | Private Aliases, Relay Paths, and Rendezvous Routing

Suggested meta description: Learn how VX6 hidden services work: private aliases, intro nodes, standby intros, guard nodes, rendezvous routing, and relay-based private service access.

## What a Hidden Service Means in VX6

A hidden service is a service you reach by alias instead of by public service endpoint.

That means:

- the user connects to an alias
- the network uses relay logic in the background
- the direct service endpoint is not the public entry point

## Why Use It

Hidden services are useful when you want:

- a private admin panel
- a private SSH entry point
- a private internal API
- a sensitive team tool
- a service that should not be exposed as a normal public endpoint

## The Main Parts

VX6 hidden services use:

- 3 active intro nodes
- 2 standby intro nodes
- 2 guard nodes
- 3 rendezvous candidates

These parts give the service multiple contact points and multiple route choices.

## The Flow in Plain Language

1. the service owner publishes a hidden alias
2. the alias carries hidden-service routing information
3. the client resolves the alias
4. the client chooses an intro path
5. the network signals the owner side
6. both sides build paths toward a rendezvous point
7. the streams meet there
8. the service becomes reachable through the hidden path

## Why This Is Useful

This gives VX6 a private access mode that still feels service-first.

That matters because VX6 is not only about nodes talking to nodes.  
It is about real services being reachable in a cleaner and more private way.

## Profiles

### Fast

`3 + X + 3`

This is the lighter profile and a strong fit for practical use.

### Balanced

`5 + X + 5`

This uses longer relay paths and is a stronger fit when route depth matters more.

## Good Hidden-Service Examples

- hidden admin console
- private review room
- internal dashboard
- hidden team control panel
- protected CTF backend
- private API surface

## Why VX6 Hidden Services Feel Different

The VX6 hidden-service model stays close to how real service operators think:

- start from a local service
- publish an alias
- let the network build the path
- access the result as a usable service

That makes it readable, practical, and close to everyday operations.

