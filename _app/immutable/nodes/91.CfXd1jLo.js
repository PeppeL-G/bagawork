import{z as En,A as xn,v as We,l as Pn,s as te,c as Kt,u as Jt,g as Qt,b as Zt,f as ue,B as ve,d as z,r as Ce,C as _e,n as L,a as Be,i as Qe,j as On,h as Dn,D as it,o as en}from"../chunks/scheduler.B0TnBjPs.js";import{A as me,k as D,z as pe,t as A,S as ae,i as re,e as T,a as y,d as j,h as w,o as C,j as B,D as Y,F as Ge,G as we,c as q,f as X,m as H,l as W,I as je,s as N,r as oe,g as Z,b as R,u as se,v as U,p as v,C as ke,q as le,x as $e,w as Se,E as Ee,J as Vn,K as ct,y as Nn}from"../chunks/index.CHfggXAQ.js";import{e as ne,u as Ze,d as tn,o as nn}from"../chunks/each.Dj-HqST8.js";import{a as Me,s as Rn,g as Oe,F as Bn}from"../chunks/show-app-in-element.BOLI3yh2.js";import{w as Fe}from"../chunks/index.CBcONjAz.js";import{a as at,g as an}from"../chunks/project-compressor.Cxxezr6y.js";import"../chunks/index.MB4AuZPu.js";function $n(n,e){const t=e.token={};function a(r,s,o,i){if(e.token!==t)return;e.resolved=i;let l=e.ctx;o!==void 0&&(l=l.slice(),l[o]=i);const c=r&&(e.current=r)(l);let h=!1;e.block&&(e.blocks?e.blocks.forEach((d,b)=>{b!==s&&d&&(me(),D(d,1,1,()=>{e.blocks[b]===d&&(e.blocks[b]=null)}),pe())}):e.block.d(1),c.c(),A(c,1),c.m(e.mount(),e.anchor),h=!0),e.block=c,e.blocks&&(e.blocks[s]=c),h&&Pn()}if(En(n)){const r=xn();if(n.then(s=>{We(r),a(e.then,1,e.value,s),We(null)},s=>{if(We(r),a(e.catch,2,e.error,s),We(null),!e.hasCatch)throw s}),e.current!==e.pending)return a(e.pending,0),!0}else{if(e.current!==e.then)return a(e.then,1,e.value,n),!0;e.resolved=n}}function Fn(n,e,t){const a=e.slice(),{resolved:r}=n;n.current===n.then&&(a[n.value]=r),n.current===n.catch&&(a[n.error]=r),n.block.p(a,t)}function Un(n){let e,t,a,r;const s=n[3].default,o=Kt(s,n,n[2],null);return{c(){e=T("div"),o&&o.c(),this.h()},l(i){e=y(i,"DIV",{class:!0});var l=j(e);o&&o.l(l),l.forEach(w),this.h()},h(){C(e,"class","modal svelte-pjkfh")},m(i,l){B(i,e,l),o&&o.m(e,null),t=!0,a||(r=Y(e,"click",Ge(n[0])),a=!0)},p(i,[l]){o&&o.p&&(!t||l&4)&&Jt(o,s,i,i[2],t?Zt(s,i[2],l,null):Qt(i[2]),null)},i(i){t||(A(o,i),t=!0)},o(i){D(o,i),t=!1},d(i){i&&w(e),o&&o.d(i),a=!1,r()}}}function Ln(n,e,t){let{$$slots:a={},$$scope:r}=e,{showModal:s}=e;function o(i){i.target==i.currentTarget&&t(1,s=!1)}return n.$$set=i=>{"showModal"in i&&t(1,s=i.showModal),"$$scope"in i&&t(2,r=i.$$scope)},[o,s,r,a]}class Ue extends ae{constructor(e){super(),re(this,e,Ln,Un,te,{showModal:1})}}const Te=Fe({}),ye=Fe({}),Ie=Fe([]),de=Fe([]),De=Fe([]);function Yn(n){let e,t,a="Edit settings",r,s,o,i="Folder screen",l,c,h="The size of the preview screens on the folder page, and when selecting a page template.",d,b,p,k,I,u,f,g,m,_,V="Preview folder screen size",$,P,x,O="Code screen",M,F,E="The size of the preview screen on the pages where you edit code.",J,S,G,ee,ce,ie,Ve,ge,Le,he,Ne="Preview code screen size",xe,He;return{c(){e=T("div"),t=T("h1"),t.textContent=a,r=N(),s=T("div"),o=T("h2"),o.textContent=i,l=N(),c=T("p"),c.textContent=h,d=N(),b=T("div"),p=oe(`Width in mm:
				`),k=T("input"),I=N(),u=T("div"),f=oe(`Height in mm:
				`),g=T("input"),m=N(),_=T("div"),_.textContent=V,$=N(),P=T("div"),x=T("h2"),x.textContent=O,M=N(),F=T("p"),F.textContent=E,J=N(),S=T("div"),G=oe(`Width in mm:
				`),ee=T("input"),ce=N(),ie=T("div"),Ve=oe(`Height in mm:
				`),ge=T("input"),Le=N(),he=T("div"),he.textContent=Ne,this.h()},l(K){e=y(K,"DIV",{class:!0});var Q=j(e);t=y(Q,"H1",{"data-svelte-h":!0}),Z(t)!=="svelte-12605jx"&&(t.textContent=a),r=R(Q),s=y(Q,"DIV",{class:!0});var be=j(s);o=y(be,"H2",{"data-svelte-h":!0}),Z(o)!=="svelte-1eysbo6"&&(o.textContent=i),l=R(be),c=y(be,"P",{"data-svelte-h":!0}),Z(c)!=="svelte-1pajsxr"&&(c.textContent=h),d=R(be),b=y(be,"DIV",{});var Re=j(b);p=se(Re,`Width in mm:
				`),k=y(Re,"INPUT",{type:!0,min:!0}),Re.forEach(w),I=R(be),u=y(be,"DIV",{});var Pe=j(u);f=se(Pe,`Height in mm:
				`),g=y(Pe,"INPUT",{type:!0,min:!0}),Pe.forEach(w),m=R(be),_=y(be,"DIV",{class:!0,"data-svelte-h":!0}),Z(_)!=="svelte-1ewgrlo"&&(_.textContent=V),be.forEach(w),$=R(Q),P=y(Q,"DIV",{class:!0});var fe=j(P);x=y(fe,"H2",{"data-svelte-h":!0}),Z(x)!=="svelte-1k237qn"&&(x.textContent=O),M=R(fe),F=y(fe,"P",{"data-svelte-h":!0}),Z(F)!=="svelte-1mtgj5z"&&(F.textContent=E),J=R(fe),S=y(fe,"DIV",{});var tt=j(S);G=se(tt,`Width in mm:
				`),ee=y(tt,"INPUT",{type:!0,min:!0}),tt.forEach(w),ce=R(fe),ie=y(fe,"DIV",{});var nt=j(ie);Ve=se(nt,`Height in mm:
				`),ge=y(nt,"INPUT",{type:!0,min:!0}),nt.forEach(w),Le=R(fe),he=y(fe,"DIV",{class:!0,"data-svelte-h":!0}),Z(he)!=="svelte-icwf2t"&&(he.textContent=Ne),fe.forEach(w),Q.forEach(w),this.h()},h(){C(k,"type","number"),C(k,"min","1"),C(g,"type","number"),C(g,"min","1"),C(_,"class","screen svelte-1wsz6vm"),U(_,"width",`${n[1].folderScreen.widthInMm}mm`),U(_,"height",`${n[1].folderScreen.heightInMm}mm`),C(s,"class","group svelte-1wsz6vm"),C(ee,"type","number"),C(ee,"min","1"),C(ge,"type","number"),C(ge,"min","1"),C(he,"class","screen svelte-1wsz6vm"),U(he,"width",`${n[1].codeScreen.widthInMm}mm`),U(he,"height",`${n[1].codeScreen.heightInMm}mm`),C(P,"class","group svelte-1wsz6vm"),C(e,"class","edit-settings-modal svelte-1wsz6vm")},m(K,Q){B(K,e,Q),v(e,t),v(e,r),v(e,s),v(s,o),v(s,l),v(s,c),v(s,d),v(s,b),v(b,p),v(b,k),ke(k,n[1].folderScreen.widthInMm),v(s,I),v(s,u),v(u,f),v(u,g),ke(g,n[1].folderScreen.heightInMm),v(s,m),v(s,_),v(e,$),v(e,P),v(P,x),v(P,M),v(P,F),v(P,J),v(P,S),v(S,G),v(S,ee),ke(ee,n[1].codeScreen.widthInMm),v(P,ce),v(P,ie),v(ie,Ve),v(ie,ge),ke(ge,n[1].codeScreen.heightInMm),v(P,Le),v(P,he),xe||(He=[Y(k,"input",n[2]),Y(g,"input",n[3]),Y(ee,"input",n[4]),Y(ge,"input",n[5])],xe=!0)},p(K,Q){Q&2&&je(k.value)!==K[1].folderScreen.widthInMm&&ke(k,K[1].folderScreen.widthInMm),Q&2&&je(g.value)!==K[1].folderScreen.heightInMm&&ke(g,K[1].folderScreen.heightInMm),Q&2&&U(_,"width",`${K[1].folderScreen.widthInMm}mm`),Q&2&&U(_,"height",`${K[1].folderScreen.heightInMm}mm`),Q&2&&je(ee.value)!==K[1].codeScreen.widthInMm&&ke(ee,K[1].codeScreen.widthInMm),Q&2&&je(ge.value)!==K[1].codeScreen.heightInMm&&ke(ge,K[1].codeScreen.heightInMm),Q&2&&U(he,"width",`${K[1].codeScreen.widthInMm}mm`),Q&2&&U(he,"height",`${K[1].codeScreen.heightInMm}mm`)},d(K){K&&w(e),xe=!1,Ce(He)}}}function zn(n){let e,t,a;function r(o){n[6](o)}let s={$$slots:{default:[Yn]},$$scope:{ctx:n}};return n[0]!==void 0&&(s.showModal=n[0]),e=new Ue({props:s}),ue.push(()=>we(e,"showModal",r)),{c(){q(e.$$.fragment)},l(o){X(e.$$.fragment,o)},m(o,i){H(e,o,i),a=!0},p(o,[i]){const l={};i&130&&(l.$$scope={dirty:i,ctx:o}),!t&&i&1&&(t=!0,l.showModal=o[0],ve(()=>t=!1)),e.$set(l)},i(o){a||(A(e.$$.fragment,o),a=!0)},o(o){D(e.$$.fragment,o),a=!1},d(o){W(e,o)}}}function Gn(n,e,t){let a;z(n,Te,h=>t(1,a=h));let{showModal:r=!0}=e;function s(){a.folderScreen.widthInMm=je(this.value),Te.set(a)}function o(){a.folderScreen.heightInMm=je(this.value),Te.set(a)}function i(){a.codeScreen.widthInMm=je(this.value),Te.set(a)}function l(){a.codeScreen.heightInMm=je(this.value),Te.set(a)}function c(h){r=h,t(0,r)}return n.$$set=h=>{"showModal"in h&&t(0,r=h.showModal)},[r,a,s,o,i,l,c]}class qn extends ae{constructor(e){super(),re(this,e,Gn,zn,te,{showModal:0})}}function ht(n,e,t){const a=n.slice();return a[16]=e[t],a}function ut(n){let e,t,a="Copy project to clipboard as recreational link",r,s;return{c(){e=T("div"),t=T("button"),t.textContent=a},l(o){e=y(o,"DIV",{});var i=j(e);t=y(i,"BUTTON",{"data-svelte-h":!0}),Z(t)!=="svelte-133s4n0"&&(t.textContent=a),i.forEach(w)},m(o,i){B(o,e,i),v(e,t),r||(s=Y(t,"click",n[3]),r=!0)},p:L,d(o){o&&w(e),r=!1,s()}}}function dt(n){let e,t,a="Save project to BAGA file",r,s,o,i,l,c='<label for="file">Load project from Baga file</label>',h,d;return{c(){e=T("div"),t=T("button"),t.textContent=a,r=N(),s=T("div"),o=T("input"),i=N(),l=T("button"),l.innerHTML=c,this.h()},l(b){e=y(b,"DIV",{});var p=j(e);t=y(p,"BUTTON",{"data-svelte-h":!0}),Z(t)!=="svelte-1g98l3d"&&(t.textContent=a),p.forEach(w),r=R(b),s=y(b,"DIV",{});var k=j(s);o=y(k,"INPUT",{type:!0,id:!0,style:!0,accept:!0}),i=R(k),l=y(k,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(l)!=="svelte-1ucarmc"&&(l.innerHTML=c),k.forEach(w),this.h()},h(){C(o,"type","file"),C(o,"id","file"),U(o,"display","none"),C(o,"accept",".baga"),C(l,"class","open-button")},m(b,p){B(b,e,p),v(e,t),B(b,r,p),B(b,s,p),v(s,o),v(s,i),v(s,l),h||(d=[Y(t,"click",n[4]),Y(o,"change",n[5])],h=!0)},p:L,d(b){b&&(w(e),w(r),w(s)),h=!1,Ce(d)}}}function ft(n){let e,t,a=n[16].text+"",r,s,o,i;function l(){return n[8](n[16])}return{c(){e=T("div"),t=T("button"),r=oe(a),s=N()},l(c){e=y(c,"DIV",{});var h=j(e);t=y(h,"BUTTON",{});var d=j(t);r=se(d,a),d.forEach(w),s=R(h),h.forEach(w)},m(c,h){B(c,e,h),v(e,t),v(t,r),v(e,s),o||(i=Y(t,"click",l),o=!0)},p(c,h){n=c,h&2&&a!==(a=n[16].text+"")&&Se(r,a)},d(c){c&&w(e),o=!1,i()}}}function Xn(n){let e,t,a="Main menu",r,s,o,i,l="Edit settings",c,h,d,b,p=n[1].showCopyLinkButton&&ut(n),k=n[1].showFileButtons&&dt(n),I=ne(n[1].extraOptions),u=[];for(let f=0;f<I.length;f+=1)u[f]=ft(ht(n,I,f));return{c(){e=T("div"),t=T("h1"),t.textContent=a,r=N(),p&&p.c(),s=N(),o=T("div"),i=T("button"),i.textContent=l,c=N(),k&&k.c(),h=N();for(let f=0;f<u.length;f+=1)u[f].c();this.h()},l(f){e=y(f,"DIV",{class:!0});var g=j(e);t=y(g,"H1",{class:!0,"data-svelte-h":!0}),Z(t)!=="svelte-1x9r302"&&(t.textContent=a),r=R(g),p&&p.l(g),s=R(g),o=y(g,"DIV",{});var m=j(o);i=y(m,"BUTTON",{"data-svelte-h":!0}),Z(i)!=="svelte-1m9tkp0"&&(i.textContent=l),m.forEach(w),c=R(g),k&&k.l(g),h=R(g);for(let _=0;_<u.length;_+=1)u[_].l(g);g.forEach(w),this.h()},h(){C(t,"class","svelte-tgu2et"),C(e,"class","main-menu-modal svelte-tgu2et")},m(f,g){B(f,e,g),v(e,t),v(e,r),p&&p.m(e,null),v(e,s),v(e,o),v(o,i),v(e,c),k&&k.m(e,null),v(e,h);for(let m=0;m<u.length;m+=1)u[m]&&u[m].m(e,null);d||(b=Y(i,"click",n[7]),d=!0)},p(f,g){if(f[1].showCopyLinkButton?p?p.p(f,g):(p=ut(f),p.c(),p.m(e,s)):p&&(p.d(1),p=null),f[1].showFileButtons?k?k.p(f,g):(k=dt(f),k.c(),k.m(e,h)):k&&(k.d(1),k=null),g&66){I=ne(f[1].extraOptions);let m;for(m=0;m<I.length;m+=1){const _=ht(f,I,m);u[m]?u[m].p(_,g):(u[m]=ft(_),u[m].c(),u[m].m(e,null))}for(;m<u.length;m+=1)u[m].d(1);u.length=I.length}},d(f){f&&w(e),p&&p.d(),k&&k.d(),$e(u,f),d=!1,b()}}}function mt(n){let e,t,a;function r(o){n[10](o)}let s={};return n[2]!==void 0&&(s.showModal=n[2]),e=new qn({props:s}),ue.push(()=>we(e,"showModal",r)),{c(){q(e.$$.fragment)},l(o){X(e.$$.fragment,o)},m(o,i){H(e,o,i),a=!0},p(o,i){const l={};!t&&i&4&&(t=!0,l.showModal=o[2],ve(()=>t=!1)),e.$set(l)},i(o){a||(A(e.$$.fragment,o),a=!0)},o(o){D(e.$$.fragment,o),a=!1},d(o){W(e,o)}}}function Hn(n){let e,t,a,r,s;function o(c){n[9](c)}let i={$$slots:{default:[Xn]},$$scope:{ctx:n}};n[0]!==void 0&&(i.showModal=n[0]),e=new Ue({props:i}),ue.push(()=>we(e,"showModal",o));let l=n[2]&&mt(n);return{c(){q(e.$$.fragment),a=N(),l&&l.c(),r=le()},l(c){X(e.$$.fragment,c),a=R(c),l&&l.l(c),r=le()},m(c,h){H(e,c,h),B(c,a,h),l&&l.m(c,h),B(c,r,h),s=!0},p(c,[h]){const d={};h&524294&&(d.$$scope={dirty:h,ctx:c}),!t&&h&1&&(t=!0,d.showModal=c[0],ve(()=>t=!1)),e.$set(d),c[2]?l?(l.p(c,h),h&4&&A(l,1)):(l=mt(c),l.c(),A(l,1),l.m(r.parentNode,r)):l&&(me(),D(l,1,1,()=>{l=null}),pe())},i(c){s||(A(e.$$.fragment,c),A(l),s=!0)},o(c){D(e.$$.fragment,c),D(l),s=!1},d(c){c&&(w(a),w(r)),W(e,c),l&&l.d(c)}}}function Wn(n,e,t){let a,r,s,o;z(n,De,m=>t(11,a=m)),z(n,de,m=>t(12,r=m)),z(n,Ie,m=>t(13,s=m)),z(n,ye,m=>t(14,o=m));let{showModal:i=!0}=e,{options:l={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[]}}=e,c=!1;function h(){return{app:o,folders:s,pages:r,pageTemplates:a}}async function d(){const _=`https://bagawork.com/editor#${at(h())}`;navigator.clipboard.writeText(_)}function b(){const m=at(h()),_=document.createElement("a");_.href="data:application/octet-stream,"+encodeURIComponent(m),_.download=`${Me(o.code)}.baga`,_.click()}function p(m){const _=m.target.files;if(_.length==0)return;const V=_[0],$=new FileReader;$.readAsText(V),$.addEventListener("load",P=>{try{const x=an(P.target.result);x.app&&x.folders&&x.pages&&x.pageTemplates?(_e(ye,o=x.app,o),_e(Ie,s=x.folders,s),_e(de,r=x.pages,r),_e(De,a=x.pageTemplates,a),t(0,i=!1)):alert("Error: The BAGA file could be parsed, but didn't contain all expected data.")}catch{alert("Error: The file is not a valid BAGA file.")}})}function k(m){const _=at(h());m.onClick(_)}const I=()=>t(2,c=!0),u=m=>k(m);function f(m){i=m,t(0,i)}function g(m){c=m,t(2,c)}return n.$$set=m=>{"showModal"in m&&t(0,i=m.showModal),"options"in m&&t(1,l=m.options)},[i,l,c,d,b,p,k,I,u,f,g]}class Kn extends ae{constructor(e){super(),re(this,e,Wn,Hn,te,{showModal:0,options:1})}}function Jn(n){let e,t,a="Edit Folder",r,s,o,i,l,c,h,d,b,p,k;return{c(){e=T("div"),t=T("h1"),t.textContent=a,r=N(),s=T("div"),o=oe("Name: "),i=T("input"),l=N(),c=T("div"),h=T("button"),d=oe("Delete"),this.h()},l(I){e=y(I,"DIV",{class:!0});var u=j(e);t=y(u,"H1",{class:!0,"data-svelte-h":!0}),Z(t)!=="svelte-1spe3mm"&&(t.textContent=a),r=R(u),s=y(u,"DIV",{});var f=j(s);o=se(f,"Name: "),i=y(f,"INPUT",{type:!0}),f.forEach(w),l=R(u),c=y(u,"DIV",{});var g=j(c);h=y(g,"BUTTON",{});var m=j(h);d=se(m,"Delete"),m.forEach(w),g.forEach(w),u.forEach(w),this.h()},h(){C(t,"class","svelte-1xyhvgw"),C(i,"type","text"),h.disabled=b=n[1].length==1,C(e,"class","edit-folder-modal svelte-1xyhvgw")},m(I,u){B(I,e,u),v(e,t),v(e,r),v(e,s),v(s,o),v(s,i),ke(i,n[2].name),v(e,l),v(e,c),v(c,h),v(h,d),p||(k=[Y(i,"input",n[5]),Y(h,"click",n[3])],p=!0)},p(I,u){u&4&&i.value!==I[2].name&&ke(i,I[2].name),u&2&&b!==(b=I[1].length==1)&&(h.disabled=b)},d(I){I&&w(e),p=!1,Ce(k)}}}function Qn(n){let e,t,a;function r(o){n[6](o)}let s={$$slots:{default:[Jn]},$$scope:{ctx:n}};return n[0]!==void 0&&(s.showModal=n[0]),e=new Ue({props:s}),ue.push(()=>we(e,"showModal",r)),{c(){q(e.$$.fragment)},l(o){X(e.$$.fragment,o)},m(o,i){H(e,o,i),a=!0},p(o,[i]){const l={};i&262&&(l.$$scope={dirty:i,ctx:o}),!t&&i&1&&(t=!0,l.showModal=o[0],ve(()=>t=!1)),e.$set(l)},i(o){a||(A(e.$$.fragment,o),a=!0)},o(o){D(e.$$.fragment,o),a=!1},d(o){W(e,o)}}}function Zn(n,e,t){let a,r,s;z(n,Ie,d=>t(1,r=d)),z(n,de,d=>t(7,s=d));let{folderId:o}=e,{showModal:i}=e;function l(){const d=r.findIndex(p=>p.id==a.id);s.find(p=>p.folderId==o)&&!confirm("The folder you are deleting contains pages, and those pages will be deleted too if you delete the folder. Do you really want to delete the folder?")||(r.splice(d,1),_e(de,s=s.filter(p=>p.folderId!=o),s),Ie.set(r),t(0,i=!1))}function c(){a.name=this.value,t(2,a),t(1,r),t(4,o)}function h(d){i=d,t(0,i)}return n.$$set=d=>{"folderId"in d&&t(4,o=d.folderId),"showModal"in d&&t(0,i=d.showModal)},n.$$.update=()=>{n.$$.dirty&18&&t(2,a=r.find(d=>d.id==o))},[i,r,a,l,o,c,h]}class ea extends ae{constructor(e){super(),re(this,e,Zn,Qn,te,{folderId:4,showModal:0})}}function ta(n){let e,t,a,r;return{c(){e=T("div"),this.h()},l(s){e=y(s,"DIV",{class:!0}),j(e).forEach(w),this.h()},h(){C(e,"class","screen svelte-sl89ha")},m(s,o){B(s,e,o),a||(r=Be(t=n[2].call(null,e,{createAppCode:n[0],runtimeSettings:n[1]})),a=!0)},p(s,[o]){t&&Qe(t.update)&&o&3&&t.update.call(null,{createAppCode:s[0],runtimeSettings:s[1]})},i:L,o:L,d(s){s&&w(e),a=!1,r()}}}function na(n,e,t){let{createAppCode:a=""}=e,{runtimeSettings:r={}}=e;function s(o,i){function l({createAppCode:c,runtimeSettings:h}){Rn(c,o,h)}return l(i),{update:l}}return n.$$set=o=>{"createAppCode"in o&&t(0,a=o.createAppCode),"runtimeSettings"in o&&t(1,r=o.runtimeSettings)},[a,r,s]}class lt extends ae{constructor(e){super(),re(this,e,na,ta,te,{createAppCode:0,runtimeSettings:1})}}function aa(n,{delay:e=0,duration:t=400,easing:a=On}={}){const r=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:a,css:s=>`opacity: ${s*r}`}}function pt(n,e,t){const a=n.slice();return a[4]=e[t],a[6]=t,a}function gt(n,e){let t,a=e[4].value+"",r,s,o;return{key:n,first:null,c(){t=T("div"),r=oe(a),this.h()},l(i){t=y(i,"DIV",{class:!0});var l=j(t);r=se(l,a),l.forEach(w),this.h()},h(){var i;C(t,"class",s="item "+e[4].type+" svelte-163j81l"),Ee(t,"hide",`${e[4].value} ✅`==((i=e[1][e[6]+1])==null?void 0:i.value)),this.first=t},m(i,l){B(i,t,l),v(t,r)},p(i,l){var c;e=i,l&2&&a!==(a=e[4].value+"")&&Se(r,a),l&2&&s!==(s="item "+e[4].type+" svelte-163j81l")&&C(t,"class",s),l&2&&Ee(t,"hide",`${e[4].value} ✅`==((c=e[1][e[6]+1])==null?void 0:c.value))},i(i){i&&(o||Dn(()=>{o=Vn(t,aa,{delay:100}),o.start()}))},o:L,d(i){i&&w(t)}}}function ra(n){let e,t,a,r,s,o,i=[],l=new Map,c,h,d,b,p,k=ne(n[1]);const I=u=>u[4].value+u[4].type+u[6];for(let u=0;u<k.length;u+=1){let f=pt(n,k,u),g=I(f);l.set(g,i[u]=gt(g,f))}return{c(){e=T("div"),t=T("div"),a=oe(`Show framework log:
		`),r=T("input"),s=N(),o=T("div");for(let u=0;u<i.length;u+=1)i[u].c();c=N(),h=T("div"),this.h()},l(u){e=y(u,"DIV",{class:!0});var f=j(e);t=y(f,"DIV",{class:!0});var g=j(t);a=se(g,`Show framework log:
		`),r=y(g,"INPUT",{type:!0}),g.forEach(w),s=R(f),o=y(f,"DIV",{class:!0});var m=j(o);for(let _=0;_<i.length;_+=1)i[_].l(m);c=R(m),h=y(m,"DIV",{}),j(h).forEach(w),m.forEach(w),f.forEach(w),this.h()},h(){C(r,"type","checkbox"),C(t,"class","settings svelte-163j81l"),C(o,"class","items svelte-163j81l"),C(e,"class","tab-log")},m(u,f){B(u,e,f),v(e,t),v(t,a),v(t,r),r.checked=n[0],v(e,s),v(e,o);for(let g=0;g<i.length;g+=1)i[g]&&i[g].m(o,null);v(o,c),v(o,h),b||(p=[Y(r,"change",n[3]),Be(d=oa.call(null,h,n[1].length!=0))],b=!0)},p(u,[f]){f&1&&(r.checked=u[0]),f&2&&(k=ne(u[1]),i=Ze(i,f,I,1,u,k,l,o,tn,gt,c,pt)),d&&Qe(d.update)&&f&2&&d.update.call(null,u[1].length!=0)},i(u){for(let f=0;f<k.length;f+=1)A(i[f])},o:L,d(u){u&&w(e);for(let f=0;f<i.length;f+=1)i[f].d();b=!1,Ce(p)}}}const bt=Fe(!1);function oa(n,e){function t(a){a&&n.parentNode.parentNode.parentNode.scrollTop!=0&&n.scrollIntoView({behavior:"smooth",block:"end"})}return t(e),{update:t}}function sa(n,e,t){let a,r;z(n,bt,i=>t(0,r=i));let{loggedItems:s=[{type:"framework",value:"Whatever..."}]}=e;function o(){r=this.checked,bt.set(r)}return n.$$set=i=>{"loggedItems"in i&&t(2,s=i.loggedItems)},n.$$.update=()=>{n.$$.dirty&5&&t(1,a=r?s:s.filter(i=>i.type!="framework"))},[r,a,s,o]}class ia extends ae{constructor(e){super(),re(this,e,sa,ra,te,{loggedItems:2})}}function vt(n,e,t){const a=n.slice();return a[1]=e[t],a}function wt(n){let e,t,a=n[1].text+"",r,s,o,i;return{c(){e=T("li"),t=T("button"),r=oe(a),s=N(),this.h()},l(l){e=y(l,"LI",{class:!0});var c=j(e);t=y(c,"BUTTON",{});var h=j(t);r=se(h,a),h.forEach(w),s=R(c),c.forEach(w),this.h()},h(){C(e,"class","svelte-17hvot3")},m(l,c){B(l,e,c),v(e,t),v(t,r),v(e,s),o||(i=Y(t,"click",function(){Qe(n[1].onClick)&&n[1].onClick.apply(this,arguments)}),o=!0)},p(l,c){n=l,c&1&&a!==(a=n[1].text+"")&&Se(r,a)},d(l){l&&w(e),o=!1,i()}}}function la(n){let e,t,a=ne(n[0]),r=[];for(let s=0;s<a.length;s+=1)r[s]=wt(vt(n,a,s));return{c(){e=T("div"),t=T("ul");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){e=y(s,"DIV",{class:!0});var o=j(e);t=y(o,"UL",{class:!0});var i=j(t);for(let l=0;l<r.length;l+=1)r[l].l(i);i.forEach(w),o.forEach(w),this.h()},h(){C(t,"class","svelte-17hvot3"),C(e,"class","tab-menu svelte-17hvot3")},m(s,o){B(s,e,o),v(e,t);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(t,null)},p(s,[o]){if(o&1){a=ne(s[0]);let i;for(i=0;i<a.length;i+=1){const l=vt(s,a,i);r[i]?r[i].p(l,o):(r[i]=wt(l),r[i].c(),r[i].m(t,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=a.length}},i:L,o:L,d(s){s&&w(e),$e(r,s)}}}function ca(n,e,t){let{items:a=[{text:"Button text",onClick(){}}]}=e;return n.$$set=r=>{"items"in r&&t(0,a=r.items)},[a]}class ha extends ae{constructor(e){super(),re(this,e,ca,la,te,{items:0})}}function _t(n,e,t){const a=n.slice();return a[13]=e[t],a[15]=t,a}function Tt(n){let e,t=n[13].className+"",a,r,s,o,i;function l(){return n[8](n[15])}return{c(){e=T("button"),a=oe(t),r=N(),this.h()},l(c){e=y(c,"BUTTON",{});var h=j(e);a=se(h,t),r=R(h),h.forEach(w),this.h()},h(){e.disabled=s=n[2]==null,Ee(e,"is-selected",n[0]==n[15]&&n[2]!=null)},m(c,h){B(c,e,h),v(e,a),v(e,r),o||(i=Y(e,"click",l),o=!0)},p(c,h){n=c,h&2&&t!==(t=n[13].className+"")&&Se(a,t),h&4&&s!==(s=n[2]==null)&&(e.disabled=s),h&5&&Ee(e,"is-selected",n[0]==n[15]&&n[2]!=null)},d(c){c&&w(e),o=!1,i()}}}function ua(n){let e,t,a,r,s,o,i,l=ne(n[1]),c=[];for(let h=0;h<l.length;h+=1)c[h]=Tt(_t(n,l,h));return{c(){e=T("div"),t=T("div");for(let h=0;h<c.length;h+=1)c[h].c();a=N(),r=T("div"),s=T("div"),this.h()},l(h){e=y(h,"DIV",{class:!0});var d=j(e);t=y(d,"DIV",{class:!0});var b=j(t);for(let k=0;k<c.length;k+=1)c[k].l(b);b.forEach(w),a=R(d),r=y(d,"DIV",{class:!0});var p=j(r);s=y(p,"DIV",{class:!0}),j(s).forEach(w),p.forEach(w),d.forEach(w),this.h()},h(){C(t,"class","tab-names-child svelte-bg1kl"),C(s,"class","monaco"),C(r,"class","code-editor-child2 svelte-bg1kl"),C(e,"class","code-editor-with-tabs svelte-bg1kl")},m(h,d){B(h,e,d),v(e,t);for(let b=0;b<c.length;b+=1)c[b]&&c[b].m(t,null);v(e,a),v(e,r),v(r,s),o||(i=Be(n[4].call(null,s)),o=!0)},p(h,[d]){if(d&15){l=ne(h[1]);let b;for(b=0;b<l.length;b+=1){const p=_t(h,l,b);c[b]?c[b].p(p,d):(c[b]=Tt(p),c[b].c(),c[b].m(t,null))}for(;b<c.length;b+=1)c[b].d(1);c.length=l.length}},i:L,o:L,d(h){h&&w(e),$e(c,h),o=!1,i()}}}function da(n,e,t){let a,r;z(n,ye,u=>t(10,a=u)),z(n,de,u=>t(11,r=u));let{pageId:s}=e,{monaco:o}=e;const i=r.find(u=>u.id==s);let l=0;const c=[{variable:"p",code:i.code},{variable:"a",code:a.code}].map(u=>({variable:u.variable,className:Me(u.code),monacoClassModel:o.editor.createModel(u.code,"javascript"),monacoVariableModel:o.editor.createModel("","javascript")}));function h(u){b.setModel(c[u].monacoClassModel),t(0,l=u)}function d(u){const f=c[u],g=Me(f.monacoClassModel.getValue());t(1,c[u].className=g,c),c[u].monacoVariableModel.setValue(`const ${f.variable} = new ${g}();`)}for(let u=0;u<c.length;u++){const f=c[u];d(u),f.monacoClassModel.onDidChangeContent(g=>{d(u)})}let b;async function p(u){t(2,b=o.editor.create(u,{model:c[0].monacoClassModel,minimap:{enabled:!1},fontSize:16,tabSize:2,automaticLayout:!0,scrollBeyondLastLine:!1,renderWhitespace:"all",trimAutoWhitespace:!1,language:"javascript",suggest:{showKeywords:!1}}))}function k(){const[u,f]=c;i.code=u.monacoClassModel.getValue(),de.set(r),_e(ye,a.code=f.monacoClassModel.getValue(),a)}it(()=>{k(),b.dispose();for(const u of c)u.monacoClassModel.dispose(),u.monacoVariableModel.dispose()});const I=u=>h(u);return n.$$set=u=>{"pageId"in u&&t(5,s=u.pageId),"monaco"in u&&t(6,o=u.monaco)},[l,c,b,h,p,s,o,k,I]}class fa extends ae{constructor(e){super(),re(this,e,da,ua,te,{pageId:5,monaco:6,save:7})}get save(){return this.$$.ctx[7]}}const rn=`/**
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
	
}`,on=`/**
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
	
}`,sn=`/**
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
	
))()`,ln=`/**
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
	
))()`,cn=`/**
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
	
}`,hn=`/**
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
	
))()`,un=`const Button = (() => new (
	
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
	
))()`,dn=`const Columns = (() => new (
	
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
	
)) ()`,fn=`const EnterNumber = (() => new (
	
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
	
))()`,mn=`const EnterText = (() => new (
	
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
	
))()`,pn=`const Image = (() => new (
	
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
	
))()`,gn=`const Layers = (() => new (
	
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
	
))()`,bn=`const Rows = (() => new (
	
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
	
)) ()`,vn=`const Space = (() => new (
	
	/**
	 * This GUI component is a layout that primarily is used to occupy space,
	 * so other children in a Rows/Columns layout are positioned correct.
	 * 
	 * This component has \`size\` set to \`1\` by default, while other components
	 * have \`size\` set to \`0\` by default.
	 */
	class Space extends Component {
		
	}
	
)) ()`,wn=`const Text = (() => new (
	
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
	
))()`,_n=`/**
 * This function logs the value you pass to it, so you can insect
 * it in the editor.
 * @param value The value to be logged
 */
function log(value: any) { };`,Tn=`const m = {
	
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
	
}`,yn=`interface Voice {
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
	
}`,kn=`// https://github.com/microsoft/TypeScript/blob/70b7de11fbadb16d30f6770332f544c44134eb82/src/lib/es5.d.ts#L1295
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
}`,In=`// https://github.com/microsoft/TypeScript/blob/70b7de11fbadb16d30f6770332f544c44134eb82/src/lib/es5.d.ts#L633C2-L742C24
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
declare var Math: Math;`,Mn=`// https://github.com/microsoft/TypeScript/blob/main/src/lib/es5.d.ts
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
}`;function ma(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function yt(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,a)}return t}function kt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?yt(Object(t),!0).forEach(function(a){ma(n,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):yt(Object(t)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))})}return n}function pa(n,e){if(n==null)return{};var t={},a=Object.keys(n),r,s;for(s=0;s<a.length;s++)r=a[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function ga(n,e){if(n==null)return{};var t=pa(n,e),a,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)a=s[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(n,a)&&(t[a]=n[a])}return t}function ba(n,e){return va(n)||wa(n,e)||_a(n,e)||Ta()}function va(n){if(Array.isArray(n))return n}function wa(n,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(n)))){var t=[],a=!0,r=!1,s=void 0;try{for(var o=n[Symbol.iterator](),i;!(a=(i=o.next()).done)&&(t.push(i.value),!(e&&t.length===e));a=!0);}catch(l){r=!0,s=l}finally{try{!a&&o.return!=null&&o.return()}finally{if(r)throw s}}return t}}function _a(n,e){if(n){if(typeof n=="string")return It(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return It(n,e)}}function It(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=n[t];return a}function Ta(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ya(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Mt(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,a)}return t}function Ct(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Mt(Object(t),!0).forEach(function(a){ya(n,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Mt(Object(t)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))})}return n}function ka(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(a){return e.reduceRight(function(r,s){return s(r)},a)}}function ze(n){return function e(){for(var t=this,a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return r.length>=n.length?n.apply(this,r):function(){for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return e.apply(t,[].concat(r,i))}}}function Je(n){return{}.toString.call(n).includes("Object")}function Ia(n){return!Object.keys(n).length}function qe(n){return typeof n=="function"}function Ma(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ca(n,e){return Je(e)||Ae("changeType"),Object.keys(e).some(function(t){return!Ma(n,t)})&&Ae("changeField"),e}function Sa(n){qe(n)||Ae("selectorType")}function ja(n){qe(n)||Je(n)||Ae("handlerType"),Je(n)&&Object.values(n).some(function(e){return!qe(e)})&&Ae("handlersType")}function Aa(n){n||Ae("initialIsRequired"),Je(n)||Ae("initialType"),Ia(n)&&Ae("initialContent")}function Ea(n,e){throw new Error(n[e]||n.default)}var xa={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Ae=ze(Ea)(xa),Ke={changes:Ca,selector:Sa,handler:ja,initial:Aa};function Pa(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ke.initial(n),Ke.handler(e);var t={current:n},a=ze(Va)(t,e),r=ze(Da)(t),s=ze(Ke.changes)(n),o=ze(Oa)(t);function i(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(h){return h};return Ke.selector(c),c(t.current)}function l(c){ka(a,r,s,o)(c)}return[i,l]}function Oa(n,e){return qe(e)?e(n.current):e}function Da(n,e){return n.current=Ct(Ct({},n.current),e),e}function Va(n,e,t){return qe(e)?e(n.current):Object.keys(t).forEach(function(a){var r;return(r=e[a])===null||r===void 0?void 0:r.call(e,n.current[a])}),t}var Na={create:Pa},Ra={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}};function Ba(n){return function e(){for(var t=this,a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return r.length>=n.length?n.apply(this,r):function(){for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return e.apply(t,[].concat(r,i))}}}function $a(n){return{}.toString.call(n).includes("Object")}function Fa(n){return n||St("configIsRequired"),$a(n)||St("configType"),n.urls?(Ua(),{paths:{vs:n.urls.monacoBase}}):n}function Ua(){console.warn(Cn.deprecation)}function La(n,e){throw new Error(n[e]||n.default)}var Cn={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},St=Ba(La)(Cn),Ya={config:Fa},za=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(r){return t.reduceRight(function(s,o){return o(s)},r)}};function Sn(n,e){return Object.keys(e).forEach(function(t){e[t]instanceof Object&&n[t]&&Object.assign(e[t],Sn(n[t],e[t]))}),kt(kt({},n),e)}var Ga={type:"cancelation",msg:"operation is manually canceled"};function rt(n){var e=!1,t=new Promise(function(a,r){n.then(function(s){return e?r(Ga):a(s)}),n.catch(r)});return t.cancel=function(){return e=!0},t}var qa=Na.create({config:Ra,isInitialized:!1,resolve:null,reject:null,monaco:null}),jn=ba(qa,2),Xe=jn[0],et=jn[1];function Xa(n){var e=Ya.config(n),t=e.monaco,a=ga(e,["monaco"]);et(function(r){return{config:Sn(r.config,a),monaco:t}})}function Ha(){var n=Xe(function(e){var t=e.monaco,a=e.isInitialized,r=e.resolve;return{monaco:t,isInitialized:a,resolve:r}});if(!n.isInitialized){if(et({isInitialized:!0}),n.monaco)return n.resolve(n.monaco),rt(ot);if(window.monaco&&window.monaco.editor)return An(window.monaco),n.resolve(window.monaco),rt(ot);za(Wa,Ja)(Qa)}return rt(ot)}function Wa(n){return document.body.appendChild(n)}function Ka(n){var e=document.createElement("script");return n&&(e.src=n),e}function Ja(n){var e=Xe(function(a){var r=a.config,s=a.reject;return{config:r,reject:s}}),t=Ka("".concat(e.config.paths.vs,"/loader.js"));return t.onload=function(){return n()},t.onerror=e.reject,t}function Qa(){var n=Xe(function(t){var a=t.config,r=t.resolve,s=t.reject;return{config:a,resolve:r,reject:s}}),e=window.require;e.config(n.config),e(["vs/editor/editor.main"],function(t){An(t),n.resolve(t)},function(t){n.reject(t)})}function An(n){Xe().monaco||et({monaco:n})}function Za(){return Xe(function(n){var e=n.monaco;return e})}var ot=new Promise(function(n,e){return et({resolve:n,reject:e})}),st={config:Xa,init:Ha,__getMonacoInstance:Za};const er=n=>({}),jt=n=>({monaco:n[3]});function tr(n){return{c:L,l:L,m:L,p:L,i:L,o:L,d:L}}function nr(n){let e;const t=n[2].default,a=Kt(t,n,n[1],jt);return{c(){a&&a.c()},l(r){a&&a.l(r)},m(r,s){a&&a.m(r,s),e=!0},p(r,s){a&&a.p&&(!e||s&2)&&Jt(a,t,r,r[1],e?Zt(t,r[1],s,er):Qt(r[1]),jt)},i(r){e||(A(a,r),e=!0)},o(r){D(a,r),e=!1},d(r){a&&a.d(r)}}}function ar(n){let e,t="Loading the editor...";return{c(){e=T("p"),e.textContent=t},l(a){e=y(a,"P",{"data-svelte-h":!0}),Z(e)!=="svelte-1cba8fu"&&(e.textContent=t)},m(a,r){B(a,e,r)},p:L,i:L,o:L,d(a){a&&w(e)}}}function rr(n){let e,t,a={ctx:n,current:null,token:null,hasCatch:!1,pending:ar,then:nr,catch:tr,value:3,blocks:[,,,]};return $n(n[0](),a),{c(){e=le(),a.block.c()},l(r){e=le(),a.block.l(r)},m(r,s){B(r,e,s),a.block.m(r,a.anchor=s),a.mount=()=>e.parentNode,a.anchor=e,t=!0},p(r,[s]){n=r,Fn(a,n,s)},i(r){t||(A(a.block),t=!0)},o(r){for(let s=0;s<3;s+=1){const o=a.blocks[s];D(o)}t=!1},d(r){r&&w(e),a.block.d(r),a.token=null,a=null}}}function or(n,e,t){let{$$slots:a={},$$scope:r}=e;st.config({paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.0/min/vs"}});async function s(){const o=await st.init();o.languages.typescript.javascriptDefaults.setCompilerOptions({noLib:!0,allowNonTsExtensions:!0});const i=Object.values(Object.assign({"../editor-type-definitions/bagawork/App.d.ts":rn,"../editor-type-definitions/bagawork/Component.ts":on,"../editor-type-definitions/bagawork/Direction.ts":sn,"../editor-type-definitions/bagawork/Font.ts":ln,"../editor-type-definitions/bagawork/Page.d.ts":cn,"../editor-type-definitions/bagawork/Time.ts":hn,"../editor-type-definitions/bagawork/components/Button.ts":un,"../editor-type-definitions/bagawork/components/Columns.ts":dn,"../editor-type-definitions/bagawork/components/EnterNumber.ts":fn,"../editor-type-definitions/bagawork/components/EnterText.ts":mn,"../editor-type-definitions/bagawork/components/Image.ts":pn,"../editor-type-definitions/bagawork/components/Layers.ts":gn,"../editor-type-definitions/bagawork/components/Rows.ts":bn,"../editor-type-definitions/bagawork/components/Space.ts":vn,"../editor-type-definitions/bagawork/components/Text.ts":wn,"../editor-type-definitions/bagawork/functions/log.ts":_n,"../editor-type-definitions/bagawork/m.ts":Tn,"../editor-type-definitions/bagawork/speaker.ts":yn,"../editor-type-definitions/js/Array.d.ts":kn,"../editor-type-definitions/js/Math.d.ts":In,"../editor-type-definitions/js/String.d.ts":Mn}));return o.languages.typescript.javascriptDefaults.setExtraLibs(i.map(l=>({content:l}))),o}return n.$$set=o=>{"$$scope"in o&&t(1,r=o.$$scope)},[s,r,a]}class sr extends ae{constructor(e){super(),re(this,e,or,rr,te,{})}}function At(n,e,t){const a=n.slice();return a[4]=e[t],a}function Et(n){let e,t,a=n[4].name+"",r,s,o,i,l;function c(){return n[3](n[4])}return{c(){e=T("li"),t=T("button"),r=oe(a),o=N(),this.h()},l(h){e=y(h,"LI",{});var d=j(e);t=y(d,"BUTTON",{});var b=j(t);r=se(b,a),b.forEach(w),o=R(d),d.forEach(w),this.h()},h(){t.disabled=s=n[4]==n[1]},m(h,d){B(h,e,d),v(e,t),v(t,r),v(e,o),i||(l=Y(t,"click",c),i=!0)},p(h,d){n=h,d&1&&a!==(a=n[4].name+"")&&Se(r,a),d&3&&s!==(s=n[4]==n[1])&&(t.disabled=s)},d(h){h&&w(e),i=!1,l()}}}function ir(n){let e,t,a,r,s=n[1].explanation+"",o,i=ne(n[0]),l=[];for(let c=0;c<i.length;c+=1)l[c]=Et(At(n,i,c));return{c(){e=T("div"),t=T("ul");for(let c=0;c<l.length;c+=1)l[c].c();a=N(),r=T("div"),o=oe(s),this.h()},l(c){e=y(c,"DIV",{class:!0});var h=j(e);t=y(h,"UL",{class:!0});var d=j(t);for(let p=0;p<l.length;p+=1)l[p].l(d);d.forEach(w),a=R(h),r=y(h,"DIV",{});var b=j(r);o=se(b,s),b.forEach(w),h.forEach(w),this.h()},h(){C(t,"class","svelte-1ola9j1"),C(e,"class","tab-modes svelte-1ola9j1")},m(c,h){B(c,e,h),v(e,t);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(t,null);v(e,a),v(e,r),v(r,o)},p(c,[h]){if(h&7){i=ne(c[0]);let d;for(d=0;d<i.length;d+=1){const b=At(c,i,d);l[d]?l[d].p(b,h):(l[d]=Et(b),l[d].c(),l[d].m(t,null))}for(;d<l.length;d+=1)l[d].d(1);l.length=i.length}h&2&&s!==(s=c[1].explanation+"")&&Se(o,s)},i:L,o:L,d(c){c&&w(e),$e(l,c)}}}function lr(n,e,t){let{modes:a=[{name:"Mode Name",explanation:"The explanation..."}]}=e,{selectedMode:r=""}=e,{onSelectedChange:s=i=>null}=e;const o=i=>s(i);return n.$$set=i=>{"modes"in i&&t(0,a=i.modes),"selectedMode"in i&&t(1,r=i.selectedMode),"onSelectedChange"in i&&t(2,s=i.onSelectedChange)},[a,r,s,o]}class cr extends ae{constructor(e){super(),re(this,e,lr,ir,te,{modes:0,selectedMode:1,onSelectedChange:2})}}function hr(n){let e,t,a;return{c(){e=T("div"),this.h()},l(r){e=y(r,"DIV",{class:!0}),j(e).forEach(w),this.h()},h(){C(e,"class","monaco svelte-1rpg4qr")},m(r,s){B(r,e,s),t||(a=Be(n[0].call(null,e)),t=!0)},p:L,i:L,o:L,d(r){r&&w(e),t=!1,a()}}}function ur(n,e,t){let{state:a={}}=e,{monaco:r}=e;const s=r.editor.createModel(JSON.stringify(a,null,"	"),"json"),o=r.editor.createModel("","json");let i;async function l(h){i=r.editor.createDiffEditor(h,{minimap:{enabled:!1},fontSize:16,tabSize:2,automaticLayout:!0,scrollBeyondLastLine:!1,renderWhitespace:"all",trimAutoWhitespace:!1,language:"json",suggest:{showKeywords:!1}}),i.setModel({original:s,modified:o})}it(()=>{i.dispose(),s.dispose(),o.dispose()});function c(){const h=Object.assign({},a);try{Object.assign(h,JSON.parse(o.getValue()))}catch(d){console.log(123321,d)}return h}return n.$$set=h=>{"state"in h&&t(1,a=h.state),"monaco"in h&&t(2,r=h.monaco)},n.$$.update=()=>{if(n.$$.dirty&2){const h=JSON.stringify(a,null,"	");s.setValue(h),o.setValue(h)}},[l,a,r,c]}class dr extends ae{constructor(e){super(),re(this,e,ur,hr,te,{state:1,monaco:2,getModifiedState:3})}get getModifiedState(){return this.$$.ctx[3]}}function xt(n,e,t){const a=n.slice();return a[26]=e[t],a}function Pt(n){let e,t;return e=new lt({props:{createAppCode:Oe(n[12],n[2],n[10]),runtimeSettings:n[16]()}}),{c(){q(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,r){H(e,a,r),t=!0},p(a,r){const s={};r&5124&&(s.createAppCode=Oe(a[12],a[2],a[10])),e.$set(s)},i(a){t||(A(e.$$.fragment,a),t=!0)},o(a){D(e.$$.fragment,a),t=!1},d(a){W(e,a)}}}function fr(n){let e,t="Restart",a,r;return{c(){e=T("button"),e.textContent=t},l(s){e=y(s,"BUTTON",{"data-svelte-h":!0}),Z(e)!=="svelte-37ekpt"&&(e.textContent=t)},m(s,o){B(s,e,o),a||(r=Y(e,"click",n[17]),a=!0)},p:L,d(s){s&&w(e),a=!1,r()}}}function mr(n){let e,t="Restart with state",a,r;return{c(){e=T("button"),e.textContent=t},l(s){e=y(s,"BUTTON",{"data-svelte-h":!0}),Z(e)!=="svelte-yq0ny7"&&(e.textContent=t)},m(s,o){B(s,e,o),a||(r=Y(e,"click",n[18]),a=!0)},p:L,d(s){s&&w(e),a=!1,r()}}}function Ot(n){let e,t=n[26]+"",a,r,s,o,i;function l(){return n[19](n[26])}return{c(){e=T("button"),a=oe(t),r=N(),this.h()},l(c){e=y(c,"BUTTON",{});var h=j(e);a=se(h,t),r=R(h),h.forEach(w),this.h()},h(){e.disabled=s=n[5]==n[26]},m(c,h){B(c,e,h),v(e,a),v(e,r),o||(i=Y(e,"click",l),o=!0)},p(c,h){n=c,h&32&&s!==(s=n[5]==n[26])&&(e.disabled=s)},d(c){c&&w(e),o=!1,i()}}}function pr(n){let e,t;return e=new ia({props:{loggedItems:n[6]}}),{c(){q(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,r){H(e,a,r),t=!0},p(a,r){const s={};r&64&&(s.loggedItems=a[6]),e.$set(s)},i(a){t||(A(e.$$.fragment,a),t=!0)},o(a){D(e.$$.fragment,a),t=!1},d(a){W(e,a)}}}function gr(n){let e,t;return e=new cr({props:{modes:n[15],selectedMode:n[9],onSelectedChange:n[20]}}),{c(){q(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,r){H(e,a,r),t=!0},p(a,r){const s={};r&512&&(s.selectedMode=a[9]),r&512&&(s.onSelectedChange=a[20]),e.$set(s)},i(a){t||(A(e.$$.fragment,a),t=!0)},o(a){D(e.$$.fragment,a),t=!1},d(a){W(e,a)}}}function br(n){let e,t;return e=new ha({props:{items:n[14]}}),{c(){q(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,r){H(e,a,r),t=!0},p:L,i(a){t||(A(e.$$.fragment,a),t=!0)},o(a){D(e.$$.fragment,a),t=!1},d(a){W(e,a)}}}function vr(n){let e,t,a={state:n[4],monaco:n[25]};return e=new dr({props:a}),n[22](e),{c(){q(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,s){H(e,r,s),t=!0},p(r,s){const o={};s&16&&(o.state=r[4]),s&33554432&&(o.monaco=r[25]),e.$set(o)},i(r){t||(A(e.$$.fragment,r),t=!0)},o(r){D(e.$$.fragment,r),t=!1},d(r){n[22](null),W(e,r)}}}function wr(n){let e,t,a={pageId:n[1],monaco:n[25]};return e=new fa({props:a}),n[21](e),{c(){q(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,s){H(e,r,s),t=!0},p(r,s){const o={};s&2&&(o.pageId=r[1]),s&33554432&&(o.monaco=r[25]),e.$set(o)},i(r){t||(A(e.$$.fragment,r),t=!0)},o(r){D(e.$$.fragment,r),t=!1},d(r){n[21](null),W(e,r)}}}function _r(n){let e,t,a,r;const s=[wr,vr],o=[];function i(l,c){return l[9].name=="Code"?0:l[9].name=="State"?1:-1}return~(e=i(n))&&(t=o[e]=s[e](n)),{c(){t&&t.c(),a=le()},l(l){t&&t.l(l),a=le()},m(l,c){~e&&o[e].m(l,c),B(l,a,c),r=!0},p(l,c){let h=e;e=i(l),e===h?~e&&o[e].p(l,c):(t&&(me(),D(o[h],1,1,()=>{o[h]=null}),pe()),~e?(t=o[e],t?t.p(l,c):(t=o[e]=s[e](l),t.c()),A(t,1),t.m(a.parentNode,a)):t=null)},i(l){r||(A(t),r=!0)},o(l){D(t),r=!1},d(l){l&&w(a),~e&&o[e].d(l)}}}function Tr(n){let e,t,a,r=n[3],s,o,i,l,c,h,d,b,p,k,I,u,f=Pt(n);function g(M,F){return M[9].name=="State"?mr:fr}let m=g(n),_=m(n),V=ne(n[13]),$=[];for(let M=0;M<V.length;M+=1)$[M]=Ot(xt(n,V,M));const P=[br,gr,pr],x=[];function O(M,F){return M[5]=="Menu"?0:M[5]=="Mode"?1:M[5]=="Log"?2:-1}return~(d=O(n))&&(b=x[d]=P[d](n)),I=new sr({props:{$$slots:{default:[_r,({monaco:M})=>({25:M}),({monaco:M})=>M?33554432:0]},$$scope:{ctx:n}}}),{c(){e=T("div"),t=T("div"),a=T("div"),f.c(),s=N(),o=T("div"),_.c(),i=N(),l=T("div"),c=T("div");for(let M=0;M<$.length;M+=1)$[M].c();h=N(),b&&b.c(),p=N(),k=T("div"),q(I.$$.fragment),this.h()},l(M){e=y(M,"DIV",{class:!0});var F=j(e);t=y(F,"DIV",{class:!0});var E=j(t);a=y(E,"DIV",{class:!0});var J=j(a);f.l(J),J.forEach(w),s=R(E),o=y(E,"DIV",{class:!0});var S=j(o);_.l(S),S.forEach(w),E.forEach(w),i=R(F),l=y(F,"DIV",{class:!0});var G=j(l);c=y(G,"DIV",{class:!0});var ee=j(c);for(let ie=0;ie<$.length;ie+=1)$[ie].l(ee);ee.forEach(w),h=R(G),b&&b.l(G),G.forEach(w),p=R(F),k=y(F,"DIV",{class:!0});var ce=j(k);X(I.$$.fragment,ce),ce.forEach(w),F.forEach(w),this.h()},h(){C(a,"class","app-component"),U(a,"width",`${n[11].codeScreen.widthInMm}mm`),U(a,"height",`${n[11].codeScreen.heightInMm}mm`),C(o,"class","preview-buttons"),C(t,"class","preview-child"),C(c,"class","tab-names"),C(l,"class","secondary-child"),C(k,"class","code-editor-child"),C(e,"class","edit-page-modal svelte-y2t29n")},m(M,F){B(M,e,F),v(e,t),v(t,a),f.m(a,null),v(t,s),v(t,o),_.m(o,null),v(e,i),v(e,l),v(l,c);for(let E=0;E<$.length;E+=1)$[E]&&$[E].m(c,null);v(l,h),~d&&x[d].m(l,null),v(e,p),v(e,k),H(I,k,null),u=!0},p(M,F){if(F&8&&te(r,r=M[3])?(me(),D(f,1,1,L),pe(),f=Pt(M),f.c(),A(f,1),f.m(a,null)):f.p(M,F),F&2048&&U(a,"width",`${M[11].codeScreen.widthInMm}mm`),F&2048&&U(a,"height",`${M[11].codeScreen.heightInMm}mm`),m===(m=g(M))&&_?_.p(M,F):(_.d(1),_=m(M),_&&(_.c(),_.m(o,null))),F&8224){V=ne(M[13]);let S;for(S=0;S<V.length;S+=1){const G=xt(M,V,S);$[S]?$[S].p(G,F):($[S]=Ot(G),$[S].c(),$[S].m(c,null))}for(;S<$.length;S+=1)$[S].d(1);$.length=V.length}let E=d;d=O(M),d===E?~d&&x[d].p(M,F):(b&&(me(),D(x[E],1,1,()=>{x[E]=null}),pe()),~d?(b=x[d],b?b.p(M,F):(b=x[d]=P[d](M),b.c()),A(b,1),b.m(l,null)):b=null);const J={};F&570426258&&(J.$$scope={dirty:F,ctx:M}),I.$set(J)},i(M){u||(A(f),A(b),A(I.$$.fragment,M),u=!0)},o(M){D(f),D(b),D(I.$$.fragment,M),u=!1},d(M){M&&w(e),f.d(M),_.d(),$e($,M),~d&&x[d].d(),W(I)}}}function yr(n){let e,t,a;function r(o){n[23](o)}let s={$$slots:{default:[Tr]},$$scope:{ctx:n}};return n[0]!==void 0&&(s.showModal=n[0]),e=new Ue({props:s}),ue.push(()=>we(e,"showModal",r)),{c(){q(e.$$.fragment)},l(o){X(e.$$.fragment,o)},m(o,i){H(e,o,i),a=!0},p(o,[i]){const l={};i&536879102&&(l.$$scope={dirty:i,ctx:o}),!t&&i&1&&(t=!0,l.showModal=o[0],ve(()=>t=!1)),e.$set(l)},i(o){a||(A(e.$$.fragment,o),a=!0)},o(o){D(e.$$.fragment,o),a=!1},d(o){W(e,o)}}}function kr(n,e,t){let a,r,s,o;z(n,de,E=>t(2,r=E)),z(n,Te,E=>t(11,s=E)),z(n,ye,E=>t(12,o=E));let{showModal:i}=e,{pageId:l}=e,c=Math.random(),h;const d=["Menu","Mode","Log"];let b=d[0],p=[],k=null,I=null;const u=[{text:"Delete",onClick(){if(!confirm("Do you really want to delete this page?"))return;const E=r.findIndex(J=>J.id==l);r.splice(E,1),de.set(r),t(0,i=!1)}},{text:"Close",onClick(){t(0,i=!1)}}],f=[{name:"Code",explanation:"In the CODE mode you can edit the code for the selected page and the app. Your changes to the code will be saved when you close this modal or click on the RESTART button."},{name:"State",explanation:"In the STATE mode you can view the state of your app (the values of all the variables). You can also change the state and then click on the RESTART WITH STATE button to restart the app with the new state, instead of starting it from scratch."}];let g=f[0];const m={onStateChange(E){t(4,h=E)},onLog(E,J){p.push({type:E,value:J}),t(6,p)},onError(E){p.push({type:"error",value:E}),t(6,p)},state:null,version:1};function _(){return m}async function V(){t(6,p=[]),await new Promise(E=>setTimeout(E,1)),m.state=null,m.version=1,k.save(),t(3,c=Math.random())}async function $(){t(6,p=[]),await new Promise(S=>setTimeout(S,1)),m.state=I.getModifiedState();const E=h.version,J=m.state.version;E!=J&&(m.state.version=E,m.version=J),t(3,c=Math.random())}const P=E=>t(5,b=E),x=E=>t(9,g=E);function O(E){ue[E?"unshift":"push"](()=>{k=E,t(7,k)})}function M(E){ue[E?"unshift":"push"](()=>{I=E,t(8,I)})}function F(E){i=E,t(0,i)}return n.$$set=E=>{"showModal"in E&&t(0,i=E.showModal),"pageId"in E&&t(1,l=E.pageId)},n.$$.update=()=>{n.$$.dirty&6&&t(10,a=r.find(E=>E.id==l))},[i,l,r,c,h,b,p,k,I,g,a,s,o,d,u,f,_,V,$,P,x,O,M,F]}class Ir extends ae{constructor(e){super(),re(this,e,kr,yr,te,{showModal:0,pageId:1})}}function Mr(n){let e,t,a;return{c(){e=T("div"),this.h()},l(r){e=y(r,"DIV",{class:!0}),j(e).forEach(w),this.h()},h(){C(e,"class","codeEditor svelte-11lcyox")},m(r,s){B(r,e,s),t||(a=Be(n[0].call(null,e)),t=!0)},p:L,i:L,o:L,d(r){r&&w(e),t=!1,a()}}}function Cr(n,e,t){let a;z(n,ye,c=>t(5,a=c));let{code:r=""}=e,{isReadOnly:s=!1}=e,o;async function i(c){const h=await st.init();h.languages.typescript.javascriptDefaults.setCompilerOptions({noLib:!0,allowNonTsExtensions:!0}),h.languages.typescript.javascriptDefaults.setExtraLibs([{content:kn},{content:Mn},{content:In},{content:rn},{content:cn},{content:hn},{content:sn},{content:ln},{content:on},{content:un},{content:fn},{content:mn},{content:wn},{content:vn},{content:bn},{content:dn},{content:gn},{content:pn},{content:Tn},{content:yn},{content:_n}]);const d=Me(a.code),b=Me(r);d!="UnknownClassName"&&(h.languages.typescript.javascriptDefaults.addExtraLib(`const a = new ${d}();`),d!=b&&h.languages.typescript.javascriptDefaults.addExtraLib(a.code)),b!="UnknownClassName"&&b!=d&&h.languages.typescript.javascriptDefaults.addExtraLib(`const p = new ${b}();`),o=h.editor.create(c,{value:r,minimap:{enabled:!1},fontSize:16,tabSize:2,automaticLayout:!0,scrollBeyondLastLine:!1,renderWhitespace:"all",trimAutoWhitespace:!1,language:"javascript",suggest:{showKeywords:!1},readOnly:s})}function l(){return o.getValue()}return n.$$set=c=>{"code"in c&&t(1,r=c.code),"isReadOnly"in c&&t(2,s=c.isReadOnly)},[i,r,s,l]}class Sr extends ae{constructor(e){super(),re(this,e,Cr,Mr,te,{code:1,isReadOnly:2,getCode:3})}get getCode(){return this.$$.ctx[3]}}function jr(n){let e,t,a,r,s,o,i,l="Refresh",c,h,d,b,p,k,I="Delete this page template",u,f,g;r=new lt({props:{createAppCode:Oe(n[4],n[5],{code:n[1].code})}});let m={code:n[1].code};return d=new Sr({props:m}),n[10](d),{c(){e=T("div"),t=T("div"),a=T("div"),q(r.$$.fragment),s=N(),o=T("div"),i=T("button"),i.textContent=l,c=N(),h=T("div"),q(d.$$.fragment),b=N(),p=T("div"),k=T("button"),k.textContent=I,this.h()},l(_){e=y(_,"DIV",{class:!0});var V=j(e);t=y(V,"DIV",{class:!0});var $=j(t);a=y($,"DIV",{class:!0});var P=j(a);X(r.$$.fragment,P),P.forEach(w),s=R($),o=y($,"DIV",{class:!0});var x=j(o);i=y(x,"BUTTON",{"data-svelte-h":!0}),Z(i)!=="svelte-in3han"&&(i.textContent=l),x.forEach(w),$.forEach(w),c=R(V),h=y(V,"DIV",{class:!0});var O=j(h);X(d.$$.fragment,O),O.forEach(w),b=R(V),p=y(V,"DIV",{class:!0});var M=j(p);k=y(M,"BUTTON",{"data-svelte-h":!0}),Z(k)!=="svelte-19vawev"&&(k.textContent=I),M.forEach(w),V.forEach(w),this.h()},h(){C(a,"class","app-component svelte-yj5aes"),U(a,"width",`${n[3].codeScreen.widthInMm}mm`),U(a,"height",`${n[3].codeScreen.heightInMm}mm`),C(o,"class","preview-buttons svelte-yj5aes"),C(t,"class","preview-section svelte-yj5aes"),C(h,"class","code-editor svelte-yj5aes"),C(p,"class","buttons-row svelte-yj5aes"),C(e,"class","edit-page-template-modal svelte-yj5aes")},m(_,V){B(_,e,V),v(e,t),v(t,a),H(r,a,null),v(t,s),v(t,o),v(o,i),v(e,c),v(e,h),H(d,h,null),v(e,b),v(e,p),v(p,k),u=!0,f||(g=[Y(i,"click",n[6]),Y(k,"click",n[7])],f=!0)},p(_,V){const $={};V&50&&($.createAppCode=Oe(_[4],_[5],{code:_[1].code})),r.$set($),V&8&&U(a,"width",`${_[3].codeScreen.widthInMm}mm`),V&8&&U(a,"height",`${_[3].codeScreen.heightInMm}mm`);const P={};V&2&&(P.code=_[1].code),d.$set(P)},i(_){u||(A(r.$$.fragment,_),A(d.$$.fragment,_),u=!0)},o(_){D(r.$$.fragment,_),D(d.$$.fragment,_),u=!1},d(_){_&&w(e),W(r),n[10](null),W(d),f=!1,Ce(g)}}}function Ar(n){let e,t,a;function r(o){n[11](o)}let s={$$slots:{default:[jr]},$$scope:{ctx:n}};return n[0]!==void 0&&(s.showModal=n[0]),e=new Ue({props:s}),ue.push(()=>we(e,"showModal",r)),{c(){q(e.$$.fragment)},l(o){X(e.$$.fragment,o)},m(o,i){H(e,o,i),a=!0},p(o,[i]){const l={};i&4158&&(l.$$scope={dirty:i,ctx:o}),!t&&i&1&&(t=!0,l.showModal=o[0],ve(()=>t=!1)),e.$set(l)},i(o){a||(A(e.$$.fragment,o),a=!0)},o(o){D(e.$$.fragment,o),a=!1},d(o){W(e,o)}}}function Er(n,e,t){let a,r,s,o;z(n,De,I=>t(9,a=I)),z(n,Te,I=>t(3,r=I)),z(n,ye,I=>t(4,s=I)),z(n,de,I=>t(5,o=I));let{showModal:i}=e,{pageTemplateId:l}=e,c,h;function d(){const I=h.getCode();t(1,c.code=I,c),De.set(a)}function b(){if(!confirm("Really delete?"))return;const I=a.findIndex(u=>u.id==l);a.splice(I,1),t(0,i=!1)}it(d);function p(I){ue[I?"unshift":"push"](()=>{h=I,t(2,h)})}function k(I){i=I,t(0,i)}return n.$$set=I=>{"showModal"in I&&t(0,i=I.showModal),"pageTemplateId"in I&&t(8,l=I.pageTemplateId)},n.$$.update=()=>{n.$$.dirty&768&&t(1,c=a.find(I=>I.id==l))},[i,c,h,r,s,o,d,b,l,a,p,k]}class xr extends ae{constructor(e){super(),re(this,e,Er,Ar,te,{showModal:0,pageTemplateId:8})}}function Dt(n,e,t){const a=n.slice();return a[16]=e[t],a}function Vt(n,e){let t,a,r,s,o,i,l,c="Edit",h,d,b,p;r=new lt({props:{createAppCode:Oe(e[6],e[4],{code:e[16].code},!0)}});function k(){return e[12](e[16])}function I(){return e[13](e[16])}return{key:n,first:null,c(){t=T("div"),a=T("div"),q(r.$$.fragment),s=N(),o=T("div"),i=N(),l=T("button"),l.textContent=c,h=N(),this.h()},l(u){t=y(u,"DIV",{class:!0});var f=j(t);a=y(f,"DIV",{class:!0});var g=j(a);X(r.$$.fragment,g),s=R(g),o=y(g,"DIV",{class:!0}),j(o).forEach(w),g.forEach(w),i=R(f),l=y(f,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(l)!=="svelte-eodtwe"&&(l.textContent=c),h=R(f),f.forEach(w),this.h()},h(){C(o,"class","overlay svelte-1dwdo8c"),C(a,"class","page-template svelte-1dwdo8c"),U(a,"width",`${e[5].folderScreen.widthInMm}mm`),U(a,"height",`${e[5].folderScreen.heightInMm}mm`),C(l,"class","edit-page-button svelte-1dwdo8c"),C(t,"class","page-template-box svelte-1dwdo8c"),this.first=t},m(u,f){B(u,t,f),v(t,a),H(r,a,null),v(a,s),v(a,o),v(t,i),v(t,l),v(t,h),d=!0,b||(p=[Y(a,"click",Ge(k)),Y(l,"click",Ge(I))],b=!0)},p(u,f){e=u;const g={};f&88&&(g.createAppCode=Oe(e[6],e[4],{code:e[16].code},!0)),r.$set(g),f&32&&U(a,"width",`${e[5].folderScreen.widthInMm}mm`),f&32&&U(a,"height",`${e[5].folderScreen.heightInMm}mm`)},i(u){d||(A(r.$$.fragment,u),d=!0)},o(u){D(r.$$.fragment,u),d=!1},d(u){u&&w(t),W(r),b=!1,Ce(p)}}}function Pr(n){let e,t,a="Create Page (choose template)",r,s,o=[],i=new Map,l,c,h="Create new page template",d,b,p,k=ne(n[3]);const I=u=>u[16].id;for(let u=0;u<k.length;u+=1){let f=Dt(n,k,u),g=I(f);i.set(g,o[u]=Vt(g,f))}return{c(){e=T("div"),t=T("h1"),t.textContent=a,r=N(),s=T("div");for(let u=0;u<o.length;u+=1)o[u].c();l=N(),c=T("button"),c.textContent=h,this.h()},l(u){e=y(u,"DIV",{class:!0});var f=j(e);t=y(f,"H1",{class:!0,"data-svelte-h":!0}),Z(t)!=="svelte-1fbxl57"&&(t.textContent=a),r=R(f),s=y(f,"DIV",{class:!0});var g=j(s);for(let m=0;m<o.length;m+=1)o[m].l(g);g.forEach(w),l=R(f),c=y(f,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(c)!=="svelte-wmwgso"&&(c.textContent=h),f.forEach(w),this.h()},h(){C(t,"class","svelte-1dwdo8c"),C(s,"class","page-template-boxes svelte-1dwdo8c"),C(c,"class","new-page-template-button svelte-1dwdo8c"),C(e,"class","create-page-modal svelte-1dwdo8c")},m(u,f){B(u,e,f),v(e,t),v(e,r),v(e,s);for(let g=0;g<o.length;g+=1)o[g]&&o[g].m(s,null);v(e,l),v(e,c),d=!0,b||(p=Y(c,"click",n[8]),b=!0)},p(u,f){f&254&&(k=ne(u[3]),me(),o=Ze(o,f,I,1,u,k,i,s,nn,Vt,null,Dt),pe())},i(u){if(!d){for(let f=0;f<k.length;f+=1)A(o[f]);d=!0}},o(u){for(let f=0;f<o.length;f+=1)D(o[f]);d=!1},d(u){u&&w(e);for(let f=0;f<o.length;f+=1)o[f].d();b=!1,p()}}}function Nt(n){let e,t,a;function r(o){n[15](o)}let s={pageTemplateId:n[2]};return n[1]!==void 0&&(s.showModal=n[1]),e=new xr({props:s}),ue.push(()=>we(e,"showModal",r)),{c(){q(e.$$.fragment)},l(o){X(e.$$.fragment,o)},m(o,i){H(e,o,i),a=!0},p(o,i){const l={};i&4&&(l.pageTemplateId=o[2]),!t&&i&2&&(t=!0,l.showModal=o[1],ve(()=>t=!1)),e.$set(l)},i(o){a||(A(e.$$.fragment,o),a=!0)},o(o){D(e.$$.fragment,o),a=!1},d(o){W(e,o)}}}function Or(n){let e,t,a,r,s;function o(c){n[14](c)}let i={$$slots:{default:[Pr]},$$scope:{ctx:n}};n[0]!==void 0&&(i.showModal=n[0]),e=new Ue({props:i}),ue.push(()=>we(e,"showModal",o));let l=n[1]&&Nt(n);return{c(){q(e.$$.fragment),a=N(),l&&l.c(),r=le()},l(c){X(e.$$.fragment,c),a=R(c),l&&l.l(c),r=le()},m(c,h){H(e,c,h),B(c,a,h),l&&l.m(c,h),B(c,r,h),s=!0},p(c,[h]){const d={};h&524414&&(d.$$scope={dirty:h,ctx:c}),!t&&h&1&&(t=!0,d.showModal=c[0],ve(()=>t=!1)),e.$set(d),c[1]?l?(l.p(c,h),h&2&&A(l,1)):(l=Nt(c),l.c(),A(l,1),l.m(r.parentNode,r)):l&&(me(),D(l,1,1,()=>{l=null}),pe())},i(c){s||(A(e.$$.fragment,c),A(l),s=!0)},o(c){D(e.$$.fragment,c),D(l),s=!1},d(c){c&&(w(a),w(r)),W(e,c),l&&l.d(c)}}}function Dr(n,e,t){let a,r,s,o;z(n,De,m=>t(3,a=m)),z(n,de,m=>t(4,r=m)),z(n,Te,m=>t(5,s=m)),z(n,ye,m=>t(6,o=m));let{showModal:i}=e,{folderId:l}=e,{createAtX:c}=e,{createAtY:h}=e,d=!1,b=-1;function p(m){var x;const _=c,V=h,$=prompt("Enter page name:");if(!$)return;const P=m.code.replace(/class \w+ extends/,`class ${$} extends`);r.push({id:(((x=r.at(-1))==null?void 0:x.id)??0)+1,folderId:l,code:P,x:_,y:V}),de.set(r),t(0,i=!1)}function k(){var _;const m=(((_=a.at(-1))==null?void 0:_.id)??0)+1;a.push({id:m,title:"New Template",code:`
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
			`.trim()}),t(1,d=!0),t(2,b=m)}const I=m=>p(m),u=m=>{t(2,b=m.id),t(1,d=!0)};function f(m){i=m,t(0,i)}function g(m){d=m,t(1,d)}return n.$$set=m=>{"showModal"in m&&t(0,i=m.showModal),"folderId"in m&&t(9,l=m.folderId),"createAtX"in m&&t(10,c=m.createAtX),"createAtY"in m&&t(11,h=m.createAtY)},[i,d,b,a,r,s,o,p,k,l,c,h,I,u,f,g]}class Vr extends ae{constructor(e){super(),re(this,e,Dr,Or,te,{showModal:0,folderId:9,createAtX:10,createAtY:11})}}function Nr(n){let e,t,a,r;return{c(){e=T("div"),this.h()},l(s){e=y(s,"DIV",{class:!0}),j(e).forEach(w),this.h()},h(){C(e,"class","app svelte-jvv5s9")},m(s,o){B(s,e,o),a||(r=Be(t=Rr.call(null,e,n[0])),a=!0)},p(s,[o]){t&&Qe(t.update)&&o&1&&t.update.call(null,s[0])},i:L,o:L,d(s){s&&w(e),a=!1,r()}}}function Rr(n,e){function t(a){n.innerText="",n.appendChild(a.createElement())}return t(e),{update:t}}function Br(n,e,t){let{frameworkApp:a=null}=e;return n.$$set=r=>{"frameworkApp"in r&&t(0,a=r.frameworkApp)},[a]}class $r extends ae{constructor(e){super(),re(this,e,Br,Nr,te,{frameworkApp:0})}}const Rt=new Map,Fr={isPreview:!0};function Ur(n,e,t){const a=Oe(n,e,t,!0),r=Rt.get(a);if(r)return r;const s=new Bn(a,Fr);return s.start(),Rt[a]=s,s}function Bt(n,e,t){const a=n.slice();return a[27]=e[t].page,a[28]=e[t].frameworkApp,a}function $t(n,e,t){const a=n.slice();return a[31]=e[t],a}function Ft(n){let e,t=n[31].text+"",a;return{c(){e=T("div"),a=oe(t),this.h()},l(r){e=y(r,"DIV",{class:!0});var s=j(e);a=se(s,t),s.forEach(w),this.h()},h(){C(e,"class","line svelte-feyijm"),Ee(e,"isBack",n[31].isBack),U(e,"width",`${n[31].length}px`),U(e,"transform",`translate(${n[31].centerX}px, ${n[31].centerY}px) translate(-50%, -50%) rotate(${n[31].angle}deg)`)},m(r,s){B(r,e,s),v(e,a)},p(r,s){s[0]&256&&t!==(t=r[31].text+"")&&Se(a,t),s[0]&256&&Ee(e,"isBack",r[31].isBack),s[0]&256&&U(e,"width",`${r[31].length}px`),s[0]&256&&U(e,"transform",`translate(${r[31].centerX}px, ${r[31].centerY}px) translate(-50%, -50%) rotate(${r[31].angle}deg)`)},d(r){r&&w(e)}}}function Ut(n,e){let t,a,r=Me(e[27].code)+"",s,o,i,l,c,h,d,b,p,k,I;function u(){return e[19](e[27])}c=new $r({props:{frameworkApp:e[28]}});function f(){return e[20](e[27])}function g(...m){return e[21](e[27],...m)}return{key:n,first:null,c(){t=T("div"),a=T("div"),s=oe(r),o=N(),i=T("div"),l=T("div"),q(c.$$.fragment),h=N(),d=T("div"),b=N(),this.h()},l(m){t=y(m,"DIV",{class:!0,draggable:!0});var _=j(t);a=y(_,"DIV",{class:!0});var V=j(a);s=se(V,r),V.forEach(w),o=R(_),i=y(_,"DIV",{class:!0});var $=j(i);l=y($,"DIV",{class:!0});var P=j(l);X(c.$$.fragment,P),P.forEach(w),h=R($),d=y($,"DIV",{class:!0}),j(d).forEach(w),$.forEach(w),b=R(_),_.forEach(w),this.h()},h(){C(a,"class","name svelte-feyijm"),C(l,"class","disabled-page svelte-feyijm"),C(d,"class","overlay svelte-feyijm"),C(i,"class","page svelte-feyijm"),C(t,"class","page-container svelte-feyijm"),C(t,"draggable","true"),U(t,"width",`${e[9].folderScreen.widthInMm}mm`),U(t,"height",`${e[9].folderScreen.heightInMm}mm`),U(t,"transform",`translate(${e[27].x}px, ${e[27].y}px) translate(-50%, -50%)`),this.first=t},m(m,_){B(m,t,_),v(t,a),v(a,s),v(t,o),v(t,i),v(i,l),H(c,l,null),v(i,h),v(i,d),v(t,b),p=!0,k||(I=[Y(a,"click",Ge(u)),Y(i,"click",Ge(f)),Y(t,"dragstart",g)],k=!0)},p(m,_){e=m,(!p||_[0]&2)&&r!==(r=Me(e[27].code)+"")&&Se(s,r);const V={};_[0]&2&&(V.frameworkApp=e[28]),c.$set(V),_[0]&512&&U(t,"width",`${e[9].folderScreen.widthInMm}mm`),_[0]&512&&U(t,"height",`${e[9].folderScreen.heightInMm}mm`),_[0]&2&&U(t,"transform",`translate(${e[27].x}px, ${e[27].y}px) translate(-50%, -50%)`)},i(m){p||(A(c.$$.fragment,m),p=!0)},o(m){D(c.$$.fragment,m),p=!1},d(m){m&&w(t),W(c),k=!1,Ce(I)}}}function Lt(n){let e,t,a;function r(o){n[22](o)}let s={pageId:n[4]};return n[3]!==void 0&&(s.showModal=n[3]),e=new Ir({props:s}),ue.push(()=>we(e,"showModal",r)),{c(){q(e.$$.fragment)},l(o){X(e.$$.fragment,o)},m(o,i){H(e,o,i),a=!0},p(o,i){const l={};i[0]&16&&(l.pageId=o[4]),!t&&i[0]&8&&(t=!0,l.showModal=o[3],ve(()=>t=!1)),e.$set(l)},i(o){a||(A(e.$$.fragment,o),a=!0)},o(o){D(e.$$.fragment,o),a=!1},d(o){W(e,o)}}}function Yt(n){let e,t,a;function r(o){n[23](o)}let s={folderId:n[0],createAtX:n[5]-n[7].offsetX,createAtY:n[6]-n[7].offsetY};return n[2]!==void 0&&(s.showModal=n[2]),e=new Vr({props:s}),ue.push(()=>we(e,"showModal",r)),{c(){q(e.$$.fragment)},l(o){X(e.$$.fragment,o)},m(o,i){H(e,o,i),a=!0},p(o,i){const l={};i[0]&1&&(l.folderId=o[0]),i[0]&160&&(l.createAtX=o[5]-o[7].offsetX),i[0]&192&&(l.createAtY=o[6]-o[7].offsetY),!t&&i[0]&4&&(t=!0,l.showModal=o[2],ve(()=>t=!1)),e.$set(l)},i(o){a||(A(e.$$.fragment,o),a=!0)},o(o){D(e.$$.fragment,o),a=!1},d(o){W(e,o)}}}function Lr(n){let e,t,a,r=[],s=new Map,o,i,l,c,h,d,b=ne(n[8]),p=[];for(let g=0;g<b.length;g+=1)p[g]=Ft($t(n,b,g));let k=ne(n[1]);const I=g=>g[27].id;for(let g=0;g<k.length;g+=1){let m=Bt(n,k,g),_=I(m);s.set(_,r[g]=Ut(_,m))}let u=n[3]&&Lt(n),f=n[2]&&Yt(n);return{c(){e=T("div"),t=T("div");for(let g=0;g<p.length;g+=1)p[g].c();a=N();for(let g=0;g<r.length;g+=1)r[g].c();o=N(),u&&u.c(),i=N(),f&&f.c(),l=le(),this.h()},l(g){e=y(g,"DIV",{class:!0,draggable:!0});var m=j(e);t=y(m,"DIV",{class:!0});var _=j(t);for(let V=0;V<p.length;V+=1)p[V].l(_);a=R(_);for(let V=0;V<r.length;V+=1)r[V].l(_);_.forEach(w),m.forEach(w),o=R(g),u&&u.l(g),i=R(g),f&&f.l(g),l=le(),this.h()},h(){C(t,"class","pages svelte-feyijm"),U(t,"transform",`translate(${n[7].offsetX}px, ${n[7].offsetY}px)`),C(e,"class","folder svelte-feyijm"),C(e,"draggable","true"),U(e,"background-position-x",`${n[7].offsetX}px`),U(e,"background-position-y",`${n[7].offsetY}px`)},m(g,m){B(g,e,m),v(e,t);for(let _=0;_<p.length;_+=1)p[_]&&p[_].m(t,null);v(t,a);for(let _=0;_<r.length;_+=1)r[_]&&r[_].m(t,null);B(g,o,m),u&&u.m(g,m),B(g,i,m),f&&f.m(g,m),B(g,l,m),c=!0,h||(d=[Y(e,"click",n[14]),Y(e,"dragstart",n[10]),Y(e,"dragover",ct(n[11])),Y(e,"drop",ct(n[13]))],h=!0)},p(g,m){if(m[0]&256){b=ne(g[8]);let _;for(_=0;_<b.length;_+=1){const V=$t(g,b,_);p[_]?p[_].p(V,m):(p[_]=Ft(V),p[_].c(),p[_].m(t,a))}for(;_<p.length;_+=1)p[_].d(1);p.length=b.length}m[0]&4634&&(k=ne(g[1]),me(),r=Ze(r,m,I,1,g,k,s,t,nn,Ut,null,Bt),pe()),m[0]&128&&U(t,"transform",`translate(${g[7].offsetX}px, ${g[7].offsetY}px)`),m[0]&128&&U(e,"background-position-x",`${g[7].offsetX}px`),m[0]&128&&U(e,"background-position-y",`${g[7].offsetY}px`),g[3]?u?(u.p(g,m),m[0]&8&&A(u,1)):(u=Lt(g),u.c(),A(u,1),u.m(i.parentNode,i)):u&&(me(),D(u,1,1,()=>{u=null}),pe()),g[2]?f?(f.p(g,m),m[0]&4&&A(f,1)):(f=Yt(g),f.c(),A(f,1),f.m(l.parentNode,l)):f&&(me(),D(f,1,1,()=>{f=null}),pe())},i(g){if(!c){for(let m=0;m<k.length;m+=1)A(r[m]);A(u),A(f),c=!0}},o(g){for(let m=0;m<r.length;m+=1)D(r[m]);D(u),D(f),c=!1},d(g){g&&(w(e),w(o),w(i),w(l)),$e(p,g);for(let m=0;m<r.length;m+=1)r[m].d();u&&u.d(g),f&&f.d(g),h=!1,Ce(d)}}}const Yr=50;function zr(n){navigator.clipboard.writeText(n)}function Gr(n,e,t){let a,r,s,o,i,l,c,h;z(n,de,S=>t(16,i=S)),z(n,Ie,S=>t(17,l=S)),z(n,ye,S=>t(18,c=S)),z(n,Te,S=>t(9,h=S));let{folderId:d}=e,b=!1,p=!1,k=-1,I=-1,u=-1,f=null;function g(S,G){return G.map(ee=>{const ce=Ur(S,i,ee);return{page:ee,frameworkApp:ce}})}function m(S){var ee;const G=[];for(const ce of S){const ie=(ee=ce.frameworkApp)==null?void 0:ee.frameworkPage;if(!ie)continue;const Ve=ce.page.x,ge=ce.page.y,Le=[].concat(ie.beforeDirections,ie.afterDirections);for(const he of Le){const Ne=S.find(xe=>he.getPage().proxyName==Me(xe.page.code));if(Ne){const xe=Ne.page.x,He=Ne.page.y,K=xe-Ve,Q=He-ge,be=Math.sqrt(K**2+Q**2),Re=Ve+K/2;if(0<=K){const Pe=Math.atan2(Q,K)*180/Math.PI,fe=ge+Q/2;G.push({length:be,angle:Pe,centerX:Re,centerY:fe,text:he.getDescription(),isBack:!1})}else{const Pe=Math.atan2(Q,K)*180/Math.PI+180,fe=ge+Q/2+Yr;G.push({length:be,angle:Pe,centerX:Re,centerY:fe,text:he.getDescription(),isBack:!0})}}}}return G}function _(S){f={action:"moveBackground",initialFolderOffsetX:a.offsetX,initialFolderOffsetY:a.offsetY,startMouseX:S.clientX,startMouseY:S.clientY};const G=document.createElement("img");G.style.display="none",S.dataTransfer.setDragImage(G,0,0)}function V(S){switch(f.action){case"moveBackground":const G=S.clientX-f.startMouseX,ee=S.clientY-f.startMouseY;t(7,a.offsetX=f.initialFolderOffsetX+G,a),t(7,a.offsetY=f.initialFolderOffsetY+ee,a),Ie.set(l);break}}function $(S,G){S.stopPropagation(),f={action:"movePage",pageId:G.id,startMouseX:S.clientX,startMouseY:S.clientY}}function P(S){switch(f.action){case"movePage":const G=S.clientX-f.startMouseX,ee=S.clientY-f.startMouseY,ce=i.find(ie=>ie.id==f.pageId);ce.x+=G,ce.y+=ee,de.set(i);break}}function x(S){t(4,k=-1),t(2,b=!0),t(5,I=S.clientX),t(6,u=S.clientY)}const O=S=>zr(Me(S.code)),M=S=>{t(3,p=!0),t(4,k=S.id)},F=(S,G)=>$(G,S);function E(S){p=S,t(3,p)}function J(S){b=S,t(2,b)}return n.$$set=S=>{"folderId"in S&&t(0,d=S.folderId)},n.$$.update=()=>{n.$$.dirty[0]&131073&&t(7,a=l.find(S=>S.id==d)??l[0]),n.$$.dirty[0]&65537&&t(15,r=i.filter(S=>S.folderId==d)),n.$$.dirty[0]&294912&&t(1,s=g(c,r)),n.$$.dirty[0]&2&&t(8,o=m(s))},[d,s,b,p,k,I,u,a,o,h,_,V,$,P,x,r,i,l,c,O,M,F,E,J]}class qr extends ae{constructor(e){super(),re(this,e,Gr,Lr,te,{folderId:0},null,[-1,-1])}}function zt(n,e,t){const a=n.slice();return a[10]=e[t],a}function Gt(n,e){let t,a=e[10].name+"",r,s,o;function i(){return e[6](e[10])}return{key:n,first:null,c(){t=T("button"),r=oe(a),this.h()},l(l){t=y(l,"BUTTON",{class:!0});var c=j(t);r=se(c,a),c.forEach(w),this.h()},h(){C(t,"class","svelte-q0xr25"),Ee(t,"current",e[1]==e[10].id),this.first=t},m(l,c){B(l,t,c),v(t,r),s||(o=Y(t,"click",i),s=!0)},p(l,c){e=l,c&4&&a!==(a=e[10].name+"")&&Se(r,a),c&6&&Ee(t,"current",e[1]==e[10].id)},d(l){l&&w(t),s=!1,o()}}}function qt(n){let e,t,a;function r(o){n[8](o)}let s={options:n[0]};return n[3]!==void 0&&(s.showModal=n[3]),e=new Kn({props:s}),ue.push(()=>we(e,"showModal",r)),{c(){q(e.$$.fragment)},l(o){X(e.$$.fragment,o)},m(o,i){H(e,o,i),a=!0},p(o,i){const l={};i&1&&(l.options=o[0]),!t&&i&8&&(t=!0,l.showModal=o[3],ve(()=>t=!1)),e.$set(l)},i(o){a||(A(e.$$.fragment,o),a=!0)},o(o){D(e.$$.fragment,o),a=!1},d(o){W(e,o)}}}function Xt(n){let e,t,a;function r(o){n[9](o)}let s={folderId:n[1]};return n[4]!==void 0&&(s.showModal=n[4]),e=new ea({props:s}),ue.push(()=>we(e,"showModal",r)),{c(){q(e.$$.fragment)},l(o){X(e.$$.fragment,o)},m(o,i){H(e,o,i),a=!0},p(o,i){const l={};i&2&&(l.folderId=o[1]),!t&&i&16&&(t=!0,l.showModal=o[4],ve(()=>t=!1)),e.$set(l)},i(o){a||(A(e.$$.fragment,o),a=!0)},o(o){D(e.$$.fragment,o),a=!1},d(o){W(e,o)}}}function Xr(n){let e,t,a,r,s,o,i=[],l=new Map,c,h,d="+",b,p,k="☰",I,u,f,g,m,_;a=new qr({props:{folderId:n[1]}});let V=ne(n[2]);const $=O=>O[10].id;for(let O=0;O<V.length;O+=1){let M=zt(n,V,O),F=$(M);l.set(F,i[O]=Gt(F,M))}let P=n[3]&&qt(n),x=n[4]&&Xt(n);return{c(){e=T("div"),t=T("div"),q(a.$$.fragment),r=N(),s=T("div"),o=T("div");for(let O=0;O<i.length;O+=1)i[O].c();c=N(),h=T("button"),h.textContent=d,b=N(),p=T("button"),p.textContent=k,I=N(),P&&P.c(),u=N(),x&&x.c(),f=le(),this.h()},l(O){e=y(O,"DIV",{class:!0});var M=j(e);t=y(M,"DIV",{class:!0});var F=j(t);X(a.$$.fragment,F),F.forEach(w),r=R(M),s=y(M,"DIV",{class:!0});var E=j(s);o=y(E,"DIV",{class:!0});var J=j(o);for(let S=0;S<i.length;S+=1)i[S].l(J);c=R(J),h=y(J,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(h)!=="svelte-1hnfxpo"&&(h.textContent=d),J.forEach(w),E.forEach(w),b=R(M),p=y(M,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(p)!=="svelte-1x767tg"&&(p.textContent=k),M.forEach(w),I=R(O),P&&P.l(O),u=R(O),x&&x.l(O),f=le(),this.h()},h(){C(t,"class","folder svelte-q0xr25"),C(h,"class","create-folder svelte-q0xr25"),C(o,"class","folder-titles svelte-q0xr25"),C(s,"class","header svelte-q0xr25"),C(p,"class","main-menu-button svelte-q0xr25"),C(e,"class","app svelte-q0xr25")},m(O,M){B(O,e,M),v(e,t),H(a,t,null),v(e,r),v(e,s),v(s,o);for(let F=0;F<i.length;F+=1)i[F]&&i[F].m(o,null);v(o,c),v(o,h),v(e,b),v(e,p),B(O,I,M),P&&P.m(O,M),B(O,u,M),x&&x.m(O,M),B(O,f,M),g=!0,m||(_=[Y(h,"click",n[5]),Y(p,"click",n[7])],m=!0)},p(O,[M]){const F={};M&2&&(F.folderId=O[1]),a.$set(F),M&22&&(V=ne(O[2]),i=Ze(i,M,$,1,O,V,l,o,tn,Gt,c,zt)),O[3]?P?(P.p(O,M),M&8&&A(P,1)):(P=qt(O),P.c(),A(P,1),P.m(u.parentNode,u)):P&&(me(),D(P,1,1,()=>{P=null}),pe()),O[4]?x?(x.p(O,M),M&16&&A(x,1)):(x=Xt(O),x.c(),A(x,1),x.m(f.parentNode,f)):x&&(me(),D(x,1,1,()=>{x=null}),pe())},i(O){g||(A(a.$$.fragment,O),A(P),A(x),g=!0)},o(O){D(a.$$.fragment,O),D(P),D(x),g=!1},d(O){O&&(w(e),w(I),w(u),w(f)),W(a);for(let M=0;M<i.length;M+=1)i[M].d();P&&P.d(O),x&&x.d(O),m=!1,Ce(_)}}}function Hr(n,e,t){let a;z(n,Ie,p=>t(2,a=p));let{mainMenuOptions:r={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[]}}=e,s=a[0].id,o=!1,i=!1;function l(){const p=a.at(-1).id+1;a.push({id:p,name:"New folder",offsetX:0,offsetY:0}),Ie.set(a),t(1,s=p),t(4,i=!0)}const c=p=>{s==p.id?t(4,i=!0):t(1,s=p.id)},h=()=>t(3,o=!0);function d(p){o=p,t(3,o)}function b(p){i=p,t(4,i)}return n.$$set=p=>{"mainMenuOptions"in p&&t(0,r=p.mainMenuOptions)},n.$$.update=()=>{n.$$.dirty&6&&(a.find(p=>p.id==s)||t(1,s=a[0].id))},[r,s,a,o,i,l,c,h,d,b]}class Wr extends ae{constructor(e){super(),re(this,e,Hr,Xr,te,{mainMenuOptions:0})}}const Ye={editorSettings:{codeScreen:{widthInMm:40*1.5,heightInMm:66*1.5},folderScreen:{widthInMm:40,heightInMm:66}},app:{code:`
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
		`.trim()}]};function Ht(n){let e,t;return e=new Wr({props:{mainMenuOptions:n[0]}}),{c(){q(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,r){H(e,a,r),t=!0},p(a,r){const s={};r&1&&(s.mainMenuOptions=a[0]),e.$set(s)},i(a){t||(A(e.$$.fragment,a),t=!0)},o(a){D(e.$$.fragment,a),t=!1},d(a){W(e,a)}}}function Kr(n){let e,t,a=n[1]&&Ht(n);return{c(){a&&a.c(),e=le()},l(r){a&&a.l(r),e=le()},m(r,s){a&&a.m(r,s),B(r,e,s),t=!0},p(r,[s]){r[1]?a?(a.p(r,s),s&2&&A(a,1)):(a=Ht(r),a.c(),A(a,1),a.m(e.parentNode,e)):a&&(me(),D(a,1,1,()=>{a=null}),pe())},i(r){t||(A(a),t=!0)},o(r){D(a),t=!1},d(r){r&&w(e),a&&a.d(r)}}}function Jr(n,e,t){let a,r,s,o,i;z(n,De,d=>t(3,a=d)),z(n,de,d=>t(4,r=d)),z(n,Ie,d=>t(5,s=d)),z(n,ye,d=>t(6,o=d)),z(n,Te,d=>t(7,i=d));let{mainMenuOptions:l={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[]}}=e,{bagaCode:c=""}=e,h=!1;return en(()=>{let d,b,p,k,I;if(c!="")try{const u=an(c);d=u.editorSettings,b=u.app,p=u.folders,k=u.pages,I=u.pageTemplates}catch(u){console.log(u),alert("The baga code given to the editor is invalid. The default project will be loaded instead.")}_e(Te,i=d??Ye.editorSettings,i),_e(ye,o=b??Ye.app,o),_e(Ie,s=p??Ye.folders,s),_e(de,r=k??Ye.pages,r),_e(De,a=I??Ye.pageTemplates,a),t(1,h=!0)}),n.$$set=d=>{"mainMenuOptions"in d&&t(0,l=d.mainMenuOptions),"bagaCode"in d&&t(2,c=d.bagaCode)},[l,h,c]}class Qr extends ae{constructor(e){super(),re(this,e,Jr,Kr,te,{mainMenuOptions:0,bagaCode:2})}}function Wt(n){let e,t;return e=new Qr({props:{bagaCode:n[0],mainMenuOptions:n[3]}}),{c(){q(e.$$.fragment)},l(a){X(e.$$.fragment,a)},m(a,r){H(e,a,r),t=!0},p(a,r){const s={};r&1&&(s.bagaCode=a[0]),e.$set(s)},i(a){t||(A(e.$$.fragment,a),t=!0)},o(a){D(e.$$.fragment,a),t=!1},d(a){W(e,a)}}}function Zr(n){let e,t,a,r,s=n[1]&&Wt(n);return{c(){e=T("meta"),t=N(),s&&s.c(),a=le(),this.h()},l(o){const i=Nn("svelte-10aecs7",document.head);e=y(i,"META",{"http-equiv":!0,content:!0}),i.forEach(w),t=R(o),s&&s.l(o),a=le(),this.h()},h(){C(e,"http-equiv","Content-Security-Policy"),C(e,"content",n[2])},m(o,i){v(document.head,e),B(o,t,i),s&&s.m(o,i),B(o,a,i),r=!0},p(o,[i]){o[1]?s?(s.p(o,i),i&2&&A(s,1)):(s=Wt(o),s.c(),A(s,1),s.m(a.parentNode,a)):s&&(me(),D(s,1,1,()=>{s=null}),pe())},i(o){r||(A(s),r=!0)},o(o){D(s),r=!1},d(o){o&&(w(t),w(a)),w(e),s&&s.d(o)}}}function eo(n,e,t){const a=["default-src 'none';","form-action 'none';","connect-src 'none';","img-src * data:;","script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net blob:;","style-src-attr 'self' 'unsafe-inline';","style-src-elem 'self' 'unsafe-inline' https://cdn.jsdelivr.net;","font-src https://cdn.jsdelivr.net;"].join(" "),r={showCopyLinkButton:!0,showFileButtons:!0,extraOptions:[{text:"Copy link to run app",onClick(i){const l=`https://bagawork.com/run#${i}`;navigator.clipboard.writeText(l)}}]};let s="",o=!1;return en(()=>{t(0,s=location.hash.substring("#".length)),t(1,o=!0)}),[s,o,a,r]}class lo extends ae{constructor(e){super(),re(this,e,eo,Zr,te,{})}}export{lo as component};
