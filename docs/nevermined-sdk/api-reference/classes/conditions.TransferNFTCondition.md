[@nevermined-io/nevermined-sdk-js](../code-reference.md) / [conditions](../modules/conditions.md) / TransferNFTCondition

# Class: TransferNFTCondition

[conditions](../modules/conditions.md).TransferNFTCondition

Condition allowing to transfer an NFT between the original owner and a receiver

## Hierarchy

- [`ProviderCondition`](conditions.ProviderCondition.md)<`TransferNFTConditionContext`\>

  ↳ **`TransferNFTCondition`**

## Table of contents

### Constructors

- [constructor](conditions.TransferNFTCondition.md#constructor)

### Properties

- [contract](conditions.TransferNFTCondition.md#contract)
- [contractName](conditions.TransferNFTCondition.md#contractname)
- [events](conditions.TransferNFTCondition.md#events)
- [version](conditions.TransferNFTCondition.md#version)

### Accessors

- [address](conditions.TransferNFTCondition.md#address)
- [artifactsFolder](conditions.TransferNFTCondition.md#artifactsfolder)
- [config](conditions.TransferNFTCondition.md#config)
- [instanceConfig](conditions.TransferNFTCondition.md#instanceconfig)
- [instantiableConfig](conditions.TransferNFTCondition.md#instantiableconfig)
- [logger](conditions.TransferNFTCondition.md#logger)
- [nevermined](conditions.TransferNFTCondition.md#nevermined)
- [web3](conditions.TransferNFTCondition.md#web3)

### Methods

- [abortByTimeOut](conditions.TransferNFTCondition.md#abortbytimeout)
- [addresses](conditions.TransferNFTCondition.md#addresses)
- [call](conditions.TransferNFTCondition.md#call)
- [checkExists](conditions.TransferNFTCondition.md#checkexists)
- [findSigner](conditions.TransferNFTCondition.md#findsigner)
- [fulfill](conditions.TransferNFTCondition.md#fulfill)
- [fulfillForDelegate](conditions.TransferNFTCondition.md#fulfillfordelegate)
- [fulfillGateway](conditions.TransferNFTCondition.md#fulfillgateway)
- [fulfillInstance](conditions.TransferNFTCondition.md#fulfillinstance)
- [fulfillPlain](conditions.TransferNFTCondition.md#fulfillplain)
- [gatewayMethod](conditions.TransferNFTCondition.md#gatewaymethod)
- [generateId](conditions.TransferNFTCondition.md#generateid)
- [generateIdHash](conditions.TransferNFTCondition.md#generateidhash)
- [generateIdWithSeed](conditions.TransferNFTCondition.md#generateidwithseed)
- [getAddress](conditions.TransferNFTCondition.md#getaddress)
- [getConditionFulfilledEvent](conditions.TransferNFTCondition.md#getconditionfulfilledevent)
- [getContract](conditions.TransferNFTCondition.md#getcontract)
- [getFromAddress](conditions.TransferNFTCondition.md#getfromaddress)
- [getInputsOfMethod](conditions.TransferNFTCondition.md#getinputsofmethod)
- [getSignatureOfMethod](conditions.TransferNFTCondition.md#getsignatureofmethod)
- [hashValues](conditions.TransferNFTCondition.md#hashvalues)
- [hashValuesPlain](conditions.TransferNFTCondition.md#hashvaluesplain)
- [init](conditions.TransferNFTCondition.md#init)
- [instance](conditions.TransferNFTCondition.md#instance)
- [instanceFromDDO](conditions.TransferNFTCondition.md#instancefromddo)
- [params](conditions.TransferNFTCondition.md#params)
- [paramsFromDDO](conditions.TransferNFTCondition.md#paramsfromddo)
- [send](conditions.TransferNFTCondition.md#send)
- [sendFrom](conditions.TransferNFTCondition.md#sendfrom)
- [setInstanceConfig](conditions.TransferNFTCondition.md#setinstanceconfig)
- [addressesStatic](conditions.TransferNFTCondition.md#addressesstatic)
- [findSignerStatic](conditions.TransferNFTCondition.md#findsignerstatic)
- [getInstance](conditions.TransferNFTCondition.md#getinstance)
- [setInstanceConfig](conditions.TransferNFTCondition.md#setinstanceconfig-1)

## Constructors

### constructor

• **new TransferNFTCondition**(`contractName`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractName` | `string` |

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[constructor](conditions.ProviderCondition.md#constructor)

#### Defined in

[src/keeper/contracts/ContractBase.ts:32](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/ContractBase.ts#L32)

## Properties

### contract

• **contract**: `Contract` = `null`

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[contract](conditions.ProviderCondition.md#contract)

#### Defined in

[src/keeper/contracts/ContractBase.ts:24](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/ContractBase.ts#L24)

___

### contractName

• **contractName**: `string`

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[contractName](conditions.ProviderCondition.md#contractname)

#### Defined in

[src/keeper/contracts/ContractBase.ts:23](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/ContractBase.ts#L23)

___

### events

• **events**: [`ContractEvent`](events.ContractEvent.md) \| [`SubgraphEvent`](events.SubgraphEvent.md) = `null`

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[events](conditions.ProviderCondition.md#events)

#### Defined in

[src/keeper/contracts/ContractBase.ts:25](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/ContractBase.ts#L25)

___

### version

• **version**: `string`

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[version](conditions.ProviderCondition.md#version)

#### Defined in

[src/keeper/contracts/ContractBase.ts:26](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/ContractBase.ts#L26)

## Accessors

### address

• `get` **address**(): `string`

#### Returns

`string`

#### Inherited from

ProviderCondition.address

#### Defined in

[src/keeper/contracts/ContractBase.ts:28](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/ContractBase.ts#L28)

___

### artifactsFolder

• `Protected` `get` **artifactsFolder**(): `string`

#### Returns

`string`

#### Inherited from

ProviderCondition.artifactsFolder

#### Defined in

[src/Instantiable.abstract.ts:96](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/Instantiable.abstract.ts#L96)

___

### config

• `Protected` `get` **config**(): [`Config`](Config.md)

#### Returns

[`Config`](Config.md)

#### Inherited from

ProviderCondition.config

#### Defined in

[src/Instantiable.abstract.ts:80](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/Instantiable.abstract.ts#L80)

___

### instanceConfig

• `Protected` `get` **instanceConfig**(): `InstantiableConfig`

#### Returns

`InstantiableConfig`

#### Inherited from

ProviderCondition.instanceConfig

#### Defined in

[src/Instantiable.abstract.ts:100](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/Instantiable.abstract.ts#L100)

___

### instantiableConfig

• `Protected` `get` **instantiableConfig**(): `InstantiableConfig`

#### Returns

`InstantiableConfig`

#### Inherited from

ProviderCondition.instantiableConfig

#### Defined in

[src/Instantiable.abstract.ts:73](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/Instantiable.abstract.ts#L73)

___

### logger

• `Protected` `get` **logger**(): [`Logger`](utils.Logger.md)

#### Returns

[`Logger`](utils.Logger.md)

#### Inherited from

ProviderCondition.logger

#### Defined in

[src/Instantiable.abstract.ts:87](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/Instantiable.abstract.ts#L87)

___

### nevermined

• `Protected` `get` **nevermined**(): [`Nevermined`](Nevermined.md)

#### Returns

[`Nevermined`](Nevermined.md)

#### Inherited from

ProviderCondition.nevermined

#### Defined in

[src/Instantiable.abstract.ts:33](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/Instantiable.abstract.ts#L33)

___

### web3

• `Protected` `get` **web3**(): `JsonRpcProvider`

#### Returns

`JsonRpcProvider`

#### Inherited from

ProviderCondition.web3

#### Defined in

[src/Instantiable.abstract.ts:63](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/Instantiable.abstract.ts#L63)

## Methods

### abortByTimeOut

▸ **abortByTimeOut**(`agreementId`, `from?`, `params?`): `Promise`<`ContractReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreementId` | `string` |
| `from?` | [`Account`](Account.md) |
| `params?` | `TxParameters` |

#### Returns

`Promise`<`ContractReceipt`\>

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[abortByTimeOut](conditions.ProviderCondition.md#abortbytimeout)

#### Defined in

[src/keeper/contracts/conditions/Condition.abstract.ts:97](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/conditions/Condition.abstract.ts#L97)

___

### addresses

▸ **addresses**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[addresses](conditions.ProviderCondition.md#addresses)

#### Defined in

[src/Instantiable.abstract.ts:129](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/Instantiable.abstract.ts#L129)

___

### call

▸ **call**<`T`\>(`name`, `args`, `from?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `args` | `any`[] |
| `from?` | `string` |

#### Returns

`Promise`<`T`\>

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[call](conditions.ProviderCondition.md#call)

#### Defined in

[src/keeper/contracts/ContractBase.ts:244](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/ContractBase.ts#L244)

___

### checkExists

▸ `Protected` **checkExists**(`address`): `Promise`<`boolean`\>

Returns true of contract exists else it throws.

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`boolean`\>

true if the contract exists.

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[checkExists](conditions.ProviderCondition.md#checkexists)

#### Defined in

[src/Instantiable.abstract.ts:44](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/Instantiable.abstract.ts#L44)

___

### findSigner

▸ **findSigner**(`from`): `Promise`<`Signer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |

#### Returns

`Promise`<`Signer`\>

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[findSigner](conditions.ProviderCondition.md#findsigner)

#### Defined in

[src/Instantiable.abstract.ts:105](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/Instantiable.abstract.ts#L105)

___

### fulfill

▸ **fulfill**(`agreementId`, `did`, `nftReceiver`, `nftAmount`, `lockPaymentCondition`, `from?`, `txParams?`): `Promise`<`ContractReceipt`\>

Fulfill the transfer NFT condition.

**`Remarks`**

Only DID owner or DID provider can call this method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `agreementId` | `string` | The agreement identifier. |
| `did` | `string` | The DID of the asset with NFTs. |
| `nftReceiver` | `string` | The address of the account to receive the NFT. |
| `nftAmount` | `default` | amount of NFTs to transfer. |
| `lockPaymentCondition` | `string` | lock payment condition identifier. |
| `from?` | [`Account`](Account.md) |  |
| `txParams?` | `TxParameters` | - |

#### Returns

`Promise`<`ContractReceipt`\>

Condition state.

#### Overrides

[ProviderCondition](conditions.ProviderCondition.md).[fulfill](conditions.ProviderCondition.md#fulfill)

#### Defined in

[src/keeper/contracts/conditions/NFTs/TransferNFTCondition.ts:124](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/conditions/NFTs/TransferNFTCondition.ts#L124)

___

### fulfillForDelegate

▸ **fulfillForDelegate**(`agreementId`, `did`, `nftHolder`, `nftReceiver`, `nftAmount`, `lockPaymentCondition`, `transferAsset?`, `from?`, `params?`): `Promise`<`ContractReceipt`\>

Fulfill the transfer NFT condition.

**`Remarks`**

Only DID owner or DID provider can call this method.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `agreementId` | `string` | `undefined` | The agreement identifier. |
| `did` | `string` | `undefined` | The DID of the asset with NFTs. |
| `nftHolder` | `string` | `undefined` | The address of the account currently holding the NFT. |
| `nftReceiver` | `string` | `undefined` | The address of the account to receive the NFT. |
| `nftAmount` | `default` | `undefined` | The amount of NFTs to transfer. |
| `lockPaymentCondition` | `string` | `undefined` | The lock payment condition identifier. |
| `transferAsset` | `boolean` | `true` | - |
| `from?` | [`Account`](Account.md) | `undefined` |  |
| `params?` | `TxParameters` | `undefined` | - |

#### Returns

`Promise`<`ContractReceipt`\>

Condition state.

#### Defined in

[src/keeper/contracts/conditions/NFTs/TransferNFTCondition.ts:156](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/conditions/NFTs/TransferNFTCondition.ts#L156)

___

### fulfillGateway

▸ **fulfillGateway**(`cond`, `additionalParams`, `from?`, `params?`): `Promise`<`ContractReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cond` | [`ConditionInstance`](../interfaces/conditions.ConditionInstance.md)<`Record`<`string`, `unknown`\>\> |
| `additionalParams` | `Record`<`string`, `unknown`\> |
| `from?` | [`Account`](Account.md) |
| `params?` | `TxParameters` |

#### Returns

`Promise`<`ContractReceipt`\>

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[fulfillGateway](conditions.ProviderCondition.md#fulfillgateway)

#### Defined in

[src/keeper/contracts/conditions/Condition.abstract.ts:204](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/conditions/Condition.abstract.ts#L204)

___

### fulfillInstance

▸ **fulfillInstance**(`cond`, `additionalParams`, `from?`, `params?`, `method?`): `Promise`<`ContractReceipt`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `cond` | [`ConditionInstance`](../interfaces/conditions.ConditionInstance.md)<`Record`<`string`, `unknown`\>\> | `undefined` |
| `additionalParams` | `Record`<`string`, `unknown`\> | `undefined` |
| `from?` | [`Account`](Account.md) | `undefined` |
| `params?` | `TxParameters` | `undefined` |
| `method` | [`ConditionMethod`](../modules/conditions.md#conditionmethod) | `'fulfill'` |

#### Returns

`Promise`<`ContractReceipt`\>

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[fulfillInstance](conditions.ProviderCondition.md#fulfillinstance)

#### Defined in

[src/keeper/contracts/conditions/Condition.abstract.ts:162](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/conditions/Condition.abstract.ts#L162)

___

### fulfillPlain

▸ **fulfillPlain**(`agreementId`, `args`, `from?`, `params?`, `method?`): `Promise`<`ContractReceipt`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `agreementId` | `string` | `undefined` |
| `args` | `any`[] | `undefined` |
| `from?` | [`Account`](Account.md) | `undefined` |
| `params?` | `TxParameters` | `undefined` |
| `method` | [`ConditionMethod`](../modules/conditions.md#conditionmethod) | `'fulfill'` |

#### Returns

`Promise`<`ContractReceipt`\>

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[fulfillPlain](conditions.ProviderCondition.md#fulfillplain)

#### Defined in

[src/keeper/contracts/conditions/Condition.abstract.ts:69](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/conditions/Condition.abstract.ts#L69)

___

### gatewayMethod

▸ **gatewayMethod**(): [`ConditionMethod`](../modules/conditions.md#conditionmethod)

#### Returns

[`ConditionMethod`](../modules/conditions.md#conditionmethod)

#### Overrides

[ProviderCondition](conditions.ProviderCondition.md).[gatewayMethod](conditions.ProviderCondition.md#gatewaymethod)

#### Defined in

[src/keeper/contracts/conditions/NFTs/TransferNFTCondition.ts:183](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/conditions/NFTs/TransferNFTCondition.ts#L183)

___

### generateId

▸ **generateId**(`agreementId`, `valueHash`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreementId` | `string` |
| `valueHash` | `string` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[generateId](conditions.ProviderCondition.md#generateid)

#### Defined in

[src/keeper/contracts/conditions/Condition.abstract.ts:83](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/conditions/Condition.abstract.ts#L83)

___

### generateIdHash

▸ **generateIdHash**(`agreementId`, ...`values`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreementId` | `string` |
| `...values` | `any`[] |

#### Returns

`Promise`<`string`\>

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[generateIdHash](conditions.ProviderCondition.md#generateidhash)

#### Defined in

[src/keeper/contracts/conditions/Condition.abstract.ts:79](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/conditions/Condition.abstract.ts#L79)

___

### generateIdWithSeed

▸ **generateIdWithSeed**(`agreementId`, `valueHash`): `Promise`<[`string`, `string`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreementId` | `string` |
| `valueHash` | `string` |

#### Returns

`Promise`<[`string`, `string`]\>

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[generateIdWithSeed](conditions.ProviderCondition.md#generateidwithseed)

#### Defined in

[src/keeper/contracts/conditions/Condition.abstract.ts:87](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/conditions/Condition.abstract.ts#L87)

___

### getAddress

▸ **getAddress**(): `string`

#### Returns

`string`

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[getAddress](conditions.ProviderCondition.md#getaddress)

#### Defined in

[src/keeper/contracts/ContractBase.ts:41](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/ContractBase.ts#L41)

___

### getConditionFulfilledEvent

▸ **getConditionFulfilledEvent**(`agreementId`): [`EventResult`](../modules/events.md#eventresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreementId` | `string` |

#### Returns

[`EventResult`](../modules/events.md#eventresult)

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[getConditionFulfilledEvent](conditions.ProviderCondition.md#getconditionfulfilledevent)

#### Defined in

[src/keeper/contracts/conditions/Condition.abstract.ts:101](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/conditions/Condition.abstract.ts#L101)

___

### getContract

▸ **getContract**(): `Contract`

#### Returns

`Contract`

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[getContract](conditions.ProviderCondition.md#getcontract)

#### Defined in

[src/keeper/contracts/ContractBase.ts:37](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/ContractBase.ts#L37)

___

### getFromAddress

▸ `Protected` **getFromAddress**(`from?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from?` | `string` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[getFromAddress](conditions.ProviderCondition.md#getfromaddress)

#### Defined in

[src/keeper/contracts/ContractBase.ts:90](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/ContractBase.ts#L90)

___

### getInputsOfMethod

▸ **getInputsOfMethod**(`methodName`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | `string` |

#### Returns

`any`[]

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[getInputsOfMethod](conditions.ProviderCondition.md#getinputsofmethod)

#### Defined in

[src/keeper/contracts/ContractBase.ts:50](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/ContractBase.ts#L50)

___

### getSignatureOfMethod

▸ **getSignatureOfMethod**(`methodName`, `args?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `methodName` | `string` | `undefined` |
| `args` | `any`[] | `[]` |

#### Returns

`string`

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[getSignatureOfMethod](conditions.ProviderCondition.md#getsignatureofmethod)

#### Defined in

[src/keeper/contracts/ContractBase.ts:45](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/ContractBase.ts#L45)

___

### hashValues

▸ **hashValues**(...`args`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`Promise`<`string`\>

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[hashValues](conditions.ProviderCondition.md#hashvalues)

#### Defined in

[src/keeper/contracts/conditions/Condition.abstract.ts:141](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/conditions/Condition.abstract.ts#L141)

___

### hashValuesPlain

▸ **hashValuesPlain**(...`args`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`Promise`<`string`\>

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[hashValuesPlain](conditions.ProviderCondition.md#hashvaluesplain)

#### Defined in

[src/keeper/contracts/conditions/Condition.abstract.ts:145](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/conditions/Condition.abstract.ts#L145)

___

### init

▸ `Protected` **init**(`config`, `optional?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `config` | `InstantiableConfig` | `undefined` |
| `optional` | `boolean` | `false` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[init](conditions.ProviderCondition.md#init)

#### Defined in

[src/keeper/contracts/ContractBase.ts:55](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/ContractBase.ts#L55)

___

### instance

▸ **instance**(`agreementId`, `params`): `Promise`<[`ConditionInstance`](../interfaces/conditions.ConditionInstance.md)<`Record`<`string`, `unknown`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreementId` | `string` |
| `params` | [`ConditionParameters`](../interfaces/conditions.ConditionParameters.md)<`Record`<`string`, `unknown`\>\> |

#### Returns

`Promise`<[`ConditionInstance`](../interfaces/conditions.ConditionInstance.md)<`Record`<`string`, `unknown`\>\>\>

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[instance](conditions.ProviderCondition.md#instance)

#### Defined in

[src/keeper/contracts/conditions/Condition.abstract.ts:184](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/conditions/Condition.abstract.ts#L184)

___

### instanceFromDDO

▸ **instanceFromDDO**(`agreementId`, `ctx`, ...`args`): `Promise`<[`ConditionInstance`](../interfaces/conditions.ConditionInstance.md)<`Record`<`string`, `unknown`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreementId` | `string` |
| `ctx` | `TransferNFTConditionContext` |
| `...args` | [`ConditionInstanceSmall`](../interfaces/conditions.ConditionInstanceSmall.md)[] |

#### Returns

`Promise`<[`ConditionInstance`](../interfaces/conditions.ConditionInstance.md)<`Record`<`string`, `unknown`\>\>\>

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[instanceFromDDO](conditions.ProviderCondition.md#instancefromddo)

#### Defined in

[src/keeper/contracts/conditions/Condition.abstract.ts:154](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/conditions/Condition.abstract.ts#L154)

___

### params

▸ **params**(`did`, `nftHolder`, `nftReceiver`, `nftAmount`, `lockCondition`, `nftContractAddress?`, `willBeTransferred?`): [`ConditionParameters`](../interfaces/conditions.ConditionParameters.md)<`Record`<`string`, `unknown`\>\>

Generates the hash of condition inputs.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `did` | `string` | `undefined` | The DID of the asset with NFTs. |
| `nftHolder` | `string` | `undefined` | The address of the holder of the NFT. |
| `nftReceiver` | `string` | `undefined` | The address of the granted user or the DID provider. |
| `nftAmount` | `default` | `undefined` | Amount of NFTs to transfer. |
| `lockCondition` | `string` | `undefined` | Lock condition identifier. |
| `nftContractAddress?` | `string` | `undefined` | The address of the NFT token to use. |
| `willBeTransferred` | `boolean` | `true` | Indicates if the asset will be transferred or minted |

#### Returns

[`ConditionParameters`](../interfaces/conditions.ConditionParameters.md)<`Record`<`string`, `unknown`\>\>

Hash of all the values

#### Overrides

[ProviderCondition](conditions.ProviderCondition.md).[params](conditions.ProviderCondition.md#params)

#### Defined in

[src/keeper/contracts/conditions/NFTs/TransferNFTCondition.ts:42](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/conditions/NFTs/TransferNFTCondition.ts#L42)

___

### paramsFromDDO

▸ **paramsFromDDO**(`__namedParameters`, `lockCondition`): `Promise`<[`ConditionParameters`](../interfaces/conditions.ConditionParameters.md)<`Record`<`string`, `unknown`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `TransferNFTConditionContext` |
| `lockCondition` | `any` |

#### Returns

`Promise`<[`ConditionParameters`](../interfaces/conditions.ConditionParameters.md)<`Record`<`string`, `unknown`\>\>\>

#### Overrides

[ProviderCondition](conditions.ProviderCondition.md).[paramsFromDDO](conditions.ProviderCondition.md#paramsfromddo)

#### Defined in

[src/keeper/contracts/conditions/NFTs/TransferNFTCondition.ts:90](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/conditions/NFTs/TransferNFTCondition.ts#L90)

___

### send

▸ **send**(`name`, `from`, `args`, `params?`): `Promise`<`ContractReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `from` | `string` |
| `args` | `any`[] |
| `params` | `TxParameters` |

#### Returns

`Promise`<`ContractReceipt`\>

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[send](conditions.ProviderCondition.md#send)

#### Defined in

[src/keeper/contracts/ContractBase.ts:117](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/ContractBase.ts#L117)

___

### sendFrom

▸ **sendFrom**(`name`, `args`, `from?`, `value?`): `Promise`<`ContractReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `args` | `any`[] |
| `from?` | [`Account`](Account.md) |
| `value?` | `TxParameters` |

#### Returns

`Promise`<`ContractReceipt`\>

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[sendFrom](conditions.ProviderCondition.md#sendfrom)

#### Defined in

[src/keeper/contracts/ContractBase.ts:97](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/ContractBase.ts#L97)

___

### setInstanceConfig

▸ `Protected` **setInstanceConfig**(`config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `InstantiableConfig` |

#### Returns

`void`

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[setInstanceConfig](conditions.ProviderCondition.md#setinstanceconfig)

#### Defined in

[src/Instantiable.abstract.ts:171](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/Instantiable.abstract.ts#L171)

___

### addressesStatic

▸ `Static` **addressesStatic**(`config`, `web3`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`Config`](Config.md) |
| `web3` | `JsonRpcProvider` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[addressesStatic](conditions.ProviderCondition.md#addressesstatic)

#### Defined in

[src/Instantiable.abstract.ts:142](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/Instantiable.abstract.ts#L142)

___

### findSignerStatic

▸ `Static` **findSignerStatic**(`config`, `web3`, `from`): `Promise`<`Signer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`Config`](Config.md) |
| `web3` | `JsonRpcProvider` |
| `from` | `string` |

#### Returns

`Promise`<`Signer`\>

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[findSignerStatic](conditions.ProviderCondition.md#findsignerstatic)

#### Defined in

[src/Instantiable.abstract.ts:115](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/Instantiable.abstract.ts#L115)

___

### getInstance

▸ `Static` **getInstance**(`config`): `Promise`<[`TransferNFTCondition`](conditions.TransferNFTCondition.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `InstantiableConfig` |

#### Returns

`Promise`<[`TransferNFTCondition`](conditions.TransferNFTCondition.md)\>

#### Overrides

[ProviderCondition](conditions.ProviderCondition.md).[getInstance](conditions.ProviderCondition.md#getinstance)

#### Defined in

[src/keeper/contracts/conditions/NFTs/TransferNFTCondition.ts:24](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/keeper/contracts/conditions/NFTs/TransferNFTCondition.ts#L24)

___

### setInstanceConfig

▸ `Static` `Protected` **setInstanceConfig**<`T`\>(`instance`, `instantiableConfig`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Instantiable`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | `T` |
| `instantiableConfig` | `InstantiableConfig` |

#### Returns

`void`

#### Inherited from

[ProviderCondition](conditions.ProviderCondition.md).[setInstanceConfig](conditions.ProviderCondition.md#setinstanceconfig-1)

#### Defined in

[src/Instantiable.abstract.ts:162](https://github.com/nevermined-io/sdk-js/blob/7d7cf7d/src/Instantiable.abstract.ts#L162)
