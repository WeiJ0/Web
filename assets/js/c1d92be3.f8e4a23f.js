"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1167],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),s=n(7392),i=n(7094),p=n(2466);const c="tabList__CuJ",d="tabItem_LNqP";function u(e){var t,n;const{lazy:o,block:u,defaultValue:m,values:g,groupId:h,className:f}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,s.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,i.U)(),[D,x]=(0,r.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=h){const e=N[h];null!=e&&e!==D&&b.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,n=j.indexOf(t),a=b[n].value;a!==D&&(C(t),x(a),null!=h&&w(h,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=j.indexOf(e.currentTarget)+1;n=null!=(a=j[t])?a:j[0];break}case"ArrowLeft":{var r;const t=j.indexOf(e.currentTarget)-1;n=null!=(r=j[t])?r:j[j.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},f)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:e=>j.push(e),onKeyDown:O,onFocus:E,onClick:E},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":D===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(k.filter((e=>e.props.value===D))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==D})))))}function m(e){const t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),o=n(5162);const s={title:"Deta Micros \u90e8\u5c6c Express \u7a0b\u5f0f",sidebar_position:3,keywords:["Deta"],tags:["\u7b46\u8a18","deta"]},i=void 0,p={unversionedId:"Deta/Deta_Micros",id:"Deta/Deta_Micros",title:"Deta Micros \u90e8\u5c6c Express \u7a0b\u5f0f",description:"",source:"@site/docs/Deta/Deta_Micros.mdx",sourceDirName:"Deta",slug:"/Deta/Deta_Micros",permalink:"/Web/docs/Deta/Deta_Micros",draft:!1,tags:[{label:"\u7b46\u8a18",permalink:"/Web/docs/tags/\u7b46\u8a18"},{label:"deta",permalink:"/Web/docs/tags/deta"}],version:"current",sidebarPosition:3,frontMatter:{title:"Deta Micros \u90e8\u5c6c Express \u7a0b\u5f0f",sidebar_position:3,keywords:["Deta"],tags:["\u7b46\u8a18","deta"]},sidebar:"tutorialSidebar",previous:{title:"Deta Base \u5fae\u578b NoSQL",permalink:"/Web/docs/Deta/Deta_Base"},next:{title:"\u5b89\u88dd Github \u7559\u8a00\u677f Giscus",permalink:"/Web/docs/Docusaurus/Install_Giscus"}},c={},d=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u5b89\u88dd Deta cli",id:"\u5b89\u88dd-deta-cli",level:2},{value:"\u767b\u5165 Deta",id:"\u767b\u5165-deta",level:2},{value:"\u5efa\u7acb\u65b0\u5c08\u6848",id:"\u5efa\u7acb\u65b0\u5c08\u6848",level:2},{value:"\u90e8\u5c6c\u4e00\u500b Express \u7a0b\u5f0f",id:"\u90e8\u5c6c\u4e00\u500b-express-\u7a0b\u5f0f",level:2}],u={toc:d};function m(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,"\u5728\u7df4\u7fd2 Node Express.js \u6642\uff0c\u4e0a\u7db2\u641c\u5c0b\u4e00\u5b9a\u6703\u6709\u4e0a\u67b6\u5230 Heroku \u7684\u6559\u5b78\uff0c\u900f\u904e\u514d\u8cbb\u7684\u670d\u52d9\u53ef\u4ee5\u7372\u5f97\u4e00\u500b\u7dda\u4e0a\u7684\u7db2\u5740 run \u4f60\u7684\u4f3a\u670d\u5668\u7a0b\u5f0f\uff0c\n\u4f46\u96a8\u8457 Heroku \u514d\u8cbb\u670d\u52d9\u5373\u5c07\u4e0b\u67b6\u6642\uff0cDeta Micros \u5c31\u53ef\u4ee5\u6210\u70ba\u65b0\u7684\u7df4\u7fd2\u670d\u52d9\u5566~"),(0,r.kt)("p",null,"\u524d\u7f6e\u4f5c\u696d\u9700\u8981\u5b89\u88dd ",(0,r.kt)("inlineCode",{parentName:"p"},"Node")," ",(0,r.kt)("inlineCode",{parentName:"p"},"NPM")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Express")," \u53ca ",(0,r.kt)("inlineCode",{parentName:"p"},"Deta cli"),"\uff0c\u524d\u9762\u4e09\u500b\u5c31\u4e0d\u591a\u505a\u8aaa\u660e\uff0c\u5f9e cli \u958b\u59cb\u5427"),(0,r.kt)("h2",{id:"\u5b89\u88dd-deta-cli"},"\u5b89\u88dd Deta cli"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"windows",label:"windows powershell",defalut:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,"iwr https://get.deta.dev/cli.ps1 -useb | iex")),(0,r.kt)(o.Z,{value:"mac \\& linux",label:"mac & linux cmd",mdxType:"TabItem"},(0,r.kt)("pre",null,"curl -fsSL https://get.deta.dev/cli.sh | sh"))),(0,r.kt)("p",null,"\u5b89\u88dd\u7d50\u675f\u6703\u51fa\u73fe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Deta was installed successfully to C:\\Users\\user\\.deta\\bin\\deta.exe\nRun 'deta --help' to get started\n")),(0,r.kt)("p",null,"\u9019\u6642\u5019\u5c31\u53ef\u4ee5\u8f38\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"deta --help")," \u9032\u884c\u6e2c\u8a66\uff0c\u82e5\u6709\u51fa\u73fe deta \u7684\u8aaa\u660e\u6587\u5b57\u5373\u6210\u529f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'Deta command line interface for managing deta micros.\nComplete documentation available at https://docs.deta.sh\n\nUsage:\n  deta [flags]\n  deta [command]\n\nAvailable Commands:\n  auth        Change auth settings for a deta micro\n  clone       Clone a deta micro\n  cron        Change cron settings for a deta micro\n  deploy      Deploy a deta micro\n  version     Print deta version\n  visor       Change visor settings for a deta micro\n  watch       Deploy changes in real time\n\nFlags:\n  -h, --help   help for deta\n\nUse "deta [command] --help" for more information about a command.\n')),(0,r.kt)("h2",{id:"\u767b\u5165-deta"},"\u767b\u5165 Deta"),(0,r.kt)("p",null,"\u8acb\u5148\u81f3 ",(0,r.kt)("a",{parentName:"p",href:"https://web.deta.sh/"},"Deta \u8a3b\u518a\u6703\u54e1")," \u4e26\u767b\u5165\u5728\u57f7\u884c\u4e0b\u5217\u6b65\u9a5f\u8f03\u70ba\u9806\u66a2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"date login\n")),(0,r.kt)("p",null,"\u9996\u5148\u82e5\u70ba windows \u6703\u5148\u8df3\u51fa\u9632\u706b\u7246\u7684\u63d0\u793a\u8acb\u4f60\u5354\u52a9\u958b\u555f\uff0c\u4e26\u4e14\u6703\u7531\u700f\u89bd\u5668\u50b3\u9001\u5df2\u767b\u5165\u7684\u8cc7\u6599\u7d66 cli"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"> deta login\nPlease, log in from the web page. Waiting...\nhttps://web.deta.sh/cli/49755\nLogged in successfully.\n")),(0,r.kt)("h2",{id:"\u5efa\u7acb\u65b0\u5c08\u6848"},"\u5efa\u7acb\u65b0\u5c08\u6848"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5148\u5230 deta \u7684\u5f8c\u53f0\u5efa\u7acb\u4e00\u500b\u5c08\u6848\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"+ New project")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"project",src:n(8235).Z,width:"692",height:"406"}),"\n",(0,r.kt)("img",{alt:"project",src:n(4773).Z,width:"725",height:"463"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Region")," \u70ba\u4f3a\u670d\u5668\u7684\u6240\u5728\u5340\u57df\uff0c\u9078\u64c7\u8d8a\u8fd1\u7684\u901f\u5ea6\u6703\u8d8a\u5feb\uff0c\u9019\u908a\u6703\u5efa\u8b70\u9078\u64c7 ",(0,r.kt)("strong",{parentName:"p"},"Asia (Singapore)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"deta new --node [\u4f3a\u670d\u5668\u540d\u7a31] --project [project \u540d\u7a31]\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f7f\u7528 python \u5247\u7b2c\u4e00\u500b\u53c3\u6578\u70ba --python \uff0c\u4f46\u9019\u7bc7\u4ee5 node \u70ba\u4e3b\uff0c\u518d\u9ebb\u7169\u53c3\u95b1",(0,r.kt)("a",{parentName:"p",href:"https://docs.deta.sh/docs/micros/getting_started/"},"\u5b98\u65b9\u6587\u4ef6"))),(0,r.kt)("p",null,"\u5efa\u7acb\u6210\u529f\u5247\u6703\u56de\u50b3 micro \u7684\u8a73\u7d30\u8cc7\u8a0a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'{\n    "name": [\u4f3a\u670d\u5668\u540d\u7a31],\n    "id": [\u4f3a\u670d\u5668 id],\n    "project": [\u5c08\u6848 id],\n    "runtime": "nodejs14.x", //\u7a0b\u5f0f\u7248\u672c\n    "endpoint": [\u524d\u53f0\u7db2\u5740],\n    "region": [\u4f3a\u670d\u5668\u5730\u5340]\n    "visor": [\u4f3a\u670d\u5668 Log\u529f\u80fd],\n    "http_auth": [\u524d\u53f0\u662f\u5426\u9700\u8981\u9a57\u8b49]\n}\n')),(0,r.kt)("p",null,"\u540c\u6642\u5f8c\u53f0\u4e5f\u6703\u51fa\u73fe\u76f8\u95dc\u8cc7\u8a0a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"micros",src:n(9529).Z,width:"1917",height:"697"})),(0,r.kt)("h2",{id:"\u90e8\u5c6c\u4e00\u500b-express-\u7a0b\u5f0f"},"\u90e8\u5c6c\u4e00\u500b Express \u7a0b\u5f0f"),(0,r.kt)("p",null,"\u5728\u5275\u5efa micro \u5f8c\uff0c\u76ee\u9304\u4e0b\u6703\u65b0\u589e\u4e00\u500b\u4f3a\u670d\u5668\u540d\u7a31\u7684\u8cc7\u6599\u593e\uff0c\u9019\u6642\u5019 powershell \u9700\u8981\u9032\u5165\u8a72\u8cc7\u6599\u593e\u57f7\u884c npm \u5b89\u88dd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"npm init -y\nnpm install express\n")),(0,r.kt)("p",null,"\u518d\u65b0\u589e ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," \u6a94\u6848\uff0c\u5b8c\u6210\u5f8c\u57f7\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"deta deploy")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'const express = require("express");\n\nconst app = express();\n\napp.get("/", async (req, res) => {\n  res.send("Hello World");\n});\n\nmodule.exports = app;\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"> deta deploy\n\nDeploying...\nSuccessfully deployed changes\nUpdating dependencies...\n\n+ express@4.18.1\nadded 57 packages from 42 contributors and audited 57 packages in 4.79s\n\n6 packages are looking for funding\n  run `npm fund` for details\n\nfound 0 vulnerabilities\n")),(0,r.kt)("p",null,"\u9019\u6642\u5019\u6253\u958b\u525b\u525b powershell create \u5f8c\u56de\u50b3\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint")," \u5373\u6703\u51fa\u73fe ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello World!")," \u5373\u5b8c\u6210\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6253\u958b\u524d\u53f0\u7db2\u5740\u61c9\u8a72\u90fd\u53ef\u4ee5\u770b\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello World!"),"\uff0c\u4f46\u82e5\u662f\u51fa\u73fe\u4e0b\u5217\u932f\u8aa4\u5247\u8868\u793a\u53ef\u80fd\u662f\u4f60\u7684\u700f\u89bd\u5668\u7981\u7528\u4e86 cookie \u9a57\u8b49\n\u56e0\u70ba\u9810\u8a2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"http_auth")," \u90fd\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"disabled")," \u9700\u9a57\u8b49\uff0c\u9019\u6642\u5019\u5c31\u8981\u900f\u904e cli \u5c07\u524d\u53f0\u8f49\u70ba\u4e0d\u7528\u9a57\u8b49(\u958b\u653e\u72c0\u614b)"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "errors":["Unauthorized"]\n}\n')),(0,r.kt)("p",{parentName:"admonition"},"cli \u8f38\u5165"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"> deta auth disable\n\nSuccessfully disabled http auth\n"))))}m.isMDXComponent=!0},9529:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/micros1-ec3d29ae1aa39c3b7e44ca70faf481f1.png"},8235:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project1-10a223e1fb64f88d4f0904e89b2f1a6d.png"},4773:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project2-4bbc08509809a8f0d97a1c86f4da3237.png"}}]);