"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[362],{362:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(683),c=t(762),a=t(885),i=t(791),o=t(703),s=t(745),l=t(184);function u(e,n){for(var t=[],r=e;r<=n;r+=1)t.push(r);return t}function d(){var e=(0,i.useState)([]),n=(0,a.Z)(e,2),t=n[0],s=n[1],d=(0,i.useState)({openYearRangeSelection:!0,openYearSelection:!1,startYear:0,endYear:0,selectedYear:0}),p=(0,a.Z)(d,2),h=p[0],m=p[1],j=function(){for(var e=[],n=1990;n<2030;n+=5)e.push({start:n,end:n+5});return e}();return(0,i.useEffect)((function(){(0,o.x)({limit:15,skip:0,passingYear:2020,userTags:"Jimmadar"}).then((function(e){if(200===e.code){var n,t=(0,c.Z)(e.data);try{for(t.s();!(n=t.n()).done;){var r=n.value;r.id=r._id}}catch(a){t.e(a)}finally{t.f()}s(e.data)}else s([])})).catch((function(e){return console.error(e)}))}),[]),(0,l.jsxs)("div",{className:"p-4",children:[(0,l.jsx)("button",{onClick:function(){return m((0,r.Z)((0,r.Z)({},h),{},{openYearRangeSelection:!h.openYearRangeSelection,openYearSelection:!1,selectedYear:0}))},className:"bg-[#E1FFF8] rounded-lg p-1",children:"Select Year"}),h.openYearRangeSelection&&(0,l.jsx)("div",{className:"grid grid-cols-3 mt-2 gap-2",children:j.map((function(e){return(0,l.jsx)("div",{className:"bg-[#20BB96] rounded-lg m-1 p-1 w-20 h-12 flex text-center justify-center",children:(0,l.jsx)("button",{value:"".concat(e.start,"-").concat(e.end),onClick:function(){return m((0,r.Z)((0,r.Z)({},h),{},{startYear:e.start,endYear:e.end,openYearRangeSelection:!1,openYearSelection:!0}))},children:"".concat(e.start,"-").concat(e.end)})},"".concat(e.start,"-").concat(e.end))}))}),h.openYearSelection&&(0,l.jsx)("div",{className:"grid grid-cols-3 mt-2 gap-2",children:u(h.startYear,h.endYear).map((function(e){return(0,l.jsx)("div",{className:"bg-[#20BB96] rounded-lg m-1 p-1 w-20 h-12 flex text-center justify-center",children:(0,l.jsx)("button",{value:"".concat(e),onClick:function(){return m((0,r.Z)((0,r.Z)({},h),{},{selectedYear:e,openYearSelection:!1}))},children:"".concat(e)})},e)}))}),(0,l.jsx)("div",{children:0!==h.selectedYear&&(0,l.jsx)(f,{users:t})})]})}function f(e){var n=e.users,t=(0,i.useState)(""),r=(0,a.Z)(t,2),c=r[0],o=r[1];return(0,l.jsxs)("div",{className:"overflow-scroll p-4",children:[n.map((function(e,n){return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{onClick:function(){return o(c===e.id?"":e.id)},className:"flex items-center h-10 m-1 justify-between font-medium",children:(0,l.jsx)("p",{className:"px-4",children:e.name})}),c===e.id&&(0,l.jsx)("div",{className:"mx-8 text-md",children:(0,l.jsx)(s.Z,{phone:e.phone})})]},e.id)})),(0,l.jsx)("div",{className:"bg-[#20BB96] rounded-lg w-full p-3 text-center",children:(0,l.jsx)("button",{onClick:function(){},children:" Show More"})})]})}},683:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(142);function c(e,n,t){return(n=(0,r.Z)(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=362.6ce2ec53.chunk.js.map