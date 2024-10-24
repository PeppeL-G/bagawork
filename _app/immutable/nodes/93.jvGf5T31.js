import{z as cn,A as hn,v as Ke,l as dn,s as ee,c as Wt,u as Kt,g as Jt,b as Qt,f as me,B as we,d as G,r as Ce,C as Te,n as Y,a as Re,i as qe,j as un,h as fn,D as st,o as Zt}from"../chunks/scheduler.B0TnBjPs.js";import{z as ue,k as B,y as fe,t as V,S as ne,i as ae,e as k,a as I,d as O,h as w,o as A,j as $,C as z,F as ze,G as _e,c as q,f as X,m as H,l as W,I as Se,s as N,r as se,g as K,b as R,u as ie,v as F,p as v,B as Ie,q as le,x as Xe,w as Pe,E as Be,J as mn,H as pn,n as gn,K as lt,D as bn}from"../chunks/index.Cnh3HYw3.js";import{e as oe,u as Ze,d as en,o as tn}from"../chunks/each.BCiS_dJw.js";import{a as ge,s as vn,g as Ne,F as wn}from"../chunks/show-app-in-element.BvD4giH2.js";import{w as $e}from"../chunks/index.CBcONjAz.js";import{a as at,g as nn}from"../chunks/project-compressor.Cxxezr6y.js";import"../chunks/index.00Qp3hMM.js";function _n(n,e){const t=e.token={};function a(o,s,r,i){if(e.token!==t)return;e.resolved=i;let l=e.ctx;r!==void 0&&(l=l.slice(),l[r]=i);const c=o&&(e.current=o)(l);let u=!1;e.block&&(e.blocks?e.blocks.forEach((p,_)=>{_!==s&&p&&(ue(),B(p,1,1,()=>{e.blocks[_]===p&&(e.blocks[_]=null)}),fe())}):e.block.d(1),c.c(),V(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[s]=c),u&&dn()}if(cn(n)){const o=hn();if(n.then(s=>{Ke(o),a(e.then,1,e.value,s),Ke(null)},s=>{if(Ke(o),a(e.catch,2,e.error,s),Ke(null),!e.hasCatch)throw s}),e.current!==e.pending)return a(e.pending,0),!0}else{if(e.current!==e.then)return a(e.then,1,e.value,n),!0;e.resolved=n}}function Tn(n,e,t){const a=e.slice(),{resolved:o}=n;n.current===n.then&&(a[n.value]=o),n.current===n.catch&&(a[n.error]=o),n.block.p(a,t)}function yn(n){let e,t,a,o;const s=n[3].default,r=Wt(s,n,n[2],null);return{c(){e=k("div"),r&&r.c(),this.h()},l(i){e=I(i,"DIV",{class:!0});var l=O(e);r&&r.l(l),l.forEach(w),this.h()},h(){A(e,"class","modal svelte-pjkfh")},m(i,l){$(i,e,l),r&&r.m(e,null),t=!0,a||(o=z(e,"click",ze(n[0])),a=!0)},p(i,[l]){r&&r.p&&(!t||l&4)&&Kt(r,s,i,i[2],t?Qt(s,i[2],l,null):Jt(i[2]),null)},i(i){t||(V(r,i),t=!0)},o(i){B(r,i),t=!1},d(i){i&&w(e),r&&r.d(i),a=!1,o()}}}function kn(n,e,t){let{$$slots:a={},$$scope:o}=e,{showModal:s}=e;function r(i){i.target==i.currentTarget&&t(1,s=!1)}return n.$$set=i=>{"showModal"in i&&t(1,s=i.showModal),"$$scope"in i&&t(2,o=i.$$scope)},[r,s,o,a]}class Fe extends ne{constructor(e){super(),ae(this,e,kn,yn,ee,{showModal:1})}}const ye=$e({}),ke=$e({}),Me=$e([]),ce=$e([]),je=$e([]);function In(n){let e,t,a="Edit settings",o,s,r,i="Folder screen",l,c,u="The size of the preview screens on the folder page, and when selecting a page template.",p,_,g,y,x,d,h,m,f,b,S="Preview folder screen size",D,C,E,P="Code screen",T,M,U="The size of the preview screen on the pages where you edit code.",te,j,L,J,he,re,Oe,be,Ue,de,Ve="Preview code screen size",xe,We;return{c(){e=k("div"),t=k("h1"),t.textContent=a,o=N(),s=k("div"),r=k("h2"),r.textContent=i,l=N(),c=k("p"),c.textContent=u,p=N(),_=k("div"),g=se(`Width in mm:
				`),y=k("input"),x=N(),d=k("div"),h=se(`Height in mm:
				`),m=k("input"),f=N(),b=k("div"),b.textContent=S,D=N(),C=k("div"),E=k("h2"),E.textContent=P,T=N(),M=k("p"),M.textContent=U,te=N(),j=k("div"),L=se(`Width in mm:
				`),J=k("input"),he=N(),re=k("div"),Oe=se(`Height in mm:
				`),be=k("input"),Ue=N(),de=k("div"),de.textContent=Ve,this.h()},l(Q){e=I(Q,"DIV",{class:!0});var Z=O(e);t=I(Z,"H1",{"data-svelte-h":!0}),K(t)!=="svelte-12605jx"&&(t.textContent=a),o=R(Z),s=I(Z,"DIV",{class:!0});var ve=O(s);r=I(ve,"H2",{"data-svelte-h":!0}),K(r)!=="svelte-1eysbo6"&&(r.textContent=i),l=R(ve),c=I(ve,"P",{"data-svelte-h":!0}),K(c)!=="svelte-1pajsxr"&&(c.textContent=u),p=R(ve),_=I(ve,"DIV",{});var De=O(_);g=ie(De,`Width in mm:
				`),y=I(De,"INPUT",{type:!0,min:!0}),De.forEach(w),x=R(ve),d=I(ve,"DIV",{});var Ee=O(d);h=ie(Ee,`Height in mm:
				`),m=I(Ee,"INPUT",{type:!0,min:!0}),Ee.forEach(w),f=R(ve),b=I(ve,"DIV",{class:!0,"data-svelte-h":!0}),K(b)!=="svelte-1ewgrlo"&&(b.textContent=S),ve.forEach(w),D=R(Z),C=I(Z,"DIV",{class:!0});var pe=O(C);E=I(pe,"H2",{"data-svelte-h":!0}),K(E)!=="svelte-1k237qn"&&(E.textContent=P),T=R(pe),M=I(pe,"P",{"data-svelte-h":!0}),K(M)!=="svelte-1mtgj5z"&&(M.textContent=U),te=R(pe),j=I(pe,"DIV",{});var tt=O(j);L=ie(tt,`Width in mm:
				`),J=I(tt,"INPUT",{type:!0,min:!0}),tt.forEach(w),he=R(pe),re=I(pe,"DIV",{});var nt=O(re);Oe=ie(nt,`Height in mm:
				`),be=I(nt,"INPUT",{type:!0,min:!0}),nt.forEach(w),Ue=R(pe),de=I(pe,"DIV",{class:!0,"data-svelte-h":!0}),K(de)!=="svelte-icwf2t"&&(de.textContent=Ve),pe.forEach(w),Z.forEach(w),this.h()},h(){A(y,"type","number"),A(y,"min","1"),A(m,"type","number"),A(m,"min","1"),A(b,"class","screen svelte-1wsz6vm"),F(b,"width",`${n[1].folderScreen.widthInMm}mm`),F(b,"height",`${n[1].folderScreen.heightInMm}mm`),A(s,"class","group svelte-1wsz6vm"),A(J,"type","number"),A(J,"min","1"),A(be,"type","number"),A(be,"min","1"),A(de,"class","screen svelte-1wsz6vm"),F(de,"width",`${n[1].codeScreen.widthInMm}mm`),F(de,"height",`${n[1].codeScreen.heightInMm}mm`),A(C,"class","group svelte-1wsz6vm"),A(e,"class","edit-settings-modal svelte-1wsz6vm")},m(Q,Z){$(Q,e,Z),v(e,t),v(e,o),v(e,s),v(s,r),v(s,l),v(s,c),v(s,p),v(s,_),v(_,g),v(_,y),Ie(y,n[1].folderScreen.widthInMm),v(s,x),v(s,d),v(d,h),v(d,m),Ie(m,n[1].folderScreen.heightInMm),v(s,f),v(s,b),v(e,D),v(e,C),v(C,E),v(C,T),v(C,M),v(C,te),v(C,j),v(j,L),v(j,J),Ie(J,n[1].codeScreen.widthInMm),v(C,he),v(C,re),v(re,Oe),v(re,be),Ie(be,n[1].codeScreen.heightInMm),v(C,Ue),v(C,de),xe||(We=[z(y,"input",n[2]),z(m,"input",n[3]),z(J,"input",n[4]),z(be,"input",n[5])],xe=!0)},p(Q,Z){Z&2&&Se(y.value)!==Q[1].folderScreen.widthInMm&&Ie(y,Q[1].folderScreen.widthInMm),Z&2&&Se(m.value)!==Q[1].folderScreen.heightInMm&&Ie(m,Q[1].folderScreen.heightInMm),Z&2&&F(b,"width",`${Q[1].folderScreen.widthInMm}mm`),Z&2&&F(b,"height",`${Q[1].folderScreen.heightInMm}mm`),Z&2&&Se(J.value)!==Q[1].codeScreen.widthInMm&&Ie(J,Q[1].codeScreen.widthInMm),Z&2&&Se(be.value)!==Q[1].codeScreen.heightInMm&&Ie(be,Q[1].codeScreen.heightInMm),Z&2&&F(de,"width",`${Q[1].codeScreen.widthInMm}mm`),Z&2&&F(de,"height",`${Q[1].codeScreen.heightInMm}mm`)},d(Q){Q&&w(e),xe=!1,Ce(We)}}}function Mn(n){let e,t,a;function o(r){n[6](r)}let s={$$slots:{default:[In]},$$scope:{ctx:n}};return n[0]!==void 0&&(s.showModal=n[0]),e=new Fe({props:s}),me.push(()=>_e(e,"showModal",o)),{c(){q(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,i){H(e,r,i),a=!0},p(r,[i]){const l={};i&130&&(l.$$scope={dirty:i,ctx:r}),!t&&i&1&&(t=!0,l.showModal=r[0],we(()=>t=!1)),e.$set(l)},i(r){a||(V(e.$$.fragment,r),a=!0)},o(r){B(e.$$.fragment,r),a=!1},d(r){W(e,r)}}}function Cn(n,e,t){let a;G(n,ye,u=>t(1,a=u));let{showModal:o=!0}=e;function s(){a.folderScreen.widthInMm=Se(this.value),ye.set(a)}function r(){a.folderScreen.heightInMm=Se(this.value),ye.set(a)}function i(){a.codeScreen.widthInMm=Se(this.value),ye.set(a)}function l(){a.codeScreen.heightInMm=Se(this.value),ye.set(a)}function c(u){o=u,t(0,o)}return n.$$set=u=>{"showModal"in u&&t(0,o=u.showModal)},[o,a,s,r,i,l,c]}class Sn extends ne{constructor(e){super(),ae(this,e,Cn,Mn,ee,{showModal:0})}}function ct(n,e,t){const a=n.slice();return a[16]=e[t],a}function ht(n){let e,t,a="Copy project to clipboard as recreational link",o,s;return{c(){e=k("div"),t=k("button"),t.textContent=a},l(r){e=I(r,"DIV",{});var i=O(e);t=I(i,"BUTTON",{"data-svelte-h":!0}),K(t)!=="svelte-133s4n0"&&(t.textContent=a),i.forEach(w)},m(r,i){$(r,e,i),v(e,t),o||(s=z(t,"click",n[3]),o=!0)},p:Y,d(r){r&&w(e),o=!1,s()}}}function dt(n){let e,t,a="Save project to BAGA file",o,s,r,i,l,c='<label for="file">Load project from Baga file</label>',u,p;return{c(){e=k("div"),t=k("button"),t.textContent=a,o=N(),s=k("div"),r=k("input"),i=N(),l=k("button"),l.innerHTML=c,this.h()},l(_){e=I(_,"DIV",{});var g=O(e);t=I(g,"BUTTON",{"data-svelte-h":!0}),K(t)!=="svelte-1g98l3d"&&(t.textContent=a),g.forEach(w),o=R(_),s=I(_,"DIV",{});var y=O(s);r=I(y,"INPUT",{type:!0,id:!0,style:!0,accept:!0}),i=R(y),l=I(y,"BUTTON",{class:!0,"data-svelte-h":!0}),K(l)!=="svelte-1ucarmc"&&(l.innerHTML=c),y.forEach(w),this.h()},h(){A(r,"type","file"),A(r,"id","file"),F(r,"display","none"),A(r,"accept",".baga"),A(l,"class","open-button")},m(_,g){$(_,e,g),v(e,t),$(_,o,g),$(_,s,g),v(s,r),v(s,i),v(s,l),u||(p=[z(t,"click",n[4]),z(r,"change",n[5])],u=!0)},p:Y,d(_){_&&(w(e),w(o),w(s)),u=!1,Ce(p)}}}function ut(n){let e,t,a=n[16].text+"",o,s,r,i;function l(){return n[8](n[16])}return{c(){e=k("div"),t=k("button"),o=se(a),s=N()},l(c){e=I(c,"DIV",{});var u=O(e);t=I(u,"BUTTON",{});var p=O(t);o=ie(p,a),p.forEach(w),s=R(u),u.forEach(w)},m(c,u){$(c,e,u),v(e,t),v(t,o),v(e,s),r||(i=z(t,"click",l),r=!0)},p(c,u){n=c,u&2&&a!==(a=n[16].text+"")&&Pe(o,a)},d(c){c&&w(e),r=!1,i()}}}function An(n){let e,t,a="Main menu",o,s,r,i,l="Edit settings",c,u,p,_,g=n[1].showCopyLinkButton&&ht(n),y=n[1].showFileButtons&&dt(n),x=oe(n[1].extraOptions),d=[];for(let h=0;h<x.length;h+=1)d[h]=ut(ct(n,x,h));return{c(){e=k("div"),t=k("h1"),t.textContent=a,o=N(),g&&g.c(),s=N(),r=k("div"),i=k("button"),i.textContent=l,c=N(),y&&y.c(),u=N();for(let h=0;h<d.length;h+=1)d[h].c();this.h()},l(h){e=I(h,"DIV",{class:!0});var m=O(e);t=I(m,"H1",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-1x9r302"&&(t.textContent=a),o=R(m),g&&g.l(m),s=R(m),r=I(m,"DIV",{});var f=O(r);i=I(f,"BUTTON",{"data-svelte-h":!0}),K(i)!=="svelte-1m9tkp0"&&(i.textContent=l),f.forEach(w),c=R(m),y&&y.l(m),u=R(m);for(let b=0;b<d.length;b+=1)d[b].l(m);m.forEach(w),this.h()},h(){A(t,"class","svelte-tgu2et"),A(e,"class","main-menu-modal svelte-tgu2et")},m(h,m){$(h,e,m),v(e,t),v(e,o),g&&g.m(e,null),v(e,s),v(e,r),v(r,i),v(e,c),y&&y.m(e,null),v(e,u);for(let f=0;f<d.length;f+=1)d[f]&&d[f].m(e,null);p||(_=z(i,"click",n[7]),p=!0)},p(h,m){if(h[1].showCopyLinkButton?g?g.p(h,m):(g=ht(h),g.c(),g.m(e,s)):g&&(g.d(1),g=null),h[1].showFileButtons?y?y.p(h,m):(y=dt(h),y.c(),y.m(e,u)):y&&(y.d(1),y=null),m&66){x=oe(h[1].extraOptions);let f;for(f=0;f<x.length;f+=1){const b=ct(h,x,f);d[f]?d[f].p(b,m):(d[f]=ut(b),d[f].c(),d[f].m(e,null))}for(;f<d.length;f+=1)d[f].d(1);d.length=x.length}},d(h){h&&w(e),g&&g.d(),y&&y.d(),Xe(d,h),p=!1,_()}}}function ft(n){let e,t,a;function o(r){n[10](r)}let s={};return n[2]!==void 0&&(s.showModal=n[2]),e=new Sn({props:s}),me.push(()=>_e(e,"showModal",o)),{c(){q(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,i){H(e,r,i),a=!0},p(r,i){const l={};!t&&i&4&&(t=!0,l.showModal=r[2],we(()=>t=!1)),e.$set(l)},i(r){a||(V(e.$$.fragment,r),a=!0)},o(r){B(e.$$.fragment,r),a=!1},d(r){W(e,r)}}}function xn(n){let e,t,a,o,s;function r(c){n[9](c)}let i={$$slots:{default:[An]},$$scope:{ctx:n}};n[0]!==void 0&&(i.showModal=n[0]),e=new Fe({props:i}),me.push(()=>_e(e,"showModal",r));let l=n[2]&&ft(n);return{c(){q(e.$$.fragment),a=N(),l&&l.c(),o=le()},l(c){X(e.$$.fragment,c),a=R(c),l&&l.l(c),o=le()},m(c,u){H(e,c,u),$(c,a,u),l&&l.m(c,u),$(c,o,u),s=!0},p(c,[u]){const p={};u&524294&&(p.$$scope={dirty:u,ctx:c}),!t&&u&1&&(t=!0,p.showModal=c[0],we(()=>t=!1)),e.$set(p),c[2]?l?(l.p(c,u),u&4&&V(l,1)):(l=ft(c),l.c(),V(l,1),l.m(o.parentNode,o)):l&&(ue(),B(l,1,1,()=>{l=null}),fe())},i(c){s||(V(e.$$.fragment,c),V(l),s=!0)},o(c){B(e.$$.fragment,c),B(l),s=!1},d(c){c&&(w(a),w(o)),W(e,c),l&&l.d(c)}}}function En(n,e,t){let a,o,s,r;G(n,je,f=>t(11,a=f)),G(n,ce,f=>t(12,o=f)),G(n,Me,f=>t(13,s=f)),G(n,ke,f=>t(14,r=f));let{showModal:i=!0}=e,{options:l={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[]}}=e,c=!1;function u(){return{app:r,folders:s,pages:o,pageTemplates:a}}async function p(){const b=`https://bagawork.com/editor#${at(u())}`;navigator.clipboard.writeText(b)}function _(){const f=at(u()),b=document.createElement("a");b.href="data:application/octet-stream,"+encodeURIComponent(f),b.download=`${ge(r.code)}.baga`,b.click()}function g(f){const b=f.target.files;if(b.length==0)return;const S=b[0],D=new FileReader;D.readAsText(S),D.addEventListener("load",C=>{try{const E=nn(C.target.result);E.app&&E.folders&&E.pages&&E.pageTemplates?(Te(ke,r=E.app,r),Te(Me,s=E.folders,s),Te(ce,o=E.pages,o),Te(je,a=E.pageTemplates,a),t(0,i=!1)):alert("Error: The BAGA file could be parsed, but didn't contain all expected data.")}catch{alert("Error: The file is not a valid BAGA file.")}})}function y(f){const b=at(u());f.onClick(b)}const x=()=>t(2,c=!0),d=f=>y(f);function h(f){i=f,t(0,i)}function m(f){c=f,t(2,c)}return n.$$set=f=>{"showModal"in f&&t(0,i=f.showModal),"options"in f&&t(1,l=f.options)},[i,l,c,p,_,g,y,x,d,h,m]}class jn extends ne{constructor(e){super(),ae(this,e,En,xn,ee,{showModal:0,options:1})}}function Pn(n){let e,t,a="Edit Folder",o,s,r,i,l,c,u,p,_,g,y;return{c(){e=k("div"),t=k("h1"),t.textContent=a,o=N(),s=k("div"),r=se("Name: "),i=k("input"),l=N(),c=k("div"),u=k("button"),p=se("Delete"),this.h()},l(x){e=I(x,"DIV",{class:!0});var d=O(e);t=I(d,"H1",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-1spe3mm"&&(t.textContent=a),o=R(d),s=I(d,"DIV",{});var h=O(s);r=ie(h,"Name: "),i=I(h,"INPUT",{type:!0}),h.forEach(w),l=R(d),c=I(d,"DIV",{});var m=O(c);u=I(m,"BUTTON",{});var f=O(u);p=ie(f,"Delete"),f.forEach(w),m.forEach(w),d.forEach(w),this.h()},h(){A(t,"class","svelte-1xyhvgw"),A(i,"type","text"),u.disabled=_=n[1].length==1,A(e,"class","edit-folder-modal svelte-1xyhvgw")},m(x,d){$(x,e,d),v(e,t),v(e,o),v(e,s),v(s,r),v(s,i),Ie(i,n[2].name),v(e,l),v(e,c),v(c,u),v(u,p),g||(y=[z(i,"input",n[5]),z(u,"click",n[3])],g=!0)},p(x,d){d&4&&i.value!==x[2].name&&Ie(i,x[2].name),d&2&&_!==(_=x[1].length==1)&&(u.disabled=_)},d(x){x&&w(e),g=!1,Ce(y)}}}function On(n){let e,t,a;function o(r){n[6](r)}let s={$$slots:{default:[Pn]},$$scope:{ctx:n}};return n[0]!==void 0&&(s.showModal=n[0]),e=new Fe({props:s}),me.push(()=>_e(e,"showModal",o)),{c(){q(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,i){H(e,r,i),a=!0},p(r,[i]){const l={};i&262&&(l.$$scope={dirty:i,ctx:r}),!t&&i&1&&(t=!0,l.showModal=r[0],we(()=>t=!1)),e.$set(l)},i(r){a||(V(e.$$.fragment,r),a=!0)},o(r){B(e.$$.fragment,r),a=!1},d(r){W(e,r)}}}function Vn(n,e,t){let a,o,s;G(n,Me,p=>t(1,o=p)),G(n,ce,p=>t(7,s=p));let{folderId:r}=e,{showModal:i}=e;function l(){const p=o.findIndex(g=>g.id==a.id);s.find(g=>g.folderId==r)&&!confirm("The folder you are deleting contains pages, and those pages will be deleted too if you delete the folder. Do you really want to delete the folder?")||(o.splice(p,1),Te(ce,s=s.filter(g=>g.folderId!=r),s),Me.set(o),t(0,i=!1))}function c(){a.name=this.value,t(2,a),t(1,o),t(4,r)}function u(p){i=p,t(0,i)}return n.$$set=p=>{"folderId"in p&&t(4,r=p.folderId),"showModal"in p&&t(0,i=p.showModal)},n.$$.update=()=>{n.$$.dirty&18&&t(2,a=o.find(p=>p.id==r))},[i,o,a,l,r,c,u]}class Dn extends ne{constructor(e){super(),ae(this,e,Vn,On,ee,{folderId:4,showModal:0})}}function Bn(n){let e,t,a,o;return{c(){e=k("div"),this.h()},l(s){e=I(s,"DIV",{class:!0}),O(e).forEach(w),this.h()},h(){A(e,"class","screen svelte-sl89ha")},m(s,r){$(s,e,r),a||(o=Re(t=n[2].call(null,e,{createAppCode:n[0],runtimeSettings:n[1]})),a=!0)},p(s,[r]){t&&qe(t.update)&&r&3&&t.update.call(null,{createAppCode:s[0],runtimeSettings:s[1]})},i:Y,o:Y,d(s){s&&w(e),a=!1,o()}}}function Nn(n,e,t){let{createAppCode:a=""}=e,{runtimeSettings:o={}}=e;function s(r,i){function l({createAppCode:c,runtimeSettings:u}){vn(c,r,u)}return l(i),{update:l}}return n.$$set=r=>{"createAppCode"in r&&t(0,a=r.createAppCode),"runtimeSettings"in r&&t(1,o=r.runtimeSettings)},[a,o,s]}class it extends ne{constructor(e){super(),ae(this,e,Nn,Bn,ee,{createAppCode:0,runtimeSettings:1})}}function Rn(n,{delay:e=0,duration:t=400,easing:a=un}={}){const o=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:a,css:s=>`opacity: ${s*o}`}}function mt(n,e,t){const a=n.slice();return a[4]=e[t],a[6]=t,a}function pt(n,e){let t,a=e[4].value+"",o,s,r;return{key:n,first:null,c(){t=k("div"),o=se(a),this.h()},l(i){t=I(i,"DIV",{class:!0});var l=O(t);o=ie(l,a),l.forEach(w),this.h()},h(){var i;A(t,"class",s="item "+e[4].type+" svelte-163j81l"),Be(t,"hide",`${e[4].value} ✅`==((i=e[1][e[6]+1])==null?void 0:i.value)),this.first=t},m(i,l){$(i,t,l),v(t,o)},p(i,l){var c;e=i,l&2&&a!==(a=e[4].value+"")&&Pe(o,a),l&2&&s!==(s="item "+e[4].type+" svelte-163j81l")&&A(t,"class",s),l&2&&Be(t,"hide",`${e[4].value} ✅`==((c=e[1][e[6]+1])==null?void 0:c.value))},i(i){i&&(r||fn(()=>{r=mn(t,Rn,{delay:100}),r.start()}))},o:Y,d(i){i&&w(t)}}}function $n(n){let e,t,a,o,s,r,i=[],l=new Map,c,u,p,_,g,y=oe(n[1]);const x=d=>d[4].value+d[4].type+d[6];for(let d=0;d<y.length;d+=1){let h=mt(n,y,d),m=x(h);l.set(m,i[d]=pt(m,h))}return{c(){e=k("div"),t=k("div"),a=se(`Show framework log:
		`),o=k("input"),s=N(),r=k("div");for(let d=0;d<i.length;d+=1)i[d].c();c=N(),u=k("div"),this.h()},l(d){e=I(d,"DIV",{class:!0});var h=O(e);t=I(h,"DIV",{class:!0});var m=O(t);a=ie(m,`Show framework log:
		`),o=I(m,"INPUT",{type:!0}),m.forEach(w),s=R(h),r=I(h,"DIV",{class:!0});var f=O(r);for(let b=0;b<i.length;b+=1)i[b].l(f);c=R(f),u=I(f,"DIV",{}),O(u).forEach(w),f.forEach(w),h.forEach(w),this.h()},h(){A(o,"type","checkbox"),A(t,"class","settings svelte-163j81l"),A(r,"class","items svelte-163j81l"),A(e,"class","tab-log")},m(d,h){$(d,e,h),v(e,t),v(t,a),v(t,o),o.checked=n[0],v(e,s),v(e,r);for(let m=0;m<i.length;m+=1)i[m]&&i[m].m(r,null);v(r,c),v(r,u),_||(g=[z(o,"change",n[3]),Re(p=Fn.call(null,u,n[1].length!=0))],_=!0)},p(d,[h]){h&1&&(o.checked=d[0]),h&2&&(y=oe(d[1]),i=Ze(i,h,x,1,d,y,l,r,en,pt,c,mt)),p&&qe(p.update)&&h&2&&p.update.call(null,d[1].length!=0)},i(d){for(let h=0;h<y.length;h+=1)V(i[h])},o:Y,d(d){d&&w(e);for(let h=0;h<i.length;h+=1)i[h].d();_=!1,Ce(g)}}}const gt=$e(!1);function Fn(n,e){function t(a){a&&n.parentNode.parentNode.parentNode.scrollTop!=0&&n.scrollIntoView({behavior:"smooth",block:"end"})}return t(e),{update:t}}function Un(n,e,t){let a,o;G(n,gt,i=>t(0,o=i));let{loggedItems:s=[{type:"framework",value:"Whatever..."}]}=e;function r(){o=this.checked,gt.set(o)}return n.$$set=i=>{"loggedItems"in i&&t(2,s=i.loggedItems)},n.$$.update=()=>{n.$$.dirty&5&&t(1,a=o?s:s.filter(i=>i.type!="framework"))},[o,a,s,r]}class Ln extends ne{constructor(e){super(),ae(this,e,Un,$n,ee,{loggedItems:2})}}function bt(n,e,t){const a=n.slice();return a[1]=e[t],a}function vt(n){let e,t,a=n[1].text+"",o,s,r,i;return{c(){e=k("li"),t=k("button"),o=se(a),s=N(),this.h()},l(l){e=I(l,"LI",{class:!0});var c=O(e);t=I(c,"BUTTON",{});var u=O(t);o=ie(u,a),u.forEach(w),s=R(c),c.forEach(w),this.h()},h(){A(e,"class","svelte-17hvot3")},m(l,c){$(l,e,c),v(e,t),v(t,o),v(e,s),r||(i=z(t,"click",function(){qe(n[1].onClick)&&n[1].onClick.apply(this,arguments)}),r=!0)},p(l,c){n=l,c&1&&a!==(a=n[1].text+"")&&Pe(o,a)},d(l){l&&w(e),r=!1,i()}}}function Yn(n){let e,t,a=oe(n[0]),o=[];for(let s=0;s<a.length;s+=1)o[s]=vt(bt(n,a,s));return{c(){e=k("div"),t=k("ul");for(let s=0;s<o.length;s+=1)o[s].c();this.h()},l(s){e=I(s,"DIV",{class:!0});var r=O(e);t=I(r,"UL",{class:!0});var i=O(t);for(let l=0;l<o.length;l+=1)o[l].l(i);i.forEach(w),r.forEach(w),this.h()},h(){A(t,"class","svelte-17hvot3"),A(e,"class","tab-menu svelte-17hvot3")},m(s,r){$(s,e,r),v(e,t);for(let i=0;i<o.length;i+=1)o[i]&&o[i].m(t,null)},p(s,[r]){if(r&1){a=oe(s[0]);let i;for(i=0;i<a.length;i+=1){const l=bt(s,a,i);o[i]?o[i].p(l,r):(o[i]=vt(l),o[i].c(),o[i].m(t,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=a.length}},i:Y,o:Y,d(s){s&&w(e),Xe(o,s)}}}function zn(n,e,t){let{items:a=[{text:"Button text",onClick(){}}]}=e;return n.$$set=o=>{"items"in o&&t(0,a=o.items)},[a]}class Gn extends ne{constructor(e){super(),ae(this,e,zn,Yn,ee,{items:0})}}function qn(n){let e,t="If you return a Paper component from App.createIcon(), it will be shown here. If your app then is installed on a user's smartphone, that icon will be shown as the icon the user should click on to start your app.";return{c(){e=k("p"),e.textContent=t},l(a){e=I(a,"P",{"data-svelte-h":!0}),K(e)!=="svelte-m3fxxf"&&(e.textContent=t)},m(a,o){$(a,e,o)},p:Y,d(a){a&&w(e)}}}function Xn(n){let e,t;return{c(){e=k("div"),t=new pn(!1),this.h()},l(a){e=I(a,"DIV",{class:!0});var o=O(e);t=gn(o,!1),o.forEach(w),this.h()},h(){t.a=null,A(e,"class","icon svelte-1w89isc")},m(a,o){$(a,e,o),t.m(n[0],e)},p(a,o){o&1&&t.p(a[0])},d(a){a&&w(e)}}}function Hn(n){let e;function t(s,r){return s[0]?Xn:qn}let a=t(n),o=a(n);return{c(){o.c(),e=le()},l(s){o.l(s),e=le()},m(s,r){o.m(s,r),$(s,e,r)},p(s,[r]){a===(a=t(s))&&o?o.p(s,r):(o.d(1),o=a(s),o&&(o.c(),o.m(e.parentNode,e)))},i:Y,o:Y,d(s){s&&w(e),o.d(s)}}}function Wn(n,e,t){let{iconAsSvgString:a=""}=e;return n.$$set=o=>{"iconAsSvgString"in o&&t(0,a=o.iconAsSvgString)},n.$$.update=()=>{n.$$.dirty&1},[a]}class Kn extends ne{constructor(e){super(),ae(this,e,Wn,Hn,ee,{iconAsSvgString:0})}}function Jn(n){let e,t,a;return{c(){e=k("div"),this.h()},l(o){e=I(o,"DIV",{class:!0}),O(e).forEach(w),this.h()},h(){A(e,"class","monaco svelte-1rpg4qr")},m(o,s){$(o,e,s),t||(a=Re(n[0].call(null,e)),t=!0)},p:Y,i:Y,o:Y,d(o){o&&w(e),t=!1,a()}}}function Qn(n,e,t){let a,o;G(n,ke,d=>t(8,a=d)),G(n,ce,d=>t(9,o=d));let{monaco:s=null}=e,{pageId:r=1}=e,{selectedFileIndex:i=0}=e;const l=o.find(d=>d.id==r),c=[{variable:"p",code:l.code},{variable:"a",code:a.code}].map(d=>({variable:d.variable,className:ge(d.code),monacoClassModel:s.editor.createModel(d.code,"javascript"),monacoVariableModel:s.editor.createModel(`const ${d.variable} = new ${ge(d.code)}()`,"javascript")})),u=o.filter(d=>d.id!=r).map(d=>ge(d.code)),p=s.editor.createModel(u.map(d=>`class ${d} extends Page{}`).join(`
`),"javascript");function _(d){const h=c[d],m=ge(h.monacoClassModel.getValue());c[d].className!=m&&(t(5,c[d].className=m,c),c[d].monacoVariableModel.setValue(`const ${h.variable} = new ${m}();`),x())}for(let d=0;d<c.length;d++){const h=c[d];_(d),h.monacoClassModel.onDidChangeContent(m=>{_(d)})}let g;function y(d){t(6,g=s.editor.create(d,{model:c[i].monacoClassModel,minimap:{enabled:!1},fontSize:16,tabSize:2,automaticLayout:!0,scrollBeyondLastLine:!1,renderWhitespace:"all",trimAutoWhitespace:!1,language:"javascript",suggest:{showKeywords:!1}}))}function x(){const[d,h]=c;l.code=d.monacoClassModel.getValue(),ce.set(o),Te(ke,a.code=h.monacoClassModel.getValue(),a)}return st(()=>{x(),g.dispose();for(const d of c)d.monacoClassModel.dispose(),d.monacoVariableModel.dispose();p.dispose()}),n.$$set=d=>{"monaco"in d&&t(1,s=d.monaco),"pageId"in d&&t(2,r=d.pageId),"selectedFileIndex"in d&&t(3,i=d.selectedFileIndex)},n.$$.update=()=>{n.$$.dirty&104&&g&&g.setModel(c[i].monacoClassModel)},[y,s,r,i,x,c,g]}class Zn extends ne{constructor(e){super(),ae(this,e,Qn,Jn,ee,{monaco:1,pageId:2,selectedFileIndex:3,save:4})}get save(){return this.$$.ctx[4]}}function ea(n){let e,t,a;return{c(){e=k("div"),this.h()},l(o){e=I(o,"DIV",{class:!0}),O(e).forEach(w),this.h()},h(){A(e,"class","monaco svelte-1rpg4qr")},m(o,s){$(o,e,s),t||(a=Re(n[0].call(null,e)),t=!0)},p:Y,i:Y,o:Y,d(o){o&&w(e),t=!1,a()}}}function ta(n,e,t){let{state:a={}}=e,{monaco:o=null}=e;const s=o.editor.createModel("","json");let r;async function i(c){r=o.editor.create(c,{model:s,minimap:{enabled:!1},fontSize:16,tabSize:2,automaticLayout:!0,scrollBeyondLastLine:!1,renderWhitespace:"all",trimAutoWhitespace:!1,language:"json",suggest:{showKeywords:!1}})}function l(){const c=Object.assign({},a);try{Object.assign(c,JSON.parse(s.getValue()))}catch(u){console.log(123321,u)}return c}return st(()=>{r.dispose(),s.dispose()}),n.$$set=c=>{"state"in c&&t(1,a=c.state),"monaco"in c&&t(2,o=c.monaco)},n.$$.update=()=>{n.$$.dirty&2&&s.setValue(JSON.stringify(a,null,"	"))},[i,a,o,l]}class na extends ne{constructor(e){super(),ae(this,e,ta,ea,ee,{state:1,monaco:2,getModifiedState:3})}get getModifiedState(){return this.$$.ctx[3]}}function wt(n,e,t){const a=n.slice();return a[17]=e[t],a[19]=t,a}function _t(n){let e,t=n[17]+"",a,o,s,r;function i(){return n[12](n[19])}return{c(){e=k("button"),a=se(t),this.h()},l(l){e=I(l,"BUTTON",{});var c=O(e);a=ie(c,t),c.forEach(w),this.h()},h(){e.disabled=o=n[19]==n[3]},m(l,c){$(l,e,c),v(e,a),s||(r=z(e,"click",i),s=!0)},p(l,c){n=l,c&96&&t!==(t=n[17]+"")&&Pe(a,t),c&8&&o!==(o=n[19]==n[3])&&(e.disabled=o)},d(l){l&&w(e),s=!1,r()}}}function aa(n){let e,t,a={monaco:n[1],pageId:n[0],selectedFileIndex:n[3]};return e=new Zn({props:a}),n[15](e),{c(){q(e.$$.fragment)},l(o){X(e.$$.fragment,o)},m(o,s){H(e,o,s),t=!0},p(o,s){const r={};s&2&&(r.monaco=o[1]),s&1&&(r.pageId=o[0]),s&8&&(r.selectedFileIndex=o[3]),e.$set(r)},i(o){t||(V(e.$$.fragment,o),t=!0)},o(o){B(e.$$.fragment,o),t=!1},d(o){n[15](null),W(e,o)}}}function oa(n){let e,t,a={monaco:n[1],state:n[2]};return e=new na({props:a}),n[14](e),{c(){q(e.$$.fragment)},l(o){X(e.$$.fragment,o)},m(o,s){H(e,o,s),t=!0},p(o,s){const r={};s&2&&(r.monaco=o[1]),s&4&&(r.state=o[2]),e.$set(r)},i(o){t||(V(e.$$.fragment,o),t=!0)},o(o){B(e.$$.fragment,o),t=!1},d(o){n[14](null),W(e,o)}}}function ra(n){let e,t,a,o,s,r,i,l,c,u,p,_,g,y,x,d=oe(n[8](n[5],n[6])),h=[];for(let S=0;S<d.length;S+=1)h[S]=_t(wt(n,d,S));const m=[oa,aa],f=[];function b(S,D){return S[3]==S[7]?0:1}return p=b(n),_=f[p]=m[p](n),{c(){e=k("div"),t=k("div");for(let S=0;S<h.length;S+=1)h[S].c();a=N(),o=k("div"),s=N(),r=k("button"),i=se("State"),c=N(),u=k("div"),_.c(),this.h()},l(S){e=I(S,"DIV",{class:!0});var D=O(e);t=I(D,"DIV",{class:!0});var C=O(t);for(let T=0;T<h.length;T+=1)h[T].l(C);a=R(C),o=I(C,"DIV",{class:!0}),O(o).forEach(w),s=R(C),r=I(C,"BUTTON",{});var E=O(r);i=ie(E,"State"),E.forEach(w),C.forEach(w),c=R(D),u=I(D,"DIV",{class:!0});var P=O(u);_.l(P),P.forEach(w),D.forEach(w),this.h()},h(){A(o,"class","space"),r.disabled=l=n[3]==n[7],A(t,"class","tab-names-child svelte-c5c4u2"),A(u,"class","code-editor-child2 svelte-c5c4u2"),A(e,"class","code-editor-with-tabs svelte-c5c4u2")},m(S,D){$(S,e,D),v(e,t);for(let C=0;C<h.length;C+=1)h[C]&&h[C].m(t,null);v(t,a),v(t,o),v(t,s),v(t,r),v(r,i),v(e,c),v(e,u),f[p].m(u,null),g=!0,y||(x=z(r,"click",n[13]),y=!0)},p(S,[D]){if(D&360){d=oe(S[8](S[5],S[6]));let E;for(E=0;E<d.length;E+=1){const P=wt(S,d,E);h[E]?h[E].p(P,D):(h[E]=_t(P),h[E].c(),h[E].m(t,a))}for(;E<h.length;E+=1)h[E].d(1);h.length=d.length}(!g||D&8&&l!==(l=S[3]==S[7]))&&(r.disabled=l);let C=p;p=b(S),p===C?f[p].p(S,D):(ue(),B(f[C],1,1,()=>{f[C]=null}),fe(),_=f[p],_?_.p(S,D):(_=f[p]=m[p](S),_.c()),V(_,1),_.m(u,null))},i(S){g||(V(_),g=!0)},o(S){B(_),g=!1},d(S){S&&w(e),Xe(h,S),f[p].d(),y=!1,x()}}}function sa(n,e,t){let a,o;G(n,ce,b=>t(5,a=b)),G(n,ke,b=>t(6,o=b));let{pageId:s=0}=e,{monaco:r=null}=e,{state:i={}}=e,{onEditorModeChanged:l=b=>null}=e;function c(b){return b.find(S=>S.id==s)}let u=null,p=0;const _=-1;function g(b,S){const D=c(b);return[ge(D.code),ge(S.code)]}function y(){return u.getModifiedState()}function x(){u.save()}const d=b=>t(3,p=b),h=()=>t(3,p=_);function m(b){me[b?"unshift":"push"](()=>{u=b,t(4,u)})}function f(b){me[b?"unshift":"push"](()=>{u=b,t(4,u)})}return n.$$set=b=>{"pageId"in b&&t(0,s=b.pageId),"monaco"in b&&t(1,r=b.monaco),"state"in b&&t(2,i=b.state),"onEditorModeChanged"in b&&t(9,l=b.onEditorModeChanged)},n.$$.update=()=>{n.$$.dirty&520&&l(p==_?"state":"code")},[s,r,i,p,u,a,o,_,g,l,y,x,d,h,m,f]}class ia extends ne{constructor(e){super(),ae(this,e,sa,ra,ee,{pageId:0,monaco:1,state:2,onEditorModeChanged:9,getModifiedState:10,save:11})}get getModifiedState(){return this.$$.ctx[10]}get save(){return this.$$.ctx[11]}}const la=`/**
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
	
}`,ca=`/**
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
	
}`,ha=`/**
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
	
))()`,da=`/**
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
	
))()`,ua=`/**
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
	
}`,fa=`/**
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
	
))()`,ma=`const Box = (() => new (
	
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
	
))()`,pa=`const Button = (() => new (
	
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
	
))()`,ga=`const Columns = (() => new (
	
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
	
)) ()`,ba=`const EnterNumber = (() => new (
	
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
	
))()`,va=`const EnterText = (() => new (
	
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
	
))()`,wa=`const Image = (() => new (
	
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
	
))()`,_a=`const Layers = (() => new (
	
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
	
))()`,Ta=`const Rows = (() => new (
	
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
	
)) ()`,ya=`const Space = (() => new (
	
	/**
	 * This GUI component is a layout that primarily is used to occupy space,
	 * so other children in a Rows/Columns layout are positioned correct.
	 * 
	 * This component has \`size\` set to \`1\` by default, while other components
	 * have \`size\` set to \`0\` by default.
	 */
	class Space extends Component {
		
	}
	
)) ()`,ka=`const Text = (() => new (
	
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
	
))()`,Ia=`/**
 * This function logs the value you pass to it, so you can insect
 * it in the editor.
 * @param value The value to be logged
 */
function log(value: any) { };`,Ma=`const m = {
	
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
	
}`,Ca=`interface Voice {
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
	
}`,Sa=`// https://github.com/microsoft/TypeScript/blob/70b7de11fbadb16d30f6770332f544c44134eb82/src/lib/es5.d.ts#L1295
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
}`,Aa=`// https://github.com/microsoft/TypeScript/blob/70b7de11fbadb16d30f6770332f544c44134eb82/src/lib/es5.d.ts#L633C2-L742C24
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
declare var Math: Math;`,xa=`// https://github.com/microsoft/TypeScript/blob/main/src/lib/es5.d.ts
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
}`;function Ea(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Tt(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,a)}return t}function yt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Tt(Object(t),!0).forEach(function(a){Ea(n,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Tt(Object(t)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))})}return n}function ja(n,e){if(n==null)return{};var t={},a=Object.keys(n),o,s;for(s=0;s<a.length;s++)o=a[s],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function Pa(n,e){if(n==null)return{};var t=ja(n,e),a,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(o=0;o<s.length;o++)a=s[o],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(n,a)&&(t[a]=n[a])}return t}function Oa(n,e){return Va(n)||Da(n,e)||Ba(n,e)||Na()}function Va(n){if(Array.isArray(n))return n}function Da(n,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(n)))){var t=[],a=!0,o=!1,s=void 0;try{for(var r=n[Symbol.iterator](),i;!(a=(i=r.next()).done)&&(t.push(i.value),!(e&&t.length===e));a=!0);}catch(l){o=!0,s=l}finally{try{!a&&r.return!=null&&r.return()}finally{if(o)throw s}}return t}}function Ba(n,e){if(n){if(typeof n=="string")return kt(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return kt(n,e)}}function kt(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=n[t];return a}function Na(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ra(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function It(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,a)}return t}function Mt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?It(Object(t),!0).forEach(function(a){Ra(n,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):It(Object(t)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))})}return n}function $a(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(a){return e.reduceRight(function(o,s){return s(o)},a)}}function Ye(n){return function e(){for(var t=this,a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return o.length>=n.length?n.apply(this,o):function(){for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return e.apply(t,[].concat(o,i))}}}function Qe(n){return{}.toString.call(n).includes("Object")}function Fa(n){return!Object.keys(n).length}function Ge(n){return typeof n=="function"}function Ua(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function La(n,e){return Qe(e)||Ae("changeType"),Object.keys(e).some(function(t){return!Ua(n,t)})&&Ae("changeField"),e}function Ya(n){Ge(n)||Ae("selectorType")}function za(n){Ge(n)||Qe(n)||Ae("handlerType"),Qe(n)&&Object.values(n).some(function(e){return!Ge(e)})&&Ae("handlersType")}function Ga(n){n||Ae("initialIsRequired"),Qe(n)||Ae("initialType"),Fa(n)&&Ae("initialContent")}function qa(n,e){throw new Error(n[e]||n.default)}var Xa={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Ae=Ye(qa)(Xa),Je={changes:La,selector:Ya,handler:za,initial:Ga};function Ha(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Je.initial(n),Je.handler(e);var t={current:n},a=Ye(Ja)(t,e),o=Ye(Ka)(t),s=Ye(Je.changes)(n),r=Ye(Wa)(t);function i(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(u){return u};return Je.selector(c),c(t.current)}function l(c){$a(a,o,s,r)(c)}return[i,l]}function Wa(n,e){return Ge(e)?e(n.current):e}function Ka(n,e){return n.current=Mt(Mt({},n.current),e),e}function Ja(n,e,t){return Ge(e)?e(n.current):Object.keys(t).forEach(function(a){var o;return(o=e[a])===null||o===void 0?void 0:o.call(e,n.current[a])}),t}var Qa={create:Ha},Za={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}};function eo(n){return function e(){for(var t=this,a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return o.length>=n.length?n.apply(this,o):function(){for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return e.apply(t,[].concat(o,i))}}}function to(n){return{}.toString.call(n).includes("Object")}function no(n){return n||Ct("configIsRequired"),to(n)||Ct("configType"),n.urls?(ao(),{paths:{vs:n.urls.monacoBase}}):n}function ao(){console.warn(an.deprecation)}function oo(n,e){throw new Error(n[e]||n.default)}var an={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Ct=eo(oo)(an),ro={config:no},so=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(o){return t.reduceRight(function(s,r){return r(s)},o)}};function on(n,e){return Object.keys(e).forEach(function(t){e[t]instanceof Object&&n[t]&&Object.assign(e[t],on(n[t],e[t]))}),yt(yt({},n),e)}var io={type:"cancelation",msg:"operation is manually canceled"};function ot(n){var e=!1,t=new Promise(function(a,o){n.then(function(s){return e?o(io):a(s)}),n.catch(o)});return t.cancel=function(){return e=!0},t}var lo=Qa.create({config:Za,isInitialized:!1,resolve:null,reject:null,monaco:null}),rn=Oa(lo,2),He=rn[0],et=rn[1];function co(n){var e=ro.config(n),t=e.monaco,a=Pa(e,["monaco"]);et(function(o){return{config:on(o.config,a),monaco:t}})}function ho(){var n=He(function(e){var t=e.monaco,a=e.isInitialized,o=e.resolve;return{monaco:t,isInitialized:a,resolve:o}});if(!n.isInitialized){if(et({isInitialized:!0}),n.monaco)return n.resolve(n.monaco),ot(rt);if(window.monaco&&window.monaco.editor)return sn(window.monaco),n.resolve(window.monaco),ot(rt);so(uo,mo)(po)}return ot(rt)}function uo(n){return document.body.appendChild(n)}function fo(n){var e=document.createElement("script");return n&&(e.src=n),e}function mo(n){var e=He(function(a){var o=a.config,s=a.reject;return{config:o,reject:s}}),t=fo("".concat(e.config.paths.vs,"/loader.js"));return t.onload=function(){return n()},t.onerror=e.reject,t}function po(){var n=He(function(t){var a=t.config,o=t.resolve,s=t.reject;return{config:a,resolve:o,reject:s}}),e=window.require;e.config(n.config),e(["vs/editor/editor.main"],function(t){sn(t),n.resolve(t)},function(t){n.reject(t)})}function sn(n){He().monaco||et({monaco:n})}function go(){return He(function(n){var e=n.monaco;return e})}var rt=new Promise(function(n,e){return et({resolve:n,reject:e})}),St={config:co,init:ho,__getMonacoInstance:go};const bo=n=>({}),At=n=>({monaco:n[3]});function vo(n){return{c:Y,l:Y,m:Y,p:Y,i:Y,o:Y,d:Y}}function wo(n){let e;const t=n[2].default,a=Wt(t,n,n[1],At);return{c(){a&&a.c()},l(o){a&&a.l(o)},m(o,s){a&&a.m(o,s),e=!0},p(o,s){a&&a.p&&(!e||s&2)&&Kt(a,t,o,o[1],e?Qt(t,o[1],s,bo):Jt(o[1]),At)},i(o){e||(V(a,o),e=!0)},o(o){B(a,o),e=!1},d(o){a&&a.d(o)}}}function _o(n){let e,t="Loading the editor...";return{c(){e=k("p"),e.textContent=t},l(a){e=I(a,"P",{"data-svelte-h":!0}),K(e)!=="svelte-1cba8fu"&&(e.textContent=t)},m(a,o){$(a,e,o)},p:Y,i:Y,o:Y,d(a){a&&w(e)}}}function To(n){let e,t,a={ctx:n,current:null,token:null,hasCatch:!1,pending:_o,then:wo,catch:vo,value:3,blocks:[,,,]};return _n(n[0](),a),{c(){e=le(),a.block.c()},l(o){e=le(),a.block.l(o)},m(o,s){$(o,e,s),a.block.m(o,a.anchor=s),a.mount=()=>e.parentNode,a.anchor=e,t=!0},p(o,[s]){n=o,Tn(a,n,s)},i(o){t||(V(a.block),t=!0)},o(o){for(let s=0;s<3;s+=1){const r=a.blocks[s];B(r)}t=!1},d(o){o&&w(e),a.block.d(o),a.token=null,a=null}}}function yo(n,e,t){let{$$slots:a={},$$scope:o}=e;St.config({paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.0/min/vs"}});async function s(){const r=await St.init();r.languages.typescript.javascriptDefaults.setCompilerOptions({noLib:!0,allowNonTsExtensions:!0});const i=Object.values(Object.assign({"../editor-type-definitions/bagawork/App.d.ts":la,"../editor-type-definitions/bagawork/Component.ts":ca,"../editor-type-definitions/bagawork/Direction.ts":ha,"../editor-type-definitions/bagawork/Font.ts":da,"../editor-type-definitions/bagawork/Page.d.ts":ua,"../editor-type-definitions/bagawork/Time.ts":fa,"../editor-type-definitions/bagawork/components/Box.ts":ma,"../editor-type-definitions/bagawork/components/Button.ts":pa,"../editor-type-definitions/bagawork/components/Columns.ts":ga,"../editor-type-definitions/bagawork/components/EnterNumber.ts":ba,"../editor-type-definitions/bagawork/components/EnterText.ts":va,"../editor-type-definitions/bagawork/components/Image.ts":wa,"../editor-type-definitions/bagawork/components/Layers.ts":_a,"../editor-type-definitions/bagawork/components/Rows.ts":Ta,"../editor-type-definitions/bagawork/components/Space.ts":ya,"../editor-type-definitions/bagawork/components/Text.ts":ka,"../editor-type-definitions/bagawork/functions/log.ts":Ia,"../editor-type-definitions/bagawork/m.ts":Ma,"../editor-type-definitions/bagawork/speaker.ts":Ca,"../editor-type-definitions/js/Array.d.ts":Sa,"../editor-type-definitions/js/Math.d.ts":Aa,"../editor-type-definitions/js/String.d.ts":xa}));return r.languages.typescript.javascriptDefaults.setExtraLibs(i.map(l=>({content:l}))),r}return n.$$set=r=>{"$$scope"in r&&t(1,o=r.$$scope)},[s,o,a]}class ln extends ne{constructor(e){super(),ae(this,e,yo,To,ee,{})}}function xt(n,e,t){const a=n.slice();return a[25]=e[t],a}function Et(n){let e,t;return e=new it({props:{createAppCode:n[15](),runtimeSettings:n[12]()}}),{c(){q(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,o){H(e,a,o),t=!0},p:Y,i(a){t||(V(e.$$.fragment,a),t=!0)},o(a){B(e.$$.fragment,a),t=!1},d(a){W(e,a)}}}function ko(n){let e,t="Restart with state",a,o;return{c(){e=k("button"),e.textContent=t},l(s){e=I(s,"BUTTON",{"data-svelte-h":!0}),K(e)!=="svelte-yq0ny7"&&(e.textContent=t)},m(s,r){$(s,e,r),a||(o=z(e,"click",n[14]),a=!0)},p:Y,d(s){s&&w(e),a=!1,o()}}}function Io(n){let e,t="Restart",a,o;return{c(){e=k("button"),e.textContent=t},l(s){e=I(s,"BUTTON",{"data-svelte-h":!0}),K(e)!=="svelte-37ekpt"&&(e.textContent=t)},m(s,r){$(s,e,r),a||(o=z(e,"click",n[13]),a=!0)},p:Y,d(s){s&&w(e),a=!1,o()}}}function jt(n){let e,t=n[25]+"",a,o,s,r,i;function l(){return n[17](n[25])}return{c(){e=k("button"),a=se(t),o=N(),this.h()},l(c){e=I(c,"BUTTON",{});var u=O(e);a=ie(u,t),o=R(u),u.forEach(w),this.h()},h(){e.disabled=s=n[5]==n[25]},m(c,u){$(c,e,u),v(e,a),v(e,o),r||(i=z(e,"click",l),r=!0)},p(c,u){n=c,u&32&&s!==(s=n[5]==n[25])&&(e.disabled=s)},d(c){c&&w(e),r=!1,i()}}}function Mo(n){let e,t;return e=new Kn({props:{iconAsSvgString:n[4]}}),{c(){q(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,o){H(e,a,o),t=!0},p(a,o){const s={};o&16&&(s.iconAsSvgString=a[4]),e.$set(s)},i(a){t||(V(e.$$.fragment,a),t=!0)},o(a){B(e.$$.fragment,a),t=!1},d(a){W(e,a)}}}function Co(n){let e,t;return e=new Ln({props:{loggedItems:n[6]}}),{c(){q(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,o){H(e,a,o),t=!0},p(a,o){const s={};o&64&&(s.loggedItems=a[6]),e.$set(s)},i(a){t||(V(e.$$.fragment,a),t=!0)},o(a){B(e.$$.fragment,a),t=!1},d(a){W(e,a)}}}function So(n){let e,t;return e=new Gn({props:{items:n[11]}}),{c(){q(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,o){H(e,a,o),t=!0},p:Y,i(a){t||(V(e.$$.fragment,a),t=!0)},o(a){B(e.$$.fragment,a),t=!1},d(a){W(e,a)}}}function Ao(n){let e,t,a={pageId:n[1],monaco:n[24],state:n[3],onEditorModeChanged:n[18]};return e=new ia({props:a}),n[19](e),{c(){q(e.$$.fragment)},l(o){X(e.$$.fragment,o)},m(o,s){H(e,o,s),t=!0},p(o,s){const r={};s&2&&(r.pageId=o[1]),s&16777216&&(r.monaco=o[24]),s&8&&(r.state=o[3]),s&256&&(r.onEditorModeChanged=o[18]),e.$set(r)},i(o){t||(V(e.$$.fragment,o),t=!0)},o(o){B(e.$$.fragment,o),t=!1},d(o){n[19](null),W(e,o)}}}function xo(n){let e,t,a,o=n[2],s,r,i,l,c,u,p,_,g,y,x,d,h=Et(n);function m(T,M){if(T[8]=="code")return Io;if(T[8]=="state")return ko}let f=m(n),b=f&&f(n),S=oe(n[10]),D=[];for(let T=0;T<S.length;T+=1)D[T]=jt(xt(n,S,T));const C=[So,Co,Mo],E=[];function P(T,M){return T[5]=="Menu"?0:T[5]=="Log"?1:T[5]=="Icon"?2:-1}return~(p=P(n))&&(_=E[p]=C[p](n)),x=new ln({props:{$$slots:{default:[Ao,({monaco:T})=>({24:T}),({monaco:T})=>T?16777216:0]},$$scope:{ctx:n}}}),{c(){e=k("div"),t=k("div"),a=k("div"),h.c(),s=N(),r=k("div"),b&&b.c(),i=N(),l=k("div"),c=k("div");for(let T=0;T<D.length;T+=1)D[T].c();u=N(),_&&_.c(),g=N(),y=k("div"),q(x.$$.fragment),this.h()},l(T){e=I(T,"DIV",{class:!0});var M=O(e);t=I(M,"DIV",{class:!0});var U=O(t);a=I(U,"DIV",{class:!0});var te=O(a);h.l(te),te.forEach(w),s=R(U),r=I(U,"DIV",{class:!0});var j=O(r);b&&b.l(j),j.forEach(w),U.forEach(w),i=R(M),l=I(M,"DIV",{class:!0});var L=O(l);c=I(L,"DIV",{class:!0});var J=O(c);for(let re=0;re<D.length;re+=1)D[re].l(J);J.forEach(w),u=R(L),_&&_.l(L),L.forEach(w),g=R(M),y=I(M,"DIV",{class:!0});var he=O(y);X(x.$$.fragment,he),he.forEach(w),M.forEach(w),this.h()},h(){A(a,"class","app-component"),F(a,"width",`${n[9].codeScreen.widthInMm}mm`),F(a,"height",`${n[9].codeScreen.heightInMm}mm`),A(r,"class","preview-buttons"),A(t,"class","preview-child"),A(c,"class","tab-names"),A(l,"class","secondary-child"),A(y,"class","code-editor-child"),A(e,"class","edit-page-modal svelte-y2t29n")},m(T,M){$(T,e,M),v(e,t),v(t,a),h.m(a,null),v(t,s),v(t,r),b&&b.m(r,null),v(e,i),v(e,l),v(l,c);for(let U=0;U<D.length;U+=1)D[U]&&D[U].m(c,null);v(l,u),~p&&E[p].m(l,null),v(e,g),v(e,y),H(x,y,null),d=!0},p(T,M){if(M&4&&ee(o,o=T[2])?(ue(),B(h,1,1,Y),fe(),h=Et(T),h.c(),V(h,1),h.m(a,null)):h.p(T,M),M&512&&F(a,"width",`${T[9].codeScreen.widthInMm}mm`),M&512&&F(a,"height",`${T[9].codeScreen.heightInMm}mm`),f===(f=m(T))&&b?b.p(T,M):(b&&b.d(1),b=f&&f(T),b&&(b.c(),b.m(r,null))),M&1056){S=oe(T[10]);let j;for(j=0;j<S.length;j+=1){const L=xt(T,S,j);D[j]?D[j].p(L,M):(D[j]=jt(L),D[j].c(),D[j].m(c,null))}for(;j<D.length;j+=1)D[j].d(1);D.length=S.length}let U=p;p=P(T),p===U?~p&&E[p].p(T,M):(_&&(ue(),B(E[U],1,1,()=>{E[U]=null}),fe()),~p?(_=E[p],_?_.p(T,M):(_=E[p]=C[p](T),_.c()),V(_,1),_.m(l,null)):_=null);const te={};M&285213066&&(te.$$scope={dirty:M,ctx:T}),x.$set(te)},i(T){d||(V(h),V(_),V(x.$$.fragment,T),d=!0)},o(T){B(h),B(_),B(x.$$.fragment,T),d=!1},d(T){T&&w(e),h.d(T),b&&b.d(),Xe(D,T),~p&&E[p].d(),W(x)}}}function Eo(n){let e,t,a;function o(r){n[20](r)}let s={$$slots:{default:[xo]},$$scope:{ctx:n}};return n[0]!==void 0&&(s.showModal=n[0]),e=new Fe({props:s}),me.push(()=>_e(e,"showModal",o)),{c(){q(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,i){H(e,r,i),a=!0},p(r,[i]){const l={};i&268436478&&(l.$$scope={dirty:i,ctx:r}),!t&&i&1&&(t=!0,l.showModal=r[0],we(()=>t=!1)),e.$set(l)},i(r){a||(V(e.$$.fragment,r),a=!0)},o(r){B(e.$$.fragment,r),a=!1},d(r){W(e,r)}}}function jo(n,e,t){let a,o,s,r;G(n,ce,M=>t(16,o=M)),G(n,ke,M=>t(23,s=M)),G(n,ye,M=>t(9,r=M));let{showModal:i}=e,{pageId:l}=e,c=Math.random(),u,p="";const _=["Menu","Log","Icon"];let g=_[0],y=[],x=null,d="";const h=[{text:"Delete",onClick(){if(!confirm("Do you really want to delete this page?"))return;const M=o.findIndex(U=>U.id==l);o.splice(M,1),ce.set(o),t(0,i=!1)}},{text:"Close",onClick(){t(0,i=!1)}}],m={onStateChange(M){t(3,u=M)},onLog(M,U){y.push({type:M,value:U}),t(6,y)},onError(M){y.push({type:"error",value:M}),t(6,y)},onIconCreated(M){t(4,p=M)},state:null,version:1};function f(){return m}async function b(){t(6,y=[]),await new Promise(M=>setTimeout(M,1)),m.state=null,m.version=1,x.save(),t(2,c=Math.random()),t(3,u=null),t(4,p="")}async function S(){t(6,y=[]),await new Promise(te=>setTimeout(te,1)),m.state=x.getModifiedState();const M=u.version,U=m.state.version;M!=U&&(m.state.version=M,m.version=U),t(2,c=Math.random()),t(3,u=null),t(4,p="")}function D(){return Ne(s,o,a)}const C=M=>t(5,g=M),E=M=>t(8,d=M);function P(M){me[M?"unshift":"push"](()=>{x=M,t(7,x)})}function T(M){i=M,t(0,i)}return n.$$set=M=>{"showModal"in M&&t(0,i=M.showModal),"pageId"in M&&t(1,l=M.pageId)},n.$$.update=()=>{n.$$.dirty&65538&&(a=o.find(M=>M.id==l))},[i,l,c,u,p,g,y,x,d,r,_,h,f,b,S,D,o,C,E,P,T]}class Po extends ne{constructor(e){super(),ae(this,e,jo,Eo,ee,{showModal:0,pageId:1})}}function Pt(n){let e,t;return e=new it({props:{createAppCode:Ne(n[4],n[3],{code:n[1].code})}}),{c(){q(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,o){H(e,a,o),t=!0},p(a,o){const s={};o&26&&(s.createAppCode=Ne(a[4],a[3],{code:a[1].code})),e.$set(s)},i(a){t||(V(e.$$.fragment,a),t=!0)},o(a){B(e.$$.fragment,a),t=!1},d(a){W(e,a)}}}function Oo(n){let e,t,a,o;return{c(){e=k("div"),this.h()},l(s){e=I(s,"DIV",{style:!0}),O(e).forEach(w),this.h()},h(){F(e,"height","100%")},m(s,r){$(s,e,r),a||(o=Re(t=n[8].call(null,e,n[14])),a=!0)},p(s,r){t&&qe(t.update)&&r&16384&&t.update.call(null,s[14])},d(s){s&&w(e),a=!1,o()}}}function Vo(n){let e,t,a,o=n[2],s,r,i,l="Restart",c,u,p,_="Menu",g,y,x="Save and close",d,h,m="Delete this page template",f,b,S,D,C,E,P=Pt(n);return S=new ln({props:{$$slots:{default:[Oo,({monaco:T})=>({14:T}),({monaco:T})=>T?16384:0]},$$scope:{ctx:n}}}),{c(){e=k("div"),t=k("div"),a=k("div"),P.c(),s=N(),r=k("div"),i=k("button"),i.textContent=l,c=N(),u=k("div"),p=k("h2"),p.textContent=_,g=N(),y=k("button"),y.textContent=x,d=N(),h=k("button"),h.textContent=m,f=N(),b=k("div"),q(S.$$.fragment),this.h()},l(T){e=I(T,"DIV",{class:!0});var M=O(e);t=I(M,"DIV",{class:!0});var U=O(t);a=I(U,"DIV",{class:!0});var te=O(a);P.l(te),te.forEach(w),s=R(U),r=I(U,"DIV",{class:!0});var j=O(r);i=I(j,"BUTTON",{"data-svelte-h":!0}),K(i)!=="svelte-5snrhj"&&(i.textContent=l),j.forEach(w),U.forEach(w),c=R(M),u=I(M,"DIV",{class:!0});var L=O(u);p=I(L,"H2",{"data-svelte-h":!0}),K(p)!=="svelte-1k9wpi9"&&(p.textContent=_),g=R(L),y=I(L,"BUTTON",{"data-svelte-h":!0}),K(y)!=="svelte-cvu16r"&&(y.textContent=x),d=R(L),h=I(L,"BUTTON",{"data-svelte-h":!0}),K(h)!=="svelte-19vawev"&&(h.textContent=m),L.forEach(w),f=R(M),b=I(M,"DIV",{class:!0});var J=O(b);X(S.$$.fragment,J),J.forEach(w),M.forEach(w),this.h()},h(){A(a,"class","app-component svelte-ydwnab"),F(a,"width",`${n[5].codeScreen.widthInMm}mm`),F(a,"height",`${n[5].codeScreen.heightInMm}mm`),A(r,"class","preview-buttons svelte-ydwnab"),A(t,"class","preview-section svelte-ydwnab"),A(u,"class","menu svelte-ydwnab"),A(b,"class","code-editor svelte-ydwnab"),A(e,"class","edit-page-template-modal svelte-ydwnab")},m(T,M){$(T,e,M),v(e,t),v(t,a),P.m(a,null),v(t,s),v(t,r),v(r,i),v(e,c),v(e,u),v(u,p),v(u,g),v(u,y),v(u,d),v(u,h),v(e,f),v(e,b),H(S,b,null),D=!0,C||(E=[z(i,"click",n[6]),z(y,"click",n[10]),z(h,"click",n[7])],C=!0)},p(T,M){M&4&&ee(o,o=T[2])?(ue(),B(P,1,1,Y),fe(),P=Pt(T),P.c(),V(P,1),P.m(a,null)):P.p(T,M),M&32&&F(a,"width",`${T[5].codeScreen.widthInMm}mm`),M&32&&F(a,"height",`${T[5].codeScreen.heightInMm}mm`);const U={};M&49152&&(U.$$scope={dirty:M,ctx:T}),S.$set(U)},i(T){D||(V(P),V(S.$$.fragment,T),D=!0)},o(T){B(P),B(S.$$.fragment,T),D=!1},d(T){T&&w(e),P.d(T),W(S),C=!1,Ce(E)}}}function Do(n){let e,t,a;function o(r){n[11](r)}let s={$$slots:{default:[Vo]},$$scope:{ctx:n}};return n[0]!==void 0&&(s.showModal=n[0]),e=new Fe({props:s}),me.push(()=>_e(e,"showModal",o)),{c(){q(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,i){H(e,r,i),a=!0},p(r,[i]){const l={};i&32831&&(l.$$scope={dirty:i,ctx:r}),!t&&i&1&&(t=!0,l.showModal=r[0],we(()=>t=!1)),e.$set(l)},i(r){a||(V(e.$$.fragment,r),a=!0)},o(r){B(e.$$.fragment,r),a=!1},d(r){W(e,r)}}}function Bo(n,e,t){let a,o,s,r;G(n,ce,h=>t(3,a=h)),G(n,ke,h=>t(4,o=h)),G(n,je,h=>t(13,s=h)),G(n,ye,h=>t(5,r=h));let{showModal:i}=e,{pageTemplateId:l}=e;const c=s.find(h=>h.id==l);let u,p=0;function _(){const h=u.getValue();t(1,c.code=h,c),je.set(s),t(2,p+=1)}function g(){if(!confirm("Really delete?"))return;const h=s.findIndex(m=>m.id==l);s.splice(h,1),t(0,i=!1)}function y(h,m){const f=[{variable:"p",code:c.code},{variable:"a",code:o.code}].map(C=>({variable:C.variable,monacoClassModel:m.editor.createModel(C.code,"javascript"),monacoVariableModel:m.editor.createModel(`const ${C.variable} = new ${ge(C.code)}()`,"javascript")}));function b(C){const E=f[C],P=ge(E.monacoClassModel.getValue());f[C].monacoVariableModel.setValue(`const ${E.variable} = new ${P}();`)}for(let C=0;C<f.length;C++){const E=f[C];b(C),E.monacoClassModel.onDidChangeContent(P=>{b(C)})}const S=a.map(C=>ge(C.code)),D=m.editor.createModel(S.map(C=>`class ${C} extends Page{}`).join(`
`),"javascript");return u=m.editor.create(h,{model:f[0].monacoClassModel,minimap:{enabled:!1},fontSize:16,tabSize:2,automaticLayout:!0,scrollBeyondLastLine:!1,renderWhitespace:"all",trimAutoWhitespace:!1,language:"javascript",suggest:{showKeywords:!1}}),{onDestroy(){u.dispose(),D.dispose()}}}st(_);const x=()=>t(0,i=!1);function d(h){i=h,t(0,i)}return n.$$set=h=>{"showModal"in h&&t(0,i=h.showModal),"pageTemplateId"in h&&t(9,l=h.pageTemplateId)},[i,c,p,a,o,r,_,g,y,l,x,d]}class No extends ne{constructor(e){super(),ae(this,e,Bo,Do,ee,{showModal:0,pageTemplateId:9})}}function Ot(n,e,t){const a=n.slice();return a[16]=e[t],a}function Vt(n,e){let t,a,o,s,r,i,l,c="Edit",u,p,_,g;o=new it({props:{createAppCode:Ne(e[6],e[4],{code:e[16].code},!0)}});function y(){return e[12](e[16])}function x(){return e[13](e[16])}return{key:n,first:null,c(){t=k("div"),a=k("div"),q(o.$$.fragment),s=N(),r=k("div"),i=N(),l=k("button"),l.textContent=c,u=N(),this.h()},l(d){t=I(d,"DIV",{class:!0});var h=O(t);a=I(h,"DIV",{class:!0});var m=O(a);X(o.$$.fragment,m),s=R(m),r=I(m,"DIV",{class:!0}),O(r).forEach(w),m.forEach(w),i=R(h),l=I(h,"BUTTON",{class:!0,"data-svelte-h":!0}),K(l)!=="svelte-eodtwe"&&(l.textContent=c),u=R(h),h.forEach(w),this.h()},h(){A(r,"class","overlay svelte-1dwdo8c"),A(a,"class","page-template svelte-1dwdo8c"),F(a,"width",`${e[5].folderScreen.widthInMm}mm`),F(a,"height",`${e[5].folderScreen.heightInMm}mm`),A(l,"class","edit-page-button svelte-1dwdo8c"),A(t,"class","page-template-box svelte-1dwdo8c"),this.first=t},m(d,h){$(d,t,h),v(t,a),H(o,a,null),v(a,s),v(a,r),v(t,i),v(t,l),v(t,u),p=!0,_||(g=[z(a,"click",ze(y)),z(l,"click",ze(x))],_=!0)},p(d,h){e=d;const m={};h&88&&(m.createAppCode=Ne(e[6],e[4],{code:e[16].code},!0)),o.$set(m),h&32&&F(a,"width",`${e[5].folderScreen.widthInMm}mm`),h&32&&F(a,"height",`${e[5].folderScreen.heightInMm}mm`)},i(d){p||(V(o.$$.fragment,d),p=!0)},o(d){B(o.$$.fragment,d),p=!1},d(d){d&&w(t),W(o),_=!1,Ce(g)}}}function Ro(n){let e,t,a="Create Page (choose template)",o,s,r=[],i=new Map,l,c,u="Create new page template",p,_,g,y=oe(n[3]);const x=d=>d[16].id;for(let d=0;d<y.length;d+=1){let h=Ot(n,y,d),m=x(h);i.set(m,r[d]=Vt(m,h))}return{c(){e=k("div"),t=k("h1"),t.textContent=a,o=N(),s=k("div");for(let d=0;d<r.length;d+=1)r[d].c();l=N(),c=k("button"),c.textContent=u,this.h()},l(d){e=I(d,"DIV",{class:!0});var h=O(e);t=I(h,"H1",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-1fbxl57"&&(t.textContent=a),o=R(h),s=I(h,"DIV",{class:!0});var m=O(s);for(let f=0;f<r.length;f+=1)r[f].l(m);m.forEach(w),l=R(h),c=I(h,"BUTTON",{class:!0,"data-svelte-h":!0}),K(c)!=="svelte-wmwgso"&&(c.textContent=u),h.forEach(w),this.h()},h(){A(t,"class","svelte-1dwdo8c"),A(s,"class","page-template-boxes svelte-1dwdo8c"),A(c,"class","new-page-template-button svelte-1dwdo8c"),A(e,"class","create-page-modal svelte-1dwdo8c")},m(d,h){$(d,e,h),v(e,t),v(e,o),v(e,s);for(let m=0;m<r.length;m+=1)r[m]&&r[m].m(s,null);v(e,l),v(e,c),p=!0,_||(g=z(c,"click",n[8]),_=!0)},p(d,h){h&254&&(y=oe(d[3]),ue(),r=Ze(r,h,x,1,d,y,i,s,tn,Vt,null,Ot),fe())},i(d){if(!p){for(let h=0;h<y.length;h+=1)V(r[h]);p=!0}},o(d){for(let h=0;h<r.length;h+=1)B(r[h]);p=!1},d(d){d&&w(e);for(let h=0;h<r.length;h+=1)r[h].d();_=!1,g()}}}function Dt(n){let e,t,a;function o(r){n[15](r)}let s={pageTemplateId:n[2]};return n[1]!==void 0&&(s.showModal=n[1]),e=new No({props:s}),me.push(()=>_e(e,"showModal",o)),{c(){q(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,i){H(e,r,i),a=!0},p(r,i){const l={};i&4&&(l.pageTemplateId=r[2]),!t&&i&2&&(t=!0,l.showModal=r[1],we(()=>t=!1)),e.$set(l)},i(r){a||(V(e.$$.fragment,r),a=!0)},o(r){B(e.$$.fragment,r),a=!1},d(r){W(e,r)}}}function $o(n){let e,t,a,o,s;function r(c){n[14](c)}let i={$$slots:{default:[Ro]},$$scope:{ctx:n}};n[0]!==void 0&&(i.showModal=n[0]),e=new Fe({props:i}),me.push(()=>_e(e,"showModal",r));let l=n[1]&&Dt(n);return{c(){q(e.$$.fragment),a=N(),l&&l.c(),o=le()},l(c){X(e.$$.fragment,c),a=R(c),l&&l.l(c),o=le()},m(c,u){H(e,c,u),$(c,a,u),l&&l.m(c,u),$(c,o,u),s=!0},p(c,[u]){const p={};u&524414&&(p.$$scope={dirty:u,ctx:c}),!t&&u&1&&(t=!0,p.showModal=c[0],we(()=>t=!1)),e.$set(p),c[1]?l?(l.p(c,u),u&2&&V(l,1)):(l=Dt(c),l.c(),V(l,1),l.m(o.parentNode,o)):l&&(ue(),B(l,1,1,()=>{l=null}),fe())},i(c){s||(V(e.$$.fragment,c),V(l),s=!0)},o(c){B(e.$$.fragment,c),B(l),s=!1},d(c){c&&(w(a),w(o)),W(e,c),l&&l.d(c)}}}function Fo(n,e,t){let a,o,s,r;G(n,je,f=>t(3,a=f)),G(n,ce,f=>t(4,o=f)),G(n,ye,f=>t(5,s=f)),G(n,ke,f=>t(6,r=f));let{showModal:i}=e,{folderId:l}=e,{createAtX:c}=e,{createAtY:u}=e,p=!1,_=-1;function g(f){var E;const b=c,S=u,D=prompt("Enter page name:");if(!D)return;const C=f.code.replace(/class \w+ extends/,`class ${D} extends`);o.push({id:(((E=o.at(-1))==null?void 0:E.id)??0)+1,folderId:l,code:C,x:b,y:S}),ce.set(o),t(0,i=!1)}function y(){var b;const f=(((b=a.at(-1))==null?void 0:b.id)??0)+1;a.push({id:f,title:"New Template",code:`
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
			`.trim()}),t(1,p=!0),t(2,_=f)}const x=f=>g(f),d=f=>{t(2,_=f.id),t(1,p=!0)};function h(f){i=f,t(0,i)}function m(f){p=f,t(1,p)}return n.$$set=f=>{"showModal"in f&&t(0,i=f.showModal),"folderId"in f&&t(9,l=f.folderId),"createAtX"in f&&t(10,c=f.createAtX),"createAtY"in f&&t(11,u=f.createAtY)},[i,p,_,a,o,s,r,g,y,l,c,u,x,d,h,m]}class Uo extends ne{constructor(e){super(),ae(this,e,Fo,$o,ee,{showModal:0,folderId:9,createAtX:10,createAtY:11})}}function Lo(n){let e,t,a,o;return{c(){e=k("div"),this.h()},l(s){e=I(s,"DIV",{class:!0}),O(e).forEach(w),this.h()},h(){A(e,"class","app svelte-jvv5s9")},m(s,r){$(s,e,r),a||(o=Re(t=Yo.call(null,e,n[0])),a=!0)},p(s,[r]){t&&qe(t.update)&&r&1&&t.update.call(null,s[0])},i:Y,o:Y,d(s){s&&w(e),a=!1,o()}}}function Yo(n,e){function t(a){n.innerText="",n.appendChild(a.createElement())}return t(e),{update:t}}function zo(n,e,t){let{frameworkApp:a=null}=e;return n.$$set=o=>{"frameworkApp"in o&&t(0,a=o.frameworkApp)},[a]}class Go extends ne{constructor(e){super(),ae(this,e,zo,Lo,ee,{frameworkApp:0})}}const Bt=new Map,qo={isPreview:!0};function Xo(n,e,t){const a=Ne(n,e,t,!0),o=Bt.get(a);if(o)return o;const s=new wn(a,qo);return s.start(),Bt[a]=s,s}function Nt(n,e,t){const a=n.slice();return a[27]=e[t].page,a[28]=e[t].frameworkApp,a}function Rt(n,e,t){const a=n.slice();return a[31]=e[t],a}function $t(n){let e,t=n[31].text+"",a;return{c(){e=k("div"),a=se(t),this.h()},l(o){e=I(o,"DIV",{class:!0});var s=O(e);a=ie(s,t),s.forEach(w),this.h()},h(){A(e,"class","line svelte-33b36g"),Be(e,"isBack",n[31].isBack),F(e,"width",`${n[31].length}px`),F(e,"transform",`translate(${n[31].centerX}px, ${n[31].centerY}px) translate(-50%, -50%) rotate(${n[31].angle}deg)`)},m(o,s){$(o,e,s),v(e,a)},p(o,s){s[0]&256&&t!==(t=o[31].text+"")&&Pe(a,t),s[0]&256&&Be(e,"isBack",o[31].isBack),s[0]&256&&F(e,"width",`${o[31].length}px`),s[0]&256&&F(e,"transform",`translate(${o[31].centerX}px, ${o[31].centerY}px) translate(-50%, -50%) rotate(${o[31].angle}deg)`)},d(o){o&&w(e)}}}function Ft(n,e){let t,a,o=ge(e[27].code)+"",s,r,i,l,c,u,p,_;function g(){return e[19](e[27])}l=new Go({props:{frameworkApp:e[28]}});function y(){return e[20](e[27])}function x(...d){return e[21](e[27],...d)}return{key:n,first:null,c(){t=k("div"),a=k("div"),s=se(o),r=N(),i=k("div"),q(l.$$.fragment),c=N(),this.h()},l(d){t=I(d,"DIV",{class:!0,draggable:!0});var h=O(t);a=I(h,"DIV",{class:!0});var m=O(a);s=ie(m,o),m.forEach(w),r=R(h),i=I(h,"DIV",{class:!0});var f=O(i);X(l.$$.fragment,f),f.forEach(w),c=R(h),h.forEach(w),this.h()},h(){A(a,"class","name svelte-33b36g"),A(i,"class","page svelte-33b36g"),A(t,"class","page-container svelte-33b36g"),A(t,"draggable","true"),F(t,"width",`${e[9].folderScreen.widthInMm}mm`),F(t,"height",`${e[9].folderScreen.heightInMm}mm`),F(t,"transform",`translate(${e[27].x}px, ${e[27].y}px) translate(-50%, -50%)`),this.first=t},m(d,h){$(d,t,h),v(t,a),v(a,s),v(t,r),v(t,i),H(l,i,null),v(t,c),u=!0,p||(_=[z(a,"click",ze(g)),z(i,"click",ze(y)),z(t,"dragstart",x)],p=!0)},p(d,h){e=d,(!u||h[0]&2)&&o!==(o=ge(e[27].code)+"")&&Pe(s,o);const m={};h[0]&2&&(m.frameworkApp=e[28]),l.$set(m),h[0]&512&&F(t,"width",`${e[9].folderScreen.widthInMm}mm`),h[0]&512&&F(t,"height",`${e[9].folderScreen.heightInMm}mm`),h[0]&2&&F(t,"transform",`translate(${e[27].x}px, ${e[27].y}px) translate(-50%, -50%)`)},i(d){u||(V(l.$$.fragment,d),u=!0)},o(d){B(l.$$.fragment,d),u=!1},d(d){d&&w(t),W(l),p=!1,Ce(_)}}}function Ut(n){let e,t,a;function o(r){n[22](r)}let s={pageId:n[4]};return n[3]!==void 0&&(s.showModal=n[3]),e=new Po({props:s}),me.push(()=>_e(e,"showModal",o)),{c(){q(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,i){H(e,r,i),a=!0},p(r,i){const l={};i[0]&16&&(l.pageId=r[4]),!t&&i[0]&8&&(t=!0,l.showModal=r[3],we(()=>t=!1)),e.$set(l)},i(r){a||(V(e.$$.fragment,r),a=!0)},o(r){B(e.$$.fragment,r),a=!1},d(r){W(e,r)}}}function Lt(n){let e,t,a;function o(r){n[23](r)}let s={folderId:n[0],createAtX:n[5]-n[7].offsetX,createAtY:n[6]-n[7].offsetY};return n[2]!==void 0&&(s.showModal=n[2]),e=new Uo({props:s}),me.push(()=>_e(e,"showModal",o)),{c(){q(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,i){H(e,r,i),a=!0},p(r,i){const l={};i[0]&1&&(l.folderId=r[0]),i[0]&160&&(l.createAtX=r[5]-r[7].offsetX),i[0]&192&&(l.createAtY=r[6]-r[7].offsetY),!t&&i[0]&4&&(t=!0,l.showModal=r[2],we(()=>t=!1)),e.$set(l)},i(r){a||(V(e.$$.fragment,r),a=!0)},o(r){B(e.$$.fragment,r),a=!1},d(r){W(e,r)}}}function Ho(n){let e,t,a,o=[],s=new Map,r,i,l,c,u,p,_=oe(n[8]),g=[];for(let m=0;m<_.length;m+=1)g[m]=$t(Rt(n,_,m));let y=oe(n[1]);const x=m=>m[27].id;for(let m=0;m<y.length;m+=1){let f=Nt(n,y,m),b=x(f);s.set(b,o[m]=Ft(b,f))}let d=n[3]&&Ut(n),h=n[2]&&Lt(n);return{c(){e=k("div"),t=k("div");for(let m=0;m<g.length;m+=1)g[m].c();a=N();for(let m=0;m<o.length;m+=1)o[m].c();r=N(),d&&d.c(),i=N(),h&&h.c(),l=le(),this.h()},l(m){e=I(m,"DIV",{class:!0,draggable:!0});var f=O(e);t=I(f,"DIV",{class:!0});var b=O(t);for(let S=0;S<g.length;S+=1)g[S].l(b);a=R(b);for(let S=0;S<o.length;S+=1)o[S].l(b);b.forEach(w),f.forEach(w),r=R(m),d&&d.l(m),i=R(m),h&&h.l(m),l=le(),this.h()},h(){A(t,"class","pages svelte-33b36g"),F(t,"transform",`translate(${n[7].offsetX}px, ${n[7].offsetY}px)`),A(e,"class","folder svelte-33b36g"),A(e,"draggable","true"),F(e,"background-position-x",`${n[7].offsetX}px`),F(e,"background-position-y",`${n[7].offsetY}px`)},m(m,f){$(m,e,f),v(e,t);for(let b=0;b<g.length;b+=1)g[b]&&g[b].m(t,null);v(t,a);for(let b=0;b<o.length;b+=1)o[b]&&o[b].m(t,null);$(m,r,f),d&&d.m(m,f),$(m,i,f),h&&h.m(m,f),$(m,l,f),c=!0,u||(p=[z(e,"click",n[14]),z(e,"dragstart",n[10]),z(e,"dragover",lt(n[11])),z(e,"drop",lt(n[13]))],u=!0)},p(m,f){if(f[0]&256){_=oe(m[8]);let b;for(b=0;b<_.length;b+=1){const S=Rt(m,_,b);g[b]?g[b].p(S,f):(g[b]=$t(S),g[b].c(),g[b].m(t,a))}for(;b<g.length;b+=1)g[b].d(1);g.length=_.length}f[0]&4634&&(y=oe(m[1]),ue(),o=Ze(o,f,x,1,m,y,s,t,tn,Ft,null,Nt),fe()),f[0]&128&&F(t,"transform",`translate(${m[7].offsetX}px, ${m[7].offsetY}px)`),f[0]&128&&F(e,"background-position-x",`${m[7].offsetX}px`),f[0]&128&&F(e,"background-position-y",`${m[7].offsetY}px`),m[3]?d?(d.p(m,f),f[0]&8&&V(d,1)):(d=Ut(m),d.c(),V(d,1),d.m(i.parentNode,i)):d&&(ue(),B(d,1,1,()=>{d=null}),fe()),m[2]?h?(h.p(m,f),f[0]&4&&V(h,1)):(h=Lt(m),h.c(),V(h,1),h.m(l.parentNode,l)):h&&(ue(),B(h,1,1,()=>{h=null}),fe())},i(m){if(!c){for(let f=0;f<y.length;f+=1)V(o[f]);V(d),V(h),c=!0}},o(m){for(let f=0;f<o.length;f+=1)B(o[f]);B(d),B(h),c=!1},d(m){m&&(w(e),w(r),w(i),w(l)),Xe(g,m);for(let f=0;f<o.length;f+=1)o[f].d();d&&d.d(m),h&&h.d(m),u=!1,Ce(p)}}}const Wo=50;function Ko(n){navigator.clipboard.writeText(n)}function Jo(n,e,t){let a,o,s,r,i,l,c,u;G(n,ce,j=>t(16,i=j)),G(n,Me,j=>t(17,l=j)),G(n,ke,j=>t(18,c=j)),G(n,ye,j=>t(9,u=j));let{folderId:p}=e,_=!1,g=!1,y=-1,x=-1,d=-1,h=null;function m(j,L){return L.map(J=>{const he=Xo(j,i,J);return{page:J,frameworkApp:he}})}function f(j){var J;const L=[];for(const he of j){const re=(J=he.frameworkApp)==null?void 0:J.frameworkPage;if(!re)continue;const Oe=he.page.x,be=he.page.y,Ue=[].concat(re.beforeDirections,re.afterDirections);for(const de of Ue){const Ve=j.find(xe=>de.getPage().proxyName==ge(xe.page.code));if(Ve){const xe=Ve.page.x,We=Ve.page.y,Q=xe-Oe,Z=We-be,ve=Math.sqrt(Q**2+Z**2),De=Oe+Q/2;if(0<=Q){const Ee=Math.atan2(Z,Q)*180/Math.PI,pe=be+Z/2;L.push({length:ve,angle:Ee,centerX:De,centerY:pe,text:de.getDescription(),isBack:!1})}else{const Ee=Math.atan2(Z,Q)*180/Math.PI+180,pe=be+Z/2+Wo;L.push({length:ve,angle:Ee,centerX:De,centerY:pe,text:de.getDescription(),isBack:!0})}}}}return L}function b(j){h={action:"moveBackground",initialFolderOffsetX:a.offsetX,initialFolderOffsetY:a.offsetY,startMouseX:j.clientX,startMouseY:j.clientY};const L=document.createElement("img");L.style.display="none",j.dataTransfer.setDragImage(L,0,0)}function S(j){switch(h.action){case"moveBackground":const L=j.clientX-h.startMouseX,J=j.clientY-h.startMouseY;t(7,a.offsetX=h.initialFolderOffsetX+L,a),t(7,a.offsetY=h.initialFolderOffsetY+J,a),Me.set(l);break}}function D(j,L){j.stopPropagation(),h={action:"movePage",pageId:L.id,startMouseX:j.clientX,startMouseY:j.clientY}}function C(j){switch(h.action){case"movePage":const L=j.clientX-h.startMouseX,J=j.clientY-h.startMouseY,he=i.find(re=>re.id==h.pageId);he.x+=L,he.y+=J,ce.set(i);break}}function E(j){t(4,y=-1),t(2,_=!0),t(5,x=j.clientX),t(6,d=j.clientY)}const P=j=>Ko(ge(j.code)),T=j=>{t(3,g=!0),t(4,y=j.id)},M=(j,L)=>D(L,j);function U(j){g=j,t(3,g)}function te(j){_=j,t(2,_)}return n.$$set=j=>{"folderId"in j&&t(0,p=j.folderId)},n.$$.update=()=>{n.$$.dirty[0]&131073&&t(7,a=l.find(j=>j.id==p)??l[0]),n.$$.dirty[0]&65537&&t(15,o=i.filter(j=>j.folderId==p)),n.$$.dirty[0]&294912&&t(1,s=m(c,o)),n.$$.dirty[0]&2&&t(8,r=f(s))},[p,s,_,g,y,x,d,a,r,u,b,S,D,C,E,o,i,l,c,P,T,M,U,te]}class Qo extends ne{constructor(e){super(),ae(this,e,Jo,Ho,ee,{folderId:0},null,[-1,-1])}}function Yt(n,e,t){const a=n.slice();return a[10]=e[t],a}function zt(n,e){let t,a=e[10].name+"",o,s,r;function i(){return e[6](e[10])}return{key:n,first:null,c(){t=k("button"),o=se(a),this.h()},l(l){t=I(l,"BUTTON",{class:!0});var c=O(t);o=ie(c,a),c.forEach(w),this.h()},h(){A(t,"class","svelte-q0xr25"),Be(t,"current",e[1]==e[10].id),this.first=t},m(l,c){$(l,t,c),v(t,o),s||(r=z(t,"click",i),s=!0)},p(l,c){e=l,c&4&&a!==(a=e[10].name+"")&&Pe(o,a),c&6&&Be(t,"current",e[1]==e[10].id)},d(l){l&&w(t),s=!1,r()}}}function Gt(n){let e,t,a;function o(r){n[8](r)}let s={options:n[0]};return n[3]!==void 0&&(s.showModal=n[3]),e=new jn({props:s}),me.push(()=>_e(e,"showModal",o)),{c(){q(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,i){H(e,r,i),a=!0},p(r,i){const l={};i&1&&(l.options=r[0]),!t&&i&8&&(t=!0,l.showModal=r[3],we(()=>t=!1)),e.$set(l)},i(r){a||(V(e.$$.fragment,r),a=!0)},o(r){B(e.$$.fragment,r),a=!1},d(r){W(e,r)}}}function qt(n){let e,t,a;function o(r){n[9](r)}let s={folderId:n[1]};return n[4]!==void 0&&(s.showModal=n[4]),e=new Dn({props:s}),me.push(()=>_e(e,"showModal",o)),{c(){q(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,i){H(e,r,i),a=!0},p(r,i){const l={};i&2&&(l.folderId=r[1]),!t&&i&16&&(t=!0,l.showModal=r[4],we(()=>t=!1)),e.$set(l)},i(r){a||(V(e.$$.fragment,r),a=!0)},o(r){B(e.$$.fragment,r),a=!1},d(r){W(e,r)}}}function Zo(n){let e,t,a,o,s,r,i=[],l=new Map,c,u,p="+",_,g,y="☰",x,d,h,m,f,b;a=new Qo({props:{folderId:n[1]}});let S=oe(n[2]);const D=P=>P[10].id;for(let P=0;P<S.length;P+=1){let T=Yt(n,S,P),M=D(T);l.set(M,i[P]=zt(M,T))}let C=n[3]&&Gt(n),E=n[4]&&qt(n);return{c(){e=k("div"),t=k("div"),q(a.$$.fragment),o=N(),s=k("div"),r=k("div");for(let P=0;P<i.length;P+=1)i[P].c();c=N(),u=k("button"),u.textContent=p,_=N(),g=k("button"),g.textContent=y,x=N(),C&&C.c(),d=N(),E&&E.c(),h=le(),this.h()},l(P){e=I(P,"DIV",{class:!0});var T=O(e);t=I(T,"DIV",{class:!0});var M=O(t);X(a.$$.fragment,M),M.forEach(w),o=R(T),s=I(T,"DIV",{class:!0});var U=O(s);r=I(U,"DIV",{class:!0});var te=O(r);for(let j=0;j<i.length;j+=1)i[j].l(te);c=R(te),u=I(te,"BUTTON",{class:!0,"data-svelte-h":!0}),K(u)!=="svelte-1hnfxpo"&&(u.textContent=p),te.forEach(w),U.forEach(w),_=R(T),g=I(T,"BUTTON",{class:!0,"data-svelte-h":!0}),K(g)!=="svelte-1x767tg"&&(g.textContent=y),T.forEach(w),x=R(P),C&&C.l(P),d=R(P),E&&E.l(P),h=le(),this.h()},h(){A(t,"class","folder svelte-q0xr25"),A(u,"class","create-folder svelte-q0xr25"),A(r,"class","folder-titles svelte-q0xr25"),A(s,"class","header svelte-q0xr25"),A(g,"class","main-menu-button svelte-q0xr25"),A(e,"class","app svelte-q0xr25")},m(P,T){$(P,e,T),v(e,t),H(a,t,null),v(e,o),v(e,s),v(s,r);for(let M=0;M<i.length;M+=1)i[M]&&i[M].m(r,null);v(r,c),v(r,u),v(e,_),v(e,g),$(P,x,T),C&&C.m(P,T),$(P,d,T),E&&E.m(P,T),$(P,h,T),m=!0,f||(b=[z(u,"click",n[5]),z(g,"click",n[7])],f=!0)},p(P,[T]){const M={};T&2&&(M.folderId=P[1]),a.$set(M),T&22&&(S=oe(P[2]),i=Ze(i,T,D,1,P,S,l,r,en,zt,c,Yt)),P[3]?C?(C.p(P,T),T&8&&V(C,1)):(C=Gt(P),C.c(),V(C,1),C.m(d.parentNode,d)):C&&(ue(),B(C,1,1,()=>{C=null}),fe()),P[4]?E?(E.p(P,T),T&16&&V(E,1)):(E=qt(P),E.c(),V(E,1),E.m(h.parentNode,h)):E&&(ue(),B(E,1,1,()=>{E=null}),fe())},i(P){m||(V(a.$$.fragment,P),V(C),V(E),m=!0)},o(P){B(a.$$.fragment,P),B(C),B(E),m=!1},d(P){P&&(w(e),w(x),w(d),w(h)),W(a);for(let T=0;T<i.length;T+=1)i[T].d();C&&C.d(P),E&&E.d(P),f=!1,Ce(b)}}}function er(n,e,t){let a;G(n,Me,g=>t(2,a=g));let{mainMenuOptions:o={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[]}}=e,s=a[0].id,r=!1,i=!1;function l(){const g=a.at(-1).id+1;a.push({id:g,name:"New folder",offsetX:0,offsetY:0}),Me.set(a),t(1,s=g),t(4,i=!0)}const c=g=>{s==g.id?t(4,i=!0):t(1,s=g.id)},u=()=>t(3,r=!0);function p(g){r=g,t(3,r)}function _(g){i=g,t(4,i)}return n.$$set=g=>{"mainMenuOptions"in g&&t(0,o=g.mainMenuOptions)},n.$$.update=()=>{n.$$.dirty&6&&(a.find(g=>g.id==s)||t(1,s=a[0].id))},[o,s,a,r,i,l,c,u,p,_]}class tr extends ne{constructor(e){super(),ae(this,e,er,Zo,ee,{mainMenuOptions:0})}}const Le={editorSettings:{codeScreen:{widthInMm:40*1.5,heightInMm:66*1.5},folderScreen:{widthInMm:40,heightInMm:66}},app:{code:`
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
		`.trim()}]};function Xt(n){let e,t;return e=new tr({props:{mainMenuOptions:n[0]}}),{c(){q(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,o){H(e,a,o),t=!0},p(a,o){const s={};o&1&&(s.mainMenuOptions=a[0]),e.$set(s)},i(a){t||(V(e.$$.fragment,a),t=!0)},o(a){B(e.$$.fragment,a),t=!1},d(a){W(e,a)}}}function nr(n){let e,t,a=n[1]&&Xt(n);return{c(){a&&a.c(),e=le()},l(o){a&&a.l(o),e=le()},m(o,s){a&&a.m(o,s),$(o,e,s),t=!0},p(o,[s]){o[1]?a?(a.p(o,s),s&2&&V(a,1)):(a=Xt(o),a.c(),V(a,1),a.m(e.parentNode,e)):a&&(ue(),B(a,1,1,()=>{a=null}),fe())},i(o){t||(V(a),t=!0)},o(o){B(a),t=!1},d(o){o&&w(e),a&&a.d(o)}}}function ar(n,e,t){let a,o,s,r,i;G(n,je,p=>t(3,a=p)),G(n,ce,p=>t(4,o=p)),G(n,Me,p=>t(5,s=p)),G(n,ke,p=>t(6,r=p)),G(n,ye,p=>t(7,i=p));let{mainMenuOptions:l={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[]}}=e,{bagaCode:c=""}=e,u=!1;return Zt(()=>{let p,_,g,y,x;if(c!="")try{const d=nn(c);p=d.editorSettings,_=d.app,g=d.folders,y=d.pages,x=d.pageTemplates}catch(d){console.log(d),alert("The baga code given to the editor is invalid. The default project will be loaded instead.")}Te(ye,i=p??Le.editorSettings,i),Te(ke,r=_??Le.app,r),Te(Me,s=g??Le.folders,s),Te(ce,o=y??Le.pages,o),Te(je,a=x??Le.pageTemplates,a),t(1,u=!0)}),n.$$set=p=>{"mainMenuOptions"in p&&t(0,l=p.mainMenuOptions),"bagaCode"in p&&t(2,c=p.bagaCode)},[l,u,c]}class or extends ne{constructor(e){super(),ae(this,e,ar,nr,ee,{mainMenuOptions:0,bagaCode:2})}}function Ht(n){let e,t;return e=new or({props:{bagaCode:n[0],mainMenuOptions:n[3]}}),{c(){q(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,o){H(e,a,o),t=!0},p(a,o){const s={};o&1&&(s.bagaCode=a[0]),e.$set(s)},i(a){t||(V(e.$$.fragment,a),t=!0)},o(a){B(e.$$.fragment,a),t=!1},d(a){W(e,a)}}}function rr(n){let e,t,a,o,s=n[1]&&Ht(n);return{c(){e=k("meta"),t=N(),s&&s.c(),a=le(),this.h()},l(r){const i=bn("svelte-10aecs7",document.head);e=I(i,"META",{"http-equiv":!0,content:!0}),i.forEach(w),t=R(r),s&&s.l(r),a=le(),this.h()},h(){A(e,"http-equiv","Content-Security-Policy"),A(e,"content",n[2])},m(r,i){v(document.head,e),$(r,t,i),s&&s.m(r,i),$(r,a,i),o=!0},p(r,[i]){r[1]?s?(s.p(r,i),i&2&&V(s,1)):(s=Ht(r),s.c(),V(s,1),s.m(a.parentNode,a)):s&&(ue(),B(s,1,1,()=>{s=null}),fe())},i(r){o||(V(s),o=!0)},o(r){B(s),o=!1},d(r){r&&(w(t),w(a)),w(e),s&&s.d(r)}}}function sr(n,e,t){const a=["default-src 'none';","form-action 'none';","connect-src 'none';","img-src * data:;","script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net blob:;","style-src-attr 'self' 'unsafe-inline';","style-src-elem 'self' 'unsafe-inline' https://cdn.jsdelivr.net;","font-src https://cdn.jsdelivr.net;"].join(" "),o={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[{text:"Copy link to run app",onClick(i){const l=`https://bagawork.com/run#${i}`;navigator.clipboard.writeText(l)}}]};let s="",r=!1;return Zt(()=>{t(0,s=location.hash.substring("#".length)),t(1,r=!0)}),[s,r,a,o]}class mr extends ne{constructor(e){super(),ae(this,e,sr,rr,ee,{})}}export{mr as component};
