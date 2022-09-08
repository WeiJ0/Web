"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[635],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,s(s({ref:t},c),{},{components:n})):r.createElement(k,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),o=n(6010),s=n(2389),l=n(7392),i=n(7094),p=n(2466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,n;const{lazy:s,block:d,defaultValue:m,values:k,groupId:b,className:v}=e,N=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=k?k:N.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),h=(0,l.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const j=null===m?m:null!=(t=null!=m?m:null==(n=N.find((e=>e.props.default)))?void 0:n.props.value)?t:N[0].props.value;if(null!==j&&!g.some((e=>e.value===j)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+j+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:f,setTabGroupChoices:y}=(0,i.U)(),[T,w]=(0,a.useState)(j),O=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=b){const e=f[b];null!=e&&e!==T&&g.some((t=>t.value===e))&&w(e)}const P=e=>{const t=e.currentTarget,n=O.indexOf(t),r=g[n].value;r!==T&&(C(t),w(r),null!=b&&y(b,String(r)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=O.indexOf(e.currentTarget)+1;n=null!=(r=O[t])?r:O[0];break}case"ArrowLeft":{var a;const t=O.indexOf(e.currentTarget)-1;n=null!=(a=O[t])?a:O[O.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},g.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>O.push(e),onKeyDown:S,onFocus:P,onClick:P},s,{className:(0,o.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(N.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,s.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},9995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));n(5488),n(5162);const o={title:"json-server-auth \u7c21\u6613\u6b0a\u9650\u5957\u4ef6",sidebar_position:3,keywords:["json server"],tags:["\u7b46\u8a18","json server"]},s=void 0,l={unversionedId:"Json-Server/json-server-auth",id:"Json-Server/json-server-auth",title:"json-server-auth \u7c21\u6613\u6b0a\u9650\u5957\u4ef6",description:"",source:"@site/docs/Json-Server/json-server-auth.mdx",sourceDirName:"Json-Server",slug:"/Json-Server/json-server-auth",permalink:"/Web/docs/Json-Server/json-server-auth",draft:!1,tags:[{label:"\u7b46\u8a18",permalink:"/Web/docs/tags/\u7b46\u8a18"},{label:"json server",permalink:"/Web/docs/tags/json-server"}],version:"current",lastUpdatedAt:1662360331,formattedLastUpdatedAt:"Sep 5, 2022",sidebarPosition:3,frontMatter:{title:"json-server-auth \u7c21\u6613\u6b0a\u9650\u5957\u4ef6",sidebar_position:3,keywords:["json server"],tags:["\u7b46\u8a18","json server"]},sidebar:"tutorialSidebar",previous:{title:"json-server \u7684\u9032\u968e\u904b\u7528",permalink:"/Web/docs/Json-Server/extra"},next:{title:"\u6392\u9664\u700f\u89bd\u5668\u9032\u5165 localhost \u51fa\u73fe ERR_SSL_PROTOCOL_ERROR",permalink:"/Web/docs/\u5176\u4ed6/Localhost_ERR_SSL_PROTOCOL_ERROP"}},i={},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u5b89\u88dd",id:"\u5b89\u88dd",level:2},{value:"\u9810\u8a2d\u5957\u4ef6 API",id:"\u9810\u8a2d\u5957\u4ef6-api",level:2},{value:"\u8a3b\u518a",id:"\u8a3b\u518a",level:3},{value:"\u767b\u5165",id:"\u767b\u5165",level:3},{value:"\u6839\u8cc7\u6599\u7684\u6b0a\u9650\u8a2d\u5b9a",id:"\u6839\u8cc7\u6599\u7684\u6b0a\u9650\u8a2d\u5b9a",level:3},{value:"\u4ee5\u975e json-server-cli \u65b9\u5f0f\u5efa\u7acb json-server",id:"\u4ee5\u975e-json-server-cli-\u65b9\u5f0f\u5efa\u7acb-json-server",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528\u4e86 json-server \u67b6\u8a2d\u4e00\u500b API \u4f3a\u670d\u5668\u5f8c\uff0c\u82e5\u8981\u6a21\u64ec JWT Token \u7684\u74b0\u5883",(0,a.kt)("br",{parentName:"p"}),"\n","\u9700\u8981\u900f\u904e\u8f09\u5165 JWT \u7684\u76f8\u95dc\u5957\u4ef6\u4e26\u52a0\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"middleware")," \u9032\u884c\u6293 User \u767b\u5165\u8cc7\u6599\u4e26\u7522\u751f Token \u7684\u52d5\u4f5c",(0,a.kt)("br",{parentName:"p"}),"\n","\u65bc\u6bcf\u500b API \u8def\u5f91\u4e0b\u4e5f\u90fd\u9700\u8981\u984d\u5916\u5beb\u5165\u76f8\u95dc\u7684\u5224\u5225\u624d\u53ef\u4ee5\uff0c\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"json-server-auth")," \u9019\u500b\u5957\u4ef6\u5c31\u5b8c\u6210\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"middleware")," \u9019\u4e9b\u4e8b\u60c5"),(0,a.kt)("h2",{id:"\u5b89\u88dd"},"\u5b89\u88dd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install json-server json-server-auth\n")),(0,a.kt)("p",null,"\u4e00\u6a23\u5efa\u7acb\u4e00\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"db.json")," \u7684\u6a94\u6848\uff0c\u4e26\u65b0\u589e ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," \u7684\u6839\u8cc7\u6599"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "users": []\n}\n')),(0,a.kt)("p",null,"\u4f7f\u7528 cli \u7684\u65b9\u5f0f\u57f7\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"json-server-auth db.json -p 3003\n// \u7b49\u540c\u65bc json-server db.json -m ./node_modules/json-server-auth -p 3003\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u9019\u6642\u5019\u53ef\u80fd\u6703\u9047\u5230\u932f\u8aa4"),(0,a.kt)("blockquote",{parentName:"admonition"},(0,a.kt)("span",{style:{color:"red"}},"'json-server-auth' \u4e0d\u662f\u5167\u90e8\u6216\u5916\u90e8\u547d\u4ee4\u3001\u53ef\u57f7\u884c\u7684\u7a0b\u5f0f\u6216\u6279\u6b21\u6a94\u3002")),(0,a.kt)("p",{parentName:"admonition"},"\u90a3\u662f\u56e0\u70ba\u6211\u5011\u4e0d\u50cf json-server \u6709\u7528 -g \u53bb\u505a\u5168\u57df\u5b89\u88dd\uff0c\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u57f7\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"json-server cli")),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"\u5c31\u662f\u76f4\u63a5\u5168\u57df\u5b89\u88dd ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install -g json-server-auth")),(0,a.kt)("li",{parentName:"ol"},"\u5229\u7528 npm \u53bb\u57f7\u884c json-server-auth\uff0c\u958b\u555f\u5c08\u6848\u8cc7\u6599\u593e\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json"),(0,a.kt)("br",{parentName:"li"}),"\u65bc ",(0,a.kt)("inlineCode",{parentName:"li"},"scripts")," object \u4e2d\u65b0\u589e json-server-auth \u6307\u4ee4\uff0c\u4e4b\u5f8c\u5c31\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run auth")," \u7684\u65b9\u5f0f\u57f7\u884c")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "auth": "json-server-auth db.json -p 3003"\n  },\n'))),(0,a.kt)("h2",{id:"\u9810\u8a2d\u5957\u4ef6-api"},"\u9810\u8a2d\u5957\u4ef6 API"),(0,a.kt)("h3",{id:"\u8a3b\u518a"},"\u8a3b\u518a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"-POST /register or /signup or /users",(0,a.kt)("br",{parentName:"p"}),"\n","\u7576\u4e2d ",(0,a.kt)("b",{style:{color:"red"}},"email")," \u53ca ",(0,a.kt)("b",{style:{color:"red"}},"password")," \u70ba\u5fc5\u586b\u6b04\u4f4d\uff0c\u9a57\u8b49\u65b9\u5f0f\u5982\u540c\u524d\u9762 middleware")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"postman-7",src:n(8244).Z,width:"1482",height:"318"}),"\n",(0,a.kt)("img",{alt:"postman-8",src:n(8750).Z,width:"1488",height:"340"})),(0,a.kt)("h3",{id:"\u767b\u5165"},"\u767b\u5165"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"-POST /login or /signin",(0,a.kt)("br",{parentName:"p"}),"\n","\u7576\u4e2d ",(0,a.kt)("b",{style:{color:"red"}},"email")," \u53ca ",(0,a.kt)("b",{style:{color:"red"}},"password")," \u70ba\u5fc5\u586b\u6b04\u4f4d\uff0c\u9a57\u8b49\u65b9\u5f0f\u5982\u540c\u524d\u9762 middleware")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"postman-13",src:n(8426).Z,width:"1486",height:"336"})),(0,a.kt)("p",null,"\u50b3\u5165\u6b04\u4f4d\u5f8c\u5c31\u6703\u5f97\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"accessToken")," \u53ca ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"\uff0c\u9019\u6642\u5019\u5728\u53bb ",(0,a.kt)("inlineCode",{parentName:"p"},"-GET /users/")," \u6703\u767c\u751f\u4ec0\u9ebc\u4e8b\u5462",(0,a.kt)("br",{parentName:"p"}),"\n","\u6703\u5f97\u5230\u6240\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," \u7684\u8cc7\u6599\uff0c\u96d6\u7136\u5bc6\u78bc\u6709\u7d93\u904e\u52a0\u5bc6\uff0c\u4f46\u5982\u679c\u5176\u4ed6\u6b04\u4f4d\u9084\u662f\u6709\u500b\u8cc7\u7684\u8a71\u9084\u662f\u6703\u88ab\u770b\u5149\u5149",(0,a.kt)("br",{parentName:"p"}),"\n","\u6240\u4ee5\u9019\u6642\u5019\u5c31\u8981\u53bb\u8a2d\u5b9a\u5b58\u53d6\u7684\u6b0a\u9650\u4e86"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"postman-9",src:n(6519).Z,width:"1487",height:"522"})),(0,a.kt)("h3",{id:"\u6839\u8cc7\u6599\u7684\u6b0a\u9650\u8a2d\u5b9a"},"\u6839\u8cc7\u6599\u7684\u6b0a\u9650\u8a2d\u5b9a"),(0,a.kt)("p",null,"\u5728\u8cc7\u6599\u593e\u4e0b\u65b0\u589e ",(0,a.kt)("inlineCode",{parentName:"p"},"routes.json")," \u6a94\u6848"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="routes.json"',title:'"routes.json"'},'{\n  "users": 600\n}\n// \u6539\u57f7\u884c json-server-auth db.json -r routes.json -p 3003  -r \u5c07\u8def\u7531 json \u5e36\u5165\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"postman-10",src:n(3318).Z,width:"1484",height:"265"})),(0,a.kt)("p",null,"\u9019\u6642\u5019\u518d\u57f7\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"-GET /users/")," \u5c31\u51fa\u73fe\u9700\u8981 Token \u7684 401 \u8a0a\u606f\u4e86\uff0c\u90a3\u5c31\u628a Token \u52a0\u4e0a\u53bb\u518d\u4f86\u4e00\u6b21\u5427",(0,a.kt)("br",{parentName:"p"}),"\n","\u5728 postman \u5de6\u908a Body \u65c1\u9084\u6709\u4e00\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"Auth"),"\uff0c\u9019\u908a\u5957\u4ef6\u4f7f\u7528\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT"),"\uff0c\u6240\u4ee5\u5c31\u9078\u64c7 ",(0,a.kt)("inlineCode",{parentName:"p"},"Bearer Token"),"\uff0c\u4e26\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"Token")," \u8cbc\u5165"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"postman-12",src:n(3828).Z,width:"1485",height:"537"})),(0,a.kt)("p",null,"\u56e0\u70ba ",(0,a.kt)("inlineCode",{parentName:"p"},"600")," \u7684\u95dc\u4fc2\u9019\u6b21\u5f97\u5230\u4e86 ",(0,a.kt)("b",{style:{color:"red"}},"Private resource access: entity must have a reference to the owner id"),"\uff0c\u53ea\u80fd\u5b58\u53d6\u81ea\u5df1\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"id")),(0,a.kt)("p",null,"\u90a3\u4ec0\u9ebc\u662f 600 \u5462 ? \u53c3\u7167\u5b98\u65b9\u6587\u4ef6\u5982\u4e0b\uff0c\u5728\u81ea\u5df1\u659f\u914c\u60c5\u5883\u53bb\u8a2d\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"routes.json")," \u6b0a\u9650"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u8def\u7531\u4ee3\u78bc"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5beb\u5165"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u8b80\u53d6"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"400"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("b",{style:{color:"red"}},"\u4e0d\u80fd\u5beb\u5165")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("b",{style:{color:"#F75000"}},"\u50c5\u81ea\u5df1\u7684 Token"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"440"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("b",{style:{color:"red"}},"\u4e0d\u80fd\u5beb\u5165")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("b",{style:{color:"#0080FF"}},"\u6709 Token \u7686\u53ef"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"444"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("b",{style:{color:"red"}},"\u4e0d\u80fd\u5beb\u5165")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("b",{style:{color:"green"}},"\u4e0d\u9700\u8981 Token"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"600"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("b",{style:{color:"#F75000"}},"\u50c5\u81ea\u5df1\u7684 Token")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("b",{style:{color:"#F75000"}},"\u50c5\u81ea\u5df1\u7684 Token"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"640"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("b",{style:{color:"#F75000"}},"\u50c5\u81ea\u5df1\u7684 Token")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("b",{style:{color:"#0080FF"}},"\u6709 Token \u7686\u53ef"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"644"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("b",{style:{color:"#F75000"}},"\u50c5\u81ea\u5df1\u7684 Token")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("b",{style:{color:"green"}},"\u4e0d\u9700\u8981 Token"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"660"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("b",{style:{color:"#0080FF"}},"\u6709 Token \u7686\u53ef")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("b",{style:{color:"#0080FF"}},"\u6709 Token \u7686\u53ef"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"664"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("b",{style:{color:"#0080FF"}},"\u6709 Token \u7686\u53ef")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("b",{style:{color:"green"}},"\u4e0d\u9700\u8981 Token"))))),(0,a.kt)("p",null,"\u800c\u5728\u5beb\u5165\u7684\u6b0a\u9650\u4e2d\u8a2d\u5b9a\u9700\u8981\u81ea\u5df1\u7684 Token \u6642\uff0c\u5beb\u5165\u6642\u5c31\u6703\u5224\u65b7\u662f\u5426\u5e36\u5165 Token\uff0c\u8b80\u53d6\u4ea6\u4e4b\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u9019\u908a\u8209\u4f8b\u4f86\u65b0\u589e\u4e00\u7b46 ",(0,a.kt)("inlineCode",{parentName:"p"},"Posts"),"\uff0c\u6b0a\u9650\u7684\u90e8\u5206\u5247\u662f 600\uff0c\u8b80\u5beb\u7686\u9700\u8981\u5177\u5099 Token"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'//-POST http://localhost:3003/posts\n{\n    "title" :"new"\n}\n// Response\n   "Private resource creation: request body must have a reference to the owner id"\n')),(0,a.kt)("p",null,"\u9019\u908a\u7684\u932f\u8aa4\u8a0a\u606f\u5247\u662f\uff0c\u82e5\u6709\u8a2d\u5b9a\u6b0a\u9650\u7684\u8cc7\u6599\u96c6\u90fd\u9700\u8981\u591a\u5beb\u5165\u4e00\u500b\u6b04\u4f4d\u3000",(0,a.kt)("inlineCode",{parentName:"p"},"userId")," \u4f86\u53bb\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," \u88e1\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," \u505a\u95dc\u806f",(0,a.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u6709\u78b0\u904e\u8cc7\u6599\u5eab SQL \u61c9\u8a72\u6e05\u695a\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"ForeignKey")," \u7684\u6982\u5ff5\uff0c\u5982\u679c\u6c92\u6709\u78b0\u904e\u7684\u8a71\u7c21\u55ae\u4f86\u8aaa\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="db.json"',title:'"db.json"'},'    "posts": [\n        {    // \u9019\u500b\u8cc7\u6599\u6211\u4e0d\u77e5\u9053\u662f\u8ab0\u5beb\u7684\n            "id": 1,\n            "title": "user1 posts"\n        },\n        {\n            "id": 2,\n            "userId": 1, // \u900f\u904e\u9019\u500b userId \u6211\u77e5\u9053\u662f users id = 1 \u7684\u4eba\u5beb\u7684\uff0c\u662f test@abc.com\n            "title": "user1 posts"\n        }\n    ],\n    "users": [\n        {\n        "email": "test@abc.com",\n        "password": "$2a$10$gjxiLxIZFfQnAGq9DeEGY.JRhYCYVX6AwSc1j4jSqvpdnJ/hzjY1i",\n        "id": 1\n        },\n        {\n        "email": "test01@abc.com",\n        "password": "$2a$10$NmuGzWxxjs3BlU/2FZc8suURvxzJV5Hi4t/oDirhQO08wXZKDprKq",\n        "id": 2\n        }\n    ],\n')),(0,a.kt)("p",null,"\u6240\u4ee5\u6709\u65b0\u589e\u6b0a\u9650\u7684\u8cc7\u6599\u96c6\u52d9\u5fc5\u8981\u5728 Body \u88e1\u52a0\u4e0a ",(0,a.kt)("inlineCode",{parentName:"p"},"userId")," \u53bb\u505a\u5c0d\u61c9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'//-POST http://localhost:3003/posts\n{\n    "userId" : 1, // \u9019\u908a\u7684 userId \u4e5f\u9700\u8981\u548c\u76ee\u524d token \u53bb\u505a\u5c0d\u61c9\n    "title" :"new"\n}\n// Response\n{\n    "title": "test2",\n    "userId": "1",\n    "id": 3\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'//-POST http://localhost:3003/posts\n{\n    "userId" : 2, // userId \u8207\u76ee\u524d token \u4e0d\u7b26\n    "title" :"new"\n}\n// Response\n   "Private resource creation: request body must have a reference to the owner id"\n')),(0,a.kt)("h2",{id:"\u4ee5\u975e-json-server-cli-\u65b9\u5f0f\u5efa\u7acb-json-server"},"\u4ee5\u975e json-server-cli \u65b9\u5f0f\u5efa\u7acb json-server"),(0,a.kt)("p",null,"\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"json-server")," \u4e00\u6a23\u90fd\u53ef\u4ee5\u7528\u975e cli \u7684\u65b9\u5f0f\u4f86\u555f\u52d5\u4f3a\u670d\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},"const jsonServer = require('json-server')\nconst auth = require('json-server-auth') // \u591a\u8f09\u5165\u4e86 json-server-auth\n\nconst PORT = 3033;\nconst server = jsonServer.create()\nconst router = jsonServer.router('db.json')\n\nserver.db = router.db //\u4f3a\u670d\u5668\u7d81\u5b9a db router\n\n// \u82e5\u6709\u898f\u5247\u8a2d\u5b9a\u53ef\u4ee5\u900f\u904e\u8986\u5beb\u529f\u80fd\u91cd\u65b0\u8a2d\u5b9a\nconst rules = auth.rewriter({\n  users: 600,\n  messages: 640,\n})\n\nserver.use(rules) // \u8f09\u5165\u525b\u525b\u8986\u5beb\u7684\u898f\u5247\nserver.use(auth) // auth \u9700\u8981\u5728 router \u4e4b\u524d\u624d\u6703\u8d77\u4f5c\u7528\nserver.use(router)\nserver.listen(PORT, () => {\n  console.log(`JSON Server Auth is running at http://localhost:${PORT} ~`);\n});\n")))}u.isMDXComponent=!0},3318:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/postman-10-f87868d4411622c83fb9baefb0b3591b.JPG"},3828:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/postman-12-b3df74addc077e470361be4d1d5f0e6d.JPG"},8426:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/postman-13-f8882840f267940ab797e303082cd5fe.JPG"},8244:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/postman-7-27a55a2d7d353a31e65a77d7c44693fb.JPG"},8750:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/postman-8-efdecac01f83650cca3e15793c47d838.JPG"},6519:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/postman-9-03df1bb6836b7bc15f0f5604c2ab9b62.JPG"}}]);