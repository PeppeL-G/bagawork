import{z as cn,A as un,v as We,l as dn,s as ee,c as it,u as st,g as lt,b as ht,f as me,B as ve,d as Y,r as Ce,C as Te,n as U,j as mn,a as He,i as Qe,h as fn,D as ct,o as Zt}from"../chunks/scheduler.B0TnBjPs.js";import{z as ue,k as $,y as de,t as O,S as ne,i as re,e as y,a as k,d as j,h as v,o as S,j as R,C as F,F as Ye,G as _e,c as H,f as G,m as q,l as X,I as Se,s as V,q as ie,g as W,b as B,r as se,u as L,p as g,B as Ie,w as le,x as Ge,v as je,E as Ve,J as pn,H as gn,n as bn,K as dt,D as wn}from"../chunks/index.BXVnRmkj.js";import{e as oe,u as Ze,d as en,o as tn}from"../chunks/each.BaX_zf8z.js";import{a as pe,g as Be,F as vn}from"../chunks/get-create-app-code.D0qjuaK3.js";import{w as Re}from"../chunks/index.CBcONjAz.js";import{a as rt,g as nn}from"../chunks/project-compressor.Cxxezr6y.js";import{V as ut}from"../chunks/ViewApp.D5WliJPM.js";import"../chunks/index.Gu5gcrKE.js";function _n(n,e){const t=e.token={};function r(o,i,a,s){if(e.token!==t)return;e.resolved=s;let l=e.ctx;a!==void 0&&(l=l.slice(),l[a]=s);const h=o&&(e.current=o)(l);let d=!1;e.block&&(e.blocks?e.blocks.forEach((f,w)=>{w!==i&&f&&(ue(),$(f,1,1,()=>{e.blocks[w]===f&&(e.blocks[w]=null)}),de())}):e.block.d(1),h.c(),O(h,1),h.m(e.mount(),e.anchor),d=!0),e.block=h,e.blocks&&(e.blocks[i]=h),d&&dn()}if(cn(n)){const o=un();if(n.then(i=>{We(o),r(e.then,1,e.value,i),We(null)},i=>{if(We(o),r(e.catch,2,e.error,i),We(null),!e.hasCatch)throw i}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,n),!0;e.resolved=n}}function Tn(n,e,t){const r=e.slice(),{resolved:o}=n;n.current===n.then&&(r[n.value]=o),n.current===n.catch&&(r[n.error]=o),n.block.p(r,t)}function yn(n){let e,t,r,o;const i=n[3].default,a=it(i,n,n[2],null);return{c(){e=y("div"),a&&a.c(),this.h()},l(s){e=k(s,"DIV",{class:!0});var l=j(e);a&&a.l(l),l.forEach(v),this.h()},h(){S(e,"class","modal svelte-pjkfh")},m(s,l){R(s,e,l),a&&a.m(e,null),t=!0,r||(o=F(e,"click",Ye(n[0])),r=!0)},p(s,[l]){a&&a.p&&(!t||l&4)&&st(a,i,s,s[2],t?ht(i,s[2],l,null):lt(s[2]),null)},i(s){t||(O(a,s),t=!0)},o(s){$(a,s),t=!1},d(s){s&&v(e),a&&a.d(s),r=!1,o()}}}function kn(n,e,t){let{$$slots:r={},$$scope:o}=e,{showModal:i}=e;function a(s){s.target==s.currentTarget&&t(1,i=!1)}return n.$$set=s=>{"showModal"in s&&t(1,i=s.showModal),"$$scope"in s&&t(2,o=s.$$scope)},[a,i,o,r]}class Ne extends ne{constructor(e){super(),re(this,e,kn,yn,ee,{showModal:1})}}const ye=Re({}),ke=Re({}),Me=Re([]),he=Re([]),Ee=Re([]);function In(n){let e,t,r="Edit settings",o,i,a,s="Folder screen",l,h,d="The size of the preview screens on the folder page, and when selecting a page template.",f,w,b,I,P,c,u,p,m,_,M="Preview folder screen size",N,C,D,T="Code screen",E,A,K="The size of the preview screen on the pages where you edit code.",te,x,z,Z,ae,we,De,ge,Fe,ce,Oe="Preview code screen size",Ae,Xe;return{c(){e=y("div"),t=y("h1"),t.textContent=r,o=V(),i=y("div"),a=y("h2"),a.textContent=s,l=V(),h=y("p"),h.textContent=d,f=V(),w=y("div"),b=ie(`Width in mm:
				`),I=y("input"),P=V(),c=y("div"),u=ie(`Height in mm:
				`),p=y("input"),m=V(),_=y("div"),_.textContent=M,N=V(),C=y("div"),D=y("h2"),D.textContent=T,E=V(),A=y("p"),A.textContent=K,te=V(),x=y("div"),z=ie(`Width in mm:
				`),Z=y("input"),ae=V(),we=y("div"),De=ie(`Height in mm:
				`),ge=y("input"),Fe=V(),ce=y("div"),ce.textContent=Oe,this.h()},l(J){e=k(J,"DIV",{class:!0});var Q=j(e);t=k(Q,"H1",{"data-svelte-h":!0}),W(t)!=="svelte-12605jx"&&(t.textContent=r),o=B(Q),i=k(Q,"DIV",{class:!0});var be=j(i);a=k(be,"H2",{"data-svelte-h":!0}),W(a)!=="svelte-1eysbo6"&&(a.textContent=s),l=B(be),h=k(be,"P",{"data-svelte-h":!0}),W(h)!=="svelte-1pajsxr"&&(h.textContent=d),f=B(be),w=k(be,"DIV",{});var $e=j(w);b=se($e,`Width in mm:
				`),I=k($e,"INPUT",{type:!0,min:!0}),$e.forEach(v),P=B(be),c=k(be,"DIV",{});var Pe=j(c);u=se(Pe,`Height in mm:
				`),p=k(Pe,"INPUT",{type:!0,min:!0}),Pe.forEach(v),m=B(be),_=k(be,"DIV",{class:!0,"data-svelte-h":!0}),W(_)!=="svelte-1ewgrlo"&&(_.textContent=M),be.forEach(v),N=B(Q),C=k(Q,"DIV",{class:!0});var fe=j(C);D=k(fe,"H2",{"data-svelte-h":!0}),W(D)!=="svelte-1k237qn"&&(D.textContent=T),E=B(fe),A=k(fe,"P",{"data-svelte-h":!0}),W(A)!=="svelte-1mtgj5z"&&(A.textContent=K),te=B(fe),x=k(fe,"DIV",{});var tt=j(x);z=se(tt,`Width in mm:
				`),Z=k(tt,"INPUT",{type:!0,min:!0}),tt.forEach(v),ae=B(fe),we=k(fe,"DIV",{});var nt=j(we);De=se(nt,`Height in mm:
				`),ge=k(nt,"INPUT",{type:!0,min:!0}),nt.forEach(v),Fe=B(fe),ce=k(fe,"DIV",{class:!0,"data-svelte-h":!0}),W(ce)!=="svelte-icwf2t"&&(ce.textContent=Oe),fe.forEach(v),Q.forEach(v),this.h()},h(){S(I,"type","number"),S(I,"min","1"),S(p,"type","number"),S(p,"min","1"),S(_,"class","screen svelte-1wsz6vm"),L(_,"width",`${n[1].folderScreen.widthInMm}mm`),L(_,"height",`${n[1].folderScreen.heightInMm}mm`),S(i,"class","group svelte-1wsz6vm"),S(Z,"type","number"),S(Z,"min","1"),S(ge,"type","number"),S(ge,"min","1"),S(ce,"class","screen svelte-1wsz6vm"),L(ce,"width",`${n[1].codeScreen.widthInMm}mm`),L(ce,"height",`${n[1].codeScreen.heightInMm}mm`),S(C,"class","group svelte-1wsz6vm"),S(e,"class","edit-settings-modal svelte-1wsz6vm")},m(J,Q){R(J,e,Q),g(e,t),g(e,o),g(e,i),g(i,a),g(i,l),g(i,h),g(i,f),g(i,w),g(w,b),g(w,I),Ie(I,n[1].folderScreen.widthInMm),g(i,P),g(i,c),g(c,u),g(c,p),Ie(p,n[1].folderScreen.heightInMm),g(i,m),g(i,_),g(e,N),g(e,C),g(C,D),g(C,E),g(C,A),g(C,te),g(C,x),g(x,z),g(x,Z),Ie(Z,n[1].codeScreen.widthInMm),g(C,ae),g(C,we),g(we,De),g(we,ge),Ie(ge,n[1].codeScreen.heightInMm),g(C,Fe),g(C,ce),Ae||(Xe=[F(I,"input",n[2]),F(p,"input",n[3]),F(Z,"input",n[4]),F(ge,"input",n[5])],Ae=!0)},p(J,Q){Q&2&&Se(I.value)!==J[1].folderScreen.widthInMm&&Ie(I,J[1].folderScreen.widthInMm),Q&2&&Se(p.value)!==J[1].folderScreen.heightInMm&&Ie(p,J[1].folderScreen.heightInMm),Q&2&&L(_,"width",`${J[1].folderScreen.widthInMm}mm`),Q&2&&L(_,"height",`${J[1].folderScreen.heightInMm}mm`),Q&2&&Se(Z.value)!==J[1].codeScreen.widthInMm&&Ie(Z,J[1].codeScreen.widthInMm),Q&2&&Se(ge.value)!==J[1].codeScreen.heightInMm&&Ie(ge,J[1].codeScreen.heightInMm),Q&2&&L(ce,"width",`${J[1].codeScreen.widthInMm}mm`),Q&2&&L(ce,"height",`${J[1].codeScreen.heightInMm}mm`)},d(J){J&&v(e),Ae=!1,Ce(Xe)}}}function Mn(n){let e,t,r;function o(a){n[6](a)}let i={$$slots:{default:[In]},$$scope:{ctx:n}};return n[0]!==void 0&&(i.showModal=n[0]),e=new Ne({props:i}),me.push(()=>_e(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){G(e.$$.fragment,a)},m(a,s){q(e,a,s),r=!0},p(a,[s]){const l={};s&130&&(l.$$scope={dirty:s,ctx:a}),!t&&s&1&&(t=!0,l.showModal=a[0],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){$(e.$$.fragment,a),r=!1},d(a){X(e,a)}}}function Cn(n,e,t){let r;Y(n,ye,d=>t(1,r=d));let{showModal:o=!0}=e;function i(){r.folderScreen.widthInMm=Se(this.value),ye.set(r)}function a(){r.folderScreen.heightInMm=Se(this.value),ye.set(r)}function s(){r.codeScreen.widthInMm=Se(this.value),ye.set(r)}function l(){r.codeScreen.heightInMm=Se(this.value),ye.set(r)}function h(d){o=d,t(0,o)}return n.$$set=d=>{"showModal"in d&&t(0,o=d.showModal)},[o,r,i,a,s,l,h]}class Sn extends ne{constructor(e){super(),re(this,e,Cn,Mn,ee,{showModal:0})}}function mt(n,e,t){const r=n.slice();return r[16]=e[t],r}function ft(n){let e,t,r="Copy project to clipboard as recreational link",o,i;return{c(){e=y("div"),t=y("button"),t.textContent=r},l(a){e=k(a,"DIV",{});var s=j(e);t=k(s,"BUTTON",{"data-svelte-h":!0}),W(t)!=="svelte-133s4n0"&&(t.textContent=r),s.forEach(v)},m(a,s){R(a,e,s),g(e,t),o||(i=F(t,"click",n[3]),o=!0)},p:U,d(a){a&&v(e),o=!1,i()}}}function pt(n){let e,t,r="Save project to BAGA file",o,i,a,s,l,h='<label for="file">Load project from Baga file</label>',d,f;return{c(){e=y("div"),t=y("button"),t.textContent=r,o=V(),i=y("div"),a=y("input"),s=V(),l=y("button"),l.innerHTML=h,this.h()},l(w){e=k(w,"DIV",{});var b=j(e);t=k(b,"BUTTON",{"data-svelte-h":!0}),W(t)!=="svelte-1g98l3d"&&(t.textContent=r),b.forEach(v),o=B(w),i=k(w,"DIV",{});var I=j(i);a=k(I,"INPUT",{type:!0,id:!0,style:!0,accept:!0}),s=B(I),l=k(I,"BUTTON",{class:!0,"data-svelte-h":!0}),W(l)!=="svelte-1ucarmc"&&(l.innerHTML=h),I.forEach(v),this.h()},h(){S(a,"type","file"),S(a,"id","file"),L(a,"display","none"),S(a,"accept",".baga"),S(l,"class","open-button")},m(w,b){R(w,e,b),g(e,t),R(w,o,b),R(w,i,b),g(i,a),g(i,s),g(i,l),d||(f=[F(t,"click",n[4]),F(a,"change",n[5])],d=!0)},p:U,d(w){w&&(v(e),v(o),v(i)),d=!1,Ce(f)}}}function gt(n){let e,t,r=n[16].text+"",o,i,a,s;function l(){return n[8](n[16])}return{c(){e=y("div"),t=y("button"),o=ie(r),i=V()},l(h){e=k(h,"DIV",{});var d=j(e);t=k(d,"BUTTON",{});var f=j(t);o=se(f,r),f.forEach(v),i=B(d),d.forEach(v)},m(h,d){R(h,e,d),g(e,t),g(t,o),g(e,i),a||(s=F(t,"click",l),a=!0)},p(h,d){n=h,d&2&&r!==(r=n[16].text+"")&&je(o,r)},d(h){h&&v(e),a=!1,s()}}}function xn(n){let e,t,r="Main menu",o,i,a,s,l="Edit settings",h,d,f,w,b=n[1].showCopyLinkButton&&ft(n),I=n[1].showFileButtons&&pt(n),P=oe(n[1].extraOptions),c=[];for(let u=0;u<P.length;u+=1)c[u]=gt(mt(n,P,u));return{c(){e=y("div"),t=y("h1"),t.textContent=r,o=V(),b&&b.c(),i=V(),a=y("div"),s=y("button"),s.textContent=l,h=V(),I&&I.c(),d=V();for(let u=0;u<c.length;u+=1)c[u].c();this.h()},l(u){e=k(u,"DIV",{class:!0});var p=j(e);t=k(p,"H1",{class:!0,"data-svelte-h":!0}),W(t)!=="svelte-1x9r302"&&(t.textContent=r),o=B(p),b&&b.l(p),i=B(p),a=k(p,"DIV",{});var m=j(a);s=k(m,"BUTTON",{"data-svelte-h":!0}),W(s)!=="svelte-1m9tkp0"&&(s.textContent=l),m.forEach(v),h=B(p),I&&I.l(p),d=B(p);for(let _=0;_<c.length;_+=1)c[_].l(p);p.forEach(v),this.h()},h(){S(t,"class","svelte-tgu2et"),S(e,"class","main-menu-modal svelte-tgu2et")},m(u,p){R(u,e,p),g(e,t),g(e,o),b&&b.m(e,null),g(e,i),g(e,a),g(a,s),g(e,h),I&&I.m(e,null),g(e,d);for(let m=0;m<c.length;m+=1)c[m]&&c[m].m(e,null);f||(w=F(s,"click",n[7]),f=!0)},p(u,p){if(u[1].showCopyLinkButton?b?b.p(u,p):(b=ft(u),b.c(),b.m(e,i)):b&&(b.d(1),b=null),u[1].showFileButtons?I?I.p(u,p):(I=pt(u),I.c(),I.m(e,d)):I&&(I.d(1),I=null),p&66){P=oe(u[1].extraOptions);let m;for(m=0;m<P.length;m+=1){const _=mt(u,P,m);c[m]?c[m].p(_,p):(c[m]=gt(_),c[m].c(),c[m].m(e,null))}for(;m<c.length;m+=1)c[m].d(1);c.length=P.length}},d(u){u&&v(e),b&&b.d(),I&&I.d(),Ge(c,u),f=!1,w()}}}function bt(n){let e,t,r;function o(a){n[10](a)}let i={};return n[2]!==void 0&&(i.showModal=n[2]),e=new Sn({props:i}),me.push(()=>_e(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){G(e.$$.fragment,a)},m(a,s){q(e,a,s),r=!0},p(a,s){const l={};!t&&s&4&&(t=!0,l.showModal=a[2],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){$(e.$$.fragment,a),r=!1},d(a){X(e,a)}}}function An(n){let e,t,r,o,i;function a(h){n[9](h)}let s={$$slots:{default:[xn]},$$scope:{ctx:n}};n[0]!==void 0&&(s.showModal=n[0]),e=new Ne({props:s}),me.push(()=>_e(e,"showModal",a));let l=n[2]&&bt(n);return{c(){H(e.$$.fragment),r=V(),l&&l.c(),o=le()},l(h){G(e.$$.fragment,h),r=B(h),l&&l.l(h),o=le()},m(h,d){q(e,h,d),R(h,r,d),l&&l.m(h,d),R(h,o,d),i=!0},p(h,[d]){const f={};d&524294&&(f.$$scope={dirty:d,ctx:h}),!t&&d&1&&(t=!0,f.showModal=h[0],ve(()=>t=!1)),e.$set(f),h[2]?l?(l.p(h,d),d&4&&O(l,1)):(l=bt(h),l.c(),O(l,1),l.m(o.parentNode,o)):l&&(ue(),$(l,1,1,()=>{l=null}),de())},i(h){i||(O(e.$$.fragment,h),O(l),i=!0)},o(h){$(e.$$.fragment,h),$(l),i=!1},d(h){h&&(v(r),v(o)),X(e,h),l&&l.d(h)}}}function Pn(n,e,t){let r,o,i,a;Y(n,Ee,m=>t(11,r=m)),Y(n,he,m=>t(12,o=m)),Y(n,Me,m=>t(13,i=m)),Y(n,ke,m=>t(14,a=m));let{showModal:s=!0}=e,{options:l={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[]}}=e,h=!1;function d(){return{app:a,folders:i,pages:o,pageTemplates:r}}async function f(){const _=`https://bagawork.com/editor#${rt(d())}`;navigator.clipboard.writeText(_)}function w(){const m=rt(d()),_=document.createElement("a");_.href="data:application/octet-stream,"+encodeURIComponent(m),_.download=`${pe(a.code)}.baga`,_.click()}function b(m){const _=m.target.files;if(_.length==0)return;const M=_[0],N=new FileReader;N.readAsText(M),N.addEventListener("load",C=>{try{const D=nn(C.target.result);D.app&&D.folders&&D.pages&&D.pageTemplates?(Te(ke,a=D.app,a),Te(Me,i=D.folders,i),Te(he,o=D.pages,o),Te(Ee,r=D.pageTemplates,r),t(0,s=!1)):alert("Error: The BAGA file could be parsed, but didn't contain all expected data.")}catch{alert("Error: The file is not a valid BAGA file.")}})}function I(m){const _=rt(d());m.onClick(_)}const P=()=>t(2,h=!0),c=m=>I(m);function u(m){s=m,t(0,s)}function p(m){h=m,t(2,h)}return n.$$set=m=>{"showModal"in m&&t(0,s=m.showModal),"options"in m&&t(1,l=m.options)},[s,l,h,f,w,b,I,P,c,u,p]}class En extends ne{constructor(e){super(),re(this,e,Pn,An,ee,{showModal:0,options:1})}}function jn(n){let e,t,r="Edit Folder",o,i,a,s,l,h,d,f,w,b,I;return{c(){e=y("div"),t=y("h1"),t.textContent=r,o=V(),i=y("div"),a=ie("Name: "),s=y("input"),l=V(),h=y("div"),d=y("button"),f=ie("Delete"),this.h()},l(P){e=k(P,"DIV",{class:!0});var c=j(e);t=k(c,"H1",{class:!0,"data-svelte-h":!0}),W(t)!=="svelte-1spe3mm"&&(t.textContent=r),o=B(c),i=k(c,"DIV",{});var u=j(i);a=se(u,"Name: "),s=k(u,"INPUT",{type:!0}),u.forEach(v),l=B(c),h=k(c,"DIV",{});var p=j(h);d=k(p,"BUTTON",{});var m=j(d);f=se(m,"Delete"),m.forEach(v),p.forEach(v),c.forEach(v),this.h()},h(){S(t,"class","svelte-1xyhvgw"),S(s,"type","text"),d.disabled=w=n[1].length==1,S(e,"class","edit-folder-modal svelte-1xyhvgw")},m(P,c){R(P,e,c),g(e,t),g(e,o),g(e,i),g(i,a),g(i,s),Ie(s,n[2].name),g(e,l),g(e,h),g(h,d),g(d,f),b||(I=[F(s,"input",n[5]),F(d,"click",n[3])],b=!0)},p(P,c){c&4&&s.value!==P[2].name&&Ie(s,P[2].name),c&2&&w!==(w=P[1].length==1)&&(d.disabled=w)},d(P){P&&v(e),b=!1,Ce(I)}}}function Dn(n){let e,t,r;function o(a){n[6](a)}let i={$$slots:{default:[jn]},$$scope:{ctx:n}};return n[0]!==void 0&&(i.showModal=n[0]),e=new Ne({props:i}),me.push(()=>_e(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){G(e.$$.fragment,a)},m(a,s){q(e,a,s),r=!0},p(a,[s]){const l={};s&262&&(l.$$scope={dirty:s,ctx:a}),!t&&s&1&&(t=!0,l.showModal=a[0],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){$(e.$$.fragment,a),r=!1},d(a){X(e,a)}}}function On(n,e,t){let r,o,i;Y(n,Me,f=>t(1,o=f)),Y(n,he,f=>t(7,i=f));let{folderId:a}=e,{showModal:s}=e;function l(){const f=o.findIndex(b=>b.id==r.id);i.find(b=>b.folderId==a)&&!confirm("The folder you are deleting contains pages, and those pages will be deleted too if you delete the folder. Do you really want to delete the folder?")||(o.splice(f,1),Te(he,i=i.filter(b=>b.folderId!=a),i),Me.set(o),t(0,s=!1))}function h(){r.name=this.value,t(2,r),t(1,o),t(4,a)}function d(f){s=f,t(0,s)}return n.$$set=f=>{"folderId"in f&&t(4,a=f.folderId),"showModal"in f&&t(0,s=f.showModal)},n.$$.update=()=>{n.$$.dirty&18&&t(2,r=o.find(f=>f.id==a))},[s,o,r,l,a,h,d]}class $n extends ne{constructor(e){super(),re(this,e,On,Dn,ee,{folderId:4,showModal:0})}}function Vn(n,{delay:e=0,duration:t=400,easing:r=mn}={}){const o=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:r,css:i=>`opacity: ${i*o}`}}function wt(n,e,t){const r=n.slice();return r[4]=e[t],r[6]=t,r}function vt(n,e){let t,r=e[4].value+"",o,i,a;return{key:n,first:null,c(){t=y("div"),o=ie(r),this.h()},l(s){t=k(s,"DIV",{class:!0});var l=j(t);o=se(l,r),l.forEach(v),this.h()},h(){var s;S(t,"class",i="item "+e[4].type+" svelte-163j81l"),Ve(t,"hide",`${e[4].value} ✅`==((s=e[1][e[6]+1])==null?void 0:s.value)),this.first=t},m(s,l){R(s,t,l),g(t,o)},p(s,l){var h;e=s,l&2&&r!==(r=e[4].value+"")&&je(o,r),l&2&&i!==(i="item "+e[4].type+" svelte-163j81l")&&S(t,"class",i),l&2&&Ve(t,"hide",`${e[4].value} ✅`==((h=e[1][e[6]+1])==null?void 0:h.value))},i(s){s&&(a||fn(()=>{a=pn(t,Vn,{delay:100}),a.start()}))},o:U,d(s){s&&v(t)}}}function Bn(n){let e,t,r,o,i,a,s=[],l=new Map,h,d,f,w,b,I=oe(n[1]);const P=c=>c[4].value+c[4].type+c[6];for(let c=0;c<I.length;c+=1){let u=wt(n,I,c),p=P(u);l.set(p,s[c]=vt(p,u))}return{c(){e=y("div"),t=y("div"),r=ie(`Show framework log:
		`),o=y("input"),i=V(),a=y("div");for(let c=0;c<s.length;c+=1)s[c].c();h=V(),d=y("div"),this.h()},l(c){e=k(c,"DIV",{class:!0});var u=j(e);t=k(u,"DIV",{class:!0});var p=j(t);r=se(p,`Show framework log:
		`),o=k(p,"INPUT",{type:!0}),p.forEach(v),i=B(u),a=k(u,"DIV",{class:!0});var m=j(a);for(let _=0;_<s.length;_+=1)s[_].l(m);h=B(m),d=k(m,"DIV",{}),j(d).forEach(v),m.forEach(v),u.forEach(v),this.h()},h(){S(o,"type","checkbox"),S(t,"class","settings svelte-163j81l"),S(a,"class","items svelte-163j81l"),S(e,"class","tab-log")},m(c,u){R(c,e,u),g(e,t),g(t,r),g(t,o),o.checked=n[0],g(e,i),g(e,a);for(let p=0;p<s.length;p+=1)s[p]&&s[p].m(a,null);g(a,h),g(a,d),w||(b=[F(o,"change",n[3]),He(f=Rn.call(null,d,n[1].length!=0))],w=!0)},p(c,[u]){u&1&&(o.checked=c[0]),u&2&&(I=oe(c[1]),s=Ze(s,u,P,1,c,I,l,a,en,vt,h,wt)),f&&Qe(f.update)&&u&2&&f.update.call(null,c[1].length!=0)},i(c){for(let u=0;u<I.length;u+=1)O(s[u])},o:U,d(c){c&&v(e);for(let u=0;u<s.length;u+=1)s[u].d();w=!1,Ce(b)}}}const _t=Re(!1);function Rn(n,e){function t(r){r&&n.parentNode.parentNode.parentNode.scrollTop!=0&&n.scrollIntoView({behavior:"smooth",block:"end"})}return t(e),{update:t}}function Nn(n,e,t){let r,o;Y(n,_t,s=>t(0,o=s));let{loggedItems:i=[{type:"framework",value:"Whatever..."}]}=e;function a(){o=this.checked,_t.set(o)}return n.$$set=s=>{"loggedItems"in s&&t(2,i=s.loggedItems)},n.$$.update=()=>{n.$$.dirty&5&&t(1,r=o?i:i.filter(s=>s.type!="framework"))},[o,r,i,a]}class Fn extends ne{constructor(e){super(),re(this,e,Nn,Bn,ee,{loggedItems:2})}}function Tt(n,e,t){const r=n.slice();return r[1]=e[t],r}function yt(n){let e,t,r=n[1].text+"",o,i,a,s;return{c(){e=y("li"),t=y("button"),o=ie(r),i=V(),this.h()},l(l){e=k(l,"LI",{class:!0});var h=j(e);t=k(h,"BUTTON",{});var d=j(t);o=se(d,r),d.forEach(v),i=B(h),h.forEach(v),this.h()},h(){S(e,"class","svelte-17hvot3")},m(l,h){R(l,e,h),g(e,t),g(t,o),g(e,i),a||(s=F(t,"click",function(){Qe(n[1].onClick)&&n[1].onClick.apply(this,arguments)}),a=!0)},p(l,h){n=l,h&1&&r!==(r=n[1].text+"")&&je(o,r)},d(l){l&&v(e),a=!1,s()}}}function Ln(n){let e,t,r=oe(n[0]),o=[];for(let i=0;i<r.length;i+=1)o[i]=yt(Tt(n,r,i));return{c(){e=y("div"),t=y("ul");for(let i=0;i<o.length;i+=1)o[i].c();this.h()},l(i){e=k(i,"DIV",{class:!0});var a=j(e);t=k(a,"UL",{class:!0});var s=j(t);for(let l=0;l<o.length;l+=1)o[l].l(s);s.forEach(v),a.forEach(v),this.h()},h(){S(t,"class","svelte-17hvot3"),S(e,"class","tab-menu svelte-17hvot3")},m(i,a){R(i,e,a),g(e,t);for(let s=0;s<o.length;s+=1)o[s]&&o[s].m(t,null)},p(i,[a]){if(a&1){r=oe(i[0]);let s;for(s=0;s<r.length;s+=1){const l=Tt(i,r,s);o[s]?o[s].p(l,a):(o[s]=yt(l),o[s].c(),o[s].m(t,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=r.length}},i:U,o:U,d(i){i&&v(e),Ge(o,i)}}}function Un(n,e,t){let{items:r=[{text:"Button text",onClick(){}}]}=e;return n.$$set=o=>{"items"in o&&t(0,r=o.items)},[r]}class Yn extends ne{constructor(e){super(),re(this,e,Un,Ln,ee,{items:0})}}function zn(n){let e,t="If you return a paper figure from App.createIcon(), it will be shown here. If your app then is installed on a user's smartphone, that icon will be shown as the icon the user should click on to start your app.";return{c(){e=y("p"),e.textContent=t},l(r){e=k(r,"P",{"data-svelte-h":!0}),W(e)!=="svelte-1nuxglm"&&(e.textContent=t)},m(r,o){R(r,e,o)},p:U,d(r){r&&v(e)}}}function Hn(n){let e,t;return{c(){e=y("div"),t=new gn(!1),this.h()},l(r){e=k(r,"DIV",{class:!0});var o=j(e);t=bn(o,!1),o.forEach(v),this.h()},h(){t.a=null,S(e,"class","icon svelte-1w89isc")},m(r,o){R(r,e,o),t.m(n[0],e)},p(r,o){o&1&&t.p(r[0])},d(r){r&&v(e)}}}function Gn(n){let e;function t(i,a){return i[0]?Hn:zn}let r=t(n),o=r(n);return{c(){o.c(),e=le()},l(i){o.l(i),e=le()},m(i,a){o.m(i,a),R(i,e,a)},p(i,[a]){r===(r=t(i))&&o?o.p(i,a):(o.d(1),o=r(i),o&&(o.c(),o.m(e.parentNode,e)))},i:U,o:U,d(i){i&&v(e),o.d(i)}}}function qn(n,e,t){let{iconAsSvgString:r=""}=e;return n.$$set=o=>{"iconAsSvgString"in o&&t(0,r=o.iconAsSvgString)},n.$$.update=()=>{n.$$.dirty&1},[r]}class Xn extends ne{constructor(e){super(),re(this,e,qn,Gn,ee,{iconAsSvgString:0})}}function Wn(n){let e,t,r;return{c(){e=y("div"),this.h()},l(o){e=k(o,"DIV",{class:!0}),j(e).forEach(v),this.h()},h(){S(e,"class","monaco svelte-1rpg4qr")},m(o,i){R(o,e,i),t||(r=He(n[0].call(null,e)),t=!0)},p:U,i:U,o:U,d(o){o&&v(e),t=!1,r()}}}function Kn(n,e,t){let r,o;Y(n,ke,c=>t(8,r=c)),Y(n,he,c=>t(9,o=c));let{monaco:i=null}=e,{pageId:a=1}=e,{selectedFileIndex:s=0}=e;const l=o.find(c=>c.id==a),h=[{variable:"p",code:l.code},{variable:"a",code:r.code}].map(c=>({variable:c.variable,className:pe(c.code),monacoClassModel:i.editor.createModel(c.code,"javascript"),monacoVariableModel:i.editor.createModel(`const ${c.variable} = new ${pe(c.code)}()`,"javascript")})),d=o.filter(c=>c.id!=a).map(c=>pe(c.code)),f=i.editor.createModel(d.map(c=>`class ${c} extends Page{}`).join(`
`),"javascript");function w(c){const u=h[c],p=pe(u.monacoClassModel.getValue());h[c].className!=p&&(t(5,h[c].className=p,h),h[c].monacoVariableModel.setValue(`const ${u.variable} = new ${p}();`),P())}for(let c=0;c<h.length;c++){const u=h[c];w(c),u.monacoClassModel.onDidChangeContent(p=>{w(c)})}let b;function I(c){t(6,b=i.editor.create(c,{model:h[s].monacoClassModel,minimap:{enabled:!1},fontSize:16,tabSize:2,automaticLayout:!0,scrollBeyondLastLine:!1,renderWhitespace:"all",trimAutoWhitespace:!1,language:"javascript",suggest:{showKeywords:!1}}))}function P(){const[c,u]=h;l.code=c.monacoClassModel.getValue(),he.set(o),Te(ke,r.code=u.monacoClassModel.getValue(),r)}return ct(()=>{P(),b.dispose();for(const c of h)c.monacoClassModel.dispose(),c.monacoVariableModel.dispose();f.dispose()}),n.$$set=c=>{"monaco"in c&&t(1,i=c.monaco),"pageId"in c&&t(2,a=c.pageId),"selectedFileIndex"in c&&t(3,s=c.selectedFileIndex)},n.$$.update=()=>{n.$$.dirty&104&&b&&b.setModel(h[s].monacoClassModel)},[I,i,a,s,P,h,b]}class Jn extends ne{constructor(e){super(),re(this,e,Kn,Wn,ee,{monaco:1,pageId:2,selectedFileIndex:3,save:4})}get save(){return this.$$.ctx[4]}}function Qn(n){let e,t,r;return{c(){e=y("div"),this.h()},l(o){e=k(o,"DIV",{class:!0}),j(e).forEach(v),this.h()},h(){S(e,"class","monaco svelte-1rpg4qr")},m(o,i){R(o,e,i),t||(r=He(n[0].call(null,e)),t=!0)},p:U,i:U,o:U,d(o){o&&v(e),t=!1,r()}}}function Zn(n,e,t){let{state:r={}}=e,{monaco:o=null}=e;const i=o.editor.createModel("","json");let a;async function s(h){a=o.editor.create(h,{model:i,minimap:{enabled:!1},fontSize:16,tabSize:2,automaticLayout:!0,scrollBeyondLastLine:!1,renderWhitespace:"all",trimAutoWhitespace:!1,language:"json",suggest:{showKeywords:!1}})}function l(){const h=Object.assign({},r);try{Object.assign(h,JSON.parse(i.getValue()))}catch(d){console.log(123321,d)}return h}return ct(()=>{a.dispose(),i.dispose()}),n.$$set=h=>{"state"in h&&t(1,r=h.state),"monaco"in h&&t(2,o=h.monaco)},n.$$.update=()=>{n.$$.dirty&2&&i.setValue(JSON.stringify(r,null,"	"))},[s,r,o,l]}class er extends ne{constructor(e){super(),re(this,e,Zn,Qn,ee,{state:1,monaco:2,getModifiedState:3})}get getModifiedState(){return this.$$.ctx[3]}}function kt(n,e,t){const r=n.slice();return r[17]=e[t],r[19]=t,r}function It(n){let e,t=n[17]+"",r,o,i,a;function s(){return n[12](n[19])}return{c(){e=y("button"),r=ie(t),this.h()},l(l){e=k(l,"BUTTON",{});var h=j(e);r=se(h,t),h.forEach(v),this.h()},h(){e.disabled=o=n[19]==n[3]},m(l,h){R(l,e,h),g(e,r),i||(a=F(e,"click",s),i=!0)},p(l,h){n=l,h&96&&t!==(t=n[17]+"")&&je(r,t),h&8&&o!==(o=n[19]==n[3])&&(e.disabled=o)},d(l){l&&v(e),i=!1,a()}}}function tr(n){let e,t,r={monaco:n[1],pageId:n[0],selectedFileIndex:n[3]};return e=new Jn({props:r}),n[15](e),{c(){H(e.$$.fragment)},l(o){G(e.$$.fragment,o)},m(o,i){q(e,o,i),t=!0},p(o,i){const a={};i&2&&(a.monaco=o[1]),i&1&&(a.pageId=o[0]),i&8&&(a.selectedFileIndex=o[3]),e.$set(a)},i(o){t||(O(e.$$.fragment,o),t=!0)},o(o){$(e.$$.fragment,o),t=!1},d(o){n[15](null),X(e,o)}}}function nr(n){let e,t,r={monaco:n[1],state:n[2]};return e=new er({props:r}),n[14](e),{c(){H(e.$$.fragment)},l(o){G(e.$$.fragment,o)},m(o,i){q(e,o,i),t=!0},p(o,i){const a={};i&2&&(a.monaco=o[1]),i&4&&(a.state=o[2]),e.$set(a)},i(o){t||(O(e.$$.fragment,o),t=!0)},o(o){$(e.$$.fragment,o),t=!1},d(o){n[14](null),X(e,o)}}}function rr(n){let e,t,r,o,i,a,s,l,h,d,f,w,b,I,P,c=oe(n[8](n[5],n[6])),u=[];for(let M=0;M<c.length;M+=1)u[M]=It(kt(n,c,M));const p=[nr,tr],m=[];function _(M,N){return M[3]==M[7]?0:1}return f=_(n),w=m[f]=p[f](n),{c(){e=y("div"),t=y("div");for(let M=0;M<u.length;M+=1)u[M].c();r=V(),o=y("div"),i=V(),a=y("button"),s=ie("State"),h=V(),d=y("div"),w.c(),this.h()},l(M){e=k(M,"DIV",{class:!0});var N=j(e);t=k(N,"DIV",{class:!0});var C=j(t);for(let E=0;E<u.length;E+=1)u[E].l(C);r=B(C),o=k(C,"DIV",{class:!0}),j(o).forEach(v),i=B(C),a=k(C,"BUTTON",{});var D=j(a);s=se(D,"State"),D.forEach(v),C.forEach(v),h=B(N),d=k(N,"DIV",{class:!0});var T=j(d);w.l(T),T.forEach(v),N.forEach(v),this.h()},h(){S(o,"class","space"),a.disabled=l=n[3]==n[7],S(t,"class","tab-names-child svelte-c5c4u2"),S(d,"class","code-editor-child2 svelte-c5c4u2"),S(e,"class","code-editor-with-tabs svelte-c5c4u2")},m(M,N){R(M,e,N),g(e,t);for(let C=0;C<u.length;C+=1)u[C]&&u[C].m(t,null);g(t,r),g(t,o),g(t,i),g(t,a),g(a,s),g(e,h),g(e,d),m[f].m(d,null),b=!0,I||(P=F(a,"click",n[13]),I=!0)},p(M,[N]){if(N&360){c=oe(M[8](M[5],M[6]));let D;for(D=0;D<c.length;D+=1){const T=kt(M,c,D);u[D]?u[D].p(T,N):(u[D]=It(T),u[D].c(),u[D].m(t,r))}for(;D<u.length;D+=1)u[D].d(1);u.length=c.length}(!b||N&8&&l!==(l=M[3]==M[7]))&&(a.disabled=l);let C=f;f=_(M),f===C?m[f].p(M,N):(ue(),$(m[C],1,1,()=>{m[C]=null}),de(),w=m[f],w?w.p(M,N):(w=m[f]=p[f](M),w.c()),O(w,1),w.m(d,null))},i(M){b||(O(w),b=!0)},o(M){$(w),b=!1},d(M){M&&v(e),Ge(u,M),m[f].d(),I=!1,P()}}}function or(n,e,t){let r,o;Y(n,he,_=>t(5,r=_)),Y(n,ke,_=>t(6,o=_));let{pageId:i=0}=e,{monaco:a=null}=e,{state:s={}}=e,{onEditorModeChanged:l=_=>null}=e;function h(_){return _.find(M=>M.id==i)}let d=null,f=0;const w=-1;function b(_,M){const N=h(_);return[pe(N.code),pe(M.code)]}function I(){return d.getModifiedState()}function P(){d.save()}const c=_=>t(3,f=_),u=()=>t(3,f=w);function p(_){me[_?"unshift":"push"](()=>{d=_,t(4,d)})}function m(_){me[_?"unshift":"push"](()=>{d=_,t(4,d)})}return n.$$set=_=>{"pageId"in _&&t(0,i=_.pageId),"monaco"in _&&t(1,a=_.monaco),"state"in _&&t(2,s=_.state),"onEditorModeChanged"in _&&t(9,l=_.onEditorModeChanged)},n.$$.update=()=>{n.$$.dirty&520&&l(f==w?"state":"code")},[i,a,s,f,d,r,o,w,b,l,I,P,c,u,p,m]}class ar extends ne{constructor(e){super(),re(this,e,or,rr,ee,{pageId:0,monaco:1,state:2,onEditorModeChanged:9,getModifiedState:10,save:11})}get getModifiedState(){return this.$$.ctx[10]}get save(){return this.$$.ctx[11]}}const ir=`/**
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
	 * This method is called directly when your app starts. In this
	 * method you can create and return a paper figure that will
	 * be used as the icon of your app. If your app is installed on
	 * a smartphone, it will for example be used as the icon the
	 * user should click on to start your app.
	 * 
	 * The icon will always have a squared size (width = height).
	 */
	createIcon(): PaperFigure;
	
	/**
	 * This method will be called after onBefore() has been called.
	 * In this method, you should send back the first page that should
	 * be shown to the user.
	 */
	createStartPage(): Page;
	
	/**
	 * If your app crashes when your user runs it, then an error message
	 * will be shown to the user, explaining that the app has crashed.
	 * The user will also be given the option to continue running the app
	 * by loading another page. If the user wants to do that, then this
	 * method will be called, and the page you return here is the page that
	 * will be shown to the user.
	 * 
	 * If you don't implement this method, then the page returned from
	 * createStartPage() will be used as the error recovering page.
	 */
	createErrorRecoveringPage(): Page;
	
}`,sr=`/**
 * This class represents a GUI component that can be used to
 * build the GUI shown to the user. Use sub-classes to this class.
 */
abstract class Component{
	
	/**
	 * This method is only useful to call when the component is used as a
	 * child in a Rows/Columns layout.
	 * 
	 * If the children in the Rows/Columns layout don't occupy all the
	 * space in the layout, then you can call this method on the children
	 * to allow them to grow bigger. Pass it a number indicating the
	 * preferred relative size/ratio they should have, and then the children
	 * will grow bigger to try to honor this.
	 * 
	 * All children will use \`0\` as default, except the Space component,
	 * which uses \`1\` as default.
	 * 
	 * @param preferredRelativeSize A number indicating how big this child should be relative to the other children
	 */
	grow(preferredRelativeSize: number){ return this };
	
	/**
	 * This method is the same as \`grow()\` (so read the documentation for
	 * that one), but this method will also make sure that the child never
	 * grow bigger than the relative size you assign it. If the child's
	 * content don't fit within this size, then the child becomes scrollable.
	 * 
	 * @param preferredRelativeSize A number indicating how big this child should be relative to the other children
	 */
	growShrink(preferredRelativeSize: number){ return this };
	
	/**
	 * This method sets the background color the GUI component will have.
	 * 
	 * @param colorName The name of the color in English, such as \`red\`
	 */
	backgroundColor(colorName: string){ return this };
	
	/**
	 * This method sets the corner radius the GUI component will have.
	 * 
	 * @param radius The radius of the corner
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
	 * @param thickness The thickness of the border
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
	 * This method sets the font that should be used to format the text
	 * shown by this component and its child components.
	 * 
	 * @param font The font that should be used
	 */
	font(font: Font) { return this }

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
	
}`,lr=`/**
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
	
))()`,hr=`/**
 * This class represents a length of time. A new instance of it
 * has the length 0.
 */
const Duration = (() => new (
	
	/**
	 * This class represents a length of time. A new instance of it
	 * has the length 0.
	 */
	class Duration {
		
		/**
		 * This method adds the given number of milliseconds to the \`Duration\`.
		 * @param numberOfMilliseconds The number of milliseconds to be added
		 */
		addMilliseconds(numberOfMilliseconds: number) { return this }
		
		/**
		 * This method adds the given number of seconds to the \`Duration\`.
		 * @param numberOfSeconds The number of seconds to be added
		 */
		addSeconds(numberOfSeconds: number) { return this }
		
		/**
		 * This method adds the given number of minutes to the \`Duration\`.
		 * @param numberOfMinutes The number of minutes to be added
		 */
		addMinutes(numberOfMinutes: number) { return this }
		
		/**
		 * This method adds the given number of hours to the \`Duration\`.
		 * @param numberOfHours The number of hours to be added
		 */
		addHours(numberOfHours: number) { return this }
		
		/**
		 * This method adds the given number of days to the \`Duration\`.
		 * @param numberOfDays The number of days to be added
		 */
		addDays(numberOfDays: number) { return this }
		
		/**
		 * This method adds the given number of weeks to the \`Duration\`.
		 * @param numberOfWeeks The number of weeks to be added
		 */
		addWeeks(numberOfWeeks: number) { return this }
		
		/**
		 * This method returns the milliseconds part of the \`Duration\`.
		 * @returns The milliseconds part of the \`Duration\`
		 */
		getMilliseconds() { return 0 }
		
		/**
		 * This method returns the seconds part of the \`Duration\`.
		 * @returns The seconds part of the \`Duration\`
		 */
		getSeconds() { return 0 }
		
		/**
		 * This method returns the minutes part of the \`Duration\`.
		 * @returns The minutes part of the \`Duration\`
		 */
		getMinutes() { return 0 }
		
		/**
		 * This method returns the hours part of the \`Duration\`.
		 * @returns The hours part of the \`Duration\`
		 */
		getHours() { return 0 }
		
		/**
		 * This method returns the days part of the \`Duration\`.
		 * @returns The days part of the \`Duration\`
		 */
		getDays() { return 0 }
		
		/**
		 * This method returns the weeks part of the \`Duration\`.
		 * @returns The weeks part of the \`Duration\`
		 */
		getWeeks() { return 0 }
		
		/**
		 * This method returns the entire duration in the milliseconds unit.
		 * @returns The entire duration in the milliseconds unit
		 */
		getTotalMilliseconds() { return 0 }
		
		/**
		 * This method returns the entire duration in the seconds unit.
		 * @returns The entire duration in the seconds unit
		 */
		getTotalSeconds() { return 0 }
		
		/**
		 * This method returns the entire duration in the minutes unit.
		 * @returns The entire duration in the minutes unit
		 */
		getTotalMinutes() { return 0 }
		
		/**
		 * This method returns the entire duration in the hours unit.
		 * @returns The entire duration in the hours unit
		 */
		getTotalHours() { return 0 }
		
		/**
		 * This method returns the entire duration in the days unit.
		 * @returns The entire duration in the days unit
		 */
		getTotalDays() { return 0 }
		
		/**
		 * This method returns the entire duration in the weeks unit.
		 * @returns The entire duration in the weeks unit
		 */
		getTotalWeeks() { return 0 }
		
		/**
		 * This method checks if \`otherDuration\` is equally long as this
		 * \`Duration\`.
		 * @param otherDuration The \`Duration\` to compare with
		 * @returns \`true\` if they are equally long, otherwise \`false\`
		 */
		isEquallyLongAs(otherDuration: Duration) { return true };

		/**
		 * This method checks if your \`Duration\` is shorter than the
		 * \`otherDuration\`.
		 * @param otherDuration The \`Duration\` to compare with
		 * @returns \`true\` if your \`Duration\` is shorter than \`otherTime\`, otherwise \`false\`
		 */
		isShorterThan(otherDuration: Duration) { return true };

		/**
		 * This method checks if your \`Duration\` is shorter than or
		 * equally long as \`otherDuration\`.
		 * @param otherDuration The \`Duration\` to compare with
		 * @returns \`true\` if your \`Duration\` is shorter than or equally long as \`otherDuration\`, otherwise \`false\`
		 */
		isShorterThanOrEquallyLongAs(otherDuration: Duration) { return true };
		
		/**
		 * This method returns a string that contains the length of
		 * the duration expressed in the English language.
		 * @returns A string with the duration expressed in English
		 */
		getAsString(){ return \`\` }
		
	}
	
))()`,cr=`/**
 * This class represents a font that contains information about how text
 * in GUI components should be formatted. Pass your font to a GUI component
 * by calling its configuration method \`font()\`.
 */
const Font = (() => new (
	
	/**
	 * This class represents a font that contains information about how text
	 * in GUI components should be formatted. Pass your font to a GUI component
	 * by calling its configuration method \`font()\`.
	 */
	class Font{
		
		/**
		 * This methods makes the text show as bold.
		 */
		bold(){ return this };
		
		/**
		 * This method sets the color the text should have.
		 * 
		 * @param colorName The name of the color in English, such as \`red\`
		 */
		color(colorName: string){ return this };
		
		/**
		 * This methods makes the text show as italic.
		 */
		italic(){ return this };
		
		/**
		 * This method sets the size the text should have (how tall it should be). The default unit is sw. Use the mm() function to use millimeters instead.
		 * 
		 * @param size The size of the text
		 */
		size(size: number) { return this };
		
		/**
		 * This methods makes the text show as a line through it.
		 */
		strikethrough() { return this };
		
		/**
		 * This methods makes the text show as underlined.
		 */
		underline() { return this };
		
	}
	
))()`,ur=`/**
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
	
}`,dr=`/**
 * This class represents a figure that can be drawn in a
 * Paper component.
 */
abstract class PaperFigure{
	
	/**
	 * This method sets the background color the figure will have.
	 * 
	 * @param colorName The name of the color in English, such as \`red\`
	 */
	backgroundColor(colorName: string){ return this };
	
	/**
	 * This method indicates which method that should be called when the
	 * user clicks on the figure. You can also pass it additional arguments,
	 * and these will be passed to your \`onClickMethod()\` when the figure
	 * is clicked.
	 * 
	 * @param onClickMethod The method to be called when the
	 * figure is clicked
	 * @param onClickArguments The optional arguments
	 */
		onClick(onClickMethod: () => void, ...onClickArguments: any[]){ return this };
	
}`,mr=`/**
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
		
		/**
		 * This method returns a \`Duration\` that represents the amount
		 * of time between this \`Time\` and the \`Time\` object you pass
		 * it.
		 * @param otherTime The \`Time\` object to compute the \`Duration\` to
		 * @returns The Duration between the two times
		 */
		getDurationTo(otherTime: Time): Duration { }
		
	}
	
))()`,fr=`const Box = (() => new (
	
	/**
	 * This GUI component is a layout that can contain a single child.
	 * That child can be given a height and width in different ways,
	 * and it can be positioned at different places in the layout.
	 */
	class Box extends Component {
		
		/**
		 * This method sets the aspect ratio of the child. Pass it the
		 * aspect ratio as two numbers.
		 * 
		 * @param theWidth The width of the aspect ratio
		 * @param theHeight The height of the aspect ratio
		 */
		aspectRatio(theWidth: number, theHeight: number) { return this };
		
		/**
		 * If the height of the child is smaller than the Box, the child
		 * will be centered vertically in the Box by default. Call this
		 * method to instead place the child at the bottom of the Box.
		 */
		bottom(){ return this }
		
		/**
		 * This method sets the child component the Box layout should have.
		 * The Box can be used without a child too, so you don't have to call
		 * this method.
		 */
		child(theChild: Component){ return this };
		
		/**
		 * This method sets the height the child should have.
		 * 
		 * @param theHeight The height the child should have
		 */
		height(theHeight: number) { return this };
		
		/**
		 * If the width of the child is smaller than the Box, the child
		 * will be centered horizontally in the Box by default. Call this
		 * method to instead place the child to the left in the Box.
		 */
		left() { return this }
		
		/**
		 * If the width of the child is smaller than the Box, the child
		 * will be centered horizontally in the Box by default. Call this
		 * method to instead place the child to the right in the Box.
		 */
		right() { return this }
		
		/**
		 * If the height of the child is smaller than the Box, the child
		 * will be centered vertically in the Box by default. Call this
		 * method to instead place the child at the top of the Box.
		 */
		top() { return this }
		
		/**
		 * This method sets the width the child should have.
		 * 
		 * @param theWidth The width the child should have
		 */
		width(theWidth: number){ return this };
		
	}
	
))()`,pr=`const Button = (() => new (
	
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
		 * This method indicates which method that should be called when the
		 * user clicks the \`Button\`. You can also pass it additional arguments,
		 * and these will be passed to your \`onClickMethod()\` when the \`Button\`
		 * is clicked.
		 * 
		 * @param onClickMethod The method to be called when the
		 * button is clicked
		 * @param onClickArguments The optional arguments
		 */
		onClick(onClickMethod: () => void, ...onClickArguments: any[]){ return this };
		
	}
	
))()`,gr=`const Columns = (() => new (
	
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
	
)) ()`,br=`const EnterNumber = (() => new (
	
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
		 * This method indicates which method that should be called when the
		 * user changes the number in the \`EnterNumber\` component. Your method
		 * will be passed the entered number and any extra arguments passed
		 * to \`onChange()\`.
		 * 
		 * @param onChangeMethod The method to be called with the entered number changes
		 * @param onChangeArguments Any extra arguments
		 */
		onChange(
			onChangeMethod: (enteredNumber: string) => void,
			...onChangeArguments: any[]
		){ return this };
		
	}
	
))()`,wr=`const EnterText = (() => new (
	
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
		 * This method indicates which method that should be called when the
		 * user changes the text in the \`EnterText\` component. Your method
		 * will be passed the entered text and any extra arguments passed
		 * to \`onChange()\`.
		 * 
		 * @param onChangeMethod The method to be called with the entered text changes
		 * @param onChangeArguments Any extra arguments
		 */
		onChange(
			onChangeMethod: (enteredNumber: number) => void,
			...onChangeArguments: any[]
		) { return this };
		
	}
	
))()`,vr=`const Html = (() => new (
	
	/**
	 * This GUI component is a view that shows whichever HTML elements
	 * you want.
	 */
	class Html extends Component{
		
		/**
		 * This method sets the component's HTML initializer.
		 * The initializer is a function that will be called
		 * when the HTML component is shown on the screen,
		 * and it receives the HTML element shows as the
		 * HTML component as an argument, and you can do
		 * whatever you want with it to make it show whatever
		 * you want it to show
		 * 
		 * @param theInitializer The method to be called to initialize the HTML element shown as the HTML component
		 */
		initializer(theInitializer: (HTMLElement) => void){ return this };
		
	}
	
))()`,_r=`// const Image = (() => new (
// 	
// 	/**
// 	 * This GUI component is a view that displays an image.
// 	 */
// 	class Image extends Image{
// 		
// 		/**
// 		 * This methods sets the URL from which the image should be retrieved.
// 		 * @param theUrl The URL of the image to be shown
// 		 */
// 		url(theUrl: string){ return this };
// 		
// 	}
// 	
// ))()`,Tr=`const Layers = (() => new (
	
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
	
))()`,yr=`const Paper = (() => new (
	
	/**
	 * This GUI component is a layout that occupy space you can
	 * use to draw different paper figures on.
	 * 
	 * NOTE: You can't pass ordinary GUI components to this layout,
	 * you can only pass it paper figures (like PaperLine,
	 * PaperCircle, etc.).
	 */
	class Paper extends Component{
		
		/**
		 * This method sets the size of the coordinate system
		 * the paper component uses to position its children
		 * within it.
		 * 
		 * @param width The width of the coordinate system
		 * @param height The height of the coordinate system
		 */
		coordinateSystem(width: number, height: number) { return this };
		
		/**
		 * This method instructs the paper component to show its
		 * coordinate system when its drawn on the screen.
		 */
		showCoordinates() { return this };
		
		/**
		 * This method sets the paper figures the paper component
		 * should have. You can pass it as many/few children
		 * you want, just separate them by comma.
		 */
		children(theChildren: PaperFigure){ return this; };
		
		/**
		 * This method indicates which method that should be called when the
		 * user clicks on the paper component. Your method will be passed:
		 * 
		 * - The X-coordinate of the click
		 * - The Y-coordinate of the click
		 * 
		 * You can also pass it additional arguments to this method,
		 * and these will be passed to your \`onClickMethod()\` after
		 * the X- and Y-coordinates when the paper is clicked.
		 * 
		 * @param onClickMethod The method to be called when the
		 * paper is clicked
		 * @param onClickArguments The optional arguments
		 */
		onClick(onClickMethod: (x: number, y: number) => void, ...onClickArguments: any[]){ return this };
		
	}
	
))()`,kr=`const Rows = (() => new (
	
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
	
)) ()`,Ir=`const Space = (() => new (
	
	/**
	 * This GUI component is a layout that primarily is used to occupy space,
	 * so other children in a Rows/Columns layout are positioned correct.
	 * 
	 * This component has \`size\` set to \`1\` by default, while other components
	 * have \`size\` set to \`0\` by default.
	 */
	class Space extends Component {
		
	}
	
)) ()`,Mr=`const Text = (() => new (
	
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
	
))()`,Cr=`/**
 * This function logs the value you pass to it, so you can insect
 * it in the editor.
 * @param value The value to be logged
 */
function log(value: any) { };`,Sr=`/**
 * This function creates a number with the millimeter unit.
 * @param theNumber The number that should be in the millimeter unit
 */
function mm(theNumber: any) { };`,xr=`const m = {
	
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
	
}`,Ar=`const PaperCircle = (() => new (
	
	/**
	 * This paper figure represents a circle in a Paper component.
	 */
	class PaperCircle extends PaperFigure {
		
		/**
		 * This method sets the radius of the circle.
		 * 
		 * @param theRadius The radius of the circle
		 */
		radius(theRadius: number) { return this };
		
		/**
		 * This method sets the center position of the circle.
		 * 
		 * @param x The X-coordinate of the center position
		 * @param y The Y-coordinate of the center position
		 */
		center(x: number, y: number) { return this };
		
	}
	
))()`,Pr=`const PaperGroup = (() => new (
	
	/**
	 * This paper figure represents a group of paper figures
	 * that can be used in a Paper component. The group can be
	 * given a width and a height (and its own coordinate system),
	 * and its children will then be drawn within that space.
	 */
	class PaperGroup extends PaperFigure {
		
		/**
		 * This method sets the width of the paper group
		 * 
		 * @param theWidth The width of the paper group
		 */
		width(theWidth: number) { return this };
		
		/**
		 * This method sets the height of the paper group.
		 * 
		 * @param theHeight The height of the paper group
		 */
		height(theHeight: number) { return this };
		
		/**
		 * This method sets the size of the coordinate system
		 * the paper group uses to position its children within
		 * it.
		 * 
		 * @param width The width of the coordinate system
		 * @param height The height of the coordinate system
		 */
		coordinateSystem(width: number, height: number) { return this };
		
		/**
		 * This method sets the center position of the paper group.
		 * 
		 * @param x The X-coordinate of the center position
		 * @param y The Y-coordinate of the center position
		 */
		center(x: number, y: number) { return this };
		
		/**
		 * This method instructs the paper group to show its
		 * coordinate system when its drawn on the screen.
		 */
		showCoordinates() { return this };
		
		/**
		 * This method sets the paper figures the paper group
		 * should have. You can pass it as many/few children
		 * you want, just separate them by comma.
		 */
		children(theChildren: PaperFigure){ return this; };
		
		/**
		 * This method indicates which method that should be called when the
		 * user clicks on the paper figure. Your method will be passed:
		 * 
		 * - The X-coordinate of the click
		 * - The Y-coordinate of the click
		 * 
		 * You can also pass it additional arguments to this method,
		 * and these will be passed to your \`onClickMethod()\` after
		 * the X- and Y-coordinates when the figure is clicked.
		 * 
		 * @param onClickMethod The method to be called when the
		 * figure is clicked
		 * @param onClickArguments The optional arguments
		 */
			onClick(onClickMethod: (x: number, y: number) => void, ...onClickArguments: any[]){ return this };
		
	}
	
))()`,Er=`const PaperLine = (() => new (
	
	/**
	 * This paper figure represents a line in a Paper component.
	 */
	class PaperLine extends PaperFigure {
		
		/**
		 * This method sets the thickness of the line.
		 * 
		 * @param theThickness The thickness of the line
		 */
		thickness(theThickness: number) { return this };
		
		/**
		 * This method sets the start position of the line.
		 * 
		 * @param x The X-coordinate of the start position
		 * @param y The Y-coordinate of the start position
		 */
		start(x: number, y: number) { return this };
		
		/**
		 * This method sets the end position of the line.
		 * 
		 * @param x The X-coordinate of the end position
		 * @param y The Y-coordinate of the end position
		 */
		end(x: number, y: number) { return this };
		
	}
	
))()`,jr=`const PaperRectangle = (() => new (
	
	/**
	 * This paper figure represents a rectangle in a Paper component.
	 */
	class PaperRectangle extends PaperFigure {
		
		/**
		 * This method sets the width of the rectangle.
		 * 
		 * @param theWidth The width of the rectangle
		 */
		width(theWidth: number) { return this };
		
		/**
		 * This method sets the height of the rectangle.
		 * 
		 * @param theHeight The height of the rectangle
		 */
		height(theHeight: number) { return this };
		
		/**
		 * This method sets the center position of the rectangle.
		 * 
		 * @param x The X-coordinate of the center position
		 * @param y The Y-coordinate of the center position
		 */
		center(x: number, y: number) { return this };
		
	}
	
))()`,Dr=`interface Voice {
	id: string;
	name: string;
	languageCode: string;
	rate: number;
	pitch: number;
}

const speaker = {
	
	/**
	 * Instructs the computer's speakers to speak the words
	 * in the provided string. The web browser's default voice
	 * will be used to speak the words.
	 * 
	 * @param words A string containing the words to be spoken
	 */
	speak(words: string){
		
	},
	
	/**
	 * Instructs the computer's speakers to speak the words
	 * in the provided string. The words will be spoken with
	 * the provided voice (obtain voices using \`speaker.getVoices()\`).
	 * 
	 * @param words A string containing the words to be spoken
	 * @param words A string containing the words to be spoken
	 */
	speakWithVoice(words: string, voice: Voice){
		
	},
	
	/**
	 * Returns an array with voices the computer can use to speak
	 * words.
	 */
	getVoices(): Voice[]{
		return []
	},
	
	/**
	 * Returns an array with voices for a specific language the
	 * computer can use to speak words.
	 */
	getVoicesByLanguageCode(languageCode: string): Voice[]{
		return []
	},
	
}`,Or=`// https://github.com/microsoft/TypeScript/blob/70b7de11fbadb16d30f6770332f544c44134eb82/src/lib/es5.d.ts#L1295
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
}`,$r=`// https://github.com/microsoft/TypeScript/blob/70b7de11fbadb16d30f6770332f544c44134eb82/src/lib/es5.d.ts#L633C2-L742C24
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
declare var Math: Math;`,Vr=`// https://github.com/microsoft/TypeScript/blob/main/src/lib/es5.d.ts
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
}`;function Br(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Mt(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Ct(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Mt(Object(t),!0).forEach(function(r){Br(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Mt(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Rr(n,e){if(n==null)return{};var t={},r=Object.keys(n),o,i;for(i=0;i<r.length;i++)o=r[i],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function Nr(n,e){if(n==null)return{};var t=Rr(n,e),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function Fr(n,e){return Lr(n)||Ur(n,e)||Yr(n,e)||zr()}function Lr(n){if(Array.isArray(n))return n}function Ur(n,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(n)))){var t=[],r=!0,o=!1,i=void 0;try{for(var a=n[Symbol.iterator](),s;!(r=(s=a.next()).done)&&(t.push(s.value),!(e&&t.length===e));r=!0);}catch(l){o=!0,i=l}finally{try{!r&&a.return!=null&&a.return()}finally{if(o)throw i}}return t}}function Yr(n,e){if(n){if(typeof n=="string")return St(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return St(n,e)}}function St(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function zr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hr(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function xt(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function At(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?xt(Object(t),!0).forEach(function(r){Hr(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):xt(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Gr(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(r){return e.reduceRight(function(o,i){return i(o)},r)}}function Ue(n){return function e(){for(var t=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=n.length?n.apply(this,o):function(){for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return e.apply(t,[].concat(o,s))}}}function Je(n){return{}.toString.call(n).includes("Object")}function qr(n){return!Object.keys(n).length}function ze(n){return typeof n=="function"}function Xr(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Wr(n,e){return Je(e)||xe("changeType"),Object.keys(e).some(function(t){return!Xr(n,t)})&&xe("changeField"),e}function Kr(n){ze(n)||xe("selectorType")}function Jr(n){ze(n)||Je(n)||xe("handlerType"),Je(n)&&Object.values(n).some(function(e){return!ze(e)})&&xe("handlersType")}function Qr(n){n||xe("initialIsRequired"),Je(n)||xe("initialType"),qr(n)&&xe("initialContent")}function Zr(n,e){throw new Error(n[e]||n.default)}var eo={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},xe=Ue(Zr)(eo),Ke={changes:Wr,selector:Kr,handler:Jr,initial:Qr};function to(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ke.initial(n),Ke.handler(e);var t={current:n},r=Ue(oo)(t,e),o=Ue(ro)(t),i=Ue(Ke.changes)(n),a=Ue(no)(t);function s(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return Ke.selector(h),h(t.current)}function l(h){Gr(r,o,i,a)(h)}return[s,l]}function no(n,e){return ze(e)?e(n.current):e}function ro(n,e){return n.current=At(At({},n.current),e),e}function oo(n,e,t){return ze(e)?e(n.current):Object.keys(t).forEach(function(r){var o;return(o=e[r])===null||o===void 0?void 0:o.call(e,n.current[r])}),t}var ao={create:to},io={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}};function so(n){return function e(){for(var t=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=n.length?n.apply(this,o):function(){for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return e.apply(t,[].concat(o,s))}}}function lo(n){return{}.toString.call(n).includes("Object")}function ho(n){return n||Pt("configIsRequired"),lo(n)||Pt("configType"),n.urls?(co(),{paths:{vs:n.urls.monacoBase}}):n}function co(){console.warn(rn.deprecation)}function uo(n,e){throw new Error(n[e]||n.default)}var rn={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Pt=so(uo)(rn),mo={config:ho},fo=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(o){return t.reduceRight(function(i,a){return a(i)},o)}};function on(n,e){return Object.keys(e).forEach(function(t){e[t]instanceof Object&&n[t]&&Object.assign(e[t],on(n[t],e[t]))}),Ct(Ct({},n),e)}var po={type:"cancelation",msg:"operation is manually canceled"};function ot(n){var e=!1,t=new Promise(function(r,o){n.then(function(i){return e?o(po):r(i)}),n.catch(o)});return t.cancel=function(){return e=!0},t}var go=ao.create({config:io,isInitialized:!1,resolve:null,reject:null,monaco:null}),an=Fr(go,2),qe=an[0],et=an[1];function bo(n){var e=mo.config(n),t=e.monaco,r=Nr(e,["monaco"]);et(function(o){return{config:on(o.config,r),monaco:t}})}function wo(){var n=qe(function(e){var t=e.monaco,r=e.isInitialized,o=e.resolve;return{monaco:t,isInitialized:r,resolve:o}});if(!n.isInitialized){if(et({isInitialized:!0}),n.monaco)return n.resolve(n.monaco),ot(at);if(window.monaco&&window.monaco.editor)return sn(window.monaco),n.resolve(window.monaco),ot(at);fo(vo,To)(yo)}return ot(at)}function vo(n){return document.body.appendChild(n)}function _o(n){var e=document.createElement("script");return n&&(e.src=n),e}function To(n){var e=qe(function(r){var o=r.config,i=r.reject;return{config:o,reject:i}}),t=_o("".concat(e.config.paths.vs,"/loader.js"));return t.onload=function(){return n()},t.onerror=e.reject,t}function yo(){var n=qe(function(t){var r=t.config,o=t.resolve,i=t.reject;return{config:r,resolve:o,reject:i}}),e=window.require;e.config(n.config),e(["vs/editor/editor.main"],function(t){sn(t),n.resolve(t)},function(t){n.reject(t)})}function sn(n){qe().monaco||et({monaco:n})}function ko(){return qe(function(n){var e=n.monaco;return e})}var at=new Promise(function(n,e){return et({resolve:n,reject:e})}),Et={config:bo,init:wo,__getMonacoInstance:ko};const Io=n=>({}),jt=n=>({monaco:n[3]});function Mo(n){return{c:U,l:U,m:U,p:U,i:U,o:U,d:U}}function Co(n){let e;const t=n[2].default,r=it(t,n,n[1],jt);return{c(){r&&r.c()},l(o){r&&r.l(o)},m(o,i){r&&r.m(o,i),e=!0},p(o,i){r&&r.p&&(!e||i&2)&&st(r,t,o,o[1],e?ht(t,o[1],i,Io):lt(o[1]),jt)},i(o){e||(O(r,o),e=!0)},o(o){$(r,o),e=!1},d(o){r&&r.d(o)}}}function So(n){let e,t="Loading the editor...";return{c(){e=y("p"),e.textContent=t},l(r){e=k(r,"P",{"data-svelte-h":!0}),W(e)!=="svelte-1cba8fu"&&(e.textContent=t)},m(r,o){R(r,e,o)},p:U,i:U,o:U,d(r){r&&v(e)}}}function xo(n){let e,t,r={ctx:n,current:null,token:null,hasCatch:!1,pending:So,then:Co,catch:Mo,value:3,blocks:[,,,]};return _n(n[0](),r),{c(){e=le(),r.block.c()},l(o){e=le(),r.block.l(o)},m(o,i){R(o,e,i),r.block.m(o,r.anchor=i),r.mount=()=>e.parentNode,r.anchor=e,t=!0},p(o,[i]){n=o,Tn(r,n,i)},i(o){t||(O(r.block),t=!0)},o(o){for(let i=0;i<3;i+=1){const a=r.blocks[i];$(a)}t=!1},d(o){o&&v(e),r.block.d(o),r.token=null,r=null}}}function Ao(n,e,t){let{$$slots:r={},$$scope:o}=e;Et.config({paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.0/min/vs"}});async function i(){const a=await Et.init();a.languages.typescript.javascriptDefaults.setCompilerOptions({noLib:!0,allowNonTsExtensions:!0});const s=Object.values(Object.assign({"../editor-type-definitions/bagawork/App.d.ts":ir,"../editor-type-definitions/bagawork/Component.ts":sr,"../editor-type-definitions/bagawork/Direction.ts":lr,"../editor-type-definitions/bagawork/Duration.ts":hr,"../editor-type-definitions/bagawork/Font.ts":cr,"../editor-type-definitions/bagawork/Page.d.ts":ur,"../editor-type-definitions/bagawork/PaperFigure.ts":dr,"../editor-type-definitions/bagawork/Time.ts":mr,"../editor-type-definitions/bagawork/components/Box.ts":fr,"../editor-type-definitions/bagawork/components/Button.ts":pr,"../editor-type-definitions/bagawork/components/Columns.ts":gr,"../editor-type-definitions/bagawork/components/EnterNumber.ts":br,"../editor-type-definitions/bagawork/components/EnterText.ts":wr,"../editor-type-definitions/bagawork/components/Html.ts":vr,"../editor-type-definitions/bagawork/components/Image.ts":_r,"../editor-type-definitions/bagawork/components/Layers.ts":Tr,"../editor-type-definitions/bagawork/components/Paper.ts":yr,"../editor-type-definitions/bagawork/components/Rows.ts":kr,"../editor-type-definitions/bagawork/components/Space.ts":Ir,"../editor-type-definitions/bagawork/components/Text.ts":Mr,"../editor-type-definitions/bagawork/functions/log.ts":Cr,"../editor-type-definitions/bagawork/functions/mm.ts":Sr,"../editor-type-definitions/bagawork/m.ts":xr,"../editor-type-definitions/bagawork/paper-figures/PaperCircle.ts":Ar,"../editor-type-definitions/bagawork/paper-figures/PaperGroup.ts":Pr,"../editor-type-definitions/bagawork/paper-figures/PaperLine.ts":Er,"../editor-type-definitions/bagawork/paper-figures/PaperRectangle.ts":jr,"../editor-type-definitions/bagawork/speaker.ts":Dr,"../editor-type-definitions/js/Array.d.ts":Or,"../editor-type-definitions/js/Math.d.ts":$r,"../editor-type-definitions/js/String.d.ts":Vr}));return a.languages.typescript.javascriptDefaults.setExtraLibs(s.map(l=>({content:l}))),a}return n.$$set=a=>{"$$scope"in a&&t(1,o=a.$$scope)},[i,o,r]}class ln extends ne{constructor(e){super(),re(this,e,Ao,xo,ee,{})}}function Po(n){let e,t,r="◎︎",o,i,a,s="<span>◁</span> <span>◯</span> <span>□</span>",l;const h=n[1].default,d=it(h,n,n[0],null);return{c(){e=y("div"),t=y("div"),t.textContent=r,o=V(),d&&d.c(),i=V(),a=y("div"),a.innerHTML=s,this.h()},l(f){e=k(f,"DIV",{class:!0});var w=j(e);t=k(w,"DIV",{class:!0,"data-svelte-h":!0}),W(t)!=="svelte-3qmnnw"&&(t.textContent=r),o=B(w),d&&d.l(w),i=B(w),a=k(w,"DIV",{class:!0,"data-svelte-h":!0}),W(a)!=="svelte-sc8r65"&&(a.innerHTML=s),w.forEach(v),this.h()},h(){S(t,"class","camera"),S(a,"class","buttons"),S(e,"class","smartphoneFrame svelte-1rqitwl")},m(f,w){R(f,e,w),g(e,t),g(e,o),d&&d.m(e,null),g(e,i),g(e,a),l=!0},p(f,[w]){d&&d.p&&(!l||w&1)&&st(d,h,f,f[0],l?ht(h,f[0],w,null):lt(f[0]),null)},i(f){l||(O(d,f),l=!0)},o(f){$(d,f),l=!1},d(f){f&&v(e),d&&d.d(f)}}}function Eo(n,e,t){let{$$slots:r={},$$scope:o}=e;return n.$$set=i=>{"$$scope"in i&&t(0,o=i.$$scope)},[o,r]}class hn extends ne{constructor(e){super(),re(this,e,Eo,Po,ee,{})}}function Dt(n,e,t){const r=n.slice();return r[25]=e[t],r}function Ot(n){let e,t;return e=new ut({props:{createAppCode:n[15](),runtimeSettings:n[12]()}}),{c(){H(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,o){q(e,r,o),t=!0},p:U,i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){$(e.$$.fragment,r),t=!1},d(r){X(e,r)}}}function jo(n){let e,t=n[2],r,o,i,a=Ot(n);return{c(){e=y("div"),a.c(),this.h()},l(s){e=k(s,"DIV",{width:!0,height:!0,class:!0});var l=j(e);a.l(l),l.forEach(v),this.h()},h(){S(e,"width",r=n[9].codeScreen.widthInMm+"mm"),S(e,"height",o=n[9].codeScreen.heightInMm+"mm"),S(e,"class","screen")},m(s,l){R(s,e,l),a.m(e,null),i=!0},p(s,l){l&4&&ee(t,t=s[2])?(ue(),$(a,1,1,U),de(),a=Ot(s),a.c(),O(a,1),a.m(e,null)):a.p(s,l),(!i||l&512&&r!==(r=s[9].codeScreen.widthInMm+"mm"))&&S(e,"width",r),(!i||l&512&&o!==(o=s[9].codeScreen.heightInMm+"mm"))&&S(e,"height",o)},i(s){i||(O(a),i=!0)},o(s){$(a),i=!1},d(s){s&&v(e),a.d(s)}}}function Do(n){let e,t="Restart with state",r,o;return{c(){e=y("button"),e.textContent=t},l(i){e=k(i,"BUTTON",{"data-svelte-h":!0}),W(e)!=="svelte-yq0ny7"&&(e.textContent=t)},m(i,a){R(i,e,a),r||(o=F(e,"click",n[14]),r=!0)},p:U,d(i){i&&v(e),r=!1,o()}}}function Oo(n){let e,t="Restart",r,o;return{c(){e=y("button"),e.textContent=t},l(i){e=k(i,"BUTTON",{"data-svelte-h":!0}),W(e)!=="svelte-37ekpt"&&(e.textContent=t)},m(i,a){R(i,e,a),r||(o=F(e,"click",n[13]),r=!0)},p:U,d(i){i&&v(e),r=!1,o()}}}function $t(n){let e,t=n[25]+"",r,o,i,a,s;function l(){return n[17](n[25])}return{c(){e=y("button"),r=ie(t),o=V(),this.h()},l(h){e=k(h,"BUTTON",{});var d=j(e);r=se(d,t),o=B(d),d.forEach(v),this.h()},h(){e.disabled=i=n[5]==n[25]},m(h,d){R(h,e,d),g(e,r),g(e,o),a||(s=F(e,"click",l),a=!0)},p(h,d){n=h,d&32&&i!==(i=n[5]==n[25])&&(e.disabled=i)},d(h){h&&v(e),a=!1,s()}}}function $o(n){let e,t;return e=new Xn({props:{iconAsSvgString:n[4]}}),{c(){H(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,o){q(e,r,o),t=!0},p(r,o){const i={};o&16&&(i.iconAsSvgString=r[4]),e.$set(i)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){$(e.$$.fragment,r),t=!1},d(r){X(e,r)}}}function Vo(n){let e,t;return e=new Fn({props:{loggedItems:n[6]}}),{c(){H(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,o){q(e,r,o),t=!0},p(r,o){const i={};o&64&&(i.loggedItems=r[6]),e.$set(i)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){$(e.$$.fragment,r),t=!1},d(r){X(e,r)}}}function Bo(n){let e,t;return e=new Yn({props:{items:n[11]}}),{c(){H(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,o){q(e,r,o),t=!0},p:U,i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){$(e.$$.fragment,r),t=!1},d(r){X(e,r)}}}function Ro(n){let e,t,r={pageId:n[1],monaco:n[24],state:n[3],onEditorModeChanged:n[18]};return e=new ar({props:r}),n[19](e),{c(){H(e.$$.fragment)},l(o){G(e.$$.fragment,o)},m(o,i){q(e,o,i),t=!0},p(o,i){const a={};i&2&&(a.pageId=o[1]),i&16777216&&(a.monaco=o[24]),i&8&&(a.state=o[3]),i&256&&(a.onEditorModeChanged=o[18]),e.$set(a)},i(o){t||(O(e.$$.fragment,o),t=!0)},o(o){$(e.$$.fragment,o),t=!1},d(o){n[19](null),X(e,o)}}}function No(n){let e,t,r,o,i,a,s,l,h,d,f,w,b,I,P,c;o=new hn({props:{$$slots:{default:[jo]},$$scope:{ctx:n}}});function u(T,E){if(T[8]=="code")return Oo;if(T[8]=="state")return Do}let p=u(n),m=p&&p(n),_=oe(n[10]),M=[];for(let T=0;T<_.length;T+=1)M[T]=$t(Dt(n,_,T));const N=[Bo,Vo,$o],C=[];function D(T,E){return T[5]=="Menu"?0:T[5]=="Log"?1:T[5]=="Icon"?2:-1}return~(f=D(n))&&(w=C[f]=N[f](n)),P=new ln({props:{$$slots:{default:[Ro,({monaco:T})=>({24:T}),({monaco:T})=>T?16777216:0]},$$scope:{ctx:n}}}),{c(){e=y("div"),t=y("div"),r=y("div"),H(o.$$.fragment),i=V(),a=y("div"),m&&m.c(),s=V(),l=y("div"),h=y("div");for(let T=0;T<M.length;T+=1)M[T].c();d=V(),w&&w.c(),b=V(),I=y("div"),H(P.$$.fragment),this.h()},l(T){e=k(T,"DIV",{class:!0});var E=j(e);t=k(E,"DIV",{class:!0});var A=j(t);r=k(A,"DIV",{class:!0});var K=j(r);G(o.$$.fragment,K),K.forEach(v),i=B(A),a=k(A,"DIV",{class:!0});var te=j(a);m&&m.l(te),te.forEach(v),A.forEach(v),s=B(E),l=k(E,"DIV",{class:!0});var x=j(l);h=k(x,"DIV",{class:!0});var z=j(h);for(let ae=0;ae<M.length;ae+=1)M[ae].l(z);z.forEach(v),d=B(x),w&&w.l(x),x.forEach(v),b=B(E),I=k(E,"DIV",{class:!0});var Z=j(I);G(P.$$.fragment,Z),Z.forEach(v),E.forEach(v),this.h()},h(){S(r,"class","app-component"),S(a,"class","preview-buttons"),S(t,"class","preview-child"),S(h,"class","tab-names"),S(l,"class","secondary-child"),S(I,"class","code-editor-child"),S(e,"class","edit-page-modal svelte-etex8l")},m(T,E){R(T,e,E),g(e,t),g(t,r),q(o,r,null),g(t,i),g(t,a),m&&m.m(a,null),g(e,s),g(e,l),g(l,h);for(let A=0;A<M.length;A+=1)M[A]&&M[A].m(h,null);g(l,d),~f&&C[f].m(l,null),g(e,b),g(e,I),q(P,I,null),c=!0},p(T,E){const A={};if(E&268435972&&(A.$$scope={dirty:E,ctx:T}),o.$set(A),p===(p=u(T))&&m?m.p(T,E):(m&&m.d(1),m=p&&p(T),m&&(m.c(),m.m(a,null))),E&1056){_=oe(T[10]);let x;for(x=0;x<_.length;x+=1){const z=Dt(T,_,x);M[x]?M[x].p(z,E):(M[x]=$t(z),M[x].c(),M[x].m(h,null))}for(;x<M.length;x+=1)M[x].d(1);M.length=_.length}let K=f;f=D(T),f===K?~f&&C[f].p(T,E):(w&&(ue(),$(C[K],1,1,()=>{C[K]=null}),de()),~f?(w=C[f],w?w.p(T,E):(w=C[f]=N[f](T),w.c()),O(w,1),w.m(l,null)):w=null);const te={};E&285213066&&(te.$$scope={dirty:E,ctx:T}),P.$set(te)},i(T){c||(O(o.$$.fragment,T),O(w),O(P.$$.fragment,T),c=!0)},o(T){$(o.$$.fragment,T),$(w),$(P.$$.fragment,T),c=!1},d(T){T&&v(e),X(o),m&&m.d(),Ge(M,T),~f&&C[f].d(),X(P)}}}function Fo(n){let e,t,r;function o(a){n[20](a)}let i={$$slots:{default:[No]},$$scope:{ctx:n}};return n[0]!==void 0&&(i.showModal=n[0]),e=new Ne({props:i}),me.push(()=>_e(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){G(e.$$.fragment,a)},m(a,s){q(e,a,s),r=!0},p(a,[s]){const l={};s&268436478&&(l.$$scope={dirty:s,ctx:a}),!t&&s&1&&(t=!0,l.showModal=a[0],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){$(e.$$.fragment,a),r=!1},d(a){X(e,a)}}}function Lo(n,e,t){let r,o,i,a;Y(n,he,A=>t(16,o=A)),Y(n,ke,A=>t(23,i=A)),Y(n,ye,A=>t(9,a=A));let{showModal:s}=e,{pageId:l}=e,h=Math.random(),d,f="";const w=["Menu","Log","Icon"];let b=w[0],I=[],P=null,c="";const u=[{text:"Delete",onClick(){if(!confirm("Do you really want to delete this page?"))return;const A=o.findIndex(K=>K.id==l);o.splice(A,1),he.set(o),t(0,s=!1)}},{text:"Close",onClick(){t(0,s=!1)}}],p={onStateChange(A){t(3,d=A)},onLog(A,K){I.push({type:A,value:K}),t(6,I)},onError(A){I.push({type:"error",value:A}),t(6,I)},onIconCreated(A){t(4,f=A)},state:null,version:1};function m(){return p}async function _(){t(6,I=[]),await new Promise(A=>setTimeout(A,1)),p.state=null,p.version=1,P.save(),t(2,h=Math.random()),t(3,d=null),t(4,f="")}async function M(){t(6,I=[]),await new Promise(te=>setTimeout(te,1)),p.state=P.getModifiedState();const A=d.version,K=p.state.version;A!=K&&(p.state.version=A,p.version=K),t(2,h=Math.random()),t(3,d=null),t(4,f="")}function N(){return Be(i,o,r)}const C=A=>t(5,b=A),D=A=>t(8,c=A);function T(A){me[A?"unshift":"push"](()=>{P=A,t(7,P)})}function E(A){s=A,t(0,s)}return n.$$set=A=>{"showModal"in A&&t(0,s=A.showModal),"pageId"in A&&t(1,l=A.pageId)},n.$$.update=()=>{n.$$.dirty&65538&&(r=o.find(A=>A.id==l))},[s,l,h,d,f,b,I,P,c,a,w,u,m,_,M,N,o,C,D,T,E]}class Uo extends ne{constructor(e){super(),re(this,e,Lo,Fo,ee,{showModal:0,pageId:1})}}function Vt(n){let e,t;return e=new ut({props:{createAppCode:Be(n[4],n[3],{code:n[1].code})}}),{c(){H(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,o){q(e,r,o),t=!0},p(r,o){const i={};o&26&&(i.createAppCode=Be(r[4],r[3],{code:r[1].code})),e.$set(i)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){$(e.$$.fragment,r),t=!1},d(r){X(e,r)}}}function Yo(n){let e,t=n[2],r=`${n[5].codeScreen.widthInMm}mm`,o=`${n[5].codeScreen.heightInMm}mm`,i,a=Vt(n);return{c(){e=y("div"),a.c(),this.h()},l(s){e=k(s,"DIV",{class:!0});var l=j(e);a.l(l),l.forEach(v),this.h()},h(){S(e,"class","screen svelte-31ck6x"),L(e,"width",r),L(e,"height",o)},m(s,l){R(s,e,l),a.m(e,null),i=!0},p(s,l){l&4&&ee(t,t=s[2])?(ue(),$(a,1,1,U),de(),a=Vt(s),a.c(),O(a,1),a.m(e,null)):a.p(s,l),l&32&&r!==(r=`${s[5].codeScreen.widthInMm}mm`)&&L(e,"width",r),l&32&&o!==(o=`${s[5].codeScreen.heightInMm}mm`)&&L(e,"height",o)},i(s){i||(O(a),i=!0)},o(s){$(a),i=!1},d(s){s&&v(e),a.d(s)}}}function zo(n){let e,t,r,o;return{c(){e=y("div"),this.h()},l(i){e=k(i,"DIV",{style:!0}),j(e).forEach(v),this.h()},h(){L(e,"height","100%")},m(i,a){R(i,e,a),r||(o=He(t=n[8].call(null,e,n[14])),r=!0)},p(i,a){t&&Qe(t.update)&&a&16384&&t.update.call(null,i[14])},d(i){i&&v(e),r=!1,o()}}}function Ho(n){let e,t,r,o,i,a,s,l="Restart",h,d,f,w="Menu",b,I,P="Save and close",c,u,p="Delete this page template",m,_,M,N,C,D;return o=new hn({props:{$$slots:{default:[Yo]},$$scope:{ctx:n}}}),M=new ln({props:{$$slots:{default:[zo,({monaco:T})=>({14:T}),({monaco:T})=>T?16384:0]},$$scope:{ctx:n}}}),{c(){e=y("div"),t=y("div"),r=y("div"),H(o.$$.fragment),i=V(),a=y("div"),s=y("button"),s.textContent=l,h=V(),d=y("div"),f=y("h2"),f.textContent=w,b=V(),I=y("button"),I.textContent=P,c=V(),u=y("button"),u.textContent=p,m=V(),_=y("div"),H(M.$$.fragment),this.h()},l(T){e=k(T,"DIV",{class:!0});var E=j(e);t=k(E,"DIV",{class:!0});var A=j(t);r=k(A,"DIV",{class:!0});var K=j(r);G(o.$$.fragment,K),K.forEach(v),i=B(A),a=k(A,"DIV",{class:!0});var te=j(a);s=k(te,"BUTTON",{"data-svelte-h":!0}),W(s)!=="svelte-5snrhj"&&(s.textContent=l),te.forEach(v),A.forEach(v),h=B(E),d=k(E,"DIV",{class:!0});var x=j(d);f=k(x,"H2",{"data-svelte-h":!0}),W(f)!=="svelte-1k9wpi9"&&(f.textContent=w),b=B(x),I=k(x,"BUTTON",{"data-svelte-h":!0}),W(I)!=="svelte-cvu16r"&&(I.textContent=P),c=B(x),u=k(x,"BUTTON",{"data-svelte-h":!0}),W(u)!=="svelte-19vawev"&&(u.textContent=p),x.forEach(v),m=B(E),_=k(E,"DIV",{class:!0});var z=j(_);G(M.$$.fragment,z),z.forEach(v),E.forEach(v),this.h()},h(){S(r,"class","app-component"),S(a,"class","preview-buttons svelte-31ck6x"),S(t,"class","preview-section svelte-31ck6x"),S(d,"class","menu svelte-31ck6x"),S(_,"class","code-editor svelte-31ck6x"),S(e,"class","edit-page-template-modal svelte-31ck6x")},m(T,E){R(T,e,E),g(e,t),g(t,r),q(o,r,null),g(t,i),g(t,a),g(a,s),g(e,h),g(e,d),g(d,f),g(d,b),g(d,I),g(d,c),g(d,u),g(e,m),g(e,_),q(M,_,null),N=!0,C||(D=[F(s,"click",n[6]),F(I,"click",n[10]),F(u,"click",n[7])],C=!0)},p(T,E){const A={};E&32830&&(A.$$scope={dirty:E,ctx:T}),o.$set(A);const K={};E&49152&&(K.$$scope={dirty:E,ctx:T}),M.$set(K)},i(T){N||(O(o.$$.fragment,T),O(M.$$.fragment,T),N=!0)},o(T){$(o.$$.fragment,T),$(M.$$.fragment,T),N=!1},d(T){T&&v(e),X(o),X(M),C=!1,Ce(D)}}}function Go(n){let e,t,r;function o(a){n[11](a)}let i={$$slots:{default:[Ho]},$$scope:{ctx:n}};return n[0]!==void 0&&(i.showModal=n[0]),e=new Ne({props:i}),me.push(()=>_e(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){G(e.$$.fragment,a)},m(a,s){q(e,a,s),r=!0},p(a,[s]){const l={};s&32831&&(l.$$scope={dirty:s,ctx:a}),!t&&s&1&&(t=!0,l.showModal=a[0],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){$(e.$$.fragment,a),r=!1},d(a){X(e,a)}}}function qo(n,e,t){let r,o,i,a;Y(n,he,u=>t(3,r=u)),Y(n,ke,u=>t(4,o=u)),Y(n,Ee,u=>t(13,i=u)),Y(n,ye,u=>t(5,a=u));let{showModal:s}=e,{pageTemplateId:l}=e;const h=i.find(u=>u.id==l);let d,f=0;function w(){const u=d.getValue();t(1,h.code=u,h),Ee.set(i),t(2,f+=1)}function b(){if(!confirm("Really delete?"))return;const u=i.findIndex(p=>p.id==l);i.splice(u,1),t(0,s=!1)}function I(u,p){const m=[{variable:"p",code:h.code},{variable:"a",code:o.code}].map(C=>({variable:C.variable,monacoClassModel:p.editor.createModel(C.code,"javascript"),monacoVariableModel:p.editor.createModel(`const ${C.variable} = new ${pe(C.code)}()`,"javascript")}));function _(C){const D=m[C],T=pe(D.monacoClassModel.getValue());m[C].monacoVariableModel.setValue(`const ${D.variable} = new ${T}();`)}for(let C=0;C<m.length;C++){const D=m[C];_(C),D.monacoClassModel.onDidChangeContent(T=>{_(C)})}const M=r.map(C=>pe(C.code)),N=p.editor.createModel(M.map(C=>`class ${C} extends Page{}`).join(`
`),"javascript");return d=p.editor.create(u,{model:m[0].monacoClassModel,minimap:{enabled:!1},fontSize:16,tabSize:2,automaticLayout:!0,scrollBeyondLastLine:!1,renderWhitespace:"all",trimAutoWhitespace:!1,language:"javascript",suggest:{showKeywords:!1}}),{onDestroy(){d.dispose(),N.dispose()}}}ct(w);const P=()=>t(0,s=!1);function c(u){s=u,t(0,s)}return n.$$set=u=>{"showModal"in u&&t(0,s=u.showModal),"pageTemplateId"in u&&t(9,l=u.pageTemplateId)},[s,h,f,r,o,a,w,b,I,l,P,c]}class Xo extends ne{constructor(e){super(),re(this,e,qo,Go,ee,{showModal:0,pageTemplateId:9})}}function Bt(n,e,t){const r=n.slice();return r[16]=e[t],r}function Rt(n,e){let t,r,o,i,a,s,l,h="Edit",d,f,w,b;o=new ut({props:{createAppCode:Be(e[6],e[4],{code:e[16].code},!0)}});function I(){return e[12](e[16])}function P(){return e[13](e[16])}return{key:n,first:null,c(){t=y("div"),r=y("div"),H(o.$$.fragment),i=V(),a=y("div"),s=V(),l=y("button"),l.textContent=h,d=V(),this.h()},l(c){t=k(c,"DIV",{class:!0});var u=j(t);r=k(u,"DIV",{class:!0});var p=j(r);G(o.$$.fragment,p),i=B(p),a=k(p,"DIV",{class:!0}),j(a).forEach(v),p.forEach(v),s=B(u),l=k(u,"BUTTON",{class:!0,"data-svelte-h":!0}),W(l)!=="svelte-eodtwe"&&(l.textContent=h),d=B(u),u.forEach(v),this.h()},h(){S(a,"class","overlay svelte-1dwdo8c"),S(r,"class","page-template svelte-1dwdo8c"),L(r,"width",`${e[5].folderScreen.widthInMm}mm`),L(r,"height",`${e[5].folderScreen.heightInMm}mm`),S(l,"class","edit-page-button svelte-1dwdo8c"),S(t,"class","page-template-box svelte-1dwdo8c"),this.first=t},m(c,u){R(c,t,u),g(t,r),q(o,r,null),g(r,i),g(r,a),g(t,s),g(t,l),g(t,d),f=!0,w||(b=[F(r,"click",Ye(I)),F(l,"click",Ye(P))],w=!0)},p(c,u){e=c;const p={};u&88&&(p.createAppCode=Be(e[6],e[4],{code:e[16].code},!0)),o.$set(p),u&32&&L(r,"width",`${e[5].folderScreen.widthInMm}mm`),u&32&&L(r,"height",`${e[5].folderScreen.heightInMm}mm`)},i(c){f||(O(o.$$.fragment,c),f=!0)},o(c){$(o.$$.fragment,c),f=!1},d(c){c&&v(t),X(o),w=!1,Ce(b)}}}function Wo(n){let e,t,r="Create Page (choose template)",o,i,a=[],s=new Map,l,h,d="Create new page template",f,w,b,I=oe(n[3]);const P=c=>c[16].id;for(let c=0;c<I.length;c+=1){let u=Bt(n,I,c),p=P(u);s.set(p,a[c]=Rt(p,u))}return{c(){e=y("div"),t=y("h1"),t.textContent=r,o=V(),i=y("div");for(let c=0;c<a.length;c+=1)a[c].c();l=V(),h=y("button"),h.textContent=d,this.h()},l(c){e=k(c,"DIV",{class:!0});var u=j(e);t=k(u,"H1",{class:!0,"data-svelte-h":!0}),W(t)!=="svelte-1fbxl57"&&(t.textContent=r),o=B(u),i=k(u,"DIV",{class:!0});var p=j(i);for(let m=0;m<a.length;m+=1)a[m].l(p);p.forEach(v),l=B(u),h=k(u,"BUTTON",{class:!0,"data-svelte-h":!0}),W(h)!=="svelte-wmwgso"&&(h.textContent=d),u.forEach(v),this.h()},h(){S(t,"class","svelte-1dwdo8c"),S(i,"class","page-template-boxes svelte-1dwdo8c"),S(h,"class","new-page-template-button svelte-1dwdo8c"),S(e,"class","create-page-modal svelte-1dwdo8c")},m(c,u){R(c,e,u),g(e,t),g(e,o),g(e,i);for(let p=0;p<a.length;p+=1)a[p]&&a[p].m(i,null);g(e,l),g(e,h),f=!0,w||(b=F(h,"click",n[8]),w=!0)},p(c,u){u&254&&(I=oe(c[3]),ue(),a=Ze(a,u,P,1,c,I,s,i,tn,Rt,null,Bt),de())},i(c){if(!f){for(let u=0;u<I.length;u+=1)O(a[u]);f=!0}},o(c){for(let u=0;u<a.length;u+=1)$(a[u]);f=!1},d(c){c&&v(e);for(let u=0;u<a.length;u+=1)a[u].d();w=!1,b()}}}function Nt(n){let e,t,r;function o(a){n[15](a)}let i={pageTemplateId:n[2]};return n[1]!==void 0&&(i.showModal=n[1]),e=new Xo({props:i}),me.push(()=>_e(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){G(e.$$.fragment,a)},m(a,s){q(e,a,s),r=!0},p(a,s){const l={};s&4&&(l.pageTemplateId=a[2]),!t&&s&2&&(t=!0,l.showModal=a[1],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){$(e.$$.fragment,a),r=!1},d(a){X(e,a)}}}function Ko(n){let e,t,r,o,i;function a(h){n[14](h)}let s={$$slots:{default:[Wo]},$$scope:{ctx:n}};n[0]!==void 0&&(s.showModal=n[0]),e=new Ne({props:s}),me.push(()=>_e(e,"showModal",a));let l=n[1]&&Nt(n);return{c(){H(e.$$.fragment),r=V(),l&&l.c(),o=le()},l(h){G(e.$$.fragment,h),r=B(h),l&&l.l(h),o=le()},m(h,d){q(e,h,d),R(h,r,d),l&&l.m(h,d),R(h,o,d),i=!0},p(h,[d]){const f={};d&524414&&(f.$$scope={dirty:d,ctx:h}),!t&&d&1&&(t=!0,f.showModal=h[0],ve(()=>t=!1)),e.$set(f),h[1]?l?(l.p(h,d),d&2&&O(l,1)):(l=Nt(h),l.c(),O(l,1),l.m(o.parentNode,o)):l&&(ue(),$(l,1,1,()=>{l=null}),de())},i(h){i||(O(e.$$.fragment,h),O(l),i=!0)},o(h){$(e.$$.fragment,h),$(l),i=!1},d(h){h&&(v(r),v(o)),X(e,h),l&&l.d(h)}}}function Jo(n,e,t){let r,o,i,a;Y(n,Ee,m=>t(3,r=m)),Y(n,he,m=>t(4,o=m)),Y(n,ye,m=>t(5,i=m)),Y(n,ke,m=>t(6,a=m));let{showModal:s}=e,{folderId:l}=e,{createAtX:h}=e,{createAtY:d}=e,f=!1,w=-1;function b(m){var D;const _=h,M=d,N=prompt("Enter page name:");if(!N)return;const C=m.code.replace(/class \w+ extends/,`class ${N} extends`);o.push({id:(((D=o.at(-1))==null?void 0:D.id)??0)+1,folderId:l,code:C,x:_,y:M}),he.set(o),t(0,s=!1)}function I(){var _;const m=(((_=r.at(-1))==null?void 0:_.id)??0)+1;r.push({id:m,title:"New Template",code:`
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
			`.trim()}),t(1,f=!0),t(2,w=m)}const P=m=>b(m),c=m=>{t(2,w=m.id),t(1,f=!0)};function u(m){s=m,t(0,s)}function p(m){f=m,t(1,f)}return n.$$set=m=>{"showModal"in m&&t(0,s=m.showModal),"folderId"in m&&t(9,l=m.folderId),"createAtX"in m&&t(10,h=m.createAtX),"createAtY"in m&&t(11,d=m.createAtY)},[s,f,w,r,o,i,a,b,I,l,h,d,P,c,u,p]}class Qo extends ne{constructor(e){super(),re(this,e,Jo,Ko,ee,{showModal:0,folderId:9,createAtX:10,createAtY:11})}}function Zo(n){let e,t,r,o;return{c(){e=y("iframe"),this.h()},l(i){e=k(i,"IFRAME",{title:!0,class:!0}),j(e).forEach(v),this.h()},h(){S(e,"title","Preview of App"),S(e,"class","svelte-cd8oo8")},m(i,a){R(i,e,a),r||(o=He(t=ea.call(null,e,n[0])),r=!0)},p(i,[a]){t&&Qe(t.update)&&a&1&&t.update.call(null,i[0])},i:U,o:U,d(i){i&&v(e),r=!1,o()}}}function ea(n,e){n.addEventListener("load",()=>t(e)),n.srcdoc="";function t(r){const o=n.contentDocument.body;o.style.width="100vw",o.style.height="100vh",o.style.margin="0",o.replaceChildren(r.createElement())}return{update:t}}function ta(n,e,t){let{frameworkApp:r=null}=e;return n.$$set=o=>{"frameworkApp"in o&&t(0,r=o.frameworkApp)},[r]}class na extends ne{constructor(e){super(),re(this,e,ta,Zo,ee,{frameworkApp:0})}}const Ft=new Map,ra={isPreview:!0};function oa(n,e,t){const r=Be(n,e,t,!0),o=Ft.get(r);if(o)return o;const i=new vn(r,ra);return i.start(),Ft.set(r,i),i}function Lt(n,e,t){const r=n.slice();return r[27]=e[t].page,r[28]=e[t].frameworkApp,r}function Ut(n,e,t){const r=n.slice();return r[31]=e[t],r}function Yt(n){let e,t=n[31].text+"",r;return{c(){e=y("div"),r=ie(t),this.h()},l(o){e=k(o,"DIV",{class:!0});var i=j(e);r=se(i,t),i.forEach(v),this.h()},h(){S(e,"class","line svelte-33b36g"),Ve(e,"isBack",n[31].isBack),L(e,"width",`${n[31].length}px`),L(e,"transform",`translate(${n[31].centerX}px, ${n[31].centerY}px) translate(-50%, -50%) rotate(${n[31].angle}deg)`)},m(o,i){R(o,e,i),g(e,r)},p(o,i){i[0]&256&&t!==(t=o[31].text+"")&&je(r,t),i[0]&256&&Ve(e,"isBack",o[31].isBack),i[0]&256&&L(e,"width",`${o[31].length}px`),i[0]&256&&L(e,"transform",`translate(${o[31].centerX}px, ${o[31].centerY}px) translate(-50%, -50%) rotate(${o[31].angle}deg)`)},d(o){o&&v(e)}}}function zt(n,e){let t,r,o=pe(e[27].code)+"",i,a,s,l,h,d,f,w;function b(){return e[19](e[27])}l=new na({props:{frameworkApp:e[28]}});function I(){return e[20](e[27])}function P(...c){return e[21](e[27],...c)}return{key:n,first:null,c(){t=y("div"),r=y("div"),i=ie(o),a=V(),s=y("div"),H(l.$$.fragment),h=V(),this.h()},l(c){t=k(c,"DIV",{class:!0,draggable:!0});var u=j(t);r=k(u,"DIV",{class:!0});var p=j(r);i=se(p,o),p.forEach(v),a=B(u),s=k(u,"DIV",{class:!0});var m=j(s);G(l.$$.fragment,m),m.forEach(v),h=B(u),u.forEach(v),this.h()},h(){S(r,"class","name svelte-33b36g"),S(s,"class","page svelte-33b36g"),S(t,"class","page-container svelte-33b36g"),S(t,"draggable","true"),L(t,"width",`${e[9].folderScreen.widthInMm}mm`),L(t,"height",`${e[9].folderScreen.heightInMm}mm`),L(t,"transform",`translate(${e[27].x}px, ${e[27].y}px) translate(-50%, -50%)`),this.first=t},m(c,u){R(c,t,u),g(t,r),g(r,i),g(t,a),g(t,s),q(l,s,null),g(t,h),d=!0,f||(w=[F(r,"click",Ye(b)),F(s,"click",Ye(I)),F(t,"dragstart",P)],f=!0)},p(c,u){e=c,(!d||u[0]&2)&&o!==(o=pe(e[27].code)+"")&&je(i,o);const p={};u[0]&2&&(p.frameworkApp=e[28]),l.$set(p),u[0]&512&&L(t,"width",`${e[9].folderScreen.widthInMm}mm`),u[0]&512&&L(t,"height",`${e[9].folderScreen.heightInMm}mm`),u[0]&2&&L(t,"transform",`translate(${e[27].x}px, ${e[27].y}px) translate(-50%, -50%)`)},i(c){d||(O(l.$$.fragment,c),d=!0)},o(c){$(l.$$.fragment,c),d=!1},d(c){c&&v(t),X(l),f=!1,Ce(w)}}}function Ht(n){let e,t,r;function o(a){n[22](a)}let i={pageId:n[4]};return n[3]!==void 0&&(i.showModal=n[3]),e=new Uo({props:i}),me.push(()=>_e(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){G(e.$$.fragment,a)},m(a,s){q(e,a,s),r=!0},p(a,s){const l={};s[0]&16&&(l.pageId=a[4]),!t&&s[0]&8&&(t=!0,l.showModal=a[3],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){$(e.$$.fragment,a),r=!1},d(a){X(e,a)}}}function Gt(n){let e,t,r;function o(a){n[23](a)}let i={folderId:n[0],createAtX:n[5]-n[7].offsetX,createAtY:n[6]-n[7].offsetY};return n[2]!==void 0&&(i.showModal=n[2]),e=new Qo({props:i}),me.push(()=>_e(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){G(e.$$.fragment,a)},m(a,s){q(e,a,s),r=!0},p(a,s){const l={};s[0]&1&&(l.folderId=a[0]),s[0]&160&&(l.createAtX=a[5]-a[7].offsetX),s[0]&192&&(l.createAtY=a[6]-a[7].offsetY),!t&&s[0]&4&&(t=!0,l.showModal=a[2],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){$(e.$$.fragment,a),r=!1},d(a){X(e,a)}}}function aa(n){let e,t,r,o=[],i=new Map,a,s,l,h,d,f,w=oe(n[8]),b=[];for(let p=0;p<w.length;p+=1)b[p]=Yt(Ut(n,w,p));let I=oe(n[1]);const P=p=>p[27].id;for(let p=0;p<I.length;p+=1){let m=Lt(n,I,p),_=P(m);i.set(_,o[p]=zt(_,m))}let c=n[3]&&Ht(n),u=n[2]&&Gt(n);return{c(){e=y("div"),t=y("div");for(let p=0;p<b.length;p+=1)b[p].c();r=V();for(let p=0;p<o.length;p+=1)o[p].c();a=V(),c&&c.c(),s=V(),u&&u.c(),l=le(),this.h()},l(p){e=k(p,"DIV",{class:!0,draggable:!0});var m=j(e);t=k(m,"DIV",{class:!0});var _=j(t);for(let M=0;M<b.length;M+=1)b[M].l(_);r=B(_);for(let M=0;M<o.length;M+=1)o[M].l(_);_.forEach(v),m.forEach(v),a=B(p),c&&c.l(p),s=B(p),u&&u.l(p),l=le(),this.h()},h(){S(t,"class","pages svelte-33b36g"),L(t,"transform",`translate(${n[7].offsetX}px, ${n[7].offsetY}px)`),S(e,"class","folder svelte-33b36g"),S(e,"draggable","true"),L(e,"background-position-x",`${n[7].offsetX}px`),L(e,"background-position-y",`${n[7].offsetY}px`)},m(p,m){R(p,e,m),g(e,t);for(let _=0;_<b.length;_+=1)b[_]&&b[_].m(t,null);g(t,r);for(let _=0;_<o.length;_+=1)o[_]&&o[_].m(t,null);R(p,a,m),c&&c.m(p,m),R(p,s,m),u&&u.m(p,m),R(p,l,m),h=!0,d||(f=[F(e,"click",n[14]),F(e,"dragstart",n[10]),F(e,"dragover",dt(n[11])),F(e,"drop",dt(n[13]))],d=!0)},p(p,m){if(m[0]&256){w=oe(p[8]);let _;for(_=0;_<w.length;_+=1){const M=Ut(p,w,_);b[_]?b[_].p(M,m):(b[_]=Yt(M),b[_].c(),b[_].m(t,r))}for(;_<b.length;_+=1)b[_].d(1);b.length=w.length}m[0]&4634&&(I=oe(p[1]),ue(),o=Ze(o,m,P,1,p,I,i,t,tn,zt,null,Lt),de()),m[0]&128&&L(t,"transform",`translate(${p[7].offsetX}px, ${p[7].offsetY}px)`),m[0]&128&&L(e,"background-position-x",`${p[7].offsetX}px`),m[0]&128&&L(e,"background-position-y",`${p[7].offsetY}px`),p[3]?c?(c.p(p,m),m[0]&8&&O(c,1)):(c=Ht(p),c.c(),O(c,1),c.m(s.parentNode,s)):c&&(ue(),$(c,1,1,()=>{c=null}),de()),p[2]?u?(u.p(p,m),m[0]&4&&O(u,1)):(u=Gt(p),u.c(),O(u,1),u.m(l.parentNode,l)):u&&(ue(),$(u,1,1,()=>{u=null}),de())},i(p){if(!h){for(let m=0;m<I.length;m+=1)O(o[m]);O(c),O(u),h=!0}},o(p){for(let m=0;m<o.length;m+=1)$(o[m]);$(c),$(u),h=!1},d(p){p&&(v(e),v(a),v(s),v(l)),Ge(b,p);for(let m=0;m<o.length;m+=1)o[m].d();c&&c.d(p),u&&u.d(p),d=!1,Ce(f)}}}const ia=50;function sa(n){navigator.clipboard.writeText(n)}function la(n,e,t){let r,o,i,a,s,l,h,d;Y(n,he,x=>t(16,s=x)),Y(n,Me,x=>t(17,l=x)),Y(n,ke,x=>t(18,h=x)),Y(n,ye,x=>t(9,d=x));let{folderId:f}=e,w=!1,b=!1,I=-1,P=-1,c=-1,u=null;function p(x,z){return z.map(Z=>{const ae=oa(x,s,Z);return{page:Z,frameworkApp:ae}})}function m(x){var Z;const z=[];for(const ae of x){const we=(Z=ae.frameworkApp)==null?void 0:Z.frameworkPage;if(!we)continue;const De=ae.page.x,ge=ae.page.y,Fe=[].concat(we.beforeDirections,we.afterDirections);for(const ce of Fe){const Oe=x.find(Ae=>ce.getPage().proxyName==pe(Ae.page.code));if(Oe){const Ae=Oe.page.x,Xe=Oe.page.y,J=Ae-De,Q=Xe-ge,be=Math.sqrt(J**2+Q**2),$e=De+J/2;if(0<=J){const Pe=Math.atan2(Q,J)*180/Math.PI,fe=ge+Q/2;z.push({length:be,angle:Pe,centerX:$e,centerY:fe,text:ce.getDescription(),isBack:!1})}else{const Pe=Math.atan2(Q,J)*180/Math.PI+180,fe=ge+Q/2+ia;z.push({length:be,angle:Pe,centerX:$e,centerY:fe,text:ce.getDescription(),isBack:!0})}}}}return z}function _(x){u={action:"moveBackground",initialFolderOffsetX:r.offsetX,initialFolderOffsetY:r.offsetY,startMouseX:x.clientX,startMouseY:x.clientY};const z=document.createElement("img");z.style.display="none",x.dataTransfer.setDragImage(z,0,0)}function M(x){switch(u.action){case"moveBackground":const z=x.clientX-u.startMouseX,Z=x.clientY-u.startMouseY;t(7,r.offsetX=u.initialFolderOffsetX+z,r),t(7,r.offsetY=u.initialFolderOffsetY+Z,r),Me.set(l);break}}function N(x,z){x.stopPropagation(),u={action:"movePage",pageId:z.id,startMouseX:x.clientX,startMouseY:x.clientY}}function C(x){switch(u.action){case"movePage":const z=x.clientX-u.startMouseX,Z=x.clientY-u.startMouseY,ae=s.find(we=>we.id==u.pageId);ae.x+=z,ae.y+=Z,he.set(s);break}}function D(x){t(4,I=-1),t(2,w=!0),t(5,P=x.clientX),t(6,c=x.clientY)}const T=x=>sa(pe(x.code)),E=x=>{t(3,b=!0),t(4,I=x.id)},A=(x,z)=>N(z,x);function K(x){b=x,t(3,b)}function te(x){w=x,t(2,w)}return n.$$set=x=>{"folderId"in x&&t(0,f=x.folderId)},n.$$.update=()=>{n.$$.dirty[0]&131073&&t(7,r=l.find(x=>x.id==f)??l[0]),n.$$.dirty[0]&65537&&t(15,o=s.filter(x=>x.folderId==f)),n.$$.dirty[0]&294912&&t(1,i=p(h,o)),n.$$.dirty[0]&2&&t(8,a=m(i))},[f,i,w,b,I,P,c,r,a,d,_,M,N,C,D,o,s,l,h,T,E,A,K,te]}class ha extends ne{constructor(e){super(),re(this,e,la,aa,ee,{folderId:0},null,[-1,-1])}}function qt(n,e,t){const r=n.slice();return r[10]=e[t],r}function Xt(n,e){let t,r=e[10].name+"",o,i,a;function s(){return e[6](e[10])}return{key:n,first:null,c(){t=y("button"),o=ie(r),this.h()},l(l){t=k(l,"BUTTON",{class:!0});var h=j(t);o=se(h,r),h.forEach(v),this.h()},h(){S(t,"class","svelte-q0xr25"),Ve(t,"current",e[1]==e[10].id),this.first=t},m(l,h){R(l,t,h),g(t,o),i||(a=F(t,"click",s),i=!0)},p(l,h){e=l,h&4&&r!==(r=e[10].name+"")&&je(o,r),h&6&&Ve(t,"current",e[1]==e[10].id)},d(l){l&&v(t),i=!1,a()}}}function Wt(n){let e,t,r;function o(a){n[8](a)}let i={options:n[0]};return n[3]!==void 0&&(i.showModal=n[3]),e=new En({props:i}),me.push(()=>_e(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){G(e.$$.fragment,a)},m(a,s){q(e,a,s),r=!0},p(a,s){const l={};s&1&&(l.options=a[0]),!t&&s&8&&(t=!0,l.showModal=a[3],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){$(e.$$.fragment,a),r=!1},d(a){X(e,a)}}}function Kt(n){let e,t,r;function o(a){n[9](a)}let i={folderId:n[1]};return n[4]!==void 0&&(i.showModal=n[4]),e=new $n({props:i}),me.push(()=>_e(e,"showModal",o)),{c(){H(e.$$.fragment)},l(a){G(e.$$.fragment,a)},m(a,s){q(e,a,s),r=!0},p(a,s){const l={};s&2&&(l.folderId=a[1]),!t&&s&16&&(t=!0,l.showModal=a[4],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){$(e.$$.fragment,a),r=!1},d(a){X(e,a)}}}function ca(n){let e,t,r,o,i,a,s=[],l=new Map,h,d,f="+",w,b,I="☰",P,c,u,p,m,_;r=new ha({props:{folderId:n[1]}});let M=oe(n[2]);const N=T=>T[10].id;for(let T=0;T<M.length;T+=1){let E=qt(n,M,T),A=N(E);l.set(A,s[T]=Xt(A,E))}let C=n[3]&&Wt(n),D=n[4]&&Kt(n);return{c(){e=y("div"),t=y("div"),H(r.$$.fragment),o=V(),i=y("div"),a=y("div");for(let T=0;T<s.length;T+=1)s[T].c();h=V(),d=y("button"),d.textContent=f,w=V(),b=y("button"),b.textContent=I,P=V(),C&&C.c(),c=V(),D&&D.c(),u=le(),this.h()},l(T){e=k(T,"DIV",{class:!0});var E=j(e);t=k(E,"DIV",{class:!0});var A=j(t);G(r.$$.fragment,A),A.forEach(v),o=B(E),i=k(E,"DIV",{class:!0});var K=j(i);a=k(K,"DIV",{class:!0});var te=j(a);for(let x=0;x<s.length;x+=1)s[x].l(te);h=B(te),d=k(te,"BUTTON",{class:!0,"data-svelte-h":!0}),W(d)!=="svelte-1hnfxpo"&&(d.textContent=f),te.forEach(v),K.forEach(v),w=B(E),b=k(E,"BUTTON",{class:!0,"data-svelte-h":!0}),W(b)!=="svelte-1x767tg"&&(b.textContent=I),E.forEach(v),P=B(T),C&&C.l(T),c=B(T),D&&D.l(T),u=le(),this.h()},h(){S(t,"class","folder svelte-q0xr25"),S(d,"class","create-folder svelte-q0xr25"),S(a,"class","folder-titles svelte-q0xr25"),S(i,"class","header svelte-q0xr25"),S(b,"class","main-menu-button svelte-q0xr25"),S(e,"class","app svelte-q0xr25")},m(T,E){R(T,e,E),g(e,t),q(r,t,null),g(e,o),g(e,i),g(i,a);for(let A=0;A<s.length;A+=1)s[A]&&s[A].m(a,null);g(a,h),g(a,d),g(e,w),g(e,b),R(T,P,E),C&&C.m(T,E),R(T,c,E),D&&D.m(T,E),R(T,u,E),p=!0,m||(_=[F(d,"click",n[5]),F(b,"click",n[7])],m=!0)},p(T,[E]){const A={};E&2&&(A.folderId=T[1]),r.$set(A),E&22&&(M=oe(T[2]),s=Ze(s,E,N,1,T,M,l,a,en,Xt,h,qt)),T[3]?C?(C.p(T,E),E&8&&O(C,1)):(C=Wt(T),C.c(),O(C,1),C.m(c.parentNode,c)):C&&(ue(),$(C,1,1,()=>{C=null}),de()),T[4]?D?(D.p(T,E),E&16&&O(D,1)):(D=Kt(T),D.c(),O(D,1),D.m(u.parentNode,u)):D&&(ue(),$(D,1,1,()=>{D=null}),de())},i(T){p||(O(r.$$.fragment,T),O(C),O(D),p=!0)},o(T){$(r.$$.fragment,T),$(C),$(D),p=!1},d(T){T&&(v(e),v(P),v(c),v(u)),X(r);for(let E=0;E<s.length;E+=1)s[E].d();C&&C.d(T),D&&D.d(T),m=!1,Ce(_)}}}function ua(n,e,t){let r;Y(n,Me,b=>t(2,r=b));let{mainMenuOptions:o={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[]}}=e,i=r[0].id,a=!1,s=!1;function l(){const b=r.at(-1).id+1;r.push({id:b,name:"New folder",offsetX:0,offsetY:0}),Me.set(r),t(1,i=b),t(4,s=!0)}const h=b=>{i==b.id?t(4,s=!0):t(1,i=b.id)},d=()=>t(3,a=!0);function f(b){a=b,t(3,a)}function w(b){s=b,t(4,s)}return n.$$set=b=>{"mainMenuOptions"in b&&t(0,o=b.mainMenuOptions)},n.$$.update=()=>{n.$$.dirty&6&&(r.find(b=>b.id==i)||t(1,i=r[0].id))},[o,i,r,a,s,l,h,d,f,w]}class da extends ne{constructor(e){super(),re(this,e,ua,ca,ee,{mainMenuOptions:0})}}const Le={editorSettings:{codeScreen:{widthInMm:40*1.5,heightInMm:66*1.5},folderScreen:{widthInMm:40,heightInMm:66}},app:{code:`
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
		`.trim()}]};function Jt(n){let e,t;return e=new da({props:{mainMenuOptions:n[0]}}),{c(){H(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,o){q(e,r,o),t=!0},p(r,o){const i={};o&1&&(i.mainMenuOptions=r[0]),e.$set(i)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){$(e.$$.fragment,r),t=!1},d(r){X(e,r)}}}function ma(n){let e,t,r=n[1]&&Jt(n);return{c(){r&&r.c(),e=le()},l(o){r&&r.l(o),e=le()},m(o,i){r&&r.m(o,i),R(o,e,i),t=!0},p(o,[i]){o[1]?r?(r.p(o,i),i&2&&O(r,1)):(r=Jt(o),r.c(),O(r,1),r.m(e.parentNode,e)):r&&(ue(),$(r,1,1,()=>{r=null}),de())},i(o){t||(O(r),t=!0)},o(o){$(r),t=!1},d(o){o&&v(e),r&&r.d(o)}}}function fa(n,e,t){let r,o,i,a,s;Y(n,Ee,f=>t(3,r=f)),Y(n,he,f=>t(4,o=f)),Y(n,Me,f=>t(5,i=f)),Y(n,ke,f=>t(6,a=f)),Y(n,ye,f=>t(7,s=f));let{mainMenuOptions:l={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[]}}=e,{bagaCode:h=""}=e,d=!1;return Zt(()=>{let f,w,b,I,P;if(h!="")try{const c=nn(h);f=c.editorSettings,w=c.app,b=c.folders,I=c.pages,P=c.pageTemplates}catch(c){console.log(c),alert("The baga code given to the editor is invalid. The default project will be loaded instead.")}Te(ye,s=f??Le.editorSettings,s),Te(ke,a=w??Le.app,a),Te(Me,i=b??Le.folders,i),Te(he,o=I??Le.pages,o),Te(Ee,r=P??Le.pageTemplates,r),t(1,d=!0)}),n.$$set=f=>{"mainMenuOptions"in f&&t(0,l=f.mainMenuOptions),"bagaCode"in f&&t(2,h=f.bagaCode)},[l,d,h]}class pa extends ne{constructor(e){super(),re(this,e,fa,ma,ee,{mainMenuOptions:0,bagaCode:2})}}function Qt(n){let e,t;return e=new pa({props:{bagaCode:n[0],mainMenuOptions:n[3]}}),{c(){H(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,o){q(e,r,o),t=!0},p(r,o){const i={};o&1&&(i.bagaCode=r[0]),e.$set(i)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){$(e.$$.fragment,r),t=!1},d(r){X(e,r)}}}function ga(n){let e,t,r,o,i=n[1]&&Qt(n);return{c(){e=y("meta"),t=V(),i&&i.c(),r=le(),this.h()},l(a){const s=wn("svelte-10aecs7",document.head);e=k(s,"META",{"http-equiv":!0,content:!0}),s.forEach(v),t=B(a),i&&i.l(a),r=le(),this.h()},h(){S(e,"http-equiv","Content-Security-Policy"),S(e,"content",n[2])},m(a,s){g(document.head,e),R(a,t,s),i&&i.m(a,s),R(a,r,s),o=!0},p(a,[s]){a[1]?i?(i.p(a,s),s&2&&O(i,1)):(i=Qt(a),i.c(),O(i,1),i.m(r.parentNode,r)):i&&(ue(),$(i,1,1,()=>{i=null}),de())},i(a){o||(O(i),o=!0)},o(a){$(i),o=!1},d(a){a&&(v(t),v(r)),v(e),i&&i.d(a)}}}function ba(n,e,t){const r=["default-src 'none';","form-action 'none';","connect-src 'none';","img-src * data:;","script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net blob:;","style-src-attr 'self' 'unsafe-inline';","style-src-elem 'self' 'unsafe-inline' https://cdn.jsdelivr.net;","font-src https://cdn.jsdelivr.net;"].join(" "),o={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[{text:"Copy link to run app",onClick(s){const l=`https://bagawork.com/run#${s}`;navigator.clipboard.writeText(l)}}]};let i="",a=!1;return Zt(()=>{t(0,i=location.hash.substring("#".length)),t(1,a=!0)}),[i,a,r,o]}class Ca extends ne{constructor(e){super(),re(this,e,ba,ga,ee,{})}}export{Ca as component};
