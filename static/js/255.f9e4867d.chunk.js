"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[255],{1255:function(t,n,e){e.r(n),e.d(n,{default:function(){return p}});var a=e(885),r=e(2791),c=e(7689),o=e(4165),i=e(5861),u=e(8385);function s(){return(s=(0,i.Z)((0,o.Z)().mark((function t(n){var e,a,r,c;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=JSON.parse(localStorage.getItem("auth")||""),a=null===e||void 0===e?void 0:e.token,r="".concat("https://wild-tan-meerkat-robe.cyclic.app/api","/announcements/").concat(n.announcementId),t.next=5,(0,u._)(r,{method:"GET",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(a)}});case 5:return c=t.sent,t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var d=e(8936),l=e(184);function p(){var t=(0,c.UO)().id,n=(0,r.useState)(null),e=(0,a.Z)(n,2),o=e[0],i=e[1];return(0,r.useEffect)((function(){(function(t){return s.apply(this,arguments)})({announcementId:t||""}).then((function(t){200===t.code?(t.data.id=t.data._id,i(t.data)):i(null)})).catch((function(t){return console.error(t)}))}),[t]),(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"m-4",children:[(0,l.jsxs)("p",{className:"text-sm",children:[" ",(0,d.D)((null===o||void 0===o?void 0:o.createdAt)||new Date)]}),(0,l.jsxs)("p",{className:"mt-1 mb-1 text-md font-semibold border-b-2 border-b-[#20BB96]",children:[null===o||void 0===o?void 0:o.title," "]}),(0,l.jsx)("p",{className:"mt-2",children:null===o||void 0===o?void 0:o.content})]})})}},8936:function(t,n,e){e.d(n,{D:function(){return c}});var a=e(885),r=["\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0","\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09c0","\u09ae\u09be\u09b0\u09cd\u099a","\u098f\u09aa\u09cd\u09b0\u09bf\u09b2","\u09ae\u09c7","\u099c\u09c1\u09a8","\u099c\u09c1\u09b2\u09be\u0987","\u0986\u0997\u09b8\u09cd\u099f","\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0","\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0","\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0","\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0"];function c(t){var n=(t=new Date(t)).getMonth(),e=t.toISOString().split("-"),c=(0,a.Z)(e,3),o=c[0],i=(c[1],c[2].split("T")),u=(0,a.Z)(i,1)[0];return"".concat(u," ").concat(r[n],", ").concat(o)}}}]);
//# sourceMappingURL=255.f9e4867d.chunk.js.map