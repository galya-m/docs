import React, { useEffect, useState } from 'react';
import { AssetsModule, Catalog, DDO, AuthToken } from '@nevermined-io/catalog-core';
import { UiForm, UiFormInput, UiText, UiLayout, UiFormSelect, UiButton, BEM } from '@nevermined-io/styles';
import { ethers } from 'ethers';
import styles from './styles.module.scss';

const b = BEM('query-assets', styles);

interface SearchAssets {
  name?: boolean;
  additionalInformation?: boolean;
  priceRange?: boolean;
  filters?: boolean;
}

const QuerySearchByName = ({ assetsModule }: { assetsModule: AssetsModule}) => {
  const [ ddos, setDdos ] = useState<DDO[]>([]);

  const onSearchByName = async(value: string) => {
    if(value.length < 3) {
      setDdos([]);
      return;
    }

    const response = await assetsModule.query({
      query: {
        "query_string": {
          query: `*${value}*`,
          fields: ["service.attributes.main.name"]
        }
      },
    });

    setDdos(response.results || []);
  };

  return (
    <>
      <UiForm>
        <UiFormInput 
          label='Search by name: (try with Aave)'
          onChange={(e) => onSearchByName(e.target.value)}/>
      </UiForm>

      {ddos.slice(0,3).map(ddo =>
        <div key={ddo.id} className={b('item')}>
          <UiLayout>
            <UiLayout>
              <UiText>Asset name: </UiText>
              <UiText>{ddo.service[0].attributes.main.name }</UiText>
            </UiLayout>
            <UiLayout>
              <UiText>Asset id: </UiText>
              <UiText>{ddo.id}</UiText>
            </UiLayout>
            <UiLayout>
              <UiText>Creator id: </UiText>
              <UiText>{ ddo.proof.creator }</UiText>
            </UiLayout>
          </UiLayout>
        </div>
      )}
    </>
  )
}

const QuerySearchByAdditionalInfo = ({ assetsModule }: { assetsModule: AssetsModule}) => {
  const [ ddos, setDdos ] = useState<DDO[]>([]);
  const [category, setCategory] = useState('');

  const options = [{
    label: 'Categories:',
    value: ''
  }, {
    label: 'Lending',
    value: 'ProtocolType:Lending',
  }, {
    label: 'Ethereum',
    value: 'Blockchain:Ethereum',
  }, {
    label: 'Liquidations',
    value: 'EventType:Liquidations',
  }];

  const onSearchByCategory = async(value: string) => {
    const categoryChoosen = options.find(o => o.label === value)?.value;
    setCategory(value);

    if(!categoryChoosen) {
      setDdos([]);
      return;
    }

    const response = await assetsModule.query({
      query: {
        match: {
          "service.attributes.additionalInformation.categories": categoryChoosen
        }
      },
    });

    setDdos(response.results || []);
  };

  return (
    <>
      <UiForm>
        <UiFormSelect
          label='Search by category: (try with Aave)'
          value={category}
          options={options.map(o => o.label)}
          onChange={(e) => onSearchByCategory(e as string)}/>
      </UiForm>

      {ddos.slice(0,3).map(ddo =>
        <div key={ddo.id} className={b('item')}>
          <UiLayout>
            <UiLayout>
              <UiText>Asset name: </UiText>
              <UiText>{ddo.service[0].attributes.main.name }</UiText>
            </UiLayout>
            <UiLayout>
              <UiText>Asset id: </UiText>
              <UiText>{ddo.id}</UiText>
            </UiLayout>
            <UiLayout>
              <UiText>Creator id: </UiText>
              <UiText>{ ddo.proof.creator }</UiText>
            </UiLayout>
          </UiLayout>
        </div>
      )}
    </>
  )
};

const QuerySearchByPriceRange = ({ assetsModule }: { assetsModule: AssetsModule}) => {
  const [ ddos, setDdos ] = useState<DDO[]>([]);
  const [ gte, setGte ] = useState('0');
  const [ lte, setLte ] = useState('100');
  const [ gteRequired, setGteRequired ] = useState('');
  const [ lteRequired, setLteRequired ] = useState('');

  useEffect(() => {
    if(gteRequired || lteRequired) {
      setTimeout(() => {
        setGteRequired('');
        setLteRequired('');
      }, 3000);
    }
  }, [gteRequired, lteRequired]);

  const onSearchByPriceRange = async() => {
    if(!gte || !lte) {
      setGteRequired(!gte ? 'gte input is required' : '');
      setLteRequired(!lte ? 'lte input is required' : '');
      return;
    }

    if(gte >= lte && gte) {
      setGteRequired('gte input cannot be greater than lte input');
      return;
    }

    const response = await assetsModule.query({
      query: {
        range: {
          "service.attributes.main.price": {
            gte,
            lte,
          }
        }
      },
    });

    setDdos(response.results || []);
  };

  return (
    <>
      <UiForm>
        <UiText>Set the price range:</UiText>
        <UiFormInput 
          label='gte: '
          value={gte}
          onChange={(e) => setGte(e.target.value)}
          inputError={gteRequired}/>
        <UiFormInput 
          label='lte: '
          value={lte}
          onChange={(e) => setLte(e.target.value)}
          inputError={lteRequired}/>
        
        <UiButton title='Search' type='secondary' onClick={onSearchByPriceRange}>Search</UiButton>
      </UiForm>

      {ddos.slice(0,3).map(ddo =>
        <div key={ddo.id} className={b('item')}>
          <UiLayout>
            <UiLayout>
              <UiText>Asset name: </UiText>
              <UiText>{ddo.service[0].attributes.main.name }</UiText>
            </UiLayout>
            <UiLayout>
              <UiText>Asset id: </UiText>
              <UiText>{ddo.id}</UiText>
            </UiLayout>
            <UiLayout>
              <UiText>Creator id: </UiText>
              <UiText>{ ddo.proof.creator }</UiText>
            </UiLayout>
          </UiLayout>
        </div>
      )}
    </>
  )
}

