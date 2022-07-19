---
sidebar_position: 2
description: Building a DApp using Nevermined frameworks
---

# How to build a React application integrated with Nevermined

The idea of this tutorial is give a quick go through about using the [Nevermined Catalog](https://github.com/nevermined-io/components-catalog) of React components to support the development of dApps using the Nevermined environment.

## Prerequisites
The tutorial assumes your familiarity with blockchain, and general programming.

## Let's go!!

Instructions for following along locally using your preferred text editor.

### Setup the React app
1. Make sure you have a recent version of [Node.js](https://nodejs.org/en/) installed.
2. Follow the [installation instructions for Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) to make a new project. Or simply run `npx create-react-app my-nevermined-app --template typescript`.
3. Move to the my-nevermined-app directory `cd my-nevermined-app`.
4. Run `yarn add @nevermined-io/components-catalog` or `npm install --save @nevermined-io/components-catalog` depending of your favourite package manager.
5. Run `yarn run start` and open http://localhost:3000 and you will see the progress.

### Create your Nevermined dApp

Once the react app is running and you have your catalog dependency, the next step will be to setup the configuration:

1. Donwload [Nevermined abi](http://artifacts-nevermined-rocks.s3.amazonaws.com/80001/public/contracts_v2.0.0.tar.gz) and store them in a folder named contracts in the public folder.
2. Create a `config.ts` file and provide the Nevermined config as follow:

    **For the `REACT_APP_NODE_URI` you can connect to a [QuickNode](https://www.quicknode.com/) or [Infura](https://infura.io/) puclic Node.**

```
import { Config } from '@nevermined-io/nevermined-sdk-js';
import Web3 from 'web3';

export const serviceUri =
  process.env.REACT_APP_SERVICE_URI ||
  'http://localhost:3445';
export const gatewayAddress =
  process.env.REACT_APP_GATEWAY_ADDRESS || '0xB82dc620BB4dE6712376055a5cfc0DF11112D442';
export const gatewayUri =
  process.env.REACT_APP_GATEWAY_URI || 'https://gateway.mumbai.public.nevermined.rocks/';
export const faucetUri =
  process.env.REACT_APPREACT_APP_FAUCET_URI_FAUCET_URI || 'https://faucet.mumbai.public.nevermined.rocks';
export const nodeUri =
  process.env.REACT_APP_NODE_URI || 'https://bold-little-glitter.matic-testnet.discover.quiknode.pro/';
export const acceptedChainId = process.env.REACT_APP_ACCEPTED_CHAIN_ID || '80001'; // for Mumbai
export const rootUri = process.env.REACT_APP_ROOT_URI || 'http://localhost:3445';
export const marketplaceUri = process.env.REACT_APP_MARKETPLACE_URI || 'https://marketplace-api.mumbai.public.nevermined.rocks';

export const appConfig: Config = {
  //@ts-ignore
  web3Provider: new Web3(window.ethereum),
  nodeUri,
  gatewayUri,
  faucetUri,
  verbose: true,
  gatewayAddress,
  secretStoreUri: '',
  graphHttpUri: '',
  marketplaceAuthToken: '',
  marketplaceUri,
  artifactsFolder: `${rootUri}/contracts`
};

```
3. Go to `index.tsx` and add the `NeverminedProvider`
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Catalog from '@nevermined-io/components-catalog';
import { appConfig } from './config';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Catalog.NeverminedProvider config={appConfig}>
      <App />
    </Catalog.NeverminedProvider>
  </React.StrictMode>
);

reportWebVitals();
```
4. After that you will be able to iteract with the Nevermined ecosystem. List did assets deployed updating your `App.tsx`

```
import Catalog from '@nevermined-io/components-catalog'
import React, { useEffect, useState } from 'react'

function App() {

  const query = {
    offset: 150,
    page: 1,
    query: {},
    sort: {
      created: 'desc'
    }
  };

  const MultipleAssets = () => {
    const { isLoading: isLoadingAssets, result } = Catalog.useAssets(query)
    const [dids, setDids] = useState<string[]>()

    useEffect(() => {
      setDids(result?.results?.map(asset => asset.id))
    }, [result])

    const [filterQuery, setQuery] = useState("")

    function filterItems(query: string) {
       setQuery(query)
       setDids(result?.results?.map(asset => asset.id)?.filter(item => item.includes(query)))
     }

    return (
      <>
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          placeholder="Search for..."
          value={filterQuery}
          onChange={(e) => filterItems(e.target.value)}
        />
        <div>Assets: </div>
        <div>
          <ul>{!isLoadingAssets ? dids?.map(asset => <li key={asset}>{asset}</li>) : "Loading assets..."}</ul>
        </div>
      </>
    )
}
  return (
    <div className="App">
      <header className="App-header">
        <MultipleAssets />
      </header>
    </div>
  );
}

export default App;
```
