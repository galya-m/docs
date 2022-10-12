---
sidebar_position: 1
title: Getting started
description: Nevermined Catalog Core
---

# Getting started

**Catalog core** includes all the Nevermined functions split between the `Catalog provider` and `Services`.

### Catalog provider

The Catalog provider loads the **Nevermined sdk** in the context of a **React application** and provides some parametes
and objects to manage it:

* account - contains all functions to manage authentications and collections related to an account
* assets - contains all functions to manage assets, such as retrieve, mint, transfer, order or download asset
* subscribe - contains all functions to manage events
* subscription - contains all functions to manage asset subscriptions by payment

### Services

Services include custom react hooks and providers to cover specific scenarios, giving the developer the synthax to implement it and view inside a react application. Currently the services are split in 4 groups:

* AccountService - custom hooks for user accounts and profiles
* AssetService - custom hooks for assets
* EventService - custom hooks for events
* SubscribeService - custom hooks for event listeners

## Prerequisites

The Nevermined Components Catalog is a package built with React and Typescript.
It requires [Node JS](https://nodejs.org/) v14 or higher. You can find online instructions about [How to install Node JS](https://nodejs.dev/en/learn/how-to-install-nodejs/).

## How to install ?

```bash
yarn add @nevermined-io/catalog-core
or
npm install --save @nevermined-io/catalog-core
```

## How to integrate ?

```typescript
import { Catalog, AssetService } from '@nevermined-io/components-catalog';
import App from 'app';
import { ethers } from 'ethers'
import { Config } from '@nevermined-io/nevermined-sdk-js';

const appConfig: Config = {
  web3Provider: typeof window !== 'undefined' ? window.ethereum : new ethers.providers.JsonRpcProvider(nodeUri),
  nodeUri,
  gatewayUri,
  faucetUri,
  verbose,
  gatewayAddress,
  secretStoreUri,
  graphHttpUri,
  marketplaceAuthToken,
  marketplaceUri,
  artifactsFolder
};

ReactDOM.render(
  <div>
    <Catalog.NeverminedProvider config={appConfig}>
      <App />
    </Catalog.NeverminedProvider>
  </div>,
  document.getElementById('root') as HTMLElement
);
```

## How to use ?

```typescript
const SingleAsset = () => {
  const did = 'did:nv:f8a00...';
  const assetData: AssetState = AssetService.useAsset(did);

  return (
    <>
      <div>Asset {did}:</div>
      <div>{JSON.stringify(assetData.ddo)}</div>
    </>
  );
};

```

For a full [example](https://github.com/nevermined-io/components-catalog/tree/main/example).
