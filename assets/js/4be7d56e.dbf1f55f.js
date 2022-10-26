"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,l(l({ref:t},i),{},{components:n})):a.createElement(f,l({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={slug:"ReactHook_Form",title:"React Hook-Form \u9001\u51fa\u4e8b\u4ef6 VS \u591a useState",authors:"wj",date:"2022-08-09T10:00",tags:["React Hook"]},l=void 0,p={permalink:"/Web/blog/ReactHook_Form",source:"@site/blog/20220809_ReactHook_Form.md",title:"React Hook-Form \u9001\u51fa\u4e8b\u4ef6 VS \u591a useState",description:"\u524d\u8a00",date:"2022-08-09T10:00:00.000Z",formattedDate:"August 9, 2022",tags:[{label:"React Hook",permalink:"/Web/blog/tags/react-hook"}],readingTime:2.73,hasTruncateMarker:!0,authors:[{name:"WeiJie",imageURL:"./photo.jpg",key:"wj"}],frontMatter:{slug:"ReactHook_Form",title:"React Hook-Form \u9001\u51fa\u4e8b\u4ef6 VS \u591a useState",authors:"wj",date:"2022-08-09T10:00",tags:["React Hook"]},prevItem:{title:"\u516d\u89d2\u5b78\u9662 React \u7dda\u4e0a\u8b80\u66f8\u6703\u5b78\u7fd2\u5fc3\u5f97",permalink:"/Web/blog/HexSchool_ReactStudy"},nextItem:{title:"\u7b46\u8a18--\u5e8f",permalink:"/Web/blog/first-blog-post"}},s={authorsImageUrls:[n(825).Z]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}],i={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,"\u6700\u8fd1\u5728\u5b78\u7fd2 React Hook \u4e2d\u6709\u767c\u73fe\uff0c\u5728\u88fd\u4f5c\u8a3b\u518a\u8868\u55ae\u9019\u7a2e\u591a Input \u7684\u9801\u9762\u6642"),(0,r.kt)("p",null,"\u5f80\u5f80\u5c31\u9700\u8981\u5ba3\u544a\u8a31\u591a\u8b8a\u6578\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"useState()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const [account, setAccount] = useState('')\nconst [password, setPassword] = useState('')\nconst [confirmPassword, setConfirmPassword] = useState('')\nconst [name, setName] = useState('')\nconst [email, setEmail] = useState('')\nconst [phone, setPhone] = useState('')\n\nreturn {(\n    <>\n        <input value={account} placeholder=\"account\"\n            onChange={e => setAccount(e.target.value)} />\n        <input value={password} placeholder=\"password\"\n            onChange={e => setPassword(e.target.value)} />\n        <input value={confirmPassword} placeholder=\"password again\"\n            onChange={e => setConfirmPassword(e.target.value)} />\n    </>\n)}\n...\n")),(0,r.kt)("p",null,"\u5982\u679c\u53c8\u6709\u5730\u5740\u3001\u8f09\u5177\u3001\u611b\u5fc3\u78bc\u7b49\u7b49\u96fb\u5546\u7528\u7684\u6b04\u4f4d\uff0c\u8c48\u4e0d\u662f\u5149\u9019\u4e9b\u6771\u897f\u5c31\u5ba3\u544a\u4e86\u4e00\u5806\u8b8a\u6578",(0,r.kt)("br",{parentName:"p"}),"\n","\u5beb\u4e86\u4e00\u5806 ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," \u4e8b\u4ef6\u4f7f\u7528\u4e0d\u540c\u7684 methods \u53bb\u4fee\u6539\u503c",(0,r.kt)("br",{parentName:"p"}),"\n","\u7576\u6709\u4e86\u9019\u4e9b\u60f3\u6cd5\u4e4b\u5f8c\u5c31\u958b\u59cb\u518d\u60f3\u6709\u751a\u9ebc\u65b9\u6cd5\u53ef\u4ee5\u7c21\u5316\uff0c\u518d\u901b ",(0,r.kt)("inlineCode",{parentName:"p"},"DEV")," \u7684\u6642\u5019\u5c31\u767c\u73fe\u4e86\u9019\u7bc7"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://dev.to/kuvambhardwaj/i-was-creating-forms-the-wrong-way-all-along-in-reactjs-hl3"},"I was creating Forms the wrong way all along in React.js \ud83e\udd14")),(0,r.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,r.kt)("p",null,"\u800c\u4f5c\u8005 Kuvam Bhardwaj \u63d0\u51fa\u7684\u65b9\u6cd5\u5c31\u662f\u5229\u7528 Html Form \u7684\u539f\u751f\u65b9\u6cd5\u4f86\u5feb\u901f\u53d6\u5f97\u9019\u4e9b\u6b04\u4f4d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const submitForm = (e) => {\n  e.preventDefault();\n  const formData = new FormData(e.target);\n  const inputObject = Object.fromEntries(formData);\n};\n\n<form onSubmit={submitForm}>\n  <input name="account" placeholder="account" />\n  <input name="password" placeholder="password" />\n  <input name="confirmPassword" placeholder="confirmPassword" />\n  <button type="submit">\u9001\u51fa</button>\n</form>;\n')),(0,r.kt)("p",null,"\u8207\u4e0a\u9762\u4e0d\u540c\u7684\u662f\uff0c\u6c92\u6709\u7279\u5225\u53bb\u91dd\u5c0d ",(0,r.kt)("inlineCode",{parentName:"p"},"Input")," \u5ba3\u544a\u8b8a\u6578\uff0c\u6240\u4ee5\u4e5f\u4e0d\u9700\u8981\u6bcf\u500b\u6b04\u4f4d\u90fd\u53bb\u7d81\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," \u4e8b\u4ef6\uff0c\u4f46\u9700\u8981\u5b9a\u7fa9 ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," \u53bb\u7372\u5f97"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"form")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"onSubmit")," \u4e8b\u4ef6\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"e.target")," \u662f\u6574\u500b ",(0,r.kt)("inlineCode",{parentName:"p"},"form")," \u8868\u55ae\u7684\u5143\u7d20"),(0,r.kt)("p",null,"\u518d\u4f86\u5247\u662f\u4f7f\u7528 js \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"FormData()")," \u8f49\u63db\u70ba\u8868\u55ae\u7269\u4ef6",(0,r.kt)("br",{parentName:"p"}),"\n","\u518d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.fromEntriesI()")," \u5c07\u8868\u55ae\u7269\u4ef6\u8f49\u63db\u70ba\u7269\u4ef6",(0,r.kt)("br",{parentName:"p"}),"\n","\u9019\u500b\u7269\u4ef6\u5c31\u662f\u6240\u6709\u6b04\u4f4d\u586b\u5165\u7684 Value \u4e86\uff0c\u4e5f\u5c31\u662f\u4e0b\u9762\u7684 inputObject "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const formData = new FormData(e.target);\nconsole.log(formData);\n// FormData {append: \u0192 append(), delete: \u0192 delete(),  get: \u0192 get(), \n//           getAll: \u0192 getAll(), has: \u0192 has()\u2026}\nconst inputObject = Object.fromEntries(formData);\nconsole.log(inputObject);\n// {\n//   account: "\u8f38\u5165\u7684 account", \n//   password: "\u8f38\u5165\u7684 password", \n//   confirmPassword: "\u8f38\u5165\u7684 confirmPassword"\n// }\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/formdata-forked-ll8jbs?file=/src/App.js"},"\u539f\u6587\u4f5c\u8005\u63d0\u4f9b\u7684 Sandbox"),(0,r.kt)("br",{parentName:"p"}),"\n","\u53ef\u4ee5\u900f\u904e\u539f\u6587\u4f5c\u8005\u63d0\u4f9b\u7684 Sandbox \u53bb\u5be6\u969b\u611f\u53d7\u4e00\u4e0b\u5169\u500b\u5beb\u6cd5\u7684\u5dee\u7570"),(0,r.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"onSubmit")," \u7684\u65b9\u6cd5\u96d6\u7136\u4fbf\u5229\uff0c\u4f46\u4e5f\u50c5\u80fd\u7528\u4f86\u53d6\u5f97\u6240\u6709\u503c\uff0c\u82e5\u662f\u4f7f\u7528\u60c5\u5883\u662f\u9700\u8981\u6539\u8b8a ",(0,r.kt)("inlineCode",{parentName:"p"},"Input")," \u503c\u7684\u8a71",(0,r.kt)("br",{parentName:"p"}),"\n","\u9084\u662f\u5f97\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," \u91cd\u65b0\u6e32\u67d3\u7684\u65b9\u5f0f\u4f86\u9054\u6210\uff0c\u6240\u4ee5\u9084\u662f\u9700\u8981\u8a55\u4f30\u4e00\u4e0b\u4f7f\u7528\u60c5\u5883"))}m.isMDXComponent=!0},825:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/photo-f8eace3b558729e0df62b7c16882ba4d.jpg"}}]);