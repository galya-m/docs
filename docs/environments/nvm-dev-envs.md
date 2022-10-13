---
sidebar_position: 3
description: Nevermined Testnet Environments
---

# Testnet environments

Testnet environments are public nevermined environments deployed on public EVM-compatible testnet networks. Typically we use Polygon Mumbai.
Use [Alchemy's Mumbai Faucet](https://mumbaifaucet.com/) or [Polygon's Mumbai faucet](https://faucet.polygon.technology/) for requesting MATIC.

## Network Fee

You need to pay a fee to use a Nevermined environment when a payment is being done through the Smart Contracts. This needs to be configured by the content publisher. You can find more information in the [Network Fees section](network-fees.mdx).

:::info

The network fee in Nevermined testnets is **1%** and the receiver of that fee is the **0x309039F6A4e876bE0a3FCA8c1e32292358D7f07c** address.

:::


## Polygon - Mumbai

- *`public-nvm-v2-mumbai`*: Polygon public testing environment (`mumbai`). Using `public` contract tag. Use this if you want to integrate with Nevermined in a Polygon Testnet.

| Environment | Network | Contracts Version | Tag | Component | URL | Comments |
|-------------|---------|-------------------|-----|-----------|-----|----------|
| public-nvm-v2-mumbai | Mumbai | 2.0.5 & 2.1.0 | public | Gateway | https://gateway.mumbai.public.nevermined.rocks | |
| public-nvm-v2-mumbai | Mumbai | 2.0.5 & 2.1.0 | public | Marketplace API | https://marketplace-api.mumbai.public.nevermined.rocks | |
| public-nvm-v2-mumbai | Mumbai | 2.0.5 & 2.1.0 | public | Faucet | https://faucet.mumbai.public.nevermined.rocks | |
| public-nvm-v2-mumbai | Mumbai | 2.0.5 & 2.1.0 | public | GraphNode | https://api.thegraph.com/subgraphs/name/nevermined-io/public | Use with sdk >= 0.21.0 |

## Ethereum - Goerli

- *`public-nvm-v2-goerli`*: Ethereum testing environment (`goerli`). Using `public` contract tag. Use this if you want to integrate with Nevermined in a Ethereum Testnet.

| Environment | Network | Contracts Version | Tag | Component | URL | Comments |
|-------------|---------|-------------------|-----|-----------|-----|----------|
| public-nvm-v2-goerli | Goerli | 2.1.0 | public | Gateway | https://gateway.goerli.public.nevermined.rocks | |
| public-nvm-v2-goerli | Goerli | 2.1.0 | public | Marketplace API | https://marketplace-api.goerli.public.nevermined.rocks | |
| public-nvm-v2-goerli | Goerli | 2.1.0 | public | Faucet | https://faucet.goerli.public.nevermined.rocks | |
| public-nvm-v2-goerli | Goerli | 2.1.0 | public | GraphNode | https://api.thegraph.com/subgraphs/name/nevermined-io/public | Use with sdk >= 0.21.0 |


## Arbitrum - Goerli

- *`public-nvm-v2-arbitrum-goerli`*: Arbitrum testing environment (`arbitrum-goerli`). Using `public` contract tag. Use this if you want to integrate with Nevermined in a Arbitrum Testnet.

| Environment | Network | Contracts Version | Tag | Component | URL | Comments |
|-------------|---------|-------------------|-----|-----------|-----|----------|
| public-nvm-v2-arbitrum-goerli | Arbitrum Goerli | 2.1.0 | public | Gateway | https://gateway.arbitrum-goerli.public.nevermined.rocks | |
| public-nvm-v2-arbitrum-goerli | Arbitrum Goerli | 2.1.0 | public | Marketplace API | https://marketplace-api.arbitrum-goerli.public.nevermined.rocks | |
| public-nvm-v2-arbitrum-goerli | Arbitrum Goerli | 2.1.0 | public | Faucet | https://faucet.arbitrum-goerli.public.nevermined.rocks | |
| public-nvm-v2-arbitrum-goerli | Arbitrum Goerli | 2.1.0 | public | GraphNode | https://api.thegraph.com/subgraphs/name/nevermined-io/public | Use with sdk >= 0.21.0 |
