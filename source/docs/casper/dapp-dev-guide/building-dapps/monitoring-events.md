# Monitoring and Consuming Events

The Casper node streams deploy execution effects and finality signatures through an SSE server. The default configuration of the Casper node provides event streaming via the port specified as the `event_stream_server.address` in the node's *config.toml*, which is by default `9999` on [Testnet](https://testnet.cspr.live/tools/peers) and [Mainnet](https://cspr.live/tools/peers). The URLs for different types of events are:

- `/events/deploys`
    The DeployAccepted events are emitted on `/events/deploys` endpoint. This means when a deploy is received by the node and it passes the first set of validity checks, it is stored locally, gossiped to peers and enqueued for inclusion in a block - at this point the DeployAccepted event is emitted.
- `/events/sigs`
    The FinalitySignature is emitted on `/events/sigs` endpoint, whenever a new finality signature is received.
- `/events/main` 
    -   The other events such as BlockAdded, DeployProcessed, DeployExpired, Fault and Step are emitted on the `/events/main` endpoint.
        -   BlockAdded - This event is emitted whenever a new block is added to the blockchain.
        -   DeployProcessed - This event is emitted when the given deploy has been executed, committed and forms part of the given block.
        -   DeployExpired - This event is emitted if a deploy is not added to a block for processing by a validator before the deploy's time to live (TTL) expires.
        -   Fault - This event is emitted if there is a validator error.
        -   Step - This event is emitted when the execution effects produced by running the auction contract at the end of every era.
        -   Shutdown - This event is emitted when the node is about to shut down, usually for an upgrade.
        -   ApiVersion - This is always the first event emitted when a new client connects to the SSE server, specifying the API version of the server.

Each URL can have a query string added of the form `?start_from=<ID>`, where ID is an integer representing an old event ID. With this query, you can replay the event stream from that old event onwards. If you specify an event ID that has already been purged from the cache, the server will replay all the cached events.

:::note

The server keeps only a limited number of events cached to allow replaying the stream to clients using the `?start_from=` query string. The cache size can be set differently on each node using the `event_stream_buffer_length` value in the *config.toml*. By default, it is only 5000. 
The intended use case is to allow a client consuming the event stream that loses its connection to reconnect and hopefully catch up with events that were emitted while it was disconnected.

:::

## Usage

To proceed, you need to acquire the IP address of a [peer](/workflow/setup/#acquire-node-address-from-network-peers) on the network. 

With the following command, you can start watching the event stream for DeployAccepted events. Replace the HOST field with the peer IP address.

```bash
curl -s http://<HOST>:9999/events/deploys
```

To monitor FinalitySignature events, you can use this command:

```bash
curl -s http://<HOST>:9999/events/sigs
```

For all other event types, you can monitor the main endpoint:

```bash
curl -s http://<HOST>:9999/events/main
```

Replay the event stream from an old event onwards. Replace HOST, EVENT_TYPE, and ID with the values you need in this command:

```bash
curl -s http://<HOST>:9999/events/<EVENT_TYPE>?start_from=<ID>
```

**Example:**

```bash
curl -s http://65.21.235.219:9999/events/main?start_from=29267508
```
