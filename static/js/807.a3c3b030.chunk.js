"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[807],{703:function(e,n,t){t.d(n,{x:function(){return c}});var r=t(165),a=t(861),o=t(939);function c(e){return i.apply(this,arguments)}function i(){return(i=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("auth")||""),null===t||void 0===t?void 0:t.token,"".concat("http://localhost:3001/api","/users/all?skip=").concat(n.skip,"&limit=").concat(n.limit),n.passingYear&&"&passingYear=".concat(n.passingYear),n.userType&&"&userType=".concat(n.userType),n.phone&&"&phone=".concat(n.phone),n.name&&"&name=".concat(n.name),n.userTags&&"&userTags=".concat(n.userTags),e.abrupt("return",{code:200,message:"SUCCESS",data:o.m});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},807:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var r=t(762),a=t(885),o=t(791),c=t(87),i=t(703),u=t(184);function s(){var e=(0,o.useState)([]),n=(0,a.Z)(e,2),t=n[0],s=n[1];(0,o.useEffect)((function(){(0,i.x)({limit:10,skip:0,passingYear:2020}).then((function(e){if(200===e.code){var n,t=(0,r.Z)(e.data);try{for(t.s();!(n=t.n()).done;){var a=n.value;a.id=a._id}}catch(o){t.e(o)}finally{t.f()}s(e.data)}else s([])})).catch((function(e){return console.error(e)}))}),[]);var l=0;return(0,u.jsxs)("div",{className:"overflow-scroll p-4",children:[t.map((function(e,n){return(0,u.jsxs)(c.rU,{to:"/users/".concat(n),className:"flex items-center h-14 justify-left w-full font-medium text-center rounded-t-[48px]",children:[(0,u.jsx)("div",{className:"w-8 h-8 pt-1 bg-[#E8F5F9] rounded-full text-center flex justify-center",children:++l}),(0,u.jsx)("span",{className:"px-4",children:e.name})]})})),(0,u.jsx)("div",{className:"bg-[#20BB96] rounded-lg w-full p-3 text-center",children:(0,u.jsx)("button",{onClick:function(){},children:" Show More"})})]})}},762:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(181);function a(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=(0,r.Z)(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){u=!0,c=e},f:function(){try{i||null==t.return||t.return()}finally{if(u)throw c}}}}}}]);
//# sourceMappingURL=807.a3c3b030.chunk.js.map