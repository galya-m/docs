"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[1938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1342:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1,title:"Getting started",description:"Nevermined Catalog Core"},i="Getting started",s={unversionedId:"catalog/core/README",id:"catalog/core/README",title:"Getting started",description:"Nevermined Catalog Core",source:"@site/docs/catalog/core/README.md",sourceDirName:"catalog/core",slug:"/catalog/core/",permalink:"/docs/catalog/core/",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/catalog/core/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Getting started",description:"Nevermined Catalog Core"},sidebar:"tutorialSidebar",previous:{title:"Demo & Examples",permalink:"/docs/catalog/example"},next:{title:"@nevermined-io/catalog-core",permalink:"/docs/catalog/core/API/modules"}},l={},c=[{value:"Catalog provider",id:"catalog-provider",level:3},{value:"Services",id:"services",level:3},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"How to install ?",id:"how-to-install-",level:2},{value:"How to integrate ?",id:"how-to-integrate-",level:2},{value:"How to use ?",id:"how-to-use-",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Catalog core")," includes all the Nevermined functionalities splitted in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Catalog provider")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Services"),"."),(0,o.kt)("h3",{id:"catalog-provider"},"Catalog provider"),(0,o.kt)("p",null,"Catalog provider loads the ",(0,o.kt)("strong",{parentName:"p"},"Nevermined sdk")," in the context of a ",(0,o.kt)("strong",{parentName:"p"},"React application")," and provides some parametes\nand objects to handle it:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"account - contains all the functionalities to handle authentications and collections belonged to an account"),(0,o.kt)("li",{parentName:"ul"},"assets - contains all the functionalities to handle assets for example get, mint, transfer, order or download asset"),(0,o.kt)("li",{parentName:"ul"},"subscribe - contains all the functionalities to handle events"),(0,o.kt)("li",{parentName:"ul"},"subscription - contains all the functionalities to handle asset subscritions by payment")),(0,o.kt)("h3",{id:"services"},"Services"),(0,o.kt)("p",null,"The Services includes custom react hooks and providers to cover specific scenarios avoiding to the developer thinking in the logic to implement it and make possible for them focus just in the view in a react application. Currently the services is splitted in 4 groups:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"AccountService - custom hooks and provider to handle user accounts and profiles"),(0,o.kt)("li",{parentName:"ul"},"AssetService - custom hooks to handle assets"),(0,o.kt)("li",{parentName:"ul"},"EventService - custom hooks to operate with events"),(0,o.kt)("li",{parentName:"ul"},"SubscribeService - custom hooks to handle event listeners")),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("p",null,"The Nevermined Components Catalog is a package built with React and Typescript.\nIt requires ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node JS")," v14 or higher. You can find online instructions about ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.dev/learn/how-to-install-nodejs"},"How to install Node JS"),"."),(0,o.kt)("h2",{id:"how-to-install-"},"How to install ?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @nevermined-io/catalog-core\nor\nnpm install --save @nevermined-io/catalog-core\n")),(0,o.kt)("h2",{id:"how-to-integrate-"},"How to integrate ?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Catalog, AssetService } from '@nevermined-io/components-catalog';\nimport App from 'app';\nimport { ethers } from 'ethers'\nimport { Config } from '@nevermined-io/nevermined-sdk-js';\n\nconst appConfig: Config = {\n  web3Provider: typeof window !== 'undefined' ? window.ethereum : new ethers.providers.JsonRpcProvider(nodeUri),\n  nodeUri,\n  gatewayUri,\n  faucetUri,\n  verbose,\n  gatewayAddress,\n  secretStoreUri,\n  graphHttpUri,\n  marketplaceAuthToken,\n  marketplaceUri,\n  artifactsFolder\n};\n\nReactDOM.render(\n  <div>\n    <Catalog.NeverminedProvider config={appConfig}>\n      <App />\n    </Catalog.NeverminedProvider>\n  </div>,\n  document.getElementById('root') as HTMLElement\n);\n")),(0,o.kt)("h2",{id:"how-to-use-"},"How to use ?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const SingleAsset = () => {\n  const did = 'did:nv:f8a00...';\n  const assetData: AssetState = AssetService.useAsset(did);\n\n  return (\n    <>\n      <div>Asset {did}:</div>\n      <div>{JSON.stringify(assetData.ddo)}</div>\n    </>\n  );\n};\n\n")),(0,o.kt)("p",null,"For a full ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/tree/main/example"},"example"),"."))}d.isMDXComponent=!0}}]);