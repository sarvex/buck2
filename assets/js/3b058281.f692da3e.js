"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1608],{3905:(t,e,n)=>{n.r(e),n.d(e,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>x,useMDXComponents:()=>s,withMDXComponents:()=>p});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),p=function(t){return function(e){var n=s(e.components);return r.createElement(t,o({},e,{components:n}))}},s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},d=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},f="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,u(u({ref:e},l),{},{components:n})):r.createElement(f,u({ref:e},l))}));function x(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=h;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u[f]="string"==typeof t?t:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5418:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={id:"audit_ctx"},i="audit_ctx type",u={unversionedId:"api/bxl/audit_ctx",id:"api/bxl/audit_ctx",title:"audit_ctx type",description:"The context for performing audit operations in bxl. The functions offered on this ctx are the same behaviour as the audit functions available within audit command.",source:"@site/../docs/api/bxl/audit_ctx.generated.md",sourceDirName:"api/bxl",slug:"/api/bxl/audit_ctx",permalink:"/docs/api/bxl/audit_ctx",draft:!1,tags:[],version:"current",frontMatter:{id:"audit_ctx"},sidebar:"manualSidebar",previous:{title:"analysis_result type",permalink:"/docs/api/bxl/analysis_result"},next:{title:"bxl_actions type",permalink:"/docs/api/bxl/bxl_actions"}},c={},l=[{value:"audit_ctx.output",id:"audit_ctxoutput",level:2},{value:"Details",id:"details",level:4}],p={toc:l};function s(t){let{components:e,...n}=t;return(0,a.mdx)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"audit_ctx-type"},(0,a.mdx)("inlineCode",{parentName:"h1"},"audit_ctx")," type"),(0,a.mdx)("p",null,"The context for performing ",(0,a.mdx)("inlineCode",{parentName:"p"},"audit")," operations in bxl. The functions offered on this ctx are the same behaviour as the audit functions available within audit command."),(0,a.mdx)("h2",{id:"audit_ctxoutput"},"audit_ctx.output"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'def audit_ctx.output(output_path: str.type, target_platform: "" = None) -> [None, ""]\n')),(0,a.mdx)("p",null,"Returns either: - The ",(0,a.mdx)("inlineCode",{parentName:"p"},"StarlarkAction")," which created the buck-out path, if exists. - The ",(0,a.mdx)("inlineCode",{parentName:"p"},"StarlarkTargetLabel")," (unconfigured target label) constructed from the buck-out path, if the configuration hashes do not match. - None, if the configuration hash of the buck-out path matches the one passed into this function, or the default target configuration, but no action could be found that generated the buck-out path."),(0,a.mdx)("h4",{id:"details"},"Details"),(0,a.mdx)("p",null,"Takes in an optional target platform, otherwise will use the default target platform."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_audit_output(ctx):\n    target_platform = "foo"\n    result = ctx.audit().output("buck-out/v2/gen/fbcode/some_cfg_hash/path/to/__target__/artifact", target_platform)\n    ctx.output.print(result)\n')))}s.isMDXComponent=!0}}]);