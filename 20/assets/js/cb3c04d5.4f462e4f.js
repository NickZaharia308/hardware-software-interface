"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[7015],{5680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>y});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,y=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(y,o(o({ref:t},l),{},{components:r})):n.createElement(y,o({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7866:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(8168),a=(r(6540),r(5680));const i={},o="Modifying a Structure",s={unversionedId:"Lab 7 - Structures, vectors and strings/Structures/Drills/Tasks/Print Structure/README",id:"Lab 7 - Structures, vectors and strings/Structures/Drills/Tasks/Print Structure/README",title:"Modifying a Structure",description:"Write code within the main function to modify the fields of the sample_student structure so that:",source:"@site/docs/Lab 7 - Structures, vectors and strings/Structures/Drills/Tasks/Print Structure/README.md",sourceDirName:"Lab 7 - Structures, vectors and strings/Structures/Drills/Tasks/Print Structure",slug:"/Lab 7 - Structures, vectors and strings/Structures/Drills/Tasks/Print Structure/",permalink:"/hardware-software-interface/20/Lab 7 - Structures, vectors and strings/Structures/Drills/Tasks/Print Structure/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Fibonacci Sum",permalink:"/hardware-software-interface/20/Lab 7 - Structures, vectors and strings/Structures/Drills/Tasks/Fibonacci Sum/"},next:{title:"Getter-Setter",permalink:"/hardware-software-interface/20/Lab 7 - Structures, vectors and strings/Structures/Drills/Tasks/Getters and Setters/"}},u={},c=[],l={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"modifying-a-structure"},"Modifying a Structure"),(0,a.yg)("p",null,"Write code within the ",(0,a.yg)("inlineCode",{parentName:"p"},"main")," function to modify the fields of the ",(0,a.yg)("inlineCode",{parentName:"p"},"sample_student")," structure so that:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"the birth year is ",(0,a.yg)("inlineCode",{parentName:"p"},"1993"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"the age is ",(0,a.yg)("inlineCode",{parentName:"p"},"22"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"the group is ",(0,a.yg)("inlineCode",{parentName:"p"},"323CA")))),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"WARNING"),": Do not modify what is displayed, modify the structure code.\nDo not touch the display code, that code must remain the same.\nYou need to add at the beginning of the ",(0,a.yg)("inlineCode",{parentName:"p"},"main")," function, in the place marked with ",(0,a.yg)("inlineCode",{parentName:"p"},"TODO"),", the code to modify the structure.\n",(0,a.yg)("strong",{parentName:"p"},"WARNING"),": You need to modify the content of the structure in the code, meaning you need to write to the memory area corresponding to the field in the structure.\nDo not modify the structure in the ",(0,a.yg)("inlineCode",{parentName:"p"},".data")," section, you need to use code to modify the structure.\n",(0,a.yg)("strong",{parentName:"p"},"TIP"),": For modifying the group, you will need to change the third byte/character of the ",(0,a.yg)("inlineCode",{parentName:"p"},"group")," field (i.e., the byte/character with index 2).")),(0,a.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,a.yg)("a",{parentName:"p",href:"/hardware-software-interface/20/Lab%207%20-%20Structures,%20vectors%20and%20strings/Structures/Reading/"},"this")," reading material."))}d.isMDXComponent=!0}}]);