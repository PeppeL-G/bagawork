import{s as O,n as Y}from"../chunks/scheduler.B0TnBjPs.js";import{S as q,i as G,e as u,s as N,c as L,H as P,a as l,g as R,b as C,d as _,f as M,n as T,h as e,o as f,j as m,m as V,p as y,t as Q,k as F,l as J}from"../chunks/index.BXVnRmkj.js";import{V as W}from"../chunks/ViewApp.qg7AIhJt.js";function $(j){let t,v="Power Point Presentation",d,o,B="This example shows how to create an app that functions as a Power Point Presentation (shows more and more content on each slide as you progress).",g,a,c,p,E="Open in Online Editor",i,x,z=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Slide1
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,k,h,A=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Slide1</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	counter <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>counter <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string"> - I am Peter</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showIf</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string"> - Born 1990</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showIf</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string"> - Raised in Baremossö</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showIf</span><span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Next</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Slide1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>counter <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Next</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Slide2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">==</span> p<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,r,w,U=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Slide2</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	counter <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>counter <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Thank you for listening!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Any questions?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showIf</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Next</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Slide2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showIf</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>counter <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,S;return c=new W({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return Slide1
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class Slide1 extends Page{
	
	counter = 0
	
	onBefore(){
		p.counter += 1
	}
	
	createGui(){
		return Rows.padding(5).children(
			Text.text(\`Hello!\`),
			Space,
			Text.text(\` - I am Peter\`).left().showIf(2 <= p.counter),
			Text.text(\` - Born 1990\`).left().showIf(3 <= p.counter),
			Text.text(\` - Raised in Baremossö\`).left().showIf(4 <= p.counter),
			Space,
			Button.text(\`Next\`).page(Slide1).keepIf(p.counter <= 3),
			Button.text(\`Next\`).page(Slide2).keepIf(4 == p.counter),
		)
	}
	
}`,x:200,y:300},{id:3,folderId:1,code:`class Slide2 extends Page{
	
	counter = 0
	
	onBefore(){
		p.counter += 1
	}
	
	createGui(){
		return Rows.padding(5).children(
			Space,
			Text.text(\`Thank you for listening!\`),
			Space,
			Text.text(\`Any questions?\`).showIf(2 <= p.counter),
			Space,
			Button.text(\`Next\`).page(Slide2).showIf(p.counter < 2),
		)
	}
	
}`,x:532,y:298}]}}}),{c(){t=u("h1"),t.textContent=v,d=N(),o=u("p"),o.textContent=B,g=N(),a=u("div"),L(c.$$.fragment),p=u("a"),p.textContent=E,i=u("pre"),x=new P(!1),k=u("pre"),h=new P(!1),r=u("pre"),w=new P(!1),this.h()},l(n){t=l(n,"H1",{"data-svelte-h":!0}),R(t)!=="svelte-m2ytal"&&(t.textContent=v),d=C(n),o=l(n,"P",{"data-svelte-h":!0}),R(o)!=="svelte-1un89gr"&&(o.textContent=B),g=C(n),a=l(n,"DIV",{});var s=_(a);M(c.$$.fragment,s),p=l(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),R(p)!=="svelte-jby1nm"&&(p.textContent=E),i=l(s,"PRE",{class:!0});var I=_(i);x=T(I,!1),I.forEach(e),k=l(s,"PRE",{class:!0});var b=_(k);h=T(b,!1),b.forEach(e),r=l(s,"PRE",{class:!0});var H=_(r);w=T(H,!1),H.forEach(e),s.forEach(e),this.h()},h(){f(p,"target","_blank"),f(p,"href","/editor#eNrNUstu2zAQ/JXNniRUEWQpAWqhRhBfUh9aBHEOLeIAJsRVTEQmWZJCYhj6rf5Af6xUVNlxEzfuLQcRy8fMzmpmjUxrzNdYKE6YY1Exa+HL6lxroEdHklvw9XomZ679CkPM0dQx4y7ZHQVhd+MMudpImFaC06A9ajpEg02Epao4GYv5zRoFx3wQoWTLtt0TEUaoytKS+4Z50tfffd3cRqh9lx1kRzbpNjuqu+Yb2a2+rW5VS0cGRpD0R0qOqVRmO4OO+1cfRvB8iH7si1r8PfCVerCxZpwLeRechnGxEBU3JIPu1cxdezmx80sw/0xVpY7mYdTfTTUrKHrlJRzDBNgSLsmrmYdxRaULwtgu1MOkDFL4NIKN2HAPwVh5eYPhMHmBzw7CXzFhiYOQMGaGlsraXz9fUJ3sodqdbFw7/7f/UH/1q+dpfQ06x8L4nkh7tq0BnjULD8SnG/wJjF5RE+7EMcJHzNPE52yFeZYkTdQlK3szWek7S9be9FwvmLyHlarBi4BKWK/akxyUvHO5gh81WSeUtGfzNzP3P0anG7ZnRkP6D59Os/TJp3T4sbltfgPSMqFx"),f(p,"title","Open in our Online Editor"),x.a=null,f(i,"class","language-js"),h.a=null,f(k,"class","language-js"),w.a=null,f(r,"class","language-js")},m(n,s){m(n,t,s),m(n,d,s),m(n,o,s),m(n,g,s),m(n,a,s),V(c,a,null),y(a,p),y(a,i),x.m(z,i),y(a,k),h.m(A,k),y(a,r),w.m(U,r),S=!0},p:Y,i(n){S||(Q(c.$$.fragment,n),S=!0)},o(n){F(c.$$.fragment,n),S=!1},d(n){n&&(e(t),e(d),e(o),e(g),e(a)),J(c)}}}class X extends q{constructor(t){super(),G(this,t,null,$,O,{})}}export{X as component};
