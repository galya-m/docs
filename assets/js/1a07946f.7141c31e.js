"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9186],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,h=d["".concat(c,".").concat(u)]||d[u]||p[u]||i;return n?r.createElement(h,a(a({ref:t},m),{},{components:n})):r.createElement(h,a({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(67294),o=n(86010),i=n(53438),a=n(39960),s=n(13919),c=n(95999);const l="cardContainer_fWXF",m="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return r.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",l)},n)}function u(e){let{href:t,icon:n,title:i,description:a}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",m),title:i},n," ",i),a&&r.createElement("p",{className:(0,o.Z)("text--truncate",p),title:a},a))}function h(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:n,title:t.label,description:null==o?void 0:o.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return r.createElement(k,e);const a=(0,i.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(v,{item:e})))))}},396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var r=n(87462),o=(n(67294),n(3905)),i=n(52991);const a={sidebar_position:1,description:"Nevermined Environments"},s="Nevermined Public Environments",c={unversionedId:"environments/index",id:"environments/index",title:"Nevermined Public Environments",description:"Nevermined Environments",source:"@site/docs/environments/index.mdx",sourceDirName:"environments",slug:"/environments/",permalink:"/docs/environments/",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/environments/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Nevermined Environments"},sidebar:"tutorialSidebar",previous:{title:"Getting tokens from faucets in `testnet` environments",permalink:"/docs/tutorials/faucets"},next:{title:"Production environments",permalink:"/docs/environments/nvm-prod-envs"}},l={},m=[{value:"Blockchain networks supported",id:"blockchain-networks-supported",level:2},{value:"Production and Testing environments",id:"production-and-testing-environments",level:2},{value:"Versions",id:"versions",level:2},{value:"About the tags",id:"about-the-tags",level:2}],p={toc:m};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nevermined-public-environments"},"Nevermined Public Environments"),(0,o.kt)("p",null,"Nevermined is available in different networks/environments allowing users to make use of this\ninfrastructure without the complexity of deploying Smart Contracts or other components of\nthe stack."),(0,o.kt)("p",null,"The different existing networks have different characteristics related to the underlying blockchain network being used and if they are a production or test environment."),(0,o.kt)("h2",{id:"blockchain-networks-supported"},"Blockchain networks supported"),(0,o.kt)("p",null,"Nevermined Smart Contracts are EVM compatible so they can be deployed in any EVM compatible blockchain network. Currently we maintain deployments on: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ethereum")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Polygon")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Arbitrum"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We are planning to augment the list of networks supported. If you need to use Nevermined in any other network, please let us know ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/GZju2qScKq"},"through Discord"),".")),(0,o.kt)("h2",{id:"production-and-testing-environments"},"Production and Testing environments"),(0,o.kt)("p",null,"For each blockchain network we support actively we have Production and Testing deployments. This can help you to go through a typical development/testing process and further release into production independently of the blockchain network you use."),(0,o.kt)("h2",{id:"versions"},"Versions"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic versioning")," for our Smart Contracts interfaces and Apis. And we deploy and mantain multiple versions of the contracts and apis in these environments allowing to integrate with different versions of the stack."),(0,o.kt)("p",null,"Generally we ",(0,o.kt)("strong",{parentName:"p"},"upgrade")," Smart Contracts when we implement ",(0,o.kt)("strong",{parentName:"p"},"patches")," and ",(0,o.kt)("strong",{parentName:"p"},"minor")," changes and deploy a new version of the Smart Contracts when we implement ",(0,o.kt)("strong",{parentName:"p"},"mayor")," changes."),(0,o.kt)("p",null,"This means for the same network and environment you could have available the Smart Contracts in the version ",(0,o.kt)("inlineCode",{parentName:"p"},"v1.3.5")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"v2.0.5"),", allowing you to integrate one or the other depending on your development lifecycle."),(0,o.kt)("h2",{id:"about-the-tags"},"About the tags"),(0,o.kt)("p",null,"Tags are different contract deployments for the same network&version. Each tag is independant from the others. Generically we use two different tags:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"public"),": This tag/contracts instane is meant to be used for new integrations, public integrations, etc... It expected to have the latest versions and/or configurations. This is a ",(0,o.kt)("em",{parentName:"p"},"shared")," environment. ",(0,o.kt)("em",{parentName:"p"},"Probably you need to use these environments."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"common"),': This tag/contracts instane is used by more "stable" applications. Each application has its own nevermined stack (',(0,o.kt)("inlineCode",{parentName:"p"},"gateway")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"markeplace-api"),")."))),(0,o.kt)(i.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);