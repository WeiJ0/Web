"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8339],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7369:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>_,contentTitle:()=>R,default:()=>E,frontMatter:()=>h,metadata:()=>v,toc:()=>y});var n=r(7462),a=r(7294),l=r(3905),o=r(6010),s=r(2389),i=r(7392),u=r(7094),c=r(2466);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,r;const{lazy:l,block:s,defaultValue:m,values:b,groupId:O,className:f}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),R=null!=b?b:h.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),v=(0,i.l)(R,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const _=null===m?m:null!=(t=null!=m?m:null==(r=h.find((e=>e.props.default)))?void 0:r.props.value)?t:h[0].props.value;if(null!==_&&!R.some((e=>e.value===_)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+_+'" but none of its children has the corresponding value. Available values are: '+R.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:g}=(0,u.U)(),[E,k]=(0,a.useState)(_),T=[],{blockElementScrollPositionUntilNextRender:L}=(0,c.o5)();if(null!=O){const e=y[O];null!=e&&e!==E&&R.some((t=>t.value===e))&&k(e)}const S=e=>{const t=e.currentTarget,r=T.indexOf(t),n=R[r].value;n!==E&&(L(t),k(n),null!=O&&g(O,String(n)))},P=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=T.indexOf(e.currentTarget)+1;r=null!=(n=T[t])?n:T[0];break}case"ArrowLeft":{var a;const t=T.indexOf(e.currentTarget)-1;r=null!=(a=T[t])?a:T[T.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},f)},R.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>T.push(e),onKeyDown:P,onFocus:S,onClick:S},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=r?r:t)}))),l?(0,a.cloneElement)(h.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function b(e){const t=(0,s.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}const O="tabItem_Ymn6";function f(e){let{children:t,hidden:r,className:n}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(O,n),hidden:r},t)}const h={tags:["\u7b46\u8a18"]},R="\u6392\u9664\u700f\u89bd\u5668\u9032\u5165 localhost \u51fa\u73fe ERR_SSL_PROTOCOL_ERROR",v={unversionedId:"\u5176\u4ed6/Localhost_ERR_SSL_PROTOCOL_ERROP",id:"\u5176\u4ed6/Localhost_ERR_SSL_PROTOCOL_ERROP",title:"\u6392\u9664\u700f\u89bd\u5668\u9032\u5165 localhost \u51fa\u73fe ERR_SSL_PROTOCOL_ERROR",description:"",source:"@site/docs\\\u5176\u4ed6\\Localhost_ERR_SSL_PROTOCOL_ERROP.mdx",sourceDirName:"\u5176\u4ed6",slug:"/\u5176\u4ed6/Localhost_ERR_SSL_PROTOCOL_ERROP",permalink:"/Web/docs/\u5176\u4ed6/Localhost_ERR_SSL_PROTOCOL_ERROP",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/\u5176\u4ed6/Localhost_ERR_SSL_PROTOCOL_ERROP.mdx",tags:[{label:"\u7b46\u8a18",permalink:"/Web/docs/tags/\u7b46\u8a18"}],version:"current",lastUpdatedAt:1661245393,formattedLastUpdatedAt:"Aug 23, 2022",frontMatter:{tags:["\u7b46\u8a18"]},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88dd Github \u7559\u8a00\u677f Giscus",permalink:"/Web/docs/Docusaurus/Install_Giscus"}},_={},y=[{value:"\u60c5\u5f62",id:"\u60c5\u5f62",level:2},{value:"\u89e3\u6c7a",id:"\u89e3\u6c7a",level:2}],g={toc:y};function E(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6392\u9664\u700f\u89bd\u5668\u9032\u5165-localhost-\u51fa\u73fe-err_ssl_protocol_error"},"\u6392\u9664\u700f\u89bd\u5668\u9032\u5165 localhost \u51fa\u73fe ERR_SSL_PROTOCOL_ERROR"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"localhost",src:r(1108).Z,width:"1400",height:"700"})),(0,l.kt)("h2",{id:"\u60c5\u5f62"},"\u60c5\u5f62"),(0,l.kt)("p",null,"\u9019\u5e7e\u5929\u5728\u958b\u767c\u4e0a\u767c\u751f\u7528\u700f\u89bd\u5668\u6253\u958b localhost \u51fa\u73fe\u932f\u8aa4 ",(0,l.kt)("inlineCode",{parentName:"p"},"ERR_SSL_PROTOCOL_ERROR"),(0,l.kt)("br",{parentName:"p"}),"\n","\u4e00\u958b\u59cb\u9084\u4ee5\u70ba\u662f\u670d\u52d9\u6c92\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," \u8d77\u4f86\u6216\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"port")," \u5361\u6b7b\u4e86",(0,l.kt)("br",{parentName:"p"}),"\n","\u5148\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"port")," \u4e0d\u884c\uff0c\u91cd\u958b\u6a5f\u4e5f\u4e0d\u884c\uff0c\u5f8c\u4f86\u4ed4\u7d30\u770b\u932f\u8aa4\u8a0a\u606f\u624d\u767c\u73fe\u4e0d\u662f\u627e\u4e0d\u5230\u670d\u52d9"),(0,l.kt)("p",null,"\u800c\u662f\u5728 SSL \u9019\u584a\u4e0a\u51fa\u554f\u984c\u4e86\uff0c\u67e5\u8a62\u4e86\u4e00\u4e0b\u539f\u56e0\uff0c\u61c9\u8a72\u662f\u700f\u89bd\u5668\u7684\u5b89\u5168\u653f\u7b56",(0,l.kt)("br",{parentName:"p"}),"\n","\u53ea\u8981\u4f60\u66fe\u7d93\u9032\u5165 https \u7684\u7db2\u7ad9\uff0c\u5c31\u6703\u628a\u5b83\u7d00\u9304\u5230\u700f\u89bd\u5668\uff0c\u4e0b\u6b21\u9032\u5165\u8a72\u7db2\u5740\u5c31\u6703\u81ea\u52d5\u4f7f\u7528 https  "),(0,l.kt)("h2",{id:"\u89e3\u6c7a"},"\u89e3\u6c7a"),(0,l.kt)(b,{mdxType:"Tabs"},(0,l.kt)(f,{value:"IE Edge",label:"IE Edge",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,"edge://net-internals/#hsts")),(0,l.kt)(f,{value:"Google Chrome",label:"Google Chrome",mdxType:"TabItem"},(0,l.kt)("pre",null,"chrome://net-internals/#hsts"))),(0,l.kt)("p",null,"\u4f9d\u7167\u700f\u89bd\u5668\u5728\u7db2\u5740\u5217\u8f38\u5165\u4e0a\u65b9\u7684\u7db2\u5740\u5c31\u53ef\u4ee5\u9032\u5165\u5230\u8a2d\u5b9a\u9801\u9762",(0,l.kt)("br",{parentName:"p"}),"\n","\u5728\u6574\u500b\u9801\u9762\u7684\u6700\u4e0b\u65b9\u6709\u4e00\u500b ",(0,l.kt)("strong",{parentName:"p"},"Delete domain security policies"),"  "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"ERR_SSL_PROTOCOL_ERROR",src:r(3666).Z,width:"704",height:"99"})),(0,l.kt)("p",null,"\u8f2a\u6d41\u8f38\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost")," \u53ca ",(0,l.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," \u522a\u9664\u5373\u53ef"))}E.isMDXComponent=!0},3666:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ERR_SSL_PROTOCOL_ERROR-261440aedb15bc877d5a953b57a5e4bd.JPG"},1108:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/localhost-375712bd7084da7435bf4e25e0b08026.png"}}]);