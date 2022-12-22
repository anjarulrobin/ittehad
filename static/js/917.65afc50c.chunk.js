/*! For license information please see 917.65afc50c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[917],{917:function(t,e,r){r.r(e),r.d(e,{default:function(){return v}});var n=r(2982),o=r(885),i=r(2791),a=r(7689),c=r(4165),s=r(5861),u=r(8385);function l(){return(l=(0,s.Z)((0,c.Z)().mark((function t(e){var r,n,o,i;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=JSON.parse(localStorage.getItem("auth")||""),n=null===r||void 0===r?void 0:r.token,o="".concat("https://wild-tan-meerkat-robe.cyclic.app/api","/groups/posts/").concat(e.postId,"/comments"),t.next=5,(0,u._)(o,{method:"POST",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({text:e.text})});case 5:return i=t.sent,t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return(f=(0,s.Z)((0,c.Z)().mark((function t(e){var r,n,o,i;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=JSON.parse(localStorage.getItem("auth")||""),n=null===r||void 0===r?void 0:r.token,o="".concat("https://wild-tan-meerkat-robe.cyclic.app/api","/groups/posts/").concat(e.postId,"/comments?skip=").concat(e.skip,"&limit=").concat(e.limit),t.next=5,(0,u._)(o,{method:"GET",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(n)}});case 5:return i=t.sent,t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var h=r(1605),p=r(8936),d=r(184);function v(){var t=(0,i.useState)(""),e=(0,o.Z)(t,2),r=e[0],c=e[1],s=(0,i.useState)([]),u=(0,o.Z)(s,2),v=u[0],m=u[1],y=(0,i.useState)(0),x=(0,o.Z)(y,2),g=x[0],w=x[1],b=((0,a.s0)(),(0,i.useState)({flag:!1,details:[]})),j=(0,o.Z)(b,2),N=j[0],E=(j[1],(0,i.useState)("")),L=(0,o.Z)(E,2),k=L[0],C=L[1],S=(0,a.UO)().postId,Z=(0,i.useRef)(null);console.log(S);return(0,i.useEffect)((function(){C("loadComments"),function(t){return f.apply(this,arguments)}({limit:10,skip:g,postId:S||""}).then((function(t){if(200===t.code){for(var e=0;e<t.data.length;e++)t.data[e].id=t.data[e]._id;t.data.reverse(),m(t.data)}else m([])})).catch((function(t){return console.error(t)})).finally((function(){return C("")}))}),[g]),(0,d.jsxs)("div",{className:"m-2",children:[(0,d.jsxs)("div",{className:"max-h-96 overflow-scroll",children:["loadComments"===k?(0,d.jsx)(h.a,{}):(0,d.jsx)("div",{className:"m-1 mt-4 text-center h-fit bg-[#20BB96] rounded-lg",children:(0,d.jsx)("button",{type:"button",className:"p-1.5 ",onClick:function(){return w(g+10)},children:"Show More"})}),null===v||void 0===v?void 0:v.map((function(t,e){return(0,d.jsx)("div",{className:"border rounded-lg m-2 p-2",ref:function(t){var r;e===v.length-1&&(Z.current=t,null===(r=Z.current)||void 0===r||r.scrollIntoView({behavior:"smooth"}))},children:(0,d.jsxs)("div",{className:"flex flex-row",children:[(0,d.jsxs)("div",{className:"basis-1/4",children:[(0,d.jsxs)("svg",{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("circle",{cx:"18",cy:"18",r:"18",fill:"#EEFAFD"}),(0,d.jsx)("path",{d:"M18 8C15.38 8 13.25 10.13 13.25 12.75C13.25 15.32 15.26 17.4 17.88 17.49C17.96 17.48 18.04 17.48 18.1 17.49C18.12 17.49 18.13 17.49 18.15 17.49C18.16 17.49 18.16 17.49 18.17 17.49C20.73 17.4 22.74 15.32 22.75 12.75C22.75 10.13 20.62 8 18 8Z",fill:"#6299A9"}),(0,d.jsx)("path",{d:"M23.08 20.1499C20.29 18.2899 15.74 18.2899 12.93 20.1499C11.66 20.9999 10.96 22.1499 10.96 23.3799C10.96 24.6099 11.66 25.7499 12.92 26.5899C14.32 27.5299 16.16 27.9999 18 27.9999C19.84 27.9999 21.68 27.5299 23.08 26.5899C24.34 25.7399 25.04 24.5999 25.04 23.3599C25.03 22.1299 24.34 20.9899 23.08 20.1499Z",fill:"#6299A9"})]}),(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsxs)("p",{className:"bg-[#E1FFF8] text-[#20BB96] text-[10px] mx-0.5 px-0.5 h-fit",children:[" ","teacher"===t.sender.userType?"\u09ab\u09c1\u099c\u09be\u09b2\u09be":"\u0986\u09ac\u09a8\u09be"]}),(0,d.jsxs)("p",{className:"bg-[#E1FFF8] text-[#20BB96] text-[10px] mx-0.5 px-0.5 h-fit",children:[" ",t.sender.passingYear]})]}),(0,d.jsxs)("p",{className:"text-xs mt-1",children:[" ",t.sender.name]}),(0,d.jsxs)("p",{className:"text-[10px] mt-1",children:[" ",(0,p.D)(new Date(t.createdAt))]})]}),(0,d.jsx)("p",{className:"basis-3/4  p-1",children:t.text})]})},t.id)}))]}),(0,d.jsxs)("form",{className:"m-2 w-full flex justify-center",action:"#",onSubmit:function(t){t.preventDefault(),C("sendComment"),function(t){return l.apply(this,arguments)}({postId:S||"",text:r}).then((function(t){200===t.code&&(m([].concat((0,n.Z)(v),[t.data])),c("")),C("")})).catch((function(t){return console.error(t)})).finally((function(){return C("")}))},children:[(0,d.jsx)("div",{className:"m-1",children:(0,d.jsx)("textarea",{name:"comment",value:r,onChange:function(t){return c(t.target.value)},className:"border border-[#20BB96] p-1 rounded-lg w-full",placeholder:"\u09b2\u09bf\u0996\u09ac \u09af\u09be \u09ac\u09b2\u09a4\u09c7 \u099a\u09be\u0987...",required:!0})}),N.flag&&(0,d.jsxs)("div",{className:"text-red-400 text-xs text-center",children:[" ",N.details]}),"sendComment"===k?(0,d.jsx)(h.a,{}):(0,d.jsx)("div",{className:"m-1 mt-4 h-fit bg-[#20BB96] rounded-lg",children:(0,d.jsx)("button",{type:"submit",className:"p-1.5",children:"Send"})})]})]})}},1605:function(t,e,r){r.d(e,{a:function(){return o}});var n=r(184);function o(){return(0,n.jsx)("div",{className:"text-center text-sm",children:"\u0985\u09a8\u09c1\u0997\u09cd\u09b0\u09b9\u09aa\u09c2\u09b0\u09cd\u09ac\u0995 \u0985\u09aa\u09c7\u0995\u09cd\u09b7\u09be \u0995\u09b0\u09c1\u09a8..."})}},8936:function(t,e,r){r.d(e,{D:function(){return i}});var n=r(885),o=["\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0","\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09c0","\u09ae\u09be\u09b0\u09cd\u099a","\u098f\u09aa\u09cd\u09b0\u09bf\u09b2","\u09ae\u09c7","\u099c\u09c1\u09a8","\u099c\u09c1\u09b2\u09be\u0987","\u0986\u0997\u09b8\u09cd\u099f","\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0","\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0","\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0","\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0"];function i(t){var e=(t=new Date(t)).getMonth(),r=t.toISOString().split("-"),i=(0,n.Z)(r,3),a=i[0],c=(i[1],i[2].split("T")),s=(0,n.Z)(c,1)[0];return"".concat(s," ").concat(o[e],", ").concat(a)}},8385:function(t,e,r){r.d(e,{_:function(){return i}});var n=r(4165),o=r(5861);function i(t,e){return a.apply(this,arguments)}function a(){return(a=(0,o.Z)((0,n.Z)().mark((function t(e,r){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e,r);case 3:return o=t.sent,t.next=6,o.json();case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),console.error("Error network call",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}},5861:function(t,e,r){function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})},4165:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(1002);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(_){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),c=new C(n||[]);return i(a,"_invoke",{value:N(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=f;var p={};function d(){}function v(){}function m(){}var y={};l(y,c,(function(){return this}));var x=Object.getPrototypeOf,g=x&&x(x(S([])));g&&g!==e&&r.call(g,c)&&(y=g);var w=m.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function o(i,a,c,s){var u=h(t[i],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==(0,n.Z)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,c,s)}),(function(t){o("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,s)}))}s(u.arg)}var a;i(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function N(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return Z()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=h(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:Z}}function Z(){return{value:void 0,done:!0}}return v.prototype=m,i(w,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:v,configurable:!0}),v.displayName=l(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(j.prototype),l(j.prototype,s,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,u,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}}}]);
//# sourceMappingURL=917.65afc50c.chunk.js.map