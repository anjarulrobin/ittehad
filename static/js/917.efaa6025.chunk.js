"use strict";(self.webpackChunkittehad=self.webpackChunkittehad||[]).push([[917],{917:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var s=n(2982),r=n(885),a=n(2791),c=n(7689),i=n(4165),o=n(5861),l=n(8385);function u(){return(u=(0,o.Z)((0,i.Z)().mark((function e(t){var n,s,r,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.parse(localStorage.getItem("auth")||""),s=null===n||void 0===n?void 0:n.token,r="".concat("https://wild-tan-meerkat-robe.cyclic.app/api","/groups/posts/").concat(t.postId,"/comments"),e.next=5,(0,l._)(r,{method:"POST",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(s)},body:JSON.stringify({text:t.text})});case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=(0,o.Z)((0,i.Z)().mark((function e(t){var n,s,r,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.parse(localStorage.getItem("auth")||""),s=null===n||void 0===n?void 0:n.token,r="".concat("https://wild-tan-meerkat-robe.cyclic.app/api","/groups/posts/").concat(t.postId,"/comments?skip=").concat(t.skip,"&limit=").concat(t.limit),e.next=5,(0,l._)(r,{method:"GET",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(s)}});case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=n(1605),m=n(8936),h=n(184);function x(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],i=t[1],o=(0,a.useState)([]),l=(0,r.Z)(o,2),x=l[0],f=l[1],v=(0,a.useState)(0),g=(0,r.Z)(v,2),j=g[0],C=g[1],N=((0,c.s0)(),(0,a.useState)({flag:!1,details:[]})),b=(0,r.Z)(N,2),w=b[0],y=(b[1],(0,a.useState)("")),S=(0,r.Z)(y,2),Z=S[0],k=S[1],B=(0,c.UO)().postId,I=(0,a.useRef)(null);console.log(B);return(0,a.useEffect)((function(){k("loadComments"),function(e){return d.apply(this,arguments)}({limit:10,skip:j,postId:B||""}).then((function(e){if(200===e.code){for(var t=0;t<e.data.length;t++)e.data[t].id=e.data[t]._id;e.data.reverse(),f(e.data)}else f([])})).catch((function(e){return console.error(e)})).finally((function(){return k("")}))}),[j]),(0,h.jsxs)("div",{className:"m-2",children:[(0,h.jsxs)("div",{className:"max-h-96 overflow-scroll",children:["loadComments"===Z?(0,h.jsx)(p.a,{}):(0,h.jsx)("div",{className:"m-1 mt-4 text-center h-fit bg-[#20BB96] rounded-lg",children:(0,h.jsx)("button",{type:"button",className:"p-1.5 ",onClick:function(){return C(j+10)},children:"Show More"})}),null===x||void 0===x?void 0:x.map((function(e,t){return(0,h.jsx)("div",{className:"border rounded-lg m-2 p-2",ref:function(e){var n;t===x.length-1&&(I.current=e,null===(n=I.current)||void 0===n||n.scrollIntoView({behavior:"smooth"}))},children:(0,h.jsxs)("div",{className:"flex flex-row",children:[(0,h.jsxs)("div",{className:"basis-1/4",children:[(0,h.jsxs)("svg",{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("circle",{cx:"18",cy:"18",r:"18",fill:"#EEFAFD"}),(0,h.jsx)("path",{d:"M18 8C15.38 8 13.25 10.13 13.25 12.75C13.25 15.32 15.26 17.4 17.88 17.49C17.96 17.48 18.04 17.48 18.1 17.49C18.12 17.49 18.13 17.49 18.15 17.49C18.16 17.49 18.16 17.49 18.17 17.49C20.73 17.4 22.74 15.32 22.75 12.75C22.75 10.13 20.62 8 18 8Z",fill:"#6299A9"}),(0,h.jsx)("path",{d:"M23.08 20.1499C20.29 18.2899 15.74 18.2899 12.93 20.1499C11.66 20.9999 10.96 22.1499 10.96 23.3799C10.96 24.6099 11.66 25.7499 12.92 26.5899C14.32 27.5299 16.16 27.9999 18 27.9999C19.84 27.9999 21.68 27.5299 23.08 26.5899C24.34 25.7399 25.04 24.5999 25.04 23.3599C25.03 22.1299 24.34 20.9899 23.08 20.1499Z",fill:"#6299A9"})]}),(0,h.jsxs)("div",{className:"flex",children:[(0,h.jsxs)("p",{className:"bg-[#E1FFF8] text-[#20BB96] text-[10px] mx-0.5 px-0.5 h-fit",children:[" ","teacher"===e.sender.userType?"\u09ab\u09c1\u099c\u09be\u09b2\u09be":"\u0986\u09ac\u09a8\u09be"]}),(0,h.jsxs)("p",{className:"bg-[#E1FFF8] text-[#20BB96] text-[10px] mx-0.5 px-0.5 h-fit",children:[" ",e.sender.passingYear]})]}),(0,h.jsxs)("p",{className:"text-xs mt-1",children:[" ",e.sender.name]}),(0,h.jsxs)("p",{className:"text-[10px] mt-1",children:[" ",(0,m.D)(new Date(e.createdAt))]})]}),(0,h.jsx)("p",{className:"basis-3/4  p-1",children:e.text})]})},e.id)}))]}),(0,h.jsxs)("form",{className:"m-2 w-full flex justify-center",action:"#",onSubmit:function(e){e.preventDefault(),k("sendComment"),function(e){return u.apply(this,arguments)}({postId:B||"",text:n}).then((function(e){200===e.code&&(f([].concat((0,s.Z)(x),[e.data])),i("")),k("")})).catch((function(e){return console.error(e)})).finally((function(){return k("")}))},children:[(0,h.jsx)("div",{className:"m-1",children:(0,h.jsx)("textarea",{name:"comment",value:n,onChange:function(e){return i(e.target.value)},className:"border border-[#20BB96] p-1 rounded-lg w-full",placeholder:"\u09b2\u09bf\u0996\u09ac \u09af\u09be \u09ac\u09b2\u09a4\u09c7 \u099a\u09be\u0987...",required:!0})}),w.flag&&(0,h.jsxs)("div",{className:"text-red-400 text-xs text-center",children:[" ",w.details]}),"sendComment"===Z?(0,h.jsx)(p.a,{}):(0,h.jsx)("div",{className:"m-1 mt-4 h-fit bg-[#20BB96] rounded-lg",children:(0,h.jsx)("button",{type:"submit",className:"p-1.5",children:"Send"})})]})]})}},1605:function(e,t,n){n.d(t,{a:function(){return r}});var s=n(184);function r(e){var t=e.message,n=void 0===t?"\u0985\u09a8\u09c1\u0997\u09cd\u09b0\u09b9\u09aa\u09c2\u09b0\u09cd\u09ac\u0995 \u0985\u09aa\u09c7\u0995\u09cd\u09b7\u09be \u0995\u09b0\u09c1\u09a8...":t;return(0,s.jsx)("div",{className:"text-center text-sm",children:n})}},8936:function(e,t,n){n.d(t,{D:function(){return a}});var s=n(885),r=["\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0","\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09c0","\u09ae\u09be\u09b0\u09cd\u099a","\u098f\u09aa\u09cd\u09b0\u09bf\u09b2","\u09ae\u09c7","\u099c\u09c1\u09a8","\u099c\u09c1\u09b2\u09be\u0987","\u0986\u0997\u09b8\u09cd\u099f","\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0","\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0","\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0","\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0"];function a(e){var t=(e=new Date(e)).getMonth(),n=e.toISOString().split("-"),a=(0,s.Z)(n,3),c=a[0],i=(a[1],a[2].split("T")),o=(0,s.Z)(i,1)[0];return"".concat(o," ").concat(r[t],", ").concat(c)}}}]);
//# sourceMappingURL=917.efaa6025.chunk.js.map