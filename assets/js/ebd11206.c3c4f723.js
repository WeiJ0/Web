"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3393],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),b=a,f=d["".concat(i,".").concat(b)]||d[b]||s[b]||l;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8706:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={title:"Tribonacci Sequence",slug:"/6kyu/556deca17c58da83c00002db",tags:["6kyu"]},o=void 0,c={unversionedId:"6kyu/Tribonacci-Sequence",id:"6kyu/Tribonacci-Sequence",title:"Tribonacci Sequence",description:"\u7db2\u5740",source:"@site/codewars/6kyu/Tribonacci-Sequence.md",sourceDirName:"6kyu",slug:"/6kyu/556deca17c58da83c00002db",permalink:"/Web/codewars/6kyu/556deca17c58da83c00002db",draft:!1,tags:[{label:"6kyu",permalink:"/Web/codewars/tags/6-kyu"}],version:"current",lastUpdatedAt:1666322748,formattedLastUpdatedAt:"Oct 21, 2022",frontMatter:{title:"Tribonacci Sequence",slug:"/6kyu/556deca17c58da83c00002db",tags:["6kyu"]},sidebar:"tutorialSidebar",previous:{title:"Sort the oddSort the odd",permalink:"/Web/codewars/6kyu/578aa45ee9fd15ff4600090d"},next:{title:"Who won the election?",permalink:"/Web/codewars/6kyu/554910d77a3582bbe300009c"}},i={},p=[{value:"\u7db2\u5740",id:"\u7db2\u5740",level:2},{value:"\u984c\u76ee\u60c5\u5883",id:"\u984c\u76ee\u60c5\u5883",level:2},{value:"\u89e3\u984c\u601d\u8def",id:"\u89e3\u984c\u601d\u8def",level:2},{value:"\u77e5\u8b58\u9ede",id:"\u77e5\u8b58\u9ede",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7db2\u5740"},"\u7db2\u5740"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.codewars.com/kata/556deca17c58da83c00002db/"},"Tribonacci Sequence")),(0,a.kt)("h2",{id:"\u984c\u76ee\u60c5\u5883"},"\u984c\u76ee\u60c5\u5883"),(0,a.kt)("p",null,"\u984c\u76ee\u6703\u50b3\u4f86\u5169\u500b\u53c3\u6578\uff0c\u5206\u5225\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"\u8d77\u59cb\u6578\u5b57\u9663\u5217"),"\u53ca",(0,a.kt)("inlineCode",{parentName:"p"},"\u56de\u50b3\u9663\u5217\u7e3d\u9577\u5ea6"),(0,a.kt)("br",{parentName:"p"}),"\n","\u89e3\u6cd5\u548c Fibonacci (\u8cbb\u5f0f\u6578\u5217) \u6709\u9ede\u76f8\u4f3c\uff0c\u53ea\u662f Tribonacci \u8b8a\u6210\u53d6\u4e09\u6578\u76f8\u52a0\uff0c",(0,a.kt)("br",{parentName:"p"}),"\n","\u4f8b\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"([1,1,1], 10), [1,1,1,3,5,9,17,31,57,105]\n\n\u8d77\u59cb\u70ba [1,1,1]\uff0c\u518d\u4f86\u70ba (1+1+1) 3\uff0c\u518d\u4f86\u70ba (1+1+3) 5 ... \u4ee5\u6b64\u985e\u63a8\n")),(0,a.kt)("p",null,"\u6703\u51fa\u73fe\u4f8b\u5916\u72c0\u6cc1\u70ba\u9577\u5ea6\u70ba 0 \u5247\u8fd4\u56de\u7a7a\u5b57\u4e32"),(0,a.kt)("h2",{id:"\u89e3\u984c\u601d\u8def"},"\u89e3\u984c\u601d\u8def"),(0,a.kt)("p",null,"\u9019\u984c\u6211\u7684\u4f5c\u6cd5\u662f\u5148\u628a\u7528\u8ff4\u5708\u53bb ",(0,a.kt)("inlineCode",{parentName:"p"},"push()")," \u524d\u9762\u4e09\u500b\u503c\u5f97\u52a0\u7e3d\uff0c\u76f4\u5230\u6eff\u8db3\u984c\u76ee\u9577\u5ea6\u5c31\u5b8c\u6210\u4e86",(0,a.kt)("br",{parentName:"p"}),"\n","\u4f8b\u5916\u72c0\u6cc1\u7684\u90e8\u5206\u4e2d\u9593\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"filter()")," \u53bb\u6392\u9664\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u8655\u7406\u6389\u50cf\u53ea\u8981\u8f38\u51fa 1 2 \u9019\u7a2e\u5c0f\u65bc\u539f\u59cb\u8cc7\u6599 3 \u7684\u9663\u5217"),(0,a.kt)("p",null,"\u518d\u4f86\u5c31\u662f\u7528 for \u8ff4\u5708\uff0c\u76f4\u63a5\u5f9e\u984c\u76ee\u7d66\u7684\u539f\u59cb\u9663\u5217\u5f8c\u4e00\u78bc\u958b\u59cb\u8dd1\uff0c\u65b0\u589e\u524d\u4e09\u500b\u6578\u5b57\u52a0\u7e3d\u7684\u6578\u9032\u53bb\u9663\u5217\uff0c\u6700\u5f8c\u518d\u56de\u50b3\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function tribonacci(signature, n) {\n  let result = [];\n  result = result.concat(signature); //\u628a\u984c\u76ee\u7684\u539f\u59cb\u6578\u5b57\u5012\u9032\u53bb result\n\n  if (result.length > n) return result.filter((item, index) => index < n);\n\n  for (let i = result.length; i < n; i++) {\n    result.push(result[i - 2] + result[i - 1] + result[i - 3]);\n  }\n  return result;\n}\n")),(0,a.kt)("p",null,"\u9084\u6709\u4e00\u500b\u4f5c\u6cd5\u662f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"slice(-3)")," \u8ca0\u6578\u503c\u6703\u53d6\u5012\u6578\u5f8c\u4e09\u500b\u6578\u5b57\u7684\u4f5c\u6cd5\u4f5c\u52a0\u7e3d\uff0c\u518d\u628a\u5b83 ",(0,a.kt)("inlineCode",{parentName:"p"},"push()")," \u9032\u53bb result \u4e5f\u53ef\u4ee5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"for (let i = result.length; i < n; i++) {\n  result.push(result.slice(-3).reduce((a, b) => a + b));\n}\n")),(0,a.kt)("h2",{id:"\u77e5\u8b58\u9ede"},"\u77e5\u8b58\u9ede"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat"},"Array.prototype.concat()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"},"Array.prototype.filter()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"},"Array.prototype.push()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"},"Array.prototype.slice()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"},"Array.prototype.reduce()"))))}s.isMDXComponent=!0}}]);