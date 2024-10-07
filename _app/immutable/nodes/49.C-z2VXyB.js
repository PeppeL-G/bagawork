import{s as V,n as F}from"../chunks/scheduler.B0TnBjPs.js";import{S as W,i as H,e as u,s as C,c as K,H as B,a as l,g as I,b as G,d as T,f as Q,n as P,h as e,o as f,j as d,m as Y,p as y,t as M,k as Z,l as D}from"../chunks/index.CHfggXAQ.js";import{V as L}from"../chunks/ViewApp.6tllL5xD.js";function X(R){let a,_="Power Point Presentation",m,o,v="This example shows how to create an app that functions as a Power Point Presentation (shows more and more content on each slide as you progress).",g,s,c,p,b="Open in Online Editor",i,x,j=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Slide1
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,k,h,q=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Slide1</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,r,S,O=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Slide2</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,w;return c=new L({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`,x:532,y:298}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`).page(null),
				Space,
				Button.text(\`Yes\`).page(null),
				Space,
			),
		)
	}
	
	onAfter(){
		
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`).page(null),
			Button.text(\`15\`).page(null),
			Button.text(\`20\`).page(null),
			Button.text(\`25\`).page(null),
			Space,
		)
	}
	
	onAfter(){
		
	}
	
}`}]}}}),{c(){a=u("h1"),a.textContent=_,m=C(),o=u("p"),o.textContent=v,g=C(),s=u("div"),K(c.$$.fragment),p=u("a"),p.textContent=b,i=u("pre"),x=new B(!1),k=u("pre"),h=new B(!1),r=u("pre"),S=new B(!1),this.h()},l(n){a=l(n,"H1",{"data-svelte-h":!0}),I(a)!=="svelte-m2ytal"&&(a.textContent=_),m=G(n),o=l(n,"P",{"data-svelte-h":!0}),I(o)!=="svelte-1un89gr"&&(o.textContent=v),g=G(n),s=l(n,"DIV",{});var t=T(s);Q(c.$$.fragment,t),p=l(t,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),I(p)!=="svelte-pizk93"&&(p.textContent=b),i=l(t,"PRE",{class:!0});var A=T(i);x=P(A,!1),A.forEach(e),k=l(t,"PRE",{class:!0});var E=T(k);h=P(E,!1),E.forEach(e),r=l(t,"PRE",{class:!0});var N=T(r);S=P(N,!1),N.forEach(e),t.forEach(e),this.h()},h(){f(p,"target","_blank"),f(p,"href","/editor#eNrNlFGPmkAQx7/KdF8KKSWIZ3KSmgs2TetDm8tp0rvUS9zIoMR1l7JL7ozha/UL9It1kUNFoYdP7YNkhZn//Gd+k90SGsfE25K5CJB4ZM6olPB148cx4LNCHkjQ5+2UT1X+mydIFY4VTdQtXaBhFl9UgipNOIxZFGAnf5UVGRnJLBIKFmAiifdjS6KAeB2LcLrOy+2EiEVEGEpU98RzyvODPmePFol1lUpmITYq/lRcF8X3tnN/B98i5QoTGIBTvhJ8iKFIDj3Edhn1bgDHTZRtf06j04bvxJO0YxoEEV8YPdOeLyMWJMiNImqqJtqOrfTDmH1BxsSbmWmV38YxnaNVEwnvYQR0Dbeo3cxMm2GoDNOWS/E0Cg0XPgxgb9ZsEBgKba/T7ztn+d1W+Xc0khhAxGFIE1wLKX//OpO6apCqdjZMlZ72i/Q3/dQ6OVejIGbaK8RYqx0AaNWu2TLf3edfwaDGjVlZR4s8E8919J5tiNd1nMwqNqv76ma5/9lmNW7PZEn5CjYiBW0CWCS1ay3SavN8voGfKUoVCS5vZq/u3CWg3b3aEWhw/8Kp13V3nNz+dXkXTHAdMz2xyp1QgeXL1Sj0g5Ttbqh6aGeELmDSHoSf4A7Dbq9AaSzQub5pxPBRsHTNawqcBp4OWpRj5iljptUy7QFlu7w6QPkI/VATrJtgfukXbNwTNp9y6P4C/zWZ70uq3socTgK6ejOTysQ6Tv3AqkG9FkFuGyW3QenY4SVMHrM/FvHVIA=="),f(p,"title","Open in our Online Editor"),x.a=null,f(i,"class","language-js"),h.a=null,f(k,"class","language-js"),S.a=null,f(r,"class","language-js")},m(n,t){d(n,a,t),d(n,m,t),d(n,o,t),d(n,g,t),d(n,s,t),Y(c,s,null),y(s,p),y(s,i),x.m(j,i),y(s,k),h.m(q,k),y(s,r),S.m(O,r),w=!0},p:F,i(n){w||(M(c.$$.fragment,n),w=!0)},o(n){Z(c.$$.fragment,n),w=!1},d(n){n&&(e(a),e(m),e(o),e(g),e(s)),D(c)}}}class $ extends W{constructor(a){super(),H(this,a,null,X,V,{})}}export{$ as component};
