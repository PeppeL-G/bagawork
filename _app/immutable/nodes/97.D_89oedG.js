import{z as hn,A as cn,v as We,l as un,s as te,c as Wt,u as Kt,g as Jt,b as Qt,f as fe,B as ve,d as H,r as Ce,C as Te,n as z,j as dn,a as He,i as Qe,h as mn,D as it,o as Zt}from"../chunks/scheduler.B0TnBjPs.js";import{z as de,k as B,y as me,t as O,S as ne,i as re,e as k,a as I,d as D,h as v,o as x,j as $,C as Y,F as Ye,G as _e,c as G,f as X,m as q,l as W,I as Se,s as R,q as ie,g as K,b as N,r as se,u as F,p as w,B as Ie,w as le,x as Ge,v as je,E as Be,J as fn,H as pn,n as gn,K as lt,D as bn}from"../chunks/index.BXVnRmkj.js";import{e as oe,u as Ze,d as en,o as tn}from"../chunks/each.BaX_zf8z.js";import{a as ge,g as Re,F as wn}from"../chunks/get-create-app-code.CuanTleS.js";import{w as Ne}from"../chunks/index.CBcONjAz.js";import{a as rt,g as nn}from"../chunks/project-compressor.Cxxezr6y.js";import{V as st}from"../chunks/ViewApp.OVBHuwAC.js";import"../chunks/index.DmsWz_j8.js";function vn(n,e){const t=e.token={};function r(o,i,a,s){if(e.token!==t)return;e.resolved=s;let l=e.ctx;a!==void 0&&(l=l.slice(),l[a]=s);const h=o&&(e.current=o)(l);let d=!1;e.block&&(e.blocks?e.blocks.forEach((p,_)=>{_!==i&&p&&(de(),B(p,1,1,()=>{e.blocks[_]===p&&(e.blocks[_]=null)}),me())}):e.block.d(1),h.c(),O(h,1),h.m(e.mount(),e.anchor),d=!0),e.block=h,e.blocks&&(e.blocks[i]=h),d&&un()}if(hn(n)){const o=cn();if(n.then(i=>{We(o),r(e.then,1,e.value,i),We(null)},i=>{if(We(o),r(e.catch,2,e.error,i),We(null),!e.hasCatch)throw i}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,n),!0;e.resolved=n}}function _n(n,e,t){const r=e.slice(),{resolved:o}=n;n.current===n.then&&(r[n.value]=o),n.current===n.catch&&(r[n.error]=o),n.block.p(r,t)}function Tn(n){let e,t,r,o;const i=n[3].default,a=Wt(i,n,n[2],null);return{c(){e=k("div"),a&&a.c(),this.h()},l(s){e=I(s,"DIV",{class:!0});var l=D(e);a&&a.l(l),l.forEach(v),this.h()},h(){x(e,"class","modal svelte-pjkfh")},m(s,l){$(s,e,l),a&&a.m(e,null),t=!0,r||(o=Y(e,"click",Ye(n[0])),r=!0)},p(s,[l]){a&&a.p&&(!t||l&4)&&Kt(a,i,s,s[2],t?Qt(i,s[2],l,null):Jt(s[2]),null)},i(s){t||(O(a,s),t=!0)},o(s){B(a,s),t=!1},d(s){s&&v(e),a&&a.d(s),r=!1,o()}}}function yn(n,e,t){let{$$slots:r={},$$scope:o}=e,{showModal:i}=e;function a(s){s.target==s.currentTarget&&t(1,i=!1)}return n.$$set=s=>{"showModal"in s&&t(1,i=s.showModal),"$$scope"in s&&t(2,o=s.$$scope)},[a,i,o,r]}class $e extends ne{constructor(e){super(),re(this,e,yn,Tn,te,{showModal:1})}}const ye=Ne({}),ke=Ne({}),Me=Ne([]),he=Ne([]),Ee=Ne([]);function kn(n){let e,t,r="Edit settings",o,i,a,s="Folder screen",l,h,d="The size of the preview screens on the folder page, and when selecting a page template.",p,_,g,y,A,u,c,f,m,b,S="Preview folder screen size",V,C,P,j="Code screen",T,M,L="The size of the preview screen on the pages where you edit code.",ee,E,U,J,ce,ae,De,be,Fe,ue,Oe="Preview code screen size",Ae,qe;return{c(){e=k("div"),t=k("h1"),t.textContent=r,o=R(),i=k("div"),a=k("h2"),a.textContent=s,l=R(),h=k("p"),h.textContent=d,p=R(),_=k("div"),g=ie(`Width in mm:
				`),y=k("input"),A=R(),u=k("div"),c=ie(`Height in mm:
				`),f=k("input"),m=R(),b=k("div"),b.textContent=S,V=R(),C=k("div"),P=k("h2"),P.textContent=j,T=R(),M=k("p"),M.textContent=L,ee=R(),E=k("div"),U=ie(`Width in mm:
				`),J=k("input"),ce=R(),ae=k("div"),De=ie(`Height in mm:
				`),be=k("input"),Fe=R(),ue=k("div"),ue.textContent=Oe,this.h()},l(Q){e=I(Q,"DIV",{class:!0});var Z=D(e);t=I(Z,"H1",{"data-svelte-h":!0}),K(t)!=="svelte-12605jx"&&(t.textContent=r),o=N(Z),i=I(Z,"DIV",{class:!0});var we=D(i);a=I(we,"H2",{"data-svelte-h":!0}),K(a)!=="svelte-1eysbo6"&&(a.textContent=s),l=N(we),h=I(we,"P",{"data-svelte-h":!0}),K(h)!=="svelte-1pajsxr"&&(h.textContent=d),p=N(we),_=I(we,"DIV",{});var Ve=D(_);g=se(Ve,`Width in mm:
				`),y=I(Ve,"INPUT",{type:!0,min:!0}),Ve.forEach(v),A=N(we),u=I(we,"DIV",{});var Pe=D(u);c=se(Pe,`Height in mm:
				`),f=I(Pe,"INPUT",{type:!0,min:!0}),Pe.forEach(v),m=N(we),b=I(we,"DIV",{class:!0,"data-svelte-h":!0}),K(b)!=="svelte-1ewgrlo"&&(b.textContent=S),we.forEach(v),V=N(Z),C=I(Z,"DIV",{class:!0});var pe=D(C);P=I(pe,"H2",{"data-svelte-h":!0}),K(P)!=="svelte-1k237qn"&&(P.textContent=j),T=N(pe),M=I(pe,"P",{"data-svelte-h":!0}),K(M)!=="svelte-1mtgj5z"&&(M.textContent=L),ee=N(pe),E=I(pe,"DIV",{});var tt=D(E);U=se(tt,`Width in mm:
				`),J=I(tt,"INPUT",{type:!0,min:!0}),tt.forEach(v),ce=N(pe),ae=I(pe,"DIV",{});var nt=D(ae);De=se(nt,`Height in mm:
				`),be=I(nt,"INPUT",{type:!0,min:!0}),nt.forEach(v),Fe=N(pe),ue=I(pe,"DIV",{class:!0,"data-svelte-h":!0}),K(ue)!=="svelte-icwf2t"&&(ue.textContent=Oe),pe.forEach(v),Z.forEach(v),this.h()},h(){x(y,"type","number"),x(y,"min","1"),x(f,"type","number"),x(f,"min","1"),x(b,"class","screen svelte-1wsz6vm"),F(b,"width",`${n[1].folderScreen.widthInMm}mm`),F(b,"height",`${n[1].folderScreen.heightInMm}mm`),x(i,"class","group svelte-1wsz6vm"),x(J,"type","number"),x(J,"min","1"),x(be,"type","number"),x(be,"min","1"),x(ue,"class","screen svelte-1wsz6vm"),F(ue,"width",`${n[1].codeScreen.widthInMm}mm`),F(ue,"height",`${n[1].codeScreen.heightInMm}mm`),x(C,"class","group svelte-1wsz6vm"),x(e,"class","edit-settings-modal svelte-1wsz6vm")},m(Q,Z){$(Q,e,Z),w(e,t),w(e,o),w(e,i),w(i,a),w(i,l),w(i,h),w(i,p),w(i,_),w(_,g),w(_,y),Ie(y,n[1].folderScreen.widthInMm),w(i,A),w(i,u),w(u,c),w(u,f),Ie(f,n[1].folderScreen.heightInMm),w(i,m),w(i,b),w(e,V),w(e,C),w(C,P),w(C,T),w(C,M),w(C,ee),w(C,E),w(E,U),w(E,J),Ie(J,n[1].codeScreen.widthInMm),w(C,ce),w(C,ae),w(ae,De),w(ae,be),Ie(be,n[1].codeScreen.heightInMm),w(C,Fe),w(C,ue),Ae||(qe=[Y(y,"input",n[2]),Y(f,"input",n[3]),Y(J,"input",n[4]),Y(be,"input",n[5])],Ae=!0)},p(Q,Z){Z&2&&Se(y.value)!==Q[1].folderScreen.widthInMm&&Ie(y,Q[1].folderScreen.widthInMm),Z&2&&Se(f.value)!==Q[1].folderScreen.heightInMm&&Ie(f,Q[1].folderScreen.heightInMm),Z&2&&F(b,"width",`${Q[1].folderScreen.widthInMm}mm`),Z&2&&F(b,"height",`${Q[1].folderScreen.heightInMm}mm`),Z&2&&Se(J.value)!==Q[1].codeScreen.widthInMm&&Ie(J,Q[1].codeScreen.widthInMm),Z&2&&Se(be.value)!==Q[1].codeScreen.heightInMm&&Ie(be,Q[1].codeScreen.heightInMm),Z&2&&F(ue,"width",`${Q[1].codeScreen.widthInMm}mm`),Z&2&&F(ue,"height",`${Q[1].codeScreen.heightInMm}mm`)},d(Q){Q&&v(e),Ae=!1,Ce(qe)}}}function In(n){let e,t,r;function o(a){n[6](a)}let i={$$slots:{default:[kn]},$$scope:{ctx:n}};return n[0]!==void 0&&(i.showModal=n[0]),e=new $e({props:i}),fe.push(()=>_e(e,"showModal",o)),{c(){G(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,s){q(e,a,s),r=!0},p(a,[s]){const l={};s&130&&(l.$$scope={dirty:s,ctx:a}),!t&&s&1&&(t=!0,l.showModal=a[0],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){B(e.$$.fragment,a),r=!1},d(a){W(e,a)}}}function Mn(n,e,t){let r;H(n,ye,d=>t(1,r=d));let{showModal:o=!0}=e;function i(){r.folderScreen.widthInMm=Se(this.value),ye.set(r)}function a(){r.folderScreen.heightInMm=Se(this.value),ye.set(r)}function s(){r.codeScreen.widthInMm=Se(this.value),ye.set(r)}function l(){r.codeScreen.heightInMm=Se(this.value),ye.set(r)}function h(d){o=d,t(0,o)}return n.$$set=d=>{"showModal"in d&&t(0,o=d.showModal)},[o,r,i,a,s,l,h]}class Cn extends ne{constructor(e){super(),re(this,e,Mn,In,te,{showModal:0})}}function ht(n,e,t){const r=n.slice();return r[16]=e[t],r}function ct(n){let e,t,r="Copy project to clipboard as recreational link",o,i;return{c(){e=k("div"),t=k("button"),t.textContent=r},l(a){e=I(a,"DIV",{});var s=D(e);t=I(s,"BUTTON",{"data-svelte-h":!0}),K(t)!=="svelte-133s4n0"&&(t.textContent=r),s.forEach(v)},m(a,s){$(a,e,s),w(e,t),o||(i=Y(t,"click",n[3]),o=!0)},p:z,d(a){a&&v(e),o=!1,i()}}}function ut(n){let e,t,r="Save project to BAGA file",o,i,a,s,l,h='<label for="file">Load project from Baga file</label>',d,p;return{c(){e=k("div"),t=k("button"),t.textContent=r,o=R(),i=k("div"),a=k("input"),s=R(),l=k("button"),l.innerHTML=h,this.h()},l(_){e=I(_,"DIV",{});var g=D(e);t=I(g,"BUTTON",{"data-svelte-h":!0}),K(t)!=="svelte-1g98l3d"&&(t.textContent=r),g.forEach(v),o=N(_),i=I(_,"DIV",{});var y=D(i);a=I(y,"INPUT",{type:!0,id:!0,style:!0,accept:!0}),s=N(y),l=I(y,"BUTTON",{class:!0,"data-svelte-h":!0}),K(l)!=="svelte-1ucarmc"&&(l.innerHTML=h),y.forEach(v),this.h()},h(){x(a,"type","file"),x(a,"id","file"),F(a,"display","none"),x(a,"accept",".baga"),x(l,"class","open-button")},m(_,g){$(_,e,g),w(e,t),$(_,o,g),$(_,i,g),w(i,a),w(i,s),w(i,l),d||(p=[Y(t,"click",n[4]),Y(a,"change",n[5])],d=!0)},p:z,d(_){_&&(v(e),v(o),v(i)),d=!1,Ce(p)}}}function dt(n){let e,t,r=n[16].text+"",o,i,a,s;function l(){return n[8](n[16])}return{c(){e=k("div"),t=k("button"),o=ie(r),i=R()},l(h){e=I(h,"DIV",{});var d=D(e);t=I(d,"BUTTON",{});var p=D(t);o=se(p,r),p.forEach(v),i=N(d),d.forEach(v)},m(h,d){$(h,e,d),w(e,t),w(t,o),w(e,i),a||(s=Y(t,"click",l),a=!0)},p(h,d){n=h,d&2&&r!==(r=n[16].text+"")&&je(o,r)},d(h){h&&v(e),a=!1,s()}}}function Sn(n){let e,t,r="Main menu",o,i,a,s,l="Edit settings",h,d,p,_,g=n[1].showCopyLinkButton&&ct(n),y=n[1].showFileButtons&&ut(n),A=oe(n[1].extraOptions),u=[];for(let c=0;c<A.length;c+=1)u[c]=dt(ht(n,A,c));return{c(){e=k("div"),t=k("h1"),t.textContent=r,o=R(),g&&g.c(),i=R(),a=k("div"),s=k("button"),s.textContent=l,h=R(),y&&y.c(),d=R();for(let c=0;c<u.length;c+=1)u[c].c();this.h()},l(c){e=I(c,"DIV",{class:!0});var f=D(e);t=I(f,"H1",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-1x9r302"&&(t.textContent=r),o=N(f),g&&g.l(f),i=N(f),a=I(f,"DIV",{});var m=D(a);s=I(m,"BUTTON",{"data-svelte-h":!0}),K(s)!=="svelte-1m9tkp0"&&(s.textContent=l),m.forEach(v),h=N(f),y&&y.l(f),d=N(f);for(let b=0;b<u.length;b+=1)u[b].l(f);f.forEach(v),this.h()},h(){x(t,"class","svelte-tgu2et"),x(e,"class","main-menu-modal svelte-tgu2et")},m(c,f){$(c,e,f),w(e,t),w(e,o),g&&g.m(e,null),w(e,i),w(e,a),w(a,s),w(e,h),y&&y.m(e,null),w(e,d);for(let m=0;m<u.length;m+=1)u[m]&&u[m].m(e,null);p||(_=Y(s,"click",n[7]),p=!0)},p(c,f){if(c[1].showCopyLinkButton?g?g.p(c,f):(g=ct(c),g.c(),g.m(e,i)):g&&(g.d(1),g=null),c[1].showFileButtons?y?y.p(c,f):(y=ut(c),y.c(),y.m(e,d)):y&&(y.d(1),y=null),f&66){A=oe(c[1].extraOptions);let m;for(m=0;m<A.length;m+=1){const b=ht(c,A,m);u[m]?u[m].p(b,f):(u[m]=dt(b),u[m].c(),u[m].m(e,null))}for(;m<u.length;m+=1)u[m].d(1);u.length=A.length}},d(c){c&&v(e),g&&g.d(),y&&y.d(),Ge(u,c),p=!1,_()}}}function mt(n){let e,t,r;function o(a){n[10](a)}let i={};return n[2]!==void 0&&(i.showModal=n[2]),e=new Cn({props:i}),fe.push(()=>_e(e,"showModal",o)),{c(){G(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,s){q(e,a,s),r=!0},p(a,s){const l={};!t&&s&4&&(t=!0,l.showModal=a[2],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){B(e.$$.fragment,a),r=!1},d(a){W(e,a)}}}function xn(n){let e,t,r,o,i;function a(h){n[9](h)}let s={$$slots:{default:[Sn]},$$scope:{ctx:n}};n[0]!==void 0&&(s.showModal=n[0]),e=new $e({props:s}),fe.push(()=>_e(e,"showModal",a));let l=n[2]&&mt(n);return{c(){G(e.$$.fragment),r=R(),l&&l.c(),o=le()},l(h){X(e.$$.fragment,h),r=N(h),l&&l.l(h),o=le()},m(h,d){q(e,h,d),$(h,r,d),l&&l.m(h,d),$(h,o,d),i=!0},p(h,[d]){const p={};d&524294&&(p.$$scope={dirty:d,ctx:h}),!t&&d&1&&(t=!0,p.showModal=h[0],ve(()=>t=!1)),e.$set(p),h[2]?l?(l.p(h,d),d&4&&O(l,1)):(l=mt(h),l.c(),O(l,1),l.m(o.parentNode,o)):l&&(de(),B(l,1,1,()=>{l=null}),me())},i(h){i||(O(e.$$.fragment,h),O(l),i=!0)},o(h){B(e.$$.fragment,h),B(l),i=!1},d(h){h&&(v(r),v(o)),W(e,h),l&&l.d(h)}}}function An(n,e,t){let r,o,i,a;H(n,Ee,m=>t(11,r=m)),H(n,he,m=>t(12,o=m)),H(n,Me,m=>t(13,i=m)),H(n,ke,m=>t(14,a=m));let{showModal:s=!0}=e,{options:l={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[]}}=e,h=!1;function d(){return{app:a,folders:i,pages:o,pageTemplates:r}}async function p(){const b=`https://bagawork.com/editor#${rt(d())}`;navigator.clipboard.writeText(b)}function _(){const m=rt(d()),b=document.createElement("a");b.href="data:application/octet-stream,"+encodeURIComponent(m),b.download=`${ge(a.code)}.baga`,b.click()}function g(m){const b=m.target.files;if(b.length==0)return;const S=b[0],V=new FileReader;V.readAsText(S),V.addEventListener("load",C=>{try{const P=nn(C.target.result);P.app&&P.folders&&P.pages&&P.pageTemplates?(Te(ke,a=P.app,a),Te(Me,i=P.folders,i),Te(he,o=P.pages,o),Te(Ee,r=P.pageTemplates,r),t(0,s=!1)):alert("Error: The BAGA file could be parsed, but didn't contain all expected data.")}catch{alert("Error: The file is not a valid BAGA file.")}})}function y(m){const b=rt(d());m.onClick(b)}const A=()=>t(2,h=!0),u=m=>y(m);function c(m){s=m,t(0,s)}function f(m){h=m,t(2,h)}return n.$$set=m=>{"showModal"in m&&t(0,s=m.showModal),"options"in m&&t(1,l=m.options)},[s,l,h,p,_,g,y,A,u,c,f]}class Pn extends ne{constructor(e){super(),re(this,e,An,xn,te,{showModal:0,options:1})}}function En(n){let e,t,r="Edit Folder",o,i,a,s,l,h,d,p,_,g,y;return{c(){e=k("div"),t=k("h1"),t.textContent=r,o=R(),i=k("div"),a=ie("Name: "),s=k("input"),l=R(),h=k("div"),d=k("button"),p=ie("Delete"),this.h()},l(A){e=I(A,"DIV",{class:!0});var u=D(e);t=I(u,"H1",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-1spe3mm"&&(t.textContent=r),o=N(u),i=I(u,"DIV",{});var c=D(i);a=se(c,"Name: "),s=I(c,"INPUT",{type:!0}),c.forEach(v),l=N(u),h=I(u,"DIV",{});var f=D(h);d=I(f,"BUTTON",{});var m=D(d);p=se(m,"Delete"),m.forEach(v),f.forEach(v),u.forEach(v),this.h()},h(){x(t,"class","svelte-1xyhvgw"),x(s,"type","text"),d.disabled=_=n[1].length==1,x(e,"class","edit-folder-modal svelte-1xyhvgw")},m(A,u){$(A,e,u),w(e,t),w(e,o),w(e,i),w(i,a),w(i,s),Ie(s,n[2].name),w(e,l),w(e,h),w(h,d),w(d,p),g||(y=[Y(s,"input",n[5]),Y(d,"click",n[3])],g=!0)},p(A,u){u&4&&s.value!==A[2].name&&Ie(s,A[2].name),u&2&&_!==(_=A[1].length==1)&&(d.disabled=_)},d(A){A&&v(e),g=!1,Ce(y)}}}function jn(n){let e,t,r;function o(a){n[6](a)}let i={$$slots:{default:[En]},$$scope:{ctx:n}};return n[0]!==void 0&&(i.showModal=n[0]),e=new $e({props:i}),fe.push(()=>_e(e,"showModal",o)),{c(){G(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,s){q(e,a,s),r=!0},p(a,[s]){const l={};s&262&&(l.$$scope={dirty:s,ctx:a}),!t&&s&1&&(t=!0,l.showModal=a[0],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){B(e.$$.fragment,a),r=!1},d(a){W(e,a)}}}function Dn(n,e,t){let r,o,i;H(n,Me,p=>t(1,o=p)),H(n,he,p=>t(7,i=p));let{folderId:a}=e,{showModal:s}=e;function l(){const p=o.findIndex(g=>g.id==r.id);i.find(g=>g.folderId==a)&&!confirm("The folder you are deleting contains pages, and those pages will be deleted too if you delete the folder. Do you really want to delete the folder?")||(o.splice(p,1),Te(he,i=i.filter(g=>g.folderId!=a),i),Me.set(o),t(0,s=!1))}function h(){r.name=this.value,t(2,r),t(1,o),t(4,a)}function d(p){s=p,t(0,s)}return n.$$set=p=>{"folderId"in p&&t(4,a=p.folderId),"showModal"in p&&t(0,s=p.showModal)},n.$$.update=()=>{n.$$.dirty&18&&t(2,r=o.find(p=>p.id==a))},[s,o,r,l,a,h,d]}class On extends ne{constructor(e){super(),re(this,e,Dn,jn,te,{folderId:4,showModal:0})}}function Vn(n,{delay:e=0,duration:t=400,easing:r=dn}={}){const o=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:r,css:i=>`opacity: ${i*o}`}}function ft(n,e,t){const r=n.slice();return r[4]=e[t],r[6]=t,r}function pt(n,e){let t,r=e[4].value+"",o,i,a;return{key:n,first:null,c(){t=k("div"),o=ie(r),this.h()},l(s){t=I(s,"DIV",{class:!0});var l=D(t);o=se(l,r),l.forEach(v),this.h()},h(){var s;x(t,"class",i="item "+e[4].type+" svelte-163j81l"),Be(t,"hide",`${e[4].value} ✅`==((s=e[1][e[6]+1])==null?void 0:s.value)),this.first=t},m(s,l){$(s,t,l),w(t,o)},p(s,l){var h;e=s,l&2&&r!==(r=e[4].value+"")&&je(o,r),l&2&&i!==(i="item "+e[4].type+" svelte-163j81l")&&x(t,"class",i),l&2&&Be(t,"hide",`${e[4].value} ✅`==((h=e[1][e[6]+1])==null?void 0:h.value))},i(s){s&&(a||mn(()=>{a=fn(t,Vn,{delay:100}),a.start()}))},o:z,d(s){s&&v(t)}}}function Bn(n){let e,t,r,o,i,a,s=[],l=new Map,h,d,p,_,g,y=oe(n[1]);const A=u=>u[4].value+u[4].type+u[6];for(let u=0;u<y.length;u+=1){let c=ft(n,y,u),f=A(c);l.set(f,s[u]=pt(f,c))}return{c(){e=k("div"),t=k("div"),r=ie(`Show framework log:
		`),o=k("input"),i=R(),a=k("div");for(let u=0;u<s.length;u+=1)s[u].c();h=R(),d=k("div"),this.h()},l(u){e=I(u,"DIV",{class:!0});var c=D(e);t=I(c,"DIV",{class:!0});var f=D(t);r=se(f,`Show framework log:
		`),o=I(f,"INPUT",{type:!0}),f.forEach(v),i=N(c),a=I(c,"DIV",{class:!0});var m=D(a);for(let b=0;b<s.length;b+=1)s[b].l(m);h=N(m),d=I(m,"DIV",{}),D(d).forEach(v),m.forEach(v),c.forEach(v),this.h()},h(){x(o,"type","checkbox"),x(t,"class","settings svelte-163j81l"),x(a,"class","items svelte-163j81l"),x(e,"class","tab-log")},m(u,c){$(u,e,c),w(e,t),w(t,r),w(t,o),o.checked=n[0],w(e,i),w(e,a);for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(a,null);w(a,h),w(a,d),_||(g=[Y(o,"change",n[3]),He(p=Rn.call(null,d,n[1].length!=0))],_=!0)},p(u,[c]){c&1&&(o.checked=u[0]),c&2&&(y=oe(u[1]),s=Ze(s,c,A,1,u,y,l,a,en,pt,h,ft)),p&&Qe(p.update)&&c&2&&p.update.call(null,u[1].length!=0)},i(u){for(let c=0;c<y.length;c+=1)O(s[c])},o:z,d(u){u&&v(e);for(let c=0;c<s.length;c+=1)s[c].d();_=!1,Ce(g)}}}const gt=Ne(!1);function Rn(n,e){function t(r){r&&n.parentNode.parentNode.parentNode.scrollTop!=0&&n.scrollIntoView({behavior:"smooth",block:"end"})}return t(e),{update:t}}function Nn(n,e,t){let r,o;H(n,gt,s=>t(0,o=s));let{loggedItems:i=[{type:"framework",value:"Whatever..."}]}=e;function a(){o=this.checked,gt.set(o)}return n.$$set=s=>{"loggedItems"in s&&t(2,i=s.loggedItems)},n.$$.update=()=>{n.$$.dirty&5&&t(1,r=o?i:i.filter(s=>s.type!="framework"))},[o,r,i,a]}class $n extends ne{constructor(e){super(),re(this,e,Nn,Bn,te,{loggedItems:2})}}function bt(n,e,t){const r=n.slice();return r[1]=e[t],r}function wt(n){let e,t,r=n[1].text+"",o,i,a,s;return{c(){e=k("li"),t=k("button"),o=ie(r),i=R(),this.h()},l(l){e=I(l,"LI",{class:!0});var h=D(e);t=I(h,"BUTTON",{});var d=D(t);o=se(d,r),d.forEach(v),i=N(h),h.forEach(v),this.h()},h(){x(e,"class","svelte-17hvot3")},m(l,h){$(l,e,h),w(e,t),w(t,o),w(e,i),a||(s=Y(t,"click",function(){Qe(n[1].onClick)&&n[1].onClick.apply(this,arguments)}),a=!0)},p(l,h){n=l,h&1&&r!==(r=n[1].text+"")&&je(o,r)},d(l){l&&v(e),a=!1,s()}}}function Fn(n){let e,t,r=oe(n[0]),o=[];for(let i=0;i<r.length;i+=1)o[i]=wt(bt(n,r,i));return{c(){e=k("div"),t=k("ul");for(let i=0;i<o.length;i+=1)o[i].c();this.h()},l(i){e=I(i,"DIV",{class:!0});var a=D(e);t=I(a,"UL",{class:!0});var s=D(t);for(let l=0;l<o.length;l+=1)o[l].l(s);s.forEach(v),a.forEach(v),this.h()},h(){x(t,"class","svelte-17hvot3"),x(e,"class","tab-menu svelte-17hvot3")},m(i,a){$(i,e,a),w(e,t);for(let s=0;s<o.length;s+=1)o[s]&&o[s].m(t,null)},p(i,[a]){if(a&1){r=oe(i[0]);let s;for(s=0;s<r.length;s+=1){const l=bt(i,r,s);o[s]?o[s].p(l,a):(o[s]=wt(l),o[s].c(),o[s].m(t,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=r.length}},i:z,o:z,d(i){i&&v(e),Ge(o,i)}}}function Ln(n,e,t){let{items:r=[{text:"Button text",onClick(){}}]}=e;return n.$$set=o=>{"items"in o&&t(0,r=o.items)},[r]}class Un extends ne{constructor(e){super(),re(this,e,Ln,Fn,te,{items:0})}}function Yn(n){let e,t="If you return a Paper component from App.createIcon(), it will be shown here. If your app then is installed on a user's smartphone, that icon will be shown as the icon the user should click on to start your app.";return{c(){e=k("p"),e.textContent=t},l(r){e=I(r,"P",{"data-svelte-h":!0}),K(e)!=="svelte-m3fxxf"&&(e.textContent=t)},m(r,o){$(r,e,o)},p:z,d(r){r&&v(e)}}}function zn(n){let e,t;return{c(){e=k("div"),t=new pn(!1),this.h()},l(r){e=I(r,"DIV",{class:!0});var o=D(e);t=gn(o,!1),o.forEach(v),this.h()},h(){t.a=null,x(e,"class","icon svelte-1w89isc")},m(r,o){$(r,e,o),t.m(n[0],e)},p(r,o){o&1&&t.p(r[0])},d(r){r&&v(e)}}}function Hn(n){let e;function t(i,a){return i[0]?zn:Yn}let r=t(n),o=r(n);return{c(){o.c(),e=le()},l(i){o.l(i),e=le()},m(i,a){o.m(i,a),$(i,e,a)},p(i,[a]){r===(r=t(i))&&o?o.p(i,a):(o.d(1),o=r(i),o&&(o.c(),o.m(e.parentNode,e)))},i:z,o:z,d(i){i&&v(e),o.d(i)}}}function Gn(n,e,t){let{iconAsSvgString:r=""}=e;return n.$$set=o=>{"iconAsSvgString"in o&&t(0,r=o.iconAsSvgString)},n.$$.update=()=>{n.$$.dirty&1},[r]}class Xn extends ne{constructor(e){super(),re(this,e,Gn,Hn,te,{iconAsSvgString:0})}}function qn(n){let e,t,r;return{c(){e=k("div"),this.h()},l(o){e=I(o,"DIV",{class:!0}),D(e).forEach(v),this.h()},h(){x(e,"class","monaco svelte-1rpg4qr")},m(o,i){$(o,e,i),t||(r=He(n[0].call(null,e)),t=!0)},p:z,i:z,o:z,d(o){o&&v(e),t=!1,r()}}}function Wn(n,e,t){let r,o;H(n,ke,u=>t(8,r=u)),H(n,he,u=>t(9,o=u));let{monaco:i=null}=e,{pageId:a=1}=e,{selectedFileIndex:s=0}=e;const l=o.find(u=>u.id==a),h=[{variable:"p",code:l.code},{variable:"a",code:r.code}].map(u=>({variable:u.variable,className:ge(u.code),monacoClassModel:i.editor.createModel(u.code,"javascript"),monacoVariableModel:i.editor.createModel(`const ${u.variable} = new ${ge(u.code)}()`,"javascript")})),d=o.filter(u=>u.id!=a).map(u=>ge(u.code)),p=i.editor.createModel(d.map(u=>`class ${u} extends Page{}`).join(`
`),"javascript");function _(u){const c=h[u],f=ge(c.monacoClassModel.getValue());h[u].className!=f&&(t(5,h[u].className=f,h),h[u].monacoVariableModel.setValue(`const ${c.variable} = new ${f}();`),A())}for(let u=0;u<h.length;u++){const c=h[u];_(u),c.monacoClassModel.onDidChangeContent(f=>{_(u)})}let g;function y(u){t(6,g=i.editor.create(u,{model:h[s].monacoClassModel,minimap:{enabled:!1},fontSize:16,tabSize:2,automaticLayout:!0,scrollBeyondLastLine:!1,renderWhitespace:"all",trimAutoWhitespace:!1,language:"javascript",suggest:{showKeywords:!1}}))}function A(){const[u,c]=h;l.code=u.monacoClassModel.getValue(),he.set(o),Te(ke,r.code=c.monacoClassModel.getValue(),r)}return it(()=>{A(),g.dispose();for(const u of h)u.monacoClassModel.dispose(),u.monacoVariableModel.dispose();p.dispose()}),n.$$set=u=>{"monaco"in u&&t(1,i=u.monaco),"pageId"in u&&t(2,a=u.pageId),"selectedFileIndex"in u&&t(3,s=u.selectedFileIndex)},n.$$.update=()=>{n.$$.dirty&104&&g&&g.setModel(h[s].monacoClassModel)},[y,i,a,s,A,h,g]}class Kn extends ne{constructor(e){super(),re(this,e,Wn,qn,te,{monaco:1,pageId:2,selectedFileIndex:3,save:4})}get save(){return this.$$.ctx[4]}}function Jn(n){let e,t,r;return{c(){e=k("div"),this.h()},l(o){e=I(o,"DIV",{class:!0}),D(e).forEach(v),this.h()},h(){x(e,"class","monaco svelte-1rpg4qr")},m(o,i){$(o,e,i),t||(r=He(n[0].call(null,e)),t=!0)},p:z,i:z,o:z,d(o){o&&v(e),t=!1,r()}}}function Qn(n,e,t){let{state:r={}}=e,{monaco:o=null}=e;const i=o.editor.createModel("","json");let a;async function s(h){a=o.editor.create(h,{model:i,minimap:{enabled:!1},fontSize:16,tabSize:2,automaticLayout:!0,scrollBeyondLastLine:!1,renderWhitespace:"all",trimAutoWhitespace:!1,language:"json",suggest:{showKeywords:!1}})}function l(){const h=Object.assign({},r);try{Object.assign(h,JSON.parse(i.getValue()))}catch(d){console.log(123321,d)}return h}return it(()=>{a.dispose(),i.dispose()}),n.$$set=h=>{"state"in h&&t(1,r=h.state),"monaco"in h&&t(2,o=h.monaco)},n.$$.update=()=>{n.$$.dirty&2&&i.setValue(JSON.stringify(r,null,"	"))},[s,r,o,l]}class Zn extends ne{constructor(e){super(),re(this,e,Qn,Jn,te,{state:1,monaco:2,getModifiedState:3})}get getModifiedState(){return this.$$.ctx[3]}}function vt(n,e,t){const r=n.slice();return r[17]=e[t],r[19]=t,r}function _t(n){let e,t=n[17]+"",r,o,i,a;function s(){return n[12](n[19])}return{c(){e=k("button"),r=ie(t),this.h()},l(l){e=I(l,"BUTTON",{});var h=D(e);r=se(h,t),h.forEach(v),this.h()},h(){e.disabled=o=n[19]==n[3]},m(l,h){$(l,e,h),w(e,r),i||(a=Y(e,"click",s),i=!0)},p(l,h){n=l,h&96&&t!==(t=n[17]+"")&&je(r,t),h&8&&o!==(o=n[19]==n[3])&&(e.disabled=o)},d(l){l&&v(e),i=!1,a()}}}function er(n){let e,t,r={monaco:n[1],pageId:n[0],selectedFileIndex:n[3]};return e=new Kn({props:r}),n[15](e),{c(){G(e.$$.fragment)},l(o){X(e.$$.fragment,o)},m(o,i){q(e,o,i),t=!0},p(o,i){const a={};i&2&&(a.monaco=o[1]),i&1&&(a.pageId=o[0]),i&8&&(a.selectedFileIndex=o[3]),e.$set(a)},i(o){t||(O(e.$$.fragment,o),t=!0)},o(o){B(e.$$.fragment,o),t=!1},d(o){n[15](null),W(e,o)}}}function tr(n){let e,t,r={monaco:n[1],state:n[2]};return e=new Zn({props:r}),n[14](e),{c(){G(e.$$.fragment)},l(o){X(e.$$.fragment,o)},m(o,i){q(e,o,i),t=!0},p(o,i){const a={};i&2&&(a.monaco=o[1]),i&4&&(a.state=o[2]),e.$set(a)},i(o){t||(O(e.$$.fragment,o),t=!0)},o(o){B(e.$$.fragment,o),t=!1},d(o){n[14](null),W(e,o)}}}function nr(n){let e,t,r,o,i,a,s,l,h,d,p,_,g,y,A,u=oe(n[8](n[5],n[6])),c=[];for(let S=0;S<u.length;S+=1)c[S]=_t(vt(n,u,S));const f=[tr,er],m=[];function b(S,V){return S[3]==S[7]?0:1}return p=b(n),_=m[p]=f[p](n),{c(){e=k("div"),t=k("div");for(let S=0;S<c.length;S+=1)c[S].c();r=R(),o=k("div"),i=R(),a=k("button"),s=ie("State"),h=R(),d=k("div"),_.c(),this.h()},l(S){e=I(S,"DIV",{class:!0});var V=D(e);t=I(V,"DIV",{class:!0});var C=D(t);for(let T=0;T<c.length;T+=1)c[T].l(C);r=N(C),o=I(C,"DIV",{class:!0}),D(o).forEach(v),i=N(C),a=I(C,"BUTTON",{});var P=D(a);s=se(P,"State"),P.forEach(v),C.forEach(v),h=N(V),d=I(V,"DIV",{class:!0});var j=D(d);_.l(j),j.forEach(v),V.forEach(v),this.h()},h(){x(o,"class","space"),a.disabled=l=n[3]==n[7],x(t,"class","tab-names-child svelte-c5c4u2"),x(d,"class","code-editor-child2 svelte-c5c4u2"),x(e,"class","code-editor-with-tabs svelte-c5c4u2")},m(S,V){$(S,e,V),w(e,t);for(let C=0;C<c.length;C+=1)c[C]&&c[C].m(t,null);w(t,r),w(t,o),w(t,i),w(t,a),w(a,s),w(e,h),w(e,d),m[p].m(d,null),g=!0,y||(A=Y(a,"click",n[13]),y=!0)},p(S,[V]){if(V&360){u=oe(S[8](S[5],S[6]));let P;for(P=0;P<u.length;P+=1){const j=vt(S,u,P);c[P]?c[P].p(j,V):(c[P]=_t(j),c[P].c(),c[P].m(t,r))}for(;P<c.length;P+=1)c[P].d(1);c.length=u.length}(!g||V&8&&l!==(l=S[3]==S[7]))&&(a.disabled=l);let C=p;p=b(S),p===C?m[p].p(S,V):(de(),B(m[C],1,1,()=>{m[C]=null}),me(),_=m[p],_?_.p(S,V):(_=m[p]=f[p](S),_.c()),O(_,1),_.m(d,null))},i(S){g||(O(_),g=!0)},o(S){B(_),g=!1},d(S){S&&v(e),Ge(c,S),m[p].d(),y=!1,A()}}}function rr(n,e,t){let r,o;H(n,he,b=>t(5,r=b)),H(n,ke,b=>t(6,o=b));let{pageId:i=0}=e,{monaco:a=null}=e,{state:s={}}=e,{onEditorModeChanged:l=b=>null}=e;function h(b){return b.find(S=>S.id==i)}let d=null,p=0;const _=-1;function g(b,S){const V=h(b);return[ge(V.code),ge(S.code)]}function y(){return d.getModifiedState()}function A(){d.save()}const u=b=>t(3,p=b),c=()=>t(3,p=_);function f(b){fe[b?"unshift":"push"](()=>{d=b,t(4,d)})}function m(b){fe[b?"unshift":"push"](()=>{d=b,t(4,d)})}return n.$$set=b=>{"pageId"in b&&t(0,i=b.pageId),"monaco"in b&&t(1,a=b.monaco),"state"in b&&t(2,s=b.state),"onEditorModeChanged"in b&&t(9,l=b.onEditorModeChanged)},n.$$.update=()=>{n.$$.dirty&520&&l(p==_?"state":"code")},[i,a,s,p,d,r,o,_,g,l,y,A,u,c,f,m]}class or extends ne{constructor(e){super(),re(this,e,rr,nr,te,{pageId:0,monaco:1,state:2,onEditorModeChanged:9,getModifiedState:10,save:11})}get getModifiedState(){return this.$$.ctx[10]}get save(){return this.$$.ctx[11]}}const ar=`/**
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
	
}`,ir=`/**
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
	
}`,sr=`/**
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
	
))()`,lr=`/**
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
	
))()`,hr=`/**
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
		 * This method sets the size the text should have (how tall it should be).
		 * 
		 * @param size The size of the text
		 */
		sizeMm(size: number) { return this };
		
		/**
		 * This methods makes the text show as a line through it.
		 */
		strikethrough() { return this };
		
		/**
		 * This methods makes the text show as underlined.
		 */
		underline() { return this };
		
	}
	
))()`,cr=`/**
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
	
}`,ur=`/**
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
	
}`,dr=`/**
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
	
))()`,mr=`const Box = (() => new (
	
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
	
))()`,fr=`const Button = (() => new (
	
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
	
))()`,pr=`const Columns = (() => new (
	
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
	
)) ()`,gr=`const EnterNumber = (() => new (
	
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
	
))()`,br=`const EnterText = (() => new (
	
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
	
))()`,wr=`const Html = (() => new (
	
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
	
))()`,vr=`// const Image = (() => new (
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
// ))()`,_r=`const Layers = (() => new (
	
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
	
))()`,Tr=`const Paper = (() => new (
	
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
	
))()`,yr=`const Rows = (() => new (
	
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
	
)) ()`,kr=`const Space = (() => new (
	
	/**
	 * This GUI component is a layout that primarily is used to occupy space,
	 * so other children in a Rows/Columns layout are positioned correct.
	 * 
	 * This component has \`size\` set to \`1\` by default, while other components
	 * have \`size\` set to \`0\` by default.
	 */
	class Space extends Component {
		
	}
	
)) ()`,Ir=`const Text = (() => new (
	
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
	
))()`,Mr=`/**
 * This function logs the value you pass to it, so you can insect
 * it in the editor.
 * @param value The value to be logged
 */
function log(value: any) { };`,Cr=`const m = {
	
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
	
}`,Sr=`const PaperCircle = (() => new (
	
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
	
))()`,xr=`const PaperGroup = (() => new (
	
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
	
))()`,Ar=`const PaperLine = (() => new (
	
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
	
))()`,Pr=`const PaperRectangle = (() => new (
	
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
	
))()`,Er=`interface Voice {
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
	
}`,jr=`// https://github.com/microsoft/TypeScript/blob/70b7de11fbadb16d30f6770332f544c44134eb82/src/lib/es5.d.ts#L1295
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
}`,Dr=`// https://github.com/microsoft/TypeScript/blob/70b7de11fbadb16d30f6770332f544c44134eb82/src/lib/es5.d.ts#L633C2-L742C24
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
declare var Math: Math;`,Or=`// https://github.com/microsoft/TypeScript/blob/main/src/lib/es5.d.ts
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
}`;function Vr(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Tt(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function yt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Tt(Object(t),!0).forEach(function(r){Vr(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Tt(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Br(n,e){if(n==null)return{};var t={},r=Object.keys(n),o,i;for(i=0;i<r.length;i++)o=r[i],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function Rr(n,e){if(n==null)return{};var t=Br(n,e),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function Nr(n,e){return $r(n)||Fr(n,e)||Lr(n,e)||Ur()}function $r(n){if(Array.isArray(n))return n}function Fr(n,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(n)))){var t=[],r=!0,o=!1,i=void 0;try{for(var a=n[Symbol.iterator](),s;!(r=(s=a.next()).done)&&(t.push(s.value),!(e&&t.length===e));r=!0);}catch(l){o=!0,i=l}finally{try{!r&&a.return!=null&&a.return()}finally{if(o)throw i}}return t}}function Lr(n,e){if(n){if(typeof n=="string")return kt(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return kt(n,e)}}function kt(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function Ur(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yr(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function It(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Mt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?It(Object(t),!0).forEach(function(r){Yr(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):It(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function zr(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(r){return e.reduceRight(function(o,i){return i(o)},r)}}function Ue(n){return function e(){for(var t=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=n.length?n.apply(this,o):function(){for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return e.apply(t,[].concat(o,s))}}}function Je(n){return{}.toString.call(n).includes("Object")}function Hr(n){return!Object.keys(n).length}function ze(n){return typeof n=="function"}function Gr(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Xr(n,e){return Je(e)||xe("changeType"),Object.keys(e).some(function(t){return!Gr(n,t)})&&xe("changeField"),e}function qr(n){ze(n)||xe("selectorType")}function Wr(n){ze(n)||Je(n)||xe("handlerType"),Je(n)&&Object.values(n).some(function(e){return!ze(e)})&&xe("handlersType")}function Kr(n){n||xe("initialIsRequired"),Je(n)||xe("initialType"),Hr(n)&&xe("initialContent")}function Jr(n,e){throw new Error(n[e]||n.default)}var Qr={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},xe=Ue(Jr)(Qr),Ke={changes:Xr,selector:qr,handler:Wr,initial:Kr};function Zr(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ke.initial(n),Ke.handler(e);var t={current:n},r=Ue(no)(t,e),o=Ue(to)(t),i=Ue(Ke.changes)(n),a=Ue(eo)(t);function s(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return Ke.selector(h),h(t.current)}function l(h){zr(r,o,i,a)(h)}return[s,l]}function eo(n,e){return ze(e)?e(n.current):e}function to(n,e){return n.current=Mt(Mt({},n.current),e),e}function no(n,e,t){return ze(e)?e(n.current):Object.keys(t).forEach(function(r){var o;return(o=e[r])===null||o===void 0?void 0:o.call(e,n.current[r])}),t}var ro={create:Zr},oo={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}};function ao(n){return function e(){for(var t=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=n.length?n.apply(this,o):function(){for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return e.apply(t,[].concat(o,s))}}}function io(n){return{}.toString.call(n).includes("Object")}function so(n){return n||Ct("configIsRequired"),io(n)||Ct("configType"),n.urls?(lo(),{paths:{vs:n.urls.monacoBase}}):n}function lo(){console.warn(rn.deprecation)}function ho(n,e){throw new Error(n[e]||n.default)}var rn={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Ct=ao(ho)(rn),co={config:so},uo=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(o){return t.reduceRight(function(i,a){return a(i)},o)}};function on(n,e){return Object.keys(e).forEach(function(t){e[t]instanceof Object&&n[t]&&Object.assign(e[t],on(n[t],e[t]))}),yt(yt({},n),e)}var mo={type:"cancelation",msg:"operation is manually canceled"};function ot(n){var e=!1,t=new Promise(function(r,o){n.then(function(i){return e?o(mo):r(i)}),n.catch(o)});return t.cancel=function(){return e=!0},t}var fo=ro.create({config:oo,isInitialized:!1,resolve:null,reject:null,monaco:null}),an=Nr(fo,2),Xe=an[0],et=an[1];function po(n){var e=co.config(n),t=e.monaco,r=Rr(e,["monaco"]);et(function(o){return{config:on(o.config,r),monaco:t}})}function go(){var n=Xe(function(e){var t=e.monaco,r=e.isInitialized,o=e.resolve;return{monaco:t,isInitialized:r,resolve:o}});if(!n.isInitialized){if(et({isInitialized:!0}),n.monaco)return n.resolve(n.monaco),ot(at);if(window.monaco&&window.monaco.editor)return sn(window.monaco),n.resolve(window.monaco),ot(at);uo(bo,vo)(_o)}return ot(at)}function bo(n){return document.body.appendChild(n)}function wo(n){var e=document.createElement("script");return n&&(e.src=n),e}function vo(n){var e=Xe(function(r){var o=r.config,i=r.reject;return{config:o,reject:i}}),t=wo("".concat(e.config.paths.vs,"/loader.js"));return t.onload=function(){return n()},t.onerror=e.reject,t}function _o(){var n=Xe(function(t){var r=t.config,o=t.resolve,i=t.reject;return{config:r,resolve:o,reject:i}}),e=window.require;e.config(n.config),e(["vs/editor/editor.main"],function(t){sn(t),n.resolve(t)},function(t){n.reject(t)})}function sn(n){Xe().monaco||et({monaco:n})}function To(){return Xe(function(n){var e=n.monaco;return e})}var at=new Promise(function(n,e){return et({resolve:n,reject:e})}),St={config:po,init:go,__getMonacoInstance:To};const yo=n=>({}),xt=n=>({monaco:n[3]});function ko(n){return{c:z,l:z,m:z,p:z,i:z,o:z,d:z}}function Io(n){let e;const t=n[2].default,r=Wt(t,n,n[1],xt);return{c(){r&&r.c()},l(o){r&&r.l(o)},m(o,i){r&&r.m(o,i),e=!0},p(o,i){r&&r.p&&(!e||i&2)&&Kt(r,t,o,o[1],e?Qt(t,o[1],i,yo):Jt(o[1]),xt)},i(o){e||(O(r,o),e=!0)},o(o){B(r,o),e=!1},d(o){r&&r.d(o)}}}function Mo(n){let e,t="Loading the editor...";return{c(){e=k("p"),e.textContent=t},l(r){e=I(r,"P",{"data-svelte-h":!0}),K(e)!=="svelte-1cba8fu"&&(e.textContent=t)},m(r,o){$(r,e,o)},p:z,i:z,o:z,d(r){r&&v(e)}}}function Co(n){let e,t,r={ctx:n,current:null,token:null,hasCatch:!1,pending:Mo,then:Io,catch:ko,value:3,blocks:[,,,]};return vn(n[0](),r),{c(){e=le(),r.block.c()},l(o){e=le(),r.block.l(o)},m(o,i){$(o,e,i),r.block.m(o,r.anchor=i),r.mount=()=>e.parentNode,r.anchor=e,t=!0},p(o,[i]){n=o,_n(r,n,i)},i(o){t||(O(r.block),t=!0)},o(o){for(let i=0;i<3;i+=1){const a=r.blocks[i];B(a)}t=!1},d(o){o&&v(e),r.block.d(o),r.token=null,r=null}}}function So(n,e,t){let{$$slots:r={},$$scope:o}=e;St.config({paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.0/min/vs"}});async function i(){const a=await St.init();a.languages.typescript.javascriptDefaults.setCompilerOptions({noLib:!0,allowNonTsExtensions:!0});const s=Object.values(Object.assign({"../editor-type-definitions/bagawork/App.d.ts":ar,"../editor-type-definitions/bagawork/Component.ts":ir,"../editor-type-definitions/bagawork/Direction.ts":sr,"../editor-type-definitions/bagawork/Duration.ts":lr,"../editor-type-definitions/bagawork/Font.ts":hr,"../editor-type-definitions/bagawork/Page.d.ts":cr,"../editor-type-definitions/bagawork/PaperFigure.ts":ur,"../editor-type-definitions/bagawork/Time.ts":dr,"../editor-type-definitions/bagawork/components/Box.ts":mr,"../editor-type-definitions/bagawork/components/Button.ts":fr,"../editor-type-definitions/bagawork/components/Columns.ts":pr,"../editor-type-definitions/bagawork/components/EnterNumber.ts":gr,"../editor-type-definitions/bagawork/components/EnterText.ts":br,"../editor-type-definitions/bagawork/components/Html.ts":wr,"../editor-type-definitions/bagawork/components/Image.ts":vr,"../editor-type-definitions/bagawork/components/Layers.ts":_r,"../editor-type-definitions/bagawork/components/Paper.ts":Tr,"../editor-type-definitions/bagawork/components/Rows.ts":yr,"../editor-type-definitions/bagawork/components/Space.ts":kr,"../editor-type-definitions/bagawork/components/Text.ts":Ir,"../editor-type-definitions/bagawork/functions/log.ts":Mr,"../editor-type-definitions/bagawork/m.ts":Cr,"../editor-type-definitions/bagawork/paper-figures/PaperCircle.ts":Sr,"../editor-type-definitions/bagawork/paper-figures/PaperGroup.ts":xr,"../editor-type-definitions/bagawork/paper-figures/PaperLine.ts":Ar,"../editor-type-definitions/bagawork/paper-figures/PaperRectangle.ts":Pr,"../editor-type-definitions/bagawork/speaker.ts":Er,"../editor-type-definitions/js/Array.d.ts":jr,"../editor-type-definitions/js/Math.d.ts":Dr,"../editor-type-definitions/js/String.d.ts":Or}));return a.languages.typescript.javascriptDefaults.setExtraLibs(s.map(l=>({content:l}))),a}return n.$$set=a=>{"$$scope"in a&&t(1,o=a.$$scope)},[i,o,r]}class ln extends ne{constructor(e){super(),re(this,e,So,Co,te,{})}}function At(n,e,t){const r=n.slice();return r[25]=e[t],r}function Pt(n){let e,t;return e=new st({props:{createAppCode:n[15](),runtimeSettings:n[12]()}}),{c(){G(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,o){q(e,r,o),t=!0},p:z,i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){W(e,r)}}}function xo(n){let e,t="Restart with state",r,o;return{c(){e=k("button"),e.textContent=t},l(i){e=I(i,"BUTTON",{"data-svelte-h":!0}),K(e)!=="svelte-yq0ny7"&&(e.textContent=t)},m(i,a){$(i,e,a),r||(o=Y(e,"click",n[14]),r=!0)},p:z,d(i){i&&v(e),r=!1,o()}}}function Ao(n){let e,t="Restart",r,o;return{c(){e=k("button"),e.textContent=t},l(i){e=I(i,"BUTTON",{"data-svelte-h":!0}),K(e)!=="svelte-37ekpt"&&(e.textContent=t)},m(i,a){$(i,e,a),r||(o=Y(e,"click",n[13]),r=!0)},p:z,d(i){i&&v(e),r=!1,o()}}}function Et(n){let e,t=n[25]+"",r,o,i,a,s;function l(){return n[17](n[25])}return{c(){e=k("button"),r=ie(t),o=R(),this.h()},l(h){e=I(h,"BUTTON",{});var d=D(e);r=se(d,t),o=N(d),d.forEach(v),this.h()},h(){e.disabled=i=n[5]==n[25]},m(h,d){$(h,e,d),w(e,r),w(e,o),a||(s=Y(e,"click",l),a=!0)},p(h,d){n=h,d&32&&i!==(i=n[5]==n[25])&&(e.disabled=i)},d(h){h&&v(e),a=!1,s()}}}function Po(n){let e,t;return e=new Xn({props:{iconAsSvgString:n[4]}}),{c(){G(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,o){q(e,r,o),t=!0},p(r,o){const i={};o&16&&(i.iconAsSvgString=r[4]),e.$set(i)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){W(e,r)}}}function Eo(n){let e,t;return e=new $n({props:{loggedItems:n[6]}}),{c(){G(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,o){q(e,r,o),t=!0},p(r,o){const i={};o&64&&(i.loggedItems=r[6]),e.$set(i)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){W(e,r)}}}function jo(n){let e,t;return e=new Un({props:{items:n[11]}}),{c(){G(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,o){q(e,r,o),t=!0},p:z,i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){W(e,r)}}}function Do(n){let e,t,r={pageId:n[1],monaco:n[24],state:n[3],onEditorModeChanged:n[18]};return e=new or({props:r}),n[19](e),{c(){G(e.$$.fragment)},l(o){X(e.$$.fragment,o)},m(o,i){q(e,o,i),t=!0},p(o,i){const a={};i&2&&(a.pageId=o[1]),i&16777216&&(a.monaco=o[24]),i&8&&(a.state=o[3]),i&256&&(a.onEditorModeChanged=o[18]),e.$set(a)},i(o){t||(O(e.$$.fragment,o),t=!0)},o(o){B(e.$$.fragment,o),t=!1},d(o){n[19](null),W(e,o)}}}function Oo(n){let e,t,r,o=n[2],i,a,s,l,h,d,p,_,g,y,A,u,c=Pt(n);function f(T,M){if(T[8]=="code")return Ao;if(T[8]=="state")return xo}let m=f(n),b=m&&m(n),S=oe(n[10]),V=[];for(let T=0;T<S.length;T+=1)V[T]=Et(At(n,S,T));const C=[jo,Eo,Po],P=[];function j(T,M){return T[5]=="Menu"?0:T[5]=="Log"?1:T[5]=="Icon"?2:-1}return~(p=j(n))&&(_=P[p]=C[p](n)),A=new ln({props:{$$slots:{default:[Do,({monaco:T})=>({24:T}),({monaco:T})=>T?16777216:0]},$$scope:{ctx:n}}}),{c(){e=k("div"),t=k("div"),r=k("div"),c.c(),i=R(),a=k("div"),b&&b.c(),s=R(),l=k("div"),h=k("div");for(let T=0;T<V.length;T+=1)V[T].c();d=R(),_&&_.c(),g=R(),y=k("div"),G(A.$$.fragment),this.h()},l(T){e=I(T,"DIV",{class:!0});var M=D(e);t=I(M,"DIV",{class:!0});var L=D(t);r=I(L,"DIV",{class:!0});var ee=D(r);c.l(ee),ee.forEach(v),i=N(L),a=I(L,"DIV",{class:!0});var E=D(a);b&&b.l(E),E.forEach(v),L.forEach(v),s=N(M),l=I(M,"DIV",{class:!0});var U=D(l);h=I(U,"DIV",{class:!0});var J=D(h);for(let ae=0;ae<V.length;ae+=1)V[ae].l(J);J.forEach(v),d=N(U),_&&_.l(U),U.forEach(v),g=N(M),y=I(M,"DIV",{class:!0});var ce=D(y);X(A.$$.fragment,ce),ce.forEach(v),M.forEach(v),this.h()},h(){x(r,"class","app-component"),F(r,"width",`${n[9].codeScreen.widthInMm}mm`),F(r,"height",`${n[9].codeScreen.heightInMm}mm`),x(a,"class","preview-buttons"),x(t,"class","preview-child"),x(h,"class","tab-names"),x(l,"class","secondary-child"),x(y,"class","code-editor-child"),x(e,"class","edit-page-modal svelte-y2t29n")},m(T,M){$(T,e,M),w(e,t),w(t,r),c.m(r,null),w(t,i),w(t,a),b&&b.m(a,null),w(e,s),w(e,l),w(l,h);for(let L=0;L<V.length;L+=1)V[L]&&V[L].m(h,null);w(l,d),~p&&P[p].m(l,null),w(e,g),w(e,y),q(A,y,null),u=!0},p(T,M){if(M&4&&te(o,o=T[2])?(de(),B(c,1,1,z),me(),c=Pt(T),c.c(),O(c,1),c.m(r,null)):c.p(T,M),M&512&&F(r,"width",`${T[9].codeScreen.widthInMm}mm`),M&512&&F(r,"height",`${T[9].codeScreen.heightInMm}mm`),m===(m=f(T))&&b?b.p(T,M):(b&&b.d(1),b=m&&m(T),b&&(b.c(),b.m(a,null))),M&1056){S=oe(T[10]);let E;for(E=0;E<S.length;E+=1){const U=At(T,S,E);V[E]?V[E].p(U,M):(V[E]=Et(U),V[E].c(),V[E].m(h,null))}for(;E<V.length;E+=1)V[E].d(1);V.length=S.length}let L=p;p=j(T),p===L?~p&&P[p].p(T,M):(_&&(de(),B(P[L],1,1,()=>{P[L]=null}),me()),~p?(_=P[p],_?_.p(T,M):(_=P[p]=C[p](T),_.c()),O(_,1),_.m(l,null)):_=null);const ee={};M&285213066&&(ee.$$scope={dirty:M,ctx:T}),A.$set(ee)},i(T){u||(O(c),O(_),O(A.$$.fragment,T),u=!0)},o(T){B(c),B(_),B(A.$$.fragment,T),u=!1},d(T){T&&v(e),c.d(T),b&&b.d(),Ge(V,T),~p&&P[p].d(),W(A)}}}function Vo(n){let e,t,r;function o(a){n[20](a)}let i={$$slots:{default:[Oo]},$$scope:{ctx:n}};return n[0]!==void 0&&(i.showModal=n[0]),e=new $e({props:i}),fe.push(()=>_e(e,"showModal",o)),{c(){G(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,s){q(e,a,s),r=!0},p(a,[s]){const l={};s&268436478&&(l.$$scope={dirty:s,ctx:a}),!t&&s&1&&(t=!0,l.showModal=a[0],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){B(e.$$.fragment,a),r=!1},d(a){W(e,a)}}}function Bo(n,e,t){let r,o,i,a;H(n,he,M=>t(16,o=M)),H(n,ke,M=>t(23,i=M)),H(n,ye,M=>t(9,a=M));let{showModal:s}=e,{pageId:l}=e,h=Math.random(),d,p="";const _=["Menu","Log","Icon"];let g=_[0],y=[],A=null,u="";const c=[{text:"Delete",onClick(){if(!confirm("Do you really want to delete this page?"))return;const M=o.findIndex(L=>L.id==l);o.splice(M,1),he.set(o),t(0,s=!1)}},{text:"Close",onClick(){t(0,s=!1)}}],f={onStateChange(M){t(3,d=M)},onLog(M,L){y.push({type:M,value:L}),t(6,y)},onError(M){y.push({type:"error",value:M}),t(6,y)},onIconCreated(M){t(4,p=M)},state:null,version:1};function m(){return f}async function b(){t(6,y=[]),await new Promise(M=>setTimeout(M,1)),f.state=null,f.version=1,A.save(),t(2,h=Math.random()),t(3,d=null),t(4,p="")}async function S(){t(6,y=[]),await new Promise(ee=>setTimeout(ee,1)),f.state=A.getModifiedState();const M=d.version,L=f.state.version;M!=L&&(f.state.version=M,f.version=L),t(2,h=Math.random()),t(3,d=null),t(4,p="")}function V(){return Re(i,o,r)}const C=M=>t(5,g=M),P=M=>t(8,u=M);function j(M){fe[M?"unshift":"push"](()=>{A=M,t(7,A)})}function T(M){s=M,t(0,s)}return n.$$set=M=>{"showModal"in M&&t(0,s=M.showModal),"pageId"in M&&t(1,l=M.pageId)},n.$$.update=()=>{n.$$.dirty&65538&&(r=o.find(M=>M.id==l))},[s,l,h,d,p,g,y,A,u,a,_,c,m,b,S,V,o,C,P,j,T]}class Ro extends ne{constructor(e){super(),re(this,e,Bo,Vo,te,{showModal:0,pageId:1})}}function jt(n){let e,t;return e=new st({props:{createAppCode:Re(n[4],n[3],{code:n[1].code})}}),{c(){G(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,o){q(e,r,o),t=!0},p(r,o){const i={};o&26&&(i.createAppCode=Re(r[4],r[3],{code:r[1].code})),e.$set(i)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){W(e,r)}}}function No(n){let e,t,r,o;return{c(){e=k("div"),this.h()},l(i){e=I(i,"DIV",{style:!0}),D(e).forEach(v),this.h()},h(){F(e,"height","100%")},m(i,a){$(i,e,a),r||(o=He(t=n[8].call(null,e,n[14])),r=!0)},p(i,a){t&&Qe(t.update)&&a&16384&&t.update.call(null,i[14])},d(i){i&&v(e),r=!1,o()}}}function $o(n){let e,t,r,o=n[2],i,a,s,l="Restart",h,d,p,_="Menu",g,y,A="Save and close",u,c,f="Delete this page template",m,b,S,V,C,P,j=jt(n);return S=new ln({props:{$$slots:{default:[No,({monaco:T})=>({14:T}),({monaco:T})=>T?16384:0]},$$scope:{ctx:n}}}),{c(){e=k("div"),t=k("div"),r=k("div"),j.c(),i=R(),a=k("div"),s=k("button"),s.textContent=l,h=R(),d=k("div"),p=k("h2"),p.textContent=_,g=R(),y=k("button"),y.textContent=A,u=R(),c=k("button"),c.textContent=f,m=R(),b=k("div"),G(S.$$.fragment),this.h()},l(T){e=I(T,"DIV",{class:!0});var M=D(e);t=I(M,"DIV",{class:!0});var L=D(t);r=I(L,"DIV",{class:!0});var ee=D(r);j.l(ee),ee.forEach(v),i=N(L),a=I(L,"DIV",{class:!0});var E=D(a);s=I(E,"BUTTON",{"data-svelte-h":!0}),K(s)!=="svelte-5snrhj"&&(s.textContent=l),E.forEach(v),L.forEach(v),h=N(M),d=I(M,"DIV",{class:!0});var U=D(d);p=I(U,"H2",{"data-svelte-h":!0}),K(p)!=="svelte-1k9wpi9"&&(p.textContent=_),g=N(U),y=I(U,"BUTTON",{"data-svelte-h":!0}),K(y)!=="svelte-cvu16r"&&(y.textContent=A),u=N(U),c=I(U,"BUTTON",{"data-svelte-h":!0}),K(c)!=="svelte-19vawev"&&(c.textContent=f),U.forEach(v),m=N(M),b=I(M,"DIV",{class:!0});var J=D(b);X(S.$$.fragment,J),J.forEach(v),M.forEach(v),this.h()},h(){x(r,"class","app-component svelte-ydwnab"),F(r,"width",`${n[5].codeScreen.widthInMm}mm`),F(r,"height",`${n[5].codeScreen.heightInMm}mm`),x(a,"class","preview-buttons svelte-ydwnab"),x(t,"class","preview-section svelte-ydwnab"),x(d,"class","menu svelte-ydwnab"),x(b,"class","code-editor svelte-ydwnab"),x(e,"class","edit-page-template-modal svelte-ydwnab")},m(T,M){$(T,e,M),w(e,t),w(t,r),j.m(r,null),w(t,i),w(t,a),w(a,s),w(e,h),w(e,d),w(d,p),w(d,g),w(d,y),w(d,u),w(d,c),w(e,m),w(e,b),q(S,b,null),V=!0,C||(P=[Y(s,"click",n[6]),Y(y,"click",n[10]),Y(c,"click",n[7])],C=!0)},p(T,M){M&4&&te(o,o=T[2])?(de(),B(j,1,1,z),me(),j=jt(T),j.c(),O(j,1),j.m(r,null)):j.p(T,M),M&32&&F(r,"width",`${T[5].codeScreen.widthInMm}mm`),M&32&&F(r,"height",`${T[5].codeScreen.heightInMm}mm`);const L={};M&49152&&(L.$$scope={dirty:M,ctx:T}),S.$set(L)},i(T){V||(O(j),O(S.$$.fragment,T),V=!0)},o(T){B(j),B(S.$$.fragment,T),V=!1},d(T){T&&v(e),j.d(T),W(S),C=!1,Ce(P)}}}function Fo(n){let e,t,r;function o(a){n[11](a)}let i={$$slots:{default:[$o]},$$scope:{ctx:n}};return n[0]!==void 0&&(i.showModal=n[0]),e=new $e({props:i}),fe.push(()=>_e(e,"showModal",o)),{c(){G(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,s){q(e,a,s),r=!0},p(a,[s]){const l={};s&32831&&(l.$$scope={dirty:s,ctx:a}),!t&&s&1&&(t=!0,l.showModal=a[0],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){B(e.$$.fragment,a),r=!1},d(a){W(e,a)}}}function Lo(n,e,t){let r,o,i,a;H(n,he,c=>t(3,r=c)),H(n,ke,c=>t(4,o=c)),H(n,Ee,c=>t(13,i=c)),H(n,ye,c=>t(5,a=c));let{showModal:s}=e,{pageTemplateId:l}=e;const h=i.find(c=>c.id==l);let d,p=0;function _(){const c=d.getValue();t(1,h.code=c,h),Ee.set(i),t(2,p+=1)}function g(){if(!confirm("Really delete?"))return;const c=i.findIndex(f=>f.id==l);i.splice(c,1),t(0,s=!1)}function y(c,f){const m=[{variable:"p",code:h.code},{variable:"a",code:o.code}].map(C=>({variable:C.variable,monacoClassModel:f.editor.createModel(C.code,"javascript"),monacoVariableModel:f.editor.createModel(`const ${C.variable} = new ${ge(C.code)}()`,"javascript")}));function b(C){const P=m[C],j=ge(P.monacoClassModel.getValue());m[C].monacoVariableModel.setValue(`const ${P.variable} = new ${j}();`)}for(let C=0;C<m.length;C++){const P=m[C];b(C),P.monacoClassModel.onDidChangeContent(j=>{b(C)})}const S=r.map(C=>ge(C.code)),V=f.editor.createModel(S.map(C=>`class ${C} extends Page{}`).join(`
`),"javascript");return d=f.editor.create(c,{model:m[0].monacoClassModel,minimap:{enabled:!1},fontSize:16,tabSize:2,automaticLayout:!0,scrollBeyondLastLine:!1,renderWhitespace:"all",trimAutoWhitespace:!1,language:"javascript",suggest:{showKeywords:!1}}),{onDestroy(){d.dispose(),V.dispose()}}}it(_);const A=()=>t(0,s=!1);function u(c){s=c,t(0,s)}return n.$$set=c=>{"showModal"in c&&t(0,s=c.showModal),"pageTemplateId"in c&&t(9,l=c.pageTemplateId)},[s,h,p,r,o,a,_,g,y,l,A,u]}class Uo extends ne{constructor(e){super(),re(this,e,Lo,Fo,te,{showModal:0,pageTemplateId:9})}}function Dt(n,e,t){const r=n.slice();return r[16]=e[t],r}function Ot(n,e){let t,r,o,i,a,s,l,h="Edit",d,p,_,g;o=new st({props:{createAppCode:Re(e[6],e[4],{code:e[16].code},!0)}});function y(){return e[12](e[16])}function A(){return e[13](e[16])}return{key:n,first:null,c(){t=k("div"),r=k("div"),G(o.$$.fragment),i=R(),a=k("div"),s=R(),l=k("button"),l.textContent=h,d=R(),this.h()},l(u){t=I(u,"DIV",{class:!0});var c=D(t);r=I(c,"DIV",{class:!0});var f=D(r);X(o.$$.fragment,f),i=N(f),a=I(f,"DIV",{class:!0}),D(a).forEach(v),f.forEach(v),s=N(c),l=I(c,"BUTTON",{class:!0,"data-svelte-h":!0}),K(l)!=="svelte-eodtwe"&&(l.textContent=h),d=N(c),c.forEach(v),this.h()},h(){x(a,"class","overlay svelte-1dwdo8c"),x(r,"class","page-template svelte-1dwdo8c"),F(r,"width",`${e[5].folderScreen.widthInMm}mm`),F(r,"height",`${e[5].folderScreen.heightInMm}mm`),x(l,"class","edit-page-button svelte-1dwdo8c"),x(t,"class","page-template-box svelte-1dwdo8c"),this.first=t},m(u,c){$(u,t,c),w(t,r),q(o,r,null),w(r,i),w(r,a),w(t,s),w(t,l),w(t,d),p=!0,_||(g=[Y(r,"click",Ye(y)),Y(l,"click",Ye(A))],_=!0)},p(u,c){e=u;const f={};c&88&&(f.createAppCode=Re(e[6],e[4],{code:e[16].code},!0)),o.$set(f),c&32&&F(r,"width",`${e[5].folderScreen.widthInMm}mm`),c&32&&F(r,"height",`${e[5].folderScreen.heightInMm}mm`)},i(u){p||(O(o.$$.fragment,u),p=!0)},o(u){B(o.$$.fragment,u),p=!1},d(u){u&&v(t),W(o),_=!1,Ce(g)}}}function Yo(n){let e,t,r="Create Page (choose template)",o,i,a=[],s=new Map,l,h,d="Create new page template",p,_,g,y=oe(n[3]);const A=u=>u[16].id;for(let u=0;u<y.length;u+=1){let c=Dt(n,y,u),f=A(c);s.set(f,a[u]=Ot(f,c))}return{c(){e=k("div"),t=k("h1"),t.textContent=r,o=R(),i=k("div");for(let u=0;u<a.length;u+=1)a[u].c();l=R(),h=k("button"),h.textContent=d,this.h()},l(u){e=I(u,"DIV",{class:!0});var c=D(e);t=I(c,"H1",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-1fbxl57"&&(t.textContent=r),o=N(c),i=I(c,"DIV",{class:!0});var f=D(i);for(let m=0;m<a.length;m+=1)a[m].l(f);f.forEach(v),l=N(c),h=I(c,"BUTTON",{class:!0,"data-svelte-h":!0}),K(h)!=="svelte-wmwgso"&&(h.textContent=d),c.forEach(v),this.h()},h(){x(t,"class","svelte-1dwdo8c"),x(i,"class","page-template-boxes svelte-1dwdo8c"),x(h,"class","new-page-template-button svelte-1dwdo8c"),x(e,"class","create-page-modal svelte-1dwdo8c")},m(u,c){$(u,e,c),w(e,t),w(e,o),w(e,i);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(i,null);w(e,l),w(e,h),p=!0,_||(g=Y(h,"click",n[8]),_=!0)},p(u,c){c&254&&(y=oe(u[3]),de(),a=Ze(a,c,A,1,u,y,s,i,tn,Ot,null,Dt),me())},i(u){if(!p){for(let c=0;c<y.length;c+=1)O(a[c]);p=!0}},o(u){for(let c=0;c<a.length;c+=1)B(a[c]);p=!1},d(u){u&&v(e);for(let c=0;c<a.length;c+=1)a[c].d();_=!1,g()}}}function Vt(n){let e,t,r;function o(a){n[15](a)}let i={pageTemplateId:n[2]};return n[1]!==void 0&&(i.showModal=n[1]),e=new Uo({props:i}),fe.push(()=>_e(e,"showModal",o)),{c(){G(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,s){q(e,a,s),r=!0},p(a,s){const l={};s&4&&(l.pageTemplateId=a[2]),!t&&s&2&&(t=!0,l.showModal=a[1],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){B(e.$$.fragment,a),r=!1},d(a){W(e,a)}}}function zo(n){let e,t,r,o,i;function a(h){n[14](h)}let s={$$slots:{default:[Yo]},$$scope:{ctx:n}};n[0]!==void 0&&(s.showModal=n[0]),e=new $e({props:s}),fe.push(()=>_e(e,"showModal",a));let l=n[1]&&Vt(n);return{c(){G(e.$$.fragment),r=R(),l&&l.c(),o=le()},l(h){X(e.$$.fragment,h),r=N(h),l&&l.l(h),o=le()},m(h,d){q(e,h,d),$(h,r,d),l&&l.m(h,d),$(h,o,d),i=!0},p(h,[d]){const p={};d&524414&&(p.$$scope={dirty:d,ctx:h}),!t&&d&1&&(t=!0,p.showModal=h[0],ve(()=>t=!1)),e.$set(p),h[1]?l?(l.p(h,d),d&2&&O(l,1)):(l=Vt(h),l.c(),O(l,1),l.m(o.parentNode,o)):l&&(de(),B(l,1,1,()=>{l=null}),me())},i(h){i||(O(e.$$.fragment,h),O(l),i=!0)},o(h){B(e.$$.fragment,h),B(l),i=!1},d(h){h&&(v(r),v(o)),W(e,h),l&&l.d(h)}}}function Ho(n,e,t){let r,o,i,a;H(n,Ee,m=>t(3,r=m)),H(n,he,m=>t(4,o=m)),H(n,ye,m=>t(5,i=m)),H(n,ke,m=>t(6,a=m));let{showModal:s}=e,{folderId:l}=e,{createAtX:h}=e,{createAtY:d}=e,p=!1,_=-1;function g(m){var P;const b=h,S=d,V=prompt("Enter page name:");if(!V)return;const C=m.code.replace(/class \w+ extends/,`class ${V} extends`);o.push({id:(((P=o.at(-1))==null?void 0:P.id)??0)+1,folderId:l,code:C,x:b,y:S}),he.set(o),t(0,s=!1)}function y(){var b;const m=(((b=r.at(-1))==null?void 0:b.id)??0)+1;r.push({id:m,title:"New Template",code:`
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
			`.trim()}),t(1,p=!0),t(2,_=m)}const A=m=>g(m),u=m=>{t(2,_=m.id),t(1,p=!0)};function c(m){s=m,t(0,s)}function f(m){p=m,t(1,p)}return n.$$set=m=>{"showModal"in m&&t(0,s=m.showModal),"folderId"in m&&t(9,l=m.folderId),"createAtX"in m&&t(10,h=m.createAtX),"createAtY"in m&&t(11,d=m.createAtY)},[s,p,_,r,o,i,a,g,y,l,h,d,A,u,c,f]}class Go extends ne{constructor(e){super(),re(this,e,Ho,zo,te,{showModal:0,folderId:9,createAtX:10,createAtY:11})}}function Xo(n){let e,t,r,o;return{c(){e=k("iframe"),this.h()},l(i){e=I(i,"IFRAME",{title:!0,class:!0}),D(e).forEach(v),this.h()},h(){x(e,"title","Preview of App"),x(e,"class","svelte-cd8oo8")},m(i,a){$(i,e,a),r||(o=He(t=qo.call(null,e,n[0])),r=!0)},p(i,[a]){t&&Qe(t.update)&&a&1&&t.update.call(null,i[0])},i:z,o:z,d(i){i&&v(e),r=!1,o()}}}function qo(n,e){n.addEventListener("load",()=>t(e)),n.srcdoc="";function t(r){const o=n.contentDocument.body;o.style.width="100vw",o.style.height="100vh",o.style.margin="0",o.replaceChildren(r.createElement())}return{update:t}}function Wo(n,e,t){let{frameworkApp:r=null}=e;return n.$$set=o=>{"frameworkApp"in o&&t(0,r=o.frameworkApp)},[r]}class Ko extends ne{constructor(e){super(),re(this,e,Wo,Xo,te,{frameworkApp:0})}}const Bt=new Map,Jo={isPreview:!0};function Qo(n,e,t){const r=Re(n,e,t,!0),o=Bt.get(r);if(o)return o;const i=new wn(r,Jo);return i.start(),Bt.set(r,i),i}function Rt(n,e,t){const r=n.slice();return r[27]=e[t].page,r[28]=e[t].frameworkApp,r}function Nt(n,e,t){const r=n.slice();return r[31]=e[t],r}function $t(n){let e,t=n[31].text+"",r;return{c(){e=k("div"),r=ie(t),this.h()},l(o){e=I(o,"DIV",{class:!0});var i=D(e);r=se(i,t),i.forEach(v),this.h()},h(){x(e,"class","line svelte-33b36g"),Be(e,"isBack",n[31].isBack),F(e,"width",`${n[31].length}px`),F(e,"transform",`translate(${n[31].centerX}px, ${n[31].centerY}px) translate(-50%, -50%) rotate(${n[31].angle}deg)`)},m(o,i){$(o,e,i),w(e,r)},p(o,i){i[0]&256&&t!==(t=o[31].text+"")&&je(r,t),i[0]&256&&Be(e,"isBack",o[31].isBack),i[0]&256&&F(e,"width",`${o[31].length}px`),i[0]&256&&F(e,"transform",`translate(${o[31].centerX}px, ${o[31].centerY}px) translate(-50%, -50%) rotate(${o[31].angle}deg)`)},d(o){o&&v(e)}}}function Ft(n,e){let t,r,o=ge(e[27].code)+"",i,a,s,l,h,d,p,_;function g(){return e[19](e[27])}l=new Ko({props:{frameworkApp:e[28]}});function y(){return e[20](e[27])}function A(...u){return e[21](e[27],...u)}return{key:n,first:null,c(){t=k("div"),r=k("div"),i=ie(o),a=R(),s=k("div"),G(l.$$.fragment),h=R(),this.h()},l(u){t=I(u,"DIV",{class:!0,draggable:!0});var c=D(t);r=I(c,"DIV",{class:!0});var f=D(r);i=se(f,o),f.forEach(v),a=N(c),s=I(c,"DIV",{class:!0});var m=D(s);X(l.$$.fragment,m),m.forEach(v),h=N(c),c.forEach(v),this.h()},h(){x(r,"class","name svelte-33b36g"),x(s,"class","page svelte-33b36g"),x(t,"class","page-container svelte-33b36g"),x(t,"draggable","true"),F(t,"width",`${e[9].folderScreen.widthInMm}mm`),F(t,"height",`${e[9].folderScreen.heightInMm}mm`),F(t,"transform",`translate(${e[27].x}px, ${e[27].y}px) translate(-50%, -50%)`),this.first=t},m(u,c){$(u,t,c),w(t,r),w(r,i),w(t,a),w(t,s),q(l,s,null),w(t,h),d=!0,p||(_=[Y(r,"click",Ye(g)),Y(s,"click",Ye(y)),Y(t,"dragstart",A)],p=!0)},p(u,c){e=u,(!d||c[0]&2)&&o!==(o=ge(e[27].code)+"")&&je(i,o);const f={};c[0]&2&&(f.frameworkApp=e[28]),l.$set(f),c[0]&512&&F(t,"width",`${e[9].folderScreen.widthInMm}mm`),c[0]&512&&F(t,"height",`${e[9].folderScreen.heightInMm}mm`),c[0]&2&&F(t,"transform",`translate(${e[27].x}px, ${e[27].y}px) translate(-50%, -50%)`)},i(u){d||(O(l.$$.fragment,u),d=!0)},o(u){B(l.$$.fragment,u),d=!1},d(u){u&&v(t),W(l),p=!1,Ce(_)}}}function Lt(n){let e,t,r;function o(a){n[22](a)}let i={pageId:n[4]};return n[3]!==void 0&&(i.showModal=n[3]),e=new Ro({props:i}),fe.push(()=>_e(e,"showModal",o)),{c(){G(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,s){q(e,a,s),r=!0},p(a,s){const l={};s[0]&16&&(l.pageId=a[4]),!t&&s[0]&8&&(t=!0,l.showModal=a[3],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){B(e.$$.fragment,a),r=!1},d(a){W(e,a)}}}function Ut(n){let e,t,r;function o(a){n[23](a)}let i={folderId:n[0],createAtX:n[5]-n[7].offsetX,createAtY:n[6]-n[7].offsetY};return n[2]!==void 0&&(i.showModal=n[2]),e=new Go({props:i}),fe.push(()=>_e(e,"showModal",o)),{c(){G(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,s){q(e,a,s),r=!0},p(a,s){const l={};s[0]&1&&(l.folderId=a[0]),s[0]&160&&(l.createAtX=a[5]-a[7].offsetX),s[0]&192&&(l.createAtY=a[6]-a[7].offsetY),!t&&s[0]&4&&(t=!0,l.showModal=a[2],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){B(e.$$.fragment,a),r=!1},d(a){W(e,a)}}}function Zo(n){let e,t,r,o=[],i=new Map,a,s,l,h,d,p,_=oe(n[8]),g=[];for(let f=0;f<_.length;f+=1)g[f]=$t(Nt(n,_,f));let y=oe(n[1]);const A=f=>f[27].id;for(let f=0;f<y.length;f+=1){let m=Rt(n,y,f),b=A(m);i.set(b,o[f]=Ft(b,m))}let u=n[3]&&Lt(n),c=n[2]&&Ut(n);return{c(){e=k("div"),t=k("div");for(let f=0;f<g.length;f+=1)g[f].c();r=R();for(let f=0;f<o.length;f+=1)o[f].c();a=R(),u&&u.c(),s=R(),c&&c.c(),l=le(),this.h()},l(f){e=I(f,"DIV",{class:!0,draggable:!0});var m=D(e);t=I(m,"DIV",{class:!0});var b=D(t);for(let S=0;S<g.length;S+=1)g[S].l(b);r=N(b);for(let S=0;S<o.length;S+=1)o[S].l(b);b.forEach(v),m.forEach(v),a=N(f),u&&u.l(f),s=N(f),c&&c.l(f),l=le(),this.h()},h(){x(t,"class","pages svelte-33b36g"),F(t,"transform",`translate(${n[7].offsetX}px, ${n[7].offsetY}px)`),x(e,"class","folder svelte-33b36g"),x(e,"draggable","true"),F(e,"background-position-x",`${n[7].offsetX}px`),F(e,"background-position-y",`${n[7].offsetY}px`)},m(f,m){$(f,e,m),w(e,t);for(let b=0;b<g.length;b+=1)g[b]&&g[b].m(t,null);w(t,r);for(let b=0;b<o.length;b+=1)o[b]&&o[b].m(t,null);$(f,a,m),u&&u.m(f,m),$(f,s,m),c&&c.m(f,m),$(f,l,m),h=!0,d||(p=[Y(e,"click",n[14]),Y(e,"dragstart",n[10]),Y(e,"dragover",lt(n[11])),Y(e,"drop",lt(n[13]))],d=!0)},p(f,m){if(m[0]&256){_=oe(f[8]);let b;for(b=0;b<_.length;b+=1){const S=Nt(f,_,b);g[b]?g[b].p(S,m):(g[b]=$t(S),g[b].c(),g[b].m(t,r))}for(;b<g.length;b+=1)g[b].d(1);g.length=_.length}m[0]&4634&&(y=oe(f[1]),de(),o=Ze(o,m,A,1,f,y,i,t,tn,Ft,null,Rt),me()),m[0]&128&&F(t,"transform",`translate(${f[7].offsetX}px, ${f[7].offsetY}px)`),m[0]&128&&F(e,"background-position-x",`${f[7].offsetX}px`),m[0]&128&&F(e,"background-position-y",`${f[7].offsetY}px`),f[3]?u?(u.p(f,m),m[0]&8&&O(u,1)):(u=Lt(f),u.c(),O(u,1),u.m(s.parentNode,s)):u&&(de(),B(u,1,1,()=>{u=null}),me()),f[2]?c?(c.p(f,m),m[0]&4&&O(c,1)):(c=Ut(f),c.c(),O(c,1),c.m(l.parentNode,l)):c&&(de(),B(c,1,1,()=>{c=null}),me())},i(f){if(!h){for(let m=0;m<y.length;m+=1)O(o[m]);O(u),O(c),h=!0}},o(f){for(let m=0;m<o.length;m+=1)B(o[m]);B(u),B(c),h=!1},d(f){f&&(v(e),v(a),v(s),v(l)),Ge(g,f);for(let m=0;m<o.length;m+=1)o[m].d();u&&u.d(f),c&&c.d(f),d=!1,Ce(p)}}}const ea=50;function ta(n){navigator.clipboard.writeText(n)}function na(n,e,t){let r,o,i,a,s,l,h,d;H(n,he,E=>t(16,s=E)),H(n,Me,E=>t(17,l=E)),H(n,ke,E=>t(18,h=E)),H(n,ye,E=>t(9,d=E));let{folderId:p}=e,_=!1,g=!1,y=-1,A=-1,u=-1,c=null;function f(E,U){return U.map(J=>{const ce=Qo(E,s,J);return{page:J,frameworkApp:ce}})}function m(E){var J;const U=[];for(const ce of E){const ae=(J=ce.frameworkApp)==null?void 0:J.frameworkPage;if(!ae)continue;const De=ce.page.x,be=ce.page.y,Fe=[].concat(ae.beforeDirections,ae.afterDirections);for(const ue of Fe){const Oe=E.find(Ae=>ue.getPage().proxyName==ge(Ae.page.code));if(Oe){const Ae=Oe.page.x,qe=Oe.page.y,Q=Ae-De,Z=qe-be,we=Math.sqrt(Q**2+Z**2),Ve=De+Q/2;if(0<=Q){const Pe=Math.atan2(Z,Q)*180/Math.PI,pe=be+Z/2;U.push({length:we,angle:Pe,centerX:Ve,centerY:pe,text:ue.getDescription(),isBack:!1})}else{const Pe=Math.atan2(Z,Q)*180/Math.PI+180,pe=be+Z/2+ea;U.push({length:we,angle:Pe,centerX:Ve,centerY:pe,text:ue.getDescription(),isBack:!0})}}}}return U}function b(E){c={action:"moveBackground",initialFolderOffsetX:r.offsetX,initialFolderOffsetY:r.offsetY,startMouseX:E.clientX,startMouseY:E.clientY};const U=document.createElement("img");U.style.display="none",E.dataTransfer.setDragImage(U,0,0)}function S(E){switch(c.action){case"moveBackground":const U=E.clientX-c.startMouseX,J=E.clientY-c.startMouseY;t(7,r.offsetX=c.initialFolderOffsetX+U,r),t(7,r.offsetY=c.initialFolderOffsetY+J,r),Me.set(l);break}}function V(E,U){E.stopPropagation(),c={action:"movePage",pageId:U.id,startMouseX:E.clientX,startMouseY:E.clientY}}function C(E){switch(c.action){case"movePage":const U=E.clientX-c.startMouseX,J=E.clientY-c.startMouseY,ce=s.find(ae=>ae.id==c.pageId);ce.x+=U,ce.y+=J,he.set(s);break}}function P(E){t(4,y=-1),t(2,_=!0),t(5,A=E.clientX),t(6,u=E.clientY)}const j=E=>ta(ge(E.code)),T=E=>{t(3,g=!0),t(4,y=E.id)},M=(E,U)=>V(U,E);function L(E){g=E,t(3,g)}function ee(E){_=E,t(2,_)}return n.$$set=E=>{"folderId"in E&&t(0,p=E.folderId)},n.$$.update=()=>{n.$$.dirty[0]&131073&&t(7,r=l.find(E=>E.id==p)??l[0]),n.$$.dirty[0]&65537&&t(15,o=s.filter(E=>E.folderId==p)),n.$$.dirty[0]&294912&&t(1,i=f(h,o)),n.$$.dirty[0]&2&&t(8,a=m(i))},[p,i,_,g,y,A,u,r,a,d,b,S,V,C,P,o,s,l,h,j,T,M,L,ee]}class ra extends ne{constructor(e){super(),re(this,e,na,Zo,te,{folderId:0},null,[-1,-1])}}function Yt(n,e,t){const r=n.slice();return r[10]=e[t],r}function zt(n,e){let t,r=e[10].name+"",o,i,a;function s(){return e[6](e[10])}return{key:n,first:null,c(){t=k("button"),o=ie(r),this.h()},l(l){t=I(l,"BUTTON",{class:!0});var h=D(t);o=se(h,r),h.forEach(v),this.h()},h(){x(t,"class","svelte-q0xr25"),Be(t,"current",e[1]==e[10].id),this.first=t},m(l,h){$(l,t,h),w(t,o),i||(a=Y(t,"click",s),i=!0)},p(l,h){e=l,h&4&&r!==(r=e[10].name+"")&&je(o,r),h&6&&Be(t,"current",e[1]==e[10].id)},d(l){l&&v(t),i=!1,a()}}}function Ht(n){let e,t,r;function o(a){n[8](a)}let i={options:n[0]};return n[3]!==void 0&&(i.showModal=n[3]),e=new Pn({props:i}),fe.push(()=>_e(e,"showModal",o)),{c(){G(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,s){q(e,a,s),r=!0},p(a,s){const l={};s&1&&(l.options=a[0]),!t&&s&8&&(t=!0,l.showModal=a[3],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){B(e.$$.fragment,a),r=!1},d(a){W(e,a)}}}function Gt(n){let e,t,r;function o(a){n[9](a)}let i={folderId:n[1]};return n[4]!==void 0&&(i.showModal=n[4]),e=new On({props:i}),fe.push(()=>_e(e,"showModal",o)),{c(){G(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,s){q(e,a,s),r=!0},p(a,s){const l={};s&2&&(l.folderId=a[1]),!t&&s&16&&(t=!0,l.showModal=a[4],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){B(e.$$.fragment,a),r=!1},d(a){W(e,a)}}}function oa(n){let e,t,r,o,i,a,s=[],l=new Map,h,d,p="+",_,g,y="☰",A,u,c,f,m,b;r=new ra({props:{folderId:n[1]}});let S=oe(n[2]);const V=j=>j[10].id;for(let j=0;j<S.length;j+=1){let T=Yt(n,S,j),M=V(T);l.set(M,s[j]=zt(M,T))}let C=n[3]&&Ht(n),P=n[4]&&Gt(n);return{c(){e=k("div"),t=k("div"),G(r.$$.fragment),o=R(),i=k("div"),a=k("div");for(let j=0;j<s.length;j+=1)s[j].c();h=R(),d=k("button"),d.textContent=p,_=R(),g=k("button"),g.textContent=y,A=R(),C&&C.c(),u=R(),P&&P.c(),c=le(),this.h()},l(j){e=I(j,"DIV",{class:!0});var T=D(e);t=I(T,"DIV",{class:!0});var M=D(t);X(r.$$.fragment,M),M.forEach(v),o=N(T),i=I(T,"DIV",{class:!0});var L=D(i);a=I(L,"DIV",{class:!0});var ee=D(a);for(let E=0;E<s.length;E+=1)s[E].l(ee);h=N(ee),d=I(ee,"BUTTON",{class:!0,"data-svelte-h":!0}),K(d)!=="svelte-1hnfxpo"&&(d.textContent=p),ee.forEach(v),L.forEach(v),_=N(T),g=I(T,"BUTTON",{class:!0,"data-svelte-h":!0}),K(g)!=="svelte-1x767tg"&&(g.textContent=y),T.forEach(v),A=N(j),C&&C.l(j),u=N(j),P&&P.l(j),c=le(),this.h()},h(){x(t,"class","folder svelte-q0xr25"),x(d,"class","create-folder svelte-q0xr25"),x(a,"class","folder-titles svelte-q0xr25"),x(i,"class","header svelte-q0xr25"),x(g,"class","main-menu-button svelte-q0xr25"),x(e,"class","app svelte-q0xr25")},m(j,T){$(j,e,T),w(e,t),q(r,t,null),w(e,o),w(e,i),w(i,a);for(let M=0;M<s.length;M+=1)s[M]&&s[M].m(a,null);w(a,h),w(a,d),w(e,_),w(e,g),$(j,A,T),C&&C.m(j,T),$(j,u,T),P&&P.m(j,T),$(j,c,T),f=!0,m||(b=[Y(d,"click",n[5]),Y(g,"click",n[7])],m=!0)},p(j,[T]){const M={};T&2&&(M.folderId=j[1]),r.$set(M),T&22&&(S=oe(j[2]),s=Ze(s,T,V,1,j,S,l,a,en,zt,h,Yt)),j[3]?C?(C.p(j,T),T&8&&O(C,1)):(C=Ht(j),C.c(),O(C,1),C.m(u.parentNode,u)):C&&(de(),B(C,1,1,()=>{C=null}),me()),j[4]?P?(P.p(j,T),T&16&&O(P,1)):(P=Gt(j),P.c(),O(P,1),P.m(c.parentNode,c)):P&&(de(),B(P,1,1,()=>{P=null}),me())},i(j){f||(O(r.$$.fragment,j),O(C),O(P),f=!0)},o(j){B(r.$$.fragment,j),B(C),B(P),f=!1},d(j){j&&(v(e),v(A),v(u),v(c)),W(r);for(let T=0;T<s.length;T+=1)s[T].d();C&&C.d(j),P&&P.d(j),m=!1,Ce(b)}}}function aa(n,e,t){let r;H(n,Me,g=>t(2,r=g));let{mainMenuOptions:o={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[]}}=e,i=r[0].id,a=!1,s=!1;function l(){const g=r.at(-1).id+1;r.push({id:g,name:"New folder",offsetX:0,offsetY:0}),Me.set(r),t(1,i=g),t(4,s=!0)}const h=g=>{i==g.id?t(4,s=!0):t(1,i=g.id)},d=()=>t(3,a=!0);function p(g){a=g,t(3,a)}function _(g){s=g,t(4,s)}return n.$$set=g=>{"mainMenuOptions"in g&&t(0,o=g.mainMenuOptions)},n.$$.update=()=>{n.$$.dirty&6&&(r.find(g=>g.id==i)||t(1,i=r[0].id))},[o,i,r,a,s,l,h,d,p,_]}class ia extends ne{constructor(e){super(),re(this,e,aa,oa,te,{mainMenuOptions:0})}}const Le={editorSettings:{codeScreen:{widthInMm:40*1.5,heightInMm:66*1.5},folderScreen:{widthInMm:40,heightInMm:66}},app:{code:`
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
		`.trim()}]};function Xt(n){let e,t;return e=new ia({props:{mainMenuOptions:n[0]}}),{c(){G(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,o){q(e,r,o),t=!0},p(r,o){const i={};o&1&&(i.mainMenuOptions=r[0]),e.$set(i)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){W(e,r)}}}function sa(n){let e,t,r=n[1]&&Xt(n);return{c(){r&&r.c(),e=le()},l(o){r&&r.l(o),e=le()},m(o,i){r&&r.m(o,i),$(o,e,i),t=!0},p(o,[i]){o[1]?r?(r.p(o,i),i&2&&O(r,1)):(r=Xt(o),r.c(),O(r,1),r.m(e.parentNode,e)):r&&(de(),B(r,1,1,()=>{r=null}),me())},i(o){t||(O(r),t=!0)},o(o){B(r),t=!1},d(o){o&&v(e),r&&r.d(o)}}}function la(n,e,t){let r,o,i,a,s;H(n,Ee,p=>t(3,r=p)),H(n,he,p=>t(4,o=p)),H(n,Me,p=>t(5,i=p)),H(n,ke,p=>t(6,a=p)),H(n,ye,p=>t(7,s=p));let{mainMenuOptions:l={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[]}}=e,{bagaCode:h=""}=e,d=!1;return Zt(()=>{let p,_,g,y,A;if(h!="")try{const u=nn(h);p=u.editorSettings,_=u.app,g=u.folders,y=u.pages,A=u.pageTemplates}catch(u){console.log(u),alert("The baga code given to the editor is invalid. The default project will be loaded instead.")}Te(ye,s=p??Le.editorSettings,s),Te(ke,a=_??Le.app,a),Te(Me,i=g??Le.folders,i),Te(he,o=y??Le.pages,o),Te(Ee,r=A??Le.pageTemplates,r),t(1,d=!0)}),n.$$set=p=>{"mainMenuOptions"in p&&t(0,l=p.mainMenuOptions),"bagaCode"in p&&t(2,h=p.bagaCode)},[l,d,h]}class ha extends ne{constructor(e){super(),re(this,e,la,sa,te,{mainMenuOptions:0,bagaCode:2})}}function qt(n){let e,t;return e=new ha({props:{bagaCode:n[0],mainMenuOptions:n[3]}}),{c(){G(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,o){q(e,r,o),t=!0},p(r,o){const i={};o&1&&(i.bagaCode=r[0]),e.$set(i)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){W(e,r)}}}function ca(n){let e,t,r,o,i=n[1]&&qt(n);return{c(){e=k("meta"),t=R(),i&&i.c(),r=le(),this.h()},l(a){const s=bn("svelte-10aecs7",document.head);e=I(s,"META",{"http-equiv":!0,content:!0}),s.forEach(v),t=N(a),i&&i.l(a),r=le(),this.h()},h(){x(e,"http-equiv","Content-Security-Policy"),x(e,"content",n[2])},m(a,s){w(document.head,e),$(a,t,s),i&&i.m(a,s),$(a,r,s),o=!0},p(a,[s]){a[1]?i?(i.p(a,s),s&2&&O(i,1)):(i=qt(a),i.c(),O(i,1),i.m(r.parentNode,r)):i&&(de(),B(i,1,1,()=>{i=null}),me())},i(a){o||(O(i),o=!0)},o(a){B(i),o=!1},d(a){a&&(v(t),v(r)),v(e),i&&i.d(a)}}}function ua(n,e,t){const r=["default-src 'none';","form-action 'none';","connect-src 'none';","img-src * data:;","script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net blob:;","style-src-attr 'self' 'unsafe-inline';","style-src-elem 'self' 'unsafe-inline' https://cdn.jsdelivr.net;","font-src https://cdn.jsdelivr.net;"].join(" "),o={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[{text:"Copy link to run app",onClick(s){const l=`https://bagawork.com/run#${s}`;navigator.clipboard.writeText(l)}}]};let i="",a=!1;return Zt(()=>{t(0,i=location.hash.substring("#".length)),t(1,a=!0)}),[i,a,r,o]}class _a extends ne{constructor(e){super(),re(this,e,ua,ca,te,{})}}export{_a as component};
