import{s as ue,c as Tn,u as yn,g as In,b as Mn,f as ce,y as pe,d as G,r as Ne,z as $e,n as Te,a as tt,i as nt,A as dt,o as cn}from"../chunks/scheduler.DFPFbGJz.js";import{S as ve,i as we,e as _,a as T,d as M,h as w,o as S,j as R,D as q,F as ze,t as E,k as O,G as ge,c as X,f as W,m as J,l as K,I as Be,s as j,r as he,g as te,b as $,u as de,v as U,p,C as Pe,q as me,A as ye,z as Ie,x as rt,w as Oe,J as _t,E as Ze,y as kn}from"../chunks/index.CzDE4dZi.js";import{e as ke,u as at,d as hn,o as dn}from"../chunks/each.Baps6-EM.js";import{a as Ve,s as Sn,g as De,F as un}from"../chunks/show-app-in-element.DXo9f3fj.js";import{w as qe}from"../chunks/index.U33hhKo3.js";import{a as lt,g as fn}from"../chunks/project-compressor.Cxxezr6y.js";import"../chunks/index.D61oRkIS.js";function Cn(r){let e,t,n,o;const i=r[3].default,a=Tn(i,r,r[2],null);return{c(){e=_("div"),a&&a.c(),this.h()},l(s){e=T(s,"DIV",{class:!0});var l=M(e);a&&a.l(l),l.forEach(w),this.h()},h(){S(e,"class","modal svelte-pjkfh")},m(s,l){R(s,e,l),a&&a.m(e,null),t=!0,n||(o=q(e,"click",ze(r[0])),n=!0)},p(s,[l]){a&&a.p&&(!t||l&4)&&yn(a,i,s,s[2],t?Mn(i,s[2],l,null):In(s[2]),null)},i(s){t||(E(a,s),t=!0)},o(s){O(a,s),t=!1},d(s){s&&w(e),a&&a.d(s),n=!1,o()}}}function En(r,e,t){let{$$slots:n={},$$scope:o}=e,{showModal:i}=e;function a(s){s.target==s.currentTarget&&t(1,i=!1)}return r.$$set=s=>{"showModal"in s&&t(1,i=s.showModal),"$$scope"in s&&t(2,o=s.$$scope)},[a,i,o,n]}class Re extends ve{constructor(e){super(),we(this,e,En,Cn,ue,{showModal:1})}}const Ae=qe({}),Ce=qe({}),xe=qe([]),Se=qe([]),Le=qe([]);function An(r){let e,t,n="Edit settings",o,i,a,s="Folder screen",l,c,d="The size of the preview screens on the folder page, and when selecting a page template.",h,v,g,y,k,b,u,m,f,I,V="Preview folder screen size",Y,D,x,se="Code screen",N,ae,F="The size of the preview screen on the pages where you edit code.",Z,A,C,P,H,oe,_e,L,Me,Q,le="Preview code screen size",fe,be;return{c(){e=_("div"),t=_("h1"),t.textContent=n,o=j(),i=_("div"),a=_("h2"),a.textContent=s,l=j(),c=_("p"),c.textContent=d,h=j(),v=_("div"),g=he(`Width in mm:
				`),y=_("input"),k=j(),b=_("div"),u=he(`Height in mm:
				`),m=_("input"),f=j(),I=_("div"),I.textContent=V,Y=j(),D=_("div"),x=_("h2"),x.textContent=se,N=j(),ae=_("p"),ae.textContent=F,Z=j(),A=_("div"),C=he(`Width in mm:
				`),P=_("input"),H=j(),oe=_("div"),_e=he(`Height in mm:
				`),L=_("input"),Me=j(),Q=_("div"),Q.textContent=le,this.h()},l(ie){e=T(ie,"DIV",{class:!0});var ne=M(e);t=T(ne,"H1",{"data-svelte-h":!0}),te(t)!=="svelte-12605jx"&&(t.textContent=n),o=$(ne),i=T(ne,"DIV",{class:!0});var ee=M(i);a=T(ee,"H2",{"data-svelte-h":!0}),te(a)!=="svelte-1eysbo6"&&(a.textContent=s),l=$(ee),c=T(ee,"P",{"data-svelte-h":!0}),te(c)!=="svelte-1pajsxr"&&(c.textContent=d),h=$(ee),v=T(ee,"DIV",{});var B=M(v);g=de(B,`Width in mm:
				`),y=T(B,"INPUT",{type:!0,min:!0}),B.forEach(w),k=$(ee),b=T(ee,"DIV",{});var z=M(b);u=de(z,`Height in mm:
				`),m=T(z,"INPUT",{type:!0,min:!0}),z.forEach(w),f=$(ee),I=T(ee,"DIV",{class:!0,"data-svelte-h":!0}),te(I)!=="svelte-1ewgrlo"&&(I.textContent=V),ee.forEach(w),Y=$(ne),D=T(ne,"DIV",{class:!0});var re=M(D);x=T(re,"H2",{"data-svelte-h":!0}),te(x)!=="svelte-1k237qn"&&(x.textContent=se),N=$(re),ae=T(re,"P",{"data-svelte-h":!0}),te(ae)!=="svelte-1mtgj5z"&&(ae.textContent=F),Z=$(re),A=T(re,"DIV",{});var Ee=M(A);C=de(Ee,`Width in mm:
				`),P=T(Ee,"INPUT",{type:!0,min:!0}),Ee.forEach(w),H=$(re),oe=T(re,"DIV",{});var je=M(oe);_e=de(je,`Height in mm:
				`),L=T(je,"INPUT",{type:!0,min:!0}),je.forEach(w),Me=$(re),Q=T(re,"DIV",{class:!0,"data-svelte-h":!0}),te(Q)!=="svelte-icwf2t"&&(Q.textContent=le),re.forEach(w),ne.forEach(w),this.h()},h(){S(y,"type","number"),S(y,"min","1"),S(m,"type","number"),S(m,"min","1"),S(I,"class","screen svelte-1wsz6vm"),U(I,"width",`${r[1].folderScreen.widthInMm}mm`),U(I,"height",`${r[1].folderScreen.heightInMm}mm`),S(i,"class","group svelte-1wsz6vm"),S(P,"type","number"),S(P,"min","1"),S(L,"type","number"),S(L,"min","1"),S(Q,"class","screen svelte-1wsz6vm"),U(Q,"width",`${r[1].codeScreen.widthInMm}mm`),U(Q,"height",`${r[1].codeScreen.heightInMm}mm`),S(D,"class","group svelte-1wsz6vm"),S(e,"class","edit-settings-modal svelte-1wsz6vm")},m(ie,ne){R(ie,e,ne),p(e,t),p(e,o),p(e,i),p(i,a),p(i,l),p(i,c),p(i,h),p(i,v),p(v,g),p(v,y),Pe(y,r[1].folderScreen.widthInMm),p(i,k),p(i,b),p(b,u),p(b,m),Pe(m,r[1].folderScreen.heightInMm),p(i,f),p(i,I),p(e,Y),p(e,D),p(D,x),p(D,N),p(D,ae),p(D,Z),p(D,A),p(A,C),p(A,P),Pe(P,r[1].codeScreen.widthInMm),p(D,H),p(D,oe),p(oe,_e),p(oe,L),Pe(L,r[1].codeScreen.heightInMm),p(D,Me),p(D,Q),fe||(be=[q(y,"input",r[2]),q(m,"input",r[3]),q(P,"input",r[4]),q(L,"input",r[5])],fe=!0)},p(ie,ne){ne&2&&Be(y.value)!==ie[1].folderScreen.widthInMm&&Pe(y,ie[1].folderScreen.widthInMm),ne&2&&Be(m.value)!==ie[1].folderScreen.heightInMm&&Pe(m,ie[1].folderScreen.heightInMm),ne&2&&U(I,"width",`${ie[1].folderScreen.widthInMm}mm`),ne&2&&U(I,"height",`${ie[1].folderScreen.heightInMm}mm`),ne&2&&Be(P.value)!==ie[1].codeScreen.widthInMm&&Pe(P,ie[1].codeScreen.widthInMm),ne&2&&Be(L.value)!==ie[1].codeScreen.heightInMm&&Pe(L,ie[1].codeScreen.heightInMm),ne&2&&U(Q,"width",`${ie[1].codeScreen.widthInMm}mm`),ne&2&&U(Q,"height",`${ie[1].codeScreen.heightInMm}mm`)},d(ie){ie&&w(e),fe=!1,Ne(be)}}}function jn(r){let e,t,n;function o(a){r[6](a)}let i={$$slots:{default:[An]},$$scope:{ctx:r}};return r[0]!==void 0&&(i.showModal=r[0]),e=new Re({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){X(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,[s]){const l={};s&130&&(l.$$scope={dirty:s,ctx:a}),!t&&s&1&&(t=!0,l.showModal=a[0],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function $n(r,e,t){let n;G(r,Ae,d=>t(1,n=d));let{showModal:o=!0}=e;function i(){n.folderScreen.widthInMm=Be(this.value),Ae.set(n)}function a(){n.folderScreen.heightInMm=Be(this.value),Ae.set(n)}function s(){n.codeScreen.widthInMm=Be(this.value),Ae.set(n)}function l(){n.codeScreen.heightInMm=Be(this.value),Ae.set(n)}function c(d){o=d,t(0,o)}return r.$$set=d=>{"showModal"in d&&t(0,o=d.showModal)},[o,n,i,a,s,l,c]}class On extends ve{constructor(e){super(),we(this,e,$n,jn,ue,{showModal:0})}}function Tt(r,e,t){const n=r.slice();return n[16]=e[t],n}function yt(r){let e,t,n="Copy project to clipboard as recreational link",o,i;return{c(){e=_("div"),t=_("button"),t.textContent=n},l(a){e=T(a,"DIV",{});var s=M(e);t=T(s,"BUTTON",{"data-svelte-h":!0}),te(t)!=="svelte-133s4n0"&&(t.textContent=n),s.forEach(w)},m(a,s){R(a,e,s),p(e,t),o||(i=q(t,"click",r[3]),o=!0)},p:Te,d(a){a&&w(e),o=!1,i()}}}function It(r){let e,t,n="Save project to BAGA file",o,i,a,s,l,c='<label for="file">Load project from Baga file</label>',d,h;return{c(){e=_("div"),t=_("button"),t.textContent=n,o=j(),i=_("div"),a=_("input"),s=j(),l=_("button"),l.innerHTML=c,this.h()},l(v){e=T(v,"DIV",{});var g=M(e);t=T(g,"BUTTON",{"data-svelte-h":!0}),te(t)!=="svelte-1g98l3d"&&(t.textContent=n),g.forEach(w),o=$(v),i=T(v,"DIV",{});var y=M(i);a=T(y,"INPUT",{type:!0,id:!0,style:!0,accept:!0}),s=$(y),l=T(y,"BUTTON",{class:!0,"data-svelte-h":!0}),te(l)!=="svelte-1ucarmc"&&(l.innerHTML=c),y.forEach(w),this.h()},h(){S(a,"type","file"),S(a,"id","file"),U(a,"display","none"),S(a,"accept",".baga"),S(l,"class","open-button")},m(v,g){R(v,e,g),p(e,t),R(v,o,g),R(v,i,g),p(i,a),p(i,s),p(i,l),d||(h=[q(t,"click",r[4]),q(a,"change",r[5])],d=!0)},p:Te,d(v){v&&(w(e),w(o),w(i)),d=!1,Ne(h)}}}function Mt(r){let e,t,n=r[16].text+"",o,i,a,s;function l(){return r[8](r[16])}return{c(){e=_("div"),t=_("button"),o=he(n),i=j()},l(c){e=T(c,"DIV",{});var d=M(e);t=T(d,"BUTTON",{});var h=M(t);o=de(h,n),h.forEach(w),i=$(d),d.forEach(w)},m(c,d){R(c,e,d),p(e,t),p(t,o),p(e,i),a||(s=q(t,"click",l),a=!0)},p(c,d){r=c,d&2&&n!==(n=r[16].text+"")&&Oe(o,n)},d(c){c&&w(e),a=!1,s()}}}function Pn(r){let e,t,n="Main menu",o,i,a,s,l="Edit settings",c,d,h,v,g=r[1].showCopyLinkButton&&yt(r),y=r[1].showFileButtons&&It(r),k=ke(r[1].extraOptions),b=[];for(let u=0;u<k.length;u+=1)b[u]=Mt(Tt(r,k,u));return{c(){e=_("div"),t=_("h1"),t.textContent=n,o=j(),g&&g.c(),i=j(),a=_("div"),s=_("button"),s.textContent=l,c=j(),y&&y.c(),d=j();for(let u=0;u<b.length;u+=1)b[u].c();this.h()},l(u){e=T(u,"DIV",{class:!0});var m=M(e);t=T(m,"H1",{class:!0,"data-svelte-h":!0}),te(t)!=="svelte-1x9r302"&&(t.textContent=n),o=$(m),g&&g.l(m),i=$(m),a=T(m,"DIV",{});var f=M(a);s=T(f,"BUTTON",{"data-svelte-h":!0}),te(s)!=="svelte-1m9tkp0"&&(s.textContent=l),f.forEach(w),c=$(m),y&&y.l(m),d=$(m);for(let I=0;I<b.length;I+=1)b[I].l(m);m.forEach(w),this.h()},h(){S(t,"class","svelte-tgu2et"),S(e,"class","main-menu-modal svelte-tgu2et")},m(u,m){R(u,e,m),p(e,t),p(e,o),g&&g.m(e,null),p(e,i),p(e,a),p(a,s),p(e,c),y&&y.m(e,null),p(e,d);for(let f=0;f<b.length;f+=1)b[f]&&b[f].m(e,null);h||(v=q(s,"click",r[7]),h=!0)},p(u,m){if(u[1].showCopyLinkButton?g?g.p(u,m):(g=yt(u),g.c(),g.m(e,i)):g&&(g.d(1),g=null),u[1].showFileButtons?y?y.p(u,m):(y=It(u),y.c(),y.m(e,d)):y&&(y.d(1),y=null),m&66){k=ke(u[1].extraOptions);let f;for(f=0;f<k.length;f+=1){const I=Tt(u,k,f);b[f]?b[f].p(I,m):(b[f]=Mt(I),b[f].c(),b[f].m(e,null))}for(;f<b.length;f+=1)b[f].d(1);b.length=k.length}},d(u){u&&w(e),g&&g.d(),y&&y.d(),rt(b,u),h=!1,v()}}}function kt(r){let e,t,n;function o(a){r[10](a)}let i={};return r[2]!==void 0&&(i.showModal=r[2]),e=new On({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){X(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,s){const l={};!t&&s&4&&(t=!0,l.showModal=a[2],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function Dn(r){let e,t,n,o,i;function a(c){r[9](c)}let s={$$slots:{default:[Pn]},$$scope:{ctx:r}};r[0]!==void 0&&(s.showModal=r[0]),e=new Re({props:s}),ce.push(()=>ge(e,"showModal",a));let l=r[2]&&kt(r);return{c(){X(e.$$.fragment),n=j(),l&&l.c(),o=me()},l(c){W(e.$$.fragment,c),n=$(c),l&&l.l(c),o=me()},m(c,d){J(e,c,d),R(c,n,d),l&&l.m(c,d),R(c,o,d),i=!0},p(c,[d]){const h={};d&524294&&(h.$$scope={dirty:d,ctx:c}),!t&&d&1&&(t=!0,h.showModal=c[0],pe(()=>t=!1)),e.$set(h),c[2]?l?(l.p(c,d),d&4&&E(l,1)):(l=kt(c),l.c(),E(l,1),l.m(o.parentNode,o)):l&&(ye(),O(l,1,1,()=>{l=null}),Ie())},i(c){i||(E(e.$$.fragment,c),E(l),i=!0)},o(c){O(e.$$.fragment,c),O(l),i=!1},d(c){c&&(w(n),w(o)),K(e,c),l&&l.d(c)}}}function xn(r,e,t){let n,o,i,a;G(r,Le,f=>t(11,n=f)),G(r,Se,f=>t(12,o=f)),G(r,xe,f=>t(13,i=f)),G(r,Ce,f=>t(14,a=f));let{showModal:s=!0}=e,{options:l={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[]}}=e,c=!1;function d(){return{app:a,folders:i,pages:o,pageTemplates:n}}async function h(){const I=`https://bagawork.com/editor#${lt(d())}`;navigator.clipboard.writeText(I)}function v(){const f=lt(d()),I=document.createElement("a");I.href="data:application/octet-stream,"+encodeURIComponent(f),I.download=`${Ve(a.code)}.baga`,I.click()}function g(f){const I=f.target.files;if(I.length==0)return;const V=I[0],Y=new FileReader;Y.readAsText(V),Y.addEventListener("load",D=>{try{const x=fn(D.target.result);x.app&&x.folders&&x.pages&&x.pageTemplates?($e(Ce,a=x.app,a),$e(xe,i=x.folders,i),$e(Se,o=x.pages,o),$e(Le,n=x.pageTemplates,n),t(0,s=!1)):alert("Error: The BAGA file could be parsed, but didn't contain all expected data.")}catch{alert("Error: The file is not a valid BAGA file.")}})}function y(f){const I=lt(d());f.onClick(I)}const k=()=>t(2,c=!0),b=f=>y(f);function u(f){s=f,t(0,s)}function m(f){c=f,t(2,c)}return r.$$set=f=>{"showModal"in f&&t(0,s=f.showModal),"options"in f&&t(1,l=f.options)},[s,l,c,h,v,g,y,k,b,u,m]}class Vn extends ve{constructor(e){super(),we(this,e,xn,Dn,ue,{showModal:0,options:1})}}function Nn(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function St(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,n)}return t}function Ct(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?St(Object(t),!0).forEach(function(n){Nn(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):St(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function Rn(r,e){if(r==null)return{};var t={},n=Object.keys(r),o,i;for(i=0;i<n.length;i++)o=n[i],!(e.indexOf(o)>=0)&&(t[o]=r[o]);return t}function Bn(r,e){if(r==null)return{};var t=Rn(r,e),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(o=0;o<i.length;o++)n=i[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(r,n)&&(t[n]=r[n])}return t}function Un(r,e){return Ln(r)||Fn(r,e)||Yn(r,e)||zn()}function Ln(r){if(Array.isArray(r))return r}function Fn(r,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(r)))){var t=[],n=!0,o=!1,i=void 0;try{for(var a=r[Symbol.iterator](),s;!(n=(s=a.next()).done)&&(t.push(s.value),!(e&&t.length===e));n=!0);}catch(l){o=!0,i=l}finally{try{!n&&a.return!=null&&a.return()}finally{if(o)throw i}}return t}}function Yn(r,e){if(r){if(typeof r=="string")return Et(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Et(r,e)}}function Et(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function zn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hn(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function At(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,n)}return t}function jt(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?At(Object(t),!0).forEach(function(n){Hn(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):At(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function Gn(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return function(n){return e.reduceRight(function(o,i){return i(o)},n)}}function Ye(r){return function e(){for(var t=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=r.length?r.apply(this,o):function(){for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return e.apply(t,[].concat(o,s))}}}function et(r){return{}.toString.call(r).includes("Object")}function qn(r){return!Object.keys(r).length}function He(r){return typeof r=="function"}function Xn(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function Wn(r,e){return et(e)||Ue("changeType"),Object.keys(e).some(function(t){return!Xn(r,t)})&&Ue("changeField"),e}function Jn(r){He(r)||Ue("selectorType")}function Kn(r){He(r)||et(r)||Ue("handlerType"),et(r)&&Object.values(r).some(function(e){return!He(e)})&&Ue("handlersType")}function Qn(r){r||Ue("initialIsRequired"),et(r)||Ue("initialType"),qn(r)&&Ue("initialContent")}function Zn(r,e){throw new Error(r[e]||r.default)}var er={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Ue=Ye(Zn)(er),Qe={changes:Wn,selector:Jn,handler:Kn,initial:Qn};function tr(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Qe.initial(r),Qe.handler(e);var t={current:r},n=Ye(ar)(t,e),o=Ye(rr)(t),i=Ye(Qe.changes)(r),a=Ye(nr)(t);function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return Qe.selector(c),c(t.current)}function l(c){Gn(n,o,i,a)(c)}return[s,l]}function nr(r,e){return He(e)?e(r.current):e}function rr(r,e){return r.current=jt(jt({},r.current),e),e}function ar(r,e,t){return He(e)?e(r.current):Object.keys(t).forEach(function(n){var o;return(o=e[n])===null||o===void 0?void 0:o.call(e,r.current[n])}),t}var or={create:tr},ir={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}};function sr(r){return function e(){for(var t=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=r.length?r.apply(this,o):function(){for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return e.apply(t,[].concat(o,s))}}}function lr(r){return{}.toString.call(r).includes("Object")}function cr(r){return r||$t("configIsRequired"),lr(r)||$t("configType"),r.urls?(hr(),{paths:{vs:r.urls.monacoBase}}):r}function hr(){console.warn(mn.deprecation)}function dr(r,e){throw new Error(r[e]||r.default)}var mn={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},$t=sr(dr)(mn),ur={config:cr},fr=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(o){return t.reduceRight(function(i,a){return a(i)},o)}};function pn(r,e){return Object.keys(e).forEach(function(t){e[t]instanceof Object&&r[t]&&Object.assign(e[t],pn(r[t],e[t]))}),Ct(Ct({},r),e)}var mr={type:"cancelation",msg:"operation is manually canceled"};function ct(r){var e=!1,t=new Promise(function(n,o){r.then(function(i){return e?o(mr):n(i)}),r.catch(o)});return t.cancel=function(){return e=!0},t}var pr=or.create({config:ir,isInitialized:!1,resolve:null,reject:null,monaco:null}),gn=Un(pr,2),Xe=gn[0],ot=gn[1];function gr(r){var e=ur.config(r),t=e.monaco,n=Bn(e,["monaco"]);ot(function(o){return{config:pn(o.config,n),monaco:t}})}function br(){var r=Xe(function(e){var t=e.monaco,n=e.isInitialized,o=e.resolve;return{monaco:t,isInitialized:n,resolve:o}});if(!r.isInitialized){if(ot({isInitialized:!0}),r.monaco)return r.resolve(r.monaco),ct(ht);if(window.monaco&&window.monaco.editor)return bn(window.monaco),r.resolve(window.monaco),ct(ht);fr(vr,_r)(Tr)}return ct(ht)}function vr(r){return document.body.appendChild(r)}function wr(r){var e=document.createElement("script");return r&&(e.src=r),e}function _r(r){var e=Xe(function(n){var o=n.config,i=n.reject;return{config:o,reject:i}}),t=wr("".concat(e.config.paths.vs,"/loader.js"));return t.onload=function(){return r()},t.onerror=e.reject,t}function Tr(){var r=Xe(function(t){var n=t.config,o=t.resolve,i=t.reject;return{config:n,resolve:o,reject:i}}),e=window.require;e.config(r.config),e(["vs/editor/editor.main"],function(t){bn(t),r.resolve(t)},function(t){r.reject(t)})}function bn(r){Xe().monaco||ot({monaco:r})}function yr(){return Xe(function(r){var e=r.monaco;return e})}var ht=new Promise(function(r,e){return ot({resolve:r,reject:e})}),vn={config:gr,init:br,__getMonacoInstance:yr};const Ir=`// https://github.com/microsoft/TypeScript/blob/70b7de11fbadb16d30f6770332f544c44134eb82/src/lib/es5.d.ts#L1295
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
}`,Mr=`// https://github.com/microsoft/TypeScript/blob/main/src/lib/es5.d.ts
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
		text(theText: string) { return this };
		
		/**
		 * Sets the text the component should show on the screen in which
		 * BBCode can be used to format the text.
		 * @param theText The text that should be shown
		 */
		textWithBBCode(theText: string) { return this };
		
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
	
))()`,Or=`const EnterNumber = (() => new (
	
	/**
	 * This GUI component is a view that displays a text field into which
	 * the user can enter some text.
	 */
	class EnterNumber extends Component{
		
		/**
		 * This methods sets the number that is initially written in the component.
		 * 
		 * @param theNumber The number to be in the component
		 */
		number(theNumber: number){ return this };
		
		/**
		 * This methods sets the maximum number of decimals the entered number may have. Pass it \`0\` to only allow integers.
		 * 
		 * @param numberOfDecimals The maximum number of decimals allowed
		 */
		decimals(numberOfDecimals: number) { return this };
		
		/**
		 * This methods sets the placeholder text that is shown in the component
		 * when it's empty.
		 * 
		 * @param theText The placeholder text
		 */
		placeholder(theText: string) { return this };
		
		/**
		 * This method indicates which page the user should come to when the
		 * app progresses to next page if no pageIfEqual(), pageIfLower()
		 * pageIfHigher() and pageIfBetween() calls match the entered number.
		 * 
		 * @param thePage The page the user should come to
		 */
		page(thePage: Page){ return this };
		
		/**
		 * This method indicates which page the user should come to if she has
		 * entered a specific number.
		 * 
		 * @param theNumber The number the user should enter...
		 * @param thePage ...to come to this page
		 */
		pageIfEqual(theNumber: number, thePage: Page) { return this };
		
		/**
		 * This method indicates which page the user should come to if she has
		 * entered a number lower than the provided one.
		 * 
		 * @param theNumber The number the user must enter a lower one than...
		 * @param thePage ...to come to this page
		 */
		pageIfLower(theNumber: number, thePage: Page) { return this };
		
		/**
		 * This method indicates which page the user should come to if she has
		 * entered a number higher than the provided one.
		 * 
		 * @param theNumber The number the user must enter a higher one than...
		 * @param thePage ...to come to this page
		 */
		pageIfHigher(theNumber: number, thePage: Page) { return this };
		
		/**
		 * This method indicates which page the user should come to if she has
		 * entered a number between the two provided ones.
		 * 
		 * @param lowNumber The number the user must enter a bigger one than...
		 * @param highNumber ...and the number the user must enter a lower one than...
		 * @param thePage ...to come to this page
		 */
		pageIfBetween(lowNumber: number, highNumber: number, thePage: Page) {
			return this
		};
		
		/**
		 * This method indicates which object (e.g. \`a\` or \`p\`) to store the
		 * entered number in, and which name to use.
		 * 
		 * @param theObject The object to store the entered number in
		 * @param theName The name the value should have in that object
		 */
		store(theObject: Object, theName: string) { return this };
		
		/**
		 * This methods indicates which number that should be used if the
		 * user doesn't enter a number in the component at all.
		 * 
		 * @param theNumber The number to be used if no number is entered
		 */
		defaultNumber(theNumber: number) { return this };
		
		/**
		 * This method indicates a function/method to call with the entered
		 * number when the user goes to next page.
		 * 
		 * @param theHandler The function/method to be called with the entered text
		 */
		handler(theHandler: (enteredNumber: string) => void){ return this };
		
	}
	
))()`,Pr=`const EnterText = (() => new (
	
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
		pageIfEqual(theText: string, thePage: Page) { return this };
		
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
		 * @param theHandler The function/method to be called with the entered text
		 */
		handler(theHandler: (enteredText: string) => void){ return this };
		
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
		 * Sets the text the component should show on the screen in which
		 * BBCode can be used to format the text.
		 * @param theText The text that should be shown
		 */
		textWithBBCode(theText: string) { return this };
		
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
	
))()`,xr=`const Space = (() => new (
	
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
	
)) ()`,Nr=`const Columns = (() => new (
	
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
	
))()`,Br=`const Image = (() => new (
	
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
	
))()`,Ur=`const m = {
	
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
	
}`;function Lr(r){let e,t,n;return{c(){e=_("div"),this.h()},l(o){e=T(o,"DIV",{class:!0}),M(e).forEach(w),this.h()},h(){S(e,"class","codeEditor svelte-11lcyox")},m(o,i){R(o,e,i),t||(n=tt(r[0].call(null,e)),t=!0)},p:Te,i:Te,o:Te,d(o){o&&w(e),t=!1,n()}}}function Fr(r,e,t){let n;G(r,Ce,c=>t(5,n=c));let{code:o=""}=e,{isReadOnly:i=!1}=e,a;async function s(c){const d=await vn.init();d.languages.typescript.javascriptDefaults.setCompilerOptions({noLib:!0,allowNonTsExtensions:!0}),d.languages.typescript.javascriptDefaults.setExtraLibs([{content:Ir},{content:Mr},{content:kr},{content:Sr},{content:Cr},{content:Er},{content:Ar},{content:jr},{content:$r},{content:Or},{content:Pr},{content:Dr},{content:xr},{content:Vr},{content:Nr},{content:Rr},{content:Br},{content:Ur}]);const h=Ve(n.code),v=Ve(o);h!="UnknownClassName"&&(d.languages.typescript.javascriptDefaults.addExtraLib(`const a = new ${h}();`),h!=v&&d.languages.typescript.javascriptDefaults.addExtraLib(n.code)),v!="UnknownClassName"&&v!=h&&d.languages.typescript.javascriptDefaults.addExtraLib(`const p = new ${v}();`),a=d.editor.create(c,{value:o,minimap:{enabled:!1},fontSize:16,tabSize:2,automaticLayout:!0,scrollBeyondLastLine:!1,renderWhitespace:"all",trimAutoWhitespace:!1,language:"javascript",suggest:{showKeywords:!1},readOnly:i})}function l(){return a.getValue()}return r.$$set=c=>{"code"in c&&t(1,o=c.code),"isReadOnly"in c&&t(2,i=c.isReadOnly)},[s,o,i,l]}class Ge extends ve{constructor(e){super(),we(this,e,Fr,Lr,ue,{code:1,isReadOnly:2,getCode:3})}get getCode(){return this.$$.ctx[3]}}function Yr(r){let e,t,n,o;return{c(){e=_("div"),this.h()},l(i){e=T(i,"DIV",{class:!0}),M(e).forEach(w),this.h()},h(){S(e,"class","screen svelte-sl89ha")},m(i,a){R(i,e,a),n||(o=tt(t=r[2].call(null,e,{createAppCode:r[0],runtimeSettings:r[1]})),n=!0)},p(i,[a]){t&&nt(t.update)&&a&3&&t.update.call(null,{createAppCode:i[0],runtimeSettings:i[1]})},i:Te,o:Te,d(i){i&&w(e),n=!1,o()}}}function zr(r,e,t){let{createAppCode:n=""}=e,{runtimeSettings:o={}}=e;function i(a,s){function l({createAppCode:c,runtimeSettings:d}){Sn(c,a,d)}return l(s),{update:l}}return r.$$set=a=>{"createAppCode"in a&&t(0,n=a.createAppCode),"runtimeSettings"in a&&t(1,o=a.runtimeSettings)},[n,o,i]}class it extends ve{constructor(e){super(),we(this,e,zr,Yr,ue,{createAppCode:0,runtimeSettings:1})}}function Hr(r){let e,t;return e=new it({props:{createAppCode:De(r[1],r[2]),runtimeSettings:r[0]}}),{c(){X(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,o){J(e,n,o),t=!0},p(n,[o]){const i={};o&6&&(i.createAppCode=De(n[1],n[2])),o&1&&(i.runtimeSettings=n[0]),e.$set(i)},i(n){t||(E(e.$$.fragment,n),t=!0)},o(n){O(e.$$.fragment,n),t=!1},d(n){K(e,n)}}}function Gr(r,e,t){let n,o;G(r,Ce,a=>t(1,n=a)),G(r,Se,a=>t(2,o=a));let{runtimeSettings:i={}}=e;return r.$$set=a=>{"runtimeSettings"in a&&t(0,i=a.runtimeSettings)},[i,n,o]}class wn extends ve{constructor(e){super(),we(this,e,Gr,Hr,ue,{runtimeSettings:0})}}function Ot(r){let e,t;return e=new wn({}),{c(){X(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,o){J(e,n,o),t=!0},p:Te,i(n){t||(E(e.$$.fragment,n),t=!0)},o(n){O(e.$$.fragment,n),t=!1},d(n){K(e,n)}}}function qr(r){let e,t,n,o=r[2],i,a,s,l="Restart",c,d,h,v,g,y,k=Ot(),b={code:r[3].code};return h=new Ge({props:b}),r[6](h),{c(){e=_("div"),t=_("div"),n=_("div"),k.c(),i=j(),a=_("div"),s=_("button"),s.textContent=l,c=j(),d=_("div"),X(h.$$.fragment),this.h()},l(u){e=T(u,"DIV",{class:!0});var m=M(e);t=T(m,"DIV",{class:!0});var f=M(t);n=T(f,"DIV",{class:!0});var I=M(n);k.l(I),I.forEach(w),i=$(f),a=T(f,"DIV",{class:!0});var V=M(a);s=T(V,"BUTTON",{"data-svelte-h":!0}),te(s)!=="svelte-5snrhj"&&(s.textContent=l),V.forEach(w),f.forEach(w),c=$(m),d=T(m,"DIV",{class:!0});var Y=M(d);W(h.$$.fragment,Y),Y.forEach(w),m.forEach(w),this.h()},h(){S(n,"class","app-component svelte-15liz8f"),U(n,"width",`${r[4].codeScreen.widthInMm}mm`),U(n,"height",`${r[4].codeScreen.heightInMm}mm`),S(a,"class","preview-buttons svelte-15liz8f"),S(t,"class","preview-section svelte-15liz8f"),S(d,"class","code-editor svelte-15liz8f"),S(e,"class","edit-app-modal svelte-15liz8f")},m(u,m){R(u,e,m),p(e,t),p(t,n),k.m(n,null),p(t,i),p(t,a),p(a,s),p(e,c),p(e,d),J(h,d,null),v=!0,g||(y=q(s,"click",r[5]),g=!0)},p(u,m){m&4&&ue(o,o=u[2])?(ye(),O(k,1,1,Te),Ie(),k=Ot(),k.c(),E(k,1),k.m(n,null)):k.p(u,m),m&16&&U(n,"width",`${u[4].codeScreen.widthInMm}mm`),m&16&&U(n,"height",`${u[4].codeScreen.heightInMm}mm`);const f={};m&8&&(f.code=u[3].code),h.$set(f)},i(u){v||(E(k),E(h.$$.fragment,u),v=!0)},o(u){O(k),O(h.$$.fragment,u),v=!1},d(u){u&&w(e),k.d(u),r[6](null),K(h),g=!1,y()}}}function Xr(r){let e,t,n;function o(a){r[7](a)}let i={$$slots:{default:[qr]},$$scope:{ctx:r}};return r[0]!==void 0&&(i.showModal=r[0]),e=new Re({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){X(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,[s]){const l={};s&286&&(l.$$scope={dirty:s,ctx:a}),!t&&s&1&&(t=!0,l.showModal=a[0],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function Wr(r,e,t){let n,o;G(r,Ce,h=>t(3,n=h)),G(r,Ae,h=>t(4,o=h));let{showModal:i}=e,a,s=Math.random();function l(){const h=a.getCode();$e(Ce,n.code=h,n),Ce.set(n),t(2,s=Math.random())}dt(()=>{l()});function c(h){ce[h?"unshift":"push"](()=>{a=h,t(1,a)})}function d(h){i=h,t(0,i)}return r.$$set=h=>{"showModal"in h&&t(0,i=h.showModal)},[i,a,s,n,o,l,c,d]}class ut extends ve{constructor(e){super(),we(this,e,Wr,Xr,ue,{showModal:0})}}function Jr(r){let e,t,n="Edit Folder",o,i,a,s,l,c,d,h,v,g,y;return{c(){e=_("div"),t=_("h1"),t.textContent=n,o=j(),i=_("div"),a=he("Name: "),s=_("input"),l=j(),c=_("div"),d=_("button"),h=he("Delete"),this.h()},l(k){e=T(k,"DIV",{class:!0});var b=M(e);t=T(b,"H1",{class:!0,"data-svelte-h":!0}),te(t)!=="svelte-1spe3mm"&&(t.textContent=n),o=$(b),i=T(b,"DIV",{});var u=M(i);a=de(u,"Name: "),s=T(u,"INPUT",{type:!0}),u.forEach(w),l=$(b),c=T(b,"DIV",{});var m=M(c);d=T(m,"BUTTON",{});var f=M(d);h=de(f,"Delete"),f.forEach(w),m.forEach(w),b.forEach(w),this.h()},h(){S(t,"class","svelte-1xyhvgw"),S(s,"type","text"),d.disabled=v=r[1].length==1,S(e,"class","edit-folder-modal svelte-1xyhvgw")},m(k,b){R(k,e,b),p(e,t),p(e,o),p(e,i),p(i,a),p(i,s),Pe(s,r[2].name),p(e,l),p(e,c),p(c,d),p(d,h),g||(y=[q(s,"input",r[5]),q(d,"click",r[3])],g=!0)},p(k,b){b&4&&s.value!==k[2].name&&Pe(s,k[2].name),b&2&&v!==(v=k[1].length==1)&&(d.disabled=v)},d(k){k&&w(e),g=!1,Ne(y)}}}function Kr(r){let e,t,n;function o(a){r[6](a)}let i={$$slots:{default:[Jr]},$$scope:{ctx:r}};return r[0]!==void 0&&(i.showModal=r[0]),e=new Re({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){X(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,[s]){const l={};s&262&&(l.$$scope={dirty:s,ctx:a}),!t&&s&1&&(t=!0,l.showModal=a[0],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function Qr(r,e,t){let n,o,i;G(r,xe,h=>t(1,o=h)),G(r,Se,h=>t(7,i=h));let{folderId:a}=e,{showModal:s}=e;function l(){const h=o.findIndex(g=>g.id==n.id);i.find(g=>g.folderId==a)&&!confirm("The folder you are deleting contains pages, and those pages will be deleted too if you delete the folder. Do you really want to delete the folder?")||(o.splice(h,1),$e(Se,i=i.filter(g=>g.folderId!=a),i),xe.set(o),t(0,s=!1))}function c(){n.name=this.value,t(2,n),t(1,o),t(4,a)}function d(h){s=h,t(0,s)}return r.$$set=h=>{"folderId"in h&&t(4,a=h.folderId),"showModal"in h&&t(0,s=h.showModal)},r.$$.update=()=>{r.$$.dirty&18&&t(2,n=o.find(h=>h.id==a))},[s,o,n,l,a,c,d]}class Zr extends ve{constructor(e){super(),we(this,e,Qr,Kr,ue,{folderId:4,showModal:0})}}function ea(r){let e,t,n,o;return{c(){e=_("div"),this.h()},l(i){e=T(i,"DIV",{class:!0}),M(e).forEach(w),this.h()},h(){S(e,"class","codeEditor svelte-11lcyox")},m(i,a){R(i,e,a),n||(o=tt(t=r[1].call(null,e,r[0])),n=!0)},p(i,[a]){t&&nt(t.update)&&a&1&&t.update.call(null,i[0])},i:Te,o:Te,d(i){i&&w(e),n=!1,o()}}}function ta(r,e,t){let{code:n=""}=e,o;function i(s,l){return vn.init().then(c=>{o=c.editor.create(s,{value:l,minimap:{enabled:!1},fontSize:16,tabSize:2,automaticLayout:!0,scrollBeyondLastLine:!1,renderWhitespace:"all",trimAutoWhitespace:!1,language:"json"})}),{update(c){o.getModel().setValue(c)}}}function a(){return o.getValue()}return r.$$set=s=>{"code"in s&&t(0,n=s.code)},[n,i,a]}class na extends ve{constructor(e){super(),we(this,e,ta,ea,ue,{code:0,getCode:2})}get getCode(){return this.$$.ctx[2]}}function ra(r){let e,t,n,o,i,a,s,l="Restart with state",c,d,h,v,g,y;o=new wn({props:{runtimeSettings:r[3]}});let k={code:JSON.stringify(r[2],null,"	")};return h=new na({props:k}),r[7](h),{c(){e=_("div"),t=_("div"),n=_("div"),X(o.$$.fragment),i=j(),a=_("div"),s=_("button"),s.textContent=l,c=j(),d=_("div"),X(h.$$.fragment),this.h()},l(b){e=T(b,"DIV",{class:!0});var u=M(e);t=T(u,"DIV",{class:!0});var m=M(t);n=T(m,"DIV",{class:!0});var f=M(n);W(o.$$.fragment,f),f.forEach(w),i=$(m),a=T(m,"DIV",{class:!0});var I=M(a);s=T(I,"BUTTON",{"data-svelte-h":!0}),te(s)!=="svelte-stko5y"&&(s.textContent=l),I.forEach(w),m.forEach(w),c=$(u),d=T(u,"DIV",{class:!0});var V=M(d);W(h.$$.fragment,V),V.forEach(w),u.forEach(w),this.h()},h(){S(n,"class","screen"),U(n,"width",`${r[4].codeScreen.widthInMm}mm`),U(n,"height",`${r[4].codeScreen.heightInMm}mm`),S(a,"class","buttons"),S(t,"class","preview-child"),S(d,"class","code-editor-child"),S(e,"class","edit-page-modal svelte-1jnl76i")},m(b,u){R(b,e,u),p(e,t),p(t,n),J(o,n,null),p(t,i),p(t,a),p(a,s),p(e,c),p(e,d),J(h,d,null),v=!0,g||(y=q(s,"click",r[5]),g=!0)},p(b,u){const m={};u&8&&(m.runtimeSettings=b[3]),o.$set(m),u&16&&U(n,"width",`${b[4].codeScreen.widthInMm}mm`),u&16&&U(n,"height",`${b[4].codeScreen.heightInMm}mm`);const f={};u&4&&(f.code=JSON.stringify(b[2],null,"	")),h.$set(f)},i(b){v||(E(o.$$.fragment,b),E(h.$$.fragment,b),v=!0)},o(b){O(o.$$.fragment,b),O(h.$$.fragment,b),v=!1},d(b){b&&w(e),K(o),r[7](null),K(h),g=!1,y()}}}function aa(r){let e,t,n;function o(a){r[8](a)}let i={$$slots:{default:[ra]},$$scope:{ctx:r}};return r[0]!==void 0&&(i.showModal=r[0]),e=new Re({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){X(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,[s]){const l={};s&542&&(l.$$scope={dirty:s,ctx:a}),!t&&s&1&&(t=!0,l.showModal=a[0],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function oa(r,e,t){let n;G(r,Ae,v=>t(4,n=v));let{initialState:o={}}=e,{showModal:i=!1}=e,a,s=o;const l={state:o,onStateChange(v){t(2,s=v)}};function c(){try{t(3,l.state=JSON.parse(a.getCode()),l)}catch{alert("Invalid JSON code in the editor. The app is not restarted.")}}function d(v){ce[v?"unshift":"push"](()=>{a=v,t(1,a)})}function h(v){i=v,t(0,i)}return r.$$set=v=>{"initialState"in v&&t(6,o=v.initialState),"showModal"in v&&t(0,i=v.showModal)},[i,a,s,l,n,c,o,d,h]}class ia extends ve{constructor(e){super(),we(this,e,oa,aa,ue,{initialState:6,showModal:0})}}function sa(r,e,t,n={isPreview:!1}){const o=De(r,e,t),i=new un(o,n);return i.start(),i}function la(r){let e,t,n,o;return{c(){e=_("div"),this.h()},l(i){e=T(i,"DIV",{class:!0}),M(e).forEach(w),this.h()},h(){S(e,"class","app svelte-jvv5s9")},m(i,a){R(i,e,a),n||(o=tt(t=ca.call(null,e,r[0])),n=!0)},p(i,[a]){t&&nt(t.update)&&a&1&&t.update.call(null,i[0])},i:Te,o:Te,d(i){i&&w(e),n=!1,o()}}}function ca(r,e){function t(n){r.innerText="",r.appendChild(n.createElement())}return t(e),{update:t}}function ha(r,e,t){let{frameworkApp:n=null}=e;return r.$$set=o=>{"frameworkApp"in o&&t(0,n=o.frameworkApp)},[n]}class _n extends ve{constructor(e){super(),we(this,e,ha,la,ue,{frameworkApp:0})}}function Pt(r,e,t){const n=r.slice();return n[16]=e[t][0],n[17]=e[t][1],n}function Dt(r,e,t){const n=r.slice();return n[16]=e[t][0],n[17]=e[t][1],n}function xt(r,e,t){const n=r.slice();return n[22]=e[t],n[24]=t,n}function Vt(r){let e;return{c(){e=_("div"),this.h()},l(t){e=T(t,"DIV",{class:!0}),M(e).forEach(w),this.h()},h(){S(e,"class","overlay")},m(t,n){R(t,e,n)},d(t){t&&w(e)}}}function da(r){let e,t,n,o;return{c(){e=_("button"),t=he("Execute"),this.h()},l(i){e=T(i,"BUTTON",{});var a=M(e);t=de(a,"Execute"),a.forEach(w),this.h()},h(){e.disabled=r[5]},m(i,a){R(i,e,a),p(e,t),n||(o=q(e,"click",function(){nt(r[4])&&r[4].apply(this,arguments)}),n=!0)},p(i,a){r=i,a&32&&(e.disabled=r[5])},d(i){i&&w(e),n=!1,o()}}}function ua(r){let e;return{c(){e=he("Executed")},l(t){e=de(t,"Executed")},m(t,n){R(t,e,n)},p:Te,d(t){t&&w(e)}}}function Nt(r,e){let t,n,o=e[1].length-e[24]+"",i,a,s,l,c=e[22]+"",d,h,v,g;function y(u,m){if(u[24]!=0)return ua;if(u[4])return da}let k=y(e),b=k&&k(e);return{key:r,first:null,c(){t=_("tr"),n=_("td"),i=he(o),a=j(),s=_("td"),l=_("div"),d=he(c),h=j(),v=_("td"),b&&b.c(),g=j(),this.h()},l(u){t=T(u,"TR",{});var m=M(t);n=T(m,"TD",{});var f=M(n);i=de(f,o),f.forEach(w),a=$(m),s=T(m,"TD",{});var I=M(s);l=T(I,"DIV",{});var V=M(l);d=de(V,c),V.forEach(w),I.forEach(w),h=$(m),v=T(m,"TD",{});var Y=M(v);b&&b.l(Y),Y.forEach(w),g=$(m),m.forEach(w),this.h()},h(){this.first=t},m(u,m){R(u,t,m),p(t,n),p(n,i),p(t,a),p(t,s),p(s,l),p(l,d),p(t,h),p(t,v),b&&b.m(v,null),p(t,g)},p(u,m){e=u,m&2&&o!==(o=e[1].length-e[24]+"")&&Oe(i,o),m&2&&c!==(c=e[22]+"")&&Oe(d,c),k===(k=y(e))&&b?b.p(e,m):(b&&b.d(1),b=k&&k(e),b&&(b.c(),b.m(v,null)))},d(u){u&&w(t),b&&b.d()}}}function fa(r){let e,t=ke(r[8]),n=[];for(let o=0;o<t.length;o+=1)n[o]=Rt(Dt(r,t,o));return{c(){for(let o=0;o<n.length;o+=1)n[o].c();e=me()},l(o){for(let i=0;i<n.length;i+=1)n[i].l(o);e=me()},m(o,i){for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(o,i);R(o,e,i)},p(o,i){if(i&256){t=ke(o[8]);let a;for(a=0;a<t.length;a+=1){const s=Dt(o,t,a);n[a]?n[a].p(s,i):(n[a]=Rt(s),n[a].c(),n[a].m(e.parentNode,e))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(o){o&&w(e),rt(n,o)}}}function ma(r){let e,t="None";return{c(){e=_("td"),e.textContent=t,this.h()},l(n){e=T(n,"TD",{colspan:!0,"data-svelte-h":!0}),te(e)!=="svelte-1rlzm8n"&&(e.textContent=t),this.h()},h(){S(e,"colspan","2")},m(n,o){R(n,e,o)},p:Te,d(n){n&&w(e)}}}function Rt(r){let e,t,n,o=r[16]+"",i,a,s,l=JSON.stringify(r[17],null,"  ")+"",c,d;return{c(){e=_("tr"),t=_("td"),n=he("a."),i=he(o),a=j(),s=_("td"),c=he(l),d=j()},l(h){e=T(h,"TR",{});var v=M(e);t=T(v,"TD",{});var g=M(t);n=de(g,"a."),i=de(g,o),g.forEach(w),a=$(v),s=T(v,"TD",{});var y=M(s);c=de(y,l),y.forEach(w),d=$(v),v.forEach(w)},m(h,v){R(h,e,v),p(e,t),p(t,n),p(t,i),p(e,a),p(e,s),p(s,c),p(e,d)},p(h,v){v&256&&o!==(o=h[16]+"")&&Oe(i,o),v&256&&l!==(l=JSON.stringify(h[17],null,"  ")+"")&&Oe(c,l)},d(h){h&&w(e)}}}function pa(r){let e,t=ke(r[7]),n=[];for(let o=0;o<t.length;o+=1)n[o]=Bt(Pt(r,t,o));return{c(){for(let o=0;o<n.length;o+=1)n[o].c();e=me()},l(o){for(let i=0;i<n.length;i+=1)n[i].l(o);e=me()},m(o,i){for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(o,i);R(o,e,i)},p(o,i){if(i&128){t=ke(o[7]);let a;for(a=0;a<t.length;a+=1){const s=Pt(o,t,a);n[a]?n[a].p(s,i):(n[a]=Bt(s),n[a].c(),n[a].m(e.parentNode,e))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(o){o&&w(e),rt(n,o)}}}function ga(r){let e,t="None";return{c(){e=_("td"),e.textContent=t,this.h()},l(n){e=T(n,"TD",{colspan:!0,"data-svelte-h":!0}),te(e)!=="svelte-1rlzm8n"&&(e.textContent=t),this.h()},h(){S(e,"colspan","2")},m(n,o){R(n,e,o)},p:Te,d(n){n&&w(e)}}}function Bt(r){let e,t,n,o=r[16]+"",i,a,s,l=JSON.stringify(r[17],null,"  ")+"",c,d;return{c(){e=_("tr"),t=_("td"),n=he("p."),i=he(o),a=j(),s=_("td"),c=he(l),d=j()},l(h){e=T(h,"TR",{});var v=M(e);t=T(v,"TD",{});var g=M(t);n=de(g,"p."),i=de(g,o),g.forEach(w),a=$(v),s=T(v,"TD",{});var y=M(s);c=de(y,l),y.forEach(w),d=$(v),v.forEach(w)},m(h,v){R(h,e,v),p(e,t),p(t,n),p(t,i),p(e,a),p(e,s),p(s,c),p(e,d)},p(h,v){v&128&&o!==(o=h[16]+"")&&Oe(i,o),v&128&&l!==(l=JSON.stringify(h[17],null,"  ")+"")&&Oe(c,l)},d(h){h&&w(e)}}}function ba(r){let e,t,n,o,i,a,s,l,c,d="<tr><th></th> <th>Next command to execute</th> <th>Action</th></tr>",h,v,g=[],y=new Map,k,b,u,m,f="<tr><th>App Variable</th> <th>Value</th></tr>",I,V,Y,D,x,se,N,ae,F,Z="<tr><th>Page Variable</th> <th>Value</th></tr>",A,C,P,H,oe,_e;o=new _n({props:{frameworkApp:r[6]}});let L=r[4]&&Vt(),Me=ke(r[1]);const Q=B=>B[24];for(let B=0;B<Me.length;B+=1){let z=xt(r,Me,B),re=Q(z);y.set(re,g[B]=Nt(re,z))}function le(B,z){return B[8].length==0?ma:fa}let fe=le(r),be=fe(r);x=new Ge({props:{code:r[3].code,isReadOnly:!0}});function ie(B,z){return B[7].length==0?ga:pa}let ne=ie(r),ee=ne(r);return oe=new Ge({props:{code:r[2].code,isReadOnly:!0}}),{c(){e=_("div"),t=_("div"),n=_("div"),X(o.$$.fragment),i=j(),L&&L.c(),a=j(),s=_("div"),l=_("table"),c=_("thead"),c.innerHTML=d,h=j(),v=_("tbody");for(let B=0;B<g.length;B+=1)g[B].c();k=j(),b=_("div"),u=_("table"),m=_("thead"),m.innerHTML=f,I=j(),V=_("tbody"),be.c(),Y=j(),D=_("div"),X(x.$$.fragment),se=j(),N=_("div"),ae=_("table"),F=_("thead"),F.innerHTML=Z,A=j(),C=_("tbody"),ee.c(),P=j(),H=_("div"),X(oe.$$.fragment),this.h()},l(B){e=T(B,"DIV",{class:!0});var z=M(e);t=T(z,"DIV",{class:!0});var re=M(t);n=T(re,"DIV",{class:!0});var Ee=M(n);W(o.$$.fragment,Ee),i=$(Ee),L&&L.l(Ee),Ee.forEach(w),a=$(re),s=T(re,"DIV",{class:!0});var je=M(s);l=T(je,"TABLE",{border:!0});var We=M(l);c=T(We,"THEAD",{"data-svelte-h":!0}),te(c)!=="svelte-107lsgq"&&(c.innerHTML=d),h=$(We),v=T(We,"TBODY",{});var ft=M(v);for(let st=0;st<g.length;st+=1)g[st].l(ft);ft.forEach(w),We.forEach(w),je.forEach(w),re.forEach(w),k=$(z),b=T(z,"DIV",{class:!0});var mt=M(b);u=T(mt,"TABLE",{border:!0});var Je=M(u);m=T(Je,"THEAD",{"data-svelte-h":!0}),te(m)!=="svelte-kuairh"&&(m.innerHTML=f),I=$(Je),V=T(Je,"TBODY",{});var pt=M(V);be.l(pt),pt.forEach(w),Je.forEach(w),mt.forEach(w),Y=$(z),D=T(z,"DIV",{class:!0});var gt=M(D);W(x.$$.fragment,gt),gt.forEach(w),se=$(z),N=T(z,"DIV",{class:!0});var bt=M(N);ae=T(bt,"TABLE",{border:!0});var Ke=M(ae);F=T(Ke,"THEAD",{"data-svelte-h":!0}),te(F)!=="svelte-fkbo7d"&&(F.innerHTML=Z),A=$(Ke),C=T(Ke,"TBODY",{});var vt=M(C);ee.l(vt),vt.forEach(w),Ke.forEach(w),bt.forEach(w),P=$(z),H=T(z,"DIV",{class:!0});var wt=M(H);W(oe.$$.fragment,wt),wt.forEach(w),z.forEach(w),this.h()},h(){S(n,"class","app-component svelte-mmz3q4"),U(n,"width",`${r[9].codeScreen.widthInMm}mm`),U(n,"height",`${r[9].codeScreen.heightInMm}mm`),S(l,"border","1"),S(s,"class","executedCommands svelte-mmz3q4"),S(t,"class","left svelte-mmz3q4"),S(u,"border","1"),S(b,"class","app-values svelte-mmz3q4"),S(D,"class","app-code svelte-mmz3q4"),S(ae,"border","1"),S(N,"class","page-values svelte-mmz3q4"),S(H,"class","page-code svelte-mmz3q4"),S(e,"class","debug-modal svelte-mmz3q4")},m(B,z){R(B,e,z),p(e,t),p(t,n),J(o,n,null),p(n,i),L&&L.m(n,null),p(t,a),p(t,s),p(s,l),p(l,c),p(l,h),p(l,v);for(let re=0;re<g.length;re+=1)g[re]&&g[re].m(v,null);p(e,k),p(e,b),p(b,u),p(u,m),p(u,I),p(u,V),be.m(V,null),p(e,Y),p(e,D),J(x,D,null),p(e,se),p(e,N),p(N,ae),p(ae,F),p(ae,A),p(ae,C),ee.m(C,null),p(e,P),p(e,H),J(oe,H,null),_e=!0},p(B,z){const re={};z&64&&(re.frameworkApp=B[6]),o.$set(re),B[4]?L||(L=Vt(),L.c(),L.m(n,null)):L&&(L.d(1),L=null),z&512&&U(n,"width",`${B[9].codeScreen.widthInMm}mm`),z&512&&U(n,"height",`${B[9].codeScreen.heightInMm}mm`),z&50&&(Me=ke(B[1]),g=at(g,z,Q,1,B,Me,y,v,hn,Nt,null,xt)),fe===(fe=le(B))&&be?be.p(B,z):(be.d(1),be=fe(B),be&&(be.c(),be.m(V,null)));const Ee={};z&8&&(Ee.code=B[3].code),x.$set(Ee),ne===(ne=ie(B))&&ee?ee.p(B,z):(ee.d(1),ee=ne(B),ee&&(ee.c(),ee.m(C,null)));const je={};z&4&&(je.code=B[2].code),oe.$set(je)},i(B){_e||(E(o.$$.fragment,B),E(x.$$.fragment,B),E(oe.$$.fragment,B),_e=!0)},o(B){O(o.$$.fragment,B),O(x.$$.fragment,B),O(oe.$$.fragment,B),_e=!1},d(B){B&&w(e),K(o),L&&L.d();for(let z=0;z<g.length;z+=1)g[z].d();be.d(),K(x),ee.d(),K(oe)}}}function va(r){let e,t,n;function o(a){r[12](a)}let i={$$slots:{default:[ba]},$$scope:{ctx:r}};return r[0]!==void 0&&(i.showModal=r[0]),e=new Re({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){X(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,[s]){const l={};s&33555454&&(l.$$scope={dirty:s,ctx:a}),!t&&s&1&&(t=!0,l.showModal=a[0],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function wa(r,e,t){let n,o,i,a,s,l,c;G(r,Se,f=>t(11,s=f)),G(r,Ce,f=>t(3,l=f)),G(r,Ae,f=>t(9,c=f));let{showModal:d}=e,{pageId:h}=e,v=[],g=null,y=!1;const k={isPreview:!1,onError(f){t(5,y=!0)},okToContinue(f,I){if(v.unshift(f),t(1,v),!I)return new Promise(V=>{t(4,g=()=>{V(),t(4,g=null)})})}};function b(){let f={};return o!=null&&o.app&&(f=JSON.parse(JSON.stringify(o.app))),Object.entries(f)}function u(){var I;let f={};return(I=o==null?void 0:o.frameworkPage)!=null&&I.page&&(f=JSON.parse(JSON.stringify(o.frameworkPage.page))),Object.entries(f)}function m(f){d=f,t(0,d)}return r.$$set=f=>{"showModal"in f&&t(0,d=f.showModal),"pageId"in f&&t(10,h=f.pageId)},r.$$.update=()=>{r.$$.dirty&3072&&t(2,n=s.find(f=>f.id==h)),r.$$.dirty&2060&&t(6,o=sa(l,s,n,k)),r.$$.dirty&2&&t(8,i=(v.length,b())),r.$$.dirty&2&&t(7,a=(v.length,u()))},[d,v,n,l,g,y,o,a,i,c,h,s,m]}class _a extends ve{constructor(e){super(),we(this,e,wa,va,ue,{showModal:0,pageId:10})}}function Ut(r){let e,t;return e=new it({props:{createAppCode:De(r[11],r[2],r[9]),runtimeSettings:r[12]}}),{c(){X(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,o){J(e,n,o),t=!0},p(n,o){const i={};o&2564&&(i.createAppCode=De(n[11],n[2],n[9])),e.$set(i)},i(n){t||(E(e.$$.fragment,n),t=!0)},o(n){O(e.$$.fragment,n),t=!1},d(n){K(e,n)}}}function Ta(r){let e,t,n,o=r[6],i,a,s,l="Restart",c,d,h,v="Menu",g,y,k,b,u="Debug",m,f,I,V="Edit app",Y,D,x,se="Edit state",N,ae,F,Z="Delete page",A,C,P,H,oe,_e,L=Ut(r),Me={code:r[9].code};return P=new Ge({props:Me}),r[18](P),{c(){e=_("div"),t=_("div"),n=_("div"),L.c(),i=j(),a=_("div"),s=_("button"),s.textContent=l,c=j(),d=_("div"),h=_("div"),h.textContent=v,g=j(),y=_("ul"),k=_("li"),b=_("button"),b.textContent=u,m=j(),f=_("li"),I=_("button"),I.textContent=V,Y=j(),D=_("li"),x=_("button"),x.textContent=se,N=j(),ae=_("li"),F=_("button"),F.textContent=Z,A=j(),C=_("div"),X(P.$$.fragment),this.h()},l(Q){e=T(Q,"DIV",{class:!0});var le=M(e);t=T(le,"DIV",{class:!0});var fe=M(t);n=T(fe,"DIV",{class:!0});var be=M(n);L.l(be),be.forEach(w),i=$(fe),a=T(fe,"DIV",{class:!0});var ie=M(a);s=T(ie,"BUTTON",{"data-svelte-h":!0}),te(s)!=="svelte-5snrhj"&&(s.textContent=l),ie.forEach(w),fe.forEach(w),c=$(le),d=T(le,"DIV",{class:!0});var ne=M(d);h=T(ne,"DIV",{class:!0,"data-svelte-h":!0}),te(h)!=="svelte-s1h7ma"&&(h.textContent=v),g=$(ne),y=T(ne,"UL",{});var ee=M(y);k=T(ee,"LI",{});var B=M(k);b=T(B,"BUTTON",{"data-svelte-h":!0}),te(b)!=="svelte-11e43oq"&&(b.textContent=u),B.forEach(w),m=$(ee),f=T(ee,"LI",{});var z=M(f);I=T(z,"BUTTON",{"data-svelte-h":!0}),te(I)!=="svelte-1gt89o6"&&(I.textContent=V),z.forEach(w),Y=$(ee),D=T(ee,"LI",{});var re=M(D);x=T(re,"BUTTON",{"data-svelte-h":!0}),te(x)!=="svelte-1w64rju"&&(x.textContent=se),re.forEach(w),N=$(ee),ae=T(ee,"LI",{});var Ee=M(ae);F=T(Ee,"BUTTON",{"data-svelte-h":!0}),te(F)!=="svelte-1w5lntz"&&(F.textContent=Z),Ee.forEach(w),ee.forEach(w),ne.forEach(w),A=$(le),C=T(le,"DIV",{class:!0});var je=M(C);W(P.$$.fragment,je),je.forEach(w),le.forEach(w),this.h()},h(){S(n,"class","app-component"),U(n,"width",`${r[10].codeScreen.widthInMm}mm`),U(n,"height",`${r[10].codeScreen.heightInMm}mm`),S(a,"class","preview-buttons"),S(t,"class","preview-child"),S(h,"class","title"),S(d,"class","menu-child"),S(C,"class","code-editor-child"),S(e,"class","edit-page-modal svelte-bcwdb6")},m(Q,le){R(Q,e,le),p(e,t),p(t,n),L.m(n,null),p(t,i),p(t,a),p(a,s),p(e,c),p(e,d),p(d,h),p(d,g),p(d,y),p(y,k),p(k,b),p(y,m),p(y,f),p(f,I),p(y,Y),p(y,D),p(D,x),p(y,N),p(y,ae),p(ae,F),p(e,A),p(e,C),J(P,C,null),H=!0,oe||(_e=[q(s,"click",r[13]),q(b,"click",r[15]),q(I,"click",r[16]),q(x,"click",r[17]),q(F,"click",r[14])],oe=!0)},p(Q,le){le&64&&ue(o,o=Q[6])?(ye(),O(L,1,1,Te),Ie(),L=Ut(Q),L.c(),E(L,1),L.m(n,null)):L.p(Q,le),le&1024&&U(n,"width",`${Q[10].codeScreen.widthInMm}mm`),le&1024&&U(n,"height",`${Q[10].codeScreen.heightInMm}mm`);const fe={};le&512&&(fe.code=Q[9].code),P.$set(fe)},i(Q){H||(E(L),E(P.$$.fragment,Q),H=!0)},o(Q){O(L),O(P.$$.fragment,Q),H=!1},d(Q){Q&&w(e),L.d(Q),r[18](null),K(P),oe=!1,Ne(_e)}}}function Lt(r){let e,t,n;function o(a){r[20](a)}let i={};return r[3]!==void 0&&(i.showModal=r[3]),e=new ut({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){X(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,s){const l={};!t&&s&8&&(t=!0,l.showModal=a[3],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function Ft(r){let e,t,n;function o(a){r[21](a)}let i={pageId:r[1]};return r[4]!==void 0&&(i.showModal=r[4]),e=new _a({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){X(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,s){const l={};s&2&&(l.pageId=a[1]),!t&&s&16&&(t=!0,l.showModal=a[4],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function Yt(r){let e,t,n;function o(a){r[22](a)}let i={initialState:r[7]};return r[5]!==void 0&&(i.showModal=r[5]),e=new ia({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){X(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,s){const l={};s&128&&(l.initialState=a[7]),!t&&s&32&&(t=!0,l.showModal=a[5],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function ya(r){let e,t,n,o,i,a,s;function l(g){r[19](g)}let c={$$slots:{default:[Ta]},$$scope:{ctx:r}};r[0]!==void 0&&(c.showModal=r[0]),e=new Re({props:c}),ce.push(()=>ge(e,"showModal",l));let d=r[3]&&Lt(r),h=r[4]&&Ft(r),v=r[5]&&Yt(r);return{c(){X(e.$$.fragment),n=j(),d&&d.c(),o=j(),h&&h.c(),i=j(),v&&v.c(),a=me()},l(g){W(e.$$.fragment,g),n=$(g),d&&d.l(g),o=$(g),h&&h.l(g),i=$(g),v&&v.l(g),a=me()},m(g,y){J(e,g,y),R(g,n,y),d&&d.m(g,y),R(g,o,y),h&&h.m(g,y),R(g,i,y),v&&v.m(g,y),R(g,a,y),s=!0},p(g,[y]){const k={};y&8392572&&(k.$$scope={dirty:y,ctx:g}),!t&&y&1&&(t=!0,k.showModal=g[0],pe(()=>t=!1)),e.$set(k),g[3]?d?(d.p(g,y),y&8&&E(d,1)):(d=Lt(g),d.c(),E(d,1),d.m(o.parentNode,o)):d&&(ye(),O(d,1,1,()=>{d=null}),Ie()),g[4]?h?(h.p(g,y),y&16&&E(h,1)):(h=Ft(g),h.c(),E(h,1),h.m(i.parentNode,i)):h&&(ye(),O(h,1,1,()=>{h=null}),Ie()),g[5]?v?(v.p(g,y),y&32&&E(v,1)):(v=Yt(g),v.c(),E(v,1),v.m(a.parentNode,a)):v&&(ye(),O(v,1,1,()=>{v=null}),Ie())},i(g){s||(E(e.$$.fragment,g),E(d),E(h),E(v),s=!0)},o(g){O(e.$$.fragment,g),O(d),O(h),O(v),s=!1},d(g){g&&(w(n),w(o),w(i),w(a)),K(e,g),d&&d.d(g),h&&h.d(g),v&&v.d(g)}}}function Ia(r,e,t){let n,o,i,a;G(r,Se,N=>t(2,o=N)),G(r,Ae,N=>t(10,i=N)),G(r,Ce,N=>t(11,a=N));let{showModal:s}=e,{pageId:l}=e,c=!1,d=!1,h=!1,v=Math.random(),g=null;const y={onStateChange(N){t(7,g=N)}};let k;function b(){const N=k.getCode();t(9,n.code=N,n),Se.set(o),t(6,v=Math.random())}function u(){if(!confirm("Really delete?"))return;const N=o.findIndex(ae=>ae.id==l);o.splice(N,1),Se.set(o),t(0,s=!1)}dt(()=>{b()});const m=()=>(b(),t(4,d=!0)),f=()=>(b(),t(3,c=!0)),I=()=>(b(),t(5,h=!0));function V(N){ce[N?"unshift":"push"](()=>{k=N,t(8,k)})}function Y(N){s=N,t(0,s)}function D(N){c=N,t(3,c)}function x(N){d=N,t(4,d)}function se(N){h=N,t(5,h)}return r.$$set=N=>{"showModal"in N&&t(0,s=N.showModal),"pageId"in N&&t(1,l=N.pageId)},r.$$.update=()=>{r.$$.dirty&6&&t(9,n=o.find(N=>N.id==l))},[s,l,o,c,d,h,v,g,k,n,i,a,y,b,u,m,f,I,V,Y,D,x,se]}class Ma extends ve{constructor(e){super(),we(this,e,Ia,ya,ue,{showModal:0,pageId:1})}}function ka(r){let e,t,n,o,i,a,s,l="Refresh",c,d,h,v,g,y="Edit app",k,b,u,m="Delete this page template",f,I,V;o=new it({props:{createAppCode:De(r[5],r[6],{code:r[1].code})}});let Y={code:r[1].code};return h=new Ge({props:Y}),r[11](h),{c(){e=_("div"),t=_("div"),n=_("div"),X(o.$$.fragment),i=j(),a=_("div"),s=_("button"),s.textContent=l,c=j(),d=_("div"),X(h.$$.fragment),v=j(),g=_("button"),g.textContent=y,k=j(),b=_("div"),u=_("button"),u.textContent=m,this.h()},l(D){e=T(D,"DIV",{class:!0});var x=M(e);t=T(x,"DIV",{class:!0});var se=M(t);n=T(se,"DIV",{class:!0});var N=M(n);W(o.$$.fragment,N),N.forEach(w),i=$(se),a=T(se,"DIV",{class:!0});var ae=M(a);s=T(ae,"BUTTON",{"data-svelte-h":!0}),te(s)!=="svelte-in3han"&&(s.textContent=l),ae.forEach(w),se.forEach(w),c=$(x),d=T(x,"DIV",{class:!0});var F=M(d);W(h.$$.fragment,F),F.forEach(w),v=$(x),g=T(x,"BUTTON",{class:!0,"data-svelte-h":!0}),te(g)!=="svelte-1fpswk9"&&(g.textContent=y),k=$(x),b=T(x,"DIV",{class:!0});var Z=M(b);u=T(Z,"BUTTON",{"data-svelte-h":!0}),te(u)!=="svelte-19vawev"&&(u.textContent=m),Z.forEach(w),x.forEach(w),this.h()},h(){S(n,"class","app-component svelte-b3fta8"),U(n,"width",`${r[4].codeScreen.widthInMm}mm`),U(n,"height",`${r[4].codeScreen.heightInMm}mm`),S(a,"class","preview-buttons svelte-b3fta8"),S(t,"class","preview-section svelte-b3fta8"),S(d,"class","code-editor svelte-b3fta8"),S(g,"class","edit-app-button svelte-b3fta8"),S(b,"class","buttons-row svelte-b3fta8"),S(e,"class","edit-page-template-modal svelte-b3fta8")},m(D,x){R(D,e,x),p(e,t),p(t,n),J(o,n,null),p(t,i),p(t,a),p(a,s),p(e,c),p(e,d),J(h,d,null),p(e,v),p(e,g),p(e,k),p(e,b),p(b,u),f=!0,I||(V=[q(s,"click",r[7]),q(g,"click",r[12]),q(u,"click",r[8])],I=!0)},p(D,x){const se={};x&98&&(se.createAppCode=De(D[5],D[6],{code:D[1].code})),o.$set(se),x&16&&U(n,"width",`${D[4].codeScreen.widthInMm}mm`),x&16&&U(n,"height",`${D[4].codeScreen.heightInMm}mm`);const N={};x&2&&(N.code=D[1].code),h.$set(N)},i(D){f||(E(o.$$.fragment,D),E(h.$$.fragment,D),f=!0)},o(D){O(o.$$.fragment,D),O(h.$$.fragment,D),f=!1},d(D){D&&w(e),K(o),r[11](null),K(h),I=!1,Ne(V)}}}function zt(r){let e,t,n;function o(a){r[14](a)}let i={};return r[2]!==void 0&&(i.showModal=r[2]),e=new ut({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){X(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,s){const l={};!t&&s&4&&(t=!0,l.showModal=a[2],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function Sa(r){let e,t,n,o,i;function a(c){r[13](c)}let s={$$slots:{default:[ka]},$$scope:{ctx:r}};r[0]!==void 0&&(s.showModal=r[0]),e=new Re({props:s}),ce.push(()=>ge(e,"showModal",a));let l=r[2]&&zt(r);return{c(){X(e.$$.fragment),n=j(),l&&l.c(),o=me()},l(c){W(e.$$.fragment,c),n=$(c),l&&l.l(c),o=me()},m(c,d){J(e,c,d),R(c,n,d),l&&l.m(c,d),R(c,o,d),i=!0},p(c,[d]){const h={};d&32894&&(h.$$scope={dirty:d,ctx:c}),!t&&d&1&&(t=!0,h.showModal=c[0],pe(()=>t=!1)),e.$set(h),c[2]?l?(l.p(c,d),d&4&&E(l,1)):(l=zt(c),l.c(),E(l,1),l.m(o.parentNode,o)):l&&(ye(),O(l,1,1,()=>{l=null}),Ie())},i(c){i||(E(e.$$.fragment,c),E(l),i=!0)},o(c){O(e.$$.fragment,c),O(l),i=!1},d(c){c&&(w(n),w(o)),K(e,c),l&&l.d(c)}}}function Ca(r,e,t){let n,o,i,a;G(r,Le,m=>t(10,n=m)),G(r,Ae,m=>t(4,o=m)),G(r,Ce,m=>t(5,i=m)),G(r,Se,m=>t(6,a=m));let{showModal:s}=e,{pageTemplateId:l}=e,c,d=!1,h;function v(){const m=h.getCode();t(1,c.code=m,c),Le.set(n)}function g(){if(!confirm("Really delete?"))return;const m=n.findIndex(f=>f.id==l);n.splice(m,1),t(0,s=!1)}dt(v);function y(m){ce[m?"unshift":"push"](()=>{h=m,t(3,h)})}const k=()=>(v(),t(2,d=!0));function b(m){s=m,t(0,s)}function u(m){d=m,t(2,d)}return r.$$set=m=>{"showModal"in m&&t(0,s=m.showModal),"pageTemplateId"in m&&t(9,l=m.pageTemplateId)},r.$$.update=()=>{r.$$.dirty&1536&&t(1,c=n.find(m=>m.id==l))},[s,c,d,h,o,i,a,v,g,l,n,y,k,b,u]}class Ea extends ve{constructor(e){super(),we(this,e,Ca,Sa,ue,{showModal:0,pageTemplateId:9})}}function Ht(r,e,t){const n=r.slice();return n[16]=e[t],n}function Gt(r,e){let t,n,o,i,a,s,l,c="Edit",d,h,v,g;o=new it({props:{createAppCode:De(e[6],e[4],{code:e[16].code},!0)}});function y(){return e[12](e[16])}function k(){return e[13](e[16])}return{key:r,first:null,c(){t=_("div"),n=_("div"),X(o.$$.fragment),i=j(),a=_("div"),s=j(),l=_("button"),l.textContent=c,d=j(),this.h()},l(b){t=T(b,"DIV",{class:!0});var u=M(t);n=T(u,"DIV",{class:!0});var m=M(n);W(o.$$.fragment,m),i=$(m),a=T(m,"DIV",{class:!0}),M(a).forEach(w),m.forEach(w),s=$(u),l=T(u,"BUTTON",{class:!0,"data-svelte-h":!0}),te(l)!=="svelte-eodtwe"&&(l.textContent=c),d=$(u),u.forEach(w),this.h()},h(){S(a,"class","overlay svelte-1dwdo8c"),S(n,"class","page-template svelte-1dwdo8c"),U(n,"width",`${e[5].folderScreen.widthInMm}mm`),U(n,"height",`${e[5].folderScreen.heightInMm}mm`),S(l,"class","edit-page-button svelte-1dwdo8c"),S(t,"class","page-template-box svelte-1dwdo8c"),this.first=t},m(b,u){R(b,t,u),p(t,n),J(o,n,null),p(n,i),p(n,a),p(t,s),p(t,l),p(t,d),h=!0,v||(g=[q(n,"click",ze(y)),q(l,"click",ze(k))],v=!0)},p(b,u){e=b;const m={};u&88&&(m.createAppCode=De(e[6],e[4],{code:e[16].code},!0)),o.$set(m),u&32&&U(n,"width",`${e[5].folderScreen.widthInMm}mm`),u&32&&U(n,"height",`${e[5].folderScreen.heightInMm}mm`)},i(b){h||(E(o.$$.fragment,b),h=!0)},o(b){O(o.$$.fragment,b),h=!1},d(b){b&&w(t),K(o),v=!1,Ne(g)}}}function Aa(r){let e,t,n="Create Page (choose template)",o,i,a=[],s=new Map,l,c,d="Create new page template",h,v,g,y=ke(r[3]);const k=b=>b[16].id;for(let b=0;b<y.length;b+=1){let u=Ht(r,y,b),m=k(u);s.set(m,a[b]=Gt(m,u))}return{c(){e=_("div"),t=_("h1"),t.textContent=n,o=j(),i=_("div");for(let b=0;b<a.length;b+=1)a[b].c();l=j(),c=_("button"),c.textContent=d,this.h()},l(b){e=T(b,"DIV",{class:!0});var u=M(e);t=T(u,"H1",{class:!0,"data-svelte-h":!0}),te(t)!=="svelte-1fbxl57"&&(t.textContent=n),o=$(u),i=T(u,"DIV",{class:!0});var m=M(i);for(let f=0;f<a.length;f+=1)a[f].l(m);m.forEach(w),l=$(u),c=T(u,"BUTTON",{class:!0,"data-svelte-h":!0}),te(c)!=="svelte-wmwgso"&&(c.textContent=d),u.forEach(w),this.h()},h(){S(t,"class","svelte-1dwdo8c"),S(i,"class","page-template-boxes svelte-1dwdo8c"),S(c,"class","new-page-template-button svelte-1dwdo8c"),S(e,"class","create-page-modal svelte-1dwdo8c")},m(b,u){R(b,e,u),p(e,t),p(e,o),p(e,i);for(let m=0;m<a.length;m+=1)a[m]&&a[m].m(i,null);p(e,l),p(e,c),h=!0,v||(g=q(c,"click",r[8]),v=!0)},p(b,u){u&254&&(y=ke(b[3]),ye(),a=at(a,u,k,1,b,y,s,i,dn,Gt,null,Ht),Ie())},i(b){if(!h){for(let u=0;u<y.length;u+=1)E(a[u]);h=!0}},o(b){for(let u=0;u<a.length;u+=1)O(a[u]);h=!1},d(b){b&&w(e);for(let u=0;u<a.length;u+=1)a[u].d();v=!1,g()}}}function qt(r){let e,t,n;function o(a){r[15](a)}let i={pageTemplateId:r[2]};return r[1]!==void 0&&(i.showModal=r[1]),e=new Ea({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){X(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,s){const l={};s&4&&(l.pageTemplateId=a[2]),!t&&s&2&&(t=!0,l.showModal=a[1],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function ja(r){let e,t,n,o,i;function a(c){r[14](c)}let s={$$slots:{default:[Aa]},$$scope:{ctx:r}};r[0]!==void 0&&(s.showModal=r[0]),e=new Re({props:s}),ce.push(()=>ge(e,"showModal",a));let l=r[1]&&qt(r);return{c(){X(e.$$.fragment),n=j(),l&&l.c(),o=me()},l(c){W(e.$$.fragment,c),n=$(c),l&&l.l(c),o=me()},m(c,d){J(e,c,d),R(c,n,d),l&&l.m(c,d),R(c,o,d),i=!0},p(c,[d]){const h={};d&524414&&(h.$$scope={dirty:d,ctx:c}),!t&&d&1&&(t=!0,h.showModal=c[0],pe(()=>t=!1)),e.$set(h),c[1]?l?(l.p(c,d),d&2&&E(l,1)):(l=qt(c),l.c(),E(l,1),l.m(o.parentNode,o)):l&&(ye(),O(l,1,1,()=>{l=null}),Ie())},i(c){i||(E(e.$$.fragment,c),E(l),i=!0)},o(c){O(e.$$.fragment,c),O(l),i=!1},d(c){c&&(w(n),w(o)),K(e,c),l&&l.d(c)}}}function $a(r,e,t){let n,o,i,a;G(r,Le,f=>t(3,n=f)),G(r,Se,f=>t(4,o=f)),G(r,Ae,f=>t(5,i=f)),G(r,Ce,f=>t(6,a=f));let{showModal:s}=e,{folderId:l}=e,{createAtX:c}=e,{createAtY:d}=e,h=!1,v=-1;function g(f){var x;const I=c,V=d,Y=prompt("Enter page name:");if(!Y)return;const D=f.code.replace(/class \w+ extends/,`class ${Y} extends`);o.push({id:(((x=o.at(-1))==null?void 0:x.id)??0)+1,folderId:l,code:D,x:I,y:V}),Se.set(o),t(0,s=!1)}function y(){var I;const f=(((I=n.at(-1))==null?void 0:I.id)??0)+1;n.push({id:f,title:"New Template",code:`
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
			`.trim()}),t(1,h=!0),t(2,v=f)}const k=f=>g(f),b=f=>{t(2,v=f.id),t(1,h=!0)};function u(f){s=f,t(0,s)}function m(f){h=f,t(1,h)}return r.$$set=f=>{"showModal"in f&&t(0,s=f.showModal),"folderId"in f&&t(9,l=f.folderId),"createAtX"in f&&t(10,c=f.createAtX),"createAtY"in f&&t(11,d=f.createAtY)},[s,h,v,n,o,i,a,g,y,l,c,d,k,b,u,m]}class Oa extends ve{constructor(e){super(),we(this,e,$a,ja,ue,{showModal:0,folderId:9,createAtX:10,createAtY:11})}}const Xt=new Map,Pa={isPreview:!0};function Da(r,e,t){const n=De(r,e,t,!0),o=Xt.get(n);if(o)return o;const i=new un(n,Pa);return i.start(),Xt[n]=i,i}function Wt(r,e,t){const n=r.slice();return n[27]=e[t].page,n[28]=e[t].frameworkApp,n}function Jt(r,e,t){const n=r.slice();return n[31]=e[t],n}function Kt(r){let e,t=r[31].text+"",n;return{c(){e=_("div"),n=he(t),this.h()},l(o){e=T(o,"DIV",{class:!0});var i=M(e);n=de(i,t),i.forEach(w),this.h()},h(){S(e,"class","line svelte-feyijm"),Ze(e,"isBack",r[31].isBack),U(e,"width",`${r[31].length}px`),U(e,"transform",`translate(${r[31].centerX}px, ${r[31].centerY}px) translate(-50%, -50%) rotate(${r[31].angle}deg)`)},m(o,i){R(o,e,i),p(e,n)},p(o,i){i[0]&256&&t!==(t=o[31].text+"")&&Oe(n,t),i[0]&256&&Ze(e,"isBack",o[31].isBack),i[0]&256&&U(e,"width",`${o[31].length}px`),i[0]&256&&U(e,"transform",`translate(${o[31].centerX}px, ${o[31].centerY}px) translate(-50%, -50%) rotate(${o[31].angle}deg)`)},d(o){o&&w(e)}}}function Qt(r,e){let t,n,o=Ve(e[27].code)+"",i,a,s,l,c,d,h,v,g,y,k;function b(){return e[19](e[27])}c=new _n({props:{frameworkApp:e[28]}});function u(){return e[20](e[27])}function m(...f){return e[21](e[27],...f)}return{key:r,first:null,c(){t=_("div"),n=_("div"),i=he(o),a=j(),s=_("div"),l=_("div"),X(c.$$.fragment),d=j(),h=_("div"),v=j(),this.h()},l(f){t=T(f,"DIV",{class:!0,draggable:!0});var I=M(t);n=T(I,"DIV",{class:!0});var V=M(n);i=de(V,o),V.forEach(w),a=$(I),s=T(I,"DIV",{class:!0});var Y=M(s);l=T(Y,"DIV",{class:!0});var D=M(l);W(c.$$.fragment,D),D.forEach(w),d=$(Y),h=T(Y,"DIV",{class:!0}),M(h).forEach(w),Y.forEach(w),v=$(I),I.forEach(w),this.h()},h(){S(n,"class","name svelte-feyijm"),S(l,"class","disabled-page svelte-feyijm"),S(h,"class","overlay svelte-feyijm"),S(s,"class","page svelte-feyijm"),S(t,"class","page-container svelte-feyijm"),S(t,"draggable","true"),U(t,"width",`${e[9].folderScreen.widthInMm}mm`),U(t,"height",`${e[9].folderScreen.heightInMm}mm`),U(t,"transform",`translate(${e[27].x}px, ${e[27].y}px) translate(-50%, -50%)`),this.first=t},m(f,I){R(f,t,I),p(t,n),p(n,i),p(t,a),p(t,s),p(s,l),J(c,l,null),p(s,d),p(s,h),p(t,v),g=!0,y||(k=[q(n,"click",ze(b)),q(s,"click",ze(u)),q(t,"dragstart",m)],y=!0)},p(f,I){e=f,(!g||I[0]&2)&&o!==(o=Ve(e[27].code)+"")&&Oe(i,o);const V={};I[0]&2&&(V.frameworkApp=e[28]),c.$set(V),I[0]&512&&U(t,"width",`${e[9].folderScreen.widthInMm}mm`),I[0]&512&&U(t,"height",`${e[9].folderScreen.heightInMm}mm`),I[0]&2&&U(t,"transform",`translate(${e[27].x}px, ${e[27].y}px) translate(-50%, -50%)`)},i(f){g||(E(c.$$.fragment,f),g=!0)},o(f){O(c.$$.fragment,f),g=!1},d(f){f&&w(t),K(c),y=!1,Ne(k)}}}function Zt(r){let e,t,n;function o(a){r[22](a)}let i={pageId:r[4]};return r[3]!==void 0&&(i.showModal=r[3]),e=new Ma({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){X(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,s){const l={};s[0]&16&&(l.pageId=a[4]),!t&&s[0]&8&&(t=!0,l.showModal=a[3],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function en(r){let e,t,n;function o(a){r[23](a)}let i={folderId:r[0],createAtX:r[5]-r[7].offsetX,createAtY:r[6]-r[7].offsetY};return r[2]!==void 0&&(i.showModal=r[2]),e=new Oa({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){X(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,s){const l={};s[0]&1&&(l.folderId=a[0]),s[0]&160&&(l.createAtX=a[5]-a[7].offsetX),s[0]&192&&(l.createAtY=a[6]-a[7].offsetY),!t&&s[0]&4&&(t=!0,l.showModal=a[2],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function xa(r){let e,t,n,o=[],i=new Map,a,s,l,c,d,h,v=ke(r[8]),g=[];for(let m=0;m<v.length;m+=1)g[m]=Kt(Jt(r,v,m));let y=ke(r[1]);const k=m=>m[27].id;for(let m=0;m<y.length;m+=1){let f=Wt(r,y,m),I=k(f);i.set(I,o[m]=Qt(I,f))}let b=r[3]&&Zt(r),u=r[2]&&en(r);return{c(){e=_("div"),t=_("div");for(let m=0;m<g.length;m+=1)g[m].c();n=j();for(let m=0;m<o.length;m+=1)o[m].c();a=j(),b&&b.c(),s=j(),u&&u.c(),l=me(),this.h()},l(m){e=T(m,"DIV",{class:!0,draggable:!0});var f=M(e);t=T(f,"DIV",{class:!0});var I=M(t);for(let V=0;V<g.length;V+=1)g[V].l(I);n=$(I);for(let V=0;V<o.length;V+=1)o[V].l(I);I.forEach(w),f.forEach(w),a=$(m),b&&b.l(m),s=$(m),u&&u.l(m),l=me(),this.h()},h(){S(t,"class","pages svelte-feyijm"),U(t,"transform",`translate(${r[7].offsetX}px, ${r[7].offsetY}px)`),S(e,"class","folder svelte-feyijm"),S(e,"draggable","true"),U(e,"background-position-x",`${r[7].offsetX}px`),U(e,"background-position-y",`${r[7].offsetY}px`)},m(m,f){R(m,e,f),p(e,t);for(let I=0;I<g.length;I+=1)g[I]&&g[I].m(t,null);p(t,n);for(let I=0;I<o.length;I+=1)o[I]&&o[I].m(t,null);R(m,a,f),b&&b.m(m,f),R(m,s,f),u&&u.m(m,f),R(m,l,f),c=!0,d||(h=[q(e,"click",r[14]),q(e,"dragstart",r[10]),q(e,"dragover",_t(r[11])),q(e,"drop",_t(r[13]))],d=!0)},p(m,f){if(f[0]&256){v=ke(m[8]);let I;for(I=0;I<v.length;I+=1){const V=Jt(m,v,I);g[I]?g[I].p(V,f):(g[I]=Kt(V),g[I].c(),g[I].m(t,n))}for(;I<g.length;I+=1)g[I].d(1);g.length=v.length}f[0]&4634&&(y=ke(m[1]),ye(),o=at(o,f,k,1,m,y,i,t,dn,Qt,null,Wt),Ie()),f[0]&128&&U(t,"transform",`translate(${m[7].offsetX}px, ${m[7].offsetY}px)`),f[0]&128&&U(e,"background-position-x",`${m[7].offsetX}px`),f[0]&128&&U(e,"background-position-y",`${m[7].offsetY}px`),m[3]?b?(b.p(m,f),f[0]&8&&E(b,1)):(b=Zt(m),b.c(),E(b,1),b.m(s.parentNode,s)):b&&(ye(),O(b,1,1,()=>{b=null}),Ie()),m[2]?u?(u.p(m,f),f[0]&4&&E(u,1)):(u=en(m),u.c(),E(u,1),u.m(l.parentNode,l)):u&&(ye(),O(u,1,1,()=>{u=null}),Ie())},i(m){if(!c){for(let f=0;f<y.length;f+=1)E(o[f]);E(b),E(u),c=!0}},o(m){for(let f=0;f<o.length;f+=1)O(o[f]);O(b),O(u),c=!1},d(m){m&&(w(e),w(a),w(s),w(l)),rt(g,m);for(let f=0;f<o.length;f+=1)o[f].d();b&&b.d(m),u&&u.d(m),d=!1,Ne(h)}}}const Va=50;function Na(r){navigator.clipboard.writeText(r)}function Ra(r,e,t){let n,o,i,a,s,l,c,d;G(r,Se,A=>t(16,s=A)),G(r,xe,A=>t(17,l=A)),G(r,Ce,A=>t(18,c=A)),G(r,Ae,A=>t(9,d=A));let{folderId:h}=e,v=!1,g=!1,y=-1,k=-1,b=-1,u=null;function m(A,C){return C.map(P=>{const H=Da(A,s,P);return{page:P,frameworkApp:H}})}function f(A){var P;const C=[];for(const H of A){const oe=(P=H.frameworkApp)==null?void 0:P.frameworkPage;if(!oe)continue;const _e=H.page.x,L=H.page.y,Me=[].concat(oe.beforeDirections,oe.afterDirections);for(const Q of Me){const le=A.find(fe=>Q.getPage().proxyName==Ve(fe.page.code));if(le){const fe=le.page.x,be=le.page.y,ie=fe-_e,ne=be-L,ee=Math.sqrt(ie**2+ne**2),B=_e+ie/2;if(0<=ie){const z=Math.atan2(ne,ie)*180/Math.PI,re=L+ne/2;C.push({length:ee,angle:z,centerX:B,centerY:re,text:Q.getDescription(),isBack:!1})}else{const z=Math.atan2(ne,ie)*180/Math.PI+180,re=L+ne/2+Va;C.push({length:ee,angle:z,centerX:B,centerY:re,text:Q.getDescription(),isBack:!0})}}}}return C}function I(A){u={action:"moveBackground",initialFolderOffsetX:n.offsetX,initialFolderOffsetY:n.offsetY,startMouseX:A.clientX,startMouseY:A.clientY};const C=document.createElement("img");C.style.display="none",A.dataTransfer.setDragImage(C,0,0)}function V(A){switch(u.action){case"moveBackground":const C=A.clientX-u.startMouseX,P=A.clientY-u.startMouseY;t(7,n.offsetX=u.initialFolderOffsetX+C,n),t(7,n.offsetY=u.initialFolderOffsetY+P,n),xe.set(l);break}}function Y(A,C){A.stopPropagation(),u={action:"movePage",pageId:C.id,startMouseX:A.clientX,startMouseY:A.clientY}}function D(A){switch(u.action){case"movePage":const C=A.clientX-u.startMouseX,P=A.clientY-u.startMouseY,H=s.find(oe=>oe.id==u.pageId);H.x+=C,H.y+=P,Se.set(s);break}}function x(A){t(4,y=-1),t(2,v=!0),t(5,k=A.clientX),t(6,b=A.clientY)}const se=A=>Na(Ve(A.code)),N=A=>{t(3,g=!0),t(4,y=A.id)},ae=(A,C)=>Y(C,A);function F(A){g=A,t(3,g)}function Z(A){v=A,t(2,v)}return r.$$set=A=>{"folderId"in A&&t(0,h=A.folderId)},r.$$.update=()=>{r.$$.dirty[0]&131073&&t(7,n=l.find(A=>A.id==h)??l[0]),r.$$.dirty[0]&65537&&t(15,o=s.filter(A=>A.folderId==h)),r.$$.dirty[0]&294912&&t(1,i=m(c,o)),r.$$.dirty[0]&2&&t(8,a=f(i))},[h,i,v,g,y,k,b,n,a,d,I,V,Y,D,x,o,s,l,c,se,N,ae,F,Z]}class Ba extends ve{constructor(e){super(),we(this,e,Ra,xa,ue,{folderId:0},null,[-1,-1])}}function tn(r,e,t){const n=r.slice();return n[14]=e[t],n}function nn(r,e){let t,n=e[14].name+"",o,i,a;function s(){return e[9](e[14])}return{key:r,first:null,c(){t=_("button"),o=he(n),this.h()},l(l){t=T(l,"BUTTON",{class:!0});var c=M(t);o=de(c,n),c.forEach(w),this.h()},h(){S(t,"class","svelte-1x7c20x"),Ze(t,"current",e[1]==e[14].id),this.first=t},m(l,c){R(l,t,c),p(t,o),i||(a=q(t,"click",s),i=!0)},p(l,c){e=l,c&4&&n!==(n=e[14].name+"")&&Oe(o,n),c&6&&Ze(t,"current",e[1]==e[14].id)},d(l){l&&w(t),i=!1,a()}}}function rn(r){let e,t,n;function o(a){r[11](a)}let i={options:r[0]};return r[3]!==void 0&&(i.showModal=r[3]),e=new Vn({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){X(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,s){const l={};s&1&&(l.options=a[0]),!t&&s&8&&(t=!0,l.showModal=a[3],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function an(r){let e,t,n;function o(a){r[12](a)}let i={};return r[4]!==void 0&&(i.showModal=r[4]),e=new ut({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){X(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,s){const l={};!t&&s&16&&(t=!0,l.showModal=a[4],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function on(r){let e,t,n;function o(a){r[13](a)}let i={folderId:r[1]};return r[5]!==void 0&&(i.showModal=r[5]),e=new Zr({props:i}),ce.push(()=>ge(e,"showModal",o)),{c(){X(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,s){J(e,a,s),n=!0},p(a,s){const l={};s&2&&(l.folderId=a[1]),!t&&s&32&&(t=!0,l.showModal=a[5],pe(()=>t=!1)),e.$set(l)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){O(e.$$.fragment,a),n=!1},d(a){K(e,a)}}}function Ua(r){let e,t,n,o,i,a,s=Ve(r[6].code)+"",l,c,d,h=[],v=new Map,g,y,k="+",b,u,m="☰",f,I,V,Y,D,x,se;n=new Ba({props:{folderId:r[1]}});let N=ke(r[2]);const ae=C=>C[14].id;for(let C=0;C<N.length;C+=1){let P=tn(r,N,C),H=ae(P);v.set(H,h[C]=nn(H,P))}let F=r[3]&&rn(r),Z=r[4]&&an(r),A=r[5]&&on(r);return{c(){e=_("div"),t=_("div"),X(n.$$.fragment),o=j(),i=_("div"),a=_("button"),l=he(s),c=j(),d=_("div");for(let C=0;C<h.length;C+=1)h[C].c();g=j(),y=_("button"),y.textContent=k,b=j(),u=_("button"),u.textContent=m,f=j(),F&&F.c(),I=j(),Z&&Z.c(),V=j(),A&&A.c(),Y=me(),this.h()},l(C){e=T(C,"DIV",{class:!0});var P=M(e);t=T(P,"DIV",{class:!0});var H=M(t);W(n.$$.fragment,H),H.forEach(w),o=$(P),i=T(P,"DIV",{class:!0});var oe=M(i);a=T(oe,"BUTTON",{class:!0});var _e=M(a);l=de(_e,s),_e.forEach(w),c=$(oe),d=T(oe,"DIV",{class:!0});var L=M(d);for(let Me=0;Me<h.length;Me+=1)h[Me].l(L);g=$(L),y=T(L,"BUTTON",{class:!0,"data-svelte-h":!0}),te(y)!=="svelte-1hnfxpo"&&(y.textContent=k),L.forEach(w),oe.forEach(w),b=$(P),u=T(P,"BUTTON",{class:!0,"data-svelte-h":!0}),te(u)!=="svelte-1x767tg"&&(u.textContent=m),P.forEach(w),f=$(C),F&&F.l(C),I=$(C),Z&&Z.l(C),V=$(C),A&&A.l(C),Y=me(),this.h()},h(){S(t,"class","folder svelte-1x7c20x"),S(a,"class","editAppButton svelte-1x7c20x"),S(y,"class","create-folder svelte-1x7c20x"),S(d,"class","folder-titles svelte-1x7c20x"),S(i,"class","header svelte-1x7c20x"),S(u,"class","main-menu-button svelte-1x7c20x"),S(e,"class","app svelte-1x7c20x")},m(C,P){R(C,e,P),p(e,t),J(n,t,null),p(e,o),p(e,i),p(i,a),p(a,l),p(i,c),p(i,d);for(let H=0;H<h.length;H+=1)h[H]&&h[H].m(d,null);p(d,g),p(d,y),p(e,b),p(e,u),R(C,f,P),F&&F.m(C,P),R(C,I,P),Z&&Z.m(C,P),R(C,V,P),A&&A.m(C,P),R(C,Y,P),D=!0,x||(se=[q(a,"click",r[8]),q(y,"click",r[7]),q(u,"click",r[10])],x=!0)},p(C,[P]){const H={};P&2&&(H.folderId=C[1]),n.$set(H),(!D||P&64)&&s!==(s=Ve(C[6].code)+"")&&Oe(l,s),P&38&&(N=ke(C[2]),h=at(h,P,ae,1,C,N,v,d,hn,nn,g,tn)),C[3]?F?(F.p(C,P),P&8&&E(F,1)):(F=rn(C),F.c(),E(F,1),F.m(I.parentNode,I)):F&&(ye(),O(F,1,1,()=>{F=null}),Ie()),C[4]?Z?(Z.p(C,P),P&16&&E(Z,1)):(Z=an(C),Z.c(),E(Z,1),Z.m(V.parentNode,V)):Z&&(ye(),O(Z,1,1,()=>{Z=null}),Ie()),C[5]?A?(A.p(C,P),P&32&&E(A,1)):(A=on(C),A.c(),E(A,1),A.m(Y.parentNode,Y)):A&&(ye(),O(A,1,1,()=>{A=null}),Ie())},i(C){D||(E(n.$$.fragment,C),E(F),E(Z),E(A),D=!0)},o(C){O(n.$$.fragment,C),O(F),O(Z),O(A),D=!1},d(C){C&&(w(e),w(f),w(I),w(V),w(Y)),K(n);for(let P=0;P<h.length;P+=1)h[P].d();F&&F.d(C),Z&&Z.d(C),A&&A.d(C),x=!1,Ne(se)}}}function La(r,e,t){let n,o;G(r,xe,u=>t(2,n=u)),G(r,Ce,u=>t(6,o=u));let{mainMenuOptions:i={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[]}}=e,a=n[0].id,s=!1,l=!1,c=!1;function d(){const u=n.at(-1).id+1;n.push({id:u,name:"New folder",offsetX:0,offsetY:0}),xe.set(n),t(1,a=u),t(5,c=!0)}const h=()=>t(4,l=!0),v=u=>{a==u.id?t(5,c=!0):t(1,a=u.id)},g=()=>t(3,s=!0);function y(u){s=u,t(3,s)}function k(u){l=u,t(4,l)}function b(u){c=u,t(5,c)}return r.$$set=u=>{"mainMenuOptions"in u&&t(0,i=u.mainMenuOptions)},r.$$.update=()=>{r.$$.dirty&6&&(n.find(u=>u.id==a)||t(1,a=n[0].id))},[i,a,n,s,l,c,o,d,h,v,g,y,k,b]}class Fa extends ve{constructor(e){super(),we(this,e,La,Ua,ue,{mainMenuOptions:0})}}const Fe={editorSettings:{codeScreen:{widthInMm:40*1.5,heightInMm:66*1.5},folderScreen:{widthInMm:40,heightInMm:66}},app:{code:`
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
				Button.text(\`No\`),
				Space,
				Button.text(\`Yes\`),
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
			Button.text(\`10\`),
			Button.text(\`15\`),
			Button.text(\`20\`),
			Button.text(\`25\`),
			Space,
		)
	}
	
}
		`.trim()}]};function sn(r){let e,t;return e=new Fa({props:{mainMenuOptions:r[0]}}),{c(){X(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,o){J(e,n,o),t=!0},p(n,o){const i={};o&1&&(i.mainMenuOptions=n[0]),e.$set(i)},i(n){t||(E(e.$$.fragment,n),t=!0)},o(n){O(e.$$.fragment,n),t=!1},d(n){K(e,n)}}}function Ya(r){let e,t,n=r[1]&&sn(r);return{c(){n&&n.c(),e=me()},l(o){n&&n.l(o),e=me()},m(o,i){n&&n.m(o,i),R(o,e,i),t=!0},p(o,[i]){o[1]?n?(n.p(o,i),i&2&&E(n,1)):(n=sn(o),n.c(),E(n,1),n.m(e.parentNode,e)):n&&(ye(),O(n,1,1,()=>{n=null}),Ie())},i(o){t||(E(n),t=!0)},o(o){O(n),t=!1},d(o){o&&w(e),n&&n.d(o)}}}function za(r,e,t){let n,o,i,a,s;G(r,Le,h=>t(3,n=h)),G(r,Se,h=>t(4,o=h)),G(r,xe,h=>t(5,i=h)),G(r,Ce,h=>t(6,a=h)),G(r,Ae,h=>t(7,s=h));let{mainMenuOptions:l={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[]}}=e,{bagaCode:c=""}=e,d=!1;return cn(()=>{let h,v,g,y,k;if(c!="")try{const b=fn(c);h=b.editorSettings,v=b.app,g=b.folders,y=b.pages,k=b.pageTemplates}catch(b){console.log(b),alert("The baga code given to the editor is invalid. The default project will be loaded instead.")}$e(Ae,s=h??Fe.editorSettings,s),$e(Ce,a=v??Fe.app,a),$e(xe,i=g??Fe.folders,i),$e(Se,o=y??Fe.pages,o),$e(Le,n=k??Fe.pageTemplates,n),t(1,d=!0)}),r.$$set=h=>{"mainMenuOptions"in h&&t(0,l=h.mainMenuOptions),"bagaCode"in h&&t(2,c=h.bagaCode)},[l,d,c]}class Ha extends ve{constructor(e){super(),we(this,e,za,Ya,ue,{mainMenuOptions:0,bagaCode:2})}}function ln(r){let e,t;return e=new Ha({props:{bagaCode:r[0],mainMenuOptions:r[3]}}),{c(){X(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,o){J(e,n,o),t=!0},p(n,o){const i={};o&1&&(i.bagaCode=n[0]),e.$set(i)},i(n){t||(E(e.$$.fragment,n),t=!0)},o(n){O(e.$$.fragment,n),t=!1},d(n){K(e,n)}}}function Ga(r){let e,t,n,o,i=r[1]&&ln(r);return{c(){e=_("meta"),t=j(),i&&i.c(),n=me(),this.h()},l(a){const s=kn("svelte-10aecs7",document.head);e=T(s,"META",{"http-equiv":!0,content:!0}),s.forEach(w),t=$(a),i&&i.l(a),n=me(),this.h()},h(){S(e,"http-equiv","Content-Security-Policy"),S(e,"content",r[2])},m(a,s){p(document.head,e),R(a,t,s),i&&i.m(a,s),R(a,n,s),o=!0},p(a,[s]){a[1]?i?(i.p(a,s),s&2&&E(i,1)):(i=ln(a),i.c(),E(i,1),i.m(n.parentNode,n)):i&&(ye(),O(i,1,1,()=>{i=null}),Ie())},i(a){o||(E(i),o=!0)},o(a){O(i),o=!1},d(a){a&&(w(t),w(n)),w(e),i&&i.d(a)}}}function qa(r,e,t){const n=["default-src 'none';","form-action 'none';","connect-src 'none';","img-src * data:;","script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net blob:;","style-src-attr 'self' 'unsafe-inline';","style-src-elem 'self' 'unsafe-inline' https://cdn.jsdelivr.net;","font-src https://cdn.jsdelivr.net;"].join(" "),o={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[{text:"Copy link to run app",onClick(s){const l=`https://bagawork.com/run#${s}`;navigator.clipboard.writeText(l)}}]};let i="",a=!1;return cn(()=>{t(0,i=location.hash.substring("#".length)),t(1,a=!0)}),[i,a,n,o]}class to extends ve{constructor(e){super(),we(this,e,qa,Ga,ue,{})}}export{to as component};
