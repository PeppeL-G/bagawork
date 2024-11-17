import{z as hn,A as cn,v as Ke,l as un,s as ee,c as Wt,u as Kt,g as Jt,b as Qt,f as fe,B as ve,d as H,r as Ce,C as Te,n as Y,a as Re,i as Ge,j as dn,h as mn,D as st,o as Zt}from"../chunks/scheduler.B0TnBjPs.js";import{z as de,k as B,y as me,t as O,S as ne,i as re,e as k,a as I,d as P,h as v,o as A,j as $,C as z,F as ze,G as _e,c as G,f as q,m as X,l as W,I as Se,s as N,r as se,g as K,b as R,u as ie,v as F,p as w,B as Ie,q as le,x as qe,w as De,E as Be,J as fn,H as pn,n as gn,K as lt,D as bn}from"../chunks/index.Cnh3HYw3.js";import{e as oe,u as Ze,d as en,o as tn}from"../chunks/each.BCiS_dJw.js";import{a as ge,s as wn,g as Ne,F as vn}from"../chunks/show-app-in-element.4aZtT3i-.js";import{w as $e}from"../chunks/index.CBcONjAz.js";import{a as rt,g as nn}from"../chunks/project-compressor.Cxxezr6y.js";import"../chunks/index.BqYjTJ2D.js";function _n(n,e){const t=e.token={};function r(o,s,a,i){if(e.token!==t)return;e.resolved=i;let l=e.ctx;a!==void 0&&(l=l.slice(),l[a]=i);const h=o&&(e.current=o)(l);let d=!1;e.block&&(e.blocks?e.blocks.forEach((p,_)=>{_!==s&&p&&(de(),B(p,1,1,()=>{e.blocks[_]===p&&(e.blocks[_]=null)}),me())}):e.block.d(1),h.c(),O(h,1),h.m(e.mount(),e.anchor),d=!0),e.block=h,e.blocks&&(e.blocks[s]=h),d&&un()}if(hn(n)){const o=cn();if(n.then(s=>{Ke(o),r(e.then,1,e.value,s),Ke(null)},s=>{if(Ke(o),r(e.catch,2,e.error,s),Ke(null),!e.hasCatch)throw s}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,n),!0;e.resolved=n}}function Tn(n,e,t){const r=e.slice(),{resolved:o}=n;n.current===n.then&&(r[n.value]=o),n.current===n.catch&&(r[n.error]=o),n.block.p(r,t)}function yn(n){let e,t,r,o;const s=n[3].default,a=Wt(s,n,n[2],null);return{c(){e=k("div"),a&&a.c(),this.h()},l(i){e=I(i,"DIV",{class:!0});var l=P(e);a&&a.l(l),l.forEach(v),this.h()},h(){A(e,"class","modal svelte-pjkfh")},m(i,l){$(i,e,l),a&&a.m(e,null),t=!0,r||(o=z(e,"click",ze(n[0])),r=!0)},p(i,[l]){a&&a.p&&(!t||l&4)&&Kt(a,s,i,i[2],t?Qt(s,i[2],l,null):Jt(i[2]),null)},i(i){t||(O(a,i),t=!0)},o(i){B(a,i),t=!1},d(i){i&&v(e),a&&a.d(i),r=!1,o()}}}function kn(n,e,t){let{$$slots:r={},$$scope:o}=e,{showModal:s}=e;function a(i){i.target==i.currentTarget&&t(1,s=!1)}return n.$$set=i=>{"showModal"in i&&t(1,s=i.showModal),"$$scope"in i&&t(2,o=i.$$scope)},[a,s,o,r]}class Fe extends ne{constructor(e){super(),re(this,e,kn,yn,ee,{showModal:1})}}const ye=$e({}),ke=$e({}),Me=$e([]),he=$e([]),je=$e([]);function In(n){let e,t,r="Edit settings",o,s,a,i="Folder screen",l,h,d="The size of the preview screens on the folder page, and when selecting a page template.",p,_,g,y,x,u,c,f,m,b,S="Preview folder screen size",V,C,E,D="Code screen",T,M,U="The size of the preview screen on the pages where you edit code.",te,j,L,J,ce,ae,Pe,be,Ue,ue,Oe="Preview code screen size",xe,We;return{c(){e=k("div"),t=k("h1"),t.textContent=r,o=N(),s=k("div"),a=k("h2"),a.textContent=i,l=N(),h=k("p"),h.textContent=d,p=N(),_=k("div"),g=se(`Width in mm:
				`),y=k("input"),x=N(),u=k("div"),c=se(`Height in mm:
				`),f=k("input"),m=N(),b=k("div"),b.textContent=S,V=N(),C=k("div"),E=k("h2"),E.textContent=D,T=N(),M=k("p"),M.textContent=U,te=N(),j=k("div"),L=se(`Width in mm:
				`),J=k("input"),ce=N(),ae=k("div"),Pe=se(`Height in mm:
				`),be=k("input"),Ue=N(),ue=k("div"),ue.textContent=Oe,this.h()},l(Q){e=I(Q,"DIV",{class:!0});var Z=P(e);t=I(Z,"H1",{"data-svelte-h":!0}),K(t)!=="svelte-12605jx"&&(t.textContent=r),o=R(Z),s=I(Z,"DIV",{class:!0});var we=P(s);a=I(we,"H2",{"data-svelte-h":!0}),K(a)!=="svelte-1eysbo6"&&(a.textContent=i),l=R(we),h=I(we,"P",{"data-svelte-h":!0}),K(h)!=="svelte-1pajsxr"&&(h.textContent=d),p=R(we),_=I(we,"DIV",{});var Ve=P(_);g=ie(Ve,`Width in mm:
				`),y=I(Ve,"INPUT",{type:!0,min:!0}),Ve.forEach(v),x=R(we),u=I(we,"DIV",{});var Ee=P(u);c=ie(Ee,`Height in mm:
				`),f=I(Ee,"INPUT",{type:!0,min:!0}),Ee.forEach(v),m=R(we),b=I(we,"DIV",{class:!0,"data-svelte-h":!0}),K(b)!=="svelte-1ewgrlo"&&(b.textContent=S),we.forEach(v),V=R(Z),C=I(Z,"DIV",{class:!0});var pe=P(C);E=I(pe,"H2",{"data-svelte-h":!0}),K(E)!=="svelte-1k237qn"&&(E.textContent=D),T=R(pe),M=I(pe,"P",{"data-svelte-h":!0}),K(M)!=="svelte-1mtgj5z"&&(M.textContent=U),te=R(pe),j=I(pe,"DIV",{});var tt=P(j);L=ie(tt,`Width in mm:
				`),J=I(tt,"INPUT",{type:!0,min:!0}),tt.forEach(v),ce=R(pe),ae=I(pe,"DIV",{});var nt=P(ae);Pe=ie(nt,`Height in mm:
				`),be=I(nt,"INPUT",{type:!0,min:!0}),nt.forEach(v),Ue=R(pe),ue=I(pe,"DIV",{class:!0,"data-svelte-h":!0}),K(ue)!=="svelte-icwf2t"&&(ue.textContent=Oe),pe.forEach(v),Z.forEach(v),this.h()},h(){A(y,"type","number"),A(y,"min","1"),A(f,"type","number"),A(f,"min","1"),A(b,"class","screen svelte-1wsz6vm"),F(b,"width",`${n[1].folderScreen.widthInMm}mm`),F(b,"height",`${n[1].folderScreen.heightInMm}mm`),A(s,"class","group svelte-1wsz6vm"),A(J,"type","number"),A(J,"min","1"),A(be,"type","number"),A(be,"min","1"),A(ue,"class","screen svelte-1wsz6vm"),F(ue,"width",`${n[1].codeScreen.widthInMm}mm`),F(ue,"height",`${n[1].codeScreen.heightInMm}mm`),A(C,"class","group svelte-1wsz6vm"),A(e,"class","edit-settings-modal svelte-1wsz6vm")},m(Q,Z){$(Q,e,Z),w(e,t),w(e,o),w(e,s),w(s,a),w(s,l),w(s,h),w(s,p),w(s,_),w(_,g),w(_,y),Ie(y,n[1].folderScreen.widthInMm),w(s,x),w(s,u),w(u,c),w(u,f),Ie(f,n[1].folderScreen.heightInMm),w(s,m),w(s,b),w(e,V),w(e,C),w(C,E),w(C,T),w(C,M),w(C,te),w(C,j),w(j,L),w(j,J),Ie(J,n[1].codeScreen.widthInMm),w(C,ce),w(C,ae),w(ae,Pe),w(ae,be),Ie(be,n[1].codeScreen.heightInMm),w(C,Ue),w(C,ue),xe||(We=[z(y,"input",n[2]),z(f,"input",n[3]),z(J,"input",n[4]),z(be,"input",n[5])],xe=!0)},p(Q,Z){Z&2&&Se(y.value)!==Q[1].folderScreen.widthInMm&&Ie(y,Q[1].folderScreen.widthInMm),Z&2&&Se(f.value)!==Q[1].folderScreen.heightInMm&&Ie(f,Q[1].folderScreen.heightInMm),Z&2&&F(b,"width",`${Q[1].folderScreen.widthInMm}mm`),Z&2&&F(b,"height",`${Q[1].folderScreen.heightInMm}mm`),Z&2&&Se(J.value)!==Q[1].codeScreen.widthInMm&&Ie(J,Q[1].codeScreen.widthInMm),Z&2&&Se(be.value)!==Q[1].codeScreen.heightInMm&&Ie(be,Q[1].codeScreen.heightInMm),Z&2&&F(ue,"width",`${Q[1].codeScreen.widthInMm}mm`),Z&2&&F(ue,"height",`${Q[1].codeScreen.heightInMm}mm`)},d(Q){Q&&v(e),xe=!1,Ce(We)}}}function Mn(n){let e,t,r;function o(a){n[6](a)}let s={$$slots:{default:[In]},$$scope:{ctx:n}};return n[0]!==void 0&&(s.showModal=n[0]),e=new Fe({props:s}),fe.push(()=>_e(e,"showModal",o)),{c(){G(e.$$.fragment)},l(a){q(e.$$.fragment,a)},m(a,i){X(e,a,i),r=!0},p(a,[i]){const l={};i&130&&(l.$$scope={dirty:i,ctx:a}),!t&&i&1&&(t=!0,l.showModal=a[0],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){B(e.$$.fragment,a),r=!1},d(a){W(e,a)}}}function Cn(n,e,t){let r;H(n,ye,d=>t(1,r=d));let{showModal:o=!0}=e;function s(){r.folderScreen.widthInMm=Se(this.value),ye.set(r)}function a(){r.folderScreen.heightInMm=Se(this.value),ye.set(r)}function i(){r.codeScreen.widthInMm=Se(this.value),ye.set(r)}function l(){r.codeScreen.heightInMm=Se(this.value),ye.set(r)}function h(d){o=d,t(0,o)}return n.$$set=d=>{"showModal"in d&&t(0,o=d.showModal)},[o,r,s,a,i,l,h]}class Sn extends ne{constructor(e){super(),re(this,e,Cn,Mn,ee,{showModal:0})}}function ht(n,e,t){const r=n.slice();return r[16]=e[t],r}function ct(n){let e,t,r="Copy project to clipboard as recreational link",o,s;return{c(){e=k("div"),t=k("button"),t.textContent=r},l(a){e=I(a,"DIV",{});var i=P(e);t=I(i,"BUTTON",{"data-svelte-h":!0}),K(t)!=="svelte-133s4n0"&&(t.textContent=r),i.forEach(v)},m(a,i){$(a,e,i),w(e,t),o||(s=z(t,"click",n[3]),o=!0)},p:Y,d(a){a&&v(e),o=!1,s()}}}function ut(n){let e,t,r="Save project to BAGA file",o,s,a,i,l,h='<label for="file">Load project from Baga file</label>',d,p;return{c(){e=k("div"),t=k("button"),t.textContent=r,o=N(),s=k("div"),a=k("input"),i=N(),l=k("button"),l.innerHTML=h,this.h()},l(_){e=I(_,"DIV",{});var g=P(e);t=I(g,"BUTTON",{"data-svelte-h":!0}),K(t)!=="svelte-1g98l3d"&&(t.textContent=r),g.forEach(v),o=R(_),s=I(_,"DIV",{});var y=P(s);a=I(y,"INPUT",{type:!0,id:!0,style:!0,accept:!0}),i=R(y),l=I(y,"BUTTON",{class:!0,"data-svelte-h":!0}),K(l)!=="svelte-1ucarmc"&&(l.innerHTML=h),y.forEach(v),this.h()},h(){A(a,"type","file"),A(a,"id","file"),F(a,"display","none"),A(a,"accept",".baga"),A(l,"class","open-button")},m(_,g){$(_,e,g),w(e,t),$(_,o,g),$(_,s,g),w(s,a),w(s,i),w(s,l),d||(p=[z(t,"click",n[4]),z(a,"change",n[5])],d=!0)},p:Y,d(_){_&&(v(e),v(o),v(s)),d=!1,Ce(p)}}}function dt(n){let e,t,r=n[16].text+"",o,s,a,i;function l(){return n[8](n[16])}return{c(){e=k("div"),t=k("button"),o=se(r),s=N()},l(h){e=I(h,"DIV",{});var d=P(e);t=I(d,"BUTTON",{});var p=P(t);o=ie(p,r),p.forEach(v),s=R(d),d.forEach(v)},m(h,d){$(h,e,d),w(e,t),w(t,o),w(e,s),a||(i=z(t,"click",l),a=!0)},p(h,d){n=h,d&2&&r!==(r=n[16].text+"")&&De(o,r)},d(h){h&&v(e),a=!1,i()}}}function An(n){let e,t,r="Main menu",o,s,a,i,l="Edit settings",h,d,p,_,g=n[1].showCopyLinkButton&&ct(n),y=n[1].showFileButtons&&ut(n),x=oe(n[1].extraOptions),u=[];for(let c=0;c<x.length;c+=1)u[c]=dt(ht(n,x,c));return{c(){e=k("div"),t=k("h1"),t.textContent=r,o=N(),g&&g.c(),s=N(),a=k("div"),i=k("button"),i.textContent=l,h=N(),y&&y.c(),d=N();for(let c=0;c<u.length;c+=1)u[c].c();this.h()},l(c){e=I(c,"DIV",{class:!0});var f=P(e);t=I(f,"H1",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-1x9r302"&&(t.textContent=r),o=R(f),g&&g.l(f),s=R(f),a=I(f,"DIV",{});var m=P(a);i=I(m,"BUTTON",{"data-svelte-h":!0}),K(i)!=="svelte-1m9tkp0"&&(i.textContent=l),m.forEach(v),h=R(f),y&&y.l(f),d=R(f);for(let b=0;b<u.length;b+=1)u[b].l(f);f.forEach(v),this.h()},h(){A(t,"class","svelte-tgu2et"),A(e,"class","main-menu-modal svelte-tgu2et")},m(c,f){$(c,e,f),w(e,t),w(e,o),g&&g.m(e,null),w(e,s),w(e,a),w(a,i),w(e,h),y&&y.m(e,null),w(e,d);for(let m=0;m<u.length;m+=1)u[m]&&u[m].m(e,null);p||(_=z(i,"click",n[7]),p=!0)},p(c,f){if(c[1].showCopyLinkButton?g?g.p(c,f):(g=ct(c),g.c(),g.m(e,s)):g&&(g.d(1),g=null),c[1].showFileButtons?y?y.p(c,f):(y=ut(c),y.c(),y.m(e,d)):y&&(y.d(1),y=null),f&66){x=oe(c[1].extraOptions);let m;for(m=0;m<x.length;m+=1){const b=ht(c,x,m);u[m]?u[m].p(b,f):(u[m]=dt(b),u[m].c(),u[m].m(e,null))}for(;m<u.length;m+=1)u[m].d(1);u.length=x.length}},d(c){c&&v(e),g&&g.d(),y&&y.d(),qe(u,c),p=!1,_()}}}function mt(n){let e,t,r;function o(a){n[10](a)}let s={};return n[2]!==void 0&&(s.showModal=n[2]),e=new Sn({props:s}),fe.push(()=>_e(e,"showModal",o)),{c(){G(e.$$.fragment)},l(a){q(e.$$.fragment,a)},m(a,i){X(e,a,i),r=!0},p(a,i){const l={};!t&&i&4&&(t=!0,l.showModal=a[2],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){B(e.$$.fragment,a),r=!1},d(a){W(e,a)}}}function xn(n){let e,t,r,o,s;function a(h){n[9](h)}let i={$$slots:{default:[An]},$$scope:{ctx:n}};n[0]!==void 0&&(i.showModal=n[0]),e=new Fe({props:i}),fe.push(()=>_e(e,"showModal",a));let l=n[2]&&mt(n);return{c(){G(e.$$.fragment),r=N(),l&&l.c(),o=le()},l(h){q(e.$$.fragment,h),r=R(h),l&&l.l(h),o=le()},m(h,d){X(e,h,d),$(h,r,d),l&&l.m(h,d),$(h,o,d),s=!0},p(h,[d]){const p={};d&524294&&(p.$$scope={dirty:d,ctx:h}),!t&&d&1&&(t=!0,p.showModal=h[0],ve(()=>t=!1)),e.$set(p),h[2]?l?(l.p(h,d),d&4&&O(l,1)):(l=mt(h),l.c(),O(l,1),l.m(o.parentNode,o)):l&&(de(),B(l,1,1,()=>{l=null}),me())},i(h){s||(O(e.$$.fragment,h),O(l),s=!0)},o(h){B(e.$$.fragment,h),B(l),s=!1},d(h){h&&(v(r),v(o)),W(e,h),l&&l.d(h)}}}function En(n,e,t){let r,o,s,a;H(n,je,m=>t(11,r=m)),H(n,he,m=>t(12,o=m)),H(n,Me,m=>t(13,s=m)),H(n,ke,m=>t(14,a=m));let{showModal:i=!0}=e,{options:l={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[]}}=e,h=!1;function d(){return{app:a,folders:s,pages:o,pageTemplates:r}}async function p(){const b=`https://bagawork.com/editor#${rt(d())}`;navigator.clipboard.writeText(b)}function _(){const m=rt(d()),b=document.createElement("a");b.href="data:application/octet-stream,"+encodeURIComponent(m),b.download=`${ge(a.code)}.baga`,b.click()}function g(m){const b=m.target.files;if(b.length==0)return;const S=b[0],V=new FileReader;V.readAsText(S),V.addEventListener("load",C=>{try{const E=nn(C.target.result);E.app&&E.folders&&E.pages&&E.pageTemplates?(Te(ke,a=E.app,a),Te(Me,s=E.folders,s),Te(he,o=E.pages,o),Te(je,r=E.pageTemplates,r),t(0,i=!1)):alert("Error: The BAGA file could be parsed, but didn't contain all expected data.")}catch{alert("Error: The file is not a valid BAGA file.")}})}function y(m){const b=rt(d());m.onClick(b)}const x=()=>t(2,h=!0),u=m=>y(m);function c(m){i=m,t(0,i)}function f(m){h=m,t(2,h)}return n.$$set=m=>{"showModal"in m&&t(0,i=m.showModal),"options"in m&&t(1,l=m.options)},[i,l,h,p,_,g,y,x,u,c,f]}class jn extends ne{constructor(e){super(),re(this,e,En,xn,ee,{showModal:0,options:1})}}function Dn(n){let e,t,r="Edit Folder",o,s,a,i,l,h,d,p,_,g,y;return{c(){e=k("div"),t=k("h1"),t.textContent=r,o=N(),s=k("div"),a=se("Name: "),i=k("input"),l=N(),h=k("div"),d=k("button"),p=se("Delete"),this.h()},l(x){e=I(x,"DIV",{class:!0});var u=P(e);t=I(u,"H1",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-1spe3mm"&&(t.textContent=r),o=R(u),s=I(u,"DIV",{});var c=P(s);a=ie(c,"Name: "),i=I(c,"INPUT",{type:!0}),c.forEach(v),l=R(u),h=I(u,"DIV",{});var f=P(h);d=I(f,"BUTTON",{});var m=P(d);p=ie(m,"Delete"),m.forEach(v),f.forEach(v),u.forEach(v),this.h()},h(){A(t,"class","svelte-1xyhvgw"),A(i,"type","text"),d.disabled=_=n[1].length==1,A(e,"class","edit-folder-modal svelte-1xyhvgw")},m(x,u){$(x,e,u),w(e,t),w(e,o),w(e,s),w(s,a),w(s,i),Ie(i,n[2].name),w(e,l),w(e,h),w(h,d),w(d,p),g||(y=[z(i,"input",n[5]),z(d,"click",n[3])],g=!0)},p(x,u){u&4&&i.value!==x[2].name&&Ie(i,x[2].name),u&2&&_!==(_=x[1].length==1)&&(d.disabled=_)},d(x){x&&v(e),g=!1,Ce(y)}}}function Pn(n){let e,t,r;function o(a){n[6](a)}let s={$$slots:{default:[Dn]},$$scope:{ctx:n}};return n[0]!==void 0&&(s.showModal=n[0]),e=new Fe({props:s}),fe.push(()=>_e(e,"showModal",o)),{c(){G(e.$$.fragment)},l(a){q(e.$$.fragment,a)},m(a,i){X(e,a,i),r=!0},p(a,[i]){const l={};i&262&&(l.$$scope={dirty:i,ctx:a}),!t&&i&1&&(t=!0,l.showModal=a[0],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){B(e.$$.fragment,a),r=!1},d(a){W(e,a)}}}function On(n,e,t){let r,o,s;H(n,Me,p=>t(1,o=p)),H(n,he,p=>t(7,s=p));let{folderId:a}=e,{showModal:i}=e;function l(){const p=o.findIndex(g=>g.id==r.id);s.find(g=>g.folderId==a)&&!confirm("The folder you are deleting contains pages, and those pages will be deleted too if you delete the folder. Do you really want to delete the folder?")||(o.splice(p,1),Te(he,s=s.filter(g=>g.folderId!=a),s),Me.set(o),t(0,i=!1))}function h(){r.name=this.value,t(2,r),t(1,o),t(4,a)}function d(p){i=p,t(0,i)}return n.$$set=p=>{"folderId"in p&&t(4,a=p.folderId),"showModal"in p&&t(0,i=p.showModal)},n.$$.update=()=>{n.$$.dirty&18&&t(2,r=o.find(p=>p.id==a))},[i,o,r,l,a,h,d]}class Vn extends ne{constructor(e){super(),re(this,e,On,Pn,ee,{folderId:4,showModal:0})}}function Bn(n){let e,t,r,o;return{c(){e=k("div"),this.h()},l(s){e=I(s,"DIV",{class:!0}),P(e).forEach(v),this.h()},h(){A(e,"class","screen svelte-sl89ha")},m(s,a){$(s,e,a),r||(o=Re(t=n[2].call(null,e,{createAppCode:n[0],runtimeSettings:n[1]})),r=!0)},p(s,[a]){t&&Ge(t.update)&&a&3&&t.update.call(null,{createAppCode:s[0],runtimeSettings:s[1]})},i:Y,o:Y,d(s){s&&v(e),r=!1,o()}}}function Nn(n,e,t){let{createAppCode:r=""}=e,{runtimeSettings:o={}}=e;function s(a,i){let l=null;async function h({createAppCode:d,runtimeSettings:p}){l=await wn(d,a,p)}return h(i),{update:h,destroy(){l==null||l()}}}return n.$$set=a=>{"createAppCode"in a&&t(0,r=a.createAppCode),"runtimeSettings"in a&&t(1,o=a.runtimeSettings)},[r,o,s]}class it extends ne{constructor(e){super(),re(this,e,Nn,Bn,ee,{createAppCode:0,runtimeSettings:1})}}function Rn(n,{delay:e=0,duration:t=400,easing:r=dn}={}){const o=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:r,css:s=>`opacity: ${s*o}`}}function ft(n,e,t){const r=n.slice();return r[4]=e[t],r[6]=t,r}function pt(n,e){let t,r=e[4].value+"",o,s,a;return{key:n,first:null,c(){t=k("div"),o=se(r),this.h()},l(i){t=I(i,"DIV",{class:!0});var l=P(t);o=ie(l,r),l.forEach(v),this.h()},h(){var i;A(t,"class",s="item "+e[4].type+" svelte-163j81l"),Be(t,"hide",`${e[4].value} ✅`==((i=e[1][e[6]+1])==null?void 0:i.value)),this.first=t},m(i,l){$(i,t,l),w(t,o)},p(i,l){var h;e=i,l&2&&r!==(r=e[4].value+"")&&De(o,r),l&2&&s!==(s="item "+e[4].type+" svelte-163j81l")&&A(t,"class",s),l&2&&Be(t,"hide",`${e[4].value} ✅`==((h=e[1][e[6]+1])==null?void 0:h.value))},i(i){i&&(a||mn(()=>{a=fn(t,Rn,{delay:100}),a.start()}))},o:Y,d(i){i&&v(t)}}}function $n(n){let e,t,r,o,s,a,i=[],l=new Map,h,d,p,_,g,y=oe(n[1]);const x=u=>u[4].value+u[4].type+u[6];for(let u=0;u<y.length;u+=1){let c=ft(n,y,u),f=x(c);l.set(f,i[u]=pt(f,c))}return{c(){e=k("div"),t=k("div"),r=se(`Show framework log:
		`),o=k("input"),s=N(),a=k("div");for(let u=0;u<i.length;u+=1)i[u].c();h=N(),d=k("div"),this.h()},l(u){e=I(u,"DIV",{class:!0});var c=P(e);t=I(c,"DIV",{class:!0});var f=P(t);r=ie(f,`Show framework log:
		`),o=I(f,"INPUT",{type:!0}),f.forEach(v),s=R(c),a=I(c,"DIV",{class:!0});var m=P(a);for(let b=0;b<i.length;b+=1)i[b].l(m);h=R(m),d=I(m,"DIV",{}),P(d).forEach(v),m.forEach(v),c.forEach(v),this.h()},h(){A(o,"type","checkbox"),A(t,"class","settings svelte-163j81l"),A(a,"class","items svelte-163j81l"),A(e,"class","tab-log")},m(u,c){$(u,e,c),w(e,t),w(t,r),w(t,o),o.checked=n[0],w(e,s),w(e,a);for(let f=0;f<i.length;f+=1)i[f]&&i[f].m(a,null);w(a,h),w(a,d),_||(g=[z(o,"change",n[3]),Re(p=Fn.call(null,d,n[1].length!=0))],_=!0)},p(u,[c]){c&1&&(o.checked=u[0]),c&2&&(y=oe(u[1]),i=Ze(i,c,x,1,u,y,l,a,en,pt,h,ft)),p&&Ge(p.update)&&c&2&&p.update.call(null,u[1].length!=0)},i(u){for(let c=0;c<y.length;c+=1)O(i[c])},o:Y,d(u){u&&v(e);for(let c=0;c<i.length;c+=1)i[c].d();_=!1,Ce(g)}}}const gt=$e(!1);function Fn(n,e){function t(r){r&&n.parentNode.parentNode.parentNode.scrollTop!=0&&n.scrollIntoView({behavior:"smooth",block:"end"})}return t(e),{update:t}}function Un(n,e,t){let r,o;H(n,gt,i=>t(0,o=i));let{loggedItems:s=[{type:"framework",value:"Whatever..."}]}=e;function a(){o=this.checked,gt.set(o)}return n.$$set=i=>{"loggedItems"in i&&t(2,s=i.loggedItems)},n.$$.update=()=>{n.$$.dirty&5&&t(1,r=o?s:s.filter(i=>i.type!="framework"))},[o,r,s,a]}class Ln extends ne{constructor(e){super(),re(this,e,Un,$n,ee,{loggedItems:2})}}function bt(n,e,t){const r=n.slice();return r[1]=e[t],r}function wt(n){let e,t,r=n[1].text+"",o,s,a,i;return{c(){e=k("li"),t=k("button"),o=se(r),s=N(),this.h()},l(l){e=I(l,"LI",{class:!0});var h=P(e);t=I(h,"BUTTON",{});var d=P(t);o=ie(d,r),d.forEach(v),s=R(h),h.forEach(v),this.h()},h(){A(e,"class","svelte-17hvot3")},m(l,h){$(l,e,h),w(e,t),w(t,o),w(e,s),a||(i=z(t,"click",function(){Ge(n[1].onClick)&&n[1].onClick.apply(this,arguments)}),a=!0)},p(l,h){n=l,h&1&&r!==(r=n[1].text+"")&&De(o,r)},d(l){l&&v(e),a=!1,i()}}}function Yn(n){let e,t,r=oe(n[0]),o=[];for(let s=0;s<r.length;s+=1)o[s]=wt(bt(n,r,s));return{c(){e=k("div"),t=k("ul");for(let s=0;s<o.length;s+=1)o[s].c();this.h()},l(s){e=I(s,"DIV",{class:!0});var a=P(e);t=I(a,"UL",{class:!0});var i=P(t);for(let l=0;l<o.length;l+=1)o[l].l(i);i.forEach(v),a.forEach(v),this.h()},h(){A(t,"class","svelte-17hvot3"),A(e,"class","tab-menu svelte-17hvot3")},m(s,a){$(s,e,a),w(e,t);for(let i=0;i<o.length;i+=1)o[i]&&o[i].m(t,null)},p(s,[a]){if(a&1){r=oe(s[0]);let i;for(i=0;i<r.length;i+=1){const l=bt(s,r,i);o[i]?o[i].p(l,a):(o[i]=wt(l),o[i].c(),o[i].m(t,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=r.length}},i:Y,o:Y,d(s){s&&v(e),qe(o,s)}}}function zn(n,e,t){let{items:r=[{text:"Button text",onClick(){}}]}=e;return n.$$set=o=>{"items"in o&&t(0,r=o.items)},[r]}class Hn extends ne{constructor(e){super(),re(this,e,zn,Yn,ee,{items:0})}}function Gn(n){let e,t="If you return a Paper component from App.createIcon(), it will be shown here. If your app then is installed on a user's smartphone, that icon will be shown as the icon the user should click on to start your app.";return{c(){e=k("p"),e.textContent=t},l(r){e=I(r,"P",{"data-svelte-h":!0}),K(e)!=="svelte-m3fxxf"&&(e.textContent=t)},m(r,o){$(r,e,o)},p:Y,d(r){r&&v(e)}}}function qn(n){let e,t;return{c(){e=k("div"),t=new pn(!1),this.h()},l(r){e=I(r,"DIV",{class:!0});var o=P(e);t=gn(o,!1),o.forEach(v),this.h()},h(){t.a=null,A(e,"class","icon svelte-1w89isc")},m(r,o){$(r,e,o),t.m(n[0],e)},p(r,o){o&1&&t.p(r[0])},d(r){r&&v(e)}}}function Xn(n){let e;function t(s,a){return s[0]?qn:Gn}let r=t(n),o=r(n);return{c(){o.c(),e=le()},l(s){o.l(s),e=le()},m(s,a){o.m(s,a),$(s,e,a)},p(s,[a]){r===(r=t(s))&&o?o.p(s,a):(o.d(1),o=r(s),o&&(o.c(),o.m(e.parentNode,e)))},i:Y,o:Y,d(s){s&&v(e),o.d(s)}}}function Wn(n,e,t){let{iconAsSvgString:r=""}=e;return n.$$set=o=>{"iconAsSvgString"in o&&t(0,r=o.iconAsSvgString)},n.$$.update=()=>{n.$$.dirty&1},[r]}class Kn extends ne{constructor(e){super(),re(this,e,Wn,Xn,ee,{iconAsSvgString:0})}}function Jn(n){let e,t,r;return{c(){e=k("div"),this.h()},l(o){e=I(o,"DIV",{class:!0}),P(e).forEach(v),this.h()},h(){A(e,"class","monaco svelte-1rpg4qr")},m(o,s){$(o,e,s),t||(r=Re(n[0].call(null,e)),t=!0)},p:Y,i:Y,o:Y,d(o){o&&v(e),t=!1,r()}}}function Qn(n,e,t){let r,o;H(n,ke,u=>t(8,r=u)),H(n,he,u=>t(9,o=u));let{monaco:s=null}=e,{pageId:a=1}=e,{selectedFileIndex:i=0}=e;const l=o.find(u=>u.id==a),h=[{variable:"p",code:l.code},{variable:"a",code:r.code}].map(u=>({variable:u.variable,className:ge(u.code),monacoClassModel:s.editor.createModel(u.code,"javascript"),monacoVariableModel:s.editor.createModel(`const ${u.variable} = new ${ge(u.code)}()`,"javascript")})),d=o.filter(u=>u.id!=a).map(u=>ge(u.code)),p=s.editor.createModel(d.map(u=>`class ${u} extends Page{}`).join(`
`),"javascript");function _(u){const c=h[u],f=ge(c.monacoClassModel.getValue());h[u].className!=f&&(t(5,h[u].className=f,h),h[u].monacoVariableModel.setValue(`const ${c.variable} = new ${f}();`),x())}for(let u=0;u<h.length;u++){const c=h[u];_(u),c.monacoClassModel.onDidChangeContent(f=>{_(u)})}let g;function y(u){t(6,g=s.editor.create(u,{model:h[i].monacoClassModel,minimap:{enabled:!1},fontSize:16,tabSize:2,automaticLayout:!0,scrollBeyondLastLine:!1,renderWhitespace:"all",trimAutoWhitespace:!1,language:"javascript",suggest:{showKeywords:!1}}))}function x(){const[u,c]=h;l.code=u.monacoClassModel.getValue(),he.set(o),Te(ke,r.code=c.monacoClassModel.getValue(),r)}return st(()=>{x(),g.dispose();for(const u of h)u.monacoClassModel.dispose(),u.monacoVariableModel.dispose();p.dispose()}),n.$$set=u=>{"monaco"in u&&t(1,s=u.monaco),"pageId"in u&&t(2,a=u.pageId),"selectedFileIndex"in u&&t(3,i=u.selectedFileIndex)},n.$$.update=()=>{n.$$.dirty&104&&g&&g.setModel(h[i].monacoClassModel)},[y,s,a,i,x,h,g]}class Zn extends ne{constructor(e){super(),re(this,e,Qn,Jn,ee,{monaco:1,pageId:2,selectedFileIndex:3,save:4})}get save(){return this.$$.ctx[4]}}function er(n){let e,t,r;return{c(){e=k("div"),this.h()},l(o){e=I(o,"DIV",{class:!0}),P(e).forEach(v),this.h()},h(){A(e,"class","monaco svelte-1rpg4qr")},m(o,s){$(o,e,s),t||(r=Re(n[0].call(null,e)),t=!0)},p:Y,i:Y,o:Y,d(o){o&&v(e),t=!1,r()}}}function tr(n,e,t){let{state:r={}}=e,{monaco:o=null}=e;const s=o.editor.createModel("","json");let a;async function i(h){a=o.editor.create(h,{model:s,minimap:{enabled:!1},fontSize:16,tabSize:2,automaticLayout:!0,scrollBeyondLastLine:!1,renderWhitespace:"all",trimAutoWhitespace:!1,language:"json",suggest:{showKeywords:!1}})}function l(){const h=Object.assign({},r);try{Object.assign(h,JSON.parse(s.getValue()))}catch(d){console.log(123321,d)}return h}return st(()=>{a.dispose(),s.dispose()}),n.$$set=h=>{"state"in h&&t(1,r=h.state),"monaco"in h&&t(2,o=h.monaco)},n.$$.update=()=>{n.$$.dirty&2&&s.setValue(JSON.stringify(r,null,"	"))},[i,r,o,l]}class nr extends ne{constructor(e){super(),re(this,e,tr,er,ee,{state:1,monaco:2,getModifiedState:3})}get getModifiedState(){return this.$$.ctx[3]}}function vt(n,e,t){const r=n.slice();return r[17]=e[t],r[19]=t,r}function _t(n){let e,t=n[17]+"",r,o,s,a;function i(){return n[12](n[19])}return{c(){e=k("button"),r=se(t),this.h()},l(l){e=I(l,"BUTTON",{});var h=P(e);r=ie(h,t),h.forEach(v),this.h()},h(){e.disabled=o=n[19]==n[3]},m(l,h){$(l,e,h),w(e,r),s||(a=z(e,"click",i),s=!0)},p(l,h){n=l,h&96&&t!==(t=n[17]+"")&&De(r,t),h&8&&o!==(o=n[19]==n[3])&&(e.disabled=o)},d(l){l&&v(e),s=!1,a()}}}function rr(n){let e,t,r={monaco:n[1],pageId:n[0],selectedFileIndex:n[3]};return e=new Zn({props:r}),n[15](e),{c(){G(e.$$.fragment)},l(o){q(e.$$.fragment,o)},m(o,s){X(e,o,s),t=!0},p(o,s){const a={};s&2&&(a.monaco=o[1]),s&1&&(a.pageId=o[0]),s&8&&(a.selectedFileIndex=o[3]),e.$set(a)},i(o){t||(O(e.$$.fragment,o),t=!0)},o(o){B(e.$$.fragment,o),t=!1},d(o){n[15](null),W(e,o)}}}function or(n){let e,t,r={monaco:n[1],state:n[2]};return e=new nr({props:r}),n[14](e),{c(){G(e.$$.fragment)},l(o){q(e.$$.fragment,o)},m(o,s){X(e,o,s),t=!0},p(o,s){const a={};s&2&&(a.monaco=o[1]),s&4&&(a.state=o[2]),e.$set(a)},i(o){t||(O(e.$$.fragment,o),t=!0)},o(o){B(e.$$.fragment,o),t=!1},d(o){n[14](null),W(e,o)}}}function ar(n){let e,t,r,o,s,a,i,l,h,d,p,_,g,y,x,u=oe(n[8](n[5],n[6])),c=[];for(let S=0;S<u.length;S+=1)c[S]=_t(vt(n,u,S));const f=[or,rr],m=[];function b(S,V){return S[3]==S[7]?0:1}return p=b(n),_=m[p]=f[p](n),{c(){e=k("div"),t=k("div");for(let S=0;S<c.length;S+=1)c[S].c();r=N(),o=k("div"),s=N(),a=k("button"),i=se("State"),h=N(),d=k("div"),_.c(),this.h()},l(S){e=I(S,"DIV",{class:!0});var V=P(e);t=I(V,"DIV",{class:!0});var C=P(t);for(let T=0;T<c.length;T+=1)c[T].l(C);r=R(C),o=I(C,"DIV",{class:!0}),P(o).forEach(v),s=R(C),a=I(C,"BUTTON",{});var E=P(a);i=ie(E,"State"),E.forEach(v),C.forEach(v),h=R(V),d=I(V,"DIV",{class:!0});var D=P(d);_.l(D),D.forEach(v),V.forEach(v),this.h()},h(){A(o,"class","space"),a.disabled=l=n[3]==n[7],A(t,"class","tab-names-child svelte-c5c4u2"),A(d,"class","code-editor-child2 svelte-c5c4u2"),A(e,"class","code-editor-with-tabs svelte-c5c4u2")},m(S,V){$(S,e,V),w(e,t);for(let C=0;C<c.length;C+=1)c[C]&&c[C].m(t,null);w(t,r),w(t,o),w(t,s),w(t,a),w(a,i),w(e,h),w(e,d),m[p].m(d,null),g=!0,y||(x=z(a,"click",n[13]),y=!0)},p(S,[V]){if(V&360){u=oe(S[8](S[5],S[6]));let E;for(E=0;E<u.length;E+=1){const D=vt(S,u,E);c[E]?c[E].p(D,V):(c[E]=_t(D),c[E].c(),c[E].m(t,r))}for(;E<c.length;E+=1)c[E].d(1);c.length=u.length}(!g||V&8&&l!==(l=S[3]==S[7]))&&(a.disabled=l);let C=p;p=b(S),p===C?m[p].p(S,V):(de(),B(m[C],1,1,()=>{m[C]=null}),me(),_=m[p],_?_.p(S,V):(_=m[p]=f[p](S),_.c()),O(_,1),_.m(d,null))},i(S){g||(O(_),g=!0)},o(S){B(_),g=!1},d(S){S&&v(e),qe(c,S),m[p].d(),y=!1,x()}}}function sr(n,e,t){let r,o;H(n,he,b=>t(5,r=b)),H(n,ke,b=>t(6,o=b));let{pageId:s=0}=e,{monaco:a=null}=e,{state:i={}}=e,{onEditorModeChanged:l=b=>null}=e;function h(b){return b.find(S=>S.id==s)}let d=null,p=0;const _=-1;function g(b,S){const V=h(b);return[ge(V.code),ge(S.code)]}function y(){return d.getModifiedState()}function x(){d.save()}const u=b=>t(3,p=b),c=()=>t(3,p=_);function f(b){fe[b?"unshift":"push"](()=>{d=b,t(4,d)})}function m(b){fe[b?"unshift":"push"](()=>{d=b,t(4,d)})}return n.$$set=b=>{"pageId"in b&&t(0,s=b.pageId),"monaco"in b&&t(1,a=b.monaco),"state"in b&&t(2,i=b.state),"onEditorModeChanged"in b&&t(9,l=b.onEditorModeChanged)},n.$$.update=()=>{n.$$.dirty&520&&l(p==_?"state":"code")},[s,a,i,p,d,r,o,_,g,l,y,x,u,c,f,m]}class ir extends ne{constructor(e){super(),re(this,e,sr,ar,ee,{pageId:0,monaco:1,state:2,onEditorModeChanged:9,getModifiedState:10,save:11})}get getModifiedState(){return this.$$.ctx[10]}get save(){return this.$$.ctx[11]}}const lr=`/**
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
	 * method you can create and return a Paper component that will
	 * be used as the icon of your app. If your app is installed on
	 * a smartphone, it will for example be used as the icon the
	 * user should click on to start your app.
	 */
	createIcon(): Paper
	
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
	
}`,hr=`/**
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
	
}`,cr=`/**
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
	
))()`,ur=`/**
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
	
))()`,dr=`/**
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
		 * @param sizeInMm The size of the text in millimeters
		 */
		size(sizeInMm: number) { return this };
		
		/**
		 * This methods makes the text show as a line through it.
		 */
		strikethrough() { return this };
		
		/**
		 * This methods makes the text show as underlined.
		 */
		underline() { return this };
		
	}
	
))()`,mr=`/**
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
	
}`,fr=`/**
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
	
))()`,pr=`const Box = (() => new (
	
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
		 * This method sets the height the child should have in millimeters.
		 * 
		 * @param theHeight The width the child should have in millimeters
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
		 * This method sets the width the child should have in millimeters.
		 * 
		 * @param theWidth The width the child should have in millimeters
		 */
		width(theWidth: number){ return this };
		
	}
	
))()`,gr=`const Button = (() => new (
	
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
	
))()`,br=`const Columns = (() => new (
	
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
	
)) ()`,wr=`const EnterNumber = (() => new (
	
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
	
))()`,vr=`const EnterText = (() => new (
	
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
	
))()`,_r=`const Html = (() => new (
	
	/**
	 * This GUI component is a view that shows whichever HTML elements
	 * you want.
	 */
	class Html extends Component{
		
		/**
		 * This method sets the component's HTML creator method.
		 * That method will be called when this component should
		 * be shown on the screen, and in it you should create
		 * and send back the HTML element to be shown (which can
		 * contain other HTML elements, etc.).
		 * 
		 * @param theElementCreator The method to be called to create the HTML element to be shown in this component
		 */
		elementCreator(theElementCreator: () => HTMLElement){ return this };
		
	}
	
))()`,Tr=`// const Image = (() => new (
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
// ))()`,yr=`const Layers = (() => new (
	
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
function log(value: any) { };`,Sr=`const m = {
	
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
	
}`,Ar=`interface Voice {
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
	
}`,xr=`// https://github.com/microsoft/TypeScript/blob/70b7de11fbadb16d30f6770332f544c44134eb82/src/lib/es5.d.ts#L1295
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
}`,Er=`// https://github.com/microsoft/TypeScript/blob/70b7de11fbadb16d30f6770332f544c44134eb82/src/lib/es5.d.ts#L633C2-L742C24
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
declare var Math: Math;`,jr=`// https://github.com/microsoft/TypeScript/blob/main/src/lib/es5.d.ts
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
}`;function Dr(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Tt(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function yt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Tt(Object(t),!0).forEach(function(r){Dr(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Tt(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Pr(n,e){if(n==null)return{};var t={},r=Object.keys(n),o,s;for(s=0;s<r.length;s++)o=r[s],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function Or(n,e){if(n==null)return{};var t=Pr(n,e),r,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(o=0;o<s.length;o++)r=s[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function Vr(n,e){return Br(n)||Nr(n,e)||Rr(n,e)||$r()}function Br(n){if(Array.isArray(n))return n}function Nr(n,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(n)))){var t=[],r=!0,o=!1,s=void 0;try{for(var a=n[Symbol.iterator](),i;!(r=(i=a.next()).done)&&(t.push(i.value),!(e&&t.length===e));r=!0);}catch(l){o=!0,s=l}finally{try{!r&&a.return!=null&&a.return()}finally{if(o)throw s}}return t}}function Rr(n,e){if(n){if(typeof n=="string")return kt(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return kt(n,e)}}function kt(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function $r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fr(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function It(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Mt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?It(Object(t),!0).forEach(function(r){Fr(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):It(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Ur(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(r){return e.reduceRight(function(o,s){return s(o)},r)}}function Ye(n){return function e(){for(var t=this,r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return o.length>=n.length?n.apply(this,o):function(){for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return e.apply(t,[].concat(o,i))}}}function Qe(n){return{}.toString.call(n).includes("Object")}function Lr(n){return!Object.keys(n).length}function He(n){return typeof n=="function"}function Yr(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function zr(n,e){return Qe(e)||Ae("changeType"),Object.keys(e).some(function(t){return!Yr(n,t)})&&Ae("changeField"),e}function Hr(n){He(n)||Ae("selectorType")}function Gr(n){He(n)||Qe(n)||Ae("handlerType"),Qe(n)&&Object.values(n).some(function(e){return!He(e)})&&Ae("handlersType")}function qr(n){n||Ae("initialIsRequired"),Qe(n)||Ae("initialType"),Lr(n)&&Ae("initialContent")}function Xr(n,e){throw new Error(n[e]||n.default)}var Wr={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Ae=Ye(Xr)(Wr),Je={changes:zr,selector:Hr,handler:Gr,initial:qr};function Kr(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Je.initial(n),Je.handler(e);var t={current:n},r=Ye(Zr)(t,e),o=Ye(Qr)(t),s=Ye(Je.changes)(n),a=Ye(Jr)(t);function i(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return Je.selector(h),h(t.current)}function l(h){Ur(r,o,s,a)(h)}return[i,l]}function Jr(n,e){return He(e)?e(n.current):e}function Qr(n,e){return n.current=Mt(Mt({},n.current),e),e}function Zr(n,e,t){return He(e)?e(n.current):Object.keys(t).forEach(function(r){var o;return(o=e[r])===null||o===void 0?void 0:o.call(e,n.current[r])}),t}var eo={create:Kr},to={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}};function no(n){return function e(){for(var t=this,r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return o.length>=n.length?n.apply(this,o):function(){for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return e.apply(t,[].concat(o,i))}}}function ro(n){return{}.toString.call(n).includes("Object")}function oo(n){return n||Ct("configIsRequired"),ro(n)||Ct("configType"),n.urls?(ao(),{paths:{vs:n.urls.monacoBase}}):n}function ao(){console.warn(rn.deprecation)}function so(n,e){throw new Error(n[e]||n.default)}var rn={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Ct=no(so)(rn),io={config:oo},lo=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(o){return t.reduceRight(function(s,a){return a(s)},o)}};function on(n,e){return Object.keys(e).forEach(function(t){e[t]instanceof Object&&n[t]&&Object.assign(e[t],on(n[t],e[t]))}),yt(yt({},n),e)}var ho={type:"cancelation",msg:"operation is manually canceled"};function ot(n){var e=!1,t=new Promise(function(r,o){n.then(function(s){return e?o(ho):r(s)}),n.catch(o)});return t.cancel=function(){return e=!0},t}var co=eo.create({config:to,isInitialized:!1,resolve:null,reject:null,monaco:null}),an=Vr(co,2),Xe=an[0],et=an[1];function uo(n){var e=io.config(n),t=e.monaco,r=Or(e,["monaco"]);et(function(o){return{config:on(o.config,r),monaco:t}})}function mo(){var n=Xe(function(e){var t=e.monaco,r=e.isInitialized,o=e.resolve;return{monaco:t,isInitialized:r,resolve:o}});if(!n.isInitialized){if(et({isInitialized:!0}),n.monaco)return n.resolve(n.monaco),ot(at);if(window.monaco&&window.monaco.editor)return sn(window.monaco),n.resolve(window.monaco),ot(at);lo(fo,go)(bo)}return ot(at)}function fo(n){return document.body.appendChild(n)}function po(n){var e=document.createElement("script");return n&&(e.src=n),e}function go(n){var e=Xe(function(r){var o=r.config,s=r.reject;return{config:o,reject:s}}),t=po("".concat(e.config.paths.vs,"/loader.js"));return t.onload=function(){return n()},t.onerror=e.reject,t}function bo(){var n=Xe(function(t){var r=t.config,o=t.resolve,s=t.reject;return{config:r,resolve:o,reject:s}}),e=window.require;e.config(n.config),e(["vs/editor/editor.main"],function(t){sn(t),n.resolve(t)},function(t){n.reject(t)})}function sn(n){Xe().monaco||et({monaco:n})}function wo(){return Xe(function(n){var e=n.monaco;return e})}var at=new Promise(function(n,e){return et({resolve:n,reject:e})}),St={config:uo,init:mo,__getMonacoInstance:wo};const vo=n=>({}),At=n=>({monaco:n[3]});function _o(n){return{c:Y,l:Y,m:Y,p:Y,i:Y,o:Y,d:Y}}function To(n){let e;const t=n[2].default,r=Wt(t,n,n[1],At);return{c(){r&&r.c()},l(o){r&&r.l(o)},m(o,s){r&&r.m(o,s),e=!0},p(o,s){r&&r.p&&(!e||s&2)&&Kt(r,t,o,o[1],e?Qt(t,o[1],s,vo):Jt(o[1]),At)},i(o){e||(O(r,o),e=!0)},o(o){B(r,o),e=!1},d(o){r&&r.d(o)}}}function yo(n){let e,t="Loading the editor...";return{c(){e=k("p"),e.textContent=t},l(r){e=I(r,"P",{"data-svelte-h":!0}),K(e)!=="svelte-1cba8fu"&&(e.textContent=t)},m(r,o){$(r,e,o)},p:Y,i:Y,o:Y,d(r){r&&v(e)}}}function ko(n){let e,t,r={ctx:n,current:null,token:null,hasCatch:!1,pending:yo,then:To,catch:_o,value:3,blocks:[,,,]};return _n(n[0](),r),{c(){e=le(),r.block.c()},l(o){e=le(),r.block.l(o)},m(o,s){$(o,e,s),r.block.m(o,r.anchor=s),r.mount=()=>e.parentNode,r.anchor=e,t=!0},p(o,[s]){n=o,Tn(r,n,s)},i(o){t||(O(r.block),t=!0)},o(o){for(let s=0;s<3;s+=1){const a=r.blocks[s];B(a)}t=!1},d(o){o&&v(e),r.block.d(o),r.token=null,r=null}}}function Io(n,e,t){let{$$slots:r={},$$scope:o}=e;St.config({paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.0/min/vs"}});async function s(){const a=await St.init();a.languages.typescript.javascriptDefaults.setCompilerOptions({noLib:!0,allowNonTsExtensions:!0});const i=Object.values(Object.assign({"../editor-type-definitions/bagawork/App.d.ts":lr,"../editor-type-definitions/bagawork/Component.ts":hr,"../editor-type-definitions/bagawork/Direction.ts":cr,"../editor-type-definitions/bagawork/Duration.ts":ur,"../editor-type-definitions/bagawork/Font.ts":dr,"../editor-type-definitions/bagawork/Page.d.ts":mr,"../editor-type-definitions/bagawork/Time.ts":fr,"../editor-type-definitions/bagawork/components/Box.ts":pr,"../editor-type-definitions/bagawork/components/Button.ts":gr,"../editor-type-definitions/bagawork/components/Columns.ts":br,"../editor-type-definitions/bagawork/components/EnterNumber.ts":wr,"../editor-type-definitions/bagawork/components/EnterText.ts":vr,"../editor-type-definitions/bagawork/components/Html.ts":_r,"../editor-type-definitions/bagawork/components/Image.ts":Tr,"../editor-type-definitions/bagawork/components/Layers.ts":yr,"../editor-type-definitions/bagawork/components/Rows.ts":kr,"../editor-type-definitions/bagawork/components/Space.ts":Ir,"../editor-type-definitions/bagawork/components/Text.ts":Mr,"../editor-type-definitions/bagawork/functions/log.ts":Cr,"../editor-type-definitions/bagawork/m.ts":Sr,"../editor-type-definitions/bagawork/speaker.ts":Ar,"../editor-type-definitions/js/Array.d.ts":xr,"../editor-type-definitions/js/Math.d.ts":Er,"../editor-type-definitions/js/String.d.ts":jr}));return a.languages.typescript.javascriptDefaults.setExtraLibs(i.map(l=>({content:l}))),a}return n.$$set=a=>{"$$scope"in a&&t(1,o=a.$$scope)},[s,o,r]}class ln extends ne{constructor(e){super(),re(this,e,Io,ko,ee,{})}}function xt(n,e,t){const r=n.slice();return r[25]=e[t],r}function Et(n){let e,t;return e=new it({props:{createAppCode:n[15](),runtimeSettings:n[12]()}}),{c(){G(e.$$.fragment)},l(r){q(e.$$.fragment,r)},m(r,o){X(e,r,o),t=!0},p:Y,i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){W(e,r)}}}function Mo(n){let e,t="Restart with state",r,o;return{c(){e=k("button"),e.textContent=t},l(s){e=I(s,"BUTTON",{"data-svelte-h":!0}),K(e)!=="svelte-yq0ny7"&&(e.textContent=t)},m(s,a){$(s,e,a),r||(o=z(e,"click",n[14]),r=!0)},p:Y,d(s){s&&v(e),r=!1,o()}}}function Co(n){let e,t="Restart",r,o;return{c(){e=k("button"),e.textContent=t},l(s){e=I(s,"BUTTON",{"data-svelte-h":!0}),K(e)!=="svelte-37ekpt"&&(e.textContent=t)},m(s,a){$(s,e,a),r||(o=z(e,"click",n[13]),r=!0)},p:Y,d(s){s&&v(e),r=!1,o()}}}function jt(n){let e,t=n[25]+"",r,o,s,a,i;function l(){return n[17](n[25])}return{c(){e=k("button"),r=se(t),o=N(),this.h()},l(h){e=I(h,"BUTTON",{});var d=P(e);r=ie(d,t),o=R(d),d.forEach(v),this.h()},h(){e.disabled=s=n[5]==n[25]},m(h,d){$(h,e,d),w(e,r),w(e,o),a||(i=z(e,"click",l),a=!0)},p(h,d){n=h,d&32&&s!==(s=n[5]==n[25])&&(e.disabled=s)},d(h){h&&v(e),a=!1,i()}}}function So(n){let e,t;return e=new Kn({props:{iconAsSvgString:n[4]}}),{c(){G(e.$$.fragment)},l(r){q(e.$$.fragment,r)},m(r,o){X(e,r,o),t=!0},p(r,o){const s={};o&16&&(s.iconAsSvgString=r[4]),e.$set(s)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){W(e,r)}}}function Ao(n){let e,t;return e=new Ln({props:{loggedItems:n[6]}}),{c(){G(e.$$.fragment)},l(r){q(e.$$.fragment,r)},m(r,o){X(e,r,o),t=!0},p(r,o){const s={};o&64&&(s.loggedItems=r[6]),e.$set(s)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){W(e,r)}}}function xo(n){let e,t;return e=new Hn({props:{items:n[11]}}),{c(){G(e.$$.fragment)},l(r){q(e.$$.fragment,r)},m(r,o){X(e,r,o),t=!0},p:Y,i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){W(e,r)}}}function Eo(n){let e,t,r={pageId:n[1],monaco:n[24],state:n[3],onEditorModeChanged:n[18]};return e=new ir({props:r}),n[19](e),{c(){G(e.$$.fragment)},l(o){q(e.$$.fragment,o)},m(o,s){X(e,o,s),t=!0},p(o,s){const a={};s&2&&(a.pageId=o[1]),s&16777216&&(a.monaco=o[24]),s&8&&(a.state=o[3]),s&256&&(a.onEditorModeChanged=o[18]),e.$set(a)},i(o){t||(O(e.$$.fragment,o),t=!0)},o(o){B(e.$$.fragment,o),t=!1},d(o){n[19](null),W(e,o)}}}function jo(n){let e,t,r,o=n[2],s,a,i,l,h,d,p,_,g,y,x,u,c=Et(n);function f(T,M){if(T[8]=="code")return Co;if(T[8]=="state")return Mo}let m=f(n),b=m&&m(n),S=oe(n[10]),V=[];for(let T=0;T<S.length;T+=1)V[T]=jt(xt(n,S,T));const C=[xo,Ao,So],E=[];function D(T,M){return T[5]=="Menu"?0:T[5]=="Log"?1:T[5]=="Icon"?2:-1}return~(p=D(n))&&(_=E[p]=C[p](n)),x=new ln({props:{$$slots:{default:[Eo,({monaco:T})=>({24:T}),({monaco:T})=>T?16777216:0]},$$scope:{ctx:n}}}),{c(){e=k("div"),t=k("div"),r=k("div"),c.c(),s=N(),a=k("div"),b&&b.c(),i=N(),l=k("div"),h=k("div");for(let T=0;T<V.length;T+=1)V[T].c();d=N(),_&&_.c(),g=N(),y=k("div"),G(x.$$.fragment),this.h()},l(T){e=I(T,"DIV",{class:!0});var M=P(e);t=I(M,"DIV",{class:!0});var U=P(t);r=I(U,"DIV",{class:!0});var te=P(r);c.l(te),te.forEach(v),s=R(U),a=I(U,"DIV",{class:!0});var j=P(a);b&&b.l(j),j.forEach(v),U.forEach(v),i=R(M),l=I(M,"DIV",{class:!0});var L=P(l);h=I(L,"DIV",{class:!0});var J=P(h);for(let ae=0;ae<V.length;ae+=1)V[ae].l(J);J.forEach(v),d=R(L),_&&_.l(L),L.forEach(v),g=R(M),y=I(M,"DIV",{class:!0});var ce=P(y);q(x.$$.fragment,ce),ce.forEach(v),M.forEach(v),this.h()},h(){A(r,"class","app-component"),F(r,"width",`${n[9].codeScreen.widthInMm}mm`),F(r,"height",`${n[9].codeScreen.heightInMm}mm`),A(a,"class","preview-buttons"),A(t,"class","preview-child"),A(h,"class","tab-names"),A(l,"class","secondary-child"),A(y,"class","code-editor-child"),A(e,"class","edit-page-modal svelte-y2t29n")},m(T,M){$(T,e,M),w(e,t),w(t,r),c.m(r,null),w(t,s),w(t,a),b&&b.m(a,null),w(e,i),w(e,l),w(l,h);for(let U=0;U<V.length;U+=1)V[U]&&V[U].m(h,null);w(l,d),~p&&E[p].m(l,null),w(e,g),w(e,y),X(x,y,null),u=!0},p(T,M){if(M&4&&ee(o,o=T[2])?(de(),B(c,1,1,Y),me(),c=Et(T),c.c(),O(c,1),c.m(r,null)):c.p(T,M),M&512&&F(r,"width",`${T[9].codeScreen.widthInMm}mm`),M&512&&F(r,"height",`${T[9].codeScreen.heightInMm}mm`),m===(m=f(T))&&b?b.p(T,M):(b&&b.d(1),b=m&&m(T),b&&(b.c(),b.m(a,null))),M&1056){S=oe(T[10]);let j;for(j=0;j<S.length;j+=1){const L=xt(T,S,j);V[j]?V[j].p(L,M):(V[j]=jt(L),V[j].c(),V[j].m(h,null))}for(;j<V.length;j+=1)V[j].d(1);V.length=S.length}let U=p;p=D(T),p===U?~p&&E[p].p(T,M):(_&&(de(),B(E[U],1,1,()=>{E[U]=null}),me()),~p?(_=E[p],_?_.p(T,M):(_=E[p]=C[p](T),_.c()),O(_,1),_.m(l,null)):_=null);const te={};M&285213066&&(te.$$scope={dirty:M,ctx:T}),x.$set(te)},i(T){u||(O(c),O(_),O(x.$$.fragment,T),u=!0)},o(T){B(c),B(_),B(x.$$.fragment,T),u=!1},d(T){T&&v(e),c.d(T),b&&b.d(),qe(V,T),~p&&E[p].d(),W(x)}}}function Do(n){let e,t,r;function o(a){n[20](a)}let s={$$slots:{default:[jo]},$$scope:{ctx:n}};return n[0]!==void 0&&(s.showModal=n[0]),e=new Fe({props:s}),fe.push(()=>_e(e,"showModal",o)),{c(){G(e.$$.fragment)},l(a){q(e.$$.fragment,a)},m(a,i){X(e,a,i),r=!0},p(a,[i]){const l={};i&268436478&&(l.$$scope={dirty:i,ctx:a}),!t&&i&1&&(t=!0,l.showModal=a[0],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){B(e.$$.fragment,a),r=!1},d(a){W(e,a)}}}function Po(n,e,t){let r,o,s,a;H(n,he,M=>t(16,o=M)),H(n,ke,M=>t(23,s=M)),H(n,ye,M=>t(9,a=M));let{showModal:i}=e,{pageId:l}=e,h=Math.random(),d,p="";const _=["Menu","Log","Icon"];let g=_[0],y=[],x=null,u="";const c=[{text:"Delete",onClick(){if(!confirm("Do you really want to delete this page?"))return;const M=o.findIndex(U=>U.id==l);o.splice(M,1),he.set(o),t(0,i=!1)}},{text:"Close",onClick(){t(0,i=!1)}}],f={onStateChange(M){t(3,d=M)},onLog(M,U){y.push({type:M,value:U}),t(6,y)},onError(M){y.push({type:"error",value:M}),t(6,y)},onIconCreated(M){t(4,p=M)},state:null,version:1};function m(){return f}async function b(){t(6,y=[]),await new Promise(M=>setTimeout(M,1)),f.state=null,f.version=1,x.save(),t(2,h=Math.random()),t(3,d=null),t(4,p="")}async function S(){t(6,y=[]),await new Promise(te=>setTimeout(te,1)),f.state=x.getModifiedState();const M=d.version,U=f.state.version;M!=U&&(f.state.version=M,f.version=U),t(2,h=Math.random()),t(3,d=null),t(4,p="")}function V(){return Ne(s,o,r)}const C=M=>t(5,g=M),E=M=>t(8,u=M);function D(M){fe[M?"unshift":"push"](()=>{x=M,t(7,x)})}function T(M){i=M,t(0,i)}return n.$$set=M=>{"showModal"in M&&t(0,i=M.showModal),"pageId"in M&&t(1,l=M.pageId)},n.$$.update=()=>{n.$$.dirty&65538&&(r=o.find(M=>M.id==l))},[i,l,h,d,p,g,y,x,u,a,_,c,m,b,S,V,o,C,E,D,T]}class Oo extends ne{constructor(e){super(),re(this,e,Po,Do,ee,{showModal:0,pageId:1})}}function Dt(n){let e,t;return e=new it({props:{createAppCode:Ne(n[4],n[3],{code:n[1].code})}}),{c(){G(e.$$.fragment)},l(r){q(e.$$.fragment,r)},m(r,o){X(e,r,o),t=!0},p(r,o){const s={};o&26&&(s.createAppCode=Ne(r[4],r[3],{code:r[1].code})),e.$set(s)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){W(e,r)}}}function Vo(n){let e,t,r,o;return{c(){e=k("div"),this.h()},l(s){e=I(s,"DIV",{style:!0}),P(e).forEach(v),this.h()},h(){F(e,"height","100%")},m(s,a){$(s,e,a),r||(o=Re(t=n[8].call(null,e,n[14])),r=!0)},p(s,a){t&&Ge(t.update)&&a&16384&&t.update.call(null,s[14])},d(s){s&&v(e),r=!1,o()}}}function Bo(n){let e,t,r,o=n[2],s,a,i,l="Restart",h,d,p,_="Menu",g,y,x="Save and close",u,c,f="Delete this page template",m,b,S,V,C,E,D=Dt(n);return S=new ln({props:{$$slots:{default:[Vo,({monaco:T})=>({14:T}),({monaco:T})=>T?16384:0]},$$scope:{ctx:n}}}),{c(){e=k("div"),t=k("div"),r=k("div"),D.c(),s=N(),a=k("div"),i=k("button"),i.textContent=l,h=N(),d=k("div"),p=k("h2"),p.textContent=_,g=N(),y=k("button"),y.textContent=x,u=N(),c=k("button"),c.textContent=f,m=N(),b=k("div"),G(S.$$.fragment),this.h()},l(T){e=I(T,"DIV",{class:!0});var M=P(e);t=I(M,"DIV",{class:!0});var U=P(t);r=I(U,"DIV",{class:!0});var te=P(r);D.l(te),te.forEach(v),s=R(U),a=I(U,"DIV",{class:!0});var j=P(a);i=I(j,"BUTTON",{"data-svelte-h":!0}),K(i)!=="svelte-5snrhj"&&(i.textContent=l),j.forEach(v),U.forEach(v),h=R(M),d=I(M,"DIV",{class:!0});var L=P(d);p=I(L,"H2",{"data-svelte-h":!0}),K(p)!=="svelte-1k9wpi9"&&(p.textContent=_),g=R(L),y=I(L,"BUTTON",{"data-svelte-h":!0}),K(y)!=="svelte-cvu16r"&&(y.textContent=x),u=R(L),c=I(L,"BUTTON",{"data-svelte-h":!0}),K(c)!=="svelte-19vawev"&&(c.textContent=f),L.forEach(v),m=R(M),b=I(M,"DIV",{class:!0});var J=P(b);q(S.$$.fragment,J),J.forEach(v),M.forEach(v),this.h()},h(){A(r,"class","app-component svelte-ydwnab"),F(r,"width",`${n[5].codeScreen.widthInMm}mm`),F(r,"height",`${n[5].codeScreen.heightInMm}mm`),A(a,"class","preview-buttons svelte-ydwnab"),A(t,"class","preview-section svelte-ydwnab"),A(d,"class","menu svelte-ydwnab"),A(b,"class","code-editor svelte-ydwnab"),A(e,"class","edit-page-template-modal svelte-ydwnab")},m(T,M){$(T,e,M),w(e,t),w(t,r),D.m(r,null),w(t,s),w(t,a),w(a,i),w(e,h),w(e,d),w(d,p),w(d,g),w(d,y),w(d,u),w(d,c),w(e,m),w(e,b),X(S,b,null),V=!0,C||(E=[z(i,"click",n[6]),z(y,"click",n[10]),z(c,"click",n[7])],C=!0)},p(T,M){M&4&&ee(o,o=T[2])?(de(),B(D,1,1,Y),me(),D=Dt(T),D.c(),O(D,1),D.m(r,null)):D.p(T,M),M&32&&F(r,"width",`${T[5].codeScreen.widthInMm}mm`),M&32&&F(r,"height",`${T[5].codeScreen.heightInMm}mm`);const U={};M&49152&&(U.$$scope={dirty:M,ctx:T}),S.$set(U)},i(T){V||(O(D),O(S.$$.fragment,T),V=!0)},o(T){B(D),B(S.$$.fragment,T),V=!1},d(T){T&&v(e),D.d(T),W(S),C=!1,Ce(E)}}}function No(n){let e,t,r;function o(a){n[11](a)}let s={$$slots:{default:[Bo]},$$scope:{ctx:n}};return n[0]!==void 0&&(s.showModal=n[0]),e=new Fe({props:s}),fe.push(()=>_e(e,"showModal",o)),{c(){G(e.$$.fragment)},l(a){q(e.$$.fragment,a)},m(a,i){X(e,a,i),r=!0},p(a,[i]){const l={};i&32831&&(l.$$scope={dirty:i,ctx:a}),!t&&i&1&&(t=!0,l.showModal=a[0],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){B(e.$$.fragment,a),r=!1},d(a){W(e,a)}}}function Ro(n,e,t){let r,o,s,a;H(n,he,c=>t(3,r=c)),H(n,ke,c=>t(4,o=c)),H(n,je,c=>t(13,s=c)),H(n,ye,c=>t(5,a=c));let{showModal:i}=e,{pageTemplateId:l}=e;const h=s.find(c=>c.id==l);let d,p=0;function _(){const c=d.getValue();t(1,h.code=c,h),je.set(s),t(2,p+=1)}function g(){if(!confirm("Really delete?"))return;const c=s.findIndex(f=>f.id==l);s.splice(c,1),t(0,i=!1)}function y(c,f){const m=[{variable:"p",code:h.code},{variable:"a",code:o.code}].map(C=>({variable:C.variable,monacoClassModel:f.editor.createModel(C.code,"javascript"),monacoVariableModel:f.editor.createModel(`const ${C.variable} = new ${ge(C.code)}()`,"javascript")}));function b(C){const E=m[C],D=ge(E.monacoClassModel.getValue());m[C].monacoVariableModel.setValue(`const ${E.variable} = new ${D}();`)}for(let C=0;C<m.length;C++){const E=m[C];b(C),E.monacoClassModel.onDidChangeContent(D=>{b(C)})}const S=r.map(C=>ge(C.code)),V=f.editor.createModel(S.map(C=>`class ${C} extends Page{}`).join(`
`),"javascript");return d=f.editor.create(c,{model:m[0].monacoClassModel,minimap:{enabled:!1},fontSize:16,tabSize:2,automaticLayout:!0,scrollBeyondLastLine:!1,renderWhitespace:"all",trimAutoWhitespace:!1,language:"javascript",suggest:{showKeywords:!1}}),{onDestroy(){d.dispose(),V.dispose()}}}st(_);const x=()=>t(0,i=!1);function u(c){i=c,t(0,i)}return n.$$set=c=>{"showModal"in c&&t(0,i=c.showModal),"pageTemplateId"in c&&t(9,l=c.pageTemplateId)},[i,h,p,r,o,a,_,g,y,l,x,u]}class $o extends ne{constructor(e){super(),re(this,e,Ro,No,ee,{showModal:0,pageTemplateId:9})}}function Pt(n,e,t){const r=n.slice();return r[16]=e[t],r}function Ot(n,e){let t,r,o,s,a,i,l,h="Edit",d,p,_,g;o=new it({props:{createAppCode:Ne(e[6],e[4],{code:e[16].code},!0)}});function y(){return e[12](e[16])}function x(){return e[13](e[16])}return{key:n,first:null,c(){t=k("div"),r=k("div"),G(o.$$.fragment),s=N(),a=k("div"),i=N(),l=k("button"),l.textContent=h,d=N(),this.h()},l(u){t=I(u,"DIV",{class:!0});var c=P(t);r=I(c,"DIV",{class:!0});var f=P(r);q(o.$$.fragment,f),s=R(f),a=I(f,"DIV",{class:!0}),P(a).forEach(v),f.forEach(v),i=R(c),l=I(c,"BUTTON",{class:!0,"data-svelte-h":!0}),K(l)!=="svelte-eodtwe"&&(l.textContent=h),d=R(c),c.forEach(v),this.h()},h(){A(a,"class","overlay svelte-1dwdo8c"),A(r,"class","page-template svelte-1dwdo8c"),F(r,"width",`${e[5].folderScreen.widthInMm}mm`),F(r,"height",`${e[5].folderScreen.heightInMm}mm`),A(l,"class","edit-page-button svelte-1dwdo8c"),A(t,"class","page-template-box svelte-1dwdo8c"),this.first=t},m(u,c){$(u,t,c),w(t,r),X(o,r,null),w(r,s),w(r,a),w(t,i),w(t,l),w(t,d),p=!0,_||(g=[z(r,"click",ze(y)),z(l,"click",ze(x))],_=!0)},p(u,c){e=u;const f={};c&88&&(f.createAppCode=Ne(e[6],e[4],{code:e[16].code},!0)),o.$set(f),c&32&&F(r,"width",`${e[5].folderScreen.widthInMm}mm`),c&32&&F(r,"height",`${e[5].folderScreen.heightInMm}mm`)},i(u){p||(O(o.$$.fragment,u),p=!0)},o(u){B(o.$$.fragment,u),p=!1},d(u){u&&v(t),W(o),_=!1,Ce(g)}}}function Fo(n){let e,t,r="Create Page (choose template)",o,s,a=[],i=new Map,l,h,d="Create new page template",p,_,g,y=oe(n[3]);const x=u=>u[16].id;for(let u=0;u<y.length;u+=1){let c=Pt(n,y,u),f=x(c);i.set(f,a[u]=Ot(f,c))}return{c(){e=k("div"),t=k("h1"),t.textContent=r,o=N(),s=k("div");for(let u=0;u<a.length;u+=1)a[u].c();l=N(),h=k("button"),h.textContent=d,this.h()},l(u){e=I(u,"DIV",{class:!0});var c=P(e);t=I(c,"H1",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-1fbxl57"&&(t.textContent=r),o=R(c),s=I(c,"DIV",{class:!0});var f=P(s);for(let m=0;m<a.length;m+=1)a[m].l(f);f.forEach(v),l=R(c),h=I(c,"BUTTON",{class:!0,"data-svelte-h":!0}),K(h)!=="svelte-wmwgso"&&(h.textContent=d),c.forEach(v),this.h()},h(){A(t,"class","svelte-1dwdo8c"),A(s,"class","page-template-boxes svelte-1dwdo8c"),A(h,"class","new-page-template-button svelte-1dwdo8c"),A(e,"class","create-page-modal svelte-1dwdo8c")},m(u,c){$(u,e,c),w(e,t),w(e,o),w(e,s);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(s,null);w(e,l),w(e,h),p=!0,_||(g=z(h,"click",n[8]),_=!0)},p(u,c){c&254&&(y=oe(u[3]),de(),a=Ze(a,c,x,1,u,y,i,s,tn,Ot,null,Pt),me())},i(u){if(!p){for(let c=0;c<y.length;c+=1)O(a[c]);p=!0}},o(u){for(let c=0;c<a.length;c+=1)B(a[c]);p=!1},d(u){u&&v(e);for(let c=0;c<a.length;c+=1)a[c].d();_=!1,g()}}}function Vt(n){let e,t,r;function o(a){n[15](a)}let s={pageTemplateId:n[2]};return n[1]!==void 0&&(s.showModal=n[1]),e=new $o({props:s}),fe.push(()=>_e(e,"showModal",o)),{c(){G(e.$$.fragment)},l(a){q(e.$$.fragment,a)},m(a,i){X(e,a,i),r=!0},p(a,i){const l={};i&4&&(l.pageTemplateId=a[2]),!t&&i&2&&(t=!0,l.showModal=a[1],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){B(e.$$.fragment,a),r=!1},d(a){W(e,a)}}}function Uo(n){let e,t,r,o,s;function a(h){n[14](h)}let i={$$slots:{default:[Fo]},$$scope:{ctx:n}};n[0]!==void 0&&(i.showModal=n[0]),e=new Fe({props:i}),fe.push(()=>_e(e,"showModal",a));let l=n[1]&&Vt(n);return{c(){G(e.$$.fragment),r=N(),l&&l.c(),o=le()},l(h){q(e.$$.fragment,h),r=R(h),l&&l.l(h),o=le()},m(h,d){X(e,h,d),$(h,r,d),l&&l.m(h,d),$(h,o,d),s=!0},p(h,[d]){const p={};d&524414&&(p.$$scope={dirty:d,ctx:h}),!t&&d&1&&(t=!0,p.showModal=h[0],ve(()=>t=!1)),e.$set(p),h[1]?l?(l.p(h,d),d&2&&O(l,1)):(l=Vt(h),l.c(),O(l,1),l.m(o.parentNode,o)):l&&(de(),B(l,1,1,()=>{l=null}),me())},i(h){s||(O(e.$$.fragment,h),O(l),s=!0)},o(h){B(e.$$.fragment,h),B(l),s=!1},d(h){h&&(v(r),v(o)),W(e,h),l&&l.d(h)}}}function Lo(n,e,t){let r,o,s,a;H(n,je,m=>t(3,r=m)),H(n,he,m=>t(4,o=m)),H(n,ye,m=>t(5,s=m)),H(n,ke,m=>t(6,a=m));let{showModal:i}=e,{folderId:l}=e,{createAtX:h}=e,{createAtY:d}=e,p=!1,_=-1;function g(m){var E;const b=h,S=d,V=prompt("Enter page name:");if(!V)return;const C=m.code.replace(/class \w+ extends/,`class ${V} extends`);o.push({id:(((E=o.at(-1))==null?void 0:E.id)??0)+1,folderId:l,code:C,x:b,y:S}),he.set(o),t(0,i=!1)}function y(){var b;const m=(((b=r.at(-1))==null?void 0:b.id)??0)+1;r.push({id:m,title:"New Template",code:`
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
			`.trim()}),t(1,p=!0),t(2,_=m)}const x=m=>g(m),u=m=>{t(2,_=m.id),t(1,p=!0)};function c(m){i=m,t(0,i)}function f(m){p=m,t(1,p)}return n.$$set=m=>{"showModal"in m&&t(0,i=m.showModal),"folderId"in m&&t(9,l=m.folderId),"createAtX"in m&&t(10,h=m.createAtX),"createAtY"in m&&t(11,d=m.createAtY)},[i,p,_,r,o,s,a,g,y,l,h,d,x,u,c,f]}class Yo extends ne{constructor(e){super(),re(this,e,Lo,Uo,ee,{showModal:0,folderId:9,createAtX:10,createAtY:11})}}function zo(n){let e,t,r,o;return{c(){e=k("div"),this.h()},l(s){e=I(s,"DIV",{class:!0}),P(e).forEach(v),this.h()},h(){A(e,"class","app svelte-jvv5s9")},m(s,a){$(s,e,a),r||(o=Re(t=Ho.call(null,e,n[0])),r=!0)},p(s,[a]){t&&Ge(t.update)&&a&1&&t.update.call(null,s[0])},i:Y,o:Y,d(s){s&&v(e),r=!1,o()}}}function Ho(n,e){function t(r){n.innerText="",n.appendChild(r.createElement())}return t(e),{update:t}}function Go(n,e,t){let{frameworkApp:r=null}=e;return n.$$set=o=>{"frameworkApp"in o&&t(0,r=o.frameworkApp)},[r]}class qo extends ne{constructor(e){super(),re(this,e,Go,zo,ee,{frameworkApp:0})}}const Bt=new Map,Xo={isPreview:!0};function Wo(n,e,t){const r=Ne(n,e,t,!0),o=Bt.get(r);if(o)return o;const s=new vn(r,Xo);return s.start(),Bt[r]=s,s}function Nt(n,e,t){const r=n.slice();return r[27]=e[t].page,r[28]=e[t].frameworkApp,r}function Rt(n,e,t){const r=n.slice();return r[31]=e[t],r}function $t(n){let e,t=n[31].text+"",r;return{c(){e=k("div"),r=se(t),this.h()},l(o){e=I(o,"DIV",{class:!0});var s=P(e);r=ie(s,t),s.forEach(v),this.h()},h(){A(e,"class","line svelte-33b36g"),Be(e,"isBack",n[31].isBack),F(e,"width",`${n[31].length}px`),F(e,"transform",`translate(${n[31].centerX}px, ${n[31].centerY}px) translate(-50%, -50%) rotate(${n[31].angle}deg)`)},m(o,s){$(o,e,s),w(e,r)},p(o,s){s[0]&256&&t!==(t=o[31].text+"")&&De(r,t),s[0]&256&&Be(e,"isBack",o[31].isBack),s[0]&256&&F(e,"width",`${o[31].length}px`),s[0]&256&&F(e,"transform",`translate(${o[31].centerX}px, ${o[31].centerY}px) translate(-50%, -50%) rotate(${o[31].angle}deg)`)},d(o){o&&v(e)}}}function Ft(n,e){let t,r,o=ge(e[27].code)+"",s,a,i,l,h,d,p,_;function g(){return e[19](e[27])}l=new qo({props:{frameworkApp:e[28]}});function y(){return e[20](e[27])}function x(...u){return e[21](e[27],...u)}return{key:n,first:null,c(){t=k("div"),r=k("div"),s=se(o),a=N(),i=k("div"),G(l.$$.fragment),h=N(),this.h()},l(u){t=I(u,"DIV",{class:!0,draggable:!0});var c=P(t);r=I(c,"DIV",{class:!0});var f=P(r);s=ie(f,o),f.forEach(v),a=R(c),i=I(c,"DIV",{class:!0});var m=P(i);q(l.$$.fragment,m),m.forEach(v),h=R(c),c.forEach(v),this.h()},h(){A(r,"class","name svelte-33b36g"),A(i,"class","page svelte-33b36g"),A(t,"class","page-container svelte-33b36g"),A(t,"draggable","true"),F(t,"width",`${e[9].folderScreen.widthInMm}mm`),F(t,"height",`${e[9].folderScreen.heightInMm}mm`),F(t,"transform",`translate(${e[27].x}px, ${e[27].y}px) translate(-50%, -50%)`),this.first=t},m(u,c){$(u,t,c),w(t,r),w(r,s),w(t,a),w(t,i),X(l,i,null),w(t,h),d=!0,p||(_=[z(r,"click",ze(g)),z(i,"click",ze(y)),z(t,"dragstart",x)],p=!0)},p(u,c){e=u,(!d||c[0]&2)&&o!==(o=ge(e[27].code)+"")&&De(s,o);const f={};c[0]&2&&(f.frameworkApp=e[28]),l.$set(f),c[0]&512&&F(t,"width",`${e[9].folderScreen.widthInMm}mm`),c[0]&512&&F(t,"height",`${e[9].folderScreen.heightInMm}mm`),c[0]&2&&F(t,"transform",`translate(${e[27].x}px, ${e[27].y}px) translate(-50%, -50%)`)},i(u){d||(O(l.$$.fragment,u),d=!0)},o(u){B(l.$$.fragment,u),d=!1},d(u){u&&v(t),W(l),p=!1,Ce(_)}}}function Ut(n){let e,t,r;function o(a){n[22](a)}let s={pageId:n[4]};return n[3]!==void 0&&(s.showModal=n[3]),e=new Oo({props:s}),fe.push(()=>_e(e,"showModal",o)),{c(){G(e.$$.fragment)},l(a){q(e.$$.fragment,a)},m(a,i){X(e,a,i),r=!0},p(a,i){const l={};i[0]&16&&(l.pageId=a[4]),!t&&i[0]&8&&(t=!0,l.showModal=a[3],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){B(e.$$.fragment,a),r=!1},d(a){W(e,a)}}}function Lt(n){let e,t,r;function o(a){n[23](a)}let s={folderId:n[0],createAtX:n[5]-n[7].offsetX,createAtY:n[6]-n[7].offsetY};return n[2]!==void 0&&(s.showModal=n[2]),e=new Yo({props:s}),fe.push(()=>_e(e,"showModal",o)),{c(){G(e.$$.fragment)},l(a){q(e.$$.fragment,a)},m(a,i){X(e,a,i),r=!0},p(a,i){const l={};i[0]&1&&(l.folderId=a[0]),i[0]&160&&(l.createAtX=a[5]-a[7].offsetX),i[0]&192&&(l.createAtY=a[6]-a[7].offsetY),!t&&i[0]&4&&(t=!0,l.showModal=a[2],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){B(e.$$.fragment,a),r=!1},d(a){W(e,a)}}}function Ko(n){let e,t,r,o=[],s=new Map,a,i,l,h,d,p,_=oe(n[8]),g=[];for(let f=0;f<_.length;f+=1)g[f]=$t(Rt(n,_,f));let y=oe(n[1]);const x=f=>f[27].id;for(let f=0;f<y.length;f+=1){let m=Nt(n,y,f),b=x(m);s.set(b,o[f]=Ft(b,m))}let u=n[3]&&Ut(n),c=n[2]&&Lt(n);return{c(){e=k("div"),t=k("div");for(let f=0;f<g.length;f+=1)g[f].c();r=N();for(let f=0;f<o.length;f+=1)o[f].c();a=N(),u&&u.c(),i=N(),c&&c.c(),l=le(),this.h()},l(f){e=I(f,"DIV",{class:!0,draggable:!0});var m=P(e);t=I(m,"DIV",{class:!0});var b=P(t);for(let S=0;S<g.length;S+=1)g[S].l(b);r=R(b);for(let S=0;S<o.length;S+=1)o[S].l(b);b.forEach(v),m.forEach(v),a=R(f),u&&u.l(f),i=R(f),c&&c.l(f),l=le(),this.h()},h(){A(t,"class","pages svelte-33b36g"),F(t,"transform",`translate(${n[7].offsetX}px, ${n[7].offsetY}px)`),A(e,"class","folder svelte-33b36g"),A(e,"draggable","true"),F(e,"background-position-x",`${n[7].offsetX}px`),F(e,"background-position-y",`${n[7].offsetY}px`)},m(f,m){$(f,e,m),w(e,t);for(let b=0;b<g.length;b+=1)g[b]&&g[b].m(t,null);w(t,r);for(let b=0;b<o.length;b+=1)o[b]&&o[b].m(t,null);$(f,a,m),u&&u.m(f,m),$(f,i,m),c&&c.m(f,m),$(f,l,m),h=!0,d||(p=[z(e,"click",n[14]),z(e,"dragstart",n[10]),z(e,"dragover",lt(n[11])),z(e,"drop",lt(n[13]))],d=!0)},p(f,m){if(m[0]&256){_=oe(f[8]);let b;for(b=0;b<_.length;b+=1){const S=Rt(f,_,b);g[b]?g[b].p(S,m):(g[b]=$t(S),g[b].c(),g[b].m(t,r))}for(;b<g.length;b+=1)g[b].d(1);g.length=_.length}m[0]&4634&&(y=oe(f[1]),de(),o=Ze(o,m,x,1,f,y,s,t,tn,Ft,null,Nt),me()),m[0]&128&&F(t,"transform",`translate(${f[7].offsetX}px, ${f[7].offsetY}px)`),m[0]&128&&F(e,"background-position-x",`${f[7].offsetX}px`),m[0]&128&&F(e,"background-position-y",`${f[7].offsetY}px`),f[3]?u?(u.p(f,m),m[0]&8&&O(u,1)):(u=Ut(f),u.c(),O(u,1),u.m(i.parentNode,i)):u&&(de(),B(u,1,1,()=>{u=null}),me()),f[2]?c?(c.p(f,m),m[0]&4&&O(c,1)):(c=Lt(f),c.c(),O(c,1),c.m(l.parentNode,l)):c&&(de(),B(c,1,1,()=>{c=null}),me())},i(f){if(!h){for(let m=0;m<y.length;m+=1)O(o[m]);O(u),O(c),h=!0}},o(f){for(let m=0;m<o.length;m+=1)B(o[m]);B(u),B(c),h=!1},d(f){f&&(v(e),v(a),v(i),v(l)),qe(g,f);for(let m=0;m<o.length;m+=1)o[m].d();u&&u.d(f),c&&c.d(f),d=!1,Ce(p)}}}const Jo=50;function Qo(n){navigator.clipboard.writeText(n)}function Zo(n,e,t){let r,o,s,a,i,l,h,d;H(n,he,j=>t(16,i=j)),H(n,Me,j=>t(17,l=j)),H(n,ke,j=>t(18,h=j)),H(n,ye,j=>t(9,d=j));let{folderId:p}=e,_=!1,g=!1,y=-1,x=-1,u=-1,c=null;function f(j,L){return L.map(J=>{const ce=Wo(j,i,J);return{page:J,frameworkApp:ce}})}function m(j){var J;const L=[];for(const ce of j){const ae=(J=ce.frameworkApp)==null?void 0:J.frameworkPage;if(!ae)continue;const Pe=ce.page.x,be=ce.page.y,Ue=[].concat(ae.beforeDirections,ae.afterDirections);for(const ue of Ue){const Oe=j.find(xe=>ue.getPage().proxyName==ge(xe.page.code));if(Oe){const xe=Oe.page.x,We=Oe.page.y,Q=xe-Pe,Z=We-be,we=Math.sqrt(Q**2+Z**2),Ve=Pe+Q/2;if(0<=Q){const Ee=Math.atan2(Z,Q)*180/Math.PI,pe=be+Z/2;L.push({length:we,angle:Ee,centerX:Ve,centerY:pe,text:ue.getDescription(),isBack:!1})}else{const Ee=Math.atan2(Z,Q)*180/Math.PI+180,pe=be+Z/2+Jo;L.push({length:we,angle:Ee,centerX:Ve,centerY:pe,text:ue.getDescription(),isBack:!0})}}}}return L}function b(j){c={action:"moveBackground",initialFolderOffsetX:r.offsetX,initialFolderOffsetY:r.offsetY,startMouseX:j.clientX,startMouseY:j.clientY};const L=document.createElement("img");L.style.display="none",j.dataTransfer.setDragImage(L,0,0)}function S(j){switch(c.action){case"moveBackground":const L=j.clientX-c.startMouseX,J=j.clientY-c.startMouseY;t(7,r.offsetX=c.initialFolderOffsetX+L,r),t(7,r.offsetY=c.initialFolderOffsetY+J,r),Me.set(l);break}}function V(j,L){j.stopPropagation(),c={action:"movePage",pageId:L.id,startMouseX:j.clientX,startMouseY:j.clientY}}function C(j){switch(c.action){case"movePage":const L=j.clientX-c.startMouseX,J=j.clientY-c.startMouseY,ce=i.find(ae=>ae.id==c.pageId);ce.x+=L,ce.y+=J,he.set(i);break}}function E(j){t(4,y=-1),t(2,_=!0),t(5,x=j.clientX),t(6,u=j.clientY)}const D=j=>Qo(ge(j.code)),T=j=>{t(3,g=!0),t(4,y=j.id)},M=(j,L)=>V(L,j);function U(j){g=j,t(3,g)}function te(j){_=j,t(2,_)}return n.$$set=j=>{"folderId"in j&&t(0,p=j.folderId)},n.$$.update=()=>{n.$$.dirty[0]&131073&&t(7,r=l.find(j=>j.id==p)??l[0]),n.$$.dirty[0]&65537&&t(15,o=i.filter(j=>j.folderId==p)),n.$$.dirty[0]&294912&&t(1,s=f(h,o)),n.$$.dirty[0]&2&&t(8,a=m(s))},[p,s,_,g,y,x,u,r,a,d,b,S,V,C,E,o,i,l,h,D,T,M,U,te]}class ea extends ne{constructor(e){super(),re(this,e,Zo,Ko,ee,{folderId:0},null,[-1,-1])}}function Yt(n,e,t){const r=n.slice();return r[10]=e[t],r}function zt(n,e){let t,r=e[10].name+"",o,s,a;function i(){return e[6](e[10])}return{key:n,first:null,c(){t=k("button"),o=se(r),this.h()},l(l){t=I(l,"BUTTON",{class:!0});var h=P(t);o=ie(h,r),h.forEach(v),this.h()},h(){A(t,"class","svelte-q0xr25"),Be(t,"current",e[1]==e[10].id),this.first=t},m(l,h){$(l,t,h),w(t,o),s||(a=z(t,"click",i),s=!0)},p(l,h){e=l,h&4&&r!==(r=e[10].name+"")&&De(o,r),h&6&&Be(t,"current",e[1]==e[10].id)},d(l){l&&v(t),s=!1,a()}}}function Ht(n){let e,t,r;function o(a){n[8](a)}let s={options:n[0]};return n[3]!==void 0&&(s.showModal=n[3]),e=new jn({props:s}),fe.push(()=>_e(e,"showModal",o)),{c(){G(e.$$.fragment)},l(a){q(e.$$.fragment,a)},m(a,i){X(e,a,i),r=!0},p(a,i){const l={};i&1&&(l.options=a[0]),!t&&i&8&&(t=!0,l.showModal=a[3],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){B(e.$$.fragment,a),r=!1},d(a){W(e,a)}}}function Gt(n){let e,t,r;function o(a){n[9](a)}let s={folderId:n[1]};return n[4]!==void 0&&(s.showModal=n[4]),e=new Vn({props:s}),fe.push(()=>_e(e,"showModal",o)),{c(){G(e.$$.fragment)},l(a){q(e.$$.fragment,a)},m(a,i){X(e,a,i),r=!0},p(a,i){const l={};i&2&&(l.folderId=a[1]),!t&&i&16&&(t=!0,l.showModal=a[4],ve(()=>t=!1)),e.$set(l)},i(a){r||(O(e.$$.fragment,a),r=!0)},o(a){B(e.$$.fragment,a),r=!1},d(a){W(e,a)}}}function ta(n){let e,t,r,o,s,a,i=[],l=new Map,h,d,p="+",_,g,y="☰",x,u,c,f,m,b;r=new ea({props:{folderId:n[1]}});let S=oe(n[2]);const V=D=>D[10].id;for(let D=0;D<S.length;D+=1){let T=Yt(n,S,D),M=V(T);l.set(M,i[D]=zt(M,T))}let C=n[3]&&Ht(n),E=n[4]&&Gt(n);return{c(){e=k("div"),t=k("div"),G(r.$$.fragment),o=N(),s=k("div"),a=k("div");for(let D=0;D<i.length;D+=1)i[D].c();h=N(),d=k("button"),d.textContent=p,_=N(),g=k("button"),g.textContent=y,x=N(),C&&C.c(),u=N(),E&&E.c(),c=le(),this.h()},l(D){e=I(D,"DIV",{class:!0});var T=P(e);t=I(T,"DIV",{class:!0});var M=P(t);q(r.$$.fragment,M),M.forEach(v),o=R(T),s=I(T,"DIV",{class:!0});var U=P(s);a=I(U,"DIV",{class:!0});var te=P(a);for(let j=0;j<i.length;j+=1)i[j].l(te);h=R(te),d=I(te,"BUTTON",{class:!0,"data-svelte-h":!0}),K(d)!=="svelte-1hnfxpo"&&(d.textContent=p),te.forEach(v),U.forEach(v),_=R(T),g=I(T,"BUTTON",{class:!0,"data-svelte-h":!0}),K(g)!=="svelte-1x767tg"&&(g.textContent=y),T.forEach(v),x=R(D),C&&C.l(D),u=R(D),E&&E.l(D),c=le(),this.h()},h(){A(t,"class","folder svelte-q0xr25"),A(d,"class","create-folder svelte-q0xr25"),A(a,"class","folder-titles svelte-q0xr25"),A(s,"class","header svelte-q0xr25"),A(g,"class","main-menu-button svelte-q0xr25"),A(e,"class","app svelte-q0xr25")},m(D,T){$(D,e,T),w(e,t),X(r,t,null),w(e,o),w(e,s),w(s,a);for(let M=0;M<i.length;M+=1)i[M]&&i[M].m(a,null);w(a,h),w(a,d),w(e,_),w(e,g),$(D,x,T),C&&C.m(D,T),$(D,u,T),E&&E.m(D,T),$(D,c,T),f=!0,m||(b=[z(d,"click",n[5]),z(g,"click",n[7])],m=!0)},p(D,[T]){const M={};T&2&&(M.folderId=D[1]),r.$set(M),T&22&&(S=oe(D[2]),i=Ze(i,T,V,1,D,S,l,a,en,zt,h,Yt)),D[3]?C?(C.p(D,T),T&8&&O(C,1)):(C=Ht(D),C.c(),O(C,1),C.m(u.parentNode,u)):C&&(de(),B(C,1,1,()=>{C=null}),me()),D[4]?E?(E.p(D,T),T&16&&O(E,1)):(E=Gt(D),E.c(),O(E,1),E.m(c.parentNode,c)):E&&(de(),B(E,1,1,()=>{E=null}),me())},i(D){f||(O(r.$$.fragment,D),O(C),O(E),f=!0)},o(D){B(r.$$.fragment,D),B(C),B(E),f=!1},d(D){D&&(v(e),v(x),v(u),v(c)),W(r);for(let T=0;T<i.length;T+=1)i[T].d();C&&C.d(D),E&&E.d(D),m=!1,Ce(b)}}}function na(n,e,t){let r;H(n,Me,g=>t(2,r=g));let{mainMenuOptions:o={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[]}}=e,s=r[0].id,a=!1,i=!1;function l(){const g=r.at(-1).id+1;r.push({id:g,name:"New folder",offsetX:0,offsetY:0}),Me.set(r),t(1,s=g),t(4,i=!0)}const h=g=>{s==g.id?t(4,i=!0):t(1,s=g.id)},d=()=>t(3,a=!0);function p(g){a=g,t(3,a)}function _(g){i=g,t(4,i)}return n.$$set=g=>{"mainMenuOptions"in g&&t(0,o=g.mainMenuOptions)},n.$$.update=()=>{n.$$.dirty&6&&(r.find(g=>g.id==s)||t(1,s=r[0].id))},[o,s,r,a,i,l,h,d,p,_]}class ra extends ne{constructor(e){super(),re(this,e,na,ta,ee,{mainMenuOptions:0})}}const Le={editorSettings:{codeScreen:{widthInMm:40*1.5,heightInMm:66*1.5},folderScreen:{widthInMm:40,heightInMm:66}},app:{code:`
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
		`.trim()}]};function qt(n){let e,t;return e=new ra({props:{mainMenuOptions:n[0]}}),{c(){G(e.$$.fragment)},l(r){q(e.$$.fragment,r)},m(r,o){X(e,r,o),t=!0},p(r,o){const s={};o&1&&(s.mainMenuOptions=r[0]),e.$set(s)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){W(e,r)}}}function oa(n){let e,t,r=n[1]&&qt(n);return{c(){r&&r.c(),e=le()},l(o){r&&r.l(o),e=le()},m(o,s){r&&r.m(o,s),$(o,e,s),t=!0},p(o,[s]){o[1]?r?(r.p(o,s),s&2&&O(r,1)):(r=qt(o),r.c(),O(r,1),r.m(e.parentNode,e)):r&&(de(),B(r,1,1,()=>{r=null}),me())},i(o){t||(O(r),t=!0)},o(o){B(r),t=!1},d(o){o&&v(e),r&&r.d(o)}}}function aa(n,e,t){let r,o,s,a,i;H(n,je,p=>t(3,r=p)),H(n,he,p=>t(4,o=p)),H(n,Me,p=>t(5,s=p)),H(n,ke,p=>t(6,a=p)),H(n,ye,p=>t(7,i=p));let{mainMenuOptions:l={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[]}}=e,{bagaCode:h=""}=e,d=!1;return Zt(()=>{let p,_,g,y,x;if(h!="")try{const u=nn(h);p=u.editorSettings,_=u.app,g=u.folders,y=u.pages,x=u.pageTemplates}catch(u){console.log(u),alert("The baga code given to the editor is invalid. The default project will be loaded instead.")}Te(ye,i=p??Le.editorSettings,i),Te(ke,a=_??Le.app,a),Te(Me,s=g??Le.folders,s),Te(he,o=y??Le.pages,o),Te(je,r=x??Le.pageTemplates,r),t(1,d=!0)}),n.$$set=p=>{"mainMenuOptions"in p&&t(0,l=p.mainMenuOptions),"bagaCode"in p&&t(2,h=p.bagaCode)},[l,d,h]}class sa extends ne{constructor(e){super(),re(this,e,aa,oa,ee,{mainMenuOptions:0,bagaCode:2})}}function Xt(n){let e,t;return e=new sa({props:{bagaCode:n[0],mainMenuOptions:n[3]}}),{c(){G(e.$$.fragment)},l(r){q(e.$$.fragment,r)},m(r,o){X(e,r,o),t=!0},p(r,o){const s={};o&1&&(s.bagaCode=r[0]),e.$set(s)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){W(e,r)}}}function ia(n){let e,t,r,o,s=n[1]&&Xt(n);return{c(){e=k("meta"),t=N(),s&&s.c(),r=le(),this.h()},l(a){const i=bn("svelte-10aecs7",document.head);e=I(i,"META",{"http-equiv":!0,content:!0}),i.forEach(v),t=R(a),s&&s.l(a),r=le(),this.h()},h(){A(e,"http-equiv","Content-Security-Policy"),A(e,"content",n[2])},m(a,i){w(document.head,e),$(a,t,i),s&&s.m(a,i),$(a,r,i),o=!0},p(a,[i]){a[1]?s?(s.p(a,i),i&2&&O(s,1)):(s=Xt(a),s.c(),O(s,1),s.m(r.parentNode,r)):s&&(de(),B(s,1,1,()=>{s=null}),me())},i(a){o||(O(s),o=!0)},o(a){B(s),o=!1},d(a){a&&(v(t),v(r)),v(e),s&&s.d(a)}}}function la(n,e,t){const r=["default-src 'none';","form-action 'none';","connect-src 'none';","img-src * data:;","script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net blob:;","style-src-attr 'self' 'unsafe-inline';","style-src-elem 'self' 'unsafe-inline' https://cdn.jsdelivr.net;","font-src https://cdn.jsdelivr.net;"].join(" "),o={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[{text:"Copy link to run app",onClick(i){const l=`https://bagawork.com/run#${i}`;navigator.clipboard.writeText(l)}}]};let s="",a=!1;return Zt(()=>{t(0,s=location.hash.substring("#".length)),t(1,a=!0)}),[s,a,r,o]}class ga extends ne{constructor(e){super(),re(this,e,la,ia,ee,{})}}export{ga as component};
