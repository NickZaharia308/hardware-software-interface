"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[5888],{5680:(e,i,r)=>{r.d(i,{xA:()=>p,yg:()=>u});var n=r(6540);function t(e,i,r){return i in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e}function a(e,i){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?a(Object(r),!0).forEach((function(i){t(e,i,r[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))}))}return e}function s(e,i){if(null==e)return{};var r,n,t=function(e,i){if(null==e)return{};var r,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],i.indexOf(r)>=0||(t[r]=e[r]);return t}(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],i.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=n.createContext({}),d=function(e){var i=n.useContext(l),r=i;return e&&(r="function"==typeof e?e(i):o(o({},i),e)),r},p=function(e){var i=d(e.components);return n.createElement(l.Provider,{value:i},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},y=n.forwardRef((function(e,i){var r=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=d(r),y=t,u=g["".concat(l,".").concat(y)]||g[y]||m[y]||a;return r?n.createElement(u,o(o({ref:i},p),{},{components:r})):n.createElement(u,o({ref:i},p))}));function u(e,i){var r=arguments,t=i&&i.mdxType;if("string"==typeof e||t){var a=r.length,o=new Array(a);o[0]=y;var s={};for(var l in i)hasOwnProperty.call(i,l)&&(s[l]=i[l]);s.originalType=e,s[g]="string"==typeof e?e:t,o[1]=s;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5558:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=r(8168),t=(r(6540),r(5680));const a={},o="Division of Two Numbers",s={unversionedId:"Lab 6 - Registers and Memory Addressing/Registers/Drills/Tasks/Divide/README",id:"Lab 6 - Registers and Memory Addressing/Registers/Drills/Tasks/Divide/README",title:"Division of Two Numbers",description:"You will solve this exercise starting from the divide.asm file located in the drills/tasks/div/support directory.",source:"@site/docs/Lab 6 - Registers and Memory Addressing/Registers/Drills/Tasks/Divide/README.md",sourceDirName:"Lab 6 - Registers and Memory Addressing/Registers/Drills/Tasks/Divide",slug:"/Lab 6 - Registers and Memory Addressing/Registers/Drills/Tasks/Divide/",permalink:"/hardware-software-interface/Lab 6 - Registers and Memory Addressing/Registers/Drills/Tasks/Divide/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Tasks",permalink:"/hardware-software-interface/Lab 6 - Registers and Memory Addressing/Registers/Drills/Tasks/"},next:{title:"Multiplying Two Numbers",permalink:"/hardware-software-interface/Lab 6 - Registers and Memory Addressing/Registers/Drills/Tasks/Multiply/"}},l={},d=[],p={toc:d},g="wrapper";function m(e){let{components:i,...r}=e;return(0,t.yg)(g,(0,n.A)({},p,r,{components:i,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"division-of-two-numbers"},"Division of Two Numbers"),(0,t.yg)("p",null,"You will solve this exercise starting from the ",(0,t.yg)("inlineCode",{parentName:"p"},"divide.asm")," file located in the ",(0,t.yg)("inlineCode",{parentName:"p"},"drills/tasks/div/support")," directory."),(0,t.yg)("p",null,"In the ",(0,t.yg)("inlineCode",{parentName:"p"},"divide.asm")," program, the quotient and remainder of two numbers represented as bytes are calculated.\nUpdate the area marked with ",(0,t.yg)("inlineCode",{parentName:"p"},"TODO")," to perform divisions ",(0,t.yg)("inlineCode",{parentName:"p"},"dividend2 / divisor2")," (word-type divisor) and ",(0,t.yg)("inlineCode",{parentName:"p"},"dividend3 / divisor3")," (dword-type divisor)."),(0,t.yg)("p",null,"Similar to the ",(0,t.yg)("inlineCode",{parentName:"p"},"mul")," instruction, the registers where the dividend is placed vary depending on the representation size of the divisor.\nThe divisor is passed as an argument to the ",(0,t.yg)("inlineCode",{parentName:"p"},"div")," mnemonic."),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"TIP"),": If the divisor is of type ",(0,t.yg)("inlineCode",{parentName:"p"},"byte")," (8 bits), the components are arranged as follows:"),(0,t.yg)("ul",{parentName:"blockquote"},(0,t.yg)("li",{parentName:"ul"},"the dividend is placed in the ",(0,t.yg)("inlineCode",{parentName:"li"},"ax")," register"),(0,t.yg)("li",{parentName:"ul"},"the argument of the ",(0,t.yg)("inlineCode",{parentName:"li"},"div")," instruction is 8 bits and can be represented by a register or an immediate value"),(0,t.yg)("li",{parentName:"ul"},"the quotient is placed in ",(0,t.yg)("inlineCode",{parentName:"li"},"al")),(0,t.yg)("li",{parentName:"ul"},"the remainder is placed in ",(0,t.yg)("inlineCode",{parentName:"li"},"ah"))),(0,t.yg)("p",{parentName:"blockquote"},"If the divisor is of type ",(0,t.yg)("inlineCode",{parentName:"p"},"word")," (16 bits), the components are arranged as follows:"),(0,t.yg)("ul",{parentName:"blockquote"},(0,t.yg)("li",{parentName:"ul"},"the dividend is arranged in the ",(0,t.yg)("inlineCode",{parentName:"li"},"dx:ax")," pair, meaning its ",(0,t.yg)("inlineCode",{parentName:"li"},"high")," part is in the ",(0,t.yg)("inlineCode",{parentName:"li"},"dx")," register, and the ",(0,t.yg)("inlineCode",{parentName:"li"},"low")," part is in ",(0,t.yg)("inlineCode",{parentName:"li"},"ax")),(0,t.yg)("li",{parentName:"ul"},"the argument of the ",(0,t.yg)("inlineCode",{parentName:"li"},"div")," instruction is 16 bits and can be represented by a register or an immediate value"),(0,t.yg)("li",{parentName:"ul"},"the quotient is placed in ",(0,t.yg)("inlineCode",{parentName:"li"},"ax")),(0,t.yg)("li",{parentName:"ul"},"the remainder is placed in ",(0,t.yg)("inlineCode",{parentName:"li"},"dx"))),(0,t.yg)("p",{parentName:"blockquote"},"If the divisor is of type ",(0,t.yg)("inlineCode",{parentName:"p"},"dword")," (32 bits), the components are arranged as follows:"),(0,t.yg)("ul",{parentName:"blockquote"},(0,t.yg)("li",{parentName:"ul"},"the dividend is arranged in the ",(0,t.yg)("inlineCode",{parentName:"li"},"edx:eax")," pair, meaning its ",(0,t.yg)("inlineCode",{parentName:"li"},"high")," part is in the ",(0,t.yg)("inlineCode",{parentName:"li"},"edx")," register, and the ",(0,t.yg)("inlineCode",{parentName:"li"},"low")," part is in ",(0,t.yg)("inlineCode",{parentName:"li"},"eax")),(0,t.yg)("li",{parentName:"ul"},"the argument of the ",(0,t.yg)("inlineCode",{parentName:"li"},"div")," instruction is 32 bits and can be represented by a register or an immediate value"),(0,t.yg)("li",{parentName:"ul"},"the quotient is placed in ",(0,t.yg)("inlineCode",{parentName:"li"},"eax")),(0,t.yg)("li",{parentName:"ul"},"the remainder is placed in ",(0,t.yg)("inlineCode",{parentName:"li"},"edx"))),(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"TIP"),": If the program gives you a ",(0,t.yg)("inlineCode",{parentName:"p"},"SIGFPE"),'.\nArithmetic exception," you most likely forgot to initialize the upper part of the dividend (',(0,t.yg)("inlineCode",{parentName:"p"},"ah"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"dx"),", or ",(0,t.yg)("inlineCode",{parentName:"p"},"edx"),").")),(0,t.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,t.yg)("a",{parentName:"p",href:"/hardware-software-interface/Lab%206%20-%20Registers%20and%20Memory%20Addressing/Registers/Reading/"},"this")," reading material."))}m.isMDXComponent=!0}}]);