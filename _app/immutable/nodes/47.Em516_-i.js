import{s as H,n as O}from"../chunks/scheduler.B0TnBjPs.js";import{S as Q,i as R,e as i,s as y,c as T,H as D,a as r,g as x,b as E,d as _,f as V,n as G,h as e,o as k,j as m,m as $,p as w,t as I,k as N,l as M}from"../chunks/index.Cnh3HYw3.js";import{V as U}from"../chunks/ViewApp.BajIxHdc.js";function Y(S){let t,z="Counter",d,o,P="This example shows how to create an app with a counter.",f,a,c,p,b="Open in Online Editor",u,g,j=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,l,C,q=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">CounterPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,h;return c=new U({props:{project:{app:{code:`class MyApp extends App{
	
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
}`,x:100,y:300}]}}}),{c(){t=i("h1"),t.textContent=z,d=y(),o=i("p"),o.textContent=P,f=y(),a=i("div"),T(c.$$.fragment),p=i("a"),p.textContent=b,u=i("pre"),g=new D(!1),l=i("pre"),C=new D(!1),this.h()},l(n){t=r(n,"H1",{"data-svelte-h":!0}),x(t)!=="svelte-fsgdh2"&&(t.textContent=z),d=E(n),o=r(n,"P",{"data-svelte-h":!0}),x(o)!=="svelte-1ty70j8"&&(o.textContent=P),f=E(n),a=r(n,"DIV",{});var s=_(a);V(c.$$.fragment,s),p=r(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),x(p)!=="svelte-wwdju5"&&(p.textContent=b),u=r(s,"PRE",{class:!0});var v=_(u);g=G(v,!1),v.forEach(e),l=r(s,"PRE",{class:!0});var B=_(l);C=G(B,!1),B.forEach(e),s.forEach(e),this.h()},h(){k(p,"target","_blank"),k(p,"href","/editor#eNqFUk1rwzAM/StG7JDQNKTsFuhh7WHsMBjdDhvLoCZRt7DUDrbC2gX/9znNd1q6Q4Is6T1Z77kEnucQlhDLBCGEOONas8fjXZ4zPBCKRDMbl5GIqPpiWQhCxZYs6FIKOeEzcUVP/BMdt24mhVQowdY1oipVedPCUmGBexTUNHQ47rdDZku2GGES/Bczn2IUarzS3yzStBswHuxklqDSEL6XkCYQLjwQfF+pc1oSPJC7nSV9hTBo4zcbmw8PcrvmCFmTPdSHkcgDYTqpq0PZi3pfpFM5N/JH+/FXmiUKhVOXInqxBD7Zn7O9KbvlzNb1dfqLzsL12s61zIq90G3+nCqi04gr9YhWBZEUzcB5P8WXYp2l8bfD/alV/Q3OCDaVQxdJht4NCYbxiGp2kWb61Hp4G7nNGzDW3IO1KrDGHiG8Dayp5g8hMiEh"),k(p,"title","Open in our Online Editor"),g.a=null,k(u,"class","language-js"),C.a=null,k(l,"class","language-js")},m(n,s){m(n,t,s),m(n,d,s),m(n,o,s),m(n,f,s),m(n,a,s),$(c,a,null),w(a,p),w(a,u),g.m(j,u),w(a,l),C.m(q,l),h=!0},p:O,i(n){h||(I(c.$$.fragment,n),h=!0)},o(n){N(c.$$.fragment,n),h=!1},d(n){n&&(e(t),e(d),e(o),e(f),e(a)),M(c)}}}class X extends Q{constructor(t){super(),R(this,t,null,Y,H,{})}}export{X as component};
