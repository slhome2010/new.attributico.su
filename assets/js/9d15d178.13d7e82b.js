"use strict";(self.webpackChunknew_attributico_su=self.webpackChunknew_attributico_su||[]).push([[8834],{4849:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"tools/defragmentation","title":"Attribute and Group Defragmentation","description":"During operation, Attributes and Groups are frequently added and removed. Due to the way databases work, records in a table are inserted following an auto-increment rule. As a result, large gaps can appear in the attributegroupid numbering.","source":"@site/docs/tools/defragmentation.md","sourceDirName":"tools","slug":"/tools/defragmentation","permalink":"/new.attributico.su/docs/next/tools/defragmentation","draft":false,"unlisted":false,"editUrl":"https://github.com/slhome2010/new.attributico.su/docs/tools/defragmentation.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Remove Broken Links","permalink":"/new.attributico.su/docs/next/tools/scavengery"},"next":{"title":"Attribute Sorting","permalink":"/new.attributico.su/docs/next/tools/sorting"}}');var i=t(4848),s=t(8453);const d={sidebar_position:5},a="Attribute and Group Defragmentation",o={},l=[{value:"Example Table Before Defragmentation",id:"example-table-before-defragmentation",level:2},{value:"Example Table After Defragmentation",id:"example-table-after-defragmentation",level:2},{value:"Defragmentation and Parsing Group Setup",id:"defragmentation-and-parsing-group-setup",level:2}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",iframe:"iframe",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"attribute-and-group-defragmentation",children:"Attribute and Group Defragmentation"})}),"\n",(0,i.jsxs)(n.p,{children:["During operation, ",(0,i.jsx)(n.strong,{children:"Attributes"})," and ",(0,i.jsx)(n.strong,{children:"Groups"})," are frequently added and removed. Due to the way databases work, records in a table are inserted following an auto-increment rule. As a result, large gaps can appear in the ",(0,i.jsx)(n.code,{children:"attribute_group_id"})," numbering."]}),"\n",(0,i.jsx)(n.h2,{id:"example-table-before-defragmentation",children:"Example Table Before Defragmentation"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.code,{children:"attribute_group_id"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.code,{children:"sort_order"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"7"}),(0,i.jsx)(n.td,{children:"4"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"8"}),(0,i.jsx)(n.td,{children:"5"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"12"}),(0,i.jsx)(n.td,{children:"3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"37"}),(0,i.jsx)(n.td,{children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"68"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"146"}),(0,i.jsx)(n.td,{children:"9"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"363"}),(0,i.jsx)(n.td,{children:"7"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"364"}),(0,i.jsx)(n.td,{children:"6"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"366"}),(0,i.jsx)(n.td,{children:"8"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Gaps between records are generally not an issue. However, a problem arises if ",(0,i.jsx)(n.code,{children:"attribute_group_id = 1"})," is missing, as price list import modules and parsing tools rely on this identifier to store all ",(0,i.jsx)(n.strong,{children:"Attributes"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The good news is that this tool restores ",(0,i.jsx)(n.code,{children:"attribute_group_id = 1"})," while preserving data integrity and reorganizing the table."]}),"\n",(0,i.jsx)(n.h2,{id:"example-table-after-defragmentation",children:"Example Table After Defragmentation"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.code,{children:"attribute_group_id"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.code,{children:"sort_order"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"4"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"5"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"4"}),(0,i.jsx)(n.td,{children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"5"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"6"}),(0,i.jsx)(n.td,{children:"9"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"7"}),(0,i.jsx)(n.td,{children:"7"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"8"}),(0,i.jsx)(n.td,{children:"6"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"9"}),(0,i.jsx)(n.td,{children:"8"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["From this point forward, the ",(0,i.jsx)(n.strong,{children:"Group"})," with ",(0,i.jsx)(n.code,{children:"attribute_group_id = 1"})," will be referred to as the ",(0,i.jsx)(n.strong,{children:"Parsing Group"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Defragmentation can take a significant amount of time, especially in stores with a large number of attributes or products. If hosting resources are insufficient, timeouts may occur. The tool allows separate defragmentation of ",(0,i.jsx)(n.strong,{children:"Groups"})," and ",(0,i.jsx)(n.strong,{children:"Attributes"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{style:{textAlign:"center"},children:(0,i.jsx)(n.img,{alt:"Defragmentation",src:t(8399).A+"",width:"1340",height:"158"})})})}),(0,i.jsx)(n.tbody,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.em,{children:"Defragmentation tools settings"})})})})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["To create a ",(0,i.jsx)(n.strong,{children:"Parsing Group"}),", you only need to defragment ",(0,i.jsx)(n.strong,{children:"Groups"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["After defragmentation, the ",(0,i.jsx)(n.strong,{children:"Parsing Group"})," should appear in all trees, marked with the \ud83c\udfe0 icon. If the icon does not appear, try clearing your browser cache."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.strong,{children:"Parsing Group"})," is already in use and contains ",(0,i.jsx)(n.strong,{children:"Attributes"}),", but needs to be cleared, you can create a new group with the same name and use the Drag-and-Drop method to transfer all attributes there. Then, rename the old ",(0,i.jsx)(n.strong,{children:"Parsing Group"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"defragmentation-and-parsing-group-setup",children:"Defragmentation and Parsing Group Setup"}),"\n",(0,i.jsx)(n.iframe,{width:"100%",height:"515",src:"https://www.youtube.com/embed/8OcO_4L7iBU",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8399:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/defrag-4a9089037709c3c3c73177863986f8a2.png"},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var r=t(6540);const i={},s=r.createContext(i);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);