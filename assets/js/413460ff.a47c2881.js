"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1124],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>b});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),u=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return a.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},s=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(t),b=n,y=s["".concat(p,".").concat(b)]||s[b]||m[b]||l;return t?a.createElement(y,i(i({ref:r},c),{},{components:t})):a.createElement(y,i({ref:r},c))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=s;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6770:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=t(7462),n=(t(7294),t(3905));const l={title:"Minimize Sum Of Array (Array Series #1)",slug:"/7kuy/5a523566b3bfa84c2e00010b",keyword:"Minimize Sum Of Array (Array Series",tags:["7kuy"]},i=void 0,o={unversionedId:"7kyu/5a523566b3bfa84c2e00010b",id:"7kyu/5a523566b3bfa84c2e00010b",title:"Minimize Sum Of Array (Array Series #1)",description:"\u7db2\u5740",source:"@site/codewars/7kyu/5a523566b3bfa84c2e00010b.md",sourceDirName:"7kyu",slug:"/7kuy/5a523566b3bfa84c2e00010b",permalink:"/Web/codewars/7kuy/5a523566b3bfa84c2e00010b",draft:!1,tags:[{label:"7kuy",permalink:"/Web/codewars/tags/7-kuy"}],version:"current",frontMatter:{title:"Minimize Sum Of Array (Array Series #1)",slug:"/7kuy/5a523566b3bfa84c2e00010b",keyword:"Minimize Sum Of Array (Array Series",tags:["7kuy"]},sidebar:"tutorialSidebar",previous:{title:"Arrh, grabscrab!",permalink:"/Web/codewars/6kuy/52b305bec65ea40fe90007a7"}},p={},u=[{value:"\u7db2\u5740",id:"\u7db2\u5740",level:2},{value:"\u984c\u76ee\u60c5\u5883",id:"\u984c\u76ee\u60c5\u5883",level:2},{value:"\u89e3\u984c\u601d\u8def",id:"\u89e3\u984c\u601d\u8def",level:2},{value:"\u77e5\u8b58\u9ede",id:"\u77e5\u8b58\u9ede",level:2}],c={toc:u};function m(e){let{components:r,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,l,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u7db2\u5740"},"\u7db2\u5740"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.codewars.com/kata/5a523566b3bfa84c2e00010b"},"Minimize Sum Of Array (Array Series #1)")),(0,n.kt)("h2",{id:"\u984c\u76ee\u60c5\u5883"},"\u984c\u76ee\u60c5\u5883"),(0,n.kt)("p",null,"\u6703\u50b3\u4e00\u5165\u4e00\u9663\u5217\u53c3\u6578\uff0c\u53c3\u6578\u5fc5\u7136\u6703\u662f",(0,n.kt)("strong",{parentName:"p"},"\u5076\u6578"),"\uff0c\u4f75\u5169\u5169\u76f8\u4e58\u52a0\u7e3d\u627e\u51fa\u7d44\u5408\u4e2d\u7684\u6700\u5c0f\u503c\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"minSum([5,4,2,3]) ==> return (22) \n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"5x2 + 3x4 = 22")," \u70ba\u6700\u5c0f\u503c"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"minSum([12,6,10,26,3,24]) ==> return (342)\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"26x3 + 24x6 + 12x10 = 342")," \u70ba\u6700\u5c0f\u503c"),(0,n.kt)("h2",{id:"\u89e3\u984c\u601d\u8def"},"\u89e3\u984c\u601d\u8def"),(0,n.kt)("p",null,"\u7531\u4e0a\u65b9\u5169\u984c\u7bc4\u4f8b\u53ef\u5f97\u77e5\uff0c\u8981\u89e3\u51fa\u7b54\u6848\u5fc5\u5b9a\u662f\u9663\u5217\u4e2d",(0,n.kt)("strong",{parentName:"p"},"\u6700\u5927\u503c\u8981\u4e58\u4e0a\u6700\u5c0f\u503c"),"\uff0c\u6b21\u5927\u503c\u4e58\u4e0a\u6b21\u5c0f\u503c\uff0c\u6709\u4e86\u9019\u500b\u601d\u8def\u89e3\u984c\u4e5f\u4e0d\u662f\u554f\u984c\u4e86"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Ex : ","[5,4,2,3]","  ")),(0,n.kt)("p",null,"\u9996\u5148\u8981\u5148\u505a\u9663\u5217\u7684\u5927\u5c0f\u6392\u5e8f ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.sort((a,b) => a - b)  //[2,3,4,5]"),(0,n.kt)("br",{parentName:"p"}),"\n","\u518d\u4f86\u5c31\u662f\u914d\u5c0d\u6700\u5927\u53ca\u6700\u5c0f\u503c\u505a\u76f8\u4e58 ",(0,n.kt)("inlineCode",{parentName:"p"},"2x5 & 3x4")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u914d\u5c0d\u5716",src:t(4990).Z,width:"304",height:"127"}),"  "),(0,n.kt)("p",null,"\u6709\u4e0a\u5716\u53ef\u4ee5\u77e5\u9053\u914d\u5c0d\u7684\u6578\u5b57 index \u76f8\u52a0\u8d77\u4f86\u525b\u597d\u6703\u7b49\u65bc ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.length - 1"),"\uff0c\u898f\u5f8b\u4e5f\u51fa\u4f86\u4e86"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"function minSum(arr){\n    arr = arr.sort((a,b)=> a-b); // \u6392\u5e8f\n    let sumArr = arr.map((num,index,array) => {\n        if(index < array.length / 2) // \u56e0\u70ba\u4e00\u6b21\u6703\u904b\u7b97\u5169\u500b\u6578\u5b57\uff0c\u6240\u4ee5\u53ea\u8981\u57f7\u884c\u4e00\u534a\u6b21\u6578\u5373\u53ef\n            // num \u672c\u8eab\u7684 index \u8981\u52a0\u4e0a\u53e6\u4e00\u500b\u6578\u7684 index \u525b\u597d\u7b49\u65bc arr.length - 1\n            return num * array[array.length - 1 - index] \n        else\n            return 0 // \u8d85\u904e\u9663\u5217\u4e00\u534a\u7684\u6578\u5df2\u7d93\u88ab\u505a\u904b\u7b97\u904e\uff0c\u907f\u514d\u91cd\u8907\u904b\u7b97\u5c31\u586b 0;\n    })\n    return sumArr.reduce((a,b) => a+b); // \u628a\u8655\u7406\u904e\u5f8c\u7684\u9663\u5217\u52a0\u7e3d\u5373\u70ba\u7b54\u6848\n}\n\n//\u7c21\u5316\u5982\u4e0b\nfunction minSum(arr) {\n return arr.sort((a,b)=> a-b).map((num,index,array) => (index < array.length / 2) ? num * array[array.length - 1 - index] : 0 ).reduce((a,b)=> a + b);\n}\n")),(0,n.kt)("p",null,"\u7576\u7136\u89ba\u5f97\u4e0a\u65b9\u7684\u505a\u6cd5\u9ebb\u7169\u7684\u8a71\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.pop()")," \u4f86\u505a\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},".pop()")," \u6703\u56de\u50b3\u6700\u5f8c\u4e00\u503c\u4e26\u79fb\u9664\uff0c\u525b\u597d\u548c\u4e0a\u9762\u4f5c\u6cd5",(0,n.kt)("inlineCode",{parentName:"p"},"array.length / 2"),"\u610f\u601d\u4e00\u6a23"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"function minSum(arr) {\n    arr.sort((a, b) => a - b).reduce((a, b) => a + b * arr.pop(), 0);\n}\n")),(0,n.kt)("h2",{id:"\u77e5\u8b58\u9ede"},"\u77e5\u8b58\u9ede"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"},"Array.prototype.sort()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/map"},"Array.prototype.map()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce"},"Array.prototype.reduce()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/pop"},"Array.prototype.pop()"))))}m.isMDXComponent=!0},4990:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/5a523566b3bfa84c2e00010b_1-fb1d32a1cb899ee153abacafb354b3c7.jpg"}}]);