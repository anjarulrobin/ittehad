"use strict";(self.webpackChunkittehad=self.webpackChunkittehad||[]).push([[807],{8703:function(e,t,n){n.d(t,{x:function(){return c}});var a=n(4165),r=n(5861),s=n(8385);function c(e){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)((0,a.Z)().mark((function e(t){var n,r,c,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.parse(localStorage.getItem("auth")||""),r=null===n||void 0===n?void 0:n.token,c="".concat("https://wild-tan-meerkat-robe.cyclic.app/api","/users/all?skip=").concat(t.skip,"&limit=").concat(t.limit),t.passingYear&&(c+="&passingYear=".concat(t.passingYear)),t.userType&&(c+="&userType=".concat(t.userType)),t.phone&&(c+="&phone=".concat(t.phone)),t.name&&(c+="&name=".concat(t.name)),t.userTags&&(c+="&userTags=".concat(t.userTags)),e.next=10,(0,s._)(c,{method:"GET",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(r)}});case 10:return i=e.sent,e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},807:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var a=n(7762),r=n(885),s=n(2791),c=n(1087),i=n(8703),o=n(1605),u=n(184);function l(){var e=(0,s.useState)([]),t=(0,r.Z)(e,2),n=t[0],l=t[1],p=(0,c.lr)(),f=(0,r.Z)(p,2),d=f[0],h=(f[1],(0,s.useState)(0)),m=(0,r.Z)(h,2),x=m[0],v=m[1],g=(0,s.useState)(!1),y=(0,r.Z)(g,2),j=y[0],k=y[1];(0,s.useEffect)((function(){k(!0);var e=Number(d.get("passingYear"));console.log({passingYear:e}),(0,i.x)({passingYear:e,skip:x,limit:10}).then((function(e){if(200===e.code){var t,n=(0,a.Z)(e.data);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.id=r._id}}catch(s){n.e(s)}finally{n.f()}l(e.data)}else l([])})).catch((function(e){return console.error(e)})).finally((function(){return k(!1)}))}),[x]);var w=0;return(0,u.jsxs)("div",{className:"overflow-scroll p-4",children:[n.map((function(e,t){return(0,u.jsxs)(c.rU,{to:"/users/".concat(e.id),className:"flex items-center h-14 justify-left w-full font-medium text-center rounded-t-[48px]",children:[(0,u.jsx)("div",{className:"w-8 h-8 pt-1 bg-[#E8F5F9] rounded-full text-center flex justify-center",children:++w}),(0,u.jsx)("span",{className:"px-4",children:e.name})]})})),!0===j?(0,u.jsx)(o.a,{}):(0,u.jsx)("div",{className:"bg-[#20BB96] rounded-lg w-full p-3 text-center",children:(0,u.jsx)("button",{onClick:function(){v(x+10)},children:" Show More"})})]})}},1605:function(e,t,n){n.d(t,{a:function(){return r}});var a=n(184);function r(e){var t=e.message,n=void 0===t?"\u0985\u09a8\u09c1\u0997\u09cd\u09b0\u09b9\u09aa\u09c2\u09b0\u09cd\u09ac\u0995 \u0985\u09aa\u09c7\u0995\u09cd\u09b7\u09be \u0995\u09b0\u09c1\u09a8...":t;return(0,a.jsx)("div",{className:"text-center text-sm",children:n})}}}]);
//# sourceMappingURL=807.d3abc24f.chunk.js.map