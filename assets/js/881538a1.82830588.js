"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5500],{9703:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),n=a(5999),r=a(2244);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(r.Z,{permalink:a,title:l.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&l.createElement(r.Z,{permalink:s,title:l.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),n=a(9460),r=a(390);function s(e){let{items:t,component:a=r.Z}=e;return l.createElement(l.Fragment,null,t.map((e=>{let{content:t}=e;return l.createElement(n.n,{key:t.metadata.permalink,content:t},l.createElement(a,null,l.createElement(t,null)))})))}},7951:(e,t,a)=>{a.d(t,{Z:()=>Z});var l=a(7294),n=a(7524),r=a(6010),s=a(9960),i=a(5999),m=a(3008);const o=JSON.parse('["Deta","Express.js","Google App Script","HexSchool","Line Notify","Node.js","puppeteer","React","ReactHook","ReactRouter"]'),c="sidebar_brwN",g="sidebarItemTitle_r4Q1",p="sidebarItemList_QwSx",u="sidebarItem_lnhn",d="sidebarItemLink_yNGZ",b="sidebarItemLinkActive_oSRm",E=e=>{let t=(e=e.replaceAll(" ","-").replaceAll(".","-")).split("");const a=/^[A-Z]+$/;for(let l=1;l<t.length;l++)a.test(t[l])&&"-"!=t[l-1]&&(t[l]="-"+t[l]);return t.join("")};function h(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.Z)(c,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(g,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.Z)(p,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:u},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:b},e.title))))),l.createElement("div",{className:(0,r.Z)(g,"margin-bottom--md")},"\u6240\u6709 Tags"),l.createElement("ul",{style:{paddingLeft:0,listStyle:"none",display:"flex",flexWrap:"wrap"}},o.map((e=>l.createElement("li",{style:{margin:"5px"}},l.createElement(m.Z,{label:e,permalink:"/Web/blog/tags/"+E(e)})))))))}var f=a(3102);function k(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function N(e){return l.createElement(f.Zo,{component:k,props:e})}function Z(e){let{sidebar:t}=e;const a=(0,n.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(N,{sidebar:t}):l.createElement(h,{sidebar:t}):null}},1535:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var l=a(7294),n=a(6010),r=a(5999),s=a(8824),i=a(1944),m=a(5281),o=a(9960),c=a(2462),g=a(9703),p=a(197),u=a(9985);function d(e){const t=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"1 \u7bc7|{count} \u7bc7"},{count:t}))}();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:"\ud83d\udd16 {tagName} \u5171\u6709 {nPosts} \u6587\u7ae0"},{nPosts:t(e.count),tagName:e.label})}function b(e){let{tag:t}=e;const a=d(t);return l.createElement(l.Fragment,null,l.createElement(i.d,{title:a}),l.createElement(p.Z,{tag:"blog_tags_posts"}))}function E(e){let{tag:t,items:a,sidebar:n,listMetadata:s}=e;const i=d(t);return l.createElement(c.Z,{sidebar:n},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",{style:{display:"inline-block",marginRight:"1rem"}},i),l.createElement(o.Z,{href:t.allTagsPath},l.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"\u67e5\u770b\u6240\u6709\u7684 Tags"))),l.createElement(u.Z,{items:a}),l.createElement(g.Z,{metadata:s}))}function h(e){return l.createElement(i.FG,{className:(0,n.Z)(m.k.wrapper.blogPages,m.k.page.blogTagPostListPage)},l.createElement(b,e),l.createElement(E,e))}}}]);