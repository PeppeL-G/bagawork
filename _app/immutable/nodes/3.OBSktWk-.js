import{s as he,c as Tn,u as yn,g as Mn,b as In,f as ce,y as pe,d as X,r as Re,z as Se,n as Te,a as tt,i as nt,A as ut,o as cn}from"../chunks/scheduler.UQwd20JU.js";import{S as ve,i as we,e as _,a as T,d as I,h as w,o as k,j as N,D as q,F as ze,t as E,k as O,G as ge,c as H,f as W,m as J,l as K,I as Be,s as j,r as de,g as te,b as $,u as ue,v as U,p,C as Pe,q as me,A as ye,z as Me,x as rt,w as De,J as _t,E as Ze,y as kn}from"../chunks/index.i__Fl8cY.js";import{e as Ce,u as at,d as dn,o as un}from"../chunks/each.n0BxkhDy.js";import{a as xe,s as Sn,g as Ve,F as hn}from"../chunks/show-app-in-element.jBatBI3F.js";import{w as qe}from"../chunks/index.XMEJNxjj.js";import{a as lt,g as fn}from"../chunks/project-compressor.czbMZsOP.js";import"../chunks/index.07BtHkFf.js";function Cn(r){let e,t,n,o;const i=r[3].default,a=Tn(i,r,r[2],null);return{c(){e=_("div"),a&&a.c(),this.h()},l(s){e=T(s,"DIV",{class:!0});var l=I(e);a&&a.l(l),l.forEach(w),this.h()},h(){k(e,"class","modal svelte-pjkfh")},m(s,l){N(s,e,l),a&&a.m(e,null),t=!0,n||(o=q(e,"click",ze(r[0])),n=!0)},p(s,[l]){a&&a.p&&(!t||l&4)&&yn(a,i,s,s[2],t?In(i,s[2],l,null):Mn(s[2]),null)},i(s){t||(E(a,s),t=!0)},o(s){O(a,s),t=!1},d(s){s&&w(e),a&&a.d(s),n=!1,o()}}}function En(r,e,t){let{$$slots:n={},$$scope:o}=e,{showModal:i}=e;function a(s){s.target==s.currentTarget&&t(1,i=!1)}return r.$$set=s=>{"showModal"in s&&t(1,i=s.showModal),"$$scope"in s&&t(2,o=s.$$scope)},[a,i,o,n]}class Ne extends ve{constructor(e){super(),we(this,e,En,Cn,he,{showModal:1})}}const Ae=qe({}),Ee=qe({}),Oe=qe([]),Ie=qe([]),Ue=qe([]);function An(r){let e,t,n="Edit settings",o,i,a,s="Folder screen",l,c,u="The size of the preview screens on the folder page, and when selecting a page template.",d,v,g,y,S,b,h,m,f,M,x="Preview folder screen size",Y,P,V,se="Code screen",R,ae,F="The size of the preview screen on the pages where you edit code.",Z,A,C,D,G,oe,_e,L,ke,Q,le="Preview code screen size",fe,be;return{c(){e=_("div"),t=_("h1"),t.textContent=n,o=j(),i=_("div"),a=_("h2"),a.textContent=s,l=j(),c=_("p"),c.textContent=u,d=j(),v=_("div"),g=de(`Width in mm:
				`),y=_("input"),S=j(),b=_("div"),h=de(`Height in mm:
				`),m=_("input"),f=j(),M=_("div"),M.textContent=x,Y=j(),P=_("div"),V=_("h2"),V.textContent=se,R=j(),ae=_("p"),ae.textContent=F,Z=j(),A=_("div"),C=de(`Width in mm:
				`),D=_("input"),G=j(),oe=_("div"),_e=de(`Height in mm:
				`),L=_("input"),ke=j(),Q=_("div"),Q.textContent=le,this.h()},l(ie){e=T(ie,"DIV",{class:!0});var ne=I(e);t=T(ne,"H1",{"data-svelte-h":!0}),te(t)!=="svelte-12605jx"&&(t.textContent=n),o=$(ne),i=T(ne,"DIV",{class:!0});var ee=I(i);a=T(ee,"H2",{"data-svelte-h":!0}),te(a)!=="svelte-1eysbo6"&&(a.textContent=s),l=$(ee),c=T(ee,"P",{"data-svelte-h":!0}),te(c)!=="svelte-1pajsxr"&&(c.textContent=u),d=$(ee),v=T(ee,"DIV",{});var B=I(v);g=ue(B,`Width in mm:
				`),y=T(B,"INPUT",{type:!0,min:!0}),B.forEach(w),S=$(ee),b=T(ee,"DIV",{});var z=I(b);h=ue(z,`Height in mm:
				`),m=T(z,"INPUT",{type:!0,min:!0}),z.forEach(w),f=$(ee),M=T(ee,"DIV",{class:!0,"data-svelte-h":!0}),te(M)!=="svelte-1ewgrlo"&&(M.textContent=x),ee.forEach(w),Y=$(ne),P=T(ne,"DIV",{class:!0});var re=I(P);V=T(re,"H2",{"data-svelte-h":!0}),te(V)!=="svelte-1k237qn"&&(V.textContent=se),R=$(re),ae=T(re,"P",{"data-svelte-h":!0}),te(ae)!=="svelte-1mtgj5z"&&(ae.textContent=F),Z=$(re),A=T(re,"DIV",{});var je=I(A);C=ue(je,`Width in mm:
				`),D=T(je,"INPUT",{type:!0,min:!0}),je.forEach(w),G=$(re),oe=T(re,"DIV",{});var $e=I(oe);_e=ue($e,`Height in mm:
				`),L=T($e,"INPUT",{type:!0,min:!0}),$e.forEach(w),ke=$(re),Q=T(re,"DIV",{class:!0,"data-svelte-h":!0}),te(Q)!=="svelte-icwf2t"&&(Q.textContent=le),re.forEach(w),ne.forEach(w),this.h()},h(){k(y,"type","number"),k(y,"min","1"),k(m,"type","number"),k(m,"min","1"),k(M,"class","screen svelte-1wsz6vm"),U(M,"width",`${r[1].folderScreen.widthInMm}mm`),U(M,"height",`${r[1].folderScreen.heightInMm}mm`),k(i,"class","group svelte-1wsz6vm"),k(D,"type","number"),k(D,"min","1"),k(L,"type","number"),k(L,"min","1"),k(Q,"class","screen svelte-1wsz6vm"),U(Q,"width",`${r[1].codeScreen.widthInMm}mm`),U(Q,"height",`${r[1].codeScreen.heightInMm}mm`),k(P,"class","group svelte-1wsz6vm"),k(e,"class","edit-settings-modal svelte-1wsz6vm")},m(ie,ne){N(ie,e,ne),p(e,t),p(e,o),p(e,i),p(i,a),p(i,l),p(i,c),p(i,d),p(i,v),p(v,g),p(v,y),Pe(y,r[1].folderScreen.widthInMm),p(i,S),p(i,b),p(b,h),p(b,m),Pe(m,r[1].folderScreen.heightInMm),p(i,f),p(i,M),p(e,Y),p(e,P),p(P,V),p(P,R),p(P,ae),p(P,Z),p(P,A),p(A,C),p(A,D),Pe(D,r[1].codeScreen.widthInMm),p(P,G),p(P,oe),p(oe,_e),p(oe,L),Pe(L,r[1].codeScreen.heightInMm),p(P,ke),p(P,Q),fe||(be=[q(y,"input",r[2]),q(m,"input",r[3]),q(D,"input",r[4]),q(L,"input",r[5])],fe=!0)},p(ie,ne){ne&2&&Be(y.value)!==ie[1].folderScreen.widthInMm&&Pe(y,ie[1].folderScreen.widthInMm),ne&2&&Be(m.value)!==ie[1].folderScreen.heightInMm&&Pe(m,ie[1].folderScreen.heightInMm),ne&2&&U(M,"width",`${ie[1].folderScreen.widthInMm}mm`),ne&2&&U(M,"height",`${ie[1].folderScreen.heightInMm}mm`),ne&2&&Be(D.value)!==ie[1].codeScreen.widthInMm&&Pe(D,ie[1].codeScreen.widthInMm),ne&2&&Be(L.value)!==ie[1].codeScreen.heightInMm&&Pe(L,ie[1].codeScreen.heightInMm),ne&2&&U(Q,"width",`${ie[1].codeScreen.widthInMm}mm`),ne&2&&U(Q,"height",`${ie[1].codeScreen.heightInMm}mm`)},d(ie){ie&&w(e),fe=!1,Re(be)}}}function jn(r){let e,t,n;function o(a){r[6](a)}let i={$$slots:{default:[An]},$$scope:{ctx:r}};return r[0]!==void 0&&(i.showModal=r[0]),e=new Ne({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,[s]){const l={};s&130&&(l.$$scope={dirty:s,ctx:a}),!t&&s&1&&(t=!0,l.showModal=a[0],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function $n(r,e,t){let n;X(r,Ae,u=>t(1,n=u));let{showModal:o=!0}=e;function i(){n.folderScreen.widthInMm=Be(this.value),Ae.set(n)}function a(){n.folderScreen.heightInMm=Be(this.value),Ae.set(n)}function s(){n.codeScreen.widthInMm=Be(this.value),Ae.set(n)}function l(){n.codeScreen.heightInMm=Be(this.value),Ae.set(n)}function c(u){o=u,t(0,o)}return r.$$set=u=>{"showModal"in u&&t(0,o=u.showModal)},[o,n,i,a,s,l,c]}class On extends ve{constructor(e){super(),we(this,e,$n,jn,he,{showModal:0})}}function Tt(r,e,t){const n=r.slice();return n[16]=e[t],n}function yt(r){let e,t,n="Copy project to clipboard as recreational link",o,i;return{c(){e=_("div"),t=_("button"),t.textContent=n},l(a){e=T(a,"DIV",{});var s=I(e);t=T(s,"BUTTON",{"data-svelte-h":!0}),te(t)!=="svelte-133s4n0"&&(t.textContent=n),s.forEach(w)},m(a,s){N(a,e,s),p(e,t),o||(i=q(t,"click",r[3]),o=!0)},p:Te,d(a){a&&w(e),o=!1,i()}}}function Mt(r){let e,t,n="Save project to BAGA file",o,i,a,s,l,c='<label for="file">Load project from Baga file</label>',u,d;return{c(){e=_("div"),t=_("button"),t.textContent=n,o=j(),i=_("div"),a=_("input"),s=j(),l=_("button"),l.innerHTML=c,this.h()},l(v){e=T(v,"DIV",{});var g=I(e);t=T(g,"BUTTON",{"data-svelte-h":!0}),te(t)!=="svelte-1g98l3d"&&(t.textContent=n),g.forEach(w),o=$(v),i=T(v,"DIV",{});var y=I(i);a=T(y,"INPUT",{type:!0,id:!0,style:!0,accept:!0}),s=$(y),l=T(y,"BUTTON",{class:!0,"data-svelte-h":!0}),te(l)!=="svelte-1ucarmc"&&(l.innerHTML=c),y.forEach(w),this.h()},h(){k(a,"type","file"),k(a,"id","file"),U(a,"display","none"),k(a,"accept",".baga"),k(l,"class","open-button")},m(v,g){N(v,e,g),p(e,t),N(v,o,g),N(v,i,g),p(i,a),p(i,s),p(i,l),u||(d=[q(t,"click",r[4]),q(a,"change",r[5])],u=!0)},p:Te,d(v){v&&(w(e),w(o),w(i)),u=!1,Re(d)}}}function It(r){let e,t,n=r[16].text+"",o,i,a,s;function l(){return r[8](r[16])}return{c(){e=_("div"),t=_("button"),o=de(n),i=j()},l(c){e=T(c,"DIV",{});var u=I(e);t=T(u,"BUTTON",{});var d=I(t);o=ue(d,n),d.forEach(w),i=$(u),u.forEach(w)},m(c,u){N(c,e,u),p(e,t),p(t,o),p(e,i),a||(s=q(t,"click",l),a=!0)},p(c,u){r=c,u&2&&n!==(n=r[16].text+"")&&De(o,n)},d(c){c&&w(e),a=!1,s()}}}function Dn(r){let e,t,n="Main menu",o,i,a,s,l="Edit settings",c,u,d,v,g=r[1].showCopyLinkButton&&yt(r),y=r[1].showFileButtons&&Mt(r),S=Ce(r[1].extraOptions),b=[];for(let h=0;h<S.length;h+=1)b[h]=It(Tt(r,S,h));return{c(){e=_("div"),t=_("h1"),t.textContent=n,o=j(),g&&g.c(),i=j(),a=_("div"),s=_("button"),s.textContent=l,c=j(),y&&y.c(),u=j();for(let h=0;h<b.length;h+=1)b[h].c();this.h()},l(h){e=T(h,"DIV",{class:!0});var m=I(e);t=T(m,"H1",{class:!0,"data-svelte-h":!0}),te(t)!=="svelte-1x9r302"&&(t.textContent=n),o=$(m),g&&g.l(m),i=$(m),a=T(m,"DIV",{});var f=I(a);s=T(f,"BUTTON",{"data-svelte-h":!0}),te(s)!=="svelte-1m9tkp0"&&(s.textContent=l),f.forEach(w),c=$(m),y&&y.l(m),u=$(m);for(let M=0;M<b.length;M+=1)b[M].l(m);m.forEach(w),this.h()},h(){k(t,"class","svelte-tgu2et"),k(e,"class","main-menu-modal svelte-tgu2et")},m(h,m){N(h,e,m),p(e,t),p(e,o),g&&g.m(e,null),p(e,i),p(e,a),p(a,s),p(e,c),y&&y.m(e,null),p(e,u);for(let f=0;f<b.length;f+=1)b[f]&&b[f].m(e,null);d||(v=q(s,"click",r[7]),d=!0)},p(h,m){if(h[1].showCopyLinkButton?g?g.p(h,m):(g=yt(h),g.c(),g.m(e,i)):g&&(g.d(1),g=null),h[1].showFileButtons?y?y.p(h,m):(y=Mt(h),y.c(),y.m(e,u)):y&&(y.d(1),y=null),m&66){S=Ce(h[1].extraOptions);let f;for(f=0;f<S.length;f+=1){const M=Tt(h,S,f);b[f]?b[f].p(M,m):(b[f]=It(M),b[f].c(),b[f].m(e,null))}for(;f<b.length;f+=1)b[f].d(1);b.length=S.length}},d(h){h&&w(e),g&&g.d(),y&&y.d(),rt(b,h),d=!1,v()}}}function kt(r){let e,t,n;function o(a){r[10](a)}let i={};return r[2]!==void 0&&(i.showModal=r[2]),e=new On({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,s){const l={};!t&&s&4&&(t=!0,l.showModal=a[2],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function Pn(r){let e,t,n,o,i;function a(c){r[9](c)}let s={$$slots:{default:[Dn]},$$scope:{ctx:r}};r[0]!==void 0&&(s.showModal=r[0]),e=new Ne({props:s}),ce.push(()=>ge(e,"showModal",a));let l=r[2]&&kt(r);return{c(){H(e.$$.fragment),n=j(),l&&l.c(),o=me()},l(c){W(e.$$.fragment,c),n=$(c),l&&l.l(c),o=me()},m(c,u){J(e,c,u),N(c,n,u),l&&l.m(c,u),N(c,o,u),i=!0},p(c,[u]){const d={};u&524294&&(d.$$scope={dirty:u,ctx:c}),!t&&u&1&&(t=!0,d.showModal=c[0],pe(()=>t=!1)),e.$set(d),c[2]?l?(l.p(c,u),u&4&&E(l,1)):(l=kt(c),l.c(),E(l,1),l.m(o.parentNode,o)):l&&(ye(),O(l,1,1,()=>{l=null}),Me())},i(c){i||(E(e.$$.fragment,c),E(l),i=!0)},o(c){O(e.$$.fragment,c),O(l),i=!1},d(c){c&&(w(n),w(o)),K(e,c),l&&l.d(c)}}}function Vn(r,e,t){let n,o,i,a;X(r,Ue,f=>t(11,n=f)),X(r,Ie,f=>t(12,o=f)),X(r,Oe,f=>t(13,i=f)),X(r,Ee,f=>t(14,a=f));let{showModal:s=!0}=e,{options:l={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[]}}=e,c=!1;function u(){return{app:a,folders:i,pages:o,pageTemplates:n}}async function d(){const M=`https://bagawork.com/editor#${lt(u())}`;navigator.clipboard.writeText(M)}function v(){const f=lt(u()),M=document.createElement("a");M.href="data:application/octet-stream,"+encodeURIComponent(f),M.download=`${xe(a.code)}.baga`,M.click()}function g(f){const M=f.target.files;if(M.length==0)return;const x=M[0],Y=new FileReader;Y.readAsText(x),Y.addEventListener("load",P=>{try{const V=fn(P.target.result);V.app&&V.folders&&V.pages&&V.pageTemplates?(Se(Ee,a=V.app,a),Se(Oe,i=V.folders,i),Se(Ie,o=V.pages,o),Se(Ue,n=V.pageTemplates,n),t(0,s=!1)):alert("Error: The BAGA file could be parsed, but didn't contain all expected data.")}catch{alert("Error: The file is not a valid BAGA file.")}})}function y(f){const M=lt(u());f.onClick(M)}const S=()=>t(2,c=!0),b=f=>y(f);function h(f){s=f,t(0,s)}function m(f){c=f,t(2,c)}return r.$$set=f=>{"showModal"in f&&t(0,s=f.showModal),"options"in f&&t(1,l=f.options)},[s,l,c,d,v,g,y,S,b,h,m]}class xn extends ve{constructor(e){super(),we(this,e,Vn,Pn,he,{showModal:0,options:1})}}function Rn(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function St(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,n)}return t}function Ct(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?St(Object(t),!0).forEach(function(n){Rn(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):St(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function Nn(r,e){if(r==null)return{};var t={},n=Object.keys(r),o,i;for(i=0;i<n.length;i++)o=n[i],!(e.indexOf(o)>=0)&&(t[o]=r[o]);return t}function Bn(r,e){if(r==null)return{};var t=Nn(r,e),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(o=0;o<i.length;o++)n=i[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(r,n)&&(t[n]=r[n])}return t}function Un(r,e){return Ln(r)||Fn(r,e)||Yn(r,e)||zn()}function Ln(r){if(Array.isArray(r))return r}function Fn(r,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(r)))){var t=[],n=!0,o=!1,i=void 0;try{for(var a=r[Symbol.iterator](),s;!(n=(s=a.next()).done)&&(t.push(s.value),!(e&&t.length===e));n=!0);}catch(l){o=!0,i=l}finally{try{!n&&a.return!=null&&a.return()}finally{if(o)throw i}}return t}}function Yn(r,e){if(r){if(typeof r=="string")return Et(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Et(r,e)}}function Et(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function zn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gn(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function At(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,n)}return t}function jt(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?At(Object(t),!0).forEach(function(n){Gn(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):At(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function Xn(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return function(n){return e.reduceRight(function(o,i){return i(o)},n)}}function Ye(r){return function e(){for(var t=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=r.length?r.apply(this,o):function(){for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return e.apply(t,[].concat(o,s))}}}function et(r){return{}.toString.call(r).includes("Object")}function qn(r){return!Object.keys(r).length}function Ge(r){return typeof r=="function"}function Hn(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function Wn(r,e){return et(e)||Le("changeType"),Object.keys(e).some(function(t){return!Hn(r,t)})&&Le("changeField"),e}function Jn(r){Ge(r)||Le("selectorType")}function Kn(r){Ge(r)||et(r)||Le("handlerType"),et(r)&&Object.values(r).some(function(e){return!Ge(e)})&&Le("handlersType")}function Qn(r){r||Le("initialIsRequired"),et(r)||Le("initialType"),qn(r)&&Le("initialContent")}function Zn(r,e){throw new Error(r[e]||r.default)}var er={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Le=Ye(Zn)(er),Qe={changes:Wn,selector:Jn,handler:Kn,initial:Qn};function tr(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Qe.initial(r),Qe.handler(e);var t={current:r},n=Ye(ar)(t,e),o=Ye(rr)(t),i=Ye(Qe.changes)(r),a=Ye(nr)(t);function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(u){return u};return Qe.selector(c),c(t.current)}function l(c){Xn(n,o,i,a)(c)}return[s,l]}function nr(r,e){return Ge(e)?e(r.current):e}function rr(r,e){return r.current=jt(jt({},r.current),e),e}function ar(r,e,t){return Ge(e)?e(r.current):Object.keys(t).forEach(function(n){var o;return(o=e[n])===null||o===void 0?void 0:o.call(e,r.current[n])}),t}var or={create:tr},ir={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}};function sr(r){return function e(){for(var t=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=r.length?r.apply(this,o):function(){for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return e.apply(t,[].concat(o,s))}}}function lr(r){return{}.toString.call(r).includes("Object")}function cr(r){return r||$t("configIsRequired"),lr(r)||$t("configType"),r.urls?(dr(),{paths:{vs:r.urls.monacoBase}}):r}function dr(){console.warn(mn.deprecation)}function ur(r,e){throw new Error(r[e]||r.default)}var mn={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},$t=sr(ur)(mn),hr={config:cr},fr=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(o){return t.reduceRight(function(i,a){return a(i)},o)}};function pn(r,e){return Object.keys(e).forEach(function(t){e[t]instanceof Object&&r[t]&&Object.assign(e[t],pn(r[t],e[t]))}),Ct(Ct({},r),e)}var mr={type:"cancelation",msg:"operation is manually canceled"};function ct(r){var e=!1,t=new Promise(function(n,o){r.then(function(i){return e?o(mr):n(i)}),r.catch(o)});return t.cancel=function(){return e=!0},t}var pr=or.create({config:ir,isInitialized:!1,resolve:null,reject:null,monaco:null}),gn=Un(pr,2),He=gn[0],ot=gn[1];function gr(r){var e=hr.config(r),t=e.monaco,n=Bn(e,["monaco"]);ot(function(o){return{config:pn(o.config,n),monaco:t}})}function br(){var r=He(function(e){var t=e.monaco,n=e.isInitialized,o=e.resolve;return{monaco:t,isInitialized:n,resolve:o}});if(!r.isInitialized){if(ot({isInitialized:!0}),r.monaco)return r.resolve(r.monaco),ct(dt);if(window.monaco&&window.monaco.editor)return bn(window.monaco),r.resolve(window.monaco),ct(dt);fr(vr,_r)(Tr)}return ct(dt)}function vr(r){return document.body.appendChild(r)}function wr(r){var e=document.createElement("script");return r&&(e.src=r),e}function _r(r){var e=He(function(n){var o=n.config,i=n.reject;return{config:o,reject:i}}),t=wr("".concat(e.config.paths.vs,"/loader.js"));return t.onload=function(){return r()},t.onerror=e.reject,t}function Tr(){var r=He(function(t){var n=t.config,o=t.resolve,i=t.reject;return{config:n,resolve:o,reject:i}}),e=window.require;e.config(r.config),e(["vs/editor/editor.main"],function(t){bn(t),r.resolve(t)},function(t){r.reject(t)})}function bn(r){He().monaco||ot({monaco:r})}function yr(){return He(function(r){var e=r.monaco;return e})}var dt=new Promise(function(r,e){return ot({resolve:r,reject:e})}),vn={config:gr,init:br,__getMonacoInstance:yr};const Mr=`// https://github.com/microsoft/TypeScript/blob/70b7de11fbadb16d30f6770332f544c44134eb82/src/lib/es5.d.ts#L1295
interface Array<T> {
	/**
	 * Gets or sets the length of the array. This is a number one higher than the highest index in the array.
	 */
	length: number;
	/**
	 * Returns a string representation of an array.
	 */
	toString(): string;
	/**
	 * Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.
	 */
	toLocaleString(): string;
	/**
	 * Removes the last element from an array and returns it.
	 * If the array is empty, undefined is returned and the array is not modified.
	 */
	pop(): T | undefined;
	/**
	 * Appends new elements to the end of an array, and returns the new length of the array.
	 * @param items New elements to add to the array.
	 */
	push(...items: T[]): number;
	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 * @param items Additional arrays and/or items to add to the end of the array.
	 */
	concat(...items: ConcatArray<T>[]): T[];
	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 * @param items Additional arrays and/or items to add to the end of the array.
	 */
	concat(...items: (T | ConcatArray<T>)[]): T[];
	/**
	 * Adds all the elements of an array into a string, separated by the specified separator string.
	 * @param separator A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
	 */
	join(separator?: string): string;
	/**
	 * Reverses the elements in an array in place.
	 * This method mutates the array and returns a reference to the same array.
	 */
	reverse(): T[];
	/**
	 * Removes the first element from an array and returns it.
	 * If the array is empty, undefined is returned and the array is not modified.
	 */
	shift(): T | undefined;
	/**
	 * Returns a copy of a section of an array.
	 * For both start and end, a negative index can be used to indicate an offset from the end of the array.
	 * For example, -2 refers to the second to last element of the array.
	 * @param start The beginning index of the specified portion of the array.
	 * If start is undefined, then the slice begins at index 0.
	 * @param end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
	 * If end is undefined, then the slice extends to the end of the array.
	 */
	slice(start?: number, end?: number): T[];
	/**
	 * Sorts an array in place.
	 * This method mutates the array and returns a reference to the same array.
	 * @param compareFn Function used to determine the order of the elements. It is expected to return
	 * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
	 * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
	 * \`\`\`ts
	 * [11,2,22,1].sort((a, b) => a - b)
	 * \`\`\`
	 */
	sort(compareFn?: (a: T, b: T) => number): this;
	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 * @param start The zero-based location in the array from which to start removing elements.
	 * @param deleteCount The number of elements to remove.
	 * @returns An array containing the elements that were deleted.
	 */
	splice(start: number, deleteCount?: number): T[];
	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 * @param start The zero-based location in the array from which to start removing elements.
	 * @param deleteCount The number of elements to remove.
	 * @param items Elements to insert into the array in place of the deleted elements.
	 * @returns An array containing the elements that were deleted.
	 */
	splice(start: number, deleteCount: number, ...items: T[]): T[];
	/**
	 * Inserts new elements at the start of an array, and returns the new length of the array.
	 * @param items Elements to insert at the start of the array.
	 */
	unshift(...items: T[]): number;
	/**
	 * Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
	 * @param searchElement The value to locate in the array.
	 * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
	 */
	indexOf(searchElement: T, fromIndex?: number): number;
	/**
	 * Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
	 * @param searchElement The value to locate in the array.
	 * @param fromIndex The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.
	 */
	lastIndexOf(searchElement: T, fromIndex?: number): number;
	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 * @param predicate A function that accepts up to three arguments. The every method calls
	 * the predicate function for each element in the array until the predicate returns a value
	 * which is coercible to the Boolean value false, or until the end of the array.
	 * @param thisArg An object to which the this keyword can refer in the predicate function.
	 * If thisArg is omitted, undefined is used as the this value.
	 */
	every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[];
	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 * @param predicate A function that accepts up to three arguments. The every method calls
	 * the predicate function for each element in the array until the predicate returns a value
	 * which is coercible to the Boolean value false, or until the end of the array.
	 * @param thisArg An object to which the this keyword can refer in the predicate function.
	 * If thisArg is omitted, undefined is used as the this value.
	 */
	every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
	/**
	 * Determines whether the specified callback function returns true for any element of an array.
	 * @param predicate A function that accepts up to three arguments. The some method calls
	 * the predicate function for each element in the array until the predicate returns a value
	 * which is coercible to the Boolean value true, or until the end of the array.
	 * @param thisArg An object to which the this keyword can refer in the predicate function.
	 * If thisArg is omitted, undefined is used as the this value.
	 */
	some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
	/**
	 * Performs the specified action for each element in an array.
	 * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
	 * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
	 */
	forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
	/**
	 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
	 * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
	 * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
	 */
	map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
	 * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
	 */
	filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
	 * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
	 */
	filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
	 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
	 */
	reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
	reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
	 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
	 */
	reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
	 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
	 */
	reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
	reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
	 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
	 */
	reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;

	[n: number]: T;
}`,Ir=`// https://github.com/microsoft/TypeScript/blob/main/src/lib/es5.d.ts
interface String {
	/** Returns a string representation of a string. */
	//toString(): string;

	/**
	 * Returns the character at the specified index.
	 * @param pos The zero-based index of the desired character.
	 */
	charAt(pos: number): string;

	/**
	 * Returns the Unicode value of the character at the specified location.
	 * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
	 */
	//charCodeAt(index: number): number;

	/**
	 * Returns a string that contains the concatenation of two or more strings.
	 * @param strings The strings to append to the end of the string.
	 */
	concat(...strings: string[]): string;

	/**
	 * Returns the position of the first occurrence of a substring.
	 * @param searchString The substring to search for in the string
	 * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
	 */
	indexOf(searchString: string, position?: number): number;

	/**
	 * Returns the last occurrence of a substring in the string.
	 * @param searchString The substring to search for.
	 * @param position The index at which to begin searching. If omitted, the search begins at the end of the string.
	 */
	lastIndexOf(searchString: string, position?: number): number;

	/**
	 * Determines whether two strings are equivalent in the current locale.
	 * @param that String to compare to target string
	 */
	localeCompare(that: string): number;

	/**
	 * Matches a string with a regular expression, and returns an array containing the results of that search.
	 * @param regexp A variable name or string literal containing the regular expression pattern and flags.
	 */
	//match(regexp: string | RegExp): RegExpMatchArray | null;

	/**
	 * Replaces text in a string, using a regular expression or search string.
	 * @param searchValue A string or regular expression to search for.
	 * @param replaceValue A string containing the text to replace. When the {@linkcode searchValue} is a \`RegExp\`, all matches are replaced if the \`g\` flag is set (or only those matches at the beginning, if the \`y\` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced.
	 */
	replace(searchValue: string | RegExp, replaceValue: string): string;

	/**
	 * Replaces text in a string, using a regular expression or search string.
	 * @param searchValue A string to search for.
	 * @param replacer A function that returns the replacement text.
	 */
	replace(searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string;

	/**
	 * Finds the first substring match in a regular expression search.
	 * @param regexp The regular expression pattern and applicable flags.
	 */
	search(regexp: string | RegExp): number;

	/**
	 * Returns a section of a string.
	 * @param start The index to the beginning of the specified portion of stringObj.
	 * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
	 * If this value is not specified, the substring continues to the end of stringObj.
	 */
	slice(start?: number, end?: number): string;

	/**
	 * Split a string into substrings using the specified separator and return them as an array.
	 * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
	 * @param limit A value used to limit the number of elements returned in the array.
	 */
	split(separator: string | RegExp, limit?: number): string[];

	/**
	 * Returns the substring at the specified location within a String object.
	 * @param start The zero-based index number indicating the beginning of the substring.
	 * @param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
	 * If end is omitted, the characters from start through the end of the original string are returned.
	 */
	substring(start: number, end?: number): string;

	/** Converts all the alphabetic characters in a string to lowercase. */
	toLowerCase(): string;

	/** Converts all alphabetic characters to lowercase, taking into account the host environment's current locale. */
	//toLocaleLowerCase(locales?: string | string[]): string;

	/** Converts all the alphabetic characters in a string to uppercase. */
	toUpperCase(): string;

	/** Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale. */
	//toLocaleUpperCase(locales?: string | string[]): string;

	/** Removes the leading and trailing white space and line terminator characters from a string. */
	trim(): string;

	/** Returns the length of a String object. */
	readonly length: number;

	// IE extensions
	/**
	 * Gets a substring beginning at the specified location and having the specified length.
	 * @deprecated A legacy feature for browser compatibility
	 * @param from The starting position of the desired substring. The index of the first character in the string is zero.
	 * @param length The number of characters to include in the returned substring.
	 */
	//substr(from: number, length?: number): string;

	/** Returns the primitive value of the specified object. */
	//valueOf(): string;

	readonly [index: number]: string;
}`,kr=`// https://github.com/microsoft/TypeScript/blob/70b7de11fbadb16d30f6770332f544c44134eb82/src/lib/es5.d.ts#L633C2-L742C24
interface Math {
    /** The mathematical constant e. This is Euler's number, the base of natural logarithms. */
    //readonly E: number;
    /** The natural logarithm of 10. */
    //readonly LN10: number;
    /** The natural logarithm of 2. */
    //readonly LN2: number;
    /** The base-2 logarithm of e. */
    //readonly LOG2E: number;
    /** The base-10 logarithm of e. */
    //readonly LOG10E: number;
    /** Pi. This is the ratio of the circumference of a circle to its diameter. */
    readonly PI: number;
    /** The square root of 0.5, or, equivalently, one divided by the square root of 2. */
    //readonly SQRT1_2: number;
    /** The square root of 2. */
    //readonly SQRT2: number;
	/**
	 * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
	 * For example, the absolute value of -5 is the same as the absolute value of 5.
	 * @param x A numeric expression for which the absolute value is needed.
	 */
	abs(x: number): number;
	/**
	 * Returns the arc cosine (or inverse cosine) of a number.
	 * @param x A numeric expression.
	 */
	acos(x: number): number;
	/**
	 * Returns the arcsine of a number.
	 * @param x A numeric expression.
	 */
	asin(x: number): number;
	/**
	 * Returns the arctangent of a number.
	 * @param x A numeric expression for which the arctangent is needed.
	 */
	atan(x: number): number;
	/**
	 * Returns the angle (in radians) from the X axis to a point.
	 * @param y A numeric expression representing the cartesian y-coordinate.
	 * @param x A numeric expression representing the cartesian x-coordinate.
	 */
	atan2(y: number, x: number): number;
	/**
	 * Returns the smallest integer greater than or equal to its numeric argument.
	 * @param x A numeric expression.
	 */
	ceil(x: number): number;
	/**
	 * Returns the cosine of a number.
	 * @param x A numeric expression that contains an angle measured in radians.
	 */
	cos(x: number): number;
	/**
	 * Returns e (the base of natural logarithms) raised to a power.
	 * @param x A numeric expression representing the power of e.
	 */
	exp(x: number): number;
	/**
	 * Returns the greatest integer less than or equal to its numeric argument.
	 * @param x A numeric expression.
	 */
	floor(x: number): number;
	/**
	 * Returns the natural logarithm (base e) of a number.
	 * @param x A numeric expression.
	 */
	log(x: number): number;
	/**
	 * Returns the larger of a set of supplied numeric expressions.
	 * @param values Numeric expressions to be evaluated.
	 */
	max(...values: number[]): number;
	/**
	 * Returns the smaller of a set of supplied numeric expressions.
	 * @param values Numeric expressions to be evaluated.
	 */
	min(...values: number[]): number;
	/**
	 * Returns the value of a base expression taken to a specified power.
	 * @param x The base value of the expression.
	 * @param y The exponent value of the expression.
	 */
	pow(x: number, y: number): number;
	/** Returns a pseudorandom number between 0 and 1. */
	random(): number;
	/**
	 * Returns a supplied numeric expression rounded to the nearest integer.
	 * @param x The value to be rounded to the nearest integer.
	 */
	round(x: number): number;
	/**
	 * Returns the sine of a number.
	 * @param x A numeric expression that contains an angle measured in radians.
	 */
	sin(x: number): number;
	/**
	 * Returns the square root of a number.
	 * @param x A numeric expression.
	 */
	sqrt(x: number): number;
	/**
	 * Returns the tangent of a number.
	 * @param x A numeric expression that contains an angle measured in radians.
	 */
	tan(x: number): number;
}
/** An intrinsic object that provides basic mathematics functionality and constants. */
declare var Math: Math;`,Sr=`/**
 * This class represents global information about your
 * application (information that outlives individual pages).
 * You should create your own class that extends this class,
 * and in which you override some methods to give your own app
 * class the specific behavior you want it to have.
 * 
 * You can use the special **a** variable (short for **a**pp) to
 * refer to the instance of your class.
 */
declare class App {
	
	/**
	 * This method is called directly when your app starts. In this
	 * method you can initialize your app's global state.
	 */
	onBefore(): void;
	
	/**
	 * This method will be called after onBefore() has been called.
	 * In this method, you should send back the first page that should
	 * be shown to the user.
	 */
	createStartPage(): Page;
	
}`,Cr=`/**
 * Your app will consist of multiple pages, and one page at a time
 * will be shown to the user. For each page you want to have, you
 * should create your own class that extends this class, and in
 * which you override some methods to give your own page the specific
 * functionality you want it to have.
 * 
 * You can use the special **p** variable (short for **p**age) to
 * refer to the instance of your Page class.
 */
declare class Page {
	
	/**
	 * This method is called when the user navigates to this page.
	 * In this method you can initialize the page's internal state.
	 */
	onBefore(): void
	
	/**
	 * This method is called after onBefore() has been called. In
	 * this method you must create and send back the root GUI
	 * component of the page's GUI.
	 */
	createGui(): Component;
	
	/**
	 * This method is called when the user has been on this page,
	 * and is now taken to next page.
	 */
	onAfter(): void;
	
}`,Er=`/**
 * This class represents a point in time.
 */
const Time = (() => new (
	
	/**
	 * This class represents a point in time.
	 */
	class Time {

		/**
		 * Populates the object with the time right now (when the method is
		 * called).
		 */
		setNow() { return this };

		/**
		 * This method sets the year, month and dayOfMonth parts in the Time object.
		 * @param year The year
		 * @param month The month
		 * @param dayOfMonth The day of month
		 */
		setDate(year, month, dayOfMonth) { return this };

		/**
		 * This method sets the year part in the Time object.
		 * @param year The year
		 */
		setYear(year) { return this };

		/**
		 * This method sets the month part in the Time object.
		 * @param month The month
		 */
		setMonth(month) { return this };

		/**
		 * This method sets the day (day of month) part in the Time object.
		 * @param day The day
		 */
		setDay(day) { return this };

		/**
		 * This method sets the hour, minute and second parts in the Time object.
		 * @param hour The hour
		 * @param minute The minute
		 * @param second The second
		 */
		setClock(hour, minute, second) { return this };

		/**
		 * This method sets the hour part in the Time object.
		 * @param hour The hour
		 */
		setHour(hour) { return this };

		/**
		 * This method sets the minute part in the Time object.
		 * @param minute The minute
		 */
		setMinute(minute) { return this };

		/**
		 * This method sets the second part in the Time object.
		 * @param second The second
		 */
		setSecond(second) { return this };

		/**
		 * This method sets the millisecond part in the Time object.
		 * @param millisecond The millisecond
		 */
		setMillisecond(millisecond) { return this };

		/**
		 * This method returns the date (year, month and day) of the time
		 * object as a string format in the user's preferred date format
		 * (web browser setting).
		 * @returns The date as a string
		 */
		getDate() { return "" };

		/**
		 * This method returns the year of the time object.
		 * @returns The year as a number
		 */
		getYear() { return 0 };

		/**
		 * This method returns the month of the Time object. January has number 1, February has number 2, etc.
		 * @returns The month as a number
		 */
		getMonth() { return 0 };

		/**
		 * This method returns the day (day of month) of the Time object.
		 * @returns The day as a number
		 */
		getDay() { return 0 };

		/**
		 * This method returns the hour, minute and second of the Time object.
		 * @returns The clock as a string
		 */
		getClock() { return "" };

		/**
		 * This method returns the hour of the Time object.
		 * @returns The hour as a number
		 */
		getHour() { return 0 };

		/**
		 * This method returns the minute of the Time object.
		 * @returns The minute as a number
		 */
		getMinute() { return 0 };

		/**
		 * This method returns the second of the Time object.
		 * @returns The second as a number
		 */
		getSecond() { return 0 };

		/**
		 * This method returns the millisecond of the Time object.
		 * @returns The millisecond as a number
		 */
		getMillisecond() { return 0 };

		/**
		 * This method returns a new Time object with the same time
		 * as the one you call the method one.
		 * @returns The copy
		 */
		getCopy() { return this };

		/**
		 * This method checks if \`otherTime\` represents the same
		 * time as your \`Time\` object.
		 * @param otherTime The time to compare with
		 * @returns \`true\` if they represent the same time, otherwise \`false\`
		 */
		isSameAs(otherTime) { return true };

		/**
		 * This method checks if your \`Time\` object represents a time
		 * taking place before the \`otherTime\` object.
		 * @param otherTime The time to compare with
		 * @returns \`true\` if your \`Time\` object takes place before \`otherTime\`, otherwise \`false\`
		 */
		isBefore(otherTime) { return true };

		/**
		 * This method checks if your \`Time\` object represents a time
		 * taking place before the \`otherTime\` object, or at the same
		 * time.
		 * @param otherTime The time to compare with
		 * @returns \`true\` if your \`Time\` object takes place before or at the same time as \`otherTime\`, otherwise \`false\`
		 */
		isBeforeOrSameAs(otherTime) { return true };

		/**
		 * This method adds some years to the \`Time\` object.
		 * @param years The number of years to add
		 */
		addYears(years) { return this };

		/**
		 * This method adds some months to the \`Time\` object.
		 * @param months The number of months to add
		 */
		addMonths(months) { return this };

		/**
		 * This method adds some days to the \`Time\` object.
		 * @param days The number of days to add
		 */
		addDays(days) { return this };

		/**
		 * This method adds some hours to the \`Time\` object.
		 * @param hours The number of hours to add
		 */
		addHours(hours) { return this };

		/**
		 * This method adds some minutes to the \`Time\` object.
		 * @param minutes The number of minutes to add
		 */
		addMinutes(minutes) { return this };

		/**
		 * This method adds some seconds to the \`Time\` object.
		 * @param seconds The number of seconds to add
		 */
		addSeconds(seconds) { return this };

		/**
		 * This method adds some milliseconds to the \`Time\` object.
		 * @param milliseconds The number of milliseconds to add
		 */
		addMilliseconds(milliseconds) { return this };
		
	}
	
))()`,Ar=`/**
 * This class represents a navigation from one page to another.
 */
const Direction = (() => new (
	
	/**
	 * This class represents a navigation from one page to another.
	 */
	class Direction {
		
		/**
		 * Sets the page the user should come to.
		 * @param thePage The page
		 */
		page(thePage: Page) { return this };
		
		/**
		 * Indicates whether the direction should be used or not. Pass it \`true\` for the direction to be used.
		 * @param theCondition The boolean value
		 */
		when(theCondition: boolean) { return this };
		
		/**
		 * Sets the text that describes when the direction is used.
		 * @param text The text
		 */
		text(theText: string) { return this };
		
	}
	
))()`,jr=`/**
 * This class represents a GUI component that can be used to
 * build the GUI shown to the user. Use sub-classes to this class.
 */
abstract class Component{
	
	/**
	 * This method is only useful to call when the component is used as a
	 * direct child in a Rows/Columns layout. It sets the amount of shares
	 * of the remaining available space this child component should be
	 * assigned by the Rows/Columns layout.
	 * 
	 * @param numberOfShares The number of shares of the remaining
	 * available space this child component should occupy
	 */
	size(numberOfShares: number){ return this };
	
	/**
	 * This method sets the background color the GUI component will have.
	 * 
	 * @param colorName The name of the color in English, such as \`red\`
	 */
	backgroundColor(colorName: string){ return this };
	
	/**
	 * This method sets the corner radius the GUI component will have.
	 * 
	 * @param radius The radius of the corner in millimeter
	 */
	cornerRadius(radius: number){ return this };
	
	/**
	 * This method sets the padding (the amount of space between the
	 * component's border and its content) the GUI component should have.
	 * The padding will only be applied to the sides of the component
	 * indicated by the \`sides\` parameter, or all sides if it's not provided.
	 * 
	 * This configuration method can be called multiple times to give
	 * different sides different amounts of padding.
	 * 
	 * @param amount The amount of padding the component should have
	 * in millimeters
	 * @param sides A string indicating which sides of the component
	 * the padding should be applied to. Write:
	 * 
	 * - t in the string to include the Top side
	 * - b in the string to include the Bottom side
	 * - l in the string to include the Left side
	 * - r in the string to include the Right side
	 * 
	 * If \`sides\` is not provided, the padding will be applied to all sides
	 * (the default value is \`\` \`tblr\` \`\`).
	 */
	padding(amount: number, sides: string = \`tblr\`){ return this };

	/**
	 * This method sets the border the GUI component should have.
	 * The border will only be applied to the sides of the component
	 * indicated by the \`sides\` parameter, or all sides if it's not provided.
	 * 
	 * This configuration method can be called multiple times to give
	 * different sides different borders.
	 * 
	 * @param thickness The thickness of the border in millimeters
	 * @param color The color of the border in English, such as \`red\`
	 * @param sides A string indicating which sides of the component
	 * the border should be added to. Write:
	 * 
	 * - t in the string to include the Top side
	 * - b in the string to include the Bottom side
	 * - l in the string to include the Left side
	 * - r in the string to include the Right side
	 * 
	 * If \`sides\` is not provided, the border will be applied to all sides
	 * (the default value is \`\` \`tblr\` \`\`).
	 */
	border(thickness: number, color: string, sides: string = \`tblr\`) { return this }

	/**
	 * This method will remove the component if the condition you pass
	 * to it is false. If the condition is true, the component will be
	 * used as usual.
	 * 
	 * @param condition The condition indicating when the component
	 * should be kept/removed
	 */
	keepIf(condition: boolean) { return this }

	/**
	 * This method will hide the component if the condition you pass
	 * to it is false. If the condition is true, the component will be
	 * shown as usual.
	 * 
	 * @param condition The condition indicating when the component
	 * should be shown/hidden
	 */
	showIf(condition: boolean) { return this }
	
}`,$r=`const Button = (() => new (
	
	/**
	 * This GUI component is a view that displays a button with some text.
	 */
	class Button extends Component{
		
		/**
		 * This methods sets the text shown in the button.
		 * @param theText The text to be shown in the button
		 */
		text(theText: string){ return this };
		
		/**
		 * This method indicates which page the user should come to when the
		 * button is clicked.
		 * 
		 * @param thePage The page the user should come to
		 */
		page(thePage: Page){ return this };
		
		/**
		 * This method indicates which function/method to call when the user
		 * clicks on the button (which function/method that should *handle*
		 * the click).
		 * 
		 * @param theClickHandler The function/method to be called when the
		 * button is clicked
		 */
		handler(clickHandler: () => void){ return this };
		
	}
	
))()`,Or=`const EnterText = (() => new (
	
	/**
	 * This GUI component is a view that displays a text field into which
	 * the user can enter some text.
	 */
	class EnterText extends Component{
		
		/**
		 * This methods sets the text that is initially written in the component.
		 * @param theText The text to be in the component
		 */
		text(theText: string){ return this };
		
		/**
		 * This methods sets the placeholder text that is shown in the component
		 * when it's empty.
		 * @param theText The placeholder text
		 */
		placeholder(theText: string) { return this };
		
		/**
		 * This method indicates which page the user should come to when the
		 * app progresses to next page if no text passed to pageIf()
		 * matches.
		 * 
		 * @param thePage The page the user should come to
		 */
		page(thePage: Page){ return this };
		
		/**
		 * This method indicates which page the user should come to if she has
		 * entered some specific text.
		 * 
		 * @param theText The text the user should have entered...
		 * @param thePage ...to come to this page
		 */
		pageIfEqual(theText: String, thePage: Page) { return this };
		
		/**
		 * This method indicates which object (e.g. \`a\` or \`p\`) to store the
		 * entered text in, and which name to use.
		 * 
		 * @param theObject The object to stores the text in
		 * @param theName The name the value should have in that object
		 */
		store(theObject: Object, theName: string) { return this };
		
		/**
		 * This method indicates a function/method to call with the entered text when the user goes to next page.
		 * 
		 * @param theClickHandler The function/method to be called with the entered text
		 */
		handler(clickHandler: (enteredText: string) => void){ return this };
		
	}
	
))()`,Dr=`const Text = (() => new (
	
	/**
	 * This GUI component is a view that displays text on the screen.
	 */
	class Text extends Component {
		
		/**
		 * Sets the text the component should show on the screen.
		 * @param theText The text that should be shown
		 */
		text(theText: string) { return this };

		/**
		 * This method makes the component display the text at the top of
		 * it, instead of centered vertically (which is the default).
		 */
		top() { return this }
		
		/**
		 * This method makes the component display the text at the bottom of
		 * it, instead of centered vertically (which is the default).
		 */
		bottom() { return this }
		
		/**
		 * This method makes the component display the text left aligned,
		 * instead of centered horizontally (which is the default).
		 */
		left() { return this }
		
		/**
		 * This method makes the component display the text right aligned,
		 * instead of centered horizontally (which is the default).
		 */
		right() { return this }
		
	}
	
))()`,Pr=`const Space = (() => new (
	
	/**
	 * This GUI component is a layout that primarily is used to occupy space,
	 * so other children in a Rows/Columns layout are positioned correct.
	 * 
	 * This component has \`size\` set to \`1\` by default, while other components
	 * have \`size\` set to \`0\` by default.
	 */
	class Space extends Component {
		
	}
	
)) ()`,Vr=`const Rows = (() => new (
	
	/**
	 * This GUI component is a layout that displays it's children as rows.
	 * The children can call the configuration method *.size()* to configure
	 * how much space they should occupy.
	 */
	class Rows extends Component {
		
		/**
		 * This method sets the child components the Rows layout should have. You
		 * can pass it as many/few children you want, just separate them by comma.
		 */
		children(theChildren: Component){ return this };
		
	}
	
)) ()`,xr=`const Columns = (() => new (
	
	/**
	 * This GUI component is a layout that displays it's children as columns.
	 * The children can call the configuration method *.size()* to configure
	 * how much space they should occupy.
	 */
	class Columns extends Component {
		
		/**
		 * This method sets the child components the Rows layout should have. You
		 * can pass it as many/few children you want, just separate them by comma.
		 */
		children(theChildren: Component){ return this; };
		
	}
	
)) ()`,Rr=`const Layers = (() => new (
	
	/**
	 * This GUI component is a layout that displays its children as as layers.
	 * The first child is at the bottom (behind the others), and then the
	 * second child is drawn on top (in front) of that one, and so one.
	 * All children cover the same space as the Layers component itself.
	 */
	class Layers extends Component {
		
		/**
		 * This method sets the child components the Layers layout should have. You
		 * can pass it as many/few children you want, just separate them by comma.
		 */
		children(theChildren: Component){ return this };
		
	}
	
))()`,Nr=`const Image = (() => new (
	
	/**
	 * This GUI component is a view that displays an image.
	 */
	class Image extends Image{
		
		/**
		 * This methods sets the URL from which the image should be retrieved.
		 * @param theUrl The URL of the image to be shown
		 */
		url(theUrl: string){ return this };
		
	}
	
))()`,Br=`const m = {
	
	/**
	 * Returns a random integer between \`minInt\` and \`maxInt\`.
	 * @param minInt The minimum integer that can be returned
	 * @param maxInt The maximum integer that can be returned
	 */
	randomInt(minInt: number, maxInt: number){
		return 0
	},
	
	/**
	 * Returns a random float between \`minFloat\` and \`maxFloat\`.
	 * @param minFloat The minimum float that can be returned
	 * @param maxFloat The maximum float that can be returned
	 */
	randomFloat(minFloat: number, maxFloat: number) {
		return 0
	},
	
	/**
	 * Returns the lowest number of the provided ones. You can provide
	 * as many numbers you want.
	 */
	lowest(theNumbers: number) {
		return 0
	},
	
	/**
	 * Returns the highest numbers of the provided ones. You can provide
	 * as many numbers you want.
	 */
	highest(theNumbers: number) {
		return 0
	},
	
}`;function Ur(r){let e,t,n;return{c(){e=_("div"),this.h()},l(o){e=T(o,"DIV",{class:!0}),I(e).forEach(w),this.h()},h(){k(e,"class","codeEditor svelte-11lcyox")},m(o,i){N(o,e,i),t||(n=tt(r[0].call(null,e)),t=!0)},p:Te,i:Te,o:Te,d(o){o&&w(e),t=!1,n()}}}function Lr(r,e,t){let n;X(r,Ee,c=>t(5,n=c));let{code:o=""}=e,{isReadOnly:i=!1}=e,a;async function s(c){const u=await vn.init();u.languages.typescript.javascriptDefaults.setCompilerOptions({noLib:!0,allowNonTsExtensions:!0}),u.languages.typescript.javascriptDefaults.setExtraLibs([{content:Mr},{content:Ir},{content:kr},{content:Sr},{content:Cr},{content:Er},{content:Ar},{content:jr},{content:$r},{content:Or},{content:Dr},{content:Pr},{content:Vr},{content:xr},{content:Rr},{content:Nr},{content:Br}]);const d=xe(n.code),v=xe(o);d!="UnknownClassName"&&(u.languages.typescript.javascriptDefaults.addExtraLib(`const a = new ${d}();`),d!=v&&u.languages.typescript.javascriptDefaults.addExtraLib(n.code)),v!="UnknownClassName"&&v!=d&&u.languages.typescript.javascriptDefaults.addExtraLib(`const p = new ${v}();`),a=u.editor.create(c,{value:o,minimap:{enabled:!1},fontSize:16,tabSize:2,automaticLayout:!0,scrollBeyondLastLine:!1,renderWhitespace:"all",trimAutoWhitespace:!1,language:"javascript",suggest:{showKeywords:!1},readOnly:i})}function l(){return a.getValue()}return r.$$set=c=>{"code"in c&&t(1,o=c.code),"isReadOnly"in c&&t(2,i=c.isReadOnly)},[s,o,i,l]}class Xe extends ve{constructor(e){super(),we(this,e,Lr,Ur,he,{code:1,isReadOnly:2,getCode:3})}get getCode(){return this.$$.ctx[3]}}function Fr(r){let e,t,n,o;return{c(){e=_("div"),this.h()},l(i){e=T(i,"DIV",{class:!0}),I(e).forEach(w),this.h()},h(){k(e,"class","screen svelte-sl89ha")},m(i,a){N(i,e,a),n||(o=tt(t=r[2].call(null,e,{createAppCode:r[0],runtimeSettings:r[1]})),n=!0)},p(i,[a]){t&&nt(t.update)&&a&3&&t.update.call(null,{createAppCode:i[0],runtimeSettings:i[1]})},i:Te,o:Te,d(i){i&&w(e),n=!1,o()}}}function Yr(r,e,t){let{createAppCode:n=""}=e,{runtimeSettings:o={}}=e;function i(a,s){function l({createAppCode:c,runtimeSettings:u}){Sn(c,a,u)}return l(s),{update:l}}return r.$$set=a=>{"createAppCode"in a&&t(0,n=a.createAppCode),"runtimeSettings"in a&&t(1,o=a.runtimeSettings)},[n,o,i]}class it extends ve{constructor(e){super(),we(this,e,Yr,Fr,he,{createAppCode:0,runtimeSettings:1})}}function zr(r){let e,t;return e=new it({props:{createAppCode:Ve(r[1],r[2]),runtimeSettings:r[0]}}),{c(){H(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,o){J(e,n,o),t=!0},p(n,[o]){const i={};o&6&&(i.createAppCode=Ve(n[1],n[2])),o&1&&(i.runtimeSettings=n[0]),e.$set(i)},i(n){t||(E(e.$$.fragment,n),t=!0)},o(n){O(e.$$.fragment,n),t=!1},d(n){K(e,n)}}}function Gr(r,e,t){let n,o;X(r,Ee,a=>t(1,n=a)),X(r,Ie,a=>t(2,o=a));let{runtimeSettings:i={}}=e;return r.$$set=a=>{"runtimeSettings"in a&&t(0,i=a.runtimeSettings)},[i,n,o]}class wn extends ve{constructor(e){super(),we(this,e,Gr,zr,he,{runtimeSettings:0})}}function Ot(r){let e,t;return e=new wn({}),{c(){H(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,o){J(e,n,o),t=!0},p:Te,i(n){t||(E(e.$$.fragment,n),t=!0)},o(n){O(e.$$.fragment,n),t=!1},d(n){K(e,n)}}}function Xr(r){let e,t,n,o=r[2],i,a,s,l="Restart",c,u,d,v,g,y,S=Ot(),b={code:r[3].code};return d=new Xe({props:b}),r[6](d),{c(){e=_("div"),t=_("div"),n=_("div"),S.c(),i=j(),a=_("div"),s=_("button"),s.textContent=l,c=j(),u=_("div"),H(d.$$.fragment),this.h()},l(h){e=T(h,"DIV",{class:!0});var m=I(e);t=T(m,"DIV",{class:!0});var f=I(t);n=T(f,"DIV",{class:!0});var M=I(n);S.l(M),M.forEach(w),i=$(f),a=T(f,"DIV",{class:!0});var x=I(a);s=T(x,"BUTTON",{"data-svelte-h":!0}),te(s)!=="svelte-5snrhj"&&(s.textContent=l),x.forEach(w),f.forEach(w),c=$(m),u=T(m,"DIV",{class:!0});var Y=I(u);W(d.$$.fragment,Y),Y.forEach(w),m.forEach(w),this.h()},h(){k(n,"class","app-component svelte-15liz8f"),U(n,"width",`${r[4].codeScreen.widthInMm}mm`),U(n,"height",`${r[4].codeScreen.heightInMm}mm`),k(a,"class","preview-buttons svelte-15liz8f"),k(t,"class","preview-section svelte-15liz8f"),k(u,"class","code-editor svelte-15liz8f"),k(e,"class","edit-app-modal svelte-15liz8f")},m(h,m){N(h,e,m),p(e,t),p(t,n),S.m(n,null),p(t,i),p(t,a),p(a,s),p(e,c),p(e,u),J(d,u,null),v=!0,g||(y=q(s,"click",r[5]),g=!0)},p(h,m){m&4&&he(o,o=h[2])?(ye(),O(S,1,1,Te),Me(),S=Ot(),S.c(),E(S,1),S.m(n,null)):S.p(h,m),m&16&&U(n,"width",`${h[4].codeScreen.widthInMm}mm`),m&16&&U(n,"height",`${h[4].codeScreen.heightInMm}mm`);const f={};m&8&&(f.code=h[3].code),d.$set(f)},i(h){v||(E(S),E(d.$$.fragment,h),v=!0)},o(h){O(S),O(d.$$.fragment,h),v=!1},d(h){h&&w(e),S.d(h),r[6](null),K(d),g=!1,y()}}}function qr(r){let e,t,n;function o(a){r[7](a)}let i={$$slots:{default:[Xr]},$$scope:{ctx:r}};return r[0]!==void 0&&(i.showModal=r[0]),e=new Ne({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,[s]){const l={};s&286&&(l.$$scope={dirty:s,ctx:a}),!t&&s&1&&(t=!0,l.showModal=a[0],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function Hr(r,e,t){let n,o;X(r,Ee,d=>t(3,n=d)),X(r,Ae,d=>t(4,o=d));let{showModal:i}=e,a,s=Math.random();function l(){const d=a.getCode();Se(Ee,n.code=d,n),Ee.set(n),t(2,s=Math.random())}ut(()=>{l()});function c(d){ce[d?"unshift":"push"](()=>{a=d,t(1,a)})}function u(d){i=d,t(0,i)}return r.$$set=d=>{"showModal"in d&&t(0,i=d.showModal)},[i,a,s,n,o,l,c,u]}class ht extends ve{constructor(e){super(),we(this,e,Hr,qr,he,{showModal:0})}}function Wr(r){let e,t,n="Edit Folder",o,i,a,s,l,c,u,d,v,g,y;return{c(){e=_("div"),t=_("h1"),t.textContent=n,o=j(),i=_("div"),a=de("Name: "),s=_("input"),l=j(),c=_("div"),u=_("button"),d=de("Delete"),this.h()},l(S){e=T(S,"DIV",{class:!0});var b=I(e);t=T(b,"H1",{class:!0,"data-svelte-h":!0}),te(t)!=="svelte-1spe3mm"&&(t.textContent=n),o=$(b),i=T(b,"DIV",{});var h=I(i);a=ue(h,"Name: "),s=T(h,"INPUT",{type:!0}),h.forEach(w),l=$(b),c=T(b,"DIV",{});var m=I(c);u=T(m,"BUTTON",{});var f=I(u);d=ue(f,"Delete"),f.forEach(w),m.forEach(w),b.forEach(w),this.h()},h(){k(t,"class","svelte-1xyhvgw"),k(s,"type","text"),u.disabled=v=r[1].length==1,k(e,"class","edit-folder-modal svelte-1xyhvgw")},m(S,b){N(S,e,b),p(e,t),p(e,o),p(e,i),p(i,a),p(i,s),Pe(s,r[2].name),p(e,l),p(e,c),p(c,u),p(u,d),g||(y=[q(s,"input",r[5]),q(u,"click",r[3])],g=!0)},p(S,b){b&4&&s.value!==S[2].name&&Pe(s,S[2].name),b&2&&v!==(v=S[1].length==1)&&(u.disabled=v)},d(S){S&&w(e),g=!1,Re(y)}}}function Jr(r){let e,t,n;function o(a){r[6](a)}let i={$$slots:{default:[Wr]},$$scope:{ctx:r}};return r[0]!==void 0&&(i.showModal=r[0]),e=new Ne({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,[s]){const l={};s&262&&(l.$$scope={dirty:s,ctx:a}),!t&&s&1&&(t=!0,l.showModal=a[0],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function Kr(r,e,t){let n,o,i;X(r,Oe,d=>t(1,o=d)),X(r,Ie,d=>t(7,i=d));let{folderId:a}=e,{showModal:s}=e;function l(){const d=o.findIndex(g=>g.id==n.id);i.find(g=>g.folderId==a)&&!confirm("The folder you are deleting contains pages, and those pages will be deleted too if you delete the folder. Do you really want to delete the folder?")||(o.splice(d,1),Se(Ie,i=i.filter(g=>g.folderId!=a),i),Oe.set(o),t(0,s=!1))}function c(){n.name=this.value,t(2,n),t(1,o),t(4,a)}function u(d){s=d,t(0,s)}return r.$$set=d=>{"folderId"in d&&t(4,a=d.folderId),"showModal"in d&&t(0,s=d.showModal)},r.$$.update=()=>{r.$$.dirty&18&&t(2,n=o.find(d=>d.id==a))},[s,o,n,l,a,c,u]}class Qr extends ve{constructor(e){super(),we(this,e,Kr,Jr,he,{folderId:4,showModal:0})}}function Zr(r){let e,t,n,o;return{c(){e=_("div"),this.h()},l(i){e=T(i,"DIV",{class:!0}),I(e).forEach(w),this.h()},h(){k(e,"class","codeEditor svelte-11lcyox")},m(i,a){N(i,e,a),n||(o=tt(t=r[1].call(null,e,r[0])),n=!0)},p(i,[a]){t&&nt(t.update)&&a&1&&t.update.call(null,i[0])},i:Te,o:Te,d(i){i&&w(e),n=!1,o()}}}function ea(r,e,t){let{code:n=""}=e,o;function i(s,l){return vn.init().then(c=>{o=c.editor.create(s,{value:l,minimap:{enabled:!1},fontSize:16,tabSize:2,automaticLayout:!0,scrollBeyondLastLine:!1,renderWhitespace:"all",trimAutoWhitespace:!1,language:"json"})}),{update(c){o.getModel().setValue(c)}}}function a(){return o.getValue()}return r.$$set=s=>{"code"in s&&t(0,n=s.code)},[n,i,a]}class ta extends ve{constructor(e){super(),we(this,e,ea,Zr,he,{code:0,getCode:2})}get getCode(){return this.$$.ctx[2]}}function na(r){let e,t,n,o,i,a,s,l="Restart with state",c,u,d,v,g,y;o=new wn({props:{runtimeSettings:r[3]}});let S={code:JSON.stringify(r[2],null,"	")};return d=new ta({props:S}),r[7](d),{c(){e=_("div"),t=_("div"),n=_("div"),H(o.$$.fragment),i=j(),a=_("div"),s=_("button"),s.textContent=l,c=j(),u=_("div"),H(d.$$.fragment),this.h()},l(b){e=T(b,"DIV",{class:!0});var h=I(e);t=T(h,"DIV",{class:!0});var m=I(t);n=T(m,"DIV",{class:!0});var f=I(n);W(o.$$.fragment,f),f.forEach(w),i=$(m),a=T(m,"DIV",{class:!0});var M=I(a);s=T(M,"BUTTON",{"data-svelte-h":!0}),te(s)!=="svelte-stko5y"&&(s.textContent=l),M.forEach(w),m.forEach(w),c=$(h),u=T(h,"DIV",{class:!0});var x=I(u);W(d.$$.fragment,x),x.forEach(w),h.forEach(w),this.h()},h(){k(n,"class","screen"),U(n,"width",`${r[4].codeScreen.widthInMm}mm`),U(n,"height",`${r[4].codeScreen.heightInMm}mm`),k(a,"class","buttons"),k(t,"class","preview-child"),k(u,"class","code-editor-child"),k(e,"class","edit-page-modal svelte-1jnl76i")},m(b,h){N(b,e,h),p(e,t),p(t,n),J(o,n,null),p(t,i),p(t,a),p(a,s),p(e,c),p(e,u),J(d,u,null),v=!0,g||(y=q(s,"click",r[5]),g=!0)},p(b,h){const m={};h&8&&(m.runtimeSettings=b[3]),o.$set(m),h&16&&U(n,"width",`${b[4].codeScreen.widthInMm}mm`),h&16&&U(n,"height",`${b[4].codeScreen.heightInMm}mm`);const f={};h&4&&(f.code=JSON.stringify(b[2],null,"	")),d.$set(f)},i(b){v||(E(o.$$.fragment,b),E(d.$$.fragment,b),v=!0)},o(b){O(o.$$.fragment,b),O(d.$$.fragment,b),v=!1},d(b){b&&w(e),K(o),r[7](null),K(d),g=!1,y()}}}function ra(r){let e,t,n;function o(a){r[8](a)}let i={$$slots:{default:[na]},$$scope:{ctx:r}};return r[0]!==void 0&&(i.showModal=r[0]),e=new Ne({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,[s]){const l={};s&542&&(l.$$scope={dirty:s,ctx:a}),!t&&s&1&&(t=!0,l.showModal=a[0],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function aa(r,e,t){let n;X(r,Ae,v=>t(4,n=v));let{initialState:o={}}=e,{showModal:i=!1}=e,a,s=o;const l={state:o,onStateChange(v){t(2,s=v)}};function c(){try{t(3,l.state=JSON.parse(a.getCode()),l)}catch{alert("Invalid JSON code in the editor. The app is not restarted.")}}function u(v){ce[v?"unshift":"push"](()=>{a=v,t(1,a)})}function d(v){i=v,t(0,i)}return r.$$set=v=>{"initialState"in v&&t(6,o=v.initialState),"showModal"in v&&t(0,i=v.showModal)},[i,a,s,l,n,c,o,u,d]}class oa extends ve{constructor(e){super(),we(this,e,aa,ra,he,{initialState:6,showModal:0})}}function ia(r,e,t,n={isPreview:!1}){const o=Ve(r,e,t),i=new hn(o,n);return i.start(),i}function sa(r){let e,t,n,o;return{c(){e=_("div"),this.h()},l(i){e=T(i,"DIV",{class:!0}),I(e).forEach(w),this.h()},h(){k(e,"class","app svelte-jvv5s9")},m(i,a){N(i,e,a),n||(o=tt(t=la.call(null,e,r[0])),n=!0)},p(i,[a]){t&&nt(t.update)&&a&1&&t.update.call(null,i[0])},i:Te,o:Te,d(i){i&&w(e),n=!1,o()}}}function la(r,e){function t(n){r.innerText="",r.appendChild(n.createElement())}return t(e),{update:t}}function ca(r,e,t){let{frameworkApp:n=null}=e;return r.$$set=o=>{"frameworkApp"in o&&t(0,n=o.frameworkApp)},[n]}class _n extends ve{constructor(e){super(),we(this,e,ca,sa,he,{frameworkApp:0})}}function Dt(r,e,t){const n=r.slice();return n[16]=e[t][0],n[17]=e[t][1],n}function Pt(r,e,t){const n=r.slice();return n[16]=e[t][0],n[17]=e[t][1],n}function Vt(r,e,t){const n=r.slice();return n[22]=e[t],n[24]=t,n}function xt(r){let e;return{c(){e=_("div"),this.h()},l(t){e=T(t,"DIV",{class:!0}),I(e).forEach(w),this.h()},h(){k(e,"class","overlay")},m(t,n){N(t,e,n)},d(t){t&&w(e)}}}function da(r){let e,t,n,o;return{c(){e=_("button"),t=de("Execute"),this.h()},l(i){e=T(i,"BUTTON",{});var a=I(e);t=ue(a,"Execute"),a.forEach(w),this.h()},h(){e.disabled=r[5]},m(i,a){N(i,e,a),p(e,t),n||(o=q(e,"click",function(){nt(r[4])&&r[4].apply(this,arguments)}),n=!0)},p(i,a){r=i,a&32&&(e.disabled=r[5])},d(i){i&&w(e),n=!1,o()}}}function ua(r){let e;return{c(){e=de("Executed")},l(t){e=ue(t,"Executed")},m(t,n){N(t,e,n)},p:Te,d(t){t&&w(e)}}}function Rt(r,e){let t,n,o=e[1].length-e[24]+"",i,a,s,l,c=e[22]+"",u,d,v,g;function y(h,m){if(h[24]!=0)return ua;if(h[4])return da}let S=y(e),b=S&&S(e);return{key:r,first:null,c(){t=_("tr"),n=_("td"),i=de(o),a=j(),s=_("td"),l=_("div"),u=de(c),d=j(),v=_("td"),b&&b.c(),g=j(),this.h()},l(h){t=T(h,"TR",{});var m=I(t);n=T(m,"TD",{});var f=I(n);i=ue(f,o),f.forEach(w),a=$(m),s=T(m,"TD",{});var M=I(s);l=T(M,"DIV",{});var x=I(l);u=ue(x,c),x.forEach(w),M.forEach(w),d=$(m),v=T(m,"TD",{});var Y=I(v);b&&b.l(Y),Y.forEach(w),g=$(m),m.forEach(w),this.h()},h(){this.first=t},m(h,m){N(h,t,m),p(t,n),p(n,i),p(t,a),p(t,s),p(s,l),p(l,u),p(t,d),p(t,v),b&&b.m(v,null),p(t,g)},p(h,m){e=h,m&2&&o!==(o=e[1].length-e[24]+"")&&De(i,o),m&2&&c!==(c=e[22]+"")&&De(u,c),S===(S=y(e))&&b?b.p(e,m):(b&&b.d(1),b=S&&S(e),b&&(b.c(),b.m(v,null)))},d(h){h&&w(t),b&&b.d()}}}function ha(r){let e,t=Ce(r[8]),n=[];for(let o=0;o<t.length;o+=1)n[o]=Nt(Pt(r,t,o));return{c(){for(let o=0;o<n.length;o+=1)n[o].c();e=me()},l(o){for(let i=0;i<n.length;i+=1)n[i].l(o);e=me()},m(o,i){for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(o,i);N(o,e,i)},p(o,i){if(i&256){t=Ce(o[8]);let a;for(a=0;a<t.length;a+=1){const s=Pt(o,t,a);n[a]?n[a].p(s,i):(n[a]=Nt(s),n[a].c(),n[a].m(e.parentNode,e))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(o){o&&w(e),rt(n,o)}}}function fa(r){let e,t="None";return{c(){e=_("td"),e.textContent=t,this.h()},l(n){e=T(n,"TD",{colspan:!0,"data-svelte-h":!0}),te(e)!=="svelte-1rlzm8n"&&(e.textContent=t),this.h()},h(){k(e,"colspan","2")},m(n,o){N(n,e,o)},p:Te,d(n){n&&w(e)}}}function Nt(r){let e,t,n,o=r[16]+"",i,a,s,l=JSON.stringify(r[17],null,"  ")+"",c,u;return{c(){e=_("tr"),t=_("td"),n=de("a."),i=de(o),a=j(),s=_("td"),c=de(l),u=j()},l(d){e=T(d,"TR",{});var v=I(e);t=T(v,"TD",{});var g=I(t);n=ue(g,"a."),i=ue(g,o),g.forEach(w),a=$(v),s=T(v,"TD",{});var y=I(s);c=ue(y,l),y.forEach(w),u=$(v),v.forEach(w)},m(d,v){N(d,e,v),p(e,t),p(t,n),p(t,i),p(e,a),p(e,s),p(s,c),p(e,u)},p(d,v){v&256&&o!==(o=d[16]+"")&&De(i,o),v&256&&l!==(l=JSON.stringify(d[17],null,"  ")+"")&&De(c,l)},d(d){d&&w(e)}}}function ma(r){let e,t=Ce(r[7]),n=[];for(let o=0;o<t.length;o+=1)n[o]=Bt(Dt(r,t,o));return{c(){for(let o=0;o<n.length;o+=1)n[o].c();e=me()},l(o){for(let i=0;i<n.length;i+=1)n[i].l(o);e=me()},m(o,i){for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(o,i);N(o,e,i)},p(o,i){if(i&128){t=Ce(o[7]);let a;for(a=0;a<t.length;a+=1){const s=Dt(o,t,a);n[a]?n[a].p(s,i):(n[a]=Bt(s),n[a].c(),n[a].m(e.parentNode,e))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(o){o&&w(e),rt(n,o)}}}function pa(r){let e,t="None";return{c(){e=_("td"),e.textContent=t,this.h()},l(n){e=T(n,"TD",{colspan:!0,"data-svelte-h":!0}),te(e)!=="svelte-1rlzm8n"&&(e.textContent=t),this.h()},h(){k(e,"colspan","2")},m(n,o){N(n,e,o)},p:Te,d(n){n&&w(e)}}}function Bt(r){let e,t,n,o=r[16]+"",i,a,s,l=JSON.stringify(r[17],null,"  ")+"",c,u;return{c(){e=_("tr"),t=_("td"),n=de("p."),i=de(o),a=j(),s=_("td"),c=de(l),u=j()},l(d){e=T(d,"TR",{});var v=I(e);t=T(v,"TD",{});var g=I(t);n=ue(g,"p."),i=ue(g,o),g.forEach(w),a=$(v),s=T(v,"TD",{});var y=I(s);c=ue(y,l),y.forEach(w),u=$(v),v.forEach(w)},m(d,v){N(d,e,v),p(e,t),p(t,n),p(t,i),p(e,a),p(e,s),p(s,c),p(e,u)},p(d,v){v&128&&o!==(o=d[16]+"")&&De(i,o),v&128&&l!==(l=JSON.stringify(d[17],null,"  ")+"")&&De(c,l)},d(d){d&&w(e)}}}function ga(r){let e,t,n,o,i,a,s,l,c,u="<tr><th></th> <th>Next command to execute</th> <th>Action</th></tr>",d,v,g=[],y=new Map,S,b,h,m,f="<tr><th>App Variable</th> <th>Value</th></tr>",M,x,Y,P,V,se,R,ae,F,Z="<tr><th>Page Variable</th> <th>Value</th></tr>",A,C,D,G,oe,_e;o=new _n({props:{frameworkApp:r[6]}});let L=r[4]&&xt(),ke=Ce(r[1]);const Q=B=>B[24];for(let B=0;B<ke.length;B+=1){let z=Vt(r,ke,B),re=Q(z);y.set(re,g[B]=Rt(re,z))}function le(B,z){return B[8].length==0?fa:ha}let fe=le(r),be=fe(r);V=new Xe({props:{code:r[3].code,isReadOnly:!0}});function ie(B,z){return B[7].length==0?pa:ma}let ne=ie(r),ee=ne(r);return oe=new Xe({props:{code:r[2].code,isReadOnly:!0}}),{c(){e=_("div"),t=_("div"),n=_("div"),H(o.$$.fragment),i=j(),L&&L.c(),a=j(),s=_("div"),l=_("table"),c=_("thead"),c.innerHTML=u,d=j(),v=_("tbody");for(let B=0;B<g.length;B+=1)g[B].c();S=j(),b=_("div"),h=_("table"),m=_("thead"),m.innerHTML=f,M=j(),x=_("tbody"),be.c(),Y=j(),P=_("div"),H(V.$$.fragment),se=j(),R=_("div"),ae=_("table"),F=_("thead"),F.innerHTML=Z,A=j(),C=_("tbody"),ee.c(),D=j(),G=_("div"),H(oe.$$.fragment),this.h()},l(B){e=T(B,"DIV",{class:!0});var z=I(e);t=T(z,"DIV",{class:!0});var re=I(t);n=T(re,"DIV",{class:!0});var je=I(n);W(o.$$.fragment,je),i=$(je),L&&L.l(je),je.forEach(w),a=$(re),s=T(re,"DIV",{class:!0});var $e=I(s);l=T($e,"TABLE",{border:!0});var We=I(l);c=T(We,"THEAD",{"data-svelte-h":!0}),te(c)!=="svelte-107lsgq"&&(c.innerHTML=u),d=$(We),v=T(We,"TBODY",{});var ft=I(v);for(let st=0;st<g.length;st+=1)g[st].l(ft);ft.forEach(w),We.forEach(w),$e.forEach(w),re.forEach(w),S=$(z),b=T(z,"DIV",{class:!0});var mt=I(b);h=T(mt,"TABLE",{border:!0});var Je=I(h);m=T(Je,"THEAD",{"data-svelte-h":!0}),te(m)!=="svelte-kuairh"&&(m.innerHTML=f),M=$(Je),x=T(Je,"TBODY",{});var pt=I(x);be.l(pt),pt.forEach(w),Je.forEach(w),mt.forEach(w),Y=$(z),P=T(z,"DIV",{class:!0});var gt=I(P);W(V.$$.fragment,gt),gt.forEach(w),se=$(z),R=T(z,"DIV",{class:!0});var bt=I(R);ae=T(bt,"TABLE",{border:!0});var Ke=I(ae);F=T(Ke,"THEAD",{"data-svelte-h":!0}),te(F)!=="svelte-fkbo7d"&&(F.innerHTML=Z),A=$(Ke),C=T(Ke,"TBODY",{});var vt=I(C);ee.l(vt),vt.forEach(w),Ke.forEach(w),bt.forEach(w),D=$(z),G=T(z,"DIV",{class:!0});var wt=I(G);W(oe.$$.fragment,wt),wt.forEach(w),z.forEach(w),this.h()},h(){k(n,"class","app-component svelte-mmz3q4"),U(n,"width",`${r[9].codeScreen.widthInMm}mm`),U(n,"height",`${r[9].codeScreen.heightInMm}mm`),k(l,"border","1"),k(s,"class","executedCommands svelte-mmz3q4"),k(t,"class","left svelte-mmz3q4"),k(h,"border","1"),k(b,"class","app-values svelte-mmz3q4"),k(P,"class","app-code svelte-mmz3q4"),k(ae,"border","1"),k(R,"class","page-values svelte-mmz3q4"),k(G,"class","page-code svelte-mmz3q4"),k(e,"class","debug-modal svelte-mmz3q4")},m(B,z){N(B,e,z),p(e,t),p(t,n),J(o,n,null),p(n,i),L&&L.m(n,null),p(t,a),p(t,s),p(s,l),p(l,c),p(l,d),p(l,v);for(let re=0;re<g.length;re+=1)g[re]&&g[re].m(v,null);p(e,S),p(e,b),p(b,h),p(h,m),p(h,M),p(h,x),be.m(x,null),p(e,Y),p(e,P),J(V,P,null),p(e,se),p(e,R),p(R,ae),p(ae,F),p(ae,A),p(ae,C),ee.m(C,null),p(e,D),p(e,G),J(oe,G,null),_e=!0},p(B,z){const re={};z&64&&(re.frameworkApp=B[6]),o.$set(re),B[4]?L||(L=xt(),L.c(),L.m(n,null)):L&&(L.d(1),L=null),z&512&&U(n,"width",`${B[9].codeScreen.widthInMm}mm`),z&512&&U(n,"height",`${B[9].codeScreen.heightInMm}mm`),z&50&&(ke=Ce(B[1]),g=at(g,z,Q,1,B,ke,y,v,dn,Rt,null,Vt)),fe===(fe=le(B))&&be?be.p(B,z):(be.d(1),be=fe(B),be&&(be.c(),be.m(x,null)));const je={};z&8&&(je.code=B[3].code),V.$set(je),ne===(ne=ie(B))&&ee?ee.p(B,z):(ee.d(1),ee=ne(B),ee&&(ee.c(),ee.m(C,null)));const $e={};z&4&&($e.code=B[2].code),oe.$set($e)},i(B){_e||(E(o.$$.fragment,B),E(V.$$.fragment,B),E(oe.$$.fragment,B),_e=!0)},o(B){O(o.$$.fragment,B),O(V.$$.fragment,B),O(oe.$$.fragment,B),_e=!1},d(B){B&&w(e),K(o),L&&L.d();for(let z=0;z<g.length;z+=1)g[z].d();be.d(),K(V),ee.d(),K(oe)}}}function ba(r){let e,t,n;function o(a){r[12](a)}let i={$$slots:{default:[ga]},$$scope:{ctx:r}};return r[0]!==void 0&&(i.showModal=r[0]),e=new Ne({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,[s]){const l={};s&33555454&&(l.$$scope={dirty:s,ctx:a}),!t&&s&1&&(t=!0,l.showModal=a[0],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function va(r,e,t){let n,o,i,a,s,l,c;X(r,Ie,f=>t(11,s=f)),X(r,Ee,f=>t(3,l=f)),X(r,Ae,f=>t(9,c=f));let{showModal:u}=e,{pageId:d}=e,v=[],g=null,y=!1;const S={isPreview:!1,onError(f){t(5,y=!0)},okToContinue(f,M){if(v.unshift(f),t(1,v),!M)return new Promise(x=>{t(4,g=()=>{x(),t(4,g=null)})})}};function b(){let f={};return o!=null&&o.app&&(f=JSON.parse(JSON.stringify(o.app))),Object.entries(f)}function h(){var M;let f={};return(M=o==null?void 0:o.frameworkPage)!=null&&M.page&&(f=JSON.parse(JSON.stringify(o.frameworkPage.page))),Object.entries(f)}function m(f){u=f,t(0,u)}return r.$$set=f=>{"showModal"in f&&t(0,u=f.showModal),"pageId"in f&&t(10,d=f.pageId)},r.$$.update=()=>{r.$$.dirty&3072&&t(2,n=s.find(f=>f.id==d)),r.$$.dirty&2060&&t(6,o=ia(l,s,n,S)),r.$$.dirty&2&&t(8,i=(v.length,b())),r.$$.dirty&2&&t(7,a=(v.length,h()))},[u,v,n,l,g,y,o,a,i,c,d,s,m]}class wa extends ve{constructor(e){super(),we(this,e,va,ba,he,{showModal:0,pageId:10})}}function Ut(r){let e,t;return e=new it({props:{createAppCode:Ve(r[11],r[2],r[9]),runtimeSettings:r[12]}}),{c(){H(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,o){J(e,n,o),t=!0},p(n,o){const i={};o&2564&&(i.createAppCode=Ve(n[11],n[2],n[9])),e.$set(i)},i(n){t||(E(e.$$.fragment,n),t=!0)},o(n){O(e.$$.fragment,n),t=!1},d(n){K(e,n)}}}function _a(r){let e,t,n,o=r[6],i,a,s,l="Restart",c,u,d,v="Menu",g,y,S,b,h="Debug",m,f,M,x="Edit app",Y,P,V,se="Edit state",R,ae,F,Z="Delete page",A,C,D,G,oe,_e,L=Ut(r),ke={code:r[9].code};return D=new Xe({props:ke}),r[18](D),{c(){e=_("div"),t=_("div"),n=_("div"),L.c(),i=j(),a=_("div"),s=_("button"),s.textContent=l,c=j(),u=_("div"),d=_("div"),d.textContent=v,g=j(),y=_("ul"),S=_("li"),b=_("button"),b.textContent=h,m=j(),f=_("li"),M=_("button"),M.textContent=x,Y=j(),P=_("li"),V=_("button"),V.textContent=se,R=j(),ae=_("li"),F=_("button"),F.textContent=Z,A=j(),C=_("div"),H(D.$$.fragment),this.h()},l(Q){e=T(Q,"DIV",{class:!0});var le=I(e);t=T(le,"DIV",{class:!0});var fe=I(t);n=T(fe,"DIV",{class:!0});var be=I(n);L.l(be),be.forEach(w),i=$(fe),a=T(fe,"DIV",{class:!0});var ie=I(a);s=T(ie,"BUTTON",{"data-svelte-h":!0}),te(s)!=="svelte-5snrhj"&&(s.textContent=l),ie.forEach(w),fe.forEach(w),c=$(le),u=T(le,"DIV",{class:!0});var ne=I(u);d=T(ne,"DIV",{class:!0,"data-svelte-h":!0}),te(d)!=="svelte-s1h7ma"&&(d.textContent=v),g=$(ne),y=T(ne,"UL",{});var ee=I(y);S=T(ee,"LI",{});var B=I(S);b=T(B,"BUTTON",{"data-svelte-h":!0}),te(b)!=="svelte-11e43oq"&&(b.textContent=h),B.forEach(w),m=$(ee),f=T(ee,"LI",{});var z=I(f);M=T(z,"BUTTON",{"data-svelte-h":!0}),te(M)!=="svelte-1gt89o6"&&(M.textContent=x),z.forEach(w),Y=$(ee),P=T(ee,"LI",{});var re=I(P);V=T(re,"BUTTON",{"data-svelte-h":!0}),te(V)!=="svelte-1w64rju"&&(V.textContent=se),re.forEach(w),R=$(ee),ae=T(ee,"LI",{});var je=I(ae);F=T(je,"BUTTON",{"data-svelte-h":!0}),te(F)!=="svelte-1w5lntz"&&(F.textContent=Z),je.forEach(w),ee.forEach(w),ne.forEach(w),A=$(le),C=T(le,"DIV",{class:!0});var $e=I(C);W(D.$$.fragment,$e),$e.forEach(w),le.forEach(w),this.h()},h(){k(n,"class","app-component"),U(n,"width",`${r[10].codeScreen.widthInMm}mm`),U(n,"height",`${r[10].codeScreen.heightInMm}mm`),k(a,"class","preview-buttons"),k(t,"class","preview-child"),k(d,"class","title"),k(u,"class","menu-child"),k(C,"class","code-editor-child"),k(e,"class","edit-page-modal svelte-bcwdb6")},m(Q,le){N(Q,e,le),p(e,t),p(t,n),L.m(n,null),p(t,i),p(t,a),p(a,s),p(e,c),p(e,u),p(u,d),p(u,g),p(u,y),p(y,S),p(S,b),p(y,m),p(y,f),p(f,M),p(y,Y),p(y,P),p(P,V),p(y,R),p(y,ae),p(ae,F),p(e,A),p(e,C),J(D,C,null),G=!0,oe||(_e=[q(s,"click",r[13]),q(b,"click",r[15]),q(M,"click",r[16]),q(V,"click",r[17]),q(F,"click",r[14])],oe=!0)},p(Q,le){le&64&&he(o,o=Q[6])?(ye(),O(L,1,1,Te),Me(),L=Ut(Q),L.c(),E(L,1),L.m(n,null)):L.p(Q,le),le&1024&&U(n,"width",`${Q[10].codeScreen.widthInMm}mm`),le&1024&&U(n,"height",`${Q[10].codeScreen.heightInMm}mm`);const fe={};le&512&&(fe.code=Q[9].code),D.$set(fe)},i(Q){G||(E(L),E(D.$$.fragment,Q),G=!0)},o(Q){O(L),O(D.$$.fragment,Q),G=!1},d(Q){Q&&w(e),L.d(Q),r[18](null),K(D),oe=!1,Re(_e)}}}function Lt(r){let e,t,n;function o(a){r[20](a)}let i={};return r[3]!==void 0&&(i.showModal=r[3]),e=new ht({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,s){const l={};!t&&s&8&&(t=!0,l.showModal=a[3],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function Ft(r){let e,t,n;function o(a){r[21](a)}let i={pageId:r[1]};return r[4]!==void 0&&(i.showModal=r[4]),e=new wa({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,s){const l={};s&2&&(l.pageId=a[1]),!t&&s&16&&(t=!0,l.showModal=a[4],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function Yt(r){let e,t,n;function o(a){r[22](a)}let i={initialState:r[7]};return r[5]!==void 0&&(i.showModal=r[5]),e=new oa({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,s){const l={};s&128&&(l.initialState=a[7]),!t&&s&32&&(t=!0,l.showModal=a[5],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function Ta(r){let e,t,n,o,i,a,s;function l(g){r[19](g)}let c={$$slots:{default:[_a]},$$scope:{ctx:r}};r[0]!==void 0&&(c.showModal=r[0]),e=new Ne({props:c}),ce.push(()=>ge(e,"showModal",l));let u=r[3]&&Lt(r),d=r[4]&&Ft(r),v=r[5]&&Yt(r);return{c(){H(e.$$.fragment),n=j(),u&&u.c(),o=j(),d&&d.c(),i=j(),v&&v.c(),a=me()},l(g){W(e.$$.fragment,g),n=$(g),u&&u.l(g),o=$(g),d&&d.l(g),i=$(g),v&&v.l(g),a=me()},m(g,y){J(e,g,y),N(g,n,y),u&&u.m(g,y),N(g,o,y),d&&d.m(g,y),N(g,i,y),v&&v.m(g,y),N(g,a,y),s=!0},p(g,[y]){const S={};y&8392572&&(S.$$scope={dirty:y,ctx:g}),!t&&y&1&&(t=!0,S.showModal=g[0],pe(()=>t=!1)),e.$set(S),g[3]?u?(u.p(g,y),y&8&&E(u,1)):(u=Lt(g),u.c(),E(u,1),u.m(o.parentNode,o)):u&&(ye(),O(u,1,1,()=>{u=null}),Me()),g[4]?d?(d.p(g,y),y&16&&E(d,1)):(d=Ft(g),d.c(),E(d,1),d.m(i.parentNode,i)):d&&(ye(),O(d,1,1,()=>{d=null}),Me()),g[5]?v?(v.p(g,y),y&32&&E(v,1)):(v=Yt(g),v.c(),E(v,1),v.m(a.parentNode,a)):v&&(ye(),O(v,1,1,()=>{v=null}),Me())},i(g){s||(E(e.$$.fragment,g),E(u),E(d),E(v),s=!0)},o(g){O(e.$$.fragment,g),O(u),O(d),O(v),s=!1},d(g){g&&(w(n),w(o),w(i),w(a)),K(e,g),u&&u.d(g),d&&d.d(g),v&&v.d(g)}}}function ya(r,e,t){let n,o,i,a;X(r,Ie,R=>t(2,o=R)),X(r,Ae,R=>t(10,i=R)),X(r,Ee,R=>t(11,a=R));let{showModal:s}=e,{pageId:l}=e,c=!1,u=!1,d=!1,v=Math.random(),g=null;const y={onStateChange(R){t(7,g=R)}};let S;function b(){const R=S.getCode();t(9,n.code=R,n),Ie.set(o),t(6,v=Math.random())}function h(){if(!confirm("Really delete?"))return;const R=o.findIndex(ae=>ae.id==l);o.splice(R,1),Ie.set(o),t(0,s=!1)}ut(()=>{b()});const m=()=>(b(),t(4,u=!0)),f=()=>(b(),t(3,c=!0)),M=()=>(b(),t(5,d=!0));function x(R){ce[R?"unshift":"push"](()=>{S=R,t(8,S)})}function Y(R){s=R,t(0,s)}function P(R){c=R,t(3,c)}function V(R){u=R,t(4,u)}function se(R){d=R,t(5,d)}return r.$$set=R=>{"showModal"in R&&t(0,s=R.showModal),"pageId"in R&&t(1,l=R.pageId)},r.$$.update=()=>{r.$$.dirty&6&&t(9,n=o.find(R=>R.id==l))},[s,l,o,c,u,d,v,g,S,n,i,a,y,b,h,m,f,M,x,Y,P,V,se]}class Ma extends ve{constructor(e){super(),we(this,e,ya,Ta,he,{showModal:0,pageId:1})}}function Ia(r){let e,t,n,o,i,a,s,l="Refresh",c,u,d,v,g,y="Edit app",S,b,h,m="Delete this page template",f,M,x;o=new it({props:{createAppCode:Ve(r[5],r[6],{code:r[1].code})}});let Y={code:r[1].code};return d=new Xe({props:Y}),r[11](d),{c(){e=_("div"),t=_("div"),n=_("div"),H(o.$$.fragment),i=j(),a=_("div"),s=_("button"),s.textContent=l,c=j(),u=_("div"),H(d.$$.fragment),v=j(),g=_("button"),g.textContent=y,S=j(),b=_("div"),h=_("button"),h.textContent=m,this.h()},l(P){e=T(P,"DIV",{class:!0});var V=I(e);t=T(V,"DIV",{class:!0});var se=I(t);n=T(se,"DIV",{class:!0});var R=I(n);W(o.$$.fragment,R),R.forEach(w),i=$(se),a=T(se,"DIV",{class:!0});var ae=I(a);s=T(ae,"BUTTON",{"data-svelte-h":!0}),te(s)!=="svelte-in3han"&&(s.textContent=l),ae.forEach(w),se.forEach(w),c=$(V),u=T(V,"DIV",{class:!0});var F=I(u);W(d.$$.fragment,F),F.forEach(w),v=$(V),g=T(V,"BUTTON",{class:!0,"data-svelte-h":!0}),te(g)!=="svelte-1fpswk9"&&(g.textContent=y),S=$(V),b=T(V,"DIV",{class:!0});var Z=I(b);h=T(Z,"BUTTON",{"data-svelte-h":!0}),te(h)!=="svelte-19vawev"&&(h.textContent=m),Z.forEach(w),V.forEach(w),this.h()},h(){k(n,"class","app-component svelte-b3fta8"),U(n,"width",`${r[4].codeScreen.widthInMm}mm`),U(n,"height",`${r[4].codeScreen.heightInMm}mm`),k(a,"class","preview-buttons svelte-b3fta8"),k(t,"class","preview-section svelte-b3fta8"),k(u,"class","code-editor svelte-b3fta8"),k(g,"class","edit-app-button svelte-b3fta8"),k(b,"class","buttons-row svelte-b3fta8"),k(e,"class","edit-page-template-modal svelte-b3fta8")},m(P,V){N(P,e,V),p(e,t),p(t,n),J(o,n,null),p(t,i),p(t,a),p(a,s),p(e,c),p(e,u),J(d,u,null),p(e,v),p(e,g),p(e,S),p(e,b),p(b,h),f=!0,M||(x=[q(s,"click",r[7]),q(g,"click",r[12]),q(h,"click",r[8])],M=!0)},p(P,V){const se={};V&98&&(se.createAppCode=Ve(P[5],P[6],{code:P[1].code})),o.$set(se),V&16&&U(n,"width",`${P[4].codeScreen.widthInMm}mm`),V&16&&U(n,"height",`${P[4].codeScreen.heightInMm}mm`);const R={};V&2&&(R.code=P[1].code),d.$set(R)},i(P){f||(E(o.$$.fragment,P),E(d.$$.fragment,P),f=!0)},o(P){O(o.$$.fragment,P),O(d.$$.fragment,P),f=!1},d(P){P&&w(e),K(o),r[11](null),K(d),M=!1,Re(x)}}}function zt(r){let e,t,n;function o(a){r[14](a)}let i={};return r[2]!==void 0&&(i.showModal=r[2]),e=new ht({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,s){const l={};!t&&s&4&&(t=!0,l.showModal=a[2],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function ka(r){let e,t,n,o,i;function a(c){r[13](c)}let s={$$slots:{default:[Ia]},$$scope:{ctx:r}};r[0]!==void 0&&(s.showModal=r[0]),e=new Ne({props:s}),ce.push(()=>ge(e,"showModal",a));let l=r[2]&&zt(r);return{c(){H(e.$$.fragment),n=j(),l&&l.c(),o=me()},l(c){W(e.$$.fragment,c),n=$(c),l&&l.l(c),o=me()},m(c,u){J(e,c,u),N(c,n,u),l&&l.m(c,u),N(c,o,u),i=!0},p(c,[u]){const d={};u&32894&&(d.$$scope={dirty:u,ctx:c}),!t&&u&1&&(t=!0,d.showModal=c[0],pe(()=>t=!1)),e.$set(d),c[2]?l?(l.p(c,u),u&4&&E(l,1)):(l=zt(c),l.c(),E(l,1),l.m(o.parentNode,o)):l&&(ye(),O(l,1,1,()=>{l=null}),Me())},i(c){i||(E(e.$$.fragment,c),E(l),i=!0)},o(c){O(e.$$.fragment,c),O(l),i=!1},d(c){c&&(w(n),w(o)),K(e,c),l&&l.d(c)}}}function Sa(r,e,t){let n,o,i,a;X(r,Ue,m=>t(10,n=m)),X(r,Ae,m=>t(4,o=m)),X(r,Ee,m=>t(5,i=m)),X(r,Ie,m=>t(6,a=m));let{showModal:s}=e,{pageTemplateId:l}=e,c,u=!1,d;function v(){const m=d.getCode();t(1,c.code=m,c),Ue.set(n)}function g(){if(!confirm("Really delete?"))return;const m=n.findIndex(f=>f.id==l);n.splice(m,1),t(0,s=!1)}ut(v);function y(m){ce[m?"unshift":"push"](()=>{d=m,t(3,d)})}const S=()=>(v(),t(2,u=!0));function b(m){s=m,t(0,s)}function h(m){u=m,t(2,u)}return r.$$set=m=>{"showModal"in m&&t(0,s=m.showModal),"pageTemplateId"in m&&t(9,l=m.pageTemplateId)},r.$$.update=()=>{r.$$.dirty&1536&&t(1,c=n.find(m=>m.id==l))},[s,c,u,d,o,i,a,v,g,l,n,y,S,b,h]}class Ca extends ve{constructor(e){super(),we(this,e,Sa,ka,he,{showModal:0,pageTemplateId:9})}}function Gt(r,e,t){const n=r.slice();return n[16]=e[t],n}function Xt(r,e){let t,n,o,i,a,s,l,c="Edit",u,d,v,g;o=new it({props:{createAppCode:Ve(e[6],e[4],{code:e[16].code},!0)}});function y(){return e[12](e[16])}function S(){return e[13](e[16])}return{key:r,first:null,c(){t=_("div"),n=_("div"),H(o.$$.fragment),i=j(),a=_("div"),s=j(),l=_("button"),l.textContent=c,u=j(),this.h()},l(b){t=T(b,"DIV",{class:!0});var h=I(t);n=T(h,"DIV",{class:!0});var m=I(n);W(o.$$.fragment,m),i=$(m),a=T(m,"DIV",{class:!0}),I(a).forEach(w),m.forEach(w),s=$(h),l=T(h,"BUTTON",{class:!0,"data-svelte-h":!0}),te(l)!=="svelte-eodtwe"&&(l.textContent=c),u=$(h),h.forEach(w),this.h()},h(){k(a,"class","overlay svelte-1dwdo8c"),k(n,"class","page-template svelte-1dwdo8c"),U(n,"width",`${e[5].folderScreen.widthInMm}mm`),U(n,"height",`${e[5].folderScreen.heightInMm}mm`),k(l,"class","edit-page-button svelte-1dwdo8c"),k(t,"class","page-template-box svelte-1dwdo8c"),this.first=t},m(b,h){N(b,t,h),p(t,n),J(o,n,null),p(n,i),p(n,a),p(t,s),p(t,l),p(t,u),d=!0,v||(g=[q(n,"click",ze(y)),q(l,"click",ze(S))],v=!0)},p(b,h){e=b;const m={};h&88&&(m.createAppCode=Ve(e[6],e[4],{code:e[16].code},!0)),o.$set(m),h&32&&U(n,"width",`${e[5].folderScreen.widthInMm}mm`),h&32&&U(n,"height",`${e[5].folderScreen.heightInMm}mm`)},i(b){d||(E(o.$$.fragment,b),d=!0)},o(b){O(o.$$.fragment,b),d=!1},d(b){b&&w(t),K(o),v=!1,Re(g)}}}function Ea(r){let e,t,n="Create Page (choose template)",o,i,a=[],s=new Map,l,c,u="Create new page template",d,v,g,y=Ce(r[3]);const S=b=>b[16].id;for(let b=0;b<y.length;b+=1){let h=Gt(r,y,b),m=S(h);s.set(m,a[b]=Xt(m,h))}return{c(){e=_("div"),t=_("h1"),t.textContent=n,o=j(),i=_("div");for(let b=0;b<a.length;b+=1)a[b].c();l=j(),c=_("button"),c.textContent=u,this.h()},l(b){e=T(b,"DIV",{class:!0});var h=I(e);t=T(h,"H1",{class:!0,"data-svelte-h":!0}),te(t)!=="svelte-1fbxl57"&&(t.textContent=n),o=$(h),i=T(h,"DIV",{class:!0});var m=I(i);for(let f=0;f<a.length;f+=1)a[f].l(m);m.forEach(w),l=$(h),c=T(h,"BUTTON",{class:!0,"data-svelte-h":!0}),te(c)!=="svelte-wmwgso"&&(c.textContent=u),h.forEach(w),this.h()},h(){k(t,"class","svelte-1dwdo8c"),k(i,"class","page-template-boxes svelte-1dwdo8c"),k(c,"class","new-page-template-button svelte-1dwdo8c"),k(e,"class","create-page-modal svelte-1dwdo8c")},m(b,h){N(b,e,h),p(e,t),p(e,o),p(e,i);for(let m=0;m<a.length;m+=1)a[m]&&a[m].m(i,null);p(e,l),p(e,c),d=!0,v||(g=q(c,"click",r[8]),v=!0)},p(b,h){h&254&&(y=Ce(b[3]),ye(),a=at(a,h,S,1,b,y,s,i,un,Xt,null,Gt),Me())},i(b){if(!d){for(let h=0;h<y.length;h+=1)E(a[h]);d=!0}},o(b){for(let h=0;h<a.length;h+=1)O(a[h]);d=!1},d(b){b&&w(e);for(let h=0;h<a.length;h+=1)a[h].d();v=!1,g()}}}function qt(r){let e,t,n;function o(a){r[15](a)}let i={pageTemplateId:r[2]};return r[1]!==void 0&&(i.showModal=r[1]),e=new Ca({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,s){const l={};s&4&&(l.pageTemplateId=a[2]),!t&&s&2&&(t=!0,l.showModal=a[1],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function Aa(r){let e,t,n,o,i;function a(c){r[14](c)}let s={$$slots:{default:[Ea]},$$scope:{ctx:r}};r[0]!==void 0&&(s.showModal=r[0]),e=new Ne({props:s}),ce.push(()=>ge(e,"showModal",a));let l=r[1]&&qt(r);return{c(){H(e.$$.fragment),n=j(),l&&l.c(),o=me()},l(c){W(e.$$.fragment,c),n=$(c),l&&l.l(c),o=me()},m(c,u){J(e,c,u),N(c,n,u),l&&l.m(c,u),N(c,o,u),i=!0},p(c,[u]){const d={};u&524414&&(d.$$scope={dirty:u,ctx:c}),!t&&u&1&&(t=!0,d.showModal=c[0],pe(()=>t=!1)),e.$set(d),c[1]?l?(l.p(c,u),u&2&&E(l,1)):(l=qt(c),l.c(),E(l,1),l.m(o.parentNode,o)):l&&(ye(),O(l,1,1,()=>{l=null}),Me())},i(c){i||(E(e.$$.fragment,c),E(l),i=!0)},o(c){O(e.$$.fragment,c),O(l),i=!1},d(c){c&&(w(n),w(o)),K(e,c),l&&l.d(c)}}}function ja(r,e,t){let n,o,i,a;X(r,Ue,f=>t(3,n=f)),X(r,Ie,f=>t(4,o=f)),X(r,Ae,f=>t(5,i=f)),X(r,Ee,f=>t(6,a=f));let{showModal:s}=e,{folderId:l}=e,{createAtX:c}=e,{createAtY:u}=e,d=!1,v=-1;function g(f){var V;const M=c,x=u,Y=prompt("Enter page name:");if(!Y)return;const P=f.code.replace(/class \w+ extends/,`class ${Y} extends`);o.push({id:(((V=o.at(-1))==null?void 0:V.id)??0)+1,folderId:l,code:P,x:M,y:x}),Ie.set(o),t(0,s=!1)}function y(){var M;const f=(((M=n.at(-1))==null?void 0:M.id)??0)+1;n.push({id:f,title:"New Template",code:`
class MyPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Is this a new template?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`),
				Space,
				Button.text(\`Yes\`),
				Space,
			)
		)
	}
	
}
			`.trim()}),t(1,d=!0),t(2,v=f)}const S=f=>g(f),b=f=>{t(2,v=f.id),t(1,d=!0)};function h(f){s=f,t(0,s)}function m(f){d=f,t(1,d)}return r.$$set=f=>{"showModal"in f&&t(0,s=f.showModal),"folderId"in f&&t(9,l=f.folderId),"createAtX"in f&&t(10,c=f.createAtX),"createAtY"in f&&t(11,u=f.createAtY)},[s,d,v,n,o,i,a,g,y,l,c,u,S,b,h,m]}class $a extends ve{constructor(e){super(),we(this,e,ja,Aa,he,{showModal:0,folderId:9,createAtX:10,createAtY:11})}}const Ht=new Map,Oa={isPreview:!0};function Da(r,e,t){const n=Ve(r,e,t,!0),o=Ht.get(n);if(o)return o;const i=new hn(n,Oa);return i.start(),Ht[n]=i,i}function Wt(r,e,t){const n=r.slice();return n[27]=e[t].page,n[28]=e[t].frameworkApp,n}function Jt(r,e,t){const n=r.slice();return n[31]=e[t],n}function Kt(r){let e,t=r[31].text+"",n;return{c(){e=_("div"),n=de(t),this.h()},l(o){e=T(o,"DIV",{class:!0});var i=I(e);n=ue(i,t),i.forEach(w),this.h()},h(){k(e,"class","line svelte-feyijm"),Ze(e,"isBack",r[31].isBack),U(e,"width",`${r[31].length}px`),U(e,"transform",`translate(${r[31].centerX}px, ${r[31].centerY}px) translate(-50%, -50%) rotate(${r[31].angle}deg)`)},m(o,i){N(o,e,i),p(e,n)},p(o,i){i[0]&256&&t!==(t=o[31].text+"")&&De(n,t),i[0]&256&&Ze(e,"isBack",o[31].isBack),i[0]&256&&U(e,"width",`${o[31].length}px`),i[0]&256&&U(e,"transform",`translate(${o[31].centerX}px, ${o[31].centerY}px) translate(-50%, -50%) rotate(${o[31].angle}deg)`)},d(o){o&&w(e)}}}function Qt(r,e){let t,n,o=xe(e[27].code)+"",i,a,s,l,c,u,d,v,g,y,S;function b(){return e[19](e[27])}c=new _n({props:{frameworkApp:e[28]}});function h(){return e[20](e[27])}function m(...f){return e[21](e[27],...f)}return{key:r,first:null,c(){t=_("div"),n=_("div"),i=de(o),a=j(),s=_("div"),l=_("div"),H(c.$$.fragment),u=j(),d=_("div"),v=j(),this.h()},l(f){t=T(f,"DIV",{class:!0,draggable:!0});var M=I(t);n=T(M,"DIV",{class:!0});var x=I(n);i=ue(x,o),x.forEach(w),a=$(M),s=T(M,"DIV",{class:!0});var Y=I(s);l=T(Y,"DIV",{class:!0});var P=I(l);W(c.$$.fragment,P),P.forEach(w),u=$(Y),d=T(Y,"DIV",{class:!0}),I(d).forEach(w),Y.forEach(w),v=$(M),M.forEach(w),this.h()},h(){k(n,"class","name svelte-feyijm"),k(l,"class","disabled-page svelte-feyijm"),k(d,"class","overlay svelte-feyijm"),k(s,"class","page svelte-feyijm"),k(t,"class","page-container svelte-feyijm"),k(t,"draggable","true"),U(t,"width",`${e[9].folderScreen.widthInMm}mm`),U(t,"height",`${e[9].folderScreen.heightInMm}mm`),U(t,"transform",`translate(${e[27].x}px, ${e[27].y}px) translate(-50%, -50%)`),this.first=t},m(f,M){N(f,t,M),p(t,n),p(n,i),p(t,a),p(t,s),p(s,l),J(c,l,null),p(s,u),p(s,d),p(t,v),g=!0,y||(S=[q(n,"click",ze(b)),q(s,"click",ze(h)),q(t,"dragstart",m)],y=!0)},p(f,M){e=f,(!g||M[0]&2)&&o!==(o=xe(e[27].code)+"")&&De(i,o);const x={};M[0]&2&&(x.frameworkApp=e[28]),c.$set(x),M[0]&512&&U(t,"width",`${e[9].folderScreen.widthInMm}mm`),M[0]&512&&U(t,"height",`${e[9].folderScreen.heightInMm}mm`),M[0]&2&&U(t,"transform",`translate(${e[27].x}px, ${e[27].y}px) translate(-50%, -50%)`)},i(f){g||(E(c.$$.fragment,f),g=!0)},o(f){O(c.$$.fragment,f),g=!1},d(f){f&&w(t),K(c),y=!1,Re(S)}}}function Zt(r){let e,t,n;function o(a){r[22](a)}let i={pageId:r[4]};return r[3]!==void 0&&(i.showModal=r[3]),e=new Ma({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,s){const l={};s[0]&16&&(l.pageId=a[4]),!t&&s[0]&8&&(t=!0,l.showModal=a[3],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function en(r){let e,t,n;function o(a){r[23](a)}let i={folderId:r[0],createAtX:r[5]-r[7].offsetX,createAtY:r[6]-r[7].offsetY};return r[2]!==void 0&&(i.showModal=r[2]),e=new $a({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,s){const l={};s[0]&1&&(l.folderId=a[0]),s[0]&160&&(l.createAtX=a[5]-a[7].offsetX),s[0]&192&&(l.createAtY=a[6]-a[7].offsetY),!t&&s[0]&4&&(t=!0,l.showModal=a[2],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function Pa(r){let e,t,n,o=[],i=new Map,a,s,l,c,u,d,v=Ce(r[8]),g=[];for(let m=0;m<v.length;m+=1)g[m]=Kt(Jt(r,v,m));let y=Ce(r[1]);const S=m=>m[27].id;for(let m=0;m<y.length;m+=1){let f=Wt(r,y,m),M=S(f);i.set(M,o[m]=Qt(M,f))}let b=r[3]&&Zt(r),h=r[2]&&en(r);return{c(){e=_("div"),t=_("div");for(let m=0;m<g.length;m+=1)g[m].c();n=j();for(let m=0;m<o.length;m+=1)o[m].c();a=j(),b&&b.c(),s=j(),h&&h.c(),l=me(),this.h()},l(m){e=T(m,"DIV",{class:!0,draggable:!0});var f=I(e);t=T(f,"DIV",{class:!0});var M=I(t);for(let x=0;x<g.length;x+=1)g[x].l(M);n=$(M);for(let x=0;x<o.length;x+=1)o[x].l(M);M.forEach(w),f.forEach(w),a=$(m),b&&b.l(m),s=$(m),h&&h.l(m),l=me(),this.h()},h(){k(t,"class","pages svelte-feyijm"),U(t,"transform",`translate(${r[7].offsetX}px, ${r[7].offsetY}px)`),k(e,"class","folder svelte-feyijm"),k(e,"draggable","true"),U(e,"background-position-x",`${r[7].offsetX}px`),U(e,"background-position-y",`${r[7].offsetY}px`)},m(m,f){N(m,e,f),p(e,t);for(let M=0;M<g.length;M+=1)g[M]&&g[M].m(t,null);p(t,n);for(let M=0;M<o.length;M+=1)o[M]&&o[M].m(t,null);N(m,a,f),b&&b.m(m,f),N(m,s,f),h&&h.m(m,f),N(m,l,f),c=!0,u||(d=[q(e,"click",r[14]),q(e,"dragstart",r[10]),q(e,"dragover",_t(r[11])),q(e,"drop",_t(r[13]))],u=!0)},p(m,f){if(f[0]&256){v=Ce(m[8]);let M;for(M=0;M<v.length;M+=1){const x=Jt(m,v,M);g[M]?g[M].p(x,f):(g[M]=Kt(x),g[M].c(),g[M].m(t,n))}for(;M<g.length;M+=1)g[M].d(1);g.length=v.length}f[0]&4634&&(y=Ce(m[1]),ye(),o=at(o,f,S,1,m,y,i,t,un,Qt,null,Wt),Me()),f[0]&128&&U(t,"transform",`translate(${m[7].offsetX}px, ${m[7].offsetY}px)`),f[0]&128&&U(e,"background-position-x",`${m[7].offsetX}px`),f[0]&128&&U(e,"background-position-y",`${m[7].offsetY}px`),m[3]?b?(b.p(m,f),f[0]&8&&E(b,1)):(b=Zt(m),b.c(),E(b,1),b.m(s.parentNode,s)):b&&(ye(),O(b,1,1,()=>{b=null}),Me()),m[2]?h?(h.p(m,f),f[0]&4&&E(h,1)):(h=en(m),h.c(),E(h,1),h.m(l.parentNode,l)):h&&(ye(),O(h,1,1,()=>{h=null}),Me())},i(m){if(!c){for(let f=0;f<y.length;f+=1)E(o[f]);E(b),E(h),c=!0}},o(m){for(let f=0;f<o.length;f+=1)O(o[f]);O(b),O(h),c=!1},d(m){m&&(w(e),w(a),w(s),w(l)),rt(g,m);for(let f=0;f<o.length;f+=1)o[f].d();b&&b.d(m),h&&h.d(m),u=!1,Re(d)}}}const Va=50;function xa(r){navigator.clipboard.writeText(r)}function Ra(r,e,t){let n,o,i,a,s,l,c,u;X(r,Ie,A=>t(16,s=A)),X(r,Oe,A=>t(17,l=A)),X(r,Ee,A=>t(18,c=A)),X(r,Ae,A=>t(9,u=A));let{folderId:d}=e,v=!1,g=!1,y=-1,S=-1,b=-1,h=null;function m(A,C){return C.map(D=>{const G=Da(A,s,D);return{page:D,frameworkApp:G}})}function f(A){var D;const C=[];for(const G of A){const oe=(D=G.frameworkApp)==null?void 0:D.frameworkPage;if(!oe)continue;const _e=G.page.x,L=G.page.y,ke=[].concat(oe.beforeDirections,oe.afterDirections);for(const Q of ke){const le=A.find(fe=>Q.Page.proxyName==xe(fe.page.code));if(le){const fe=le.page.x,be=le.page.y,ie=fe-_e,ne=be-L,ee=Math.sqrt(ie**2+ne**2),B=_e+ie/2;if(0<=ie){const z=Math.atan2(ne,ie)*180/Math.PI,re=L+ne/2;C.push({length:ee,angle:z,centerX:B,centerY:re,text:Q.description,isBack:!1})}else{const z=Math.atan2(ne,ie)*180/Math.PI+180,re=L+ne/2+Va;C.push({length:ee,angle:z,centerX:B,centerY:re,text:Q.description,isBack:!0})}}}}return C}function M(A){h={action:"moveBackground",initialFolderOffsetX:n.offsetX,initialFolderOffsetY:n.offsetY,startMouseX:A.clientX,startMouseY:A.clientY};const C=document.createElement("img");C.style.display="none",A.dataTransfer.setDragImage(C,0,0)}function x(A){switch(h.action){case"moveBackground":const C=A.clientX-h.startMouseX,D=A.clientY-h.startMouseY;t(7,n.offsetX=h.initialFolderOffsetX+C,n),t(7,n.offsetY=h.initialFolderOffsetY+D,n),Oe.set(l);break}}function Y(A,C){A.stopPropagation(),h={action:"movePage",pageId:C.id,startMouseX:A.clientX,startMouseY:A.clientY}}function P(A){switch(h.action){case"movePage":const C=A.clientX-h.startMouseX,D=A.clientY-h.startMouseY,G=s.find(oe=>oe.id==h.pageId);G.x+=C,G.y+=D,Ie.set(s);break}}function V(A){t(4,y=-1),t(2,v=!0),t(5,S=A.clientX),t(6,b=A.clientY)}const se=A=>xa(xe(A.code)),R=A=>{t(3,g=!0),t(4,y=A.id)},ae=(A,C)=>Y(C,A);function F(A){g=A,t(3,g)}function Z(A){v=A,t(2,v)}return r.$$set=A=>{"folderId"in A&&t(0,d=A.folderId)},r.$$.update=()=>{r.$$.dirty[0]&131073&&t(7,n=l.find(A=>A.id==d)??l[0]),r.$$.dirty[0]&65537&&t(15,o=s.filter(A=>A.folderId==d)),r.$$.dirty[0]&294912&&t(1,i=m(c,o)),r.$$.dirty[0]&2&&t(8,a=f(i))},[d,i,v,g,y,S,b,n,a,u,M,x,Y,P,V,o,s,l,c,se,R,ae,F,Z]}class Na extends ve{constructor(e){super(),we(this,e,Ra,Pa,he,{folderId:0},null,[-1,-1])}}function tn(r,e,t){const n=r.slice();return n[14]=e[t],n}function nn(r,e){let t,n=e[14].name+"",o,i,a;function s(){return e[9](e[14])}return{key:r,first:null,c(){t=_("button"),o=de(n),this.h()},l(l){t=T(l,"BUTTON",{class:!0});var c=I(t);o=ue(c,n),c.forEach(w),this.h()},h(){k(t,"class","svelte-1x7c20x"),Ze(t,"current",e[1]==e[14].id),this.first=t},m(l,c){N(l,t,c),p(t,o),i||(a=q(t,"click",s),i=!0)},p(l,c){e=l,c&4&&n!==(n=e[14].name+"")&&De(o,n),c&6&&Ze(t,"current",e[1]==e[14].id)},d(l){l&&w(t),i=!1,a()}}}function rn(r){let e,t,n;function o(a){r[11](a)}let i={options:r[0]};return r[3]!==void 0&&(i.showModal=r[3]),e=new xn({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,s){const l={};s&1&&(l.options=a[0]),!t&&s&8&&(t=!0,l.showModal=a[3],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function an(r){let e,t,n;function o(a){r[12](a)}let i={};return r[4]!==void 0&&(i.showModal=r[4]),e=new ht({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,s){const l={};!t&&s&16&&(t=!0,l.showModal=a[4],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function on(r){let e,t,n;function o(a){r[13](a)}let i={folderId:r[1]};return r[5]!==void 0&&(i.showModal=r[5]),e=new Qr({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,s){const l={};s&2&&(l.folderId=a[1]),!t&&s&32&&(t=!0,l.showModal=a[5],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function Ba(r){let e,t,n,o,i,a,s=xe(r[6].code)+"",l,c,u,d=[],v=new Map,g,y,S="+",b,h,m="☰",f,M,x,Y,P,V,se;n=new Na({props:{folderId:r[1]}});let R=Ce(r[2]);const ae=C=>C[14].id;for(let C=0;C<R.length;C+=1){let D=tn(r,R,C),G=ae(D);v.set(G,d[C]=nn(G,D))}let F=r[3]&&rn(r),Z=r[4]&&an(r),A=r[5]&&on(r);return{c(){e=_("div"),t=_("div"),H(n.$$.fragment),o=j(),i=_("div"),a=_("button"),l=de(s),c=j(),u=_("div");for(let C=0;C<d.length;C+=1)d[C].c();g=j(),y=_("button"),y.textContent=S,b=j(),h=_("button"),h.textContent=m,f=j(),F&&F.c(),M=j(),Z&&Z.c(),x=j(),A&&A.c(),Y=me(),this.h()},l(C){e=T(C,"DIV",{class:!0});var D=I(e);t=T(D,"DIV",{class:!0});var G=I(t);W(n.$$.fragment,G),G.forEach(w),o=$(D),i=T(D,"DIV",{class:!0});var oe=I(i);a=T(oe,"BUTTON",{class:!0});var _e=I(a);l=ue(_e,s),_e.forEach(w),c=$(oe),u=T(oe,"DIV",{class:!0});var L=I(u);for(let ke=0;ke<d.length;ke+=1)d[ke].l(L);g=$(L),y=T(L,"BUTTON",{class:!0,"data-svelte-h":!0}),te(y)!=="svelte-1hnfxpo"&&(y.textContent=S),L.forEach(w),oe.forEach(w),b=$(D),h=T(D,"BUTTON",{class:!0,"data-svelte-h":!0}),te(h)!=="svelte-1x767tg"&&(h.textContent=m),D.forEach(w),f=$(C),F&&F.l(C),M=$(C),Z&&Z.l(C),x=$(C),A&&A.l(C),Y=me(),this.h()},h(){k(t,"class","folder svelte-1x7c20x"),k(a,"class","editAppButton svelte-1x7c20x"),k(y,"class","create-folder svelte-1x7c20x"),k(u,"class","folder-titles svelte-1x7c20x"),k(i,"class","header svelte-1x7c20x"),k(h,"class","main-menu-button svelte-1x7c20x"),k(e,"class","app svelte-1x7c20x")},m(C,D){N(C,e,D),p(e,t),J(n,t,null),p(e,o),p(e,i),p(i,a),p(a,l),p(i,c),p(i,u);for(let G=0;G<d.length;G+=1)d[G]&&d[G].m(u,null);p(u,g),p(u,y),p(e,b),p(e,h),N(C,f,D),F&&F.m(C,D),N(C,M,D),Z&&Z.m(C,D),N(C,x,D),A&&A.m(C,D),N(C,Y,D),P=!0,V||(se=[q(a,"click",r[8]),q(y,"click",r[7]),q(h,"click",r[10])],V=!0)},p(C,[D]){const G={};D&2&&(G.folderId=C[1]),n.$set(G),(!P||D&64)&&s!==(s=xe(C[6].code)+"")&&De(l,s),D&38&&(R=Ce(C[2]),d=at(d,D,ae,1,C,R,v,u,dn,nn,g,tn)),C[3]?F?(F.p(C,D),D&8&&E(F,1)):(F=rn(C),F.c(),E(F,1),F.m(M.parentNode,M)):F&&(ye(),O(F,1,1,()=>{F=null}),Me()),C[4]?Z?(Z.p(C,D),D&16&&E(Z,1)):(Z=an(C),Z.c(),E(Z,1),Z.m(x.parentNode,x)):Z&&(ye(),O(Z,1,1,()=>{Z=null}),Me()),C[5]?A?(A.p(C,D),D&32&&E(A,1)):(A=on(C),A.c(),E(A,1),A.m(Y.parentNode,Y)):A&&(ye(),O(A,1,1,()=>{A=null}),Me())},i(C){P||(E(n.$$.fragment,C),E(F),E(Z),E(A),P=!0)},o(C){O(n.$$.fragment,C),O(F),O(Z),O(A),P=!1},d(C){C&&(w(e),w(f),w(M),w(x),w(Y)),K(n);for(let D=0;D<d.length;D+=1)d[D].d();F&&F.d(C),Z&&Z.d(C),A&&A.d(C),V=!1,Re(se)}}}function Ua(r,e,t){let n,o;X(r,Oe,h=>t(2,n=h)),X(r,Ee,h=>t(6,o=h));let{mainMenuOptions:i={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[]}}=e,a=n[0].id,s=!1,l=!1,c=!1;function u(){const h=n.at(-1).id+1;n.push({id:h,name:"New folder",offsetX:0,offsetY:0}),Oe.set(n),t(1,a=h),t(5,c=!0)}const d=()=>t(4,l=!0),v=h=>{a==h.id?t(5,c=!0):t(1,a=h.id)},g=()=>t(3,s=!0);function y(h){s=h,t(3,s)}function S(h){l=h,t(4,l)}function b(h){c=h,t(5,c)}return r.$$set=h=>{"mainMenuOptions"in h&&t(0,i=h.mainMenuOptions)},r.$$.update=()=>{r.$$.dirty&6&&(n.find(h=>h.id==a)||t(1,a=n[0].id))},[i,a,n,s,l,c,o,u,d,v,g,y,S,b]}class La extends ve{constructor(e){super(),we(this,e,Ua,Ba,he,{mainMenuOptions:0})}}const Fe={editorSettings:{codeScreen:{widthInMm:40*1.5,heightInMm:66*1.5},folderScreen:{widthInMm:40,heightInMm:66}},app:{code:`
class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}
		`.trim()},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Hello!\`),
			Space,
			Text.text(\`How are you feeling?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`Bad\`).page(FeelingBadPage),
				Space,
				Button.text(\`Good\`).page(FeelingGoodPage),
				Space,
			),
		)
	}
	
}
	`.trim(),x:200,y:300},{id:2,folderId:1,code:`
class FeelingGoodPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Glad to hear that! :)\`),
			Space,
			Button.text(\`To StartPage\`).page(StartPage)
		)
	}
	
}
	`.trim(),x:800,y:300},{id:3,folderId:1,code:`
class FeelingBadPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Sorry to hear that :(\`),
			Space,
			Button.text(\`I feel better now\`).page(FeelingGoodPage)
		)
	}
	
}
	`.trim(),x:500,y:150}],pageTemplates:[{id:1,code:`
class AskIfAdultPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`).page(null),
				Space,
				Button.text(\`Yes\`).page(null),
				Space,
			),
		)
	}
	
}
		`.trim()},{id:2,code:`
class EnterAgePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`).page(null),
			Button.text(\`15\`).page(null),
			Button.text(\`20\`).page(null),
			Button.text(\`25\`).page(null),
			Space,
		)
	}
	
}
		`.trim()}]};function sn(r){let e,t;return e=new La({props:{mainMenuOptions:r[0]}}),{c(){H(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,o){J(e,n,o),t=!0},p(n,o){const i={};o&1&&(i.mainMenuOptions=n[0]),e.$set(i)},i(n){t||(E(e.$$.fragment,n),t=!0)},o(n){O(e.$$.fragment,n),t=!1},d(n){K(e,n)}}}function Fa(r){let e,t,n=r[1]&&sn(r);return{c(){n&&n.c(),e=me()},l(o){n&&n.l(o),e=me()},m(o,i){n&&n.m(o,i),N(o,e,i),t=!0},p(o,[i]){o[1]?n?(n.p(o,i),i&2&&E(n,1)):(n=sn(o),n.c(),E(n,1),n.m(e.parentNode,e)):n&&(ye(),O(n,1,1,()=>{n=null}),Me())},i(o){t||(E(n),t=!0)},o(o){O(n),t=!1},d(o){o&&w(e),n&&n.d(o)}}}function Ya(r,e,t){let n,o,i,a,s;X(r,Ue,d=>t(3,n=d)),X(r,Ie,d=>t(4,o=d)),X(r,Oe,d=>t(5,i=d)),X(r,Ee,d=>t(6,a=d)),X(r,Ae,d=>t(7,s=d));let{mainMenuOptions:l={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[]}}=e,{bagaCode:c=""}=e,u=!1;return cn(()=>{if(c!="")try{const d=fn(c);Se(Ae,s=d.editorSettings,s),Se(Ee,a=d.app,a),Se(Oe,i=d.folders,i),Se(Ie,o=d.pages,o),Se(Ue,n=d.pageTemplates,n)}catch(d){console.log(d),alert("The baga code given to the editor is invalid. The default project will be loaded instead.")}s!=null&&s.screen||Se(Ae,s=Fe.editorSettings,s),a!=null&&a.code||Se(Ee,a=Fe.app,a),i!=null&&i.length||Se(Oe,i=Fe.folders,i),o.length||Se(Ie,o=Fe.pages,o),n.length||Se(Ue,n=Fe.pageTemplates,n),t(1,u=!0)}),r.$$set=d=>{"mainMenuOptions"in d&&t(0,l=d.mainMenuOptions),"bagaCode"in d&&t(2,c=d.bagaCode)},[l,u,c]}class za extends ve{constructor(e){super(),we(this,e,Ya,Fa,he,{mainMenuOptions:0,bagaCode:2})}}function ln(r){let e,t;return e=new za({props:{bagaCode:r[0],mainMenuOptions:r[3]}}),{c(){H(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,o){J(e,n,o),t=!0},p(n,o){const i={};o&1&&(i.bagaCode=n[0]),e.$set(i)},i(n){t||(E(e.$$.fragment,n),t=!0)},o(n){O(e.$$.fragment,n),t=!1},d(n){K(e,n)}}}function Ga(r){let e,t,n,o,i=r[1]&&ln(r);return{c(){e=_("meta"),t=j(),i&&i.c(),n=me(),this.h()},l(a){const s=kn("svelte-10aecs7",document.head);e=T(s,"META",{"http-equiv":!0,content:!0}),s.forEach(w),t=$(a),i&&i.l(a),n=me(),this.h()},h(){k(e,"http-equiv","Content-Security-Policy"),k(e,"content",r[2])},m(a,s){p(document.head,e),N(a,t,s),i&&i.m(a,s),N(a,n,s),o=!0},p(a,[s]){a[1]?i?(i.p(a,s),s&2&&E(i,1)):(i=ln(a),i.c(),E(i,1),i.m(n.parentNode,n)):i&&(ye(),O(i,1,1,()=>{i=null}),Me())},i(a){o||(E(i),o=!0)},o(a){O(i),o=!1},d(a){a&&(w(t),w(n)),w(e),i&&i.d(a)}}}function Xa(r,e,t){const n=["default-src 'none';","form-action 'none';","connect-src 'none';","img-src * data:;","script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net blob:;","style-src-attr 'self' 'unsafe-inline';","style-src-elem 'self' 'unsafe-inline' https://cdn.jsdelivr.net;","font-src https://cdn.jsdelivr.net;"].join(" "),o={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[{text:"Copy link to run app",onClick(s){const l=`https://bagawork.com/run#${s}`;navigator.clipboard.writeText(l)}}]};let i="",a=!1;return cn(()=>{t(0,i=location.hash.substring("#".length)),t(1,a=!0)}),[i,a,n,o]}class eo extends ve{constructor(e){super(),we(this,e,Xa,Ga,he,{})}}export{eo as component};
