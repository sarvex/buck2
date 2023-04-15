"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7643],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>m,mdx:()=>g,useMDXComponents:()=>p,withMDXComponents:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),f=function(e){return function(t){var n=p(t.components);return r.createElement(e,i({},t,{components:n}))}},p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},x=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,s=f["".concat(a,".").concat(m)]||f[m]||d[m]||i;return n?r.createElement(s,l(l({ref:t},u),{},{components:n})):r.createElement(s,l({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=x;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}x.displayName="MDXCreateElement"},35795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={id:"ExecutionPlatformInfo"},a="ExecutionPlatformInfo type",l={unversionedId:"api/build/providers/ExecutionPlatformInfo",id:"api/build/providers/ExecutionPlatformInfo",title:"ExecutionPlatformInfo type",description:"Provider that signals that a target represents an execution platform.",source:"@site/../docs/api/build/providers/ExecutionPlatformInfo.generated.md",sourceDirName:"api/build/providers",slug:"/api/build/providers/ExecutionPlatformInfo",permalink:"/docs/api/build/providers/ExecutionPlatformInfo",draft:!1,tags:[],version:"current",frontMatter:{id:"ExecutionPlatformInfo"},sidebar:"manualSidebar",previous:{title:"DefaultInfo type",permalink:"/docs/api/build/providers/DefaultInfo"},next:{title:"ExecutionPlatformRegistrationInfo type",permalink:"/docs/api/build/providers/ExecutionPlatformRegistrationInfo"}},c={},u=[{value:"ExecutionPlatformInfo.configuration",id:"executionplatforminfoconfiguration",level:2},{value:"ExecutionPlatformInfo.executor_config",id:"executionplatforminfoexecutor_config",level:2},{value:"ExecutionPlatformInfo.label",id:"executionplatforminfolabel",level:2}],f={toc:u};function p(e){let{components:t,...n}=e;return(0,o.mdx)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"executionplatforminfo-type"},(0,o.mdx)("inlineCode",{parentName:"h1"},"ExecutionPlatformInfo")," type"),(0,o.mdx)("p",null,"Provider that signals that a target represents an execution platform."),(0,o.mdx)("h2",{id:"executionplatforminfoconfiguration"},"ExecutionPlatformInfo.configuration"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'ExecutionPlatformInfo.configuration: "ConfigurationInfo"\n')),(0,o.mdx)("p",null,"The configuration of the execution platform"),(0,o.mdx)("hr",null),(0,o.mdx)("h2",{id:"executionplatforminfoexecutor_config"},"ExecutionPlatformInfo.executor_config"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'ExecutionPlatformInfo.executor_config: "command_executor_config"\n')),(0,o.mdx)("p",null,"The executor config"),(0,o.mdx)("hr",null),(0,o.mdx)("h2",{id:"executionplatforminfolabel"},"ExecutionPlatformInfo.label"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'ExecutionPlatformInfo.label: "target_label"\n')),(0,o.mdx)("p",null,"label of the defining rule, used in informative messages"))}p.isMDXComponent=!0}}]);