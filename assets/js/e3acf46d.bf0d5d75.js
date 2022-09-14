"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[8553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=i,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const a={},o="Interface: RegisterEvent",l={unversionedId:"catalog/core/API/interfaces/RegisterEvent",id:"catalog/core/API/interfaces/RegisterEvent",title:"Interface: RegisterEvent",description:"To registe a event from the blockchain",source:"@site/docs/catalog/core/API/interfaces/RegisterEvent.md",sourceDirName:"catalog/core/API/interfaces",slug:"/catalog/core/API/interfaces/RegisterEvent",permalink:"/docs/catalog/core/API/interfaces/RegisterEvent",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/catalog/core/API/interfaces/RegisterEvent.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interface: NeverminedProviderProps",permalink:"/docs/catalog/core/API/interfaces/NeverminedProviderProps"},next:{title:"Interface: SubscribeModule",permalink:"/docs/catalog/core/API/interfaces/SubscribeModule"}},c={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"_blockNumberUpdated",id:"_blocknumberupdated",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"_did",id:"_did",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"_lastUpdatedBy",id:"_lastupdatedby",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"_owner",id:"_owner",level:3},{value:"Defined in",id:"defined-in-3",level:4}],s={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-registerevent"},"Interface: RegisterEvent"),(0,i.kt)("p",null,"To registe a event from the blockchain"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/interfaces/RegisterEvent#_blocknumberupdated"},"_","blockNumberUpdated")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/interfaces/RegisterEvent#_did"},"_","did")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/interfaces/RegisterEvent#_lastupdatedby"},"_","lastUpdatedBy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/interfaces/RegisterEvent#_owner"},"_","owner"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"_blocknumberupdated"},"_","blockNumberUpdated"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","blockNumberUpdated"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("p",null,"The block number of the blockchain which the asset was updated"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/4f7b307/lib/src/types/index.ts#L715"},"types/index.ts:715")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_did"},"_","did"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","did"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Id of the asset"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/4f7b307/lib/src/types/index.ts#L709"},"types/index.ts:709")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_lastupdatedby"},"_","lastUpdatedBy"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","lastUpdatedBy"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The last modification of the asset"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/4f7b307/lib/src/types/index.ts#L713"},"types/index.ts:713")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_owner"},"_","owner"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","owner"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Owner of the asset"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/4f7b307/lib/src/types/index.ts#L711"},"types/index.ts:711")))}p.isMDXComponent=!0}}]);