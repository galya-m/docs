---
sidebar_position: 4
---

# Using the CLI

Once you have created your account and have some funds, you are ready to start using the `ncli` to interact with different Nevermined networks.


## What environments can I use?

You can get the list of all the pre-configured environmnets running:

```bash
ncli network list
```

And later see the status of any of them:

```bash
ncli --network testnet network status
```

## Let's create a new account and check the balance

Create a new account using the `ncli` is easy. Just run:

```bash
ncli accounts new
```

This command will print all the relevant information like mnemonic, private key, public address of a derived account, etc. Make sure to save all this information if you want to use this account later.

To use the recently created account you just need to export the mnemonic in an environment variable:

```bash
export MNEMONIC="curious harsh offer relax choose reveal series actress message suspect today vocal"
```

In the testnets with a faucet available, you can get some funds running:

```bash
ncli accounts fund 0xe2DD09d719Da89e5a3D0F2549c7E24566e947260
```

Getting the balance of an account is possible running:

```bash
ncli accounts balance 0xe2DD09d719Da89e5a3D0F2549c7E24566e947260
```

## Assets

### Registering new assets

Nevermined is all about registering digital assets and provide services on top of them. The most basic one is about **data sharing**. So here we are gonna register a new asset and will set a price of 1 ETH for getting access to the file attached to that asset:

```bash
ncli assets register-asset --name 'A picture about myself' --author 'John Doe' --price 1 --urls https://www.kazoart.com/blog/wp-content/uploads/2018/03/23-magritte-uomo-con-mela-100x70-70x50_jpg.jpg --contentType image/jpeg
```

:::info

As a result of running this command, you will get a Decentralized Identifier (aka **DID**). This refers to a unique asset registered in a Nevermined network. 

:::

In this example we are using a public url, but with Nevermined you also could do:

* Add multiple urls referring to multiple files
* Use a cid for referring a content is in IPFS or Filecoin
* Publish the url of a content that is not publicly available (for example on premise in your own server or in the cloud). You could protect that content running your own [Nevermined Gateway](/docs/architecture/gateway/).

:::info

In Nevermined when you register an asset, the URL referring to the asset is **encrypted**.

:::

The price you published is related to the default token price of the network you are connected. This can be a Native token (ETH, MATIC, etc) or a ERC20.
You can control this exporting the **TOKEN_ADDRESS** environment variable. 

:::info

You can find more information about the `TOKEN_ADDRESS` variable in the [advanced configuration section](advanced_configuration.md).

:::

You can register a new asset using the metadata from a JSON file (example of [metadata here](https://github.com/nevermined-io/cli/blob/main/test/resources/example-1.json)):

```
ncli assets import  --metadata /tmp/my_asset_metadata.json
```

### Resolving an Asset

One registered asset in Nevermined is composed in 2 parts:

* The **metadata** describing the file (tile, author, description, etc)
* Some ids stored in the Smart contracts. This includes the **DID** and the reference to the metadata

Once an asset is registered and we have the reference to it via the **DID**, you can resolve the metadata using that DID. 

```bash
 ncli assets resolve did:nv:e23aeb13dc398be20b6718237a60793d4491d7da8aef53182ad2f05d8666c8d8
```

### Searching for stuff

With the CLI you can search across all the metadata of all the assets published for a Nevermined environment. You can do that running:

```bash
ncli assets search  "John Doe"
```

### Purchasing and downloading assets

Now we know how to publish assets, we can see how to interact with them. For example running the `assets download` option the publisher of the assets can download the files:

```bash
ncli assets download  did:nv:e23aeb13dc398be20b6718237a60793d4491d7da8aef53182ad2f05d8666c8d8  --path /tmp 
```

:::caution

Only the owner of the DID can use this command to download the assets. The rest of the world has to purchase them.

:::

So if you are not the owner, you can purchase the access to the asset running the order command. But first you need to make sure you are using a different account to the owner one:

```bash
export MNEMONIC="your awesome seed phrase that holds tokens on the network of choice"
ncli assets order did:nv:e23aeb13dc398be20b6718237a60793d4491d7da8aef53182ad2f05d8666c8d8
```

This command will return a unique service agreement id (or agreement id). This works as a receipt of your recent purchase. Using that now you can get access to the files attached to the asset:

```bash
ncli assets get did:nv:e23aeb13dc398be20b6718237a60793d4491d7da8aef53182ad2f05d8666c8d8 --agreementId 0x13d435886660cd2c411fd758db09db04b48ca1f1901b0bb449812e6e2eb603f3 --path /tmp
```

## NFTs

In Nevermined you can use NFTs (ERC-721 or ERC-1155) as a mechanism to tokenize digital assets and control the access to their digital files. Here we are show how to use them with the CLI.

:::info

In this page we are gonna use NFTs based in ERC-721, but most of this commands works very similar for ERC-1155 NFTs.

:::

### Deploying a new NFT contract

When you compile a Smart Contract you generate an ABI that includes the definiton of the public interface of the contract and the bytecode. Having an ABI you can deploy it in a network running the following command:

```bash
ncli nfts721 deploy MyERC721.json
```

If everything is okay, you have balance to pay the balance on the network you are deploying and all of this, as a result of this command you will get the address where this contract has been deployed. Copyu that address, we will use it in the next commands.

### Registering an asset with a NFT attached

Remember in a previous section we registered an asset that was allowing some downloading for people purchasing that asset right? Now we are gonna register a similar asset but with a ERC-721 NFT attached to it. The first parameter is the contract address of the NFT contract we got before:

```bash
ncli nfts721 create 0x726baA2f854A3BEC2378a707AeB38c9d933Ebad6 --name 'A picture about myself' --author 'John Doe' --price 1 --urls https://www.kazoart.com/blog/wp-content/uploads/2018/03/23-magritte-uomo-con-mela-100x70-70x50_jpg.jpg --contentType image/jpeg
```

As you can see, this command is very similar to the previous one. The main difference is here we are saying for whoever paying 1 token will receive a ERC-721 NFT. And whoever who holds that NFT will be able to get access to the urls passed as parameter.

If the asset was registered properly, you got a DID as before and you can see more information about the asset running:

```bash
ncli nfts721 show  "did:nv:b7b7a12fa80477d2c75fb730ec4c378445519bba7c816f10740ca564acbea06c" --nftAddress 0x726baA2f854A3BEC2378a707AeB38c9d933Ebad6
```

### Minting

With this command the asset owner can mint a NFT associated to the asset:

```bash
ncli nfts721 mint "did:nv:b7b7a12fa80477d2c75fb730ec4c378445519bba7c816f10740ca564acbea06c" 0x726baA2f854A3BEC2378a707AeB38c9d933Ebad6 --uri http://nevermined.io/metadata.json
```

### Purchase and download

So now using a different account you can purchase that asset:

```
export MNEMONIC="your awesome seed phrase that holds tokens on the network of choice"

ncli nfts721 order did:nv:b7b7a12fa80477d2c75fb730ec4c378445519bba7c816f10740ca564acbea06c
```

If everything went okay, now you should be able to download the files attached to the asset and protected by the NFT as access control:

```bash
ncli nfts721 download did:nv:b7b7a12fa80477d2c75fb730ec4c378445519bba7c816f10740ca564acbea06c --destination /tmp
```

You can check the account you used to purchase the asset is now holding the NFT:

```bash
ncli accounts balance 0xBE5449a6A97aD46c8558A3356267Ee5D2731ab5e --nftTokenAddress 0x726baA2f854A3BEC2378a707AeB38c9d933Ebad6
```
