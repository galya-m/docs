---
sidebar_position: 2
description: Nevermined Production Environments
---

# Production environments

## Network Fee

The usage of a Nevermined environment requires to pay a fee when a payment is being done through the Smart Contracts. This needs to be configured by the content publisher. You can find more information in the [Network Fees section](network-fees.mdx).

:::info

The network fee in Nevermined production environments is **1%** and the receiver of that fee is the **0x35aFA2408BB4f479996fafb2bB3A183ec064C265** address.

:::

## Public Polygon environment

- *`public-nvm-v2-mumbai`*: Public environment in Polygon. Use this if you want to integrate with Nevermined in Polygon for production.

### Version 2.0.5

| Environment | Network | Contracts Version | Tag | Component | URL | Comments |
|-------------|---------|-------------------|-----|-----------|-----|----------|
| public-nvm-v2-mumbai | Mumbai | 2.0.5 | public | Gateway | https://gateway.public.nevermined.rocks | |
| public-nvm-v2-mumbai | Mumbai | 2.0.5 | public | Marketplace API | https://marketplace-api.public.nevermined.rocks | |
| public-nvm-v2-mumbai | Mumbai | 2.0.5 | public | GraphNode | https://api.thegraph.com/subgraphs/name/nevermined-io/public | Use with sdk >= 0.21.0 |


### Version 2.1.0

| Environment | Network | Contracts Version | Tag | Component | URL | Comments |
|-------------|---------|-------------------|-----|-----------|-----|----------|
| public-nvm-v2-mumbai | Mumbai | 2.1.0 | public | Gateway | - | |
| public-nvm-v2-mumbai | Mumbai | 2.0.5 | public | Marketplace API | - | |
| public-nvm-v2-mumbai | Mumbai | 2.0.5 | public | GraphNode | https://api.thegraph.com/subgraphs/name/nevermined-io/public | Use with sdk >= 0.21.0 |
