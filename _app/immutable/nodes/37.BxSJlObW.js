import{s as M,n as O}from"../chunks/scheduler.DFPFbGJz.js";import{S as V,i as D,e as i,s as z,c as F,H as R,a as r,g as x,b as q,d as _,f as Q,n as A,h as p,o as k,j as m,m as T,p as v,t as j,k as B,l as H}from"../chunks/index.CzDE4dZi.js";import{V as $}from"../chunks/ViewApp.C2MU7-ZI.js";function W(E){let a,w="Counter",f,o,y="This example shows how to create an app with a counter.",d,t,c,e,P="Open in Online Editor",u,g,I=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	counter <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> CounterPage
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">incrementCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>counter <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">decrementCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>counter <span class="token operator">-=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">resetCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>counter <span class="token operator">=</span> <span class="token number">0</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,l,h,J=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">CounterPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>counter<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Rows<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">-</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>decrementCounter<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Reset</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>resetCounter<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">+</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>incrementCounter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,C;return c=new $({props:{project:{app:{code:`class MyApp extends App{
	
	counter = 0
	
	createStartPage(){
		return CounterPage
	}
	
	incrementCounter(){
		a.counter += 1
	}
	
	decrementCounter(){
		a.counter -= 1
	}
	
	resetCounter(){
		a.counter = 0
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class CounterPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`\${a.counter}\`).size(1),
			Columns.size(1).children(
				Rows.size(1).children(
					Button.text(\`-\`).size(1).handler(a.decrementCounter),
					Button.text(\`Reset\`).size(1).handler(a.resetCounter),
				),
				Button.text(\`+\`).size(1).handler(a.incrementCounter),
			),
		)
	}
}`,x:100,y:300}],pageTemplates:[]}}}),{c(){a=i("h1"),a.textContent=w,f=z(),o=i("p"),o.textContent=y,d=z(),t=i("div"),F(c.$$.fragment),e=i("a"),e.textContent=P,u=i("pre"),g=new R(!1),l=i("pre"),h=new R(!1),this.h()},l(n){a=r(n,"H1",{"data-svelte-h":!0}),x(a)!=="svelte-fsgdh2"&&(a.textContent=w),f=q(n),o=r(n,"P",{"data-svelte-h":!0}),x(o)!=="svelte-1ty70j8"&&(o.textContent=y),d=q(n),t=r(n,"DIV",{});var s=_(t);Q(c.$$.fragment,s),e=r(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),x(e)!=="svelte-1nsa809"&&(e.textContent=P),u=r(s,"PRE",{class:!0});var b=_(u);g=A(b,!1),b.forEach(p),l=r(s,"PRE",{class:!0});var S=_(l);h=A(S,!1),S.forEach(p),s.forEach(p),this.h()},h(){k(e,"target","_blank"),k(e,"href","/editor#eNqFUk1rg0AQ/Ssy9KDEiKE3IYcmh9JDoaQ5tNRAFnfSCLrK7kiTyv73rvHbhPSgzM7Me7Pz3pbA8hyCEqKMIwQQJUwp6/X8lOcWnggFV5aJy1CEVH1RVghCaS0tv0tJZITvxCS9sW+0nbqZJFIhhbWuEVWpyusWFgsDTFFQ09DhmNcOmS2txQjD8V/MfIqRqPBOf7NI065Bu3DIEo5SQfBVQswhWLggWFqpc1kSXMgOB0P6AYHfxp8m1jsXcrPmCFmTvdSHkcgDYTqpq0PZi/pcxFM5N9mP8qJjnHCJwq5LIW0NgUfmZ+8fym45vXc8Ff+ivXDctnOdJUUqVJu/pgrpMuJOPaRVQZSJZuC8n+IdmeCJ0Zl5U6v6G1wRbCqHbpIMvRsSDOMR1ewmzfSp9fA2cpo3oI25J2OVb4w9Q/Dod6ZuMc0TY0ll7k7/AQfvKCA="),k(e,"title","Open in our Online Editor"),g.a=null,k(u,"class","language-js"),h.a=null,k(l,"class","language-js")},m(n,s){m(n,a,s),m(n,f,s),m(n,o,s),m(n,d,s),m(n,t,s),T(c,t,null),v(t,e),v(t,u),g.m(I,u),v(t,l),h.m(J,l),C=!0},p:O,i(n){C||(j(c.$$.fragment,n),C=!0)},o(n){B(c.$$.fragment,n),C=!1},d(n){n&&(p(a),p(f),p(o),p(d),p(t)),H(c)}}}class X extends V{constructor(a){super(),D(this,a,null,W,M,{})}}export{X as component};
