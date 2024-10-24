import{s as X,n as Y}from"../chunks/scheduler.B0TnBjPs.js";import{S as Z,i as $,e as p,s as J,c as nn,H as w,a as e,g as j,b as K,d as k,f as an,n as P,h as t,o as u,j as S,m as sn,p as r,t as tn,k as pn,l as en}from"../chunks/index.Cnh3HYw3.js";import{V as on}from"../chunks/ViewApp.9sx5twVU.js";function cn(M){let o,G="Book",v,l,A="This example shows how to create an app that functions as a book, where the user can go to different pages in the book by clicking on buttons.",y,s,i,c,z="Open in Online Editor",g,_,V=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> CoverPage
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,m,E,I=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">CoverPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The story about Bagawork</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">by Peppe L-G</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Start Reading</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Page1<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,d,T,Q=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Page1</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Once upon a time, there was a programmer who thought creating small useful apps was too hard for beginners.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">←</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>CoverPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">1</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">→</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Page2<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,f,R,W=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Page2</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">So he created his own little framework that made it easier. He called that framework for Bagawork.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">←</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Page1<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">→</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Page3<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,h,C,D=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Page3</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">And that's the framework you are using now!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">←</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Page2<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">3</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">→</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Page4<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,x,B,L=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Page4</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The end!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Read again</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>CoverPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,b;return i=new on({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return CoverPage
	}
}`},folders:[{id:1,name:"Start",offsetX:72,offsetY:89}],pages:[{id:1,folderId:1,code:`class CoverPage extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`The story about Bagawork\`),
			Text.text(\`by Peppe L-G\`),
			Space,
			Space,
			Columns.children(
				Space,
				Button.text(\`Start Reading\`).page(Page1),
				Space,
			),
			Space,
		)
	}
}`,x:78,y:187},{id:2,folderId:1,code:`class Page1 extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Once upon a time, there was a programmer who thought creating small useful apps was too hard for beginners.\`),
			Space,
			Columns.children(
				Button.text(\`←\`).page(CoverPage),
				Space,
				Text.text(\`1\`),
				Space,
				Button.text(\`→\`).page(Page2),
			),
		)
	}
}`,x:289,y:451},{id:3,folderId:1,code:`class Page3 extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`And that's the framework you are using now!\`),
			Space,
			Columns.children(
				Button.text(\`←\`).page(Page2),
				Space,
				Text.text(\`3\`),
				Space,
				Button.text(\`→\`).page(Page4),
			),
		)
	}
}`,x:808,y:449},{id:4,folderId:1,code:`class Page2 extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`So he created his own little framework that made it easier. He called that framework for Bagawork.\`),
			Space,
			Columns.children(
				Button.text(\`←\`).page(Page1),
				Space,
				Text.text(\`2\`),
				Space,
				Button.text(\`→\`).page(Page3),
			),
		)
	}
}`,x:558,y:451},{id:6,folderId:1,code:`class Page4 extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`The end!\`),
			Space.size(2),
			Columns.children(
				Space,
				Button.text(\`Read again\`).page(CoverPage),
				Space,
			),
			Space,
		)
	}
}`,x:997,y:186}]}}}),{c(){o=p("h1"),o.textContent=G,v=J(),l=p("p"),l.textContent=A,y=J(),s=p("div"),nn(i.$$.fragment),c=p("a"),c.textContent=z,g=p("pre"),_=new w(!1),m=p("pre"),E=new w(!1),d=p("pre"),T=new w(!1),f=p("pre"),R=new w(!1),h=p("pre"),C=new w(!1),x=p("pre"),B=new w(!1),this.h()},l(n){o=e(n,"H1",{"data-svelte-h":!0}),j(o)!=="svelte-119rxel"&&(o.textContent=G),v=K(n),l=e(n,"P",{"data-svelte-h":!0}),j(l)!=="svelte-1wrp8ki"&&(l.textContent=A),y=K(n),s=e(n,"DIV",{});var a=k(s);an(i.$$.fragment,a),c=e(a,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),j(c)!=="svelte-onobdb"&&(c.textContent=z),g=e(a,"PRE",{class:!0});var O=k(g);_=P(O,!1),O.forEach(t),m=e(a,"PRE",{class:!0});var U=k(m);E=P(U,!1),U.forEach(t),d=e(a,"PRE",{class:!0});var F=k(d);T=P(F,!1),F.forEach(t),f=e(a,"PRE",{class:!0});var H=k(f);R=P(H,!1),H.forEach(t),h=e(a,"PRE",{class:!0});var N=k(h);C=P(N,!1),N.forEach(t),x=e(a,"PRE",{class:!0});var q=k(x);B=P(q,!1),q.forEach(t),a.forEach(t),this.h()},h(){u(c,"target","_blank"),u(c,"href","/editor#eNq1lUtvm0AQx7/KdC81EkU1JvHjluSQVmrVKM6hVR3JaxgeKuyi3aXEtbjmXPUj9pN0gdgC4kfquhfE7s7ODP/fDLMiNE3JZEVc7iGZEDemUsLH5UWaAj4oZJ4E/b6asZlyBVKFU0WFuqEB9oxqd6YEqkwwuOLfUZQH5W4xYwUpTOLz2EMhyeTrikQemfRNwmhSRqr8EJNw35eoPpPJ0F4vvpDJaFzcmyTV3lp3a3fv60Ur5U30TdrlopH3dRZ1M77lubTcMIo9gaxXH83UNKUumuvVnXZnKf3oze9CBKm4WAJd8EzBJQ1ozsW3ubHNerGEG0xThA9vrhsWbe/t1RWPs4RtSalrOFOXmVKcPYWqpIRbpF7EgrlhlbL1ys/vG+YuF9szMjbsTPKgkYxMstRaj4aFWTOw9zGoQv6z/g0NPzEXIUs5AwoqStAEFaJAyKnUO6nggaBJggLykOsjngWhgiqcFgJkQuMYMol+FoMuc1ndU5xDSIUHPhewwCBiTBeotRPRHigtCL8ff66l39Tibvlbn9mf7zPsRPnVBGwbz4B2ENqjccXQOeuvGQ4OMRyckuEF8zQaql7LEh74mhiWXQNLngHVMDNZwmI8f3VKBh119uo/OFp/56D+o7d1DznOeK2/c0h/+5T6T3W5Y90U6EEYSeA5gzhSKm7SKBFBQj2ESAFSGaGw4J2+qHsIa4IN67J31r8/69TY+i/EZh+NbXAQ29nZqNs254ewOf939GjPzzrEktEP7DXq/NgRUg4P0EAj9hc/sRfNkPF4+DREzov74g9TCAkp"),u(c,"title","Open in our Online Editor"),_.a=null,u(g,"class","language-js"),E.a=null,u(m,"class","language-js"),T.a=null,u(d,"class","language-js"),R.a=null,u(f,"class","language-js"),C.a=null,u(h,"class","language-js"),B.a=null,u(x,"class","language-js")},m(n,a){S(n,o,a),S(n,v,a),S(n,l,a),S(n,y,a),S(n,s,a),sn(i,s,null),r(s,c),r(s,g),_.m(V,g),r(s,m),E.m(I,m),r(s,d),T.m(Q,d),r(s,f),R.m(W,f),r(s,h),C.m(D,h),r(s,x),B.m(L,x),b=!0},p:Y,i(n){b||(tn(i.$$.fragment,n),b=!0)},o(n){pn(i.$$.fragment,n),b=!1},d(n){n&&(t(o),t(v),t(l),t(y),t(s)),en(i)}}}class rn extends Z{constructor(o){super(),$(this,o,null,cn,X,{})}}export{rn as component};
