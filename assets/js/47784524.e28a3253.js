"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[504],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={slug:"ReactHook_Form",title:"React Hook-Form \u9001\u51fa\u4e8b\u4ef6 VS \u591a useState",authors:"wj",date:"2022-08-09T10:00",tags:["React Hook"]},c=void 0,s={permalink:"/Web/blog/ReactHook_Form",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/20220809_ReactHook_Form.md",source:"@site/blog/20220809_ReactHook_Form.md",title:"React Hook-Form \u9001\u51fa\u4e8b\u4ef6 VS \u591a useState",description:"\u524d\u8a00",date:"2022-08-09T10:00:00.000Z",formattedDate:"August 9, 2022",tags:[{label:"React Hook",permalink:"/Web/blog/tags/react-hook"}],readingTime:2.73,hasTruncateMarker:!0,authors:[{name:"WeiJie",imageURL:"./photo.jpg",key:"wj"}],frontMatter:{slug:"ReactHook_Form",title:"React Hook-Form \u9001\u51fa\u4e8b\u4ef6 VS \u591a useState",authors:"wj",date:"2022-08-09T10:00",tags:["React Hook"]},prevItem:{title:"\u516d\u89d2\u5b78\u9662 React \u7dda\u4e0a\u8b80\u66f8\u6703\u5b78\u7fd2\u5fc3\u5f97",permalink:"/Web/blog/HexSchool_ReactStudy"},nextItem:{title:"\u7b46\u8a18--\u5e8f",permalink:"/Web/blog/first-blog-post"}},l={authorsImageUrls:[n(825).Z]},i=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2}],p={toc:i};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u6700\u8fd1\u5728\u5b78\u7fd2 React Hook \u4e2d\u6709\u767c\u73fe\uff0c\u5728\u88fd\u4f5c\u8a3b\u518a\u8868\u55ae\u9019\u7a2e\u591a Input \u7684\u9801\u9762\u6642"),(0,o.kt)("p",null,"\u5f80\u5f80\u5c31\u9700\u8981\u5ba3\u544a\u8a31\u591a\u8b8a\u6578\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"useState()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const [account, setAccount] = useState('')\nconst [password, setPassword] = useState('')\nconst [confirmPassword, setConfirmPassword] = useState('')\nconst [name, setName] = useState('')\nconst [email, setEmail] = useState('')\nconst [phone, setPhone] = useState('')\n\nreturn {(\n    <>\n        <input value={account} placeholder=\"account\"\n            onChange={e => setAccount(e.target.value)} />\n        <input value={password} placeholder=\"password\"\n            onChange={e => setPassword(e.target.value)} />\n        <input value={confirmPassword} placeholder=\"password again\"\n            onChange={e => setConfirmPassword(e.target.value)} />\n    </>\n)}\n...\n")),(0,o.kt)("p",null,"\u5982\u679c\u53c8\u6709\u5730\u5740\u3001\u8f09\u5177\u3001\u611b\u5fc3\u78bc\u7b49\u7b49\u96fb\u5546\u7528\u7684\u6b04\u4f4d\uff0c\u8c48\u4e0d\u662f\u5149\u9019\u4e9b\u6771\u897f\u5c31\u5ba3\u544a\u4e86\u4e00\u5806\u8b8a\u6578",(0,o.kt)("br",{parentName:"p"}),"\n","\u5beb\u4e86\u4e00\u5806 ",(0,o.kt)("inlineCode",{parentName:"p"},"onChange")," \u4e8b\u4ef6\u4f7f\u7528\u4e0d\u540c\u7684 methods \u53bb\u4fee\u6539\u503c",(0,o.kt)("br",{parentName:"p"}),"\n","\u7576\u6709\u4e86\u9019\u4e9b\u60f3\u6cd5\u4e4b\u5f8c\u5c31\u958b\u59cb\u518d\u60f3\u6709\u751a\u9ebc\u65b9\u6cd5\u53ef\u4ee5\u7c21\u5316\uff0c\u518d\u901b ",(0,o.kt)("inlineCode",{parentName:"p"},"DEV")," \u7684\u6642\u5019\u5c31\u767c\u73fe\u4e86\u9019\u7bc7"))}u.isMDXComponent=!0},825:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/photo-f8eace3b558729e0df62b7c16882ba4d.jpg"}}]);