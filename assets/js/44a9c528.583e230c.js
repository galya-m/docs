"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[8368],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6589:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),o=["components"],c={},l="Interface: ChainConfig",p={unversionedId:"architecture/components/catalog/providers/API/interfaces/MetaMask.ChainConfig",id:"architecture/components/catalog/providers/API/interfaces/MetaMask.ChainConfig",title:"Interface: ChainConfig",description:"MetaMask.ChainConfig",source:"@site/docs/architecture/components/catalog/providers/API/interfaces/MetaMask.ChainConfig.md",sourceDirName:"architecture/components/catalog/providers/API/interfaces",slug:"/architecture/components/catalog/providers/API/interfaces/MetaMask.ChainConfig",permalink:"/docs/architecture/components/catalog/providers/API/interfaces/MetaMask.ChainConfig",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/architecture/components/catalog/providers/API/interfaces/MetaMask.ChainConfig.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"API Ref.",permalink:"/docs/category/api-ref-1"},next:{title:"Interface: WalletProviderState",permalink:"/docs/architecture/components/catalog/providers/API/interfaces/MetaMask.WalletProviderState"}},s={},d=[{value:"Indexable",id:"indexable",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"returnConfig",id:"returnconfig",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4}],m={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-chainconfig"},"Interface: ChainConfig"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/providers/API/modules/MetaMask"},"MetaMask"),".ChainConfig"),(0,i.kt)("p",null,"Config with all the networks which can be connect by the dapp"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("p",null,"Config example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { zeroX } from '@nevermined-io/catalog-providers';\nimport { acceptedChainId } from 'config';\n\nconst acceptedChainIdHex = zeroX((+acceptedChainId).toString(16));\nconst spreeChainId = zeroX((8996).toString(16));\nconst polygonLocalnetChainId = zeroX((8997).toString(16));\nexport const mumbaiChainId = zeroX((80001).toString(16));\nconst mainnetChainId = zeroX((137).toString(16));\n\nconst ChainConfig = {\n  development: {\n    chainId: acceptedChainIdHex === spreeChainId ? spreeChainId : polygonLocalnetChainId,\n    chainName: 'Localhost development',\n    nativeCurrency: {\n      name: 'Ethereum',\n      symbol: 'ETH',\n      decimals: 18\n    },\n    rpcUrls: ['http://localhost:8545'],\n    blockExplorerUrls: [''],\n    iconUrls: ['https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png']\n  },\n  mumbai: {\n    chainId: mumbaiChainId,\n    chainName: 'Polygon Testnet Mumbai',\n    nativeCurrency: {\n      name: 'Matic',\n      symbol: 'MATIC',\n      decimals: 18\n    },\n    rpcUrls: [\n      'https://matic-mumbai.chainstacklabs.com',\n      'https://rpc-endpoints.superfluid.dev/mumbai'\n    ],\n    blockExplorerUrls: ['https://mumbai.polygonscan.com/'],\n    iconUrls: ['https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png']\n  },\n  mainnet: {\n    chainId: mainnetChainId,\n    chainName: 'Polygon Mainnet',\n    nativeCurrency: {\n      name: 'Matic',\n      symbol: 'MATIC',\n      decimals: 18\n    },\n    rpcUrls: ['https://polygon-rpc.com'],\n    blockExplorerUrls: ['https://polygonscan.com/'],\n    iconUrls: ['https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png']\n  },\n  returnConfig: (chainIdHex: string) => {\n    if (chainIdHex === spreeChainId || chainIdHex === polygonLocalnetChainId) {\n      return ChainConfig.development;\n    }\n    if (chainIdHex === mumbaiChainId) {\n      return ChainConfig.mumbai;\n    }\n    if (chainIdHex === mainnetChainId) {\n      return ChainConfig.mainnet;\n    }\n    return ChainConfig.development;\n  }\n};\n")),(0,i.kt)("h2",{id:"indexable"},"Indexable"),(0,i.kt)("p",null,"\u25aa ","[network: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"]",": ",(0,i.kt)("inlineCode",{parentName:"p"},"ChainNetwork")," ","|"," (",(0,i.kt)("inlineCode",{parentName:"p"},"chainIdHex"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"ChainNetwork")),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/providers/API/interfaces/MetaMask.ChainConfig#returnconfig"},"returnConfig"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"returnconfig"},"returnConfig"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"returnConfig"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"chainIdHex"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"ChainNetwork")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"chainIdHex"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"ChainNetwork")),(0,i.kt)("p",null,"Return the network confing by giving chain Id in Hexadecimal"),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"chainIdHex")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ChainNetwork")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/658432b/providers/src/metamask.tsx#L125"},"metamask.tsx:125")))}u.isMDXComponent=!0}}]);