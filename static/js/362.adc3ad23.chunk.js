"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[362],{8703:function(e,n,t){t.d(n,{x:function(){return s}});var r=t(4165),a=t(5861),c=t(8385);function s(e){return i.apply(this,arguments)}function i(){return(i=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,s,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("auth")||""),a=null===t||void 0===t?void 0:t.token,s="".concat("https://wild-tan-meerkat-robe.cyclic.app/api","/users/all?skip=").concat(n.skip,"&limit=").concat(n.limit),n.passingYear&&(s+="&passingYear=".concat(n.passingYear)),n.userType&&(s+="&userType=".concat(n.userType)),n.phone&&(s+="&phone=".concat(n.phone)),n.name&&(s+="&name=".concat(n.name)),n.userTags&&(s+="&userTags=".concat(n.userTags)),e.next=10,(0,c._)(s,{method:"GET",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(a)}});case 10:return i=e.sent,e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},7362:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var r=t(1413),a=t(7762),c=t(885),s=t(2791),i=t(8703),o=t(9745),l=t(184);function d(e,n){for(var t=[],r=e;r<=n;r+=1)t.push(r);return t}function u(){var e=(0,s.useState)([]),n=(0,c.Z)(e,2),t=n[0],o=n[1],u=(0,s.useState)({openYearRangeSelection:!0,openYearSelection:!1,startYear:0,endYear:0,selectedYear:0}),C=(0,c.Z)(u,2),h=C[0],f=C[1],x=function(){for(var e=[],n=1990;n<2030;n+=5)e.push({start:n,end:n+5});return e}();return(0,s.useEffect)((function(){(0,i.x)({limit:15,skip:0,passingYear:2020,userTags:"Jimmadar"}).then((function(e){if(200===e.code){var n,t=(0,a.Z)(e.data);try{for(t.s();!(n=t.n()).done;){var r=n.value;r.id=r._id}}catch(c){t.e(c)}finally{t.f()}o(e.data)}else o([])})).catch((function(e){return console.error(e)}))}),[]),(0,l.jsxs)("div",{className:"p-4",children:[(0,l.jsx)("button",{onClick:function(){return f((0,r.Z)((0,r.Z)({},h),{},{openYearRangeSelection:!h.openYearRangeSelection,openYearSelection:!1,selectedYear:0}))},className:"bg-[#E1FFF8] rounded-lg p-1",children:"Select Year"}),h.openYearRangeSelection&&(0,l.jsx)("div",{className:"grid grid-cols-3 mt-2 gap-2",children:x.map((function(e){return(0,l.jsx)("div",{className:"bg-[#20BB96] rounded-lg m-1 p-1 w-20 h-12 flex text-center justify-center",children:(0,l.jsx)("button",{value:"".concat(e.start,"-").concat(e.end),onClick:function(){return f((0,r.Z)((0,r.Z)({},h),{},{startYear:e.start,endYear:e.end,openYearRangeSelection:!1,openYearSelection:!0}))},children:"".concat(e.start,"-").concat(e.end)})},"".concat(e.start,"-").concat(e.end))}))}),h.openYearSelection&&(0,l.jsx)("div",{className:"grid grid-cols-3 mt-2 gap-2",children:d(h.startYear,h.endYear).map((function(e){return(0,l.jsx)("div",{className:"bg-[#20BB96] rounded-lg m-1 p-1 w-20 h-12 flex text-center justify-center",children:(0,l.jsx)("button",{value:"".concat(e),onClick:function(){return f((0,r.Z)((0,r.Z)({},h),{},{selectedYear:e,openYearSelection:!1}))},children:"".concat(e)})},e)}))}),(0,l.jsx)("div",{children:0!==h.selectedYear&&(0,l.jsx)(p,{users:t})})]})}function p(e){var n=e.users,t=(0,s.useState)(""),r=(0,c.Z)(t,2),a=r[0],i=r[1];return(0,l.jsxs)("div",{className:"overflow-scroll p-4",children:[n.map((function(e,n){return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{onClick:function(){return i(a===e.id?"":e.id)},className:"flex items-center h-10 m-1 justify-between font-medium",children:(0,l.jsx)("p",{className:"px-4",children:e.name})}),a===e.id&&(0,l.jsx)("div",{className:"mx-8 text-md",children:(0,l.jsx)(o.Z,{phone:e.phone})})]},e.id)})),(0,l.jsx)("div",{className:"bg-[#20BB96] rounded-lg w-full p-3 text-center",children:(0,l.jsx)("button",{onClick:function(){},children:" Show More"})})]})}},9745:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(184);function a(e){return(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsxs)("p",{className:"mt-1",children:[" ",null===e||void 0===e?void 0:e.phone]}),(0,r.jsx)("a",{href:"sms:".concat(null===e||void 0===e?void 0:e.phone),className:"mx-3",children:(0,r.jsxs)("svg",{width:"30",height:"30",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("circle",{cx:"18",cy:"18",r:"18",fill:"#DAFFF6"}),(0,r.jsx)("path",{d:"M21.45 10.4667L13.925 12.9667C8.86667 14.6584 8.86667 17.4167 13.925 19.1L16.1583 19.8417L16.9 22.075C18.5833 27.1334 21.35 27.1334 23.0333 22.075L25.5417 14.5584C26.6583 11.1834 24.825 9.3417 21.45 10.4667ZM21.7167 14.95L18.55 18.1334C18.425 18.2584 18.2667 18.3167 18.1083 18.3167C17.95 18.3167 17.7917 18.2584 17.6667 18.1334C17.425 17.8917 17.425 17.4917 17.6667 17.25L20.8333 14.0667C21.075 13.825 21.475 13.825 21.7167 14.0667C21.9583 14.3084 21.9583 14.7084 21.7167 14.95Z",fill:"#20BB96"})]})}),(0,r.jsx)("a",{href:"tel:".concat(null===e||void 0===e?void 0:e.phone),className:"mx-2",children:(0,r.jsxs)("svg",{width:"30",height:"30",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("circle",{cx:"18",cy:"18",r:"18",fill:"#DAFFF6"}),(0,r.jsx)("path",{d:"M22.6833 16.9583C22.325 16.9583 22.0417 16.6666 22.0417 16.3166C22.0417 16.0083 21.7333 15.3666 21.2167 14.8083C20.7083 14.2666 20.15 13.95 19.6833 13.95C19.325 13.95 19.0417 13.6583 19.0417 13.3083C19.0417 12.9583 19.3333 12.6666 19.6833 12.6666C20.5167 12.6666 21.3917 13.1166 22.1583 13.925C22.875 14.6833 23.3333 15.625 23.3333 16.3083C23.3333 16.6666 23.0417 16.9583 22.6833 16.9583Z",fill:"#20BB96"}),(0,r.jsx)("path",{d:"M25.6917 16.9583C25.3333 16.9583 25.05 16.6666 25.05 16.3166C25.05 13.3583 22.6417 10.9583 19.6917 10.9583C19.3333 10.9583 19.05 10.6666 19.05 10.3166C19.05 9.96663 19.3333 9.66663 19.6833 9.66663C23.35 9.66663 26.3333 12.65 26.3333 16.3166C26.3333 16.6666 26.0417 16.9583 25.6917 16.9583Z",fill:"#20BB96"}),(0,r.jsx)("path",{d:"M17.2083 20.4583L15.6667 22C15.3417 22.325 14.825 22.325 14.4917 22.0083C14.4 21.9166 14.3083 21.8333 14.2167 21.7416C13.3583 20.875 12.5833 19.9666 11.8917 19.0166C11.2083 18.0666 10.6583 17.1166 10.2583 16.175C9.86666 15.225 9.66666 14.3166 9.66666 13.45C9.66666 12.8833 9.76666 12.3416 9.96666 11.8416C10.1667 11.3333 10.4833 10.8666 10.925 10.45C11.4583 9.92496 12.0417 9.66663 12.6583 9.66663C12.8917 9.66663 13.125 9.71663 13.3333 9.81663C13.55 9.91663 13.7417 10.0666 13.8917 10.2833L15.825 13.0083C15.975 13.2166 16.0833 13.4083 16.1583 13.5916C16.2333 13.7666 16.275 13.9416 16.275 14.1C16.275 14.3 16.2167 14.5 16.1 14.6916C15.9917 14.8833 15.8333 15.0833 15.6333 15.2833L15 15.9416C14.9083 16.0333 14.8667 16.1416 14.8667 16.275C14.8667 16.3416 14.875 16.4 14.8917 16.4666C14.9167 16.5333 14.9417 16.5833 14.9583 16.6333C15.1083 16.9083 15.3667 17.2666 15.7333 17.7C16.1083 18.1333 16.5083 18.575 16.9417 19.0166C17.025 19.1 17.1167 19.1833 17.2 19.2666C17.5333 19.5916 17.5417 20.125 17.2083 20.4583Z",fill:"#20BB96"}),(0,r.jsx)("path",{d:"M26.3083 23.275C26.3083 23.5083 26.2667 23.75 26.1833 23.9833C26.1583 24.05 26.1333 24.1166 26.1 24.1833C25.9583 24.4833 25.775 24.7666 25.5333 25.0333C25.125 25.4833 24.675 25.8083 24.1667 26.0166C24.1583 26.0166 24.15 26.025 24.1417 26.025C23.65 26.225 23.1167 26.3333 22.5417 26.3333C21.6917 26.3333 20.7833 26.1333 19.825 25.725C18.8667 25.3166 17.9083 24.7666 16.9583 24.075C16.6333 23.8333 16.3083 23.5916 16 23.3333L18.725 20.6083C18.9583 20.7833 19.1667 20.9166 19.3417 21.0083C19.3833 21.025 19.4333 21.05 19.4917 21.075C19.5583 21.1 19.625 21.1083 19.7 21.1083C19.8417 21.1083 19.95 21.0583 20.0417 20.9666L20.675 20.3416C20.8833 20.1333 21.0833 19.975 21.275 19.875C21.4667 19.7583 21.6583 19.7 21.8667 19.7C22.025 19.7 22.1917 19.7333 22.375 19.8083C22.5583 19.8833 22.75 19.9916 22.9583 20.1333L25.7167 22.0916C25.9333 22.2416 26.0833 22.4166 26.175 22.625C26.2583 22.8333 26.3083 23.0416 26.3083 23.275Z",fill:"#20BB96"})]})})]})}}}]);
//# sourceMappingURL=362.adc3ad23.chunk.js.map