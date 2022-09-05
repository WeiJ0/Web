"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(n),k=s,m=d["".concat(p,".").concat(k)]||d[k]||c[k]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var i=2;i<a;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=n(7462),s=(n(7294),n(3905));const a={title:"json-server \u7684\u9032\u968e\u904b\u7528",sidebar_position:2,keywords:["json server"],tags:["\u7b46\u8a18"]},o=void 0,l={unversionedId:"Json-Server/extra",id:"Json-Server/extra",title:"json-server \u7684\u9032\u968e\u904b\u7528",description:"\u524d\u8a00",source:"@site/docs/Json-Server/extra.mdx",sourceDirName:"Json-Server",slug:"/Json-Server/extra",permalink:"/Web/docs/Json-Server/extra",draft:!1,tags:[{label:"\u7b46\u8a18",permalink:"/Web/docs/tags/\u7b46\u8a18"}],version:"current",sidebarPosition:2,frontMatter:{title:"json-server \u7684\u9032\u968e\u904b\u7528",sidebar_position:2,keywords:["json server"],tags:["\u7b46\u8a18"]},sidebar:"tutorialSidebar",previous:{title:"\u521d\u5165 json-server",permalink:"/Web/docs/Json-Server/intro"},next:{title:"json-server-auth \u7c21\u6613\u6b0a\u9650\u5957\u4ef6",permalink:"/Web/docs/Json-Server/json-server-auth"}},p={},i=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u81ea\u5b9a\u7fa9\u8def\u7531",id:"\u81ea\u5b9a\u7fa9\u8def\u7531",level:2},{value:"\u81ea\u5b9a\u7fa9\u8655\u7406",id:"\u81ea\u5b9a\u7fa9\u8655\u7406",level:2},{value:"\u6aa2\u67e5\u6b04\u4f4d\u662f\u5426\u586b\u5beb",id:"\u6aa2\u67e5\u6b04\u4f4d\u662f\u5426\u586b\u5beb",level:3},{value:"\u6aa2\u67e5 Token \u662f\u5426\u6b63\u78ba",id:"\u6aa2\u67e5-token-\u662f\u5426\u6b63\u78ba",level:3},{value:"\u81ea\u5b9a\u7fa9\u56de\u50b3\u5167\u5bb9",id:"\u81ea\u5b9a\u7fa9\u56de\u50b3\u5167\u5bb9",level:2},{value:"\u4ee5\u975e json-server-cli \u65b9\u5f0f\u5efa\u7acb json-server",id:"\u4ee5\u975e-json-server-cli-\u65b9\u5f0f\u5efa\u7acb-json-server",level:2}],u={toc:i};function c(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,s.kt)("p",null,"\u5728\u4ecb\u7d39\u904e\u57fa\u672c\u61c9\u7528\u5f8c\uff0c\u63a5\u4e0b\u4f86\u8981\u4f86\u770b\u4e00\u4e9b\u9032\u968e\u7684\u61c9\u7528\u5167\u5bb9"),(0,s.kt)("h2",{id:"\u81ea\u5b9a\u7fa9\u8def\u7531"},"\u81ea\u5b9a\u7fa9\u8def\u7531"),(0,s.kt)("p",null,"\u96d6\u7136 json-server \u63d0\u4f9b\u4e86\u5f88\u65b9\u4fbf\u7684 CRUD \u8def\u5f91\u53ca\u5206\u9801\u3001\u7be9\u9078...\u7b49\u529f\u80fd\u3002\u4f46\u5be6\u969b\u7684 API \u4e26\u4e0d\u6703\u50cf\u9019\u6a23\u5728\u7db2\u5740\u4e0a\u64cd\u4f5c",(0,s.kt)("br",{parentName:"p"}),"\n","\u66f4\u53ef\u80fd\u5f97\u50cf\u4e0b\u65b9\u8868\u683c\u4e00\u6a23\u66f4\u7c21\u55ae\u76f4\u89ba\u5730\u544a\u8a34\u524d\u7aef\uff0c\u8981\u600e\u9ebc\u53bb\u505a api \u7684 request"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"\u5be6\u969b"),(0,s.kt)("th",{parentName:"tr",align:null},"json-sever"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"/api/posts/1"),(0,s.kt)("td",{parentName:"tr",align:null},"/posts/1")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"/posts/javascript"),(0,s.kt)("td",{parentName:"tr",align:null},"/posts?category=javascript")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"/posts/javascript/2"),(0,s.kt)("td",{parentName:"tr",align:null},"/posts?category=javascript&","_","page=2")))),(0,s.kt)("p",null,"\u6240\u4ee5 json-server \u4e5f\u63d0\u4f9b\u4e86\u4e00\u500b\u81ea\u5b9a\u7fa9\u8def\u7531\u7684\u529f\u80fd\u4f86\u9054\u6210\u4e0a\u8ff0\u7684\u554f\u984c\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{ "key": "value" } // key \u7684\u90e8\u5206\u70ba request \u7684\u7db2\u5740\uff0c value \u5247\u70ba\u8f49\u63db\u6210 json-server \u8a8d\u8b58\u7684\u7db2\u5740\n')),(0,s.kt)("p",null,"\u8209\u4f8b\u800c\u8a00"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{ "/api/*": "/$1" }\n')),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"$1")," \u7684\u505a\u6cd5\u5c31\u662f\u8b93\u7701\u7565\u6389\u4e0a\u5c64\u7684\u8def\u5f91\uff0c\u4f8b\u5982 ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/posts/")," \u50b3\u9032\u4f86\u7d93\u904e\u8655\u7406\u5c31\u6703\u8b8a\u6210 ",(0,s.kt)("inlineCode",{parentName:"p"},"/posts/")," \uff0c \u80fd\u5920\u7b26\u5408 json-server \u7684\u8def\u7531\u898f\u5247"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{ "/posts/:category": "/posts?category=:category" }\n')),(0,s.kt)("p",null,"\u9019\u908a\u6709\u4f7f\u7528\u5230\u52d5\u614b\u53c3\u6578\u7684\u529f\u80fd (\u5192\u865f",(0,s.kt)("inlineCode",{parentName:"p"},":category"),")\uff0c\u4ed6\u53ef\u4ee5\u8b93\u63a5\u6536\u5230\u7684\u53c3\u6578\u540c\u6642\u7528\u65bc ",(0,s.kt)("inlineCode",{parentName:"p"},"key")," \u53ca ",(0,s.kt)("inlineCode",{parentName:"p"},"value"),(0,s.kt)("br",{parentName:"p"}),"\n","\u4f8b\u5982 ",(0,s.kt)("code",null,"/posts/",(0,s.kt)("span",{style:{color:"blue"}},"javascript"))," \u7d93\u904e\u8655\u7406\u5c31\u8b8a\u6210 ",(0,s.kt)("code",null,"posts?category=",(0,s.kt)("span",{style:{color:"blue"}},"javascript"))," \uff0c\u85cd\u8272\u7684\u90e8\u5206\u5c31\u662f\u52d5\u614b\u53c3\u6578"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{ "/:resource/:category": "/:resource?category=:category" }\n')),(0,s.kt)("p",null,"\u800c\u52d5\u614b\u53c3\u6578\u4e5f\u53ef\u4ee5\u904b\u7528\u5728\u5927\u90e8\u5206\u898f\u5247\u90fd\u76f8\u540c\u4e0b\u7684\u8def\u7531\uff0c\u5c31\u53ef\u4ee5\u4e0d\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"posts")," \u5beb\u4e86\u4e00\u6b21\u7be9\u9078\u898f\u5247\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"todos")," \u518d\u5beb\u4e00\u6b21\uff0c ",(0,s.kt)("inlineCode",{parentName:"p"},"comments")," \u53c8\u5beb\u4e86\u4e00\u6b21"),(0,s.kt)("code",null,"/",(0,s.kt)("span",{style:{color:"green"}},"posts"),"/",(0,s.kt)("span",{style:{color:"blue"}},"javascript"))," \uff1a",(0,s.kt)("code",null,"/",(0,s.kt)("span",{style:{color:"green"}},"posts"),"?category=",(0,s.kt)("span",{style:{color:"blue"}},"javascript")),(0,s.kt)("br",null),(0,s.kt)("code",null,"/",(0,s.kt)("span",{style:{color:"green"}},"todos"),"/",(0,s.kt)("span",{style:{color:"blue"}},"works"))," \uff1a",(0,s.kt)("code",null,"/",(0,s.kt)("span",{style:{color:"green"}},"todos"),"?category=",(0,s.kt)("span",{style:{color:"blue"}},"works")),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)("p",null,"\u6700\u7d42\u6211\u5011\u628a\u6240\u6709\u7684\u689d\u4ef6\u90fd\u5f59\u6574\u5230 ",(0,s.kt)("inlineCode",{parentName:"p"},"route.json")," \u6a94\u6848\u4e0b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="route.json"',title:'"route.json"'},'{\n  "/api/*": "/$1",\n  "/posts/:category": "/posts?category=:category"\n}\n')),(0,s.kt)("p",null,"\u5b8c\u6210\u8a2d\u5b9a\u5f8c\uff0c\u555f\u52d5\u6642\u9700\u8981\u984d\u5916\u8a2d\u5b9a\u8def\u7531\u6a94"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"json-server --watch db.json -p 3001 -r route.json // -r \u5e36\u5165\u8def\u7531\u8a2d\u5b9a\u6a94\n")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"\u81ea\u5b9a\u7fa9\u8655\u7406"},"\u81ea\u5b9a\u7fa9\u8655\u7406"),(0,s.kt)("p",null,"\u96d6\u7136\u5728\u9001\u51fa\u53ca\u7372\u5f97\u8cc7\u6599\u4e0a\u6c92\u554f\u984c\uff0c\u4f46 ",(0,s.kt)("inlineCode",{parentName:"p"},"json-server")," \u56de\u50b3\u7684\u5167\u5bb9\u76f8\u5c0d\u4e5f\u7c21\u6613\u8a31\u591a\uff0c\u56de\u50b3\u9001\u51fa\u8cc7\u6599\u6216\u662f\u5931\u6557\u5247\u70ba\u7a7a\u7269\u4ef6 ",(0,s.kt)("inlineCode",{parentName:"p"},"{}"),(0,s.kt)("br",{parentName:"p"}),"\n","\u5be6\u969b\u61c9\u7528\u4e2d\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"API")," \u537b\u4e0d\u662f\u9019\u6a23\uff0c\u5f80\u5f80\u53ef\u80fd\u90fd\u6703\u5e36\u6709 ",(0,s.kt)("inlineCode",{parentName:"p"},"Respones Code")," \u4f86\u8b93\u524d\u7aef\u5224\u65b7\u662f\u5426\u6b63\u78ba\uff0c\u82e5\u5931\u6557\u5247\u8981\u986f\u793a\u5931\u6557\u8a0a\u606f"),(0,s.kt)("p",null,"\u800c\u5728\u50b3\u9001\u8cc7\u6599\u7684\u6642\u5019\u4e5f\u53ef\u80fd\u6703\u9047\u5230\u932f\u8aa4\u3002 \u8209\u4f8b\u4f86\u8aaa\uff1a"),(0,s.kt)("blockquote",null,(0,s.kt)("span",{style:{color:"#25c2a0"}}," \u5f8c\u7aef\u7684\u6b04\u4f4d\u5c1a\u672a\u586b\u5beb\u5b8c\u6574")," ",(0,s.kt)("br",null),"\u6210\u7acb\u8a02\u55ae\u6642\u672a\u5beb\u5165\u6536\u4ef6\u4eba\u8cc7\u6599\u5c0e\u81f4\u8a02\u55ae\u6210\u7acb\u5f8c\u4e0d\u77e5\u9053\u5bc4\u7d66\u8ab0\uff0c\u9019\u6642\u5019\u5f8c\u7aef\u5728\u6536\u5230\u8cc7\u6599\u6642\u5c31\u8981\u5148\u64cb\u4e0b\u63d0\u9192\uff0c\u800c\u4e0d\u662f\u7e7c\u7e8c\u6210\u7acb\u8a02\u55ae\u3002"),(0,s.kt)("p",null,"\u9019\u6642\u5019\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"json-server")," \u4e0a\u6a21\u64ec\u5c31\u53ef\u4ee5\u4f7f\u7528\u5230 ",(0,s.kt)("inlineCode",{parentName:"p"},"middleware")," \u7684\u529f\u80fd"),(0,s.kt)("p",null,"middleware \u7528\u4f86\u81ea\u5b9a\u7fa9 ",(0,s.kt)("inlineCode",{parentName:"p"},"json-server")," \u5728\u6536\u5230 ",(0,s.kt)("inlineCode",{parentName:"p"},"request")," \u5f8c\uff0c\u4fee\u6539 ",(0,s.kt)("inlineCode",{parentName:"p"},"db.json")," \u524d\u4e2d\u9593\u505a\u7684\u4e8b\u60c5\uff0c\u4f8b\u5982\u6b04\u4f4d\u3001Token \u6aa2\u67e5\u662f\u5426\u6b63\u78ba... \u7b49\u7b49\u3002"),(0,s.kt)("p",null,"\u76f4\u63a5\u5efa\u7acb\u4e00\u652f ",(0,s.kt)("inlineCode",{parentName:"p"},"Posts.js")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=Posts.js",title:"Posts.js"},"// req : request \u904e\u4f86\u7684\u8cc7\u6599 (header token & body \u7684 JSON \u8cc7\u6599\u90fd\u5728\u9019\u88e1)\n// res : response \u56de\u53bb\u7684\u8cc7\u6599\n// next : json-server \u7684 function\uff0c\u5728\u5b8c\u6210\u81ea\u5b9a\u7fa9 function \u5f8c\u57f7\u884c\u8b93\u5f8c\u7e8c\u6d41\u7a0b\u7e7c\u7e8c\u57f7\u884c\nmodule.exports = (req, res, next) => {\n  // \u8981\u505a\u7684\u4e8b\u60c5 ...\n};\n")),(0,s.kt)("h3",{id:"\u6aa2\u67e5\u6b04\u4f4d\u662f\u5426\u586b\u5beb"},"\u6aa2\u67e5\u6b04\u4f4d\u662f\u5426\u586b\u5beb"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=Posts.js",title:"Posts.js"},'module.exports = (req, res, next) => {\n  let data = req.body; // \u53d6\u5f97\u9001\u4f86\u7684 JSON \u8cc7\u6599\n  if (req.url.indexOf("/posts/") >= 0 && !data.title) {\n    // \u82e5 request \u70ba posts \u53ca body \u672a\u6709 title \u8cc7\u6599\n    res.json({ success: false, message: "\u672a\u8f38\u5165\u6a19\u984c\u5167\u5bb9" }); //\u56de\u50b3\u932f\u8aa4\u8a0a\u606f\n    return; // \u9019\u908a\u8981\u8a18\u5f97\u7d42\u6b62 function\uff0c\u4e0d\u7136\u9084\u662f\u6703\u505a db.json \u8cc7\u6599\u4fee\u6539\n  }\n  next(); // \u82e5\u6709 title \u8cc7\u6599\u5247\u7e7c\u7e8c\u5f80\u4e0b\u8d70\uff0c\u65b0\u589e post\uff0c\u82e5\u6c92\u6709\u57f7\u884c next \u6703\u6c92\u6709\u56de\u61c9\u800c timeout\n};\n')),(0,s.kt)("p",null,"\u5b8c\u6210 ",(0,s.kt)("inlineCode",{parentName:"p"},"middleware")," \u7684\u5167\u5bb9\u5f8c\u8981\u6211\u5011\u91cd\u555f ",(0,s.kt)("inlineCode",{parentName:"p"},"json-server"),"\uff0c\u4e26\u544a\u8a34\u5b83\u6211\u5011\u8981\u4f7f\u7528\u81ea\u5df1\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"middleware")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"json-server --watch db.json -p 3001 -m Posts.js // -m \u53ef\u5e36\u5165\u591a\u500b\u6a94\u6848 ex: -m Posts.js Users.js\n")),(0,s.kt)("p",null,"\u9019\u6642\u5019\u56de ",(0,s.kt)("inlineCode",{parentName:"p"},"postman")," \u91cd\u65b0 ",(0,s.kt)("inlineCode",{parentName:"p"},"POST")," \u4e00\u7b46\u65b0\u7684 posts\uff0c\u4f46\u4e0d\u50b3\u9001 ",(0,s.kt)("inlineCode",{parentName:"p"},"title"),"\uff0c\u9001\u51fa\u5f8c\u5247\u56de\u50b3\u932f\u8aa4\u8a0a\u606f\uff0c\u9019\u6a23\u5c31\u6210\u529f\u505a\u5230\u6aa2\u67e5 ",(0,s.kt)("inlineCode",{parentName:"p"},"request")," \u9019\u6bb5\u4e86"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"postman POST Error",src:n(481).Z,width:"1102",height:"293"})),(0,s.kt)("h3",{id:"\u6aa2\u67e5-token-\u662f\u5426\u6b63\u78ba"},"\u6aa2\u67e5 Token \u662f\u5426\u6b63\u78ba"),(0,s.kt)("p",null,"\u800c\u9664\u4e86\u6b04\u4f4d\u6aa2\u67e5\u5916\uff0c\u6709\u4e9b\u9700\u8981\u767b\u5165\u6b0a\u9650\u624d\u80fd\u505a\u7684\u4e8b\uff0c\u4f8b\u5982\u65b0\u589e\u6587\u7ae0\u3001\u52a0\u5165\u8cfc\u7269\u8eca\u3001\u53d6\u5f97\u8cfc\u7269\u8eca\u9805\u76ee\u7b49\uff0c\u90fd\u6703\u53bb\u505a\u984d\u5916\u7684\u6aa2\u67e5",(0,s.kt)("br",{parentName:"p"}),"\n","\u6aa2\u67e5\u7684\u5167\u5bb9\u53ef\u4ee5\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"cookie")," \u6216\u662f ",(0,s.kt)("inlineCode",{parentName:"p"},"JWT")," \u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"Token"),"\uff0c\u9019\u908a\u8209\u4f8b\u800c\u8a00\u8981\u6aa2\u67e5\u662f\u5426\u6709\u5e36\u5165 ",(0,s.kt)("inlineCode",{parentName:"p"},"Token")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=Posts.js",title:"Posts.js"},'module.exports = (req, res, next) => {\n  const token = req.header.authorization;\n\n  if ((req.url.indexOf("/posts/") >= 0 && !token) || !verifyToken(token)) {\n    // \u82e5 request \u70ba posts \u53ca\u672a\u593e\u5e36 authorization \u8cc7\u6599\u6216\u9a57\u8b49\u672a\u901a\u904e\n    res.status(401).json({ success: false, message: "Token \u932f\u8aa4" }); // status \u53ef\u4ee5\u8a2d\u5b9a\u56de\u50b3\u7684 status code\n  }\n\n  next(); // \u82e5\u6709 Token \u53ca\u9a57\u8b49\u6210\u529f\uff0c\u65b0\u589e post\n};\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"postman POST Error",src:n(6163).Z,width:"1101",height:"309"})),(0,s.kt)("p",null,"\u9019\u6642\u5019\u53ef\u4ee5\u770b\u5230\u9664\u4e86 ",(0,s.kt)("inlineCode",{parentName:"p"},"message")," \u986f\u793a\u7684\u5167\u5bb9\u4e0d\u4e00\u6a23\u5916\uff0c\u4e0a\u65b9\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"200")," \u4e5f\u8b8a\u6210 ",(0,s.kt)("inlineCode",{parentName:"p"},"401 Unauthorized")),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"\u5ef6\u4f38\u95b1\u8b80\uff1a ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"},"HTTP response status codes"),"\uff0c\u65bc\u4e0d\u540c\u7684\u60c5\u5883\u56de\u50b3\u4e0d\u540c\u7684 status code")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"\u81ea\u5b9a\u7fa9\u56de\u50b3\u5167\u5bb9"},"\u81ea\u5b9a\u7fa9\u56de\u50b3\u5167\u5bb9"),(0,s.kt)("p",null,"\u525b\u525b\u5df2\u7d93\u4ecb\u7d39\u904e\u81ea\u5b9a\u7fa9\u8655\u7406\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"middleware"),"\uff0c\u63a5\u4e0b\u4f86\u5247\u662f ",(0,s.kt)("inlineCode",{parentName:"p"},"response")," \u7684\u90e8\u4efd",(0,s.kt)("br",{parentName:"p"}),"\n","\u5f9e ",(0,s.kt)("a",{parentName:"p",href:"/Web/docs/Json-Server/intro#get---%E5%8F%96%E5%BE%97%E8%B3%87%E6%96%99"},"\u521d\u5165 json-server")," \u4e2d\u6211\u5011\u5df2\u7d93\u77e5\u9053\uff0cjson-server \u6703\u56de\u50b3\u5c0d\u61c9\u7684 object \u7d66\u6211\u5011",(0,s.kt)("br",{parentName:"p"}),"\n","\u525b\u525b\u5728\u932f\u8aa4\u8655\u7406\u9019\u6bb5\u56de\u50b3\u5167\u5bb9\u662f\u5e36\u6709 ",(0,s.kt)("inlineCode",{parentName:"p"},"success")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"message")," \u7684 object\uff0c\u82e5\u6210\u529f\u6642\u6c92\u6709 ",(0,s.kt)("inlineCode",{parentName:"p"},"success")," \u7684\u8a71\u524d\u7aef\u6703\u6bd4\u8f03\u96e3\u5224\u65b7\u5230\u5e95\u6709\u6c92\u6709\u6210\u529f"),(0,s.kt)("p",null,"\u4e0d\u904e\u4ee5\u4e0a\u4f7f\u7528\u7684\u90fd\u662f ",(0,s.kt)("inlineCode",{parentName:"p"},"json-server-cli")," \u4e2d\u7684\u6307\u4ee4\u5feb\u901f\u53bb\u5efa\u7acb\u74b0\u5883\uff0c\u5982\u679c\u8981\u505a\u5230\u81ea\u5b9a\u7fa9\u56de\u50b3\u7684\u8a71\u5c31\u8981\u7528\u53e6\u4e00\u500b\u65b9\u5f0f\u4f86\u5efa\u9020\u9019\u500b\u74b0\u5883\u3002"),(0,s.kt)("h2",{id:"\u4ee5\u975e-json-server-cli-\u65b9\u5f0f\u5efa\u7acb-json-server"},"\u4ee5\u975e json-server-cli \u65b9\u5f0f\u5efa\u7acb json-server"),(0,s.kt)("p",null,"\u9996\u5148\u5148\u65b0\u589e\u4e00\u652f ",(0,s.kt)("inlineCode",{parentName:"p"},"Server.js")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=Server.js",title:"Server.js"},'const jsonServer = require("json-server");\nconst server = jsonServer.create();\nconst router = jsonServer.router("db.json");\nconst PORT = 3001;\n\nserver.use(jsonServer.defaults()); // \u8f09\u5165 json-server \u7684\u57fa\u790e\u8a2d\u5b9a\n\n// \u5c07 middleware \u76f4\u63a5\u5beb\u9032\u4f86\nserver.use(jsonServer.bodyParser); // \u8981 use(jsonServer.bodyParser) \u624d\u80fd\u53d6\u5f97 request \u7684\u8cc7\u6599\n\n// \u9084\u53ef\u4ee5\u4f7f\u7528 server.get("...") server.put("...") server.patch("...") server.delete("...")\nserver.post("/posts/", (req, res, next) => {\n  // \u8207\u525b\u525b\u984d\u5916\u62c6\u51fa\u53bb\u7684 Posts \u4e00\u6a23\uff0c\u53ea\u4e0d\u904e\u5c31\u4e0d\u7528\u7279\u5730\u5224\u65b7 req.url\n  let data = req.body;\n  if (req.url.indexOf("/posts/") >= 0 && !data.title) {\n    res.json({ success: false, message: "\u672a\u8f38\u5165\u6a19\u984c\u5167\u5bb9" });\n    return;\n  }\n  next(); // \u4e00\u6a23\u8981\u8a18\u5f97 next \u4e0d\u7136\u6703\u5361\u5728\u9019\u88e1;\n});\n\nserver.use(\n  jsonServer.rewriter({\n    // \u9019\u908a\u8a2d\u5b9a\u81ea\u5b9a\u7fa9\u8def\u7531\uff0c\u8981\u5728 server.use(router) \u524d\n    "/api/*": "/$1",\n    "/posts/:category": "/posts?category=:category",\n  })\n);\n\nserver.use(router); // use(router) \u8981\u653e\u5728 middleware \u5f8c\u9762\u624d\u6703\u57f7\u884c middleware\n\n// \u9019\u6bb5\u662f\u6700\u7d42 response \u7684\u8986\u5beb\uff0c\u9664\u4e86\u539f\u672c\u7684\u8cc7\u6599\u5916\u9084\u6703\u65b0\u589e success: true;\nrouter.render = (req, res) => {\n  res.json({\n    success: true,\n    message: res.locals.data,\n  });\n};\n\nserver.listen(PORT, () => {\n  // \u7b49\u540c\u65bc\u525b\u525b json-server  db.json -p 3001\n  console.log(`JSON Server is running at http://localhost:${PORT} ~`);\n});\n')),(0,s.kt)("p",null,"\u91cd\u65b0\u57f7\u884c ",(0,s.kt)("inlineCode",{parentName:"p"},"json-server")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \u4ee5 node \u65b9\u5f0f\u57f7\u884c\u800c\u975e json-server ...\nnode Server\n// JSON Server is running at http://localhost:3001 ~\n")),(0,s.kt)("p",null,"\u9019\u6642\u5019\u518d\u4f86\u91cd\u65b0\u767c\u9001 ",(0,s.kt)("inlineCode",{parentName:"p"},"request"),"\uff0c\u767b\u6123~ \u5c31\u80fd\u770b\u5230\u9019\u6b21\u88ab\u8986\u5beb\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"response"),"\n",(0,s.kt)("img",{alt:"rewrite response",src:n(1551).Z,width:"1490",height:"526"})),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"\u4e0d\u904e\u524d\u63d0\u5c31\u662f\u5728\u81ea\u5b9a\u7fa9\u8655\u7406 middleware \u9019\u584a\u8981\u8655\u7406\u597d\uff0c\u4e0d\u7136\u90fd\u6703\u51fa\u73fe suceess : true")))}c.isMDXComponent=!0},481:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/postman-4-c63eb73d45ed8b7516707502883ead8e.jpg"},6163:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/postman-5-d74ee6393cba66c8eca0c0bb40a31092.jpg"},1551:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/postman-6-6eb6f22f476b6fadbfa4f7dec1a3d2b8.JPG"}}]);