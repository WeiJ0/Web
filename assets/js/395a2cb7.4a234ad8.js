"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4734],{3905:(M,e,t)=>{t.d(e,{Zo:()=>n,kt:()=>c});var N=t(7294);function i(M,e,t){return e in M?Object.defineProperty(M,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):M[e]=t,M}function g(M,e){var t=Object.keys(M);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(M);e&&(N=N.filter((function(e){return Object.getOwnPropertyDescriptor(M,e).enumerable}))),t.push.apply(t,N)}return t}function a(M){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?g(Object(t),!0).forEach((function(e){i(M,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(e){Object.defineProperty(M,e,Object.getOwnPropertyDescriptor(t,e))}))}return M}function I(M,e){if(null==M)return{};var t,N,i=function(M,e){if(null==M)return{};var t,N,i={},g=Object.keys(M);for(N=0;N<g.length;N++)t=g[N],e.indexOf(t)>=0||(i[t]=M[t]);return i}(M,e);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(M);for(N=0;N<g.length;N++)t=g[N],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(M,t)&&(i[t]=M[t])}return i}var u=N.createContext({}),j=function(M){var e=N.useContext(u),t=e;return M&&(t="function"==typeof M?M(e):a(a({},e),M)),t},n=function(M){var e=j(M.components);return N.createElement(u.Provider,{value:e},M.children)},r={inlineCode:"code",wrapper:function(M){var e=M.children;return N.createElement(N.Fragment,{},e)}},l=N.forwardRef((function(M,e){var t=M.components,i=M.mdxType,g=M.originalType,u=M.parentName,n=I(M,["components","mdxType","originalType","parentName"]),l=j(t),c=i,o=l["".concat(u,".").concat(c)]||l[c]||r[c]||g;return t?N.createElement(o,a(a({ref:e},n),{},{components:t})):N.createElement(o,a({ref:e},n))}));function c(M,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof M||i){var g=t.length,a=new Array(g);a[0]=l;var I={};for(var u in e)hasOwnProperty.call(e,u)&&(I[u]=e[u]);I.originalType=M,I.mdxType="string"==typeof M?M:i,a[1]=I;for(var j=2;j<g;j++)a[j]=t[j];return N.createElement.apply(null,a)}return N.createElement.apply(null,t)}l.displayName="MDXCreateElement"},5162:(M,e,t)=>{t.d(e,{Z:()=>a});var N=t(7294),i=t(6010);const g="tabItem_Ymn6";function a(M){let{children:e,hidden:t,className:a}=M;return N.createElement("div",{role:"tabpanel",className:(0,i.Z)(g,a),hidden:t},e)}},5488:(M,e,t)=>{t.d(e,{Z:()=>c});var N=t(7462),i=t(7294),g=t(6010),a=t(2389),I=t(7392),u=t(7094),j=t(2466);const n="tabList__CuJ",r="tabItem_LNqP";function l(M){var e,t;const{lazy:a,block:l,defaultValue:c,values:o,groupId:D,className:A}=M,T=i.Children.map(M.children,(M=>{if((0,i.isValidElement)(M)&&"value"in M.props)return M;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof M.type?M.type:M.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),L=null!=o?o:T.map((M=>{let{props:{value:e,label:t,attributes:N}}=M;return{value:e,label:t,attributes:N}})),C=(0,I.l)(L,((M,e)=>M.value===e.value));if(C.length>0)throw new Error('Docusaurus error: Duplicate values "'+C.map((M=>M.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===c?c:null!=(e=null!=c?c:null==(t=T.find((M=>M.props.default)))?void 0:t.props.value)?e:T[0].props.value;if(null!==y&&!L.some((M=>M.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+L.map((M=>M.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:z,setTabGroupChoices:s}=(0,u.U)(),[p,d]=(0,i.useState)(y),m=[],{blockElementScrollPositionUntilNextRender:O}=(0,j.o5)();if(null!=D){const M=z[D];null!=M&&M!==p&&L.some((e=>e.value===M))&&d(M)}const k=M=>{const e=M.currentTarget,t=m.indexOf(e),N=L[t].value;N!==p&&(O(e),d(N),null!=D&&s(D,String(N)))},E=M=>{var e;let t=null;switch(M.key){case"ArrowRight":{var N;const e=m.indexOf(M.currentTarget)+1;t=null!=(N=m[e])?N:m[0];break}case"ArrowLeft":{var i;const e=m.indexOf(M.currentTarget)-1;t=null!=(i=m[e])?i:m[m.length-1];break}}null==(e=t)||e.focus()};return i.createElement("div",{className:(0,g.Z)("tabs-container",n)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,g.Z)("tabs",{"tabs--block":l},A)},L.map((M=>{let{value:e,label:t,attributes:a}=M;return i.createElement("li",(0,N.Z)({role:"tab",tabIndex:p===e?0:-1,"aria-selected":p===e,key:e,ref:M=>m.push(M),onKeyDown:E,onFocus:k,onClick:k},a,{className:(0,g.Z)("tabs__item",r,null==a?void 0:a.className,{"tabs__item--active":p===e})}),null!=t?t:e)}))),a?(0,i.cloneElement)(T.filter((M=>M.props.value===p))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},T.map(((M,e)=>(0,i.cloneElement)(M,{key:e,hidden:M.props.value!==p})))))}function c(M){const e=(0,a.Z)();return i.createElement(l,(0,N.Z)({key:String(e)},M))}},4016:(M,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>r,frontMatter:()=>g,metadata:()=>I,toc:()=>j});var N=t(7462),i=(t(7294),t(3905));t(5488),t(5162);const g={title:"Deta\uff0cHeroku \u7d50\u675f\u514d\u8cbb\u7684\u65b9\u6848\u4e4b\u4e00",sidebar_position:1,keywords:["Deta"],tags:["\u7b46\u8a18","deta"]},a=void 0,I={unversionedId:"Deta/intro",id:"Deta/intro",title:"Deta\uff0cHeroku \u7d50\u675f\u514d\u8cbb\u7684\u65b9\u6848\u4e4b\u4e00",description:"",source:"@site/docs/Deta/intro.mdx",sourceDirName:"Deta",slug:"/Deta/intro",permalink:"/Web/docs/Deta/intro",draft:!1,tags:[{label:"\u7b46\u8a18",permalink:"/Web/docs/tags/\u7b46\u8a18"},{label:"deta",permalink:"/Web/docs/tags/deta"}],version:"current",lastUpdatedAt:1662627874,formattedLastUpdatedAt:"Sep 8, 2022",sidebarPosition:1,frontMatter:{title:"Deta\uff0cHeroku \u7d50\u675f\u514d\u8cbb\u7684\u65b9\u6848\u4e4b\u4e00",sidebar_position:1,keywords:["Deta"],tags:["\u7b46\u8a18","deta"]},sidebar:"tutorialSidebar",previous:{title:"Framework 4.0 \u5efa\u7acb TLS 1.2",permalink:"/Web/docs/ASPNET/TLS12"},next:{title:"\u5b89\u88dd Github \u7559\u8a00\u677f Giscus",permalink:"/Web/docs/Docusaurus/Install_Giscus"}},u={},j=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u670d\u52d9 - Deta Micros",id:"\u670d\u52d9---deta-micros",level:2},{value:"\u5fae\u578b\u8cc7\u6599\u5eab NoSQL - Deta Base",id:"\u5fae\u578b\u8cc7\u6599\u5eab-nosql---deta-base",level:2},{value:"\u5fae\u578b\u96f2\u7aef\u786c\u789f Deta Drive",id:"\u5fae\u578b\u96f2\u7aef\u786c\u789f-deta-drive",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}],n={toc:j};function r(M){let{components:e,...g}=M;return(0,i.kt)("wrapper",(0,N.Z)({},n,g,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"deta",src:t(8975).Z,width:"220",height:"35"})),(0,i.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,i.kt)("p",null,"Heroku \u5728\u4eca\u5e74 8 \u6708\u5e95\u7684\u6642\u5019\u5ba3\u5e03\uff0c\u6703\u9010\u6f38\u6dd8\u6c70\u5404\u7a2e\u514d\u8cbb\u7684\u670d\u52d9\uff0c\u50cf\u662f\u6700\u591a\u4eba\u4f7f\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Dynos")," \u53ca ",(0,i.kt)("inlineCode",{parentName:"p"},"Postgres"),(0,i.kt)("br",{parentName:"p"}),"\n","\u9813\u6642\u7a0b\u5f0f\u5708\u54c0\u9d3b\u904d\u91ce\uff0c\u5c11\u4e86\u9019\u9ebc\u4e00\u500b\u68d2\u7684\u514d\u8cbb\u5e73\u53f0\u5be6\u5728\u53ef\u60dc\uff0c\u6240\u4ee5\u627e\u66ff\u4ee3\u65b9\u6848\u4e5f\u6210\u70ba\u9019\u9663\u5b50\u5927\u5bb6\u7684\u5de5\u4f5c\u4e4b\u4e00",(0,i.kt)("br",{parentName:"p"}),"\n","\u9019\u500b\u7cfb\u5217\u8981\u4ecb\u7d39\u7684 ",(0,i.kt)("strong",{parentName:"p"},"Deta")," \u6b63\u662f\u90e8\u5206\u53ef\u4ee5\u66ff\u4ee3\u7684\u65b9\u6848\u4e4b\u4e00\uff0c\u4e0d\u904e\u4ed6\u53ea\u652f\u63f4 ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," \u53ca ",(0,i.kt)("inlineCode",{parentName:"p"},"python")," \u5169\u7a2e\u8a9e\u8a00\u4f7f\u7528",(0,i.kt)("br",{parentName:"p"}),"\n","\u4e26\u4e14\u865f\u7a31 ",(0,i.kt)("b",{style:{color:"red"}},"\u6c38\u9060\u514d\u8cbb")," \uff0c\u96d6\u7136\u9019\u500b\u6c38\u9060\u4e0d\u77e5\u9053\u662f\u4e0d\u662f\u771f\u7684\u6c38\u9060\uff0c\u4e0d\u904e\u5728\u9019\u6bb5\u671f\u9593\u9084\u662f\u80fd\u8b93\u5927\u5bb6\u7df4\u7df4\u7a0b\u5f0f\uff0c\u5efa\u7acb\u4e00\u500b\u5fae\u578b\u7684\u7db2\u7ad9\u670d\u52d9"),(0,i.kt)("h2",{id:"\u670d\u52d9---deta-micros"},"\u670d\u52d9 - Deta Micros"),(0,i.kt)("p",null,"Deta Micros \u662f\u4e00\u500b\u96f2\u7aef\u904b\u7b97\u7684\u5fae\u578b\u4f3a\u670d\u5668\uff0c\u53ef\u4ee5\u4e0a\u50b3 Node Express \u9032\u884c\u904b\u4f5c\uff0c\u53ea\u9700\u8981\u5c08\u6ce8\u65bc Express \u7684\u958b\u767c",(0,i.kt)("br",{parentName:"p"}),"\n","\u5176\u4ed6\u76f8\u95dc\u7684\u4e8b\u60c5\u5c31\u4ea4\u7d66 Deta \u8655\u7406\u5373\u53ef\uff0c\u4e5f\u63d0\u4f9b\u4e86\u7c21\u6613\u7684\u5f8c\u53f0 UI \u505a\u6240\u6709\u8a2d\u5b9a\u3002"),(0,i.kt)("p",null,"\u65e2\u7136\u662f\u5fae\u578b\u670d\u52d9\uff0c\u81ea\u7136\u662f\u6709\u6240\u9650\u5236\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u7a0b\u5f0f\u78bc\u53ca\u76f8\u95dc\u6a94\u6848\u4e0a\u50b3\u5927\u5c0f\u7684\u4e0a\u9650\u70ba ",(0,i.kt)("inlineCode",{parentName:"li"},"250 MB"),"\uff0c\u5305\u542b NPM \u7684\u9805\u76ee\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u57f7\u884c\u7684\u8a18\u61b6\u9ad4\u53ea\u6709 512 MB\uff0c\u82e5\u9700\u8981\u589e\u52a0\u9700\u8981 Mail \u5b98\u65b9\u8aaa\u660e\u539f\u56e0\u53ca\u76ee\u7684\u3002"),(0,i.kt)("li",{parentName:"ol"},"TimeOut \u6642\u9593\u70ba 10 \u79d2\uff0c\u82e5\u9700\u8981\u589e\u52a0\u9700\u8981 Mail \u5b98\u65b9\u8aaa\u660e\u539f\u56e0\u53ca\u76ee\u7684\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u63f4 ",(0,i.kt)("inlineCode",{parentName:"li"},"Websokets")," \u53ca ",(0,i.kt)("inlineCode",{parentName:"li"},"long-running")," \u7a0b\u5f0f\uff0c\u6240\u4ee5\u4e5f\u7121\u6cd5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"socket.io")," \u6216\u662f\u76f8\u95dc\u7684\u6a5f\u5668\u4eba\u670d\u52d9 ",(0,i.kt)("inlineCode",{parentName:"li"},"Discord bots")),(0,i.kt)("li",{parentName:"ol"},"python \u7684\u90e8\u4efd packages \u7121\u6cd5\u4f7f\u7528 (Google & Firebase)"),(0,i.kt)("li",{parentName:"ol"},"\u652f\u63f4 python 3.7, 3.8, 3.9 & Nodejs 12.x 14.x  ")),(0,i.kt)("h2",{id:"\u5fae\u578b\u8cc7\u6599\u5eab-nosql---deta-base"},"\u5fae\u578b\u8cc7\u6599\u5eab NoSQL - Deta Base"),(0,i.kt)("p",null,"Deta Base \u662f\u4e00\u500b\u5feb\u901f\u4e14\u5b89\u5168\u7684 NoSQL \u8cc7\u6599\u5eab\uff0c\u8a17\u7ba1\u65bc AWS \u4e0a\u4e14\u8cc7\u6599\u6703\u518d\u9032\u884c\u4e00\u6b21\u52a0\u5bc6",(0,i.kt)("br",{parentName:"p"}),"\n","\u4e26\u4e14\u63d0\u4f9b\u4e86\u4e00\u500b UI \u65bc\u5f8c\u53f0\u754c\u9762\u4e0a\uff0c\u66f4\u5bb9\u6613\u4e86\u89e3\u8cc7\u6599\u5eab\u7684\u6240\u6709\u7d00\u9304\u3002"),(0,i.kt)("p",null,"\u800c\u9664\u4e86\u4f7f\u7528 Deta Micros \u67b6\u8a2d\u5fae\u578b\u4f3a\u670d\u5668\u5916\uff0cDeta \u4e5f\u53e6\u5916\u63d0\u4f9b\u4e86 HTTP API\uff0c\u5373\u4f7f\u4e0d\u61c2\u5f97 Node Express \u9084\u662f\u53ef\u4ee5\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"\u5fae\u578b\u96f2\u7aef\u786c\u789f-deta-drive"},"\u5fae\u578b\u96f2\u7aef\u786c\u789f Deta Drive"),(0,i.kt)("p",null,"Deta Drive \u63d0\u4f9b\u4e86\u6bcf\u500b\u7528\u6236\u53ef\u4e0a\u50b3\u6587\u4ef6\u7684\u670d\u52d9\uff0c\u800c\u9650\u5236\u70ba 10GB\uff0c\u4e5f\u63d0\u4f9b\u5f8c\u53f0 UI \u53ca HTTP API \u8b93\u4f7f\u7528\u8005\u66f4\u65b9\u4fbf\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,i.kt)("p",null,"\u96d6\u7136 Deta \u6709\u8457\u7a2e\u7a2e\u7684\u9650\u5236\uff0c\u4e0d\u904e\u51fa\u81ea\u65bc\u514d\u8cbb\u63d0\u4f9b\uff0c\u9019\u9ede\u9650\u5236\u4e5f\u662f\u7121\u6cd5\u907f\u514d\uff0c\u670d\u52d9\u5167\u5bb9\u96d6\u7136\u7121\u6cd5\u8207Heroku\u76f8\u6bd4\uff0c\u4f46\u62ff\u4f86\u7df4\u624b\u7a0b\u5f0f\uff0c",(0,i.kt)("br",{parentName:"p"}),"\n","\u61c9\u8a72\u9084\u662f\u7dbd\u7dbd\u6709\u9918\u3002"))}r.isMDXComponent=!0},8975:(M,e,t)=>{t.d(e,{Z:()=>N});const N="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgZmlsbD0ibm9uZSIKICAgaGVpZ2h0PSIzNSIKICAgdmlld0JveD0iMCAwIDIyMCAzNSIKICAgd2lkdGg9IjIyMCIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnODc2IgogICBzb2RpcG9kaTpkb2NuYW1lPSJkZXRhX2xvZ29fZGFyay5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTIuNCAoNWRhNjg5YzMxMywgMjAxOS0wMS0xNCkiPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTg4MiI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGRlZnMKICAgICBpZD0iZGVmczg4MCIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgICBncmlkdG9sZXJhbmNlPSIxMCIKICAgICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEzNjAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iNzE1IgogICAgIGlkPSJuYW1lZHZpZXc4NzgiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOnpvb209IjUuNzUiCiAgICAgaW5rc2NhcGU6Y3g9IjgzLjI2MDIzMiIKICAgICBpbmtzY2FwZTpjeT0iMTcuNSIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnODc2IiAvPgogIDxjbGlwUGF0aAogICAgIGlkPSJhIj4KICAgIDxwYXRoCiAgICAgICBkPSJtMCAwaDEyM3YzNWgtMTIzeiIKICAgICAgIGlkPSJwYXRoODYxIiAvPgogIDwvY2xpcFBhdGg+CiAgPGcKICAgICBjbGlwLXBhdGg9InVybCgjYSkiCiAgICAgaWQ9Imc4NzIiPgogICAgPHBhdGgKICAgICAgIGQ9Im0xNy41MDAxIDBjOS42NjQ5IDAgMTcuNDk5OSA3LjgzNTAyIDE3LjQ5OTkgMTcuNSAwIDkuNjY1LTcuODM1IDE3LjUtMTcuNDk5OSAxNy41LTkuNjY1MDggMC0xNy41MDAxLTcuODM1LTE3LjUwMDEtMTcuNSAwLTkuNjY0OTggNy44MzUwMi0xNy41IDE3LjUwMDEtMTcuNXoiCiAgICAgICBmaWxsPSIjZjczYjk1IgogICAgICAgaWQ9InBhdGg4NjQiIC8+CiAgICA8cGF0aAogICAgICAgZD0ibTE3LjU0MTcgMy40MTY5OWM3LjgyNCAwIDE0LjE2NjYgNi4zNDI2MyAxNC4xNjY2IDE0LjE2NjcxIDAgNy44MjQtNi4zNDI2IDE0LjE2NjYtMTQuMTY2NiAxNC4xNjY2LTcuODI0MDMgMC0xNC4xNjY3LTYuMzQyNi0xNC4xNjY3LTE0LjE2NjYgMC03LjgyNDA4IDYuMzQyNjctMTQuMTY2NzEgMTQuMTY2Ny0xNC4xNjY3MXoiCiAgICAgICBmaWxsPSIjYmQzOTljIgogICAgICAgaWQ9InBhdGg4NjYiIC8+CiAgICA8cGF0aAogICAgICAgZD0ibTE3LjU0MTYgNy4xNjY5OWM1Ljc1MjkgMCAxMC40MTY2IDQuNjYzNjEgMTAuNDE2NiAxMC40MTY3MSAwIDUuNzUzLTQuNjYzNyAxMC40MTY2LTEwLjQxNjYgMTAuNDE2Ni01Ljc1MyAwLTEwLjQxNjYtNC42NjM2LTEwLjQxNjYtMTAuNDE2NiAwLTUuNzUzMSA0LjY2MzYtMTAuNDE2NzEgMTAuNDE2Ni0xMC40MTY3MXoiCiAgICAgICBmaWxsPSIjOTMzODhlIgogICAgICAgaWQ9InBhdGg4NjgiIC8+CiAgICA8cGF0aAogICAgICAgZD0ibTE3LjQ1ODMgMTAuMzMzYzMuOTExOSAwIDcuMDgzMyAzLjE3MTMgNy4wODMzIDcuMDgzMyAwIDMuOTExOS0zLjE3MTQgNy4wODMzLTcuMDgzMyA3LjA4MzNzLTcuMDgzMy0zLjE3MTQtNy4wODMzLTcuMDgzM2MwLTMuOTEyIDMuMTcxNC03LjA4MzMgNy4wODMzLTcuMDgzM3oiCiAgICAgICBmaWxsPSIjNjAzMGEyIgogICAgICAgaWQ9InBhdGg4NzAiIC8+CiAgPC9nPgogIDxwYXRoCiAgICAgZD0ibTU0LjEwOTQgMjZoNi43MzgzYzMuMTA1NCAwIDUuNDQ5Mi0uNzkxIDcuMDAxOS0yLjQwMjMgMS41ODItMS42MTE0IDIuMzczMS0zLjQ4NjQgMi4zNzMxLTUuNjgzNiAwLTIuMTk3My0uNzkxMS00LjEwMTYtMi4zNzMxLTUuNzEyOS0xLjU1MjctMS42MTE0LTMuODk2NS0yLjQwMjM3LTcuMDAxOS0yLjQwMjM3aC02LjczODN6bTEzLjAzNzEtOC4wODU5YzAgMS41ODItLjUyNzQgMi45Mjk3LTEuNTgyIDQuMDQyOS0xLjAyNTQgMS4wODQtMi42MDc1IDEuNjQwNy00LjcxNjggMS42NDA3aC0zLjc1di0xMS4zOTY1aDMuNzVjMi4xMDkzIDAgMy42OTE0LjU1NjYgNC43MTY4IDEuNjQwNiAxLjA1NDYgMS4xMTMzIDEuNTgyIDIuNDYwOSAxLjU4MiA0LjA3MjN6bTUuNDc4NSAxLjQwNjJjMCA0LjA3MjMgMi41NzgxIDYuOTcyNyA3LjA2MDUgNi45NzI3IDIuOTg4MyAwIDUuMzkwNy0xLjQzNTYgNi40NDU0LTQuMTMwOWgtMy4zMTA2Yy0uNzMyNCAxLjE0MjYtMS43NTc4IDEuNzI4NS0zLjEzNDggMS43Mjg1LTIuMjg1MSAwLTMuNzUtMS40NjQ4LTQuMDEzNi0zLjc1aDEwLjY5MzN2LS44MjAzYzAtNC4wMTM3LTIuNjk1My02Ljk3MjYtNi44NTU0LTYuOTcyNi00LjE4OTUgMC02Ljg4NDggMi44NzExLTYuODg0OCA2Ljk3MjZ6bTEwLjY2NDEtMS4xMTMzaC03LjU4NzljLjMyMjItMi4wMjE1IDEuNjExMy0zLjQ1NyAzLjgwODYtMy40NTcgMi4xMzg2IDAgMy40NTcgMS40MDYyIDMuNzc5MyAzLjQ1N3ptOS45MDIzIDIuODQxOHYtNi4yMTA5aDMuMzY5MXYtMi4xOTczaC0zLjM2OTF2LTMuMTM0NzRoLTIuOTI5N3YzLjEzNDc0aC0yLjE2Nzl2Mi4xOTczaDIuMTY3OXY2LjIxMDljMCAxLjk2MjkuNDEwMiAzLjI4MTMgMS4yNTk4IDMuOTg0NHMyLjA1MDggMS4wNTQ3IDMuNjAzNSAxLjA1NDdjLjQ5OCAwIC45Mzc1LS4wMjkzIDEuMzE4NC0uMTE3MmwuNTU2Ni0uMTE3MnYtMi4zMTQ0bC0uNTU2Ni4wNTg2Yy0uMzgwOS4wNTg1LS44MjA0LjA4NzgtMS4zMTg0LjA4NzgtMS41ODIgMC0xLjkzMzYtLjgyMDMtMS45MzM2LTIuNjM2N3ptMTIuNTY4Ni04LjYxMzNjLTEuOTYzIDAtMy40ODcuNDEwMi00LjU0MSAxLjI1OTgtMS4wODQuODQ5Ni0xLjYxMTYgMS44NzUtMS42MTE2IDMuMDc2MmgyLjk4ODZjMC0xLjQwNjMgMS41ODItMS45MzM2IDMuMTY0LTEuOTMzNiAxLjk5MiAwIDMuMjIyLjcwMzEgMy4yMjIgMi41NDg4di44MjAzaC0zLjYwM2MtMy41NDUgMC02LjI5ODkuOTA4Mi02LjI5ODkgMy44OTY1IDAgMi43NTM5IDIuMTA4OSA0LjE4OTUgNS4yNDM5IDQuMTg5NSAyLjAyMiAwIDMuNDU3LS40OTgxIDQuMzA3LTEuNDk0MmwuNDEtLjQ5OGMwIC41NTY2LjIzNCAxLjQwNjIuMzIyIDEuNjk5MmgyLjkzdi0uMjM0NGwtLjIwNS0uNjQ0NWMtLjExNy0uNDM5NS0uMTc2LTEuMTEzMy0uMTc2LTIuMDUwOHYtNS4xNTYyYzAtMy45MjU4LTIuMjI2LTUuNDc4Ni02LjE1Mi01LjQ3ODZ6bTMuMjIyIDcuNzM0NGMwIDIuNjY2LTEuMzQ3IDQuMDQzLTMuODk2IDQuMDQzLTEuNjcgMC0zLjAxOC0uNTU2Ny0zLjAxOC0xLjk2MjkgMC0xLjYxMTMgMS40NjUtMi4wODAxIDMuMzExLTIuMTA5NHptMjUuNzgyLTQuNjU4MmgzLjAxN2MtLjkzNy0zLjcyMDctMy44NjctNi4xNTIzMi03Ljk2OS02LjE1MjMyLTUuMDk3IDAtOC42MTMgMy42MDM1Mi04LjYxMyA4LjU1NDcyIDAgNC44OTI1IDMuNDg3IDguNTI1NCA4LjYxMyA4LjUyNTQgNC4wMTQgMCA3LjAwMi0yLjM3MzEgNy45NjktNi4xNTI0aC0zLjAxN2MtLjcwMyAyLjEzODctMi41MiAzLjY5MTQtNC45NTIgMy42OTE0LTMuMjIyIDAtNS40NzgtMi41MTk1LTUuNDc4LTYuMDY0NCAwLTMuNTE1NyAyLjE5Ny02LjA5MzggNS40NzgtNi4wOTM4IDIuMzc0IDAgNC4yMTkgMS40OTQyIDQuOTUyIDMuNjkxNHptOC45MzUtNy44MjIyNWgtMi45Mjl2MTguMzEwNTVoMi45Mjl6bTMuMjgxIDExLjYzMDg1YzAgMi4wMjE1LjY0NSAzLjY5MTQgMS45MDUgNS4wMDk4IDEuMjYgMS4zMTgzIDMuMDE3IDEuOTYyOSA1LjIxNSAxLjk2MjloLjAyOWMyLjE5NyAwIDMuOTI2LS42NDQ2IDUuMTg1LTEuOTYyOSAxLjI2LTEuMzE4NCAxLjkwNS0yLjk4ODMgMS45MDUtNS4wMDk4cy0uNjQ1LTMuNjkxNC0xLjkwNS01LjAwOThjLTEuMjU5LTEuMzE4My0zLjAxNy0xLjk2MjgtNS4yMTQtMS45NjI4LTIuMTk4IDAtMy45NTUuNjQ0NS01LjIxNSAxLjk2MjgtMS4yNiAxLjMxODQtMS45MDUgMi45ODgzLTEuOTA1IDUuMDA5OHptMTEuMjUgMGMwIDIuNTQ4OC0xLjQ2NCA0LjU3MDMtNC4xMyA0LjU3MDMtMi41NDkgMC00LjEzMS0xLjkzMzYtNC4xMzEtNC41NzAzIDAtMi42MDc0IDEuNjExLTQuNTcwMyA0LjEzMS00LjU3MDMgMi41NDggMCA0LjEzIDEuOTYyOSA0LjEzIDQuNTcwM3ptMTEuNjYxIDYuOTE0MWMxLjk5MiAwIDMuNzUtLjc5MSA0LjU5OS0yLjE5NzNsLjExNyAxLjk2MjloMi42OTZ2LTEzLjM1OTRoLTIuOTAxdjcuNzM0NGMwIDEuMjMwNS0uNDEgMi4xMDk0LTEuMjMgMi42NjYtLjgyLjUyNzQtMS42Ny43OTEtMi41Mi43OTEtLjg3OSAwLTEuNjQtLjI2MzYtMi4zMTQtLjc5MS0uNjc0LS41NTY2LS45OTYtMS40MzU1LS45OTYtMi42NjZ2LTcuNzM0NGgtMi45M3Y3LjczNDRjMCAzLjc3OTMgMS44NzUgNS44NTk0IDUuNDc5IDUuODU5NHptMTcuMDIxLTEzLjg4NjdjLTMuOTg0IDAtNi4yOTkgMi45ODgyLTYuMjk5IDYuOTcyNiAwIDMuOTI1OCAyLjI1NiA2Ljk3MjcgNi4yOTkgNi45NzI3IDIuMDggMCAzLjU0NS0uNjQ0NiA0LjM5NS0xLjk2MjlsLjIwNS0uMzIyMy4xMTcgMS45OTIyaDIuNjk1di0xOC4zMTA1NWgtMi45djYuNzk2ODVsLS4xMTctLjE3NThjLS44NS0xLjMxODMtMi4zMTUtMS45NjI4LTQuMzk1LTEuOTYyOHptLjUyNyAyLjMxNDRjMi41NDkgMCAzLjk4NSAyLjA4MDEgMy45ODUgNC42NTgyIDAgMi40OTAyLTEuMzc3IDQuNjU4Mi0zLjk4NSA0LjY1ODItMi41NDggMC0zLjg5Ni0xLjk5MjItMy44OTYtNC42NTgyIDAtMi40OTAyIDEuMzE4LTQuNjU4MiAzLjg5Ni00LjY1ODJ6IgogICAgIGZpbGw9IiMwMDAiCiAgICAgaWQ9InBhdGg4NzQiCiAgICAgc3R5bGU9InN0cm9rZTojZjBmZmZmO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjAuNjIzNjIyMDU7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiIC8+Cjwvc3ZnPgo="}}]);