"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[996],{2996:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(1413),a=n(4165),c=n(5861),s=n(885),o=n(2791),i=n(7689),l=n(8385);function u(e){return d.apply(this,arguments)}function d(){return(d=(0,c.Z)((0,a.Z)().mark((function e(t){var n,r,c,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.parse(localStorage.getItem("auth")||""),r=null===n||void 0===n?void 0:n.token,c="".concat("http://localhost:3001/api","/announcements/").concat("GENERAL"===t.type&&"/general"),e.next=5,(0,l._)(c,{method:"POST",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify({title:t.title,content:t.content,type:t.type})});case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=n(1605),m=n(184);function f(){var e=(0,o.useState)({content:"",title:"",type:"GENERAL"}),t=(0,s.Z)(e,2),n=t[0],l=t[1],d=(0,i.s0)(),f=(0,o.useState)({flag:!1,details:[]}),h=(0,s.Z)(f,2),x=h[0],v=h[1],g=(0,o.useState)(!1),N=(0,s.Z)(g,2),j=N[0],y=N[1],b=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),y(!0),u(n).then((function(e){200===e.code?d("/announcement",{replace:!0}):v({flag:!0,details:[e.error||e.message||"Failed to send message!"]})})).catch((function(e){return console.error(e)})).finally((function(){return y(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,m.jsxs)("div",{className:"m-2",children:[(0,m.jsx)("p",{className:"mb-2 text-lg text-center",children:" \u098f\u09b2\u09be\u09a8 "}),(0,m.jsx)("div",{className:"flex justify-center",children:(0,m.jsxs)("form",{className:"",action:"#",onSubmit:b,children:[(0,m.jsx)("div",{className:"",children:(0,m.jsx)("textarea",{name:"title",onChange:function(e){return l((0,r.Z)((0,r.Z)({},n),{},{title:e.target.value}))},className:"border border-[#20BB96] p-1 rounded-lg h-16 m-1 text-center",placeholder:"\u09b6\u09bf\u09b0\u09cb\u09a8\u09be\u09ae",value:n.title,required:!0})}),(0,m.jsx)("div",{className:"",children:(0,m.jsx)("textarea",{name:"content",onChange:function(e){return l((0,r.Z)((0,r.Z)({},n),{},{content:e.target.value}))},className:"border border-[#20BB96] p-1 rounded-lg h-52 m-1 text-center",placeholder:"\u0998\u09cb\u09b7\u09a3\u09be...",value:n.content,required:!0})}),x.flag&&(0,m.jsxs)("div",{className:"text-red-400 text-xs text-center",children:[" ",x.details]}),!0===j?(0,m.jsx)(p.a,{}):(0,m.jsx)("div",{className:"m-2 mt-4 bg-[#20BB96] rounded-lg",children:(0,m.jsx)("button",{type:"submit",className:"p-1.5 text-center w-full",children:"Send"})})]})})]})}},1605:function(e,t,n){n.d(t,{a:function(){return a}});var r=n(184);function a(e){var t=e.message,n=void 0===t?"\u0985\u09a8\u09c1\u0997\u09cd\u09b0\u09b9\u09aa\u09c2\u09b0\u09cd\u09ac\u0995 \u0985\u09aa\u09c7\u0995\u09cd\u09b7\u09be \u0995\u09b0\u09c1\u09a8...":t;return(0,r.jsx)("div",{className:"text-center text-sm",children:n})}}}]);
//# sourceMappingURL=996.1c3087f9.chunk.js.map