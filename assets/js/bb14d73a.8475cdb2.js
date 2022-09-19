"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>v});var i=n(67294),a=n(86010),r=n(53438),o=n(39960),s=n(13919),c=n(95999);const l="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function p(e){let{href:t,children:n}=e;return i.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},n)}function u(e){let{href:t,icon:n,title:r,description:o}=e;return i.createElement(p,{href:t},i.createElement("h2",{className:(0,a.Z)("text--truncate",d),title:r},n," ",r),o&&i.createElement("p",{className:(0,a.Z)("text--truncate",m),title:o},o))}function h(e){let{item:t}=e;const n=(0,r.Wl)(t);return n?i.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,r.xz)(t.docId??void 0);return i.createElement(u,{href:t.href,icon:n,title:t.label,description:null==a?void 0:a.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(f,{item:t});case"category":return i.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,r.jA)();return i.createElement(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return i.createElement(y,e);const o=(0,r.MN)(t);return i.createElement("section",{className:(0,a.Z)("row",n)},o.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(g,{item:e})))))}},42787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=n(87462),a=(n(67294),n(3905)),r=n(52991);const o={sidebar_position:1,description:"Deep dive in Nevermined technical solution",title:"Overview"},s="Intro to Nevermined Architecture",c={unversionedId:"architecture/index",id:"architecture/index",title:"Overview",description:"Deep dive in Nevermined technical solution",source:"@site/docs/architecture/index.mdx",sourceDirName:"architecture",slug:"/architecture/",permalink:"/docs/architecture/",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/architecture/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Deep dive in Nevermined technical solution",title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Network Fees",permalink:"/docs/environments/network-fees"},next:{title:"What can I do with my assets?",permalink:"/docs/architecture/what-can-i-do"}},l={},d=[{value:"Capabilities",id:"capabilities",level:2},{value:"Digital Ecosystem",id:"digital-ecosystem",level:2},{value:"Everything is about assets",id:"everything-is-about-assets",level:3}],m={toc:d};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"intro-to-nevermined-architecture"},"Intro to Nevermined Architecture"),(0,a.kt)("p",null,"Nevermined is a digital ecosystems builder solution that provides the capabilities of\ncreating bespoke networks where different entities can interact around digital assets.\nThis interaction between parties allow data sharing, tokenization and\nmonetization of their digital assets in an efficient and secure way between\nuntrusted parties."),(0,a.kt)("p",null,"Nevermined is the product powered by ",(0,a.kt)("a",{parentName:"p",href:"https://nevermined.io"},"Nevermined AG"),"."),(0,a.kt)("h2",{id:"capabilities"},"Capabilities"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Assets Tokenization via NFTs")," \u2014 content creators can tokenize their digital\nassets and make them available to their community of users allowing selling them,\nexclusive access to NFT holders, secondary market and royalties enforcement"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Data Sharing")," \u2014 enabling the sharing and access of digital assets between\nuntrusted parties in the data ecosystem"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Data In-Situ Computation"),"  \u2014 allowing the execution of models and algorithms\nwithout moving the data"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Marketplace")," \u2014 the user interfaces gluing all together and facilitating user\ninteractions with the rest of the digital ecosystem"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Data Monetization and Incentives")," \u2014 facilitating the monetization of existing\norganization assets and the different mechanisms to incentivize the users of a\ndigital ecosystem"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Data Governance")," \u2014 making possible to build the agreements that allow to\nhandle an ecosystem with multiple and independent participants")),(0,a.kt)("h2",{id:"digital-ecosystem"},"Digital Ecosystem"),(0,a.kt)("p",null,"A digital ecosystem is an environment where different users can interact around\ndigital assets. So Nevermined is built around these digital assets and how they can\nbe used between different parties."),(0,a.kt)("h3",{id:"everything-is-about-assets"},"Everything is about assets"),(0,a.kt)("p",null,"An asset in Nevermined is the representation of a phisical or digital thing. It is\nregistered by the origital creator or a provider. As an abstract concept, an asset\ncan represent a piece of digital art, a dataset, an algorithm or piece of software,\na manufactured good or any other kind of physical or digital entity."),(0,a.kt)("p",null,"An asset in Nevermined is composed by 3 things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The unique registry of the asset (on-chain) including the Decentralized Identifier\nof the asset (aka ",(0,a.kt)("strong",{parentName:"li"},"DID"),") and the reference to the asset metadata (aka ",(0,a.kt)("strong",{parentName:"li"},"DDO"),")."),(0,a.kt)("li",{parentName:"ul"},"The metadata describing the asset. This includes things like a description of the\nasset, author, creation date, etc. The metadata of the asset can be stored anywhere\n(off-chain in a database or on-chain in IPFS, Filecoin, etc)."),(0,a.kt)("li",{parentName:"ul"},"All the files attached to the asset. They can be of any type, format, size, encrypted\nor not, etc. The files can be stored in the cloud, on-premise, public network, etc.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Asset composition",src:n(8827).Z,width:"1583",height:"765"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Nevermined don't store the files attached to an asset. So if you register an asset you\ncan keep all of them wherever you want (in a private or public storage).\nIn Nevermined we just keep the ",(0,a.kt)("strong",{parentName:"p"},"DID")," and some ",(0,a.kt)("strong",{parentName:"p"},"metadata")," to facilitate the discovery\nof the asset.")),(0,a.kt)("p",null,"The main reason of an asset in Nevermined is to ",(0,a.kt)("strong",{parentName:"p"},"offer certain services")," from the\npublishers of that asset to the rest of the world. These services are flexible and\ntypically can be understood as something like the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"As a owner of this asset, I want to allow others to download the contents associated\nto it if they pay 1 ETH.\n")),(0,a.kt)("p",null,"The above example is a simple service offered by an asset owner published on Nevermined\nwhere it allows data sharing to anyone paying ",(0,a.kt)("inlineCode",{parentName:"p"},"1 ETH"),". Nevermined allows the registration\nof assets with attached services like that one, and orchestrates all the trading to\nmediate in the delivery of that service in a decentralized and secure way. "),(0,a.kt)("p",null,"Nevermined implements this and some other services around digital assets, allowing to\nbuild use cases where content creators and/or publishers can create robust interactions\nwithout having a central entity keeping the assets of the users."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This last part is important. Nevermined don't store your private files, your credentials\nor own any of the assets you register in any of the networks.")),(0,a.kt)(r.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0},8827:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/asset_composition-d8649aee59d9d95e822e90e3088df49f.png"}}]);