"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[724],{724:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var r=t(683),c=t(885),a=t(791),o=t(184),i=(0,a.lazy)((function(){return Promise.all([t.e(922),t.e(807)]).then(t.bind(t,807))}));function l(e,n){for(var t=[],r=e;r<=n;r+=1)t.push(r);return t}function s(){var e=(0,a.useState)({openYearRangeSelection:!0,openYearSelection:!1,startYear:0,endYear:0,selectedYear:0}),n=(0,c.Z)(e,2),t=n[0],s=n[1],u=function(){for(var e=[],n=1990;n<2030;n+=5)e.push({start:n,end:n+5});return e}();return(0,o.jsxs)("div",{className:"p-4",children:[(0,o.jsx)("button",{onClick:function(){return s((0,r.Z)((0,r.Z)({},t),{},{openYearRangeSelection:!t.openYearRangeSelection,openYearSelection:!1,selectedYear:0}))},className:"bg-[#E1FFF8] rounded-lg p-1",children:"Select Year"}),t.openYearRangeSelection&&(0,o.jsx)("div",{className:"grid grid-cols-3 mt-2 gap-2",children:u.map((function(e){return(0,o.jsx)("div",{className:"bg-[#20BB96] rounded-lg m-1 p-1 w-20 h-12 flex text-center justify-center",children:(0,o.jsx)("button",{value:"".concat(e.start,"-").concat(e.end),onClick:function(){return s((0,r.Z)((0,r.Z)({},t),{},{startYear:e.start,endYear:e.end,openYearRangeSelection:!1,openYearSelection:!0}))},children:"".concat(e.start,"-").concat(e.end)})},"".concat(e.start,"-").concat(e.end))}))}),t.openYearSelection&&(0,o.jsx)("div",{className:"grid grid-cols-3 mt-2 gap-2",children:l(t.startYear,t.endYear).map((function(e){return(0,o.jsx)("div",{className:"bg-[#20BB96] rounded-lg m-1 p-1 w-20 h-12 flex text-center justify-center",children:(0,o.jsx)("button",{value:"".concat(e),onClick:function(){return s((0,r.Z)((0,r.Z)({},t),{},{selectedYear:e,openYearSelection:!1}))},children:"".concat(e)})})}))}),(0,o.jsx)("div",{children:0!==t.selectedYear&&(0,o.jsx)(i,{})})]})}},683:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(142);function c(e,n,t){return(n=(0,r.Z)(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=724.3f842a10.chunk.js.map