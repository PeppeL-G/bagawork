import{s as z,n as O}from"../chunks/scheduler.B0TnBjPs.js";import{S as D,i as G,e as p,s as h,H as K,a as o,g as u,b as x,d as R,n as X,h as s,o as m,j as a,p as M}from"../chunks/index.BXVnRmkj.js";import"../chunks/index.Gu5gcrKE.js";/* empty css                                                      *//* empty css                                                      */function Z(V){let l,b="<code>log()</code>",_,r,T="On this page you find the documentation for the function <code>log()</code>.",C,k,E="Introduction",w,g,j="The <code>log()</code> function can be useful during development. Using it, you can log various values in your app while it is running, which can help you debug errors in it.",y,c,P='<div class="remark-container__title">Only useful in the editor!</div><p>You can only view the logged values in our <a target="_blank" href="/editor" title="Open our Online Editor">Online Editor</a>. If your app logs values when it is running on a user&#39;s device, those values will not be shown/stored anywhere.</p>',H,e,d,q="Example",v,I="You have to run the app in the editor to be able to see the logged messages in the <em>Log</em> panel there.",i,S="Open in Online Editor",f,L,A=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	clickCounter <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">onBefore() is now executing!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">createGui() is now executing!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>clickCounter<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>incrementCounter<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">incrementCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Click on counter button!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		
		<span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
		
		p<span class="token punctuation">.</span>clickCounter <span class="token operator">+=</span> <span class="token number">1</span>
		
		<span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
	
<span class="token punctuation">&#125;</span></code>`;return{c(){l=p("h1"),l.innerHTML=b,_=h(),r=p("p"),r.innerHTML=T,C=h(),k=p("h2"),k.textContent=E,w=h(),g=p("p"),g.innerHTML=j,y=h(),c=p("div"),c.innerHTML=P,H=h(),e=p("div"),d=p("div"),d.textContent=q,v=p("p"),v.innerHTML=I,i=p("a"),i.textContent=S,f=p("pre"),L=new K(!1),this.h()},l(n){l=o(n,"H1",{"data-svelte-h":!0}),u(l)!=="svelte-i55n3c"&&(l.innerHTML=b),_=x(n),r=o(n,"P",{"data-svelte-h":!0}),u(r)!=="svelte-5n8yvb"&&(r.innerHTML=T),C=x(n),k=o(n,"H2",{"data-svelte-h":!0}),u(k)!=="svelte-1ukekoe"&&(k.textContent=E),w=x(n),g=o(n,"P",{"data-svelte-h":!0}),u(g)!=="svelte-1rq8r5e"&&(g.innerHTML=j),y=x(n),c=o(n,"DIV",{class:!0,"data-svelte-h":!0}),u(c)!=="svelte-vfsw4f"&&(c.innerHTML=P),H=x(n),e=o(n,"DIV",{class:!0});var t=R(e);d=o(t,"DIV",{class:!0,"data-svelte-h":!0}),u(d)!=="svelte-1llzxwj"&&(d.textContent=q),v=o(t,"P",{"data-svelte-h":!0}),u(v)!=="svelte-fjqv6i"&&(v.innerHTML=I),i=o(t,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),u(i)!=="svelte-rmdgg9"&&(i.textContent=S),f=o(t,"PRE",{class:!0});var N=R(f);L=X(N,!1),N.forEach(s),t.forEach(s),this.h()},h(){m(c,"class","remark-container warning"),m(d,"class","remark-container__title"),m(i,"target","_blank"),m(i,"href","/editor#eNp9kcFqwzAMhl/FEzskLIR0sEugh7WHscNgsOMySOaowSyzjaOwluB3n52mblLW3axf8q9P0gCV1pAPwFWNkANvq65jL4dHrRnuCWXdMfceClkQN1gRvlFl6LVqMIpHtSCD1BvJQsKrtpAWbALaxR3k7wOIGvJVAjvV1miej8GiafgfGvvg2MN3bwX/2qpeEhq2ZtlJV3KDO2XOOK1qovKsMtExqX6cKfKehGxuynginIzHsZ56ERxmPrPkNaNT/bSGTU+OKSU3RFTeDjqdg9syTpXceiXSqZDO/hslTdmZXaC7rPkLcvRjSjI+redzZLjg86V6oSzZ2N2arf77EJj8bRPYuxM+ZAkcIL/PMvthfwE4l9d+"),m(i,"title","Open in our Online Editor"),L.a=null,m(f,"class","language-js"),m(e,"class","remark-container tip")},m(n,t){a(n,l,t),a(n,_,t),a(n,r,t),a(n,C,t),a(n,k,t),a(n,w,t),a(n,g,t),a(n,y,t),a(n,c,t),a(n,H,t),a(n,e,t),M(e,d),M(e,v),M(e,i),M(e,f),L.m(A,f)},p:O,i:O,o:O,d(n){n&&(s(l),s(_),s(r),s(C),s(k),s(w),s(g),s(y),s(c),s(H),s(e))}}}class Y extends D{constructor(l){super(),G(this,l,null,Z,z,{})}}export{Y as component};
