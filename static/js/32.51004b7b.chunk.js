"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[32],{828:function(t,n,e){e.d(n,{Yfv:function(){return o}});var r=e(9983);function o(t){return(0,r.w_)({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"}}]})(t)}},9014:function(t,n,e){e.d(n,{x7:function(){return kt},ZP:function(){return Zt}});var r=e(168),o=e(9439),a=e(3433),i=e(9142);function s(t,n,e){return(n=(0,i.Z)(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){s(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var l=e(2791),f={data:""},d=function(t){return"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||f},p=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,m=/\/\*[^]*?\*\/|  +/g,v=/\n+/g,g=function t(n,e){var r="",o="",a="",i=function(i){var c=n[i];"@"==i[0]?"i"==i[1]?r=i+" "+c+";":o+="f"==i[1]?t(c,i):i+"{"+t(c,"k"==i[1]?"":e)+"}":"object"==typeof c?o+=t(c,e?e.replace(/([^,])+/g,(function(t){return i.replace(/(^:.*)|([^,])+/g,(function(n){return/&/.test(n)?n.replace(/&/g,t):t?t+" "+n:n}))})):i):null!=c&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=t.p?t.p(i,c):i+":"+c+";"),s=i};for(var s in n)i(s);return r+(e&&a?e+"{"+a+"}":a)+o},y={},b=function t(n){if("object"==typeof n){var e="";for(var r in n)e+=r+t(n[r]);return e}return n},h=function(t,n,e,r,o){var a=b(t),i=y[a]||(y[a]=function(t){for(var n=0,e=11;n<t.length;)e=101*e+t.charCodeAt(n++)>>>0;return"go"+e}(a));if(!y[i]){var c=a!==t?t:function(t){for(var n,e,r=[{}];n=p.exec(t.replace(m,""));)n[4]?r.shift():n[3]?(e=n[3].replace(v," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][n[1]]=n[2].replace(v," ").trim();return r[0]}(t);y[i]=g(o?s({},"@keyframes "+i,c):c,e?"":"."+i)}var u=e&&y.g?y.g:null;return e&&(y.g=y[i]),function(t,n,e,r){r?n.data=n.data.replace(r,t):-1===n.data.indexOf(t)&&(n.data=e?t+n.data:n.data+t)}(y[i],n,r,u),i},x=function(t,n,e){return t.reduce((function(t,r,o){var a=n[o];if(a&&a.call){var i=a(e),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;a=s?"."+s:i&&"object"==typeof i?i.props?"":g(i,""):!1===i?"":i}return t+r+(null==a?"":a)}),"")};function w(t){var n=this||{},e=t.call?t(n.p):t;return h(e.unshift?e.raw?x(e,[].slice.call(arguments,1),n.p):e.reduce((function(t,e){return Object.assign(t,e&&e.call?e(n.p):e)}),{}):e,d(n.target),n.g,n.o,n.k)}w.bind({g:1});var O,E,j,k,Z,P,C,D,z,N,A,I,M,_,S,T,F,H,L,B=w.bind({k:1});function U(t,n){var e=this||{};return function(){var r=arguments;function o(a,i){var s=Object.assign({},a),c=s.className||o.className;e.p=Object.assign({theme:E&&E()},s),e.o=/ *go\d+/.test(c),s.className=w.apply(e,r)+(c?" "+c:""),n&&(s.ref=i);var u=t;return t[0]&&(u=s.as||t,delete s.as),j&&u[0]&&j(s),O(u,s)}return n?n(o):o}}var Y=function(t,n){return function(t){return"function"==typeof t}(t)?t(n):t},q=function(){var t=0;return function(){return(++t).toString()}}(),R=function(){var t;return function(){if(void 0===t&&typeof window<"u"){var n=matchMedia("(prefers-reduced-motion: reduce)");t=!n||n.matches}return t}}(),$=new Map,G=function(t){if(!$.has(t)){var n=setTimeout((function(){$.delete(t),V({type:4,toastId:t})}),1e3);$.set(t,n)}},J=function t(n,e){switch(e.type){case 0:return u(u({},n),{},{toasts:[e.toast].concat((0,a.Z)(n.toasts)).slice(0,20)});case 1:return e.toast.id&&function(t){var n=$.get(t);n&&clearTimeout(n)}(e.toast.id),u(u({},n),{},{toasts:n.toasts.map((function(t){return t.id===e.toast.id?u(u({},t),e.toast):t}))});case 2:var r=e.toast;return n.toasts.find((function(t){return t.id===r.id}))?t(n,{type:1,toast:r}):t(n,{type:0,toast:r});case 3:var o=e.toastId;return o?G(o):n.toasts.forEach((function(t){G(t.id)})),u(u({},n),{},{toasts:n.toasts.map((function(t){return t.id===o||void 0===o?u(u({},t),{},{visible:!1}):t}))});case 4:return void 0===e.toastId?u(u({},n),{},{toasts:[]}):u(u({},n),{},{toasts:n.toasts.filter((function(t){return t.id!==e.toastId}))});case 5:return u(u({},n),{},{pausedAt:e.time});case 6:var i=e.time-(n.pausedAt||0);return u(u({},n),{},{pausedAt:void 0,toasts:n.toasts.map((function(t){return u(u({},t),{},{pauseDuration:t.pauseDuration+i})}))})}},K=[],Q={toasts:[],pausedAt:void 0},V=function(t){Q=J(Q,t),K.forEach((function(t){t(Q)}))},W={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},X=function(t){return function(n,e){var r=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return u(u({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||q()})}(n,t,e);return V({type:2,toast:r}),r.id}},tt=function(t,n){return X("blank")(t,n)};tt.error=X("error"),tt.success=X("success"),tt.loading=X("loading"),tt.custom=X("custom"),tt.dismiss=function(t){V({type:3,toastId:t})},tt.remove=function(t){return V({type:4,toastId:t})},tt.promise=function(t,n,e){var r=tt.loading(n.loading,u(u({},e),null==e?void 0:e.loading));return t.then((function(t){return tt.success(Y(n.success,t),u(u({id:r},e),null==e?void 0:e.success)),t})).catch((function(t){tt.error(Y(n.error,t),u(u({id:r},e),null==e?void 0:e.error))})),t};var nt=function(t,n){V({type:1,toast:{id:t,height:n}})},et=function(){V({type:5,time:Date.now()})},rt=function(t){var n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,l.useState)(Q),e=(0,o.Z)(n,2),r=e[0],a=e[1];(0,l.useEffect)((function(){return K.push(a),function(){var t=K.indexOf(a);t>-1&&K.splice(t,1)}}),[r]);var i=r.toasts.map((function(n){var e,r;return u(u(u(u({},t),t[n.type]),n),{},{duration:n.duration||(null==(e=t[n.type])?void 0:e.duration)||(null==t?void 0:t.duration)||W[n.type],style:u(u(u({},t.style),null==(r=t[n.type])?void 0:r.style),n.style)})}));return u(u({},r),{},{toasts:i})}(t),e=n.toasts,r=n.pausedAt;(0,l.useEffect)((function(){if(!r){var t=Date.now(),n=e.map((function(n){if(n.duration!==1/0){var e=(n.duration||0)+n.pauseDuration-(t-n.createdAt);if(!(e<0))return setTimeout((function(){return tt.dismiss(n.id)}),e);n.visible&&tt.dismiss(n.id)}}));return function(){n.forEach((function(t){return t&&clearTimeout(t)}))}}}),[e,r]);var i=(0,l.useCallback)((function(){r&&V({type:6,time:Date.now()})}),[r]),s=(0,l.useCallback)((function(t,n){var r,o=n||{},i=o.reverseOrder,s=void 0!==i&&i,c=o.gutter,u=void 0===c?8:c,l=o.defaultPosition,f=e.filter((function(n){return(n.position||l)===(t.position||l)&&n.height})),d=f.findIndex((function(n){return n.id===t.id})),p=f.filter((function(t,n){return n<d&&t.visible})).length;return(r=f.filter((function(t){return t.visible}))).slice.apply(r,(0,a.Z)(s?[p+1]:[0,p])).reduce((function(t,n){return t+(n.height||0)+u}),0)}),[e]);return{toasts:e,handlers:{updateHeight:nt,startPause:et,endPause:i,calculateOffset:s}}},ot=B(k||(k=(0,r.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),at=B(Z||(Z=(0,r.Z)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),it=B(P||(P=(0,r.Z)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),st=U("div")(C||(C=(0,r.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(t){return t.primary||"#ff4b4b"}),ot,at,(function(t){return t.secondary||"#fff"}),it),ct=B(D||(D=(0,r.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),ut=U("div")(z||(z=(0,r.Z)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(t){return t.secondary||"#e0e0e0"}),(function(t){return t.primary||"#616161"}),ct),lt=B(N||(N=(0,r.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),ft=B(A||(A=(0,r.Z)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),dt=U("div")(I||(I=(0,r.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(t){return t.primary||"#61d345"}),lt,ft,(function(t){return t.secondary||"#fff"})),pt=U("div")(M||(M=(0,r.Z)(["\n  position: absolute;\n"]))),mt=U("div")(_||(_=(0,r.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),vt=B(S||(S=(0,r.Z)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),gt=U("div")(T||(T=(0,r.Z)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),vt),yt=function(t){var n=t.toast,e=n.icon,r=n.type,o=n.iconTheme;return void 0!==e?"string"==typeof e?l.createElement(gt,null,e):e:"blank"===r?null:l.createElement(mt,null,l.createElement(ut,u({},o)),"loading"!==r&&l.createElement(pt,null,"error"===r?l.createElement(st,u({},o)):l.createElement(dt,u({},o))))},bt=function(t){return"\n0% {transform: translate3d(0,".concat(-200*t,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},ht=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*t,"%,-1px) scale(.6); opacity:0;}\n")},xt=U("div")(F||(F=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),wt=U("div")(H||(H=(0,r.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),Ot=l.memo((function(t){var n=t.toast,e=t.position,r=t.style,a=t.children,i=n.height?function(t,n){var e=t.includes("top")?1:-1,r=R()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[bt(e),ht(e)],a=(0,o.Z)(r,2),i=a[0],s=a[1];return{animation:n?"".concat(B(i)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(B(s)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(n.position||e||"top-center",n.visible):{opacity:0},s=l.createElement(yt,{toast:n}),c=l.createElement(wt,u({},n.ariaProps),Y(n.message,n));return l.createElement(xt,{className:n.className,style:u(u(u({},i),r),n.style)},"function"==typeof a?a({icon:s,message:c}):l.createElement(l.Fragment,null,s,c))}));!function(t,n,e,r){g.p=n,O=t,E=e,j=r}(l.createElement);var Et=function(t){var n=t.id,e=t.className,r=t.style,o=t.onHeightUpdate,a=t.children,i=l.useCallback((function(t){if(t){var e=function(){var e=t.getBoundingClientRect().height;o(n,e)};e(),new MutationObserver(e).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[n,o]);return l.createElement("div",{ref:i,className:e,style:r},a)},jt=w(L||(L=(0,r.Z)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),kt=function(t){var n=t.reverseOrder,e=t.position,r=void 0===e?"top-center":e,o=t.toastOptions,a=t.gutter,i=t.children,s=t.containerStyle,c=t.containerClassName,f=rt(o),d=f.toasts,p=f.handlers;return l.createElement("div",{style:u({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},s),className:c,onMouseEnter:p.startPause,onMouseLeave:p.endPause},d.map((function(t){var e=t.position||r,o=function(t,n){var e=t.includes("top"),r=e?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return u(u({left:0,right:0,display:"flex",position:"absolute",transition:R()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(n*(e?1:-1),"px)")},r),o)}(e,p.calculateOffset(t,{reverseOrder:n,gutter:a,defaultPosition:r}));return l.createElement(Et,{id:t.id,key:t.id,onHeightUpdate:p.updateHeight,className:t.visible?jt:"",style:o},"custom"===t.type?Y(t.message,t):i?i(t):l.createElement(Ot,{toast:t,position:e}))})))},Zt=tt}}]);
//# sourceMappingURL=32.51004b7b.chunk.js.map