import{s as O,n as V}from"../chunks/scheduler.B0TnBjPs.js";import{S as A,i as H,e as i,s as R,c as U,H as B,a as k,g as x,b as E,d as _,f as $,n as G,h as e,o as r,j as m,m as D,p as w,t as T,k as M,l as Z}from"../chunks/index.CHfggXAQ.js";import{V as F}from"../chunks/ViewApp.6tllL5xD.js";function Q(S){let t,b="Counter",f,o,v="This example shows how to create an app with a counter.",d,a,c,p,y="Open in Online Editor",u,g,j=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,l,C,I=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">CounterPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>counter<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Rows<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">-</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>decrementCounter<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Reset</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>resetCounter<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">+</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>incrementCounter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,h;return c=new F({props:{project:{app:{code:`class MyApp extends App{
	
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
					Button.text(\`-\`).size(1).onClick(a.decrementCounter),
					Button.text(\`Reset\`).size(1).onClick(a.resetCounter),
				),
				Button.text(\`+\`).size(1).onClick(a.incrementCounter),
			),
		)
	}
}`,x:100,y:300}],pageTemplates:[]}}}),{c(){t=i("h1"),t.textContent=b,f=R(),o=i("p"),o.textContent=v,d=R(),a=i("div"),U(c.$$.fragment),p=i("a"),p.textContent=y,u=i("pre"),g=new B(!1),l=i("pre"),C=new B(!1),this.h()},l(n){t=k(n,"H1",{"data-svelte-h":!0}),x(t)!=="svelte-fsgdh2"&&(t.textContent=b),f=E(n),o=k(n,"P",{"data-svelte-h":!0}),x(o)!=="svelte-1ty70j8"&&(o.textContent=v),d=E(n),a=k(n,"DIV",{});var s=_(a);$(c.$$.fragment,s),p=k(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),x(p)!=="svelte-kapooh"&&(p.textContent=y),u=k(s,"PRE",{class:!0});var z=_(u);g=G(z,!1),z.forEach(e),l=k(s,"PRE",{class:!0});var P=_(l);C=G(P,!1),P.forEach(e),s.forEach(e),this.h()},h(){r(p,"target","_blank"),r(p,"href","/editor#eNqFUk1rg0AQ/Ssy9KDEiKE3IYcmh9JDoaQ5tNRAFp20Ut2V3ZEmlf3vXeO3CelBmZ2Z92bnvS2B5TkEJUQiRgggSplS1vPpIc8tPBLyWFkmLkMeUvVFouCE0lpafpeSyAhfiUl6YZ9oO3UzSaRCcmtdI6pSldctLOEGmCGnpqHDMa8dMltaixEmxn8x8ylGosIb/c0iTbsG7cJBpDFKBcFHCUkMwcIFzrJKnfOS4II4HAzpGwR+G7+bWO9cyM2aI2RN9lQfRiIPhOmkrg5lL+pjkUzl3Igf5UVfSRpL5HZdCmlrCDwyP3t/V3bL6b3jqeQX7YXjtp1rkRYZV23+kiqk84gb9ZBWBZHgzcB5P8UTfJ0m0bfNvKlV/Q0uCDaVQ1dJht4NCYbxiGp2lWb61Hp4GznNG9DG3KOxyjfGniC49ztTt5jlqbGkMnen/wDV1ifP"),r(p,"title","Open in our Online Editor"),g.a=null,r(u,"class","language-js"),C.a=null,r(l,"class","language-js")},m(n,s){m(n,t,s),m(n,f,s),m(n,o,s),m(n,d,s),m(n,a,s),D(c,a,null),w(a,p),w(a,u),g.m(j,u),w(a,l),C.m(I,l),h=!0},p:V,i(n){h||(T(c.$$.fragment,n),h=!0)},o(n){M(c.$$.fragment,n),h=!1},d(n){n&&(e(t),e(f),e(o),e(d),e(a)),Z(c)}}}class L extends A{constructor(t){super(),H(this,t,null,Q,O,{})}}export{L as component};
