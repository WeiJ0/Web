"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3276],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,d=m["".concat(i,".").concat(g)]||m[g]||c[g]||o;return n?a.createElement(d,s(s({ref:t},u),{},{components:n})):a.createElement(d,s({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1,tags:["\u7b46\u8a18"]},s="\u5b89\u88dd Github \u7559\u8a00\u677f Giscus",l={unversionedId:"Docusaurus/Install_Giscus",id:"Docusaurus/Install_Giscus",title:"\u5b89\u88dd Github \u7559\u8a00\u677f Giscus",description:"\u9996\u5148\u5462\uff0c\u6211\u5011\u77e5\u9053 Docusaurus \u662f\u7531 React Component \u7d44\u6210",source:"@site/docs/Docusaurus/Install_Giscus.md",sourceDirName:"Docusaurus",slug:"/Docusaurus/Install_Giscus",permalink:"/Web/docs/Docusaurus/Install_Giscus",draft:!1,tags:[{label:"\u7b46\u8a18",permalink:"/Web/docs/tags/\u7b46\u8a18"}],version:"current",lastUpdatedAt:1660037430,formattedLastUpdatedAt:"Aug 9, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["\u7b46\u8a18"]},sidebar:"tutorialSidebar",previous:{title:"Deta Base \u5fae\u578b NoSQL",permalink:"/Web/docs/Deta/Deta_Base"},next:{title:"\u521d\u5165 json-server",permalink:"/Web/docs/Json-Server/intro"}},i={},p=[{value:"\u5b89\u88dd\u6d41\u7a0b",id:"\u5b89\u88dd\u6d41\u7a0b",level:2},{value:"Step 1 - \u5b89\u88dd react-giscus",id:"step-1---\u5b89\u88dd-react-giscus",level:3},{value:"Step 2 - \u5c0b\u627e\u6a21\u677f\u6a94",id:"step-2---\u5c0b\u627e\u6a21\u677f\u6a94",level:3},{value:"Step 3 \u52a0\u4e0a giscus Component",id:"step-3-\u52a0\u4e0a-giscus-component",level:3},{value:"Step 4 \u91cd\u65b0\u7de8\u8b6f\u5c31\u5927\u529f\u544a\u6210\u5566 \ud83c\udf89",id:"step-4-\u91cd\u65b0\u7de8\u8b6f\u5c31\u5927\u529f\u544a\u6210\u5566-",level:3}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5b89\u88dd-github-\u7559\u8a00\u677f-giscus"},"\u5b89\u88dd Github \u7559\u8a00\u677f Giscus"),(0,r.kt)("p",null,"\u9996\u5148\u5462\uff0c\u6211\u5011\u77e5\u9053 ",(0,r.kt)("inlineCode",{parentName:"p"},"Docusaurus")," \u662f\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"React Component")," \u7d44\u6210",(0,r.kt)("br",{parentName:"p"}),"\n","\u4e5f\u5c31\u610f\u5473\u8457\u6211\u5011\u53ea\u8981\u627e\u5230\u8981\u52a0\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"Giscus")," \u7684\u7248\u578b\u5f8c\u624b\u52d5\u65b0\u589e\u4e00\u500b ",(0,r.kt)("inlineCode",{parentName:"p"},"Component")," \u5c31\u53ef\u4ee5\u4e86"),(0,r.kt)("p",null,"\u9019\u908a\u7bc4\u4f8b\u5247\u662f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://giscus.app/zh-TW"},"Giscus")),(0,r.kt)("h2",{id:"\u5b89\u88dd\u6d41\u7a0b"},"\u5b89\u88dd\u6d41\u7a0b"),(0,r.kt)("h3",{id:"step-1---\u5b89\u88dd-react-giscus"},"Step 1 - \u5b89\u88dd react-giscus"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @giscus/react\n")),(0,r.kt)("h3",{id:"step-2---\u5c0b\u627e\u6a21\u677f\u6a94"},"Step 2 - \u5c0b\u627e\u6a21\u677f\u6a94"),(0,r.kt)("p",null,"\u5df2\u65b0\u5efa\u7acb\u7684 Docusaurus \u4f86\u8209\u4f8b\uff0c\u9664\u4e86\u9996\u9801\u5916\u9084\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"blog")," \u53ca ",(0,r.kt)("inlineCode",{parentName:"p"},"tutorial")," \u5169\u500b\u9801\u9762",(0,r.kt)("br",{parentName:"p"}),"\n","\u9019\u5169\u500b\u9801\u9762\u7684\u6a94\u6848\u8a2d\u5b9a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," ",(0,r.kt)("inlineCode",{parentName:"p"},"DocusaurusConfig"),(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u90fd\u5b8c\u5168\u6c92\u505a\u4efb\u4f55\u4fee\u6539\u61c9\u8a72\u6703\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/docusaurus.config.js"',title:'"/docusaurus.config.js"'},"presets: [\n    [\n      '@docusaurus/preset-classic',\n      /** @type {import('@docusaurus/preset-classic').Options} */\n      ({\n        docs: {\n          sidebarPath: require.resolve('./sidebars.js'),\n          // Please change this to your repo.\n          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',\n        },\n        blog: {\n          showReadingTime: true,\n          // Please change this to your repo.\n          editUrl:\n            'https://github.com/facebook/docusaurus/edit/main/website/blog/',\n        },\n        theme: {\n          customCss: require.resolve('./src/css/custom.css'),\n        },\n      }),\n    ],\n  ],\n")),(0,r.kt)("p",null,"\u9019\u908a\u518d\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"blog")," \u4f5c\u70ba\u7bc4\u4f8b\uff0c\u800c\u5728\u5b98\u65b9\u7684\u6587\u4ef6\u4e2d ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog"},"\u5b98\u65b9\u6587\u4ef6"),(0,r.kt)("br",{parentName:"p"}),"\n","\u9664\u4e86\u539f\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"showReadingTime")," \u53ca ",(0,r.kt)("inlineCode",{parentName:"p"},"editUrl")," \u5916\u9084\u6709\u5f88\u591a\u9078\u9805\u53ef\u505a\u8abf\u6574",(0,r.kt)("br",{parentName:"p"}),"\n","\u53ea\u4e0d\u904e\u56e0\u70ba\u9810\u8a2d\u7684\u95dc\u4fc2\u6c92\u6709\u4e00\u4e00\u5e36\u51fa\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"Component")," \u7684\u90e8\u5206\u5c31\u6709"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blogListComponent"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"'@theme/BlogListPage'"),(0,r.kt)("td",{parentName:"tr",align:null},"Root component of the blog listing page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blogPostComponent"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"'@theme/BlogPostPage'"),(0,r.kt)("td",{parentName:"tr",align:null},"Root component of each blog post page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blogTagsListComponent"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"'@theme/BlogTagsListPage'"),(0,r.kt)("td",{parentName:"tr",align:null},"Root component the tags list page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blogTagsPostsComponent"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"'@theme/BlogTagsPostsPage'"),(0,r.kt)("td",{parentName:"tr",align:null},'Root component of the "posts containing tag" page.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blogArchiveComponent"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"'@theme/BlogArchivePage'"),(0,r.kt)("td",{parentName:"tr",align:null},"Root component of the blog archive page.")))),(0,r.kt)("p",null,"\u7559\u8a00\u677f\u7684\u90e8\u4efd\u6703\u51fa\u73fe\u5728\u6bcf\u7bc7\u6587\u7ae0\u7684\u6700\u4e0b\u65b9\u6240\u4ee5\u8abf\u6574\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"blogPostComponent"),(0,r.kt)("br",{parentName:"p"}),"\n","\u539f\u59cb\u6a94\u7684\u76ee\u9304\u4f4d\u65bc ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules\\@docusaurus\\theme-classic\\src\\theme\\BlogPostPage\\index.tsx"),(0,r.kt)("br",{parentName:"p"}),"\n","\u76f4\u63a5\u5c07\u9019\u652f\u6a94\u6848\u8907\u88fd\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"src\\theme\\blog.tsx")," (\u9019\u908a\u6c92\u6709\u56fa\u5b9a\u53ef\u81ea\u5df1\u8abf\u6574)",(0,r.kt)("br",{parentName:"p"}),"\n","\u4e26\u65bc ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," \u52a0\u4e0a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/docusaurus.config.js"',title:'"/docusaurus.config.js"'}," blog: {\n          // \u9019\u884c\u66f4\u63db blogPostComponent\n          blogPostComponent: '../src/theme/blog.tsx',\n       },\n")),(0,r.kt)("h3",{id:"step-3-\u52a0\u4e0a-giscus-component"},"Step 3 \u52a0\u4e0a giscus Component"),(0,r.kt)("p",null,"\u65bc ",(0,r.kt)("inlineCode",{parentName:"p"},"blog.tsx")," \u4e2d\u53ef\u4ee5\u627e\u5230\u67b6\u69cb\uff0c\u65bc ",(0,r.kt)("inlineCode",{parentName:"p"},"<BlogPostContent/>")," \u5f8c\u65b0\u589e ",(0,r.kt)("inlineCode",{parentName:"p"},"Giscus Component")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/theme/blog.tsx"',title:'"/src/theme/blog.tsx"'},'export default function BlogPostPage(props: Props): JSX.Element {\n  const BlogPostContent = props.content;\n  return (\n    <BlogPostProvider content={props.content} isBlogPostPage>\n      <HtmlClassNameProvider\n        className={clsx(\n          ThemeClassNames.wrapper.blogPages,\n          ThemeClassNames.page.blogPostPage\n        )}\n      >\n        <BlogPostPageMetadata />\n        <BlogPostPageContent sidebar={props.sidebar}>\n          <BlogPostContent />\n          /* \u9019\u88e1\u958b\u59cb */\n          <Giscus\n            id="comments"\n            repo="***"\n            repoId="***"\n            category="General"\n            categoryId="***"\n            mapping="specific"\n            reactionsEnabled="1"\n            inputPosition="top"\n            theme="light"\n            lang="zh-TW"\n            loading="lazy"\n          />\n        </BlogPostPageContent>\n      </HtmlClassNameProvider>\n    </BlogPostProvider>\n  );\n}\n')),(0,r.kt)("p",null,"Props \u7684\u90e8\u4efd\u7522\u751f\u5247\u662f\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://giscus.app/zh-TW"},"Giscus")," \u6309\u7167\u4e0a\u65b9\u7684\u6b65\u9a5f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u65b0\u589e\u4e00\u500b Github repository\uff0c\u540d\u5b57\u4e0d\u9650\u516c\u958b\u5c31\u597d"),(0,r.kt)("li",{parentName:"ol"},"\u9700\u8981\u5b89\u88dd ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/giscus"},"Github APP - Giscus"),"\uff0c\u53f3\u908a Install"),(0,r.kt)("li",{parentName:"ol"},"\u5c07\u5efa\u7acb\u7684 repository \u958b\u555f Setting \u4e2d ",(0,r.kt)("inlineCode",{parentName:"li"},"Discussions")," \u529f\u80fd ",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository"},"\u5b98\u65b9\u5716\u6587\u6559\u5b78")),(0,r.kt)("li",{parentName:"ol"},"\u96a8\u5f8c\u518d\u56de\u5230 Giscus \u9801\u9762\u4e2d\u586b\u5165 repository \u540d\u7a31\uff0c\u9019\u908a\u8981\u586b\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},"{github userName}/{repository name}")),(0,r.kt)("li",{parentName:"ol"},"\u5728\u4e0b\u65b9\u9078\u53d6\u4e00\u4e9b\u9032\u968e\u9078\u9805\u5f8c\u5c31\u53ef\u4ee5\u770b\u5230\u81ea\u52d5\u7522\u751f\u7684\u5167\u5bb9\uff0c\u518d\u6bd4\u7167\u6b04\u4f4d\u586b\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},"<Giscus/>")," Props \u5373\u53ef\u5927\u529f\u544a\u6210")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u81ea\u52d5\u7522\u751f\u7684\u6b04\u4f4d",src:n(7774).Z,width:"740",height:"406"})),(0,r.kt)("h3",{id:"step-4-\u91cd\u65b0\u7de8\u8b6f\u5c31\u5927\u529f\u544a\u6210\u5566-"},"Step 4 \u91cd\u65b0\u7de8\u8b6f\u5c31\u5927\u529f\u544a\u6210\u5566 \ud83c\udf89"),(0,r.kt)("kbd",null,"Ctrl")," + ",(0,r.kt)("kbd",null,"C"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u8981\u7d42\u6b62\u6279\u6b21\u5de5\u4f5c\u55ce (Y/N)?\nY\nnpm start\n")))}c.isMDXComponent=!0},7774:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Install_Giscus-a06b20528d7092be74bf30db2a5c5777.jpg"}}]);