import{s as k}from"./scheduler.B0TnBjPs.js";import{S as x,i as y,e as u,s as w,a as v,d as C,g as j,b as A,h,o as f,j as E,p as m,t as I,k as b,c as q,f as H,m as L,l as M}from"./index.BXVnRmkj.js";import{V as S}from"./ViewApp.D5WliJPM.js";import{g as D}from"./get-create-app-code.D0qjuaK3.js";/* empty css                                              */function T(i){let t,a;return t=new S({props:{createAppCode:D(i[0].app,i[0].pages)}}),{c(){q(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,n){L(t,e,n),a=!0},p(e,n){const c={};n&1&&(c.createAppCode=D(e[0].app,e[0].pages)),t.$set(c)},i(e){a||(I(t.$$.fragment,e),a=!0)},o(e){b(t.$$.fragment,e),a=!1},d(e){M(t,e)}}}function z(i){let t,a,e,n="◎︎",c,o,g,l,V="<span>◁</span> <span>○︎</span> <span>□</span>",_,s=T(i);return{c(){t=u("div"),a=u("div"),e=u("div"),e.textContent=n,c=w(),o=u("div"),s&&s.c(),g=w(),l=u("div"),l.innerHTML=V,this.h()},l(r){t=v(r,"DIV",{class:!0});var p=C(t);a=v(p,"DIV",{class:!0});var d=C(a);e=v(d,"DIV",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-3qmnnw"&&(e.textContent=n),c=A(d),o=v(d,"DIV",{class:!0,translate:!0});var $=C(o);s&&s.l($),$.forEach(h),g=A(d),l=v(d,"DIV",{class:!0,"data-svelte-h":!0}),j(l)!=="svelte-1yd6kf5"&&(l.innerHTML=V),d.forEach(h),p.forEach(h),this.h()},h(){f(e,"class","camera"),f(o,"class","screen"),f(o,"translate","no"),f(l,"class","buttons"),f(a,"class","device"),f(t,"class","device-wrapper svelte-1r3wtoi")},m(r,p){E(r,t,p),m(t,a),m(a,e),m(a,c),m(a,o),s&&s.m(o,null),m(a,g),m(a,l),_=!0},p(r,[p]){s.p(r,p)},i(r){_||(I(s),_=!0)},o(r){b(s),_=!1},d(r){r&&h(t),s&&s.d()}}}function B(i,t,a){let{project:e}=t;return i.$$set=n=>{"project"in n&&a(0,e=n.project)},[e]}class O extends x{constructor(t){super(),y(this,t,B,z,k,{project:0})}}export{O as V};
