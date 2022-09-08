"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[7085],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(g,s(s({ref:t},d),{},{components:n})):r.createElement(g,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1028:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),s=["components"],o={sidebar_position:7,description:"Nevermined allows building Marketplaces where untrusted parties can trade"},l="Digital Assets Marketplaces",c={unversionedId:"getting-started/marketplace",id:"getting-started/marketplace",title:"Digital Assets Marketplaces",description:"Nevermined allows building Marketplaces where untrusted parties can trade",source:"@site/docs/getting-started/marketplace.md",sourceDirName:"getting-started",slug:"/getting-started/marketplace",permalink:"/docs/getting-started/marketplace",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/getting-started/marketplace.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Nevermined allows building Marketplaces where untrusted parties can trade"},sidebar:"tutorialSidebar",previous:{title:"Remote Computation",permalink:"/docs/getting-started/remote-computation"},next:{title:"Nevermined SDK",permalink:"/docs/category/nevermined-sdk"}},d={},p=[],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"digital-assets-marketplaces"},"Digital Assets Marketplaces"),(0,i.kt)("p",null,"Nevermined\u2019s Marketplace framework facilitates the usage of data ecosystems via a bespoke data catalog / marketplace that allows integration with existing tools within the organization. This gives organizations a direct venue for the sale and distribution of their NFTs as well as access to a global community of artists and fans."),(0,i.kt)("p",null,"This Generic Marketplace solution supports the registration, search and discovery of assets across multiple organizations. Our NFT API lets users instantly find, verify, and display any NFT, across all major blockchains."),(0,i.kt)("p",null,"Organizations can access the blockchain with Nevermined\u2019s continually expanding Enhanced API suite, and web3 developer tools. This includes querying NFTs by the user, tracing transactions, getting real-time notifications in your dApp, debugging smart contracts faster, and doing more with our supported endpoints."),(0,i.kt)("p",null,"The NFT API supports all NFTs made with the ERC721 and ERC1155 standards. Using the Nevermined NFT API allows companies to both fetch and display NFTs for their users, making it easy to build all kinds of NFT collections."),(0,i.kt)("p",null,"Grabbing NFT metadata usually requires developers to read and parse individual smart contracts, then sort through a sea of irregular data. Nevermined API standardizes the data, making it easy to query across different projects."),(0,i.kt)("p",null,"The NFT API allows users to quickly get all the information they need to know about NFTs from the blockchain. Rather than searching, indexing, and storing data themselves - users can now make one request to fetch specific NFT information for both ERC-721 and ERC-1155 tokens, like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All NFTs owned by an address"),(0,i.kt)("li",{parentName:"ul"},"Metadata and attributes for a specific NFT token")),(0,i.kt)("p",null,"Getting historical transactions is currently an extremely challenging and inefficient task, requiring users to scan the entire blockchain and index everything to search for transactions associated with the desired address. Nevermined provides a set of functions for tracking address activity, mined transactions, dropped transactions, and prices on multiple blockchains.\nWith that objective in mind, the specification of the Nevermined NFT API supports the following capabilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Assets Management")," - Creation, Update, Deleting, etc. This is based on the existing Metadata Spec"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Assets Search")," - Allowing the search and filtering of assets"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Users Profile")," - Allowing to create, update and delete users"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Secondary Market")," - Registering the negotiation of parties during a secondary market purchase"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"NFTs Metadata")," - Recording the metadata associated to an NFT"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"NFTs Drops")," - Management of NFT drops"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"User Reviews")," - Allowing users to comment and rate marketplace contents"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Drops")," - Managing of NFT drops"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bookmarks")," - Allowing users to save bookmarks about different assets")),(0,i.kt)("p",null,"The goal behind Nevermined\u2019s NFT API is to help enterprises and developers deliver incredible Web3-enabled experiences for users. By introducing a simple unified API we plan to take away some of the complexities of blockchain technology, bringing one of the most powerful use cases in Web3 to everyone."))}m.isMDXComponent=!0}}]);