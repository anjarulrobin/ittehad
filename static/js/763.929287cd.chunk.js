"use strict";(self.webpackChunkittehad=self.webpackChunkittehad||[]).push([[763],{1605:function(e,t,n){n.d(t,{a:function(){return a}});var s=n(184);function a(e){var t=e.message,n=void 0===t?"\u0985\u09a8\u09c1\u0997\u09cd\u09b0\u09b9\u09aa\u09c2\u09b0\u09cd\u09ac\u0995 \u0985\u09aa\u09c7\u0995\u09cd\u09b7\u09be \u0995\u09b0\u09c1\u09a8...":t;return(0,s.jsx)("div",{className:"text-center text-sm",children:n})}},6763:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var s=n(7762),a=n(885),r=n(2791),i=n(1087),l=n(4165),c=n(5861),u=n(8385);function o(){return(o=(0,c.Z)((0,l.Z)().mark((function e(t){var n,s,a,r,i,c;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.skip,s=t.limit,a=JSON.parse(localStorage.getItem("auth")||""),r=null===a||void 0===a?void 0:a.token,i="".concat("https://wild-tan-meerkat-robe.cyclic.app/api","/auth/signup-requests?skip=").concat(n,"&limit=").concat(s),e.next=6,(0,u._)(i,{method:"GET",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(r)}});case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d=n(1605),f=n(184);function h(){var e=(0,r.useState)([]),t=(0,a.Z)(e,2),n=t[0],l=t[1],c=(0,r.useState)(0),u=(0,a.Z)(c,2),h=u[0],p=u[1],x=(0,r.useState)(!1),v=(0,a.Z)(x,2),m=v[0],w=v[1];(0,r.useEffect)((function(){w(!0),function(e){return o.apply(this,arguments)}({skip:h,limit:10}).then((function(e){if(200===e.code){var t,n=(0,s.Z)(e.data);try{for(n.s();!(t=n.n()).done;){var a=t.value;a.id=a._id}}catch(r){n.e(r)}finally{n.f()}l(e.data)}else l([])})).catch((function(e){return console.error(e)})).finally((function(){return w(!1)}))}),[h]);var j=0;return(0,f.jsxs)("div",{className:"overflow-scroll p-4",children:[n.map((function(e){return(0,f.jsxs)(i.rU,{to:"/signup-requests/".concat(e.id),className:"flex items-center h-14 justify-left w-full font-medium text-center rounded-t-[48px]",children:[(0,f.jsx)("div",{className:"w-8 h-8 pt-1 bg-[#E8F5F9] rounded-full text-center flex justify-center",children:++j}),(0,f.jsxs)("div",{className:"flex justify-between",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{className:"px-4",children:e.name}),(0,f.jsx)("p",{className:"px-4 text-sm",children:e.phone})]}),(0,f.jsxs)("div",{className:"flex justify-between",children:[(0,f.jsx)("div",{className:"m-1",children:(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"#20BB96",className:"w-6 h-6",children:(0,f.jsx)("path",{fillRule:"evenodd",d:"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",clipRule:"evenodd"})})}),(0,f.jsx)("div",{className:"m-1",children:(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"red",className:"w-6 h-6",children:(0,f.jsx)("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",clipRule:"evenodd"})})})]})]})]},e.id)})),!0===m?(0,f.jsx)(d.a,{}):(0,f.jsx)("div",{className:"bg-[#20BB96] rounded-lg w-full p-1 mt-2 text-center",children:(0,f.jsx)("button",{onClick:function(){p(h+10)},children:" Show More"})})]})}}}]);
//# sourceMappingURL=763.929287cd.chunk.js.map