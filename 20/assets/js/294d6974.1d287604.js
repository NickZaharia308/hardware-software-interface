"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[4210],{5680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>y});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,y=p["".concat(l,".").concat(d)]||p[d]||g[d]||s;return t?n.createElement(y,i(i({ref:r},c),{},{components:t})):n.createElement(y,i({ref:r},c))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},909:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=t(8168),a=(t(6540),t(5680));const s={},i="Finding a Substring in a String",o={unversionedId:"Lab 7 - Structures, vectors and strings/Arrays/Drills/Tasks/Find Substring/README",id:"Lab 7 - Structures, vectors and strings/Arrays/Drills/Tasks/Find Substring/README",title:"Finding a Substring in a String",description:"Find all occurrences of the substring substring in the sourcetext string in the findsubstring.asm file.",source:"@site/docs/Lab 7 - Structures, vectors and strings/Arrays/Drills/Tasks/Find Substring/README.md",sourceDirName:"Lab 7 - Structures, vectors and strings/Arrays/Drills/Tasks/Find Substring",slug:"/Lab 7 - Structures, vectors and strings/Arrays/Drills/Tasks/Find Substring/",permalink:"/hardware-software-interface/20/Lab 7 - Structures, vectors and strings/Arrays/Drills/Tasks/Find Substring/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Tasks",permalink:"/hardware-software-interface/20/Lab 7 - Structures, vectors and strings/Arrays/Drills/Tasks/"},next:{title:"Mul-arrays",permalink:"/hardware-software-interface/20/Lab 7 - Structures, vectors and strings/Arrays/Drills/Tasks/Mul Arrays/"}},l={},u=[],c={toc:u},p="wrapper";function g(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"finding-a-substring-in-a-string"},"Finding a Substring in a String"),(0,a.yg)("p",null,"Find all occurrences of the ",(0,a.yg)("inlineCode",{parentName:"p"},"substring")," substring in the ",(0,a.yg)("inlineCode",{parentName:"p"},"source_text")," string in the ",(0,a.yg)("inlineCode",{parentName:"p"},"find_substring.asm")," file."),(0,a.yg)("p",null,"Display the results as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"Substring found at index: <N>\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"IMPORTANT"),": You cannot use the ",(0,a.yg)("inlineCode",{parentName:"p"},"strstr")," library function (or similar) for this subtask."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"TIP"),": For display, you can use both the ",(0,a.yg)("inlineCode",{parentName:"p"},"PRINTF32")," macro and the ",(0,a.yg)("inlineCode",{parentName:"p"},"printf")," function, as in previous exercises. The steps for display using ",(0,a.yg)("inlineCode",{parentName:"p"},"printf")," are as follows:"),(0,a.yg)("blockquote",null,(0,a.yg)("ul",{parentName:"blockquote"},(0,a.yg)("li",{parentName:"ul"},"push the value you want to display onto the stack (the position where the substring was found)"),(0,a.yg)("li",{parentName:"ul"},"push the address of the ",(0,a.yg)("inlineCode",{parentName:"li"},"print_format")," string onto the stack"),(0,a.yg)("li",{parentName:"ul"},"call the ",(0,a.yg)("inlineCode",{parentName:"li"},"printf")," function"),(0,a.yg)("li",{parentName:"ul"},"clean up the parameters added earlier from the stack by adding the value 8 to the ",(0,a.yg)("inlineCode",{parentName:"li"},"esp")," register (each parameter is 4 bytes)."))),(0,a.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,a.yg)("a",{parentName:"p",href:"/hardware-software-interface/20/Lab%207%20-%20Structures,%20vectors%20and%20strings/Arrays/Reading/"},"this")," reading material."))}g.isMDXComponent=!0}}]);