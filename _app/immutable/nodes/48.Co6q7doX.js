import{s as A,n as H}from"../chunks/scheduler.B0TnBjPs.js";import{S as V,i as Z,e as i,s as j,c as F,H as E,a as r,g as w,b as S,d as x,f as I,n as D,h as e,o as k,j as m,m as N,p as _,t as $,k as G,l as M}from"../chunks/index.BXVnRmkj.js";import{V as T}from"../chunks/ViewApp.qg7AIhJt.js";function z(B){let t,v="Counter",g,o,P="This example shows how to create an app with a counter.",f,a,c,p,y="Open in Online Editor",u,d,J=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,l,C,O=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">CounterPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>counter<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Rows<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">-</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>decrementCounter<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Reset</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>resetCounter<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">+</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>incrementCounter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,h;return c=new T({props:{project:{app:{code:`class MyApp extends App{
	
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
			Text.text(\`\${a.counter}\`).grow(1),
			Columns.grow(1).children(
				Rows.grow(1).children(
					Button.text(\`-\`).grow(1).onClick(a.decrementCounter),
					Button.text(\`Reset\`).grow(1).onClick(a.resetCounter),
				),
				Button.text(\`+\`).grow(1).onClick(a.incrementCounter),
			),
		)
	}
}`,x:100,y:300}]}}}),{c(){t=i("h1"),t.textContent=v,g=j(),o=i("p"),o.textContent=P,f=j(),a=i("div"),F(c.$$.fragment),p=i("a"),p.textContent=y,u=i("pre"),d=new E(!1),l=i("pre"),C=new E(!1),this.h()},l(n){t=r(n,"H1",{"data-svelte-h":!0}),w(t)!=="svelte-fsgdh2"&&(t.textContent=v),g=S(n),o=r(n,"P",{"data-svelte-h":!0}),w(o)!=="svelte-1ty70j8"&&(o.textContent=P),f=S(n),a=r(n,"DIV",{});var s=x(a);I(c.$$.fragment,s),p=r(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),w(p)!=="svelte-avdmbf"&&(p.textContent=y),u=r(s,"PRE",{class:!0});var R=x(u);d=D(R,!1),R.forEach(e),l=r(s,"PRE",{class:!0});var b=x(l);C=D(b,!1),b.forEach(e),s.forEach(e),this.h()},h(){k(p,"target","_blank"),k(p,"href","/editor#eNqFUk1rwzAM/StG7JDQNKTsFuhh62HsMBjdDhvLoCZRu7DUDrZCW4L/+5zmOy3dIUGW9J6s91wCz3MIS4hlghBCnHGt2cvpIc8ZHglFopmNy0hEVH2xLAShYksWdCmFnPCNuKJXvkPHrZtJIRVKsFWNqEpV3rSwVFjgHgU1DR2O++2Q2ZItRpgE/8XMpxiFGm/0N4s07QaMB1uZJag0hF8lpAmECw8E31fqnJcED+R2a0k/IAza+NPG5tuD3K45QtZkz/VhJPJAmE7q6lD2oj4V6VTOtTxoP/5Js0ShcOpSRO+WwCf7czZ3Zbec2bj+TsmDs3C9tnMls2IvdJu/pIroPOJGPaLHgkiKZuC8n+JLscrS+Nfh/tSq/gYXBOvKoaskQ++GBMN4RDW7SjN9aj28jdzmDRhr7tFaFVhjTxDeB9ZU8wc1OCE5"),k(p,"title","Open in our Online Editor"),d.a=null,k(u,"class","language-js"),C.a=null,k(l,"class","language-js")},m(n,s){m(n,t,s),m(n,g,s),m(n,o,s),m(n,f,s),m(n,a,s),N(c,a,null),_(a,p),_(a,u),d.m(J,u),_(a,l),C.m(O,l),h=!0},p:H,i(n){h||($(c.$$.fragment,n),h=!0)},o(n){G(c.$$.fragment,n),h=!1},d(n){n&&(e(t),e(g),e(o),e(f),e(a)),M(c)}}}class L extends V{constructor(t){super(),Z(this,t,null,z,A,{})}}export{L as component};