const QuerySearchByFilters = ({ assetsModule }: { assetsModule: AssetsModule}) => {
  const [ ddos, setDdos ] = useState<DDO[]>([]);
  const [ name, setName ] = useState('');
  const [ short, setShort] = useState<'asc'|'desc'>('desc');
  const [ page, setPage ] = useState(1);
  const [ size, setSize ] = useState(100);
  const [ nameRequired, setNameRequired ] = useState('');
  const [ pageRequired, setPageRequired ] = useState('');
  const [ sizeRequired, setSizeRequired ] = useState('');

  useEffect(() => {
    if(nameRequired || pageRequired || sizeRequired) {
      setTimeout(() => {
        setNameRequired('');
        setPageRequired('');
        setSizeRequired('');
      }, 3000);
    }
  }, [nameRequired, pageRequired, sizeRequired]);

  const setMessage = (name: string, value: number) => {
    return value <= 0 ? `${name} input needs to be greater than 0` : `${name} input is required`
  };

  const onSearchByFilters = async() => {
    if(!page || !size || !name) {
      setNameRequired(!name ? 'name input is required' : '');
      setPageRequired(!page || page <= 0 ? setMessage('page', page): '');
      setSizeRequired(!size || size <= 0 ? setMessage('size', size): '');

      return;
    }

    const response = await assetsModule.query({
      query: {
        "query_string": {
          query: `*${name}*`,
          fields: ["service.attributes.main.name"]
        },
      },
      offset: size,
      page,
      sort: {
        created: short
      }
    });

    setDdos(response.results || []);
  };

  const getValue = (value: string) => {
    if(value) {
      return parseInt(value, 10);
    }

    return value as undefined;
  }; 

  return (
    <>
      <UiForm>
        <UiFormInput 
          label='Search by name: (try with Aave)'
          inputError={nameRequired}
          onChange={(e) => setName(e.target.value)}/>
        <UiFormInput 
          label='Page:'
          type='number'
          value={page}
          inputError={pageRequired}
          onChange={(e) => setPage(getValue(e.target.value))}/>
        <UiFormInput 
          label='Page size:'
          value={size}
          type='number'
          inputError={sizeRequired}
          onChange={(e) => setSize(getValue(e.target.value))}/>
        <UiFormSelect
          label='Short by publish date:'
          value={short}
          options={['asc', 'desc']}
          onChange={(e) => setShort(e)}
        />
        <UiButton title='Search' type='secondary' onClick={onSearchByFilters}>Search</UiButton>
      </UiForm>

      {ddos.map(ddo =>
        <div key={ddo.id} className={b('item')}>
          <UiLayout>
            <UiLayout>
              <UiText>Asset name: </UiText>
              <UiText>{ddo.service[0].attributes.main.name }</UiText>
            </UiLayout>
            <UiLayout>
              <UiText>Asset id: </UiText>
              <UiText>{ddo.id}</UiText>
            </UiLayout>
            <UiLayout>
              <UiText>Creator id: </UiText>
              <UiText>{ ddo.proof.creator }</UiText>
            </UiLayout>
          </UiLayout>
        </div>
      )}
    </>
  )
};

const QuerySearch = (searchAssets: SearchAssets) => {
  const { assets, isLoadingSDK } = Catalog.useNevermined();

  return (
    <div className={b('container')}>
      {!isLoadingSDK && (
        <>
          {searchAssets.name && <QuerySearchByName assetsModule={assets}/>}
          {searchAssets.additionalInformation && <QuerySearchByAdditionalInfo assetsModule={assets}/>}
          {searchAssets.priceRange && <QuerySearchByPriceRange assetsModule={assets}/>}
          {searchAssets.filters && <QuerySearchByFilters assetsModule={assets}/>}
        </>
      )}
    </div>
  )
}

const QueryAssets = (searchAssets: SearchAssets ) => {
  const appConfig = {
    web3Provider: typeof window !== 'undefined' ? (window as any).ethereum : new ethers.providers.JsonRpcProvider(),
    gatewayUri: 'https://defi.v2.gateway.mumbai.nevermined.rocks',
    faucetUri: 'https://faucet.rinkeby.nevermined.rocks',
    verbose: true,
    gatewayAddress: "0x5838B5512cF9f12FE9f2beccB20eb47211F9B0bc",
    graphHttpUri: 'https://api.thegraph.com/subgraphs/name/nevermined-io/common',
    marketplaceAuthToken: AuthToken.fetchMarketplaceApiTokenFromLocalStorage().token,
    marketplaceUri: 'https://defi.v2.marketplace-api.mumbai.nevermined.rocks',
    artifactsFolder: `${location.protocol}//${location.host}/contracts`
  };

  return(
    <Catalog.NeverminedProvider config={appConfig} verbose={true}>
      <QuerySearch 
        name={searchAssets.name}
        additionalInformation={searchAssets.additionalInformation}  
        priceRange={searchAssets.priceRange}
        filters={searchAssets.filters}
      />
    </Catalog.NeverminedProvider>
  )
};

export default QueryAssets;