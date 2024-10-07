import{s as $,n as q}from"../chunks/scheduler.B0TnBjPs.js";import{S as F,i as L,e as i,s as A,c as M,H as b,a as u,g as _,b as E,d as v,f as W,n as H,h as p,o as d,j as m,m as D,p as w,t as N,k as U,l as Y}from"../chunks/index.CHfggXAQ.js";import{V as Z}from"../chunks/ViewApp.6tllL5xD.js";function z(S){let a,P="Hello, World!",k,o,y="This example shows how to create the simplest possible <em>Hello, World!</em> app. The app consists of a single page the user can&#39;t leave, so not such a fun app ^^&#39;",f,n,l,s,j="Open in Online Editor",c,g,Q=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,r,h,V=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, World!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,x;return l=new Z({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:195,offsetY:40}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.text(\`Hello, World!\`)
	}
}`,x:1,y:208}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),{c(){a=i("h1"),a.textContent=P,k=A(),o=i("p"),o.innerHTML=y,f=A(),n=i("div"),M(l.$$.fragment),s=i("a"),s.textContent=j,c=i("pre"),g=new b(!1),r=i("pre"),h=new b(!1),this.h()},l(t){a=u(t,"H1",{"data-svelte-h":!0}),_(a)!=="svelte-1nfm8af"&&(a.textContent=P),k=E(t),o=u(t,"P",{"data-svelte-h":!0}),_(o)!=="svelte-erujcc"&&(o.innerHTML=y),f=E(t),n=u(t,"DIV",{});var e=v(n);W(l.$$.fragment,e),s=u(e,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),_(s)!=="svelte-nbn11g"&&(s.textContent=j),c=u(e,"PRE",{class:!0});var C=v(c);g=H(C,!1),C.forEach(p),r=u(e,"PRE",{class:!0});var T=v(r);h=H(T,!1),T.forEach(p),e.forEach(p),this.h()},h(){d(s,"target","_blank"),d(s,"href","/editor#eNqdj0+LwjAQxb9KnJNCEFcU1tx6cj0sCAq6bAVDMxXZmIRkCkrJd9+0YrEevQx58+e9X2qQzoGoobAKQUChZQjs+5Y5x/BKaFRg6V3nJqfCoyTckPS0liccjtpuTh6p8oZ1g6YbcxMhciitVugDiN8azgrEBwcjL01Suw4cbFkGpH0aLeYP9QNiNokHDi7Z9Y7vfqu76DF38R13I57Al9X5FXmbVseUyvD4hVpbznbWazU4jro/cLi2WTcQ08nng2mLF6eTZ4+th5OFv1WZqUrTezxPCPEQ/wEUe5MN"),d(s,"title","Open in our Online Editor"),g.a=null,d(c,"class","language-js"),h.a=null,d(r,"class","language-js")},m(t,e){m(t,a,e),m(t,k,e),m(t,o,e),m(t,f,e),m(t,n,e),D(l,n,null),w(n,s),w(n,c),g.m(Q,c),w(n,r),h.m(V,r),x=!0},p:q,i(t){x||(N(l.$$.fragment,t),x=!0)},o(t){U(l.$$.fragment,t),x=!1},d(t){t&&(p(a),p(k),p(o),p(f),p(n)),Y(l)}}}class R extends F{constructor(a){super(),L(this,a,null,z,$,{})}}export{R as component};
