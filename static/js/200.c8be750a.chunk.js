"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[200],{5200:function(e,t,s){s.r(t),s.d(t,{default:function(){return h}});var n=s(7762),r=s(885),i=s(2791),c=s(1087),a=s(4165),l=s(5861),o=s(8385);function d(){return(d=(0,l.Z)((0,a.Z)().mark((function e(t){var s,n,r,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=JSON.parse(localStorage.getItem("auth")||""),n=null===s||void 0===s?void 0:s.token,r="".concat("https://wild-tan-meerkat-robe.cyclic.app/api","/groups/view-message?skip=").concat(t.skip,"&limit=").concat(t.limit),e.next=5,(0,o._)(r,{method:"GET",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(n)}});case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=s(1605),u=s(8936),m=s(184);function h(){var e=(0,i.useState)([]),t=(0,r.Z)(e,2),s=t[0],a=t[1],l=(0,i.useState)(""),o=(0,r.Z)(l,2),h=o[0],p=o[1],f=(0,i.useState)(0),C=(0,r.Z)(f,2),j=C[0],v=C[1],w=(0,i.useState)(!1),g=(0,r.Z)(w,2),N=g[0],b=g[1];return(0,i.useEffect)((function(){b(!0),function(e){return d.apply(this,arguments)}({limit:10,skip:j}).then((function(e){if(200===e.code){var t,s=(0,n.Z)(e.data);try{for(s.s();!(t=s.n()).done;){var r=t.value;r.id=r._id}}catch(i){s.e(i)}finally{s.f()}a(e.data)}else a([])})).catch((function(e){return console.error(e)})).finally((function(){return b(!1)}))}),[j]),(0,m.jsxs)("div",{className:"m-2 p-2 rounded-lg",children:[(0,m.jsx)("div",{className:"mb-2",children:(0,m.jsxs)(c.rU,{className:"m-2 mb-3 flex justify-between border-b-2 border-[#20BB96]",to:"/discussion/create",children:[(0,m.jsx)("p",{className:"mr-2 text-center text-gray-400",children:"\u09b2\u09bf\u0996\u09ac \u09af\u09be \u09ac\u09b2\u09a4\u09c7 \u099a\u09be\u0987 ..."}),(0,m.jsx)("svg",{className:"w-6 h-6  text-[#20BB96]",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})})]})}),s.map((function(e){return(0,m.jsxs)("div",{className:"m-2",children:[(0,m.jsxs)("div",{className:"border rounded-t-lg p-2",children:[(0,m.jsxs)("div",{className:"flex",children:[(0,m.jsx)("div",{children:(0,m.jsxs)("svg",{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,m.jsx)("circle",{cx:"18",cy:"18",r:"18",fill:"#EEFAFD"}),(0,m.jsx)("path",{d:"M18 8C15.38 8 13.25 10.13 13.25 12.75C13.25 15.32 15.26 17.4 17.88 17.49C17.96 17.48 18.04 17.48 18.1 17.49C18.12 17.49 18.13 17.49 18.15 17.49C18.16 17.49 18.16 17.49 18.17 17.49C20.73 17.4 22.74 15.32 22.75 12.75C22.75 10.13 20.62 8 18 8Z",fill:"#6299A9"}),(0,m.jsx)("path",{d:"M23.08 20.1499C20.29 18.2899 15.74 18.2899 12.93 20.1499C11.66 20.9999 10.96 22.1499 10.96 23.3799C10.96 24.6099 11.66 25.7499 12.92 26.5899C14.32 27.5299 16.16 27.9999 18 27.9999C19.84 27.9999 21.68 27.5299 23.08 26.5899C24.34 25.7399 25.04 24.5999 25.04 23.3599C25.03 22.1299 24.34 20.9899 23.08 20.1499Z",fill:"#6299A9"})]})}),(0,m.jsxs)("div",{className:"flex-col mx-3",children:[(0,m.jsxs)("p",{className:"bg-[#E1FFF8] text-[#20BB96] text-xs mb-1",children:[" ","teacher"===e.sender.userType?"\u09ab\u09c1\u099c\u09be\u09b2\u09be":"\u0986\u09ac\u09a8\u09be"]}),(0,m.jsxs)("p",{className:"bg-[#E1FFF8] text-[#20BB96] text-xs",children:[" ",e.sender.passingYear]})]}),(0,m.jsxs)("div",{className:"mx-2",children:[(0,m.jsxs)("p",{className:"text-sm",children:[" ",e.sender.name]}),(0,m.jsxs)("p",{className:"text-xs",children:[" ",(0,u.D)(new Date(e.createdAt))]})]})]}),(0,m.jsx)("p",{className:"text-sm font-serif mt-4",children:e.text}),(0,m.jsxs)("div",{className:"flex justify-end text-sm",children:[h===e.id&&(0,m.jsx)("p",{className:"m-2",children:"Post Copied!"}),(0,m.jsx)("button",{onClick:function(){navigator.clipboard.writeText(e.text),p(e.id),setTimeout((function(){p("")}),1e3)},className:"m-2 text-[#20BB96] flex",children:(0,m.jsx)("p",{children:" Copy "})}),(0,m.jsx)(c.rU,{to:"/discussion/".concat(e.id,"/comments"),children:(0,m.jsx)("p",{className:"m-2",children:"".concat(e.totalComment," \u09ae\u09a8\u09cd\u09a4\u09ac\u09cd\u09af")})})]})]}),(0,m.jsx)("div",{className:"flex justify-end border",children:(0,m.jsxs)(c.rU,{to:"/discussion/".concat(e.id,"/comments"),className:"flex m-1",children:[(0,m.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,m.jsx)("path",{d:"M10 19.0087C9.425 19.0087 8.88333 18.717 8.5 18.2087L7.25 16.542C7.225 16.5087 7.125 16.467 7.08333 16.4587H6.66667C3.19167 16.4587 1.04167 15.517 1.04167 10.8337V6.66699C1.04167 2.98366 2.98333 1.04199 6.66667 1.04199H13.3333C17.0167 1.04199 18.9583 2.98366 18.9583 6.66699V10.8337C18.9583 14.517 17.0167 16.4587 13.3333 16.4587H12.9167C12.85 16.4587 12.7917 16.492 12.75 16.542L11.5 18.2087C11.1167 18.717 10.575 19.0087 10 19.0087ZM6.66667 2.29199C3.68333 2.29199 2.29167 3.68366 2.29167 6.66699V10.8337C2.29167 14.6003 3.58333 15.2087 6.66667 15.2087H7.08333C7.50833 15.2087 7.99167 15.4503 8.25 15.792L9.5 17.4587C9.79167 17.842 10.2083 17.842 10.5 17.4587L11.75 15.792C12.025 15.4253 12.4583 15.2087 12.9167 15.2087H13.3333C16.3167 15.2087 17.7083 13.817 17.7083 10.8337V6.66699C17.7083 3.68366 16.3167 2.29199 13.3333 2.29199H6.66667Z",fill:"#174C5A"}),(0,m.jsx)("path",{d:"M14.1667 7.29199H5.83334C5.49167 7.29199 5.20834 7.00866 5.20834 6.66699C5.20834 6.32533 5.49167 6.04199 5.83334 6.04199H14.1667C14.5083 6.04199 14.7917 6.32533 14.7917 6.66699C14.7917 7.00866 14.5083 7.29199 14.1667 7.29199Z",fill:"#174C5A"}),(0,m.jsx)("path",{d:"M10.8333 11.458H5.83334C5.49167 11.458 5.20834 11.1747 5.20834 10.833C5.20834 10.4913 5.49167 10.208 5.83334 10.208H10.8333C11.175 10.208 11.4583 10.4913 11.4583 10.833C11.4583 11.1747 11.175 11.458 10.8333 11.458Z",fill:"#174C5A"})]}),(0,m.jsx)("p",{className:"mx-2 text-sm",children:"\u09ae\u09a8\u09cd\u09a4\u09ac\u09cd\u09af \u0995\u09b0\u09c1\u09a8"})]})})]},e.id)})),!0===N?(0,m.jsx)(x.a,{}):(0,m.jsx)("div",{className:"m-2 mt-4 bg-[#20BB96] rounded-lg",onClick:function(){return v(j+10)},children:(0,m.jsx)("button",{className:"p-1.5 text-center w-full",children:"Show More"})})]})}},1605:function(e,t,s){s.d(t,{a:function(){return r}});var n=s(184);function r(){return(0,n.jsx)("div",{className:"text-center text-sm",children:"\u0985\u09a8\u09c1\u0997\u09cd\u09b0\u09b9\u09aa\u09c2\u09b0\u09cd\u09ac\u0995 \u0985\u09aa\u09c7\u0995\u09cd\u09b7\u09be \u0995\u09b0\u09c1\u09a8..."})}},8936:function(e,t,s){s.d(t,{D:function(){return i}});var n=s(885),r=["\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0","\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09c0","\u09ae\u09be\u09b0\u09cd\u099a","\u098f\u09aa\u09cd\u09b0\u09bf\u09b2","\u09ae\u09c7","\u099c\u09c1\u09a8","\u099c\u09c1\u09b2\u09be\u0987","\u0986\u0997\u09b8\u09cd\u099f","\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0","\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0","\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0","\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0"];function i(e){var t=(e=new Date(e)).getMonth(),s=e.toISOString().split("-"),i=(0,n.Z)(s,3),c=i[0],a=(i[1],i[2].split("T")),l=(0,n.Z)(a,1)[0];return"".concat(l," ").concat(r[t],", ").concat(c)}}}]);
//# sourceMappingURL=200.c8be750a.chunk.js.map