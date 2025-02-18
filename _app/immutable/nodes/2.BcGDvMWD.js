import{s as z,n as P,d as ae,c as se,u as oe,g as le,b as ie}from"../chunks/scheduler.B0TnBjPs.js";import{S as q,i as F,e as $,s as I,q as A,a as b,d as k,g as W,b as S,r as D,h as v,o as x,E as y,j as T,p as m,x as H,v as ne,c as L,f as M,m as N,t as B,k as G,l as U}from"../chunks/index.BXVnRmkj.js";import{e as V}from"../chunks/each.BaX_zf8z.js";import{c as ue}from"../chunks/changelog-entries.B0H6TqSg.js";import{p as re}from"../chunks/stores.-tGz_jaI.js";function J(o,e,a){const t=o.slice();return t[3]=e[a].text,t[4]=e[a].href,t[5]=e[a].target,t}function K(o){let e,a=o[3]+"",t;return{c(){e=$("a"),t=A(a),this.h()},l(r){e=b(r,"A",{href:!0,target:!0,class:!0});var s=k(e);t=D(s,a),s.forEach(v),this.h()},h(){x(e,"href",o[4]),x(e,"target",o[5]),x(e,"class","svelte-f9itgq"),y(e,"isCurrent",o[0].url.pathname==o[4]),y(e,"isSubCurrent",o[0].url.pathname.startsWith(o[4]))},m(r,s){T(r,e,s),m(e,t)},p(r,s){s&3&&y(e,"isCurrent",r[0].url.pathname==r[4]),s&3&&y(e,"isSubCurrent",r[0].url.pathname.startsWith(r[4]))},d(r){r&&v(e)}}}function he(o){let e,a,t="BagaWork",r,s,n,i,g,c=o[2].version+"",f,u=V(o[1]),l=[];for(let h=0;h<u.length;h+=1)l[h]=K(J(o,u,h));return{c(){e=$("nav"),a=$("a"),a.textContent=t,r=I(),s=$("div");for(let h=0;h<l.length;h+=1)l[h].c();n=I(),i=$("a"),g=A("v"),f=A(c),this.h()},l(h){e=b(h,"NAV",{class:!0});var d=k(e);a=b(d,"A",{href:!0,class:!0,"data-svelte-h":!0}),W(a)!=="svelte-r9hply"&&(a.textContent=t),r=S(d),s=b(d,"DIV",{class:!0});var p=k(s);for(let C=0;C<l.length;C+=1)l[C].l(p);n=S(p),i=b(p,"A",{class:!0,href:!0});var w=k(i);g=D(w,"v"),f=D(w,c),w.forEach(v),p.forEach(v),d.forEach(v),this.h()},h(){x(a,"href","/"),x(a,"class","title svelte-f9itgq"),y(a,"isCurrent",o[0].url.pathname=="/"),y(a,"isSubCurrent",o[0].url.pathname=="/"),x(i,"class","version svelte-f9itgq"),x(i,"href","/changelog/"),y(i,"isCurrent",o[0].url.pathname=="/changelog/"),y(i,"isSubCurrent",o[0].url.pathname.startsWith("/changelog/")),x(s,"class","links svelte-f9itgq"),x(e,"class","svelte-f9itgq")},m(h,d){T(h,e,d),m(e,a),m(e,r),m(e,s);for(let p=0;p<l.length;p+=1)l[p]&&l[p].m(s,null);m(s,n),m(s,i),m(i,g),m(i,f)},p(h,[d]){if(d&1&&y(a,"isCurrent",h[0].url.pathname=="/"),d&1&&y(a,"isSubCurrent",h[0].url.pathname=="/"),d&3){u=V(h[1]);let p;for(p=0;p<u.length;p+=1){const w=J(h,u,p);l[p]?l[p].p(w,d):(l[p]=K(w),l[p].c(),l[p].m(s,n))}for(;p<l.length;p+=1)l[p].d(1);l.length=u.length}d&1&&y(i,"isCurrent",h[0].url.pathname=="/changelog/"),d&1&&y(i,"isSubCurrent",h[0].url.pathname.startsWith("/changelog/"))},i:P,o:P,d(h){h&&v(e),H(l,h)}}}function fe(o,e,a){let t;ae(o,re,n=>a(0,t=n));const r=[{text:"Documentation",href:"/documentation/",target:""},{text:"Tutorials",href:"/tutorials/",target:""},{text:"Examples",href:"/examples/",target:""},{text:"Editor",href:"/editor/",target:"_blank"},{text:"Implementation",href:"/implementation/",target:""},{text:"Contact",href:"/contact/",target:""}],s=ue.find(n=>0<n.changes.length);return[t,r,s]}class ce extends q{constructor(e){super(),F(this,e,fe,he,z,{})}}function X(o,e,a){const t=o.slice();return t[3]=e[a],t}function Z(o,e,a){const t=o.slice();return t[6]=e[a].text,t[7]=e[a].href,t}function ee(o){let e,a=o[6]+"",t,r,s;return{c(){e=$("a"),t=A(a),r=I(),this.h()},l(n){e=b(n,"A",{href:!0,class:!0});var i=k(e);t=D(i,a),r=S(i),i.forEach(v),this.h()},h(){x(e,"href",s=o[7]),x(e,"class","svelte-12md48y"),y(e,"isCurrent",o[0].url.pathname===o[7])},m(n,i){T(n,e,i),m(e,t),m(e,r)},p(n,i){i&2&&a!==(a=n[6]+"")&&ne(t,a),i&2&&s!==(s=n[7])&&x(e,"href",s),i&3&&y(e,"isCurrent",n[0].url.pathname===n[7])},d(n){n&&v(e)}}}function te(o){let e,a,t=o[3].name+"",r,s,n,i,g=V(o[3].links),c=[];for(let f=0;f<g.length;f+=1)c[f]=ee(Z(o,g,f));return{c(){e=$("div"),a=$("div"),r=A(t),s=I(),n=$("div");for(let f=0;f<c.length;f+=1)c[f].c();i=I(),this.h()},l(f){e=b(f,"DIV",{class:!0});var u=k(e);a=b(u,"DIV",{class:!0});var l=k(a);r=D(l,t),l.forEach(v),s=S(u),n=b(u,"DIV",{class:!0});var h=k(n);for(let d=0;d<c.length;d+=1)c[d].l(h);h.forEach(v),i=S(u),u.forEach(v),this.h()},h(){x(a,"class","group-name svelte-12md48y"),x(n,"class","links svelte-12md48y"),x(e,"class","group svelte-12md48y")},m(f,u){T(f,e,u),m(e,a),m(a,r),m(e,s),m(e,n);for(let l=0;l<c.length;l+=1)c[l]&&c[l].m(n,null);m(e,i)},p(f,u){if(u&2&&t!==(t=f[3].name+"")&&ne(r,t),u&3){g=V(f[3].links);let l;for(l=0;l<g.length;l+=1){const h=Z(f,g,l);c[l]?c[l].p(h,u):(c[l]=ee(h),c[l].c(),c[l].m(n,null))}for(;l<c.length;l+=1)c[l].d(1);c.length=g.length}},d(f){f&&v(e),H(c,f)}}}function me(o){let e,a=V(o[1]),t=[];for(let r=0;r<a.length;r+=1)t[r]=te(X(o,a,r));return{c(){e=$("aside");for(let r=0;r<t.length;r+=1)t[r].c()},l(r){e=b(r,"ASIDE",{});var s=k(e);for(let n=0;n<t.length;n+=1)t[n].l(s);s.forEach(v)},m(r,s){T(r,e,s);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(e,null)},p(r,[s]){if(s&3){a=V(r[1]);let n;for(n=0;n<a.length;n+=1){const i=X(r,a,n);t[n]?t[n].p(i,s):(t[n]=te(i),t[n].c(),t[n].m(e,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=a.length}},i:P,o:P,d(r){r&&v(e),H(t,r)}}}function pe(o,e,a){let t,r;ae(o,re,n=>a(0,r=n));const s={"":[],editor:[],contact:[],tutorials:[{name:"Fundamentals",links:[{text:"1. Introduction",href:"/tutorials/fundamentals/introduction/"},{text:"2. Pages",href:"/tutorials/fundamentals/pages/"},{text:"3. Configuring GUI Components",href:"/tutorials/fundamentals/configuring-gui-components/"},{text:"4. Positioning GUI Components",href:"/tutorials/fundamentals/positioning-gui-components/"},{text:"5. Changing Page",href:"/tutorials/fundamentals/changing-page/"},{text:"6. Sizing GUI Components",href:"/tutorials/fundamentals/sizing-gui-components/"},{text:"7. The App Class",href:"/tutorials/fundamentals/the-app-class/"},{text:"8. Exercises",href:"/tutorials/fundamentals/exercises/"}]},{name:"Programming",links:[{text:"1. Page Constants",href:"/tutorials/programming/page-constants/"},{text:"2. App Constants",href:"/tutorials/programming/app-constants/"},{text:"3. Page Variables & Methods",href:"/tutorials/programming/page-variables-and-methods/"},{text:"4. App Variables & Methods",href:"/tutorials/programming/app-variables-and-methods/"},{text:"5. Numbers",href:"/tutorials/programming/numbers/"},{text:"6. Booleans, keepIf() & showIf()",href:"/tutorials/programming/booleans-keepif-and-showif/"},{text:"7. onBefore()",href:"/tutorials/programming/on-before/"},{text:"8. Exercises",href:"/tutorials/programming/exercises/"}]},{name:"GUI",links:[{text:"1. Formatting Text with BBCode",href:"/tutorials/gui/formatting-text-with-bbcode/"},{text:"2. Styling",href:"/tutorials/gui/styling/"},{text:"3. Layouts",href:"/tutorials/gui/layouts/"},{text:"5. Paper",href:"/tutorials/gui/paper/"},{text:"6. Dynamically Sized Paper",href:"/tutorials/gui/dynamically-sized-paper/"}]}],examples:[{name:"Apps",links:[{text:"Hello, World!",href:"/examples/apps/hello-world/"},{text:"Book",href:"/examples/apps/book/"},{text:"Contacts",href:"/examples/apps/contacts/"},{text:"Counter",href:"/examples/apps/counter/"},{text:"Glossaries",href:"/examples/apps/glossaries/"},{text:"Personal Website",href:"/examples/apps/personal-website/"},{text:"Power Point Presentation",href:"/examples/apps/power-point-presentation/"},{text:"Multiplication Table",href:"/examples/apps/multiplication-table/"},{text:"Quiz",href:"/examples/apps/quiz/"}]},{name:"GUIs",links:[{text:"Horizontal Scrolling",href:"/examples/guis/horizontal-scrolling/"},{text:"Modal",href:"/examples/guis/modal/"},{text:"Navigation Bar",href:"/examples/guis/navigation-bar/"},{text:"Navigation Drawer",href:"/examples/guis/navigation-drawer/"}]},{name:"Games",links:[{text:"21 Sticks",href:"/examples/games/21-sticks/"},{text:"Tic Tac Toe",href:"/examples/games/tic-tac-toe/"},{text:"Chess",href:"/examples/games/chess/"}]}],documentation:[{name:"Views",links:[{text:"Component",href:"/documentation/component/"},{text:"Button",href:"/documentation/button/"},{text:"EnterNumber",href:"/documentation/enter-number/"},{text:"EnterText",href:"/documentation/enter-text/"},{text:"Html",href:"/documentation/html/"},{text:"Space",href:"/documentation/space/"},{text:"Text",href:"/documentation/text/"},{text:"Updater",href:"/documentation/updater/"}]},{name:"Layouts",links:[{text:"Box",href:"/documentation/box/"},{text:"Columns",href:"/documentation/columns/"},{text:"Layers",href:"/documentation/layers/"},{text:"Paper",href:"/documentation/paper/"},{text:"Rows",href:"/documentation/rows/"}]},{name:"Paper Figures",links:[{text:"PaperFigure",href:"/documentation/paper-figure/"},{text:"PaperCircle",href:"/documentation/paper-circle/"},{text:"PaperLine",href:"/documentation/paper-line/"},{text:"PaperGroup",href:"/documentation/paper-group/"},{text:"PaperRectangle",href:"/documentation/paper-rectangle/"}]},{name:"Classes",links:[{text:"App",href:"/documentation/app/"},{text:"Direction",href:"/documentation/direction/"},{text:"Duration",href:"/documentation/duration/"},{text:"Font",href:"/documentation/font/"},{text:"Page",href:"/documentation/page/"},{text:"Time",href:"/documentation/time/"}]},{name:"Variables",links:[{text:"a",href:"/documentation/a/"},{text:"m",href:"/documentation/m/"},{text:"p",href:"/documentation/p/"},{text:"speaker",href:"/documentation/speaker/"}]},{name:"Functions",links:[{text:"log()",href:"/documentation/log/"},{text:"runUpdater()",href:"/documentation/run-updater/"}]},{name:"Various",links:[{text:"BBCode",href:"/documentation/bbcode/"},{text:"State",href:"/documentation/state/"},{text:"Text Symbols",href:"/documentation/text-symbols/"},{text:"Units",href:"/documentation/units/"}]}],implementation:[{name:"npm packages",links:[{text:"@bagawork/framework",href:"/implementation/framework/"},{text:"@bagawork/editor",href:"/implementation/editor/"}]}],changelog:[]};return o.$$.update=()=>{o.$$.dirty&1&&a(1,t=s[r.url.pathname.split("/")[1]]??[])},[r,t]}class ge extends q{constructor(e){super(),F(this,e,pe,me,z,{})}}function de(o){let e,a,t,r,s,n="Motivation",i,g,c="Glossary";return{c(){e=$("footer"),a=A("Copyright Peter L-G "),t=A(o[0]),r=A(` |
	`),s=$("a"),s.textContent=n,i=A(` |
	`),g=$("a"),g.textContent=c,this.h()},l(f){e=b(f,"FOOTER",{class:!0});var u=k(e);a=D(u,"Copyright Peter L-G "),t=D(u,o[0]),r=D(u,` |
	`),s=b(u,"A",{href:!0,"data-svelte-h":!0}),W(s)!=="svelte-10nr0t7"&&(s.textContent=n),i=D(u,` |
	`),g=b(u,"A",{href:!0,"data-svelte-h":!0}),W(g)!=="svelte-1ftqd2z"&&(g.textContent=c),u.forEach(v),this.h()},h(){x(s,"href","/motivation"),x(g,"href","/glossary"),x(e,"class","svelte-d9hz5y")},m(f,u){T(f,e,u),m(e,a),m(e,t),m(e,r),m(e,s),m(e,i),m(e,g)},p:P,i:P,o:P,d(f){f&&v(e)}}}function xe(o){return[new Date().getFullYear()]}class ve extends q{constructor(e){super(),F(this,e,xe,de,z,{})}}function _e(o){let e,a="<strong>Note</strong>: This is a pre-release of BagaWork. Many things will likely change before the first stable release.";return{c(){e=$("div"),e.innerHTML=a,this.h()},l(t){e=b(t,"DIV",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-1cydixr"&&(e.innerHTML=a),this.h()},h(){x(e,"class","publicAnnouncement danger svelte-1b45vgo")},m(t,r){T(t,e,r)},p:P,i:P,o:P,d(t){t&&v(e)}}}class $e extends q{constructor(e){super(),F(this,e,null,_e,z,{})}}function be(o){let e,a,t,r,s,n,i,g,c,f,u,l,h,d,p;t=new $e({}),n=new ce({}),c=new ge({});const w=o[1].default,C=se(w,o,o[0],null);return d=new ve({}),{c(){e=$("div"),a=$("div"),L(t.$$.fragment),r=I(),s=$("div"),L(n.$$.fragment),i=I(),g=$("aside"),L(c.$$.fragment),f=I(),u=$("main"),C&&C.c(),l=I(),h=$("div"),L(d.$$.fragment),this.h()},l(_){e=b(_,"DIV",{class:!0});var E=k(e);a=b(E,"DIV",{class:!0});var R=k(a);M(t.$$.fragment,R),R.forEach(v),r=S(E),s=b(E,"DIV",{class:!0});var O=k(s);M(n.$$.fragment,O),O.forEach(v),i=S(E),g=b(E,"ASIDE",{class:!0});var j=k(g);M(c.$$.fragment,j),j.forEach(v),f=S(E),u=b(E,"MAIN",{class:!0});var Q=k(u);C&&C.l(Q),Q.forEach(v),l=S(E),h=b(E,"DIV",{class:!0});var Y=k(h);M(d.$$.fragment,Y),Y.forEach(v),E.forEach(v),this.h()},h(){x(a,"class","publicAnnouncement svelte-e9cs16"),x(s,"class","nav svelte-e9cs16"),x(g,"class","svelte-e9cs16"),x(u,"class","svelte-e9cs16"),x(h,"class","footer svelte-e9cs16"),x(e,"class","layout svelte-e9cs16")},m(_,E){T(_,e,E),m(e,a),N(t,a,null),m(e,r),m(e,s),N(n,s,null),m(e,i),m(e,g),N(c,g,null),m(e,f),m(e,u),C&&C.m(u,null),m(e,l),m(e,h),N(d,h,null),p=!0},p(_,[E]){C&&C.p&&(!p||E&1)&&oe(C,w,_,_[0],p?ie(w,_[0],E,null):le(_[0]),null)},i(_){p||(B(t.$$.fragment,_),B(n.$$.fragment,_),B(c.$$.fragment,_),B(C,_),B(d.$$.fragment,_),p=!0)},o(_){G(t.$$.fragment,_),G(n.$$.fragment,_),G(c.$$.fragment,_),G(C,_),G(d.$$.fragment,_),p=!1},d(_){_&&v(e),U(t),U(n),U(c),C&&C.d(_),U(d)}}}function Ce(o,e,a){let{$$slots:t={},$$scope:r}=e;return o.$$set=s=>{"$$scope"in s&&a(0,r=s.$$scope)},[r,t]}class Ie extends q{constructor(e){super(),F(this,e,Ce,be,z,{})}}export{Ie as component};
