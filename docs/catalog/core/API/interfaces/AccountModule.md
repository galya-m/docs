# Interface: AccountModule

AccountModule is exposed by the main context
under 'account' object

## Table of contents

### Properties

- [generateToken](AccountModule.md#generatetoken)
- [getCollection](AccountModule.md#getcollection)
- [getReleases](AccountModule.md#getreleases)
- [isAssetHolder](AccountModule.md#isassetholder)
- [isNFT1155Holder](AccountModule.md#isnft1155holder)
- [isNFT721Holder](AccountModule.md#isnft721holder)
- [isTokenValid](AccountModule.md#istokenvalid)

## Properties

### generateToken

• **generateToken**: () => `Promise`<[`MarketplaceAPIToken`](MarketplaceAPIToken.md)\>

#### Type declaration

▸ (): `Promise`<[`MarketplaceAPIToken`](MarketplaceAPIToken.md)\>

Generate a token for authentication in the Marketplace API

##### Returns

`Promise`<[`MarketplaceAPIToken`](MarketplaceAPIToken.md)\>

The new generated token

#### Defined in

[types/index.ts:452](https://github.com/nevermined-io/components-catalog/blob/963d32e/lib/src/types/index.ts#L452)

___

### getCollection

• **getCollection**: (`address`: `string`) => `Promise`<`string`[]\>

#### Type declaration

▸ (`address`): `Promise`<`string`[]\>

Get the assets bought by the address given

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address which bought the assets returned |

##### Returns

`Promise`<`string`[]\>

List of assets which was bought by the address given as argument

#### Defined in

[types/index.ts:447](https://github.com/nevermined-io/components-catalog/blob/963d32e/lib/src/types/index.ts#L447)

___

### getReleases

• **getReleases**: (`address`: `string`) => `Promise`<`string`[]\>

#### Type declaration

▸ (`address`): `Promise`<`string`[]\>

Get all the assets published from the address passed by argument

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address owner of the assets that we want to get |

##### Returns

`Promise`<`string`[]\>

List of assets which was published by the address given

#### Defined in

[types/index.ts:441](https://github.com/nevermined-io/components-catalog/blob/963d32e/lib/src/types/index.ts#L441)

___

### isAssetHolder

• **isAssetHolder**: (`did`: `string`, `walletAddress`: `string`) => `Promise`<`boolean`\>

#### Type declaration

▸ (`did`, `walletAddress`): `Promise`<`boolean`\>

This method validates if an user is an asset holder.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | The unique identifier of the asset |
| `walletAddress` | `string` | The public address of the user |

##### Returns

`Promise`<`boolean`\>

true if the user owns at least one edition of the NFT

#### Defined in

[types/index.ts:465](https://github.com/nevermined-io/components-catalog/blob/963d32e/lib/src/types/index.ts#L465)

___

### isNFT1155Holder

• **isNFT1155Holder**: (`did`: `string`, `walletAddress`: `string`) => `Promise`<`boolean`\>

#### Type declaration

▸ (`did`, `walletAddress`): `Promise`<`boolean`\>

This method validates if a user is a NFT (ERC-1155 based) holder for a specific `tokenId`.
For ERC-1155 tokens, we use the DID as tokenId. A user can between zero an multiple editions
of a NFT (limitted by the NFT cap).

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | The unique identifier of the NFT within a NFT ERC-1155 contract |
| `walletAddress` | `string` | The public address of the user |

##### Returns

`Promise`<`boolean`\>

true if the user owns at least one edition of the NFT

#### Defined in

[types/index.ts:475](https://github.com/nevermined-io/components-catalog/blob/963d32e/lib/src/types/index.ts#L475)

___

### isNFT721Holder

• **isNFT721Holder**: (`nftAddress`: `string`, `walletAddress`: `string`) => `Promise`<`boolean`\>

#### Type declaration

▸ (`nftAddress`, `walletAddress`): `Promise`<`boolean`\>

This method validates if a user is a NFT (ERC-721 based) holder for a specific NFT contract address.
For ERC-721 tokens, we use the DID as tokenId. A user can between zero an multiple editions
of a NFT (limitted by the NFT cap).

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nftAddress` | `string` | The contract address of the ERC-721 NFT contract |
| `walletAddress` | `string` | The public address of the user |

##### Returns

`Promise`<`boolean`\>

true if the user holds the NFT

#### Defined in

[types/index.ts:485](https://github.com/nevermined-io/components-catalog/blob/963d32e/lib/src/types/index.ts#L485)

___

### isTokenValid

• **isTokenValid**: () => `boolean`

#### Type declaration

▸ (): `boolean`

check if the token for Marketplace API is valid

##### Returns

`boolean`

if token is valid it will return true

#### Defined in

[types/index.ts:457](https://github.com/nevermined-io/components-catalog/blob/963d32e/lib/src/types/index.ts#L457)
