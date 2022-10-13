---
sidebar_position: 3
---

# Advanced Configuration

The CLI is fully customizable via environment variables. By default the `ncli` has pre-configured different environments (testnet and production) you can connect directly to. 

:::info

If you want to see the existing pre-configured environments you simply run: `ncli network list`

:::

If you need to connect to a different environment, or configure the parameters, you need to export any of the following variables to your shell to modify how the `ncli` works.


## CLI global parameters

The `ncli` supports different parameters based on the command you want to run. Some are available across the whole application:

* `--help` - to parse information about how to use the `ncli` or a specific command
* `--version` - to print the application version and end
* `--verbose` or `-v` - to run the `ncli` in debug mode with information about what is going on
* `--network` or `-n` - to specify the network you want to connect to (`spree`, `testnet`, `defiMumbai`, etc). If you want to see the full list of pre-configured environments please run `ncli network list`
* `--acount` or `-a` - to use that specific `address` of the possible derived accounts from your `MNEMONIC`. If not given the `ncli` will try to load the first account derived (derivation path 0).
* `--json` - to print all the output in JSON format. This facilitates integrating the `ncli` with another application.


## Account Environment variables

The following list of variables are related to the account you use to connect to Nevermined

:::info

By default, the `ncli` always attempts to use a `MNEMONIC` first and if this is not given will try to use a key file.

:::

* `MNEMONIC` - Your seed phrase for your account. This seed phrase allows you to access your wallets.
* `KEYFILE_PATH` - If the `MNEMONIC` is not provided, the `ncli` will try to use a local key file to load your account. This variable should include the path to that key file.
* `KEYFILE_PASSWORD` - If you are using a key file, this variable will be used to get the password of that key file

:::warning

Remember to keep safe all your private information related to your account like seed phrases, private keys, key files and password. **NEVER** share this information with anyone else. 

:::


## Connecting to different environments

Nevermined is a framework for building digital ecosystems that can be deployed or configured in diverse ways. You can use Nevermined to build multiple use cases across multiple chains and networks. There are list of pre-defined networks/environments provided by the `ncli`. You can get the list of them running:

```bash
ncli network list
```

This will return a list of all the existing environments grouped by **name**. 
If you want to connect to any of them, we just need to configure your `NODE_URL` environmnet variable (using the "Node Uri" printed our using your own Infura or similar provider):

```bash
export NODE_URL=https://rpc-mumbai.matic.today
```

 Now you can use the parameter `--network` in the `ncli` commands allow to connect and use any of these environments:

```bash
ncli --network defiMumbai network status
```

## Network Environment variables

The following list of variables are related to the configuration of the Nevermined environment and how you interact with them:

* `NODE_URL` - JSON-RPC server. It could be an Infura or Alchemy url too. Example: `http://localhost:8545`
* `TOKEN_ADDRESS` - The ERC20 token address to use for the transactions. If not given or if is `0x0000000000000000000000000000000000000000` the payments will be made in the network native token (ETH, Matic, ..)
* `GATEWAY_URL` - The url of the gateway to use. If not given the default url is: `http://localhost:8030`
* `MARKETPLACE_API_URL` - The url of the marketplace api to use. If not given the default url is: `http://localhost:3100`
* `FAUCET_URL` - The url of the faucet to use. If not given the default url is: `http://localhost:3001`
* `IPFS_GATEWAY` - The url of the IPFS gateway used to upload/download contents. By default is `https://ipfs.infura.io:5001`
* `GATEWAY_ADDRESS` - The public address of the gateway. If not given the default address is: `0x068ed00cf0441e4829d9784fcbe7b9e26d4bd8d0`
* `GAS_MULTIPLIER` - For networks with some congestion, this parameter can help to increase the gas spent and speed up the transactions. If not given the default is `0`

:::info

Finding a decent `NODE_URL` is some times difficult. We recommend to open an Infura or Alchemy account for a more seamless experience.

:::
