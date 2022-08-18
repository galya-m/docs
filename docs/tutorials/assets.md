---
sidebar_position: 3
description: Building a DApp using Nevermined frameworks 2
---


# How to create and consume your first assets in a React application integrated with Nevermined

Following with our series, this is going to continue showing how to unblock Nevermined features using [Nevermined Catalog](https://github.com/nevermined-io/components-catalog).

## Prerequisites

The tutorial assumes your familiarity with blockchain, and general programming. If is your first time using the Nevermined catalog don't hesitate to go back and take a look to the [previous chapter](https://nvm-docs.nevermined.io/docs/tutorials/running-local).

### How to create an asset

This section will guide you to the creation of your first Nevermined asset.

1. First import the provider in our index.tsx from the Catalog.
   *Note that our application is growing and now has some routes in order to handle properly endpoints.*

    ```<BrowserRouter>
        <Catalog.NeverminedProvider config={appConfig}>
            <Catalog.AssetPublishProvider>
                <MetaMask.WalletProvider
                nodeUri={appConfig.nodeUri!}
                correctNetworkId="0x13881"
                chainConfig={ChainConfig}
                >
                    <App />
                </MetaMask.WalletProvider>
            </Catalog.AssetPublishProvider>
        </Catalog.NeverminedProvider>
      </BrowserRouter>
    ```

2. Import the function from the Catalog.

    ```const { onAssetPublish, assetPublish, setAssetPublish } = Catalog.useAssetPublish()
    ```

3. Create the metadata object that will be published offchain.

    ```const metadata: MetaData = {
            main: {
            name: assetPublish?.name,
            dateCreated: new Date().toISOString().replace(/\.[0-9]{3}/, ''),
            author: assetPublish?.author,
            license: 'No License Specified',
            price: String(assetPublish?.price),
            datePublished: new Date().toISOString().replace(/\.[0-9]{3}/, ''),
            type: assetPublish?.type,
            files: [{ url: assetPublish?.file, contentType: 'text/markdown' }]
            },
            additionalInformation: {
            description: assetPublish?.description,
            categories: []
            }
        } as MetaData
    ```

4. Call the function in your code. Creating a button that publish when you click and send the `assetPublish` object.

    ```async function handleOnSubmit() {
            if (!isLoadingSDK) {
            const ddo = await onAssetPublish({metadata: metadata})
            setDidDeployed(ddo!.id)
            }
        }
    ```

5. After sign a message with your wallet provider and pay the fees you will be publishing your first asset. Check that appear in the assets list after some seconds.

### How to consume an asset

This section will show how to consume an asset already published using Nevermined.

1. Import 
2. 
3. 

:::info

What is an NFT?

An NFT non-fungible-token is a token that represent the value of any digital asset that lives on the blockchain. Currently there are to mayor standards ERC721 and ERC1155  

:::

### How to create an NFT ERC721

### How to consume an NFT ERC721

### How to create an NFT ERC1155

### How to consue an NFT ERC1155
