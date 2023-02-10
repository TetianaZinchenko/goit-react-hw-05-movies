"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[344],{4162:function(n,e,t){t.d(e,{a:function(){return u}});t(2791);var r,a=t(2757),i=t.n(a),o=t(168),c=t(4934).default.div(r||(r=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),s=t(184),u=function(){return(0,s.jsx)(c,{children:(0,s.jsx)(i(),{color:"#0000a0","aria-label":"Loading Spinner",size:50})})}},5920:function(n,e,t){t.d(e,{e:function(){return g}});var r,a,i,o,c,s=t(7689),u=t(168),l=t(1087),f=t(4934),p=f.default.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n"]))),d=f.default.li(a||(a=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-basis: calc((100% - 3 * 40px) / 4);\n  box-shadow: 0 8px 8px #0000a0;\n  border-radius: 5px;\n"]))),m=(0,f.default)(l.OL)(i||(i=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 500px;\n"]))),h=f.default.img(o||(o=(0,u.Z)(["\n  margin-top: 20px;\n  height: 365px;\n  width: 90%;\n  border-radius: 5px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover:not(.active),\n  &:focus-visible:not(.active) {\n    transform: scale(1.1);\n  }\n"]))),v=f.default.div(c||(c=(0,u.Z)(["\n  padding: 30px 20px;\n"]))),x=t(4757),y=t(184),g=function(n){var e=n.items,t=(0,s.TH)();return(0,y.jsx)(p,{children:e.map((function(n){var e=n.id,r=n.poster_path,a=n.title;return(0,y.jsx)(d,{children:(0,y.jsxs)(m,{to:"/movies/".concat(e),state:{from:t},children:[(0,y.jsx)(h,{src:r?"https://image.tmdb.org/t/p/w500".concat(r):x,alt:a}),(0,y.jsx)(v,{children:(0,y.jsx)("p",{children:a})})]})},e)}))})}},5430:function(n,e,t){t.d(e,{P:function(){return c}});var r,a=t(168),i=t(4934),o=t(184),c=function(n){var e=n.message;return(0,o.jsx)(s,{children:e})},s=i.default.p(r||(r=(0,a.Z)(["\n  color: #ff0000;\n  font-weight: 700;\n"])))},5344:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,i,o=t(9439),c=t(2791),s=t(4635),u=t(5920),l=t(5430),f=t(4162),p=t(168),d=t(4934),m=d.default.section(r||(r=(0,p.Z)(["\n  padding-top: 36px;\n  padding-bottom: 36px;\n  text-align: center;\n"]))),h=d.default.div(a||(a=(0,p.Z)(["\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 1280px;\n"]))),v=d.default.h1(i||(i=(0,p.Z)(["\n  margin-bottom: 40px;\n  font-size: 56px;\n  animation: heading 5000ms infinite;\n\n  @keyframes heading {\n    0% {\n      transform: scale(1.2);\n    }\n    50% {\n      transform: scale(1);\n    }\n    100% {\n      transform: scale(1.2);\n    }\n  }\n"]))),x=t(184),y="pending",g="rejected",b="resolved",w=function(){var n=(0,c.useState)([]),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,c.useState)(null),i=(0,o.Z)(a,2),p=i[0],d=i[1],w=(0,c.useState)(y),j=(0,o.Z)(w,2),k=j[0],_=j[1];return(0,c.useEffect)((function(){(0,s.Df)().then((function(n){var e=n.results;if(!e.length)return _(g),void d("Oops, something went wrong... We can't load trending movies :(");r(e),_(b)})).catch((function(n){d(n),_(g)}))}),[]),(0,x.jsx)("main",{children:(0,x.jsx)(m,{children:(0,x.jsxs)(h,{children:[(0,x.jsx)(v,{children:"Trending today"}),k===y&&(0,x.jsx)(f.a,{}),k===g&&(0,x.jsx)(l.P,{message:p}),k===b&&(0,x.jsx)(u.e,{items:t})]})})})}},4635:function(n,e,t){t.d(e,{Df:function(){return s},M1:function(){return p},Pg:function(){return l},Ph:function(){return v},tx:function(){return m}});var r=t(5861),a=t(4687),i=t.n(a),o="https://api.themoviedb.org/3",c="559cbcab39764ce535027da10f396384";function s(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/trending/movie/day?api_key=").concat(c));case 2:if(!(e=n.sent).ok){n.next=7;break}return n.next=6,e.json();case 6:case 9:return n.abrupt("return",n.sent);case 7:return n.next=9,Promise.reject(new Error("Oops, something went wrong... We can't load trending movies :("));case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(e,"?api_key=").concat(c));case 2:if(!(t=n.sent).ok){n.next=7;break}return n.next=6,t.json();case 6:case 9:return n.abrupt("return",n.sent);case 7:return n.next=9,Promise.reject(new Error("We are sorry, but we did not find any information about movie :("));case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(c));case 2:if(!(t=n.sent).ok){n.next=7;break}return n.next=6,t.json();case 6:case 9:return n.abrupt("return",n.sent);case 7:return n.next=9,Promise.reject(new Error("We are sorry, but we did not find any information about cast :("));case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(c));case 2:if(!(t=n.sent).ok){n.next=7;break}return n.next=6,t.json();case 6:case 9:return n.abrupt("return",n.sent);case 7:return n.next=9,Promise.reject(new Error("We do not have any reviews for this movie :("));case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/search/movie?api_key=").concat(c,"&query=").concat(e));case 2:if(!(t=n.sent).ok){n.next=7;break}return n.next=6,t.json();case 6:case 9:return n.abrupt("return",n.sent);case 7:return n.next=9,Promise.reject(new Error("No results containing ".concat(e," were found.")));case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},2757:function(n,e,t){var r=this&&this.__assign||function(){return r=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var a in e=arguments[t])Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n},r.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(n,e,t,r){void 0===r&&(r=t);var a=Object.getOwnPropertyDescriptor(e,t);a&&!("get"in a?!e.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,r,a)}:function(n,e,t,r){void 0===r&&(r=t),n[r]=e[t]}),i=this&&this.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),o=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)"default"!==t&&Object.prototype.hasOwnProperty.call(n,t)&&a(e,n,t);return i(e,n),e},c=this&&this.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]])}return t};Object.defineProperty(e,"__esModule",{value:!0});var s=o(t(2791)),u=t(8945),l=(0,t(7074).createAnimation)("GridLoader","0% {transform: scale(1)} 50% {transform: scale(0.5); opacity: 0.7} 100% {transform: scale(1); opacity: 1}","grid"),f=function(n){return Math.random()*n};e.default=function(n){var e=n.loading,t=void 0===e||e,a=n.color,i=void 0===a?"#000000":a,o=n.speedMultiplier,p=void 0===o?1:o,d=n.cssOverride,m=void 0===d?{}:d,h=n.size,v=void 0===h?15:h,x=n.margin,y=void 0===x?2:x,g=c(n,["loading","color","speedMultiplier","cssOverride","size","margin"]),b=(0,u.parseLengthAndUnit)(v),w=(0,u.parseLengthAndUnit)(y),j=3*parseFloat(b.value.toString())+6*parseFloat(w.value.toString()),k=r({width:"".concat(j).concat(b.unit),fontSize:0,display:"inline-block"},m),_=function(n){return{display:"inline-block",backgroundColor:i,width:"".concat((0,u.cssValue)(v)),height:"".concat((0,u.cssValue)(v)),margin:(0,u.cssValue)(y),borderRadius:"100%",animationFillMode:"both",animation:"".concat(l," ").concat((n/100+.6)/p,"s ").concat(n/100-.2,"s infinite ease")}};return t?s.createElement("span",r({style:k},g,{ref:function(n){n&&n.style.setProperty("width","".concat(j).concat(b.unit),"important")}}),s.createElement("span",{style:_(f(100))}),s.createElement("span",{style:_(f(100))}),s.createElement("span",{style:_(f(100))}),s.createElement("span",{style:_(f(100))}),s.createElement("span",{style:_(f(100))}),s.createElement("span",{style:_(f(100))}),s.createElement("span",{style:_(f(100))}),s.createElement("span",{style:_(f(100))}),s.createElement("span",{style:_(f(100))})):null}},7074:function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.createAnimation=void 0;e.createAnimation=function(n,e,t){var r="react-spinners-".concat(n,"-").concat(t);if("undefined"==typeof window||!window.document)return r;var a=document.createElement("style");document.head.appendChild(a);var i=a.sheet,o="\n    @keyframes ".concat(r," {\n      ").concat(e,"\n    }\n  ");return i&&i.insertRule(o,0),r}},8945:function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.cssValue=e.parseLengthAndUnit=void 0;var t={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(n){if("number"===typeof n)return{value:n,unit:"px"};var e,r=(n.match(/^[0-9.]*/)||"").toString();e=r.includes(".")?parseFloat(r):parseInt(r,10);var a=(n.match(/[^0-9]*$/)||"").toString();return t[a]?{value:e,unit:a}:(console.warn("React Spinners: ".concat(n," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}e.parseLengthAndUnit=r,e.cssValue=function(n){var e=r(n);return"".concat(e.value).concat(e.unit)}},4757:function(n,e,t){n.exports=t.p+"static/media/no-poster.60a18c27b330b732085e.jpg"},5861:function(n,e,t){function r(n,e,t,r,a,i,o){try{var c=n[i](o),s=c.value}catch(u){return void t(u)}c.done?e(s):Promise.resolve(s).then(r,a)}function a(n){return function(){var e=this,t=arguments;return new Promise((function(a,i){var o=n.apply(e,t);function c(n){r(o,a,i,c,s,"next",n)}function s(n){r(o,a,i,c,s,"throw",n)}c(void 0)}))}}t.d(e,{Z:function(){return a}})}}]);
//# sourceMappingURL=344.b7913e3b.chunk.js.map