"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[996],{2996:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(1413),a=n(4165),c=n(5861),s=n(885),u=n(2791),o=n(7689),i=n(8385);function l(e){return d.apply(this,arguments)}function d(){return(d=(0,c.Z)((0,a.Z)().mark((function e(t){var n,r,c,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.parse(localStorage.getItem("auth")||""),r=null===n||void 0===n?void 0:n.token,c="".concat("https://wild-tan-meerkat-robe.cyclic.app/api","/announcements/").concat("GENERAL"===t.type&&"/general"),e.next=5,(0,i._)(c,{method:"POST",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify({title:t.title,content:t.content,type:t.type})});case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=n(1605),f=n(184);function h(){var e=(0,u.useState)({content:"",title:"",type:"GENERAL"}),t=(0,s.Z)(e,2),n=t[0],i=t[1],d=(0,o.s0)(),h=(0,u.useState)({flag:!1,details:[]}),m=(0,s.Z)(h,2),x=m[0],v=m[1],g=(0,u.useState)(!1),y=(0,s.Z)(g,2),j=y[0],N=y[1],Z=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),N(!0),l(n).then((function(e){200===e.code?d("/announcement",{replace:!0}):v({flag:!0,details:[e.error||e.message||"Failed to send message!"]})})).catch((function(e){return console.error(e)})).finally((function(){return N(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,f.jsxs)("div",{className:"m-2",children:[(0,f.jsx)("p",{className:"mb-2 text-lg text-center",children:" \u098f\u09b2\u09be\u09a8 "}),(0,f.jsx)("div",{className:"flex justify-center",children:(0,f.jsxs)("form",{className:"",action:"#",onSubmit:Z,children:[(0,f.jsx)("div",{className:"",children:(0,f.jsx)("textarea",{name:"title",onChange:function(e){return i((0,r.Z)((0,r.Z)({},n),{},{title:e.target.value}))},className:"border border-[#20BB96] p-1 rounded-lg h-16 m-1 text-center",placeholder:"\u09b6\u09bf\u09b0\u09cb\u09a8\u09be\u09ae",value:n.title,required:!0})}),(0,f.jsx)("div",{className:"",children:(0,f.jsx)("textarea",{name:"content",onChange:function(e){return i((0,r.Z)((0,r.Z)({},n),{},{content:e.target.value}))},className:"border border-[#20BB96] p-1 rounded-lg h-52 m-1 text-center",placeholder:"\u0998\u09cb\u09b7\u09a3\u09be...",value:n.content,required:!0})}),x.flag&&(0,f.jsxs)("div",{className:"text-red-400 text-xs text-center",children:[" ",x.details]}),!0===j?(0,f.jsx)(p.a,{}):(0,f.jsx)("div",{className:"m-2 mt-4 bg-[#20BB96] rounded-lg",children:(0,f.jsx)("button",{type:"submit",className:"p-1.5 text-center w-full",children:"Send"})})]})})]})}},1605:function(e,t,n){n.d(t,{a:function(){return a}});var r=n(184);function a(){return(0,r.jsx)("div",{className:"text-center text-sm",children:"\u0985\u09a8\u09c1\u0997\u09cd\u09b0\u09b9\u09aa\u09c2\u09b0\u09cd\u09ac\u0995 \u0985\u09aa\u09c7\u0995\u09cd\u09b7\u09be \u0995\u09b0\u09c1\u09a8..."})}},8385:function(e,t,n){n.d(t,{_:function(){return c}});var r=n(4165),a=n(5861);function c(e,t){return s.apply(this,arguments)}function s(){return(s=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,n);case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error("Error network call",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=996.5134e39d.chunk.js.map