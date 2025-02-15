# Important Commands

## Faucet Account Information {#faucet-account-information}

```rust
nctl-view-faucet-account
```

This command is part of NCTL and provides a view into the faucet account details. The faucet is the default account created on the network. Generally on the Mainnet, your own account is used to fund transactions. However, for the sake of this tutorial, we do not need accounts and will use the faucet to execute deploys. This command supplies two key pieces of information: the account's _secret key_ location and the _account hash_, which are used to sign deploys and query the network state, respectively.

## State Root Hash {#state-root-hash}

```rust
casper-client get-state-root-hash --node-address [NODE_SERVER_ADDRESS]
```

The first command that we will cover as part of the _casper-client_ tool is the [_get-state-root-hash_ command. The state root hash is an identifier of the current network state. It is similar to a Git commit ID for commit history. It gives a snapshot of the blockchain state at a moment in time. For this tutorial, it will be used to query the network state after we take actions with deployments.

:::note

After any deploys to the network, you must get the new state root hash to see the new changes reflected. Otherwise, you will be looking at events in the past.

:::

## Querying Network State {#querying-network-state}

```rust
casper-client query-global-state \
    --node-address [NODE_SERVER_ADDRESS] \
    --state-root-hash [STATE_ROOT_HASH] \
    --key [ACCOUNT_HASH] \
    -q "[SESSION_NAME]/[SESSION_NAMED_KEY]" (OPTIONAL)
```

This command allows you to query the state of a Casper network at a given moment in time, which is specified by the _state-root-hash_ described above.

-   The _node-address_ is the server (localhost when running on a local NCTL network).
-   The _key_ is the identifier for the query. It must be either the account public key, account hash, contract address hash, transfer hash, or deploy hash. We will demonstrate two of these key types in this tutorial.
-   The optional query path argument (_q_) allows you to drill into the specifics of a query concerning the key.

## Put Deploys (onto the Chain) {#put-deploys-onto-the-chain}

### Deploy via a compiled Wasm binary {#deploy-via-a-compiled-wasm-binary}

```rust
casper-client put-deploy \
    --node-address [NODE_SERVER_ADDRESS] \
    --chain-name casper-net-1 \
    --secret-key [KEY_PATH]/secret_key.pem \
    --payment-amount 5000000000000 \
    --session-path [CONTRACT_PATH]/counter-define.wasm
```

This command creates a deploy and sends it to the network for execution. In this first usage of the command,

-   The _session-path_ points to a compiled Wasm contract.
-   This contract is then deployed to the network specified by _node-address_ and _chain-name_. By default, NCTL names the chain "casper-net-1" but this is configurable.
-   The _payment-amount_ is in units of motes (1 nano-CSPR) and is required to pay the transaction fee for the deployment. If it is too small, the transaction will get denied due to insufficient funds.

### Deploy via a named key already on the blockchain {#deploy-via-a-named-key-already-on-the-blockchain}

```rust
casper-client put-deploy \
    --node-address [NODE_SERVER_ADDRESS] \
    --chain-name casper-net-1 \
    --secret-key [KEY_PATH]/secret_key.pem \
    --payment-amount 5000000000000 \
    --session-name "counter" \
    --session-entry-point "counter_inc"
```

This second usage of _put-deploy_ does not place a new contract on the chain, but it allows you to call entry points (functions) defined in smart contracts.

Here we show the example using "counter" and "counter_inc" because, in the [Counter tutorial](./walkthrough.md), we have defined a smart contract by the name of "counter", and there is an entry-point named "counter_inc" defined within it. However, these will be different when you write your contracts.

## Get Deploys (from the Chain) {#get-deploys-from-the-chain}

```rust
casper-client get-deploy \
    --node-address [NODE_SERVER_ADDRESS] \
    [DEPLOY_HASH]
```

The _get-deploy_ command is complementary to the _put-deploy_ command. It retrieves a deploy from the network and allows you to check the status of the deploy. The _DEPLOY_HASH_ is the identifier to a specific deploy and is returned by the _put-deploy_ command.
